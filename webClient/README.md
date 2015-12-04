# reactTypescriptSample

from [Thinking in React](https://facebook.github.io/react/docs/thinking-in-react.html)


## set up

```
npm install
./node_modules/tsd/build/cli.js install
```

## in develop (helloWorld)

```
./node_modules/webpack/bin/webpack.js --config ./src/helloWorld/webpack.config_debug.js
```

open `index_debug.html` in browser.

## in Unit test (helloWorld)

```
./node_modules/typescript/bin/tsc -p ./test/helloWorld/
./node_modules/mocha/bin/mocha testBuild/test/helloWorld/utilTest.js --require ./enable-power-assert.js
```

## in Browser test (helloWorld)

in progress

## in production (helloWorld)

```
./node_modules/webpack/bin/webpack.js --config ./src/helloWorld/webpack.config_prod.js
```