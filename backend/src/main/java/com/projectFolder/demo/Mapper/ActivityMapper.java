package com.projectFolder.demo.Mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;

import com.projectFolder.demo.dto.exercisesDto;

@Component
public interface ActivityMapper {

    @Select("Select * from exercises")
    List<exercisesDto> getexercises();

    @Select("Select * from exercises where category=#{category}")
    List<exercisesDto> getExercisesByCategory(String category);

    @Select("Select * from exercises where exercise_name=#{exercise}")
    exercisesDto getExcerciseDetails(String exercise);
}
