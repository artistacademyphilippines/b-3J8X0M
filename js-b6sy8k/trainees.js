
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAuth, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";
import { getDatabase, ref, onValue, update, get, remove, query, orderByChild, orderByKey } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js";

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

var orderBy = "key";
var getEmail = "";
var deleteID = "";
var newID = [];
var dropCourse = document.getElementById('dropCourse');
var dropBatch = document.getElementById('dropBatch');
var divEntryID = document.getElementsByClassName('divEntryID');
var divEntryName = document.getElementsByClassName('divEntryName');
var divEntryEmail = document.getElementsByClassName('divEntryEmail');
var divEntryContact = document.getElementsByClassName('divEntryContact');
var tblEntries = document.getElementById('tblEntries');
var txtSearch = document.getElementById('txtSearch');

const btnDelete = document.getElementsByClassName('btnDelete');
const btnStatus = document.getElementsByClassName('btnStatus');
const lblRecords = document.getElementById('lblRecords');
const tblEntry = document.getElementsByClassName('tblEntry');

const headerID = document.getElementById('headerID');
const headerName = document.getElementById('headerName');
const headerEmail = document.getElementById('headerEmail');

//-----------------------------Select Course--------------------------

function loadCourse() {
    const path = ref(db, 'courses/');
    get(path).then((snapshot) => {
        
        var append = `<option value="Select Course" class="dropOption">Select Course</option>`;

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

                        tblEntry[i].children[8].children[0].style.opacity = "1";   
                        tblEntry[i].children[8].children[0].src = "../img-h6rv2c/btnSuspended.png";
                        
                        tblEntry[i].children[8].children[1].style.opacity = "1";
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

                        tblEntry[i].children[8].children[0].style.opacity = ".25";    
                        tblEntry[i].children[8].children[0].src = "../img-h6rv2c/btnConfirm.png"; 
                    
                        tblEntry[i].children[8].children[1].style.opacity = "1";
                    }

                    else if (childSnapshot.val().status == 'online') {
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

                        tblEntry[i].children[8].children[0].style.opacity = "1";    
                        tblEntry[i].children[8].children[0].src = "../img-h6rv2c/btnConfirm.png";   
                        tblEntry[i].children[8].children[1].style.opacity = "1";
                    }

                    else if (childSnapshot.val().status == 'deletion') {
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

                        tblEntry[i].children[8].children[0].style.opacity = "1";
                        tblEntry[i].children[8].children[0].src = "../img-h6rv2c/btnRemove.png";      
                        tblEntry[i].children[8].children[1].style.opacity = "0";

    
                        tblEntry[i].children[8].children[0].removeEventListener('click', changeTraineeStatus);
              
                    }
                }
            }
        }) 
    })
}
newTraineeStatus();

function deleteTrainee() {

    deleteID = this.parentElement.parentElement.children[0].value;
    
    //get if there are courses
    const path1 = ref(db, 'accounts/trainees/' + deleteID + '/courses/');
    onValue(path1, (snapshot)=> {
        if(snapshot.size > 0) {
            snapshot.forEach((childSnapshot)=> {
                var arrCourses = childSnapshot.key; //got Courses
                
                const path2 = ref(db, 'accounts/trainees/' + deleteID + '/courses/' + arrCourses + '/batch/');
                onValue(path2, (snapshot)=>{
                    snapshot.forEach((childSnapshot)=> {
                        var arrBatch = childSnapshot.key; //got Batches

                        remove(ref(db, 'courses/' + arrCourses + '/batch/' + arrBatch + '/trainees/' + deleteID))
                        .then(()=> {
                            remove(ref(db, 'accounts/trainees/' + deleteID + '/courses/' + arrCourses + '/batch/' + arrBatch))
                            .then(()=>{
                                //showBatch();
                            })
                        })
                       
                    })
                })
            })
        }
        
        update(ref(db, 'accounts/trainees/' + deleteID), {
            status: "deletion"
        })
    })



    /*
    remove(ref(db, 'accounts/trainees/' + deleteID + '/courses/' + dropCourse.value + '/batch/' + dropBatch.value))
    .then(()=> {
        remove(ref(db, 'courses/' + dropCourse.value + "/batch/" + dropBatch.value + "/trainees/" + deleteID))
        .then(() => {
            showBatch();
        })
        .catch((error)=> {
            alert(error.code);
        })
    })
    .catch((error)=>{
        alert(error.code);
    }) */
}

