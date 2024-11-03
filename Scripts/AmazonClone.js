/**
 * Created by' Salma Essam  on 24/06/2024.
 */


const Images = document.querySelectorAll('.headerSlider ul img');
const btnPrev = document.querySelector('.btnPrev');
const btnNext = document.querySelector('.btnNext');




let n = 0;

function onChangeSlider(){
  for(let i=0;i<Images.length;i++){
    Images[i].style.display='none'
  }
  Images[n].style.display ='block'
};
onChangeSlider();


btnPrev.addEventListener('click', (e)=>{
    if(n > 0){
        n--;
    }else{
      n = Images.length -1;
    }
    onChangeSlider();
});

btnNext.addEventListener('click', (e)=>{
    if(n <  Images.length -1){
        n++;
    }else{
      n =0;
    }
    onChangeSlider();
})
const productsConainer = document.querySelectorAll('.products');
for(const item of productsConainer){
  item.addEventListener('wheel', (eve)=>{
    eve.preventDefault();
    item.scrollLeft += eve.deltaY;

  })
}