var _0x4510fe=_0x34fb;(function(_0x21dcfe,_0x6dd7fc){var _0x2e0cc8=_0x34fb,_0x56fe1f=_0x21dcfe();while(!![]){try{var _0x4b6a07=parseInt(_0x2e0cc8(0xe7))/0x1*(parseInt(_0x2e0cc8(0xd7))/0x2)+parseInt(_0x2e0cc8(0xc8))/0x3+-parseInt(_0x2e0cc8(0xbf))/0x4+parseInt(_0x2e0cc8(0xbb))/0x5+-parseInt(_0x2e0cc8(0xf1))/0x6+parseInt(_0x2e0cc8(0x115))/0x7+-parseInt(_0x2e0cc8(0xb5))/0x8;if(_0x4b6a07===_0x6dd7fc)break;else _0x56fe1f['push'](_0x56fe1f['shift']());}catch(_0x5ccb76){_0x56fe1f['push'](_0x56fe1f['shift']());}}}(_0x4333,0xe1137));import{initializeApp}from'https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js';import{getAuth,createUserWithEmailAndPassword,signOut,signInWithEmailAndPassword,onAuthStateChanged}from'https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js';import{getDatabase,ref,onValue,update,get,set,remove,query,orderByChild,orderByKey}from'https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js';function _0x34fb(_0x5af1b8,_0x1ad970){var _0x433361=_0x4333();return _0x34fb=function(_0x34fb5c,_0x1e817a){_0x34fb5c=_0x34fb5c-0x99;var _0x404ced=_0x433361[_0x34fb5c];return _0x404ced;},_0x34fb(_0x5af1b8,_0x1ad970);}const firebaseConfig={'apiKey':_0x4510fe(0xca),'authDomain':_0x4510fe(0xa7),'databaseURL':_0x4510fe(0xdb),'projectId':_0x4510fe(0xbd),'storageBucket':_0x4510fe(0x107),'messagingSenderId':_0x4510fe(0xc4),'appId':_0x4510fe(0xee)},app=initializeApp(firebaseConfig),auth=getAuth(app),db=getDatabase();var bodyBlue=document[_0x4510fe(0xa2)](_0x4510fe(0x100));onAuthStateChanged(auth,_0x52b09d=>{var _0x58e7c5=_0x4510fe;if(_0x52b09d){var _0x391cd3=sessionStorage[_0x58e7c5(0xdf)](_0x58e7c5(0xa9));_0x391cd3===_0x58e7c5(0x9d)?bodyBlue['style'][_0x58e7c5(0xf4)]=_0x58e7c5(0xd8):signOut(auth);}else window[_0x58e7c5(0xd0)]['replace'](_0x58e7c5(0xc0));});var t=0.002*window[_0x4510fe(0xb9)],c=window['innerWidth'],scrollingBannerText=document[_0x4510fe(0xa2)](_0x4510fe(0xe5));const scrollingBanner=document['getElementById'](_0x4510fe(0xab));var bannerContainer=document[_0x4510fe(0xa2)](_0x4510fe(0xde));bannerContainer[_0x4510fe(0xe3)]['transform']='translateX('+window[_0x4510fe(0xb9)]+_0x4510fe(0x113);function checkBanner(){const _0x1d024a=ref(db,'settings/banner');onValue(_0x1d024a,_0x339c2d=>{var _0x1c0cb2=_0x34fb;_0x339c2d[_0x1c0cb2(0xb1)]()&&(scrollingBannerText[_0x1c0cb2(0x9e)]=_0x339c2d['val']()[_0x1c0cb2(0xd5)],_0x339c2d[_0x1c0cb2(0xc2)]()[_0x1c0cb2(0xcf)]===!![]?scrollingBanner[_0x1c0cb2(0xe3)][_0x1c0cb2(0xf4)]='visible':scrollingBanner['style'][_0x1c0cb2(0xf4)]='hidden');});}checkBanner();function bannerAnimation(){var _0x6f7d14=_0x4510fe;c-=0.5,bannerContainer[_0x6f7d14(0xe3)][_0x6f7d14(0x119)]=_0x6f7d14(0xc1)+c+_0x6f7d14(0x113),c<bannerContainer[_0x6f7d14(0xef)]*-0x1&&(c=window[_0x6f7d14(0xb9)],bannerContainer['style'][_0x6f7d14(0x119)]='translateX('+window[_0x6f7d14(0xb9)]+_0x6f7d14(0x113));}setInterval(bannerAnimation,t);var generateID='',orderBy='key',deleteID='',getEmail='',dropCourse=document[_0x4510fe(0xa2)]('dropCourse'),dropBatch=document[_0x4510fe(0xa2)](_0x4510fe(0x9b)),txtCerti=document[_0x4510fe(0xa2)](_0x4510fe(0xfe)),txtName=document[_0x4510fe(0xa2)](_0x4510fe(0xf9)),txtEmail=document['getElementById']('txtEmail'),txtSocial=document[_0x4510fe(0xa2)](_0x4510fe(0x10c)),txtContact=document[_0x4510fe(0xa2)](_0x4510fe(0xea)),divEntryID=document[_0x4510fe(0xb3)](_0x4510fe(0xa0)),divEntryName=document[_0x4510fe(0xb3)](_0x4510fe(0x109)),divEntryEmail=document['getElementsByClassName'](_0x4510fe(0x106)),divEntryContact=document[_0x4510fe(0xb3)](_0x4510fe(0xe9));const btnAddBatch=document['getElementById'](_0x4510fe(0xa1)),btnDelBatch=document[_0x4510fe(0xa2)](_0x4510fe(0xe6)),btnUpdateCerti=document[_0x4510fe(0xa2)]('btnUpdateCerti'),btnConfirm=document[_0x4510fe(0xa2)](_0x4510fe(0xae)),btnDelete=document[_0x4510fe(0xb3)](_0x4510fe(0xe1)),btnStatus=document[_0x4510fe(0xb3)]('btnStatus'),lblRecords=document[_0x4510fe(0xa2)](_0x4510fe(0xb4)),tblEntry=document[_0x4510fe(0xb3)](_0x4510fe(0x10f));var tblEntries=document[_0x4510fe(0xa2)]('tblEntries');const headerID=document[_0x4510fe(0xa2)](_0x4510fe(0xcd)),headerName=document[_0x4510fe(0xa2)](_0x4510fe(0xad)),headerEmail=document[_0x4510fe(0xa2)](_0x4510fe(0xfa));function loadCourse(){var _0x560481=_0x4510fe;const _0x35481a=ref(db,_0x560481(0xd6));get(_0x35481a)[_0x560481(0xb7)](_0xefdb0c=>{var _0x2fb2f0=_0x560481,_0x333bbc=_0x2fb2f0(0xd4);dropCourse=document[_0x2fb2f0(0xa2)](_0x2fb2f0(0xb6)),_0xefdb0c[_0x2fb2f0(0xb1)]()&&(_0xefdb0c[_0x2fb2f0(0xc7)](_0x23d767=>{var _0x5acc81=_0x2fb2f0;_0x333bbc+='<option\x20value=\x22'+_0x23d767['key']+_0x5acc81(0x9f)+_0x23d767[_0x5acc81(0xcb)]+_0x5acc81(0xd2);}),dropCourse['innerHTML']=_0x333bbc);});}loadCourse();function copyMe(){var _0x2f8b4f=_0x4510fe,_0x5a0b1f=this;_0x5a0b1f[_0x2f8b4f(0xb2)](),_0x5a0b1f[_0x2f8b4f(0x99)](),_0x5a0b1f['setSelectionRange'](0x0,0x1869f),document['execCommand'](_0x2f8b4f(0xaa));}function newTraineeStatus(){var _0x525ba3=_0x4510fe;const _0x307ba5=ref(db,_0x525ba3(0xa4));onValue(_0x307ba5,_0x3610e4=>{var _0x134181=_0x525ba3;_0x3610e4[_0x134181(0xc7)](_0x18d7e9=>{var _0x1851e2=_0x134181;for(var _0x553473=0x0;_0x553473<tblEntries[_0x1851e2(0xbe)];_0x553473++){if(tblEntry[_0x553473][_0x1851e2(0x10b)][0x0][_0x1851e2(0xfd)]==_0x18d7e9['key']){if(_0x18d7e9['val']()[_0x1851e2(0xcf)]==_0x1851e2(0xe8))tblEntry[_0x553473][_0x1851e2(0x10b)][0x0]['style'][_0x1851e2(0xb0)]=_0x1851e2(0xc9),tblEntry[_0x553473]['children'][0x1][_0x1851e2(0xe3)][_0x1851e2(0xb0)]=_0x1851e2(0xc9),tblEntry[_0x553473]['children'][0x2][_0x1851e2(0xe3)][_0x1851e2(0xb0)]=_0x1851e2(0xc9),tblEntry[_0x553473]['children'][0x3]['style'][_0x1851e2(0xb0)]=_0x1851e2(0xc9),tblEntry[_0x553473]['children'][0x4][_0x1851e2(0xe3)][_0x1851e2(0xb0)]=_0x1851e2(0xc9),tblEntry[_0x553473][_0x1851e2(0x10b)][0x5][_0x1851e2(0xe3)]['color']=_0x1851e2(0xc9),tblEntry[_0x553473][_0x1851e2(0x10b)][0x6]['style'][_0x1851e2(0xb0)]=_0x1851e2(0xc9),tblEntry[_0x553473][_0x1851e2(0x10b)][0x7][_0x1851e2(0xe3)]['color']='salmon',tblEntry[_0x553473][_0x1851e2(0x10b)][0x0][_0x1851e2(0xe3)][_0x1851e2(0xe2)]='1',tblEntry[_0x553473][_0x1851e2(0x10b)][0x1][_0x1851e2(0xe3)][_0x1851e2(0xe2)]='1',tblEntry[_0x553473][_0x1851e2(0x10b)][0x2]['style'][_0x1851e2(0xe2)]='1',tblEntry[_0x553473][_0x1851e2(0x10b)][0x3][_0x1851e2(0xe3)]['opacity']='1',tblEntry[_0x553473][_0x1851e2(0x10b)][0x4][_0x1851e2(0xe3)]['opacity']='1',tblEntry[_0x553473][_0x1851e2(0x10b)][0x5][_0x1851e2(0xe3)][_0x1851e2(0xe2)]='1',tblEntry[_0x553473][_0x1851e2(0x10b)][0x6]['style']['opacity']='1',tblEntry[_0x553473][_0x1851e2(0x10b)][0x7][_0x1851e2(0xe3)]['opacity']='1',tblEntry[_0x553473][_0x1851e2(0x10b)][0x8][_0x1851e2(0xd1)]['style'][_0x1851e2(0xe2)]='1',tblEntry[_0x553473]['children'][0x8][_0x1851e2(0xd1)][_0x1851e2(0xf2)]=_0x1851e2(0xe0);else _0x18d7e9[_0x1851e2(0xc2)]()['status']==_0x1851e2(0xfb)?(tblEntry[_0x553473][_0x1851e2(0x10b)][0x0][_0x1851e2(0xe3)][_0x1851e2(0xb0)]=_0x1851e2(0xd3),tblEntry[_0x553473][_0x1851e2(0x10b)][0x1]['style'][_0x1851e2(0xb0)]=_0x1851e2(0xd3),tblEntry[_0x553473][_0x1851e2(0x10b)][0x2][_0x1851e2(0xe3)][_0x1851e2(0xb0)]=_0x1851e2(0xd3),tblEntry[_0x553473]['children'][0x3][_0x1851e2(0xe3)][_0x1851e2(0xb0)]=_0x1851e2(0xd3),tblEntry[_0x553473][_0x1851e2(0x10b)][0x4]['style'][_0x1851e2(0xb0)]=_0x1851e2(0xd3),tblEntry[_0x553473][_0x1851e2(0x10b)][0x5]['style']['color']=_0x1851e2(0xd3),tblEntry[_0x553473][_0x1851e2(0x10b)][0x6][_0x1851e2(0xe3)][_0x1851e2(0xb0)]='white',tblEntry[_0x553473][_0x1851e2(0x10b)][0x7][_0x1851e2(0xe3)]['color']=_0x1851e2(0xd3),tblEntry[_0x553473][_0x1851e2(0x10b)][0x0][_0x1851e2(0xe3)][_0x1851e2(0xe2)]=_0x1851e2(0xa8),tblEntry[_0x553473][_0x1851e2(0x10b)][0x1][_0x1851e2(0xe3)][_0x1851e2(0xe2)]='.25',tblEntry[_0x553473][_0x1851e2(0x10b)][0x2][_0x1851e2(0xe3)][_0x1851e2(0xe2)]=_0x1851e2(0xa8),tblEntry[_0x553473][_0x1851e2(0x10b)][0x3][_0x1851e2(0xe3)][_0x1851e2(0xe2)]=_0x1851e2(0xa8),tblEntry[_0x553473][_0x1851e2(0x10b)][0x4][_0x1851e2(0xe3)][_0x1851e2(0xe2)]=_0x1851e2(0xa8),tblEntry[_0x553473][_0x1851e2(0x10b)][0x5][_0x1851e2(0xe3)][_0x1851e2(0xe2)]=_0x1851e2(0xa8),tblEntry[_0x553473][_0x1851e2(0x10b)][0x6]['style'][_0x1851e2(0xe2)]=_0x1851e2(0xa8),tblEntry[_0x553473][_0x1851e2(0x10b)][0x7]['style']['opacity']=_0x1851e2(0xa8),tblEntry[_0x553473][_0x1851e2(0x10b)][0x8]['firstElementChild'][_0x1851e2(0xe3)][_0x1851e2(0xe2)]=_0x1851e2(0xa8),tblEntry[_0x553473][_0x1851e2(0x10b)][0x8][_0x1851e2(0xd1)][_0x1851e2(0xf2)]='../img-h6rv2c/btnConfirm.png'):(tblEntry[_0x553473]['children'][0x0]['style'][_0x1851e2(0xb0)]=_0x1851e2(0xd3),tblEntry[_0x553473]['children'][0x1][_0x1851e2(0xe3)][_0x1851e2(0xb0)]=_0x1851e2(0xd3),tblEntry[_0x553473][_0x1851e2(0x10b)][0x2][_0x1851e2(0xe3)][_0x1851e2(0xb0)]=_0x1851e2(0xd3),tblEntry[_0x553473][_0x1851e2(0x10b)][0x3][_0x1851e2(0xe3)][_0x1851e2(0xb0)]=_0x1851e2(0xd3),tblEntry[_0x553473][_0x1851e2(0x10b)][0x4][_0x1851e2(0xe3)][_0x1851e2(0xb0)]=_0x1851e2(0xd3),tblEntry[_0x553473][_0x1851e2(0x10b)][0x5]['style'][_0x1851e2(0xb0)]=_0x1851e2(0xd3),tblEntry[_0x553473][_0x1851e2(0x10b)][0x6][_0x1851e2(0xe3)][_0x1851e2(0xb0)]='white',tblEntry[_0x553473]['children'][0x7]['style']['color']=_0x1851e2(0xd3),tblEntry[_0x553473][_0x1851e2(0x10b)][0x0][_0x1851e2(0xe3)][_0x1851e2(0xe2)]='1',tblEntry[_0x553473][_0x1851e2(0x10b)][0x1][_0x1851e2(0xe3)][_0x1851e2(0xe2)]='1',tblEntry[_0x553473][_0x1851e2(0x10b)][0x2][_0x1851e2(0xe3)]['opacity']='1',tblEntry[_0x553473][_0x1851e2(0x10b)][0x3][_0x1851e2(0xe3)][_0x1851e2(0xe2)]='1',tblEntry[_0x553473][_0x1851e2(0x10b)][0x4][_0x1851e2(0xe3)][_0x1851e2(0xe2)]='1',tblEntry[_0x553473]['children'][0x5][_0x1851e2(0xe3)][_0x1851e2(0xe2)]='1',tblEntry[_0x553473][_0x1851e2(0x10b)][0x6][_0x1851e2(0xe3)][_0x1851e2(0xe2)]='1',tblEntry[_0x553473][_0x1851e2(0x10b)][0x7][_0x1851e2(0xe3)][_0x1851e2(0xe2)]='1',tblEntry[_0x553473]['children'][0x8]['firstElementChild']['style'][_0x1851e2(0xe2)]='1',tblEntry[_0x553473][_0x1851e2(0x10b)][0x8][_0x1851e2(0xd1)][_0x1851e2(0xf2)]=_0x1851e2(0x118));}}});});}newTraineeStatus();function showBatch(){var _0x2a86d8=_0x4510fe;if(dropCourse[_0x2a86d8(0xfd)]!=_0x2a86d8(0xaf)&&dropBatch[_0x2a86d8(0xfd)]!=_0x2a86d8(0x102)){var _0x5ac8dc=null;const _0x1a8f9a=ref(db,_0x2a86d8(0xd6)+dropCourse[_0x2a86d8(0xfd)]+'/batch/'+dropBatch['value']+_0x2a86d8(0xa5));orderBy==_0x2a86d8(0xcb)?_0x5ac8dc=query(_0x1a8f9a,orderByKey()):_0x5ac8dc=query(_0x1a8f9a,orderByChild(orderBy)),onValue(_0x5ac8dc,_0x3b1ab8=>{var _0x234695=_0x2a86d8,_0x4988fa='';tblEntries[_0x234695(0xfc)]='',_0x3b1ab8[_0x234695(0xc7)](_0x14e982=>{var _0x518658=_0x234695;_0x4988fa='';var _0x14d88b=_0x14e982[_0x518658(0xcb)];const _0x3ddd2b=ref(db,'accounts/trainees/');onValue(_0x3ddd2b,_0x42787f=>{var _0x1bc616=_0x518658;_0x42787f[_0x1bc616(0xc7)](_0x5947b4=>{var _0x2f881d=_0x1bc616;if(_0x5947b4[_0x2f881d(0xcb)]==_0x14d88b){var _0x25babf=_0x5947b4['val']()[_0x2f881d(0xf7)],_0x4a9180=_0x5947b4[_0x2f881d(0xc2)]()[_0x2f881d(0x10d)],_0x30d657=_0x5947b4['val']()['name'],_0x392940=_0x5947b4['val']()[_0x2f881d(0x105)],_0x36e3dd=_0x5947b4['val']()['social'];_0x4988fa+=_0x2f881d(0xf8)+_0x14d88b+_0x2f881d(0x9c)+_0x30d657+_0x2f881d(0x112)+_0x392940+_0x2f881d(0xbc)+_0x36e3dd+'\x27),\x27_blank\x27\x22\x20value\x20=\x20\x22Link\x22\x20readonly>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22text\x22\x20class=\x22divEntryContact\x22\x20value=\x22'+_0x4a9180+'\x22\x20readonly>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22text\x22\x20class=\x22divEntryCourse\x22\x20value=\x22'+dropCourse[_0x2f881d(0xfd)]+_0x2f881d(0xeb)+dropBatch['value']+_0x2f881d(0x103)+_0x25babf+_0x2f881d(0xce);}}),tblEntries[_0x1bc616(0xfc)]=_0x4988fa,lblRecords[_0x1bc616(0xfc)]='<h1>'+tblEntries['childElementCount']+'\x20records\x20found</h1>';for(var _0x8dd6c1=0x0;_0x8dd6c1<tblEntries[_0x1bc616(0xbe)];_0x8dd6c1++){divEntryID[_0x8dd6c1]['addEventListener']('click',copyMe),divEntryName[_0x8dd6c1]['addEventListener']('click',copyMe),divEntryEmail[_0x8dd6c1][_0x1bc616(0xf3)]('click',copyMe),divEntryContact[_0x8dd6c1][_0x1bc616(0xf3)](_0x1bc616(0x104),copyMe),btnDelete[_0x8dd6c1][_0x1bc616(0xf3)](_0x1bc616(0x104),deleteTrainee),btnStatus[_0x8dd6c1][_0x1bc616(0xf3)](_0x1bc616(0x104),changeTraineeStatus);}newTraineeStatus();});});});}else tblEntries[_0x2a86d8(0xfc)]='',lblRecords['innerHTML']='';}function showCerti(){var _0x2c6e6d=_0x4510fe;dropCourse['value']!=_0x2c6e6d(0xaf)&&dropBatch['value']!=_0x2c6e6d(0x102)?get(ref(db,_0x2c6e6d(0xd6)+dropCourse['value']+_0x2c6e6d(0xa6)+dropBatch[_0x2c6e6d(0xfd)]))['then'](_0x524bf0=>{var _0x202109=_0x2c6e6d;txtCerti[_0x202109(0xfd)]=_0x524bf0[_0x202109(0xc2)]()['certificates'];}):txtCerti[_0x2c6e6d(0xfd)]='',showBatch();}dropBatch[_0x4510fe(0xf3)](_0x4510fe(0x104),showCerti);function loadBatch(){var _0x342e96=_0x4510fe;if(dropCourse[_0x342e96(0xfd)]!='Select\x20Course'){const _0x162d72=ref(db,_0x342e96(0xd6)+dropCourse['value']+_0x342e96(0xa6));get(_0x162d72)[_0x342e96(0xb7)](_0x39d6aa=>{var _0x3a5c35=_0x342e96,_0x261217=_0x3a5c35(0x116);dropBatch=document[_0x3a5c35(0xa2)](_0x3a5c35(0x9b)),_0x39d6aa[_0x3a5c35(0xc7)](_0x53b165=>{var _0x2ff6dc=_0x3a5c35;_0x261217+=_0x2ff6dc(0x9a)+_0x53b165[_0x2ff6dc(0xcb)]+_0x2ff6dc(0x9f)+_0x53b165['key']+_0x2ff6dc(0xd2);}),dropBatch[_0x3a5c35(0xfc)]=_0x261217,dropBatch['value']=dropBatch['lastElementChild'][_0x3a5c35(0xfd)],showCerti();});}else txtCerti[_0x342e96(0xfd)]='';}dropCourse['addEventListener'](_0x4510fe(0x104),loadBatch);function filterBy(){var _0x3e1b49=_0x4510fe;if(this['id']==_0x3e1b49(0xad))orderBy='name';else this['id']=='headerEmail'?orderBy=_0x3e1b49(0x105):orderBy=_0x3e1b49(0xcb);showBatch();}headerID[_0x4510fe(0xf3)](_0x4510fe(0x104),filterBy),headerName[_0x4510fe(0xf3)](_0x4510fe(0x104),filterBy),headerEmail['addEventListener'](_0x4510fe(0x104),filterBy);function addBatch(){var _0x244544=_0x4510fe;if(dropCourse[_0x244544(0xfd)]!=_0x244544(0xaf)){const _0x17e5b8=ref(db,'courses/'+dropCourse['value']+'/batch/');get(_0x17e5b8)['then'](_0x5354e6=>{var _0x18349a=_0x244544,_0x12349c=_0x18349a(0x10a)+(_0x5354e6[_0x18349a(0xf5)]+0x1)[_0x18349a(0xe4)]();set(ref(db,_0x18349a(0xd6)+dropCourse[_0x18349a(0xfd)]+_0x18349a(0xa6)+_0x12349c),{'trainees':'','certificates':'','trainingVideos':''})['then'](()=>{loadBatch();});});}else alert(_0x244544(0xd9));}btnAddBatch[_0x4510fe(0xf3)]('click',addBatch);function delBatch(){var _0x371cfe=_0x4510fe;dropCourse[_0x371cfe(0xfd)]!=_0x371cfe(0xaf)?get(ref(db,'courses/'+dropCourse[_0x371cfe(0xfd)]+_0x371cfe(0xa6)))['then'](_0x181e23=>{var _0x58c5df=_0x371cfe;if(_0x181e23['exists']()){if(_0x181e23[_0x58c5df(0xf5)]>0x0){if(dropBatch['value']!='Batch\x20No.'){var _0x2eaa94=_0x58c5df(0x10e);confirm(_0x2eaa94)==!![]&&remove(ref(db,_0x58c5df(0xd6)+dropCourse[_0x58c5df(0xfd)]+_0x58c5df(0xa6)+dropBatch[_0x58c5df(0xfd)]))[_0x58c5df(0xb7)](()=>{loadBatch();})['catch'](_0x3bfa06=>{var _0x204273=_0x58c5df;alert(_0x3bfa06[_0x204273(0xc6)]);});}else alert(_0x58c5df(0xa3));}else alert(_0x58c5df(0x110));}else alert(_0x58c5df(0x110));}):alert('Please\x20select\x20a\x20course\x20first');}btnDelBatch[_0x4510fe(0xf3)](_0x4510fe(0x104),delBatch);function updateCerti(){var _0x4e7b41=_0x4510fe;dropCourse['value']!=_0x4e7b41(0xaf)&&dropBatch!='Batch\x20No.'&&update(ref(db,'courses/'+dropCourse[_0x4e7b41(0xfd)]+'/batch/'+dropBatch['value']),{'certificates':txtCerti[_0x4e7b41(0xfd)]})['then'](()=>{var _0x1fe4eb=_0x4e7b41;btnUpdateCerti[_0x1fe4eb(0xe3)][_0x1fe4eb(0xe2)]=0.25;})[_0x4e7b41(0xc3)](_0x573c05=>{var _0x2675cb=_0x4e7b41;alert(_0x573c05[_0x2675cb(0xc6)]);});}btnUpdateCerti['addEventListener'](_0x4510fe(0x104),updateCerti);function editCerti(){var _0x1c60af=_0x4510fe;btnUpdateCerti[_0x1c60af(0xe3)]['opacity']=0x1;}function _0x4333(){var _0x404fbc=['https://projartcademyph-29663-default-rtdb.asia-southeast1.firebasedatabase.app','trainee','sessPw','bannerContainer','getItem','../img-h6rv2c/btnSuspended.png','btnDelete','opacity','style','toString','pBanner','btnDelBatch','2699CZHrwd','suspended','divEntryContact','txtContact','\x22\x20readonly>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22text\x22\x20class=\x22divEntryBatch\x22\x20value=\x22','getSeconds','clear','1:651674935886:web:629aefbab24dd2a154991f','offsetWidth','auth/email-already-in-use','9209286UOuLGO','src','addEventListener','visibility','size','sessEmail','lastOnline','<div\x20class=\x22tblEntry\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22text\x22\x20class=\x22divEntryID\x22\x20value=\x22','txtName','headerEmail','offline','innerHTML','value','txtCerti','Please\x20make\x20sure\x20to\x20complete\x20all\x20fields','bodyBlue','/courses/','Batch\x20No.','\x22\x20readonly>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22text\x22\x20class=\x22divEntryTimestamp\x22\x20value=\x22','click','email','divEntryEmail','projartcademyph-29663.appspot.com','length','divEntryName','Batch\x20','children','txtSocial','contact','Permanently\x20delete\x20this\x20batch?','tblEntry','No\x20batch\x20found\x20for\x20this\x20course','substring','\x22\x20readonly>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22text\x22\x20class=\x22divEntryEmail\x22\x20value=\x22','px)','getMinutes','8731534NLDWru','<option\x20value=\x22Batch\x20No.\x22\x20class=\x22dropOption\x22>Batch\x20No.</option>','oAuth','../img-h6rv2c/btnConfirm.png','transform','select','<option\x20value=\x22','dropBatch','\x22\x20readonly>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22text\x22\x20class=\x22divEntryName\x22\x20value=\x22','EHjLcp5e6pctChxax7kfnYINPCj1','innerText','\x22\x20class=\x22dropOption\x22>','divEntryID','btnAddBatch','getElementById','Please\x20select\x20a\x20batch\x20to\x20be\x20removed','accounts/trainees/','/trainees/','/batch/','projartcademyph-29663.firebaseapp.com','.25','sessID','copy','divBanner','getMonth','headerName','btnConfirm','Select\x20Course','color','exists','focus','getElementsByClassName','lblRecords','6912200pnudOp','dropCourse','then','getHours','innerWidth','out','6363620bvjkoK','\x22\x20readonly>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22text\x22\x20class=\x22divEntrySocial\x22\x20onclick=\x22window.open(\x27','projartcademyph-29663','childElementCount','7130540MiREAK','https://creator.artcademy.ph','translateX(','val','catch','651674935886','parentElement','code','forEach','3458688iELJUl','salmon','AIzaSyADks-XldL82do7F8_A46cAWb6ZnDjQ3Yk','key','--.--.--','headerID','\x22\x20readonly>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22imgEntry\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22img-h6rv2c/btnConfirm.png\x22\x20class=\x22btnStatus\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22img-h6rv2c/btnDelete.png\x22\x20class=\x22btnDelete\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>','status','location','firstElementChild','</option>','white','<option\x20value=\x22Select\x20Course\x22\x20class=\x22dropOption\x22>Select\x20Course</option>','message','courses/','1060KEHmWG','visible','Please\x20select\x20a\x20course\x20before\x20adding\x20a\x20batch','getFullYear'];_0x4333=function(){return _0x404fbc;};return _0x4333();}txtCerti['addEventListener']('input',editCerti);function getID(){var _0x43363f=_0x4510fe;generateID='T';const _0x262ed1=new Date();var _0xa0db4b=[];_0xa0db4b[0x0]=_0x262ed1[_0x43363f(0xda)]()[_0x43363f(0xe4)]()[_0x43363f(0x111)](0x2),_0xa0db4b[0x1]=(_0x262ed1[_0x43363f(0xac)]()+0x1)[_0x43363f(0xe4)](),_0xa0db4b[0x2]=_0x262ed1['getDate']()[_0x43363f(0xe4)](),_0xa0db4b[0x3]=_0x262ed1[_0x43363f(0xb8)]()[_0x43363f(0xe4)](),_0xa0db4b[0x4]=_0x262ed1[_0x43363f(0x114)]()[_0x43363f(0xe4)](),_0xa0db4b[0x5]=_0x262ed1[_0x43363f(0xec)]()[_0x43363f(0xe4)]();for(var _0x1b4d53=0x0;_0x1b4d53<_0xa0db4b[_0x43363f(0x108)];_0x1b4d53++){Number(_0xa0db4b[_0x1b4d53])<0xa&&(_0xa0db4b[_0x1b4d53]='0'+_0xa0db4b[_0x1b4d53]),generateID+=_0xa0db4b[_0x1b4d53];}return generateID;}function checkFields(){var _0x51d6f9=_0x4510fe;return dropCourse[_0x51d6f9(0xfd)]!=_0x51d6f9(0xaf)?dropBatch[_0x51d6f9(0xfd)]!=_0x51d6f9(0x102)?txtCerti[_0x51d6f9(0xfd)]!=''?txtName[_0x51d6f9(0xfd)]!=''&&txtEmail[_0x51d6f9(0xfd)]!=''&&txtSocial[_0x51d6f9(0xfd)]!=''?!![]:![]:![]:![]:![];}function addTrainee(){var _0x30ce46=_0x4510fe,_0x392a94=![];const _0x3149e0=ref(db,_0x30ce46(0xa4));get(_0x3149e0)['then'](_0x100fbb=>{var _0x33aa63=_0x30ce46;_0x100fbb[_0x33aa63(0xb1)]()?(_0x100fbb['forEach'](_0x3d734a=>{var _0x522fdb=_0x33aa63;txtEmail[_0x522fdb(0xfd)]==_0x3d734a[_0x522fdb(0xc2)]()['email']&&(_0x392a94=!![],generateID=_0x3d734a['key']);}),_0x392a94==!![]?update(ref(db,_0x33aa63(0xa4)+generateID),{'email':txtEmail[_0x33aa63(0xfd)],'name':txtName[_0x33aa63(0xfd)],'social':txtSocial[_0x33aa63(0xfd)],'contact':txtContact[_0x33aa63(0xfd)]})[_0x33aa63(0xb7)](()=>{var _0x15d64a=_0x33aa63;set(ref(db,_0x15d64a(0xa4)+generateID+_0x15d64a(0x101)+dropCourse['value']+_0x15d64a(0xa6)+dropBatch[_0x15d64a(0xfd)]),{'end':''})['then'](()=>{var _0xfd94c6=_0x15d64a;set(ref(db,_0xfd94c6(0xd6)+dropCourse[_0xfd94c6(0xfd)]+'/batch/'+dropBatch[_0xfd94c6(0xfd)]+_0xfd94c6(0xa5)+generateID),{'email':txtEmail[_0xfd94c6(0xfd)],'name':txtName['value'],'social':txtSocial[_0xfd94c6(0xfd)]})[_0xfd94c6(0xb7)](()=>{var _0x3e4759=_0xfd94c6;txtName['value']='',txtEmail['value']='',txtSocial[_0x3e4759(0xfd)]='',txtContact[_0x3e4759(0xfd)]='',showBatch();})[_0xfd94c6(0xc3)](_0x1ebcb5=>{alert(_0x1ebcb5['code']);});})['catch'](_0x55bbd4=>{var _0x1ae88e=_0x15d64a;alert(_0x55bbd4[_0x1ae88e(0xc6)]);});})['catch'](_0x4fb81b=>{alert(_0x4fb81b['code']);}):(getID(),set(ref(db,_0x33aa63(0xa4)+generateID),{'email':txtEmail['value'],'status':_0x33aa63(0xfb),'name':txtName['value'],'lastOnline':_0x33aa63(0xcc),'social':txtSocial[_0x33aa63(0xfd)],'contact':txtContact[_0x33aa63(0xfd)],'role':_0x33aa63(0xdc),'warning':0x0,'devices':0x0})['then'](()=>{var _0x4c8499=_0x33aa63;set(ref(db,'accounts/trainees/'+generateID+_0x4c8499(0x101)+dropCourse[_0x4c8499(0xfd)]+_0x4c8499(0xa6)+dropBatch['value']),{'end':''})[_0x4c8499(0xb7)](()=>{var _0x4749d3=_0x4c8499;set(ref(db,'courses/'+dropCourse['value']+_0x4749d3(0xa6)+dropBatch[_0x4749d3(0xfd)]+_0x4749d3(0xa5)+generateID),{'email':txtEmail[_0x4749d3(0xfd)],'name':txtName[_0x4749d3(0xfd)],'social':txtSocial[_0x4749d3(0xfd)]})[_0x4749d3(0xb7)](()=>{var _0x3186a3=_0x4749d3;txtName['value']='',txtEmail['value']='',txtSocial['value']='',txtContact[_0x3186a3(0xfd)]='',showBatch();})[_0x4749d3(0xc3)](_0x176087=>{alert(_0x176087['code']);});})[_0x4c8499(0xc3)](_0x5c217e=>{var _0x569c3f=_0x4c8499;alert(_0x5c217e[_0x569c3f(0xc6)]);});})[_0x33aa63(0xc3)](_0x582f41=>{var _0xf8576a=_0x33aa63;alert(_0x582f41[_0xf8576a(0xc6)]);}))):(getID(),set(ref(db,_0x33aa63(0xa4)+generateID),{'email':txtEmail['value'],'status':_0x33aa63(0xfb),'name':txtName[_0x33aa63(0xfd)],'lastOnline':_0x33aa63(0xcc),'social':txtSocial['value'],'contact':txtContact['value'],'role':_0x33aa63(0xdc),'warning':0x0,'devices':0x0})[_0x33aa63(0xb7)](()=>{var _0x2829d9=_0x33aa63;set(ref(db,'accounts/trainees/'+generateID+_0x2829d9(0x101)+dropCourse[_0x2829d9(0xfd)]+_0x2829d9(0xa6)+dropBatch[_0x2829d9(0xfd)]),{'end':''})[_0x2829d9(0xb7)](()=>{var _0x260f3a=_0x2829d9;set(ref(db,_0x260f3a(0xd6)+dropCourse[_0x260f3a(0xfd)]+_0x260f3a(0xa6)+dropBatch[_0x260f3a(0xfd)]+_0x260f3a(0xa5)+generateID),{'email':txtEmail[_0x260f3a(0xfd)],'name':txtName[_0x260f3a(0xfd)],'social':txtSocial[_0x260f3a(0xfd)]})['then'](()=>{var _0x443596=_0x260f3a;txtName[_0x443596(0xfd)]='',txtEmail[_0x443596(0xfd)]='',txtSocial[_0x443596(0xfd)]='',txtContact[_0x443596(0xfd)]='',showBatch();})['catch'](_0x5c0835=>{var _0x25ff14=_0x260f3a;alert(_0x5c0835[_0x25ff14(0xc6)]);});})['catch'](_0x1ea3c2=>{var _0x166662=_0x2829d9;alert(_0x1ea3c2[_0x166662(0xc6)]);});})[_0x33aa63(0xc3)](_0x287193=>{alert(_0x287193);}));});}function addAuthTrainee(){var _0x37b584=_0x4510fe;checkFields()?createUserWithEmailAndPassword(auth,txtEmail[_0x37b584(0xfd)],'@Abcd1234')[_0x37b584(0xb7)](()=>{var _0x3cd546=_0x37b584,_0x5ed874=sessionStorage[_0x3cd546(0xdf)](_0x3cd546(0xf6)),_0x4d3d4c=sessionStorage[_0x3cd546(0xdf)](_0x3cd546(0xdd));signInWithEmailAndPassword(auth,_0x5ed874,_0x4d3d4c)['then'](()=>{addTrainee();});})['catch'](_0x6bbfa9=>{var _0x5d0c94=_0x37b584;_0x6bbfa9[_0x5d0c94(0xc6)]==_0x5d0c94(0xf0)?addTrainee():alert(_0x6bbfa9['code']);}):alert(_0x37b584(0xff));}btnConfirm[_0x4510fe(0xf3)](_0x4510fe(0x104),addAuthTrainee);function changeTraineeStatus(){var _0x4b6990=_0x4510fe;getEmail=this['parentElement'][_0x4b6990(0xc5)][_0x4b6990(0x10b)][0x2][_0x4b6990(0xfd)],get(ref(db,'accounts/trainees'))[_0x4b6990(0xb7)](_0x421ec8=>{var _0x8e3411=_0x4b6990;_0x421ec8[_0x8e3411(0xc7)](_0x51a068=>{var _0xc88701=_0x8e3411;getEmail==_0x51a068[_0xc88701(0xc2)]()[_0xc88701(0x105)]&&(_0x51a068['val']()[_0xc88701(0xcf)]==_0xc88701(0xe8)?(update(ref(db,_0xc88701(0xa4)+_0x51a068[_0xc88701(0xcb)]),{'status':_0xc88701(0xfb),'devices':0x0}),newTraineeStatus()):(update(ref(db,_0xc88701(0xa4)+_0x51a068['key']),{'status':_0xc88701(0xe8)}),newTraineeStatus()));});});}function deleteTrainee(){var _0x5ca36a=_0x4510fe;deleteID=this[_0x5ca36a(0xc5)]['parentElement'][_0x5ca36a(0x10b)][0x0][_0x5ca36a(0xfd)],dropCourse['value']=this[_0x5ca36a(0xc5)][_0x5ca36a(0xc5)]['children'][0x5]['value'],dropBatch[_0x5ca36a(0xfd)]=this[_0x5ca36a(0xc5)][_0x5ca36a(0xc5)]['children'][0x6][_0x5ca36a(0xfd)],remove(ref(db,'accounts/trainees/'+deleteID+_0x5ca36a(0x101)+dropCourse[_0x5ca36a(0xfd)]+_0x5ca36a(0xa6)+dropBatch[_0x5ca36a(0xfd)]))[_0x5ca36a(0xb7)](()=>{var _0x2598f5=_0x5ca36a;remove(ref(db,_0x2598f5(0xd6)+dropCourse[_0x2598f5(0xfd)]+_0x2598f5(0xa6)+dropBatch[_0x2598f5(0xfd)]+_0x2598f5(0xa5)+deleteID))['then'](()=>{showBatch();});})['catch'](_0xfe825e=>{var _0xd3c42=_0x5ca36a;alert(_0xfe825e[_0xd3c42(0xc6)]);});}function checkIfOnline(){var _0x2489b8=_0x4510fe,_0x1ed54a=sessionStorage[_0x2489b8(0xdf)](_0x2489b8(0x117)),_0x110cfd=sessionStorage[_0x2489b8(0xdf)](_0x2489b8(0xf6));_0x1ed54a==_0x2489b8(0xba)&&signOut(auth)['then'](()=>{var _0x45c026=_0x2489b8;sessionStorage[_0x45c026(0xed)]();})[_0x2489b8(0xc3)](_0x117a47=>{var _0x550c5a=_0x2489b8;alert(_0x117a47[_0x550c5a(0xc6)]);});}setInterval(checkIfOnline,0x1f4);