function changeTraineeStatus() {

    getEmail = this.parentElement.parentElement.children[2].value;

    get(ref(db, 'accounts/trainees')).then((snapshot)=> {
        snapshot.forEach((childSnapshot) => {
            if(getEmail == childSnapshot.val().email) {
                if(childSnapshot.val().status == "suspended") {
                    update(ref(db, 'accounts/trainees/' + childSnapshot.key), {
                        status: "offline"
                    })
                    newTraineeStatus();
                }
                else {
                    update(ref(db, 'accounts/trainees/' + childSnapshot.key), {
                        status: "suspended"
                    })
                    newTraineeStatus();   
                }
            }
        })
    })       
}

function showBatch() {

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
                var arrName = childSnapshot.val().name;
                var arrEmail = childSnapshot.val().email;
                var arrSocial = childSnapshot.val().social;
            
                get(ref(db, 'accounts/trainees/' + arrID)).then((snapshot)=> {
                    var arrTimestamp = snapshot.val().lastOnline;
                    var arrContact = snapshot.val().contact;
                    
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
                })
            })
        })
    }
    else {
        tblEntries.innerHTML = "";
        lblRecords.innerHTML = "";    
    }
}

function loadBatch() {
    if(dropBatch.value != "Select Course") {

    const path = ref(db, 'courses/' + dropCourse.value + "/batch/")
    get(path).then((snapshot) => {
        var append = `<option value="Batch No." class="dropOption">Batch No.</option>`;
        dropBatch = document.getElementById('dropBatch');

            snapshot.forEach((childSnapshot) => {
            
            append += `<option value="${childSnapshot.key}" class="dropOption">${childSnapshot.key}</option>`;
            
        })
        dropBatch.innerHTML = append;
        dropBatch.value = dropBatch.lastElementChild.value;
        showBatch();
    })
    }
    else {
        txtCerti.value = "";
    }
}

function clickBatch() {
    txtSearch.value = "";
    showBatch();
}

function searchOrLoadBatch() {
    if((txtSearch.value == '*')&&(dropCourse.value == "Select Course")) {
        findAll();
    }
    else if((txtSearch.value == '*')&&(dropCourse.value != "Select Course")) {
        txtSearch.value = "";
        loadBatch();
    }
    else {
        loadBatch();
    }
}

dropCourse.addEventListener('change', searchOrLoadBatch);
dropBatch.addEventListener('change', clickBatch);

function filterBy() {

    if(txtSearch.value == "") {
        if(this.id == 'headerName') {
            orderBy = 'name';  
        }
        else if(this.id == "headerEmail") {
            orderBy = 'email';  
        }
        else {
            orderBy = 'key';
        }
        showBatch();
    }

    else {
        alert('Cannot use filter on search');
    }
    
}
headerID.addEventListener('click', filterBy);
headerName.addEventListener('click', filterBy);
headerEmail.addEventListener('click', filterBy)


//--------------------------Search box------------------------


