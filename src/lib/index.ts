/* import Switch from "./Switch.vue";
export { Switch }; 
// 将switch 默认的内容当做switch导出
*/
import "./assets/font/iconfont";
import "./assets/style/bili.scss";
export { default as Switch } from "./componets/basic/Switch.vue";
export { default as Button } from "./componets/basic/Button.vue";
export { default as Tabs } from "./componets/basic/Tabs.vue";
export { default as Tab } from "./componets/basic/Tab.vue";
export { default as Dialog } from "./componets/advanced/Dialog.vue";
export { openDialog } from "./componets/advanced/openDialog";
export { default as Progress } from "./componets/advanced/Progress.vue";
export { default as Card } from "./componets/advanced/Card.vue";
export { default as Carousel } from "./componets/advanced/Carousel.vue";
