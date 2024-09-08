// 全局类型声明

interface TSliderMenu {
  // 侧边栏数据类型
  id: string;
  title: string;
  icon?: string;
  url?: string;
  parentId?: string;
  group?: Array<TSliderMenu>;
  children?: Array<TSliderMenu>;
}

interface TResponse<T> {
  // 请求相应类型
  code: number;
  data: T;
  message: string;
  type: string;
}
