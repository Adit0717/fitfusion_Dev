package com.projectFolder.demo.dto;

import lombok.Data;

import javax.validation.constraints.NotNull;
import java.util.Date;

@Data
public class achievements {

    @NotNull
    public int id;
    public int userId;
    public String achievementType;
    public String achievementValue;
    public Date achievementDate;
}
