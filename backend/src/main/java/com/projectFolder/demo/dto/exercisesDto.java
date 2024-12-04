package com.projectFolder.demo.dto;


import jakarta.validation.constraints.NotNull;
import lombok.Data;



@Data
public class exercisesDto {

   
    @NotNull
    public int id;
    public String exerciseName;
    public String category;
    public int duration;
}
