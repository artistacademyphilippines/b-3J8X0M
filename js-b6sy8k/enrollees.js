var _0x1fbc99=_0x5393;(function(_0x4d67bc,_0x7b54f0){var _0x4644b4=_0x5393,_0x1453ea=_0x4d67bc();while(!![]){try{var _0x4c9af5=-parseInt(_0x4644b4(0x1e5))/0x1*(parseInt(_0x4644b4(0x256))/0x2)+parseInt(_0x4644b4(0x20f))/0x3*(parseInt(_0x4644b4(0x24e))/0x4)+-parseInt(_0x4644b4(0x21f))/0x5+-parseInt(_0x4644b4(0x214))/0x6*(parseInt(_0x4644b4(0x1dd))/0x7)+-parseInt(_0x4644b4(0x255))/0x8+-parseInt(_0x4644b4(0x220))/0x9+parseInt(_0x4644b4(0x22b))/0xa;if(_0x4c9af5===_0x7b54f0)break;else _0x1453ea['push'](_0x1453ea['shift']());}catch(_0x1e30ed){_0x1453ea['push'](_0x1453ea['shift']());}}}(_0x452b,0x79d1b));import{initializeApp}from'https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js';import{getAuth,createUserWithEmailAndPassword,signOut,signInWithEmailAndPassword,onAuthStateChanged}from'https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js';import{getDatabase,ref,onValue,update,get,set,remove,query,orderByChild,orderByKey}from'https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js';const firebaseConfig={'apiKey':_0x1fbc99(0x1de),'authDomain':'projartcademyph-29663.firebaseapp.com','databaseURL':_0x1fbc99(0x22e),'projectId':_0x1fbc99(0x225),'storageBucket':_0x1fbc99(0x21a),'messagingSenderId':'651674935886','appId':_0x1fbc99(0x1fe)},app=initializeApp(firebaseConfig),auth=getAuth(app),db=getDatabase();var bodyBlue=document[_0x1fbc99(0x21e)](_0x1fbc99(0x211));onAuthStateChanged(auth,_0x1ef73c=>{var _0x2365cf=_0x1fbc99;if(_0x1ef73c){var _0x559302=sessionStorage[_0x2365cf(0x219)](_0x2365cf(0x24b));_0x559302===_0x2365cf(0x1ea)?bodyBlue[_0x2365cf(0x22d)][_0x2365cf(0x20e)]='visible':signOut(auth);}else window['location']['replace']('https://creator.artcademy.ph');});var t=0.002*window[_0x1fbc99(0x24d)],c=window['innerWidth'],scrollingBannerText=document[_0x1fbc99(0x21e)](_0x1fbc99(0x212));const scrollingBanner=document[_0x1fbc99(0x21e)](_0x1fbc99(0x239));var bannerContainer=document[_0x1fbc99(0x21e)](_0x1fbc99(0x1fb));bannerContainer['style'][_0x1fbc99(0x218)]=_0x1fbc99(0x1e1)+window['innerWidth']+_0x1fbc99(0x1f0);function checkBanner(){const _0x1d35d8=ref(db,'settings/banner');onValue(_0x1d35d8,_0x234560=>{var _0x51a3a1=_0x5393;_0x234560[_0x51a3a1(0x22a)]()&&(scrollingBannerText[_0x51a3a1(0x23c)]=_0x234560['val']()[_0x51a3a1(0x245)],_0x234560[_0x51a3a1(0x1e2)]()[_0x51a3a1(0x237)]===!![]?scrollingBanner['style'][_0x51a3a1(0x20e)]='visible':scrollingBanner['style'][_0x51a3a1(0x20e)]=_0x51a3a1(0x24c));});}checkBanner();function bannerAnimation(){var _0x2605ac=_0x1fbc99;c-=0.5,bannerContainer[_0x2605ac(0x22d)]['transform']=_0x2605ac(0x1e1)+c+'px)',c<bannerContainer['offsetWidth']*-0x1&&(c=window[_0x2605ac(0x24d)],bannerContainer[_0x2605ac(0x22d)]['transform']=_0x2605ac(0x1e1)+window[_0x2605ac(0x24d)]+_0x2605ac(0x1f0));}setInterval(bannerAnimation,t);var generateID='',orderBy=_0x1fbc99(0x1e8),deleteID='',getEmail='',dropCourse=document[_0x1fbc99(0x21e)]('dropCourse'),dropBatch=document[_0x1fbc99(0x21e)](_0x1fbc99(0x240)),txtCerti=document[_0x1fbc99(0x21e)](_0x1fbc99(0x1db)),txtName=document[_0x1fbc99(0x21e)]('txtName'),txtEmail=document[_0x1fbc99(0x21e)]('txtEmail'),txtSocial=document['getElementById'](_0x1fbc99(0x251)),txtContact=document[_0x1fbc99(0x21e)]('txtContact'),divEntryID=document[_0x1fbc99(0x215)]('divEntryID'),divEntryName=document['getElementsByClassName']('divEntryName'),divEntryEmail=document[_0x1fbc99(0x215)](_0x1fbc99(0x231)),divEntryContact=document['getElementsByClassName'](_0x1fbc99(0x238));const btnAddBatch=document[_0x1fbc99(0x21e)](_0x1fbc99(0x202)),btnDelBatch=document['getElementById'](_0x1fbc99(0x207)),btnUpdateCerti=document[_0x1fbc99(0x21e)](_0x1fbc99(0x1ef)),btnConfirm=document[_0x1fbc99(0x21e)]('btnConfirm'),btnDelete=document[_0x1fbc99(0x215)](_0x1fbc99(0x244)),btnStatus=document[_0x1fbc99(0x215)](_0x1fbc99(0x1f9)),lblRecords=document[_0x1fbc99(0x21e)](_0x1fbc99(0x250)),tblEntry=document[_0x1fbc99(0x215)](_0x1fbc99(0x1ec));var tblEntries=document[_0x1fbc99(0x21e)](_0x1fbc99(0x204));const headerID=document[_0x1fbc99(0x21e)](_0x1fbc99(0x226)),headerName=document['getElementById'](_0x1fbc99(0x24f)),headerEmail=document['getElementById'](_0x1fbc99(0x248));function loadCourse(){var _0x4518be=_0x1fbc99;const _0x2a986a=ref(db,_0x4518be(0x224));get(_0x2a986a)['then'](_0x1796e0=>{var _0x9eac86=_0x4518be,_0x2f406b=_0x9eac86(0x1eb);dropCourse=document[_0x9eac86(0x21e)]('dropCourse'),_0x1796e0[_0x9eac86(0x22a)]()&&(_0x1796e0[_0x9eac86(0x1ed)](_0x2399ae=>{var _0x9a2520=_0x9eac86;_0x2f406b+=_0x9a2520(0x1dc)+_0x2399ae['key']+_0x9a2520(0x23a)+_0x2399ae['key']+_0x9a2520(0x1e7);}),dropCourse[_0x9eac86(0x232)]=_0x2f406b);});}loadCourse();function _0x5393(_0x376fb7,_0x145668){var _0x452b4a=_0x452b();return _0x5393=function(_0x5393aa,_0x41aa74){_0x5393aa=_0x5393aa-0x1d9;var _0x563ddb=_0x452b4a[_0x5393aa];return _0x563ddb;},_0x5393(_0x376fb7,_0x145668);}function copyMe(){var _0x523631=_0x1fbc99,_0x4f8007=this;_0x4f8007[_0x523631(0x1fc)](),_0x4f8007[_0x523631(0x201)](),_0x4f8007[_0x523631(0x20b)](0x0,0x1869f),document[_0x523631(0x246)]('copy');}function newTraineeStatus(){var _0x3b84bc=_0x1fbc99;const _0x2a34cb=ref(db,_0x3b84bc(0x253));onValue(_0x2a34cb,_0xe41cd0=>{var _0x1fc26a=_0x3b84bc;_0xe41cd0[_0x1fc26a(0x1ed)](_0xad8fa9=>{var _0x49b3e4=_0x1fc26a;for(var _0x29928d=0x0;_0x29928d<tblEntries['childElementCount'];_0x29928d++){if(tblEntry[_0x29928d][_0x49b3e4(0x1f5)][0x0][_0x49b3e4(0x223)]==_0xad8fa9[_0x49b3e4(0x1e8)]){if(_0xad8fa9[_0x49b3e4(0x1e2)]()['status']==_0x49b3e4(0x20c))tblEntry[_0x29928d][_0x49b3e4(0x1f5)][0x0][_0x49b3e4(0x22d)]['color']='salmon',tblEntry[_0x29928d]['children'][0x1]['style'][_0x49b3e4(0x1f1)]=_0x49b3e4(0x230),tblEntry[_0x29928d][_0x49b3e4(0x1f5)][0x2][_0x49b3e4(0x22d)][_0x49b3e4(0x1f1)]=_0x49b3e4(0x230),tblEntry[_0x29928d][_0x49b3e4(0x1f5)][0x3][_0x49b3e4(0x22d)][_0x49b3e4(0x1f1)]=_0x49b3e4(0x230),tblEntry[_0x29928d][_0x49b3e4(0x1f5)][0x4][_0x49b3e4(0x22d)][_0x49b3e4(0x1f1)]=_0x49b3e4(0x230),tblEntry[_0x29928d][_0x49b3e4(0x1f5)][0x5][_0x49b3e4(0x22d)]['color']=_0x49b3e4(0x230),tblEntry[_0x29928d][_0x49b3e4(0x1f5)][0x6][_0x49b3e4(0x22d)][_0x49b3e4(0x1f1)]=_0x49b3e4(0x230),tblEntry[_0x29928d][_0x49b3e4(0x1f5)][0x7]['style'][_0x49b3e4(0x1f1)]=_0x49b3e4(0x230),tblEntry[_0x29928d][_0x49b3e4(0x1f5)][0x0]['style'][_0x49b3e4(0x222)]='1',tblEntry[_0x29928d][_0x49b3e4(0x1f5)][0x1][_0x49b3e4(0x22d)][_0x49b3e4(0x222)]='1',tblEntry[_0x29928d]['children'][0x2][_0x49b3e4(0x22d)][_0x49b3e4(0x222)]='1',tblEntry[_0x29928d]['children'][0x3]['style'][_0x49b3e4(0x222)]='1',tblEntry[_0x29928d][_0x49b3e4(0x1f5)][0x4][_0x49b3e4(0x22d)][_0x49b3e4(0x222)]='1',tblEntry[_0x29928d][_0x49b3e4(0x1f5)][0x5][_0x49b3e4(0x22d)][_0x49b3e4(0x222)]='1',tblEntry[_0x29928d][_0x49b3e4(0x1f5)][0x6][_0x49b3e4(0x22d)][_0x49b3e4(0x222)]='1',tblEntry[_0x29928d][_0x49b3e4(0x1f5)][0x7][_0x49b3e4(0x22d)][_0x49b3e4(0x222)]='1',tblEntry[_0x29928d][_0x49b3e4(0x1f5)][0x8]['firstElementChild'][_0x49b3e4(0x22d)][_0x49b3e4(0x222)]='1',tblEntry[_0x29928d]['children'][0x8][_0x49b3e4(0x1ee)][_0x49b3e4(0x23d)]=_0x49b3e4(0x227);else _0xad8fa9[_0x49b3e4(0x1e2)]()[_0x49b3e4(0x237)]==_0x49b3e4(0x205)?(tblEntry[_0x29928d][_0x49b3e4(0x1f5)][0x0][_0x49b3e4(0x22d)][_0x49b3e4(0x1f1)]='white',tblEntry[_0x29928d][_0x49b3e4(0x1f5)][0x1][_0x49b3e4(0x22d)][_0x49b3e4(0x1f1)]='white',tblEntry[_0x29928d]['children'][0x2][_0x49b3e4(0x22d)][_0x49b3e4(0x1f1)]=_0x49b3e4(0x1e0),tblEntry[_0x29928d][_0x49b3e4(0x1f5)][0x3][_0x49b3e4(0x22d)][_0x49b3e4(0x1f1)]=_0x49b3e4(0x1e0),tblEntry[_0x29928d][_0x49b3e4(0x1f5)][0x4][_0x49b3e4(0x22d)][_0x49b3e4(0x1f1)]=_0x49b3e4(0x1e0),tblEntry[_0x29928d][_0x49b3e4(0x1f5)][0x5]['style'][_0x49b3e4(0x1f1)]=_0x49b3e4(0x1e0),tblEntry[_0x29928d][_0x49b3e4(0x1f5)][0x6][_0x49b3e4(0x22d)][_0x49b3e4(0x1f1)]='white',tblEntry[_0x29928d]['children'][0x7]['style'][_0x49b3e4(0x1f1)]='white',tblEntry[_0x29928d]['children'][0x0][_0x49b3e4(0x22d)][_0x49b3e4(0x222)]=_0x49b3e4(0x21c),tblEntry[_0x29928d][_0x49b3e4(0x1f5)][0x1]['style'][_0x49b3e4(0x222)]=_0x49b3e4(0x21c),tblEntry[_0x29928d][_0x49b3e4(0x1f5)][0x2][_0x49b3e4(0x22d)][_0x49b3e4(0x222)]='.25',tblEntry[_0x29928d][_0x49b3e4(0x1f5)][0x3]['style']['opacity']='.25',tblEntry[_0x29928d]['children'][0x4][_0x49b3e4(0x22d)][_0x49b3e4(0x222)]=_0x49b3e4(0x21c),tblEntry[_0x29928d][_0x49b3e4(0x1f5)][0x5]['style'][_0x49b3e4(0x222)]=_0x49b3e4(0x21c),tblEntry[_0x29928d][_0x49b3e4(0x1f5)][0x6]['style'][_0x49b3e4(0x222)]=_0x49b3e4(0x21c),tblEntry[_0x29928d][_0x49b3e4(0x1f5)][0x7][_0x49b3e4(0x22d)]['opacity']=_0x49b3e4(0x21c),tblEntry[_0x29928d][_0x49b3e4(0x1f5)][0x8]['firstElementChild'][_0x49b3e4(0x22d)]['opacity']=_0x49b3e4(0x21c),tblEntry[_0x29928d][_0x49b3e4(0x1f5)][0x8][_0x49b3e4(0x1ee)][_0x49b3e4(0x23d)]=_0x49b3e4(0x257)):(tblEntry[_0x29928d]['children'][0x0]['style'][_0x49b3e4(0x1f1)]=_0x49b3e4(0x1e0),tblEntry[_0x29928d]['children'][0x1]['style'][_0x49b3e4(0x1f1)]='white',tblEntry[_0x29928d][_0x49b3e4(0x1f5)][0x2][_0x49b3e4(0x22d)][_0x49b3e4(0x1f1)]='white',tblEntry[_0x29928d][_0x49b3e4(0x1f5)][0x3]['style'][_0x49b3e4(0x1f1)]=_0x49b3e4(0x1e0),tblEntry[_0x29928d]['children'][0x4][_0x49b3e4(0x22d)][_0x49b3e4(0x1f1)]=_0x49b3e4(0x1e0),tblEntry[_0x29928d][_0x49b3e4(0x1f5)][0x5][_0x49b3e4(0x22d)][_0x49b3e4(0x1f1)]=_0x49b3e4(0x1e0),tblEntry[_0x29928d]['children'][0x6][_0x49b3e4(0x22d)]['color']=_0x49b3e4(0x1e0),tblEntry[_0x29928d][_0x49b3e4(0x1f5)][0x7][_0x49b3e4(0x22d)]['color']=_0x49b3e4(0x1e0),tblEntry[_0x29928d]['children'][0x0][_0x49b3e4(0x22d)][_0x49b3e4(0x222)]='1',tblEntry[_0x29928d][_0x49b3e4(0x1f5)][0x1][_0x49b3e4(0x22d)]['opacity']='1',tblEntry[_0x29928d]['children'][0x2][_0x49b3e4(0x22d)][_0x49b3e4(0x222)]='1',tblEntry[_0x29928d]['children'][0x3][_0x49b3e4(0x22d)][_0x49b3e4(0x222)]='1',tblEntry[_0x29928d]['children'][0x4][_0x49b3e4(0x22d)][_0x49b3e4(0x222)]='1',tblEntry[_0x29928d][_0x49b3e4(0x1f5)][0x5]['style']['opacity']='1',tblEntry[_0x29928d][_0x49b3e4(0x1f5)][0x6][_0x49b3e4(0x22d)][_0x49b3e4(0x222)]='1',tblEntry[_0x29928d][_0x49b3e4(0x1f5)][0x7][_0x49b3e4(0x22d)][_0x49b3e4(0x222)]='1',tblEntry[_0x29928d]['children'][0x8][_0x49b3e4(0x1ee)][_0x49b3e4(0x22d)][_0x49b3e4(0x222)]='1',tblEntry[_0x29928d]['children'][0x8][_0x49b3e4(0x1ee)][_0x49b3e4(0x23d)]=_0x49b3e4(0x257));}}});});}newTraineeStatus();function showBatch(){var _0x16bd84=_0x1fbc99;if(dropCourse[_0x16bd84(0x223)]!=_0x16bd84(0x1da)&&dropBatch[_0x16bd84(0x223)]!=_0x16bd84(0x233)){var _0x3e0b25=null;const _0x19401d=ref(db,_0x16bd84(0x224)+dropCourse[_0x16bd84(0x223)]+_0x16bd84(0x1e4)+dropBatch[_0x16bd84(0x223)]+'/trainees/');orderBy=='key'?_0x3e0b25=query(_0x19401d,orderByKey()):_0x3e0b25=query(_0x19401d,orderByChild(orderBy)),onValue(_0x3e0b25,_0x148632=>{var _0x3c0eff=_0x16bd84,_0x191472='';tblEntries[_0x3c0eff(0x232)]='',_0x148632[_0x3c0eff(0x1ed)](_0x48b47c=>{var _0x456c46=_0x3c0eff,_0x263ff1=_0x48b47c[_0x456c46(0x1e8)];const _0x2a4916=ref(db,_0x456c46(0x253));onValue(_0x2a4916,_0x4236d9=>{_0x191472='',_0x4236d9['forEach'](_0x336a54=>{var _0x145c93=_0x5393;if(_0x336a54[_0x145c93(0x1e8)]==_0x263ff1){var _0x267c6f=_0x336a54['val']()[_0x145c93(0x1f8)],_0x177e97=_0x336a54[_0x145c93(0x1e2)]()['contact'],_0x38bf35=_0x336a54[_0x145c93(0x1e2)]()[_0x145c93(0x22c)],_0x48f051=_0x336a54[_0x145c93(0x1e2)]()[_0x145c93(0x1fd)],_0x3e5f13=_0x336a54[_0x145c93(0x1e2)]()[_0x145c93(0x23f)];_0x191472+=_0x145c93(0x221)+_0x263ff1+_0x145c93(0x1d9)+_0x38bf35+'\x22\x20readonly>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22text\x22\x20class=\x22divEntryEmail\x22\x20value=\x22'+_0x48f051+_0x145c93(0x20d)+_0x3e5f13+'\x27),\x27_blank\x27\x22\x20value\x20=\x20\x22Link\x22\x20readonly>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22text\x22\x20class=\x22divEntryContact\x22\x20value=\x22'+_0x177e97+_0x145c93(0x1f4)+dropCourse[_0x145c93(0x223)]+_0x145c93(0x217)+dropBatch[_0x145c93(0x223)]+_0x145c93(0x1e9)+_0x267c6f+_0x145c93(0x1f6),tblEntries[_0x145c93(0x232)]=_0x191472,lblRecords[_0x145c93(0x232)]=_0x145c93(0x23b)+tblEntries[_0x145c93(0x229)]+_0x145c93(0x247);for(var _0x4431f2=0x0;_0x4431f2<tblEntries[_0x145c93(0x229)];_0x4431f2++){divEntryID[_0x4431f2][_0x145c93(0x200)](_0x145c93(0x209),copyMe),divEntryName[_0x4431f2][_0x145c93(0x200)](_0x145c93(0x209),copyMe),divEntryEmail[_0x4431f2][_0x145c93(0x200)](_0x145c93(0x209),copyMe),divEntryContact[_0x4431f2][_0x145c93(0x200)](_0x145c93(0x209),copyMe),btnDelete[_0x4431f2][_0x145c93(0x200)](_0x145c93(0x209),deleteTrainee),btnStatus[_0x4431f2]['addEventListener'](_0x145c93(0x209),changeTraineeStatus);}newTraineeStatus();}});});});});}else tblEntries[_0x16bd84(0x232)]='',lblRecords['innerHTML']='';}function showCerti(){var _0x49ebba=_0x1fbc99;dropCourse[_0x49ebba(0x223)]!=_0x49ebba(0x1da)&&dropBatch[_0x49ebba(0x223)]!=_0x49ebba(0x233)?get(ref(db,_0x49ebba(0x224)+dropCourse[_0x49ebba(0x223)]+'/batch/'+dropBatch[_0x49ebba(0x223)]))[_0x49ebba(0x234)](_0x1738c4=>{var _0x1ebf60=_0x49ebba;txtCerti[_0x1ebf60(0x223)]=_0x1738c4[_0x1ebf60(0x1e2)]()[_0x1ebf60(0x243)];}):txtCerti[_0x49ebba(0x223)]='',showBatch();}dropBatch['addEventListener'](_0x1fbc99(0x209),showCerti);function loadBatch(){var _0x1c2a52=_0x1fbc99;if(dropCourse[_0x1c2a52(0x223)]!=_0x1c2a52(0x1da)){const _0x402cc4=ref(db,_0x1c2a52(0x224)+dropCourse[_0x1c2a52(0x223)]+'/batch/');get(_0x402cc4)[_0x1c2a52(0x234)](_0x3f4544=>{var _0x372bac=_0x1c2a52,_0x13d5c5=_0x372bac(0x242);dropBatch=document[_0x372bac(0x21e)](_0x372bac(0x240)),_0x3f4544[_0x372bac(0x1ed)](_0x5e82de=>{var _0x6205e9=_0x372bac;_0x13d5c5+=_0x6205e9(0x1dc)+_0x5e82de[_0x6205e9(0x1e8)]+_0x6205e9(0x23a)+_0x5e82de[_0x6205e9(0x1e8)]+_0x6205e9(0x1e7);}),dropBatch[_0x372bac(0x232)]=_0x13d5c5,dropBatch[_0x372bac(0x223)]=dropBatch[_0x372bac(0x24a)][_0x372bac(0x223)],showCerti();});}else txtCerti[_0x1c2a52(0x223)]='';}dropCourse[_0x1fbc99(0x200)]('click',loadBatch);function filterBy(){var _0x34d6f1=_0x1fbc99;if(this['id']==_0x34d6f1(0x24f))orderBy=_0x34d6f1(0x22c);else this['id']==_0x34d6f1(0x248)?orderBy=_0x34d6f1(0x1fd):orderBy=_0x34d6f1(0x1e8);showBatch();}headerID[_0x1fbc99(0x200)](_0x1fbc99(0x209),filterBy),headerName['addEventListener'](_0x1fbc99(0x209),filterBy),headerEmail[_0x1fbc99(0x200)](_0x1fbc99(0x209),filterBy);function addBatch(){var _0xe9a8df=_0x1fbc99;if(dropCourse[_0xe9a8df(0x223)]!=_0xe9a8df(0x1da)){const _0x888708=ref(db,'courses/'+dropCourse[_0xe9a8df(0x223)]+_0xe9a8df(0x1e4));get(_0x888708)['then'](_0x2d6fce=>{var _0x42d06d=_0xe9a8df,_0x559c76=_0x42d06d(0x23e)+(_0x2d6fce['size']+0x1)[_0x42d06d(0x206)]();set(ref(db,_0x42d06d(0x224)+dropCourse[_0x42d06d(0x223)]+_0x42d06d(0x1e4)+_0x559c76),{'trainees':'','certificates':'','trainingVideos':''})[_0x42d06d(0x234)](()=>{loadBatch();});});}else alert(_0xe9a8df(0x20a));}btnAddBatch[_0x1fbc99(0x200)](_0x1fbc99(0x209),addBatch);function delBatch(){var _0x4aae3f=_0x1fbc99;dropCourse['value']!=_0x4aae3f(0x1da)?get(ref(db,'courses/'+dropCourse[_0x4aae3f(0x223)]+'/batch/'))[_0x4aae3f(0x234)](_0x7b2c2f=>{var _0xaf4cbe=_0x4aae3f;if(_0x7b2c2f[_0xaf4cbe(0x22a)]()){if(_0x7b2c2f['size']>0x0){if(dropBatch[_0xaf4cbe(0x223)]!=_0xaf4cbe(0x233)){var _0x1c1618=_0xaf4cbe(0x235);confirm(_0x1c1618)==!![]&&remove(ref(db,'courses/'+dropCourse[_0xaf4cbe(0x223)]+_0xaf4cbe(0x1e4)+dropBatch[_0xaf4cbe(0x223)]))[_0xaf4cbe(0x234)](()=>{loadBatch();})[_0xaf4cbe(0x203)](_0x49fcd2=>{var _0x2ac0e1=_0xaf4cbe;alert(_0x49fcd2[_0x2ac0e1(0x216)]);});}else alert('Please\x20select\x20a\x20batch\x20to\x20be\x20removed');}else alert(_0xaf4cbe(0x1ff));}else alert(_0xaf4cbe(0x1ff));}):alert(_0x4aae3f(0x210));}btnDelBatch[_0x1fbc99(0x200)](_0x1fbc99(0x209),delBatch);function updateCerti(){var _0x50270c=_0x1fbc99;dropCourse['value']!=_0x50270c(0x1da)&&dropBatch!=_0x50270c(0x233)&&update(ref(db,_0x50270c(0x224)+dropCourse[_0x50270c(0x223)]+'/batch/'+dropBatch[_0x50270c(0x223)]),{'certificates':txtCerti[_0x50270c(0x223)]})[_0x50270c(0x234)](()=>{var _0x760f6c=_0x50270c;btnUpdateCerti['style'][_0x760f6c(0x222)]=0.25;})[_0x50270c(0x203)](_0x564037=>{alert(_0x564037['code']);});}btnUpdateCerti[_0x1fbc99(0x200)]('click',updateCerti);function editCerti(){var _0x406ba2=_0x1fbc99;btnUpdateCerti[_0x406ba2(0x22d)]['opacity']=0x1;}txtCerti[_0x1fbc99(0x200)](_0x1fbc99(0x249),editCerti);function getID(){var _0x22fe13=_0x1fbc99;generateID='T';const _0x46624c=new Date();var _0x27e3b7=[];_0x27e3b7[0x0]=_0x46624c[_0x22fe13(0x1f7)]()[_0x22fe13(0x206)]()['substring'](0x2),_0x27e3b7[0x1]=(_0x46624c[_0x22fe13(0x254)]()+0x1)[_0x22fe13(0x206)](),_0x27e3b7[0x2]=_0x46624c[_0x22fe13(0x1f2)]()[_0x22fe13(0x206)](),_0x27e3b7[0x3]=_0x46624c['getHours']()['toString'](),_0x27e3b7[0x4]=_0x46624c['getMinutes']()[_0x22fe13(0x206)](),_0x27e3b7[0x5]=_0x46624c['getSeconds']()[_0x22fe13(0x206)]();for(var _0x43a1c5=0x0;_0x43a1c5<_0x27e3b7[_0x22fe13(0x252)];_0x43a1c5++){Number(_0x27e3b7[_0x43a1c5])<0xa&&(_0x27e3b7[_0x43a1c5]='0'+_0x27e3b7[_0x43a1c5]),generateID+=_0x27e3b7[_0x43a1c5];}return generateID;}function checkFields(){var _0x1d7cf0=_0x1fbc99;return dropCourse['value']!=_0x1d7cf0(0x1da)?dropBatch[_0x1d7cf0(0x223)]!=_0x1d7cf0(0x233)?txtCerti['value']!=''?txtName['value']!=''&&txtEmail[_0x1d7cf0(0x223)]!=''&&txtSocial[_0x1d7cf0(0x223)]!=''?!![]:![]:![]:![]:![];}function addTrainee(){var _0x1a4c7f=_0x1fbc99,_0x3c4812=![];const _0x6d6a2b=ref(db,_0x1a4c7f(0x253));get(_0x6d6a2b)['then'](_0x57732c=>{var _0x1cdcc9=_0x1a4c7f;_0x57732c[_0x1cdcc9(0x22a)]()?(_0x57732c[_0x1cdcc9(0x1ed)](_0x403e2c=>{var _0x47fb93=_0x1cdcc9;txtEmail[_0x47fb93(0x223)]==_0x403e2c[_0x47fb93(0x1e2)]()[_0x47fb93(0x1fd)]&&(_0x3c4812=!![],generateID=_0x403e2c[_0x47fb93(0x1e8)]);}),_0x3c4812==!![]?update(ref(db,'accounts/trainees/'+generateID),{'email':txtEmail[_0x1cdcc9(0x223)],'name':txtName[_0x1cdcc9(0x223)],'social':txtSocial[_0x1cdcc9(0x223)],'contact':txtContact[_0x1cdcc9(0x223)]})[_0x1cdcc9(0x234)](()=>{var _0x1283fd=_0x1cdcc9;set(ref(db,_0x1283fd(0x253)+generateID+'/courses/'+dropCourse[_0x1283fd(0x223)]+_0x1283fd(0x1e4)+dropBatch[_0x1283fd(0x223)]),{'end':''})[_0x1283fd(0x234)](()=>{var _0x41b1b6=_0x1283fd;set(ref(db,'courses/'+dropCourse[_0x41b1b6(0x223)]+_0x41b1b6(0x1e4)+dropBatch[_0x41b1b6(0x223)]+_0x41b1b6(0x1f3)+generateID),{'email':txtEmail['value'],'name':txtName['value'],'social':txtSocial['value']})['then'](()=>{var _0x42f3d3=_0x41b1b6;txtName[_0x42f3d3(0x223)]='',txtEmail[_0x42f3d3(0x223)]='',txtSocial[_0x42f3d3(0x223)]='',txtContact['value']='',showBatch();})[_0x41b1b6(0x203)](_0x2e4cf1=>{var _0x2dab99=_0x41b1b6;alert(_0x2e4cf1[_0x2dab99(0x216)]);});})[_0x1283fd(0x203)](_0xdf14da=>{var _0x8bbe42=_0x1283fd;alert(_0xdf14da[_0x8bbe42(0x216)]);});})[_0x1cdcc9(0x203)](_0x325d77=>{var _0x14e924=_0x1cdcc9;alert(_0x325d77[_0x14e924(0x216)]);}):(getID(),set(ref(db,_0x1cdcc9(0x253)+generateID),{'email':txtEmail[_0x1cdcc9(0x223)],'status':_0x1cdcc9(0x205),'name':txtName['value'],'lastOnline':_0x1cdcc9(0x241),'social':txtSocial['value'],'contact':txtContact['value'],'role':'trainee','warning':0x0,'devices':0x0})[_0x1cdcc9(0x234)](()=>{var _0x530b82=_0x1cdcc9;set(ref(db,_0x530b82(0x253)+generateID+'/courses/'+dropCourse[_0x530b82(0x223)]+_0x530b82(0x1e4)+dropBatch[_0x530b82(0x223)]),{'end':''})[_0x530b82(0x234)](()=>{var _0x3dd2bd=_0x530b82;set(ref(db,_0x3dd2bd(0x224)+dropCourse[_0x3dd2bd(0x223)]+_0x3dd2bd(0x1e4)+dropBatch[_0x3dd2bd(0x223)]+_0x3dd2bd(0x1f3)+generateID),{'email':txtEmail[_0x3dd2bd(0x223)],'name':txtName['value'],'social':txtSocial[_0x3dd2bd(0x223)]})['then'](()=>{var _0x4ce146=_0x3dd2bd;txtName[_0x4ce146(0x223)]='',txtEmail['value']='',txtSocial[_0x4ce146(0x223)]='',txtContact['value']='',showBatch();})[_0x3dd2bd(0x203)](_0x129c12=>{var _0x12dbf5=_0x3dd2bd;alert(_0x129c12[_0x12dbf5(0x216)]);});})[_0x530b82(0x203)](_0x5ad4cb=>{var _0x4b2c1d=_0x530b82;alert(_0x5ad4cb[_0x4b2c1d(0x216)]);});})['catch'](_0x464a84=>{alert(_0x464a84['code']);}))):(getID(),set(ref(db,_0x1cdcc9(0x253)+generateID),{'email':txtEmail['value'],'status':_0x1cdcc9(0x205),'name':txtName[_0x1cdcc9(0x223)],'lastOnline':'--.--.--','social':txtSocial[_0x1cdcc9(0x223)],'contact':txtContact['value'],'role':_0x1cdcc9(0x22f),'warning':0x0,'devices':0x0})['then'](()=>{var _0x22e537=_0x1cdcc9;set(ref(db,'accounts/trainees/'+generateID+'/courses/'+dropCourse['value']+_0x22e537(0x1e4)+dropBatch[_0x22e537(0x223)]),{'end':''})[_0x22e537(0x234)](()=>{var _0x4dd479=_0x22e537;set(ref(db,_0x4dd479(0x224)+dropCourse[_0x4dd479(0x223)]+_0x4dd479(0x1e4)+dropBatch['value']+'/trainees/'+generateID),{'email':txtEmail['value'],'name':txtName[_0x4dd479(0x223)],'social':txtSocial[_0x4dd479(0x223)]})[_0x4dd479(0x234)](()=>{var _0x316e71=_0x4dd479;txtName[_0x316e71(0x223)]='',txtEmail['value']='',txtSocial['value']='',txtContact[_0x316e71(0x223)]='',showBatch();})['catch'](_0x49fcce=>{var _0x2bc673=_0x4dd479;alert(_0x49fcce[_0x2bc673(0x216)]);});})['catch'](_0xdcc801=>{var _0x26fa5e=_0x22e537;alert(_0xdcc801[_0x26fa5e(0x216)]);});})[_0x1cdcc9(0x203)](_0x3fa8fa=>{alert(_0x3fa8fa);}));});}function addAuthTrainee(){var _0x2904fd=_0x1fbc99;checkFields()?createUserWithEmailAndPassword(auth,txtEmail[_0x2904fd(0x223)],_0x2904fd(0x236))[_0x2904fd(0x234)](()=>{var _0x44e58b=_0x2904fd,_0x5708c9=sessionStorage[_0x44e58b(0x219)](_0x44e58b(0x213)),_0x383dfa=sessionStorage[_0x44e58b(0x219)](_0x44e58b(0x1e6));signInWithEmailAndPassword(auth,_0x5708c9,_0x383dfa)[_0x44e58b(0x234)](()=>{addTrainee();});})['catch'](_0x58126b=>{var _0x2d191d=_0x2904fd;_0x58126b[_0x2d191d(0x216)]==_0x2d191d(0x1fa)?addTrainee():alert(_0x58126b[_0x2d191d(0x216)]);}):alert(_0x2904fd(0x1e3));}function _0x452b(){var _0x3554f6=['accounts/trainees/','getMonth','4949144mFUTgH','282358aNeARs','../img-h6rv2c/btnConfirm.png','\x22\x20readonly>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22text\x22\x20class=\x22divEntryName\x22\x20value=\x22','Select\x20Course','txtCerti','<option\x20value=\x22','28AtSzrq','AIzaSyADks-XldL82do7F8_A46cAWb6ZnDjQ3Yk','/courses/','white','translateX(','val','Please\x20make\x20sure\x20to\x20complete\x20all\x20fields','/batch/','7AmWBgE','sessPw','</option>','key','\x22\x20readonly>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22text\x22\x20class=\x22divEntryTimestamp\x22\x20value=\x22','XribZIy3mORl28B3A7S3qOdv2Bs1','<option\x20value=\x22Select\x20Course\x22\x20class=\x22dropOption\x22>Select\x20Course</option>','tblEntry','forEach','firstElementChild','btnUpdateCerti','px)','color','getDate','/trainees/','\x22\x20readonly>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22text\x22\x20class=\x22divEntryCourse\x22\x20value=\x22','children','\x22\x20readonly>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22imgEntry\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22img-h6rv2c/btnConfirm.png\x22\x20class=\x22btnStatus\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22img-h6rv2c/btnDelete.png\x22\x20class=\x22btnDelete\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>','getFullYear','lastOnline','btnStatus','auth/email-already-in-use','bannerContainer','focus','email','1:651674935886:web:629aefbab24dd2a154991f','No\x20batch\x20found\x20for\x20this\x20course','addEventListener','select','btnAddBatch','catch','tblEntries','offline','toString','btnDelBatch','accounts/trainees','click','Please\x20select\x20a\x20course\x20before\x20adding\x20a\x20batch','setSelectionRange','suspended','\x22\x20readonly>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22text\x22\x20class=\x22divEntrySocial\x22\x20onclick=\x22window.open(\x27','visibility','1346964VEAqWf','Please\x20select\x20a\x20course\x20first','bodyBlue','pBanner','sessEmail','433962naHcGy','getElementsByClassName','code','\x22\x20readonly>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22text\x22\x20class=\x22divEntryBatch\x22\x20value=\x22','transform','getItem','projartcademyph-29663.appspot.com','parentElement','.25','out','getElementById','2553570SrVoIG','6893739zHillH','<div\x20class=\x22tblEntry\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22text\x22\x20class=\x22divEntryID\x22\x20value=\x22','opacity','value','courses/','projartcademyph-29663','headerID','../img-h6rv2c/btnSuspended.png','clear','childElementCount','exists','27738840IlXqeJ','name','style','https://projartcademyph-29663-default-rtdb.asia-southeast1.firebasedatabase.app','trainee','salmon','divEntryEmail','innerHTML','Batch\x20No.','then','Permanently\x20delete\x20this\x20batch?','@Abcd1234','status','divEntryContact','divBanner','\x22\x20class=\x22dropOption\x22>','<h1>','innerText','src','Batch\x20','social','dropBatch','--.--.--','<option\x20value=\x22Batch\x20No.\x22\x20class=\x22dropOption\x22>Batch\x20No.</option>','certificates','btnDelete','message','execCommand','\x20records\x20found</h1>','headerEmail','input','lastElementChild','sessID','hidden','innerWidth','8xngagw','headerName','lblRecords','txtSocial','length'];_0x452b=function(){return _0x3554f6;};return _0x452b();}btnConfirm['addEventListener'](_0x1fbc99(0x209),addAuthTrainee);function changeTraineeStatus(){var _0x5d640f=_0x1fbc99;getEmail=this[_0x5d640f(0x21b)]['parentElement'][_0x5d640f(0x1f5)][0x2]['value'],get(ref(db,_0x5d640f(0x208)))['then'](_0x5d96b4=>{var _0x16ec69=_0x5d640f;_0x5d96b4[_0x16ec69(0x1ed)](_0x222284=>{var _0x436ba9=_0x16ec69;getEmail==_0x222284[_0x436ba9(0x1e2)]()[_0x436ba9(0x1fd)]&&(_0x222284[_0x436ba9(0x1e2)]()['status']==_0x436ba9(0x20c)?(update(ref(db,_0x436ba9(0x253)+_0x222284[_0x436ba9(0x1e8)]),{'status':'offline','devices':0x0}),newTraineeStatus()):(update(ref(db,_0x436ba9(0x253)+_0x222284['key']),{'status':_0x436ba9(0x20c)}),newTraineeStatus()));});});}function deleteTrainee(){var _0x3af406=_0x1fbc99;deleteID=this['parentElement'][_0x3af406(0x21b)][_0x3af406(0x1f5)][0x0][_0x3af406(0x223)],dropCourse[_0x3af406(0x223)]=this[_0x3af406(0x21b)]['parentElement'][_0x3af406(0x1f5)][0x5][_0x3af406(0x223)],dropBatch[_0x3af406(0x223)]=this[_0x3af406(0x21b)][_0x3af406(0x21b)][_0x3af406(0x1f5)][0x6][_0x3af406(0x223)],remove(ref(db,_0x3af406(0x253)+deleteID+_0x3af406(0x1df)+dropCourse['value']+_0x3af406(0x1e4)+dropBatch[_0x3af406(0x223)]))[_0x3af406(0x234)](()=>{var _0x5b35e7=_0x3af406;remove(ref(db,'courses/'+dropCourse[_0x5b35e7(0x223)]+'/batch/'+dropBatch[_0x5b35e7(0x223)]+_0x5b35e7(0x1f3)+deleteID))[_0x5b35e7(0x234)](()=>{showBatch();});})[_0x3af406(0x203)](_0x1e9ae1=>{var _0x8e250e=_0x3af406;alert(_0x1e9ae1[_0x8e250e(0x216)]);});}function checkIfOnline(){var _0x4463c9=_0x1fbc99,_0x545b19=sessionStorage[_0x4463c9(0x219)]('oAuth'),_0x47bac6=sessionStorage['getItem'](_0x4463c9(0x213));_0x545b19==_0x4463c9(0x21d)&&signOut(auth)[_0x4463c9(0x234)](()=>{var _0x55a67f=_0x4463c9;sessionStorage[_0x55a67f(0x228)]();})[_0x4463c9(0x203)](_0x3b767b=>{alert(_0x3b767b['code']);});}setInterval(checkIfOnline,0x1f4);