
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";
import { getDatabase, ref, onValue, update, get, set, remove, query, orderByChild, orderByKey } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js";

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

var generateID = "";
var orderBy = "key";
var deleteID = "";
var getEmail = "";
var newID = [];
var dropCourse = document.getElementById('dropCourse');
var dropBatch = document.getElementById('dropBatch');
var txtCerti = document.getElementById('txtCerti');
var txtName = document.getElementById('txtName');
var txtEmail = document.getElementById('txtEmail');
var txtSocial = document.getElementById('txtSocial');
var txtContact = document.getElementById('txtContact');

var divEntryID = document.getElementsByClassName('divEntryID');
var divEntryName = document.getElementsByClassName('divEntryName');
var divEntryEmail = document.getElementsByClassName('divEntryEmail');
var divEntryContact = document.getElementsByClassName('divEntryContact');

const btnAddBatch = document.getElementById('btnAddBatch');
const btnDelBatch = document.getElementById('btnDelBatch');
const btnUpdateCerti = document.getElementById('btnUpdateCerti');
const btnConfirm = document.getElementById('btnConfirm');
const btnDelete = document.getElementsByClassName('btnDelete');
const btnStatus = document.getElementsByClassName('btnStatus');
const lblRecords = document.getElementById('lblRecords');
const tblEntry = document.getElementsByClassName('tblEntry');
var tblEntries = document.getElementById('tblEntries');

const headerID = document.getElementById('headerID');
const headerName = document.getElementById('headerName');
const headerEmail = document.getElementById('headerEmail');


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

function copyMe() {
    var copyText = this;

    copyText.focus();
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
    document.execCommand('copy');
}

function newTraineeStatus() {
    const path = ref(db, 'accounts/trainees/');
    onValue(path, (snapshot)=> {
        
        snapshot.forEach((childSnapshot)=> {
            for(var i = 0; i < tblEntries.childElementCount; i++) {
                
                if(tblEntry[i].children[0].value == childSnapshot.key) {
                    if(childSnapshot.val().status == 'suspended') {
                        tblEntry[i].children[0].style.color = "salmon";
                        tblEntry[i].children[1].style.color = "salmon";
                        tblEntry[i].children[2].style.color = "salmon";
                        tblEntry[i].children[3].style.color = "salmon";
                        tblEntry[i].children[4].style.color = "salmon";
                        tblEntry[i].children[5].style.color = "salmon";
                        tblEntry[i].children[6].style.color = "salmon";
                        tblEntry[i].children[7].style.color = "salmon";
                        tblEntry[i].children[0].style.opacity = "1";
                        tblEntry[i].children[1].style.opacity = "1";
                        tblEntry[i].children[2].style.opacity = "1";
                        tblEntry[i].children[3].style.opacity = "1";
                        tblEntry[i].children[4].style.opacity = "1";
                        tblEntry[i].children[5].style.opacity = "1";
                        tblEntry[i].children[6].style.opacity = "1";
                        tblEntry[i].children[7].style.opacity = "1";
                        tblEntry[i].children[8].firstElementChild.style.opacity = "1";   
                        tblEntry[i].children[8].firstElementChild.src = "../img-h6rv2c/btnSuspended.png";
                        
                    }
                    else if(childSnapshot.val().status == 'offline') {

                        tblEntry[i].children[0].style.color = "white";
                        tblEntry[i].children[1].style.color = "white";
                        tblEntry[i].children[2].style.color = "white";
                        tblEntry[i].children[3].style.color = "white";
                        tblEntry[i].children[4].style.color = "white";
                        tblEntry[i].children[5].style.color = "white";
                        tblEntry[i].children[6].style.color = "white";
                        tblEntry[i].children[7].style.color = "white";
    
                        tblEntry[i].children[0].style.opacity = ".25";
                        tblEntry[i].children[1].style.opacity = ".25";
                        tblEntry[i].children[2].style.opacity = ".25";
                        tblEntry[i].children[3].style.opacity = ".25";
                        tblEntry[i].children[4].style.opacity = ".25";
                        tblEntry[i].children[5].style.opacity = ".25";
                        tblEntry[i].children[6].style.opacity = ".25";
                        tblEntry[i].children[7].style.opacity = ".25";
                        tblEntry[i].children[8].firstElementChild.style.opacity = ".25";    
                        tblEntry[i].children[8].firstElementChild.src = "../img-h6rv2c/btnConfirm.png"; 
                    }

                    else {
                        tblEntry[i].children[0].style.color = "white";
                        tblEntry[i].children[1].style.color = "white";
                        tblEntry[i].children[2].style.color = "white";
                        tblEntry[i].children[3].style.color = "white";
                        tblEntry[i].children[4].style.color = "white";
                        tblEntry[i].children[5].style.color = "white";
                        tblEntry[i].children[6].style.color = "white";
                        tblEntry[i].children[7].style.color = "white";
    
                        tblEntry[i].children[0].style.opacity = "1";
                        tblEntry[i].children[1].style.opacity = "1";
                        tblEntry[i].children[2].style.opacity = "1";
                        tblEntry[i].children[3].style.opacity = "1";
                        tblEntry[i].children[4].style.opacity = "1";
                        tblEntry[i].children[5].style.opacity = "1";
                        tblEntry[i].children[6].style.opacity = "1";
                        tblEntry[i].children[7].style.opacity = "1";
                        tblEntry[i].children[8].firstElementChild.style.opacity = "1";    
                        tblEntry[i].children[8].firstElementChild.src = "../img-h6rv2c/btnConfirm.png";   
                    }
                }
            }
        }) 
    })
}
newTraineeStatus();

