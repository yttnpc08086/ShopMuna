package com.fpoly.munashop.Entity;

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
@Table(name="Sizes")
public class Size implements Serializable{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	String name;
	
	@OneToMany(mappedBy = "size")
	List<Order> order;
	
	public Size(int id) {
		this.id = id;
	}
}
