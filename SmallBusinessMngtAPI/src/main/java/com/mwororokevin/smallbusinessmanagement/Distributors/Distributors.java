package com.mwororokevin.smallbusinessmanagement.Distributors;

import com.mwororokevin.smallbusinessmanagement.OrderDetails.OrderDetails;
import com.mwororokevin.smallbusinessmanagement.Users.Users;
import com.mwororokevin.smallbusinessmanagement.OrderHeaders.OrderHeaders;
import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.Set;

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

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "distributorId", cascade = CascadeType.ALL)
    private Set<OrderHeaders> orders;

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "distributorId", cascade = CascadeType.ALL)
    private Set<OrderDetails> orderDetails;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "creation_user")
    private Users creationUser;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "update_user")
    private Users updateUser;

    @Column(name = "creation_date_time")
    private LocalDateTime creationDateTime;

    @Column(name = "update_date_time")
    private LocalDateTime updateDateTime;
}
