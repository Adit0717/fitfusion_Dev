package com.projectFolder.demo.dto;


import java.util.Date;

import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Data
public class userActivityLevelsDto {

    @NotNull
    public int id;
    @NotNull
    public int userId;
    public int activityLevelId;
    public Date startDate;
    public Date endDate;
}
