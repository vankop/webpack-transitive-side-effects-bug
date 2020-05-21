This is a test repo for a possible `webpack` bug. Transitive side effects do not seem to be preserved, at least in some situations.

## Explanation

We set up an `index.js` file that imports a `removeMe` method (from `middle.js`) which, not being used, should be tree-shaken away.

However, `middle.js` imports from `side-effect.js`, through a naked import. `side-effect.js` performs a console log on load, which is a side effect.

Since we mark `side-effect.js` as having a side effect in `package.json`, we would expect the console log to be present in the final output. However, it's tree-shaken away.

## Evaluation

- `npm ci`
- `npm run build`
- Analyse `dist/bundle.js`.

Expectation: `console.log( 'side effect' )` should be present in the output code.
