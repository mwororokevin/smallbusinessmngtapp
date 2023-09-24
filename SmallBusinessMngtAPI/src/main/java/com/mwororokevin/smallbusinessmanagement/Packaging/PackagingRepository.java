package com.mwororokevin.smallbusinessmanagement.Packaging;

import com.mwororokevin.smallbusinessmanagement.Packaging.Packaging;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PackagingRepository extends JpaRepository<Packaging, Long> {
}
