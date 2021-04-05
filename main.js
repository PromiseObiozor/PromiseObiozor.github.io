//Selectors
let header = document.querySelector('.header')
let hamburgerMenu = document.querySelector('.hamburger-menu')

window.addEventListener('scroll', function () {
    let windowposition = window.scrollY > 0;
    header.classList.toggle('active', windowposition );
})

hamburgerMenu.addEventListener('click', function (){
    header.classList.toggle('menu-open');
})

function checkForm()
{
var name = document.forms["contactForm"]["fname"];
var email = document.forms["contactForm"]["email"];
var subject = document.forms["contactForm"]["subject"];
var what = document.forms["contactForm"]["message"];
if (name.value == "" )
{
window.alert( "Please enter your name." );
name.focus();
return false;
}
if (email.value == "" ){
window.alert( "Please enter a valid e-mail address." );
email.focus();
return false ;
}
if (email.value.indexOf( "@" , 0) < 0)
{
window.alert( "Please enter a valid e-mail address." );
email.focus();
return false ;
}
if (email.value.indexOf( "." , 0) < 0)
{
window .alert( "Please enter a valid e-mail address." );
email.focus();
return false ;
}
if (subject.value == "" )
{
window.alert( "Please enter a subject." );
subject.focus();
return false;
}

if (what.value < 5)
{
alert( "Please enter a proper message" );
what.focus();
return false ;
}
return true ;
}


var counter_list = [10,10000,10000];
  var str_counter_0 = counter_list[0];
  var str_counter_1 = counter_list[1];
  var str_counter_2 = counter_list[2];
  var display_str = "";
  var display_div = document.getElementById("display_div_id");

  function incrementCount(current_count){
    setInterval(function(){
      // clear count
      while (display_div.hasChildNodes()) {
          display_div.removeChild(display_div.lastChild);
      }
      str_counter_0++;
      if (str_counter_0 > 99) {
        str_counter_0 = 10; // reset count
        str_counter_1++;    // increase next count
      }
      if(str_counter_1>99999){
        str_counter_2++;
      }
      display_str = str_counter_2.toString() + str_counter_1.toString() + str_counter_0.toString();
      for (var i = 0; i < display_str.length; i++) {
        var new_span = document.createElement('span');
        new_span.className = 'num_tiles';
        new_span.innerText = display_str[i];
        display_div.appendChild(new_span);
      }
    },1000);
  }