package com.mwororokevin.smallbusinessmanagement.service;

import com.mwororokevin.smallbusinessmanagement.model.Products;
import com.mwororokevin.smallbusinessmanagement.repository.ProductsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Objects;

@Service
public class ProductsServiceImplementation implements ProductsService {
    @Autowired
    private ProductsRepository productsRepository;

    @Override
    public Products saveNewProduct(Products product) {
        LocalDateTime localDateTime = LocalDateTime.now();

        product.setCreationDateTime(localDateTime);
        product.setUpdateDateTime(localDateTime);
        
        return productsRepository.save(product);
    }

    @Override
    public List<Products> getProductsList() {
        return productsRepository.findAll();
    }

    @Override
    public Products getProductById(Long productId) {
        return productsRepository.findById(productId).get();
    }

    @Override
    public void deleteProductById(Long productId) {
        productsRepository.deleteById(productId);
    }

    @Override
    public Products updateProduct(Long productId, Products product) {
        Products productDB = productsRepository.findById(productId).get();

        if(Objects.nonNull(product.getProductName()) && !"".equalsIgnoreCase(product.getProductName())) {
            productDB.setProductName(product.getProductName());
        }

        productDB.setUpdateDateTime(LocalDateTime.now());

        return productsRepository.save(productDB);
    }
}
