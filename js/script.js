"use strict";

const student = [
	{
		name: "Борис",
		surename: "Медведев",
		lastname: "Николевич",
		dateBirth: new Date(1978, 9, 22),
		startНYear: 2011,
		faculty: "История",
	},
];

const $studentsList = document.getElementById("students-list"),
	$studentsListTHALL = document.querySelectorAll(".student__table th");

function getFIO(student) {
	for (let i = 0; i < student.length; i++) {
		return (
			student[i].surename +
			" " +
			student[i].name +
			" " +
			student[i].lastname
		);
	}
}

function getDateBirth(student) {
	for (let i = 0; i < student.length; i++) {
		const yyyy = student[i].dateBirth.getFullYear();
		let mm = student[i].dateBirth.getMonth() + 1; // Months start at 0!
		let dd = student[i].dateBirth.getDate();

		if (dd < 10) dd = "0" + dd;
		if (mm < 10) mm = "0" + mm;

		return dd + "." + mm + "." + yyyy;
	}
}

function trueRussianDecline(d1, d2, d3, c) {
	let res = "";
	switch (c % 100) {
		case 11:
		case 12:
		case 13:
		case 14:
			return d1;
		default:
			switch (c % 10) {
				case 0:
				case 5:
				case 6:
				case 7:
				case 8:
				case 9:
					return d1;
				case 1:
					return d2;
				case 2:
				case 3:
				case 4:
					return d3;
			}
	}
	return "";
}

function getAGE(student) {
	for (let i = 0; i < student.length; i++) {
		let today = new Date();
		let age = today.getFullYear() - student[i].dateBirth.getFullYear();
		let m = today.getMonth() - student[i].dateBirth.getMonth();
		if (
			m < 0 ||
			(m === 0 && today.getDate() < student[i].dateBirth.getDate())
		) {
			age--;
		}
		return (
			getDateBirth(student) +
			" " +
			"(" +
			age +
			trueRussianDecline(" лет", " год", " года", age) +
			")"
		);
	}
}

function age() {
	let currentTime = new Date();
	let year = currentTime.getFullYear();
	return year;
}

function getCourse(student) {
	for (let i = 0; i < student.length; i++) {
		if (age() - student[i].startНYear >= 4) {
			return (
				student[i].startНYear +
				"-" +
				(student[i].startНYear + 4) +
				" (закончил)"
			);
		} else {
			return (
				student[i].startНYear +
				"-" +
				(student[i].startНYear + 4) +
				" " +
				"(" +
				(age() - student[i].startНYear) +
				" курс" +
				")"
			);
		}
	}
}

// получить tr студента
function newStudentTR(student) {
	const $studentTR = document.createElement("tr"),
		$fioTD = document.createElement("td"),
		$dateBirthTD = document.createElement("td"),
		$startYearTD = document.createElement("td"),
		$facultyTD = document.createElement("td");
	$fioTD.innerHTML = getFIO(student.startНYear);
	$facultyTD.textContent = student.faculty;
	$dateBirthTD.textContent = student.startНYear;

	$studentTR.append($fioTD);
	$studentTR.append($facultyTD);
	$studentTR.append($startYearTD);
	$studentTR.append($dateBirthTD);

	return $studentTR;
}

function renderTable() {
	let studentCopy = student;
	$studentsList.innerHTML = "";
	for (const student of studentCopy) {
		$studentsList.append(newStudentTR(student));
	}
}
renderTable();

console.log(getFIO(student));
console.log(getCourse(student));
console.log(getAGE(student));
