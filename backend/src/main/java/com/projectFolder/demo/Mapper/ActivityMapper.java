package com.projectFolder.demo.Mapper;

import com.projectFolder.demo.dto.exercisesDto;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;

@Mapper
public interface ActivityMapper {

    @Select("Select * from exercises")
    List<exercisesDto> getexercises();

    @Select("Select * from exercises where category=#{category}")
    List<exercisesDto> getExercisesByCategory(String category);

    @Select("Select * from exercises where exercise_name=#{exercise}")
     exercisesDto getExcerciseDetails(String exercise);
}
