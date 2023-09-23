package com.mwororokevin.smallbusinessmanagement.repository;

import com.mwororokevin.smallbusinessmanagement.model.OrderHeader;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderHeaderRepository extends JpaRepository<OrderHeader, Long> {
}
