/*THIS JAVA SCRIPT FUNCTION USED TO VALIDATE THE EMPLOYEE REGISTRATION FORM.*/
/* FUNCTION 1*/
function jsCheck() {
    var fname = document.getElementById("fname").value
    var lname = document.getElementById("lname").value
    var loc = document.getElementById("loc").value;
    var address = document.getElementById("TextArea1").value
    var DOB = document.getElementById("dob").value
    var cbox1 = document.getElementById("ch1").checked 
    var cbox2 = document.getElementById("ch2").checked
    var cbox3 = document.getElementById("ch3").checked
    var ra1 = document.getElementById("Radio1").value
    var ra2 = document.getElementById("Radio2").value
    ///var ra3 = document.getElementById("Radio3").value
    //var r0 = document.getElementById("c").value
    //var r1 = document.getElementById("p").value
    //var r2 = document.getElementById("m").value
    //var r3 = document.getElementById("h").value
    var stringonly = /[a-z A-Z]/;

    
   
    if (!stringonly.test(fname) || fname == "")
    {
        alert("Enter Valid First Name")
    }
    else if (!stringonly.test(lname) || lname == "") {
        alert("Enter Valid Last Name")

    }
    else if (loc == "choose location" ) {
        alert("choose any job location")
    }
    else if (ra1.checked == false && ra2.checked == false && ra3.checked == false) {

        alert("choose any gender")
    }
    else if (!stringonly.test(address) || address == "") {
        alert("Choose Address");
    }
    else if (DOB == "") {
        alert("Choose DOB");
    }
    else if (!document.getElementById("ch1").checked && !document.getElementById("ch2").checked && !document.getElementById("ch3").checked) {

        alert("choose travel option")
    }
    
    else
        alert("Empdetails saved succesfully......")
}

/*THIS JAVA SCRIPT FUNCTION USED TO DO MATHEMATICAL OPERATIONS USING SCRIPT VALIDATION.*/
/* FUNCTION 2*/
function mathoperation(op) {
    debugger;
    var fvalue = parseInt(document.getElementById("no1").value)
    var svalue = parseInt(document.getElementById("no2").value)

    if (op == "addition") {
        alert("The result of the given input is " + addition(fvalue, svalue))
    }
    if (op == "subtraction") {
        alert("The result of the given input is " + subtraction(fvalue, svalue))
    }
    if (op == "multiplication") {
        alert("The result of the given input is " + multiplication(fvalue, svalue))
    }
    if (op == "division") {
        alert("The result of the given input is " + division(fvalue,svalue))
    }
    if (op == "getmod") {
        alert("The result of the given input is " + getmod(fvalue, svalue))
    }



    function addition(fvalue, svalue) {
        return fvalue + svalue;
    }
function subtraction(fvalue, svalue) {
    return fvalue - svalue;
    }
 function multiplication(fvalue, svalue) {
        return fvalue * svalue;
    }
function division(fvalue, svalue) {
        return fvalue / svalue;
    }
function getmod(fvalue, svalue) {
        return fvalue % svalue;
    }
}

/*THIS JAVA SCRIPT FUNCTION USED TO DO STRING FUNCTONS USING SCRIPT VALIDATION.*/
/* FUNCTION 3*/
function stringlenght()
{
    
    var txt = document.getElementById("string1").value
    var sln = txt.length;
    alert("lenght of given string is:" + sln)
}
function stringindex()
{


    var str = document.getElementById("string1").value
    var strind = document.getElementById("string2").value
    var pos = 0
    pos=str.indexOf(strind);
    //document.getElementById("demo").innerHTML = pos;
    alert("index is" + pos)
}
function replace() {

    debugger;
    var str = document.getElementById("string1").value
    var replaceit = document.getElementById("string3").value
    var replaceby = document.getElementById("string4").value
    //var pos = 0
    //str = str.replace("replaceby", "replaceit");
    //document.getElementById("demo").innerHTML = pos;
    alert(str.replace(replaceby, replaceit))
}



function sortFunction()
{

    var arr = []
    var i, j, val
    for (var i = 0; i < 5 ; i++)
    arr.push(parseInt(prompt("Enter number")))
    for (var i = 0; i < arr.length; i++)

    {
        for (j = i + 1; j < arr.length; j++)
            if (arr[i] > arr[j]) {
                val = arr[i]
                arr[i] = arr[j]
                arr[j] = val
            }
    }
    for (i = 0; i < arr.length; i++)
        console.log(arr[i])
}