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
@Table(name="Users", uniqueConstraints = {
		@UniqueConstraint(columnNames = {"Email"})
})
public class User implements Serializable{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	private String email;
	private String password;
	private String fullname;
	
	@OneToMany(mappedBy = "user")
	List<UserRole> userRole;
	
	@OneToMany(mappedBy = "user")
	List<Employee> employee;
	
	@OneToMany(mappedBy = "user")
	List<Address> address;
	
	public User(String email, String password, String fullname) {
		this.email = email;
		this.password = password;
		this.fullname = fullname;
	}
}
