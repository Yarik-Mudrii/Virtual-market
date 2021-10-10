 var  smartphone = {
        "p1001": { 
          name: 'Смартфон APPLE iPhone 11 128GB Black (MHDH3FS/A)', 
          price: 22499, 
          img: 'https://i.eldorado.ua//240x220/goods_images/1038946/6409123-1568884807.jpg',
          brand: 'Apple'
        },
        "p1002": { 
          name: 'Смартфон APPLE iPhone 12 Pro Max 128GB Pacific Blue', 
          price: 39499, 
          img: 'https://i.eldorado.ua//240x220/goods_images/1038946/6792893-1602620646.jpg',
          brand: 'Apple'
        },
        "p1003": { 
            name: 'Смартфон XIAOMI Redmi Note 10 Pro 6/128GB Gray', 
            price: 8999, 
            img: 'https://i.eldorado.ua//240x220//goods_images/1513869/ef27bd661a7b4b3c4e20214907c2eba4.jpg',
            brand: 'Xiaomi' 
        },
        "p1004": { 
            name: 'Смартфон XIAOMI Redmi Note 10 Pro 6/64GB Bronze', 
            price: 8399, 
            img: 'https://i.eldorado.ua//240x220/goods_images/1038946/7025793-1615286808.jpg',
            brand: 'Xiaomi' 
        },
        "p1005": { 
            name: 'Смартфон XIAOMI Mi 11i 8/256GB Cosmic Black', 
            price: 17999, 
            img: 'https://i.eldorado.ua//240x220//goods_images/1540367/32b6cd6aecfbb1a56168892ef892fa9f.jpg',
            brand: 'Xiaomi'  
        },
        "p1006": { 
            name: 'Смартфон XIAOMI Redmi 9T 4/128GB Twilight Blue', 
            price: 5499, 
            img: 'https://i.eldorado.ua//240x220/goods_images/1038946/7045213-1616015673.jpg',
            brand: 'Xiaomi' 
        },
        "p1007": { 
            name: 'Смартфон OPPO Reno 5 Lite 8/128GB Fantastic Purple',
            price: 8700, 
            img: 'https://i.eldorado.ua//240x220/goods_images/1038946/7054537-1616495615.jpg',
            brand: 'Oppo' 
        },
        "p1008": { 
            name: 'Смартфон OPPO A54 4/64GB Starry Blue Stars', 
            price: 5222, 
            img: 'https://i.eldorado.ua//240x220/goods_images/1038946/7106051-1618556419.jpg',
            brand: 'Oppo'  
        },
        "p1009": { 
            name: 'Смартфон POCO X3 Pro 8/256GB Frost Blue', 
            price: 7999, 
            img: 'https://i.eldorado.ua//240x220/goods_images/1038946/7063313-1616761742.jpg',
            brand: 'Poco' 
        },
        "p1010": { 
            name: 'Смартфон POCO X3 Pro 8/256GB Phantom Black', 
            price: 7999, 
            img: 'https://i.eldorado.ua//240x220/goods_images/1038946/7063287-1616761424.jpg',
            brand: 'Poco' 
        },
        "p1011": { 
            name: 'Смартфон SAMSUNG Z Fold 3 12/256GB Phantom', 
            price: 54999, 
            img: 'https://i.eldorado.ua//240x220//goods_images/1591015/3e6c726812aad150149a5f3545d88d08.jpg',
            brand: 'Samsung'  
        },
        "p1012": { 
            name: 'Смартфон SAMSUNG S20 FE 8/256GB Gradient Blue', 
            price: 17999, 
            img: 'https://i.eldorado.ua//240x220//goods_images/1540713/a8dddc5585eb4bae1175b323e51bc0b1.jpg',
            brand: 'Samsung'  
        },
        "p1013": { 
            name: 'Смартфон APPLE iPhone 11 128GB Black (MHDH3FS/A)', 
            price: 22499, 
            img: 'https://i.eldorado.ua//240x220/goods_images/1038946/6409123-1568884807.jpg',
            brand: 'Apple'
          },
        "p1014": { 
            name: 'Смартфон OPPO Reno 5 Lite 8/128GB Fantastic Purple', 
            price: 9999, 
            img: 'https://i.eldorado.ua//240x220/goods_images/1038946/7054537-1616495615.jpg',
            brand: 'Oppo'
        },
        "p1015": { 
            name: 'Смартфон APPLE iPhone 12 64GB Blue (MGJ83FS/A)', 
            price: 27799, 
            img: 'https://i.eldorado.ua//240x220/goods_images/1038946/6793227-1602670620.jpg',
            brand: 'Apple'
          },
        "p1016": { 
            name: 'Смартфон OPPO A15 2/32GB Dynamic Black', 
            price: 3999, 
            img: 'https://i.eldorado.ua//240x220/goods_images/1038946/6935555-1611238055.jpg',
            brand: 'Oppo'
        },
        "p1017": { 
            name: 'Смартфон APPLE iPhone 12 Pro 128GB Graphite (MGM)', 
            price: 40799, 
            img: 'https://i.eldorado.ua//240x220/goods_images/1038946/6792751-1602615998.jpg',
            brand: 'Apple'
          },
        "p1018": { 
            name: 'Смартфон SAMSUNG Galaxy Z Flip 8/256Gb Mirror Purple', 
            price: 23999, 
            img: 'https://i.eldorado.ua//240x220/goods_images/1038946/6552241-1581934133.jpg',
            brand: 'Samsung'
        },
        "p1019": { 
            name: 'Смартфон OPPO Find X2 12/256GB Black', 
            price: 29999, 
            img: 'https://i.eldorado.ua//240x220/goods_images/1038946/6569407-1583402381.png',
            brand: 'Oppo'
          },
        "p1020": { 
            name: 'Смартфон SAMSUNG Galaxy A52 8/256GB Black (A525)', 
            price: 11999, 
            img: 'https://i.eldorado.ua//240x220/goods_images/1038946/7039673-1615818433.jpg',
            brand: 'Samsung'
        }
      };
  
  var out =' ';
  for (let key in smartphone) {
      out+= ` <div class="card ${smartphone[key]['brand']}">`
      out+=  `<div class="card-img">`
      out+= `<p class="text-center"><img src="${smartphone[key]['img']}"></p>`
      out+=  `</div>`
      out+= `<h3 class="card-name">${smartphone[key]['name']}</h3>`
      out+= `<p class="card-price-name"><span class="card-price">${smartphone[key]['price']}</span> грн.</p>`
      out+= `<button onclick=ClickCount() class="btn-buy" data-articul="${key}"><span class="fa fa-cart-plus"></span> Купити</button>`
      out+= `</div>`
  }



  document.querySelector('.list').innerHTML = out;

