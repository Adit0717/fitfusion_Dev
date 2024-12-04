package com.projectFolder.demo.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import com.projectFolder.demo.Mapper.ActivityMapper;
import com.projectFolder.demo.dto.exercisesDto;

import lombok.extern.slf4j.Slf4j;

@Repository
@Slf4j
public class ExercisesServiceImpl {

    @Autowired
    ActivityMapper activityMapper;

    public List<exercisesDto> getallExercies(){
        List<exercisesDto> details=activityMapper.getexercises();
        return details;
    }

    public List<exercisesDto> getExercisesBycategpry(String category){
        List<exercisesDto> detilas=activityMapper.getExercisesByCategory(category);
        return detilas;
    }

    public exercisesDto getExercise(String exercise){
        exercisesDto details=activityMapper.getExcerciseDetails(exercise);
        return details;
    }
}
