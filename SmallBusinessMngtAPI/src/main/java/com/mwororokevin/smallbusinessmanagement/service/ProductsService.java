package com.mwororokevin.smallbusinessmanagement.service;

import com.mwororokevin.smallbusinessmanagement.model.Products;

import java.util.List;

public interface ProductsService {

    Products saveNewProduct(Products product);

    List<Products> getProductsList();

    Products getProductById(Long productId);

    void deleteProductById(Long distributorId);

    Products updateProduct(Long productId, Products product);
}
