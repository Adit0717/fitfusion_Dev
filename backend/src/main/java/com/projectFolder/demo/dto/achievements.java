package com.projectFolder.demo.dto;

import java.util.Date;

import jakarta.validation.constraints.NotNull;

public class achievements {

    @NotNull
    private int id;
    private int userId;
    private String achievementType;
    private String achievementValue;
    private Date achievementDate;

    // Getter for id
    public int getId() {
        return id;
    }

    // Setter for id
    public void setId(int id) {
        this.id = id;
    }

    // Getter for userId
    public int getUserId() {
        return userId;
    }

    // Setter for userId
    public void setUserId(int userId) {
        this.userId = userId;
    }

    // Getter for achievementType
    public String getAchievementType() {
        return achievementType;
    }

    // Setter for achievementType
    public void setAchievementType(String achievementType) {
        this.achievementType = achievementType;
    }

    // Getter for achievementValue
    public String getAchievementValue() {
        return achievementValue;
    }

    // Setter for achievementValue
    public void setAchievementValue(String achievementValue) {
        this.achievementValue = achievementValue;
    }

    // Getter for achievementDate
    public Date getAchievementDate() {
        return achievementDate;
    }

    // Setter for achievementDate
    public void setAchievementDate(Date achievementDate) {
        this.achievementDate = achievementDate;
    }
}
