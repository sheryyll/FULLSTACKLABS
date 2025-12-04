let student = {
    name: "jenisha",
    grade: 70,
    subjects: ["AI", "FSD", "DSA"],
    displayInfo() {
        for (let key in this) {
            if (typeof this[key] !== "function") {
                console.log(`${key} : ${this[key]}`);
            }
        }
    }
};

student.displayInfo();

student.passed = student.grade >= 40 ? true : false;

student.displayInfo();

for (let key in student) {
    console.log(`${key} : ${student[key]}`);
}
