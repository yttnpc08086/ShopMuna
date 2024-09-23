package com.fpoly.munashop.repository;

import com.fpoly.munashop.Entity.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CategoryRepository extends JpaRepository<Category, Long> {
    // Lấy tất cả danh mục dựa vào trạng thái (active/inactive)
    List<Category> findByStatus(boolean status);
}
