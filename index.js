const myinput =document.getElementById("myinput")
const myradio1=document.getElementById("myradio1")
const myradio2=document.getElementById("myradio2")
const mysubmit =document.getElementById("mysubmit")
const myh2=document.getElementById("myh2")
// let farenheit;
// let celcius;
let temp;

// let deg = &deg;

function convert(){
    if(myradio1.checked){temp=Number(myinput.value);
        temp=(temp-32)*0.555;
           myh2.textContent=temp.toFixed(1)+"°C"}
    else if(myradio2.checked){temp=Number(myinput.value);
        temp=(temp*0.555)+32;
        myh2.textContent= temp.toFixed(1)+"°F"
            }
    else if(isNaN(myinput)){
        myh2.textContent="please enter some"

    }
    else{
        myh2.textContent="please choose a converter"
    }
    }