
const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

function part1step1() {
    let person = "";
    do {
	person = prompt("Please enter your name:");
    } while (person == "");

    if (person == null) {
        // User hit Cancel
        console.log("User hit 'Cancel'");
    } else {
        console.log(person.length);
    }
}
function part1step2() {
    let person = "";
    let indexString = "";
    do {
	    person = prompt("Please enter your name:");
    } while (person == "");

    if (person == null) {
        // User hit Cancel
        alert("User hit 'Cancel'");
    } else {
        myPrompt = "Enter character position(1 - "+person.length+"): ";
        indexString = prompt(myPrompt);
        if (indexString == null) {
            alert("User hit 'Cancel'");
        } else {
            alert(person.charAt(parseInt(indexString) - 1));
        }
    }
}
function part1step3() {
    let firstName = "";
    let lastName = "";
    let fullName = "";
    do {
	    firstName = prompt("Please enter your first name:");
    } while (firstName == "");

    if (firstName == null) {
        // User hit Cancel
        alert("User hit 'Cancel'");
    } else {
        do {
	        lastName = prompt("Please enter your last name:");
        } while (lastName == "");
        if (lastName == null) {
            // User hit Cancel
            alert("User hit 'Cancel'");
        } else {
            fullName = firstName.concat(" ");
            alert("Your name is: " + fullName.concat(lastName));
        }
    }
}
function part1step4() {
    theString = "The quick brown fox jumps over the lazy dog";
    theMessage = "the index of 'fox' in \n'" + theString + "'\nis ";
    alert(theMessage+theString.indexOf("fox"));
}

function part1step5() {
    theString = "The quick brown fox jumps over the lazy dog";
    theMessage = "the index of the last occurence of 'fox' in \n'" + 
        theString + "'\nis ";
    alert(theMessage+theString.lastIndexOf("fox"));
}
function part1step6() {
    theString = "The quick brown fox jumps over the lazy dog";
    let person = "";
    do {
	person = prompt("Please enter your name:","John D. Rockefeller");
    } while (person == "");

    if (person == null) {
        alert("User hit 'Cancel'");
    } else {
        alert(theString.replace("the lazy dog",person));
    }
}
function part1step7() {
    theString = "The quick brown fox jumps over the lazy dog";
    let theWord = "";
    do {
        myPrompt = theString + 
            "\nPlease enter a word from the above string: ";
	    theWord = prompt(myPrompt);
    } while (theWord == "");

    if (theWord == null) {
        alert("User hit 'Cancel'");
    } else {
        alert("The offset of '"+theWord+"' in \n'"+theString+"' is "+
            theString.indexOf(theWord));
    }
}
function part1step8() {
    old_string = "The quick brown fox jumps over the lazy dog";
    new_string = old_string.slice(old_string.indexOf("the lazy dog"));
    alert(new_string.toUpperCase());
}
function part1step9() {
    theString =
    "            THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG          ";
    alert(theString.trim().toLowerCase());
}
function part1step10() {
    theString = "the quick brown fox jumps over the lazy dog";
    alert(theString.charAt(0).toUpperCase() + theString.slice(1));
}
function part2step1() {
    let number = Number(prompt("Enter a number: "));
    console.log(Math.abs(number));
}
function part2step2() {
    let number = Number(prompt("Enter a decimal number: "));
    console.log(Math.ceil(number));
}
function part2step3() {
    let number = Number(prompt("Enter a decimal number: "));
    console.log(Math.floor(number));
}
function part2step4() {
    let numberString = prompt("Enter 5 comma delimited numbers: ");
    let numArray = numberString.split(",");
    let min = Number(numArray[0]);
    let max = Number(numArray[0]);
    for (let i = 1; i < numArray.length; i++) {
        if ( min > Number(numArray[i])) min = Number(numArray[i]);
        if ( max < Number(numArray[i])) max = Number(numArray[i]);
    }
    console.log("min="+min+", max="+max);
}
function part2step5() {
    let number = Number(prompt("Enter a decimal number: "));
    if( number < 0 ) {
        number = Math.abs(number);
        console.log(Math.sqrt(number)+"i");
    } else {
        console.log(Math.sqrt(number));
    }
}
function part3step1() {

    let dateString = prompt("Enter a date[month/day/year]: "); 
    const d = new Date(dateString);
    let year  = d.getFullYear();
    let month = d.getMonth() + 1;
    console.log("year="+year+", month="+month);
    let days = new Date(year,month,0).getDate();
    
    console.log(months[d.getMonth()]+" of "+year+" has "+days+" days");
}
function part3step2() {
    let dateString = prompt("Enter a date: "); 
    const d = new Date(dateString);
    console.log(months[d.getMonth()]);
}
function part3step3() {
    let dateString = prompt("Enter a date: "); 
    const d = new Date(dateString);
    if ( d.getDay() == 0 || d.getDay() == 6) {
        console.log("This date is on a weekend");
    } else {
        console.log("This date is not on a weekend");
    }
}
function part3step4() {
    alert("Not yet coded!");
}
function part3step5() {
    alert("Not yet coded!");
}
function part4step1() {
    alert("Not yet coded!");
}
function part4step2() {
    alert("Not yet coded!");
}
function part4step3() {
    alert("Not yet coded!");
}
function part4step4() {
    alert("Not yet coded!");
}
function part4step5() {
    alert("Not yet coded!");
}

// vim: ai ts=4 et nu
