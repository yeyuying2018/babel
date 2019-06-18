# babel
es6转es5
步骤：
1、使用npm init建立package.json文件
  {
  "name": "babel",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
2、改写package.json 填写依赖 或者逐一安装依赖
  {
  "name": "babel",
  "version": "1.0.0",
  "description": "",
  "main": "lazyload.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "babel src/lazyload.js -o dist/lazyload.es5.js"
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "babel-cli": "^6.0.0",
    "babel-preset-env": "^1.7.0",
    "babel-preset-es2015": "^6.24.1",
    "babel-preset-stage-0": "^6.24.1",
    "gulp": "^4.0.2",
    "gulp-babel": "^7.0.0",
    "gulp-rename": "^1.4.0",
    "gulp-uglify": "^3.0.2"
  }
}

3、npm install
4、建立.babelrc文件 内容为
  {
      "presets": [
        "es2015"
      ]
  }
