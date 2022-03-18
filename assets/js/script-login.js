const data = [
  {
    username: 'admin',
    password: '456789'
  },
  {
    username: 'admin1',
    password: '123456'
  },
  {
    username: 'admin2',
    password: '123789'
  }
]

// const data1=[]

function createData(username, password) {
  this.username = username;
  this.password = password;
}

// Text
const loginText = document.querySelector('.login-text')
// Login
const loGin = document.querySelector('.login-main')
const modal = document.querySelector('.login-form')
const closebtn = document.querySelector('.close-input-form')
const userName = document.querySelector('.user-form')
const passWord = document.querySelector('.password-form')
const loginAdmin = document.querySelector('.login')
const formLogin = document.querySelector('.user-pw')
const backbtn = document.querySelector('.back-input')
// Register
const creaTe = document.querySelector('.register-main')
const modalCreate = document.querySelector('.register-form')
const closebtn1 = document.querySelector('.close-register-form')
const createAcc = document.querySelector('.register')
const userNameCreate = document.querySelector('.create-user-form')
const passWordCreate = document.querySelector('.create-password-form')




// console.log(modal)
// console.log(loGin)
// console.log(closebtn)
// console.log(userName)
// console.log(password)
// console.log(loginAdmin)
// console.log(formLogin.action)
// console.log(backbtn)
// console.log(creaTe)
// console.log(modalCreate)
// console.log(closebtn1)
// console.log(createAcc)
// console.log(loginText)
// console.log(accountText)


// Change color text
function generateColor() {
  let color;
  let r = Math.floor(Math.random() * 256)
  let g = Math.floor(Math.random() * 256)
  let b = Math.floor(Math.random() * 256)

  color = `rgb(${r},${g},${b})`
  loginText.style.color = color;
}
setInterval(generateColor,1000)


// Open Login
loGin.onclick = function () {
  modal.style.display = 'flex'
}

// Close Login
closebtn.onclick = function () {
  modal.style.display = 'none'
}

// Open Register
creaTe.onclick = function () {
  modalCreate.style.display = 'flex'
}

// // Close Register
closebtn1.onclick = function () {
  modalCreate.style.display = 'none'
}


// console.log(!(userName.value == "admin"))
// console.log(password.value = "123456")

// function checkLogin(){
//     if(!(userName.value == "admin") || !!(password.value == "123456")){
//         return false
//     }
//     else if((userName.value == "admin") && (password.value == "123456")){
//         return true
//     }
// }

// if(loginAdmin.onclick === checkLogin())
// {
//     console.log("Đăng nhập thành công!!")
// }


// // Check register
var isRegister = false;


createAcc.onclick = function () {
  var createUser = userNameCreate.value;
  // console.log(createUser)
  var createPassword = passWordCreate.value;
  // console.log(createPassword)
  var user1 = new createData(createUser,createPassword)
  // if(data1.indexOf('createUser') && data1.indexOf('createUser'))
  // console.log(data1.indexOf(['createUser']))
  // alert(data1);
  // console.log(user.username)
  // console.log(user.password)
  // console.log(user)
  if(checkCreate(user1.username,user1.password)){
    isRegister = true;
    data.push(user1);
  }
  // checkRepeat()
  console.log(data)
  actionCreate()
}

function checkCreate(username,password){
  for(var i=0;i<data.length;i++){
    if(data[i].username === username && data[i].password === password){
        return false;
    }
    else{
      continue;
    }
  }
  return true;
}


// function checkRepeat() {
//   console.log(data1[username])
// }

// alert(data1.concat(data))

function actionCreate(){
  if(isRegister){
    alert("Đăng ký thành công!!!")
    formLogin.action="#"
  }
  else{
    alert("Tài khoản hoặc mật khẩu bị trùng!!!")
    formLogin.action="#"
  }
}




// Check Login
var loggedIn = false;

loginAdmin.onclick = function () {
  var password = passWord.value;
  var username = userName.value;

  
//   loggedIn = login(password);
//   loggedIn = login(username);
  if(checkLogin(username,password)){
    loggedIn = true;
  }
  check();
}

function checkLogin(username,password) {
  for(var i=0; i< (data).length; i++) {
    // console.log((data.concat(data1))[i].username)
      if((data).hasOwnProperty(i)){
          if(username === (data)[i].username && password === (data)[i].password){
              return true
          }
          else{
              continue;
          }
      }
  }
  return false
}

function check() {
  if(loggedIn) {
    alert('Đăng nhập thành công!!');
    formLogin.action = 'hosting.html'
  } else {
    alert('Sai tài khoản hoặc mật khẩu!!!');
    formLogin.action = '#'
}}
// BackBtn
backbtn.onclick = function () {
  history.back()
};