function findAll() {
    const path1 = ref(db, 'accounts/trainees/'); //get basic data
    onValue(path1, (snapshot)=> {
        var child = "";
        var append = "";

        snapshot.forEach((childSnapshot)=> {
            var arrID = childSnapshot.key;
            var arrName = childSnapshot.val().name;
            var arrEmail = childSnapshot.val().email;
            var arrSocial = childSnapshot.val().social;
            var arrTimestamp = childSnapshot.val().lastOnline;
            var arrContact = childSnapshot.val().contact;

            const path2 = ref(db, 'accounts/trainees/' + arrID + '/courses/'); // get courses
            onValue(path2, (snapshot)=> {
                if(snapshot.size > 0) { //if there's any courses
                    snapshot.forEach((childSnapshot)=> {
                        var arrCourse = childSnapshot.key;

                        const path3 = ref(db, 'accounts/trainees/' + arrID + '/courses/' + arrCourse + '/batch/'); // get batches
                        onValue(path3, (snapshot)=> {
                            snapshot.forEach((childSnapshot)=> {
                                var arrBatch = childSnapshot.key;

                                child+=
                                `<div class="tblEntry">
                                    <input type="text" class="divEntryID" value="${arrID}" readonly>
                                    <input type="text" class="divEntryName" value="${arrName}" readonly>
                                    <input type="text" class="divEntryEmail" value="${arrEmail}" readonly>
                                    <input type="text" class="divEntrySocial" onclick="window.open('${arrSocial}','_blank')" value = "Link" readonly>
                                    <input type="text" class="divEntryContact" value="${arrContact}" readonly>
                                    <input type="text" class="divEntryCourse" value="${arrCourse}" readonly>
                                    <input type="text" class="divEntryBatch" value="${arrBatch}" readonly>
                                    <input type="text" class="divEntryTimestamp" value="${arrTimestamp}" readonly>
                                    <div class="imgEntry">
                                        <img src="img-h6rv2c/btnConfirm.png" class="btnStatus">
                                        <img src="img-h6rv2c/btnDelete.png" class="btnDelete">
                                    </div>
                                </div>`;
                                
                            })
                            
                        })        
                    })   
                }
                else {
                    child+=
                        `<div class="tblEntry">
                            <input type="text" class="divEntryID" value="${arrID}" readonly>
                            <input type="text" class="divEntryName" value="${arrName}" readonly>
                            <input type="text" class="divEntryEmail" value="${arrEmail}" readonly>
                            <input type="text" class="divEntrySocial" onclick="window.open('${arrSocial}','_blank')" value = "Link" readonly>
                            <input type="text" class="divEntryContact" value="${arrContact}" readonly>
                            <input type="text" class="divEntryCourse" value="------" readonly>
                            <input type="text" class="divEntryBatch" value="------" readonly>
                            <input type="text" class="divEntryTimestamp" value="${arrTimestamp}" readonly>
                            <div class="imgEntry">
                                <img src="img-h6rv2c/btnConfirm.png" class="btnStatus">
                                <img src="img-h6rv2c/btnDelete.png" class="btnDelete">
                            </div>
                        </div>`;
                }
            })
        })

        append = append + child;
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
            
    })

}

function findAllBatch() {
        
        const path1 = ref(db, 'courses/' + dropCourse.value + '/batch/'); //get batches
        onValue(path1, (snapshot) => {

            var child = "";
            var append = "";
            var arrBatch = [];
            var x = 0;
            
            snapshot.forEach((childSnapshot)=> {

                var arrCourse = dropCourse.value;
                arrBatch[x] = childSnapshot.key; //got the batch no.
                
                const path2 = ref(db, 'courses/' + dropCourse.value + '/batch/' + arrBatch[x] + '/trainees/'); // go to specific batch no.
                onValue(path2, (snapshot)=> {
                    
                    
                    snapshot.forEach((childSnapshot)=> { //get IDs
                        
                        var arrID = childSnapshot.key;
                        
                        const path3 = ref(db, 'accounts/trainees/' + arrID); //get accounts via ID
                        onValue(path3, (snapshot)=> {
                            
                            var arrName = snapshot.val().name;
                            var arrEmail = snapshot.val().email;
                            var arrContact = snapshot.val().contact;
                            var arrSocial = snapshot.val().social;
                            var arrTimestamp = snapshot.val().lastOnline;

                            child += 
                                `<div class="tblEntry">
                                    <input type="text" class="divEntryID" value="${arrID}" readonly>
                                    <input type="text" class="divEntryName" value="${arrName}" readonly>
                                    <input type="text" class="divEntryEmail" value="${arrEmail}" readonly>
                                    <input type="text" class="divEntrySocial" onclick="window.open('${arrSocial}','_blank')" value = "Link" readonly>
                                    <input type="text" class="divEntryContact" value="${arrContact}" readonly>
                                    <input type="text" class="divEntryCourse" value="${arrCourse}" readonly>
                                    <input type="text" class="divEntryBatch" value="${arrBatch[x]}" readonly>
                                    <input type="text" class="divEntryTimestamp" value="${arrTimestamp}" readonly>
                                    <div class="imgEntry">
                                        <img src="img-h6rv2c/btnConfirm.png" class="btnStatus">
                                        <img src="img-h6rv2c/btnDelete.png" class="btnDelete">
                                    </div>
                                </div>`;                   
                        })
                        
                    })
                    
                })
                 
                x++;
            })
            append = append + child;

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
        })
        
}

