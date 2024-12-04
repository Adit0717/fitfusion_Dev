package com.projectFolder.demo.dto;

import java.util.Date;

import lombok.Data;

@Data
public class dailyStepsDto {

   
    public int id;
    public int userId;
    public Date stepDate;
    public int stepCount;
}
