package com.mwororokevin.smallbusinessmanagement.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.validator.constraints.Length;

import java.time.LocalDateTime;
import java.util.Set;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Users {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "user_id")
    private Long userId;

    @NotBlank(message = "Please add Surname.")
    private String surname;

    @NotBlank(message = "Please add other names.")
    @Column(name = "other_names")
    private String otherNames;

    private String username;

    @Length(min = 10)
    private String password;

    @Email(message = "Incorrect Email Address format.")
    @Column(name = "user_email")
    private String email;

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "creationUser", cascade = CascadeType.ALL)
    private Set<OrderHeader> ordersCreator;

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "updateUser", cascade = CascadeType.ALL)
    private Set<OrderHeader> ordersUpdater;

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "creationUser", cascade = CascadeType.ALL)
    private Set<Products> productsCreator;

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "updateUser", cascade = CascadeType.ALL)
    private Set<Products> productsUpdater;

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "creationUser", cascade = CascadeType.ALL)
    private Set<Distributors> distributorCreator;

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "updateUser", cascade = CascadeType.ALL)
    private Set<Distributors> distributorUpdater;

    @Column(name = "creation_date_time")
    private LocalDateTime creationDateTime;

    @Column(name = "update_date_time")
    private LocalDateTime updateDateTime;
}
