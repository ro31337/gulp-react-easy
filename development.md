Development notes and guidelines
===

Convert ES6 to ES5:

```
./node_modules/.bin/babel ./src/index.js --out-file ./dist/index.js
```

Run test:

```
./node_modules/.bin/ava ./test/index-test.js --require babel-register
```

or

```
npm test
```

Build before publishing:

```
npm run build
```
