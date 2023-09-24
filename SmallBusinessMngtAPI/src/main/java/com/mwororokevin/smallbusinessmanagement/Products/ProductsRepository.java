package com.mwororokevin.smallbusinessmanagement.Products;

import com.mwororokevin.smallbusinessmanagement.Products.Products;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductsRepository extends JpaRepository<Products, Long> {
}
