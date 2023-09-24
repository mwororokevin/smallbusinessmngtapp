package com.mwororokevin.smallbusinessmanagement.OrderHeaders;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class OrderHeadersController {
    @Autowired
    private OrderHeaderService orderHeaderService;

    private final Logger LOGGER = LoggerFactory.getLogger(OrderHeadersController.class);

    @PostMapping("/order-headers")
    public OrderHeaders saveNewDistributor(@RequestBody OrderHeaders orderHeader) {
        LOGGER.info("Inside saveNewDistributor of OrderHeaderController");
        return orderHeaderService.saveNewOrderHeader(orderHeader);
    }

    @GetMapping("/order-headers")
    public List<OrderHeaders> getAllOrderHeaders() {
        LOGGER.info("Inside getAllOrderHeaders of OrderHeaderController");
        return orderHeaderService.getOrderHeaderList();
    }

    @GetMapping("/order-headers/{id}")
    public OrderHeaders getOrderHeaderById(@PathVariable("id") Long orderHeaderId) {
        LOGGER.info("Inside getOrderHeaderById of OrderHeaderController");
        return orderHeaderService.getOrderHeaderById(orderHeaderId);
    }

    @DeleteMapping("order-headers/{id}")
    public String deleteOrderHeaderById(@PathVariable("id") Long orderHeaderId) {
        LOGGER.info("Inside deleteOrderHeaderById of OrderHeaderController");
        orderHeaderService.deleteOrderHeaderById(orderHeaderId);
        return "Order Header Deleted successfully";
    }

    @PutMapping("/order-headers/{id}")
    public OrderHeaders updateOrderHeaderById(@PathVariable("id") Long orderHeaderId, @RequestBody OrderHeaders orderHeader) {
        LOGGER.info("Inside updateOrderHeaderById of OrderHeaderController");
        return orderHeaderService.updateOrderHeaderById(orderHeaderId, orderHeader);
    }
}
