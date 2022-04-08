import express from 'express';
import sendMail from '../models/mail.js';
const log = console.log
const app = express();
const router = express.Router();
router.post('/', (req, res) => {
    // res.sendFile(path.join(__dirname + '/contact-us.html'));
    //TODO
    //send email here
    const { name,email,rEmail,subject, text } = req.body;
    console.log('Data: ', req.body);

    sendMail(name, email,rEmail ,subject, text, function(err, data) {
        if (err) {
            res.status(500).json({ message: 'Internal Error' });
        } else {
          log("Sent");
            res.json('true');
        }
    });
    // res.json({ message: 'Message received!!!' })
});
export default router;
