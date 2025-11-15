/**
 * @typedef {Object} Place
 * @property {string} id - Name of place
 * @property {number} x
 * @property {number} y
 * @property {number} z
 * @property {string[]} tags - Array of tags
 * @property {string[]} contributors - Array of contributors who worked on the place.
 * @property {string} [note]
 */

/**
 * Minecraft places obj
 * @type {Place[]}
 */
const PLACES = [
  {id:'伊恩',
    x:2179,y:80,z:-171,
    tags:['capital','modern','fictional','mcClassic',],
    contributors:['Thisoe','Bistard',],
  },

  {id:'大蘑菇',
    x:2173,y:64,z:-21,
    tags:['respawnPt','oneStruct','cmdBlock',],
    contributors:['Thisoe',],
  },

  {id:'木叶村',
    x:2292,y:64,z:-27,
    tags:['mixed','town',],
    contributors:['hmr','SoldierW','Thisoe',],
  },

  {id:'云海',
    x:2609,y:70,z:-296,
    tags:['western','washiki','traditional','town','mcTheme','oriVillage',],
    contributors:['萝北','Thisoe',],
    note:'曾用名：盘琴村',
  },

  {id:'糸守',
    x:1412,y:68,z:-467,
    tags:['western','modern','mcClassic','town','oriVillage',],
    contributors:['Thisoe',],
  },

  {id:'',
    x:1412,y:68,z:-467,
    tags:[],
    contributors:['Thisoe',],
  },

]