var  GameZone = {
    "p6001": { 
      name: 'Беспроводной геймпад Sony Play Station 5 DualSense White ', 
      price: 2099, 
      img: 'https://i.eldorado.ua//240x220/goods_images/1284891/7173337-1622129406.jpg',
      brand: 'Gamepad'
    },
    "p6002": { 
      name: 'Руль Thrustmaster T80 Ferrari 488 GTB Edition PC/PS4 (4160672)', 
      price: 3799, 
      img: 'https://i.eldorado.ua//240x220/goods_images/1284891/6484955-1576504508.jpg',
      brand: 'Rudder'
    },
    "p6003": { 
        name: 'Гарнiтура ігрова HyperX Cloud Core 7.1 Black', 
        price: 1899, 
        img: 'https://i.eldorado.ua//240x220/goods_images/1038998/6741573-1599720764.jpg',
        brand: 'Sound' 
    },
    "p6004": { 
        name: 'Гарнитура игровая JBL Quantum 600 Black ', 
        price: 3999, 
        img: 'https://i.eldorado.ua//240x220/goods_images/1038998/6803461-1603295651.jpg',
        brand: 'Sound' 
    },
    "p6005": { 
        name: 'Геймпад SONY PS Dualshock v2 Rose Gold (9949206)', 
        price: 1359, 
        img: 'https://i.eldorado.ua//240x220/goods_images/1038939/6407709-1568810976.png',
        brand: 'Gamepad'  
    },
    "p6006": { 
        name: 'Гарнітура ігрова JBL Quantum 800 Black ', 
        price: 6499, 
        img: 'https://i.eldorado.ua//240x220/goods_images/1038998/6803487-1603296652.jpg',
        brand: 'Sound' 
    },
    "p6007": { 
        name: 'Игровой руль Logitech G29 Driving Force Racing Wheel',
        price: 8888, 
        img: 'https://i.eldorado.ua//240x220//goods/2909/2909327.png',
        brand: 'Rudder' 
    },
    "p6008": { 
        name: 'Руль Thrustmaster T150 RS PRO PC/PS4 (4160696)', 
        price: 10899, 
        img: 'https://i.eldorado.ua//240x220/goods_images/1284891/7037013-1615562523.jpg',
        brand: 'Rudder'  
    },
    "p6009": { 
        name: 'Гарнітура ігрова ASUS ROG Strix Go 2.4 Electro Punk USB Black', 
        price: 6999, 
        img: 'https://i.eldorado.ua//240x220/goods_images/1038998/6953757-1612195178.jpg',
        brand: 'Sound' 
    },
    "p6010": { 
        name: 'Геймпад Sony PS4 Dualshock v2 Magma Red (9894353)', 
        price: 1899, 
        img: 'https://i.eldorado.ua//240x220/goods_images/1038939/6183083-1528379045.jpg',
        brand: 'Gamepad' 
    },
    "p6011": { 
        name: 'Геймпад беспроводной Sony PS Dualshock v2 Midnight Blue', 
        price: 1775, 
        img: 'https://i.eldorado.ua//240x220/goods_images/1038939/6186773-1529328197.jpg',
        brand: 'Gamepad'  
    },
    "p6012": { 
        name: 'Геймпад беспроводной Sony PS Dualshock v2 Berry Blue ', 
        price: 1999, 
        img: 'https://i.eldorado.ua//240x220/goods_images/1284891/6857563-1606308099.jpg',
        brand: 'Gamepad'  
    }
  };

var out =' ';
for (let key in GameZone) {
  out+= ` <div class="card ${GameZone[key]['brand']}">`
  out+=  `<div class="card-img">`
  out+= `<p class="text-center"><img src="${GameZone[key]['img']}"></p>`
  out+=  `</div>`
  out+= `<h3 class="card-name">${GameZone[key]['name']}</h3>`
  out+= `<p class="card-price-name"><span class="card-price">${GameZone[key]['price']}</span> грн.</p>`
  out+= `<button  class="btn-buy" data-articul="${key}"><span class="fa fa-cart-plus"></span> Купити</button>`
  out+= `</div>`
}

document.querySelector('.list6').innerHTML = out;
