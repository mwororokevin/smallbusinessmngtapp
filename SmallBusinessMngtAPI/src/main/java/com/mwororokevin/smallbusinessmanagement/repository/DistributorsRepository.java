package com.mwororokevin.smallbusinessmanagement.repository;

import com.mwororokevin.smallbusinessmanagement.model.Distributors;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DistributorsRepository extends JpaRepository<Distributors, Long> {
    public Distributors findBySurnameIgnoreCase(String surname);

    public Distributors findByOtherNamesIgnoreCase(String othernames);

    public Distributors findByEmailIgnoreCase(String email);
}
