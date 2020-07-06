// 来源于 https://gist.github.com/rswanderer/29dc65efc421b3b5b0442f1bd3dcd046
// https://prettier.io/docs/en/options.html
// https://eslint.org/docs/user-guide/configuring
// https://github.com/prettier/eslint-config-prettier/blob/master/README.md
// https://github.com/sheerun/prettier-standard

module.exports = {
  // Eslint检测配置文件步骤：
  // 1.在要检测的文件同一目录里寻找.eslintrc.*和package.json
  // 2.紧接着在父级目录里寻找，一直到文件系统的根目录
  // 3.如果在前两步发现有root：true的配置，停止在父级目录中寻找.eslintrc
  // 4.如果以上步骤都没有找到，则回退到用户主目录~/.eslintrc中自定义的默认配置
  root: true,
  // ESLint默认使用Espree作为其解析器
  // 同时babel-eslint也是用得最多的解析器
  parser: 'babel-eslint',
  // parser解析代码时的参数
  parserOptions: {
    // 指定要使用的ECMAScript版本，默认值5
    // ecmaVersion: 5,
    // 设置为script(默认)或module（如果你的代码是ECMAScript模块)
    // sourceType: 'script',
    // 这是个对象，表示你想使用的额外的语言特性,所有选项默认都是false
    ecmafeatures: {
      // 允许在全局作用域下使用return语句
      globalReturn: false,
      // 启用全局strict模式（严格模式）
      // impliedStrict: false,
      // 启用JSX
      jsx: false,
      // 启用对实验性的objectRest/spreadProperties的支持
      experimentalObjectRestSpread: false
    }
  },

  // 指定环境，每个环境都有自己预定义的全局变量，可以同时指定多个环境，不矛盾
  env: {
    // 效果同配置项ecmaVersion一样
    es6: true,
    browser: true,
    node: true,
    jest: true
    // commonjs: false,
    // mocha: true,
    // jquery: true,
    // 如果你想使用来自某个插件的环境时，确保在plugins数组里指定插件名
    // 格式为：插件名/环境名称（插件名不带前缀）
    // 'react/node': true
  },

  // 指定环境为我们提供了预置的全局变量
  // 对于那些我们自定义的全局变量，可以用globals指定
  // 设置每个变量等于true允许变量被重写，或false不允许被重写
  globals: {
    // globalVar1: true,
    // globalVar2: false
  },
  // ESLint支持使用第三方插件
  // 在使用插件之前，你必须使用npm安装它
  // 全局安装的ESLint只能使用全局安装的插件
  // 本地安装的ESLint不仅可以使用本地安装的插件还可以使用全局安装的插件
  // plugin与extend的区别：extend提供的是eslint现有规则的一系列预设
  // 而plugin则提供了除预设之外的自定义规则，当你在eslint的规则里找不到合适的的时候
  // 就可以借用插件来实现了
  // 插件名称可以省略eslint-plugin-前缀
  plugins: ['prettier'],

  // extends属性值可以是一个字符串或字符串数组
  // 数组中每个配置项继承它前面的配置
  // 可选的配置项如下
  // 1.字符串eslint：recommended，该配置项启用一系列核心规则，这些规则报告一些常见问题，即在(规则页面)中打勾的规则
  // 2.一个可以输出配置对象的可共享配置包，如eslint-config-standard
  // 可共享配置包是一个导出配置对象的简单的npm包，包名称以eslint-config-开头，使用前要安装
  // extends属性值可以省略包名的前缀eslint-config-
  // 3.一个输出配置规则的插件包，如eslint-plugin-react
  // 一些插件也可以输出一个或多个命名的配置
  // extends属性值为，plugin：包名/配置名称
  // 4.一个指向配置文件的相对路径或绝对路径
  // 5.字符串eslint：all，启用当前安装的ESLint中所有的核心规则
  // 该配置不推荐在产品中使用，因为它随着ESLint版本进行更改。使用的话，请自己承担风险
  extends: [
    // '@nuxtjs',
    // 'prettier',
    // 'prettier/vue',
    // 'plugin:prettier/recommended',
    // 'plugin:nuxt/recommended',
    'prettier',
    'plugin:prettier/recommended',
    // 'prettier/flowtype',
    // 'prettier/react',
    'prettier/standard'
  ],

  // add your custom rules here
  // ignorePatterns: ['lib/', 'tsc/', 'src/**/*.test.js', 'src/**/*.spec.js'],
  ignorePatterns: ['lib/', 'tsc/'],

  // 具体规则配置
  // off或0--关闭规则
  // warn或1--开启规则，警告级别(不会导致程序退出)
  // error或2--开启规则，错误级别(当被触发的时候，程序会退出)
  rules: {
    // 'space-before-function-paren': ['error', 'never'],
    // 选项可以是字符串，也可以是对象
    // 'prettier/prettier': 'error',
    'nuxt/no-cjs-in-config': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    eqeqeq: 0,
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-eval': [
      'error',
      {
        allowIndirect: true
      }
    ],
    'one-var': 0,
    'vue/no-v-html': 'off'
  }

  // ESLint支持在配置文件添加共享设置
  // 你可以添加settings对象到配置文件，它将提供给每一个将被执行的规则
  // 如果你想添加的自定义规则而且使它们可以访问到相同的信息，这将会很有用，并且很容易配置
  // settings: {
  //   sharedData: 'Hello'
  // }
}
