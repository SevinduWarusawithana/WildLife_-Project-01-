//fetch JSON data
fetch("intro.json")
    .then((response) => response.json())
    .then((data) => {
        
        localStorage.setItem("introData", JSON.stringify(data));
    })
    .catch((error) => {
        console.error("Error", error);
    });

const data = JSON.parse(localStorage.getItem("introData"));


document.getElementById("int").innerHTML = data[0].int;

document.getElementById("box01Subhead01").innerHTML = data[1].box01.subhead01;
document.getElementById("box01para").innerHTML = data[1].box01.para;

document.getElementById("box02Subhead01").innerHTML = data[2].box02.subhead01;
document.getElementById("box02para").innerHTML = data[2].box02.para;

document.getElementById("box03Subhead01").innerHTML = data[3].box03.subhead01;
document.getElementById("box03para").innerHTML = data[3].box03.para;

document.getElementById("box04Subhead01").innerHTML = data[4].box04.subhead01;
document.getElementById("box04para").innerHTML = data[4].box04.para;

document.getElementById("box05Subhead01").innerHTML = data[5].box05.subhead01;
document.getElementById("box05para").innerHTML = data[5].box05.para;

// table eka danna one yako