var _0x481978=_0x12b3;(function(_0x323f88,_0x50f066){var _0x28e4dc=_0x12b3,_0x1ac7e7=_0x323f88();while(!![]){try{var _0x28e446=parseInt(_0x28e4dc(0x105))/0x1*(parseInt(_0x28e4dc(0x114))/0x2)+parseInt(_0x28e4dc(0x10c))/0x3*(-parseInt(_0x28e4dc(0x11b))/0x4)+parseInt(_0x28e4dc(0x11f))/0x5*(-parseInt(_0x28e4dc(0x123))/0x6)+parseInt(_0x28e4dc(0x122))/0x7+-parseInt(_0x28e4dc(0x11a))/0x8+-parseInt(_0x28e4dc(0x103))/0x9+parseInt(_0x28e4dc(0x116))/0xa*(parseInt(_0x28e4dc(0x107))/0xb);if(_0x28e446===_0x50f066)break;else _0x1ac7e7['push'](_0x1ac7e7['shift']());}catch(_0xf167fc){_0x1ac7e7['push'](_0x1ac7e7['shift']());}}}(_0x27fe,0xc3a1f));import{initializeApp}from'https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js';import{getAuth,sendPasswordResetEmail}from'https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js';const firebaseConfig={'apiKey':_0x481978(0x106),'authDomain':_0x481978(0x10f),'databaseURL':_0x481978(0x118),'projectId':'projartcademyph-29663','storageBucket':_0x481978(0x100),'messagingSenderId':_0x481978(0x10b),'appId':_0x481978(0x10d)},app=initializeApp(firebaseConfig),auth=getAuth(app);var bodyBlue=document['getElementById'](_0x481978(0x11e));bodyBlue['style'][_0x481978(0x11c)]=_0x481978(0x111);var loginEmail=null,alertMsg=document['querySelector'](_0x481978(0x108)),btnConfirm=document[_0x481978(0x102)](_0x481978(0x10a));function _0x27fe(){var _0x1768bc=['242380JHVzaR','innerText','https://projartcademyph-29663-default-rtdb.asia-southeast1.firebasedatabase.app','opacity','7302768knOvnO','4KVHJSs','visibility','click','bodyBlue','5BxlSzK','Password\x20reset\x20was\x20sent\x20to\x20your\x20email','catch','7291102pJVYoP','7506426uLOoOz','projartcademyph-29663.appspot.com','addEventListener','querySelector','6732927YciWvy','https://creator.artcademy.ph/','723526WgdYTC','AIzaSyADks-XldL82do7F8_A46cAWb6ZnDjQ3Yk','1265jaPKzU','#alertMessage','color','#btnConfirm','651674935886','2517453HPnpzh','1:651674935886:web:629aefbab24dd2a154991f','value','projartcademyph-29663.firebaseapp.com','location','visible','#txtEmail','Account\x20does\x20not\x20exist\x20or\x20has\x20been\x20removed','2WVPprg','style'];_0x27fe=function(){return _0x1768bc;};return _0x27fe();}const resetPw=async()=>{var _0x3ce8bb=_0x481978;loginEmail=document['querySelector'](_0x3ce8bb(0x112))[_0x3ce8bb(0x10e)],sendPasswordResetEmail(auth,loginEmail)['then'](()=>{var _0x4dc65b=_0x3ce8bb;alertMsg['innerText']=_0x4dc65b(0x120),alertMsg[_0x4dc65b(0x115)][_0x4dc65b(0x109)]='Aquamarine',alertMsg[_0x4dc65b(0x115)][_0x4dc65b(0x119)]='1',document['querySelector'](_0x4dc65b(0x112))['value']='',setInterval(reLogin,0x1388);})[_0x3ce8bb(0x121)](()=>{var _0x32fb3c=_0x3ce8bb;alertMsg[_0x32fb3c(0x117)]=_0x32fb3c(0x113),alertMsg['style']['opacity']='1';});};function _0x12b3(_0x173907,_0x5527d4){var _0x27feb8=_0x27fe();return _0x12b3=function(_0x12b303,_0x6d2798){_0x12b303=_0x12b303-0x100;var _0x226a22=_0x27feb8[_0x12b303];return _0x226a22;},_0x12b3(_0x173907,_0x5527d4);}btnConfirm[_0x481978(0x101)](_0x481978(0x11d),resetPw);function reLogin(){var _0x8cf757=_0x481978;window[_0x8cf757(0x110)]['replace'](_0x8cf757(0x104));}