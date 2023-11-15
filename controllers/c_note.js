/*************************/
/*** Import used modules */
const express = require('express');
const { DataTypes } = require('sequelize');
const Module = require('../models/m_module');

/*****************************************/
/*** Unit route for Note resource */

exports.getAllNotes = (req, res) => {
    return res.json({ message: "All note" })
}

exports.getNote = async (req, res) => {
    let pid = parseInt(req.params.id)

    return res.json({ message: `One note id ${pid}` })
}

exports.addNote = async (req, res) => {
    return res.json({ message: 'Note Created'})
}

exports.updateNote = async (req, res) => {
    let pid = parseInt(req.params.id)

    return res.json({ message: `Note id:${pid} Updated`})
}

exports.deleteNote =  (req, res) => {
    let Note_id = parseInt(req.params.id)

    return res.status(204).json({})
}