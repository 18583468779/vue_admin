<template>
    <el-menu default-active="1-2" class="el-menu-vertical-demo" :collapse="isCollapse" @open="handleOpen"
        @close="handleClose">

        <el-sub-menu :index="menu.id" v-for="(menu, index) in menuData" :key="menu.id">
            <template #title>
                <el-icon>
                    <component :is="menu.icon" />
                </el-icon>
                <span>{{ menu.title }}</span>
            </template>
            <el-menu-item-group v-show="menu.children!.length > 0" v-for="(group, groupIdx) in menu.children"
                :key="group.id">
                <template #title><span>{{ group.title }}</span></template>
                <el-menu-item :index="gChild.id" v-for="(gChild) in group.group" :key="gChild.id">
                    {{ gChild.title }}
                </el-menu-item>
            </el-menu-item-group>
        </el-sub-menu>
    </el-menu>
</template>

<script lang="ts" setup>
import { nextTick, ref } from 'vue';
import { http } from '../../axios';
type Props = {
    isCollapse: boolean
}
defineProps<Props>();

const handleOpen = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}

const menuData = ref<Array<TSliderMenu>>([]);

nextTick(async () => {
    // 获取菜单。mock数据
    const { data } = await http.request<Array<TSliderMenu>>({
        url: 'menu',
        method: 'get'
    });
    menuData.value = data;

})

</script>

<style lang="scss" scoped></style>