# biliui
Vue3.0实战：自定义UI组件库

# 官方文档：http://ui.lhikari.com

# 介绍
BILI UI 是一款基于 Vue 3 和 TypeScript 编写的 UI 组件库。
采取了哔哩哔哩的风格，将会按其颜色、logo或者布局来展示样式
不管是vue3.0还是vue2.x的新版本都能正常使用此组件库

注意：
- 这是为了熟悉 Vue 3.0 新特性而写的一个娱乐性组件库
- 所以不建议将此 UI 库用于生产环境。

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
copy示例代码时，应该将
```
import { Button } from "../lib/index";
```
替换为
```
import { Button } from "bilibili-ui";

```
