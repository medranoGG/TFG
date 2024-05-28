package com.springbackend.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import java.util.ArrayList;
import java.util.List;


@Data
@Entity
@NoArgsConstructor
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "surname", nullable = false)
    private String surname;

    @Column(name = "email", nullable = false, unique = true)
    private String email;

    @Column(name = "phone")
    private String phoneNumber;

    @Column(name = "passwd", nullable = false)
    private String passwd;

    @JsonIgnore
    @ElementCollection(fetch = FetchType.EAGER)
    private List<String> roles = new ArrayList<>();

    public User(String name, String surname, String email, String phoneNumber, String passwd, String... roles) {
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.passwd = encodePassword(passwd);
        this.roles = List.of(roles);
    }

    private String encodePassword(String passwd) {
        return new BCryptPasswordEncoder().encode(passwd);
    }

    @PrePersist
    @PreUpdate
    private void hashPassword() {
        this.passwd = encodePassword(this.passwd);
    }

}