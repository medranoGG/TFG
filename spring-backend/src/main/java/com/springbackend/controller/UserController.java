package com.springbackend.controller;

import com.springbackend.model.User;
import com.springbackend.repository.UserRepository;
import com.springbackend.service.UserService;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin("http://localhost:3000")
public class UserController {

    @Autowired
    private UserService userService;


    @GetMapping("/") // OK
    public Map<String, Object> privatePage(HttpServletRequest request) {
        Map<String, Object> response = new HashMap<>();
        response.put("isUser", request.isUserInRole("USER"));
        response.put("isAdmin", request.isUserInRole("ADMIN"));
        return response;
    }

    @GetMapping("/users") // OK
    public List<User> getAllUsers(){
        return userService.getAllUsers();
    }

    @PostMapping("/users") // OK
    public void saveUser(@RequestBody User u){
        userService.saveUser(u);
    }

    @GetMapping("/users/{id}") // OK
    public User getUserById(@PathVariable Long id){
        return userService.getUserById(id);
    }

    @PutMapping("/users/{id}") // OK
    public void updateUser(@PathVariable Long id, @RequestBody User uRequest){
       userService.updateUser(id,uRequest);
    }


    @DeleteMapping("/users/{id}") // OK
    public void deleteUser(@PathVariable Long id){
        userService.deleteUser(id);
    }


}
