var  TV = {
    "p2001": { 
      name: 'Телевизор SAMSUNG UE43T53', 
      price: 14499, 
      img: 'https://i.eldorado.ua//240x220/goods_images/1038962/6806715-1603461564.jpg',
      brand: 'Samsung'
    },
    "p2002": { 
      name: 'Телевизор LG 49NANO806NA', 
      price: 19599, 
      img: 'https://i.eldorado.ua//240x220/goods_images/1038962/7178679-1622526224.jpg',
      brand: 'Lg'
    },
    "p2003": { 
        name: 'Телевизор KIVI 40U710KB', 
        price: 7999, 
        img: 'https://i.eldorado.ua//240x220/goods_images/1038962/6838081-1605075257.jpg',
        brand: 'Kivi' 
    },
    "p2004": { 
        name: 'Телевизор LG OLED55C14LB', 
        price: 49999, 
        img: 'https://i.eldorado.ua//240x220/goods_images/1038962/7053899-1616490124.jpg',
        brand: 'Lg' 
    },
    "p2005": { 
        name: 'Телевизор KIVI 24H600KW', 
        price: 6999, 
        img: 'https://i.eldorado.ua//240x220/goods_images/1038962/6824633-1604408096.jpg',
        brand: 'Kivi'  
    },
    "p2006": { 
        name: 'Телевизор KIVI 65U710KB', 
        price: 23999, 
        img: 'https://i.eldorado.ua//240x220/goods_images/1038962/7403007-1632378249.jpg',
        brand: 'Kivi' 
    },
    "p2007": { 
        name: 'Телевизор SONY KD50X81JR',
        price: 27999, 
        img: 'https://i.eldorado.ua//240x220/goods_images/1038962/7190869-1623041367.jpg',
        brand: 'Sony' 
    },
    "p2008": { 
        name: 'Телевизор SONY KD55A8BR2', 
        price: 69899, 
        img: 'https://i.eldorado.ua//240x220/goods_images/1038962/6854073-1606118325.jpg',
        brand: 'Sony'  
    },
    "p2009": { 
        name: 'Телевизор TCL 50C715', 
        price: 15999, 
        img: 'https://i.eldorado.ua//240x220/goods_images/1038962/6700361-1596542867.png',
        brand: 'Tcl' 
    },
    "p2010": { 
        name: 'Телевизор TCL 32ES560', 
        price: 7999, 
        img: 'https://i.eldorado.ua//240x220/goods_images/1038962/6656127-1592318728.jpg',
        brand: 'Tcl' 
    },
    "p2011": { 
        name: 'Телевизор SAMSUNG QE50Q60A', 
        price: 25999, 
        img: 'https://i.eldorado.ua//240x220/goods_images/1038962/7352957-1630386469.jpg',
        brand: 'Samsung'  
    },
    "p2012": { 
        name: 'Телевизор SAMSUNG QE65QN9', 
        price: 69999, 
        img: 'https://i.eldorado.ua//240x220/goods_images/1038962/7353087-1630391372.jpg',
        brand: 'Samsung'  
    }
  };

var out =' ';
for (let key in TV) {
  out+= ` <div class="card ${TV[key]['brand']}">`
  out+=  `<div class="card-img">`
  out+= `<p class="text-center"><img class="img-img" src="${TV[key]['img']}"></p>`
  out+=  `</div>`
  out+= `<h3 class="card-name">${TV[key]['name']}</h3>`
  out+= `<p class="card-price-name"><span class="card-price">${TV[key]['price']}</span> грн.</p>`
  out+= `<button  class="btn-buy" data-articul="${key}"><span class="fa fa-cart-plus"></span> Купити</button>`
  out+= `</div>`
}

document.querySelector('.list2').innerHTML = out;

