package com.projectFolder.demo.Mapper;

import com.projectFolder.demo.dto.mealPlanDto;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;

@Mapper
public interface MealMapper {

    @Select("select * from meal_plans")
    List<mealPlanDto> getMealPlan();

    @Select("select * from meal_plans where meal_type=#{mealType}")
    List<mealPlanDto> getMealByType(String mealType);

    @Select("select * from meal_plans where meal_type=#{mealType} and calories=#{calories}")
    List<mealPlanDto> getMealByCalories(String mealType,String calories);
}
