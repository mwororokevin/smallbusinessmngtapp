package com.mwororokevin.smallbusinessmanagement.Users;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class UsersController {
    @Autowired
    private UsersService usersService;

    private final Logger LOGGER = LoggerFactory.getLogger(UsersController.class);

    @PostMapping("/users")
    public Users saveNewUser(@RequestBody Users user) {
        LOGGER.info("Inside saveNewUser of UsersController");
        return usersService.saveUser(user);
    }

    @GetMapping("/users")
    public List<Users> getAllUsers() {
        LOGGER.info("Inside getAllUsers of UsersController");
        return usersService.getUsersList();
    }

    @GetMapping("/users/{id}")
    public Users fetchUserById(@PathVariable("id") Long userId) {
        LOGGER.info("Inside fetchUserById of UsersController");
        return usersService.getUserById(userId);
    }

    @DeleteMapping("users/{id}")
    public String deleteUserById(@PathVariable("id") Long userId) {
        LOGGER.info("Inside deleteUserById of UsersController");
        usersService.deleteUserById(userId);
        return "User Deleted successfully";
    }

    @PutMapping("/users/{id}")
    public Users updateUser(@PathVariable("id") Long userId, @RequestBody Users users) {
        LOGGER.info("Inside updateUser of UsersController");
        return usersService.updateUser(userId, users);
    }

    @GetMapping("/users/surname/{surname}")
    public Users fetchUserByName(@PathVariable("surname") String surname) {
        LOGGER.info("Inside fetchUserByName of UsersController");
        return usersService.fetchUserBySurnameIgnoreCase(surname);
    }

    @GetMapping("/users/othernames/{othernames}")
    public Users fetchUserByOthernames(@PathVariable("othernames") String othernames) {
        LOGGER.info("Inside fetchUserByOthernames of UsersController");
        return usersService.fetchUserByOthernamesIgnoreCase(othernames);
    }

    @GetMapping("/users/username/{username}")
    public Users fetchUserByUsername(@PathVariable("username") String username) {
        LOGGER.info("Inside fetchUserByUsername of UsersController");
        return usersService.fetchUserByUsernameIgnoreCase(username);
    }

    @GetMapping("/users/email/{email}")
    public Users fetchUserByEmail(@PathVariable("email") String email) {
        LOGGER.info("Inside fetchUserByEmail of UsersController");
        return usersService.fetchUserByEmailIgnoreCase(email);
    }
}
