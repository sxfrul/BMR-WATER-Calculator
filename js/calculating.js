function waterCalculator()
{
        //WATER INTAKE CALCULATIONS
    const userMass = parseFloat(document.getElementById("user-mass").value);
    const userHeight = parseFloat(document.getElementById("user-height").value);
    const userAge = parseFloat(document.getElementById("user-age").value);
    var waterAmount = ((userMass/0.453592)*0.5)*29.5735; // Water intake is stored in waterAmount(var)

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
    var getDropDownValue = userActivity.options[ userActivity.selectedIndex ].value
    BMR = BMR * (1.2+(0.175*getDropDownValue))

    //IF NOTHING IS SELECTED
    if((document.getElementsByName("genders").checked == true) || (userActivity.options[ userActivity.selectedIndex ].value == "") || (isNaN(BMR))){
        document.getElementById("BMR-output").innerHTML = "Please fill in every details dumbass";
    } else {
        document.getElementById("BMR-output").innerHTML = "Your BMR is " + BMR.toFixed(2) + " and you need " + waterAmount.toFixed(2) + "ml of water per day";}

}