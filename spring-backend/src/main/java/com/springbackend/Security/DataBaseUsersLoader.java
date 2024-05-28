package com.springbackend.Security;

import com.springbackend.model.User;
import com.springbackend.repository.UserRepository;
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import java.util.Optional;

@Component
public class DataBaseUsersLoader {

    @Autowired
    private UserRepository userRepository;


    @PostConstruct
    private void initDatabase() {
        Optional<User> adminUser = userRepository.findByEmail("admin@admin.es");

        if (adminUser.isEmpty()) {
            User admin = new User("admin", "admin", "admin@admin.es", "666-666-666", "adminpass", "ADMIN");
            userRepository.save(admin);
        }
    }
}
