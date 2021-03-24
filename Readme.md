# Проект "INTAS Test"

**[Сайт в интернете](https://demindesign.ru/intas/)**.

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

1. Стандарты вёрстки: **HTML5**, **CSS3**, прогрессивное улучшение.
2. Семантически правильная вёрстка (каждый html-элемент используется осмысленно и по назначению).
3. Адаптивность сетки: мобильная, планшетная и десктопная версии по принципу **Desktop First**.
На всех промежуточных разрешениях используется резиновая вёрстка.
4. Методология: **БЭМ**.
5. Фреймворки и сторонние библиотеки: **не используются**.
6. Препроцессор: **SCSS**.
7. Инструмент автоматизации: **Gulp**.
8. Кроссбраузерность: Chrome, Firefox, Safari, обязательно поддержка **IE 11**.
9. Нестандартные шрифты подключены **локально**.
10. **JavaScript**: модальные окна с формой, главное меню сайта. Важно: меню должны быть работоспособным при отключенном JavaScript!
11. **Требования к JavaScript**:
  * ES6 и выше с транспиляцией в ES5;
  * localStorage/sessionStorage.
12. Система управления версиями: **Git**
    * Папка build со всем её содержимым должна попадать в репозиторий на github.
13. Сборка проекта: **Gulp**
14. По возможности применять шаблонизаторы (pugjs).

**Все проекты реализуются в соответствии с [критериями качества](https://www.notion.so/3-eec24ee0d0fd44a6b69562df857f15b1).**

* * *
### Что сделано

* Из макета в редакторе Figma извлечены параметры шрифтов, цвета, фоны, текст, svg-иконки.
* Если в макете элементы позиционированы с ошибкой, то эта ошибка не переносилась в верстку. То, что должно быть выровнено по центру, выравнивалось по центру.
* Адаптивная и семантическая вёрстка страницы index.html
* C использованием **JavaScript** реализовано:
  - главное меню выбора теста
  - логика работы теста
  - содержимое полей сохраняется в localStorage
  - модальное окно выхода из теста
* Автоматизирована сборка сайта с использованием **Gulp**.
* Проведена валидация и тестирование online-сервисами:
  * [корректность БЭМ-структуры](https://yoksel.github.io/html-tree/)
  * [HTML checker](https://validator.w3.org/nu/)
  * [CSS validator](https://jigsaw.w3.org/css-validator/validator.html.ru)
  * [PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/)

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
