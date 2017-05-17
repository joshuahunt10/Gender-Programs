/*
I am attempting to create an opject that I can pass in the gender and it will change
the pronoun.  When I run it as is now, I get the word "female" where I want it to
be she.

How I can I call the Person.gender object and get it to run the if statement before
returning a value.

UPDATE: now I have it running the if-loop but it will not give me any of the
branches besides the else portion.
*/
function Person(name,age) {
  this.name = name;
  this.age = age;
  this.species = "Homo Sapiens";
  this.genderPronoun = function(genderDef){
    if(genderDef === "male"){
     return "he";
    }
    else if(genderDef === "female"){
     return "she";
    }
    else{
     return "(please assign gender before using the pronoun)";
    }
  }

}
/*var genderPronoun = function(gender1){
  if(this.gender === "male"){
    return "he";
  }
  else if(this.gender === "fem"){
    return "she"
  }
  else{
    return "(please assign a gender)"
  }
}*/

var sally = new Person("Sally Bowles", 39);
var holden = new Person("Holden Caulfield", 16);
console.log("sally's species is " + sally.species + " and " + sally.genderPronoun("female") + " is " + sally.age + " years old." );
console.log("holden's species is " + holden.species + " and "+ holden.genderPronoun("male") + " is " + holden.age + " years old."  );
