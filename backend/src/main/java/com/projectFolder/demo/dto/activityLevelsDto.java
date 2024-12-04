package com.projectFolder.demo.dto;

import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Data
public class activityLevelsDto {

    @NotNull
    public int id;
    public String activityName;
    public String description;

}
