/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.itehl.capacitacion.service;

import com.itehl.capacitacion.model.Curso;
import java.util.List;

/**
 *
 * @author eorozco
 */
public interface CursoService {

    public Curso guardar(Curso curso);
    
    public List<Curso> listar();
    
    public List<Curso> listarPorModalidad(Integer modalidad);
}
