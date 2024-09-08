// test.ts
import { v4 as uuidv4 } from "uuid";
import { MockMethod, MockConfig } from "vite-plugin-mock";

const uuid1 = uuidv4();

export default [
  {
    url: "/api/menu",
    method: "get",
    response: () => {
      return {
        code: 200,
        message: "请求成功",
        type: "success",
        data: [
          {
            id: uuid1,
            title: "基础菜单",
            icon: "document",
            children: [
              {
                id: uuidv4(),
                parentId: uuid1,
                title: "菜单组",
                group: [
                  {
                    id: uuidv4(),
                    parentId: uuid1,
                    title: "配置菜单1",
                    url: "/",
                  },
                  {
                    id: uuidv4(),
                    parentId: uuid1,
                    title: "配置菜单2",
                    url: "/",
                  },
                ],
              },
              {
                id: uuidv4(),
                parentId: uuid1,
                title: "工作台",
                group: [
                  {
                    id: uuidv4(),
                    parentId: uuid1,
                    title: "工作台1",
                    url: "/",
                  },
                  {
                    id: uuidv4(),
                    parentId: uuid1,
                    title: "工作台2",
                    url: "/",
                  },
                ],
              },
              {
                id: uuidv4(),
                parentId: uuid1,
                title: "统计报表",
                group: [
                  {
                    id: uuidv4(),
                    parentId: uuid1,
                    title: "统计报表1",
                    url: "/",
                  },
                  {
                    id: uuidv4(),
                    parentId: uuid1,
                    title: "统计报表2",
                    url: "/",
                  },
                ],
              },
            ],
          },
        ],
      };
    },
  },
] as MockMethod[];
