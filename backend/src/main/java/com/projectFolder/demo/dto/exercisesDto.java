package com.projectFolder.demo.dto;

import lombok.Data;

import javax.validation.constraints.NotNull;

@Data
public class exercisesDto {

    @NotNull
    public int id;
    public String exerciseName;
    public String category;
    public int duration;
}
