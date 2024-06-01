async function getData(name) {
  const app = await fetch(`https://shopier-801d293fc02d.herokuapp.com/${name}`);
  const data = await app.json();
  return  data;
}

const pro_collection = document.querySelector('.pro-collection');
const header_logo = document.querySelector('.header-logo');
const pro_collection_new = document.querySelector('.pro-collection.new');
const pro_collection_all = document.querySelector('.pro-collection.all');
const shopInfo =  getData("shopInfo")
const products =  getData("products")
const all_products =  getData("products")
const new_products =  getData("products")
const menuIcon = document.querySelector('.ionicon');
const navbar = document.querySelector('.header-list-nav ul');


console.log(menuIcon)
menuIcon.addEventListener('click', () => {
  navbar.classList.toggle('active');
})


shopInfo.then(result => {

  header_logo.innerHTML += `
    <h2 href="/index.html">${result.name}</h2>
  `
})

products.then(result=> {
  result.forEach((item,index) => {

    if(index >= 5){
      return undefined
    }else{

      pro_collection.innerHTML += `
      <div class="product-cart">
      <img src="${item.media[0].url}" alt="product image" />
      <span>ertenes</span>
      <a href="${item.url}"><h4>${item.title}</h4></a>
      <div class="stars">
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
      </div>
      <h4 class="price">${item.priceData.price} ${item.priceData.currency}</h4>
      <i class="fa-solid fa-cart-shopping buy-icon" onclick="addToCart(event,${item.id})" ></i>
      </div>
    
      `
    }
  });
})


new_products.then(result=> {
  result.forEach((item,index) => {

    if(index <=3 ){
      return undefined
    }else{

      pro_collection_new.innerHTML += `
      <div class="product-cart">
      <img src="${item.media[0].url}" alt="product image" />
      <span>ertenes</span>
      <a href="${item.url}"><h4>${item.title}</h4></a>
      <div class="stars">
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
      </div>
      <h4 class="price">${item.priceData.price} ${item.priceData.currency}</h4>
      <i class="fa-solid fa-cart-shopping buy-icon" onclick="addToCart(event,${item.id})" ></i>
      </div>
    
      `
    }
  });
})

all_products.then(result=> {
  result.forEach((item,index) => {



      pro_collection_all.innerHTML += `
      <div class="product-cart">
      <img src="${item.media[0].url}" alt="product image" />
      <span>ertenes</span>
      <a href="${item.url}"><h4>${item.title}</h4></a>
      <div class="stars">
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
      </div>
      <h4 class="price">${item.priceData.price} ${item.priceData.currency}</h4>
      <i class="fa-solid fa-cart-shopping buy-icon" onclick="addToCart(event,${item.id})" ></i>
      </div>
    
      `
  });
})

// focus the cursor on the email-address input
const emailField = document.getElementById("email-address-input");
emailField.focus({
  preventScroll: true,
});
