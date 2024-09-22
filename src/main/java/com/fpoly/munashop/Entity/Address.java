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
@Table(name = "Address")
public class Address implements Serializable {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	private String firstname;
	private String lastname;
	private String email;
	private String phone;
	private String provincial;
	private String address;

	@ManyToOne
	@JoinColumn(name = "User_Id")
	private User user;

	public Address(String firstname, String lastname, String email, String phone, String provincial, String address,
			User user) {
		super();
		this.firstname = firstname;
		this.lastname = lastname;
		this.email = email;
		this.phone = phone;
		this.provincial = provincial;
		this.address = address;
		this.user = user;
	}

}
