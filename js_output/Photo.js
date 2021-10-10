var  Photo = {
    "p4001": { 
      name: 'Фотоаппарат CANON EOS 250D BK 18-55 IS STM (3454C007AA)', 
      price: 19999, 
      img: 'https://i.eldorado.ua//240x220/goods_images/1039016/6372079-1564738913.jpg',
      brand: 'Canon'
    },
    "p4002": { 
      name: 'Фотоаппарат цифровой SONY Alpha 6400 kit 16-50 mm Black ', 
      price: 28599, 
      img: 'https://i.eldorado.ua//240x220/goods_images/1039016/6043261.png',
      brand: 'Sony'
    },
    "p4003": { 
        name: 'Фотоаппарат CANON EOS 6D MKII Body (1897C031)', 
        price: 25499, 
        img: 'https://i.eldorado.ua//240x220/goods_images/1039016/6106213-1513941230.jpg',
        brand: 'Canon' 
    },
    "p4004": { 
        name: 'Фотоаппарат зеркальный NIKON D3500 + AF-P 18-55 ', 
        price: 15999, 
        img: 'https://i.eldorado.ua//240x220/goods_images/1039016/6463081-1574852506.jpg',
        brand: 'Nikon' 
    },
    "p4005": { 
        name: 'Фотоаппарат PANASONIC LUMIX DMC-G7KEE Black Kit 14-42mm', 
        price: 17199, 
        img: 'https://i.eldorado.ua//240x220/goods_images/6067241.jpg',
        brand: 'Panasonic'  
    },
    "p4006": { 
        name: 'Фотокамера PANASONIC LUMIX DMC-FZ1000 II', 
        price: 23999, 
        img: 'https://i.eldorado.ua//240x220/goods_images/1039016/6397747-1568123163.jpg',
        brand: 'Panasonic' 
    },
    "p4007": { 
        name: 'Фотокамера CANON EOS M50 Mark II + 15-45 IS STM Kit White ',
        price: 30999, 
        img: 'https://i.eldorado.ua//240x220/goods_images/1039016/7187997-1622727184.jpg',
        brand: 'Canon' 
    },
    "p4008": { 
        name: 'Фотоаппарат SONY DSC-RX10 Mk IV (DSCRX10M4.RU3)', 
        price: 55899, 
        img: 'https://i.eldorado.ua//240x220/goods_images/1039016/6169777-1525952752.jpg',
        brand: 'Sony'  
    },
    "p4009": { 
        name: 'Фотоаппарат NIKON D850 Body (VBA520AE)', 
        price: 80999, 
        img: 'https://i.eldorado.ua//240x220/goods_images/1039016/6167625-1525524758.jpg',
        brand: 'Nikon' 
    },
    "p4010": { 
        name: 'Фотокамера цифровая FUJIFILM X-T30 Body Black (16619566)', 
        price: 25999, 
        img: 'https://i.eldorado.ua//240x220/goods_images/1039016/6319851-1580474405.jpg',
        brand: 'Fujifilm' 
    },
    "p4011": { 
        name: 'Фотоаппарат цифровой FUJIFILM X-T3 + XF 18-55mm F2.8-4.0', 
        price: 49999, 
        img: 'https://i.eldorado.ua//240x220/goods_images/1039016/6362953-1563443873.jpg',
        brand: 'Fujifilm'  
    },
    "p4012": { 
        name: 'Фотоаппарат цифровой FUJIFILM X-T3 + XF 18-55mm F2.8-4.0 Kit Silver', 
        price: 48999, 
        img: 'https://i.eldorado.ua//240x220/goods_images/1039016/6288185-1580464971.jpg',
        brand: 'Fujifilm'  
    }
  };

var out =' ';
for (let key in Photo) {
  out+= ` <div class="card ${Photo[key]['brand']}">`
  out+=  `<div class="card-img">`
  out+= `<p class="text-center"><img src="${Photo[key]['img']}"></p>`
  out+=  `</div>`
  out+= `<h3 class="card-name">${Photo[key]['name']}</h3>`
  out+= `<p class="card-price-name"><span class="card-price">${Photo[key]['price']}</span> грн.</p>`
  out+= `<button  class="btn-buy" data-articul="${key}"><span class="fa fa-cart-plus"></span> Купити</button>`
  out+= `</div>`
}

document.querySelector('.list4').innerHTML = out;
