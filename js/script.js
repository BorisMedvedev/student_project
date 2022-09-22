"use strict";

const student = [
	{
		name: "Борис",
		surename: "Медведев",
		lastname: "Николевич",
		dateBirth: new Date(1978, 9, 22),
		startНYear: 2019,
		faculty: "История",
	},
];

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

function getВateBirth(student) {
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
			getВateBirth(student) +
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
// console.log(getCourse(student));
