
// get data
async function getData() {
    let result = await fetch("./db/db.json")
        .then((response) => response.json());
    return result;
}
getData().then((result) => showData(result));



// add to cart
let cart = document.querySelector('.cart .container');
let cartItem = document.createElement('div');


function plus(id) {

    let btn = document.querySelector('.goods__plus');
    let attribute = btn.getAttribute(attributeName);


    console.log(attribute);
    console.log(id);
    cartItem.textContent = id;
    cart.appendChild(cartItem);
}


// show content
function showData(allGoods) {
    let outGoods = '';
    for (let key in allGoods) {
        outGoods += `
        <div class="goods__item">
            <a><img src="${allGoods[key].image}"/></a>
            <div class="goods__tx">
                <p>ID - ${allGoods[key].id}</p>
                <h2>${allGoods[key].name}</h2>
                <p>${allGoods[key].desc}</p>
                <span>${allGoods[key].availability}</span>
                <div class="goods__bottom">
                    <b>${allGoods[key].price} $</b>
                    <div class="goods__btn">
                        <button class="goods__minus" data-id="${key}">-</button>
                        <button class="goods__plus" data-id="${key}" data-name="${allGoods[key].name}" onclick="plus(${allGoods[key].name})">+</button>
                    </div>
                </div>
            </div>
        </div>`
    }
    let goodsContent = document.querySelector('.goods .container');
    goodsContent.innerHTML = outGoods;

}
showData();








