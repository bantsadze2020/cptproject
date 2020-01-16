var score = 0
var i = 1
var ans = 1
function submitAnswer(){
    y = document.getElementById("qans").value
    var yy=y.toUpperCase();
    x = document.getElementById("question").value
if (ans===1){
    y = document.getElementById("qans").value
    if(yy==="A"){
        document.getElementById("question").value="You are right :)"
        score++
        
    }
    else {
        document.getElementById("question").value="You are wrong :("
        
    }
    document.view.qscore.value=score
}
else if (ans===2){ 
	y = document.getElementById("qans").value
    if(yy==="C"){
        document.getElementById("question").value="You are right :)"
         score++
    }
    else {
        document.getElementById("question").value="You are wrong :("
        
    }
    document.view.qscore.value=score
}
else if (ans===3){ 
	y = document.getElementById("qans").value
    if(yy==="B"){
        document.getElementById("question").value="You are right :)"
         score++
    }
    else {
        document.getElementById("question").value="You are wrong :("
        
    }
    document.view.qscore.value=score
}
else if (ans===4){ 
	y = document.getElementById("qans").value
    if(yy==="A"){
        document.getElementById("question").value="You are right :)"
         score++
    }
    else {
        document.getElementById("question").value="You are wrong :("
        
    }
    document.view.qscore.value=score
}
else if (ans===5){ 
	y = document.getElementById("qans").value
    if(yy==="D"){
        document.getElementById("question").value="You are right :)"
         score++
    }
    else {
        document.getElementById("question").value="You are wrong :("
        
    }
    document.view.qscore.value=score
}
else if (ans===6){ 
	y = document.getElementById("qans").value
    if(yy==="D"){
        document.getElementById("question").value="You are right :)"
         score++
    }
    else {
        document.getElementById("question").value="You are wrong :("
        
    }
    document.view.qscore.value=score
}
else if (ans===7){ 
	y = document.getElementById("qans").value
    if(yy==="B"){
        document.getElementById("question").value="You are right :)"
         score++
    }
 else {
        document.getElementById("question").value="You are wrong :("
        
    }
    document.view.qscore.value=score
}
else if (ans===8){ 
	y = document.getElementById("qans").value
    if(yy==="C"){
        document.getElementById("question").value="You are right :)"
         score++
    }
    else {
        document.getElementById("question").value="You are wrong :("
        
    }
    document.view.qscore.value=score
}
else if (ans===9){ 
	y = document.getElementById("qans").value
    if(yy==="D"){
        document.getElementById("question").value="You are right :)"
         score++
    }
    else {
        document.getElementById("question").value="You are wrong :("
        
    }
    document.view.qscore.value=score
}
else if (ans===10){ 
	y = document.getElementById("qans").value
    if(yy==="A"){
        document.getElementById("question").value="You are right :)"
         score++
    }
    else {
        document.getElementById("question").value="You are wrong :("
        
    }
    document.view.qscore.value=score
}
else if (ans===11){ 
	y = document.getElementById("qans").value
    if(yy==="C"){
        document.getElementById("question").value="You are right :)"
         score++
    }
    else {
        document.getElementById("question").value="You are wrong :("
             
    }
    document.view.qscore.value=score
}
else if (ans===12){ 
	y = document.getElementById("qans").value
    if(yy==="B"){
        document.getElementById("question").value="You are right :)"
         score++
    }
    else {
        document.getElementById("question").value="You are wrong :("
             
    }
    document.view.qscore.value=score
}
	ans++; 
}
        

function main(){ 
if (i===1){ 
	document.view.qnum.value=i;
   	document.view.question.value =" Who starred in the move 'The Hunger Games' as Katniss Everdeen?\na)Jennifer Lawrence \nb)Jennifer Aniston \nc)Jennifer Lopez \nd)Scarlett Johansson";
    document.view.qans.value=""
}
else if (i===2){ 
	document.view.qnum.value=i;	
	document.view.question.value ="What year was Pirates of the Caribbean: The Curse of the Black Pearl released?  \na)2006 \nb)2007 \nc)2003 \nd)2011";
    document.view.qans.value=""
}
else if (i===3){ 
	document.view.qnum.value=i;	
	document.view.question.value ="Who is the character that stars in the movie Iron Man?  \na)Elizabeth Swan \nb)Tony Stark \nc)Captain America \nd)Tom Holland";
    document.view.qans.value=""
}
else if (i===4){ 
	document.view.qnum.value=i;	
	document.view.question.value ="The title role of the 1900's movie, 'Pretty Woman', was played by which actress?  \na)Julia Roberts \nb)Jennifer Aniston \nc)Sandra Bullock \nd)Demi Moor";
    document.view.qans.value=""
}
else if (i===5){ 
	document.view.qnum.value=i;	
	document.view.question.value ="In what movie, if you watch a certain video you'll die in 7 days?  \na)IT \nb)A Nightmare on Elm Street \nc)Saw \nd)The Ring";
    document.view.qans.value=""
}
else if (i===6){ 
	document.view.qnum.value=i;	
	document.view.question.value ="What color were the slippers in the original Wizard of Oz?\na)Red \nb)Blue \nc)Gold \nd)Silver";
    document.view.qans.value=""
} 
else if (i===7){ 
	document.view.qnum.value=i;	
	document.view.question.value ="What was the name of the monkey in the Disney movie 'Aladdin'?\na)Rajah \nb)Abu \nc)Lago \nd)Olaf";
    document.view.qans.value="" 
}
else if (i===8){ 
	document.view.qnum.value=i;	
	document.view.question.value ="What 'Alice In Wonderland' character was 'Shouting, 'Off with his head!'?\na)The Mad Hatter \nb)Alice \nc)The Queen of Hearts \nd)White Queen";
    document.view.qans.value="" 
}
else if (i===9){ 
	document.view.qnum.value=i;	
	document.view.question.value ="In the Superman movies what newspaper does Clark Kent Work for? \na)New York Times \nb)New York Daily News \nc)The Wall Street Journal  \nd)The Daily Planet";
    document.view.qans.value="" 
}
else if (i===10){ 
	document.view.qnum.value=i;	
	document.view.question.value ="What is the name of Edward Norton's character in 'Fight Club'? \na)The Narrator \nb)Tyler Duden \nc)Maria Singer \nd)Angel Face";
    document.view.qans.value="" 
}
else if (i===11){ 
	document.view.qnum.value=i;	
	document.view.question.value ="What was the name of the second Indiana Jones movie, released in 1984? \na)Raiders of the Lost Ark \nb)Indiana Jones and the Last Crusade \nc)Indiana Jones and the Temple of Doom \nd)Indiana Jones and the Kingdom of the Crystal Skull";
    document.view.qans.value="" 
}
else if (i===12){ 
	document.view.qnum.value=i;	
	document.view.question.value ="Which actor starred in the 1961 movie The Hustler? \na)John Wayne \nb)Paul Newman \nc)Doris Day \nd)Jack Lemmon";
    document.view.qans.value="" 
}

	i++; 
}

  
  
