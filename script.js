/* function foo() {
    let fname = document.getElementById("firstname").value;
    let mname = document.getElementById("middlename").value
    let lname = document.getElementById("lastname").value
    let email = document.getElementById("email").value
    let pin = document.getElementById("pin").value

    console.log(fname);
    console.log(mname);
    console.log(lname);
    console.log(email);
    console.log(pin);
} */

function labelEle(tagname, attriname, attrivalue, content) {
    let res = document.createElement(tagname);
    res.setAttribute(attriname, attrivalue);
    res.innerHTML = content;
    return res
}

function inputEle(tagname, attriname, attrivalue, attriname1, attrivalue1) {
    let res1 = document.createElement(tagname);
    res1.setAttribute(attriname, attrivalue);
    res1.setAttribute(attriname1, attrivalue1);
    return res1;
}

function br(tagname) {
    let breake = document.createElement(tagname);
    return breake;
}

let fname_label = labelEle("label", "for", "firstname", "First name: ");
let br1 = br("br");
let fname_input = inputEle("input", "type", "firstname", "id", "firstname");
let br2 = br("br");

let mname_label = labelEle("label", "for", "middlename", "Middle name: ");
let br3 = br("br");
let mname_input = inputEle("input", "type", "middlename", "id", "middlename");
let br4 = br("br");

let lname_label = labelEle("label", "for", "lastname", "Last name: ");
let br5 = br("br");
let lname_input = inputEle("input", "type", "lastname", "id", "lastname");
let br6 = br("br");

let email_label = labelEle("label", "for", "email", "Email: ");
let br7 = br("br");
let email_input = inputEle("input", "type", "email", "id", "email");
let br8 = br("br");

let pin_label = labelEle("label", "for", "pincode", "Pincode: ");
let br9 = br("br");
let pin_input = inputEle("input", "type", "pincode", "id", "pincode");


document.body.append(fname_label, br1, fname_input, br2, mname_label, br3, mname_input, br4, lname_label, br5, lname_input, br6, email_label, br7, email_input, br8, pin_label, br9, pin_input);