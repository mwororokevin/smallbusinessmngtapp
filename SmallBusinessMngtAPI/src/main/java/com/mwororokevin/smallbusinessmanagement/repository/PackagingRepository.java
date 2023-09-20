package com.mwororokevin.smallbusinessmanagement.repository;

import com.mwororokevin.smallbusinessmanagement.model.Packaging;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PackagingRepository extends JpaRepository<Packaging, Long> {
}
