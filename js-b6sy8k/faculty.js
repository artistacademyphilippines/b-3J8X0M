
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";
import { getDatabase, ref, onValue, update, child, get, set, remove, query, orderByChild } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js";

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

//--------------------------------Courses--------------------------------------

var txtCourseTitle = null;
var oldCourse = null;
const btnAddCourse = document.getElementById('btnAddCourse');
const btnDelCourse = document.getElementsByClassName('btnDelCourse');
const btnEditCourse = document.getElementsByClassName('btnEditCourse');

function getCourses() {
    txtCourseTitle = document.getElementById('txtCourseTitle');
    return txtCourseTitle;
}

function changeCourse() {
    getCourses();
    oldCourse = this.parentElement.firstElementChild.innerText;
    txtCourseTitle.value = oldCourse;
    return oldCourse;
}

function deleteCourse () {
    getCourses();
    var delCourse = this.parentElement.firstElementChild.innerText;

    var lblConfirm = "Permanently delete this record?";
    if(confirm(lblConfirm) == true) {
        remove(ref(db, 'courses/' + delCourse))
        .then(()=> {
            displayCourse();
            updateDropCourse();
        })
    }
}

function displayCourse() {
    
    const path = ref(db, 'courses/');
    var divCourses = document.getElementById('divCourses');

    for(var a=0; a < divCourses.children; a++){
        divCourses.children[a].remove();
    }

    onValue(path, (snapshot)=> {
        var entries = "";
        snapshot.forEach((childSnapshot)=> {
            entries += `
                <div class="facultyEntry">
                    <div class="facultyTitle"><h1>${childSnapshot.key}</h1></div>
                    <img src="img-h6rv2c/btnDelete.png" class="btnDelCourse">
                    <img src="img-h6rv2c/btnEdit.png" class="btnEditCourse" >
                </div>
            `;
            
        })
        divCourses.innerHTML = entries;
        
        for(var a=0; a < btnDelCourse.length; a++) {
            btnEditCourse[a].addEventListener('click', changeCourse);
            btnDelCourse[a].addEventListener('click', deleteCourse);
        }
    })
}
displayCourse();

function addUpdateCourse() {
    getCourses();

    const path = ref(db);
    get(child(path, 'courses/' + oldCourse)).then((snapshot) => {
        if(snapshot.exists()) {
            var data = snapshot.val()

            set((ref(db, 'courses/' + txtCourseTitle.value)),data)
            .then(()=> {
                remove(ref(db, 'courses/' + oldCourse));
                displayCourse();
                updateDropCourse();
            });
        }
        else {
            var newKey = txtCourseTitle.value;
            set(ref(db, 'courses/' + newKey), {
                batch: "",
                mentor: "",
                resources: ""
            })
            .then(()=> {
                displayCourse();
                updateDropCourse();
            });
        }
        txtCourseTitle.value = "";
    })
}
btnAddCourse.addEventListener('click', addUpdateCourse);


//-------------------------------Mentors--------------------------------------

var generateID = "";
var txtMentorName, txtMentorEmail = null;
const btnAddMentor = document.getElementById('btnAddMentor');
var divMentors = document.getElementById('divMentors');
const btnSuspendMentor = document.getElementsByClassName('btnSuspendMentor');

