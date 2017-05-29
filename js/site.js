/*contact page js*/
"use strict";


//var address = document.getElementById("email").value;
//var exp = /^hello/.test(address);
//console.log(exp);


//function validateForm() {




//};


var workPhoneBox = document.getElementById("work_phone");
var emailBox = document.getElementById("e_box");
var conListener = document.getElementById("contactSelect");
var cellPhoneBox = document.getElementById("cell_phone");
var messengerIns = document.getElementById("ins_mess");

conListener.addEventListener("change", contactMethod);

function contactMethod() {
  var con = document.getElementById("contactSelect");
  var opt = con.options[con.selectedIndex].value;

  console.log(opt);

  if (opt == "Work Phone") {
    workPhoneBox.style.display = 'block';
    cellPhoneBox.style.display = 'none';
    emailBox.style.display = 'none';
    messengerIns.style.display = 'none';
  } else if (opt =="Cell Phone") {
    cellPhoneBox.style.display = 'block';
    emailBox.style.display = 'none';
    messengerIns.style.display = 'none';
    workPhoneBox.style.display = 'none';
  } else if (opt =="Email") {
    emailBox.style.display = 'block';
    cellPhoneBox.style.display = 'none';
    messengerIns.style.display = 'none';
    workPhoneBox.style.display = 'none';

  } else if (opt == "Instant Messenger") {
    messengerIns.style.display = 'block';
    emailBox.style.display = 'none';
    cellPhoneBox.style.display = 'none';
    workPhoneBox.style.display = 'none';
  } else {
    messengerIns.style.display = 'none';
    emailBox.style.display = 'none';
    cellPhoneBox.style.display = 'none';
    workPhoneBox.style.display = 'none';
  }


};

function vEmail(){
    var email = /^([A-Za-z0-9_\-\.]){1,}\@([A-Za-z0-9_\-\.]){1,}\.([A-Za-z]){2,4}$/;
    //var exp = /^([A-Za-z]){1,}\.([A-Za-z])$/
    var address = document.getElementById("email").value;
    var mess = document.getElementById("mess").value;
    if (emailBox.style.display == 'block'){
      if (email.test(address) == false){
      alert('Please enter a valid Email');
      console.log("email function is called")
      document.getElementById("email").focus();
      event.preventDefault();
      return false;
      };
  } else if (messengerIns.style.display == 'block'){
      if (email.test(mess) == false){
      alert('Please enter a valid Instagram Email');
      console.log("email function is called")
      document.getElementById("mess").focus();
      event.preventDefault();
      return false;

    };
  };
};

/*0-9, -, . 1 to 11 times*/
/*123546780x1234*/

function vTel(){
    var telExp =/^([0-9\-\.]){10,11}([A-Za-z]){0,4}([0-9]){0,4}$/
    var tel = document.getElementById("tel").value;
    var work = document.getElementById("work_phone");
    var cell = document.getElementById("cell_phone");


    if(work.style.display == 'block') {
      console.log("box is now visible");

      if(telExp.test(tel) == false) {
        alert('Please enter a valid Phone Number');
        console.log("phone function is called")
        document.getElementById("tel").focus();
        event.preventDefault();
        return false;
      };
    } else if (cell.style.display == 'block'){
      if (telExp.test(cell) == false){
        alert('Please enter a valid Cell Phone');
        console.log("phone function is called")
        document.getElementById("cell").focus();
        event.preventDefault();
        return false;

      };
    };
  };
