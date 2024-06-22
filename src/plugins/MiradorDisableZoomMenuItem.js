import React from 'react';
import PropTypes from 'prop-types';
import { MiradorMenuButton } from 'mirador/dist/es/src/components/MiradorMenuButton';

import LockIcon from '@mui/icons-material/Lock';
import LockOpenIcon from '@mui/icons-material/LockOpen';

const MiradorDisableZoomMenuItem = ({
  enabled, t, updateWindow, windowId,
}) => {
  const handleClickOpen = () => {
    updateWindow(windowId, { disableZoomEnabled: !enabled });
  };

  return (
    <MiradorMenuButton
      onClick={handleClickOpen}
      aria-label={enabled ? t('enableZoom') : t('disableZoom')}
      variant="contained"
      color={enabled ? 'primary' : 'default'}
    >
      {enabled ? <LockIcon /> : <LockOpenIcon />}

    </MiradorMenuButton>

  );
};

MiradorDisableZoomMenuItem.propTypes = {
  enabled: PropTypes.bool,
  t: PropTypes.func.isRequired,
  updateWindow: PropTypes.func.isRequired,
  windowId: PropTypes.string.isRequired,
};

MiradorDisableZoomMenuItem.defaultProps = {
  enabled: true,
};

export default MiradorDisableZoomMenuItem;
