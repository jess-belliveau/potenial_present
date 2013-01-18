$(document).ready(function(){

	$('#nameInput').find('input').attr('value', 'user');
	$('#nameInput').find('input').click(function(){
		$(this).attr('value', '');
	});

  $('#passInput').find('input').attr('value', '123456');
  $('#passInput').find('input').click(function(){
    $(this).attr('value', '');
  });


	$('.present').mouseenter(function(){
		$(this).find('.details').slideDown();
	});

	$('.present').mouseleave(function(){
    $(this).find('.details').slideUp();
	});
});
