package com.projectFolder.demo.dto;

import java.sql.Timestamp;

import jakarta.validation.constraints.NotNull;
import lombok.Data;

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
