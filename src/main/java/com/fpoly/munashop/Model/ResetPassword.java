package com.fpoly.munashop.Model;

import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter

public class ResetPassword {
	private String password;
	private String confirm;
}
