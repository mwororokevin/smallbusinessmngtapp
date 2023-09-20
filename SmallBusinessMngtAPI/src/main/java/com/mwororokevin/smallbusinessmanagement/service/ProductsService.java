package com.mwororokevin.smallbusinessmanagement.service;

import com.mwororokevin.smallbusinessmanagement.model.Distributors;
import com.mwororokevin.smallbusinessmanagement.model.Products;

import java.util.List;

public interface ProductsService {
    public Products saveNewProduct(Products product);

    public List<Products> getProductsList();

    public Products getProductById(Long productId);

    public void deleteProductById(Long distributorId);

    Products updateProduct(Long productId, Products product);
}
