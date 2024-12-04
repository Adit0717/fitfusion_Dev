package com.projectFolder.demo.Controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.projectFolder.demo.Service.MealPlanServiceImpl;
import com.projectFolder.demo.dto.mealPlanDto;

@RestController
public class MealController {


    @Autowired(required=true)
    MealPlanServiceImpl mealPlanServiceImpl;


    @GetMapping("/mealPlans")
    public ResponseEntity<?> getMealPlans(){
        Map<String,List<mealPlanDto>> response = new HashMap<>();
        List<mealPlanDto> details=mealPlanServiceImpl.getMealPlanList();
        response.put("Meal Details",details);
        return ResponseEntity.status(200).body(response);
    }

    @GetMapping("/mealByType")
    public ResponseEntity<?> getMealPlanByType(String mealType){
        Map<String,List<mealPlanDto>> response = new HashMap<>();
        List<mealPlanDto> details=mealPlanServiceImpl.getMealPlanByType(mealType);
        if(details.size()==0){
            Map<String,String> failureresponse = new HashMap<>();
            failureresponse.put("Meal Details","not available in particular combination");
            return ResponseEntity.status(200).body(response);
        }
        response.put("Meal Details",details);
        return ResponseEntity.status(200).body(response);
    }

    @GetMapping("/mealByCalories")
    public ResponseEntity<?> getMealPlanByCalories(String mealType,String calories){
        Map<String,String> failureResponse=new HashMap<>();
        Map<String,List<mealPlanDto>> positiveResponse = new HashMap<>();
        List<mealPlanDto> details=mealPlanServiceImpl.getMealPlanByCalories(mealType,calories);
        if(details.size()==0){
            failureResponse.put("Meal Not available","in particular Type and Calories");
            return ResponseEntity.status(400).body(failureResponse);
        }
        positiveResponse.put("Meal Details",details);
        return ResponseEntity.status(200).body(positiveResponse);
    }
}
