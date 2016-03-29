import through from 'through2';
import { PluginError } from 'gulp-util';

const PLUGIN_NAME = 'gulp-easy-react';

/**
 * Transforms ES6/JSX file(s) to browserified and babelified bundle
 */
class EasyReact {

  /**
   * Creates EasyReact object
   *
   * @param  {object} [options]
   * @param  {string} [options.file] - Single ES6/JSX file
   * @param  {string} [options.files] - Mask for multiple ES6/JSX files
   */
  constructor(options) {
    if (!options.file) {
      throw new PluginError(PLUGIN_NAME, 'Missing incoming file parameter!');
    }
  }

  /**
   * Pipes out browserified, babelified and bundled React.js code
   *
   * @param  {string} file - Output file name
   * @return {object} pipe - Gulp pipe
   */
  to(file) {
  }
}

export default EasyReact;
