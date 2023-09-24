package com.mwororokevin.smallbusinessmanagement.Suppliers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Objects;

@Service
public class SuppliersServiceImplementation implements SuppliersService {
    @Autowired
    private SuppliersRepository suppliersRepository;

    @Override
    public Suppliers saveNewSupplier(Suppliers suppliers) {
        LocalDateTime localDateTime = LocalDateTime.now();

        suppliers.setCreationDateTime(localDateTime);
        suppliers.setUpdateDateTime(localDateTime);

        return suppliersRepository.save(suppliers);
    }

    @Override
    public List<Suppliers> getAllSuppliers() {
        return suppliersRepository.findAll();
    }

    @Override
    public Suppliers getSupplierById(Long supplierId) {
        return suppliersRepository.findById(supplierId).get();
    }

    @Override
    public void deleteSupplierById(Long supplierId) {
        suppliersRepository.deleteById(supplierId);
    }

    @Override
    public Suppliers updateSupplier(Long supplierId, Suppliers suppliers) {
        Suppliers supplierDB = suppliersRepository.findById(supplierId).get();

        if(Objects.nonNull(suppliers.getSupplierName()) && !"".equalsIgnoreCase(suppliers.getSupplierName())) {
            supplierDB.setSupplierName(supplierDB.getSupplierName());
        }

        if(Objects.nonNull(suppliers.getSupplierContactPerson()) && !"".equalsIgnoreCase(suppliers.getSupplierContactPerson())) {
            supplierDB.setSupplierContactPerson(supplierDB.getSupplierContactPerson());
        }

        if(Objects.nonNull(suppliers.getSupplierPhoneNumber1()) && !"".equalsIgnoreCase(suppliers.getSupplierPhoneNumber1())) {
            supplierDB.setSupplierPhoneNumber1(supplierDB.getSupplierPhoneNumber1());
        }

        if(Objects.nonNull(suppliers.getSupplierPhoneNumber2()) && !"".equalsIgnoreCase(suppliers.getSupplierPhoneNumber2())) {
            supplierDB.setSupplierPhoneNumber2(supplierDB.getSupplierPhoneNumber2());
        }

        if(Objects.nonNull(suppliers.getUpdateUser())) {
            supplierDB.setUpdateUser(suppliers.getUpdateUser());
        }

        supplierDB.setUpdateDateTime(LocalDateTime.now());

        return suppliersRepository.save(supplierDB);
    }

    @Override
    public Suppliers fetchSupplierByNameIgnoreCase(String supplierName) {
        return suppliersRepository.findBySupplierName(supplierName);
    }
}
