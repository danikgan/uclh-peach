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
    
    
    $(".mockup-00").click(function(){
        $(".show-mockup-00").css("display", "block");
        $(".show-mockup-01").css("display", "none");
        $(".show-mockup-02").css("display", "none");
        $(".show-mockup-03").css("display", "none");
    });
    $(".mockup-01").click(function(){
        $(".show-mockup-01").css("display", "block");
        $(".show-mockup-00").css("display", "none");
        $(".show-mockup-02").css("display", "none");
        $(".show-mockup-03").css("display", "none");
    });
    
    $(".mockup-02").click(function(){
        $(".show-mockup-02").css("display", "block");
        $(".show-mockup-00").css("display", "none");
        $(".show-mockup-01").css("display", "none");
        $(".show-mockup-03").css("display", "none");
    });
    $(".mockup-03").click(function(){
        $(".show-mockup-03").css("display", "block");
        $(".show-mockup-00").css("display", "none");
        $(".show-mockup-01").css("display", "none");
        $(".show-mockup-02").css("display", "none");
    });
    
    $(".mockup-ho").click(function(){
        $(".show-mockup-ho").css("display", "block");
        $(".show-mockup-lo").css("display", "none");
        $(".show-mockup-pa").css("display", "none");
        $(".show-mockup-ps").css("display", "none");
        $(".show-mockup-sm2").css("display", "none");
    });
    
    $(".mockup-lo").click(function(){
        $(".show-mockup-ho").css("display", "none");
        $(".show-mockup-lo").css("display", "block");
        $(".show-mockup-pa").css("display", "none");
        $(".show-mockup-ps").css("display", "none");
        $(".show-mockup-sm2").css("display", "none");
    });
    
    $(".mockup-pa").click(function(){
        $(".show-mockup-ho").css("display", "none");
        $(".show-mockup-lo").css("display", "none");
        $(".show-mockup-pa").css("display", "block");
        $(".show-mockup-ps").css("display", "none");
        $(".show-mockup-sm2").css("display", "none");
    });
    
    $(".mockup-ps").click(function(){
        $(".show-mockup-ho").css("display", "none");
        $(".show-mockup-lo").css("display", "none");
        $(".show-mockup-pa").css("display", "none");
        $(".show-mockup-ps").css("display", "block");
        $(".show-mockup-sm2").css("display", "none");
    });
    
    $(".mockup-sm2").click(function(){
        $(".show-mockup-ho").css("display", "none");
        $(".show-mockup-lo").css("display", "none");
        $(".show-mockup-pa").css("display", "none");
        $(".show-mockup-ps").css("display", "none");
        $(".show-mockup-sm2").css("display", "block");
    });
});