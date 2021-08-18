/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.itehl.capacitacion.service;

import com.itehl.capacitacion.model.Curso;
import com.itehl.capacitacion.repository.CursoRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author eorozco
 */
@Service
public class CursoServiceImpl implements CursoService{
    
    @Autowired
    public CursoRepository cursoRepository;

    @Override
    public Curso guardar(Curso curso) {
        return cursoRepository.save(curso);
    }

    @Override
    public List<Curso> listar() {
        return cursoRepository.findAll();
    }

    @Override
    public List<Curso> listarPorModalidad(Integer modalidad) {
        return cursoRepository.findByModalidad(modalidad);
    }
    
}
