# pepper-doc
REST API Documentation Platform, built on Angular 2

#####Project Keywords: `Angular 2` `TypeScript` `webpack`

## Project Setup

`pepper-doc` is a typical `nodeJS` application (with webpack module bundler) we assumed that you're familiarized with this technologies, otherwise there are useful link [nodeJS](https://nodejs.org/en/)

> For OSX Users, we suggest install nodeJS through Homebrew

With an `nodeJS` environment installed, use this commands to run `pepper-doc`

  ```bash
    git clone https://github.com/lexmartinez/pepper-doc.git
    cd pepper-doc
    npm install
    npm run build
    webpack-dev-server
  ```
And voil&#224; `pepper-doc` now should be running on [http://localhost:8080/](http://localhost:8080/)

> In order to fix dependency bug `'error TS2661: Cannot re-export name that is not defined in the module.'` after use command `npm install` add the line `'declare var Promise: PromiseConstructor;'` on top of file `'node_modules/angular2/src/facade/promise.d.ts'`.
