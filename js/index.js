$('.menu div .menulist').on('click', function(){
  let lino = $(this).parent().index()
  let artlist = $('article').eq(lino)
  let par = $(this).parent() // = div

  // article에 on이 있을시 이를 제거하고 .menu div에 on 적용(헤더 내 메뉴들 각 다른 줄 적용 ) 
  if($(artlist).hasClass('on')){
    $(artlist).removeClass('on')
    $(this).parent().removeClass('on') 
  } else {
    $(artlist).addClass('on').siblings().removeClass('on')  //선택 article의 이동 및 그 외 article 숨김 
    $(this).parent().addClass('on').siblings().removeClass('on')  //선택 article 내 요소 출력 
  }
  
  // 각 article의 제목 내용 이동
if($(par).hasClass('on')){
  $(artlist).find('.tit, .sub, .tex').addClass('on')
  $(artlist).siblings().find('.tit, .sub, .tex').removeClass('on')
}
})

// 화면 로드시 헤더와 헤더 내 메뉴 이동
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
