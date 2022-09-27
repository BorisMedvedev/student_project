"use strict";

export default class Student {
	constructor(name, surename, lastname, dateBirth, startНYear, faculty) {
		this.name = name;
		this.surename = surename;
		this.lastname = lastname;
		this.dateBirth = dateBirth;
		this.startНYear = startНYear;
		this.faculty = faculty;
	}

	get FIO() {
		return this.surename + " " + this.name + " " + this.lastname;
	}

	getDateBirth() {
		const yyyy = this.dateBirth.getFullYear();
		let mm = this.dateBirth.getMonth() + 1;
		let dd = this.dateBirth.getDate();

		if (dd < 10) dd = "0" + dd;
		if (mm < 10) mm = "0" + mm;

		return dd + "." + mm + "." + yyyy;

	}

	trueRussianDecline(d1, d2, d3, c) {
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

	Age() {
		let currentTime = new Date();
		let year = currentTime.getFullYear();
		return year;
	}

	getAGE() {
		let today = new Date();
		let age = today.getFullYear() - this.dateBirth.getFullYear();
		let m = today.getMonth() - this.dateBirth.getMonth();
		if (m < 0 || (m === 0 && today.getDate() < this.dateBirth.getDate())) {
			age--;
		}

		// return age;
		return (this.getDateBirth() + " " + "(" + age + this.trueRussianDecline(" лет", " год", " года", age) + ")");
	}

	getCourse() {
		if (this.Age() - this.startНYear >= 4) {
			return (
				this.startНYear + "-" + (this.startНYear + 4) + " (закончил)"
			);
		} else {
			return (
				this.startНYear +
				"-" +
				(this.startНYear + 4) +
				" " +
				"(" +
				(this.Age() - this.startНYear) +
				" курс" +
				")"
			);
		}
	}
}
