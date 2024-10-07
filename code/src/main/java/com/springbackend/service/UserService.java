package com.springbackend.service;

import com.springbackend.repository.UserRepository;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import com.springbackend.model.User;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
@NoArgsConstructor
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public List<User> getAllUsers() {
        return this.userRepository.findAllNonAdminUsers();
    }

    public void saveUser(User u) {
        List<String> roles=new ArrayList<>();
        roles.add("USER");
        u.setRoles(roles);
        this.userRepository.save(u);
    }

    public User getUserById(Long id) {
        return this.userRepository.findById(id).orElse(null);
    }

    public void updateUser(long id,User uRequest) {
        User u = this.userRepository.findById(id).orElse(null);
        if(u != null){
            userRepository.delete(u);
        }
        List<String> roles=new ArrayList<>();
        roles.add("USER");
        uRequest.setRoles(roles);
        userRepository.save(uRequest);
    }

    public void deleteUser(long id) {
        User u = this.userRepository.findById(id).orElse(null);
        if(u != null){
            userRepository.delete(u);
        }
    }

    // NOT IN USE:

    public User getUserByMail(String email) {
        return this.userRepository.findByEmail(email).orElse(null);
    }

    public boolean containsUser(User User){
        for (User c:this.userRepository.findAll()){
            if (User.getEmail().equals(c.getEmail())){
                return true;
            }
        }
        return false;
    }

    public boolean esAdmin(User c){
        if (c.getRoles().contains("ADMIN")){
            return true;
        }
        else{
            return false;
        }
    }

}
