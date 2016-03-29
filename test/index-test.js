import test from 'ava';
import EasyReact from '../src/index.js';

test.cb('Should have methods and constructor defined', t => {
  var easyReact = new EasyReact({
    file: 'dummy.txt'
  });

  t.ok(easyReact);
  t.ok(typeof easyReact.to === 'function')
  t.end();
});
