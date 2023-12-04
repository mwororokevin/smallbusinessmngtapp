package com.mwororokevin.smallbusinessmanagement.OrderDetails;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*", allowedHeaders="*")
public class OrderDetailsController {
    @Autowired
    private OrderDetailsService orderDetailsService;

    private final Logger LOGGER = LoggerFactory.getLogger(OrderDetailsController.class);

    @PostMapping("/order-details")
    public OrderDetails saveNewOrderDetail(@RequestBody OrderDetails orderDetails) {
        LOGGER.info("Inside saveNewOrderDetail of OrderDetailsController");
        return orderDetailsService.saveNewOrderDetail(orderDetails);
    }

    @GetMapping("/order-details")
    public List<OrderDetails> getAllOrderDetails() {
        LOGGER.info("Inside getAllOrderDetails of OrderDetailsController");
        return orderDetailsService.getAllOrderDetails();
    }

    @GetMapping("/order-details/{id}")
    public OrderDetails getOrderHeaderById(@PathVariable("id") Long orderDetailsId) {
        LOGGER.info("Inside getOrderDetailsById of OrderDetailsController");
        return orderDetailsService.getOrderDetailsById(orderDetailsId);
    }

    @DeleteMapping("order-details/{id}")
    public String deleteOrderHeaderById(@PathVariable("id") Long orderDetailsId) {
        LOGGER.info("Inside deleteOrderDetailsById of OrderDetailsController");
        orderDetailsService.deleteOrderDetailsById(orderDetailsId);
        return "Order Header Deleted successfully";
    }

    @PutMapping("/order-details/{id}")
    public OrderDetails updateOrderDetailsById(@PathVariable("id") Long orderDetailsId, @RequestBody OrderDetails orderDetails) {
        LOGGER.info("Inside updateOrderHeaderById of OrderDetailsController");
        return orderDetailsService.updateOrderDetailsById(orderDetailsId, orderDetails);
    }
}
