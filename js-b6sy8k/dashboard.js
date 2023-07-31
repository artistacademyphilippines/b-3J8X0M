import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";
import { getDatabase, ref, onValue, update, child, get } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js";

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



  //--check first if user is currently logged in

var bodyBlue = document.getElementById('bodyBlue');

onAuthStateChanged(auth, (user) => {

    if (user) {
    
        var sessID = sessionStorage.getItem("sessID");

        if(sessID == "XribZIy3mORl28B3A7S3qOdv2Bs1") {

            bodyBlue.style.visibility = "visible";
        
        }

        else {

            window.location.replace('https://artcademy.ph/404');

        }
      
    }

    else {
      
        window.location.replace('https://creator.artcademy.ph');
      
    } 

});


//--------------------------------Functions-------------------------

var txtBanner = null;
var lblBanner = null;
var bannerContainer = null;
var scrollingBannerText = null;
const scrollingBanner = document.getElementById('divBanner');
const btnShow = document.getElementById('btnShow');
const btnUpdate = document.getElementById('btnUpdate');

function getFields() {
    
    txtBanner = document.getElementById('txtBanner');
    scrollingBannerText = document.getElementById('pBanner');
    bannerContainer = document.getElementById('bannerContainer');
    lblBanner = document.getElementById('divMessage').firstElementChild;
    return txtBanner, scrollingBannerText, lblBanner, bannerContainer;
}

//----------------------------Common Banner codes---------------------
function checkBanner() {
    getFields();
    const path = ref(db, 'settings/banner');
    onValue(path, (snapshot) => {
        if(snapshot.exists()) {
           
            scrollingBannerText.innerText = snapshot.val().message;
            lblBanner.innerText = snapshot.val().message;
        
            if(snapshot.val().status === true) {
                scrollingBanner.style.visibility = "visible";
                btnShow.style.opacity = "1";
            }
            else {
                scrollingBanner.style.visibility = "hidden";
                btnShow.style.opacity = ".25";
            }
        }
    });
}
checkBanner();

var t = .002*window.innerWidth;
var c = window.innerWidth;
bannerContainer.style.transform = "translateX(" + window.innerWidth +"px)";

function bannerAnimation() {
    c -= .5;
    bannerContainer.style.transform = "translateX(" + c +"px)";
    if(c < (bannerContainer.offsetWidth*-1)) {
        c = window.innerWidth;
        bannerContainer.style.transform = "translateX(" + window.innerWidth +"px)";
    }
}
setInterval(bannerAnimation, t);

//---------------------------------------------------------------------

function updateBanner() {
    getFields();

    update(ref (db, 'settings/banner'), {
        message: txtBanner.value
        
    })
    .catch((error)=> {
        alert(error.code);
    });
    txtBanner.value = "";
}
btnUpdate.addEventListener('click', updateBanner);

function showBanner() {
    const path = ref(db, 'settings/banner');
    const dbRef = ref(db);
   
    get(child(dbRef, 'settings/banner')).then((snapshot)=> {
        if(snapshot.exists()){
            if (snapshot.val().status == false) {
                update(path, {
                    status: true
                })
            }
            else {
                update(path, {
                    status: false
                })
            }
        }
    })
}
btnShow.addEventListener('click', showBanner);


//--------------------------Cards------------------------------------

var txtCardNo, txtCardTitle, txtCardLink, oldCards = null;
var btnCardEdit = document.getElementsByClassName("btnCardEdit");
const btnCardUpdate = document.getElementById('btnCardUpdate');
var cardLink = document.getElementsByClassName('cardLink');

function copyMe() {
    var copyText = this;

    copyText.focus();
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
    document.execCommand('copy');
}


function editCard() {
    
    document.getElementById('txtCardNo').firstElementChild.innerText = this.parentElement.childNodes[1].innerText;
    document.getElementById('txtCardTitle').value = this.parentElement.childNodes[3].innerText;
    document.getElementById('txtCardLink').value = this.parentElement.childNodes[5].innerText;
}

function displayCard() {
    txtCardNo = document.getElementById('txtCardNo').firstElementChild;
    txtCardTitle = document.getElementById('txtCardTitle');
    txtCardLink = document.getElementById('txtCardLink');

    
    const path = ref(db, 'settings/cards/');

    onValue( path, (snapshot) => {
        var divCards = "";
        oldCards = document.getElementById('divCards');

        snapshot.forEach((childSnapshot)=> {
            
            divCards += `
                <div class="cardEntry">
                    <div class="cardNo"><h1>${childSnapshot.key}</h1></div>
                    <div class="cardTitle"><h1>${childSnapshot.val().title}</h1></div>
                    <input type"text" class="cardLink" readonly value="${childSnapshot.val().link}" onclick="window.open('${childSnapshot.val().link}'),'_blank'">
                    <img src="img-h6rv2c/btnEdit.png" class="btnCardEdit">
                </div>
            `;
        })
        // append divCards total -----------------------------
        oldCards.innerHTML = divCards;

        // add listeners for btnCredit again
        for (var i = 0; i < btnCardEdit.length; i++) {
            btnCardEdit[i].addEventListener('click', editCard);
            cardLink[i].addEventListener('click', copyMe);
        }
    });
}
displayCard();

function updateCard() {
    txtCardNo = document.getElementById('txtCardNo').firstElementChild;
    txtCardTitle = document.getElementById('txtCardTitle');
    txtCardLink = document.getElementById('txtCardLink');

    var trim1 = txtCardLink.value.replace("https://drive.google.com/file/d/", "");
    var trim2 = trim1.replace("/view?usp=sharing", "");
    var newLink = "https://drive.google.com/uc?export=view&id=" + trim2;

    if(txtCardNo.innerText != "" && txtCardTitle.value != "" && txtCardLink.value != "") {
        update(ref(db, 'settings/cards/' + txtCardNo.innerText), {
            title: txtCardTitle.value,
            link: newLink
        })
        .then(() => {
            txtCardNo.innerText = "";
            txtCardTitle.value = "";
            txtCardLink.value = "";
        })
        .catch((error)=> {
            alert(error.code);
        });
        displayCard();
    }
    else {
        alert("Please complete the fields");
    }
}
btnCardUpdate.addEventListener("click", updateCard);




//-----------------------Monitor Logout------------------------

function checkAuth() {
    var oAuth = sessionStorage.getItem("oAuth");
    if(oAuth == "out") {
        signOut(auth)
        .then(()=> {
            sessionStorage.clear();
        })
        .catch((error)=> {
            alert(error.code);
        })
    }
}

setInterval(checkAuth, 500);
