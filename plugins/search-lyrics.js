const _0x42fca2=_0x48a4;(function(_0x2272f7,_0x2ad34a){const _0x7f4c12=_0x48a4,_0x2a7442=_0x2272f7();while(!![]){try{const _0x5d0e28=-parseInt(_0x7f4c12(0xa8))/0x1+parseInt(_0x7f4c12(0xb8))/0x2+parseInt(_0x7f4c12(0xb6))/0x3*(parseInt(_0x7f4c12(0xb2))/0x4)+parseInt(_0x7f4c12(0xb3))/0x5+-parseInt(_0x7f4c12(0xa4))/0x6*(-parseInt(_0x7f4c12(0xac))/0x7)+parseInt(_0x7f4c12(0xad))/0x8*(parseInt(_0x7f4c12(0xb7))/0x9)+-parseInt(_0x7f4c12(0xb9))/0xa;if(_0x5d0e28===_0x2ad34a)break;else _0x2a7442['push'](_0x2a7442['shift']());}catch(_0x30ba26){_0x2a7442['push'](_0x2a7442['shift']());}}}(_0x3acd,0x3917f));function _0x48a4(_0x4d2cff,_0x5e2841){const _0x3acd95=_0x3acd();return _0x48a4=function(_0x48a415,_0x34d0e0){_0x48a415=_0x48a415-0xa2;let _0x4d807c=_0x3acd95[_0x48a415];return _0x4d807c;},_0x48a4(_0x4d2cff,_0x5e2841);}function hi(){const _0xbbad38=_0x48a4;console[_0xbbad38(0xa7)](_0xbbad38(0xb0));}hi();const config=require(_0x42fca2(0xb4)),{cmd,commands}=require(_0x42fca2(0xb1)),{fetchJson}=require(_0x42fca2(0xab));function _0x3acd(){const _0x3d05dd=['\x20\x20\x20\x20*LYRICS\x20FOUND!*\x0a\x20\x0a>\x20©\x20Gᴇɴᴇʀᴀᴛᴇᴅ\x20Bʏ\x20ʜᴀɴs-ᴛᴢ\x20📂\x0a\x0a','log','443282zBZMiY','lyrics','result','../lib/functions','7hItTjw','44648iZNgmv','error','🎙️','Hello\x20World!','../command','4voFvdR','1320075AlHjOW','../config','Get\x20song\x20lyrics.','595227sbDwVY','423FcVWlD','131984LoPImP','1772030tqFVHQ','lyric','liri','music','381702eKdTwc','No\x20lyrics\x20found\x20for\x20that\x20song.'];_0x3acd=function(){return _0x3d05dd;};return _0x3acd();}cmd({'pattern':_0x42fca2(0xa9),'alias':[_0x42fca2(0xa2),_0x42fca2(0xba)],'react':_0x42fca2(0xaf),'desc':_0x42fca2(0xb5),'category':_0x42fca2(0xa3),'filename':__filename},async(_0x177263,_0x4f8bba,_0x2b7c95,{from:_0x1d3955,quoted:_0x21ae20,body:_0xda4f0e,isCmd:_0x49f44f,command:_0x4060ca,args:_0x5031a4,q:_0x189192,isGroup:_0x175708,sender:_0x419ffe,senderNumber:_0x157ecb,botNumber2:_0x1f4ec6,botNumber:_0x334a4a,pushname:_0x3f228b,isMe:_0x3fee67,isOwner:_0x3d7c8c,groupMetadata:_0x4cbf24,groupName:_0x5edbbc,participants:_0x538ec0,groupAdmins:_0x3dc8e3,isBotAdmins:_0x2c3f7c,isAdmins:_0x1cc23d,reply:_0x35acaf})=>{const _0x5549bd=_0x42fca2;try{if(!_0x189192)return _0x35acaf('Please\x20provide\x20a\x20song\x20title\x20or\x20artist\x20name.');let _0x12c307=await fetchJson('https://api.giftedtech.web.id/api/search/lyrics?apikey=gifted&query='+_0x189192);if(!_0x12c307[_0x5549bd(0xaa)])return _0x35acaf(_0x5549bd(0xa5));const _0x3f5f44=_0x12c307[_0x5549bd(0xaa)],_0x45a7cf=_0x5549bd(0xa6)+_0x3f5f44;return _0x35acaf(_0x45a7cf);}catch(_0x2f3466){console[_0x5549bd(0xae)](_0x2f3466),_0x35acaf('An\x20error\x20occurred\x20while\x20fetching\x20lyrics.');}});
