const EleveUser = require("../models/m_eleve");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


exports.signup = (req, res, next) => {
    bcrypt
        .hash(req.body.password, parseInt(process.env.BCRYPTSALT))
        .then((hash) => {
            const eleveUser = new EleveUser({
                email: req.body.email,
                password: hash,
            })

            eleveUser.save()
                .then(() => res.status(200).json({ message: "élève créé" }))
                .catch((error) => res.status(400).json({ error }))

        })
        .catch((error) => res.status(500).json({ error }))
}

exports.login = (req, res, next) => {
    EleveUser.findOne({ email: req.body.email })
        .then((eleveUser) => {
            if (!eleveUser) {
                return res.status(400).json({ error: "Utilisateur non trouvé " });
            }

            bcrypt.compare(req.body.password, eleveUser.password)
                .then((valid) => {
                    if (!valid) {
                        return res.status(400).json({ error: "Mot de passe incorrect!" })
                    }
                    res.status(200).json({
                        userId: eleveUser.id,
                        token: jwt.sign({ userId: eleveUser.id }, process.env.SECRET_KEY, {
                            expiresIn: "1h",
                        })
                    })

                })
                .catch((error) => res.status(500).json({ error }));

        })
        .catch((error) => {
            res.status(500).json({ error })
        })
}

