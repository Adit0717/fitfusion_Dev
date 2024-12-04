package com.projectFolder.demo.Mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Component;

import com.projectFolder.demo.dto.mealPlanDto;

import lombok.extern.apachecommons.CommonsLog;

@Component
public interface MealMapper {
    
    
    @Select("select * from meal_plans")
    List<mealPlanDto> getMealPlan();

    @Select("select * from meal_plans where meal_type=#{mealType}")
    List<mealPlanDto> getMealByType(String mealType);

    @Select("select * from meal_plans where meal_type=#{mealType} and calories=#{calories}")
    List<mealPlanDto> getMealByCalories(String mealType,String calories);
}
