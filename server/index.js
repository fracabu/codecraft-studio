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
      subject: `Nuovo contatto da ${nome} ${cognome}`,
      text: `
Nome: ${nome} ${cognome}
Email: ${email}
Telefono: ${telefono || 'Non fornito'}

Messaggio:
${messaggio}

---
Messaggio inviato dal sito CodeCraft Studio
      `.trim(),
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0ea5e9;">Nuovo Contatto - CodeCraft Studio</h2>

          <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Nome:</strong> ${nome} ${cognome}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Telefono:</strong> ${telefono || 'Non fornito'}</p>
          </div>

          <div style="margin: 20px 0;">
            <h3 style="color: #374151;">Messaggio:</h3>
            <p style="white-space: pre-wrap;">${messaggio}</p>
          </div>

          <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;">

          <p style="color: #6b7280; font-size: 12px;">
            Messaggio inviato dal form di contatto su codecraft.it
          </p>
        </div>
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
