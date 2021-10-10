var  TechnikOfHome= {
    "p7001": { 
      name: 'Пральна машина LG F2J6HSR1W Quantum White', 
      price: 11999, 
      img: 'https://i.eldorado.ua//240x220/goods_images/1039034/6698997-1596454189.jpg',
      brand: 'Washing'
    },
    "p7002": { 
      name: 'Пилосос миючий BOSCH BWD41740 White', 
      price: 7799, 
      img: 'https://i.eldorado.ua//240x220/goods_images/1039038/6977909-1613127668.jpg',
      brand: 'Vacuum'
    },
    "p7003": { 
        name: 'Пилосос SAMSUNG VCC45W0S36/UK Blue', 
        price: 2899, 
        img: 'https://i.eldorado.ua//240x220/goods_images/1039038/6752781-1600695965.jpg',
        brand: 'Vacuum' 
    },
    "p7004": { 
        name: 'Плита комбінована BEKO FSM 52335 DXDS', 
        price: 8999, 
        img: 'https://i.eldorado.ua//240x220/goods_images/1039046/6527969-1579783937.png',
        brand: 'Plate' 
    },
    "p7005": { 
        name: 'Прально-сушильна машина LG F2J6HG0W', 
        price: 16399, 
        img: 'https://i.eldorado.ua//240x220/goods_images/1039034/6460135-1574439247.jpg',
        brand: 'Washing'  
    },
    "p7006": { 
        name: 'Плита комбінована ARTEL APETITO 50 10-E GREY', 
        price: 6499, 
        img: 'https://i.eldorado.ua//240x220/goods_images/1039046/7154167-1621260537.jpg',
        brand: 'Plate' 
    },
    "p7007": { 
        name: 'Кавомашина DELONGHI Autentica Cappuccino ETAM',
        price: 18888, 
        img: 'https://i.eldorado.ua//240x220/goods_images/1039089/6693337-1595849020.jpg',
        brand: 'Cafe' 
    },
    "p7008": { 
        name: 'Кавова машина DELONGHI ECAM 370.95 T Dinamica Plus', 
        price: 30899, 
        img: 'https://i.eldorado.ua//240x220/goods_images/1039089/6265407-1543487543.png',
        brand: 'Cafe'  
    },
    "p7009": { 
        name: 'Пилосос SAMSUNG VC07T353MHP/UK Cherry', 
        price: 3699, 
        img: 'https://i.eldorado.ua//240x220/goods_images/1039038/6839517-1605103312.jpg',
        brand: 'Vacuum' 
    },
    "p7010": { 
        name: 'Пральна машина SAMSUNG WW70K42101WDUA', 
        price: 12899, 
        img: 'https://i.eldorado.ua//240x220/goods_images/1039034/6351781-1560952972.jpg',
        brand: 'Washing' 
    },
    "p7011": { 
        name: 'Кавомашина SIEMENS TI351209RW Star', 
        price: 11775, 
        img: 'https://i.eldorado.ua//240x220/goods_images/1039089/6863303-1606579848.jpg',
        brand: 'Cafe'  
    },
    "p7012": { 
        name: 'Плита газова GRETA GG 5770 MN 13(W)/1470-00-20АА', 
        price: 3999, 
        img: 'https://i.eldorado.ua//240x220/goods_images/1039046/6701533-1596636943.jpg',
        brand: 'Plate'  
    }
  };

var out =' ';
for (let key in TechnikOfHome) {
  out+= ` <div class="card ${TechnikOfHome[key]['brand']}">`
  out+=  `<div class="card-img">`
  out+= `<p class="text-center"><img  src="${TechnikOfHome[key]['img']}"></p>`
  out+=  `</div>`
  out+= `<h3 class="card-name">${TechnikOfHome[key]['name']}</h3>`
  out+= `<p class="card-price-name"><span class="card-price">${TechnikOfHome[key]['price']}</span> грн.</p>`
  out+= `<button  class="btn-buy" data-articul="${key}"><span class="fa fa-cart-plus"></span> Купити</button>`
  out+= `</div>`
}

document.querySelector('.list7').innerHTML = out;
