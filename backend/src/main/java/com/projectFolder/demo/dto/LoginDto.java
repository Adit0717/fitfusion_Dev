package com.projectFolder.demo.dto;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

import javax.validation.constraints.NotNull;
import java.sql.Timestamp;
import java.util.Date;

@Data
public class LoginDto {


    @NotNull
    @JsonIgnore
    public int id;
    public String firstName;
    public String lastName;
    public String email;
    @NotNull
    public String username;
    @NotNull
    public String password;
    public Date dateOfBirth;
    public String gender;
    public int weight;
    public int height;
    public String activityLevel;
    public Timestamp createdAt;
    public Timestamp updatedAt;
    public int termsAccepted;

}