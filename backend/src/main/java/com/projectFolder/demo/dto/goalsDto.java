package com.projectFolder.demo.dto;

import lombok.Data;

import javax.validation.constraints.NotNull;
import java.sql.Timestamp;

@Data
public class goalsDto {

    @NotNull
    public int id;

    @NotNull
    public int userId;

    public String goalType;
    public int targetValue;
    public int currentValue;
    public Timestamp createdAt;
    public Timestamp dueDate;
}
