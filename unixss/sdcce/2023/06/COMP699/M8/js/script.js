// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM

const $ = selector => document.querySelector(selector);

// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER
var count = 0;

// ADD EMPLOYEE
document.addEventListener('submit', (e) => {

    // PREVENT FORM SUBMISSION
    e.target.disabled = true;
    e.preventDefault();


    // GET THE VALUES FROM THE TEXT BOXES
    var id = $("#id").value;
    var name = $("#name").value;
    var ext = $("#extension").value;
    var email = $("#email").value;
    var dept = $("#department").value;


    // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE
    //var row = $('#employees').insertRow(count);
    var table = document.getElementById('employees');
    var row   = table.insertRow(1);


    // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW
    var cellId = row.insertCell(0);
    var cellName = row.insertCell(1);
    var cellExt = row.insertCell(2);
    var cellEmail = row.insertCell(3);
    var cellDept = row.insertCell(4);
    var cellDelete = row.insertCell(5);

    // APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS
    cellId.innerText = id;
    cellName.innerText = name;
    cellExt.innerText = ext;
    cellEmail.innerText = email;
    cellDept.innerText = dept;
    cellDelete.innerHTML = '&#X274C';

    // alert('stopping here.')
    // CREATE THE DELETE BUTTON

    // RESET THE FORM
    $('#id').value = '';
    $('#name').value = '';
    $('#extension').value = '';
    $('#email').value = '';
//  $('#department').value = 'Administrative';

    // SET FOCUS BACK TO THE ID TEXT BOX
    $('#id').focus();

    // INCREMENENT THE NUMBER OF EMPLOYEES IN THE TABLE
    count += 1;
    $('#empCount').value = '('+count+')';

});

// DELETE EMPLOYEE


// vim: ft=javascript ai ts=2 et
