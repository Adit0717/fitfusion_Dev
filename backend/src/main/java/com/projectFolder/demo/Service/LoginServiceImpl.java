package com.projectFolder.demo.Service;

import com.projectFolder.demo.Mapper.LoginMapper;
import com.projectFolder.demo.dto.LoginDto;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Slf4j
public class LoginServiceImpl {

    @Autowired
    LoginMapper loginMapper;

    public List<LoginDto> getUserList() {
        List<LoginDto> users = loginMapper.checkUsers();
        return users;
    }

    public LoginDto getUserByEmail(String email) {
        LoginDto details = loginMapper.getUserByEmail(email);
        return details;
    }

    public String addUsers(LoginDto loginDto) {
        LoginDto details = loginMapper.getUserByEmail(loginDto.getEmail());
        if(details!=null) {
            loginMapper.insertUser(loginDto);
        }else{
            return "User with email already exists";
        }
        return null;
    }

    public String login(String email, String password) {
        LoginDto loginDto = loginMapper.getUserByEmail(email);
        if (loginDto == null) {
            return "User Not Found";
        } else if (loginDto.getPassword().equals(password)) {
            return "Login Successful";
        } else {
            return "Wrong Password";
        }
    }

    public boolean updatePassword(String email, String password) {
        LoginDto user = loginMapper.getUserByEmail(email);
        if (user != null) {
            loginMapper.updatePassword(email, password);
            return true;
        }
        return false;
    }
}
