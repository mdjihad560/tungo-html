  // tab

  $('.tungo-tab-buttons span').first().addClass('active');
$('.tab-content>div').hide();
$('.tab-content>div').first().slideDown();
  $('.tungo-tab-buttons span').click(function(){
    $('.tungo-tab-buttons span').removeClass('active');
    var thisclass=$(this).attr('class');
    $(this).addClass('active');
    $('.tab-content>div').each(function(){
      if($(this).hasClass(thisclass)){
        $(this).fadeIn(500);
      }
      else{
        $(this).hide();
      }
    });
  });


    // tab

$('.tungo-tab-small span').first().addClass('active');
$('.tab-contentsmall>div').hide();
$('.tab-contentsmall>div').first().slideDown();
  $('.tungo-tab-small span').click(function(){
    $('.tungo-tab-small span').removeClass('active');
    var thisclass=$(this).attr('class');
    $(this).addClass('active');
    $('.tab-contentsmall>div').each(function(){
      if($(this).hasClass(thisclass)){
        $(this).fadeIn(500);
      }
      else{
        $(this).hide();
      }
    });
  });


$('.tungo-tab-check-out span').first().addClass('active');
$('.tab-content-checkout>div').hide();
$('.tab-content-checkout>div').first().slideDown();
  $('.tungo-tab-check-out span').click(function(){
    $('.tungo-tab-check-out span').removeClass('active');
    var thisclass=$(this).attr('class');
    $(this).addClass('active');
    $('.tab-content-checkout>div').each(function(){
      if($(this).hasClass(thisclass)){
        $(this).fadeIn(500);
      }
      else{
        $(this).hide();
      }
    });
  });


  $('.tungo-tab-buttons4>div').first().addClass('active');
  $('.tab-content>div').hide();
  $('.tab-content>div').first().slideDown();
    $('.tungo-tab-buttons4>div').click(function(){
      $('.tungo-tab-buttons4>div').removeClass('active');
      var thisclass=$(this).attr('class');
      $(this).addClass('active');
      $('.tab-content>div').each(function(){
        if($(this).hasClass(thisclass)){
          $(this).fadeIn(500);
        }
        else{
          $(this).hide();
        }
      });
    });