function findEmail() {

    const path1 = ref(db, 'accounts/trainees/');
    onValue(path1, (snapshot)=> {
        var append = "";
        var child = "";
        snapshot.forEach((childSnapshot)=> { //get each trainee info on the accounts
            var arrID = childSnapshot.key;
            var arrName = childSnapshot.val().name;
            var arrEmail = childSnapshot.val().email;
            var arrSocial = childSnapshot.val().social;
            var arrContact = childSnapshot.val().contact;
            var arrTimestamp = childSnapshot.val().lastOnline;

            if(txtSearch.value == arrEmail) {

                const path2 = ref(db, 'accounts/trainees/' + arrID + '/courses/'); // get courses for each ID
                onValue(path2, (snapshot)=> {
                    if(snapshot.size > 0) { //check if there is course taken

                        snapshot.forEach((childSnapshot)=> {
                            var arrCourse = childSnapshot.key;
                            
                            const path3 = ref(db, 'accounts/trainees/' + arrID + '/courses/' + arrCourse + '/batch/');
                            onValue(path3, (snapshot)=> {
                                snapshot.forEach((childSnapshot)=> {
                                    var arrBatch = childSnapshot.key;
        
                                    child+=
                                    `<div class="tblEntry">
                                        <input type="text" class="divEntryID" value="${arrID}" readonly>
                                        <input type="text" class="divEntryName" value="${arrName}" readonly>
                                        <input type="text" class="divEntryEmail" value="${arrEmail}" readonly>
                                        <input type="text" class="divEntrySocial" onclick="window.open('${arrSocial}','_blank')" value = "Link" readonly>
                                        <input type="text" class="divEntryContact" value="${arrContact}" readonly>
                                        <input type="text" class="divEntryCourse" value="${arrCourse}" readonly>
                                        <input type="text" class="divEntryBatch" value="${arrBatch}" readonly>
                                        <input type="text" class="divEntryTimestamp" value="${arrTimestamp}" readonly>
                                        <div class="imgEntry">
                                            <img src="img-h6rv2c/btnConfirm.png" class="btnStatus">
                                            <img src="img-h6rv2c/btnDelete.png" class="btnDelete">
                                        </div>
                                    </div>`;
                                    
                                })
                            })
                            
                            
                        })
                    
                    }
                    else {
                        var arrCourse = "------";
                        var arrBatch = "------";

                        child+=
                            `<div class="tblEntry">
                                <input type="text" class="divEntryID" value="${arrID}" readonly>
                                <input type="text" class="divEntryName" value="${arrName}" readonly>
                                <input type="text" class="divEntryEmail" value="${arrEmail}" readonly>
                                <input type="text" class="divEntrySocial" onclick="window.open('${arrSocial}','_blank')" value = "Link" readonly>
                                <input type="text" class="divEntryContact" value="${arrContact}" readonly>
                                <input type="text" class="divEntryCourse" value="${arrCourse}" readonly>
                                <input type="text" class="divEntryBatch" value="${arrBatch}" readonly>
                                <input type="text" class="divEntryTimestamp" value="${arrTimestamp}" readonly>
                                <div class="imgEntry">
                                    <img src="img-h6rv2c/btnConfirm.png" class="btnStatus">
                                    <img src="img-h6rv2c/btnDelete.png" class="btnDelete">
                                </div>
                            </div>`;
                        
                    }

                    append = append + child;
                })
                
            }
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
        })
        
    })
}

