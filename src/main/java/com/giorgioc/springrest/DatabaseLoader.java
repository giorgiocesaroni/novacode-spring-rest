package com.giorgioc.springrest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DatabaseLoader implements CommandLineRunner {
    private final EmployeeRepository repository;

    @Autowired
    public DatabaseLoader(EmployeeRepository repository) {
        this.repository = repository;
    }

    @Override
    public void run(String... strings) throws Exception {
        this.repository.save(new Employee("Marco", "Rossi", "Head engineer"));
        this.repository.save(new Employee("Giorgio", "Bellini", "Software developer"));
        this.repository.save(new Employee("Giulio", "Ramoni", "Software developer"));
        this.repository.save(new Employee("Bruno", "Martini", "Recruiter"));
        this.repository.save(new Employee("Marcello", "Antonelli", "Intern"));
        this.repository.save(new Employee("Stefano", "Cimini", "Intern"));
    }
}