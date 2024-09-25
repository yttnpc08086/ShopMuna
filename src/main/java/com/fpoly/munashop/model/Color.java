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
@Table(name="Colors")
public class Color implements Serializable {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	private String name;
	
	@OneToMany(mappedBy = "color")
	List<Order> order;
	
	public Color(String name) {
		this.name = name;
	}
}
