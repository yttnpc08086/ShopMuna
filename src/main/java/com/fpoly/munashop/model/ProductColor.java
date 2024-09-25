package com.fpoly.munashop.model;

import jakarta.persistence.*;
import lombok.*;


import java.io.Serializable;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter

@Entity
@Table(name="Product_Color")
public class ProductColor implements Serializable {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	private String image;
	
	@ManyToOne
	@JoinColumn(name="Product_Id")
	Product product;
	
	@ManyToOne
	@JoinColumn(name="Color_Id")
	Color color;
	
	public ProductColor(String image, Product product, Color color) {
		this.image = image;
		this.product = product;
		this.color = color;
	}
}
