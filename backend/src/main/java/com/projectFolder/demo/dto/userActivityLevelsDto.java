package com.projectFolder.demo.dto;


import lombok.Data;

import javax.validation.constraints.NotNull;
import java.util.Date;

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
