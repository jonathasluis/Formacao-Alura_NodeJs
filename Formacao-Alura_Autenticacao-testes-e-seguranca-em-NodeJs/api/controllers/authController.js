const AuthService = require('../services/authService');

const authService = new AuthService();

class AuthController {

    static async login(req, res) {

        try {
            const { email, senha } = req.body;
            const login = await authService.login({ email, senha });
            res.status(200).send(login);
        } catch (error) {
            res.status(401).send({ message: error.message });
        }
    }
}

module.exports = AuthController;