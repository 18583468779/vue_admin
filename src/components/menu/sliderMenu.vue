<template>
    <el-menu default-active="1-2" class="el-menu-vertical-demo" :collapse="isCollapse" @open="handleOpen"
        @close="handleClose">

        <el-sub-menu :index="index" v-for="(menu, index) in menuData" :key="menu.id">
            <template #title>
                <el-icon>
                    <component :is="menu.icon" />
                </el-icon>
                <span>{{ menu.title }}</span>
            </template>
            <el-menu-item-group v-show="menu.children!.length > 0" v-for="(group, groupIdx) in menu.children"
                :key="group.id">
                <template #title><span>{{ group.title }}</span></template>
                <el-menu-item :index="index + '-' + groupIdx" v-for="(gChild) in group.group" :key="gChild.id">
                    {{ gChild.title }}
                </el-menu-item>
            </el-menu-item-group>
        </el-sub-menu>
    </el-menu>
</template>

<script lang="ts" setup>
import { v4 as uuidv4 } from 'uuid';
import { ref } from 'vue';
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

const uuid1 = uuidv4();

const initData: Array<TSliderMenu> = [
    {
        id: uuid1, title: '基础菜单', icon: 'document', children: [
            {
                id: uuidv4(), parentId: uuid1, title: '菜单组', group: [
                    {
                        id: uuidv4(), parentId: uuid1, title: '配置菜单1', url: '/'
                    },
                    {
                        id: uuidv4(), parentId: uuid1, title: '配置菜单2', url: '/'
                    },
                ]
            },
            {
                id: uuidv4(), parentId: uuid1, title: '工作台', group: [
                    {
                        id: uuidv4(), parentId: uuid1, title: '工作台1', url: '/'
                    },
                    {
                        id: uuidv4(), parentId: uuid1, title: '工作台2', url: '/'
                    },
                ]
            },
            {
                id: uuidv4(), parentId: uuid1, title: '统计报表', group: [
                    {
                        id: uuidv4(), parentId: uuid1, title: '统计报表1', url: '/'
                    },
                    {
                        id: uuidv4(), parentId: uuid1, title: '统计报表2', url: '/'
                    },
                ]
            }
        ]
    }
];

const menuData = ref<Array<TSliderMenu>>([]);

setTimeout(() => {
    menuData.value = initData;
}, 1000)
</script>

<style lang="scss" scoped></style>