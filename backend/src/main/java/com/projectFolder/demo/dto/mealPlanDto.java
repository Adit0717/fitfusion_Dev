package com.projectFolder.demo.dto;

import lombok.Data;

@Data
public class mealPlanDto {


    private int id;
    private String mealName;
    private String mealType;
    private int calories;
    private int protein;
    private int carbohydrates;
    private int fats;
}
