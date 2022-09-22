"use strict";

const student = [
	{
		name: "Борис",
		surename: "Медведев",
		lastname: "Николевич",
		dateBirth: new Date(1978, 9, 22),
		startНYear: "22.10.2012",
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
		var today = new Date();
		var age = today.getFullYear() - student[i].dateBirth.getFullYear();
		var m = today.getMonth() - student[i].dateBirth.getMonth();
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

function titleLearn(str) {}

function titleLearn() {
	var now = new Date();
	var date = new Date(2015, 23);
	var diff = now - date;
	console.log(diff);
	return diff;
}
console.log(titleLearn());
