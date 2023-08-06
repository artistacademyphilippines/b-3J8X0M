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



//-----------------------------Select Course-------------------------
const black = document.getElementById('black');

var dropCourse = document.getElementById('dropCourse');
var dropBatch = document.getElementById('dropBatch');
var txtTrainingVideo = document.getElementById('txtTrainingVideo');
var txtTrainingVideoLink = document.getElementById('txtTrainingVideoLink');
var divTrainingVideo = document.getElementById('divTrainingVideo');

var txtOtherVideosTitle = document.getElementById('txtOtherVideosTitle');
var txtOtherVideosLink = document.getElementById('txtOtherVideosLink');
var divOtherVideos = document.getElementById('divOtherVideos');

var txtBasicFilesTitle = document.getElementById('txtBasicFilesTitle');
var txtBasicFilesLink = document.getElementById('txtBasicFilesLink');
var divBasicFiles = document.getElementById('divBasicFiles');

const btnAddTrainingVideo = document.getElementById('btnAddTrainingVideo');
const btnDelTrainingVideo = document.getElementsByClassName('btnDelTrainingVideo');
const btnPlayTrainingVideo = document.getElementsByClassName('btnPlayTrainingVideo');

const btnAddOtherVideos = document.getElementById('btnAddOtherVideos');
const btnPlayOtherVideos =document.getElementsByClassName('btnPlayOtherVideos');
const btnDelOtherVideos = document.getElementsByClassName('btnDelOtherVideos');

