// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM

// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER
let count = 0;

const $ = selector => document.querySelector(selector);


// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    form.submit.disabled = true;


    // GET THE VALUES FROM THE TEXT BOXES
    let empData = 'ID: '+$("#id").value+'<br>Name:'+$("#name").value+'<br>Extension: '+$("#extension").value+'<br>Email: '+$("#email").value+'<br>Department: '+$("#department").value;


    // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE

    // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW

    // APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS

    // CREATE THE DELETE BUTTON

    // RESET THE FORM

    // SET FOCUS BACK TO THE ID TEXT BOX

    // INCREMENENT THE NUMBER OF EMPLOYEES IN THE TABLE

});

// DELETE EMPLOYEE


// vim: ft=javascript ai ts=2 et
