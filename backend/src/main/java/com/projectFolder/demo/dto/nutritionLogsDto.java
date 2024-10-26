package com.projectFolder.demo.dto;

import lombok.Data;

import javax.validation.constraints.NotNull;
import java.util.Date;

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
