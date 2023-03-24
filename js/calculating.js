function waterCalculator()
{
        //WATER INTAKE CALCULATIONS
    var userMass = parseInt(document.getElementById("user-mass").value);
    var userHeight = parseInt(document.getElementById("user-height").value);
    var userAge = parseInt(document.getElementById("user-age").value);
    waterAmount = ((userMass/0.453592)*0.5)*29.5735, 2; // Water intake is stored in waterAmount(var)

        //CHECK THE GENDERS -- stores BMR in a variable
    if(document.getElementById("male").checked == true){
        var BMR = 88.362 + (13.397*userMass) + (4.799*userHeight) - (5.677*userAge)
    } else if(document.getElementById("female").checked == true) {
        var BMR = 447.593 + (9.247*userMass) + (3.098*userHeight) - (4.33*userAge)
    } else{
        var BMR = 'Select a gender dumbass';
    };

    //CHECK REGIME SELECTED
    var userActivity = document.getElementById("activitySelect");
    if(userActivity.options[ userActivity.selectedIndex ].value == "sedentary"){
        var BMR = BMR*1.2;
    } else if(userActivity.options[ userActivity.selectedIndex ].value == "lightly-active"){
        var BMR = BMR*1.375;
    } else if(userActivity.options[ userActivity.selectedIndex ].value == "moderately-active"){
        var BMR = BMR*1.55;
    } else if(userActivity.options[ userActivity.selectedIndex ].value == "active"){
        var BMR = BMR*1.725;
    } else if(userActivity.options[ userActivity.selectedIndex ].value == "very-active"){
        var BMR = BMR*1.9;}

    //IF NOTHING IS SELECTED
    if((document.getElementsByName("genders").checked == true) || (userActivity.options[ userActivity.selectedIndex ].value == "") || (isNaN(BMR))){
        document.getElementById("BMR-output").innerHTML = "Please fill in every details dumbass";
    } else {
        document.getElementById("BMR-output").innerHTML = "Your BMR is " + Math.round(BMR) + " and you need " + Math.round(waterAmount) + "ml of water per day";}

}