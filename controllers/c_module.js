/*************************/
/*** Import used modules */
const express = require('express');
const { DataTypes } = require('sequelize');
const Module = require('../models/m_module');

/*****************************************/
/*** Unit route for Module resource */

exports.getAllModules = (req, res) => {
    return res.json({ message: "All module" })
}

exports.getModule = async (req, res) => {
    let pid = parseInt(req.params.id)

    return res.json({ message: `One module id ${pid}` })
}

exports.addModule = async (req, res) => {
    return res.json({ message: 'Module Created'})
}

exports.updateModule = async (req, res) => {
    let pid = parseInt(req.params.id)

    return res.json({ message: `Module id:${pid} Updated`})
}

exports.deleteModule =  (req, res) => {
    let pid = parseInt(req.params.id)

    return res.status(204).json({})
}