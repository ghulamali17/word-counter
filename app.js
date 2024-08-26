let textInput=document.getElementById("textInput");
let characters=document.getElementById("char");
let inputContent=textInput.addEventListener("input", function(){
    userInput=this.value;
    userInputLenght=userInput.length;
   characters.innerHTML= userInputLenght;
   userInput=userInput.trim();
  let splitWords=userInput.split(" ");
  let cleanList=splitWords.filter(function(elm){
    return elm !="";
  })
let words=document.getElementById("words");
let wordCount= cleanList.length;
words.innerHTML=wordCount;
});