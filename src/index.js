$(_=>{

// CONFIG

const
TEST=true,



// LIB
bg='background-color',

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
  <i class='thumb' style='background-image:url("./public/places/v0/thumb/${title}.png"),url("../public/places/v0/thumb/_fallback.png")'></i>
  <i class='meta'>
    <i>
      <h2>${title}</h2>
      <p>${coords}</p>
    </i>
    <i>${tag}</i>
  </i>
  <i class='info'><button></button></i>
</i>`
},

render={
  places:{
    isCopyBtn:_=>{
      $('#isPlacesCopy>p').text(`单击复制：${_?'开':'关'}`)
      $('#placesCopyMode').prop('disabled',!_)
    },
    copyMode:_=>{
      $('#placesCopyMode>p').text(`${
        _===' '
          ? '仅复制坐标'
          : _==='tp '
            ? '复制tp指令'
            : _==='/tp @p '
              ? '指令方块'
              : '复制/tp指令'
      }模式`)
    },
  },
},

set={
  places:{
    toggleCopy:(setto=null)=>{
      const is = setto===null
        ? Store.toggle('isPlacesCopy',['','1'])
        : Store.set(SL.isPlacesCopy[0],setto)
      render.places.isCopyBtn(is)
    },
    copyMode:(setto=null)=>{
      const is = setto===null
        ? Store.toggle('placesCopyMode',[' ','tp ','/tp ','/tp @p '])
        : Store.set(SL.placesCopyMode[0],setto)
      render.places.copyMode(is)
    }
  },
},

__=undefined



// FLAGS

let
page=window.location.pathname.slice(1)



// INIT

TEST&&console.log('[Thisoe] TEST MODE')

$('main').css('display','flex').hide()

// init store lib
Object.keys(SL).forEach(k=>{
  const
    cache=Store.get(k),
    iniVal=SL[k][1]
  cache===null && Store.set(SL[k][0],iniVal)
  if(cache!==iniVal) SL[k][1]=cache
})
// render stored
render.places.isCopyBtn(SL.isPlacesCopy[1])
render.places.copyMode(SL.placesCopyMode[1])

// list places
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
  window.history.length > 1
    ? history.back()
    : goto()
})

$('#index')
  .on('click','nav button',function(){
    goto($(this).attr('id').slice(5))
  })

$('#places,#heritages')
  .on('click','.list>i',function(){
    // if(!$(this).hasClass('active')){
      $('.list>i').removeClass('active')
      $(this).addClass('active')
      if(SL.isPlacesCopy[1]){
        $('.list>i p').css(bg,'#3339')
        navigator.clipboard.writeText(
          SL.placesCopyMode[1] + $(this).find('p').text() + ' '
        )
        $(this).find('p').css(bg,'green')
      }
    }
  // }
  )
  .on('click','#isPlacesCopy',_=>{
    $('.list>i p').css(bg,'#3339')
    set.places.toggleCopy()
  })
  .on('click','#placesCopyMode',_=>{
    set.places.copyMode()
  })












})