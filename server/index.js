import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import nodemailer from 'nodemailer'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3001

// Middleware
app.use(cors())
app.use(express.json())

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Server is running' })
})

// Send email endpoint
app.post('/api/send-email', async (req, res) => {
  try {
    const { nome, cognome, email, telefono, messaggio } = req.body

    // Validate required fields
    if (!nome || !cognome || !email || !messaggio) {
      return res.status(400).json({
        success: false,
        message: 'Campi obbligatori mancanti'
      })
    }

    // Create nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      },
      tls: {
        // Don't fail on invalid certificates (for development only)
        rejectUnauthorized: false
      }
    })

    // Email content
    const mailOptions = {
      from: `"${process.env.SMTP_FROM_NAME || 'CodeCraft Studio'}" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL || 'info@codecraft.it',
      replyTo: email,
      subject: `✨ Nuovo Contatto da ${nome} ${cognome}`,
      text: `
CODECRAFT STUDIO - Nuovo Contatto

Nome: ${nome} ${cognome}
Email: ${email}
Telefono: ${telefono || 'Non fornito'}

Messaggio:
${messaggio}

---
Messaggio inviato dal form di contatto su https://codecraft-studio.vercel.app
      `.trim(),
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="margin: 0; padding: 0; background-color: #f9fafb; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
          <table role="presentation" style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 40px 20px;">
                <table role="presentation" style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">

                  <!-- Header con Logo -->
                  <tr>
                    <td style="background: linear-gradient(135deg, #0ea5e9 0%, #10b981 100%); padding: 40px 30px; text-align: center;">
                      <div style="background-color: rgba(255, 255, 255, 0.95); width: 80px; height: 80px; margin: 0 auto 20px; border-radius: 16px; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);">
                        <span style="font-size: 40px; font-weight: bold; background: linear-gradient(135deg, #0ea5e9, #10b981); -webkit-background-clip: text; -webkit-text-fill-color: transparent; line-height: 80px;">CC</span>
                      </div>
                      <h1 style="margin: 0; color: #ffffff; font-size: 24px; font-weight: 700; text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);">
                        CodeCraft Studio
                      </h1>
                      <p style="margin: 8px 0 0; color: rgba(255, 255, 255, 0.9); font-size: 14px;">
                        AI Business Automations
                      </p>
                    </td>
                  </tr>

                  <!-- Badge Nuovo Contatto -->
                  <tr>
                    <td style="padding: 30px 30px 20px;">
                      <div style="background: linear-gradient(135deg, #0ea5e9 0%, #10b981 100%); color: white; padding: 12px 20px; border-radius: 8px; text-align: center; font-weight: 600; font-size: 16px;">
                        ✨ Nuovo Messaggio Ricevuto
                      </div>
                    </td>
                  </tr>

                  <!-- Dati Contatto -->
                  <tr>
                    <td style="padding: 0 30px 30px;">
                      <table role="presentation" style="width: 100%; border-collapse: collapse;">
                        <tr>
                          <td style="padding: 15px; background-color: #f0f9ff; border-left: 4px solid #0ea5e9; border-radius: 8px;">
                            <p style="margin: 0 0 8px; color: #64748b; font-size: 12px; text-transform: uppercase; font-weight: 600; letter-spacing: 0.5px;">
                              Nome Completo
                            </p>
                            <p style="margin: 0; color: #1e293b; font-size: 16px; font-weight: 600;">
                              ${nome} ${cognome}
                            </p>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>

                  <tr>
                    <td style="padding: 0 30px 15px;">
                      <table role="presentation" style="width: 100%; border-collapse: collapse;">
                        <tr>
                          <td style="width: 50%; padding-right: 8px;">
                            <div style="padding: 15px; background-color: #f0fdf4; border-left: 4px solid #10b981; border-radius: 8px;">
                              <p style="margin: 0 0 8px; color: #64748b; font-size: 11px; text-transform: uppercase; font-weight: 600; letter-spacing: 0.5px;">
                                Email
                              </p>
                              <p style="margin: 0; font-size: 14px;">
                                <a href="mailto:${email}" style="color: #10b981; text-decoration: none; font-weight: 500;">
                                  ${email}
                                </a>
                              </p>
                            </div>
                          </td>
                          <td style="width: 50%; padding-left: 8px;">
                            <div style="padding: 15px; background-color: #fef3f2; border-left: 4px solid #f59e0b; border-radius: 8px;">
                              <p style="margin: 0 0 8px; color: #64748b; font-size: 11px; text-transform: uppercase; font-weight: 600; letter-spacing: 0.5px;">
                                Telefono
                              </p>
                              <p style="margin: 0; color: #1e293b; font-size: 14px; font-weight: 500;">
                                ${telefono || 'Non fornito'}
                              </p>
                            </div>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>

                  <!-- Messaggio -->
                  <tr>
                    <td style="padding: 0 30px 30px;">
                      <div style="background-color: #f8fafc; border-radius: 8px; padding: 20px; border: 1px solid #e2e8f0;">
                        <p style="margin: 0 0 12px; color: #64748b; font-size: 12px; text-transform: uppercase; font-weight: 600; letter-spacing: 0.5px;">
                          💬 Messaggio
                        </p>
                        <p style="margin: 0; color: #334155; font-size: 15px; line-height: 1.6; white-space: pre-wrap;">
${messaggio}
                        </p>
                      </div>
                    </td>
                  </tr>

                  <!-- Footer -->
                  <tr>
                    <td style="background-color: #f8fafc; padding: 25px 30px; border-top: 1px solid #e2e8f0;">
                      <p style="margin: 0 0 8px; color: #64748b; font-size: 13px; text-align: center;">
                        Messaggio ricevuto dal form di contatto su
                      </p>
                      <p style="margin: 0; text-align: center;">
                        <a href="https://codecraft-studio.vercel.app" style="color: #0ea5e9; text-decoration: none; font-weight: 600; font-size: 14px;">
                          codecraft-studio.vercel.app
                        </a>
                      </p>
                      <p style="margin: 15px 0 0; color: #94a3b8; font-size: 11px; text-align: center;">
                        © ${new Date().getFullYear()} CodeCraft Studio - Powered by AI
                      </p>
                    </td>
                  </tr>

                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `
    }

    // Send email
    const info = await transporter.sendMail(mailOptions)

    console.log('Email sent:', info.messageId)

    res.json({
      success: true,
      message: 'Email inviata con successo',
      messageId: info.messageId
    })

  } catch (error) {
    console.error('Error sending email:', error)

    res.status(500).json({
      success: false,
      message: 'Errore durante l\'invio dell\'email',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    })
  }
})

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`)
  console.log(`📧 Email endpoint: http://localhost:${PORT}/api/send-email`)
})
