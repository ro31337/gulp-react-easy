/**
 * @module gulp-react-easy
 */

import { PluginError } from 'gulp-util';
import objectAssign from 'object-assign';
import browserify from 'browserify';
import babelify from 'babelify';
import source from 'vinyl-source-stream';

const PLUGIN_NAME = 'gulp-react-easy';

/**
 * Transforms ES6/JSX file(s) to browserified and babelified bundle
 */
class ReactEasy {

  /**
   * Creates ReactEasy object
   *
   * @param {object} [options]
   * @param {string} [options.file] - Single ES6/JSX file
   * @param {string} [options.files] - Mask for multiple ES6/JSX files
   */
  constructor(options = {}) {
    if (!options.file && !options.files) {
      throw new PluginError(PLUGIN_NAME, 'Missing incoming "file" or "files" parameter!');
    }

    if(options.file && options.files) {
      throw new PluginError(PLUGIN_NAME, 'Only one "file" or "files" parameter is expected!');
    }

    if(options.extensions && !Array.isArray(options.extensions)) {
      throw new PluginError(PLUGIN_NAME, '"extensions" parameter provided, but array is expected!');
    }

    if(options.presets && !Array.isArray(options.presets)) {
      throw new PluginError(PLUGIN_NAME, '"presets" parameter provided, but array is expected!');
    }

    const opts = objectAssign({
      extensions: options.extensions || ['.jsx'],
      presets: options.presets || ['es2015', 'react'],
      entries: options.file || options.files,
      debug: options.debug || false
    }, options);

    this.opts = opts;
  }

  /**
   * Pipes out browserified, babelified and bundled React.js code
   *
   * @param  {string} outFile - Output file name
   * @return {object} pipe - Gulp pipe
   */
  to(outFile) {
    const babelifyConfig = babelify.configure({
      presets: this.opts.presets,
      extensions: this.opts.extensions,
      sourceMaps: this.opts.debug
    });

    return browserify({
        entries: this.opts.entries,
        extensions: this.opts.extensions,
        debug: this.opts.debug
      })
      .transform(babelifyConfig)
      .bundle()
      .pipe(source(outFile));
  }
}

/**
 * Factory method for ReactEasy class
 *
 * @return {object} object - ReactEasy class instance
 */
module.exports = (options = {}) => {
  return new ReactEasy(options);
}
