import  {products}  from "./Data.js";

const $ = document.querySelector.bind(document)

const newProduct = $('.new-product')
const listProduct = $('.list-product')
const d = new Date()
 



// xử lý sản phẩm mới
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
            
            <a class='btn' onclick="alert('vui lòng đăng nhập')"> thêm vào giỏ </a>
        </div>
    </div>
`

// xử lý danh sách sản phẩm
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
        <a class='btn' onclick="alert('vui lòng đăng nhập')"> thêm vào giỏ </a>
        
    </div>
    `
})

listProduct.innerHTML = newListProduct.join('')



// xử lý menu mobile
const btnMenuMobile = $('.menu-bar')
const menuMobile = $('.header-menu')

btnMenuMobile.addEventListener('click', () => {
    menuMobile.classList.toggle('active')
})