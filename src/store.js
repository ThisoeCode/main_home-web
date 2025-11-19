const

/** ### Store Lib
 * - The init val & a copy of `localStorage`
 */
SL = {
  // cookieAgreement:['0','Nessesary Only'],
  isPlacesCopy:['1','1'],
  placesCopyMode:['2',' '],

},

// EXPORT
Store = {
  set:(i,v)=>{
    localStorage.setItem(i,v)
    return v
  },
  get:k=>localStorage.getItem(SL[k][0]),
}
Store.toggle=(k,opts)=>{
  if(!Array.isArray(opts)) throw new Error('[Thisoe] ERROR \n`Store.toggle`: Unexpected 2nd param `opts`. Please pass in an array.')
  const current = SL[k][1], i=opts.indexOf(current)
  if(i===-1) throw new Error('[Thisoe] ERROR \n`Store.toggle`: The item `'+i+'` was not found in given options. Key id: '+current)
  /** result */
  const r = opts[(i + 1) % opts.length]
  Store.set(SL[k][0],r)
  SL[k][1]=r
  return r
}