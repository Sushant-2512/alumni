import nodemailer from 'nodemailer';
import mailGun from 'nodemailer-mailgun-transport';
import dotenv from "dotenv";
dotenv.config();

const auth = {
    auth: {
        api_key: process.env.API_KEY,
        domain: process.env.DOMAIN
    }
};

const transporter = nodemailer.createTransport(mailGun(auth));

const sendMail = (name, email, rEmail,subject, text, cb) => {
    const mailOptions = {
        sender: name,
        from: email,
        to: rEmail,
        subject: subject,
        text: text
    };
    transporter.sendMail(mailOptions, function(err, data) {
        if (err) {
            cb(err, null);
        } else {
            cb(null, data);
        }
    });
}

// Exporting the sendmail
export default sendMail;
