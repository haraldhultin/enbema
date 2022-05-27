
const headImage = document.getElementById('first-image');
const imgSlider = document.getElementById('img-slider');

imgSlider.addEventListener('click', event => {

    if (event.target === image1) {
         headImage.setAttribute ("src","./res/img/Enbema_elevator.jpg");
    }

    else if (event.target === image2) {
      headImage.setAttribute ("src","./res/img/Enbema_elevatortopp450.jpg");
    }

    else {
      headImage.setAttribute ("src","./res/img/Enbema_elevatortopp_2_450.jpg");
    }
  
});







