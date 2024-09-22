package com.fpoly.munashop.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.*;



@Data
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter

@Entity
public class FillProColor {
	@Id
	private Integer id;
	private String image;
	private String nameProduct;
	private String nameColor;
}
