var _0x136b5f=_0x43c0;(function(_0x1b13ae,_0x4a0394){var _0x1edea7=_0x43c0,_0x5ab4f1=_0x1b13ae();while(!![]){try{var _0x3e8a37=-parseInt(_0x1edea7(0x11d))/0x1*(-parseInt(_0x1edea7(0xee))/0x2)+parseInt(_0x1edea7(0xed))/0x3*(parseInt(_0x1edea7(0x101))/0x4)+parseInt(_0x1edea7(0xfc))/0x5*(-parseInt(_0x1edea7(0x12d))/0x6)+-parseInt(_0x1edea7(0x106))/0x7+parseInt(_0x1edea7(0x118))/0x8+-parseInt(_0x1edea7(0xea))/0x9+-parseInt(_0x1edea7(0x111))/0xa;if(_0x3e8a37===_0x4a0394)break;else _0x5ab4f1['push'](_0x5ab4f1['shift']());}catch(_0x4f8e48){_0x5ab4f1['push'](_0x5ab4f1['shift']());}}}(_0x71e3,0x275bd));import{initializeApp}from'https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js';import{getAuth,createUserWithEmailAndPassword,signOut,signInWithEmailAndPassword,onAuthStateChanged}from'https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js';import{getDatabase,ref,onValue,update,child,get,set,remove,query,orderByChild}from'https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js';const firebaseConfig={'apiKey':_0x136b5f(0x11b),'authDomain':'projartcademyph-29663.firebaseapp.com','databaseURL':'https://projartcademyph-29663-default-rtdb.asia-southeast1.firebasedatabase.app','projectId':_0x136b5f(0xef),'storageBucket':_0x136b5f(0x141),'messagingSenderId':_0x136b5f(0x126),'appId':_0x136b5f(0xe7)},app=initializeApp(firebaseConfig),auth=getAuth(app),db=getDatabase();var bodyBlue=document[_0x136b5f(0x112)](_0x136b5f(0xfa));onAuthStateChanged(auth,_0x4a769a=>{var _0x2c779e=_0x136b5f;if(_0x4a769a){var _0x527ad2=sessionStorage['getItem']('sessID');_0x527ad2===_0x2c779e(0x109)?bodyBlue[_0x2c779e(0x108)][_0x2c779e(0x110)]=_0x2c779e(0x114):signOut(auth);}else window[_0x2c779e(0xeb)][_0x2c779e(0x135)]('https://creator.artcademy.ph');});var t=0.002*window[_0x136b5f(0x130)],c=window[_0x136b5f(0x130)],scrollingBannerText=document[_0x136b5f(0x112)](_0x136b5f(0x140));const scrollingBanner=document['getElementById'](_0x136b5f(0x128));var bannerContainer=document['getElementById']('bannerContainer');bannerContainer[_0x136b5f(0x108)]['transform']='translateX('+window[_0x136b5f(0x130)]+_0x136b5f(0x136);function checkBanner(){var _0xf79423=_0x136b5f;const _0x3246c8=ref(db,_0xf79423(0x13a));onValue(_0x3246c8,_0x2ef71e=>{var _0x3d1769=_0xf79423;_0x2ef71e[_0x3d1769(0x133)]()&&(scrollingBannerText[_0x3d1769(0xf2)]=_0x2ef71e[_0x3d1769(0xf7)]()[_0x3d1769(0x12c)],_0x2ef71e[_0x3d1769(0xf7)]()['status']===!![]?scrollingBanner['style'][_0x3d1769(0x110)]='visible':scrollingBanner[_0x3d1769(0x108)][_0x3d1769(0x110)]=_0x3d1769(0x123));});}checkBanner();function bannerAnimation(){var _0x3a4cc0=_0x136b5f;c-=0.5,bannerContainer[_0x3a4cc0(0x108)][_0x3a4cc0(0x13e)]=_0x3a4cc0(0x13c)+c+'px)',c<bannerContainer[_0x3a4cc0(0x103)]*-0x1&&(c=window[_0x3a4cc0(0x130)],bannerContainer[_0x3a4cc0(0x108)][_0x3a4cc0(0x13e)]='translateX('+window[_0x3a4cc0(0x130)]+_0x3a4cc0(0x136));}setInterval(bannerAnimation,t);var txtCourseTitle=null,oldCourse=null;const btnAddCourse=document['getElementById'](_0x136b5f(0xfd)),btnDelCourse=document[_0x136b5f(0x143)]('btnDelCourse'),btnEditCourse=document[_0x136b5f(0x143)](_0x136b5f(0x115));function getCourses(){var _0xfb418=_0x136b5f;return txtCourseTitle=document[_0xfb418(0x112)]('txtCourseTitle'),txtCourseTitle;}function changeCourse(){var _0x4cc75e=_0x136b5f;return getCourses(),oldCourse=this['parentElement'][_0x4cc75e(0x116)][_0x4cc75e(0xf2)],txtCourseTitle[_0x4cc75e(0x10a)]=oldCourse,oldCourse;}function deleteCourse(){var _0x536e3b=_0x136b5f;getCourses();var _0x596bcd=this['parentElement'][_0x536e3b(0x116)][_0x536e3b(0xf2)],_0x30cca0='Permanently\x20delete\x20this\x20record?';confirm(_0x30cca0)==!![]&&remove(ref(db,_0x536e3b(0x142)+_0x596bcd))[_0x536e3b(0xf4)](()=>{displayCourse(),updateDropCourse();});}function displayCourse(){var _0x2b85f6=_0x136b5f;const _0x36cee6=ref(db,_0x2b85f6(0x142));var _0x515da2=document[_0x2b85f6(0x112)](_0x2b85f6(0xf0));for(var _0x55db34=0x0;_0x55db34<_0x515da2[_0x2b85f6(0x113)];_0x55db34++){_0x515da2[_0x2b85f6(0x113)][_0x55db34][_0x2b85f6(0x12b)]();}onValue(_0x36cee6,_0x44b2d9=>{var _0x17a578=_0x2b85f6,_0x209ac6='';_0x44b2d9[_0x17a578(0x13d)](_0x2a28e2=>{var _0x4f85e7=_0x17a578;_0x209ac6+=_0x4f85e7(0xe4)+_0x2a28e2[_0x4f85e7(0xf5)]+_0x4f85e7(0xe6);}),_0x515da2[_0x17a578(0xf3)]=_0x209ac6;for(var _0x2d7934=0x0;_0x2d7934<btnDelCourse[_0x17a578(0xf8)];_0x2d7934++){btnEditCourse[_0x2d7934][_0x17a578(0x139)](_0x17a578(0xfb),changeCourse),btnDelCourse[_0x2d7934][_0x17a578(0x139)](_0x17a578(0xfb),deleteCourse);}});}displayCourse();function addUpdateCourse(){getCourses();const _0x342aca=ref(db);get(child(_0x342aca,'courses/'+oldCourse))['then'](_0x3e6369=>{var _0x33f65a=_0x43c0;if(_0x3e6369[_0x33f65a(0x133)]()){var _0x306f5f=_0x3e6369['val']();set(ref(db,'courses/'+txtCourseTitle['value']),_0x306f5f)[_0x33f65a(0xf4)](()=>{var _0x499e4a=_0x33f65a;remove(ref(db,_0x499e4a(0x142)+oldCourse)),displayCourse(),updateDropCourse();});}else{var _0x52bdb7=txtCourseTitle['value'];set(ref(db,_0x33f65a(0x142)+_0x52bdb7),{'batch':'','mentor':'','resources':''})['then'](()=>{displayCourse(),updateDropCourse();});}txtCourseTitle[_0x33f65a(0x10a)]='';});}btnAddCourse[_0x136b5f(0x139)](_0x136b5f(0xfb),addUpdateCourse);var generateID='',txtMentorName,txtMentorEmail=null;const btnAddMentor=document[_0x136b5f(0x112)](_0x136b5f(0xe5));var divMentors=document[_0x136b5f(0x112)](_0x136b5f(0xe3));const btnSuspendMentor=document[_0x136b5f(0x143)](_0x136b5f(0x12f));function getID(){var _0x429f07=_0x136b5f;generateID='M';const _0x90c784=new Date();var _0x478c8b=[];_0x478c8b[0x0]=_0x90c784['getFullYear']()[_0x429f07(0x102)]()[_0x429f07(0x11f)](0x2),_0x478c8b[0x1]=(_0x90c784['getMonth']()+0x1)[_0x429f07(0x102)](),_0x478c8b[0x2]=_0x90c784[_0x429f07(0x13b)]()[_0x429f07(0x102)](),_0x478c8b[0x3]=_0x90c784[_0x429f07(0x134)]()[_0x429f07(0x102)](),_0x478c8b[0x4]=_0x90c784[_0x429f07(0xec)]()[_0x429f07(0x102)](),_0x478c8b[0x5]=_0x90c784[_0x429f07(0x10c)]()[_0x429f07(0x102)]();for(var _0x555527=0x0;_0x555527<_0x478c8b[_0x429f07(0xf8)];_0x555527++){Number(_0x478c8b[_0x555527])<0xa&&(_0x478c8b[_0x555527]='0'+_0x478c8b[_0x555527]),generateID+=_0x478c8b[_0x555527];}return generateID;}function getMentor(){var _0x5f3a49=_0x136b5f;return txtMentorName=document[_0x5f3a49(0x112)](_0x5f3a49(0x121)),txtMentorEmail=document[_0x5f3a49(0x112)](_0x5f3a49(0x100)),(txtMentorName,txtMentorEmail);}function changeMentorStatus(){var _0x2338d1=_0x136b5f;const _0x1e99bf=this[_0x2338d1(0xe2)][_0x2338d1(0x113)][0x1];get(ref(db,'accounts/mentors'))[_0x2338d1(0xf4)](_0x264f00=>{var _0x5ab20d=_0x2338d1;_0x264f00[_0x5ab20d(0x13d)](_0x1012d2=>{var _0x5eda71=_0x5ab20d;_0x1e99bf[_0x5eda71(0xf2)]==_0x1012d2[_0x5eda71(0xf7)]()['email']&&(_0x1012d2['val']()['status']==_0x5eda71(0x127)?update(ref(db,'accounts/mentors/'+_0x1012d2['key']),{'status':_0x5eda71(0x137)}):update(ref(db,'accounts/mentors/'+_0x1012d2[_0x5eda71(0xf5)]),{'status':_0x5eda71(0x127)}));});});}function displayMentor(){var _0x4968d6=_0x136b5f;const _0x2682bc=ref(db,_0x4968d6(0x10e)),_0x55bfe0=query(_0x2682bc,orderByChild(_0x4968d6(0x10b)));onValue(_0x55bfe0,_0x58a572=>{var _0x3c0b3f=_0x4968d6,_0x106d5e='',_0x27c5cb=[],_0x4e16c3=0x0;_0x58a572['forEach'](_0x2159db=>{var _0x502bab=_0x43c0;_0x106d5e+='\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22facultyEntry\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22facultyName\x22><h1>'+_0x2159db[_0x502bab(0xf7)]()[_0x502bab(0x10b)]+_0x502bab(0xe8)+_0x2159db[_0x502bab(0xf7)]()['email']+_0x502bab(0xe9),_0x27c5cb[_0x4e16c3]=_0x2159db[_0x502bab(0xf7)]()[_0x502bab(0x119)],_0x4e16c3++;}),divMentors[_0x3c0b3f(0xf3)]=_0x106d5e;for(var _0x3b238d=0x0;_0x3b238d<divMentors['childElementCount'];_0x3b238d++){if(_0x27c5cb[_0x3b238d]=='suspended')divMentors[_0x3c0b3f(0x113)][_0x3b238d][_0x3c0b3f(0x113)][0x0]['firstElementChild']['style'][_0x3c0b3f(0x122)]=_0x3c0b3f(0x132),divMentors[_0x3c0b3f(0x113)][_0x3b238d][_0x3c0b3f(0x113)][0x1][_0x3c0b3f(0x116)][_0x3c0b3f(0x108)][_0x3c0b3f(0x122)]=_0x3c0b3f(0x132),divMentors[_0x3c0b3f(0x113)][_0x3b238d][_0x3c0b3f(0x113)][0x2][_0x3c0b3f(0x10d)]=_0x3c0b3f(0x125),divMentors[_0x3c0b3f(0x113)][_0x3b238d][_0x3c0b3f(0x113)][0x0]['firstElementChild'][_0x3c0b3f(0x108)]['opacity']='1',divMentors['children'][_0x3b238d]['children'][0x1][_0x3c0b3f(0x116)][_0x3c0b3f(0x108)]['opacity']='1',divMentors[_0x3c0b3f(0x113)][_0x3b238d]['children'][0x2]['style']['opacity']='1';else _0x27c5cb[_0x3b238d]=='online'?(divMentors[_0x3c0b3f(0x113)][_0x3b238d][_0x3c0b3f(0x113)][0x0][_0x3c0b3f(0x116)][_0x3c0b3f(0x108)][_0x3c0b3f(0x122)]='white',divMentors[_0x3c0b3f(0x113)][_0x3b238d][_0x3c0b3f(0x113)][0x1][_0x3c0b3f(0x116)][_0x3c0b3f(0x108)][_0x3c0b3f(0x122)]=_0x3c0b3f(0x129),divMentors['children'][_0x3b238d]['children'][0x2][_0x3c0b3f(0x10d)]=_0x3c0b3f(0x117),divMentors['children'][_0x3b238d]['children'][0x0][_0x3c0b3f(0x116)]['style']['opacity']='1',divMentors[_0x3c0b3f(0x113)][_0x3b238d]['children'][0x1][_0x3c0b3f(0x116)][_0x3c0b3f(0x108)][_0x3c0b3f(0xf1)]='1',divMentors[_0x3c0b3f(0x113)][_0x3b238d]['children'][0x2][_0x3c0b3f(0x108)]['opacity']='1'):(divMentors[_0x3c0b3f(0x113)][_0x3b238d][_0x3c0b3f(0x113)][0x0][_0x3c0b3f(0x116)]['style'][_0x3c0b3f(0x122)]=_0x3c0b3f(0x129),divMentors[_0x3c0b3f(0x113)][_0x3b238d][_0x3c0b3f(0x113)][0x1][_0x3c0b3f(0x116)][_0x3c0b3f(0x108)][_0x3c0b3f(0x122)]=_0x3c0b3f(0x129),divMentors[_0x3c0b3f(0x113)][_0x3b238d]['children'][0x2]['src']='../img-h6rv2c/btnConfirm.png',divMentors['children'][_0x3b238d][_0x3c0b3f(0x113)][0x0][_0x3c0b3f(0x116)][_0x3c0b3f(0x108)]['opacity']=_0x3c0b3f(0x12e),divMentors[_0x3c0b3f(0x113)][_0x3b238d]['children'][0x1][_0x3c0b3f(0x116)][_0x3c0b3f(0x108)][_0x3c0b3f(0xf1)]=_0x3c0b3f(0x12e),divMentors['children'][_0x3b238d][_0x3c0b3f(0x113)][0x2][_0x3c0b3f(0x108)][_0x3c0b3f(0xf1)]=_0x3c0b3f(0x12e));}for(var _0x3b238d=0x0;_0x3b238d<btnSuspendMentor['length'];_0x3b238d++){btnSuspendMentor[_0x3b238d][_0x3c0b3f(0x139)](_0x3c0b3f(0xfb),changeMentorStatus);}});}function _0x43c0(_0x220513,_0x5cd697){var _0x71e3d4=_0x71e3();return _0x43c0=function(_0x43c08b,_0x5dcde2){_0x43c08b=_0x43c08b-0xe1;var _0x46b4bc=_0x71e3d4[_0x43c08b];return _0x46b4bc;},_0x43c0(_0x220513,_0x5cd697);}displayMentor();function addMentor(){var _0x1ece5b=_0x136b5f;getID(),getMentor(),set(ref(db,_0x1ece5b(0x10e)+generateID),{'email':txtMentorEmail['value'],'name':txtMentorName[_0x1ece5b(0x10a)],'devices':0x0,'lastOnline':'','status':_0x1ece5b(0x137),'warning':0x0})[_0x1ece5b(0xf4)](()=>{var _0x157fcc=_0x1ece5b;displayMentor(),updateDropMentor(),txtMentorEmail[_0x157fcc(0x10a)]='',txtMentorName[_0x157fcc(0x10a)]='';})[_0x1ece5b(0xe1)](_0x171b34=>{var _0x4cf3ad=_0x1ece5b;alert(_0x171b34[_0x4cf3ad(0x131)]);});}function addAuthMentor(){var _0x4e4aaa=_0x136b5f;getMentor(),txtMentorName[_0x4e4aaa(0x10a)]!=''&&txtMentorEmail['value']!=''&&createUserWithEmailAndPassword(auth,txtMentorEmail[_0x4e4aaa(0x10a)],_0x4e4aaa(0x12a))[_0x4e4aaa(0xf4)](()=>{var _0xe86158=_0x4e4aaa,_0x219921=sessionStorage['getItem'](_0xe86158(0x11e)),_0x21c346=sessionStorage[_0xe86158(0x124)](_0xe86158(0x144));signInWithEmailAndPassword(auth,_0x219921,_0x21c346)[_0xe86158(0xf4)](()=>{addMentor();});})[_0x4e4aaa(0xe1)](_0xe9db3e=>{addMentor();});}btnAddMentor[_0x136b5f(0x139)](_0x136b5f(0xfb),addAuthMentor);var dropCourse=document[_0x136b5f(0x112)](_0x136b5f(0x138)),dropMentor=document[_0x136b5f(0x112)]('dropMentorName');const btnAddAssignment=document[_0x136b5f(0x112)](_0x136b5f(0x11a)),btnDelAssignment=document['getElementsByClassName'](_0x136b5f(0xf9));function updateDropCourse(){var _0x3f2564=_0x136b5f,_0x1b2aa6='<option\x20class=\x22optionFaculty\x22\x20value=\x22Select\x20Course\x22>Select\x20Course</option>';const _0x1704e2=ref(db,_0x3f2564(0x142));get(_0x1704e2)[_0x3f2564(0xf4)](_0x3d9e02=>{var _0x463056=_0x3f2564;for(var _0x1fe88c=0x0;_0x1fe88c<dropCourse[_0x463056(0x113)];_0x1fe88c++){dropCourse[_0x463056(0x113)][_0x1fe88c][_0x463056(0x12b)]();}_0x3d9e02[_0x463056(0x133)]()&&(_0x3d9e02[_0x463056(0x13d)](_0x4e4abc=>{var _0x41d126=_0x463056;_0x1b2aa6+=_0x41d126(0x107)+_0x4e4abc[_0x41d126(0xf5)]+'\x22>'+_0x4e4abc['key']+_0x41d126(0x105);}),dropCourse[_0x463056(0xf3)]=_0x1b2aa6);});}updateDropCourse();function updateDropMentor(){var _0x2ccd1c=_0x136b5f,_0x21d718='<option\x20class=\x22optionFaculty\x22\x20value=\x22Select\x20Mentor\x22>Select\x20Mentor</option>';const _0x39c61a=ref(db,_0x2ccd1c(0x10e));get(_0x39c61a)[_0x2ccd1c(0xf4)](_0x184540=>{var _0x13e675=_0x2ccd1c;for(var _0x5794f0=0x0;_0x5794f0<dropMentor[_0x13e675(0x113)];_0x5794f0++){dropMentor['children'][_0x5794f0]['remove']();}_0x184540['exists']()&&(_0x184540['forEach'](_0x5a6a24=>{var _0x42f65c=_0x13e675;_0x21d718+=_0x42f65c(0x107)+_0x5a6a24[_0x42f65c(0xf7)]()[_0x42f65c(0x10b)]+'\x22>'+_0x5a6a24[_0x42f65c(0xf7)]()[_0x42f65c(0x10b)]+_0x42f65c(0x105);}),dropMentor[_0x13e675(0xf3)]=_0x21d718);});}updateDropMentor();function deleteFaculty(){var _0x270c83=_0x136b5f;const _0x8d3198=this['parentElement'][_0x270c83(0x113)][0x0],_0x2d66d6=ref(db,_0x270c83(0x142));onValue(_0x2d66d6,_0x5f2741=>{var _0x11dce5=_0x270c83;_0x5f2741[_0x11dce5(0x13d)](_0x221b5c=>{var _0x407057=_0x11dce5;_0x8d3198['firstElementChild'][_0x407057(0xf2)]==_0x221b5c[_0x407057(0xf5)]&&update(ref(db,_0x407057(0x142)+_0x221b5c[_0x407057(0xf5)]),{'mentor':''})[_0x407057(0xf4)](()=>{var _0x291768=_0x407057;_0x8d3198[_0x291768(0x12b)]();})[_0x407057(0xe1)](_0x482d88=>{var _0x75a0d6=_0x407057;alert(_0x482d88[_0x75a0d6(0x131)]);});});});}function displayFaculty(){var _0x3f918b=_0x136b5f;const _0x1635f1=ref(db,_0x3f918b(0x142));onValue(_0x1635f1,_0x38b408=>{var _0x2adfa4=_0x3f918b,_0x23950e='';const _0x5add93=document[_0x2adfa4(0x112)](_0x2adfa4(0xff));if(_0x38b408['exists']()){_0x38b408[_0x2adfa4(0x13d)](_0x2f3130=>{var _0x53861d=_0x2adfa4;_0x2f3130['val']()[_0x53861d(0x120)]&&(_0x23950e+=_0x53861d(0x13f)+_0x2f3130[_0x53861d(0xf5)]+_0x53861d(0x10f)+_0x2f3130['val']()[_0x53861d(0x120)]+'</h1></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22img-h6rv2c/btnDelete.png\x22\x20class=\x22btnDelAssignment\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>');}),_0x5add93[_0x2adfa4(0xf3)]=_0x23950e;for(var _0x27269e=0x0;_0x27269e<_0x5add93['childElementCount'];_0x27269e++){btnDelAssignment[_0x27269e]['addEventListener']('click',deleteFaculty);}}});}displayFaculty();function assignFaculty(){var _0x8018f=_0x136b5f;dropCourse[_0x8018f(0x10a)]!=_0x8018f(0x11c)&&dropMentor[_0x8018f(0x10a)]!=_0x8018f(0xfe)?update(ref(db,_0x8018f(0x142)+dropCourse['value']),{'mentor':dropMentor['value']})[_0x8018f(0xf4)](()=>{var _0x575cc4=_0x8018f;dropCourse[_0x575cc4(0x10a)]=_0x575cc4(0x11c),dropMentor[_0x575cc4(0x10a)]=_0x575cc4(0xfe),displayFaculty();})[_0x8018f(0xe1)](_0xd3828a=>{var _0x119f54=_0x8018f;alert(_0xd3828a[_0x119f54(0x131)]);}):(dropCourse[_0x8018f(0x10a)]=_0x8018f(0x11c),dropMentor['value']='Select\x20Mentor');}btnAddAssignment[_0x136b5f(0x139)]('click',assignFaculty);function checkIfOnline(){var _0x23f7a4=_0x136b5f,_0x2224c9=sessionStorage[_0x23f7a4(0x124)]('oAuth'),_0x4b7e70=sessionStorage['getItem'](_0x23f7a4(0x11e));_0x2224c9==_0x23f7a4(0x104)&&signOut(auth)['then'](()=>{var _0x212c7d=_0x23f7a4;sessionStorage[_0x212c7d(0xf6)]();})[_0x23f7a4(0xe1)](_0xc1e6f3=>{alert(_0xc1e6f3['code']);});}setInterval(checkIfOnline,0x1f4);function _0x71e3(){var _0x44f61c=['remove','message','107058AEomoz','.25','btnSuspendMentor','innerWidth','code','salmon','exists','getHours','replace','px)','offline','dropCourseTitle','addEventListener','settings/banner','getDate','translateX(','forEach','transform','<div\x20class=\x22facultyEntry\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22facultyDesc\x22><h1>','pBanner','projartcademyph-29663.appspot.com','courses/','getElementsByClassName','sessPw','catch','parentElement','divMentors','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22facultyEntry\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22facultyTitle\x22><h1>','btnAddMentor','</h1></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22img-h6rv2c/btnDelete.png\x22\x20class=\x22btnDelCourse\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22img-h6rv2c/btnEdit.png\x22\x20class=\x22btnEditCourse\x22\x20>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20','1:651674935886:web:629aefbab24dd2a154991f','</h1></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22facultyEmail\x22><h1>','</h1></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22img-h6rv2c/btnConfirm.png\x22\x20class=\x22btnSuspendMentor\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20','1710900rvkmml','location','getMinutes','1038FdJBFY','585308vWvOGT','projartcademyph-29663','divCourses','opacity','innerText','innerHTML','then','key','clear','val','length','btnDelAssignment','bodyBlue','click','65xbLQIS','btnAddCourse','Select\x20Mentor','divAssignment','txtMentorEmail','3280PztOLR','toString','offsetWidth','out','</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20','354221zwoGPI','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20class=\x22optionFaculty\x22\x20value=\x22','style','XribZIy3mORl28B3A7S3qOdv2Bs1','value','name','getSeconds','src','accounts/mentors/','</h1></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22facultyDesc\x22><h1>','visibility','218100oJapFN','getElementById','children','visible','btnEditCourse','firstElementChild','../img-h6rv2c/btnConfirm.png','634488xwpiNC','status','btnAddAssignment','AIzaSyADks-XldL82do7F8_A46cAWb6ZnDjQ3Yk','Select\x20Course','1htqDUS','sessEmail','substring','mentor','txtMentorName','color','hidden','getItem','../img-h6rv2c/btnSuspended.png','651674935886','suspended','divBanner','white','@Abcd1234'];_0x71e3=function(){return _0x44f61c;};return _0x71e3();}