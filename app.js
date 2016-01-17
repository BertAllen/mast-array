//Write a function called cubed(x) that accepts an argument x and returns its cubed value
function cubed(x){
    var y = x*x*x;
    return y;
}
//write a function called power that accepts two args (base, exp) and returns the power  
function power(base, exp){
    var result = 1;
    for(var i=0; i<exp; i++){
        result *=base;
    }
    return result;
}
/*
* write a function called logArr that will log each item in an array
*/
//BERT NOTE: this may need more work .....................................................................
function logArr(arrayName){
    for(var i = 0; i< arrayName.length; i++){
        console.log(arrayName[i]);
    }
}
/**
    Fill in the necessary parts of the findById function below
*/
var users = [{id: 1, name: 'Jon'},{id: 2, name: 'Yuli'},{id: 21, name: 'Peter'},{id: 17, name: 'St. MaryLou de la playa carmen'},
                {id: 51, name: 'Doug'},{id: 881, name: 'Paul'},{id: 0, name: 'Jon'},{id: 999, name: 'Timma'},{id: 999, name: "Ronald"}]

function findById(id){
//
var flag =0;
var grabbedUser ={};
var multiName =""
for(var i=0; i< users.length; i++){
    if(id===users[i].id){
        var grabbedUser = users[i];
        flag ++;      
        multiName += users[i].name;
        multiName += " ";         
    }    
}
if(flag>1){
    grabbedUser = {error: flag + " users have this id number! Their names are:" + multiName}
}
if(flag===0){
    grabbedUser = {error: "Sorry, that user id could not be found."}
}
return grabbedUser;
//
}
findById(17) //Should return {id: 17, name: 'St. MaryLou de la playa carmen'}
findById(1000) //Should return 4 {error: 'Sorry that user id could not be found'} ****Upshift Challenge

//Write a function that accepts a name argument and will loop over theBand and return the band member's name and the instrument that he/she plays
//use string concat to return the sentence below 
// [band-members-name] is in the band and plays the [band-members-instrument];

var theBand = {
    members: [{
        name: 'Johnny P',
        instrument: 'Sax'
    },{
        name: 'River',
        instrument: 'Drums'
    },{
        name: 'Kris',
        instrument: 'Guitar'
    }]
}
// helper function first ---V
function musician(stageName){
    for(var i=0; i<theBand.members.length; i++){
        if(stageName===theBand.members[i].name){
            var onStage = theBand.members[i];
            //var plays =theBand.members[i].instrument;
            return onStage;
        }
    }
}
// main function here ---V
function bandFan(player){
    var onStage = musician(player);
    var statement = onStage.name + " is in the band and plays the " + onStage.instrument + ".";
    return statement;
}

 
//write a fn that accepts two arguments a (sentence, letter) have the function return the number of times that letter repeats in the sentence
function letterCounter(sentence, letter){
  var letterCount =0;
    for(var i=0; i<sentence.length; i++){
        if(letter === sentence.substr(i,1)){
            letterCount ++;
        }
    }
    return letterCount;
}

//write a fn called pythagorean(a,b) have it return the value of c^2
function pythag(a,b){
    var h=(a*a)+(b*b);
 //   return Math.sqrt(h)
 return h
}

/**
    Best Practice: Constructor functions are the only variables that start with an uppercase letter
    The keyword this refers to a single instance
    When calling or invoking a constructor function you must use the *** new *** keyword
*/

//Write a CellPhone constructor function that accepts the following arguments (string: brand, number: screenSize, string: carrier)
function CellPhone(brand, screenSize, carrier){
    this.brand = brand;
    this.screenSize = screenSize;
    this.carrier = carrier;
}

//Write a function called sumAll that accepts an array of numbers and returns the sum of all items in the array
function arrayAdder(subject){
    total=0;
    for(var i=0; i<subject.length; i++){
        total += subject[i];
    }
    return total;
}
//write an isEqual function that accepts two arguments and returns a boolean (3,'3') returns false ('abc', 'abc') returns true
function isEqual(a,b){
    return a === b;
}
//write a function called inStock that accepts a productId or productName and returns the product if it is in stock based on its quantity

var products =[{
    id: 123,
    name: 'Squaty Potty', 
    url: 'https://www.youtube.com/watch?v=YbYWhdLO43Q',
    quantity: 5,
    price: 19.99
},{
    id: 124,
    name: 'Design Your Own Cage', 
    url: 'http://res.cloudinary.com/spartz/image/upload/c_lfill,f_auto,fl_lossy,q_60,w_806/v1/prod/images/e93da6b3583ea782f5b3814305c16960.jpeg',
    quantity: 0,
    price: 1.99
},{
    id: 125,
    name: 'Worlds Best Chap Stick', 
    url: 'http://res.cloudinary.com/spartz/image/upload/c_lfill,f_auto,fl_lossy,q_60,w_806/v1/prod/images/dde306374cd35acff10f52eb4c586b5d.jpeg',
    quantity: 280,
    price: 0.99
}]

function inStock(lookAt){
    //ignoring remote possibility of negative number in stock (backorder condition)
    for(var i=0; i<products.length; i++){
        if((lookAt === products[i].id || lookAt === products[i].name) && products[i].quantity){
            return products[i];
        }
    }
    var nada = {id: 0, name: "not currently in stock", url: "void", quantity: 0, price: 0};
    return nada
}