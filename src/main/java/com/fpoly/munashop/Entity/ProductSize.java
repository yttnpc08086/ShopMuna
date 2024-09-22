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
@Table(name="Product_Size")
public class ProductSize implements Serializable {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	@ManyToOne
	@JoinColumn(name="Product_Id")
	Product product;
	
	@ManyToOne
	@JoinColumn(name="Size_Id")
	Size size;
	
	public ProductSize(Product product, Size size) {
		this.product = product;
		this.size = size;
	}
}
