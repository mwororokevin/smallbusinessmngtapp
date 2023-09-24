package com.mwororokevin.smallbusinessmanagement.Users;

import com.mwororokevin.smallbusinessmanagement.OrderDetails.OrderDetails;
import com.mwororokevin.smallbusinessmanagement.Distributors.Distributors;
import com.mwororokevin.smallbusinessmanagement.OrderHeaders.OrderHeaders;
import com.mwororokevin.smallbusinessmanagement.Packaging.Packaging;
import com.mwororokevin.smallbusinessmanagement.Products.Products;
import com.mwororokevin.smallbusinessmanagement.Suppliers.Suppliers;
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
    private Set<OrderHeaders> ordersCreator;

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "updateUser", cascade = CascadeType.ALL)
    private Set<OrderHeaders> ordersUpdater;

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "creationUser", cascade = CascadeType.ALL)
    private Set<Products> productsCreator;

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "updateUser", cascade = CascadeType.ALL)
    private Set<Products> productsUpdater;

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "creationUser", cascade = CascadeType.ALL)
    private Set<Distributors> distributorCreator;

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "updateUser", cascade = CascadeType.ALL)
    private Set<Distributors> distributorUpdater;

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "creationUser", cascade = CascadeType.ALL)
    private Set<Packaging> packagingCreator;

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "updateUser", cascade = CascadeType.ALL)
    private Set<Packaging> packagingUpdater;

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "creationUser", cascade = CascadeType.ALL)
    private Set<OrderDetails> orderDetailsCreator;

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "updateUser", cascade = CascadeType.ALL)
    private Set<OrderDetails> orderDetailsUpdater;

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "creationUser", cascade = CascadeType.ALL)
    private Set<Suppliers> suppliersCreator;

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "updateUser", cascade = CascadeType.ALL)
    private Set<Suppliers> suppliersUpdater;

    @Column(name = "creation_date_time")
    private LocalDateTime creationDateTime;

    @Column(name = "update_date_time")
    private LocalDateTime updateDateTime;
}
