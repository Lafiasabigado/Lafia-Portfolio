'use client';
import { useState, useRef, useEffect } from 'react';

type Message = {
  role: 'system' | 'user' | 'assistant';
  content: string;
};

export default function ChatBox({ onClose }: { onClose: () => void }) {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'system', content: 'Tu es Lafia AI, un assistant utile.' },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim() || loading) return;

    const userMessage: Message = { role: 'user', content: input };
    const updatedMessages = [...messages, userMessage];
    
    setMessages(updatedMessages);
    setInput('');
    setLoading(true);
    setError(null);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          messages: updatedMessages.filter(m => m.role !== 'system') 
        }),
      });

      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        throw new Error(errorData.error?.message || 'Erreur lors de la requête');
      }

      const data = await res.json();
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: data.message || data.content 
      }]);
    } catch (err) {
      console.error('Erreur:', err);
      setError(err instanceof Error ? err.message : 'Une erreur est survenue');
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: 'Désolé, je ne peux pas répondre pour le moment. Veuillez réessayer plus tard.' 
      }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 w-80 max-h-[80vh] bg-white dark:bg-gray-900 dark:text-white shadow-lg p-4 rounded-xl border border-gray-300 dark:border-gray-700 z-50 flex flex-col">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-lg font-semibold">Lafia AI</h3>
        <button 
          onClick={onClose} 
          className="text-sm text-red-500 hover:text-red-700 focus:outline-none"
          aria-label="Fermer le chat"
        >
          Fermer
        </button>
      </div>
      
      <div className="flex-1 overflow-y-auto mb-2 space-y-2">
        {messages.filter(m => m.role !== 'system').map((msg, idx) => (
          <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <span className={`
              max-w-[80%] px-3 py-2 rounded-lg break-words
              ${msg.role === 'user' 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-200 dark:bg-gray-700'}
            `}>
              {msg.content}
            </span>
          </div>
        ))}
        {loading && (
          <div className="flex justify-start">
            <span className="bg-gray-200 dark:bg-gray-700 px-3 py-2 rounded-lg italic">
              Lafia AI écrit...
            </span>
          </div>
        )}
        {error && (
          <div className="text-xs text-red-500 dark:text-red-400 mt-1">
            {error}
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <div className="flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && !e.shiftKey && sendMessage()}
          placeholder="Écris un message..."
          className="flex-1 border rounded px-2 py-1 text-sm dark:bg-gray-800 dark:border-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500"
          disabled={loading}
        />
        <button
          onClick={sendMessage}
          disabled={loading || !input.trim()}
          className="bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700 focus:outline-none focus:ring-1 focus:ring-blue-500 disabled:opacity-50"
        >
          Envoyer
        </button>
      </div>
    </div>
  );
}