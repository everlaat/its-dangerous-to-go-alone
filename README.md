# It's dangerous to go alone
Another React Boilerplate

![its-dangerous-to-go-alone](its-dangerous-to-go-alone.gif)

## TODO
- [ ] A lot
- [x] Webpack 3
- [x] React
- [x] Scss
- [x] Eslint with Airbnb preset
- [x] Jest
- [ ] Redux
- [ ] Redux Initial Setup with Helpers
- [ ] Router?
- [ ] Asset loader
- [ ] Production configuration
- [ ] Resolve resolve

## Development

### install
Run `yarn install`.

### dev
Run `yarn run dev` to startup a local dev server (default 0.0.0.0:3000).

### dev:nodashboard
Run `yarn run dev:nodashboard` to startup a local dev server without using webpack-dashboard.


## Configuration
Webpack configuration options can be found in `./config/webpack/configuration.js`.

## Webpack Loaders
You can add new loader configurations to `./config/webpack/loaders`.
Use the filename of the loader to let webpack know what extensions the loader should apply to
example:
- `sass_scss.js` describes what to do with `.sass` and `.scss` files.
- `js.js` describes what to do with `.js` files.

You can overwrite this behaviour in the webpack configuration file.
