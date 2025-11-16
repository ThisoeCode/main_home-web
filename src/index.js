$(_=>{

// CONFIG

const
TEST=true,



// LIB

goto=_=>{
  $('main').hide()
  history.pushState({}, '', './'+_)
  $(`#${_||'index'}`).show()
}



// FLAGS

let
page=window.location.pathname.slice(1)



// INIT

TEST&&console.log('[Thisoe] TEST MODE')
$('main').css('display','flex').hide()

// places render


$(`#${page||'index'}`).fadeIn(777)



// LISTENERS

$(window).on('popstate',_=>{
  page=window.location.pathname.slice(1)
  goto(page)
})

$('.goback').click(_=>{
    console.log('oh')
    if(window.history.length > 1) history.back()
    else goto()
  })

$('#index')
  .on('click','nav button',function(){
    goto($(this).attr('id').slice(5))
  })

$('#places,#heritages')
  .on('click','',_=>{})












})