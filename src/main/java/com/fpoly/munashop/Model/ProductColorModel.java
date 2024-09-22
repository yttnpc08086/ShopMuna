package com.fpoly.munashop.Model;

import lombok.*;
import org.springframework.web.multipart.MultipartFile;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class ProductColorModel {
	private String productId;
	private MultipartFile image;
	private String colorId;
}
