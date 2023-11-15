/*** Import used modules */
const express = require('express');
const { DataTypes } = require('sequelize');
const Eleve = require('../models/m_eleve');
/*****************************************/

/*** Unit route for Eleve resource */

exports.getAllEleve = async (req, res) => {

    try {
        const emailFilter = req.query.email;
        const condition = emailFilter ? { where: { email: emailFilter } } : {};
        const AllEleves = await Eleve.findAll(condition);
        //return res.json({ message: "All formateur" })
        return res.json(AllEleves);
    } catch (error) {
        return res.status(500).json({ error: ' erreur de recupération de tous les élèves ' })
    }
}

exports.getEleve = async (req, res) => {
    let eleveId = parseInt(req.params.id)
    console.log(eleveId)


    return res.json({ message: `One eleve id ${eleveId}` })
}


exports.addEleve = async (req, res) => {
    try {
        console.log('Request body:', req.body)
        // Créer le nouvel élève dans la base de données
        let nouvelEleve = await Eleve.create(req.body);
        return res.status(201).json({ message: 'Élève créé avec succès', eleve: nouvelEleve });

    } catch (error) {
        return res.status(500).json({ error: 'Error creating eleve', details: error.message });
    }
};



exports.updateEleve = async (req, res) => {
    let eleveId = parseInt(req.params.id)
    if (!eleveId) {
        return res.json({ message: `Eleve id:${eleveId} Updated` })
    }
    // Suppression de l'Elève
    await Eleve.destroy({ where: { id: eleveId }, force: true })
        .then(() => res.status(204).json({}))
        .catch(err => res.status(500).json({ message: 'Database Error', error: err }))

}




exports.deleteEleve = async (req, res) => {
    let eleveId = parseInt(req.params.id)

    //Vérification si le champ id est présent et cohérent
    if (!eleveId) {
        return res.status(204).json({ message: "Manque Id de l'élève" })
    }
    // Suppression de l'Elève
    await Eleve.destroy({ where: { id: eleveId }, force: true })
        .then(() => res.status(204).json({}))
        .catch(err => res.status(500).json({ message: 'Database Error', error: err }))

}