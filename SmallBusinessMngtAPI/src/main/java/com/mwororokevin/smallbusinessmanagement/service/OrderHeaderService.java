package com.mwororokevin.smallbusinessmanagement.service;

import com.mwororokevin.smallbusinessmanagement.model.OrderHeader;

import java.util.List;

public interface OrderHeaderService {
    OrderHeader saveNewOrderHeader(OrderHeader orderHeader);

    List<OrderHeader> getOrderHeaderList();

    OrderHeader getOrderHeaderById(Long orderHeaderId);

    void deleteOrderHeaderById(Long orderHeaderId);

    OrderHeader updateOrderHeaderById(Long orderHeaderId, OrderHeader orderHeader);
}
