package com.mwororokevin.smallbusinessmanagement.Suppliers;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*", allowedHeaders="*")
public class SuppliersController {
    @Autowired
    private SuppliersService suppliersService;

    private final Logger LOGGER = LoggerFactory.getLogger(SuppliersController.class);

    @PostMapping("/suppliers")
    public Suppliers saveNewSupplier(@RequestBody Suppliers suppliers) {
        LOGGER.info("Inside saveNewSupplier of UsersController");
        return suppliersService.saveNewSupplier(suppliers);
    }

    @GetMapping("/suppliers")
    public List<Suppliers> getAllSuppliers() {
        LOGGER.info("Inside getAllSuppliers of UsersController");
        return suppliersService.getAllSuppliers();
    }

    @GetMapping("/suppliers/{id}")
    public Suppliers fetchUserById(@PathVariable("id") Long supplierId) {
        LOGGER.info("Inside fetchUserById of UsersController");
        return suppliersService.getSupplierById(supplierId);
    }

    @DeleteMapping("suppliers/{id}")
    public String deleteSupplierById(@PathVariable("id") Long supplierId) {
        LOGGER.info("Inside deleteSupplierById of UsersController");
        suppliersService.deleteSupplierById(supplierId);
        return "Supplier Deleted successfully";
    }

    @PutMapping("/suppliers/{id}")
    public Suppliers updateSupplier(@PathVariable("id") Long supplierId, @RequestBody Suppliers suppliers) {
        LOGGER.info("Inside updateSupplier of UsersController");
        return suppliersService.updateSupplier(supplierId, suppliers);
    }

    @GetMapping("/suppliers/surname/{supplierName}")
    public Suppliers fetchSupplierByName(@PathVariable("supplierName") String supplierName) {
        LOGGER.info("Inside fetchSupplierByName of UsersController");
        return suppliersService.fetchSupplierByNameIgnoreCase(supplierName);
    }
}
