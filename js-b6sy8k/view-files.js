var _0x8d7051=_0x5304;(function(_0x3c9191,_0x34081e){var _0x56effb=_0x5304,_0xf7e089=_0x3c9191();while(!![]){try{var _0x439abc=-parseInt(_0x56effb(0x1a5))/0x1+-parseInt(_0x56effb(0x177))/0x2*(parseInt(_0x56effb(0x19e))/0x3)+-parseInt(_0x56effb(0x19a))/0x4*(-parseInt(_0x56effb(0x155))/0x5)+parseInt(_0x56effb(0x167))/0x6+parseInt(_0x56effb(0x1a2))/0x7*(-parseInt(_0x56effb(0x156))/0x8)+parseInt(_0x56effb(0x18f))/0x9+parseInt(_0x56effb(0x182))/0xa*(parseInt(_0x56effb(0x15d))/0xb);if(_0x439abc===_0x34081e)break;else _0xf7e089['push'](_0xf7e089['shift']());}catch(_0x12fdee){_0xf7e089['push'](_0xf7e089['shift']());}}}(_0x5377,0xa4473));import{initializeApp}from'https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js';import{getAuth,signOut,onAuthStateChanged}from'https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js';import{getDatabase,ref,onValue,update,get,set,remove}from'https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js';const firebaseConfig={'apiKey':_0x8d7051(0x1a4),'authDomain':'projartcademyph-29663.firebaseapp.com','databaseURL':_0x8d7051(0x16f),'projectId':_0x8d7051(0x16e),'storageBucket':'projartcademyph-29663.appspot.com','messagingSenderId':_0x8d7051(0x169),'appId':'1:651674935886:web:629aefbab24dd2a154991f'},app=initializeApp(firebaseConfig),auth=getAuth(app),db=getDatabase();onAuthStateChanged(auth,_0x5035c1=>{var _0x23b474=_0x8d7051;if(_0x5035c1){var _0x570f34=sessionStorage[_0x23b474(0x164)]('sessID');_0x570f34===_0x23b474(0x16c)?bodyBlue[_0x23b474(0x168)]['visibility']=_0x23b474(0x187):signOut(auth);}else window[_0x23b474(0x1af)][_0x23b474(0x17d)](_0x23b474(0x178));});var t=0.002*window[_0x8d7051(0x170)],c=window[_0x8d7051(0x170)],scrollingBannerText=document[_0x8d7051(0x1ac)](_0x8d7051(0x163));const scrollingBanner=document['getElementById'](_0x8d7051(0x1a6));var bannerContainer=document[_0x8d7051(0x1ac)]('bannerContainer');bannerContainer['style'][_0x8d7051(0x192)]=_0x8d7051(0x165)+window[_0x8d7051(0x170)]+_0x8d7051(0x154);function checkBanner(){var _0x3d8401=_0x8d7051;const _0x427c71=ref(db,_0x3d8401(0x174));onValue(_0x427c71,_0x5b9e8e=>{var _0xe3a223=_0x3d8401;_0x5b9e8e[_0xe3a223(0x196)]()&&(scrollingBannerText[_0xe3a223(0x17c)]=_0x5b9e8e[_0xe3a223(0x1ae)]()['message'],_0x5b9e8e[_0xe3a223(0x1ae)]()['status']===!![]?scrollingBanner['style'][_0xe3a223(0x185)]=_0xe3a223(0x187):scrollingBanner[_0xe3a223(0x168)][_0xe3a223(0x185)]='hidden');});}function _0x5304(_0x5b0826,_0x324fd9){var _0x5377ab=_0x5377();return _0x5304=function(_0x5304ec,_0x49756e){_0x5304ec=_0x5304ec-0x152;var _0x3a7c95=_0x5377ab[_0x5304ec];return _0x3a7c95;},_0x5304(_0x5b0826,_0x324fd9);}function _0x5377(){var _0x14ffd9=['\x0a\x20\x20\x20\x20\x20\x20\x20\x20<iframe\x20src=\x22','transform','btnDelFile','opacity','</h1></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22tableFileControls\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22img-h6rv2c/btnPlay.png\x22\x20class=\x22btnPlayFile\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22img-h6rv2c/btnDelete.png\x22\x20class=\x22btnDelFile\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>','exists','dataset','courses/','</h1></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22tableFileDownloads\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22tableFileViews\x22><h1>Views:\x20','16GOYdia','downloads','clear','videoViews','9315rjgnFH','tableFileControls','Select\x20Course','background','7FtNSdm','click','AIzaSyADks-XldL82do7F8_A46cAWb6ZnDjQ3Yk','1109785rVzxvJ','divBanner','fileLink','key','\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h1>','link','divAppTable','getElementById','<div\x20class=\x22tableFileEntry\x22>\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22tableFileID\x22><h1>','val','location','children','videoLink','px)','582465FsnnZu','10290856IHaByG','catch','</option>','parentElement','/resources/public/','</h1></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22tableFileControls\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22img-h6rv2c/btnDownload.png\x22\x20class=\x22btnDownloadFile\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22img-h6rv2c/btnPlay.png\x22\x20class=\x22btnPlayFile\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22img-h6rv2c/btnDelete.png\x22\x20class=\x22btnDelFile\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>','</h1>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22img-h6rv2c/btnExpand.svg\x22\x20class=\x22btnExpand\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22bannerLine\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22divAppTable\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>','4389nykrcu','btnDownloadFile','btnPlayFile','rgba(0,0,0,0.3)','forEach','appIcon','pBanner','getItem','translateX(','offsetWidth','19818MZKxuM','style','651674935886','dropCourse','/files/','XribZIy3mORl28B3A7S3qOdv2Bs1','<div\x20class=\x22frm\x22\x20data-count\x20=\x20\x22','projartcademyph-29663','https://projartcademyph-29663-default-rtdb.asia-southeast1.firebasedatabase.app','innerWidth','length','transition','\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class\x20=\x20\x22entry\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22entryHeader\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22leftHeader\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22appIconHeader\x22><img\x20src=\x22','settings/banner','appName','getElementsByClassName','642PucLfm','https://creator.artcademy.ph','\x22\x20allowfullscreen\x20allowtransparency\x20allow=\x22autoplay\x22\x20scrolling=\x22no\x22\x20frameborder=\x220\x22></iframe>\x0a\x20\x20\x20\x20\x20\x20\x20\x20','change','addEventListener','innerText','replace','innerHTML','<option\x20value=\x22Select\x20Course\x22\x20class=\x22dropOption\x22>Select\x20Course</option>','size','href','89560HrcNQr','</h1></div>\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22tableFileTitle\x22><h1>','value','visibility','out','visible','resources','\x22\x20class=\x22dropOption\x22>','oAuth','count','then','code','frm','207099CKtBXP','videoTitle'];_0x5377=function(){return _0x14ffd9;};return _0x5377();}checkBanner();function bannerAnimation(){var _0x92f1db=_0x8d7051;c-=0.5,bannerContainer[_0x92f1db(0x168)]['transform']=_0x92f1db(0x165)+c+_0x92f1db(0x154),c<bannerContainer[_0x92f1db(0x166)]*-0x1&&(c=window['innerWidth'],bannerContainer[_0x92f1db(0x168)]['transform']=_0x92f1db(0x165)+window[_0x92f1db(0x170)]+_0x92f1db(0x154));}setInterval(bannerAnimation,t);const black=document[_0x8d7051(0x1ac)]('black');var dropCourse=document[_0x8d7051(0x1ac)](_0x8d7051(0x16a));const frm=document[_0x8d7051(0x176)](_0x8d7051(0x18e));var resources=document[_0x8d7051(0x1ac)](_0x8d7051(0x188));const tableFileControls=document[_0x8d7051(0x176)](_0x8d7051(0x19f)),btnDelFile=document[_0x8d7051(0x176)](_0x8d7051(0x193)),btnPlayFile=document[_0x8d7051(0x176)](_0x8d7051(0x15f)),btnDownloadFile=document[_0x8d7051(0x176)](_0x8d7051(0x15e));var divAppTable=document[_0x8d7051(0x176)](_0x8d7051(0x1ab));function loadCourse(){var _0x5399af=_0x8d7051;const _0x361ac8=ref(db,_0x5399af(0x198));get(_0x361ac8)[_0x5399af(0x18c)](_0x4f95ca=>{var _0x5cca03=_0x5399af,_0x298101=_0x5cca03(0x17f);dropCourse=document[_0x5cca03(0x1ac)](_0x5cca03(0x16a)),_0x4f95ca[_0x5cca03(0x196)]()&&(_0x4f95ca['forEach'](_0x600be4=>{var _0x77cff1=_0x5cca03;_0x298101+='<option\x20value=\x22'+_0x600be4[_0x77cff1(0x1a8)]+_0x77cff1(0x189)+_0x600be4[_0x77cff1(0x1a8)]+_0x77cff1(0x158);}),dropCourse['innerHTML']=_0x298101);});}loadCourse();function showTables(){var _0x3a21a3=_0x8d7051;dropCourse[_0x3a21a3(0x184)]!=_0x3a21a3(0x1a0)?loadResTable():resources[_0x3a21a3(0x17e)]='';}dropCourse['addEventListener'](_0x8d7051(0x17a),showTables);function loadResTable(){var _0x1a445d=_0x8d7051;const _0x1311d3=ref(db,_0x1a445d(0x198)+dropCourse[_0x1a445d(0x184)]+_0x1a445d(0x15a));get(_0x1311d3)[_0x1a445d(0x18c)](_0x26be3=>{var _0x103fd5=_0x1a445d,_0x27a1d0='';_0x26be3[_0x103fd5(0x161)](_0x3ad78f=>{var _0x53e21a=_0x103fd5,_0x42288a=_0x3ad78f[_0x53e21a(0x1a8)];const _0x4a902b=ref(db,'courses/'+dropCourse['value']+_0x53e21a(0x15a)+_0x42288a+_0x53e21a(0x16b));get(_0x4a902b)[_0x53e21a(0x18c)](_0x1fb2af=>{var _0x5bcab1=_0x53e21a;_0x1fb2af[_0x5bcab1(0x180)]>0x0&&(_0x27a1d0+=_0x5bcab1(0x16d)+_0x42288a+_0x5bcab1(0x173)+_0x3ad78f[_0x5bcab1(0x1ae)]()[_0x5bcab1(0x162)]+_0x5bcab1(0x1a9)+_0x3ad78f['val']()[_0x5bcab1(0x175)]+_0x5bcab1(0x15c),resources['innerHTML']=_0x27a1d0);});}),loadResData();});}function loadResData(){var _0x2a7894=_0x8d7051;const _0x51898b=ref(db,'courses/'+dropCourse[_0x2a7894(0x184)]+_0x2a7894(0x15a));onValue(_0x51898b,_0x2bde4c=>{var _0x381b33=_0x2a7894;for(var _0x205688=0x1;_0x205688<=_0x2bde4c['size'];_0x205688++){var _0x2738f1='',_0x2a4964=[];const _0x30a0a5=ref(db,_0x381b33(0x198)+dropCourse[_0x381b33(0x184)]+_0x381b33(0x15a)+_0x205688+'/files/');onValue(_0x30a0a5,_0x1ca8af=>{var _0x5b0183=_0x381b33;_0x1ca8af[_0x5b0183(0x161)](_0x3826f3=>{var _0x3f46d1=_0x5b0183;_0x3826f3['val']()[_0x3f46d1(0x1a7)]!=''?_0x2738f1+=_0x3f46d1(0x1ad)+_0x3826f3[_0x3f46d1(0x1a8)]+_0x3f46d1(0x183)+_0x3826f3[_0x3f46d1(0x1ae)]()[_0x3f46d1(0x190)]+'</h1></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22tableFileDownloads\x22><h1>Clicks:\x20'+_0x3826f3[_0x3f46d1(0x1ae)]()[_0x3f46d1(0x19b)]+'</h1></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22tableFileViews\x22><h1>Views:\x20'+_0x3826f3['val']()['videoViews']+_0x3f46d1(0x15b):_0x2738f1+=_0x3f46d1(0x1ad)+_0x3826f3[_0x3f46d1(0x1a8)]+_0x3f46d1(0x183)+_0x3826f3['val']()['videoTitle']+_0x3f46d1(0x199)+_0x3826f3[_0x3f46d1(0x1ae)]()[_0x3f46d1(0x19d)]+_0x3f46d1(0x195);}),_0x2a4964[_0x205688]=_0x2738f1,divAppTable[_0x205688-0x1][_0x5b0183(0x17e)]=_0x2a4964[_0x205688];for(var _0x50ec5e=0x0;_0x50ec5e<tableFileControls[_0x5b0183(0x171)];_0x50ec5e++){btnDelFile[_0x50ec5e][_0x5b0183(0x17b)](_0x5b0183(0x1a3),deleteFile),btnPlayFile[_0x50ec5e]['addEventListener'](_0x5b0183(0x1a3),playFile),btnDownloadFile[_0x50ec5e][_0x5b0183(0x17b)]('click',downloadFile);}});}});}function playFile(){var _0x27e41d=_0x8d7051,_0x348e45=Number(this['parentElement'][_0x27e41d(0x159)][_0x27e41d(0x152)][0x0][_0x27e41d(0x17c)]),_0x421cb5=Number(this[_0x27e41d(0x159)][_0x27e41d(0x159)][_0x27e41d(0x159)][_0x27e41d(0x159)][_0x27e41d(0x159)][_0x27e41d(0x197)][_0x27e41d(0x18b)]);black[_0x27e41d(0x168)][_0x27e41d(0x194)]=0x1,black[_0x27e41d(0x168)][_0x27e41d(0x1a1)]=_0x27e41d(0x160),black[_0x27e41d(0x168)][_0x27e41d(0x185)]=_0x27e41d(0x187),black['style'][_0x27e41d(0x172)]='opacity\x20.5s';const _0x57b9aa=ref(db,'courses/'+dropCourse['value']+_0x27e41d(0x15a)+_0x421cb5+_0x27e41d(0x16b)+_0x348e45+'/');get(_0x57b9aa)[_0x27e41d(0x18c)](_0xfe463b=>{var _0x18e72a=_0x27e41d;black[_0x18e72a(0x17e)]=_0x18e72a(0x191)+_0xfe463b[_0x18e72a(0x1ae)]()[_0x18e72a(0x153)]+_0x18e72a(0x179);var _0x4f29ba=_0xfe463b['val']()['videoViews'];update(ref(db,'courses/'+dropCourse['value']+_0x18e72a(0x15a)+_0x421cb5+_0x18e72a(0x16b)+_0x348e45+'/'),{'videoViews':_0x4f29ba+0x1});});}function downloadFile(){var _0x1e5616=_0x8d7051,_0x1f64d4=Number(this[_0x1e5616(0x159)][_0x1e5616(0x159)][_0x1e5616(0x152)][0x0][_0x1e5616(0x17c)]),_0x2425b1=Number(this[_0x1e5616(0x159)][_0x1e5616(0x159)][_0x1e5616(0x159)][_0x1e5616(0x159)][_0x1e5616(0x159)]['dataset'][_0x1e5616(0x18b)]),_0x17d2e6=null;const _0x5773c5=ref(db,_0x1e5616(0x198)+dropCourse[_0x1e5616(0x184)]+_0x1e5616(0x15a)+_0x2425b1+_0x1e5616(0x16b)+_0x1f64d4+'/');get(_0x5773c5)[_0x1e5616(0x18c)](_0x367285=>{var _0x95d454=_0x1e5616;window[_0x95d454(0x1af)][_0x95d454(0x181)]=_0x367285['val']()[_0x95d454(0x1aa)],_0x17d2e6=_0x367285[_0x95d454(0x1ae)]()['downloads']+0x1;})[_0x1e5616(0x18c)](()=>{var _0x42e61d=_0x1e5616;update(ref(db,_0x42e61d(0x198)+dropCourse[_0x42e61d(0x184)]+_0x42e61d(0x15a)+_0x2425b1+_0x42e61d(0x16b)+_0x1f64d4+'/'),{'downloads':_0x17d2e6});});}function deleteFile(){var _0x2f85d4=_0x8d7051,_0x44a5bb=null,_0x52a04e=[],_0x498d41=Number(this[_0x2f85d4(0x159)][_0x2f85d4(0x159)][_0x2f85d4(0x152)][0x0][_0x2f85d4(0x17c)]),_0x1dab6b=Number(this[_0x2f85d4(0x159)]['parentElement']['parentElement'][_0x2f85d4(0x159)]['parentElement']['dataset'][_0x2f85d4(0x18b)]);if(confirm('Permanently\x20delete\x20this\x20record?')){const _0xde7e80=ref(db,'courses/'+dropCourse[_0x2f85d4(0x184)]+_0x2f85d4(0x15a)+_0x1dab6b+_0x2f85d4(0x16b));get(_0xde7e80)['then'](_0xdbb1e3=>{var _0x3a74f7=_0x2f85d4;_0x44a5bb=_0xdbb1e3[_0x3a74f7(0x180)],_0xdbb1e3[_0x3a74f7(0x161)](_0x771f09=>{var _0x380f37=_0x3a74f7;_0x771f09['key']>_0x498d41&&(_0x52a04e[_0x771f09[_0x380f37(0x1a8)]]=_0x771f09[_0x380f37(0x1ae)]());});for(var _0x413ebb=0x1;_0x413ebb<=_0x44a5bb;_0x413ebb++){if(_0x413ebb>_0x498d41){var _0x4afac9=_0x413ebb-0x1;update(ref(db,_0x3a74f7(0x198)+dropCourse[_0x3a74f7(0x184)]+_0x3a74f7(0x15a)+_0x1dab6b+_0x3a74f7(0x16b)+_0x4afac9),_0x52a04e[_0x413ebb]),remove(ref(db,_0x3a74f7(0x198)+dropCourse['value']+_0x3a74f7(0x15a)+_0x1dab6b+_0x3a74f7(0x16b)+_0x44a5bb));}else _0x413ebb==_0x498d41&&remove(ref(db,_0x3a74f7(0x198)+dropCourse[_0x3a74f7(0x184)]+_0x3a74f7(0x15a)+_0x1dab6b+_0x3a74f7(0x16b)+_0x413ebb));}});}}function checkIfOnline(){var _0x565da2=_0x8d7051,_0x5b82c3=sessionStorage[_0x565da2(0x164)](_0x565da2(0x18a));_0x5b82c3==_0x565da2(0x186)&&signOut(auth)[_0x565da2(0x18c)](()=>{var _0x41cb83=_0x565da2;sessionStorage[_0x41cb83(0x19c)]();})[_0x565da2(0x157)](_0x1e6864=>{var _0xdb058c=_0x565da2;alert(_0x1e6864[_0xdb058c(0x18d)]);});}setInterval(checkIfOnline,0x1f4);