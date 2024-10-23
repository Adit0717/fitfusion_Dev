package com.projectFolder.demo.Service;

import com.projectFolder.demo.Mapper.MealMapper;
import com.projectFolder.demo.dto.mealPlanDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MealPlanServiceImpl {


    @Autowired
    MealMapper mealMapper;

    public List<mealPlanDto> getMealPlanList(){
        List<mealPlanDto> mealDetails=mealMapper.getMealPlan();
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
