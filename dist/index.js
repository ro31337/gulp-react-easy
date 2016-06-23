'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @module gulp-react-easy
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

var _gulpUtil = require('gulp-util');

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _browserify = require('browserify');

var _browserify2 = _interopRequireDefault(_browserify);

var _babelify = require('babelify');

var _babelify2 = _interopRequireDefault(_babelify);

var _vinylSourceStream = require('vinyl-source-stream');

var _vinylSourceStream2 = _interopRequireDefault(_vinylSourceStream);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PLUGIN_NAME = 'gulp-react-easy';

/**
 * Transforms ES6/JSX file(s) to browserified and babelified bundle
 */

var ReactEasy = function () {

  /**
   * Creates ReactEasy object
   *
   * @param {object} [options]
   * @param {string} [options.file] - Single ES6/JSX file
   * @param {string} [options.files] - Mask for multiple ES6/JSX files
   */

  function ReactEasy() {
    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    _classCallCheck(this, ReactEasy);

    if (!options.file && !options.files) {
      throw new _gulpUtil.PluginError(PLUGIN_NAME, 'Missing incoming "file" or "files" parameter!');
    }

    if (options.file && options.files) {
      throw new _gulpUtil.PluginError(PLUGIN_NAME, 'Only one "file" or "files" parameter is expected!');
    }

    if (options.extensions && !Array.isArray(options.extensions)) {
      throw new _gulpUtil.PluginError(PLUGIN_NAME, '"extensions" parameter provided, but array is expected!');
    }

    if (options.presets && !Array.isArray(options.presets)) {
      throw new _gulpUtil.PluginError(PLUGIN_NAME, '"presets" parameter provided, but array is expected!');
    }

    var opts = (0, _objectAssign2.default)({
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


  _createClass(ReactEasy, [{
    key: 'to',
    value: function to(outFile) {
      var babelifyConfig = _babelify2.default.configure({
        presets: this.opts.presets,
        extensions: this.opts.extensions,
        sourceMaps: this.opts.debug
      });

      return (0, _browserify2.default)({
        entries: this.opts.entries,
        extensions: this.opts.extensions,
        debug: this.opts.debug
      }).transform(babelifyConfig).bundle().pipe((0, _vinylSourceStream2.default)(outFile));
    }
  }]);

  return ReactEasy;
}();

/**
 * Factory method for ReactEasy class
 *
 * @return {object} object - ReactEasy class instance
 */


module.exports = function () {
  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  return new ReactEasy(options);
};
