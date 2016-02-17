/**
 * Part I: use any of the looping methods discussed in class
 *
 * 1. for loop,
 * 2. Array.forEach,
 * 3. custom forEach
 *
 * to complete the following problems
 */

// 0. write your own forEach() that takes two arguments: an array, and a callback

function forEach(array, callback){
   for (i=0; i < array.length; i++){
     callback(array[i]);
   }

}

// testing your code with console.assert
var total = 1;
forEach([1, 2, 3, 4], function(a){ total *= a; });
// and finally assert; if this fails, the program stops
console.log(total)
console.assert(total === 24);


// 1. calculate the sum of numbers (returns the sum (A NUMBER))

function sum(){
    // parse arguments into an array
    var args = [].slice.call(arguments);
    var total=0;
    forEach(args, function(a){total +=a; });
    return total;

    // .. do something with each element of args
    // YOUR CODE HERE
}
console.log(sum([1,2,3,4,5]))
console.assert( sum(1, 2, 3, 4, 5) === 15 )
//assertion failed but console log passed???????

// 2. calculate the average of numbers (returns the average (A NUMBER))

function average(arguments){
    // parse arguments into an array
    var args = [].slice.call(arguments);


    // .. do something with each element of args
    var total=0;
    var count=0;
    forEach(args, function(a){total +=a; count++; });
    return total/count;
}
console.log(average([2,4,6,8]))
console.assert( average(2, 4, 6, 8) === 5 )

// 3. find the largest number of the inputs (returns the largest input (A NUMBER))

function largest(arguments){
    // parse arguments into an array
    var args = [].slice.call(arguments);
    // .. do something with each element of args
    var largest =0;
    forEach(args, function(a){
      if(a > largest)
      largest=a;
    });
    return largest;
}
console.log(largest([2,4,6,8]))
console.assert( largest(2, 4, 6, 8) === 8 )

// 4. find the longest string of the inputs (returns the longest input (A STRING))

function longest(){
    // parse arguments into an array
    var args = [].slice.call(arguments);

    // .. do something with each element of args
    var longest=0;
    forEach(args, function(a){if (a.length > longest)
    longest=a.length;
    })

}

 console.assert( longest("this", "is", "a", "awesome", "function") === "function" );

/**
 * PART II
 *
 * For each of the following Array methods,
 *
 * 1. use them in an example
 * 2. write a console.assert to test them
 */

// .sort()
var stuff = ['Vince','Patrick','Dad','Elora'];
stuff.sort();
console.log(stuff.toString())
console.assert(stuff.toString() === "Dad,Elora,Patrick,Vince")
// .concat()

var related=["dad","vince"],
    notrelated=["Elora"];
var alltogether = related.concat(notrelated);

console.log(alltogether);
console.assert(alltogether.toString()==="dad,vince,Elora")

// .indexOf()
var name = "Elora";
var i= name.indexOf("a");

console.log(i);
console.assert(i===4);

// .split()
var wurdz= "I love Elora very much";
var splitz= wurdz.split(" ");

console.log(splitz)
console.assert(splitz.toString()==="I,love,Elora,very,much")
// .join()
var wurdz= ["I"," ","love"," ","Elora"," ","very"," ","much"];
var joinz= wurdz.join(" ");

console.log(joinz)
console.assert(joinz==="I   love   Elora   very   much")
// .pop()
var imSick =["I","am","really","sick"];
var popped = imSick.pop();
console.log(imSick)

// .push()
var wurdz= ["I","love","Elora","very","much"];
wurdz.push("always");

console.log(wurdz.toString())
console.assert(wurdz.toString()==="I,love,Elora,very,much,always")

// .slice()
var people = ["Elora", "everyone"];
var favorite = people.slice(0,1);

console.log(favorite)
// .splice()
var statement = ["I", "love", "Elora", "very","much"];
statement.splice(3, 0, "very", "very");

console.log(statement)
console.assert(statement.toString()==="I,love,Elora,very,very,very,much")
// .shift()
var advice = ["dont", "be", "happy",];
advice.shift();

console.log(advice)
console.assert(advice.toString()==="be, happy")
// .unshift()
var truth = ["want", "my", "bed"];
truth.unshift("I","really");

console.assert(truth.toString()==="I,really,want,my,bed")
// .filter()

// .map()