function showTable() {

    if((dropCourse.value != "Select Course")&&(dropBatch.value != "Batch No.")) {

        var newQuery = null;

        const path = ref(db, 'courses/' + dropCourse.value + '/batch/' + dropBatch.value + '/trainees/');
        
        if(orderBy == 'key') {
            newQuery = query(path, orderByKey());
        }
        else {
            newQuery = query(path, orderByChild(orderBy));
        }
        
        onValue(newQuery, (snapshot) => {

            var append = "";
            tblEntries.innerHTML = "";

            snapshot.forEach((childSnapshot)=> {
            
                var arrID = childSnapshot.key;
                
                const path2 = ref(db, 'accounts/trainees/');
            
                onValue(path2, (snapshot)=> {

                    append = "";

                    snapshot.forEach((childSnapshot)=> {

                        if(childSnapshot.key == arrID) {

                            var arrTimestamp = childSnapshot.val().lastOnline;
                            var arrContact = childSnapshot.val().contact;
                            var arrName = childSnapshot.val().name;
                            var arrEmail = childSnapshot.val().email;
                            var arrSocial = childSnapshot.val().social;
                            
                            append += 
                            `<div class="tblEntry">
                                <input type="text" class="divEntryID" value="${arrID}" readonly>
                                <input type="text" class="divEntryName" value="${arrName}" readonly>
                                <input type="text" class="divEntryEmail" value="${arrEmail}" readonly>
                                <input type="text" class="divEntrySocial" onclick="window.open('${arrSocial}'),'_blank'" value = "Link" readonly>
                                <input type="text" class="divEntryContact" value="${arrContact}" readonly>
                                <input type="text" class="divEntryCourse" value="${dropCourse.value}" readonly>
                                <input type="text" class="divEntryBatch" value="${dropBatch.value}" readonly>
                                <input type="text" class="divEntryTimestamp" value="${arrTimestamp}" readonly>
                                <div class="imgEntry">
                                    <img src="img-h6rv2c/btnConfirm.png" class="btnStatus">
                                    <img src="img-h6rv2c/btnDelete.png" class="btnDelete">
                                </div>
                            </div>`;

                            tblEntries.innerHTML = append;
                            lblRecords.innerHTML = `<h1>${tblEntries.childElementCount} records found</h1>`;
                
                            //add event listeners for each clickables---------
                            for(var a=0; a < tblEntries.childElementCount; a++) {
                                divEntryID[a].addEventListener('click', copyMe);
                                divEntryName[a].addEventListener('click', copyMe);
                                divEntryEmail[a].addEventListener('click', copyMe);
                                divEntryContact[a].addEventListener('click', copyMe);
                                btnDelete[a].addEventListener('click', deleteTrainee);
                                btnStatus[a].addEventListener('click', changeTraineeStatus);
                            }

                            newTraineeStatus();

                        }
                    })
                    
                })
                
            });
                
        })
        
    }
    else {
        tblEntries.innerHTML = "";
        lblRecords.innerHTML = "";    
    }
}

function showCerti() {
    if((dropCourse.value != "Select Course") && (dropBatch.value != "Batch No.")) {
        get(ref(db, 'courses/' + dropCourse.value + "/batch/" + dropBatch.value)).then((snapshot)=> {
            txtCerti.value = snapshot.val().certificates;
        })
    }
    else {
        txtCerti.value = "";
    }
    showTable();
}
dropBatch.addEventListener('click', showCerti);

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
        showCerti();
    })
    }
    else {
        txtCerti.value = "";
    }
}
dropCourse.addEventListener('click', loadBatch);

