// @ts-nocheck

import { md } from "./plugins/md";
import fs from "fs";
import { baseParse } from "@vue/compiler-core";

export default {
    plugins: [md()],
    vueCustomBlockTransforms: {
        demo: options => {
            const { code, path } = options;
            const file = fs.readFileSync(path).toString();
            const parsed = baseParse(file).children.find(n => n.tag === "demo");
            const title = parsed.children[0].content;
            const main = file.split(parsed.loc.source).join("").trim();
            return `export default function (Component) {
<<<<<<< HEAD
            Component.__sourceCode = ${JSON.stringify(main)}
            Component.__sourceCodeTitle = ${JSON.stringify(title)}
            }`.trim();
=======
        Component.__sourceCode = ${JSON.stringify(main)}
        Component.__sourceCodeTitle = ${JSON.stringify(title)}
      }`.trim();
>>>>>>> 78ed0b1a6f5bd4f59036d1838871cbee3a11a307
        },
    },
};
