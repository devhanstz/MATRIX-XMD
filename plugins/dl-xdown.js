function _0x51a3(){const _0x16a5f6=['get','log','views','6ghVzGg','Matrix\x20Downloading\x20video...','createWriteStream','result','2757UDoRny','Response\x20Status:\x20','response','❌\x20Failed\x20to\x20fetch\x20video.\x20Please\x20check\x20the\x20URL\x20or\x20try\x20again\x20later.','https://api.giftedtech.web.id/api/download/xvideosdl?apikey=gifted&url=','fetchJson\x20Error:\x20','download_url','title','Hello\x20World!','Requesting\x20API\x20with\x20URL:','status','MATRIX-XMD\x20downloaded\x20video\x20successfully:\x20','xnxxdl','readFileSync','data','chat','Unexpected\x20Error:','utility','94856rGHnWs','5RrTEEu','pipe','sendMessage','816572TVDifj','3899990pairCz','464442IFCscI','xdownload','\x0a👍\x20*Likes:*\x20','replace','axios','1109423ohstet','554FqAiyO','xxx','path','\x0a👀\x20*Views:*\x20','❌\x20Please\x20provide\x20a\x20valid\x20Xvideos\x20URL.','error','9979530BKFSEB','finish','join','unlinkSync','90EjZICM','message','Response\x20Data:\x20'];_0x51a3=function(){return _0x16a5f6;};return _0x51a3();}const _0x579298=_0x52e8;(function(_0x37acf2,_0x1c67ee){const _0x41fb2d=_0x52e8,_0x12e8e5=_0x37acf2();while(!![]){try{const _0x419ad2=parseInt(_0x41fb2d(0x16e))/0x1+parseInt(_0x41fb2d(0x174))/0x2*(parseInt(_0x41fb2d(0x156))/0x3)+-parseInt(_0x41fb2d(0x16c))/0x4*(parseInt(_0x41fb2d(0x169))/0x5)+-parseInt(_0x41fb2d(0x152))/0x6*(-parseInt(_0x41fb2d(0x173))/0x7)+-parseInt(_0x41fb2d(0x168))/0x8*(-parseInt(_0x41fb2d(0x17e))/0x9)+parseInt(_0x41fb2d(0x16d))/0xa+-parseInt(_0x41fb2d(0x17a))/0xb;if(_0x419ad2===_0x1c67ee)break;else _0x12e8e5['push'](_0x12e8e5['shift']());}catch(_0x20cfd7){_0x12e8e5['push'](_0x12e8e5['shift']());}}}(_0x51a3,0x43102));function _0x52e8(_0x8883e2,_0x59b6c9){const _0x51a34f=_0x51a3();return _0x52e8=function(_0x52e88a,_0x1fb27b){_0x52e88a=_0x52e88a-0x150;let _0x59ce18=_0x51a34f[_0x52e88a];return _0x59ce18;},_0x52e8(_0x8883e2,_0x59b6c9);}function hi(){const _0x504357=_0x52e8;console[_0x504357(0x150)](_0x504357(0x15e));}hi();const {cmd}=require('../command'),axios=require(_0x579298(0x172)),fs=require('fs'),path=require(_0x579298(0x176)),fetchJson=async _0x43bc12=>{const _0x1c8f21=_0x579298;try{const _0x41beb2=await axios[_0x1c8f21(0x181)](_0x43bc12);return _0x41beb2[_0x1c8f21(0x164)];}catch(_0x2745ae){return console['error'](_0x1c8f21(0x15b)+_0x2745ae['message']),_0x2745ae[_0x1c8f21(0x158)]&&(console[_0x1c8f21(0x179)](_0x1c8f21(0x157)+_0x2745ae[_0x1c8f21(0x158)][_0x1c8f21(0x160)]),console[_0x1c8f21(0x179)](_0x1c8f21(0x180)+JSON['stringify'](_0x2745ae[_0x1c8f21(0x158)]['data'],null,0x2))),null;}};cmd({'pattern':_0x579298(0x16f),'alias':[_0x579298(0x162),_0x579298(0x175)],'react':'📥','desc':'Download\x20videos\x20from\x20Xvideos.','category':_0x579298(0x167),'filename':__filename},async(_0x509f29,_0x3fdef7,_0x3a57db,{q:_0x1beb9,reply:_0x1703bd})=>{const _0x436400=_0x579298;try{if(!_0x1beb9)return _0x1703bd(_0x436400(0x178));const _0x14fdaf=_0x436400(0x15a)+encodeURIComponent(_0x1beb9);console[_0x436400(0x150)](_0x436400(0x15f),_0x14fdaf);const _0x409351=await fetchJson(_0x14fdaf);if(!_0x409351||!_0x409351[_0x436400(0x155)])return console[_0x436400(0x179)](_0x436400(0x159)),_0x1703bd(_0x436400(0x159));const _0x16da0a=_0x409351[_0x436400(0x155)],_0x2f57fa=_0x16da0a[_0x436400(0x15c)],_0x2c9ae2=_0x16da0a[_0x436400(0x15d)][_0x436400(0x171)](/[<>:"/\\|?*]/g,''),_0x2ed21c=path[_0x436400(0x17c)](__dirname,_0x2c9ae2+'.mp4');console[_0x436400(0x150)](_0x436400(0x153));const _0x687ec7=await axios({'url':_0x2f57fa,'method':'GET','responseType':'stream'}),_0x5279e9=fs[_0x436400(0x154)](_0x2ed21c);_0x687ec7[_0x436400(0x164)][_0x436400(0x16a)](_0x5279e9),await new Promise((_0x466c78,_0x4aa2bf)=>{const _0x1d3365=_0x436400;_0x5279e9['on'](_0x1d3365(0x17b),_0x466c78),_0x5279e9['on'](_0x1d3365(0x179),_0x4aa2bf);}),console['log'](_0x436400(0x161)+_0x2ed21c),await _0x509f29[_0x436400(0x16b)](_0x3a57db[_0x436400(0x165)],{'video':fs[_0x436400(0x163)](_0x2ed21c),'caption':'*`MATRIX\x20XMD\x20XVIDEOS\x20DL`\x20\x0a\x0a🎥\x20*Title:*\x20'+_0x16da0a[_0x436400(0x15d)]+_0x436400(0x177)+_0x16da0a[_0x436400(0x151)]+_0x436400(0x170)+_0x16da0a['likes']}),fs[_0x436400(0x17d)](_0x2ed21c),console[_0x436400(0x150)]('Video\x20sent\x20and\x20file\x20cleaned\x20up.');}catch(_0x5a8d55){return console[_0x436400(0x179)](_0x436400(0x166),_0x5a8d55[_0x436400(0x17f)]),_0x1703bd('❌\x20An\x20error\x20occurred\x20while\x20processing\x20your\x20request.\x20Please\x20try\x20again.');}});
