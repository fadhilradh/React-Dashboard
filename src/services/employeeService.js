export const getDepartments = () => ["Development", "Marketing", "HR", "UI/UX"];

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

export function updateEmployee(data) {
    let employees = getAllEmployees();
    let recordIndex = employees.findIndex((x) => x.id === data.id);
    employees[recordIndex] = { ...data };
    localStorage.setItem(keys.employees, JSON.stringify(employees));
}

export function getAllEmployees() {
    if (localStorage.getItem(keys.employees) == null) {
        localStorage.setItem(keys.employees, JSON.stringify([]));
    }
    return JSON.parse(localStorage.getItem(keys.employees));
}

export function deleteEmployee(id) {
    let employees = getAllEmployees();
    employees = employees.filter((x) => x.id !== id);
    localStorage.setItem(keys.employees, JSON.stringify(employees));
}
