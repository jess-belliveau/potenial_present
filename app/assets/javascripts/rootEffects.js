$(document).ready(function(){

	//Basic input change for the Sign in hover
	$('#nameInput').find('input').attr('value', 'user');
	$('#nameInput').find('input').click(function(){
		$(this).attr('value', '');
	});

  $('#passInput').find('input').attr('value', '123456');
  $('#passInput').find('input').click(function(){
    $(this).attr('value', '');
  });

	//Expand the list capsules on mouseenter
	$('.present').mouseenter(function(){
		$(this).find('.details').slideDown();
		$(this).find('.caret').attr('id', 'pointUp');
	});

	$('.present').mouseleave(function(){
    $(this).find('.details').slideUp();
    $(this).find('.caret').attr('id', 'pointDown');
	});
});
