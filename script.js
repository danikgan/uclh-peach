$(document).ready(function(){
	/*----------------------------------- Menu on Mobile Devices -----------------------------------*/
    $("#top-bar-right-small").click(function(){
        $(".sub-menu-small").toggle();
    });
    
    /*----------------------------------- Open Picture -----------------------------------*/
//    $(".mockup-dg").click(function(){
//        $(".show-mockup-dg").toggle();
//        //$(".mockup-dg").toggle();
//    });
//    $(".show-mockup-dg").click(function(){
//        $(".show-mockup-dg").toggle();
//        //$(".mockup-dg").toggle();
//    });
//    
//    $(".mockup-sm").click(function(){
//        $(".show-mockup-sm").toggle();
//        //$(".mockup-sm").toggle();
//    });
//    $(".show-mockup-sm").click(function(){
//        $(".show-mockup-sm").toggle();
//        //$(".mockup-sm").toggle();
//    });
    
    
    
    
    $(".mockup-sm").click(function(){
        $(".show-mockup-sm").css("display", "block");
        $(".show-mockup-dg").css("display", "none");
    });
    $(".mockup-dg").click(function(){
        $(".show-mockup-dg").css("display", "block");
        $(".show-mockup-sm").css("display", "none");
    });
});