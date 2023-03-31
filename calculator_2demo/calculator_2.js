var answer;
var container=[]
var order=0;
var calculation;

/*function addition()
{
    let inputOne =document.querySelector("#inputOne");
    //let inputTwo =document.querySelector("#inputTwo");
    var display = document.querySelector("#display");
    display.innerHTML+="+";
    console.log(answer);
}

function subtraction()
{
    let inputOne =document.querySelector("#inputOne");
    let inputTwo =document.querySelector("#inputTwo");
    var display = document.querySelector("#display");
    answer = parseFloat(inputOne.value) - parseFloat(inputTwo.value);
    display.innerHTML=answer;
    console.log(answer);
}

function multiplication()
{
    let inputOne =document.querySelector("#inputOne");
    let inputTwo =document.querySelector("#inputTwo");
    let display = document.querySelector("#display");
    answer = parseFloat(inputOne.value) * parseFloat(inputTwo.value);
    display.innerHTML=answer;
    console.log(answer);
}

function division()
{
    let inputOne =document.querySelector("#inputOne");
    let inputTwo =document.querySelector("#inputTwo");
    var display = document.querySelector("#display");
    answer = parseFloat(inputOne.value) / parseFloat(inputTwo.value);
    display.innerHTML=answer;
    console.log(answer);
}*/
//var display=document.querySelector("#display");

function show()
{
    let valueOne = document.querySelector("#inputOne");
    let display = document.querySelector("#display");
    display.innerHTML+=valueOne.value;
    console.log("Clicked");
}

function clicking(ele){
    let display = document.querySelector("#display");
    let firstNumStr;
    let firstNum;
    
    //display.innerHTML+=plus.innerHTML;
    console.log(ele.id);
    if(ele.id==="plus")
    {
        order=0;
        calculation="+";
        firstNumStr=display.innerHTML.slice(0);
        //console.log(firstNumStr);
        let firstNum =parseInt(firstNumStr) ;
        container.push(firstNum);
    }
    else if(ele.id==="minus")
    {
        order=1;
        calculation="-";
        firstNumStr=display.innerHTML.slice(0);
        //console.log(firstNumStr);
        let firstNum =parseInt(firstNumStr) ;
        container.push(firstNum);
    }
    else if(ele.id==="multiply")
    {
        order=2;
        calculation="×";
        firstNumStr=display.innerHTML.slice(0);
        //console.log(firstNumStr);
        let firstNum =parseInt(firstNumStr) ;
        container.push(firstNum);
    }
    else if(ele.id==="divide")
    {
        order=3;
        calculation="÷";
        firstNumStr=display.innerHTML.slice(0);
        //console.log(firstNumStr);
        let firstNum =parseInt(firstNumStr) ;
        container.push(firstNum);
    }
    else if(ele.id==="digitZero")
    {
        order=4;
    }
    else if(ele.id==="digitOne")
    {
        order=5;
    }
    else if(ele.id==="digitTwo")
    {
        order=6;
    }
    else if(ele.id==="digitThree")
    {
        order=7;
    }
    else if(ele.id==="digitFour")
    {
        order=8;
    }
    else if(ele.id==="digitFive")
    {
        order=9;
    }
    else if(ele.id==="digitSix")
    {
        order=10;
    }
    else if(ele.id==="digitSeven")
    {
        order=11;
    }
    else if(ele.id==="digitEight")
    {
        order=13;
    }
    else if(ele.id==="digitNine")
    {
        order=14;
    }

    let symbol = document.querySelector("#"+document.getElementsByTagName('button')[order].id);
    display.innerHTML+=symbol.innerHTML;
}

function calculate()
{
    let display = document.querySelector("#display");
    let displayAll= display.innerHTML;
    
    if(calculation==="+")
    {
        let plusSign=displayAll.indexOf('+',0);
        let secondNum=displayAll.slice(plusSign+1);
        console.log(parseInt(secondNum));
        container.push(parseInt(secondNum));
        answer = container[0]+container[1];
        console.log(container[0]);
        console.log(container[1]);
        display.innerHTML+=" ="+answer;
    }
    else if(calculation==="-")
    {
        let plusSign=displayAll.indexOf('-',0);
        let secondNum=displayAll.slice(plusSign+1);
        answer = container[0]-parseInt(secondNum);
        display.innerHTML+=" ="+answer;
    }
    else if(calculation==="×")
    {
        let plusSign=displayAll.indexOf('×',0);
        let secondNum=displayAll.slice(plusSign+1);
        answer = container[0]*parseInt(secondNum);
        display.innerHTML+=" ="+answer;
    }
    else if(calculation==="÷")
    {
        let plusSign=displayAll.indexOf('÷',0);
        let secondNum=displayAll.slice(plusSign+1);
        answer = container[0]/parseInt(secondNum);
        display.innerHTML+=" ="+answer;
    }
}

function clearAll(){
    container=[];
    let display = document.querySelector("#display");
    display.innerHTML ="";

}

function backSpace()
{
    let display = document.querySelector("#display");
   
    display.innerHTML = display.innerHTML.slice(0,-1);
    if(display.innerHTML="")
    {
        container=[];
    }
}