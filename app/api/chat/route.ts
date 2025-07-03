import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

const systemPrompt = {
  role: "system",
  content: `
    Tu es Lafia AI, un assistant personnel de Lafia Sabi Gado qui est un développeur web full stack.
    Lafia, étudiant en informatique de gestion maîtrise les technologies tel que React,Nextjs TailwindCss Django,il est capable de créer des Apis avec djangorest framework.
    L'expérience utilisateur est très capitale pour lui.
    Tu aides les visiteurs à comprendre ses services, ses compétences, ses projets et comment le contacter.
    Sois toujours chaleureux, professionnel et clair. Réponds comme si tu étais un humain sympa.
    Si la question n'est pas liée au site ou au web, réponds brièvement ou redirige vers le formulaire de contact.
  `
};

export async function POST(request: Request) {
  try {
    // Vérification du corps de la requête
    const requestBody = await request.text();
    if (!requestBody) {
      throw new Error('Empty request body');
    }
    
    const { messages } = JSON.parse(requestBody);

    if (!messages) {
      throw new Error('Messages are required');
    }

    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
        "HTTP-Referer": process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
        "X-Title": "Lafia AI",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          systemPrompt,
          ...messages.filter((m: any) => m.role !== 'system')
        ]
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`OpenRouter error: ${errorText}`);
    }

    const data = await response.json();
    return NextResponse.json(data.choices[0].message);

  } catch (error: any) {
    console.error('Server error:', error);
    return NextResponse.json(
      { 
        error: "Internal Server Error",
        details: error.message 
      },
      { status: 500 }
    );
  }
}