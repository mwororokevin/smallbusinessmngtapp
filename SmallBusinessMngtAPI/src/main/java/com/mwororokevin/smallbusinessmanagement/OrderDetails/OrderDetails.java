package com.mwororokevin.smallbusinessmanagement.OrderDetails;

import com.mwororokevin.smallbusinessmanagement.Distributors.Distributors;
import com.mwororokevin.smallbusinessmanagement.OrderHeaders.OrderHeaders;
import com.mwororokevin.smallbusinessmanagement.Packaging.Packaging;
import com.mwororokevin.smallbusinessmanagement.Products.Products;
import com.mwororokevin.smallbusinessmanagement.Users.Users;
import jakarta.persistence.*;
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
public class OrderDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "order_detail_id")
    private Long orderDetailId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "distributor_distributor_id")
    private Distributors distributor;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "product_product_id")
    private Products product;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "packaging_id")
    private Packaging packaging;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "order_header_order_id")
    private OrderHeaders orderHeader;

    @Column(name = "order_quantity")
    private int orderQuantity;

    @Column(name = "price_per_order")
    private double pricePerOrder;

    @Column(name = "total_price")
    private double totalPrice;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "distributor_id")
    private Distributors distributorId;

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
