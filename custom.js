
function validateform() {
    const day = Number(document.getElementById("date").value);
    const month = Number(document.getElementById("month").value);
    const yearInput = document.getElementById("year").value;
    const gen = document.getElementsByName("gender");
    const year = Number(yearInput.slice(0, 2));
    const century = Number(yearInput.slice(2, 4));
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    var i = 0;


    alert(day);
    alert(month);
    alert(yearInput);

    // if (isNaN(date.value) || date.value < 1 || date.value > 31 || date.value === null || date.value === "") {
    //     alert("Please input your date");
    // }
    // else {
    //     alert("continue");
    // }


    // if (isNaN(month.value) || month.value < 1 || month.value > 12 || month.value === "" || month.value == null) {
    //     alert('invalid month');
    // }
    // else {
    //     alert('you ok');
    // }
    // if (isNaN(year.value) || year.value === "" || year.value === null || year.value < 1900 || year.value > currentYear) {
    //     alert("Please input your year");
    // }
    // else {
    //     alert("select year");
    // }

    // if (gen[0].checked === true && gen[1].checked === true) {
    //     alert("PLease select gender");
    // } else {
    //     for (i = 0; i < gen.length; i++) {
    //         if (gen[i].checked)
    //             alert(gen[i].value);
    //     }
    // }


    while (i < gen.length) {
        if (gen[i].checked) {
            gender = gen[i].value;

        }
        i++;
    }
    // for(var gender of gen) {
    //     if (gender.checked) {
    //         return gender.value;

    //     }
    // }
    alert(gender);
    // return gender;


    // var gender = genderSelected();


    // var isDayValid = dayValid();
    //   var isMonthValid = monthValid();
    var dayIndex = Math.round((((century / 4) - 2 * century - 1) + ((5 * year / 4)) + ((26 * (month + 1) / 10)) + day) % 7);
    var akanName;
    if (gender === "male") {
        switch (dayIndex) {
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
    } else if (gender === "female") {
        switch (dayIndex) {
            case 0:
                akanName = "Akosua";
                alert("DoB Sunday : Akosua");
                break;
            case 1:
                akanName = "Adwoa";
                alert("DoB Monday : Adwoa");
                break;
            case 2:
                akanName = "Abenaa";
                alert("DoB Tuesday : Abenaa");
                break;
            case 3:
                akanName = "Akua";
                alert("DoB Wednesday : Akua");
                break;
            case 4:
                akanName = "Yaa";
                alert("DoB Thursday : Yaa");
                break;
            case 5:
                akanName = "Afua";
                alert(" DoB Friday : Afua");
                break;
            case 6:
                akanName = "Ama";
                alert(" DoB Saturday : Ama");
                break;
            default:
                akanName = "Please input the correct details!"
                alert("Please input the correct details!");
        }
    } else {
        alert("Please try again with the correct data.");
    }
}

