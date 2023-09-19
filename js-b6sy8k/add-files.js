import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAuth, signOut, onAuthStateChanged} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";
import { getDatabase, ref, onValue, update, get, set, remove } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js";

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

var bodyBlue = document.getElementById('bodyBlue');

//--check first if user is currently logged in
onAuthStateChanged(auth, (user) => {

    if (user) {

        var sessID = sessionStorage.getItem("sessID");
    
        if(sessID === "XribZIy3mORl28B3A7S3qOdv2Bs1") {

            bodyBlue.style.visibility = "visible";
            
        }

        else {

            signOut(auth);
            
        }
    }

    else {
      
        window.location.replace('https://creator.artcademy.ph');

    } 

});


//--------------------------------Banner--------------------------------------

var t = .002*window.innerWidth;
var c = window.innerWidth;
var scrollingBannerText = document.getElementById('pBanner');
const scrollingBanner = document.getElementById('divBanner');
var bannerContainer = document.getElementById('bannerContainer');
bannerContainer.style.transform = "translateX(" + window.innerWidth +"px)";

//----------------------------Common Banner codes-----------------------------

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

//-----------------------------Select Course-------------------------
const black = document.getElementById('black');

//---top dropdown components
var dropCourse = document.getElementById('dropCourse');
var dropBatch = document.getElementById('dropBatch');
const frm = document.getElementsByClassName('frm');
var resources = document.getElementById('resources');

//---live training components

var txtTrainingVideo = document.getElementById('txtTrainingVideo');
var txtTrainingVideoLink = document.getElementById('txtTrainingVideoLink');
var divTrainingVideo = document.getElementById('divTrainingVideo');

const btnAddTrainingVideo = document.getElementById('btnAddTrainingVideo');
const btnDelTrainingVideo = document.getElementsByClassName('btnDelTrainingVideo');
const btnPlayTrainingVideo = document.getElementsByClassName('btnPlayTrainingVideo');

//----app components
var txtAppID = document.getElementById('txtAppID');
var txtAppName = document.getElementById('txtAppName');
var txtAppIconLink = document.getElementById('txtAppIconLink');
var divAppName = document.getElementById('divAppName');
const btnAddApp = document.getElementById('btnAddApp');
const btnDelApp = document.getElementsByClassName('btnDelApp');
const btnEditApp = document.getElementsByClassName('btnEditApp');

//----add resources components
var dropApp = document.getElementById('dropApp');
var txtVideoID = document.getElementById('txtVideoID');
var txtVideoTitle = document.getElementById('txtVideoTitle');
var txtVideoLink = document.getElementById('txtVideoLink');
var txtFileLink = document.getElementById('txtFileLink');
var chkNew = document.getElementById('chkNew');
const btnConfirm = document.getElementById('btnConfirm');


//------------------------------Load Dropdown------------------------
function loadCourse() {
    const path = ref(db, 'courses/');
    get(path).then((snapshot) => {
        
        var append = `<option value="Select Course" class="dropOption">Select Course</option>`;
        dropCourse = document.getElementById('dropCourse');

        if(snapshot.exists()) {
            snapshot.forEach((childSnapshot) => {
                append+= `<option value="${childSnapshot.key}" class="dropOption">${childSnapshot.key}</option>`;
            })
            dropCourse.innerHTML = append;
        }
    })
}
loadCourse();


function showTables() {
    if(dropCourse.value != "Select Course") {
        loadApps();
        showApps();
    }
    else {
        
        divTrainingVideo.innerHTML = "";
        divAppName.innerHTML = "";
        dropApp.innerHTML = ` <option value="Select App" class="dropOption">Select App</option>`;
        dropBatch.innerHTML = `<option value="Batch No." class="dropOption">Batch No.</option>`;
    }
  
}

dropCourse.addEventListener('change', showTables);

function loadBatch() {
    if(dropCourse.value != "Select Course") {

    const path = ref(db, 'courses/' + dropCourse.value + "/batch/")
    get(path).then((snapshot) => {
        var append = `<option value="Batch No." class="dropOption">Batch No.</option>`;
        dropBatch = document.getElementById('dropBatch');

            snapshot.forEach((childSnapshot) => {
            
            append += `<option value="${childSnapshot.key}" class="dropOption">${childSnapshot.key}</option>`;
            
        })
        dropBatch.innerHTML = append;
        dropBatch.value = dropBatch.lastElementChild.value;
        showTrainingVideo();
    })
    }
}
dropCourse.addEventListener('change', loadBatch);


//--------------------------Training Video-----------------------

