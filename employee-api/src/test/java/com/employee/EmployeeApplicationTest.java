package com.employee;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

class EmployeeApplicationTest {

    @Test
    void testEmployeeApiMessage() {
        assertEquals(
            "Employee API added by Developer A",
            EmployeeApplication.getMessage()
        );
    }
}