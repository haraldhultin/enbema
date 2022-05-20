
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




const chooseInfo = document.getElementById('more-infos');
const choose = document.getElementsByClassName('choose');
const paragraph = document.getElementsByClassName('paragraph');


function item (a,b,c) {
    a.style.cssText = 'color:black ; border-bottom: 2px solid black ; padding-bottom: 6px';
    b.style.cssText = 'color:gray ; border-bottom: none';
    c.style.cssText = 'color:gray ; border-bottom: none';
}

function displayItem (e,f,g) {
        e.style.display = 'block';
        f.style.display = 'none';
        g.style.display = 'none';
}

chooseInfo.addEventListener('click', event => {
   
       if (event.target === choose[0]) {    
           
                 item (choose[0],choose[1],choose[2])
                 displayItem (paragraph[0],paragraph[2],paragraph[1])
        }  

       else if (event.target === choose[1]) {  

                 item (choose[1],choose[0],choose[2])
                 displayItem (paragraph[1],paragraph[0],paragraph[2])
        }  

       else   {
                  item (choose[2],choose[0],choose[1])
                  displayItem (paragraph[2],paragraph[0],paragraph[1])
        }     
});


