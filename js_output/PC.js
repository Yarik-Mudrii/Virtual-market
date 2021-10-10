var  PC = {
    "p3001": { 
      name: 'Ноутбук ASUS TUF Gaming F15 FX506LH-HN002 Fortress Gray', 
      price: 23999, 
      img: 'https://i.eldorado.ua//240x220/goods_images/1039096/7307557-1627550846.jpg',
      brand: 'Asus'
    },
    "p3002": { 
      name: 'Ноутбук LENOVO V15-ADA Iron Grey (82C700E3RA)', 
      price: 13599, 
      img: 'https://i.eldorado.ua//240x220//goods_images/1580571/926b21a4e94192c7500177543165cf13.jpg',
      brand: 'Lenovo'
    },
    "p3003": { 
        name: 'Ноутбук ACER Aspire 3 A315-57G-5212 Charcoal Black', 
        price: 17499, 
        img: 'https://i.eldorado.ua//240x220//goods_images/1543231/fda3d869c5e248c43e04a94a5f1bb51a.jpg',
        brand: 'Acer' 
    },
    "p3004": { 
        name: 'Ноутбук ASUS X515EP-BQ260 Transparent Silver', 
        price: 21999, 
        img: 'https://i.eldorado.ua//240x220/goods_images/1039096/7345127-1629971866.jpg',
        brand: 'Asus' 
    },
    "p3005": { 
        name: 'Ноутбук APPLE MacBook Air Space Grey (MGN63)', 
        price: 30999, 
        img: 'https://i.eldorado.ua//240x220/goods_images/1039096/6839181-1605093629.jpg',
        brand: 'Apple'  
    },
    "p3006": { 
        name: 'Ноутбук APPLE MacBook Pro 13" Silver (MYDC2)', 
        price: 53999, 
        img: 'https://i.eldorado.ua//240x220//goods_images/1473971/c41a270e946cfbfc8a18b9f17bf73173.jpg',
        brand: 'Apple' 
    },
    "p3007": { 
        name: 'Ноутбук ASUS ROG Strix G15 Advantage Edition G513QY-HQ008',
        price: 41999, 
        img: 'https://i.eldorado.ua//240x220/goods_images/1039096/7331913-1628846836.jpg',
        brand: 'Asus' 
    },
    "p3008": { 
        name: 'Ноутбук ACER Nitro 5 AN515-55-74SK Obsidian Black', 
        price: 40899, 
        img: 'https://i.eldorado.ua//240x220/goods_images/1039096/7033339-1615463398.jpg',
        brand: 'Acer'  
    },
    "p3009": { 
        name: 'Ноутбук LENOVO Legion 5 15IMH05H Phantom Black', 
        price: 28999, 
        img: 'https://i.eldorado.ua//240x220//goods_images/1452679/a6f465b9b036e90dff11389ba100a471.jpg',
        brand: 'Lenovo' 
    },
    "p3010": { 
        name: 'Ноутбук HP Pavilion 15-eg0040ua Natural Silver (437L0EA)', 
        price: 18999, 
        img: 'https://i.eldorado.ua//240x220//goods_images/1583005/b3106797593e1e3af6f74b09ea254502.jpg',
        brand: 'Hp' 
    },
    "p3011": { 
        name: 'Ноутбук HP Laptop 14s-fq0071ur Natural Silver (2Z5N9EA)', 
        price: 16999, 
        img: 'https://i.eldorado.ua//240x220/goods_images/1039096/7010693-1614343764.jpg',
        brand: 'Hp'  
    },
    "p3012": { 
        name: 'Ноутбук LENOVO IdeaPad S145 15 Granite Black (81UT00HFRA)', 
        price: 13999, 
        img: 'https://i.eldorado.ua//240x220/goods_images/1039096/6687265-1595226778.jpg',
        brand: 'Lenovo'  
    }
  };

var out =' ';
for (let key in PC) {
  out+= ` <div class="card ${PC[key]['brand']}">`
  out+=  `<div class="card-img">`
  out+= `<p class="text-center"><img src="${PC[key]['img']}"></p>`
  out+=  `</div>`
  out+= `<h3 class="card-name">${PC[key]['name']}</h3>`
  out+= `<p class="card-price-name"><span class="card-price">${PC[key]['price']}</span> грн.</p>`
  out+= `<button  class="btn-buy" data-articul="${key}"><span class="fa fa-cart-plus"></span> Купити</button>`
  out+= `</div>`
}

document.querySelector('.list3').innerHTML = out;
