// Ready function
$(document).ready(function(e) {	
	/*$('#myModal').modal('show')*/
	$('#myModal').modal({
	    show: 'true'
	});

	$('.add-notes-textbox a').click(function(){
		$(this).hide();
		$('.add-notes-textbox .addition-notes').show();
	});
});


// Load function
$(window).load(function(){

//    $(".mCustomScrollbar").mCustomScrollbar();

});

// Load and Scroll function
$(window).bind("load scroll", function() {
/*    var window_offset = $(window).scrollTop();
    $('.headerArea nav.navbar').addClass('navbar-fixed-top');
*/});

// Load and Resize function
$(window).bind("load resize", function() {
    sizingheight();
});


// Height Calculation
function sizingheight(){

}

(function() {
    $(".dropzone").dropzone({
        url: 'upload.php',        
        params:{
            'action': 'save'
        },
        uploadOnDrop: true,
        success: function(res, index){
            console.log(res, index);
        }
    });
}());

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})


