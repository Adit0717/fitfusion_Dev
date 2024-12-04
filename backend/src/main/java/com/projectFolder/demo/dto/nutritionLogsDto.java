package com.projectFolder.demo.dto;

import java.util.Date;

import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Data
public class nutritionLogsDto {

    @NotNull
    public int id;
    @NotNull
    public int userId;
    public Date logDate;
    public int calories;
    public int protein;
    public int carbs;
    public int fats;


}
