package com.projectFolder.demo.dto;

import lombok.Data;

import javax.validation.constraints.NotNull;
import java.util.Date;

@Data
public class dailyStepsDto {

    @NotNull
    public int id;
    public int userId;
    public Date stepDate;
    public int stepCount;
}