function filterBy() {

    if(this.id == 'headerName') {
        orderBy = 'name';    
    }
    else if(this.id == "headerEmail") {
        orderBy = 'email';    
    }
    else {
        orderBy = 'key';
    }
    showTable();
}
headerID.addEventListener('click', filterBy);
headerName.addEventListener('click', filterBy);
headerEmail.addEventListener('click', filterBy)

function addBatch() {
    
    if(dropCourse.value != "Select Course") {
        const path = ref(db, 'courses/' + dropCourse.value + "/batch/");
        get(path).then((snapshot) => {
        var snapSize = "Batch " + (snapshot.size + 1).toString();
        
            set(ref(db, 'courses/' + dropCourse.value + '/batch/' + snapSize), {
                trainees: "",
                certificates: "",
                trainingVideos: ""
            })
            .then(()=> {
                loadBatch();
                
            })
        });
    }

    else {
        alert('Please select a course before adding a batch');
    }
}
btnAddBatch.addEventListener('click', addBatch);

function delBatch() {
    if(dropCourse.value != "Select Course")  {
        get(ref(db, 'courses/' + dropCourse.value +"/batch/")).then((snapshot)=> {
            if(snapshot.exists()) {
                if(snapshot.size > 0) {
                    if(dropBatch.value != "Batch No.") {
                        var lblConfirm =  "Permanently delete this batch?";
                        if(confirm(lblConfirm) == true) {
                
                            remove(ref(db, 'courses/' + dropCourse.value + "/batch/" + dropBatch.value))
                            .then(()=> {
                                loadBatch();
                            })
                            .catch((error)=> {
                                alert(error.code);
                            })
                        }
                    }
                    else {
                        alert('Please select a batch to be removed');
                    }
                }
                else {
                    alert('No batch found for this course');
                }
            }
            else {
                alert('No batch found for this course');
            }
        })
    }
    else {
        alert('Please select a course first');
    }
}
btnDelBatch.addEventListener('click', delBatch);

function updateCerti() {
    if((dropCourse.value != "Select Course")&&(dropBatch != "Batch No.")) {
        update(ref(db, 'courses/' + dropCourse.value +"/batch/" + dropBatch.value), {
            certificates: txtCerti.value
        })
        .then(()=> {
            btnUpdateCerti.style.opacity = .25;
        })
        .catch((error)=> {
            alert(error.code);
        })
    }
}
btnUpdateCerti.addEventListener('click', updateCerti);

function editCerti() {
    btnUpdateCerti.style.opacity = 1;
}
txtCerti.addEventListener('input', editCerti);

function getID() {
    generateID = "T";
    const currentTime = new Date();
    var id = [];

    id[0] = currentTime.getFullYear().toString().substring(2);
    id[1] = (currentTime.getMonth() + 1).toString();
    id[2] = currentTime.getDate().toString();
    id[3] = currentTime.getHours().toString();
    id[4] = currentTime.getMinutes().toString();
    id[5] = currentTime.getSeconds().toString();

    for(var a= 0; a < id.length; a++) {

        if(Number(id[a]) < 10) {
            id[a] = "0" + id[a];
        }
    
        generateID += id[a];
    }
    return generateID;
}

function checkFields() {
    if(dropCourse.value != "Select Course") {
        if(dropBatch.value != "Batch No.") {
            if(txtCerti.value != ""){
                if((txtName.value != "")&&(txtEmail.value != "")&&(txtSocial.value != "")) {
                    return true;
                }
                else {
                    return false;
                }
            }
            else {
                return false;
            }
        }
        else {
            return false;
        }
    }
    else {
        return false;
    }
}

