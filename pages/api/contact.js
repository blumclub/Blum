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
                subject: req.body.Motivo || 'No especificado',  // Asunto debe ser una cadena
                html: `
                    <!DOCTYPE html>
                    <html lang="es">
                    <head>
                        <meta charset="UTF-8">
                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
                        <title>Formulario de Contacto</title>
                        <style>
                            /* Agrega aquí tus estilos CSS si es necesario */
                            .container {
                                font-family: Arial, sans-serif;
                                max-width: 600px;
                                margin: 0 auto;
                            }
                            .header, .footer {
                                text-align: center;
                                padding: 10px;
                                background-color: #f4f4f4;
                            }
                            .content {
                                padding: 20px;
                            }
                            p {
                                margin: 5px 0;
                            }
                        </style>
                    </head>
                    <body>
                        <div class="container">
                            <div class="header">
                                <h2>${req.body.Nombre || 'Nombre no proporcionado'} se contactó por la web.</h2>
                                <h2>Referido de: ${req.body.Referido || 'No especificado'}</h2>
                            </div>
                            <div class="content">
                                <p><strong>Nombre:</strong> ${req.body.Nombre || 'No proporcionado'}</p>
                                <p><strong>Email:</strong> ${req.body.Email || 'No proporcionado'}</p>
                                <p><strong>Teléfono:</strong> ${req.body.Telefono || 'No proporcionado'}</p>
                                <p><strong>Motivo:</strong> ${req.body.Motivo || 'No especificado'}</p>
                                ${req.body.Mensaje ? `<p><strong>Mensaje:</strong> ${req.body.Mensaje}</p>` : ''}
                                ${req.body.Edad ? `<p><strong>Edad:</strong> ${req.body.Edad}</p>` : ''}
                                ${req.body.inscripto ? `<p><strong>Reprocam:</strong> ${req.body.inscripto}</p>` : ''}
                                ${req.body.Domicilio ? `<p><strong>Domicilio:</strong> ${req.body.Domicilio}</p>` : ''}
                                ${req.body.Lugar ? `<p><strong>Lugar:</strong> ${req.body.Lugar}</p>` : ''}
                            </div>
                            <div class="footer">
                                <p>Este mensaje fue enviado desde el formulario de contacto.</p>
                            </div>
                        </div>
                    </body>
                    </html>
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
