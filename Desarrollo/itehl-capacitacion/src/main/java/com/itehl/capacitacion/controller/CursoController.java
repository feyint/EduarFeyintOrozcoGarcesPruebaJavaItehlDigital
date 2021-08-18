/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.itehl.capacitacion.controller;

import com.itehl.capacitacion.model.Curso;
import com.itehl.capacitacion.service.CursoService;
import com.itehl.capacitacion.service.SequenceGeneratorService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;


/**
 *
 * @author eorozco
 */
@RestController
@RequestMapping("curso")
@CrossOrigin(origins = "*")
public class CursoController {
    
    @Autowired
    public CursoService cursoService;

    
    @Autowired
    public SequenceGeneratorService generatorService;
    
    /**
     * Crear un curso
     * @param curso
     * @return Curso creado
     */
    @PostMapping
    public Curso create(@RequestBody Curso curso) {
        curso.setId(generatorService.generateSequence(Curso.SEQUENCE_NAME));
        return cursoService.guardar(curso);
    }
    
    /**
     * Listar todos los cursos
     * @return lista de cursos
     */
    @RequestMapping(value = "/list", method = RequestMethod.GET) 
    public List<Curso> listarCursos() {	
	return cursoService.listar();
    }
    
    /**
     * Listar curso pasandole la modalidad
     * @param modalidad
     * @return lista de curso por modalidad
     */
    @RequestMapping(value = "/list/{modalidad}", method = RequestMethod.GET) 
    public List<Curso> listarCursosModalidad(@PathVariable(name = "modalidad") Integer modalidad) {	
	return cursoService.listarPorModalidad(modalidad);
    }
             
}
