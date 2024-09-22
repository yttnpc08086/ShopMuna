package com.fpoly.munashop.Entity;

import jakarta.persistence.*;
import lombok.*;


import java.io.Serializable;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter

@Entity
@Table(name="User_Role")
public class UserRole implements Serializable{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	
	private int id;
	
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name="User_Id")
	User user;
	
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name="Role_Id")
	Role role;
	
	public UserRole(User user, Role role) {
		this.user = user;
		this.role = role;
	}
}
