// ERROR IDENTIFICATION

// Error 1 (grade.html, Line 9):
// Added return before checkMark() to prevent unwanted form submission.

// Error 2 (grade.js, Original Line 5):
// Changed name = "" to name.trim() === "".

// Error 3 (grade.js, Original Line 9):
// Changed isNan() to isNaN().

// Error 4 (grade.js, Original Line 14):
// Changed && to || for mark range validation.

// Error 5 (grade.js, Original Line 28):
// Changed getElementByID() to getElementById().

// Error 6 (grade.js, Original Line 30):
// Changed style.colour to style.color.

// Error 7 (grade.js, Original Line 38):
// Changed loop starting index from 1 to 0.

// Error 8 (grade.js, Original Line 42):
// Changed innerHtml to innerHTML.

// Error 9 (grade.html, Original Line 17):
// Changed showtable() to showTable().

// Error 10:
// Added empty mark validation.

// Error 11:
// Added randomMark() function.

// Error 12:
// Added date and time using Date().

// FUNCTION 1: CHECK STUDENT MARK

function checkMark() {

    // Get student information
    let name = document.getElementById("name").value.trim();

    let markInput = document.getElementById("mark").value;

    // Check empty name
    if (name === "") {

        alert("Name must be filled out.");

        return false;
    }

    // Check empty mark
    if (markInput.trim() === "") {

        alert("Mark field cannot be empty.");

        return false;
    }

    // Check non-numeric value
    let mark = Number(markInput);

    if (!Number.isFinite(mark)) {

        alert("Please enter a valid numeric value.");

        return false;
    }

    // Check mark range
    if (mark < 0 || mark > 100) {

        alert("Mark must be between 0 and 100.");

        return false;
    }

    // Determine grade
    let grade;

    if (mark >= 80) {

        grade = "A";

    } else if (mark >= 65) {

        grade = "B";

    } else if (mark >= 50) {

        grade = "C";

    } else {

        grade = "F";

    }

    // Display result
    let resultElement = document.getElementById("result");

    resultElement.innerHTML =
        name + " got grade " + grade;

    // Change result colour
    if (grade === "A" || grade === "B") {

        resultElement.style.color = "green";

    } else if (grade === "C") {

        resultElement.style.color = "orange";

    } else {

        resultElement.style.color = "red";

    }

    // Display date and time
    document.getElementById("checkTime").innerHTML =
        "Checked on: " + new Date();

    return false;
}



// FUNCTION 2: SHOW GRADE TABLE

function showTable() {

    let grades = ["A", "B", "C", "F"];

    let ranges = ["80-100", "65-79", "50-64", "0-49"];

    let tableHTML = "<table>";

    // Table heading
    tableHTML +=
        "<tr><th>Grade</th><th>Mark Range</th></tr>";

    // Display all grades using for loop
    for (let i = 0; i < grades.length; i++) {

        tableHTML +=
            "<tr><td>" + grades[i] +
            "</td><td>" + ranges[i] +
            "</td></tr>";

    }

    tableHTML += "</table>";

    // Display table
    document.getElementById("tableContainer").innerHTML =
        tableHTML;

}


// FUNCTION 3: GENERATE RANDOM MARK

function randomMark() {

    // Generate random whole number from 0 to 100
    let random = Math.floor(Math.random() * 101);

    // Put random mark into mark input field
    document.getElementById("mark").value = random;

}