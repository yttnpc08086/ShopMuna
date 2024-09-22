package com.fpoly.munashop.Model;

import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter

public class UserModel {
	private int id;
	private String email;
	private String fullname;
	private String password;
	private String confirm;
}
