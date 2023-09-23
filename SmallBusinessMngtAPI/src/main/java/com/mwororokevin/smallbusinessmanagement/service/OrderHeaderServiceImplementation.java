package com.mwororokevin.smallbusinessmanagement.service;

import com.mwororokevin.smallbusinessmanagement.model.OrderHeader;
import com.mwororokevin.smallbusinessmanagement.repository.OrderHeaderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class OrderHeaderServiceImplementation implements OrderHeaderService {
    @Autowired
    private OrderHeaderRepository orderHeaderRepository;

    @Override
    public OrderHeader saveNewOrderHeader(OrderHeader orderHeader) {
        LocalDateTime localDateTime = LocalDateTime.now();

        orderHeader.setCreationDateTime(localDateTime);
        orderHeader.setUpdateDateTime(localDateTime);

        return orderHeaderRepository.save(orderHeader);
    }

    @Override
    public List<OrderHeader> getOrderHeaderList() {
        return orderHeaderRepository.findAll();
    }

    @Override
    public OrderHeader getOrderHeaderById(Long orderHeaderId) {
        return orderHeaderRepository.findById(orderHeaderId).get();
    }

    @Override
    public void deleteOrderHeaderById(Long orderHeaderId) {
        orderHeaderRepository.deleteById(orderHeaderId);
    }

    @Override
    public OrderHeader updateOrderHeaderById(Long orderHeaderId, OrderHeader orderHeader) {
        return null;
    }
}
