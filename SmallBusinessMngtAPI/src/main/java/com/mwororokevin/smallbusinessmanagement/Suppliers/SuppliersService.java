package com.mwororokevin.smallbusinessmanagement.Suppliers;

import java.util.List;

public interface SuppliersService {
    Suppliers saveNewSupplier(Suppliers suppliers);

    List<Suppliers> getAllSuppliers();

    Suppliers getSupplierById(Long supplierId);

    void deleteSupplierById(Long supplierId);

    Suppliers updateSupplier(Long supplierId, Suppliers suppliers);

    Suppliers fetchSupplierByNameIgnoreCase(String supplierName);
}
