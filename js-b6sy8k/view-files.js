var _0x56a83b=_0xbf77;function _0xbf77(_0x43ebb0,_0x340fab){var _0x136f86=_0x136f();return _0xbf77=function(_0xbf770b,_0x3b347a){_0xbf770b=_0xbf770b-0x1c9;var _0x2c9810=_0x136f86[_0xbf770b];return _0x2c9810;},_0xbf77(_0x43ebb0,_0x340fab);}(function(_0x5deba9,_0x503a28){var _0x5571a6=_0xbf77,_0x52a307=_0x5deba9();while(!![]){try{var _0x1d3c9f=-parseInt(_0x5571a6(0x1d6))/0x1*(parseInt(_0x5571a6(0x200))/0x2)+parseInt(_0x5571a6(0x1ec))/0x3+parseInt(_0x5571a6(0x224))/0x4+-parseInt(_0x5571a6(0x1fb))/0x5+-parseInt(_0x5571a6(0x219))/0x6+-parseInt(_0x5571a6(0x1db))/0x7+-parseInt(_0x5571a6(0x1de))/0x8*(-parseInt(_0x5571a6(0x205))/0x9);if(_0x1d3c9f===_0x503a28)break;else _0x52a307['push'](_0x52a307['shift']());}catch(_0x3ca66d){_0x52a307['push'](_0x52a307['shift']());}}}(_0x136f,0x8f67b));import{initializeApp}from'https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js';import{getAuth,signOut,onAuthStateChanged}from'https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js';import{getDatabase,ref,onValue,update,get,set,remove}from'https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js';const firebaseConfig={'apiKey':_0x56a83b(0x1f7),'authDomain':_0x56a83b(0x1e0),'databaseURL':_0x56a83b(0x21b),'projectId':_0x56a83b(0x1f2),'storageBucket':'projartcademyph-29663.appspot.com','messagingSenderId':'651674935886','appId':'1:651674935886:web:629aefbab24dd2a154991f'},app=initializeApp(firebaseConfig),auth=getAuth(app),db=getDatabase();var bodyBlue=document[_0x56a83b(0x217)]('bodyBlue');bodyBlue[_0x56a83b(0x1dc)][_0x56a83b(0x210)]='visible';var t=0.002*window[_0x56a83b(0x202)],c=window['innerWidth'],scrollingBannerText=document['getElementById'](_0x56a83b(0x20e));const scrollingBanner=document[_0x56a83b(0x217)](_0x56a83b(0x218));var bannerContainer=document[_0x56a83b(0x217)](_0x56a83b(0x215));bannerContainer[_0x56a83b(0x1dc)][_0x56a83b(0x208)]='translateX('+window['innerWidth']+_0x56a83b(0x1ef);function checkBanner(){var _0x42db99=_0x56a83b;const _0x577a37=ref(db,_0x42db99(0x1ce));onValue(_0x577a37,_0x4e1f70=>{var _0x9a74d1=_0x42db99;_0x4e1f70[_0x9a74d1(0x1cd)]()&&(scrollingBannerText[_0x9a74d1(0x1d7)]=_0x4e1f70[_0x9a74d1(0x20a)]()[_0x9a74d1(0x1d3)],_0x4e1f70[_0x9a74d1(0x20a)]()[_0x9a74d1(0x206)]===!![]?scrollingBanner['style'][_0x9a74d1(0x210)]=_0x9a74d1(0x220):scrollingBanner[_0x9a74d1(0x1dc)][_0x9a74d1(0x210)]=_0x9a74d1(0x225));});}checkBanner();function bannerAnimation(){var _0x5eb493=_0x56a83b;c-=0.5,bannerContainer[_0x5eb493(0x1dc)][_0x5eb493(0x208)]=_0x5eb493(0x1d2)+c+'px)',c<bannerContainer[_0x5eb493(0x212)]*-0x1&&(c=window[_0x5eb493(0x202)],bannerContainer[_0x5eb493(0x1dc)][_0x5eb493(0x208)]=_0x5eb493(0x1d2)+window[_0x5eb493(0x202)]+_0x5eb493(0x1ef));}setInterval(bannerAnimation,t);const black=document[_0x56a83b(0x217)](_0x56a83b(0x1e3));var dropCourse=document['getElementById'](_0x56a83b(0x1d5)),resources=document[_0x56a83b(0x217)]('resources');const btnExpand=document[_0x56a83b(0x213)]('btnExpand'),tableFileControls=document[_0x56a83b(0x213)](_0x56a83b(0x1e7)),btnDelFile=document['getElementsByClassName'](_0x56a83b(0x1d8)),btnPlayFile=document[_0x56a83b(0x213)](_0x56a83b(0x1fe)),btnDownloadFile=document[_0x56a83b(0x213)](_0x56a83b(0x1fa));var divAppTable=document[_0x56a83b(0x213)](_0x56a83b(0x1dd));function loadCourse(){var _0x2c0737=_0x56a83b;const _0x49afbe=ref(db,_0x2c0737(0x21e));get(_0x49afbe)[_0x2c0737(0x1f4)](_0x1771e6=>{var _0x198714=_0x2c0737,_0x3b89d9='<option\x20value=\x22Select\x20Course\x22\x20class=\x22dropOption\x22>Select\x20Course</option>';dropCourse=document[_0x198714(0x217)](_0x198714(0x1d5)),_0x1771e6[_0x198714(0x1cd)]()&&(_0x1771e6[_0x198714(0x1e8)](_0x494406=>{var _0xb726d=_0x198714;_0x3b89d9+=_0xb726d(0x1e5)+_0x494406[_0xb726d(0x216)]+'\x22\x20class=\x22dropOption\x22>'+_0x494406[_0xb726d(0x216)]+'</option>';}),dropCourse['innerHTML']=_0x3b89d9);});}loadCourse();function showTables(){var _0x53a4ed=_0x56a83b;dropCourse[_0x53a4ed(0x21a)]!=_0x53a4ed(0x1f3)?loadResTable():resources[_0x53a4ed(0x204)]='';}dropCourse['addEventListener'](_0x56a83b(0x1c9),showTables);function loadResTable(){var _0x1500ff=_0x56a83b;const _0x101f75=ref(db,_0x1500ff(0x21e)+dropCourse[_0x1500ff(0x21a)]+_0x1500ff(0x20b));get(_0x101f75)[_0x1500ff(0x1f4)](_0x57852b=>{var _0x2fb164=_0x1500ff,_0x4ff2d5='';_0x57852b[_0x2fb164(0x1e8)](_0x4d7941=>{var _0x12f7ad=_0x2fb164,_0x3a1a20=_0x4d7941[_0x12f7ad(0x216)];const _0x14740d=ref(db,'courses/'+dropCourse[_0x12f7ad(0x21a)]+_0x12f7ad(0x20b)+_0x3a1a20+_0x12f7ad(0x1e4));get(_0x14740d)[_0x12f7ad(0x1f4)](_0x1469ad=>{var _0x391d5b=_0x12f7ad;if(_0x1469ad[_0x391d5b(0x1f9)]>0x0){_0x4ff2d5+=_0x391d5b(0x1e9)+_0x3a1a20+_0x391d5b(0x21d)+_0x4d7941[_0x391d5b(0x20a)]()[_0x391d5b(0x1ff)]+_0x391d5b(0x1d0)+_0x4d7941[_0x391d5b(0x20a)]()['appName']+_0x391d5b(0x209),resources[_0x391d5b(0x204)]=_0x4ff2d5;for(var _0x10c14a=0x0;_0x10c14a<btnExpand[_0x391d5b(0x1cf)];_0x10c14a++){btnExpand[_0x10c14a][_0x391d5b(0x1cb)]('click',showHideRes);}}});}),loadResData();});}function loadResData(){var _0x21b867=_0x56a83b;const _0x264941=ref(db,_0x21b867(0x21e)+dropCourse[_0x21b867(0x21a)]+_0x21b867(0x20b));onValue(_0x264941,_0x12bdcf=>{var _0x39b05e=_0x21b867;for(var _0x4a028c=0x1;_0x4a028c<=_0x12bdcf[_0x39b05e(0x1f9)];_0x4a028c++){var _0x3a4603='',_0x32cac6=[];const _0x229d6d=ref(db,_0x39b05e(0x21e)+dropCourse['value']+_0x39b05e(0x20b)+_0x4a028c+_0x39b05e(0x1e4));onValue(_0x229d6d,_0x46e0fc=>{var _0x5520fa=_0x39b05e;_0x46e0fc[_0x5520fa(0x1e8)](_0x612137=>{var _0x153163=_0x5520fa;_0x612137['val']()[_0x153163(0x223)]!=''?_0x3a4603+=_0x153163(0x21c)+_0x612137['key']+_0x153163(0x20c)+_0x612137[_0x153163(0x20a)]()[_0x153163(0x1ca)]+'</h1></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22tableFileDownloads\x22><h1>Clicks:\x20'+_0x612137[_0x153163(0x20a)]()[_0x153163(0x1eb)]+_0x153163(0x1d4)+_0x612137[_0x153163(0x20a)]()[_0x153163(0x207)]+_0x153163(0x211):_0x3a4603+=_0x153163(0x21c)+_0x612137['key']+_0x153163(0x20c)+_0x612137['val']()[_0x153163(0x1ca)]+_0x153163(0x1d1)+_0x612137[_0x153163(0x20a)]()[_0x153163(0x207)]+_0x153163(0x1da);}),_0x32cac6[_0x4a028c]=_0x3a4603,divAppTable[_0x4a028c-0x1][_0x5520fa(0x204)]=_0x32cac6[_0x4a028c];for(var _0x1e1bb9=0x0;_0x1e1bb9<tableFileControls[_0x5520fa(0x1cf)];_0x1e1bb9++){btnDelFile[_0x1e1bb9][_0x5520fa(0x1cb)]('click',deleteFile),btnPlayFile[_0x1e1bb9][_0x5520fa(0x1cb)]('click',playFile),btnDownloadFile[_0x1e1bb9][_0x5520fa(0x1cb)](_0x5520fa(0x1fc),downloadFile);}});}});}function showHideRes(){var _0xcfef45=_0x56a83b,_0x318df3=this['parentElement'][_0xcfef45(0x21f)][_0xcfef45(0x1ed)][_0xcfef45(0x226)];if(_0x318df3=='false'){var _0x25f321=this[_0xcfef45(0x21f)][_0xcfef45(0x21f)][_0xcfef45(0x20f)][0x2];this[_0xcfef45(0x1dc)]['transform']=_0xcfef45(0x1f8),_0x25f321[_0xcfef45(0x1dc)][_0xcfef45(0x20d)]=_0xcfef45(0x222),_0x25f321[_0xcfef45(0x1dc)][_0xcfef45(0x1d9)]=_0xcfef45(0x1df),this['parentElement'][_0xcfef45(0x21f)][_0xcfef45(0x1ed)]['show']=_0xcfef45(0x1f1);}else{var _0x25f321=this[_0xcfef45(0x21f)][_0xcfef45(0x21f)][_0xcfef45(0x20f)][0x2];this['style']['transform']=_0xcfef45(0x1e6),_0x25f321['style'][_0xcfef45(0x20d)]=_0xcfef45(0x1ee),this['parentElement']['parentElement']['dataset'][_0xcfef45(0x226)]='false';}}function _0x136f(){var _0x1bd394=['getElementById','divBanner','6341298tTLMfy','value','https://projartcademyph-29663-default-rtdb.asia-southeast1.firebasedatabase.app','<div\x20class=\x22tableFileEntry\x22>\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22tableFileID\x22><h1>','\x22\x20data-show\x20=\x20\x22false\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22entryHeader\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22leftHeader\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22appIconHeader\x22><img\x20src=\x22','courses/','parentElement','visible','out','inline-flex','fileLink','2676028uWvSjW','hidden','show','change','videoTitle','addEventListener','opacity\x20.5s','exists','settings/banner','length','\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h1>','</h1></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22tableFileDownloads\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22tableFileViews\x22><h1>Views:\x20','translateX(','message','</h1></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22tableFileViews\x22><h1>Views:\x20','dropCourse','1pOJddf','innerText','btnDelFile','flexDirection','</h1></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22tableFileControls\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22img-h6rv2c/btnPlay.png\x22\x20class=\x22btnPlayFile\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22img-h6rv2c/btnDelete.png\x22\x20class=\x22btnDelFile\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>','3599981CriRnh','style','divAppTable','32MWDwKu','column','projartcademyph-29663.firebaseapp.com','count','\x0a\x20\x20\x20\x20\x20\x20\x20\x20<iframe\x20src=\x22','black','/files/','<option\x20value=\x22','rotate(0deg)','tableFileControls','forEach','<div\x20class=\x22frm\x22\x20data-count\x20=\x20\x22','catch','downloads','3320352PQJaSJ','dataset','none','px)','opacity','true','projartcademyph-29663','Select\x20Course','then','background','clear','AIzaSyADks-XldL82do7F8_A46cAWb6ZnDjQ3Yk','rotate(-180deg)','size','btnDownloadFile','352680OrZaIP','click','link','btnPlayFile','appIcon','997860jiqOYe','getItem','innerWidth','Permanently\x20delete\x20this\x20record?','innerHTML','2142513yRGjxJ','status','videoViews','transform','</h1>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22img-h6rv2c/btnExpand.svg\x22\x20class=\x22btnExpand\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22bannerLine\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22divAppTable\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>','val','/resources/public/','</h1></div>\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22tableFileTitle\x22><h1>','display','pBanner','children','visibility','</h1></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22tableFileControls\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22img-h6rv2c/btnDownload.png\x22\x20class=\x22btnDownloadFile\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22img-h6rv2c/btnPlay.png\x22\x20class=\x22btnPlayFile\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22img-h6rv2c/btnDelete.png\x22\x20class=\x22btnDelFile\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>','offsetWidth','getElementsByClassName','\x22\x20allowfullscreen\x20allowtransparency\x20allow=\x22autoplay\x22\x20scrolling=\x22no\x22\x20frameborder=\x220\x22></iframe>\x0a\x20\x20\x20\x20\x20\x20\x20\x20','bannerContainer','key'];_0x136f=function(){return _0x1bd394;};return _0x136f();}function playFile(){var _0xf9ecc8=_0x56a83b,_0x47ccdf=Number(this[_0xf9ecc8(0x21f)]['parentElement'][_0xf9ecc8(0x20f)][0x0]['innerText']),_0x3844b5=Number(this['parentElement'][_0xf9ecc8(0x21f)][_0xf9ecc8(0x21f)][_0xf9ecc8(0x21f)]['parentElement']['dataset'][_0xf9ecc8(0x1e1)]);black['style'][_0xf9ecc8(0x1f0)]=0x1,black[_0xf9ecc8(0x1dc)][_0xf9ecc8(0x1f5)]='rgba(0,0,0,0.3)',black[_0xf9ecc8(0x1dc)][_0xf9ecc8(0x210)]=_0xf9ecc8(0x220),black[_0xf9ecc8(0x1dc)]['transition']=_0xf9ecc8(0x1cc);const _0x519f2a=ref(db,_0xf9ecc8(0x21e)+dropCourse['value']+_0xf9ecc8(0x20b)+_0x3844b5+_0xf9ecc8(0x1e4)+_0x47ccdf+'/');get(_0x519f2a)[_0xf9ecc8(0x1f4)](_0x264462=>{var _0x28d317=_0xf9ecc8;black['innerHTML']=_0x28d317(0x1e2)+_0x264462[_0x28d317(0x20a)]()['videoLink']+_0x28d317(0x214);var _0x48706a=_0x264462[_0x28d317(0x20a)]()[_0x28d317(0x207)];update(ref(db,'courses/'+dropCourse[_0x28d317(0x21a)]+_0x28d317(0x20b)+_0x3844b5+'/files/'+_0x47ccdf+'/'),{'videoViews':_0x48706a+0x1});});}function downloadFile(){var _0x3ca9fe=_0x56a83b,_0x1033e6=Number(this[_0x3ca9fe(0x21f)][_0x3ca9fe(0x21f)][_0x3ca9fe(0x20f)][0x0]['innerText']),_0x5f2e88=Number(this[_0x3ca9fe(0x21f)]['parentElement'][_0x3ca9fe(0x21f)][_0x3ca9fe(0x21f)][_0x3ca9fe(0x21f)][_0x3ca9fe(0x1ed)][_0x3ca9fe(0x1e1)]),_0x137fcf=null;const _0x76f354=ref(db,'courses/'+dropCourse[_0x3ca9fe(0x21a)]+_0x3ca9fe(0x20b)+_0x5f2e88+'/files/'+_0x1033e6+'/');get(_0x76f354)['then'](_0x3ccbe0=>{var _0x2c1468=_0x3ca9fe;window['location']['href']=_0x3ccbe0['val']()[_0x2c1468(0x1fd)],_0x137fcf=_0x3ccbe0[_0x2c1468(0x20a)]()[_0x2c1468(0x1eb)]+0x1;})['then'](()=>{var _0x1e76c3=_0x3ca9fe;update(ref(db,_0x1e76c3(0x21e)+dropCourse[_0x1e76c3(0x21a)]+_0x1e76c3(0x20b)+_0x5f2e88+_0x1e76c3(0x1e4)+_0x1033e6+'/'),{'downloads':_0x137fcf});});}function deleteFile(){var _0x1b0132=_0x56a83b,_0x160263=null,_0x433c74=[],_0x2f8bda=Number(this['parentElement'][_0x1b0132(0x21f)][_0x1b0132(0x20f)][0x0][_0x1b0132(0x1d7)]),_0x28fa28=Number(this['parentElement'][_0x1b0132(0x21f)][_0x1b0132(0x21f)]['parentElement'][_0x1b0132(0x21f)][_0x1b0132(0x1ed)][_0x1b0132(0x1e1)]);if(confirm(_0x1b0132(0x203))){const _0x4d11ac=ref(db,'courses/'+dropCourse[_0x1b0132(0x21a)]+'/resources/public/'+_0x28fa28+_0x1b0132(0x1e4));get(_0x4d11ac)['then'](_0x335159=>{var _0x4703a1=_0x1b0132;_0x160263=_0x335159['size'],_0x335159[_0x4703a1(0x1e8)](_0x41ffc5=>{var _0x2b9b82=_0x4703a1;_0x41ffc5[_0x2b9b82(0x216)]>_0x2f8bda&&(_0x433c74[_0x41ffc5['key']]=_0x41ffc5[_0x2b9b82(0x20a)]());});for(var _0x111c4f=0x1;_0x111c4f<=_0x160263;_0x111c4f++){if(_0x111c4f>_0x2f8bda){var _0x47fdc2=_0x111c4f-0x1;update(ref(db,_0x4703a1(0x21e)+dropCourse[_0x4703a1(0x21a)]+_0x4703a1(0x20b)+_0x28fa28+_0x4703a1(0x1e4)+_0x47fdc2),_0x433c74[_0x111c4f]),remove(ref(db,_0x4703a1(0x21e)+dropCourse['value']+_0x4703a1(0x20b)+_0x28fa28+_0x4703a1(0x1e4)+_0x160263));}else _0x111c4f==_0x2f8bda&&remove(ref(db,_0x4703a1(0x21e)+dropCourse[_0x4703a1(0x21a)]+_0x4703a1(0x20b)+_0x28fa28+_0x4703a1(0x1e4)+_0x111c4f));}});}}function checkIfOnline(){var _0x12c226=_0x56a83b,_0x1ca8d0=sessionStorage[_0x12c226(0x201)]('oAuth');_0x1ca8d0==_0x12c226(0x221)&&signOut(auth)[_0x12c226(0x1f4)](()=>{var _0x10660e=_0x12c226;sessionStorage[_0x10660e(0x1f6)]();})[_0x12c226(0x1ea)](_0x13dd74=>{alert(_0x13dd74['code']);});}setInterval(checkIfOnline,0x1f4);