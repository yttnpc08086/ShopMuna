package com.fpoly.munashop.Entity;

import jakarta.persistence.*;
import lombok.*;


import java.io.Serializable;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter

@Entity
@Table(name="Product_Cate")
public class ProductCate implements Serializable {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	@ManyToOne
	@JoinColumn(name="Product_Id")
	Product product;
		
	@ManyToOne
	@JoinColumn(name="Cate_Id")
	Category category;
	
	public ProductCate(Product product, Category category) {
		this.product = product;
		this.category = category;
	}
	
}
