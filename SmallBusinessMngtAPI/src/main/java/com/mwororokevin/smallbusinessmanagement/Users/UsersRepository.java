package com.mwororokevin.smallbusinessmanagement.Users;

import com.mwororokevin.smallbusinessmanagement.Users.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UsersRepository extends JpaRepository<Users, Long> {
    public Users findBySurnameIgnoreCase(String surname);

    public Users findByOtherNamesIgnoreCase(String othernames);

    public Users findByUsernameIgnoreCase(String username);

    public Users findByEmailIgnoreCase(String email);
}
