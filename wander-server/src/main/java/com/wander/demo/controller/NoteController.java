package com.wander.demo.controller;

import java.io.IOException;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.wander.demo.model.Note;
import com.wander.demo.service.NoteDao;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
public class NoteController {

	@Autowired
	NoteDao noteDao;
	

	
	@RequestMapping(value="/notes/getAllNotes")
	public List<Note> getAllNotes() {
		return (List<Note>) noteDao.findAll();
		
	}
	
	@RequestMapping(value="/notes/getNote")
	public List<Note> getNote(long id) {
		return (List<Note>) noteDao.getOne(id);
		
	}
	
	@RequestMapping(value="/notes/addNote")
	public List<Note> addNote(
			@RequestParam(name="title",required=true) String title,
			@RequestParam(name="description",required=true) String description,
			@RequestParam(name="user",required=true) String user
			) {
		Note note =new Note();
		note.setTitle(title);
		note.setDescription(description);
		note.setCreatedBy(user);
		note.setCreatedAt(new Date());
		note.setUpdatedAt(new Date());
		
	noteDao.save(note);
	List<Note> noteList=(List<Note>) noteDao.findAll();	
	return noteList;
	}
	
/*	@RequestMapping()
	public int deleteNote() {
		return	noteDao
	}
	
	*/

	@RequestMapping(value="/notes/updateNote")
	public List<Note> updateNote(
			@RequestParam(name="note",required=true) String noteString,
			ObjectMapper mapper
			) {
		
		Note note=null;
		try {
			note = mapper.readValue(noteString, Note.class);
		} catch (JsonParseException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (JsonMappingException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		/*
		note.setId(Long.parseLong(id) );
		note.setTitle(title);
		note.setDescription(description);
		note.setUpdatedAt(new Date());*/
		
		noteDao.saveAndFlush(note);
		
		List<Note> noteList=(List<Note>) noteDao.findAll();	
		return noteList;
	
	}
	
	@RequestMapping(value="/notes/deleteNote")
	public void deleteNote(@RequestParam(name="note",required=true) String noteString,
			ObjectMapper mapper) {
		

		Note note=null;
		try {
			note = mapper.readValue(noteString, Note.class);
		} catch (JsonParseException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (JsonMappingException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
	
			noteDao.delete(note);
	}
	
}
