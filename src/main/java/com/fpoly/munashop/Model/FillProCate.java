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
public class FillProCate {
	@Id
	private Integer id;
	private String nameProduct;
	private String nameCate;
}
