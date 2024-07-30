/*document.getElementById("avgBtn").addEventListener("click", theStrings)


function averageTwoStr(string1, string2) 
{
    average = (Number(string1) + Number(string2))/2
    return average    
}

function theStrings() 
{
    let string1 = document.getElementById("box1").value 
    let string2 = document.getElementById("box2").value 
    str1Len = string1.length;
    str2Len = string2.length;
    let average2Str = (averageTwoStr(str1Len, str2Len))
    document.getElementById("output").textContent = "The average length of two strings with length " + str1Len + " and " + str2Len + " is " + average2Str

} */

/*document.getElementById("upBtn").addEventListener("click", toUpper);*/

function convertsUpper() 
{
    let userString = document.getElementById("box1").value;
    let upperString = userString.toUpperCase();
    return upperString;
}

function toUpper() 
{
    let upperCased = convertsUpper();
    document.getElementById("output").textContent = upperCased;
};







/*document.getElementById("lowBtn").addEventListener("click", toLower);*/

let lowCaseBtn = document.getElementById("lowBtn");
lowCaseBtn.onclick = toLower;


function convertsLower()
{
    let userString = document.getElementById("box1").value;
    let lowerString = userString.toLowerCase();
    return lowerString;
};

function toLower()
{
    let lowerCased = convertsLower();
    document.getElementById("output").textContent = lowerCased;
};








document.getElementById("lenBtn").addEventListener("click", getLength);

function convertsLength() 
{
    let string = document.getElementById("box1").value;
    let strLength = string.length;
    return strLength
};

function getLength()
{
    let strLenValue = convertsLength();
    document.getElementById("output").textContent = strLenValue;

};





document.getElementById("subStrBtn").addEventListener("click", getSubstring);

function convertsSubStr()
{
   let string = document.getElementById("box1").value;
   let startInd = Number(document.getElementById("box2").value);
   let endInd = Number(document.getElementById("box3").value);
   let fullString = string.substring(startInd, endInd)
   return fullString;
};

function getSubstring()
{
    let subString = convertsSubStr()
    document.getElementById("output").textContent = subString

}



document.getElementById("resetBtn").addEventListener("click", clearFields)

function clearFields()
{
    document.getElementById("box1").value = " "
    document.getElementById("box2").value = ""
    document.getElementById("box3").value = ""
    document.getElementById("output").textContent = "Your output will go here"
    return 

}

