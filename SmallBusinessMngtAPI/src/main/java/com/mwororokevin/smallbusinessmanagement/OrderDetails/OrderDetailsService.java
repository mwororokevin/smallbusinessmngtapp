package com.mwororokevin.smallbusinessmanagement.OrderDetails;

import com.mwororokevin.smallbusinessmanagement.OrderDetails.OrderDetails;

import java.util.List;

public interface OrderDetailsService {

    public OrderDetails saveNewOrderDetail(OrderDetails orderDetails);

    List<OrderDetails> getAllOrderDetails();

    OrderDetails getOrderDetailsById(Long orderDetailsId);

    void deleteOrderDetailsById(Long orderDetailsId);

    OrderDetails updateOrderDetailsById(Long orderDetailsId, OrderDetails orderDetails);
}
