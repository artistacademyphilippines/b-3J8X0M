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


onAuthStateChanged(auth, (user) => {

    if (user) {

        var sessID = sessionStorage.getItem("sessID");
    
        if(sessID === "EHjLcp5e6pctChxax7kfnYINPCj1") {

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


//---top dropdown components
var dropCourse = document.getElementById('dropCourse');
var resources = document.getElementById('resources');


//---file components--------

const btnExpand = document.getElementsByClassName('btnExpand');
const tableFileEntry = document.getElementsByClassName('tableFileEntry');
const btnDelFile = document.getElementsByClassName('btnDelFile');
const btnPlayFile =  document.getElementsByClassName('btnPlayFile');
const btnDownloadFile =  document.getElementsByClassName('btnDownloadFile');
var divAppTable = document.getElementsByClassName('divAppTable')


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
       loadResTable();
    }
    else {
        resources.innerHTML = "";
    }
}

dropCourse.addEventListener('change', showTables);


//----------------------------Show Resources--------------------

function loadResTable() {

    const path = ref(db, 'courses/' + dropCourse.value + '/resources/public/');
    get(path).then((snapshot)=> {
        var append = "";
        snapshot.forEach((childSnapshot)=> {
            var newID = childSnapshot.key;

            const path2 = ref(db, 'courses/' + dropCourse.value + '/resources/public/' + newID + '/files/');
            
            get(path2).then((snapshot)=> {

                if(snapshot.size > 0) {
                    append += 
                        `<div class="frm" data-count = "${newID}" data-show = "false">
                            <div class="entryHeader">
                                <div class="leftHeader">
                                    <div class="appIconHeader"><img src="${childSnapshot.val().appIcon}"></div>
                                    <h1>${childSnapshot.val().appName}</h1>
                                </div>
                                <img src="img-h6rv2c/btnExpand.svg" class="btnExpand">
                            </div>
                            <div class="bannerLine"></div>
                            <div class="divAppTable">
                            
                            </div>        
                        </div>`; 
                        resources.innerHTML = append; 

                        for(var a = 0; a < btnExpand.length; a++) {     
                            btnExpand[a].addEventListener('click', showHideRes);
                        }       
                }
                
            }) 
        })
        
        loadResData(); 
    })
}


function loadResData() {
    
    const path = ref(db, 'courses/' + dropCourse.value + '/resources/public/');

    onValue(path, (snapshot)=> {

        for(var a = 1; a <= snapshot.size; a++) {
            var append = "";
            var append2 = [];
            const path2 = ref(db, 'courses/' + dropCourse.value + '/resources/public/' + a + '/files/');
            
            onValue(path2, (snapshot)=>{  

                snapshot.forEach((childSnapshot)=> {   
                    
                    if(childSnapshot.val().fileLink != "") {
                        append+= 
                        `<div class="tableFileEntry">     
                            <div class="tableFileID"><h1>${childSnapshot.key}</h1></div>                        
                            <div class="tableFileTitle"><h1>${childSnapshot.val().videoTitle}</h1></div>
                            <div class="tableFileDownloads"><h1>Clicks: ${childSnapshot.val().downloads}</h1></div>
                            <div class="tableFileViews"><h1>Views: ${childSnapshot.val().videoViews}</h1></div>
                            <div class="tableFileControls">
                                <img src="img-h6rv2c/btnDownload.png" class="btnDownloadFile" onclick="window.open('${childSnapshot.val().fileLink}');">
                                <img src="img-h6rv2c/btnPlay.png" class="btnPlayFile">
                                <img src="img-h6rv2c/btnDelete.png" class="btnDelFile">
                            </div>
                        </div>`;
                    }

                    else {
                        append+= 
                        `<div class="tableFileEntry">     
                            <div class="tableFileID"><h1>${childSnapshot.key}</h1></div>                        
                            <div class="tableFileTitle"><h1>${childSnapshot.val().videoTitle}</h1></div>
                            <div class="tableFileDownloads"></div>
                            <div class="tableFileViews"><h1>Views: ${childSnapshot.val().videoViews}</h1></div>
                            <div class="tableFileControls">
                                <img src="img-h6rv2c/btnPlay.png" class="btnPlayFile">
                                <img src="img-h6rv2c/btnDelete.png" class="btnDelFile">
                            </div>
                        </div>`;
                    }
                    
                })

                append2[a] = append;

                divAppTable[a-1].innerHTML = append2[a];
                
                
                for(var z = 0; z <= tableFileEntry.length; z++) {
                    console.log(`z: ${z} length: ${tableFileEntry.length}`);

                    btnDelFile[z].addEventListener('click', deleteFile);
                    btnPlayFile[z].addEventListener('click', playFile);
                    btnDownloadFile[z].addEventListener('click', downloadFile);
                }
            })
            
        }

    })

}

function showHideRes() {
    var dataShow = this.parentElement.parentElement.dataset.show;

    if(dataShow == "false") {
        var newAppTable = this.parentElement.parentElement.children[2];
        this.style.transform = "rotate(-180deg)";
        newAppTable.style.display = "inline-flex";
        newAppTable.style.flexDirection = "column";
        this.parentElement.parentElement.dataset.show = "true"
    }
    else {
        
        var newAppTable = this.parentElement.parentElement.children[2];
        this.style.transform = "rotate(0deg)";
        newAppTable.style.display = "none";
        this.parentElement.parentElement.dataset.show = "false"
    }
}

function playFile() {
    //var vidTitle = this.parentElement.parentElement.children[0].innerText;
    var fileNo = Number(this.parentElement.parentElement.children[0].innerText);
    var appNo = Number(this.parentElement.parentElement.parentElement.parentElement.dataset.count);

    black.style.opacity = 1;
    black.style.background = "rgba(0,0,0,0.3)";
    black.style.visibility = "visible";
    black.style.transition = "opacity .5s";

    const path = ref(db, 'courses/' + dropCourse.value + '/resources/public/' + appNo + '/files/' + fileNo + '/');
    get(path).then((snapshot)=> {
        
        black.innerHTML = `
        <iframe src="${snapshot.val().videoLink}" allowfullscreen allowtransparency allow="autoplay" scrolling="no" frameborder="0"></iframe>
        `;

        var oldViews = snapshot.val().videoViews;
        
        update(ref(db, 'courses/' + dropCourse.value + '/resources/public/' + appNo + '/files/' + fileNo + '/'), {
            videoViews: oldViews + 1
        })
    })
}

function downloadFile() {
    var fileNo = Number(this.parentElement.parentElement.children[0].innerText);
    var appNo = Number(this.parentElement.parentElement.parentElement.parentElement.dataset.count);

    var addDownload = null;

    const path = ref(db, 'courses/' + dropCourse.value + '/resources/public/' + appNo + '/files/' + fileNo + '/');
    get(path).then((snapshot)=> {
        
        addDownload = snapshot.val().downloads + 1;
    })
    .then(()=> {
        update(ref(db, 'courses/' + dropCourse.value + '/resources/public/' + appNo + '/files/' + fileNo + '/'), {
            downloads: addDownload
        })
    })
}


function deleteFile() {
    var z = null;
    var oldSnapshots = [];
    var fileNo = Number(this.parentElement.parentElement.children[0].innerText);
    var appNo = Number(this.parentElement.parentElement.parentElement.parentElement.dataset.count);

    console.log(`fileno: ${fileNo} appno: ${appNo}`)

    if(confirm("Permanently delete this record?")) {
        const path = ref(db, 'courses/' + dropCourse.value + '/resources/public/' + appNo + '/files/');
        get(path).then((snapshot)=> {
            z = snapshot.size;

            snapshot.forEach((childSnapshot)=> {
                if(childSnapshot.key > fileNo) {
                    oldSnapshots[childSnapshot.key] = childSnapshot.val();
                    
                }
            })
            
            for(var a = 1; a <= z; a++) {
                if(a > fileNo) {
                    var b = a-1;
                    
                    update(ref(db, 'courses/' + dropCourse.value + '/resources/public/' + appNo + '/files/' + b), oldSnapshots[a])
                    remove(ref(db, 'courses/' + dropCourse.value + '/resources/public/' + appNo + '/files/' + z))
                }
               else if(a == fileNo) {
                remove(ref(db, 'courses/' + dropCourse.value + '/resources/public/' + appNo + '/files/' + a))
               }
            }
        })
       
    }
    
}



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




