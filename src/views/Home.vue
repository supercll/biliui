<template>
    <div class="main">
        <Topnav />
        <div class="banner">
            <svg class="icon">
                <use xlink:href="#icon-tv" />
            </svg>
            <h1>哔哩UI</h1>

            <h2>一个简易的UI框架</h2>
            <p class="actions">
                <a href="https://github.com/supercll/biliui">Github</a>
                <router-link to="/doc">开始</router-link>
            </p>
        </div>
    </div>
    <div class="features">
        <div>
            <svg class="icon">
                <use xlink:href="#icon-Vue" />
            </svg>
            <ul>
                <li>
                    <h2>基于Vue3.0</h2>
                </li>
                <li>
                    <p>使用Composition API</p>
                </li>
            </ul>
        </div>
        <div>
            <svg class="icon">
                <use xlink:href="#icon-ts" />
            </svg>
            <ul>
                <li>
                    <h2>基于TypeScript</h2>
                </li>
                <li>
                    <p>Vue3.0更好地支持了TS</p>
                </li>
            </ul>
        </div>
        <div>
            <svg class="icon">
                <use xlink:href="#icon-bilibili" />
            </svg>
            <ul>
                <li>
                    <h2>哔哩哔哩风格</h2>
                </li>
                <li>
                    <p>源自于对小破站的热爱</p>
                </li>
            </ul>
        </div>
        <div>
            <svg class="icon">
                <use xlink:href="#icon-dengpao" />
            </svg>
            <ul>
                <li>
                    <h2>代码简洁易读</h2>
                </li>
                <li>
                    <p>简洁规范的代码演示</p>
                </li>
            </ul>
        </div>
    </div>
    <div class="cover">
        <img src="../assets/cover.jpg" alt />
    </div>
</template>

<script lang="ts">
import Topnav from "../components/Topnav.vue";
export default {
    name: "Home",
    components: {
        Topnav,
    },
};
</script>

<style lang="scss">
$blue: #73c9e5;

.main {
    background: #73c9e5;
    background: -webkit-linear-gradient(bottom left, #73c9e5, #fb739a);
    background: -moz-linear-gradient(bottom left, #73c9e5, #fb739a);
    background: linear-gradient(to top right, #73c9e5, #fb739a);
    clip-path: ellipse(80% 60% at 50% 20%);

    svg {
        width: 56px;
        height: 56px;
    }
}
.banner {
    padding: 20px 0 60px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: white;

    > .actions {
        padding: 8px 0;

        a {
            margin: 0 8px;
            background: $blue;
            color: white;
            display: inline-block;
            $h: 30px;
            border-radius: 15%;
            padding: 0 10px;
            height: $h;
            line-height: $h;
            &:hover {
                text-decoration: none;
            }
        }
    }
}
.cover {
    text-align: center;
}
.features {
    display: flex;
    justify-content: space-around;
    svg {
        width: 52px;
        height: 52px;
        margin-right: 10px;
    }
    > div {
        display: flex;
        flex-wrap: nowrap;
    }
}

@media (max-width: 500px) {
    .features {
        display: flex;
        flex-direction: column;
        position: absolute;
        left: 50%;
        transform: translate(-50%, 0);
        justify-content: space-around;
        height: 50vh;
    }
    .cover {
        display: none;
    }
}
</style>
