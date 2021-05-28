"use strict";
let data = [{
        CourseId: "19SUM100",
        Title: "Introduction to HTML/CSS/Git",
        Instructor: "Wyatt",
        Location: "Classroom 7",
        StartDate: "07/08/19",
        Fee: 100.00,
    },
    {
        CourseId: "19SUM200",
        Title: "Introduction to JavaScript",
        Instructor: "Lynn",
        Location: "Classroom 8",
        StartDate: "07/22/19",
        Fee: 350.00,
    },
    {
        CourseId: "19SUM300",
        Title: "Introduction to Node.JS and Express",
        Instructor: "Gross",
        Location: "Classroom 4",
        StartDate: "09/09/19",
        Fee: 50.00,
    },
    {
        CourseId: "19SUM400",
        Title: "Introduction to SQL and Databases",
        Instructor: "Wyatt",
        Location: "Classroom 6",
        StartDate: "09/16/19",
        Fee: 50.00,
    },
    {
        CourseId: "19SUM500",
        Title: "Introduction to Angular",
        Instructor: "Lynn",
        Location: "Classroom 7",
        StartDate: "09/23/19",
        Fee: 50.00,
    }
];

window.onload = function(){
    loadCoursesDropdown();

    const courseDetailBtn = document.getElementById("detailsBtn");
    courseDetailBtn.onclick = courseDetailBtnClicked;
}

function loadCoursesDropdown(){
    const coursesDropdown = document.getElementById("coursesDropdown");
    let length = data.length;
    let selectOneOption = new Option("Select One...", "")
    coursesDropdown.appendChild(selectOneOption);

    for(let i = 0; i<length; i++){
        let theOption = document.createElement("option");
        theOption.textContent = data[i].Title;
        theOption.value = data[i].CourseId;
        coursesDropdown.appendChild(theOption);
    }
}

function courseDetailBtnClicked(){
    const coursesInstructorPara = document.getElementById("courseInstructor");
    coursesInstructorPara.innerHTML = "";
    const coursesLocationPara = document.getElementById("courseLocation")
    coursesLocationPara.innerHTML = "";
    const courseStartDatePara = document.getElementById("courseStartDate");
    courseStartDatePara.innerHTML = "";
    const courseFeePara = document.getElementById("courseFee");
    courseFeePara.innerHTML = "";

    const coursesDropdown = document.getElementById("coursesDropdown")
    let selectedCourse = coursesDropdown.value;
    if(selectedCourse == ""){
        alert("Please select a course first");
        return;
    }
    let matchingCourse = data.find(arrayElement => arrayElement.CourseId == selectedCourse);
    coursesInstructorPara.innerHTML = matchingCourse.Title;
    coursesLocationPara.innerHTML = matchingCourse.Location;
    courseStartDatePara.innerHTML = matchingCourse.StartDate;
    courseFeePara.innerHTML = matchingCourse.Fee;
}