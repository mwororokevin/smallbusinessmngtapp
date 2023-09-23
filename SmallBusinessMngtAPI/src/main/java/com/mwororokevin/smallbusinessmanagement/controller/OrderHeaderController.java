package com.mwororokevin.smallbusinessmanagement.controller;

import com.mwororokevin.smallbusinessmanagement.model.OrderHeader;
import com.mwororokevin.smallbusinessmanagement.service.OrderHeaderService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class OrderHeaderController {
    @Autowired
    private OrderHeaderService orderHeaderService;

    private final Logger LOGGER = LoggerFactory.getLogger(OrderHeaderController.class);

    @PostMapping("/order-headers")
    public OrderHeader saveNewDistributor(@RequestBody OrderHeader orderHeader) {
        LOGGER.info("Inside saveNewDistributor of OrderHeaderController");
        return orderHeaderService.saveNewOrderHeader(orderHeader);
    }

    @GetMapping("/order-headers")
    public List<OrderHeader> getAllOrderHeaders() {
        LOGGER.info("Inside getAllOrderHeaders of OrderHeaderController");
        return orderHeaderService.getOrderHeaderList();
    }

    @GetMapping("/order-headers/{id}")
    public OrderHeader getOrderHeaderById(@PathVariable("id") Long orderHeaderId) {
        LOGGER.info("Inside getOrderHeaderById of OrderHeaderController");
        return orderHeaderService.getOrderHeaderById(orderHeaderId);
    }

    @DeleteMapping("order-headers/{id}")
    public String deleteOrderHeaderById(@PathVariable("id") Long orderHeaderId) {
        LOGGER.info("Inside deleteOrderHeaderById of OrderHeaderController");
        orderHeaderService.deleteOrderHeaderById(orderHeaderId);
        return "Distributor Deleted successfully";
    }

    @PutMapping("/order-headers/{id}")
    public OrderHeader updateOrderHeaderById(@PathVariable("id") Long orderHeaderId, @RequestBody OrderHeader orderHeader) {
        LOGGER.info("Inside updateOrderHeaderById of OrderHeaderController");
        return orderHeaderService.updateOrderHeaderById(orderHeaderId, orderHeader);
    }
}
