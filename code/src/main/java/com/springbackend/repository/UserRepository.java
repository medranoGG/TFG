package com.springbackend.repository;

import com.springbackend.model.User;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.support.JpaRepositoryImplementation;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;


@Repository
public interface UserRepository extends JpaRepositoryImplementation<User,Long> {

    Optional<User> findByEmail(String email);
    Optional<User> findByName(String name);

    @Query("SELECT u FROM User u WHERE 'ADMIN' NOT MEMBER OF u.roles")
    List<User> findAllNonAdminUsers();

}
