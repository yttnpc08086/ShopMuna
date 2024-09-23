package com.fpoly.munashop.controller;

import com.fpoly.munashop.entity.Category;
import com.fpoly.munashop.entity.Product;
import com.fpoly.munashop.service.CategoryService;
import com.fpoly.munashop.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping("/product")
public class ProductController {

    @Autowired
    private ProductService productService;

    @Autowired
    private CategoryService categoryService;

    @GetMapping({"/", ""})
    public String listProduct(Model model) {
        List<Product> products = productService.listAll();
        model.addAttribute("products", products);
        return "product/index";
    }

    @GetMapping("/view/{id}")
    public String getProductById(@PathVariable Long id, Model model) {
        Product product = productService.getProductById(id);
        if (product != null) {
            model.addAttribute("product", product);
            return "product/view";
        } else {
            return "error/404";
        }
    }

    @GetMapping("/create")
    public String showCreateProductForm(Model model) {
        List<Category> categories = categoryService.listAll();
        model.addAttribute("categories", categories);
        model.addAttribute("product", new Product());
        return "product/create";
    }

    @PostMapping("/create")
    public String saveProduct(@ModelAttribute Product product) {
        productService.saveProduct(product);
        return "redirect:/product";
    }

    @GetMapping("/update/{id}")
    public String showUpdateProductForm(@PathVariable Long id, Model model) {
        Product product = productService.getProductById(id);
        if (product != null) {
            List<Category> categories = categoryService.listAll();
            model.addAttribute("categories", categories);
            model.addAttribute("product", product);
            return "product/update";
        } else {
            return "error/404";
        }
    }

    @PostMapping("/update")
    public String updateProduct(@ModelAttribute Product product) {
        productService.updateProduct(product);
        return "redirect:/product";
    }

    @GetMapping("/delete/{id}")
    public String deleteProduct(@PathVariable Long id) {
        productService.deleteProduct(id);
        return "redirect:/product";
    }
}
