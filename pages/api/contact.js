require('dotenv').config();
import nodemailer from 'nodemailer';

const { SENDER, PASSWORD, TO } = process.env;

export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            console.log('req:', req.body);

            const transporter = nodemailer.createTransport({
                host: "smtp.gmail.com",
                port: 465,
                auth: {
                    user: SENDER,
                    pass: PASSWORD,
                },
                secure: true,
            });

            const mailData = {
                from: SENDER,
                to: TO,
                subject: `${req.body.Motivo}`,  // Asunto debe ser una cadena
                html: `
                    <body>
                        <div class="container">
                            <div class="header">
                                <h2>${req.body.Nombre} se contacto por la web.</h2>
                                <h2>Referido de: ${req.body.Referido}</h2>
                            </div>
                            <div class="content">
                                <p><strong>Nombre:</strong> ${req.body.Nombre}</p>
                                <p><strong>Email:</strong> ${req.body.Email}</p>
                                <p><strong>Teléfono:</strong> ${req.body.Telefono}</p>
                                <p><strong>Motivo:</strong> ${req.body.Motivo}</p>
                                ${req.body.Mensaje?`<p><strong>Mensaje:</strong> ${req.body.Mensaje}</p>`:''}
                                <p><strong>Edad:</strong> ${req.body.Edad}</p>
                                <p><strong>Localidad:</strong> ${req.body.Domicilio}</p>
                                <p><strong>Reprocam:</strong> ${req.body.inscripto}</p>
                                <p><strong>Dispensario:</strong> ${req.body.Lugar}</p>

                            </div>
                            <div class="footer">
                                <p>Este mensaje fue enviado desde el formulario de contacto.</p>
                            </div>
                        </div>
                    </body>
                `
            };

            const info = await transporter.sendMail(mailData);
            console.log('Correo enviado: %s', info.messageId);

            res.status(200).json({ message: 'Correo enviado exitosamente' });
        } catch (error) {
            console.error('Error al enviar el correo:', error);
            res.status(500).json({ error: 'Error al enviar el correo' });
        }
    } else {
        res.status(405).json({ message: 'Método no permitido' });
    }
}