function showTrainingVideo() {
    
    if((dropCourse.value != "Select Course") && (dropBatch.value != "Batch No.")) {
        const path = ref(db, 'courses/' + dropCourse.value + '/batch/' + dropBatch.value + '/trainingVideos/');
        onValue(path, (snapshot) => {
            var append = "";
            divTrainingVideo.innerHTML = "";

            if(snapshot.exists()) {
                snapshot.forEach((childSnapshot)=> {

                    //comma for thousands
                    var strViews = childSnapshot.val().views.toString();
                    var strLength = strViews.length;
                    var strHuns = null;
                    var strThou = null;
                    var strNewViews = strViews;

                    if(strLength > 3) {
                        strHuns = strViews.substr(strLength-3, strLength);
                        strThou = strViews.substr(0, strLength-3);
                        strNewViews = strThou + "," + strHuns;
                    }

                    append+=
                    `<div class="trainingVideoEntry">
                        <div class="trainingVideoTitle" onclick="window.open('${childSnapshot.val().link}', '_blank');"><h1>${childSnapshot.key}</h1></div>
                        <div class="trainingVideoViews"><h1>${strNewViews} views</h1></div>
                        <div style="display: flex; height: 40px; margin-top: auto; margin-bottom: auto;">
                            <img src="img-h6rv2c/btnPlay.png" class="btnPlayTrainingVideo">
                            <img src="img-h6rv2c/btnDelete.png" class="btnDelTrainingVideo">
                        </div>
                    </div>
                    `;
                })
                divTrainingVideo.innerHTML = append;

                for(var a = 0; a < divTrainingVideo.childElementCount; a++) {
                    btnPlayTrainingVideo[a].addEventListener('click', playTrainingVideo);
                    btnDelTrainingVideo[a].addEventListener('click', delTrainingVideo);
                }
            }
        })
    }
}

function addTrainingVideo() {
    var d = new Date();
 
    var timestamp = ' ' + (d.getMonth() + 1) + '-' + d.getDate()  + '-' + d.getFullYear();

    if((dropCourse.value != "Select Course")&&(dropBatch.value != "Batch No.") && (txtTrainingVideo.value != "") && (txtTrainingVideoLink.value != "")) {
        var newKey = txtTrainingVideo.value + timestamp;
        set(ref(db, 'courses/' + dropCourse.value + '/batch/' + dropBatch.value + '/trainingVideos/' + newKey), {
            link: txtTrainingVideoLink.value,
            views: 0
        })
        .then(()=> {
            txtTrainingVideo.value = "";
            txtTrainingVideoLink.value = "";
        })
        .catch((error)=> {
            alert(error.code);
        })
    }   
    else {
        alert('Please complete all fields');
    }
}
btnAddTrainingVideo.addEventListener('click', addTrainingVideo);

function delTrainingVideo() {
    var deleteTitle = this.parentElement.parentElement.children[0].innerText;
    remove(ref(db, 'courses/' + dropCourse.value + '/batch/' + dropBatch.value + '/trainingVideos/' + deleteTitle))
    .then(()=> {
        showTrainingVideo();
    })
    .catch((error)=> {
        alert(error.code);
    })
}

function playTrainingVideo() {

    var vidTitle = this.parentElement.parentElement.children[0].innerText;

    black.style.opacity = 1;
    black.style.background = "rgba(0,0,0,0.3)";
    black.style.visibility = "visible";
    black.style.transition = "opacity .5s";

    const path = ref(db, 'courses/' + dropCourse.value + '/batch/' + dropBatch.value + '/trainingVideos/' + vidTitle);
    get(path).then((snapshot)=> {
        
        black.innerHTML = `
        <iframe src="${snapshot.val().link}" allowfullscreen allowtransparency allow="autoplay" scrolling="no" frameborder="0"></iframe>
        `;

        var oldViews = snapshot.val().views;

        update(ref(db, 'courses/' + dropCourse.value + '/batch/' + dropBatch.value + '/trainingVideos/' + vidTitle), {
            views: oldViews + 1
        })
    })
}


//------------------------------APP Name-----------------------------


