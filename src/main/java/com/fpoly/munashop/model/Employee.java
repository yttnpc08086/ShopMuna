package com.fpoly.munashop.model;

import jakarta.persistence.*;
import lombok.*;


import java.io.Serializable;

@Data

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name="Employees")
public class Employee implements Serializable {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	private String position;
//	@Temporal(TemporalType.DATE)	
	@Column(name="Startday")
	private String startDay;
	
	@ManyToOne
	@JoinColumn(name="User_Id")
	User user;
	
	public Employee(String position, String startDay, User user) {
		this.position = position;
		this.startDay = startDay;
		this.user = user;
	}
}
