export const getDepartments = () => [
    { id: 1, title: "Development" },
    { id: 2, title: "Marketing" },
    { id: 3, title: "HR" },
    { id: 4, title: "UI/UX" },
];

const keys = {
    employees: "employees",
    employeeID: "employeeID",
};

export function generateEmployeeId() {
    if (localStorage.getItem(keys.employeeID) == null)
        localStorage.setItem(keys.employeeID, "0");
    var id = parseInt(localStorage.getItem(keys.employeeID));
    localStorage.setItem(keys.employeeID, (++id).toString());
    return id;
}

export function addEmployees(data) {
    let employees = getAllEmployees();
    data["id"] = generateEmployeeId();
    employees.push(data);
    localStorage.setItem(keys.employees, JSON.stringify(employees));
}

export function getAllEmployees() {
    if (localStorage.getItem(keys.employees) == null) {
        localStorage.setItem(keys.employees, JSON.stringify([]));
    }
    return JSON.parse(localStorage.getItem(keys.employees));
}
