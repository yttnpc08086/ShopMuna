package com.fpoly.munashop.repository;

import com.fpoly.munashop.Entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {
    // Lấy tất cả sản phẩm thuộc một danh mục cụ thể
    List<Product> findByCategoryId(Long categoryId);

    // Xóa tất cả sản phẩm thuộc danh mục cụ thể
    void deleteByCategoryId(Long categoryId);

    // Lấy tất cả sản phẩm dựa vào trạng thái (active/inactive)
    List<Product> findByStatus(boolean status);
}
