package com.fpoly.munashop.Model;

//import com.fpoly.munashop.Dao.ManufactureDao;
import lombok.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.multipart.MultipartFile;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter

public class ProductModel {
	
	//@Autowired
	//ManufactureDao dao;
	
	private int id;
	private String name;
	private int price = 0;
	private MultipartFile image;
	private String origin;
	private String material;
	private String describe;
	private String review;
	private String manufacture;
	private String manuDay;
	//private List<Manufacture> manufacture = dao.findAll();
	//private Map<Integer,String> manufacture;
}
