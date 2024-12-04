package com.projectFolder.demo.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import com.projectFolder.demo.Mapper.MealMapper;
import com.projectFolder.demo.dto.mealPlanDto;

import lombok.extern.slf4j.Slf4j;

@Repository
@Slf4j
public class MealPlanServiceImpl {


    @Autowired(required=true)
    MealMapper mealMapper;

    
    public List<mealPlanDto> getMealPlanList(){
        System.out.println("Endpoint hitting coming to service class");
        List<mealPlanDto> mealDetails=mealMapper.getMealPlan();
        System.out.println(mealDetails);
        return mealDetails;
    }

    public List<mealPlanDto> getMealPlanByType(String mealType){
        List<mealPlanDto> mealDetails=mealMapper.getMealByType(mealType);
        return mealDetails;
    }

    public List<mealPlanDto> getMealPlanByCalories(String mealType,String calories){
        List<mealPlanDto> mealDetailsByCalories=mealMapper.getMealByCalories(mealType,calories);
        return mealDetailsByCalories;
    }
}
