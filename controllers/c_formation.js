/*************************/
/*** Import used modules */
/*** Import used modules */
const express = require('express');
const { DataTypes } = require('sequelize');
const Formateur = require('../models/m_formation');

/*****************************************/
/*** Unit route for Formation resource */

exports.getAllFormations = (req, res) => {
    return res.json({ message: "All formation" })
}

exports.getFormation = async (req, res) => {
    let pid = parseInt(req.params.id)

    return res.json({ message: `One formation id ${pid}` })
}

exports.addFormation = async (req, res) => {
    return res.json({ message: 'Formation Created'})
}

exports.updateFormation = async (req, res) => {
    let pid = parseInt(req.params.id)

    return res.json({ message: `Formation id:${pid} Updated`})
}

exports.deleteFormation =  (req, res) => {
    let pid = parseInt(req.params.id)

    return res.status(204).json({})
}