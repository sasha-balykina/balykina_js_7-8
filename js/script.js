$(function(){

  $('ul.tabs__caption').each(function() {
    $(this).find('li').each(function(i) {
      $(this).click(function(){
        $(this).addClass('active').siblings().removeClass('active')
          .closest('div.tabs').find('div.tabs__content').removeClass('active').eq(i).addClass('active');
      });
    });
  });

  $('.data-tooltip').hover(function(e){
    var $sibl = $(this).siblings('.tooltip');
    $sibl.css('display', 'block');
  },
  function(){
    var $sibl = $(this).siblings('.tooltip');
    $sibl.css('display', 'none');
  });

  $('.show-tooltip').on('click', function(){
    $('.tooltip').css('display', 'block');
})
    

});