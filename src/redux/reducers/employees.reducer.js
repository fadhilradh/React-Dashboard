import { ADD_EMPLOYEE, DELETE_EMPLOYEE } from "../types";

const initialState = {
    employees: [],
};

const reducer = (prevState = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case ADD_EMPLOYEE:
            return {
                ...prevState,
                employees: [...prevState.employees, payload],
            };
        case DELETE_EMPLOYEE:
            return {
                ...prevState,
                employees: [
                    ...prevState.employees.filter(
                        (employee) => employee.id !== payload
                    ),
                ],
            };
        default:
            return prevState;
    }
};

export default reducer;
