
const headImage = document.getElementById('first-image');
const imgSlider = document.getElementById('img-slider');

imgSlider.addEventListener('click', event => {

    if (event.target === image1) {
         headImage.setAttribute ("src","./res/img/skruvtransport1.jpg");
    }

    else if (event.target === image2) {
      headImage.setAttribute ("src","./res/img/skruvtransportör2.jpg");
    }

    else {
      headImage.setAttribute ("src","./res/img/skruvtransport3.jpg");
    }
  
});








