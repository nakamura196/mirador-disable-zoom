import * as actions from 'mirador/dist/es/src/state/actions';
import { getWindowConfig } from 'mirador/dist/es/src/state/selectors';
import MiradorDisableZoom from './plugins/MiradorDisableZoom';
import MiradorDisableZoomMenuItem from './plugins/MiradorDisableZoomMenuItem';
import translations from './translations';

export const miradorDisableZoomPlugin = [
  {
    target: 'OpenSeadragonViewer',
    mode: 'add',
    component: MiradorDisableZoom,
    mapStateToProps: (state, { windowId }) => ({
      enabled: getWindowConfig(state, { windowId }).disableZoomEnabled || false,
    }),
    config: {
      translations,
    },
  },
  {
    // target: 'WindowTopBarPluginMenu',
    target: 'WindowTopBarPluginArea',
    component: MiradorDisableZoomMenuItem,
    mode: 'add',
    mapDispatchToProps: {
      updateWindow: actions.updateWindow,
    },
    mapStateToProps: (state, { windowId }) => ({
      enabled: getWindowConfig(state, { windowId }).disableZoomEnabled || false,
    }),
  },
];
