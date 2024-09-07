<template>
    <el-menu default-active="2" class="el-menu-vertical-demo " :collapse="isCollapse" @open="handleOpen"
        @close="handleClose">
        <el-sub-menu index="1">
            <template #title>
                <el-icon>
                    <location />
                </el-icon>
                <span>Navigator One</span>
            </template>
            <el-menu-item-group>
                <template #title><span>Group One</span></template>
                <el-menu-item index="1-1">item one</el-menu-item>
                <el-menu-item index="1-2">item two</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="Group Two">
                <el-menu-item index="1-3">item three</el-menu-item>
            </el-menu-item-group>
            <el-sub-menu index="1-4">
                <template #title><span>item four</span></template>
                <el-menu-item index="1-4-1">item one</el-menu-item>
            </el-sub-menu>
        </el-sub-menu>
        <el-menu-item index="2">
            <el-icon><icon-menu /></el-icon>
            <template #title>Navigator Two</template>
        </el-menu-item>
        <el-menu-item index="3" disabled>
            <el-icon>
                <document />
            </el-icon>
            <template #title>Navigator Three</template>
        </el-menu-item>
        <el-menu-item index="4">
            <el-icon>
                <setting />
            </el-icon>
            <template #title>Navigator Four</template>
        </el-menu-item>
    </el-menu>
</template>

<script lang="ts" setup>
import {
    Document,
    Menu as IconMenu,
    Location,
    Setting,
} from '@element-plus/icons-vue';
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

const initData = [
    {
        id: uuid1, title: '基础菜单', icon: 'icon-menu', children: [
            {
                id: uuidv4(), parentId: uuid1, title: '配置菜单', url: '/'
            },
            {
                id: uuidv4(), parentId: uuid1, title: '工作台', url: '/'
            },
            {
                id: uuidv4(), parentId: uuid1, title: '统计报表', url: '/'
            }
        ]
    }
];


const menuData = ref([]);

setTimeout(() => {
    menuData.value = initData;
}, 1000)
</script>

<style lang="scss" scoped></style>