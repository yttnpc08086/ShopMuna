package com.fpoly.munashop.controller;

import com.fpoly.munashop.Entity.Category;
import com.fpoly.munashop.services.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping("/category")
public class CategoryController {

    @Autowired
    private CategoryService categoryService;

    @GetMapping({"/", ""})
    public String listCategory(Model model) {
        List<Category> categories = categoryService.listAll();
        model.addAttribute("categories", categories);
        return "category/index";
    }

    @GetMapping("/view/{id}")
    public String getCategoryById(@PathVariable Long id, Model model) {
        Category category = categoryService.getCategoryById(id);
        if (category != null) {
            model.addAttribute("category", category);
            return "category/view";
        } else {
            return "error/404";
        }
    }

    @GetMapping("/create")
    public String showCreateCategoryForm(Model model) {
        model.addAttribute("category", new Category());
        return "category/create";
    }

    @PostMapping("/create")
    public String saveCategory(@ModelAttribute Category category) {
        categoryService.saveCategory(category);
        return "redirect:/category";
    }

    @GetMapping("/update/{id}")
    public String showUpdateCategoryForm(@PathVariable Long id, Model model) {
        Category category = categoryService.getCategoryById(id);
        if (category != null) {
            model.addAttribute("category", category);
            return "category/update";
        } else {
            return "error/404";
        }
    }

    @PostMapping("/update")
    public String updateCategory(@ModelAttribute Category category) {
        categoryService.updateCategory(category);
        return "redirect:/category";
    }

    @GetMapping("/delete/{id}")
    public String confirmDeleteCategory(@PathVariable Long id, Model model) {
        Category category = categoryService.getCategoryById(id);
        model.addAttribute("category", category);
        return "category/confirm-delete";
    }

    @PostMapping("/delete/{id}")
    public String deleteCategory(@PathVariable Long id, @RequestParam boolean confirm) {
        if (confirm) {
            categoryService.deleteCategory(id);
        }
        return "redirect:/category";
    }
}
