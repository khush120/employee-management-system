import { createContext, useState } from "react";

export const EmployeeContext = createContext();

export function EmployeeProvider({ children }) {
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "Rahul Sharma",
      email: "rahul@gmail.com",
      department: "IT",
      salary: 50000,
    },
    {
      id: 2,
      name: "Priya Singh",
      email: "priya@gmail.com",
      department: "HR",
      salary: 45000,
    },
  ]);

  const [editingEmployee, setEditingEmployee] = useState(null);

  return (
    <EmployeeContext.Provider
      value={{
        employees,
        setEmployees,
        editingEmployee,
        setEditingEmployee,
      }}
    >
      {children}
    </EmployeeContext.Provider>
  );
}