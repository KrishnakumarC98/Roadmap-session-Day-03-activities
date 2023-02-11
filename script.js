console.log("RMS D04 activity task")

console.log("........Object Declaration........")
var MyResume = {
    Name : "Krishnakumar",
    Email : "kk@gmail.com",
    Qualification : "GUVI FSD course",
    Experience : "Fresher",
    Applying_for : "Full Stack Developer",
};
console.log(MyResume);

console.log("........Object to array conversion........")
var objkeys = Object.keys(MyResume);
console.log(objkeys);
var objval = Object.values(MyResume);
console.log(objval);

console.log("........Object iterations using for loop........")
for (var i = 0; i < objkeys.length; i++ ){
    console.log(objkeys[i] + ":",objval[i]);
}

console.log("........Object iterations using forin loop........")

for ( obks in MyResume){
    console.log(obks + ": ",MyResume[obks]);
}

console.log("........Object iterations using forof loop........")

for (ojks in MyResume){
    console.log(ojks +": ", MyResume[ojks]);
}

console.log("........Object iterations using forEach loop........")

objkeys.forEach((val,ind,accarr) => {
    console.log(val + ": ", MyResume[val]);
})
