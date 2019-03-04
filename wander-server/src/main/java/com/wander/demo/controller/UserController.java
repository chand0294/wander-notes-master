package com.wander.demo.controller;


import java.io.IOException;
import java.util.Date;
import java.util.LinkedList;
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
import com.wander.demo.model.User;
import com.wander.demo.service.UserDao;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
public class UserController {

	@Autowired
	UserDao userDao;
	
	@RequestMapping(value="/notes/login")
	public List<User> login(
			@RequestParam(name="uname",required=true) String uname,
			@RequestParam(name="pass",required=true) String pass
			) {
		
		List<User> userlist=new LinkedList<User>();
		List<User> users= userDao.findAll();
		if(uname!=null && uname.length()>0  && pass!=null && pass.length()>0) {
			for(User user:users) {
				if(user.getUname().equals(uname) && user.getPass().equals(pass)) {
					userlist.add(user);
				}
			}		
			
		}
	
		
		return userlist;
		
	}
	
	@RequestMapping(value="/notes/addUser")
	public List<User> addUser(
			/*@RequestParam(name="uname",required=true) String uname,
			@RequestParam(name="name",required=true) String name,
			@RequestParam(name="pass",required=true) String pass,
			@RequestParam(name="email",required=false) String email,
			@RequestParam(name="contact",required=false) String contact	*/	
			
			@RequestParam(name="user",required=false) String userString,
			ObjectMapper mapper
			
			) {
		User user=null;
		List<User> noteList=null;
		try {
			user = mapper.readValue(userString, User.class);
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
		String uname=user.getUname();
		String pass=user.getPass();
		String name=user.getFullName();
		if(uname!=null && uname.length()>0 && 
				pass!=null && pass.length()>0 &&
				name!=null && name.length()>0
				){
			user.setActiveIndicator("1");
			userDao.saveAndFlush(user);
			
			noteList=(List<User>) userDao.findAll();
		}
			
			
			
			
		
		
		
		return noteList;
		
		/*User user =new User();
	
		user.setUname(uname);
		user.setFullName(name);
		user.setPass(pass);
		user.setEmail(email);
		user.setContact(contact);
		user.setActiveIndicator("1");*/
		
	

	}
	
	
}
