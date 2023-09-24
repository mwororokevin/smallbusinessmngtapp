package com.mwororokevin.smallbusinessmanagement.Suppliers;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SuppliersRepository extends JpaRepository<Suppliers, Long> {
    Suppliers findBySupplierName(String supplierName);
}
