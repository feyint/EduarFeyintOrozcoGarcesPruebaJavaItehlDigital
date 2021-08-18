/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.itehl.capacitacion.repository;

import com.itehl.capacitacion.model.Curso;
import java.util.List;
import org.springframework.data.mongodb.repository.MongoRepository;

/**
 *
 * @author eorozco
 */
public interface CursoRepository extends MongoRepository<Curso, Integer> {
    List<Curso> findByModalidad(Integer modalidad);
}
