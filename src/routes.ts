import { Router } from 'express';
class Routes {
    public route = Router();

    constructor() {

        this.route.get('/teste', (req, res) => {
            res.json({ ok: true });
        });
    }
}

export default new Routes().route