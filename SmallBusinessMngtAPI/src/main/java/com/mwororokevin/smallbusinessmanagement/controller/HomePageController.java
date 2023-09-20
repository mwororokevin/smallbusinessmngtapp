package com.mwororokevin.smallbusinessmanagement.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HomePageController {
//    @GetMapping("/")
    @RequestMapping(value = "/", method = RequestMethod.GET)
    public String sayHello() {
        return "Hello Spring Boot User";
    }
}
