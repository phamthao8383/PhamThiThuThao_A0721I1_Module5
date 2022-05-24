package com.example.spring_angular.service;

import com.example.spring_angular.model.Product;
import org.springframework.http.ResponseEntity;

import java.util.List;
import java.util.Optional;

public interface ProductService {
    List<Product>findAll();
    Optional<Product> findById(int id);
    Product save(Product product);
    void remove(int id);

}
