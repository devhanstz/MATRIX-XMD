const _0x1610c8=_0x2213;(function(_0x3e5e2a,_0x1a04cb){const _0x14a47a=_0x2213,_0x3a1ac1=_0x3e5e2a();while(!![]){try{const _0x4934a4=-parseInt(_0x14a47a(0xa5))/0x1+-parseInt(_0x14a47a(0xa4))/0x2*(parseInt(_0x14a47a(0xae))/0x3)+parseInt(_0x14a47a(0xb1))/0x4*(-parseInt(_0x14a47a(0xaf))/0x5)+-parseInt(_0x14a47a(0xaa))/0x6*(-parseInt(_0x14a47a(0xb0))/0x7)+-parseInt(_0x14a47a(0xa2))/0x8+parseInt(_0x14a47a(0xb5))/0x9*(-parseInt(_0x14a47a(0xb3))/0xa)+parseInt(_0x14a47a(0xa8))/0xb;if(_0x4934a4===_0x1a04cb)break;else _0x3a1ac1['push'](_0x3a1ac1['shift']());}catch(_0x14938a){_0x3a1ac1['push'](_0x3a1ac1['shift']());}}}(_0x33cc,0x5af82));function _0x33cc(){const _0x1ad810=['random','801NtYZIQ','705EurwTI','5098828ImdkJL','2244fsMbdx','react','47590TLRAbw','tools','1017cjKJQi','title','duration','Hello\x20World!','log','link','\x0a\x0a*•\x20URL*:\x20','\x0a\x0a*•\x20Duration*:\x20','Search\x20for\x20TikTok\x20videos\x20using\x20a\x20query.','🌸\x20What\x20do\x20you\x20want\x20to\x20search\x20on\x20TikTok?\x0a\x0a*Usage\x20Example:*\x0a.tiktoksearch\x20<query>','Error\x20in\x20TikTokSearch\x20command:','data','sendMessage','slice','node-fetch','error','tiktoks','join','json','890544WgpCdx','\x0a\x0a*•\x20Author*:\x20','984teuBHA','159210gbvLdy','../command','author','7292626NybYaH','https://apis-starlights-team.koyeb.app/starlight/tiktoksearch?text=','6OtpIZJ','tiktoksearch','sort'];_0x33cc=function(){return _0x1ad810;};return _0x33cc();}function hi(){const _0x51c1f1=_0x2213;console[_0x51c1f1(0xb9)](_0x51c1f1(0xb8));}function _0x2213(_0x288ee6,_0x55d8a5){const _0x33cc03=_0x33cc();return _0x2213=function(_0x2213cc,_0x1fee0f){_0x2213cc=_0x2213cc-0x98;let _0x4303c7=_0x33cc03[_0x2213cc];return _0x4303c7;},_0x2213(_0x288ee6,_0x55d8a5);}hi();const fetch=require(_0x1610c8(0x9d)),{cmd}=require(_0x1610c8(0xa6));cmd({'pattern':_0x1610c8(0xab),'alias':[_0x1610c8(0x9f),'tiks'],'desc':_0x1610c8(0xbd),'react':'✅','category':_0x1610c8(0xb4),'filename':__filename},async(_0x5d41f4,_0x1978a1,_0x1de991,{from:_0x57c353,args:_0x2aa5e5,reply:_0x3ef93b})=>{const _0x97bc10=_0x1610c8;if(!_0x2aa5e5[0x0])return _0x3ef93b(_0x97bc10(0x98));const _0x59b32e=_0x2aa5e5[_0x97bc10(0xa0)]('\x20');await _0x1de991['react']('⌛');try{_0x3ef93b('🔎\x20Searching\x20TikTok\x20for:\x20'+_0x59b32e);const _0x2f8a3e=await fetch(_0x97bc10(0xa9)+encodeURIComponent(_0x59b32e)),_0x405b6c=await _0x2f8a3e[_0x97bc10(0xa1)]();if(!_0x405b6c||!_0x405b6c[_0x97bc10(0x9a)]||_0x405b6c[_0x97bc10(0x9a)]['length']===0x0)return await _0x1de991[_0x97bc10(0xb2)]('❌'),_0x3ef93b('❌\x20No\x20results\x20found\x20for\x20your\x20query.\x20Please\x20try\x20with\x20a\x20different\x20keyword.');const _0x5cb45f=_0x405b6c['data'][_0x97bc10(0x9c)](0x0,0x7);_0x5cb45f[_0x97bc10(0xac)](()=>Math[_0x97bc10(0xad)]()-0.5);for(const _0x30ddb6 of _0x5cb45f){const _0x4869f9='🌸\x20*MATRIX-XMD\x20TikTok\x20Video\x20Result*:\x0a\x0a*•\x20Title*:\x20'+_0x30ddb6[_0x97bc10(0xb6)]+_0x97bc10(0xa3)+(_0x30ddb6[_0x97bc10(0xa7)]||'Unknown')+_0x97bc10(0xbc)+(_0x30ddb6[_0x97bc10(0xb7)]||'Unknown')+_0x97bc10(0xbb)+_0x30ddb6[_0x97bc10(0xba)]+'\x0a\x0a';_0x30ddb6['nowm']?await _0x5d41f4[_0x97bc10(0x9b)](_0x57c353,{'video':{'url':_0x30ddb6['nowm']},'caption':_0x4869f9},{'quoted':_0x1de991}):_0x3ef93b('❌\x20Failed\x20to\x20retrieve\x20video\x20for\x20\x22'+_0x30ddb6[_0x97bc10(0xb6)]+'\x22.');}await _0x1de991[_0x97bc10(0xb2)]('✅');}catch(_0x58e748){console[_0x97bc10(0x9e)](_0x97bc10(0x99),_0x58e748),await _0x1de991[_0x97bc10(0xb2)]('❌'),_0x3ef93b('❌\x20An\x20error\x20occurred\x20while\x20searching\x20TikTok.\x20Please\x20try\x20again\x20later.');}});