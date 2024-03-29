<h1 align="center">Лабораторна роботи№3-4-5</h1>
<p align="center">з дисципліни</p>
<p align="center">«Основи розроблення програмного забезпечення на платформі Node.js»</p> 
<p align="center">Тема:</p>
 
 - «Express.js та EJS»(3)
 - «REST API та OpenAPI»(4)
 - «Робота з базами даних»(5)

<p align="center">Виконали:</p>
студенти групи ІТ-04

- Коновальчук Андрій Володимирович,
- Полтава Віолетта Віталіївна
- Яцентій Богдан Богданович

# Завдання (3 лабораторна)

# Хід роботи:

- Визначити за варіантом предметну область свого застосунку.
- Ознайомтесь з веб-фреймворком Express.js для Node.js - https://expressjs.com/uk/.
- На основі даного фреймворку та вбудованого шаблонізатора EJS розробити веб-сайт в вашій предметній області:
- Сутності описані класами, які зберігаються в памʼяті програми.
- - На кожну сутність розробити окрему сторінку на основі шаблонізатора.
- - На сторінці сутності можна побачити список всіх обʼєктів, створити новий та видалити існуючий.
- - Авторизація не обовʼязкова.

# Контрольні питання:`

1.  Опишіть механізм наслідування в JavaScript.
2.  Яку функцію виконує Express.js?
3.  Що таке middleware? Наведіть приклади.
4.  Яка різниця між використанням шаблонізаторів для відображення і динамічними сторінками на основі JavaScript?
5.  Як можна позбутися дублювання елементів сторінок використовуючи шаблонізатори, які повторюються - футер, хедер та інші?

Посилання:
https://expressjs.com/en/starter/hello-world.html
https://github.com/mde/ejs/wiki/Using-EJS-with-Express
https://www.digitalocean.com/community/tutorials/how-to-use-ejs-to-template-your-node-application

# Завдання (4 лабораторна)

# Хід роботи:

1. Ознайомитися з основними принципами побудови REST API за посиланнями або власноруч.
2. На основі проекта, зробленого в минулій лабораторній роботі, розробити REST API використовуючи REST API.
3. Мінімум для 3 сутностей визначити мінімум по 4 дії:

- GET метод для отримання списку сутностей та однієї окремої сутності за ідентифікатором. Для однієї з сутностей реалізувати фільтрація за допомогою query параметрів:
- - GET /api/v1/entity
- - GET /api/v1/entity/:id
- - GET /api/v1/entity?param=”value”
- POST метод для створення нового екземпляру сутності. Має бути присутня валідація всіх полів:
- - POST /api/v1/entity
- - DELETE для видалення:
- - DELETE /api/v1/entity/:id
- UPDATE для оновлення:
- - UPDATE /api/v1/entity/:id

4. Мінімум для однієї з сутностей додати пагінацію за допомогою query параметрів:

- - GET /api/v1/entity?page=5&items_per_page=10

5. Необхідно використовувати відповідний HTTP статус код у відповідях. Наприклад, 403 Not Found - якщо шукана сутність відсутня, 201 Created - після створення.
6. Попередня частина оцінюється в 8 балів, наступна частина дозволяє набрати ще 2 бали. Необхідно описати ваш API у форматі OpenAPI, наприклад, Swagger. Це може бути автоматично сгенерована документація або написана вручну.

# Контрольні питання:

1. Чому REST називається саме так?
2. Опишіть поняття ідемпотентності в REST API.
3. Опишіть особливості (параметри, кешування, що передається в тілі) кожного з використаних в лабораторній методів HTTP.
4. Опишіть різницю методів PUT та POST в REST API.
5. На які дії доречно використовувати кешування.
6. Опишіть як в REST API виглядає адреса для пошуку в списку обʼктів однієї з сутностей. Наприклад, всі предмети, які вивчаються учнем.
7. Опишіть яку роль відіграють статуси HTTP(2XX, 3XX, 4XX) в REST API.
8. Опишіть підхід HATEOAS.
9. Опишіть інші підходи для реалізації API.

Посилання:
https://restfulapi.net
https://dou.ua/forums/topic/34550
https://www.toptal.com/nodejs/secure-rest-api-in-nodejs
https://blog.logrocket.com/documenting-express-js-api-swagger
https://levelup.gitconnected.com/how-to-add-swagger-ui-to-existing-node-js-and-express-js-project-2c8bad9364ce

# Завдання (5 лабораторна)

# Хід роботи:

1. Необхідно використати базу даних для збереження даних вашого додатку. Це може бути MongoDB або будь-яка реляційна - MySQL, SQLite і т.п.
2. Реалізувати мінімум один OneToMany та один ManyToMany звʼязки для ваших сутностей.
3. Описати схему бази даних у форматі UML.
4. Попередня частина оцінюється в 8 балів, наступна частина дозволяє набрати ще 2 бали. Необхідно додатково використати базу даних Redis. Можливі сценарії (хоча б один варіант на вибір):

- Кешування запитів на читання
- Зберігання різного роду лічильників (наприклад, рахувати кількіст вподобань).
- Підрахунок запитів по сутностям для зберігання статистики (метрики).

# Контрольні питання:

1. Опишіть різницю між реляційними та документо-орієнтованими базами даних.
2. Опишіть поняття транзакцій. Чи є вони в реляційних та документо-орієнтованих базах даних?
3. Які є способи реалізувати ManyToMany звʼязок в базах даних?
4. Опишіть особливості БД Redis. Чому вона швидка? Де її краще використовувати?

Посилання:
https://mongoosejs.com/
https://www.mongodb.com/languages/express-mongodb-rest-api-tutorial
https://expressjs.com/en/guide/database-integration.html
https://www.sitepoint.com/using-redis-node-js/
