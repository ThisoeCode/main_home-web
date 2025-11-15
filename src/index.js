$(_=>{

// CONFIG
const
TEST=true,



// LIB
goto=_=>{
  $('main').fadeOut(99)
  history.pushState({}, '', './'+_)
  $(`#${_||'index'}`).fadeIn(99)
}



// FLAGS
let
page=window.location.pathname.slice(1)



// INIT
TEST&&console.log('[Thisoe] TEST MODE')
$('main').css('display','flex').hide()

$(`#${page||'index'}`).fadeIn(777)



// LISTENS
$(window).on('popstate',_=>{
  page=window.location.pathname.slice(1)
  console.log(page)
  goto(page)
})

$('#index')
  .on('click','nav button',function(){
    goto($(this).attr('id').slice(5))
  })
})