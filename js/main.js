"use strict";
import Student from "./student.js";

const arrayStudents = [
	new Student("Борис", "Медведев", "Николевич", new Date(1978, 9, 22), 2011, "Истории"),
	new Student("Василий", "Кононов", "Петрович", new Date(1990, 5, 10), 2017, "Химии"),
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
	$facultyTD.textContent = student.faculty;
	$dateBirthTD.textContent = student.getAGE();
	$startYearTD.textContent = student.getCourse();

	$studentTR.append($fioTD);
	$studentTR.append($facultyTD);
	$studentTR.append($dateBirthTD);
	$studentTR.append($startYearTD);

	return $studentTR;
}

document.getElementById('add-student').addEventListener('submit', function (event) {
	event.preventDefault();

	arrayStudents.push(new Student(
		document.getElementById('input-name').value,
		document.getElementById('input-surename').value,
		document.getElementById('input-lastname').value,
		new Date(document.getElementById('input-datebirth').value),
		Number(document.getElementById('input-startyear').value),
		document.getElementById('input-faculty').value,
	));
	renderTable();
});

function renderTable() {
	const arrayStudentsCopy = [...arrayStudents];
	$studentsList.textContent = "";
	for (const student of arrayStudentsCopy) {
		$studentsList.append(newStudentTR(student));
	}
}

renderTable();
