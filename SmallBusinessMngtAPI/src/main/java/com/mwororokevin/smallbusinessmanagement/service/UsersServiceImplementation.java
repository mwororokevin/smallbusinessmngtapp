package com.mwororokevin.smallbusinessmanagement.service;

import com.mwororokevin.smallbusinessmanagement.model.Users;
import com.mwororokevin.smallbusinessmanagement.repository.UsersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Objects;

@Service
public class UsersServiceImplementation implements UsersService {
    @Autowired
    private UsersRepository usersRepository;

    @Override
    public Users saveUser(Users user) {
        return usersRepository.save(user);
    }

    @Override
    public List<Users> getUsersList() {
        return usersRepository.findAll();
    }

    @Override
    public Users getUserById(Long userId) {
        return usersRepository.findById(userId).get();
    }

    @Override
    public void deleteUserById(Long userId) {
        usersRepository.deleteById(userId);
    }

    @Override
    public Users updateUser(Long userId, Users users) {
        Users userDB = usersRepository.findById(userId).get();

        if(Objects.nonNull(users.getSurname()) && !"".equalsIgnoreCase(users.getSurname())) {
            userDB.setSurname(users.getSurname());
        }

        if(Objects.nonNull(users.getOtherNames()) && !"".equalsIgnoreCase(users.getOtherNames())) {
            userDB.setOtherNames(users.getOtherNames());
        }

        if(Objects.nonNull(users.getEmail()) && !"".equalsIgnoreCase(users.getEmail())) {
            userDB.setEmail(users.getEmail());
        }

        if(Objects.nonNull(users.getPassword()) && !"".equalsIgnoreCase(users.getPassword())) {
            userDB.setPassword(users.getPassword());
        }

        if(Objects.nonNull(users.getUsername()) && !"".equalsIgnoreCase(users.getUsername())) {
            userDB.setUsername(users.getUsername());
        }

        userDB.setUpdateDateTime(LocalDateTime.now());

        return usersRepository.save(userDB);
    }
}
