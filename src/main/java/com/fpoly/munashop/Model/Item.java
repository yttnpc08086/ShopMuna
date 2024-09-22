package com.fpoly.munashop.Model;

import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter

public class Item {
	private int id;
	private int idColor;
	private int idSize;
	private String name;
	private String image;
	private int quality;
	private int price;
}
