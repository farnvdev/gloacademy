'use strict';
let collection = document.querySelector('.books'),
    elem = collection.querySelectorAll('.book');
    elem.forEach(function (item){
        collection.removeChild(item);
    });
    collection.append(elem[1], elem[0], elem[4], elem[3], elem[5], elem[2]);
    let body = document.querySelector('body');
    body.style.backgroundImage = 'url(./image/you-dont-know-js.jpg)';
 // remove adv
     document.querySelector('.adv').remove();
//Восстановить порядок глав во второй книге
    let childBook2 = elem[0].querySelector('ul'),
     elemBook2 = elem[0].querySelectorAll('li');
     childBook2.removeChild(elemBook2[2]);
     childBook2.removeChild(elemBook2[6]);
     childBook2.removeChild(elemBook2[8]);
     childBook2.insertBefore(elemBook2[2],elemBook2[10]);
     childBook2.insertBefore(elemBook2[6],elemBook2[4]);
     childBook2.insertBefore(elemBook2[8],elemBook2[4]);
 //Восстановить порядок глав во пятой книге
    let childBook5 = elem[5].querySelector('ul'),
    elemBook5 = elem[5].querySelectorAll('li');
    childBook5.removeChild(elemBook5[2]);
    childBook5.removeChild(elemBook5[5]);
    childBook5.removeChild(elemBook5[9]);
    childBook5.insertBefore(elemBook5[2], elemBook5[6]);
    childBook5.insertBefore(elemBook5[5],elemBook5[8]);
    childBook5.insertBefore(elemBook5[9],elemBook5[3]);
//В шестой книге добавить главу 
//“Глава 8: За пределами ES6” и поставить её в правильное место.
    let childBook6 = elem[2].querySelector('ul'),
    elemBook6 = elem[2].querySelectorAll('li'),
    newElement = document.createElement('li');
    newElement.textContent = 'Глава 8: За пределами ES6';
    childBook6.insertBefore(newElement, elemBook6[9]);
    