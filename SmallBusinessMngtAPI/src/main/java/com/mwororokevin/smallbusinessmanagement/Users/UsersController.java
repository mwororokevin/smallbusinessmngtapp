package com.mwororokevin.smallbusinessmanagement.Users;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
public class UsersController {
    @Autowired
    private UsersService usersService;

    private final Logger LOGGER = LoggerFactory.getLogger(UsersController.class);

    @PostMapping("/users")
    @CrossOrigin(origins = "http://localhost:5173/")
    public Users saveNewUser(@RequestBody Users user) {
        LOGGER.info("Inside saveNewUser of UsersController");
        return usersService.saveUser(user);
    }

    @GetMapping("/users")
    @CrossOrigin(origins = "http://localhost:5173/")
    public List<Users> getAllUsers() {
        LOGGER.info("Inside getAllUsers of UsersController");
        return usersService.getUsersList();
    }

    @GetMapping("/users/{id}")
    @CrossOrigin(origins = "http://localhost:5173/")
    public Users fetchUserById(@PathVariable("id") Long userId) {
        LOGGER.info("Inside fetchUserById of UsersController");
        return usersService.getUserById(userId);
    }

    @DeleteMapping("users/{id}")
    @CrossOrigin(origins = "http://localhost:5173/")
    public String deleteUserById(@PathVariable("id") Long userId) {
        LOGGER.info("Inside deleteUserById of UsersController");
        usersService.deleteUserById(userId);
        return "User Deleted successfully";
    }

    @PutMapping("/users/{id}")
    @CrossOrigin(origins = "http://localhost:5173/")
    public Users updateUser(@PathVariable("id") Long userId, @RequestBody Users users) {
        LOGGER.info("Inside updateUser of UsersController");
        return usersService.updateUser(userId, users);
    }

    @GetMapping("/users/surname/{surname}")
    @CrossOrigin(origins = "http://localhost:5173/")
    public Users fetchUserByName(@PathVariable("surname") String surname) {
        LOGGER.info("Inside fetchUserByName of UsersController");
        return usersService.fetchUserBySurnameIgnoreCase(surname);
    }

    @GetMapping("/users/othernames/{othernames}")
    @CrossOrigin(origins = "http://localhost:5173/")
    public Users fetchUserByOthernames(@PathVariable("othernames") String othernames) {
        LOGGER.info("Inside fetchUserByOthernames of UsersController");
        return usersService.fetchUserByOthernamesIgnoreCase(othernames);
    }

    @GetMapping("/users/username/{username}")
    @CrossOrigin(origins = "http://localhost:5173/")
    public Users fetchUserByUsername(@PathVariable("username") String username) {
        LOGGER.info("Inside fetchUserByUsername of UsersController");
        return usersService.fetchUserByUsernameIgnoreCase(username);
    }

    @GetMapping("/users/email/{email}")
    @CrossOrigin(origins = "http://localhost:5173/")
    public Users fetchUserByEmail(@PathVariable("email") String email) {
        LOGGER.info("Inside fetchUserByEmail of UsersController");
        return usersService.fetchUserByEmailIgnoreCase(email);
    }
}
