package com.fpoly.munashop.Model;

import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter

public class UserLogin {
	private String username;
	private String password;
	private boolean remember;
}
