package com.employee;

public class EmployeeApplication {

    public static String getMessage() {
        return "Employee Management API is running";
    }

    public static String getEmployeeServiceMessage() {
        return "Employee service is working";
    }

    public static void main(String[] args) {
        System.out.println(getMessage());
        System.out.println(getEmployeeServiceMessage());
    }
}