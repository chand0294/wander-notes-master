package controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.wander.demo.model.Note;
import com.wander.demo.service.NoteDao;

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
	
	@RequestMapping()
	public Note addNote(Note note) {
	return	noteDao.save(note);
	}
	
/*	@RequestMapping()
	public int deleteNote() {
		return	noteDao
	}
	
	@RequestMapping()
	public int updateNote() {
		
		noteDao.
		return (List<Note>) noteDao.findAll();
	
	}*/

	
	
	
}
