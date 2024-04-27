package com.springbackend.service;

import com.springbackend.repository.UserRepository;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
@NoArgsConstructor
public class UserService {


    @Autowired
    private UserRepository userRepository;

    public void addClient(User u) {
        List<String> roles=new ArrayList<>();
        roles.add("USER");
    }
}
