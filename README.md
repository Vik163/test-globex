# О проекте

- ## №1. Frontend

- использовал архитектуру FSD
- Axios
- Webpack
- добавил обработку ошибки загрузки, скелетоны и setTimeout на сервере (иммитация загрузки)
- скрипты

   ```javascript
      "start": "webpack serve --env port=3000",
      "dev": "concurrently \"npm start\" \"npm run dev:server\"",
      "dev:server": "node ./server --watch server.js",
      "build": "webpack  --env mode=production",
   ```

   ***

   ***

- ## №2. SQL

результаты второго и третьего задания находятся в папке test-results

- ### Таблица ответа

   ***

   ![Таблица ответа](./test-results/sql%20таблица%20ответа.png)

- ### Время ответа

   ***

   ![Время ответа](./test-results/sql%20время.png)

   ***

   ***

- ## №3. Backend

- ### Работа сервера

   ***

   ![Работа сервера](./test-results/Screen%20server.png)

- ### WebSoft Admin

   ***

   ![WebSoft Admin](./test-results/Screen%20WebSoft%20Admin.png)

- ### index.html

```html
<!DOCTYPE html>
<% _query_str="for $elem in collaborators return $elem" ;
personArray=XQuery(_query_str); _elems=ArrayExtract(personArray, 'fullname' );
%>
<html lang="en">
   <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Персонал</title>
   </head>

   <body>
      <% for(i in _elems) { %>
      <p><%=i%></p>
      <% } %>
   </body>
</html>
```
