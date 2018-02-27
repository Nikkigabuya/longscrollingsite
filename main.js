/*document.getElementById('counter').innerHTML = "hello";*/

//initialize - set up variables
var counter = document.getElementById('counter');
var fromTop = window.pageYOffset;


counter.innerHTML = "counter text";

//pseudocode = when the user is scrolling update the variable fromTop and make decidsions to change stuff on the page
window.onscroll = function (){
  //when the user scrolls do all of this...


      fromTop = window.pageYOffset;
      //test if it words
      console.log(fromTop);

      counter.style.top = 100 + fromTop + "px";

      if(fromTop > 1000){
        counter.innerHTML = "more than 1000 leagues";
        counter.style.background="red";
        counter.style.backgroundImage="url()"
      } else {"counter text";
        counter.style.backgroundColor="green";
        counter.style.backgroundImage="url()"
    }

}
