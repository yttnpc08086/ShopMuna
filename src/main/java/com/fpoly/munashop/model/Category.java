package com.fpoly.munashop.model;

import jakarta.persistence.*;
import lombok.*;

import java.io.Serializable;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter

@Entity
@Table(name="Categories")
public class Category implements Serializable {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	private String name;
	
	private String image;
	
	@OneToMany(mappedBy = "category")
	List<ProductCate> productManu;
	
	public Category(String name, String image) {
		this.name = name;
		this.image = image;
	}
}
