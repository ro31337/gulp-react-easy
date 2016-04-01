import test from 'ava';
import EasyReact from '../src/index.js';

test.cb('Should have methods and constructor defined', t => {
  const easyReact = new EasyReact({
    file: 'dummy.txt'
  });

  t.ok(easyReact);
  t.ok(typeof easyReact.to === 'function');
  t.end();
});

test.cb('Should throw exception if "file" or "files" parameter unspecified', t => {
  const err = 'Missing incoming "file" or "files" parameter!';
  const arr = [{}, {dummy: 123}, undefined];

  for (let options of arr) {
    t.throws(() => { new EasyReact(options); }, err);
  }

  t.end();
});

test.cb('Should throw exception if both "file" and "files" parameters specified', t => {
  const err = 'Only one "file" or "files" parameter is expected!';

  t.throws(() => {
    new EasyReact({file: 'one', files: 'two'});
  }, err);

  t.end();
});

test.cb('Should set opts.entries to either "file" or "files"', t => {
  const easyReact1 = new EasyReact({
    file: 'dummy1.txt'
  });

  const easyReact2 = new EasyReact({
    files: 'dummy2.txt'
  });

  t.ok(easyReact1.opts.entries === 'dummy1.txt');
  t.ok(easyReact2.opts.entries === 'dummy2.txt');
  t.end();
});

test.cb('Should have .jsx extension by default', t => {
  const easyReact = new EasyReact({
    file: 'dummy.txt'
  });

  t.ok(easyReact.opts.extensions[0] === '.jsx');
  t.end();
});

test.cb('Should throw exception if "extensions" is specified, but it\'s not array', t => {
  const err = '"extensions" parameter provided, but array is expected!';

  t.throws(() => {
    new EasyReact({file: 'dummy.txt', extensions: 123});
  }, err);

  t.end();
});

test.cb('Should set opts.extensions to specified value', t => {
  const easyReact = new EasyReact({
    file: 'dummy.txt',
    extensions: ['.js']
  });

  t.ok(easyReact.opts.extensions.length === 1);
  t.ok(easyReact.opts.extensions[0] === '.js');
  t.end();
});

test.cb('Should set opts.extensions to default value', t => {
  const easyReact = new EasyReact({
    file: 'dummy.txt'
  });

  t.ok(easyReact.opts.extensions.length === 1);
  t.ok(easyReact.opts.extensions[0] === '.jsx');
  t.end();
});

test.cb('Should throw exception if "presets" is specified, but it\'s not array', t => {
  const err = '"presets" parameter provided, but array is expected!';

  t.throws(() => {
    new EasyReact({file: 'dummy.txt', presets: 123});
  }, err);

  t.end();
});

test.cb('Should set opts.presets to specified value', t => {
  const easyReact = new EasyReact({
    file: 'dummy.txt',
    presets: ['something-new']
  });

  t.ok(easyReact.opts.presets.length === 1);
  t.ok(easyReact.opts.presets[0] === 'something-new');
  t.end();
});

test.cb('Should set opts.presets to default value', t => {
  const easyReact = new EasyReact({
    file: 'dummy.txt'
  });

  t.ok(easyReact.opts.presets.length === 2);
  t.ok(easyReact.opts.presets[0] === 'es2015');
  t.ok(easyReact.opts.presets[1] === 'react');
  t.end();
});
