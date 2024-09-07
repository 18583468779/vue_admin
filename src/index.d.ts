// 全局类型声明

interface TSliderMenu {
  id: string;
  title: string;
  icon?: string;
  url?: string;
  parentId?: string;
  group?: Array<TSliderMenu>;
  children?: Array<TSliderMenu>;
}
