package com.fpoly.munashop.Model;

import lombok.*;
import org.springframework.web.multipart.MultipartFile;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Categories {
	private int id;
	
	private String name;

	private MultipartFile image;
	
}
