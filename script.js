// Generates grade for first student
function generateGrade() {
    let marks = parseInt(document.getElementById('marksInput').value);
    let grade;
// Filters marks greater than 79
    if (marks > 79) {
        grade = 'A';
    } else if (marks >= 60 && marks <= 79) { //Marks greater than or equal to 60 but less than or equal to 79
        grade = 'B';
    } else if (marks >= 50 && marks <= 59) { //Marks greater than or equal to 50 but less than or equal to 59
        grade = 'C';
    } else if (marks >= 40 && marks <= 49) { //Marks greater than or equal to 40 but less than or equal to 49
        grade = 'D';
    } else {
        grade = 'E'; //Any value less than 40
    }

    document.getElementById('gradeOutput').innerText = `Grade: ${grade}`;
}

// Generates grade for second student
function generateGradeOne() {
    let marks = parseInt(document.getElementById('marksInputOne').value);
    let grade;

    if (marks > 79) {
        grade = 'A';
    } else if (marks >= 60 && marks <= 79) {
        grade = 'B';
    } else if (marks >= 50 && marks <= 59) {
        grade = 'C';
    } else if (marks >= 40 && marks <= 49) {
        grade = 'D';
    } else {
        grade = 'E';
    }

    document.getElementById('gradeOutputOne').innerText = `Grade: ${grade}`;
}

// Generates grade for third student 

function generateGradeTwo() {
    let marks = parseInt(document.getElementById('marksInputTwo').value);
    let grade;

    if (marks > 79) {
        grade = 'A';
    } else if (marks >= 60 && marks <= 79) {
        grade = 'B';
    } else if (marks >= 50 && marks <= 59) {
        grade = 'C';
    } else if (marks >= 40 && marks <= 49) {
        grade = 'D';
    } else {
        grade = 'E';
    }

    document.getElementById('gradeOutputTwo').innerText = `Grade: ${grade}`;
}

//Generates grade for fourth student

function generateGradeThree() {
    let marks = parseInt(document.getElementById('marksInputThree').value);
    let grade;

    if (marks > 79) {
        grade = 'A';
    } else if (marks >= 60 && marks <= 79) {
        grade = 'B';
    } else if (marks >= 50 && marks <= 59) {
        grade = 'C';
    } else if (marks >= 40 && marks <= 49) {
        grade = 'D';
    } else {
        grade = 'E';
    }

    document.getElementById('gradeOutputThree').innerText = `Grade: ${grade}`;
}

//Generates grade for fith student

function generateGradeFour() {
    let marks = parseInt(document.getElementById('marksInputFour').value);
    let grade;

    if (marks > 79) {
        grade = 'A';
    } else if (marks >= 60 && marks <= 79) {
        grade = 'B';
    } else if (marks >= 50 && marks <= 59) {
        grade = 'C';
    } else if (marks >= 40 && marks <= 49) {
        grade = 'D';
    } else {
        grade = 'E';
    }

    document.getElementById('gradeOutputFour').innerText = `Grade: ${grade}`;
}
//  Resets the grades for new grading 
function refreshPage() {
    window.location.reload();
}