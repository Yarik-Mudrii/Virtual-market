
 //  добавления в корзину товара
var d = document,
    itemBox = d.querySelectorAll('.card'), // блок каждого товара
    cartCont = d.getElementById('cart_content'); // блок вывода данных корзины
// Функция кроссбраузерная установка обработчика событий
function addEvent(elem, type, handler){
    if(elem.addEventListener){
    elem.addEventListener(type, handler, false);
    } else {
    elem.attachEvent('on'+type, function(){ handler.call( elem ); });
    }
    return false;
}

// Получаем данные из LocalStorage
function getCartData(){ 
  return JSON.parse(localStorage.getItem('product'));
}
// Записываем данные в LocalStorage
function setCartData(o){
  localStorage.setItem('product', JSON.stringify(o));
return false;
}
// Добавляем товар в корзину
function addToCart(e){
  
    var cartData = getCartData() || {}, // получаем данные корзины или создаём новый объект, если данных еще нет
        parentBox = this.parentNode, // родительский элемент кнопки &quot;Добавить в корзину&quot;
        itemId = this.getAttribute('data-articul'), // ID товара
        itemTitle = parentBox.querySelector('.card-name').innerHTML, // название товара
        itemPrice = parentBox.querySelector('.card-price').innerHTML; // стоимость товара
        itemImg = parentBox.querySelector('.card-img').innerHTML;
        
    if(cartData.hasOwnProperty(itemId)){ // если такой товар уже в корзине, то добавляем +1 к его количеству
      cartData[itemId][3] += 1;
    } else { // если товара в корзине еще нет, то добавляем в объект
      cartData[itemId] = [itemImg,itemTitle,itemPrice, 1];
    }

    // Обновляем данные в LocalStorage
    if(!setCartData(cartData)){
    return false;
  }
}
// Устанавливаем обработчик события на каждую кнопку &quot;Добавить в корзину&quot;
for(var i = 0; i < itemBox.length; i++){
addEvent(itemBox[i].querySelector('.btn-buy'), 'click', addToCart);
}
// Открываем корзину со списком добавленных товаров

function openCart(e){
      var cartData = getCartData(), // вытаскиваем все данные корзины
            totalItems = '';
            totalCount = 0,
            totalSum = 0;
      
console.log(JSON.stringify(cartData));

// если что-то в корзине уже есть, начинаем формировать данные для вывода
if(cartData !== null){
  
  totalItems = '<table class="shopping_list"><tr class="tr-align">'+
               '<th>Tовар</th><th>Назва товару</th><th  style="width:15%;">Ціна</th><th  style="width:10%;">К-сть</th><th> </th</tr>';
  for(var items in cartData){
      totalItems += '<tr>';
          totalItems +='<td>'+cartData[items][0]+'</td>';
          totalItems +='<td class="name-name">'+cartData[items][1]+'</td>';
          totalItems +='<td class="price-price" >'+cartData[items][2]+'</td>';
          totalItems +='<td style="text-align:center; padding:0; margin:0;"><span class="plus_item" catalog_data-id="'+ items +'">+</span><span class="chislo">'+cartData[items][3]+'</span><span class="minus_item" catalog_data-id="'+ items +'">-</span></td>';
          totalSum += cartData[items][2] * cartData[items][3];
          totalCount += cartData[items][3];
          totalItems += '<td><span class="del_item fa fa-trash-o" data-id="'+items +'"></span></td>';
      totalItems += '</tr>';
  }
      totalItems += '<tr class="bottom-panel"><td><strong>Разом: </strong></td><td> </td><td style="text-align: center;"><span id="total_sum">'+ totalSum +'</span> грн.</td><td style="text-align: center;"><span id="total_count">'+ totalCount +'</span> шт.</td><td></td></tr>';
      totalItems += '</table>';
    cartCont.innerHTML = totalItems;
    
} else {
  // если в корзине пусто, то сигнализируем об этом
  cartCont.innerHTML = '<img class="img-clear-cart" src="https://webformyself.com/wp-content/uploads/2017/124/2.jpg"><p style="text-align: center; font-size: 16px; font-weight: bold;">В корзине пусто! Ви не сделали ни одной покупки.</p>';
}
return false;
}
// функция для нахождения необходимого ближайшего родительского элемента
function closest(el, sel) {
if (el !== null)
return el.matches(sel) ? el : (el.querySelector(sel) || closest(el.parentNode, sel));
}
/* Открыть корзину */
addEvent(d.getElementById('shopping'), 'click', openCart);
/* Удаление из корзины */
addEvent(d.body, 'click', function(e){
if(e.target.className === 'del_item fa fa-trash-o') {
  var itemId = e.target.getAttribute('data-id'),
  cartData = getCartData();
  if(cartData.hasOwnProperty(itemId)){
      var tr = closest(e.target, 'tr');
      tr.parentNode.removeChild(tr); /* Удаляем строку товара из таблицы */
      // пересчитываем общую сумму и цену
      var totalSumOutput = d.getElementById('total_sum'),
      totalCountOutput = d.getElementById('total_count');
      totalSumOutput.textContent = +totalSumOutput.textContent - cartData[itemId][2] * cartData[itemId][3];
      totalCountOutput.textContent = +totalCountOutput.textContent - cartData[itemId][3];
      delete cartData[itemId]; // удаляем товар из объекта 
      setCartData(cartData); // перезаписываем измененные данные в localStorage
  }
}
}, false);

