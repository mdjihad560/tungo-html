  // tab

  $('.onada-tab-buttons span').first().addClass('active');
$('.tab-content>div').hide();
$('.tab-content>div').first().slideDown();
  $('.onada-tab-buttons span').click(function(){
    $('.onada-tab-buttons span').removeClass('active');
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

$('.onada-tab-small span').first().addClass('active');
$('.tab-contentsmall>div').hide();
$('.tab-contentsmall>div').first().slideDown();
  $('.onada-tab-small span').click(function(){
    $('.onada-tab-small span').removeClass('active');
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


$('.onada-tab-check-out span').first().addClass('active');
$('.tab-content-checkout>div').hide();
$('.tab-content-checkout>div').first().slideDown();
  $('.onada-tab-check-out span').click(function(){
    $('.onada-tab-check-out span').removeClass('active');
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


  $('.onada-tab-buttons4>div').first().addClass('active');
  $('.tab-content>div').hide();
  $('.tab-content>div').first().slideDown();
    $('.onada-tab-buttons4>div').click(function(){
      $('.onada-tab-buttons4>div').removeClass('active');
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