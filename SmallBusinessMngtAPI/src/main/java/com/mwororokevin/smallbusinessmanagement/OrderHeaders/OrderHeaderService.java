package com.mwororokevin.smallbusinessmanagement.OrderHeaders;

import com.mwororokevin.smallbusinessmanagement.OrderHeaders.OrderHeaders;

import java.util.List;

public interface OrderHeaderService {
    OrderHeaders saveNewOrderHeader(OrderHeaders orderHeader);

    List<OrderHeaders> getOrderHeaderList();

    OrderHeaders getOrderHeaderById(Long orderHeaderId);

    void deleteOrderHeaderById(Long orderHeaderId);

    OrderHeaders updateOrderHeaderById(Long orderHeaderId, OrderHeaders orderHeader);
}
