<template>
    <div class="main">
        <Topnav />
        <div class="banner">
            <h1>哔哩UI</h1>
            <h2>一个简易的UI框架</h2>
            <p class="actions">
                <a href="https://github.com/supercll/biliui">Github</a>
                <router-link to="/doc">开始</router-link>
            </p>
        </div>
    </div>
    <div class="features">
        <svg class="icon">
            <use xlink:href="#icon-Vue" />
        </svg>
        <svg class="icon">
            <use xlink:href="#icon-ts" />
        </svg>
        <svg class="icon">
            <use xlink:href="#icon-bilibili" />
        </svg>
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

<style lang="scss" scoped>
$blue: #73c9e5;
.main {
    background: #73c9e5;
    background: -webkit-linear-gradient(bottom left, #73c9e5, #fb739a);
    background: -moz-linear-gradient(bottom left, #73c9e5, #fb739a);
    background: linear-gradient(to top right, #73c9e5, #fb739a);
}
.banner {
    padding: 100px 0;
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
            $h: 28px;
            border-radius: 10%;
            padding: 20px 5px;
            padding: 0 8px;
            &:hover {
                text-decoration: none;
            }
        }
    }
}

.features {
    display: flex;
    justify-content: space-around;
    svg {
        width: 64px;
        height: 64px;
    }
}
</style>
