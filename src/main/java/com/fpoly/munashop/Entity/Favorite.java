package com.fpoly.munashop.Entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


import java.io.Serializable;

@Data
@NoArgsConstructor
@AllArgsConstructor

@Entity
@Table(name="Favorites")
public class Favorite implements Serializable {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	private String date;
	
	@ManyToOne
	@JoinColumn(name="User_Id")
	User user;
	
	@ManyToOne
	@JoinColumn(name="Product_Id")
	Product product;

	public Favorite(String date, User user, Product product) {
		super();
		this.date = date;
		this.user = user;
		this.product = product;
	}
	
	
}
