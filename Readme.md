# Проект "INTAS Test"

Проект создан в рамках тестирования на вакансию ***Frontend-разработчик (Junior)*** в **[ООО «ИНТАС-Компани»](http://intas-company.com/)**


* * *
Разработчик: **[Роман Демин](https://htmlacademy.ru/profile/id219593)**

*** 
## Задача
Необходимо написать приложение, позволяющее выбирать тест из списка доступных тестов, выполнять их, а по завершению выполнения, узнать результаты и просмотреть правильные/неправильные варианты ответов.

### Ссылки на материалы

- **[Макет Figma](https://www.figma.com/file/VEinFefloRRLrI9G50BUFQ/Intas-test?node-id=0%3A1)**

- **Шрифты**
  - **[Nunito](https://fonts.google.com/specimen/Nunito)**
  - **[Rubik](https://fonts.google.com/specimen/Rubik)**

* * *
### Общие технические требования

1. Стандарты вёрстки: **HTML5**, **CSS3**
2. Семантически правильная вёрстка (каждый html-элемент используется осмысленно и по назначению)
3. Адаптивность сетки: мобильная, планшетная и десктопная версии по принципу **Desktop First**
На всех промежуточных разрешениях используется резиновая вёрстка
4. Методология: **БЭМ**
5. Фреймворки и сторонние библиотеки: **не используются**
6. Препроцессор: **SCSS**
7. Инструмент автоматизации: **Gulp**
8. Кроссбраузерность: обязательно поддержка **IE 11**.
9. Нестандартные шрифты подключены **локально**.
10. **JavaScript**: модальные окна с формой, главное меню сайта. Важно: меню должны быть работоспособным при отключенном JavaScript!
11. **Требования к JavaScript**:
  * ES6 и выше с транспиляцией в ES5
  * localStorage/sessionStorage
12. Система управления версиями: **Git**
    * Папка build со всем её содержимым должна попадать в репозиторий на github.
13. Сборка проекта: **Gulp**
14. По возможности применять шаблонизаторы (pugjs)


* * *
### Что сделано

* Работа с дизайном проекта:
  * Из макета в редакторе Figma извлечены параметры шрифтов, цвета, фоны, текст, svg-иконки.
  * Состояния кнопок (hover, focus, active) сделаны единообразными:
    * hover: текст - базовый красный, обводка - базовый красный
    * focus: текст - базовый белый, заливка - базовый красный, 
    * active: частичная прозрачность кнопки
* Адаптивная и семантическая вёрстка страницы index.html
* Реализована возможность навигации с клавиатуры
* Реализован **Pixel Perfect** подход к верстке с учетом расхождений в макете (расположение некоторых элементов не идентично на разных страницах)
* C использованием **JavaScript** реализовано:
  - загрузка (AJAX) тестов из файла **tests.php**
  - заполнение полей теста(название и описание) данными из **tests.php**
  - главное меню выбора теста
  - обработка нажатий на кнопки интерфейса
  - проверка теста(валидация формы ввода) и вывод результатов
  - модальное окно выхода из теста
  - результаты тестов сохраняются в LocalStorage
* Сборка проекта автоматизирована с использованием **Gulp**.
* Проведена валидация и тестирование online-сервисами:
  * [корректность БЭМ-структуры](https://yoksel.github.io/html-tree/)
  * [HTML checker](https://validator.w3.org/nu/)
  * [CSS validator](https://jigsaw.w3.org/css-validator/validator.html.ru)
* Страница загружена на хостинг и проведено тестирование производительности
  * [PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/)

* * *
#### Не реализовано
  * поддержка IE11
  * таймер

* * *
### Краткая инструкция по развертыванию проекта

#### Подготовка системы автоматизации сборки

**Установите**
  * [Node.js](https://nodejs.org/ru/) - последнюю версию LTS
  * NPM - установка включена в установку Node.js
    * Проверьте корректность установки Node и NPM:
        ```bash
            node --version
            npm --version
        ```
  * Gulp-cli - v4.x: 
    ```bash
        npm install --global gulp-cli
    ```
    * Проверьте корректность установки Gulp:
    ```bash
        gulp --version
    ```

### Порядок работы с проектом:
* Запустите терминал из корневой директории проекта
* Установите npm-пакеты плагинов сборки и тестирования (devDependencies из файла package.json) 
  ```bash
      npm i
  ```
* Протестируйте код на соответствия style-guides
  ```bash 
      npm test
  ```
* Соберите проект без запуска локального сервера
  ```bash
      npm run build
  ```
* Запустите локальный сервер
  ```bash
      npm start
  ```
