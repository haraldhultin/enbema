
const headImage = document.getElementById('first-image');
const imgSlider = document.getElementById('img-slider');

imgSlider.addEventListener('click', event => {

    if (event.target === image1) {
         headImage.setAttribute ("src","./res/img/spjäll449.jpg");
    }

    else if (event.target === image2) {
      headImage.setAttribute ("src","./res/img/spjällvägg.jpg");
    }

    else {
      headImage.setAttribute ("src","./res/img/Spjäll420ritning.jpg");
    }
  
});






