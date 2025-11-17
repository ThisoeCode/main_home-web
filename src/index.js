$(_=>{

// CONFIG

const
TEST=true,



// LIB
bgColor='background-color',

goto=_=>{
  $('main').hide()
  history.pushState({}, '', './'+_)
  $(`#${_||'index'}`).show()
},

/** List places
 * @example `li('伊恩','2179 80 -171',['capital','modern',])`
 */
li=(title,coords,tags)=>{
  let tag=''
  tags.forEach(_=>{
    tag+=`<i class='tag' style='background-color:${TAGS[_].color}'>${TAGS[_].title}</i>`
  })
  return`
<i>
  <i class='thumb' style='background-image:url("./public/places/${title}.png"),url("../public/places/_fallback.png")'></i>
  <i class='meta'>
    <i>
      <h2>${title}</h2>
      <p>${coords}</p>
    </i>
    <i>${tag}</i>
  </i>
  <i class='info'><button></button></i>
</i>
  `
}


// FLAGS

let
page=window.location.pathname.slice(1)



// INIT

TEST&&console.log('[Thisoe] TEST MODE')
$('main').css('display','flex').hide()

// places render
PLACES.forEach(_=>{
  $('#places .list').append(
    li(_.id,`${_.x} ${_.y} ${_.z}`,_.tags)
  )
})

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
  .on('click','.list>i',function(){
    // TODO: Toggle copy or not & add '/tp' or not
    if(!$(this).hasClass('active')){
      $('.list>i').removeClass('active')
      $('.list>i p').css(bgColor,'#3339')
      navigator.clipboard.writeText(
        $(this).find('p').text()
      )
      $(this)
        .addClass('active')
      $(this).find('p')
        .css(bgColor,'green')
    }
  })












})