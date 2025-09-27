package com.student.registration.student_registration_backend.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Entity
@Data // This annotation from Lombok automatically generates getters, setters, and other methods.
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String email;
    private String course;
    private String studentClass;
    private Double percentage;
    private String branch;
    private String mobileNumber;
}
