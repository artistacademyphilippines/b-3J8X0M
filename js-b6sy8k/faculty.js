var _0x1065ea=_0x31ab;(function(_0x4a0641,_0x18608a){var _0x49e8dc=_0x31ab,_0x200d5b=_0x4a0641();while(!![]){try{var _0x1ff114=parseInt(_0x49e8dc(0x1ec))/0x1+parseInt(_0x49e8dc(0x206))/0x2*(-parseInt(_0x49e8dc(0x207))/0x3)+parseInt(_0x49e8dc(0x22d))/0x4*(-parseInt(_0x49e8dc(0x23d))/0x5)+parseInt(_0x49e8dc(0x1f5))/0x6*(parseInt(_0x49e8dc(0x1e9))/0x7)+parseInt(_0x49e8dc(0x1f9))/0x8+-parseInt(_0x49e8dc(0x237))/0x9+parseInt(_0x49e8dc(0x201))/0xa*(-parseInt(_0x49e8dc(0x24e))/0xb);if(_0x1ff114===_0x18608a)break;else _0x200d5b['push'](_0x200d5b['shift']());}catch(_0x3c5d3b){_0x200d5b['push'](_0x200d5b['shift']());}}}(_0x3f61,0x8ab6e));import{initializeApp}from'https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js';import{getAuth,createUserWithEmailAndPassword,signOut,signInWithEmailAndPassword,onAuthStateChanged}from'https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js';import{getDatabase,ref,onValue,update,child,get,set,remove,query,orderByChild}from'https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js';const firebaseConfig={'apiKey':_0x1065ea(0x204),'authDomain':_0x1065ea(0x212),'databaseURL':_0x1065ea(0x238),'projectId':_0x1065ea(0x24d),'storageBucket':'projartcademyph-29663.appspot.com','messagingSenderId':_0x1065ea(0x242),'appId':_0x1065ea(0x21d)},app=initializeApp(firebaseConfig),auth=getAuth(app),db=getDatabase();var bodyBlue=document['getElementById']('bodyBlue');onAuthStateChanged(auth,_0x340f48=>{var _0x49b799=_0x1065ea;if(_0x340f48){var _0x4aaa58=sessionStorage['getItem'](_0x49b799(0x22b));_0x4aaa58=='XribZIy3mORl28B3A7S3qOdv2Bs1'?bodyBlue[_0x49b799(0x21e)][_0x49b799(0x244)]='visible':window[_0x49b799(0x1f0)]['replace'](_0x49b799(0x23b));}else window['location'][_0x49b799(0x22f)](_0x49b799(0x23b));});var t=0.002*window[_0x1065ea(0x1ee)],c=window['innerWidth'],scrollingBannerText=document[_0x1065ea(0x211)](_0x1065ea(0x21b));const scrollingBanner=document[_0x1065ea(0x211)](_0x1065ea(0x245));var bannerContainer=document[_0x1065ea(0x211)]('bannerContainer');bannerContainer[_0x1065ea(0x21e)]['transform']='translateX('+window['innerWidth']+_0x1065ea(0x217);function checkBanner(){var _0x3d95f0=_0x1065ea;const _0x4dd266=ref(db,_0x3d95f0(0x240));onValue(_0x4dd266,_0x5c31b0=>{var _0x1d252c=_0x3d95f0;_0x5c31b0['exists']()&&(scrollingBannerText[_0x1d252c(0x246)]=_0x5c31b0[_0x1d252c(0x210)]()[_0x1d252c(0x250)],_0x5c31b0['val']()['status']===!![]?scrollingBanner[_0x1d252c(0x21e)][_0x1d252c(0x244)]=_0x1d252c(0x21c):scrollingBanner[_0x1d252c(0x21e)][_0x1d252c(0x244)]=_0x1d252c(0x254));});}checkBanner();function bannerAnimation(){var _0x565c91=_0x1065ea;c-=0.5,bannerContainer[_0x565c91(0x21e)][_0x565c91(0x235)]=_0x565c91(0x219)+c+_0x565c91(0x217),c<bannerContainer[_0x565c91(0x228)]*-0x1&&(c=window[_0x565c91(0x1ee)],bannerContainer[_0x565c91(0x21e)][_0x565c91(0x235)]=_0x565c91(0x219)+window[_0x565c91(0x1ee)]+_0x565c91(0x217));}setInterval(bannerAnimation,t);var txtCourseTitle=null,oldCourse=null;const btnAddCourse=document['getElementById'](_0x1065ea(0x232)),btnDelCourse=document[_0x1065ea(0x21a)](_0x1065ea(0x1fb)),btnEditCourse=document[_0x1065ea(0x21a)](_0x1065ea(0x1ea));function getCourses(){var _0x134a9c=_0x1065ea;return txtCourseTitle=document[_0x134a9c(0x211)](_0x134a9c(0x229)),txtCourseTitle;}function changeCourse(){var _0x556c3e=_0x1065ea;return getCourses(),oldCourse=this['parentElement'][_0x556c3e(0x222)][_0x556c3e(0x246)],txtCourseTitle[_0x556c3e(0x23a)]=oldCourse,oldCourse;}function deleteCourse(){var _0x307bf1=_0x1065ea;getCourses();var _0x532c3b=this[_0x307bf1(0x21f)][_0x307bf1(0x222)][_0x307bf1(0x246)],_0x1961de=_0x307bf1(0x1fc);confirm(_0x1961de)==!![]&&remove(ref(db,_0x307bf1(0x1f7)+_0x532c3b))['then'](()=>{displayCourse(),updateDropCourse();});}function displayCourse(){var _0x4f646a=_0x1065ea;const _0x2c23b2=ref(db,_0x4f646a(0x1f7));var _0x4eea71=document[_0x4f646a(0x211)](_0x4f646a(0x1eb));for(var _0x4b00ed=0x0;_0x4b00ed<_0x4eea71[_0x4f646a(0x209)];_0x4b00ed++){_0x4eea71[_0x4f646a(0x209)][_0x4b00ed]['remove']();}onValue(_0x2c23b2,_0x6afe9f=>{var _0x375890=_0x4f646a,_0xbac0ff='';_0x6afe9f[_0x375890(0x205)](_0x3f7928=>{var _0x944d9b=_0x375890;_0xbac0ff+=_0x944d9b(0x1f6)+_0x3f7928[_0x944d9b(0x1f2)]+_0x944d9b(0x218);}),_0x4eea71[_0x375890(0x24f)]=_0xbac0ff;for(var _0x470df6=0x0;_0x470df6<btnDelCourse[_0x375890(0x241)];_0x470df6++){btnEditCourse[_0x470df6]['addEventListener'](_0x375890(0x215),changeCourse),btnDelCourse[_0x470df6][_0x375890(0x216)]('click',deleteCourse);}});}displayCourse();function addUpdateCourse(){var _0x195179=_0x1065ea;getCourses();const _0x3db7c5=ref(db);get(child(_0x3db7c5,_0x195179(0x1f7)+oldCourse))[_0x195179(0x203)](_0x2aafa8=>{var _0xb17a1a=_0x195179;if(_0x2aafa8[_0xb17a1a(0x1fa)]()){var _0x3ec0a5=_0x2aafa8[_0xb17a1a(0x210)]();set(ref(db,'courses/'+txtCourseTitle[_0xb17a1a(0x23a)]),_0x3ec0a5)[_0xb17a1a(0x203)](()=>{remove(ref(db,'courses/'+oldCourse)),displayCourse(),updateDropCourse();});}else{var _0x9ae184=txtCourseTitle['value'];set(ref(db,_0xb17a1a(0x1f7)+_0x9ae184),{'batch':'','mentor':'','resources':''})[_0xb17a1a(0x203)](()=>{displayCourse(),updateDropCourse();});}txtCourseTitle[_0xb17a1a(0x23a)]='';});}btnAddCourse[_0x1065ea(0x216)]('click',addUpdateCourse);var generateID='',txtMentorName,txtMentorEmail=null;const btnAddMentor=document[_0x1065ea(0x211)](_0x1065ea(0x227));var divMentors=document[_0x1065ea(0x211)](_0x1065ea(0x1ed));const btnSuspendMentor=document['getElementsByClassName'](_0x1065ea(0x1f8));function getID(){var _0x156777=_0x1065ea;generateID='M';const _0x497f5e=new Date();var _0x4e7523=[];_0x4e7523[0x0]=_0x497f5e[_0x156777(0x224)]()[_0x156777(0x208)]()[_0x156777(0x255)](0x2),_0x4e7523[0x1]=(_0x497f5e['getMonth']()+0x1)[_0x156777(0x208)](),_0x4e7523[0x2]=_0x497f5e['getDate']()[_0x156777(0x208)](),_0x4e7523[0x3]=_0x497f5e[_0x156777(0x24a)]()[_0x156777(0x208)](),_0x4e7523[0x4]=_0x497f5e[_0x156777(0x1f1)]()[_0x156777(0x208)](),_0x4e7523[0x5]=_0x497f5e[_0x156777(0x20a)]()[_0x156777(0x208)]();for(var _0x1e05df=0x0;_0x1e05df<_0x4e7523[_0x156777(0x241)];_0x1e05df++){Number(_0x4e7523[_0x1e05df])<0xa&&(_0x4e7523[_0x1e05df]='0'+_0x4e7523[_0x1e05df]),generateID+=_0x4e7523[_0x1e05df];}return generateID;}function getMentor(){var _0x33e0c8=_0x1065ea;return txtMentorName=document[_0x33e0c8(0x211)](_0x33e0c8(0x230)),txtMentorEmail=document[_0x33e0c8(0x211)]('txtMentorEmail'),(txtMentorName,txtMentorEmail);}function changeMentorStatus(){var _0x8fa782=_0x1065ea;const _0x4d82e2=this['parentElement'][_0x8fa782(0x209)][0x1];get(ref(db,_0x8fa782(0x1f4)))[_0x8fa782(0x203)](_0x5681bd=>{var _0x2ceb1a=_0x8fa782;_0x5681bd[_0x2ceb1a(0x205)](_0xd2227a=>{var _0x4566fa=_0x2ceb1a;_0x4d82e2[_0x4566fa(0x246)]==_0xd2227a['val']()[_0x4566fa(0x252)]&&(_0xd2227a[_0x4566fa(0x210)]()[_0x4566fa(0x200)]==_0x4566fa(0x225)?update(ref(db,_0x4566fa(0x214)+_0xd2227a[_0x4566fa(0x1f2)]),{'status':_0x4566fa(0x20f)}):update(ref(db,_0x4566fa(0x214)+_0xd2227a[_0x4566fa(0x1f2)]),{'status':_0x4566fa(0x225)}));});});}function displayMentor(){var _0x1b6423=_0x1065ea;const _0x579c26=ref(db,_0x1b6423(0x214)),_0x576478=query(_0x579c26,orderByChild('name'));onValue(_0x576478,_0xf293fe=>{var _0x86b6cc=_0x1b6423,_0x17f8a2='',_0x49947f=[],_0x3108df=0x0;_0xf293fe[_0x86b6cc(0x205)](_0x5279bf=>{var _0x1c28b9=_0x86b6cc;_0x17f8a2+=_0x1c28b9(0x213)+_0x5279bf[_0x1c28b9(0x210)]()[_0x1c28b9(0x24b)]+_0x1c28b9(0x226)+_0x5279bf[_0x1c28b9(0x210)]()[_0x1c28b9(0x252)]+'</h1></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22img-h6rv2c/btnConfirm.png\x22\x20class=\x22btnSuspendMentor\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20',_0x49947f[_0x3108df]=_0x5279bf[_0x1c28b9(0x210)]()[_0x1c28b9(0x200)],_0x3108df++;}),divMentors[_0x86b6cc(0x24f)]=_0x17f8a2;for(var _0x3cd377=0x0;_0x3cd377<divMentors['childElementCount'];_0x3cd377++){if(_0x49947f[_0x3cd377]=='suspended')divMentors[_0x86b6cc(0x209)][_0x3cd377][_0x86b6cc(0x209)][0x0][_0x86b6cc(0x222)]['style'][_0x86b6cc(0x220)]=_0x86b6cc(0x1f3),divMentors[_0x86b6cc(0x209)][_0x3cd377][_0x86b6cc(0x209)][0x1][_0x86b6cc(0x222)][_0x86b6cc(0x21e)][_0x86b6cc(0x220)]=_0x86b6cc(0x1f3),divMentors[_0x86b6cc(0x209)][_0x3cd377][_0x86b6cc(0x209)][0x2][_0x86b6cc(0x23c)]='../img-h6rv2c/btnSuspended.png',divMentors[_0x86b6cc(0x209)][_0x3cd377]['children'][0x0][_0x86b6cc(0x222)][_0x86b6cc(0x21e)]['opacity']='1',divMentors[_0x86b6cc(0x209)][_0x3cd377][_0x86b6cc(0x209)][0x1][_0x86b6cc(0x222)]['style']['opacity']='1',divMentors[_0x86b6cc(0x209)][_0x3cd377][_0x86b6cc(0x209)][0x2]['style'][_0x86b6cc(0x22a)]='1';else _0x49947f[_0x3cd377]==_0x86b6cc(0x231)?(divMentors[_0x86b6cc(0x209)][_0x3cd377]['children'][0x0][_0x86b6cc(0x222)][_0x86b6cc(0x21e)][_0x86b6cc(0x220)]=_0x86b6cc(0x23f),divMentors['children'][_0x3cd377][_0x86b6cc(0x209)][0x1][_0x86b6cc(0x222)][_0x86b6cc(0x21e)][_0x86b6cc(0x220)]=_0x86b6cc(0x23f),divMentors[_0x86b6cc(0x209)][_0x3cd377][_0x86b6cc(0x209)][0x2][_0x86b6cc(0x23c)]=_0x86b6cc(0x233),divMentors[_0x86b6cc(0x209)][_0x3cd377][_0x86b6cc(0x209)][0x0][_0x86b6cc(0x222)][_0x86b6cc(0x21e)][_0x86b6cc(0x22a)]='1',divMentors[_0x86b6cc(0x209)][_0x3cd377][_0x86b6cc(0x209)][0x1][_0x86b6cc(0x222)]['style']['opacity']='1',divMentors[_0x86b6cc(0x209)][_0x3cd377][_0x86b6cc(0x209)][0x2][_0x86b6cc(0x21e)]['opacity']='1'):(divMentors[_0x86b6cc(0x209)][_0x3cd377][_0x86b6cc(0x209)][0x0][_0x86b6cc(0x222)][_0x86b6cc(0x21e)][_0x86b6cc(0x220)]=_0x86b6cc(0x23f),divMentors[_0x86b6cc(0x209)][_0x3cd377][_0x86b6cc(0x209)][0x1]['firstElementChild']['style'][_0x86b6cc(0x220)]=_0x86b6cc(0x23f),divMentors[_0x86b6cc(0x209)][_0x3cd377][_0x86b6cc(0x209)][0x2][_0x86b6cc(0x23c)]=_0x86b6cc(0x233),divMentors[_0x86b6cc(0x209)][_0x3cd377][_0x86b6cc(0x209)][0x0][_0x86b6cc(0x222)][_0x86b6cc(0x21e)][_0x86b6cc(0x22a)]=_0x86b6cc(0x24c),divMentors['children'][_0x3cd377][_0x86b6cc(0x209)][0x1][_0x86b6cc(0x222)][_0x86b6cc(0x21e)]['opacity']=_0x86b6cc(0x24c),divMentors[_0x86b6cc(0x209)][_0x3cd377][_0x86b6cc(0x209)][0x2][_0x86b6cc(0x21e)][_0x86b6cc(0x22a)]='.25');}for(var _0x3cd377=0x0;_0x3cd377<btnSuspendMentor['length'];_0x3cd377++){btnSuspendMentor[_0x3cd377]['addEventListener'](_0x86b6cc(0x215),changeMentorStatus);}});}displayMentor();function addMentor(){var _0x21e2c9=_0x1065ea;getID(),getMentor(),set(ref(db,_0x21e2c9(0x214)+generateID),{'email':txtMentorEmail['value'],'name':txtMentorName[_0x21e2c9(0x23a)],'devices':0x0,'lastOnline':'','status':'offline','warning':0x0})[_0x21e2c9(0x203)](()=>{var _0x3d9e32=_0x21e2c9;displayMentor(),updateDropMentor(),txtMentorEmail[_0x3d9e32(0x23a)]='',txtMentorName['value']='';})[_0x21e2c9(0x1e8)](_0x468fb3=>{alert(_0x468fb3['code']);});}function addAuthMentor(){var _0x329828=_0x1065ea;getMentor(),txtMentorName[_0x329828(0x23a)]!=''&&txtMentorEmail[_0x329828(0x23a)]!=''&&createUserWithEmailAndPassword(auth,txtMentorEmail[_0x329828(0x23a)],_0x329828(0x248))['then'](()=>{var _0x8dbb8f=_0x329828,_0x53ea7=sessionStorage[_0x8dbb8f(0x234)](_0x8dbb8f(0x243)),_0x37105f=sessionStorage['getItem'](_0x8dbb8f(0x1fd));signInWithEmailAndPassword(auth,_0x53ea7,_0x37105f)[_0x8dbb8f(0x203)](()=>{addMentor();});})['catch'](_0x3e9d1c=>{var _0x1033d2=_0x329828;alert(_0x3e9d1c[_0x1033d2(0x223)]);});}btnAddMentor[_0x1065ea(0x216)]('click',addAuthMentor);var dropCourse=document[_0x1065ea(0x211)](_0x1065ea(0x221)),dropMentor=document[_0x1065ea(0x211)](_0x1065ea(0x20c));const btnAddAssignment=document[_0x1065ea(0x211)]('btnAddAssignment'),btnDelAssignment=document[_0x1065ea(0x21a)](_0x1065ea(0x22e));function updateDropCourse(){var _0x4f3acd=_0x1065ea,_0x180189=_0x4f3acd(0x251);const _0x47b2d6=ref(db,'courses/');get(_0x47b2d6)[_0x4f3acd(0x203)](_0x3110eb=>{var _0x1ac037=_0x4f3acd;for(var _0x4c2e0f=0x0;_0x4c2e0f<dropCourse['children'];_0x4c2e0f++){console[_0x1ac037(0x20d)](dropCourse[_0x1ac037(0x209)]),dropCourse[_0x1ac037(0x209)][_0x4c2e0f][_0x1ac037(0x20b)]();}_0x3110eb[_0x1ac037(0x1fa)]()&&(_0x3110eb['forEach'](_0xdf3ef6=>{var _0xd8504d=_0x1ac037;_0x180189+=_0xd8504d(0x249)+_0xdf3ef6['key']+'\x22>'+_0xdf3ef6['key']+_0xd8504d(0x247);}),dropCourse[_0x1ac037(0x24f)]=_0x180189);});}updateDropCourse();function updateDropMentor(){var _0x1275f5=_0x1065ea,_0x489561=_0x1275f5(0x239);const _0x2fa63c=ref(db,_0x1275f5(0x214));get(_0x2fa63c)[_0x1275f5(0x203)](_0x314b33=>{var _0x531bfb=_0x1275f5;for(var _0x8956f9=0x0;_0x8956f9<dropMentor[_0x531bfb(0x209)];_0x8956f9++){console[_0x531bfb(0x20d)](dropMentor[_0x531bfb(0x209)]),dropMentor[_0x531bfb(0x209)][_0x8956f9][_0x531bfb(0x20b)]();}_0x314b33[_0x531bfb(0x1fa)]()&&(_0x314b33[_0x531bfb(0x205)](_0x1f2249=>{var _0x32b550=_0x531bfb;_0x489561+=_0x32b550(0x249)+_0x1f2249['val']()[_0x32b550(0x24b)]+'\x22>'+_0x1f2249[_0x32b550(0x210)]()[_0x32b550(0x24b)]+_0x32b550(0x247);}),dropMentor[_0x531bfb(0x24f)]=_0x489561);});}updateDropMentor();function deleteFaculty(){var _0x2674b0=_0x1065ea;const _0x15e0da=this[_0x2674b0(0x21f)][_0x2674b0(0x209)][0x0];console[_0x2674b0(0x20d)](_0x15e0da);const _0x5b8bae=ref(db,_0x2674b0(0x1f7));onValue(_0x5b8bae,_0x2e9ffb=>{var _0x8795ff=_0x2674b0;_0x2e9ffb[_0x8795ff(0x205)](_0xecdda1=>{var _0x3645db=_0x8795ff;_0x15e0da[_0x3645db(0x222)][_0x3645db(0x246)]==_0xecdda1[_0x3645db(0x1f2)]&&update(ref(db,_0x3645db(0x1f7)+_0xecdda1[_0x3645db(0x1f2)]),{'mentor':''})[_0x3645db(0x203)](()=>{var _0x27a639=_0x3645db;_0x15e0da[_0x27a639(0x20b)]();})[_0x3645db(0x1e8)](_0x156481=>{alert(_0x156481['code']);});});});}function displayFaculty(){var _0x40b5d8=_0x1065ea;const _0x539af2=ref(db,_0x40b5d8(0x1f7));onValue(_0x539af2,_0x4064cd=>{var _0x4cc689=_0x40b5d8,_0x50e9ce='';const _0x4f457a=document['getElementById'](_0x4cc689(0x202));if(_0x4064cd['exists']()){_0x4064cd[_0x4cc689(0x205)](_0x22de21=>{var _0x3c242e=_0x4cc689;_0x22de21[_0x3c242e(0x210)]()[_0x3c242e(0x22c)]&&(_0x50e9ce+=_0x3c242e(0x20e)+_0x22de21[_0x3c242e(0x1f2)]+'</h1></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22facultyDesc\x22><h1>'+_0x22de21[_0x3c242e(0x210)]()[_0x3c242e(0x22c)]+'</h1></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22img-h6rv2c/btnDelete.png\x22\x20class=\x22btnDelAssignment\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>');}),_0x4f457a[_0x4cc689(0x24f)]=_0x50e9ce;for(var _0x55ad96=0x0;_0x55ad96<_0x4f457a[_0x4cc689(0x253)];_0x55ad96++){btnDelAssignment[_0x55ad96][_0x4cc689(0x216)](_0x4cc689(0x215),deleteFaculty);}}});}function _0x3f61(){var _0x2f4b3e=['online','btnAddCourse','../img-h6rv2c/btnConfirm.png','getItem','transform','oAuth','9088821fBuNLB','https://projartcademyph-29663-default-rtdb.asia-southeast1.firebasedatabase.app','<option\x20class=\x22optionFaculty\x22\x20value=\x22Select\x20Mentor\x22>Select\x20Mentor</option>','value','https://artcademy.ph/404','src','5ximCTE','clear','white','settings/banner','length','651674935886','sessEmail','visibility','divBanner','innerText','</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20','@Abcd1234','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20class=\x22optionFaculty\x22\x20value=\x22','getHours','name','.25','projartcademyph-29663','895191alAeLA','innerHTML','message','<option\x20class=\x22optionFaculty\x22\x20value=\x22Select\x20Course\x22>Select\x20Course</option>','email','childElementCount','hidden','substring','catch','908138eYkGsR','btnEditCourse','divCourses','737691qVuWKC','divMentors','innerWidth','out','location','getMinutes','key','salmon','accounts/mentors','48oYdttT','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22facultyEntry\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22facultyTitle\x22><h1>','courses/','btnSuspendMentor','8719184YZzmKj','exists','btnDelCourse','Permanently\x20delete\x20this\x20record?','sessPw','Select\x20Course','Select\x20Mentor','status','20KdOaaV','divAssignment','then','AIzaSyADks-XldL82do7F8_A46cAWb6ZnDjQ3Yk','forEach','22ETXnrA','297ALDlpc','toString','children','getSeconds','remove','dropMentorName','log','<div\x20class=\x22facultyEntry\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22facultyDesc\x22><h1>','offline','val','getElementById','projartcademyph-29663.firebaseapp.com','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22facultyEntry\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22facultyName\x22><h1>','accounts/mentors/','click','addEventListener','px)','</h1></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22img-h6rv2c/btnDelete.png\x22\x20class=\x22btnDelCourse\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22img-h6rv2c/btnEdit.png\x22\x20class=\x22btnEditCourse\x22\x20>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20','translateX(','getElementsByClassName','pBanner','visible','1:651674935886:web:629aefbab24dd2a154991f','style','parentElement','color','dropCourseTitle','firstElementChild','code','getFullYear','suspended','</h1></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22facultyEmail\x22><h1>','btnAddMentor','offsetWidth','txtCourseTitle','opacity','sessID','mentor','4494268FUpvgI','btnDelAssignment','replace','txtMentorName'];_0x3f61=function(){return _0x2f4b3e;};return _0x3f61();}function _0x31ab(_0x54745d,_0x576169){var _0x3f61df=_0x3f61();return _0x31ab=function(_0x31ab19,_0xaabb68){_0x31ab19=_0x31ab19-0x1e8;var _0x2802b7=_0x3f61df[_0x31ab19];return _0x2802b7;},_0x31ab(_0x54745d,_0x576169);}displayFaculty();function assignFaculty(){var _0x1bebc2=_0x1065ea;dropCourse[_0x1bebc2(0x23a)]!=_0x1bebc2(0x1fe)&&dropMentor[_0x1bebc2(0x23a)]!=_0x1bebc2(0x1ff)?update(ref(db,_0x1bebc2(0x1f7)+dropCourse[_0x1bebc2(0x23a)]),{'mentor':dropMentor['value']})[_0x1bebc2(0x203)](()=>{var _0x3122d2=_0x1bebc2;dropCourse[_0x3122d2(0x23a)]=_0x3122d2(0x1fe),dropMentor[_0x3122d2(0x23a)]='Select\x20Mentor',displayFaculty();})[_0x1bebc2(0x1e8)](_0x45c5b3=>{var _0x8b8bae=_0x1bebc2;alert(_0x45c5b3[_0x8b8bae(0x223)]);}):(dropCourse['value']=_0x1bebc2(0x1fe),dropMentor[_0x1bebc2(0x23a)]=_0x1bebc2(0x1ff));}btnAddAssignment[_0x1065ea(0x216)]('click',assignFaculty);function checkAuth(){var _0x28c1fd=_0x1065ea,_0x1af3c2=sessionStorage[_0x28c1fd(0x234)](_0x28c1fd(0x236));_0x1af3c2==_0x28c1fd(0x1ef)&&signOut(auth)[_0x28c1fd(0x203)](()=>{var _0x557bf5=_0x28c1fd;sessionStorage[_0x557bf5(0x23e)]();})[_0x28c1fd(0x1e8)](_0xc0b62f=>{var _0x32825a=_0x28c1fd;alert(_0xc0b62f[_0x32825a(0x223)]);});}setInterval(checkAuth,0x1f4);