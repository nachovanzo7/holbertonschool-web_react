interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: "Alice",
    lastName: "Johnson",
    age: 22,
    location: "New York"
};

const student2: Student = {
    firstName: "Bob",
    lastName: "Smith",
    age: 24,
    location: "Los Angeles"
};

const studentsList: Student[] = [student1, student2];

function renderTable(students: Student[]): void {
    const table = document.createElement("table");
    const headerRow = document.createElement("tr");
    const headers = ["First Name", "Location"];
    
    headers.forEach(headerText => {
        const th = document.createElement("th");
        th.textContent = headerText;
        headerRow.appendChild(th);
    });
    
    table.appendChild(headerRow);
    
    students.forEach(student => {
        const row = document.createElement("tr");
        
        const firstNameCell = document.createElement("td");
        firstNameCell.textContent = student.firstName;
        
        const locationCell = document.createElement("td");
        locationCell.textContent = student.location;
        
        row.appendChild(firstNameCell);
        row.appendChild(locationCell);
        table.appendChild(row);
    });
    
    document.body.appendChild(table);
}

document.addEventListener("DOMContentLoaded", () => {
    renderTable(studentsList);
});
