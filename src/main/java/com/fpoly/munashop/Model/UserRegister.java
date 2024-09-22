package com.fpoly.munashop.Model;

import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter

public class UserRegister {
	private String email;
	private String fullname;
	private String code;
	private String password;
	private String confirm;
}
