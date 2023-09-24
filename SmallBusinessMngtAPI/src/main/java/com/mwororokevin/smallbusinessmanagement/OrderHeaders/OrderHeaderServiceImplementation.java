package com.mwororokevin.smallbusinessmanagement.OrderHeaders;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Objects;

@Service
public class OrderHeaderServiceImplementation implements OrderHeaderService {
    @Autowired
    private OrderHeaderRepository orderHeaderRepository;

    @Override
    public OrderHeaders saveNewOrderHeader(OrderHeaders orderHeader) {
        LocalDateTime localDateTime = LocalDateTime.now();

        orderHeader.setCreationDateTime(localDateTime);
        orderHeader.setUpdateDateTime(localDateTime);

        return orderHeaderRepository.save(orderHeader);
    }

    @Override
    public List<OrderHeaders> getOrderHeaderList() {
        return orderHeaderRepository.findAll();
    }

    @Override
    public OrderHeaders getOrderHeaderById(Long orderHeaderId) {
        return orderHeaderRepository.findById(orderHeaderId).get();
    }

    @Override
    public void deleteOrderHeaderById(Long orderHeaderId) {
        orderHeaderRepository.deleteById(orderHeaderId);
    }

    @Override
    public OrderHeaders updateOrderHeaderById(Long orderHeaderId, OrderHeaders orderHeader) {
        OrderHeaders orderHeaderDB = orderHeaderRepository.findById(orderHeaderId).get();

        if(Objects.nonNull(orderHeader.getDistributorId())) {
            orderHeaderDB.setDistributorId(orderHeader.getDistributorId());
        }

        if(Objects.nonNull(orderHeader.getUpdateUser())) {
            orderHeaderDB.setUpdateUser(orderHeader.getUpdateUser());
        }

//        orderHeaderDB.setOrderAmount();
        orderHeaderDB.setUpdateDateTime(LocalDateTime.now());

        return orderHeaderRepository.save(orderHeaderDB);
    }
}
