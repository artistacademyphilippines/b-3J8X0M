function _0x39a9(_0x55762f,_0x10e98b){var _0x46031b=_0x4603();return _0x39a9=function(_0x39a92,_0x6e6cd2){_0x39a92=_0x39a92-0xb9;var _0x51ac6c=_0x46031b[_0x39a92];return _0x51ac6c;},_0x39a9(_0x55762f,_0x10e98b);}var _0x1ea53e=_0x39a9;(function(_0x322c01,_0x725d33){var _0x3744b0=_0x39a9,_0x39f2db=_0x322c01();while(!![]){try{var _0x405ba1=-parseInt(_0x3744b0(0x11c))/0x1*(parseInt(_0x3744b0(0x103))/0x2)+parseInt(_0x3744b0(0xc1))/0x3+-parseInt(_0x3744b0(0xd1))/0x4+-parseInt(_0x3744b0(0xde))/0x5*(parseInt(_0x3744b0(0xef))/0x6)+parseInt(_0x3744b0(0xfd))/0x7+parseInt(_0x3744b0(0xed))/0x8*(parseInt(_0x3744b0(0xc2))/0x9)+-parseInt(_0x3744b0(0xe2))/0xa;if(_0x405ba1===_0x725d33)break;else _0x39f2db['push'](_0x39f2db['shift']());}catch(_0xe1e7af){_0x39f2db['push'](_0x39f2db['shift']());}}}(_0x4603,0x7f837));import{initializeApp}from'https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js';import{getAuth,signOut,onAuthStateChanged}from'https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js';import{getDatabase,ref,onValue,update,get,set,remove}from'https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js';const firebaseConfig={'apiKey':_0x1ea53e(0xbb),'authDomain':_0x1ea53e(0x110),'databaseURL':'https://projartcademyph-29663-default-rtdb.asia-southeast1.firebasedatabase.app','projectId':'projartcademyph-29663','storageBucket':'projartcademyph-29663.appspot.com','messagingSenderId':_0x1ea53e(0x11f),'appId':_0x1ea53e(0x10a)},app=initializeApp(firebaseConfig),auth=getAuth(app),db=getDatabase();onAuthStateChanged(auth,_0x7f5bdf=>{var _0x2fcb80=_0x1ea53e;if(_0x7f5bdf){var _0x57c0ba=sessionStorage[_0x2fcb80(0x101)](_0x2fcb80(0x11b));_0x57c0ba===_0x2fcb80(0x121)?bodyBlue[_0x2fcb80(0xcd)][_0x2fcb80(0xf2)]=_0x2fcb80(0xd8):signOut(auth);}else window[_0x2fcb80(0xb9)][_0x2fcb80(0xfe)](_0x2fcb80(0xe7));});var t=0.002*window['innerWidth'],c=window[_0x1ea53e(0x10e)],scrollingBannerText=document[_0x1ea53e(0xf1)](_0x1ea53e(0x100));const scrollingBanner=document[_0x1ea53e(0xf1)](_0x1ea53e(0x10d));var bannerContainer=document[_0x1ea53e(0xf1)](_0x1ea53e(0x10b));bannerContainer[_0x1ea53e(0xcd)]['transform']='translateX('+window[_0x1ea53e(0x10e)]+_0x1ea53e(0xc0);function checkBanner(){const _0x46a574=ref(db,'settings/banner');onValue(_0x46a574,_0x2256a6=>{var _0x1add1f=_0x39a9;_0x2256a6[_0x1add1f(0x102)]()&&(scrollingBannerText[_0x1add1f(0xc9)]=_0x2256a6[_0x1add1f(0xe6)]()[_0x1add1f(0xff)],_0x2256a6[_0x1add1f(0xe6)]()[_0x1add1f(0x114)]===!![]?scrollingBanner[_0x1add1f(0xcd)]['visibility']='visible':scrollingBanner[_0x1add1f(0xcd)][_0x1add1f(0xf2)]='hidden');});}checkBanner();function bannerAnimation(){var _0x3acd3e=_0x1ea53e;c-=0.5,bannerContainer['style'][_0x3acd3e(0xe4)]=_0x3acd3e(0x122)+c+_0x3acd3e(0xc0),c<bannerContainer[_0x3acd3e(0xca)]*-0x1&&(c=window[_0x3acd3e(0x10e)],bannerContainer[_0x3acd3e(0xcd)][_0x3acd3e(0xe4)]=_0x3acd3e(0x122)+window[_0x3acd3e(0x10e)]+_0x3acd3e(0xc0));}setInterval(bannerAnimation,t);const black=document[_0x1ea53e(0xf1)]('black');var dropCourse=document[_0x1ea53e(0xf1)](_0x1ea53e(0xf0)),dropBatch=document[_0x1ea53e(0xf1)]('dropBatch'),txtTrainingVideo=document[_0x1ea53e(0xf1)](_0x1ea53e(0xd2)),txtTrainingVideoLink=document[_0x1ea53e(0xf1)]('txtTrainingVideoLink'),divTrainingVideo=document[_0x1ea53e(0xf1)]('divTrainingVideo'),txtOtherVideosTitle=document[_0x1ea53e(0xf1)]('txtOtherVideosTitle'),txtOtherVideosLink=document[_0x1ea53e(0xf1)](_0x1ea53e(0xfc)),divOtherVideos=document['getElementById'](_0x1ea53e(0xee)),txtBasicFilesTitle=document['getElementById'](_0x1ea53e(0xfb)),txtBasicFilesLink=document[_0x1ea53e(0xf1)](_0x1ea53e(0xcf)),divBasicFiles=document[_0x1ea53e(0xf1)]('divBasicFiles');const btnAddTrainingVideo=document[_0x1ea53e(0xf1)](_0x1ea53e(0xc5)),btnDelTrainingVideo=document[_0x1ea53e(0xc7)](_0x1ea53e(0xc3)),btnPlayTrainingVideo=document['getElementsByClassName'](_0x1ea53e(0xeb)),btnAddOtherVideos=document[_0x1ea53e(0xf1)]('btnAddOtherVideos'),btnPlayOtherVideos=document[_0x1ea53e(0xc7)](_0x1ea53e(0x119)),btnDelOtherVideos=document['getElementsByClassName'](_0x1ea53e(0xc4)),btnAddBasicFiles=document[_0x1ea53e(0xf1)]('btnAddBasicFiles'),btnDelBasicFiles=document[_0x1ea53e(0xc7)](_0x1ea53e(0xdb)),btnDownloadBasicFiles=document[_0x1ea53e(0xc7)](_0x1ea53e(0xe1));function loadCourse(){var _0x2c6e20=_0x1ea53e;const _0x318a8e=ref(db,_0x2c6e20(0xc6));get(_0x318a8e)[_0x2c6e20(0x11d)](_0x2808ae=>{var _0x5fa918=_0x2c6e20,_0x1525dd='<option\x20value=\x22Select\x20Course\x22\x20class=\x22dropOption\x22>Select\x20Course</option>';dropCourse=document[_0x5fa918(0xf1)](_0x5fa918(0xf0)),_0x2808ae[_0x5fa918(0x102)]()&&(_0x2808ae[_0x5fa918(0x112)](_0x34da49=>{var _0x15f2bb=_0x5fa918;_0x1525dd+='<option\x20value=\x22'+_0x34da49[_0x15f2bb(0xfa)]+_0x15f2bb(0x105)+_0x34da49['key']+_0x15f2bb(0xc8);}),dropCourse['innerHTML']=_0x1525dd);});}loadCourse(),dropCourse['addEventListener'](_0x1ea53e(0x117),showOtherVideos),dropCourse[_0x1ea53e(0xbd)](_0x1ea53e(0x117),showBasicFiles);function loadBatch(){var _0x282b8e=_0x1ea53e;if(dropCourse[_0x282b8e(0xda)]!=_0x282b8e(0xce)){const _0x40b30e=ref(db,_0x282b8e(0xc6)+dropCourse[_0x282b8e(0xda)]+_0x282b8e(0x11e));get(_0x40b30e)[_0x282b8e(0x11d)](_0x2bd3ad=>{var _0x18086e=_0x282b8e,_0x47d2b3=_0x18086e(0x107);dropBatch=document[_0x18086e(0xf1)](_0x18086e(0xcb)),_0x2bd3ad['forEach'](_0x122038=>{var _0x2b70db=_0x18086e;_0x47d2b3+=_0x2b70db(0xe0)+_0x122038[_0x2b70db(0xfa)]+_0x2b70db(0x105)+_0x122038['key']+_0x2b70db(0xc8);}),dropBatch[_0x18086e(0x120)]=_0x47d2b3,dropBatch[_0x18086e(0xda)]=dropBatch[_0x18086e(0xec)][_0x18086e(0xda)],showTrainingVideo();});}else txtCerti[_0x282b8e(0xda)]='';}dropCourse[_0x1ea53e(0xbd)]('change',loadBatch);function showTrainingVideo(){var _0x4d3a05=_0x1ea53e;if(dropCourse[_0x4d3a05(0xda)]!=_0x4d3a05(0xce)&&dropBatch[_0x4d3a05(0xda)]!=_0x4d3a05(0xcc)){const _0x1e78b0=ref(db,_0x4d3a05(0xc6)+dropCourse[_0x4d3a05(0xda)]+_0x4d3a05(0x11e)+dropBatch[_0x4d3a05(0xda)]+_0x4d3a05(0x104));onValue(_0x1e78b0,_0x1f1b21=>{var _0x3e71df=_0x4d3a05,_0x7b5181='';divTrainingVideo['innerHTML']='';if(_0x1f1b21[_0x3e71df(0x102)]()){_0x1f1b21[_0x3e71df(0x112)](_0x3098e8=>{var _0x115f2=_0x3e71df,_0x19980e=_0x3098e8['val']()['views'][_0x115f2(0xba)](),_0x23fa66=_0x19980e[_0x115f2(0xbf)],_0x3b122b=null,_0xb72505=null,_0x4053eb=_0x19980e;_0x23fa66>0x3&&(_0x3b122b=_0x19980e['substr'](_0x23fa66-0x3,_0x23fa66),_0xb72505=_0x19980e[_0x115f2(0xf5)](0x0,_0x23fa66-0x3),_0x4053eb=_0xb72505+','+_0x3b122b),_0x7b5181+='<div\x20class=\x22trainingVideoEntry\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22trainingVideoTitle\x22\x20onclick=\x22window.open(\x27'+_0x3098e8[_0x115f2(0xe6)]()[_0x115f2(0x109)]+_0x115f2(0x10f)+_0x3098e8[_0x115f2(0xfa)]+'</h1></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22trainingVideoViews\x22><h1>'+_0x4053eb+_0x115f2(0xd0);}),divTrainingVideo[_0x3e71df(0x120)]=_0x7b5181;for(var _0x19abaf=0x0;_0x19abaf<divTrainingVideo['childElementCount'];_0x19abaf++){btnPlayTrainingVideo[_0x19abaf]['addEventListener'](_0x3e71df(0xe9),playTrainingVideo),btnDelTrainingVideo[_0x19abaf]['addEventListener']('click',delTrainingVideo);}}});}}function _0x4603(){var _0x49d208=['btnAddTrainingVideo','courses/','getElementsByClassName','</option>','innerText','offsetWidth','dropBatch','Batch\x20No.','style','Select\x20Course','txtBasicFilesLink','\x20views</h1></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22display:\x20flex;\x20height:\x2040px;\x20margin-top:\x20auto;\x20margin-bottom:\x20auto;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22img-h6rv2c/btnPlay.png\x22\x20class=\x22btnPlayTrainingVideo\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22img-h6rv2c/btnDelete.png\x22\x20class=\x22btnDelTrainingVideo\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22clickLines\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20','632928IszgNO','txtTrainingVideo','out','downloads','views','clear','https://drive.google.com/uc?export=download&id=','visible','getDate','value','btnDelBasicFiles','parentElement','\x20downloads</h1></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22display:\x20flex;\x20height:\x2040px;\x20margin-top:\x20auto;\x20margin-bottom:\x20auto;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22img-h6rv2c/btnDownload.png\x22\x20class=\x22btnDownloadBasicFiles\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22img-h6rv2c/btnDelete.png\x22\x20class=\x22btnDelBasicFiles\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22clickLines\x22></div>','16465WMLdRp','catch','<option\x20value=\x22','btnDownloadBasicFiles','357420GXjjYa','opacity','transform','getFullYear','val','https://creator.artcademy.ph','opacity\x20.5s','click','\x22\x20allowfullscreen\x20allowtransparency\x20allow=\x22autoplay\x22\x20scrolling=\x22no\x22\x20frameborder=\x220\x22></iframe>\x0a\x20\x20\x20\x20\x20\x20\x20\x20','btnPlayTrainingVideo','lastElementChild','432GGLfzC','divOtherVideos','894ZUNqAN','dropCourse','getElementById','visibility','\x0a\x20\x20\x20\x20\x20\x20\x20\x20<iframe\x20src=\x22','Please\x20select\x20a\x20course\x20or\x20a\x20batch','substr','getMonth','children','childElementCount','rgba(0,0,0,0.3)','key','txtBasicFilesTitle','txtOtherVideosLink','4863243kySNzs','replace','message','pBanner','getItem','exists','328826CAuUGs','/trainingVideos/','\x22\x20class=\x22dropOption\x22>','code','<option\x20value=\x22Batch\x20No.\x22\x20class=\x22dropOption\x22>Batch\x20No.</option>','https://drive.google.com/file/d/','link','1:651674935886:web:629aefbab24dd2a154991f','bannerContainer','\x20views</h1></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22display:\x20flex;\x20height:\x2040px;\x20margin-top:\x20auto;\x20margin-bottom:\x20auto;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22img-h6rv2c/btnPlay.png\x22\x20class=\x22btnPlayOtherVideos\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22img-h6rv2c/btnDelete.png\x22\x20class=\x22btnDelOtherVideos\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22clickLines\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20','divBanner','innerWidth','\x27,\x20\x27_blank\x27);\x22><h1>','projartcademyph-29663.firebaseapp.com','/resources/public/files/','forEach','Please\x20select\x20a\x20course\x20from\x20the\x20dropdown','status','/resources/public/videos/','oAuth','change','transition','btnPlayOtherVideos','</h1></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22basicFilesDownloads\x22><h1>','sessID','1wDYTLO','then','/batch/','651674935886','innerHTML','XribZIy3mORl28B3A7S3qOdv2Bs1','translateX(','location','toString','AIzaSyADks-XldL82do7F8_A46cAWb6ZnDjQ3Yk','<div\x20class=\x22otherVideosEntry\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22otherVideosTitle\x22\x20onclick=\x22window.open(\x27','addEventListener','background','length','px)','290700GqarJy','96615wJdSDI','btnDelTrainingVideo','btnDelOtherVideos'];_0x4603=function(){return _0x49d208;};return _0x4603();}function addTrainingVideo(){var _0x3d8793=_0x1ea53e,_0x279b89=new Date(),_0x390149='_'+(_0x279b89[_0x3d8793(0xf6)]()+0x1)+'-'+_0x279b89[_0x3d8793(0xd9)]()+'-'+_0x279b89[_0x3d8793(0xe5)]();if(dropCourse[_0x3d8793(0xda)]!=_0x3d8793(0xce)&&dropBatch['value']!='Batch\x20No.'&&txtTrainingVideo[_0x3d8793(0xda)]!=''&&txtTrainingVideoLink[_0x3d8793(0xda)]!=''){var _0x4a39f7=txtTrainingVideo['value']+_0x390149;set(ref(db,_0x3d8793(0xc6)+dropCourse['value']+'/batch/'+dropBatch['value']+_0x3d8793(0x104)+_0x4a39f7),{'link':txtTrainingVideoLink[_0x3d8793(0xda)],'views':0x0})[_0x3d8793(0x11d)](()=>{var _0x5d49a5=_0x3d8793;txtTrainingVideo[_0x5d49a5(0xda)]='',txtTrainingVideoLink['value']='';})[_0x3d8793(0xdf)](_0x3eb439=>{var _0x5b9a87=_0x3d8793;alert(_0x3eb439[_0x5b9a87(0x106)]);});}else alert(_0x3d8793(0xf4));}btnAddTrainingVideo[_0x1ea53e(0xbd)](_0x1ea53e(0xe9),addTrainingVideo);function delTrainingVideo(){var _0x1791cf=_0x1ea53e,_0x1c7f35=this['parentElement']['parentElement']['children'][0x0]['innerText'];remove(ref(db,'courses/'+dropCourse[_0x1791cf(0xda)]+'/batch/'+dropBatch['value']+_0x1791cf(0x104)+_0x1c7f35))['then'](()=>{showTrainingVideo();})[_0x1791cf(0xdf)](_0x5d2a99=>{alert(_0x5d2a99['code']);});}function playTrainingVideo(){var _0x1f980e=_0x1ea53e,_0x5318f4=this[_0x1f980e(0xdc)][_0x1f980e(0xdc)][_0x1f980e(0xf7)][0x0][_0x1f980e(0xc9)];black['style'][_0x1f980e(0xe3)]=0x1,black['style'][_0x1f980e(0xbe)]=_0x1f980e(0xf9),black[_0x1f980e(0xcd)][_0x1f980e(0xf2)]=_0x1f980e(0xd8),black[_0x1f980e(0xcd)][_0x1f980e(0x118)]=_0x1f980e(0xe8);const _0x30e0a2=ref(db,_0x1f980e(0xc6)+dropCourse[_0x1f980e(0xda)]+_0x1f980e(0x11e)+dropBatch[_0x1f980e(0xda)]+_0x1f980e(0x104)+_0x5318f4);get(_0x30e0a2)[_0x1f980e(0x11d)](_0x4ef14d=>{var _0x142b75=_0x1f980e;black[_0x142b75(0x120)]='\x0a\x20\x20\x20\x20\x20\x20\x20\x20<iframe\x20src=\x22'+_0x4ef14d[_0x142b75(0xe6)]()[_0x142b75(0x109)]+_0x142b75(0xea);var _0x5536ea=_0x4ef14d[_0x142b75(0xe6)]()['views'];update(ref(db,_0x142b75(0xc6)+dropCourse[_0x142b75(0xda)]+'/batch/'+dropBatch[_0x142b75(0xda)]+_0x142b75(0x104)+_0x5318f4),{'views':_0x5536ea+0x1});});}function showOtherVideos(){var _0x29352a=_0x1ea53e;if(dropCourse['value']!=_0x29352a(0xce)){const _0x3d12bd=ref(db,_0x29352a(0xc6)+dropCourse[_0x29352a(0xda)]+_0x29352a(0x115));onValue(_0x3d12bd,_0x4d7350=>{var _0x2a3576=_0x29352a,_0x41a218='';divOtherVideos[_0x2a3576(0x120)]='';if(_0x4d7350[_0x2a3576(0x102)]()){_0x4d7350[_0x2a3576(0x112)](_0x81d716=>{var _0x3dfc39=_0x2a3576,_0x30ae48=_0x81d716[_0x3dfc39(0xe6)]()['views'][_0x3dfc39(0xba)](),_0x3b3182=_0x30ae48[_0x3dfc39(0xbf)],_0x2e62c0=null,_0x56084b=null,_0x253e9b=_0x30ae48;_0x3b3182>0x3&&(_0x2e62c0=_0x30ae48[_0x3dfc39(0xf5)](_0x3b3182-0x3,_0x3b3182),_0x56084b=_0x30ae48[_0x3dfc39(0xf5)](0x0,_0x3b3182-0x3),_0x253e9b=_0x56084b+','+_0x2e62c0),_0x41a218+=_0x3dfc39(0xbc)+_0x81d716[_0x3dfc39(0xe6)]()[_0x3dfc39(0x109)]+'\x27,\x20\x27_blank\x27);\x22><h1>'+_0x81d716[_0x3dfc39(0xfa)]+'</h1></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22otherVideosViews\x22><h1>'+_0x253e9b+_0x3dfc39(0x10c);}),divOtherVideos[_0x2a3576(0x120)]=_0x41a218;for(var _0x7dff6=0x0;_0x7dff6<divOtherVideos[_0x2a3576(0xf8)];_0x7dff6++){btnPlayOtherVideos[_0x7dff6][_0x2a3576(0xbd)]('click',playOtherVideos),btnDelOtherVideos[_0x7dff6][_0x2a3576(0xbd)](_0x2a3576(0xe9),delOtherVideos);}}});}}function addOtherVideos(){var _0x4c0dcb=_0x1ea53e;dropCourse['value']!=_0x4c0dcb(0xce)&&txtOtherVideosTitle[_0x4c0dcb(0xda)]!=''&&txtOtherVideosLink[_0x4c0dcb(0xda)]!=''?set(ref(db,'courses/'+dropCourse[_0x4c0dcb(0xda)]+_0x4c0dcb(0x115)+txtOtherVideosTitle[_0x4c0dcb(0xda)]),{'link':txtOtherVideosLink[_0x4c0dcb(0xda)],'views':0x0})[_0x4c0dcb(0x11d)](()=>{var _0x3c6542=_0x4c0dcb;txtOtherVideosTitle[_0x3c6542(0xda)]='',txtOtherVideosLink[_0x3c6542(0xda)]='';})['catch'](_0x36e089=>{var _0x1df936=_0x4c0dcb;alert(_0x36e089[_0x1df936(0x106)]);}):alert(_0x4c0dcb(0x113));}btnAddOtherVideos[_0x1ea53e(0xbd)](_0x1ea53e(0xe9),addOtherVideos);function delOtherVideos(){var _0x4813ba=_0x1ea53e,_0xb77d3c=this[_0x4813ba(0xdc)]['parentElement'][_0x4813ba(0xf7)][0x0][_0x4813ba(0xc9)];const _0x5b5128=ref(db,_0x4813ba(0xc6)+dropCourse[_0x4813ba(0xda)]+'/resources/public/videos/'+_0xb77d3c);remove(_0x5b5128);}function playOtherVideos(){var _0xdae48=_0x1ea53e,_0x3f121c=this[_0xdae48(0xdc)]['parentElement'][_0xdae48(0xf7)][0x0][_0xdae48(0xc9)];black[_0xdae48(0xcd)][_0xdae48(0xe3)]=0x1,black['style']['background']='rgba(0,0,0,0.3)',black[_0xdae48(0xcd)][_0xdae48(0xf2)]=_0xdae48(0xd8),black[_0xdae48(0xcd)][_0xdae48(0x118)]=_0xdae48(0xe8);const _0x5e4439=ref(db,'courses/'+dropCourse[_0xdae48(0xda)]+_0xdae48(0x115)+_0x3f121c);get(_0x5e4439)['then'](_0x229f05=>{var _0xe93ce=_0xdae48;black[_0xe93ce(0x120)]=_0xe93ce(0xf3)+_0x229f05[_0xe93ce(0xe6)]()[_0xe93ce(0x109)]+'\x22\x20allowfullscreen\x20allowtransparency\x20allow=\x22autoplay\x22\x20scrolling=\x22no\x22\x20frameborder=\x220\x22></iframe>\x0a\x20\x20\x20\x20\x20\x20\x20\x20';var _0x2252f9=_0x229f05[_0xe93ce(0xe6)]()[_0xe93ce(0xd5)];update(ref(db,_0xe93ce(0xc6)+dropCourse[_0xe93ce(0xda)]+_0xe93ce(0x115)+_0x3f121c),{'views':_0x2252f9+0x1});});}function showBasicFiles(){var _0x349428=_0x1ea53e;if(dropCourse[_0x349428(0xda)]!=_0x349428(0xce)){const _0x33cd05=ref(db,_0x349428(0xc6)+dropCourse[_0x349428(0xda)]+_0x349428(0x111));onValue(_0x33cd05,_0x45b8f7=>{var _0x3fac5b=_0x349428,_0x5cf104='';divBasicFiles['innerHTML']='';if(_0x45b8f7['exists']()){_0x45b8f7['forEach'](_0x221e4f=>{var _0x3af69e=_0x39a9,_0x58399a=_0x221e4f[_0x3af69e(0xe6)]()['downloads'][_0x3af69e(0xba)](),_0x27bd74=_0x58399a[_0x3af69e(0xbf)],_0xa89883=null,_0x236020=null,_0xe4d390=_0x58399a;_0x27bd74>0x3&&(_0xa89883=strViews[_0x3af69e(0xf5)](_0x27bd74-0x3,_0x27bd74),_0x236020=strViews[_0x3af69e(0xf5)](0x0,_0x27bd74-0x3),_0xe4d390=_0x236020+','+_0xa89883),_0x5cf104+='<div\x20class=\x22basicFilesEntry\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22basicFilesTitle\x22\x20onclick=\x22window.open(\x27'+_0x221e4f['val']()[_0x3af69e(0x109)]+_0x3af69e(0x10f)+_0x221e4f[_0x3af69e(0xfa)]+_0x3af69e(0x11a)+_0xe4d390+_0x3af69e(0xdd);}),divBasicFiles[_0x3fac5b(0x120)]=_0x5cf104;for(var _0x4c5643=0x0;_0x4c5643<divOtherVideos[_0x3fac5b(0xf8)];_0x4c5643++){btnDelBasicFiles[_0x4c5643]['addEventListener']('click',delBasicFiles),btnDownloadBasicFiles[_0x4c5643][_0x3fac5b(0xbd)](_0x3fac5b(0xe9),downloadBasicFiles);}}});}}function addBasicFiles(){var _0x5953c4=_0x1ea53e;if(dropCourse[_0x5953c4(0xda)]!='Select\x20Course'&&txtBasicFilesTitle['value']!=''&&txtBasicFilesLink['value']!=''){var _0xd03216=txtBasicFilesLink[_0x5953c4(0xda)]['replace'](_0x5953c4(0x108),''),_0x232f41=_0xd03216['replace']('/view?usp=sharing',''),_0xa9bee5=_0x5953c4(0xd7)+_0x232f41;set(ref(db,'courses/'+dropCourse[_0x5953c4(0xda)]+_0x5953c4(0x111)+txtBasicFilesTitle['value']),{'link':_0xa9bee5,'downloads':0x0})['then'](()=>{var _0x6ba273=_0x5953c4;txtBasicFilesTitle[_0x6ba273(0xda)]='',txtBasicFilesLink[_0x6ba273(0xda)]='';})[_0x5953c4(0xdf)](_0x37a10e=>{var _0x4b8122=_0x5953c4;alert(_0x37a10e[_0x4b8122(0x106)]);});}else alert(_0x5953c4(0x113));}btnAddBasicFiles['addEventListener'](_0x1ea53e(0xe9),addBasicFiles);function delBasicFiles(){var _0xe66938=_0x1ea53e,_0x2ab078=this[_0xe66938(0xdc)][_0xe66938(0xdc)]['children'][0x0][_0xe66938(0xc9)];const _0x2507aa=ref(db,'courses/'+dropCourse[_0xe66938(0xda)]+'/resources/public/files/'+_0x2ab078);remove(_0x2507aa);}function downloadBasicFiles(){var _0x5bbca6=_0x1ea53e,_0x5158e3=null,_0x227b56=this[_0x5bbca6(0xdc)][_0x5bbca6(0xdc)][_0x5bbca6(0xf7)][0x0][_0x5bbca6(0xc9)];const _0x238177=ref(db,_0x5bbca6(0xc6)+dropCourse[_0x5bbca6(0xda)]+_0x5bbca6(0x111)+_0x227b56);get(_0x238177)['then'](_0x553a4c=>{var _0x2073e3=_0x5bbca6;window[_0x2073e3(0xb9)]['href']=_0x553a4c[_0x2073e3(0xe6)]()['link'],_0x5158e3=_0x553a4c[_0x2073e3(0xe6)]()[_0x2073e3(0xd4)]+0x1;})[_0x5bbca6(0x11d)](()=>{var _0x600352=_0x5bbca6;update(ref(db,'courses/'+dropCourse[_0x600352(0xda)]+_0x600352(0x111)+_0x227b56),{'downloads':_0x5158e3});});}function checkIfOnline(){var _0x53c8c7=_0x1ea53e,_0x512955=sessionStorage['getItem'](_0x53c8c7(0x116));_0x512955==_0x53c8c7(0xd3)&&signOut(auth)['then'](()=>{var _0x44fdf8=_0x53c8c7;sessionStorage[_0x44fdf8(0xd6)]();})['catch'](_0x3709ee=>{var _0x330f90=_0x53c8c7;alert(_0x3709ee[_0x330f90(0x106)]);});}setInterval(checkIfOnline,0x1f4);