const btnAddBasicFiles = document.getElementById('btnAddBasicFiles');
const btnDelBasicFiles = document.getElementsByClassName('btnDelBasicFiles');
const btnDownloadBasicFiles = document.getElementsByClassName('btnDownloadBasicFiles');


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
dropCourse.addEventListener('change', showOtherVideos);
dropCourse.addEventListener('change', showBasicFiles);

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
    else {
        txtCerti.value = "";
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
                    </div>`;
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
 
    var timestamp = '_Uploaded: ' + (d.getMonth() + 1) + '.' + d.getDate()  + '.' + d.getFullYear();

    if((dropCourse.value != "Select Course")&&(dropBatch.value != "Batch No.") && (txtTrainingVideo.value != "") && (txtTrainingVideoLink.value != "")) {
        console.log(txtTrainingVideo.value);
        set(ref(db, 'courses/' + dropCourse.value + '/batch/' + dropBatch.value + '/trainingVideos/' + txtTrainingVideo.value), {
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
        alert('Please select a course or a batch');
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

//--------------------------Other Videos -----------------------

function showOtherVideos() {
    
    if(dropCourse.value != "Select Course") {
        
        const path = ref(db, 'courses/' + dropCourse.value + '/resources/public/videos/');
        onValue(path, (snapshot) => {
            var append = "";
            divOtherVideos.innerHTML = "";

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
                    `<div class="otherVideosEntry">
                        <div class="otherVideosTitle" onclick="window.open('${childSnapshot.val().link}', '_blank');"><h1>${childSnapshot.key}</h1></div>
                        <div class="otherVideosViews"><h1>${strNewViews} views</h1></div>
                        <div style="display: flex; height: 40px; margin-top: auto; margin-bottom: auto;">
                            <img src="img-h6rv2c/btnPlay.png" class="btnPlayOtherVideos">
                            <img src="img-h6rv2c/btnDelete.png" class="btnDelOtherVideos">
                        </div>     
                    </div>`;
                })
                
                divOtherVideos.innerHTML = append;

                for(var a = 0; a < divOtherVideos.childElementCount; a++) {
                    btnPlayOtherVideos[a].addEventListener('click', playOtherVideos);
                    btnDelOtherVideos[a].addEventListener('click', delOtherVideos);
                }
            }
        })
    }
}

function addOtherVideos() {

    if((dropCourse.value != "Select Course")&&(txtOtherVideosTitle.value != "") && (txtOtherVideosLink.value != "")) {
         
        set(ref(db, 'courses/' + dropCourse.value + '/resources/public/videos/' + txtOtherVideosTitle.value), {
            link: txtOtherVideosLink.value,
            views: 0
        })
        .then(()=> {
            txtOtherVideosTitle.value = "";
            txtOtherVideosLink.value = "";
        })
        .catch((error)=> {
            alert(error.code);
        })    
    }   
    else {
        alert('Please select a course from the dropdown');
    }    
}
btnAddOtherVideos.addEventListener('click', addOtherVideos);

function delOtherVideos() {

    var otherVideoTitle = this.parentElement.parentElement.children[0].innerText;

    const path = ref(db, 'courses/' + dropCourse.value + '/resources/public/videos/' + otherVideoTitle);
    remove(path);
}

function playOtherVideos() {

    var vidTitle = this.parentElement.parentElement.children[0].innerText;

    black.style.opacity = 1;
    black.style.background = "rgba(0,0,0,0.3)";
    black.style.visibility = "visible";
    black.style.transition = "opacity .5s";

    const path = ref(db, 'courses/' + dropCourse.value + '/resources/public/videos/' + vidTitle);
    get(path).then((snapshot)=> {
        
        black.innerHTML = `
        <iframe src="${snapshot.val().link}" allowfullscreen allowtransparency allow="autoplay" scrolling="no" frameborder="0"></iframe>
        `;

        var oldViews = snapshot.val().views;

        update(ref(db, 'courses/' + dropCourse.value + '/resources/public/videos/' + vidTitle), {
            views: oldViews + 1
        })
    })
    
}


//--------------------------Basic Files -----------------------

function showBasicFiles() {
    if(dropCourse.value != "Select Course") {
        
        const path = ref(db, 'courses/' + dropCourse.value + '/resources/public/files/');
        onValue(path, (snapshot) => {
            var append = "";
            divBasicFiles.innerHTML = "";

            if(snapshot.exists()) {
                snapshot.forEach((childSnapshot)=> {

                    //comma for thousands
                    var strDownloads = childSnapshot.val().downloads.toString();
                    var strLength = strDownloads.length;
                    var strHuns = null;
                    var strThou = null;
                    var strNewDownloads = strDownloads;

                    if(strLength > 3) {
                        strHuns = strViews.substr(strLength-3, strLength);
                        strThou = strViews.substr(0, strLength-3);
                        strNewDownloads = strThou + "," + strHuns;
                    }

                    append+=
                    
                    `<div class="basicFilesEntry">
                        <div class="basicFilesTitle" onclick="window.open('${childSnapshot.val().link}', '_blank');"><h1>${childSnapshot.key}</h1></div>
                        <div class="basicFilesDownloads"><h1>${strNewDownloads} downloads</h1></div>
                        <div style="display: flex; height: 40px; margin-top: auto; margin-bottom: auto;">
                            <img src="img-h6rv2c/btnDownload.png" class="btnDownloadBasicFiles">
                            <img src="img-h6rv2c/btnDelete.png" class="btnDelBasicFiles">
                        </div>     
                    </div>`;
                })
                
                divBasicFiles.innerHTML = append;

                for(var a = 0; a < divOtherVideos.childElementCount; a++) {
                    btnDelBasicFiles[a].addEventListener('click', delBasicFiles);
                    btnDownloadBasicFiles[a].addEventListener('click', downloadBasicFiles);
                }
            }
        })
    }
}

function addBasicFiles() {
    if((dropCourse.value != "Select Course")&&(txtBasicFilesTitle.value != "") && (txtBasicFilesLink.value != "")) {
         
        //reformat google drive link
        var trim1 = txtBasicFilesLink.value.replace("https://drive.google.com/file/d/", "");
        var trim2 = trim1.replace("/view?usp=sharing", "");
        var newLink = "https://drive.google.com/uc?export=download&id=" + trim2;
        
        set(ref(db, 'courses/' + dropCourse.value + '/resources/public/files/' + txtBasicFilesTitle.value), {
            link: newLink,
            downloads: 0
        })
        .then(()=> {
            txtBasicFilesTitle.value = "";
            txtBasicFilesLink.value = "";
        })
        .catch((error)=> {
            alert(error.code);
        })    
        
    }   
    else {
        alert('Please select a course from the dropdown');
    }    
}
btnAddBasicFiles.addEventListener('click', addBasicFiles);

function delBasicFiles() {
    var basicFileTitle = this.parentElement.parentElement.children[0].innerText;

    const path = ref(db, 'courses/' + dropCourse.value + '/resources/public/files/' + basicFileTitle);
    remove(path);    
}

function downloadBasicFiles() {
    var addDownload = null;
    var getBasicFile = this.parentElement.parentElement.children[0].innerText;

    const path = ref(db, 'courses/' + dropCourse.value + '/resources/public/files/' + getBasicFile);
    get(path).then((snapshot)=> {
        window.location.href= snapshot.val().link;
        addDownload = snapshot.val().downloads + 1;
    })
    .then(()=> {
        update(ref(db, 'courses/' + dropCourse.value + '/resources/public/files/' + getBasicFile), {
            downloads: addDownload
        })
    })
    
}


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