//   let table = document.querySelector('#table');
//   let pagination = document.querySelector('#pagination');
  
//   let notesOnPage = 6;
//   let countOfItems = Math.ceil(Object.keys(smartphone).length / notesOnPage);
  
//   let showPage = (function() {
//       let active;
      
//       return function(item) {
//           if (active) {
//               active.classList.remove('active');
//           }
//           active = item;
          
//           item.classList.add('active');
          
//           let pageNum = +item.innerHTML;
          
//           let start = (pageNum - 1) * notesOnPage;
//           let end = start + notesOnPage;
          
//           let notes = Object.keys(smartphone).slice(start, end);

//            table.innerHTML = '';
//           for (let key of notes) {
//               let tr = document.createElement('tr');
//               table.appendChild(tr);
//               var out =' ';
//         createCell(out+= ` <div class="card ${smartphone[key]['brand']}">`+
//         `<div class="card-img">`+
//         `<p class="text-center"><img src="${smartphone[key]['img']}"></p>`+
//         `</div>`+
//         `<h3 class="card-name">${smartphone[key]['name']}</h3>`+
//         `<p class="card-price-name"><span class="card-price">${smartphone[key]['price']}</span> грн.</p>`+
//         `<button onclick=ClickCount() class="btn-buy" data-articul="${key}"><span class="fa fa-cart-plus"></span> Купити</button>`+
//         `</div>`, tr); 
//           }
//       };
//   }());
  
//   let items = [];
//   for (let i = 1; i <= countOfItems; i++) {
//       let li = document.createElement('li');
//       li.innerHTML = i;
//       pagination.appendChild(li);
//       items.push(li);
//   }
  
//   showPage(items[0]);
  
//   for (let item of items) {
//       item.addEventListener('click', function() {
//           showPage(this);
//       });
//   }
  
//   function createCell(text, tr) {
//       let td = document.createElement('td');
    
//       td.innerHTML = text;
//       tr.appendChild(td);
//   }
    



