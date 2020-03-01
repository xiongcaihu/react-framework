## TODO
1. eslint+prettier ok
2. commit format 
3. 路由解决方案 react-router-dom
4. redux方案 
5. 国际化 react-intl

## 项目规范
1. 框架选型
   1. react
   2. typescript
   3. eslint
   4. prettier
   5. redux
   6. react-router-dom
      1. react-router-config
      2. history mode
   7. pre-commit:规范git commit提交
   8. pm2
   9. express
   10. antd@4.0.0-rc1.0
   11. react-intl
2. 项目组织规范
   1. .vscode（vscode工作区配置）
   2. config（webpack构建配置）
   3. docs（前端项目文档）
   4. expressServer（部署服务器）
   5. public（根目录html文件）
   6. scripts（启动脚本）
   7. src（项目代码）
      1. components/（项目通用展示组件）
         1. compxx/
            1. compxx.tsx
            2. compxx.scss
      2. pages/
      3. assets/（资源目录，img,svg...）
      4. routerConfig（路由配置）
      5. reduxConfig（redux以及actions配置）
         1. store
         2. actions
      6. locales（国际化）
         1. zh（中文）
         2. en（英文）
      7. models（数据模型）
      8. services（每个page对应的服务）
      9. utils（工具集合）
      10. index.tsx（应用入口）
   8. .editorconfig（编辑器格式化设定）
   9.  .eslintignore（eslint忽略项）
   10. .eslintrc.js（eslint设定）
   11. .gitignore（git提交忽略项）
   12. .prettierignore（prettier忽略项）
   13. .prettierrc（prettier设定）
   14. package.json
   15. README.md
   16. tsconfig.json（ts编译设定）
3. 编码规范（参考 .eslintrc.js 配置）
4. git管理规范
   1. 遵循git-flow工作规范
5. 持续集成
