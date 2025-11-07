// chat.js - Frontend: opens chat panel, sends messages to backend /api/chat
document.addEventListener('DOMContentLoaded', () => {
  const doghouse = document.getElementById('doghouse');
  const openBtn = document.getElementById('openChatBtn');
  const panel = document.getElementById('chatPanel');
  const closeBtn = document.getElementById('closeChat');
  const form = document.getElementById('chatForm');
  const input = document.getElementById('inputMsg');
  const messages = document.getElementById('messages');
  const bubble = document.getElementById('snoopyBubble');

  // open chat when clicking doghouse or button
  function openChat(){
    panel.classList.remove('hidden');
    input.focus();
    addSystemMessage("Hola! Soy Snoopy 🐶 — ¿En qué te ayudo hoy?");
  }
  doghouse.addEventListener('click', openChat);
  openBtn.addEventListener('click', openChat);
  closeBtn.addEventListener('click', () => panel.classList.add('hidden'));

  // helper: add message element
  function addMessage(text, cls='snoopy'){
    const div = document.createElement('div');
    div.className = 'msg ' + (cls === 'user' ? 'user' : 'snoopy');
    div.innerText = text;
    messages.appendChild(div);
    messages.scrollTop = messages.scrollHeight;
  }

  function addSystemMessage(text){
    addMessage(text, 'snoopy');
  }

  // show typing indicator
  function addTyping(){
    const t = document.createElement('div');
    t.className = 'msg snoopy typing';
    t.id = '__typing';
    t.innerText = 'Snoopy está escribiendo...';
    messages.appendChild(t);
    messages.scrollTop = messages.scrollHeight;
  }
  function removeTyping(){ const t = document.getElementById('__typing'); if(t) t.remove(); }

  // handle submit
  form.addEventListener('submit', async (ev) => {
    ev.preventDefault();
    const text = input.value.trim();
    if(!text) return;
    addMessage(text, 'user');
    input.value = '';
    addTyping();

    try {
      // send to backend
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({message: text})
      });
      if(!res.ok) throw new Error('Error en servidor');
      const data = await res.json();
      removeTyping();
      addMessage(data.reply || 'Lo siento, no entendí eso.');
      // optionally update bubble short hint
      bubble.innerText = data.short || bubble.innerText;
    } catch(err){
      removeTyping();
      addMessage('Ups, hay un problema al conectar con Snoopy. Intenta más tarde.');
      console.error(err);
    }
  });
});
