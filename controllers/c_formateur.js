/*************************/
/*** Import used modules */
const express = require('express');
const { DataTypes } = require('sequelize');
const Formateur = require('../models/m_formateur');

/*****************************************/
/*** Unit route for Formateur resource */

exports.getAllFormateurs = (req, res) => {
    return res.json({ message: "All formateur" })
}

exports.getFormateur = async (req, res) => {
    let pid = parseInt(req.params.id)

    return res.json({ message: `One formateur id ${pid}` })
}

exports.addFormateur = async (req, res) => {
    try {
        console.log('Request body:', req.body);
        // Logique métier pour créer un nouvel élève avec les données de req.body
        const nouveauFormateur = await Formateur.create(req.body);

        return res.status(201).json({ message: 'Formateur Created' });
    } catch (error) {
        return res.status(500).json({ error: 'Error creating Formateur' });
    }
}

exports.updateFormateur = async (req, res) => {
    let pid = parseInt(req.params.id)

    return res.json({ message: `Formateur id:${pid} Updated` })
}

exports.deleteFormateur = (req, res) => {
    let pid = parseInt(req.params.id)

    return res.status(204).json({})
}