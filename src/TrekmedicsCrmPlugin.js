import { FlexPlugin } from 'flex-plugin';
import React from 'react';
import CustomTaskListComponent from './CustomTaskListComponent';

const PLUGIN_NAME = 'TrekmedicsCrmPlugin';

export default class TrekmedicsCrmPlugin extends FlexPlugin {
  constructor() {
    super(PLUGIN_NAME);
  }

  /**
   * This code is run when your plugin is being started
   * Use this to modify any UI components or attach to the actions framework
   *
   * @param flex { typeof import('@twilio/flex-ui') }
   * @param manager { import('@twilio/flex-ui').Manager }
   */
  init(flex, manager) {

    flex.AgentDesktopView.defaultProps.splitterOptions = {
      minimumSecondPanelSize: '75%',
    }

    flex.CRMContainer.defaultProps.uriCallback = (task) => {
      return task ? "https://beacon.trekmedics.org/#/newIncident" : "https://beacon.trekmedics.org/#/dashboard";
    }
  }
}
