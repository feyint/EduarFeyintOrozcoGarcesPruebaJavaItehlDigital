/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.itehl.capacitacion.service;

import com.itehl.capacitacion.model.Curso;
import com.itehl.capacitacion.model.Descuento;
import com.itehl.capacitacion.repository.CursoRepository;
import com.itehl.capacitacion.repository.DescuentoRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author eorozco
 */
@Service
public class DescuentoServiceImpl implements DescuentoService{
    
    @Autowired
    public DescuentoRepository descuentoRepository;

    @Override
    public Descuento guardar(Descuento descuento) {
        return descuentoRepository.save(descuento);
    }

    @Override
    public List<Descuento> listar() {
        return descuentoRepository.findAll();
    }    
}
