/*** Import used modules */
const express = require('express');
const { DataTypes } = require('sequelize');
const Eleve = require('../models/m_eleve');
/*****************************************/



/*** Unit route for Eleve resource */

exports.getAllEleves = (req, res) => {
    return res.json({ message: "All eleve" })
}

exports.getEleve = async (req, res) => {
    let pid = parseInt(req.params.id)

    return res.json({ message: `One eleve id ${pid}` })
}

exports.addEleve = async (req, res) => {
    try {
        console.log('Request body:', req.body);
        // Logique métier pour créer un nouvel élève avec les données de req.body
        const nouvelEleve = await Eleve.create(req.body);

        return res.status(201).json({ message: 'Eleve Created', eleve: nouvelEleve });
    } catch (error) {
        return res.status(500).json({ error: 'Error creating eleve', details: error.message });
    }
}

exports.updateEleve = async (req, res) => {
    let pid = parseInt(req.params.id)

    return res.json({ message: `Eleve id:${pid} Updated` })
}

exports.deleteEleve = (req, res) => {
    let pid = parseInt(req.params.id)

    return res.status(204).json({})
}