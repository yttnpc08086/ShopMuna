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
public class OrderModel {
	@Id
	private String name;
	private String date;
	private Long price;
	private boolean status;
}
