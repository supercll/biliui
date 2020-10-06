# biliui

Vue3.0 实战：自定义 UI 组件库

# 官方文档：http://ui.lhikari.com

# 介绍

BILI UI 是一款基于 Vue 3 和 TypeScript 编写的 UI 组件库。
采取了哔哩哔哩的风格，将会按其颜色、logo 或者布局来展示样式
不管是 vue3.0 还是 vue2.x 的新版本都能正常使用此组件库

注意：

-   这是为了熟悉 Vue 3.0 新特性而写的一个娱乐性组件库
-   所以不建议将此 UI 库用于生产环境。

源代码放在了 https://github.com/supercll/biliui

历史提交信息符合开发规范，可以按提交的顺序逐个查看

可以直接查看每个组件的源代码和示例，运行方法见 README.md。

# 安装

执行下列命令：

```
npm install bilibili-ui
```

或

```
yarn add bilibili-ui
```

# 开始使用

请先[安装](#/doc/install)本组件库。

然后在你的代码中写入下面的代码

```
import "bilibili-ui/dist/lib/bili.css";
import {Button, Tabs, Tab, Switch, Dialog, openDialog} from "bilibili-ui"

```

就可以使用我提供的组件了。

## Vue 单文件组件

代码示例：

```
<template>
  <div>
    <Button>按钮</Button>
  </div>
</template>
<script>
import {Button, Tabs, Switch, Dialog} from "bilibili-ui"
export default {
  components: {Button}
}
</script>
```

## 注意

copy 示例代码时，应该将

```
import { Button } from "../lib/index";
```

替换为

```
import { Button } from "bilibili-ui";
```

## vue2.x测试

![1601979658891](C:\Users\lc\AppData\Roaming\Typora\typora-user-images\1601979658891.png)

```js
<template>
    <Button @click="open">hi</Button>
    <Switch type="tv" v-model:value="isOpen"></Switch>
    <Tabs v-model:selected="tabSelected">
        <Tab title="tab1">内容1</Tab>
        <Tab title="tab2">内容2</Tab>
    </Tabs>
    <hr />
</template>

<script>
import "bilibili-ui/dist/lib/bili.css";
import { Button, Switch, Tabs, Tab, Dialog, openDialog } from "bilibili-ui";
import { ref } from "vue";

export default {
    name: "App",
    data() {
        return {
            isOpen: false,
            tabSelected: "tab1",
            bool: false,
        };
    },
    methods: {
        open() {
            openDialog({ title: "标题", content: "内容" });
        },
    },
    components: {
        Button,
        Switch,
        Tabs,
        Tab,
        Dialog,
    },
};
</script>
```
