
let inputBox= document.createElement("input");
inputBox.setAttribute("type","text");
inputBox.setAttribute("id","evaluatedText");
document.body.append(inputBox);
let h3Ele=document.createElement("h3");
h3Ele.setAttribute("id","wordCount");
h3Ele.innerText='0';
document.body.append(h3Ele);
let arrOfWords;

document.getElementById("evaluatedText").addEventListener("keyup",()=>{
     let wordArr=inputBox.value.trim().split(/\s+/);
     let word_count=wordArr.length;
     if(word_count==1 && wordArr[0]=="") word_count=0;
        document.getElementById("wordCount").innerText=word_count;
    })
