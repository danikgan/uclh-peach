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
    
    
    
    
    
    
    $(".mockup-dg1").click(function(){
        $(".show-mockup-dg1").css("display", "block");
        $(".show-mockup-dg2").css("display", "none");
        $(".show-mockup-dg3").css("display", "none");
        $(".show-mockup-dg4").css("display", "none");
        $(".show-mockup-dg5").css("display", "none");
        $(".show-mockup-dg6").css("display", "none");
        $(".show-mockup-dg7").css("display", "none");
        $(".show-mockup-dg8").css("display", "none");
        $(".show-mockup-dg9").css("display", "none");
        $(".show-mockup-dg10").css("display", "none");
    });
        $(".mockup-dg2").click(function(){
        $(".show-mockup-dg1").css("display", "none");
        $(".show-mockup-dg2").css("display", "block");
        $(".show-mockup-dg3").css("display", "none");
        $(".show-mockup-dg4").css("display", "none");
        $(".show-mockup-dg5").css("display", "none");
        $(".show-mockup-dg6").css("display", "none");
        $(".show-mockup-dg7").css("display", "none");
        $(".show-mockup-dg8").css("display", "none");
        $(".show-mockup-dg9").css("display", "none");
        $(".show-mockup-dg10").css("display", "none");
    });
        $(".mockup-dg3").click(function(){
        $(".show-mockup-dg1").css("display", "none");
        $(".show-mockup-dg2").css("display", "none");
        $(".show-mockup-dg3").css("display", "block");
        $(".show-mockup-dg4").css("display", "none");
        $(".show-mockup-dg5").css("display", "none");
        $(".show-mockup-dg6").css("display", "none");
        $(".show-mockup-dg7").css("display", "none");
        $(".show-mockup-dg8").css("display", "none");
        $(".show-mockup-dg9").css("display", "none");
        $(".show-mockup-dg10").css("display", "none");
    });
        $(".mockup-dg4").click(function(){
        $(".show-mockup-dg1").css("display", "none");
        $(".show-mockup-dg2").css("display", "none");
        $(".show-mockup-dg3").css("display", "none");
        $(".show-mockup-dg4").css("display", "block");
        $(".show-mockup-dg5").css("display", "none");
        $(".show-mockup-dg6").css("display", "none");
        $(".show-mockup-dg7").css("display", "none");
        $(".show-mockup-dg8").css("display", "none");
        $(".show-mockup-dg9").css("display", "none");
        $(".show-mockup-dg10").css("display", "none");
    });
        $(".mockup-dg5").click(function(){
        $(".show-mockup-dg1").css("display", "none");
        $(".show-mockup-dg2").css("display", "none");
        $(".show-mockup-dg3").css("display", "none");
        $(".show-mockup-dg4").css("display", "none");
        $(".show-mockup-dg5").css("display", "block");
        $(".show-mockup-dg6").css("display", "none");
        $(".show-mockup-dg7").css("display", "none");
        $(".show-mockup-dg8").css("display", "none");
        $(".show-mockup-dg9").css("display", "none");
        $(".show-mockup-dg10").css("display", "none");
    });
        $(".mockup-dg6").click(function(){
        $(".show-mockup-dg1").css("display", "none");
        $(".show-mockup-dg2").css("display", "none");
        $(".show-mockup-dg3").css("display", "none");
        $(".show-mockup-dg4").css("display", "none");
        $(".show-mockup-dg5").css("display", "none");
        $(".show-mockup-dg6").css("display", "block");
        $(".show-mockup-dg7").css("display", "none");
        $(".show-mockup-dg8").css("display", "none");
        $(".show-mockup-dg9").css("display", "none");
        $(".show-mockup-dg10").css("display", "none");
    });
        $(".mockup-dg7").click(function(){
        $(".show-mockup-dg1").css("display", "none");
        $(".show-mockup-dg2").css("display", "none");
        $(".show-mockup-dg3").css("display", "none");
        $(".show-mockup-dg4").css("display", "none");
        $(".show-mockup-dg5").css("display", "none");
        $(".show-mockup-dg6").css("display", "none");
        $(".show-mockup-dg7").css("display", "block");
        $(".show-mockup-dg8").css("display", "none");
        $(".show-mockup-dg9").css("display", "none");
        $(".show-mockup-dg10").css("display", "none");
    });
        $(".mockup-dg8").click(function(){
        $(".show-mockup-dg1").css("display", "none");
        $(".show-mockup-dg2").css("display", "none");
        $(".show-mockup-dg3").css("display", "none");
        $(".show-mockup-dg4").css("display", "none");
        $(".show-mockup-dg5").css("display", "none");
        $(".show-mockup-dg6").css("display", "none");
        $(".show-mockup-dg7").css("display", "none");
        $(".show-mockup-dg8").css("display", "block");
        $(".show-mockup-dg9").css("display", "none");
        $(".show-mockup-dg10").css("display", "none");
    });
        $(".mockup-dg9").click(function(){
        $(".show-mockup-dg1").css("display", "none");
        $(".show-mockup-dg2").css("display", "none");
        $(".show-mockup-dg3").css("display", "none");
        $(".show-mockup-dg4").css("display", "none");
        $(".show-mockup-dg5").css("display", "none");
        $(".show-mockup-dg6").css("display", "none");
        $(".show-mockup-dg7").css("display", "none");
        $(".show-mockup-dg8").css("display", "none");
        $(".show-mockup-dg9").css("display", "block");
        $(".show-mockup-dg10").css("display", "none");
    });
        $(".mockup-dg10").click(function(){
        $(".show-mockup-dg1").css("display", "none");
        $(".show-mockup-dg2").css("display", "none");
        $(".show-mockup-dg3").css("display", "none");
        $(".show-mockup-dg4").css("display", "none");
        $(".show-mockup-dg5").css("display", "none");
        $(".show-mockup-dg6").css("display", "none");
        $(".show-mockup-dg7").css("display", "none");
        $(".show-mockup-dg8").css("display", "none");
        $(".show-mockup-dg9").css("display", "none");
        $(".show-mockup-dg10").css("display", "block");
    });
});