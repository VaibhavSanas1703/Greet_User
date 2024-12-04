
const userName = document.getElementById('user-name');
const LoginEmailInput = document.getElementById('login-user-email');
const LoginPasswordInput = document.getElementById('login-user-password');
const loginBtn = document.getElementById('loginBtn');
const loginContainer = document.getElementById('login-form');
const userProfileSection = document.querySelector('.user-profile-section');
const userNameDisplay = document.getElementById('username-display');
const userInfoSection = document.querySelector('.user-info-section');
const userIcon = document.querySelector('.user-icon');
const logoutBtn = document.getElementById('logOut');
const headingName = document.getElementById('name-heading');
const editProfile = document.getElementById('editProfile');

let userLogin = false;

function getSignupDatafromLS(){
     return JSON.parse(localStorage.getItem('userSignupDetails'));
}

let allSignupDetails = getSignupDatafromLS();

loginBtn.addEventListener('click',(e) => {
     e.preventDefault();
     let loginEmailvalue = LoginEmailInput.value;
     let loginpasswordvalue = LoginPasswordInput.value;
    
     if(loginEmailvalue == '' || loginpasswordvalue == '' || userName.value == ''){
          alert('please enter details?')
     }
     else{
          if(loginEmailvalue === allSignupDetails[0] && loginpasswordvalue === allSignupDetails[1]){
               showLoginInfo()
          }
          else if(loginEmailvalue !== allSignupDetails[0]){
               alert('incorrect email')
          }
          else if(loginpasswordvalue !== allSignupDetails[1]){
               alert('incorrect password')
          }
     }
})



function showLoginInfo() {
     userLogin = true;
     if(userLogin){
          localStorage.setItem('userLogin','YES')
          localStorage.setItem('username',userName.value)
     }
     setTimeout(() => {
          alert(`Welcome ${allSignupDetails[0]}!!`)
          location.reload()
     }, 1000);
}

let greetMsg = greet()

function greet() {
     let date = new Date()
     let hour = date.getHours()
     let greetMsg;

     if(hour > 5 && hour < 12){
          greetMsg = 'Good Morning!'
     }
     else if(hour >= 12 && hour < 18){
          greetMsg = 'Good Afternoon!'
     }
     else{
          greetMsg = 'Good Evening!'
     }

     return greetMsg;
}


let userNamefromLS = localStorage.getItem('username');
let userLoginActive = localStorage.getItem('userLogin');
if(userLoginActive === 'YES'){
     navLoginBtn.classList = 'remove-login-btn' 
     loginContainer.classList = 'remove-login-form'
     userProfileSection.classList = 'active-user-profile-section'
     userNameDisplay.innerHTML = `${greetMsg} ${userNamefromLS}`
     headingName.innerHTML = `Welcome! ${userNamefromLS} 👋`
}


userIcon.addEventListener('click',() => {
     userInfoSection.classList.add('active-user-info')
     setTimeout(() => {
          userInfoSection.classList.remove('active-user-info')
     }, 4000);
})

logoutBtn.addEventListener('click',() => {
     localStorage.clear()
     setTimeout(() => {
          let logoutMsg = confirm('Do you want to log your account?')
          if(logoutMsg){
               setTimeout(() => {
                    location.reload()
               }, 1000);
               return;
          }
     }, 1000);
})

editProfile.addEventListener('click',() => {
     let updateName = prompt('Enter your new name!')
     setTimeout(() => {
          if(updateName){
               localStorage.setItem('username',updateName)
               setTimeout(() => {
                    alert('Name Changed successfully')
                    setTimeout(() => {
                         location.reload()
                    }, 1500);
               }, 1000);
          }
          else{
               return;
          }
     }, 500);
})
