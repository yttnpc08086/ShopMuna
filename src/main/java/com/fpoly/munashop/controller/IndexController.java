package com.fpoly.munashop.controller;

import com.fpoly.munashop.Entity.Product;
import com.fpoly.munashop.services.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@Controller
@RequestMapping("/")
public class IndexController {

    @Autowired
    private ProductService productService;

    @GetMapping
    public String listActiveProducts(Model model) {
        List<Product> activeProducts = productService.findActiveProducts();
        model.addAttribute("products", activeProducts);
        return "index";
    }
}
