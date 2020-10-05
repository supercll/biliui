// declare module '*.vue' {
//     import { Component } from 'vue'
//     const component: Component
//     export default component
// }
declare module "*.vue" {
    import { ComponentOptions } from "vue";
    const componentOptions: ComponentOptions;
    export default componentOptions;
}

declare module "*.md" {
    const str: string;
    export default str;
}
