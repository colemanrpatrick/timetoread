function timeToRead(){
  //find the number of words
  var numberOfWords =0;
  //get a collection of <p>
  var myp = document.getElementsByTagName('p');
  //count words from each <p>
  for (i=0; i < myp.length; i++) {
    var thisp = myp[i].innerHTML;
    //turn string into array to word count
    thisp = thisp.trim();
    var pArray = thisp.split(" ");
    numberOfWords += pArray.length;

  }


 // divid the number of words by 230 to give
var wordsPerMinute = numberOfWords / 230;

var elems = document.getElementsByClassName("reading-time");

elems[0].innerHTML = "You read="+ wordsPerMinute +"minutes!";
  //display time to read in h3 "readingtime"

}
