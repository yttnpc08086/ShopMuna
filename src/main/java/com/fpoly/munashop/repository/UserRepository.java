package com.fpoly.munashop.repository;

import com.fpoly.munashop.Entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    // Tìm người dùng dựa vào tên người dùng (username)
    User findByUsername(String username);
}
