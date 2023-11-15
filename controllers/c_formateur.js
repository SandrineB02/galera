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
    let formateurId = parseInt(req.params.id)

    return res.json({ message: `One formateur id ${formateurId}` })
}

exports.addFormateur = async (req, res) => {
    try {
        const { nom, prenom, email, password } = req.body;
        const nouveauFormateur = await Formateur.create({
            nom: nom,
            prenom: prenom,
            email: email,
            password: password,
        });

        return res.status(201).json({ message: 'Élève créé avec succès', formateur: nouveauFormateur });
    } catch (error) {

        return res.status(500).json({ error: 'Erreur lors de la création du formateur', details: error.message });
    }
}

exports.updateFormateur = async (req, res) => {
    let formateurId = parseInt(req.params.id)

    return res.json({ message: `Formateur id:${formateurId} Updated` })
}

exports.deleteFormateur = (req, res) => {
    let formateurId = parseInt(req.params.id)

    return res.status(204).json({})
}