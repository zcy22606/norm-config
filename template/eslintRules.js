

const rules = `
  'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off', // 禁用console
  'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off', // 禁用debugger
  'prettier/prettier': 'error', // 开启 prettier 自动修复的功能
  'accessor-pairs': 2, // 在对象中使用getter/setter
  'arrow-spacing': [2, { before: true, after: true }], //=>的前/后括号
  'block-spacing': [2, 'always'],
  'brace-style': [2, '1tbs', { allowSingleLine: true }], //大括号风格
  camelcase: [0, { properties: 'always' }], // 制驼峰法命名
  'comma-dangle': ['error', { arrays: 'never', objects: 'never', imports: 'never', exports: 'never', functions: 'never' }], //对象字面量项尾不能有逗号
  'comma-spacing': [2, { before: false, after: true }], //逗号前后的空格
  'comma-style': [2, 'last'], //逗号风格，换行时在行首还是行尾
  'constructor-super': 2, // 非派生类不能调用super，派生类必须调用super
  curly: [2, 'multi-line'], //必须使用 if(){} 中的{}
  'dot-location': [2, 'property'], //对象访问符的位置，换行的时候在行首还是行尾
  'eol-last': 2,
  eqeqeq: 'off', //必须使用全等
  'generator-star-spacing': [2, { before: true, after: true }], //生成器函数*的前后空格
  'handle-callback-err': [2, '^(err|error)$'], //nodejs 处理错误
  indent: 'off', // 缩进风格
  'key-spacing': [2, { beforeColon: false, afterColon: true }], //对象字面量中冒号的前后空格
  'keyword-spacing': [2, { before: true, after: true }],
  'new-cap': [2, { newIsCap: true, capIsNew: false }], // 函数名首行大写必须使用new方式调用，首行小写必须用不带new方式调用
  'new-parens': 2, //new时必须加小括号
  'no-array-constructor': 2, // 禁止使用数组构造器
  'no-caller': 2, // 禁止使用arguments.caller或arguments.callee
  'no-console': 'off',
  'no-class-assign': 2, // 禁止给类赋值
  'no-cond-assign': 2, // 禁止在条件表达式中使用赋值语句
  'no-const-assign': 2, // 禁止修改const声明的变量
  'no-control-regex': 0, // 禁止在正则表达式中使用控制字符
  'no-delete-var': 2, // 不能对var声明的变量使用delete操作符
  'no-dupe-args': 2, // 函数参数不能重复
  'no-dupe-class-members': 2,
  'no-dupe-keys': 2, //在创建对象字面量时不允许键重复 {a:1,a:1}
  'no-duplicate-case': 2, //switch中的case标签不能重复
  'no-empty-character-class': 2, //正则表达式中的[]内容不能为空
  'no-empty-pattern': 2,
  'no-eval': 0, // 禁止使用eval
  'no-ex-assign': 2, // 禁止给catch语句中的异常参数赋值
  'no-extend-native': 2, // 禁止扩展native对象
  'no-extra-bind': 2, // 禁止不必要的函数绑定
  'no-extra-boolean-cast': 2, // 禁止不必要的bool转换
  'no-extra-parens': [2, 'functions'], // 禁止非必要的括号
  'no-fallthrough': 2, // 禁止switch穿透
  'no-floating-decimal': 2, //禁止省略浮点数中的0 .5 3.
  'no-func-assign': 2, //禁止重复的函数声明
  'no-implied-eval': 2, // 禁止使用隐式eval
  'no-inner-declarations': [2, 'functions'],
  'no-invalid-regexp': 2, //禁止无效的正则表达式
  'no-irregular-whitespace': 2, // 不能有不规则的空格
  'no-iterator': 2, //禁止使用__iterator__ 属性
  'no-label-var': 2, //label名不能与var声明的变量名相同
  'no-labels': [2, { allowLoop: false, allowSwitch: false }], // 禁止标签声明
  'no-lone-blocks': 2, // 禁止不必要的嵌套块
  'no-mixed-spaces-and-tabs': 2,
  'no-multi-spaces': 2, //不能用多余的空格
  'no-multi-str': 2, // 字符串不能用\换行
  'no-multiple-empty-lines': [2, { max: 1 }], //空行最多不能超过3行
  'no-native-reassign': 2, //不能重写native对象
  'no-negated-in-lhs': 2, //in 操作符的左边不能有!
  'no-new-func': 2, //禁止使用new Function
  'no-new-object': 2, //禁止使用new Object()
  'no-new-require': 2, //禁止使用new require
  'no-new-symbol': 2, // 禁止使用 new Symbol()
  'no-new-wrappers': 2, //禁止使用new创建包装实例，new String new Boolean new Number
  'no-obj-calls': 2, //不能调用内置的全局对象，比如Math() JSON()
  'no-octal': 2, //禁止使用八进制数字
  'no-octal-escape': 2, //禁止使用八进制转义序列
  'no-path-concat': 2, //node中不能使用__dirname或__filename做路径拼接
  'no-proto': 2, //禁止使用__proto__属性
  'no-redeclare': 2, // 禁止重复声明变量
  'no-regex-spaces': 2, // 禁止在正则表达式字面量中使用多个空格 /foo bar/
  'no-return-assign': [2, 'except-parens'], // return 语句中不能有赋值表达式
  'no-self-assign': 2,
  'no-self-compare': 2, // 不能比较自身
  'no-sequences': 2, // 禁止使用逗号运算符
  'no-shadow-restricted-names': 2, // 严格模式中规定的限制标识符不能作为声明时的变量名使用
  'no-spaced-func': 2, // 函数调用时 函数名与()之间不能有空格
  'no-sparse-arrays': 2, // 禁止稀疏数组， [1,,2]
  'no-this-before-super': 2, // 在调用super()之前不能使用this或super
  'no-throw-literal': 2, // 禁止抛出字面量错误 throw "error";
  'no-trailing-spaces': 2, // 一行结束后面不要有空格
  'no-undef': 2, // 不能有未定义的变量
  'no-undef-init': 2, // 变量初始化时不能直接给它赋值为undefined
  'no-unexpected-multiline': 2, // 避免多行表达式
  'no-unmodified-loop-condition': 2,
  'no-unneeded-ternary': [2, { defaultAssignment: false }], //禁止不必要的嵌套 var isYes = answer === 1 ? true : false;
  'no-unreachable': 2, //不能有无法执行的代码
  'no-unsafe-finally': 2,
  'no-unused-vars': [2, { vars: 'all', args: 'none' }], // 不能有声明后未被使用的变量或参数
  'no-useless-call': 2, //禁止不必要的call和apply
  'no-useless-computed-key': 2,
  'no-useless-constructor': 2,
  'no-useless-escape': 0,
  'no-whitespace-before-property': 2,
  'no-with': 2, //禁用with
  'one-var': [2, { initialized: 'never' }], //连续声明
  'operator-linebreak': [2, 'after', { overrides: { '?': 'before', ':': 'before' } }], //换行时运算符在行尾还是行首
  'padded-blocks': [2, 'never'], //块语句内行首行尾是否要空行
  quotes: 'off', //引号类型
  semi: 'off', //语句强制分号结尾
  'semi-spacing': [2, { before: false, after: true }], //分号前后空格
  'space-before-blocks': [2, 'always'], //不以新行开始的块{前面要不要有空格
  'space-before-function-paren': 'off', //在方法名和刮号之间需要有一格空格。
  'space-in-parens': [2, 'never'], //小括号里面要不要有空格
  'space-infix-ops': 2, //中缀操作符周围要不要有空格
  'space-unary-ops': [2, { words: true, nonwords: false }], //一元运算符的前/后要不要加空格
  'spaced-comment': 'off', //注释风格要不要有空格什么的
  'template-curly-spacing': [2, 'never'],
  'use-isnan': 2, //禁止比较时使用NaN，只能用isNaN()
  'valid-typeof': 2, //必须使用合法的typeof的值
  'wrap-iife': [2, 'any'], //立即执行函数表达式的小括号风格
  'yield-star-spacing': [2, 'both'],
  yoda: [2, 'never'], //禁止尤达条件
  'prefer-const': 2, // 首选const
  'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
  'object-curly-spacing': [0, 'always', { objectsInObjects: false }], //大括号内是否允许不必要的空格
  'no-prototype-builtins': 0, // 支持hasOwnProperty
  'no-case-declarations': 0, //该规则禁止词法声明 (let、const、function 和 class) 出现在 case或default 子句中
  'no-alert': 0, // 禁止使用alert confirm prompt
  'no-bitwise': 0, // 禁止使用按位运算符
  'no-catch-shadow': 0, // 禁止catch子句参数与外部作用域变量同名
  'no-constant-condition': 0, // 禁止在条件中使用常量表达式 if(true) if(1)
  'no-continue': 0, //禁止使用continue
  'no-div-regex': 1, //不能使用看起来像除法的正则表达式/=foo/
  'no-else-return': 0, //如果if语句里面有return,后面不能跟else语句
  'no-empty': 0, // 块语句中的内容不能为空
  'no-eq-null': 0, //禁止对null使用==或!=运算符
  'no-extra-semi': 2, //禁止多余的冒号
  'no-implicit-coercion': 0, // 禁止隐式转换
  'no-inline-comments': 0, // 禁止行内备注
  'no-invalid-this': 0, // 禁止无效的this，只能用在构造器，类，对象字面量
  'no-lonely-if': 0, // 禁止else语句内只有if语句
  'no-loop-func': 0, //禁止在循环中使用函数（如果没有引用外部变量不形成闭包就可以）
  'no-mixed-requires': [0, false], //声明时不能混用声明类型
  'no-nested-ternary': 0, //禁止使用嵌套的三目运算
  'no-new': 1, //禁止在使用new构造一个实例后不赋值
  'no-param-reassign': 0, //禁止给参数重新赋值
  'no-plusplus': 0, //禁止使用++，--
  'no-process-env': 0, //禁止使用process.env
  'no-process-exit': 0, //禁止使用process.exit()
  'no-restricted-modules': 0, //如果禁用了指定模块，使用就会报错
  'no-script-url': 0, //禁止使用javascript:void(0)
  'no-shadow': 0, //外部作用域中的变量不能与它所包含的作用域中的变量或参数同名
  'no-sync': 0, //nodejs 禁止同步方法
  'no-ternary': 0, //禁止使用三目运算符
  'no-undefined': 0, //不能使用undefined
  'no-underscore-dangle': 0, //标识符不能以_开头或结尾
  'no-unused-expressions': 0, //禁止无用的表达式
  'no-use-before-define': 0, //未定义前不能使用
  'no-void': 0, // 禁用void操作符
  'no-var': 0, //禁用var，用let和const代替
  'no-warning-comments': [0, { terms: ['todo', 'fixme', 'xxx'], location: 'start' }], //不能有警告备注
  'import/no-unresolved': 0, //导入vue组件
  'import/extensions': 0, //导入js
  'array-bracket-spacing': [0, 'never'], //是否允许非空数组里面有多余的空格
  'arrow-parens': 0, //箭头函数用小括号括起来
  'block-scoped-var': 0, //块语句中使用var
  'callback-return': 0, //避免多次调用回调什么的
  'computed-property-spacing': [0, 'never'], //是否允许计算后的键名什么的
  'consistent-return': 0, //return 后面是否允许省略
  'consistent-this': 0, //this别名
  'default-case': 0, //switch语句最后必须有default
  'dot-notation': [0, { allowKeywords: true }], //避免不必要的方括号
  'func-names': 0, //函数表达式必须有名字
  'func-style': [0, 'declaration'], //函数风格，规定只能使用函数声明/函数表达式
  'guard-for-in': 0, //for in循环要用if语句过滤
  'id-length': 0, //变量名长度
  'init-declarations': 0, //声明时必须赋初值
  'lines-around-comment': 0, //行前/行后备注
  'max-nested-callbacks': [0, 2], //回调嵌套深度
  'max-params': [0, 3], //函数最多只能有3个参数
  'max-statements': [0, 10], //函数内最多有几个声明
  'newline-after-var': 0, //变量声明后是否需要空一行
  'object-shoulthand': 0, //强制对象字面量缩写语法
  'operator-assignment': [0, 'always'], //赋值运算符 += -=什么的
  'prefer-spread': 0, //首选展开运算
  'prefer-reflect': 0, //首选Reflect的方法
  'quote-props': [0, 'always'], //对象字面量中的属性名是否强制双引号
  radix: 0, //parseInt必须指定第二个参数
  'id-match': 0, //命名检测
  'require-yield': 0, //生成器函数必须有yield
  'sort-vars': 0, //变量声明时排序
  'space-after-keywords': [0, 'always'], //关键字后面是否要空一格
  strict: 0, //使用严格模式
  'valid-jsdoc': 0, //jsdoc规则
  'vars-on-top': 0, //var必须放在作用域顶部
  'wrap-regex': 0 //正则表达式字面量用小括号包起来
  `


const vueRules = `
  rules:{
    ${rules}
  }
`



const reactRules = `
  rules:{
    ${rules}
  }
`

const getEslintRules = (env) => {
  switch (env) {
    case 'vue2':
    case 'vue3':
      return vueRules
    case 'react':
      return reactRules
  }
}

module.exports = {
  vueRules,
  reactRules,
  getEslintRules
}

