/**
 * Created by' Salma Essam  on 28/06/2024.
 */

const productsConainer = document.querySelectorAll('.products');
for(const item of productsConainer){
  item.addEventListener('wheel', (eve)=>{
    eve.preventDefault();
    item.scrollLeft += eve.deltaY;

  })
}