import through from 'through2';
import { PluginError } from 'gulp-util';

const PLUGIN_NAME = 'gulp-easy-react';

class EasyReact {
  constructor(options) {
    if (!options.file) {
      throw new PluginError(PLUGIN_NAME, 'Missing incoming file parameter!');
    }
  }

  to(file) {
  }
}

export default EasyReact;
