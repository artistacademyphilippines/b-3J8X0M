
//------------------------Firebase--------------------
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
  import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
  import { getDatabase, ref, onValue, set} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-database.js";

  const firebaseConfig = {
    apiKey: "AIzaSyADks-XldL82do7F8_A46cAWb6ZnDjQ3Yk",
    authDomain: "projartcademyph-29663.firebaseapp.com",
    databaseURL: "https://projartcademyph-29663-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "projartcademyph-29663",
    storageBucket: "projartcademyph-29663.appspot.com",
    messagingSenderId: "651674935886",
    appId: "1:651674935886:web:629aefbab24dd2a154991f"
};

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getDatabase();

//--------------------------------Banner--------------------------------------

var t = .002*window.innerWidth;
var c = window.innerWidth;
var scrollingBannerText = document.getElementById('pBanner');
const scrollingBanner = document.getElementById('divBanner');
var bannerContainer = document.getElementById('bannerContainer');
bannerContainer.style.transform = "translateX(" + window.innerWidth +"px)";

//----------------------------Common Banner codes---------------------
function checkBanner() {
    
    const path = ref(db, 'settings/banner');
    onValue(path, (snapshot) => {
        if(snapshot.exists()) {

            scrollingBannerText.innerText = snapshot.val().message;
            if(snapshot.val().status === true) {
                scrollingBanner.style.visibility = "visible";
            }
            else {
                scrollingBanner.style.visibility = "hidden";
            }
        }
    });
}
checkBanner();

function bannerAnimation() {
    c -= .5;
    bannerContainer.style.transform = "translateX(" + c +"px)";
    if(c < (bannerContainer.offsetWidth*-1)) {
        c = window.innerWidth;
        bannerContainer.style.transform = "translateX(" + window.innerWidth +"px)";
    }
}
setInterval(bannerAnimation, t);

  //---------------------Functions---------------------
  var loginEmail = document.querySelector('#txtEmail');
  var loginPw = document.querySelector('#txtPw');
  const btnLogin = document.getElementById('btnLogin');
  var alertMsg = document.querySelector('#alertMessage');
  
  //--check first if user is currently logged in

var bodyBlue = document.getElementById('bodyBlue');

onAuthStateChanged(auth, (user) => {

  if (user) {

    if(user.uid == "XribZIy3mORl28B3A7S3qOdv2Bs1") {

      window.location.replace('https://creator.artcademy.ph/dashboard');

    }

    else {

        var getIP, getCountry, getISP, getEmail, getUID, getTime, getDate = "";

        fetch("https://ipapi.co/json")
        .then(respo => respo.json())
        .then(data => getData(data));

        function getData(data) {
              
          const d = new Date();
          var year = d.getFullYear();
          var month = d.getMonth() + 1;
          var date = d.getDate();
          var hour = d.getHours();
          var mins = d.getMinutes();
          var secs = d.getSeconds();

          getDate = month + "-" + date + "-" + year;
          getTime = hour + ":" + mins + ":" + secs;
          getIP = data.ip;
          getCountry = data.country;
          getISP = data.org;

          getEmail = loginEmail;
          getUID = user.uid;

          set(ref(db, 'unauthorizedAccess/' + year + month + date + hour + mins + secs), {
            ip: getIP,
            country: getCountry,
            network: getISP,
            email: getEmail,
            uid: getUID,
            date: getDate,
            time: getTime
          })
          .then(()=> {

            window.location.replace('https://artcademy.ph/404');

            })
          }
      }
      
    }
    
    else {
      
      bodyBlue.style.visibility = "visible";
      
    } 
  });



  //---------------------validate login--------------------

  function validateLogin() {

    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if ((loginEmail.value.match(validRegex)) && (loginPw.value != "")) { //check if login fields valid

      signInWithEmailAndPassword(auth, loginEmail.value, loginPw.value)
      .then(()=> {
        sessionStorage.setItem("sessEmail", loginEmail.value);
        sessionStorage.setItem("sessPw", loginPw.value);
      })
      .catch((error)=> {

        var getIP, getCountry, getISP, getEmail, getTime, getDate = "";

        fetch("https://ipapi.co/json")
          .then(respo => respo.json())
            .then(data => getData(data));

              function getData(data) {
                
                const d = new Date();
                var year = d.getFullYear();
                var month = d.getMonth() + 1;
                var date = d.getDate();
                var hour = d.getHours();
                var mins = d.getMinutes();
                var secs = d.getSeconds();

                getDate = month + "-" + date + "-" + year;
                getTime = hour + ":" + mins + ":" + secs;
                getIP = data.ip;
                getCountry = data.country;
                getISP = data.org;

                getEmail = loginEmail;
                

                set(ref(db, 'unauthorizedAccess/' + year + month + date + hour + mins + secs), {
                  ip: getIP,
                  country: getCountry,
                  network: getISP,
                  email: getEmail,
                  uid: "------",
                  date: getDate,
                  time: getTime
                })
                .then(()=> {
                  alertMsg.innerText = "Unauthorized access";
                  alertMsg.style.opacity = "1";
                  loginEmail.value = "";
                  loginPw.value = "";

                  
                })
              }
      })

    }
    else {
      alertMsg.innerText = "Email or password is incorrect";
      alertMsg.style.opacity = "1";
    }
  }


  //-------------on enter, use function login---------------
  function pressEnter(e) {
    if(e.code === "Enter") {
      validateLogin();
    }
  }

  btnLogin.addEventListener("click", validateLogin);
  document.querySelector('#txtEmail').addEventListener("keydown", pressEnter);
  document.querySelector('#txtPw').addEventListener("keydown", pressEnter);

//-------------------------Reset Texts---------------------

function clearText() {
  document.querySelector('#txtEmail').value = "";
  document.querySelector('#txtPw').value = "";
}
window.addEventListener("pageshow", clearText);

