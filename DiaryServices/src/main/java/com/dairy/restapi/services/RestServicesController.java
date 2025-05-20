package com.dairy.restapi.services;

import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
@SpringBootApplication
public class RestServicesController {
    @CrossOrigin(origins = "http://localhost:4200")
    @RestController
    class TestController{
        @GetMapping("api")
        public String getTest() {
            return "Welcome Home Spring";
        }
    }
}