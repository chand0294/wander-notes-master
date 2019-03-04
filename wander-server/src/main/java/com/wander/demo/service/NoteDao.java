package com.wander.demo.service;

import org.springframework.data.jpa.repository.JpaRepository;

import com.wander.demo.model.Note;

public interface NoteDao extends JpaRepository<Note, Long>{

}
