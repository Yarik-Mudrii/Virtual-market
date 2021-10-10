var  Gadjet = {
    "p5001": { 
      name: 'Портативная акустика JBL Go 3 Black (JBLGO3BLK)', 
      price: 1399, 
      img: 'https://i.eldorado.ua//240x220/goods_images/1039123/6801237-1603202023.jpg',
      brand: 'Jbl'
    },
    "p5002": { 
      name: 'Портативная акустика Tronsmart Element Groove Black', 
      price: 799, 
      img: 'https://i.eldorado.ua//240x220/goods_images/1039123/6306035-1551700061.jpg',
      brand: 'Tronsmart'
    },
    "p5003": { 
        name: 'Портативна акустика JBL Go 2 Red (JBLGO2RED', 
        price: 899, 
        img: 'https://i.eldorado.ua//240x220/goods_images/1039123/6273677-1545325585.jpg',
        brand: 'Jbl' 
    },
    "p5004": { 
        name: 'Портативная акустика SVEN PS-415 Black', 
        price: 1271, 
        img: 'https://i.eldorado.ua//240x220/goods_images/1039123/7123515-1619204185.jpg',
        brand: 'Sven' 
    },
    "p5005": { 
        name: 'Портативная акустика TRONSMART Element T6 Mini Black', 
        price: 17199, 
        img: 'https://i.eldorado.ua//240x220/goods_images/1039123/6566493-1583160833.jpg',
        brand: 'Tronsmart'  
    },
    "p5006": { 
        name: 'Портативная акустика SVEN PS-485 Black', 
        price: 2320, 
        img: 'https://i.eldorado.ua//240x220/goods_images/1039123/6315839-1553511107.jpg',
        brand: 'Panasonic' 
    },
    "p5007": { 
        name: 'Портативная акустика Sony SRS-XB33 Black ',
        price: 4999, 
        img: 'https://i.eldorado.ua//240x220/goods_images/1039123/6801443-1603207968.jpg',
        brand: 'Sony' 
    },
    "p5008": { 
        name: 'Портативна акустика JBL Go 2 Blue (JBLGO2BLU)', 
        price: 899, 
        img: 'https://i.eldorado.ua//240x220/goods_images/1039123/6220647-1536308439.jpg',
        brand: 'Jbl'  
    },
    "p5009": { 
        name: 'Портативная акустика Sony SRS-XB31B Black', 
        price: 2399, 
        img: 'https://i.eldorado.ua//240x220/goods_images/1039123/6220817-1536318643.jpg',
        brand: 'Sony' 
    },
    "p5010": { 
        name: 'Портативная акустика Sony SRS-XB43 Black', 
        price: 6599, 
        img: 'https://i.eldorado.ua//240x220/goods_images/1039123/6830691-1604652342.jpg',
        brand: 'Sony' 
    },
    "p5011": { 
        name: 'Портативная акустика SVEN PS-425 Black', 
        price: 1494, 
        img: 'https://i.eldorado.ua//240x220/goods_images/1039123/7123499-1619203008.jpg',
        brand: 'Sven'  
    },
    "p5012": { 
        name: 'Портативная акустика Sony SRS-XB43 Blue ', 
        price: 6999, 
        img: 'https://i.eldorado.ua//240x220/goods_images/1039123/7065845-1617008802.jpg',
        brand: 'Sony'  
    }
  };

var out =' ';
for (let key in Gadjet) {
  out+= ` <div class="card ${Gadjet[key]['brand']}">`
  out+=  `<div class="card-img">`
  out+= `<p class="text-center"><img src="${Gadjet[key]['img']}"></p>`
  out+=  `</div>`
  out+= `<h3 class="card-name">${Gadjet[key]['name']}</h3>`
  out+= `<p class="card-price-name"><span class="card-price">${Gadjet[key]['price']}</span> грн.</p>`
  out+= `<button  class="btn-buy" data-articul="${key}"><span class="fa fa-cart-plus"></span> Купити</button>`
  out+= `</div>`
}

document.querySelector('.list5').innerHTML = out;
