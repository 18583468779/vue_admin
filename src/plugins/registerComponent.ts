import { App } from "vue";
const modules = import.meta.glob('../components/globalComponent/*.vue');

// 全局注册组件
export const setUpRegisterComponent = (app: App) => {
    for (const path in modules) {
        modules[path]().then((mod:any) => {
            const match = path.match(/[^\/]+\.vue$/);
            if (match) {
                // 直接去除 '.vue' 扩展名  
                const pureName = match[0].replace(/\.vue$/, '');
                app.component(pureName, mod.default)
            }
        })
    }

}