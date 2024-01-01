# umiAdmin 项目修改步骤

## 一、项目搭建过程

    npm i create-umi yarn -g
    全局安装脚手架
    mkdir myapp && cd myapp
    yarn create umi(推荐) 或者 npm create umi
    Select the boilerplate type  --->  ant-design-pro
    🧙 Be the first to experience the new umi@3 ---> Pro V4
    🤓 Which language do you want to use? (Use arrow keys) ---> JavaScript
    🚀 Do you need all the blocks or a simple scaffold? (Use arrow keys) ---> simple
    🦄 Time to use better, faster and latest antd@4! (Use arrow keys) ---> antd@4

## 二、添加模版文件

     npm i react-docgen --save-dev
     用于生成组件的传参表格md文件 进入指定文件夹 node docgen.js

     和src统计template文件夹
        Template 文件夹是按照class的方式编写jsx
        TemplateHook 文件夹是按照function的方式编写jsx

## 三、添加 eslint-babel 依赖

     解决的问题:class的jsx使用箭头函数定义方法不报错
     npm install babel-eslint --save-dev
         .eslintrc.js  添加   parser: "babel-eslint",


## 四、添加 commit-msg 提交信息规范

    npm i husky --save-dev

    package.json
    "husky": {
        "hooks": {
        "pre-commit": "npm run lint",
        "commit-msg": "node verify-commit.js"
        }
    },
    
    添加 verify-commit.js文件

## 五、添加 全局styles文件 使用只能引入对应的less文件使用
    添加 /src/styles下面的文件
    使用时引入文件使用