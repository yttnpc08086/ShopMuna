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
public class FillProSize {
	@Id
	private Integer id;
	private String nameProduct;
	private String nameSize;
}
