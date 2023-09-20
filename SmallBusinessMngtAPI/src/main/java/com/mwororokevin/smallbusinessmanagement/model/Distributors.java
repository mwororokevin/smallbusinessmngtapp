package com.mwororokevin.smallbusinessmanagement.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Distributors {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "distributor_id")
    private Long distributorId;

    @NotBlank(message = "Please add Surname.")
    private String surname;

    @NotBlank(message = "Please add other names.")
    @Column(name = "other_names")
    private String otherNames;

    @Email(message = "Incorrect Email Address format.")
    @Column(name = "user_email")
    private String email;

    @Column(name = "phone_number_1")
    private String phoneNumber1;

    @Column(name = "phone_number_2")
    private String phoneNumber2;

    @Column(name = "creation_date_time")
    private LocalDateTime creationDateTime;

    @Column(name = "update_date_time")
    private LocalDateTime updateDateTime;
}
