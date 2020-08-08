import { createApp, h } from 'vue'
//@ts-ignore
import Dialog from "./Dialog.vue"

export const openDialog = (actions) => {

    const div = document.createElement("div");
    document.body.appendChild(div);
    const close = () => {
        app.unmount(div);
        div.remove();
    }
    const app = createApp({
        render: () =>
            h(
                Dialog,
                {
                    actions,
                    onClose: close
                },
                "你好"
            ),
    });
    app.mount(div);
    return () => {
        app.unmount(div)
    }
}