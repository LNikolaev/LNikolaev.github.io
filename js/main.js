
$(document).ready(function() {
	setTimeout(function(){
		$('body').addClass('loaded');
	}, 2000);
    
    $(".footerDetails div").removeClass("animate");
    $(".center-linkedin").mouseenter(function(){
       $(".social-footer .center-linkedin").addClass("animate");
    });
     $(".center-download").mouseenter(function(){
       $(".social-footer .center-download").addClass("animate");
    });
});