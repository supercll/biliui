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