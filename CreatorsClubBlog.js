var darkCounter = 100;


$(function() {
    $(window).scroll(function() {
        if ($(document).scrollTop() < 10) {
            $(".title-container").fadeIn(700);
            $("#lowry").css({"filter":"brightness(100%)"});
        }
        else if ($(document).scrollTop() > 50) {
            $(".title-container").fadeOut(700);
            if ($(document).scrollTop() > 120)
            {
                $("#lowry").css({"filter":"brightness("+darkCounter+"%)"});
                if (darkCounter > 0) 
                {
                    darkCounter-= 10;
                }
            }
            else 
            {
                $("#lowry").css({"filter":"brightness("+darkCounter+"%)"});
                if (darkCounter < 100)
                {
                    darkCounter+= 10;
                }
            }
            if ($(document).scrollTop()>200 && $(document).scrollTop() < 400)
                {
                    $("#about-website").show(300);
                }
                else
                {
                    $("#about-website").hide(300);
                }
        }
        else  {
            $(".title-container").fadeIn(700);
            $("#lowry").css({"filter":"brightness("+darkCounter+"%)"});
            if (darkCounter < 100)
            {
                darkCounter+= 5;
            }
        }
    });
  });

  
function scrollToDiv(div){
	$('html, body').animate({
		scrollTop: $(div).offset().top-100
	}, 1000);		
}
    