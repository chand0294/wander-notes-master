package com.wander.demo.service;

import org.springframework.data.jpa.repository.JpaRepository;

import com.wander.demo.model.User;

public interface UserDao extends JpaRepository<User, Long>{

}