function insertApps() {
    var oldSnapshots = [];
    var z = null;
    const path = ref(db, 'courses/' + dropCourse.value + '/resources/public/');
    get(path).then((snapshot)=> {
        //get old childSnapshot size
        z = snapshot.size;

        snapshot.forEach((childSnapshot)=> {

            //copy old childSnapshots
            if(childSnapshot.key >= txtAppID.value) {
                oldSnapshots[childSnapshot.key] = childSnapshot.val();
            }
        })
        
        //paste new childSnapshots
        for(var a = z; a >= 1; a-- ) {
            if(a > txtAppID.value) {
                var b = a+1;
                update(ref(db, 'courses/' + dropCourse.value + '/resources/public/' + b), oldSnapshots[a])
            }
            else if(a == txtAppID.value) {
                var b = a+1;
                update(ref(db, 'courses/' + dropCourse.value + '/resources/public/' + b), oldSnapshots[a])
                
                var newIcon = "https://artcademy.ph/img-h6rv2c/" + txtAppIconLink.value + ".svg";
                update(ref(db, 'courses/' + dropCourse.value + '/resources/public/' + a), {
                    appName: txtAppName.value,
                    appIcon: newIcon,
                    files: ""
                })
                .then(()=> {
                    txtAppIconLink.value = "";
                    txtAppName.value = "";
                    txtAppID.value = "";
                })
                .catch((error)=> {
                    alert(error.code);
                })
            }
        }
        
    })
}


function addAppName() {

    if((dropCourse.value != "Select Course")&&(txtAppIconLink.value != "")&&(txtAppName.value != "")) {
        
        if(txtAppID.value == "") {
            const path = ref(db, 'courses/' + dropCourse.value + '/resources/public/');
            get(path).then((snapshot)=> {
                
                var newCount = snapshot.size + 1;
                var newIcon = "https://artcademy.ph/img-h6rv2c/" + txtAppIconLink.value + ".svg";
                update(ref(db, 'courses/' + dropCourse.value + '/resources/public/' + newCount + '/'), {
                    appName: txtAppName.value,
                    appIcon: newIcon,
                    files: ""
                })
                .then(()=> {

                    txtAppIconLink.value = "";
                    txtAppName.value = "";
                    
                })
                .catch((error)=> {
                    alert(error.code);
                })
            })
        }
        else {
            insertApps();
        }
    }
    else {
        alert('Please complete all fields');
    }
}
btnAddApp.addEventListener('click', addAppName);


function showApps() {
    const path = ref(db, 'courses/' + dropCourse.value + '/resources/public/');
    onValue(path, (snapshot)=> {
        var append = "";
        divAppName.innerHTML = "";

        snapshot.forEach((childSnapshot)=> {
            append+=
                `<div class="trainingAppEntry">
                    <div class="trainingAppID"><h1>${childSnapshot.key}</h1></div>
                    <div class="trainingAppTitle"><h1>${childSnapshot.val().appName}</h1></div>
                    <div class="trainingAppIcon"><h1>${childSnapshot.val().appIcon}</h1></div>
                    <div style="display: flex; height: 40px; margin-top: auto; margin-bottom: auto;">
                        <img src="img-h6rv2c/btnEdit.png" class="btnEditApp">
                        <img src="img-h6rv2c/btnDelete.png" class="btnDelApp">
                    </div>
                </div>
                `;
        })

        divAppName.innerHTML = append;

        for(var a = 0; a < divAppName.childElementCount; a++) {
            btnEditApp[a].addEventListener('click', editApp);
            btnDelApp[a].addEventListener('click', delApp);
        }

    })
}
showApps();

function delApp() {
    
    var z = null;
    var oldSnapshots = [];
    var deleteMe = Number(this.parentElement.parentElement.children[0].innerText);

    if(confirm("Permanently delete this record?")) {
        const path = ref(db, 'courses/' + dropCourse.value + '/resources/public/');
        get(path).then((snapshot)=> {
            z = snapshot.size;

            snapshot.forEach((childSnapshot)=> {
                if(childSnapshot.key > deleteMe) {
                    oldSnapshots[childSnapshot.key] = childSnapshot.val();
                }
            })
            
            for(var a = 1; a <= z; a++) {
                if(a > deleteMe) {
                    var b = a-1;
                    
                    update(ref(db, 'courses/' + dropCourse.value + '/resources/public/' + b), oldSnapshots[a])
                    remove(ref(db, 'courses/' + dropCourse.value + '/resources/public/'+ z))
                }
               else if(a == deleteMe) {
                remove(ref(db, 'courses/' + dropCourse.value + '/resources/public/'+ a))
               }
            }
        })

    }

}

function editApp() {
    txtAppID.value = this.parentElement.parentElement.children[0].innerText;
    txtAppName.value = this.parentElement.parentElement.children[1].innerText;
    txtAppIconLink.value = this.parentElement.parentElement.children[2].innerText;
}


//----------------------------Add Files-------------------------

function tickNew() {
    
    if(chkNew.dataset.checked === "true") {
        chkNew.dataset.checked = false;
        chkNew.style.backgroundColor = "transparent";
    }
    else {
        chkNew.dataset.checked = true;
        chkNew.style.backgroundColor = "salmon";
    }
}
chkNew.addEventListener('click', tickNew);

