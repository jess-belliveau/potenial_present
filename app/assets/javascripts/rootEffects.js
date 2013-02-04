$(document).ready(function(){
	//Tooltips for gifts already ordered
  $('.tip-info').tooltip({'placement':'right'});
	$('.link-buy').tooltip({'placement':'bottom'});

	//Couldn't decide on a good header so random h1 for home page
	var randomNum = Math.ceil(Math.random()*5);

	switch (randomNum) {
		case 1:
		  $('#randomHeader').html("Gift yourself.");
			break;
		case 2:
      $('#randomHeader').html("Be selfish.");
      break;
    case 3:
      $('#randomHeader').html("No more flannel pyjamas.");
      break;
    case 4:
      $('#randomHeader').html("Give gifts, make happy.");
      break;
    case 5:
      $('#randomHeader').html("Say no to socks.");
      break;
		default:
			$('#randomHeader').html("Potential presents.");
	};

	//Basic input change for the Sign in hover box
	$('#nameInput').find('input').attr('value', 'username');
	$('#nameInput').find('input').focus(function(){
		$(this).attr('value', '');
	});

  $('#passInput').find('input').attr('value', '123456789');
  $('#passInput').find('input').focus(function(){
    $(this).attr('value', '');
  });

	//Fresh capsule config
	$('#linkNameInput').find('input').attr('value', 'link name');
  $('#linkNameInput').find('input').focus(function(){
    $(this).attr('value', '');
  });

  $('#linkInput').find('input').attr('value', 'link');
  $('#linkInput').find('input').focus(function(){
    $(this).attr('value', '');
  });

	//Hide the feature request text on click
	$('.feature').click(function(){
		$('.welcome').slideUp('1000');
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
