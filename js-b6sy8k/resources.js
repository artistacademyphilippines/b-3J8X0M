var _0x4b5db1=_0x30fe;(function(_0x7fd64d,_0x456a45){var _0x236b72=_0x30fe,_0x527827=_0x7fd64d();while(!![]){try{var _0x2011b2=-parseInt(_0x236b72(0x1c0))/0x1+parseInt(_0x236b72(0x1d2))/0x2+-parseInt(_0x236b72(0x1cb))/0x3+parseInt(_0x236b72(0x20a))/0x4*(-parseInt(_0x236b72(0x20b))/0x5)+-parseInt(_0x236b72(0x1ec))/0x6+parseInt(_0x236b72(0x1f0))/0x7*(parseInt(_0x236b72(0x1c1))/0x8)+parseInt(_0x236b72(0x1bc))/0x9;if(_0x2011b2===_0x456a45)break;else _0x527827['push'](_0x527827['shift']());}catch(_0x23f473){_0x527827['push'](_0x527827['shift']());}}}(_0x4f8c,0x1cec4));import{initializeApp}from'https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js';import{getAuth,signOut,onAuthStateChanged}from'https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js';import{getDatabase,ref,onValue,update,get,set,remove}from'https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js';const firebaseConfig={'apiKey':_0x4b5db1(0x1e2),'authDomain':'projartcademyph-29663.firebaseapp.com','databaseURL':_0x4b5db1(0x1b2),'projectId':_0x4b5db1(0x209),'storageBucket':'projartcademyph-29663.appspot.com','messagingSenderId':_0x4b5db1(0x1d3),'appId':_0x4b5db1(0x1ce)},app=initializeApp(firebaseConfig),auth=getAuth(app),db=getDatabase();var bodyBlue=document[_0x4b5db1(0x1e8)](_0x4b5db1(0x1f4));onAuthStateChanged(auth,_0x2d5832=>{var _0x1aeb7e=_0x4b5db1;if(_0x2d5832){var _0x10594b=sessionStorage[_0x1aeb7e(0x1ff)](_0x1aeb7e(0x1da));_0x10594b=='XribZIy3mORl28B3A7S3qOdv2Bs1'?bodyBlue['style'][_0x1aeb7e(0x1c3)]=_0x1aeb7e(0x1dd):window[_0x1aeb7e(0x1ab)][_0x1aeb7e(0x211)](_0x1aeb7e(0x1f8));}else window[_0x1aeb7e(0x1ab)][_0x1aeb7e(0x211)](_0x1aeb7e(0x20f));});var t=0.002*window[_0x4b5db1(0x1b4)],c=window['innerWidth'],scrollingBannerText=document[_0x4b5db1(0x1e8)](_0x4b5db1(0x1d8));const scrollingBanner=document['getElementById'](_0x4b5db1(0x1b7));var bannerContainer=document[_0x4b5db1(0x1e8)](_0x4b5db1(0x1fa));bannerContainer[_0x4b5db1(0x1d1)][_0x4b5db1(0x1d5)]=_0x4b5db1(0x20e)+window[_0x4b5db1(0x1b4)]+_0x4b5db1(0x1ed);function _0x30fe(_0x4bf0a8,_0x593972){var _0x4f8c15=_0x4f8c();return _0x30fe=function(_0x30feff,_0x35cb14){_0x30feff=_0x30feff-0x1aa;var _0x418da2=_0x4f8c15[_0x30feff];return _0x418da2;},_0x30fe(_0x4bf0a8,_0x593972);}function checkBanner(){const _0x109cba=ref(db,'settings/banner');onValue(_0x109cba,_0x4c6cd4=>{var _0x447aea=_0x30fe;_0x4c6cd4[_0x447aea(0x1ba)]()&&(scrollingBannerText[_0x447aea(0x1ea)]=_0x4c6cd4[_0x447aea(0x1c8)]()['message'],_0x4c6cd4['val']()[_0x447aea(0x215)]===!![]?scrollingBanner[_0x447aea(0x1d1)][_0x447aea(0x1c3)]='visible':scrollingBanner[_0x447aea(0x1d1)][_0x447aea(0x1c3)]=_0x447aea(0x1cf));});}checkBanner();function bannerAnimation(){var _0x152e7d=_0x4b5db1;c-=0.5,bannerContainer[_0x152e7d(0x1d1)][_0x152e7d(0x1d5)]=_0x152e7d(0x20e)+c+_0x152e7d(0x1ed),c<bannerContainer[_0x152e7d(0x1e0)]*-0x1&&(c=window[_0x152e7d(0x1b4)],bannerContainer[_0x152e7d(0x1d1)]['transform']=_0x152e7d(0x20e)+window['innerWidth']+_0x152e7d(0x1ed));}setInterval(bannerAnimation,t);const black=document[_0x4b5db1(0x1e8)](_0x4b5db1(0x1db));var dropCourse=document[_0x4b5db1(0x1e8)]('dropCourse'),dropBatch=document['getElementById'](_0x4b5db1(0x1cd)),txtTrainingVideo=document[_0x4b5db1(0x1e8)](_0x4b5db1(0x1bf)),txtTrainingVideoLink=document[_0x4b5db1(0x1e8)](_0x4b5db1(0x1e5)),divTrainingVideo=document['getElementById'](_0x4b5db1(0x1d7)),txtOtherVideosTitle=document[_0x4b5db1(0x1e8)](_0x4b5db1(0x20d)),txtOtherVideosLink=document['getElementById']('txtOtherVideosLink'),divOtherVideos=document[_0x4b5db1(0x1e8)](_0x4b5db1(0x1d4)),txtBasicFilesTitle=document['getElementById'](_0x4b5db1(0x216)),txtBasicFilesLink=document[_0x4b5db1(0x1e8)](_0x4b5db1(0x1f5)),divBasicFiles=document[_0x4b5db1(0x1e8)](_0x4b5db1(0x1b3));const btnAddTrainingVideo=document[_0x4b5db1(0x1e8)](_0x4b5db1(0x205)),btnDelTrainingVideo=document[_0x4b5db1(0x1ac)](_0x4b5db1(0x1e4)),btnPlayTrainingVideo=document['getElementsByClassName'](_0x4b5db1(0x203)),btnAddOtherVideos=document[_0x4b5db1(0x1e8)](_0x4b5db1(0x1af)),btnPlayOtherVideos=document['getElementsByClassName']('btnPlayOtherVideos'),btnDelOtherVideos=document[_0x4b5db1(0x1ac)]('btnDelOtherVideos'),btnAddBasicFiles=document[_0x4b5db1(0x1e8)](_0x4b5db1(0x1b5)),btnDelBasicFiles=document[_0x4b5db1(0x1ac)](_0x4b5db1(0x1f3)),btnDownloadBasicFiles=document['getElementsByClassName'](_0x4b5db1(0x1aa));function loadCourse(){var _0xbe60db=_0x4b5db1;const _0x423181=ref(db,_0xbe60db(0x1e3));get(_0x423181)[_0xbe60db(0x1b0)](_0x37fcb9=>{var _0x51754a=_0xbe60db,_0x186399=_0x51754a(0x1f9);dropCourse=document[_0x51754a(0x1e8)](_0x51754a(0x202)),_0x37fcb9[_0x51754a(0x1ba)]()&&(_0x37fcb9[_0x51754a(0x214)](_0xb436cb=>{var _0x1491bf=_0x51754a;_0x186399+=_0x1491bf(0x208)+_0xb436cb['key']+_0x1491bf(0x20c)+_0xb436cb[_0x1491bf(0x1ad)]+'</option>';}),dropCourse[_0x51754a(0x1c5)]=_0x186399);});}loadCourse(),dropCourse[_0x4b5db1(0x1e1)](_0x4b5db1(0x206),showOtherVideos),dropCourse[_0x4b5db1(0x1e1)](_0x4b5db1(0x206),showBasicFiles);function loadBatch(){var _0x157862=_0x4b5db1;if(dropCourse[_0x157862(0x1e9)]!=_0x157862(0x213)){const _0x41e43d=ref(db,_0x157862(0x1e3)+dropCourse[_0x157862(0x1e9)]+_0x157862(0x1b1));get(_0x41e43d)[_0x157862(0x1b0)](_0x368bd3=>{var _0x144826=_0x157862,_0x45cea9=_0x144826(0x1f7);dropBatch=document[_0x144826(0x1e8)](_0x144826(0x1cd)),_0x368bd3[_0x144826(0x214)](_0x540032=>{var _0x58e1bb=_0x144826;_0x45cea9+='<option\x20value=\x22'+_0x540032[_0x58e1bb(0x1ad)]+'\x22\x20class=\x22dropOption\x22>'+_0x540032[_0x58e1bb(0x1ad)]+_0x58e1bb(0x1df);}),dropBatch[_0x144826(0x1c5)]=_0x45cea9,dropBatch['value']=dropBatch['lastElementChild'][_0x144826(0x1e9)],showTrainingVideo();});}else txtCerti[_0x157862(0x1e9)]='';}dropCourse[_0x4b5db1(0x1e1)](_0x4b5db1(0x206),loadBatch);function showTrainingVideo(){var _0x5e9f72=_0x4b5db1;if(dropCourse['value']!=_0x5e9f72(0x213)&&dropBatch[_0x5e9f72(0x1e9)]!=_0x5e9f72(0x1f2)){const _0x85c183=ref(db,_0x5e9f72(0x1e3)+dropCourse[_0x5e9f72(0x1e9)]+'/batch/'+dropBatch['value']+'/trainingVideos/');onValue(_0x85c183,_0x668421=>{var _0x39d92b=_0x5e9f72,_0x50f99c='';divTrainingVideo[_0x39d92b(0x1c5)]='';if(_0x668421[_0x39d92b(0x1ba)]()){_0x668421['forEach'](_0x2b7e97=>{var _0x5be547=_0x39d92b,_0x1972d9=_0x2b7e97[_0x5be547(0x1c8)]()[_0x5be547(0x1e6)][_0x5be547(0x1f6)](),_0x155d41=_0x1972d9[_0x5be547(0x200)],_0x3914eb=null,_0x195581=null,_0x149c30=_0x1972d9;_0x155d41>0x3&&(_0x3914eb=_0x1972d9[_0x5be547(0x1eb)](_0x155d41-0x3,_0x155d41),_0x195581=_0x1972d9[_0x5be547(0x1eb)](0x0,_0x155d41-0x3),_0x149c30=_0x195581+','+_0x3914eb),_0x50f99c+=_0x5be547(0x1ae)+_0x2b7e97[_0x5be547(0x1c8)]()[_0x5be547(0x1b8)]+_0x5be547(0x1cc)+_0x2b7e97[_0x5be547(0x1ad)]+_0x5be547(0x1dc)+_0x149c30+'\x20views</h1></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22display:\x20flex;\x20height:\x2040px;\x20margin-top:\x20auto;\x20margin-bottom:\x20auto;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22img-h6rv2c/btnPlay.png\x22\x20class=\x22btnPlayTrainingVideo\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22img-h6rv2c/btnDelete.png\x22\x20class=\x22btnDelTrainingVideo\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22clickLines\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20';}),divTrainingVideo[_0x39d92b(0x1c5)]=_0x50f99c;for(var _0x4fa104=0x0;_0x4fa104<divTrainingVideo[_0x39d92b(0x1d6)];_0x4fa104++){btnPlayTrainingVideo[_0x4fa104][_0x39d92b(0x1e1)](_0x39d92b(0x207),playTrainingVideo),btnDelTrainingVideo[_0x4fa104]['addEventListener']('click',delTrainingVideo);}}});}}function addTrainingVideo(){var _0x449b62=_0x4b5db1,_0x5c0c0d=new Date(),_0x4ba3d0='_'+(_0x5c0c0d['getMonth']()+0x1)+'-'+_0x5c0c0d[_0x449b62(0x1c7)]()+'-'+_0x5c0c0d[_0x449b62(0x1bd)]();if(dropCourse[_0x449b62(0x1e9)]!=_0x449b62(0x213)&&dropBatch[_0x449b62(0x1e9)]!=_0x449b62(0x1f2)&&txtTrainingVideo[_0x449b62(0x1e9)]!=''&&txtTrainingVideoLink[_0x449b62(0x1e9)]!=''){var _0x47d748=txtTrainingVideo[_0x449b62(0x1e9)]+_0x4ba3d0;set(ref(db,_0x449b62(0x1e3)+dropCourse[_0x449b62(0x1e9)]+_0x449b62(0x1b1)+dropBatch[_0x449b62(0x1e9)]+_0x449b62(0x1ca)+_0x47d748),{'link':txtTrainingVideoLink[_0x449b62(0x1e9)],'views':0x0})[_0x449b62(0x1b0)](()=>{var _0x17ee9e=_0x449b62;txtTrainingVideo[_0x17ee9e(0x1e9)]='',txtTrainingVideoLink[_0x17ee9e(0x1e9)]='';})[_0x449b62(0x1ee)](_0x5953c=>{var _0x184580=_0x449b62;alert(_0x5953c[_0x184580(0x1b6)]);});}else alert('Please\x20select\x20a\x20course\x20or\x20a\x20batch');}btnAddTrainingVideo[_0x4b5db1(0x1e1)](_0x4b5db1(0x207),addTrainingVideo);function _0x4f8c(){var _0xc98ec2=['https://artcademy.ph/404','<option\x20value=\x22Select\x20Course\x22\x20class=\x22dropOption\x22>Select\x20Course</option>','bannerContainer','/resources/public/videos/','<div\x20class=\x22otherVideosEntry\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22otherVideosTitle\x22\x20onclick=\x22window.open(\x27','downloads','transition','getItem','length','parentElement','dropCourse','btnPlayTrainingVideo','background','btnAddTrainingVideo','change','click','<option\x20value=\x22','projartcademyph-29663','100sGXeZR','445xIsVIl','\x22\x20class=\x22dropOption\x22>','txtOtherVideosTitle','translateX(','https://creator.artcademy.ph','\x22\x20allowfullscreen\x20allowtransparency\x20allow=\x22autoplay\x22\x20scrolling=\x22no\x22\x20frameborder=\x220\x22></iframe>\x0a\x20\x20\x20\x20\x20\x20\x20\x20','replace','href','Select\x20Course','forEach','status','txtBasicFilesTitle','btnDownloadBasicFiles','location','getElementsByClassName','key','<div\x20class=\x22trainingVideoEntry\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22trainingVideoTitle\x22\x20onclick=\x22window.open(\x27','btnAddOtherVideos','then','/batch/','https://projartcademyph-29663-default-rtdb.asia-southeast1.firebasedatabase.app','divBasicFiles','innerWidth','btnAddBasicFiles','code','divBanner','link','</h1></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22basicFilesDownloads\x22><h1>','exists','out','1563156ajCEbR','getFullYear','Please\x20select\x20a\x20course\x20from\x20the\x20dropdown','txtTrainingVideo','215682SekBwG','159112LrkNTW','rgba(0,0,0,0.3)','visibility','<div\x20class=\x22basicFilesEntry\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22basicFilesTitle\x22\x20onclick=\x22window.open(\x27','innerHTML','opacity','getDate','val','children','/trainingVideos/','277479yxJMLe','\x27,\x20\x27_blank\x27);\x22><h1>','dropBatch','1:651674935886:web:629aefbab24dd2a154991f','hidden','https://drive.google.com/uc?export=download&id=','style','353396PGcIWY','651674935886','divOtherVideos','transform','childElementCount','divTrainingVideo','pBanner','/view?usp=sharing','sessID','black','</h1></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22trainingVideoViews\x22><h1>','visible','opacity\x20.5s','</option>','offsetWidth','addEventListener','AIzaSyADks-XldL82do7F8_A46cAWb6ZnDjQ3Yk','courses/','btnDelTrainingVideo','txtTrainingVideoLink','views','</h1></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22otherVideosViews\x22><h1>','getElementById','value','innerText','substr','841758rUxWbZ','px)','catch','/resources/public/files/','77KqtxzC','\x0a\x20\x20\x20\x20\x20\x20\x20\x20<iframe\x20src=\x22','Batch\x20No.','btnDelBasicFiles','bodyBlue','txtBasicFilesLink','toString','<option\x20value=\x22Batch\x20No.\x22\x20class=\x22dropOption\x22>Batch\x20No.</option>'];_0x4f8c=function(){return _0xc98ec2;};return _0x4f8c();}function delTrainingVideo(){var _0x269a82=_0x4b5db1,_0x5822ae=this[_0x269a82(0x201)]['parentElement'][_0x269a82(0x1c9)][0x0][_0x269a82(0x1ea)];remove(ref(db,'courses/'+dropCourse['value']+_0x269a82(0x1b1)+dropBatch[_0x269a82(0x1e9)]+_0x269a82(0x1ca)+_0x5822ae))[_0x269a82(0x1b0)](()=>{showTrainingVideo();})[_0x269a82(0x1ee)](_0xd87b20=>{alert(_0xd87b20['code']);});}function playTrainingVideo(){var _0x166ea6=_0x4b5db1,_0x5a4caa=this['parentElement'][_0x166ea6(0x201)][_0x166ea6(0x1c9)][0x0][_0x166ea6(0x1ea)];black[_0x166ea6(0x1d1)]['opacity']=0x1,black[_0x166ea6(0x1d1)][_0x166ea6(0x204)]='rgba(0,0,0,0.3)',black[_0x166ea6(0x1d1)]['visibility']=_0x166ea6(0x1dd),black[_0x166ea6(0x1d1)][_0x166ea6(0x1fe)]=_0x166ea6(0x1de);const _0x32d266=ref(db,'courses/'+dropCourse[_0x166ea6(0x1e9)]+'/batch/'+dropBatch['value']+_0x166ea6(0x1ca)+_0x5a4caa);get(_0x32d266)[_0x166ea6(0x1b0)](_0x1581ff=>{var _0x4e2aa0=_0x166ea6;black[_0x4e2aa0(0x1c5)]=_0x4e2aa0(0x1f1)+_0x1581ff[_0x4e2aa0(0x1c8)]()[_0x4e2aa0(0x1b8)]+_0x4e2aa0(0x210);var _0x5b4f6d=_0x1581ff[_0x4e2aa0(0x1c8)]()['views'];update(ref(db,_0x4e2aa0(0x1e3)+dropCourse[_0x4e2aa0(0x1e9)]+'/batch/'+dropBatch[_0x4e2aa0(0x1e9)]+_0x4e2aa0(0x1ca)+_0x5a4caa),{'views':_0x5b4f6d+0x1});});}function showOtherVideos(){var _0xfded62=_0x4b5db1;if(dropCourse['value']!=_0xfded62(0x213)){const _0x45582a=ref(db,'courses/'+dropCourse[_0xfded62(0x1e9)]+_0xfded62(0x1fb));onValue(_0x45582a,_0x38908d=>{var _0x36e399=_0xfded62,_0x2ce260='';divOtherVideos[_0x36e399(0x1c5)]='';if(_0x38908d[_0x36e399(0x1ba)]()){_0x38908d[_0x36e399(0x214)](_0x48a46b=>{var _0x340626=_0x36e399,_0x5c75dd=_0x48a46b[_0x340626(0x1c8)]()[_0x340626(0x1e6)][_0x340626(0x1f6)](),_0x5ee15c=_0x5c75dd[_0x340626(0x200)],_0x4d17e3=null,_0x1e0e1a=null,_0x5626a0=_0x5c75dd;_0x5ee15c>0x3&&(_0x4d17e3=_0x5c75dd[_0x340626(0x1eb)](_0x5ee15c-0x3,_0x5ee15c),_0x1e0e1a=_0x5c75dd[_0x340626(0x1eb)](0x0,_0x5ee15c-0x3),_0x5626a0=_0x1e0e1a+','+_0x4d17e3),_0x2ce260+=_0x340626(0x1fc)+_0x48a46b[_0x340626(0x1c8)]()[_0x340626(0x1b8)]+_0x340626(0x1cc)+_0x48a46b['key']+_0x340626(0x1e7)+_0x5626a0+'\x20views</h1></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22display:\x20flex;\x20height:\x2040px;\x20margin-top:\x20auto;\x20margin-bottom:\x20auto;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22img-h6rv2c/btnPlay.png\x22\x20class=\x22btnPlayOtherVideos\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22img-h6rv2c/btnDelete.png\x22\x20class=\x22btnDelOtherVideos\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22clickLines\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20';}),divOtherVideos['innerHTML']=_0x2ce260;for(var _0x8cb8ac=0x0;_0x8cb8ac<divOtherVideos[_0x36e399(0x1d6)];_0x8cb8ac++){btnPlayOtherVideos[_0x8cb8ac]['addEventListener'](_0x36e399(0x207),playOtherVideos),btnDelOtherVideos[_0x8cb8ac][_0x36e399(0x1e1)]('click',delOtherVideos);}}});}}function addOtherVideos(){var _0x3886b2=_0x4b5db1;dropCourse['value']!=_0x3886b2(0x213)&&txtOtherVideosTitle[_0x3886b2(0x1e9)]!=''&&txtOtherVideosLink[_0x3886b2(0x1e9)]!=''?set(ref(db,_0x3886b2(0x1e3)+dropCourse[_0x3886b2(0x1e9)]+_0x3886b2(0x1fb)+txtOtherVideosTitle[_0x3886b2(0x1e9)]),{'link':txtOtherVideosLink[_0x3886b2(0x1e9)],'views':0x0})[_0x3886b2(0x1b0)](()=>{var _0x5876f4=_0x3886b2;txtOtherVideosTitle[_0x5876f4(0x1e9)]='',txtOtherVideosLink['value']='';})['catch'](_0x3ac81f=>{var _0x11d650=_0x3886b2;alert(_0x3ac81f[_0x11d650(0x1b6)]);}):alert(_0x3886b2(0x1be));}btnAddOtherVideos[_0x4b5db1(0x1e1)]('click',addOtherVideos);function delOtherVideos(){var _0x34b896=_0x4b5db1,_0x205fa8=this[_0x34b896(0x201)][_0x34b896(0x201)][_0x34b896(0x1c9)][0x0]['innerText'];const _0x156c47=ref(db,_0x34b896(0x1e3)+dropCourse[_0x34b896(0x1e9)]+'/resources/public/videos/'+_0x205fa8);remove(_0x156c47);}function playOtherVideos(){var _0x4a778c=_0x4b5db1,_0x5b0eb1=this[_0x4a778c(0x201)][_0x4a778c(0x201)][_0x4a778c(0x1c9)][0x0][_0x4a778c(0x1ea)];black['style'][_0x4a778c(0x1c6)]=0x1,black[_0x4a778c(0x1d1)][_0x4a778c(0x204)]=_0x4a778c(0x1c2),black['style'][_0x4a778c(0x1c3)]=_0x4a778c(0x1dd),black[_0x4a778c(0x1d1)][_0x4a778c(0x1fe)]='opacity\x20.5s';const _0x5d9146=ref(db,_0x4a778c(0x1e3)+dropCourse['value']+_0x4a778c(0x1fb)+_0x5b0eb1);get(_0x5d9146)[_0x4a778c(0x1b0)](_0x3b513f=>{var _0x4fc39e=_0x4a778c;black[_0x4fc39e(0x1c5)]=_0x4fc39e(0x1f1)+_0x3b513f[_0x4fc39e(0x1c8)]()[_0x4fc39e(0x1b8)]+'\x22\x20allowfullscreen\x20allowtransparency\x20allow=\x22autoplay\x22\x20scrolling=\x22no\x22\x20frameborder=\x220\x22></iframe>\x0a\x20\x20\x20\x20\x20\x20\x20\x20';var _0x11e5ff=_0x3b513f[_0x4fc39e(0x1c8)]()['views'];update(ref(db,_0x4fc39e(0x1e3)+dropCourse[_0x4fc39e(0x1e9)]+'/resources/public/videos/'+_0x5b0eb1),{'views':_0x11e5ff+0x1});});}function showBasicFiles(){var _0x1ba356=_0x4b5db1;if(dropCourse[_0x1ba356(0x1e9)]!=_0x1ba356(0x213)){const _0x3f2c4f=ref(db,_0x1ba356(0x1e3)+dropCourse['value']+_0x1ba356(0x1ef));onValue(_0x3f2c4f,_0x8893c1=>{var _0x5c5807=_0x1ba356,_0x3fb4dc='';divBasicFiles[_0x5c5807(0x1c5)]='';if(_0x8893c1[_0x5c5807(0x1ba)]()){_0x8893c1[_0x5c5807(0x214)](_0x4380cf=>{var _0x387a90=_0x5c5807,_0x152b44=_0x4380cf[_0x387a90(0x1c8)]()['downloads'][_0x387a90(0x1f6)](),_0x2eb6fc=_0x152b44[_0x387a90(0x200)],_0x134dc1=null,_0xe87d6f=null,_0x3c3a0d=_0x152b44;_0x2eb6fc>0x3&&(_0x134dc1=strViews[_0x387a90(0x1eb)](_0x2eb6fc-0x3,_0x2eb6fc),_0xe87d6f=strViews['substr'](0x0,_0x2eb6fc-0x3),_0x3c3a0d=_0xe87d6f+','+_0x134dc1),_0x3fb4dc+=_0x387a90(0x1c4)+_0x4380cf[_0x387a90(0x1c8)]()[_0x387a90(0x1b8)]+_0x387a90(0x1cc)+_0x4380cf[_0x387a90(0x1ad)]+_0x387a90(0x1b9)+_0x3c3a0d+'\x20downloads</h1></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22display:\x20flex;\x20height:\x2040px;\x20margin-top:\x20auto;\x20margin-bottom:\x20auto;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22img-h6rv2c/btnDownload.png\x22\x20class=\x22btnDownloadBasicFiles\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22img-h6rv2c/btnDelete.png\x22\x20class=\x22btnDelBasicFiles\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22clickLines\x22></div>';}),divBasicFiles[_0x5c5807(0x1c5)]=_0x3fb4dc;for(var _0x3c5e9a=0x0;_0x3c5e9a<divOtherVideos[_0x5c5807(0x1d6)];_0x3c5e9a++){btnDelBasicFiles[_0x3c5e9a][_0x5c5807(0x1e1)](_0x5c5807(0x207),delBasicFiles),btnDownloadBasicFiles[_0x3c5e9a][_0x5c5807(0x1e1)](_0x5c5807(0x207),downloadBasicFiles);}}});}}function addBasicFiles(){var _0x3ad722=_0x4b5db1;if(dropCourse[_0x3ad722(0x1e9)]!='Select\x20Course'&&txtBasicFilesTitle['value']!=''&&txtBasicFilesLink[_0x3ad722(0x1e9)]!=''){var _0x1f80c9=txtBasicFilesLink[_0x3ad722(0x1e9)][_0x3ad722(0x211)]('https://drive.google.com/file/d/',''),_0x3219e4=_0x1f80c9[_0x3ad722(0x211)](_0x3ad722(0x1d9),''),_0x4db178=_0x3ad722(0x1d0)+_0x3219e4;set(ref(db,_0x3ad722(0x1e3)+dropCourse[_0x3ad722(0x1e9)]+_0x3ad722(0x1ef)+txtBasicFilesTitle['value']),{'link':_0x4db178,'downloads':0x0})[_0x3ad722(0x1b0)](()=>{var _0x559b98=_0x3ad722;txtBasicFilesTitle[_0x559b98(0x1e9)]='',txtBasicFilesLink[_0x559b98(0x1e9)]='';})[_0x3ad722(0x1ee)](_0x5e9a90=>{var _0x7cda94=_0x3ad722;alert(_0x5e9a90[_0x7cda94(0x1b6)]);});}else alert(_0x3ad722(0x1be));}btnAddBasicFiles[_0x4b5db1(0x1e1)](_0x4b5db1(0x207),addBasicFiles);function delBasicFiles(){var _0x8efe22=_0x4b5db1,_0x25e032=this[_0x8efe22(0x201)][_0x8efe22(0x201)][_0x8efe22(0x1c9)][0x0][_0x8efe22(0x1ea)];const _0x16598a=ref(db,'courses/'+dropCourse[_0x8efe22(0x1e9)]+'/resources/public/files/'+_0x25e032);remove(_0x16598a);}function downloadBasicFiles(){var _0x2d6ee2=_0x4b5db1,_0x559664=null,_0x2c0469=this[_0x2d6ee2(0x201)][_0x2d6ee2(0x201)][_0x2d6ee2(0x1c9)][0x0][_0x2d6ee2(0x1ea)];const _0x149a4a=ref(db,'courses/'+dropCourse[_0x2d6ee2(0x1e9)]+_0x2d6ee2(0x1ef)+_0x2c0469);get(_0x149a4a)[_0x2d6ee2(0x1b0)](_0x202651=>{var _0x2afcfa=_0x2d6ee2;window[_0x2afcfa(0x1ab)][_0x2afcfa(0x212)]=_0x202651[_0x2afcfa(0x1c8)]()[_0x2afcfa(0x1b8)],_0x559664=_0x202651[_0x2afcfa(0x1c8)]()[_0x2afcfa(0x1fd)]+0x1;})[_0x2d6ee2(0x1b0)](()=>{var _0x1d02e9=_0x2d6ee2;update(ref(db,'courses/'+dropCourse[_0x1d02e9(0x1e9)]+'/resources/public/files/'+_0x2c0469),{'downloads':_0x559664});});}function checkAuth(){var _0x3408dd=_0x4b5db1,_0x216cb4=sessionStorage['getItem']('oAuth');_0x216cb4==_0x3408dd(0x1bb)&&signOut(auth)[_0x3408dd(0x1b0)](()=>{sessionStorage['clear']();})[_0x3408dd(0x1ee)](_0x1296aa=>{alert(_0x1296aa['code']);});}setInterval(checkAuth,0x1f4);