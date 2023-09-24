package com.mwororokevin.smallbusinessmanagement.Suppliers;

import com.mwororokevin.smallbusinessmanagement.Users.Users;
import jakarta.persistence.*;
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
public class Suppliers {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "supplier_id")
    private Long supplierId;

    @NotBlank(message = "Please add Supplier name.")
    private String supplierName;

    @Column(name = "supplier_phone_number_1")
    private String supplierPhoneNumber1;

    @Column(name = "supplier_phone_number_2")
    private String supplierPhoneNumber2;

    @Column(name = "supplier_contact_person")
    private String supplierContactPerson;

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
