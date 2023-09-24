package com.mwororokevin.smallbusinessmanagement.Products;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ProductsController {
    @Autowired
    private ProductsService productsService;

    private final Logger LOGGER = LoggerFactory.getLogger(ProductsController.class);

    @PostMapping("/products")
    public Products saveNewDistributor(@RequestBody Products product) {
        return productsService.saveNewProduct(product);
    }

    @GetMapping("/products")
    public List<Products> getAllProducts() {
        LOGGER.info("Inside getAllUsers of ProductsController");
        return productsService.getProductsList();
    }

    @GetMapping("/products/{id}")
    public Products getProductById(@PathVariable("id") Long productId) {
        LOGGER.info("Inside getProductById of ProductsController");
        return productsService.getProductById(productId);
    }

    @DeleteMapping("/products/{id}")
    public String deleteDistributorById(@PathVariable("id") Long distributorId) {
        LOGGER.info("Inside deleteDistributorById of ProductsController");
        productsService.deleteProductById(distributorId);
        return "Product Deleted successfully";
    }

    @PutMapping("/products/{id}")
    public Products updateProduct(@PathVariable("id") Long productId, @RequestBody Products product) {
        LOGGER.info("Inside updateProduct of ProductsController");
        return productsService.updateProduct(productId, product);
    }
}