function loadApps() {
    const path = ref(db, 'courses/' + dropCourse.value + '/resources/public/');
    onValue(path, (snapshot)=> {
        var append = ` <option value="Select App" class="dropOption">Select App</option>`;
        
        snapshot.forEach((childSnapshot)=> {
            append+= `<option value="${childSnapshot.val().appName}" class="dropOption">${childSnapshot.val().appName}</option>`;
        })

        dropApp.innerHTML = append;
    })
}

function insertRes() {
    var oldSnapshots = [];
    var z = null;
    const path = ref(db, 'courses/' + dropCourse.value + '/resources/public/');
    get(path).then((snapshot)=> {

        snapshot.forEach((childSnapshot)=> {

            if(dropApp.value == childSnapshot.val().appName) {
                var newID = childSnapshot.key;
                
                const path2 = ref(db, 'courses/' + dropCourse.value + '/resources/public/' + newID + '/files/');

                get(path2).then((snapshot)=> {

                    //get old childSnapshot size
                    z = snapshot.size;

                    snapshot.forEach((childSnapshot)=> {

                        //copy old childSnapshots
                        if(childSnapshot.key >= txtVideoID.value) {
                            oldSnapshots[childSnapshot.key] = childSnapshot.val();
                        }

                    })

                    //paste new childSnapshots
                    for(var a = z; a >= 1; a-- ) {
                        if(a > txtVideoID.value) {
                            var b = a+1;
                            update(ref(db, 'courses/' + dropCourse.value + '/resources/public/' + newID + '/files/' + b), oldSnapshots[a])
                        }
                        else if(a == txtVideoID.value) {
                            var b = a+1;
                            update(ref(db, 'courses/' + dropCourse.value + '/resources/public/' + newID + '/files/' + b), oldSnapshots[a])
                            
                            update(ref(db, 'courses/' + dropCourse.value + '/resources/public/' + newID + '/files/' + a), {
                                videoTitle: txtVideoTitle.value,
                                videoLink: txtVideoLink.value,
                                videoViews: 0,
                                fileLink: txtFileLink.value,
                                downloads: 0,
                                notify: chkNew.dataset.checked
                            })
                            .then(()=> {
                                
                                txtVideoID.value = "";
                                txtVideoTitle.value = "";
                                txtVideoLink.value = "";
                                txtFileLink.value = "";
                                chkNew.dataset.checked = false;
                                chkNew.style.backgroundColor = "transparent";           

                            })
                        }
                    }

                })
            }
          
        })
        
    })
}

function addResources() {
   
    if((txtVideoTitle.value != "")&&(txtVideoLink.value != "")&&(txtFileLink.value != "")&&(dropApp.value !="")) {

        if(txtVideoID.value == "") {

            const path = ref(db, 'courses/' + dropCourse.value + '/resources/public/');
            get(path).then((snapshot)=> {
                snapshot.forEach((childSnapshot)=> {
                
                    if(childSnapshot.val().appName == dropApp.value) {
                        var newID = childSnapshot.key;
                        const path2 = ref(db, 'courses/' + dropCourse.value + '/resources/public/' + newID + '/files/');
                        get(path2).then((snapshot)=> {
                            var newCount = snapshot.size + 1;

                             //reformat google drive link
                            var trim1 = txtFileLink.value.replace("https://drive.google.com/file/d/", "");
                            var trim2 = trim1.replace("/view?usp=sharing", "");
                            var newLink = "https://drive.google.com/uc?export=download&id=" + trim2;

                            update(ref(db, 'courses/' + dropCourse.value + '/resources/public/' + newID + '/files/' + newCount), {
                                videoTitle: txtVideoTitle.value,
                                videoLink: txtVideoLink.value,
                                videoViews: 0,
                                fileLink: newLink,
                                downloads: 0,
                                notify: chkNew.dataset.checked
                            })
                            .then(()=> {
                               
                                txtVideoID.value = "";
                                txtVideoTitle.value = "";
                                txtVideoLink.value = "";
                                txtFileLink.value = "";
                                chkNew.dataset.checked = false;
                                chkNew.style.backgroundColor = "transparent";
                                
                            })
                        })
                    }
                })
            })
        }

        else {
            insertRes();
        }
        
    }

    else {
        alert('Please complete all fields');
    }

}
btnConfirm.addEventListener('click', addResources)

//-----------------------Monitor Logout------------------------

function checkIfOnline() {

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
setInterval(checkIfOnline, 500);




