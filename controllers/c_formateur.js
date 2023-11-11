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
    return res.json({ message: 'Formateur Created' })
}

exports.updateFormateur = async (req, res) => {
    let pid = parseInt(req.params.id)

    return res.json({ message: `Formateur id:${pid} Updated` })
}

exports.deleteFormateur = (req, res) => {
    let pid = parseInt(req.params.id)

    return res.status(204).json({})
}