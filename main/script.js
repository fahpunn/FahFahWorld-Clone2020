$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 0) {
            $(".nav-transition-scroll").css("background" , "white");
            $(".nav-link").css("color" , "black");
        }
        else if(window.matchMedia('(max-width: 1024px)').matches){
            $(".nav-link").css("color" , "black");
        }
        else{
            $(".nav-transition-scroll").css("background" , "transparent");
            $(".nav-link").css("color" , "white");
        }
    })
})

function login(){
    var login = document.getElementById("login");
    var register = document.getElementById("register");
    var input = document.getElementById("change");
    var remember = document.getElementById("remember");
    login.setAttribute("class", "s-50 login-click");
    register.setAttribute("class", "s-50 register-unclick");
    input.innerHTML = '<label class="text-dark s-14"><b>USERNAME OR EMAIL ADDRESS *</b></label><input class="form-control" type="text"><label class="text-dark mt-4 s-14"><b>PASSWORD *</b></label><input id="password" class="form-control" type="password"><a class="password-eye-style" href="#" onclick=eyeControl()><span class="fa fa-fw fa-eye password-eye"></span></a><button class="login-button mt-4"><b>LOGIN</b></button>';
    remember.innerHTML = '<input class="checkbox" type="checkbox"><label class="text-dark s-14"><b>&nbsp;&nbsp;REMEMBER ME</b></label><a class="lost s-14 color-pink" href="#"><b>LOST YOUR PASSWORD?</b></a>';
}

function register(){
    var login = document.getElementById("login");
    var register = document.getElementById("register");
    var input = document.getElementById("change");
    var remember = document.getElementById("remember");
    login.setAttribute("class", "s-50 login-unclick");
    register.setAttribute("class", "s-50 register-click");
    input.innerHTML = '<label class="text-dark s-14"><b>EMAIL ADDRESS *</b></label><input class="form-control" type="text"><label class="text-dark mt-4 s-14"><b>PASSWORD *</b></label><input id="password" class="form-control" type="password"><a class="password-eye-style" href="#" onclick=eyeControl()><span class="fa fa-fw fa-eye password-eye"></span></a><button class="login-button mt-4"><b>REGISTER</b></button>';
    remember.innerHTML = '<p class="s-12">Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <a href="#" class="color-pink privacy">privacy policy</a>.</p>';
}

var eyeValue = 1;
function eyeControl() {
    var pass = document.getElementById("password");
    if(eyeValue == 1){
        pass.setAttribute("type", "text");
        eyeValue = 0;
    }else{
        pass.setAttribute("type", "password");
        eyeValue = 1;
    }
}

function imageZoom(imgID, resultID) {
    var img, lens, result, cx, cy;
    img = document.getElementById(imgID);
    result = document.getElementById(resultID);
    /* Create lens: */
    lens = document.createElement("DIV");
    lens.setAttribute("class", "img-zoom-lens");
    /* Insert lens: */
    img.parentElement.insertBefore(lens, img);
    /* Calculate the ratio between result DIV and lens: */
    cx = result.offsetWidth / lens.offsetWidth;
    cy = result.offsetHeight / lens.offsetHeight;
    /* Set background properties for the result DIV */
    result.style.backgroundImage = "url('" + img.src + "')";
    result.style.backgroundSize = (img.width * cx) + "px " + (img.height * cy) + "px";
    /* Execute a function when someone moves the cursor over the image, or the lens: */
    lens.addEventListener("mousemove", moveLens);
    img.addEventListener("mousemove", moveLens);
    /* And also for touch screens: */
    lens.addEventListener("touchmove", moveLens);
    img.addEventListener("touchmove", moveLens);
    function moveLens(e) {
      var pos, x, y;
      /* Prevent any other actions that may occur when moving over the image */
      e.preventDefault();
      /* Get the cursor's x and y positions: */
      pos = getCursorPos(e);
      /* Calculate the position of the lens: */
      x = pos.x - (lens.offsetWidth / 2);
      y = pos.y - (lens.offsetHeight / 2);
      /* Prevent the lens from being positioned outside the image: */
      if (x > img.width - lens.offsetWidth) {x = img.width - lens.offsetWidth;}
      if (x < 0) {x = 0;}
      if (y > img.height - lens.offsetHeight) {y = img.height - lens.offsetHeight;}
      if (y < 0) {y = 0;}
      /* Set the position of the lens: */
      lens.style.left = x + "px";
      lens.style.top = y + "px";
      /* Display what the lens "sees": */
      result.style.backgroundPosition = "-" + (x * cx) + "px -" + (y * cy) + "px";
    }
    function getCursorPos(e) {
      var a, x = 0, y = 0;
      e = e || window.event;
      /* Get the x and y positions of the image: */
      a = img.getBoundingClientRect();
      /* Calculate the cursor's x and y coordinates, relative to the image: */
      x = e.pageX - a.left;
      y = e.pageY - a.top;
      /* Consider any page scrolling: */
      x = x - window.pageXOffset;
      y = y - window.pageYOffset;
      return {x : x, y : y};
    }

}