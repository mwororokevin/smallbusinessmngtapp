package com.mwororokevin.smallbusinessmanagement.service;

import com.mwororokevin.smallbusinessmanagement.model.Users;

import java.util.List;

public interface UsersService {
    public Users saveUser(Users user);

    public List<Users> getUsersList();

    public Users getUserById(Long userId);

    public void deleteUserById(Long userId);

    public Users updateUser(Long userId, Users users);

    public Users fetchUserBySurnameIgnoreCase(String surname);

    public Users fetchUserByOthernamesIgnoreCase(String othernames);

    public Users fetchUserByUsernameIgnoreCase(String username);

    public Users fetchUserByEmailIgnoreCase(String email);
}
