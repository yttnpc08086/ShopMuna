package com.fpoly.munashop.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


import java.io.Serializable;

@Data
@NoArgsConstructor
@AllArgsConstructor

@Entity
public class StatisOrder {
	@Id
	private Serializable group;
	private Long count;
}