function getID() {
    generateID = "M";
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

function getMentor() {
    txtMentorName = document.getElementById('txtMentorName');
    txtMentorEmail = document.getElementById('txtMentorEmail');

    return txtMentorName, txtMentorEmail;
}

function changeMentorStatus() {

    const divMentor = this.parentElement.children[1];
    
    get(ref(db, 'accounts/mentors')).then((snapshot)=> {
        snapshot.forEach((childSnapshot) => {
            if(divMentor.innerText == childSnapshot.val().email) {
                if(childSnapshot.val().status == "suspended") {
                    update(ref(db, 'accounts/mentors/' + childSnapshot.key), {
                        status: "offline"
                    })
                }
                else {
                    update(ref(db, 'accounts/mentors/' + childSnapshot.key), {
                        status: "suspended"
                    })   
                }
            }
        })
    })       
}

function displayMentor(){
    const path = ref(db, 'accounts/mentors/');
    const newQuery = query(path , orderByChild('name'));
    
    onValue(newQuery , (snapshot) => {

        var append = "";
        var arrStatus = [];
        var i = 0;

        snapshot.forEach((childSnapshot)=> {

            append += `
                <div class="facultyEntry">
                    <div class="facultyName"><h1>${childSnapshot.val().name}</h1></div>
                    <div class="facultyEmail"><h1>${childSnapshot.val().email}</h1></div>
                    <img src="img-h6rv2c/btnConfirm.png" class="btnSuspendMentor">
                </div>
            `;

            //store status of record
            arrStatus[i] = childSnapshot.val().status;
            i++;
        })

        //append all elements
        divMentors.innerHTML = append;

        for(var a=0; a < divMentors.childElementCount; a++) {
        
            if(arrStatus[a] == "suspended") {
                divMentors.children[a].children[0].firstElementChild.style.color = "salmon";
                divMentors.children[a].children[1].firstElementChild.style.color = "salmon";
                divMentors.children[a].children[2].src = "../img-h6rv2c/btnSuspended.png"
                
                divMentors.children[a].children[0].firstElementChild.style.opacity = "1";
                divMentors.children[a].children[1].firstElementChild.style.opacity = "1";
                divMentors.children[a].children[2].style.opacity = "1";
            }
            else if (arrStatus[a] == "online") {
                divMentors.children[a].children[0].firstElementChild.style.color = "white";
                divMentors.children[a].children[1].firstElementChild.style.color = "white";
                divMentors.children[a].children[2].src = "../img-h6rv2c/btnConfirm.png";
    
                divMentors.children[a].children[0].firstElementChild.style.opacity = "1";
                divMentors.children[a].children[1].firstElementChild.style.opacity = "1";
                divMentors.children[a].children[2].style.opacity = "1";
            }
            else {
                divMentors.children[a].children[0].firstElementChild.style.color = "white";
                divMentors.children[a].children[1].firstElementChild.style.color = "white";
                divMentors.children[a].children[2].src = "../img-h6rv2c/btnConfirm.png"
    
                divMentors.children[a].children[0].firstElementChild.style.opacity = ".25";
                divMentors.children[a].children[1].firstElementChild.style.opacity = ".25";
                divMentors.children[a].children[2].style.opacity = ".25";    
            }
    
        }

        //add event listeners to all delete buttons
        for(var a = 0; a < btnSuspendMentor.length; a++) {
            btnSuspendMentor[a].addEventListener('click', changeMentorStatus);
        } 

    })  
}
displayMentor();

function addMentor() {

    getID();
    getMentor();
  
    set(ref(db, 'accounts/mentors/' + generateID), {
        email: txtMentorEmail.value,
        name: txtMentorName.value,
        devices: 0,
        lastOnline: "",
        status: "offline",
        warning: 0
    })
    .then(()=> {
        displayMentor();
        updateDropMentor();
        txtMentorEmail.value = "";
        txtMentorName.value = "";
    })
    .catch((error)=> {
        alert(error.code);
    })           
}

function addAuthMentor() {
    getMentor();

    if((txtMentorName.value != "") && (txtMentorEmail.value != "")) {
        
        createUserWithEmailAndPassword(auth, txtMentorEmail.value, '@Abcd1234')
        .then(()=>{
            
            var loginEmail = sessionStorage.getItem("sessEmail");
            var loginPw = sessionStorage.getItem("sessPw");
            signInWithEmailAndPassword(auth, loginEmail, loginPw)
            .then(()=> {
                addMentor();
            })
          
        })
        .catch((error) => {
            addMentor();
        }) 
    }
}
btnAddMentor.addEventListener('click', addAuthMentor);


//---------------------------Assigning Mentors-----------------------

var dropCourse = document.getElementById('dropCourseTitle');
var dropMentor = document.getElementById('dropMentorName');
const btnAddAssignment = document.getElementById('btnAddAssignment');
const btnDelAssignment = document.getElementsByClassName('btnDelAssignment');

function updateDropCourse() {
    var append = `<option class="optionFaculty" value="Select Course">Select Course</option>`;
    const path = ref(db, 'courses/');

    get(path).then((snapshot) => {

        for(var a = 0; a < dropCourse.children; a++) {
            console.log(dropCourse.children);
            dropCourse.children[a].remove();
        }

        if(snapshot.exists()) {

            snapshot.forEach((childSnapshot)=> {

                append += `
                <option class="optionFaculty" value="${childSnapshot.key}">${childSnapshot.key}</option>
                `;
            })
            dropCourse.innerHTML = append;
        }
    })
}
updateDropCourse();

function updateDropMentor() {
    var append = `<option class="optionFaculty" value="Select Mentor">Select Mentor</option>`;
    const path = ref(db, 'accounts/mentors/');

    get(path).then((snapshot) => {

        for(var a = 0; a < dropMentor.children; a++) {
            console.log(dropMentor.children);
            dropMentor.children[a].remove();
        }

        if(snapshot.exists()) {

            snapshot.forEach((childSnapshot)=> {

                append += `
                <option class="optionFaculty" value="${childSnapshot.val().name}">${childSnapshot.val().name}</option>
                `;
            })
            dropMentor.innerHTML = append;
        }
    })
}
updateDropMentor();

function deleteFaculty() {
    const facultyEntry = this.parentElement.children[0];

    console.log(facultyEntry);

    const path = ref(db, 'courses/');
    onValue(path, (snapshot)=> {
        snapshot.forEach((childSnapshot) => {
            if(facultyEntry.firstElementChild.innerText == childSnapshot.key) {
                update(ref(db, 'courses/' + childSnapshot.key), {
                    mentor: ""
                })
                .then(() => {
                    facultyEntry.remove();
                })
                .catch((error)=> {
                    alert(error.code);
                })
            }
        })
    })
}

function displayFaculty() {
    const path = ref(db, 'courses/');
    
    onValue(path, (snapshot) => {
        var append = "";
        const divAssignment = document.getElementById('divAssignment');
        if(snapshot.exists()) {
            snapshot.forEach((childSnapshot) => {

                if(childSnapshot.val().mentor) {

                    append +=
                    `<div class="facultyEntry">
                        <div class="facultyDesc"><h1>${childSnapshot.key}</h1></div>
                        <div class="facultyDesc"><h1>${childSnapshot.val().mentor}</h1></div>
                        <img src="img-h6rv2c/btnDelete.png" class="btnDelAssignment">
                        </div>`;
                }
            })
            divAssignment.innerHTML = append;

            for(var a = 0; a < divAssignment.childElementCount; a++) {
                btnDelAssignment[a].addEventListener('click', deleteFaculty);
            }

        }
    })
}
displayFaculty();

function assignFaculty() {
    if((dropCourse.value != "Select Course") && (dropMentor.value != "Select Mentor")) {
        update(ref(db, 'courses/' + dropCourse.value), {
            mentor: dropMentor.value
        })
        .then(() => {
            dropCourse.value = "Select Course";
            dropMentor.value = "Select Mentor";
            displayFaculty();
        })
        .catch((error) => {
            alert(error.code);
        })
    }
    else {
        dropCourse.value = "Select Course";
        dropMentor.value = "Select Mentor";
    }
}
btnAddAssignment.addEventListener('click', assignFaculty);


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



