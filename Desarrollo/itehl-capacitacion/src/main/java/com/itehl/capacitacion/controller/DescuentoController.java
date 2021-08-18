/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.itehl.capacitacion.controller;

import com.itehl.capacitacion.model.Curso;
import com.itehl.capacitacion.model.Descuento;
import com.itehl.capacitacion.service.CursoService;
import com.itehl.capacitacion.service.DescuentoService;
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
@RequestMapping("descuento")
@CrossOrigin(origins = "*")
public class DescuentoController {
    
    
    @Autowired
    public DescuentoService descuentoService;
    
    @Autowired
    public SequenceGeneratorService generatorService;
    
    /**
     * Crear un descuento
     * @param descuento
     * @return Descuento creado
     */
    @PostMapping
    public Descuento create(@RequestBody Descuento descuento) {
        descuento.setId(generatorService.generateSequence(Descuento.SEQUENCE_NAME));
        return descuentoService.guardar(descuento);
    }
    
    /**
     * Listar todos los descuentos
     * @return lista de descuentos
     */
    @RequestMapping(value = "/list", method = RequestMethod.GET) 
    public List<Descuento> listarDescuentos() {	
	return descuentoService.listar();
    }
    
}
