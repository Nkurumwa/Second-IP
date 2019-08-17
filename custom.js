//const male
//const gender=[male,female];
//console.log(gender[1]);
//console.log(object.keys(gender[0]));
//console.log(gender.prototype.keys());
//function validation(){
//const inputText=document.querySelector(`[bd]`)

//}
// const date=document.getElementById("date")
// const month=document.getElementById("month")
// const year=document.getElementById("year")
// const form=document.getElementById("form")

// form.addEventListener("submit",(i) =>{
//     let month=[]
//     if(month.value=== "" || month.value==null){
//         alert('month is required');
//     }else{
//         alert('you ok');
//     }
// }
function validateform() {
    const date = document.getElementById("date");
    const month = document.getElementById("month");
    const year = document.getElementById("year");
    const gen = document.getElementsByName("gender");
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();

    // if(isNaN(date.value) ||date.value <1 || date.value >31 ||date.value === null || date.value === ""){
    //     alert("Invalid date format");
    // }else{
    //     alert("continue");
    // }


    // if (isNaN(month.value) || month.value < 1 || month.value > 12 || month.value === "" || month.value == null) {
    //     alert('invalid month');
    // } else {
    //     alert('you ok');
    // }
    // if(isNaN(year.value) || year.value === "" ||year.value === null || year.value <1900 || year.value > currentYear){
    //     alert("invalid year");
    // }else{
    //     alert("select gender");
    // }

    if(gen[0].checked === false && gen[1].checked === false){
        alert('get out of here');
    }else{
        for (i=0; i<gen.length; i++){
            alert(gen[i].checked);

        
        }
    }
}