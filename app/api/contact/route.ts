// app/api/contact/route.ts
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    // 1. Parser le body avec gestion d'erreur
    let body;
    try {
      body = await req.json();
    } catch (e) {
      return NextResponse.json(
        { error: 'Corps de la requête invalide' },
        { status: 400 }
      );
    }

    const { name, email, subject, message } = body;

    // 2. Validation des champs
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Tous les champs sont requis' },
        { status: 400 }
      );
    }

    // Validation email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Adresse email invalide' },
        { status: 400 }
      );
    }

    // 3. Vérifier les variables d'environnement
    const emailUser = process.env.EMAIL_USER;
    const emailPass = process.env.EMAIL_PASS;

    if (!emailUser || !emailPass) {
      console.error('❌ Variables d\'environnement EMAIL_USER ou EMAIL_PASS manquantes');
      return NextResponse.json(
        { 
          error: 'Configuration email incorrecte. Contactez l\'administrateur.',
          debug: process.env.NODE_ENV === 'development' ? {
            EMAIL_USER: !!emailUser,
            EMAIL_PASS: !!emailPass
          } : undefined
        },
        { status: 500 }
      );
    }

    // 4. Créer le transporteur
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: emailUser,
        pass: emailPass,
      },
    });

    // 5. Vérifier la connexion avant d'envoyer
    try {
      await transporter.verify();
    } catch (verifyError: any) {
      console.error('❌ Erreur de vérification:', verifyError.message);
      return NextResponse.json(
        { 
          error: 'Impossible de se connecter au serveur email',
          details: process.env.NODE_ENV === 'development' ? verifyError.message : undefined
        },
        { status: 500 }
      );
    }

    // 6. Envoyer l'email
    const info = await transporter.sendMail({
      from: emailUser,
      to: 'lafiasabigado97@gmail.com',
      replyTo: email,
      subject: `💼 ${subject} - Message de ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; border-radius: 10px 10px 0 0;">
            <h1 style="color: white; margin: 0;">Nouveau message de contact</h1>
          </div>
          <div style="background: #f9fafb; padding: 30px; border-radius: 0 0 10px 10px;">
            <h2 style="color: #333; margin-top: 0;">Informations de contact</h2>
            <p style="margin: 10px 0;"><strong>Nom:</strong> ${name}</p>
            <p style="margin: 10px 0;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #667eea;">${email}</a></p>
            <p style="margin: 10px 0;"><strong>Sujet:</strong> ${subject}</p>
            
            <h2 style="color: #333; margin-top: 30px;">Message</h2>
            <div style="background: white; padding: 20px; border-radius: 8px; border-left: 4px solid #667eea;">
              <p style="margin: 0; white-space: pre-wrap; line-height: 1.6;">${message}</p>
            </div>
            
            <hr style="margin: 30px 0; border: none; border-top: 1px solid #e5e7eb;">
            <p style="color: #6b7280; font-size: 12px; margin: 0;">
              Ce message a été envoyé depuis votre portfolio le ${new Date().toLocaleString('fr-FR')}
            </p>
          </div>
        </div>
      `,
    });

    console.log('✅ Email envoyé avec succès:', info.messageId);

    return NextResponse.json({ 
      success: true,
      message: 'Email envoyé avec succès',
      messageId: info.messageId 
    });

  } catch (error: any) {
    // Gestion détaillée des erreurs
    console.error('❌ Erreur lors de l\'envoi de l\'email:');
    console.error('Code:', error.code);
    console.error('Message:', error.message);
    console.error('Stack:', error.stack);

    let errorMessage = 'Erreur lors de l\'envoi de l\'email';
    
    // Messages d'erreur spécifiques
    if (error.code === 'EAUTH') {
      errorMessage = 'Erreur d\'authentification. Vérifiez vos identifiants email.';
      console.error('💡 Solution: Utilisez un "App Password" pour Gmail');
    } else if (error.code === 'ESOCKET') {
      errorMessage = 'Erreur de connexion au serveur email';
    } else if (error.code === 'ECONNECTION') {
      errorMessage = 'Impossible de se connecter au serveur email';
    } else if (error.code === 'ETIMEDOUT') {
      errorMessage = 'Le délai de connexion a expiré';
    }

    return NextResponse.json(
      { 
        error: errorMessage,
        details: process.env.NODE_ENV === 'development' ? {
          code: error.code,
          message: error.message
        } : undefined
      },
      { status: 500 }
    );
  }
}

// Pour GET (optionnel - pour tester si l'API répond)
export async function GET() {
  return NextResponse.json(
    { 
      message: 'API Contact fonctionne',
      status: 'OK',
      timestamp: new Date().toISOString()
    },
    { status: 200 }
  );
}