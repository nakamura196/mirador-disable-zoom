import PropTypes from 'prop-types';

const MiradorDisableZoom = ({
  enabled,
  viewer,
}) => {
  const disableZoom = () => {
    if (viewer) {
      // eslint-disable-next-line no-param-reassign
      viewer.zoomPerClick = enabled ? 1.0 : 2;
      // eslint-disable-next-line no-param-reassign
      viewer.zoomPerScroll = enabled ? 1.0 : 1.2;
      // eslint-disable-next-line no-param-reassign
      viewer.zoomPerSecond = enabled ? 1.0 : 2;
    }
  };

  disableZoom(); // Call this function directly without parameters

  return null;
};

MiradorDisableZoom.propTypes = {
  enabled: PropTypes.bool,
  viewer: PropTypes.oneOfType([
    PropTypes.shape({
      zoomPerClick: PropTypes.number,
      zoomPerScroll: PropTypes.number,
      zoomPerSecond: PropTypes.number,
    }),
    PropTypes.null,
  ]),
};

MiradorDisableZoom.defaultProps = {
  enabled: true,
  viewer: null,
};

export default MiradorDisableZoom;
