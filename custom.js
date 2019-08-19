
function validateform() {
    const date = document.getElementById("date");
    const month = document.getElementById("month");
    const year = document.getElementById("year");
    const gen = document.getElementsByName("gender");
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();

    if (isNaN(date.value) || date.value < 1 || date.value > 31 || date.value === null || date.value === "") {
        alert("Please input your date");
    }
    // else {
    //     alert("continue");
    // }


    if (isNaN(month.value) || month.value < 1 || month.value > 12 || month.value === "" || month.value == null) {
        alert('invalid month');
    }
    // else {
    //     alert('you ok');
    // }
    if (isNaN(year.value) || year.value === "" || year.value === null || year.value < 1900 || year.value > currentYear) {
        alert("Please input your year");
    }
    // else {
    //     alert("select year");
    // }

    if (gen[0].checked === false && gen[1].checked === false) {
        alert("PLease select gender");
    } else {
        for (i = 0; i < gen.length; i++) {
            if (gen[i].checked)
                alert(gen[i].value);
        }
    }
}
var isDayValid = dayValid();
  var isMonthValid = monthValid();
  var dayIndex = Math.round(( ( (century/4) -2*century-1) + ((5*year/4) ) + ((26*(month+1)/10)) + day) % 7);
var akanName;
  if (genderValue === "male") {
      switch(dayIndex) {
              case 0:
          akanName = "Kwasi";
          alert("Born on Sunday : Kwasi");
          break;
          case 1:
          akanName = "Kwadwo";
          alert("Born on Monday : Kwadwo");
          break;
          case 2:
          akanName = "Kwabena";
          alert("Born on Tuesday : Kwabena");
          break;
          case 3:
          akanName = "Kwaku";
          alert("Born on Wednesday : Kwaku");
          break;
          case 4:
          akanName = "Yaw";
          alert("Born on Thursday : Yaw");
          break;
          case 5:
          akanName = "Kofi";
          alert("Born on Friday : Kofi");
          break;
          case 6:
          akanName = "Kwame";
          alert("Born on Saturday : Kwame");
          break;
          default:
          akanName = "Please input the correct details!"
          alert("Please input the correct details!");
      }
  } else if (genderValue = "female") {
      switch(dayIndex) {
              case 0:
              akanName = "Akosua";
              alert("Born on Sunday : Akosua");
              break;
              case 1:
              akanName = "Adwoa";
              alert("Born on Monday : Adwoa");
              break;
              case 2:
              akanName = "Abenaa";
              alert("Born on Tuesday : Abenaa");
              break;
              case 3:
              akanName = "Akua";
              alert("Born on Wednesday : Akua");
              break;
              case 4:
              akanName = "Yaa";
              alert("Born on Thursday : Yaa");
              break;
              case 5:
              akanName = "Afua";
              alert("Born on Friday : Afua");
              break;
              case 6:
              akanName = "Ama";
              alert(" Born on Saturday : Ama");
              break;
              default:
              akanName = "Please input the correct details!"
              alert("Please input the correct details!");
          }
  } else {
              alert("Please try again with the correct data.");
  }
// var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
// var maleNames =[
//  {
//      "Sunday: Kwasi
//      Monday:Kwadwo
//      Tuesday:Kwabena
//      Wednesday: Kwaku
//      Thursday: Yaw
//     "Friday: Kofi","
//     "Saturday: Kwame"
// };
// var femaleNames={

// };
// ]
// var userDetailsObj = {
//     mdate: mdate,
//     mmonth: mmonth,
//     myear: myear,
//     mgender: mgender
// }
// return userDetailsObj;
// {

// }

// // function to get the day of the week
// function dayOfWkCal() {
//     var userDetailsObj = getUserDetails();
//     var day = userDetailsObj.mdate;
//     var month = userDetailsObj.mmonth;
//     var year = userDetailsObj.myear;
//     var a = Math.floor((14 - month) / 12);
//     var y = year - a;
//     var m = month + 12 * a - 2;
//     dayOfWk = (day + y + Math.floor(y / 4) - Math.floor(y / 100) +
//         Math.floor(year / 400) + Math.floor((31 * m) / 12)) % 7;
//     var myDay = daysOfWeek[dayOfWk];
//     // console.log(myDay);
//     return myDay;
// }
// // function to get Akan Names
// function getAkanName() {
//     var userDetailsObj = getUserDetails();
//     var gender = userDetailsObj.mgender;
//     var dayOfBirth = dayOfWkCal();
//     if (gender === "male") {
//         for (var akanKey in maleAkanNames) {
//             if (maleAkanNames.hasOwnProperty(akanKey)) {
//                 if (akanKey === dayOfBirth)
//                     myAkanName = maleAkanNames[akanKey];
//             }
//         }
//     } else if (gender === "female") {
//         for (var akanKey in femaleAkanNames) {
//             if (femaleAkanNames.hasOwnProperty(akanKey)) {
//                 if (akanKey === dayOfBirth)
//                     myAkanName = femaleAkanNames[akanKey];
//             }
//         }
//     } else {
//         alert("error");
//     }
//     document.getElementById("results").innerHTML = "Hey Your Akan name is " + myAkanName;
// }
// function aggregateMyFunctions() {
//     var isValid = validateForm();
//     if (!isValid) {
//         validateForm();
//         return false;
//     } else {
//         getUserDetails();
//         dayOfWkCal();
//         getAkanName()
//         return false;
//     }
// }
