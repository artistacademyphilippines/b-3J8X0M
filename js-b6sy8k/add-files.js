var _0x42562c=_0x44b9;(function(_0x39d09d,_0x36b7bc){var _0x4472dd=_0x44b9,_0x1e16be=_0x39d09d();while(!![]){try{var _0x35b780=parseInt(_0x4472dd(0x102))/0x1+parseInt(_0x4472dd(0x148))/0x2+-parseInt(_0x4472dd(0x12c))/0x3+parseInt(_0x4472dd(0xfe))/0x4*(parseInt(_0x4472dd(0x151))/0x5)+parseInt(_0x4472dd(0x10a))/0x6*(parseInt(_0x4472dd(0x122))/0x7)+-parseInt(_0x4472dd(0x104))/0x8+parseInt(_0x4472dd(0x11a))/0x9;if(_0x35b780===_0x36b7bc)break;else _0x1e16be['push'](_0x1e16be['shift']());}catch(_0x136b96){_0x1e16be['push'](_0x1e16be['shift']());}}}(_0x3d04,0x457f6));function _0x44b9(_0x2254a1,_0x2cb707){var _0x3d0405=_0x3d04();return _0x44b9=function(_0x44b945,_0x3395f8){_0x44b945=_0x44b945-0xef;var _0x35d6ad=_0x3d0405[_0x44b945];return _0x35d6ad;},_0x44b9(_0x2254a1,_0x2cb707);}import{initializeApp}from'https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js';import{getAuth,signOut,onAuthStateChanged}from'https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js';import{getDatabase,ref,onValue,update,get,set,remove}from'https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js';const firebaseConfig={'apiKey':'AIzaSyADks-XldL82do7F8_A46cAWb6ZnDjQ3Yk','authDomain':_0x42562c(0x13c),'databaseURL':_0x42562c(0x123),'projectId':'projartcademyph-29663','storageBucket':_0x42562c(0xf7),'messagingSenderId':_0x42562c(0x12e),'appId':_0x42562c(0x145)},app=initializeApp(firebaseConfig),auth=getAuth(app),db=getDatabase();var bodyBlue=document[_0x42562c(0x10d)](_0x42562c(0xf6));onAuthStateChanged(auth,_0x290d23=>{var _0x3e77fe=_0x42562c;if(_0x290d23){var _0x46ee83=sessionStorage['getItem'](_0x3e77fe(0x130));_0x46ee83===_0x3e77fe(0x11f)?bodyBlue[_0x3e77fe(0x157)][_0x3e77fe(0x103)]=_0x3e77fe(0x13f):signOut(auth);}else window[_0x3e77fe(0x144)]['replace'](_0x3e77fe(0x147));});var t=0.002*window[_0x42562c(0xfc)],c=window[_0x42562c(0xfc)],scrollingBannerText=document[_0x42562c(0x10d)](_0x42562c(0x134));const scrollingBanner=document['getElementById'](_0x42562c(0x112));var bannerContainer=document[_0x42562c(0x10d)](_0x42562c(0x124));bannerContainer[_0x42562c(0x157)]['transform']='translateX('+window[_0x42562c(0xfc)]+_0x42562c(0x12b);function checkBanner(){const _0x39dee1=ref(db,'settings/banner');onValue(_0x39dee1,_0x360c03=>{var _0x388c5d=_0x44b9;_0x360c03[_0x388c5d(0x159)]()&&(scrollingBannerText[_0x388c5d(0x121)]=_0x360c03[_0x388c5d(0xf5)]()[_0x388c5d(0xfd)],_0x360c03['val']()[_0x388c5d(0xf2)]===!![]?scrollingBanner[_0x388c5d(0x157)]['visibility']=_0x388c5d(0x13f):scrollingBanner[_0x388c5d(0x157)][_0x388c5d(0x103)]=_0x388c5d(0x120));});}checkBanner();function bannerAnimation(){var _0x3204aa=_0x42562c;c-=0.5,bannerContainer[_0x3204aa(0x157)][_0x3204aa(0x14a)]=_0x3204aa(0x15f)+c+'px)',c<bannerContainer['offsetWidth']*-0x1&&(c=window[_0x3204aa(0xfc)],bannerContainer[_0x3204aa(0x157)][_0x3204aa(0x14a)]=_0x3204aa(0x15f)+window[_0x3204aa(0xfc)]+_0x3204aa(0x12b));}setInterval(bannerAnimation,t);const black=document[_0x42562c(0x10d)](_0x42562c(0x146));var dropCourse=document[_0x42562c(0x10d)](_0x42562c(0x118)),dropBatch=document[_0x42562c(0x10d)]('dropBatch');const frm=document[_0x42562c(0x117)](_0x42562c(0xf1));var resources=document[_0x42562c(0x10d)](_0x42562c(0x15e)),txtTrainingVideo=document['getElementById'](_0x42562c(0x110)),txtTrainingVideoLink=document[_0x42562c(0x10d)](_0x42562c(0x15a)),divTrainingVideo=document[_0x42562c(0x10d)](_0x42562c(0x136));const btnAddTrainingVideo=document['getElementById'](_0x42562c(0x160)),btnDelTrainingVideo=document[_0x42562c(0x117)](_0x42562c(0x113)),btnPlayTrainingVideo=document['getElementsByClassName'](_0x42562c(0x150));var txtAppID=document['getElementById'](_0x42562c(0x155)),txtAppName=document['getElementById'](_0x42562c(0x153)),txtAppIconLink=document['getElementById']('txtAppIconLink'),divAppName=document[_0x42562c(0x10d)]('divAppName');const btnAddApp=document[_0x42562c(0x10d)](_0x42562c(0x13b)),btnDelApp=document[_0x42562c(0x117)]('btnDelApp'),btnEditApp=document[_0x42562c(0x117)](_0x42562c(0x100));var dropApp=document[_0x42562c(0x10d)](_0x42562c(0x125)),txtVideoID=document[_0x42562c(0x10d)](_0x42562c(0xf3)),txtVideoTitle=document[_0x42562c(0x10d)](_0x42562c(0x106)),txtVideoLink=document[_0x42562c(0x10d)](_0x42562c(0xff)),txtFileLink=document[_0x42562c(0x10d)](_0x42562c(0x152)),chkNew=document[_0x42562c(0x10d)]('chkNew');const btnConfirm=document[_0x42562c(0x10d)](_0x42562c(0xf4));function loadCourse(){var _0x289740=_0x42562c;const _0x558125=ref(db,_0x289740(0x105));get(_0x558125)['then'](_0x833a9=>{var _0x1f809c=_0x289740,_0xf2c0b8='<option\x20value=\x22Select\x20Course\x22\x20class=\x22dropOption\x22>Select\x20Course</option>';dropCourse=document['getElementById'](_0x1f809c(0x118)),_0x833a9[_0x1f809c(0x159)]()&&(_0x833a9[_0x1f809c(0x141)](_0x45b411=>{var _0x138464=_0x1f809c;_0xf2c0b8+='<option\x20value=\x22'+_0x45b411[_0x138464(0xfa)]+_0x138464(0x11e)+_0x45b411['key']+_0x138464(0x12d);}),dropCourse['innerHTML']=_0xf2c0b8);});}loadCourse();function showTables(){var _0x33f3cb=_0x42562c;dropCourse['value']!='Select\x20Course'?(loadApps(),showApps()):(divTrainingVideo[_0x33f3cb(0x109)]='',divAppName['innerHTML']='',dropApp[_0x33f3cb(0x109)]='\x20<option\x20value=\x22Select\x20App\x22\x20class=\x22dropOption\x22>Select\x20App</option>',dropBatch['innerHTML']=_0x33f3cb(0x127));}dropCourse[_0x42562c(0x13d)](_0x42562c(0x138),showTables);function loadBatch(){var _0x388b8b=_0x42562c;if(dropCourse['value']!='Select\x20Course'){const _0x474167=ref(db,_0x388b8b(0x105)+dropCourse['value']+_0x388b8b(0x13a));get(_0x474167)[_0x388b8b(0x11c)](_0x1cca52=>{var _0x3e3040=_0x388b8b,_0x14d1e2=_0x3e3040(0x127);dropBatch=document[_0x3e3040(0x10d)](_0x3e3040(0x131)),_0x1cca52[_0x3e3040(0x141)](_0x1fa4fb=>{var _0x23c2f2=_0x3e3040;_0x14d1e2+='<option\x20value=\x22'+_0x1fa4fb['key']+_0x23c2f2(0x11e)+_0x1fa4fb['key']+'</option>';}),dropBatch[_0x3e3040(0x109)]=_0x14d1e2,dropBatch[_0x3e3040(0xf9)]=dropBatch['lastElementChild']['value'],showTrainingVideo();});}}dropCourse[_0x42562c(0x13d)](_0x42562c(0x138),loadBatch);function showTrainingVideo(){var _0x101f97=_0x42562c;if(dropCourse[_0x101f97(0xf9)]!=_0x101f97(0x133)&&dropBatch['value']!='Batch\x20No.'){const _0x42bf58=ref(db,_0x101f97(0x105)+dropCourse['value']+_0x101f97(0x13a)+dropBatch[_0x101f97(0xf9)]+_0x101f97(0x11d));onValue(_0x42bf58,_0x3e7cf8=>{var _0x168daa=_0x101f97,_0x350014='';divTrainingVideo[_0x168daa(0x109)]='';if(_0x3e7cf8[_0x168daa(0x159)]()){_0x3e7cf8[_0x168daa(0x141)](_0xbee815=>{var _0x26910e=_0x168daa,_0x360ba4=_0xbee815[_0x26910e(0xf5)]()[_0x26910e(0x135)]['toString'](),_0x5c1152=_0x360ba4[_0x26910e(0x156)],_0x8241f6=null,_0x12d96f=null,_0x914be1=_0x360ba4;_0x5c1152>0x3&&(_0x8241f6=_0x360ba4[_0x26910e(0xfb)](_0x5c1152-0x3,_0x5c1152),_0x12d96f=_0x360ba4[_0x26910e(0xfb)](0x0,_0x5c1152-0x3),_0x914be1=_0x12d96f+','+_0x8241f6),_0x350014+=_0x26910e(0x14f)+_0xbee815[_0x26910e(0xf5)]()[_0x26910e(0x142)]+_0x26910e(0x162)+_0xbee815[_0x26910e(0xfa)]+_0x26910e(0x126)+_0x914be1+_0x26910e(0x11b);}),divTrainingVideo[_0x168daa(0x109)]=_0x350014;for(var _0x695f7f=0x0;_0x695f7f<divTrainingVideo[_0x168daa(0x15b)];_0x695f7f++){btnPlayTrainingVideo[_0x695f7f]['addEventListener'](_0x168daa(0x107),playTrainingVideo),btnDelTrainingVideo[_0x695f7f][_0x168daa(0x13d)](_0x168daa(0x107),delTrainingVideo);}}});}}function addTrainingVideo(){var _0x3c6799=_0x42562c,_0x49340b=new Date(),_0x167eac='\x20'+(_0x49340b['getMonth']()+0x1)+'-'+_0x49340b['getDate']()+'-'+_0x49340b[_0x3c6799(0x165)]();if(dropCourse[_0x3c6799(0xf9)]!=_0x3c6799(0x133)&&dropBatch[_0x3c6799(0xf9)]!=_0x3c6799(0x116)&&txtTrainingVideo['value']!=''&&txtTrainingVideoLink[_0x3c6799(0xf9)]!=''){var _0x593813=txtTrainingVideo[_0x3c6799(0xf9)]+_0x167eac;set(ref(db,'courses/'+dropCourse[_0x3c6799(0xf9)]+_0x3c6799(0x13a)+dropBatch[_0x3c6799(0xf9)]+_0x3c6799(0x11d)+_0x593813),{'link':txtTrainingVideoLink['value'],'views':0x0})[_0x3c6799(0x11c)](()=>{var _0x2a871d=_0x3c6799;txtTrainingVideo[_0x2a871d(0xf9)]='',txtTrainingVideoLink[_0x2a871d(0xf9)]='';})[_0x3c6799(0x15c)](_0x1adfb4=>{var _0x47c7fd=_0x3c6799;alert(_0x1adfb4[_0x47c7fd(0xef)]);});}else alert(_0x3c6799(0x13e));}btnAddTrainingVideo[_0x42562c(0x13d)](_0x42562c(0x107),addTrainingVideo);function delTrainingVideo(){var _0x4a3af8=_0x42562c,_0x3fe066=this['parentElement']['parentElement'][_0x4a3af8(0x14c)][0x0][_0x4a3af8(0x121)];remove(ref(db,_0x4a3af8(0x105)+dropCourse['value']+_0x4a3af8(0x13a)+dropBatch[_0x4a3af8(0xf9)]+_0x4a3af8(0x11d)+_0x3fe066))[_0x4a3af8(0x11c)](()=>{showTrainingVideo();})[_0x4a3af8(0x15c)](_0x112d13=>{var _0x232efa=_0x4a3af8;alert(_0x112d13[_0x232efa(0xef)]);});}function playTrainingVideo(){var _0x239fa1=_0x42562c,_0x4c7961=this['parentElement'][_0x239fa1(0x132)][_0x239fa1(0x14c)][0x0][_0x239fa1(0x121)];black[_0x239fa1(0x157)]['opacity']=0x1,black[_0x239fa1(0x157)][_0x239fa1(0x101)]=_0x239fa1(0x158),black[_0x239fa1(0x157)][_0x239fa1(0x103)]=_0x239fa1(0x13f),black[_0x239fa1(0x157)][_0x239fa1(0x12a)]='opacity\x20.5s';const _0x58e54c=ref(db,_0x239fa1(0x105)+dropCourse[_0x239fa1(0xf9)]+'/batch/'+dropBatch['value']+_0x239fa1(0x11d)+_0x4c7961);get(_0x58e54c)[_0x239fa1(0x11c)](_0x24609b=>{var _0x1a9028=_0x239fa1;black[_0x1a9028(0x109)]='\x0a\x20\x20\x20\x20\x20\x20\x20\x20<iframe\x20src=\x22'+_0x24609b['val']()['link']+'\x22\x20allowfullscreen\x20allowtransparency\x20allow=\x22autoplay\x22\x20scrolling=\x22no\x22\x20frameborder=\x220\x22></iframe>\x0a\x20\x20\x20\x20\x20\x20\x20\x20';var _0x50d4b=_0x24609b[_0x1a9028(0xf5)]()[_0x1a9028(0x135)];update(ref(db,_0x1a9028(0x105)+dropCourse[_0x1a9028(0xf9)]+_0x1a9028(0x13a)+dropBatch[_0x1a9028(0xf9)]+_0x1a9028(0x11d)+_0x4c7961),{'views':_0x50d4b+0x1});});}function insertApps(){var _0x45350c=_0x42562c,_0x99486b=[],_0x2df7b2=null;const _0x1d3521=ref(db,_0x45350c(0x105)+dropCourse[_0x45350c(0xf9)]+'/resources/public/');get(_0x1d3521)[_0x45350c(0x11c)](_0x4abef2=>{var _0xa8ea78=_0x45350c;_0x2df7b2=_0x4abef2[_0xa8ea78(0xf0)],_0x4abef2[_0xa8ea78(0x141)](_0x338dc7=>{var _0x323235=_0xa8ea78;_0x338dc7[_0x323235(0xfa)]>=txtAppID[_0x323235(0xf9)]&&(_0x99486b[_0x338dc7[_0x323235(0xfa)]]=_0x338dc7[_0x323235(0xf5)]());});for(var _0x2db862=_0x2df7b2;_0x2db862>=0x1;_0x2db862--){if(_0x2db862>txtAppID[_0xa8ea78(0xf9)]){var _0x3e0625=_0x2db862+0x1;update(ref(db,_0xa8ea78(0x105)+dropCourse[_0xa8ea78(0xf9)]+_0xa8ea78(0x108)+_0x3e0625),_0x99486b[_0x2db862]);}else{if(_0x2db862==txtAppID[_0xa8ea78(0xf9)]){var _0x3e0625=_0x2db862+0x1;update(ref(db,'courses/'+dropCourse['value']+_0xa8ea78(0x108)+_0x3e0625),_0x99486b[_0x2db862]);var _0x27b897='https://artcademy.ph/img-h6rv2c/'+txtAppIconLink['value']+_0xa8ea78(0x137);update(ref(db,_0xa8ea78(0x105)+dropCourse[_0xa8ea78(0xf9)]+_0xa8ea78(0x108)+_0x2db862),{'appName':txtAppName['value'],'appIcon':_0x27b897,'files':''})[_0xa8ea78(0x11c)](()=>{var _0x4558db=_0xa8ea78;txtAppIconLink[_0x4558db(0xf9)]='',txtAppName[_0x4558db(0xf9)]='',txtAppID[_0x4558db(0xf9)]='';})[_0xa8ea78(0x15c)](_0xd0d42b=>{alert(_0xd0d42b['code']);});}}}});}function addAppName(){var _0x3f895e=_0x42562c;if(dropCourse['value']!=_0x3f895e(0x133)&&txtAppIconLink['value']!=''&&txtAppName[_0x3f895e(0xf9)]!=''){if(txtAppID['value']==''){const _0x1db3a5=ref(db,_0x3f895e(0x105)+dropCourse['value']+_0x3f895e(0x108));get(_0x1db3a5)[_0x3f895e(0x11c)](_0x5d17f1=>{var _0x1cc35f=_0x3f895e,_0x21e115=_0x5d17f1[_0x1cc35f(0xf0)]+0x1,_0x55b6fb=_0x1cc35f(0x163)+txtAppIconLink[_0x1cc35f(0xf9)]+_0x1cc35f(0x137);update(ref(db,'courses/'+dropCourse['value']+_0x1cc35f(0x108)+_0x21e115+'/'),{'appName':txtAppName['value'],'appIcon':_0x55b6fb,'files':''})[_0x1cc35f(0x11c)](()=>{var _0x17abb9=_0x1cc35f;txtAppIconLink[_0x17abb9(0xf9)]='',txtAppName['value']='';})['catch'](_0x1592bb=>{alert(_0x1592bb['code']);});});}else insertApps();}else alert(_0x3f895e(0x13e));}btnAddApp[_0x42562c(0x13d)]('click',addAppName);function showApps(){var _0x4ff28e=_0x42562c;const _0x11a575=ref(db,'courses/'+dropCourse['value']+_0x4ff28e(0x108));onValue(_0x11a575,_0x4f8593=>{var _0x547354=_0x4ff28e,_0x319289='';divAppName[_0x547354(0x109)]='',_0x4f8593[_0x547354(0x141)](_0x2eb583=>{var _0x2ebce8=_0x547354;_0x319289+=_0x2ebce8(0x140)+_0x2eb583['key']+_0x2ebce8(0x14b)+_0x2eb583[_0x2ebce8(0xf5)]()[_0x2ebce8(0x10c)]+_0x2ebce8(0x14d)+_0x2eb583['val']()[_0x2ebce8(0x129)]+_0x2ebce8(0x14e);}),divAppName['innerHTML']=_0x319289;for(var _0x146dc5=0x0;_0x146dc5<divAppName[_0x547354(0x15b)];_0x146dc5++){btnEditApp[_0x146dc5]['addEventListener'](_0x547354(0x107),editApp),btnDelApp[_0x146dc5][_0x547354(0x13d)](_0x547354(0x107),delApp);}});}showApps();function delApp(){var _0x26d288=_0x42562c,_0x3258a2=null,_0x5df2ec=[],_0x159414=Number(this['parentElement'][_0x26d288(0x132)][_0x26d288(0x14c)][0x0]['innerText']);if(confirm(_0x26d288(0x154))){const _0x81e2b3=ref(db,_0x26d288(0x105)+dropCourse[_0x26d288(0xf9)]+_0x26d288(0x108));get(_0x81e2b3)[_0x26d288(0x11c)](_0x3bcdd0=>{var _0x282e06=_0x26d288;_0x3258a2=_0x3bcdd0[_0x282e06(0xf0)],_0x3bcdd0[_0x282e06(0x141)](_0x315012=>{var _0x2a1423=_0x282e06;_0x315012[_0x2a1423(0xfa)]>_0x159414&&(_0x5df2ec[_0x315012[_0x2a1423(0xfa)]]=_0x315012[_0x2a1423(0xf5)]());});for(var _0x115727=0x1;_0x115727<=_0x3258a2;_0x115727++){if(_0x115727>_0x159414){var _0x1b833a=_0x115727-0x1;update(ref(db,_0x282e06(0x105)+dropCourse[_0x282e06(0xf9)]+_0x282e06(0x108)+_0x1b833a),_0x5df2ec[_0x115727]),remove(ref(db,_0x282e06(0x105)+dropCourse[_0x282e06(0xf9)]+'/resources/public/'+_0x3258a2));}else _0x115727==_0x159414&&remove(ref(db,_0x282e06(0x105)+dropCourse['value']+'/resources/public/'+_0x115727));}});}}function editApp(){var _0x2d7d04=_0x42562c;txtAppID[_0x2d7d04(0xf9)]=this['parentElement'][_0x2d7d04(0x132)][_0x2d7d04(0x14c)][0x0][_0x2d7d04(0x121)],txtAppName[_0x2d7d04(0xf9)]=this['parentElement']['parentElement'][_0x2d7d04(0x14c)][0x1][_0x2d7d04(0x121)],txtAppIconLink[_0x2d7d04(0xf9)]=this[_0x2d7d04(0x132)][_0x2d7d04(0x132)]['children'][0x2][_0x2d7d04(0x121)];}function tickNew(){var _0x2190cf=_0x42562c;chkNew[_0x2190cf(0x143)][_0x2190cf(0x15d)]===_0x2190cf(0x10b)?(chkNew[_0x2190cf(0x143)]['checked']=![],chkNew[_0x2190cf(0x157)][_0x2190cf(0x149)]=_0x2190cf(0x115)):(chkNew[_0x2190cf(0x143)]['checked']=!![],chkNew[_0x2190cf(0x157)][_0x2190cf(0x149)]='salmon');}chkNew[_0x42562c(0x13d)](_0x42562c(0x107),tickNew);function _0x3d04(){var _0x205f65=['txtTrainingVideoLink','childElementCount','catch','checked','resources','translateX(','btnAddTrainingVideo','getItem','\x27,\x20\x27_blank\x27);\x22><h1>','https://artcademy.ph/img-h6rv2c/','https://drive.google.com/uc?export=download&id=','getFullYear','code','size','frm','status','txtVideoID','btnConfirm','val','bodyBlue','projartcademyph-29663.appspot.com','clear','value','key','substr','innerWidth','message','9396XcnTub','txtVideoLink','btnEditApp','background','161251YbpuLZ','visibility','4543448cvVBAw','courses/','txtVideoTitle','click','/resources/public/','innerHTML','12GuCzEV','true','appName','getElementById','\x20<option\x20value=\x22Select\x20App\x22\x20class=\x22dropOption\x22>Select\x20App</option>','oAuth','txtTrainingVideo','Select\x20App','divBanner','btnDelTrainingVideo','https://drive.google.com/file/d/','transparent','Batch\x20No.','getElementsByClassName','dropCourse','/files/','2881035JYcdwU','\x20views</h1></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22display:\x20flex;\x20height:\x2040px;\x20margin-top:\x20auto;\x20margin-bottom:\x20auto;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22img-h6rv2c/btnPlay.png\x22\x20class=\x22btnPlayTrainingVideo\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22img-h6rv2c/btnDelete.png\x22\x20class=\x22btnDelTrainingVideo\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20','then','/trainingVideos/','\x22\x20class=\x22dropOption\x22>','XribZIy3mORl28B3A7S3qOdv2Bs1','hidden','innerText','1452010QobMor','https://projartcademyph-29663-default-rtdb.asia-southeast1.firebasedatabase.app','bannerContainer','dropApp','</h1></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22trainingVideoViews\x22><h1>','<option\x20value=\x22Batch\x20No.\x22\x20class=\x22dropOption\x22>Batch\x20No.</option>','out','appIcon','transition','px)','496767jmxAoh','</option>','651674935886','replace','sessID','dropBatch','parentElement','Select\x20Course','pBanner','views','divTrainingVideo','.svg','change','/view?usp=sharing','/batch/','btnAddApp','projartcademyph-29663.firebaseapp.com','addEventListener','Please\x20complete\x20all\x20fields','visible','<div\x20class=\x22trainingAppEntry\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22trainingAppID\x22><h1>','forEach','link','dataset','location','1:651674935886:web:629aefbab24dd2a154991f','black','https://creator.artcademy.ph','98274yPuRZj','backgroundColor','transform','</h1></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22trainingAppTitle\x22><h1>','children','</h1></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22trainingAppIcon\x22><h1>','</h1></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22display:\x20flex;\x20height:\x2040px;\x20margin-top:\x20auto;\x20margin-bottom:\x20auto;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22img-h6rv2c/btnEdit.png\x22\x20class=\x22btnEditApp\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22img-h6rv2c/btnDelete.png\x22\x20class=\x22btnDelApp\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20','<div\x20class=\x22trainingVideoEntry\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22trainingVideoTitle\x22\x20onclick=\x22window.open(\x27','btnPlayTrainingVideo','155SaVkWz','txtFileLink','txtAppName','Permanently\x20delete\x20this\x20record?','txtAppID','length','style','rgba(0,0,0,0.3)','exists'];_0x3d04=function(){return _0x205f65;};return _0x3d04();}function loadApps(){var _0x57d825=_0x42562c;const _0x48dc86=ref(db,_0x57d825(0x105)+dropCourse[_0x57d825(0xf9)]+'/resources/public/');onValue(_0x48dc86,_0x58c344=>{var _0x1ddf89=_0x57d825,_0x36f2df=_0x1ddf89(0x10e);_0x58c344[_0x1ddf89(0x141)](_0x307028=>{var _0x1bce3a=_0x1ddf89;_0x36f2df+='<option\x20value=\x22'+_0x307028['val']()[_0x1bce3a(0x10c)]+'\x22\x20class=\x22dropOption\x22>'+_0x307028[_0x1bce3a(0xf5)]()[_0x1bce3a(0x10c)]+_0x1bce3a(0x12d);}),dropApp[_0x1ddf89(0x109)]=_0x36f2df;});}function insertRes(){var _0x114bdf=_0x42562c,_0x531166=[],_0x52d826=null;const _0x55abcc=ref(db,_0x114bdf(0x105)+dropCourse['value']+_0x114bdf(0x108));get(_0x55abcc)[_0x114bdf(0x11c)](_0x2cea4c=>{var _0x10ddf6=_0x114bdf;_0x2cea4c[_0x10ddf6(0x141)](_0x34ba6d=>{var _0x43437b=_0x10ddf6;if(dropApp[_0x43437b(0xf9)]==_0x34ba6d[_0x43437b(0xf5)]()[_0x43437b(0x10c)]){var _0x2be385=_0x34ba6d[_0x43437b(0xfa)];const _0x4d2943=ref(db,_0x43437b(0x105)+dropCourse['value']+_0x43437b(0x108)+_0x2be385+_0x43437b(0x119));get(_0x4d2943)[_0x43437b(0x11c)](_0x12b88b=>{var _0xa996a4=_0x43437b;_0x52d826=_0x12b88b[_0xa996a4(0xf0)],_0x12b88b['forEach'](_0x37aa19=>{var _0x1e7fe9=_0xa996a4;_0x37aa19['key']>=txtVideoID[_0x1e7fe9(0xf9)]&&(_0x531166[_0x37aa19[_0x1e7fe9(0xfa)]]=_0x37aa19[_0x1e7fe9(0xf5)]());});for(var _0x17df42=_0x52d826;_0x17df42>=0x1;_0x17df42--){if(_0x17df42>txtVideoID[_0xa996a4(0xf9)]){var _0x50888e=_0x17df42+0x1;update(ref(db,'courses/'+dropCourse[_0xa996a4(0xf9)]+_0xa996a4(0x108)+_0x2be385+_0xa996a4(0x119)+_0x50888e),_0x531166[_0x17df42]);}else{if(_0x17df42==txtVideoID[_0xa996a4(0xf9)]){var _0x50888e=_0x17df42+0x1;update(ref(db,_0xa996a4(0x105)+dropCourse['value']+_0xa996a4(0x108)+_0x2be385+'/files/'+_0x50888e),_0x531166[_0x17df42]),update(ref(db,'courses/'+dropCourse[_0xa996a4(0xf9)]+_0xa996a4(0x108)+_0x2be385+_0xa996a4(0x119)+_0x17df42),{'videoTitle':txtVideoTitle[_0xa996a4(0xf9)],'videoLink':txtVideoLink[_0xa996a4(0xf9)],'videoViews':0x0,'fileLink':txtFileLink['value'],'downloads':0x0,'notify':chkNew[_0xa996a4(0x143)][_0xa996a4(0x15d)]})['then'](()=>{var _0x266e9d=_0xa996a4;txtVideoID['value']='',txtVideoTitle['value']='',txtVideoLink[_0x266e9d(0xf9)]='',txtFileLink['value']='',chkNew[_0x266e9d(0x143)]['checked']=![],chkNew[_0x266e9d(0x157)][_0x266e9d(0x149)]=_0x266e9d(0x115);});}}}});}});});}function addResources(){var _0x26b2e8=_0x42562c;if(txtVideoTitle[_0x26b2e8(0xf9)]!=''&&txtVideoLink[_0x26b2e8(0xf9)]!=''&&txtFileLink[_0x26b2e8(0xf9)]!=''&&dropApp[_0x26b2e8(0xf9)]!=_0x26b2e8(0x111)){if(txtVideoID[_0x26b2e8(0xf9)]==''){const _0x36c0e2=ref(db,_0x26b2e8(0x105)+dropCourse[_0x26b2e8(0xf9)]+_0x26b2e8(0x108));get(_0x36c0e2)[_0x26b2e8(0x11c)](_0xd76fde=>{var _0xabd586=_0x26b2e8;_0xd76fde[_0xabd586(0x141)](_0x275431=>{var _0x27d6b0=_0xabd586;if(_0x275431[_0x27d6b0(0xf5)]()[_0x27d6b0(0x10c)]==dropApp[_0x27d6b0(0xf9)]){var _0x38442b=_0x275431[_0x27d6b0(0xfa)];const _0x29df8f=ref(db,_0x27d6b0(0x105)+dropCourse['value']+_0x27d6b0(0x108)+_0x38442b+_0x27d6b0(0x119));get(_0x29df8f)[_0x27d6b0(0x11c)](_0x3c6b39=>{var _0x58a469=_0x27d6b0,_0xbb3fd5=_0x3c6b39['size']+0x1,_0x14e1d6=txtFileLink['value'][_0x58a469(0x12f)](_0x58a469(0x114),''),_0x303a15=_0x14e1d6[_0x58a469(0x12f)](_0x58a469(0x139),''),_0x143980=_0x58a469(0x164)+_0x303a15;update(ref(db,_0x58a469(0x105)+dropCourse[_0x58a469(0xf9)]+_0x58a469(0x108)+_0x38442b+_0x58a469(0x119)+_0xbb3fd5),{'videoTitle':txtVideoTitle[_0x58a469(0xf9)],'videoLink':txtVideoLink[_0x58a469(0xf9)],'videoViews':0x0,'fileLink':_0x143980,'downloads':0x0,'notify':chkNew['dataset'][_0x58a469(0x15d)]})[_0x58a469(0x11c)](()=>{var _0x2c93fc=_0x58a469;txtVideoID[_0x2c93fc(0xf9)]='',txtVideoTitle[_0x2c93fc(0xf9)]='',txtVideoLink[_0x2c93fc(0xf9)]='',txtFileLink[_0x2c93fc(0xf9)]='',chkNew[_0x2c93fc(0x143)][_0x2c93fc(0x15d)]=![],chkNew[_0x2c93fc(0x157)][_0x2c93fc(0x149)]=_0x2c93fc(0x115);});});}});});}else insertRes();}else alert('Please\x20complete\x20all\x20fields');}btnConfirm[_0x42562c(0x13d)](_0x42562c(0x107),addResources);function checkIfOnline(){var _0x3b11b9=_0x42562c,_0xfd6149=sessionStorage[_0x3b11b9(0x161)](_0x3b11b9(0x10f));_0xfd6149==_0x3b11b9(0x128)&&signOut(auth)[_0x3b11b9(0x11c)](()=>{var _0x31c9c0=_0x3b11b9;sessionStorage[_0x31c9c0(0xf8)]();})['catch'](_0x2a0b94=>{var _0x5d7096=_0x3b11b9;alert(_0x2a0b94[_0x5d7096(0xef)]);});}setInterval(checkIfOnline,0x1f4);