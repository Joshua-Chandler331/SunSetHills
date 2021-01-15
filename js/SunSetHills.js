document.getElementById("btnSH").addEventListener("click", SunsetHills);
document.getElementById("btnClear").addEventListener("click", Clear);


function SunsetHills(){

    let num1 = parseInt(document.getElementById("shInput1").value);
    let num2 = parseInt(document.getElementById("shInput2").value);
    let num3 = parseInt(document.getElementById("shInput3").value);
    let num4 = parseInt(document.getElementById("shInput4").value);
    let num5 = parseInt(document.getElementById("shInput5").value);

    let userArray = new Array();
    userArray.push(num1);
    userArray.push(num2);
    userArray.push(num3);
    userArray.push(num4);
    userArray.push(num5);

    let maxNum = userArray[0];
    let acendingArray = new Array();
    acendingArray.push(maxNum);

    for (let loop=1; loop < userArray.length; loop++){
        if( userArray[loop] > maxNum ){

            maxNum = userArray[loop];
            acendingArray.push(maxNum);

        }
    }
    
    document.getElementById("output").innerText = `The Ascending array is [${acendingArray.join(`, `)}]`;
}

function Clear(){
    document.getElementById("shInput1").value = "";
    document.getElementById("shInput2").value = "";
    document.getElementById("shInput3").value = "";
    document.getElementById("shInput4").value = "";
    document.getElementById("shInput5").value = "";
    document.getElementById("output").innerText = "";
}