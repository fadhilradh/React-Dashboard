import { ADD_EMPLOYEE, DELETE_EMPLOYEE } from "../types";

export function addEmployee(data) {
    return {
        type: ADD_EMPLOYEE,
        payload: data,
    };
}

export function deleteEmployee(id) {
    return {
        type: DELETE_EMPLOYEE,
        payload: id,
    };
}
