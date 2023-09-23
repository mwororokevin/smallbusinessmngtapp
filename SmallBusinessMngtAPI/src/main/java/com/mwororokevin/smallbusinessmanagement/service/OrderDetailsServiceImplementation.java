package com.mwororokevin.smallbusinessmanagement.service;

import com.mwororokevin.smallbusinessmanagement.model.OrderDetails;
import com.mwororokevin.smallbusinessmanagement.repository.OrderDetailsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Objects;

@Service
public class OrderDetailsServiceImplementation implements OrderDetailsService {
    @Autowired
    private OrderDetailsRepository orderDetailsRepository;

    @Override
    public OrderDetails saveNewOrderDetail(OrderDetails orderDetails) {
        return orderDetailsRepository.save(orderDetails);
    }

    @Override
    public List<OrderDetails> getAllOrderDetails() {
        return orderDetailsRepository.findAll();
    }

    @Override
    public OrderDetails getOrderDetailsById(Long orderDetailsId) {
        return orderDetailsRepository.findById(orderDetailsId).get();
    }

    @Override
    public void deleteOrderDetailsById(Long orderDetailsId) {
        orderDetailsRepository.deleteById(orderDetailsId);
    }

    @Override
    public OrderDetails updateOrderDetailsById(Long orderDetailsId, OrderDetails orderDetails) {
        OrderDetails orderDetailsDB = orderDetailsRepository.findById(orderDetailsId).get();

        if(Objects.nonNull(orderDetails.getDistributor())) {
            orderDetailsDB.setDistributor(orderDetailsDB.getDistributor());
        }

        if(Objects.nonNull(orderDetails.getProduct())) {
            orderDetailsDB.setProduct(orderDetailsDB.getProduct());
        }

        if(Objects.nonNull(orderDetails.getPackaging())) {
            orderDetailsDB.setPackaging(orderDetailsDB.getPackaging());
        }

        if(Objects.nonNull(orderDetails.getOrderHeader())) {
            orderDetailsDB.setOrderHeader(orderDetailsDB.getOrderHeader());
        }

        orderDetailsDB.setOrderQuantity(orderDetailsDB.getOrderQuantity());
        orderDetailsDB.setPricePerOrder(orderDetailsDB.getPricePerOrder());
        orderDetailsDB.setTotalPrice(orderDetailsDB.getOrderQuantity() * orderDetailsDB.getPricePerOrder());
        orderDetailsDB.setUpdateDateTime(LocalDateTime.now());

        return orderDetailsRepository.save(orderDetailsDB);
    }
}
