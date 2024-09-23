package com.fpoly.munashop.services;

import com.fpoly.munashop.Entity.Product;
import com.fpoly.munashop.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepository;

    // Lấy tất cả sản phẩm
    public List<Product> listAll() {
        return productRepository.findAll();
    }

    // Lưu sản phẩm mới
    public void saveProduct(Product product) {
        productRepository.save(product);
    }

    // Cập nhật sản phẩm
    public Product updateProduct(Product product) {
        return productRepository.save(product);
    }

    // Xóa sản phẩm
    public void deleteProduct(Long id) {
        productRepository.deleteById(id);
    }

    // Lấy sản phẩm theo ID
    public Product getProductById(Long id) {
        return productRepository.findById(id).orElse(null);
    }

    // Tìm sản phẩm theo trạng thái
    public List<Product> findByStatus(boolean status) {
        return productRepository.findByStatus(status);
    }

    // Tìm sản phẩm theo danh mục
    public List<Product> findByCategoryId(Long categoryId) {
        return productRepository.findByCategoryId(categoryId);
    }
}
