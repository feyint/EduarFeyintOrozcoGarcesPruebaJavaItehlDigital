/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.itehl.capacitacion.service;

import com.itehl.capacitacion.model.Descuento;
import java.util.List;

/**
 *
 * @author eorozco
 */
public interface DescuentoService {

    public Descuento guardar(Descuento descuento);
    
    public List<Descuento> listar();
        
}
