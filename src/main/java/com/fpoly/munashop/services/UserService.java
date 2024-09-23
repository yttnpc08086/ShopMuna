package com.fpoly.munashop.services;

import com.fpoly.munashop.Entity.User;
import com.fpoly.munashop.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    // Lưu thông tin người dùng
    public void save(User user) {
        // Mã hóa mật khẩu trước khi lưu
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        userRepository.save(user);
    }

    // Tìm người dùng dựa vào tên đăng nhập (username)
    public User findByUsername(String username) {
        return userRepository.findByUsername(username);
    }
}