/* + */
addEvent(d.body, 'click', function(e){
        if(e.target.className === 'plus_item') {
        var itemId = e.target.getAttribute('catalog_data-id'),
        catalog_cartData = getCartData();
        
        if(catalog_cartData.hasOwnProperty(itemId)){
        catalog_cartData[itemId][3] += 1; // добавляем +1 к количеству
        
        // Обновляем данные в LocalStorage
        if(!setCartData(catalog_cartData)){
            d.getElementById('shopping').click();
            d.getElementById('shopping').click();
        }
        }
        }
}, false);
  
  /* - */
  addEvent(d.body, 'click', function(e){
          if(e.target.className === 'minus_item') {
          var itemId = e.target.getAttribute('catalog_data-id'),
          catalog_cartData = getCartData();
  
          if(catalog_cartData.hasOwnProperty(itemId)){
              if (catalog_cartData[itemId][3] > 1){ // если товар в количестве больше 1, то сминусовывааем
                  catalog_cartData[itemId][3] -= 1;
              }
              else{ // если 1 - то удаляем всю строку
                  var tr = closest(e.target, 'tr');
                  tr.parentNode.removeChild(tr); /* Удаляем строку товара из таблицы */
                  delete catalog_cartData[itemId];
              }
          // Обновляем данные в LocalStorage
              if(!setCartData(catalog_cartData)) {
                  d.getElementById('shopping').click();  
                  d.getElementById('shopping').click(); // у меня корзина всегда открыта
              }
          }
          }
}, false);


/* Очистить корзину */
addEvent(d.getElementById('clear_cart'), 'click', function(e){
localStorage.removeItem('product');
cartCont.innerHTML = '<img class="img-clear-cart" src="https://webformyself.com/wp-content/uploads/2017/124/2.jpg"><p style="text-align: center; font-size: 16px; font-weight: bold;">В корзине пусто! Ви не сделали ни одной покупки.</p> <p class="text-success" style="text-align: center; ">Корзина очишена</p>';	
});

// if(window.location.reload) {
//   localStorage.removeItem('product');
// cartCont.innerHTML = '<img style="margin: 0 auto; display:block;" src="https://webformyself.com/wp-content/uploads/2017/124/2.jpg"><p style="text-align: center; font-size: 16px; font-weight: bold;">В корзине пусто! Ви не сделали ни одной покупки.</p> <p class="text-success" style="text-align: center; ">Корзина очишена</p>';	
// }

// button return up
window.onload = function() {
  var scrolled;
  var back=document.getElementById('top');
  back.onclick = function () {
      scrolled = window.pageYOffset;
      scrollBackUp(); 
  };
  function scrollBackUp(){
      if (scrolled>0) {
          window.scrollTo(0, scrolled);
          scrolled-=100; 
          timer = setTimeout(scrollBackUp, 30);
      }
      else {
          clearTimeout(timer);
          window.scrollTo(0,0);
      }
  }
};

$(window).scroll(function (event) {
  var top = $(window).scrollTop();
   if(top >= 150){
    document.getElementById('top').style.opacity="1"
   } else {
    document.getElementById('top').style.opacity="0";
   }
});





// modal window icon user
var modal = document.getElementById('id01');
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}



  
  
  
  