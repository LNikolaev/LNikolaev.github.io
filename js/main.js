
$(document).ready(function() {
	setTimeout(function(){
		$('body').addClass('loaded');
	}, 0);
    
    $(".footerDetails div").removeClass("animate");
    $(".download-text").hide();
    $(".linkedin-text").hide();
    $(".center-linkedin").mouseenter(function(){
       $(".social-footer .center-linkedin").addClass("animate");
        $(".linkedin-text").show();
    });
     $(".center-download").mouseenter(function(){
       $(".social-footer .center-download").addClass("animate");
         $(".download-text").show();
    });
    $(".center-download").mouseleave(function(){
        $(".download-text").hide();
    });
    $(".center-linkedin").mouseleave(function(){
        $(".linkedin-text").hide();
    });
});