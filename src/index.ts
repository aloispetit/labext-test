import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { ISettingRegistry } from '@jupyterlab/settingregistry';

/**
 * Initialization data for the labext-test extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'labext-test:plugin',
  autoStart: true,
  optional: [ISettingRegistry],
  activate: (app: JupyterFrontEnd, settingRegistry: ISettingRegistry | null) => {
    console.log('JupyterLab extension labext-test is activated!');

    if (settingRegistry) {
      settingRegistry
        .load(plugin.id)
        .then(settings => {
          console.log('labext-test settings loaded:', settings.composite);
        })
        .catch(reason => {
          console.error('Failed to load settings for labext-test.', reason);
        });
    }
  }
};

export default plugin;
