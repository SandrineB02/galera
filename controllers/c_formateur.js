const FormateurUser = require("../models/m_formateur");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


exports.signup = (req, res, next) => {
    bcrypt
        .hash(req.body.password, parseInt(process.env.BCRYPTSALT))
        .then((hash) => {
            const formateurUser = new FormateurUser({
                email: req.body.email,
                password: hash,
            })

            formateurUser.save()
                .then(() => res.status(200).json({ message: "formateur créé" }))
                .catch((error) => res.status(400).json({ error }))

        })
        .catch((error) => res.status(500).json({ error }))
}

exports.login = (req, res, next) => {
    FormateurUser.findOne({ email: req.body.email })
        .then((formateurUser) => {
            if (!formateurUser) {
                return res.status(400).json({ error: "Formateur non trouvé " });
            }

            bcrypt.compare(req.body.password, formateurUser.password)
                .then((valid) => {
                    if (!valid) {
                        return res.status(400).json({ error: "Mot de passe incorrect!" })
                    }
                    res.status(200).json({
                        userId: formateurUser.id,
                        token: jwt.sign({ userId: formateurUser.id }, process.env.SECRET_KEY, {
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

