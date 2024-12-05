const navSignupBtn = document.getElementById("sign-up-btn");
const navLoginBtn = document.getElementById("login-btn");
const signupContainer = document.getElementById("sign-up-form");
const imageInput = document.getElementById("profile-image");
const forgotPass = document.querySelector("#forgotPass");

const signupEmailInput = document.getElementById("user-email");
const signupPasswordInput = document.getElementById("user-password");
const signupBtn = document.getElementById("signupBtn");

let userSignup = false;

function userVerify(email, password) {
  userSignup = true;

  if (userSignup) {
    if (email == "" || password == "") {
      alert("Please fill details?");
    } else {
      localStorage.setItem("userSignup", "YES");
      localStorage.setItem(
        "userSignupDetails",
        JSON.stringify([email, password])
      );
      setTimeout(() => {
        let userEmailMsg = JSON.parse(
          localStorage.getItem("userSignupDetails")
        );
        alert(
          `Hey ${userEmailMsg[0]}, Welcome to Bugcode website. Please login your account!`
        );
        location.reload();
      }, 600);
    }
  }
}

let userSignupActive = localStorage.getItem("userSignup");
if (userSignupActive === "YES") {
  signupContainer.classList = "remove-sign-up-form";
  navSignupBtn.classList = "remove-sign-up-btn";
  navLoginBtn.classList = "active-login-btn";
}

signupBtn.addEventListener("click", (e) => {
  let emailValue = signupEmailInput.value;
  let passwordValue = signupPasswordInput.value;
  e.preventDefault();
  userVerify(emailValue, passwordValue);
});

navSignupBtn.addEventListener("click", () => {
  signupContainer.classList.toggle("active-sign-up-form");
});

navLoginBtn.addEventListener("click", () => {
  loginContainer.classList.toggle("active-login-form");
});

imageInput.addEventListener("change", (e) => {
  e.preventDefault();
  const fr = new FileReader();

  fr.readAsDataURL(imageInput.files[0]);

  fr.addEventListener("load", () => {
    const url = fr.result;

    localStorage.setItem("my-profile", url);
    alert("Your Profile picture uploaded!");
  });
});

const renderImage = () => {
  let image = localStorage.getItem("my-profile");

  let setImage = document.querySelector("#user-image");

  setImage.src = image;
};

renderImage();
