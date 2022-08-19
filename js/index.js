var preloader = document.getElementById('preloaderScreen');

function loadingScreen() {
    preloader.style.opacity = '0';
    preloader.style.pointerEvents = 'none';
    console.log("LOADED");
}

$(function(){

    var open = false;

    $(".trigger").click(function(){
        if(open == false) {
            $(".mobNav").animate({
                "left" : "0",
            });
            $(".navclose").fadeIn();
            $(".navopen").fadeOut();
            open = true;
        }
        else {
            $(".mobNav").animate({
                "left" : "-100%",
            });
            $(".navclose").fadeOut();
            $(".navopen").fadeIn();
            open = false;
        }
    });

    $(".navLink").click(function(){
        $(".mobNav").animate({
            "left" : "-100%",
        });
        $(".navclose").fadeOut();
        $(".navopen").fadeIn();
        open = false;
    });

    // Full Black Screen Starts Here for Web development
    $(".closeWin").click(function(){
        $(".blackScreen").fadeOut(500);
    });

    // Webiste 1
    $(".openBrunch").click(function(){
        $(".brunch").fadeIn(500);
    });

    // Webiste 2
    $(".openBreezed").click(function(){
        $(".breezed").fadeIn(500);
    });

    // Webiste 3
    $(".openSoftypinko").click(function(){
        $(".softypinko").fadeIn(500);
    });

    // Webiste 4
    $(".openRento").click(function(){
        $(".rento").fadeIn(500);
    });

    // Webiste 5
    $(".openHielo").click(function(){
        $(".hielo").fadeIn(500);
    });

    // Webiste 6
    $(".openWink").click(function(){
        $(".wink").fadeIn(500);
    });
    // Full Black Screen Ends Here Web development


    // Full Black Screen Starts Here Java Applications
    // Java Application 1
    $(".openEms").click(function(){
        $(".ems").fadeIn(500);
    });

    // Java Application 2
    $(".openSnake").click(function(){
        $(".snake").fadeIn(500);
    });

    // Java Application 3
    $(".openCalc").click(function(){
        $(".calc").fadeIn(500);
    });

    // Java Application 4
    $(".openMedia").click(function(){
        $(".media").fadeIn(500);
    });
    // Full Black Screen Ends Here Java Applications

    $(".webbtn").click(function(){
        $(".webtab").addClass("active");
        $(".javaTab").removeClass("active");
        $(".webdev").fadeIn(500);
        $(".java").hide();
    });

    $(".javabtn").click(function(){
        $(".javaTab").addClass("active");
        $(".webtab").removeClass("active");
        $(".java").fadeIn(500);;
        $(".webdev").hide();
    });
});