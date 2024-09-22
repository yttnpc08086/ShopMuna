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
@Table(name="Orders")
public class Order implements Serializable {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String name;
	private boolean status;
	private boolean method;
	private int quality;
	private String date;
	
	@ManyToOne
	@JoinColumn(name="Color_Id", nullable = true)
	Color color;
	
	@ManyToOne
	@JoinColumn(name="Size_Id", nullable = true)
	Size size;
	
	@ManyToOne
	@JoinColumn(name="Address_Id")
	Address address;
	
	@ManyToOne
	@JoinColumn(name="Product_Id")
	Product product;

	public Order(String name, boolean status, boolean method, int quality, String date, Color color, Size size,
			Address address, Product product) {
		super();
		this.name = name;
		this.status = status;
		this.method = method;
		this.quality = quality;
		this.date = date;
		this.color = color;
		this.size = size;
		this.address = address;
		this.product = product;
	}

	
	
	
}
