package com.mwororokevin.smallbusinessmanagement.controller;

import com.mwororokevin.smallbusinessmanagement.model.Users;
import com.mwororokevin.smallbusinessmanagement.service.UsersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class UsersController {
    @Autowired
    private UsersService usersService;

    @PostMapping("/users")
    public Users saveNewUser(@RequestBody Users user) {
        return usersService.saveUser(user);
    }

    @GetMapping("/users")
    public List<Users> getAllUsers() {
        return usersService.getUsersList();
    }
}
