const items = [{
        title: "Игрушка мячик",
        description: "Ваш питомец будет счастлив!",
        tags: ["cat", "dog"],
        price: 500,
        img: "./img/1.jpeg",
    },
    {
        title: "Игрушка лабиринт",
        description: "Поможет в развитии интеллекта!",
        tags: ["cat", "dog"],
        price: 900,
        img: "./img/2.jpeg",
    },
    {
        title: "Игрушка для котят",
        description: "Отвлечет вашего питомца!",
        tags: ["cat"],
        price: 300,
        img: "./img/3.jpeg",
    },
    {
        title: "Миска «Котик»",
        description: "Подойдет и для собак!",
        tags: ["cat", "dog"],
        price: 660,
        img: "./img/4.jpeg",
    },
    {
        title: "Лоток розовый",
        description: "Теперь вы можете забыть о проблемах с туалетом",
        tags: ["cat"],
        price: 400,
        img: "./img/5.jpeg",
    },
    {
        title: "Сухой корм для кошек",
        description: "Специальная формула для милых усатиков!",
        tags: ["cat"],
        price: 200,
        img: "./img/6.jpeg",
    },
    {
        title: "Сухой корм для собак",
        description: "Содержит полный комплекс витаминов",
        tags: ["dog"],
        price: 300,
        img: "./img/7.jpeg",
    },
    {
        title: "Игрушка для собак",
        description: "Теперь вы можете не переживать за личные вещи",
        tags: ["dog"],
        price: 500,
        img: "./img/8.jpeg",
    },
    {
        title: "Лежанка",
        description: "Идеальное место для отдыха!",
        tags: ["cat", "dog"],
        price: 1500,
        img: "./img/9.jpeg",
    },
    {
        title: "Поилка для собак",
        description: "Возьмите с собой в путешествие",
        tags: ["dog"],
        price: 800,
        img: "./img/10.jpeg",
    },
    {
        title: "Переноска",
        description: "Путешествуйте с комфортом!",
        tags: ["cat", "dog"],
        price: 3500,
        img: "./img/11.jpeg",
    },
    {
        title: "Поводок для собак",
        description: "Для чудесных прогулок вместе",
        tags: ["dog"],
        price: 800,
        img: "./img/12.jpeg",
    },
];

const itemsContainer = document.querySelector('#shop-items');
const itemTemplate = document.getElementById('item-template');

items.forEach(function(item) {
    const itemElement = itemTemplate.content.cloneNode(true);
    itemElement.querySelector('h1').textContent = item.title;
    itemElement.querySelector('p').textContent = item.description;
    itemElement.querySelector('.price').textContent = item.price;
    itemElement.querySelector('img').src = item.img;

    const tags = itemElement.querySelector('.tags');

    item.tags.forEach(function(tag) {
        const tagElement = document.createElement('div');
        tagElement.classList.add('tag');
        tagElement.textContent = tag;
        tags.append(tagElement);
    });


    itemsContainer.append(itemElement);
});

//Продвинутый уровень я сделала немного
const searchInput = document.querySelector('#search-input'); // текстовое поле для того, чтобы брать из него текст, который введёт пользователь
const searchButton = document.querySelector('#search-btn'); // кнопка
const siteSearchContainer = document.querySelector('.site-search'); // поиск

searchButton.addEventListener('click', function() { //добавили обработчик клика
    const siteSearchText = searchInput.value; //здесь будет хранится то, что пользователь введёт в поле

    const newSearch = document.createElement('div'); //создали элемент-заготовку текста, который будет вводиться в интерфейсе
    newSearch.classList.add('site-search'); // добавили сообщению класс из заготовки со стилями
    newSearch.textContent = siteSearchText; // с помощью свойства textContent укажем введённый пользователем текст

    if (siteSearchText) { // условие с проверкой наличия текста
        siteSearchContainer.append(newSearch); //добавили новое сообщение в конец контейнера  с помощью метода append
    }

    searchInput.value = ' '; //добавили очистку input
});