function findID() {

    const path1 = ref(db, 'accounts/trainees/');
    onValue(path1, (snapshot)=> {
        var append = "";
        var child = "";
        snapshot.forEach((childSnapshot)=> { //get each trainee info on the accounts
            var arrID = childSnapshot.key;
            var arrName = childSnapshot.val().name;
            var arrEmail = childSnapshot.val().email;
            var arrSocial = childSnapshot.val().social;
            var arrContact = childSnapshot.val().contact;
            var arrTimestamp = childSnapshot.val().lastOnline;

            if(txtSearch.value == arrID) {

                const path2 = ref(db, 'accounts/trainees/' + arrID + '/courses/'); // get courses for each ID
                onValue(path2, (snapshot)=> {
                    if(snapshot.size > 0) { //check if there is course taken

                        snapshot.forEach((childSnapshot)=> {
                            var arrCourse = childSnapshot.key;
                            
                            const path3 = ref(db, 'accounts/trainees/' + arrID + '/courses/' + arrCourse + '/batch/');
                            onValue(path3, (snapshot)=> {
                                snapshot.forEach((childSnapshot)=> {
                                    var arrBatch = childSnapshot.key;
        
                                    child+=
                                    `<div class="tblEntry">
                                        <input type="text" class="divEntryID" value="${arrID}" readonly>
                                        <input type="text" class="divEntryName" value="${arrName}" readonly>
                                        <input type="text" class="divEntryEmail" value="${arrEmail}" readonly>
                                        <input type="text" class="divEntrySocial" onclick="window.open('${arrSocial}','_blank')" value = "Link" readonly>
                                        <input type="text" class="divEntryContact" value="${arrContact}" readonly>
                                        <input type="text" class="divEntryCourse" value="${arrCourse}" readonly>
                                        <input type="text" class="divEntryBatch" value="${arrBatch}" readonly>
                                        <input type="text" class="divEntryTimestamp" value="${arrTimestamp}" readonly>
                                        <div class="imgEntry">
                                            <img src="img-h6rv2c/btnConfirm.png" class="btnStatus">
                                            <img src="img-h6rv2c/btnDelete.png" class="btnDelete">
                                        </div>
                                    </div>`;
                                    
                                })
                            })
                            
                            
                        })
                    
                    }
                    else {
                        var arrCourse = "------";
                        var arrBatch = "------";

                        child+=
                            `<div class="tblEntry">
                                <input type="text" class="divEntryID" value="${arrID}" readonly>
                                <input type="text" class="divEntryName" value="${arrName}" readonly>
                                <input type="text" class="divEntryEmail" value="${arrEmail}" readonly>
                                <input type="text" class="divEntrySocial" onclick="window.open('${arrSocial}','_blank')" value = "Link" readonly>
                                <input type="text" class="divEntryContact" value="${arrContact}" readonly>
                                <input type="text" class="divEntryCourse" value="${arrCourse}" readonly>
                                <input type="text" class="divEntryBatch" value="${arrBatch}" readonly>
                                <input type="text" class="divEntryTimestamp" value="${arrTimestamp}" readonly>
                                <div class="imgEntry">
                                    <img src="img-h6rv2c/btnConfirm.png" class="btnStatus">
                                    <img src="img-h6rv2c/btnDelete.png" class="btnDelete">
                                </div>
                            </div>`;
                        
                    }

                    append = append + child;
                })
                
            }
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
        })
        
    })
}

function search() {

    if(txtSearch.value == '*') {
        if(dropCourse.value != "Select Course") {
            
            findAllBatch();
        }
        else {
            
            findAll();
        }
        
    }

    else if(txtSearch.value.includes('@')) {
        
        findEmail();
        
    }

    else if(txtSearch.value == "") {
        if((dropCourse.value != "Select Course")&&(dropBatch.value != "Batch No.")) {
            showBatch();
        }
        else {

            tblEntries.innerHTML = "";
        }
    }

    else {
          
        findID();
        
    }
    
}
txtSearch.addEventListener('input', search);

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









