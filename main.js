//making love calcultor
let yourName=prompt("what is your name?");
let theirName=prompt("what is their name?");

let lovescore=Math.random()* 100;
lovescore = Math.floor(lovescore);

if(lovescore<=30){
alert("the love score for " + yourName + " and " +  theirName +  " is "+
        lovescore + "% - you should rethink this relationship");
}
else if(lovescore > 30 && lovescore<=50){
    alert("the love score for " + yourName + " and " +  theirName +  " is "+
        lovescore + "% - put more effort to grow the relationship");
}
else if(lovescore > 50 && lovescore <= 70){
    alert("Wow this is  a serious love between  " + yourName + " and " +  theirName +  " your love is " +
        lovescore + "%");
}
else{
    alert("your love score is " + lovescore + "%" + 
       " what a magnificent love between"+ yourName + "and" +
        theirName + ",this love will last for ever.");
}