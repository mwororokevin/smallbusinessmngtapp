package com.mwororokevin.smallbusinessmanagement.controller;

import com.mwororokevin.smallbusinessmanagement.model.Packaging;
import com.mwororokevin.smallbusinessmanagement.service.PackagingService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class PackagingController {
    @Autowired
    private PackagingService packagingService;

    private final Logger LOGGER = LoggerFactory.getLogger(PackagingController.class);

    @PostMapping("/packages")
    public Packaging saveNewPackage(@RequestBody Packaging packaging) {
        LOGGER.info("Inside saveNewPackage of PackagingController");
        return packagingService.saveNewPackage(packaging);
    }

    @GetMapping("/packages")
    public List<Packaging> getAllPackages() {
        LOGGER.info("Inside getAllPackages of PackagingController");
        return packagingService.getPackageList();
    }

    @GetMapping("/packages/{id}")
    public Packaging getPackageById(@PathVariable("id") Long productId) {
        LOGGER.info("Inside getPackageById of PackagingController");
        return packagingService.getPackageById(productId);
    }

    @DeleteMapping("/packages/{id}")
    public String deletePackageById(@PathVariable("id") Long packageId) {
        LOGGER.info("Inside deleteDistributorById of PackagingController");
        packagingService.deletePackageById(packageId);
        return "Package Deleted successfully";
    }

    @PutMapping("/packages/{id}")
    public Packaging updatePackage(@PathVariable("id") Long packageId, @RequestBody Packaging packaging) {
        LOGGER.info("Inside updatePackage of PackagingController");
        return packagingService.updatePackageById(packageId, packaging);
    }
}
