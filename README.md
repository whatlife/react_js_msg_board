# 一些速记
编译 jsx、es6、scss 等资源所要安装的插件

    使用 bael 和 babel-loader 编译 jsx、es6
    安装插件: babel-preset-es2015 用于解析 es6
    安装插件：babel-preset-react 用于解析 jsx
    css-loader 用于将 css 当做模块一样来 import
    style-loader 用于自动将 css 添加到页面
    extract-text-webpack-plugin 分离css文件
    使用cross-env解决跨平台设置NODE_ENV的问题（unix和windows）
    

# node_modules

# 运行
安装：`npm install`
或者安装淘宝镜像

`npm install -g cnpm --registry=https://registry.npm.taobao.org`

开发：`npm run dev`


# TODO
- ~~webpack production ENV~~
- ~~把第三方插件独立出来~~
- 加入postcss. css3自动补全





----------------------------------------------


This repo is a boilerplate for React-Babel-Webpack project. You could use it as a base to build your own web app.

## Features

- Equip with React, ES6 & Babel 6
- Lint with ESlint and Airbnb's style sheet.
- Build with Webpack
- Support [hot module replacement](https://webpack.github.io/docs/hot-module-replacement.html)
- Auto Open a new browser tab when Webpack loads, and reload the page when you modified the code
- Use [Commitizen](https://github.com/commitizen/cz-cli) to produce commit message according to [AngularJS convention](https://github.com/angular/angular.js/blob/master/CONTRIBUTING.md#-git-commit-guidelines)
- Support git hook `pre-commit` used to lint and test your code
- Support git hook `commit-msg` used to lint your [commit message](https://github.com/kentcdodds/validate-commit-msg)
- Use [conventional-changelog](https://github.com/ajoslin/conventional-changelog) to generate `CHANGELOG.md`

## How to use

First, you should clone the repo and install the dependencies.

```bash
$ git clone git@github.com:ruanyf/react-babel-webpack-boilerplate.git <yourAppName>
$ cd <yourAppName>
$ npm install
```

Then, launch the boilerplate app.

```bash
$ npm start
```

You should see a new browser tap opening and a title of "Hello World" in http://127.0.0.1:8080.

From there, you start to develop your own code in the `app` directory. When you finish coding, use `npm run build` or `npm run deploy` to build the static files.

When committing your code, you should use [AngularJS's commit message convention](https://github.com/angular/angular.js/blob/master/CONTRIBUTING.md#-git-commit-guidelines). Otherwise, the repo will throw an error. If you use `npm run commit` instead of `git commit`, the command will help you to produce a formatted commit message.

## License

MIT
