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

    @PutMapping("/users/{id}")
    public Users updateUser(@PathVariable("id") Long userId, @RequestBody Users users) {
        return usersService.updateUser(userId, users);
    }

    @GetMapping("/users/surname/{surname}")
    public Users fetchUserByName(@PathVariable("surname") String surname) {
        return usersService.fetchUserBySurnameIgnoreCase(surname);
    }

    @GetMapping("/users/othernames/{othernames}")
    public Users fetchUserByOthernames(@PathVariable("othernames") String othernames) {
        return usersService.fetchUserByOthernamesIgnoreCase(othernames);
    }

    @GetMapping("/users/username/{username}")
    public Users fetchUserByUsername(@PathVariable("username") String username) {
        return usersService.fetchUserByUsernameIgnoreCase(username);
    }

    @GetMapping("/users/email/{email}")
    public Users fetchUserByEmail(@PathVariable("email") String email) {
        return usersService.fetchUserByEmailIgnoreCase(email);
    }
}
