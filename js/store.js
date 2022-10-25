const ar = [
    { Name: "Album 1.png", price: 10.3 },
    { Name: "Album 2.png", price: 9.4 },
    { Name: "Album 3.png", price: 7.13 },
    { Name: "Album 4.png", price: 2.3 },
    { Name: "Band Members.png", price: 6.4 },
    { Name: "Cofee.png", price: 8.7 },
    { Name: "Shirt.png", price: 12.1 },
    { Name: "HeaderBackground.jpg", price: 9.8 },
    { Name: "Shirt.png", price: 3.8 },
    { Name: "Cofee.png", price: 2.7 },
];
const box = document.querySelector('.shop-items');
const boxdet = document.querySelector('.cart-items');
const total = document.querySelector('.cart-total-price');
const cart_items = document.querySelector('.cart-items');
const scrol = document.querySelector('.scrollbar');


window.addEventListener('scroll', (event) => {

    console.log("***********************");
    console.log("scrollY:  ", window.scrollY);
    console.log("scrollTop:  ", document.documentElement.scrollTop);
    let y = document.body.clientHeight;
    console.log(y);
    console.log(window.innerHeight);
    // let x = Math.floor((window.scrollY * 100) / y) + "%";
    // scrol.style.width = x;

})




ar.forEach(e => {
    let nelem = document.createDocumentFragment();
    nelem = createitems(e);
    box.append(nelem);
})

function createitems(e) {
    let template = document.createElement('template');
    template.innerHTML = '<div class="shop-item">' +
        '<span class="shop-item-title">' + e.Name.slice(0, e.Name.length - 4) + '</span>' +
        '<img class="shop-item-image" src="' + './Images/' + e.Name + '">' +
        ' <div class="shop-item-details">' +
        ' <span class="shop-item-price">' + e.price + '$</span>' +
        ' <button class="btn btn-primary shop-item-button">ADD TO CART</button></div> </div>';
    return template.content;
}

const shop_item = document.querySelectorAll('.shop-item')
shop_item.forEach(elem => { btnclick(elem) });

function btnclick(e) {
    e.addEventListener('click', () => {
        cart_items.insertAdjacentHTML('beforeend', '<div class="cart-row"><div class="cart-item cart-column"><img class="cart-item-image" src="' + e.children[1].src + '"  width="100" height="100">' +
            '<span class="cart-item-title">' + (e.children[1].src).slice(29, e.children[1].src.length - 4) + '</span></div>' +
            '<span class="cart-price cart-column">' + e.children[2].children[0].innerText + '</span><div class="cart-quantity cart-column"><input class="cart-quantity-input" type="number" value="1"> <button class="btn btn-danger" type="button">REMOVE</button></div></div>');
        calc();
        //     ///******************************** events */
        const btn_danger = document.querySelectorAll('.btn-danger')

        const cartrow = document.querySelectorAll('.cart-items .cart-row');
        const input_quantity = document.querySelectorAll('.cart-quantity .cart-quantity-input');

        Removebtn(btn_danger[btn_danger.length - 1], cartrow[cartrow.length - 1]);

        inputadd(input_quantity[input_quantity.length - 1]);


    })

}

function Removebtn(btnd, div) {
    btnd.addEventListener('click', () => {
        div.remove();
        calc();
    })
}

function calc() {
    let c = 0;
    let inpn = 0;
    let s = 0;
    const cartrow = document.querySelectorAll('.cart-items .cart-row');
    cartrow.forEach(elem => {

        c = Number(elem.children[1].innerText.slice(0, elem.children[1].innerText.length - 1));
        inpn = Number(elem.children[2].children[0].value);
        s += (c * inpn);
    })
    total.innerText = s.toPrecision(3) + "$";
}

function inputadd(input_quantity) {
    input_quantity.addEventListener('input', () => {
        // alert("ok")
        calc();
    })
}