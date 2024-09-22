package com.fpoly.munashop.Model;


import com.fpoly.munashop.Entity.UserRole;
import lombok.*;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter

public class AppUser {
	private int id;

	private String email;
	private String password;
	private String fullname;

	List<UserRole> userRole;

	public AppUser(String email, String password, String fullname) {
		this.email = email;
		this.password = password;
		this.fullname = fullname;
	}

}
