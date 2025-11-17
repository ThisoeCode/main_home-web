const

// CONFIG
storeLib = {
  isPlacesCopy:['pc','1'],
  /** ``, `tp `, `/tp ` */
  placesCopyMode:['pm','none'],

},

// EXPORT
Store = {
  set:(k,v)=>localStorage.setItem(storeLib[k][0],v),
  get:k=>localStorage.getItem(storeLib[k][0]),
  init:(_=>{
    const r={isLocalStorageAvailable:(_=>{
      try{
        localStorage.getItem('ls')
        return '1'
      }catch(e){
        return '0'
      }
    })()}
    Object.keys(storeLib).forEach(k=>{
      const q=Store.get(k)
      r[k] = q===null?storeLib[k][1]:q
    })
    return r
  })(),
}