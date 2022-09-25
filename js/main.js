"use strict";
import Student from "./student.js";

const arrayStudents = [
	new Student("Борис", "Медведев", "Николевич", new Date(1978, 9, 22), 2011, "Истории"),
	new Student("Василий", "Кононов", "Петрович", new Date(2000, 5, 10), 2020, "Химии"),
	new Student("Кирилл", "Медведев", "Борисович", new Date(2005, 6, 23), 2019, "Философии"),
];

const $studentsList = document.getElementById("students-list");
const $studentsListTHALL = document.querySelectorAll(".student__table th");

// получить tr студента
function newStudentTR(student) {
	const $studentTR = document.createElement("tr"),
		$fioTD = document.createElement("td"),
		$facultyTD = document.createElement("td"),
		$dateBirthTD = document.createElement("td"),
		$startYearTD = document.createElement("td");
	$fioTD.textContent = student.getFIO();
	$dateBirthTD.textContent = student.getDateBirth();
	$facultyTD.textContent = student.faculty;
	// $startYearTD.textContent = student.getCourse();

	$studentTR.append($fioTD);
	$studentTR.append($facultyTD);
	$studentTR.append($dateBirthTD);
	$studentTR.append($startYearTD);

	return $studentTR;
}

function renderTable() {
	const arrayStudentsCopy = [...arrayStudents];
	$studentsList.textContent = "";
	for (const student of arrayStudentsCopy) {
		$studentsList.append(newStudentTR(student));
	}
}

renderTable();
