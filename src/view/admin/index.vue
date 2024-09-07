<template>
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" :ellipsis="false"
        @select="handleSelect">
        <el-menu-item index="0">
            <el-text tag="b" size="large"> HtmlCode 后台管理系统</el-text>
        </el-menu-item>
        <el-menu-item index="1" @click="handleChangeMenu">
            <el-icon v-if="isCollapse">
                <Expand />
            </el-icon>
            <el-icon v-else>
                <Fold />
            </el-icon>
        </el-menu-item>
        <el-menu-item index="2">
            <el-popover placement="bottom" title="通知" :width="250" trigger="click">

                <template #reference>
                    <el-badge :value="12" :offset="[-5, 20]" class="item">
                        <el-icon :size="30">
                            <Message />
                        </el-icon>
                    </el-badge>
                </template>
                <div class="flex flex-wrap gap-4">
                    <el-card style="width: 480px" shadow="hover" class="cursor-pointer">Always</el-card>
                    <el-card style="width: 480px" shadow="hover" class="cursor-pointer">Hover</el-card>
                    <el-card style="width: 480px" shadow="hover" class="cursor-pointer">Never</el-card>
                </div>
            </el-popover>
        </el-menu-item>
        <el-menu-item index="3">
            <el-switch v-model="value1" :active-action-icon="Sunny" :inactive-action-icon="Moon"
                style=" --el-switch-off-color: #333" />
        </el-menu-item>
        <el-sub-menu index="4">
            <template #title>
                <el-icon>
                    <User />
                </el-icon>
                个人中心
            </template>
            <el-menu-item index="3-1">
                <el-icon>
                    <User />
                </el-icon>
                个人中心
            </el-menu-item>
            <el-menu-item index="3-2">
                <el-icon>
                    <Back />
                </el-icon>
                退出登录
            </el-menu-item>
        </el-sub-menu>
    </el-menu>
    <!-- 侧边栏菜单 -->
    <sliderMenu :isCollapse="isCollapse" />
</template>

<script lang="ts" setup>
import { ref, watchEffect } from 'vue'
import {
    Sunny, Moon
} from '@element-plus/icons-vue';
import sliderMenu from '../../components/menu/sliderMenu.vue';
const isCollapse = ref(false);
const value1 = ref(true);

watchEffect(() => {
    if (value1.value) {
        document.documentElement.classList.add('dark')
    } else {
        document.documentElement.classList.remove('dark')
    }
})
const handleChangeMenu = () => {
    // 左侧菜单隐藏展开
    isCollapse.value = !isCollapse.value;
}

const activeIndex = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}
</script>

<style lang="scss" scoped>
.el-menu--horizontal>.el-menu-item:nth-child(2) {
    margin-right: auto;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
}
</style>