$('.menu div .menulist').on('click', function(){
  let lino = $(this).parent().index()
  let artlist = $('article').eq(lino)
  let par = $(this).parent() // = div

  if($(artlist).hasClass('on')){
    $(artlist).removeClass('on')
    $(this).parent().removeClass('on') 
  } else {
    $(artlist).addClass('on').siblings().removeClass('on')
    $(this).parent().addClass('on').siblings().removeClass('on')
  }
  
if($(par).hasClass('on')){
  $(artlist).find('.tit, .sub, .tex').addClass('on')
  $(artlist).siblings().find('.tit, .sub, .tex').removeClass('on')
}
})

$(window).on('load', function(){
  $('#header').css({left:'-6%'})
  $('.menulist').addClass('on')
})



  // $('.menu .menulist').on('mouseover', function(){
  //   let lino = $(this).index()
  //   let artlist = $('article').eq(lino)
  
  //     if($(artlist).hasClass('on')){
  //       $(artlist).removeClass('on')
  //       $('.menu .menulist').css({transform:'scale(0)'})
  //     } else {
  //     $(artlist).addClass('on')
  //     $('.menu .menulist').css({transform:'scale(1.5)'})
  //     }
  //   })
