const products = [
    { id: 1, title: 'BigPanties', price: 2000 },
    { id: 2, title: 'LittlePanties', price: 500 },
    { id: 3, title: 'Panties', price: 1000 },
    { id: 4, title: 'MiniPanties', price: 100 },
];
const renderProduct = (title, price) => {
    return `<div class="product-item">
                <h3>${title}</h3>
                <img class="pantiesImg" src="./js/651694854_c.jpg" alt="">
                <p>${price}</p>
                <button class="buy-btn">Купить</button>
            </div>`
};
const renderPage = list => {
    const productsList = list.map(item => renderProduct(item.title, item.price));
    console.log(productsList);
    document.querySelector('.products').innerHTML = productsList.join(' ');
};

renderPage(products);