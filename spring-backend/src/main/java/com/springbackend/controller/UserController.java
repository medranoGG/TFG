package com.springbackend.controller;

import com.springbackend.model.User;
import com.springbackend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin("http://localhost:3000")
public class UserController {

    @Autowired
    private UserRepository clienteRepository;

    @GetMapping("/users")
    public List<User> getAllUsers(){
        return clienteRepository.findAll();
    }

    @PostMapping("/users")
    public User saveUser(@RequestBody User cliente){
        return clienteRepository.save(cliente);
    }

    @GetMapping("/users/{id}")
    public ResponseEntity<User> getUserById(@PathVariable Long id){
        User cliente = clienteRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("El cliente con ese ID no existe: " + id));

        return  ResponseEntity.ok(cliente);
    }

    @PutMapping("/users/{id}")
    public ResponseEntity<User> updateUser(@PathVariable Long id, @RequestBody User clienteRequest){
        User cliente = clienteRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("El cliente con ese ID no existe: " + id));

        cliente.setName(clienteRequest.getName());
        cliente.setSurname(clienteRequest.getSurname());
        cliente.setEmail(clienteRequest.getEmail());

        User clienteActualizado = clienteRepository.save(cliente);
        return  ResponseEntity.ok(clienteActualizado);
    }

    @DeleteMapping("/users/{id}")
    public ResponseEntity<Map<String,Boolean>> deleteUser(@PathVariable Long id){
        User cliente = clienteRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("El cliente con ese ID no existe: " + id));

        clienteRepository.delete((cliente));
        Map<String,Boolean> response = new HashMap<>();
        response.put("deleted",Boolean.TRUE);
        return ResponseEntity.ok(response);
    }

}
