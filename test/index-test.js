import test from 'ava';
import ReactEasy from '../src/index.js';

test.cb('Should have methods and constructor defined', t => {
  const reactEasy = new ReactEasy({
    file: 'dummy.txt'
  });

  t.ok(reactEasy);
  t.ok(typeof reactEasy.to === 'function');
  t.end();
});

test.cb('Should throw exception if "file" or "files" parameter unspecified', t => {
  const err = 'Missing incoming "file" or "files" parameter!';
  const arr = [{}, {dummy: 123}, undefined];

  for (let options of arr) {
    t.throws(() => { new ReactEasy(options); }, err);
  }

  t.end();
});

test.cb('Should throw exception if both "file" and "files" parameters specified', t => {
  const err = 'Only one "file" or "files" parameter is expected!';

  t.throws(() => {
    new ReactEasy({file: 'one', files: 'two'});
  }, err);

  t.end();
});

test.cb('Should set opts.entries to either "file" or "files"', t => {
  const reactEasy1 = new ReactEasy({
    file: 'dummy1.txt'
  });

  const reactEasy2 = new ReactEasy({
    files: 'dummy2.txt'
  });

  t.ok(reactEasy1.opts.entries === 'dummy1.txt');
  t.ok(reactEasy2.opts.entries === 'dummy2.txt');
  t.end();
});

test.cb('Should have .jsx extension by default', t => {
  const reactEasy = new ReactEasy({
    file: 'dummy.txt'
  });

  t.ok(reactEasy.opts.extensions[0] === '.jsx');
  t.end();
});

test.cb('Should throw exception if "extensions" is specified, but it\'s not array', t => {
  const err = '"extensions" parameter provided, but array is expected!';

  t.throws(() => {
    new ReactEasy({file: 'dummy.txt', extensions: 123});
  }, err);

  t.end();
});

test.cb('Should set opts.extensions to specified value', t => {
  const reactEasy = new ReactEasy({
    file: 'dummy.txt',
    extensions: ['.js']
  });

  t.ok(reactEasy.opts.extensions.length === 1);
  t.ok(reactEasy.opts.extensions[0] === '.js');
  t.end();
});

test.cb('Should set opts.extensions to default value', t => {
  const reactEasy = new ReactEasy({
    file: 'dummy.txt'
  });

  t.ok(reactEasy.opts.extensions.length === 1);
  t.ok(reactEasy.opts.extensions[0] === '.jsx');
  t.end();
});

test.cb('Should throw exception if "presets" is specified, but it\'s not array', t => {
  const err = '"presets" parameter provided, but array is expected!';

  t.throws(() => {
    new ReactEasy({file: 'dummy.txt', presets: 123});
  }, err);

  t.end();
});

test.cb('Should set opts.presets to specified value', t => {
  const reactEasy = new ReactEasy({
    file: 'dummy.txt',
    presets: ['something-new']
  });

  t.ok(reactEasy.opts.presets.length === 1);
  t.ok(reactEasy.opts.presets[0] === 'something-new');
  t.end();
});

test.cb('Should set opts.presets to default value', t => {
  const reactEasy = new ReactEasy({
    file: 'dummy.txt'
  });

  t.ok(reactEasy.opts.presets.length === 2);
  t.ok(reactEasy.opts.presets[0] === 'es2015');
  t.ok(reactEasy.opts.presets[1] === 'react');
  t.end();
});
