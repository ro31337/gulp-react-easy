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
  const arr = [{}, {dummy: 123}, undefined}];

  for (let options of arr) {
    t.throws(() => { new EasyReact(options); }, err);
  }

  t.end();
});
