package com.mwororokevin.smallbusinessmanagement.controller;

import com.mwororokevin.smallbusinessmanagement.model.Users;
import com.mwororokevin.smallbusinessmanagement.service.UsersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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

    @GetMapping("/users/{id}")
    public Users fetchUserById(@PathVariable("id") Long userId) {
        return usersService.getUserById(userId);
    }

    @DeleteMapping("users/{id}")
    public String deleteUserById(@PathVariable("id") Long userId) {
        usersService.deleteUserById(userId);
        return "User Deleted successfully";
    }
}
