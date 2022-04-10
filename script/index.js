import  {products}  from "./Data.js";

const newProduct = document.querySelector('.new-product')
const listProduct = document.querySelector('.list-product')
const d = new Date()
 

const productLast = products[products.length - 1]
newProduct.innerHTML = `
    <div class='especially-product' >
        <div class='image'>
            <img src='${productLast.image}' />
        </div>
        <div class='info-product-new'>
            <h3> ${productLast.name} </h3>
            <div class='discount'> 
                <span> ${productLast.price} </span>
                 9.000.000 VND 
            </div>
            <p class='text'>đặt trước ngay</p>
            <p class='date-sale'>từ ngày: ${d.getDay() - 10}.${d.getMonth()} - ${d.getDay() }.${d.getMonth() + 2} .
            ${d.getFullYear()}
             </p>
            
            <a class='btn'> thêm vào giỏ </a>
        </div>
    </div>
`

 const newListProduct = products.map(item => {
    return `
    <div class='item-product' >
        <div class='image'>
            <img src='${item.image}' />
        </div>
        <div class='info-product'>
            <h3> ${item.name} </h3>
            <span> ${item.price} VND</span>
        </div>
        <a class='btn'> thêm vào giỏ </a>
        
    </div>
    `
})

listProduct.innerHTML = newListProduct