function addTrainee() {
    var matched = false;
    const path = ref(db, 'accounts/trainees/');

    get(path).then((snapshot)=>{
        if(snapshot.exists()) {
            snapshot.forEach((childSnapshot)=> {
                
                if(txtEmail.value == childSnapshot.val().email) {
                    matched = true;
                    generateID = childSnapshot.key;
                    
                }
            })

            if(matched == true) {
                update(ref(db, 'accounts/trainees/' + generateID), {
                    email: txtEmail.value,
                    name: txtName.value,
                    social: txtSocial.value,
                    contact: txtContact.value
                })
                .then(()=> {
                    set(ref(db, 'accounts/trainees/' + generateID + '/courses/' + dropCourse.value + '/batch/' + dropBatch.value), {
                        end: ""
                    })
                    .then(()=> {
                        set(ref(db, 'courses/' + dropCourse.value + "/batch/" + dropBatch.value + "/trainees/" + generateID) , {
                            email: txtEmail.value,
                            name: txtName.value,
                            social: txtSocial.value
                        })
                        .then(()=> {
                            txtName.value = "";
                            txtEmail.value = "";
                            txtSocial.value = "";
                            txtContact.value = "";
                            showTable();
                        })
                        .catch((error)=> {
                            alert(error.code);
                        })
                    })
                    .catch((error)=> {
                        alert(error.code);
                    })
                })
                .catch((error)=> {
                    alert(error.code);
                })
            }

            else {
                getID();
                set(ref(db, 'accounts/trainees/' + generateID), {
                    email: txtEmail.value,
                    status: "offline",
                    name: txtName.value,
                    lastOnline: "--.--.--",
                    social: txtSocial.value,
                    contact: txtContact.value,
                    role: "trainee",
                    warning: 0
                })
                .then(()=> {
                    set(ref(db, 'accounts/trainees/' + generateID + '/courses/' + dropCourse.value + '/batch/' + dropBatch.value), {
                        end: ""
                    })
                    .then(()=> {
                        set(ref(db, 'courses/' + dropCourse.value + "/batch/" + dropBatch.value + "/trainees/" + generateID) , {
                            email: txtEmail.value,
                            name: txtName.value,
                            social: txtSocial.value
                        })
                        .then(()=> {
                            txtName.value = "";
                            txtEmail.value = "";
                            txtSocial.value = "";
                            txtContact.value = "";
                            showTable();
                        })
                        .catch((error)=> {
                            alert(error.code);
                        })
                    })
                    .catch((error)=> {
                        alert(error.code);
                    })
                })
                .catch((error)=> {
                    alert(error.code);
                })
            }
        }
        else {
            getID();
            set(ref(db, 'accounts/trainees/' + generateID), {
                email: txtEmail.value,
                status: "offline",
                name: txtName.value,
                lastOnline: "--.--.--",
                social: txtSocial.value,
                contact: txtContact.value,
                role: "trainee",
                warning: 0
            })
            .then(()=> {
                
                set(ref(db, 'accounts/trainees/' + generateID + '/courses/' + dropCourse.value + '/batch/' + dropBatch.value), {
                    end: ""
                })
                .then(()=> {
                    set(ref(db, 'courses/' + dropCourse.value + "/batch/" + dropBatch.value + "/trainees/" + generateID) , {
                        email: txtEmail.value,
                        name: txtName.value,
                        social: txtSocial.value
                    })
                    .then(()=> {
                        txtName.value = "";
                        txtEmail.value = "";
                        txtSocial.value = "";
                        txtContact.value = "";
                        showTable();
                    })
                    .catch((error)=> {
                        alert(error.code);
                    })
                })
                .catch((error)=> {
                    alert(error.code);
                })
            })
            .catch((error)=> {
                alert(error);
            })
        }
    })
}

function addAuthTrainee() {
    if(checkFields()) {
        createUserWithEmailAndPassword(auth, txtEmail.value, '@Abcd1234')
        .then(()=> {
                
            var loginEmail = sessionStorage.getItem("sessEmail");
            var loginPw = sessionStorage.getItem("sessPw");
            signInWithEmailAndPassword(auth, loginEmail, loginPw)
            .then(()=> {
                addTrainee();
            })
           
        })
        .catch((error)=> {
            if(error.code == "auth/email-already-in-use") {
                addTrainee();
            }
            else {
                alert(error.code);
            }
        })

    }
    else {
        alert('Please make sure to complete all fields');
    }
}
btnConfirm.addEventListener('click', addAuthTrainee)

function changeTraineeStatus() {

    getEmail = this.parentElement.parentElement.children[2].value;
    
    get(ref(db, 'accounts/trainees')).then((snapshot)=> {
        snapshot.forEach((childSnapshot) => {
            if(getEmail == childSnapshot.val().email) {
                if(childSnapshot.val().status == "suspended") {
                    update(ref(db, 'accounts/trainees/' + childSnapshot.key), {
                        status: "offline"
                    })
                    showTraineeStatus();
                }
                else {
                    update(ref(db, 'accounts/trainees/' + childSnapshot.key), {
                        status: "suspended"
                    })
                    showTraineeStatus();   
                }
            }
        })
    })       
}

function deleteTrainee() {

    deleteID = this.parentElement.parentElement.children[0].value;
    dropCourse.value = this.parentElement.parentElement.children[5].value;
    dropBatch.value = this.parentElement.parentElement.children[6].value;

    remove(ref(db, 'accounts/trainees/' + deleteID + '/courses/' + dropCourse.value + '/batch/' + dropBatch.value))
    .then(()=> {
        remove(ref(db, 'courses/' + dropCourse.value + "/batch/" + dropBatch.value + "/trainees/" + deleteID))
        .then(() => {
            showBatch();
        })
    })
    .catch((error)=>{
        alert(error.code);
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



