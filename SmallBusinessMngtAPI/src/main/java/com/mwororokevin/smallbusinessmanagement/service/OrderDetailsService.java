package com.mwororokevin.smallbusinessmanagement.service;

import com.mwororokevin.smallbusinessmanagement.model.OrderDetails;
import com.mwororokevin.smallbusinessmanagement.model.OrderHeader;

import java.util.List;

public interface OrderDetailsService {

    public OrderDetails saveNewOrderDetail(OrderDetails orderDetails);

    List<OrderDetails> getAllOrderDetails();

    OrderDetails getOrderDetailsById(Long orderDetailsId);

    void deleteOrderDetailsById(Long orderDetailsId);

    OrderDetails updateOrderDetailsById(Long orderDetailsId, OrderDetails orderDetails);
}
