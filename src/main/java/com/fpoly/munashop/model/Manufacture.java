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
@Table(name="Manufactures")
public class Manufacture implements Serializable {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	private String name;
	
	private String image;
	
	private String information;
	
	@OneToMany(mappedBy = "manufacture")
	List<Product> product;
	
	public Manufacture(String name, String image, String information) {
		this.name = name;
		this.image = image;
		this.information = information;
	}
}
