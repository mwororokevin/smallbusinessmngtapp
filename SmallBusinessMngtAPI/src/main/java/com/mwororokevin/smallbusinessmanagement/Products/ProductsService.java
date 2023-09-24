package com.mwororokevin.smallbusinessmanagement.Products;

import com.mwororokevin.smallbusinessmanagement.Products.Products;

import java.util.List;

public interface ProductsService {

    Products saveNewProduct(Products product);

    List<Products> getProductsList();

    Products getProductById(Long productId);

    void deleteProductById(Long distributorId);

    Products updateProduct(Long productId, Products product);
}
