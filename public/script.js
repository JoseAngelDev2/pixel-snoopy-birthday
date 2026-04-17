const chatForm = document.querySelector("#chatForm");
const chatBox = document.querySelector("#messages");
const userInput = document.querySelector("#inputMsg");
const openChatBtn = document.querySelector("#openChatBtn");
const chatPanel = document.querySelector("#chatPanel");
const closeChatBtn = document.querySelector("#closeChat");


// --- Mostrar y ocultar el panel del chat ---
openChatBtn.addEventListener("click", () => {
  chatPanel.classList.remove("hidden");
  userInput.focus();
});

closeChatBtn.addEventListener("click", () => {
  chatPanel.classList.add("hidden");
});

// --- Mensaje inicial ---
window.addEventListener("load", () => {
  const welcome = document.createElement("div");
  welcome.className = "bot-message";
  welcome.innerHTML = "💤 Snoopy está despertando...<br>Hola Karen 🐾, ¿en qué puedo ayudarte hoy?";
  chatBox.appendChild(welcome);
  chatBox.scrollTop = chatBox.scrollHeight;
});

// --- Envío de mensaje ---
chatForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const message = userInput.value.trim();
  if (!message) return;

  // Mensaje del usuario
  appendMessage("user", message);
  userInput.value = "";

  // Indicador de que Snoopy está pensando
  const thinking = appendMessage("bot", "💭 Snoopy está pensando...");

  try {
    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message }),
    });

    const data = await res.json();

    // Si la API no responde o hay error
    chatBox.removeChild(thinking);
    if (!data.reply) {
      appendMessage("bot", "🐾 Ups... no recibí respuesta de Gemini.");
      return;
    }
    const text =  data.candidates[0].content.parts[0].text;

    // Mostrar respuesta de Snoopy
    appendMessage("bot", text);
  } catch (err) {
    chatBox.removeChild(thinking);
    appendMessage("bot", "🐾 Ups... hubo un error al hablar con Snoopy.");
    console.error(err);
  }
});

// --- Función para mostrar mensajes ---
function appendMessage(sender, data) {
  const div = document.createElement("div");
  div.className = sender === "user" ? "user-message" : "bot-message";

  // Extraer el texto si viene desde Gemini
  const messageText = sender === "bot"
    ? data.candidates[0].content.parts[0].text
    : data; // si el usuario escribe texto normal

  div.innerHTML = messageText;
  chatBox.appendChild(div);
  chatBox.scrollTop = chatBox.scrollHeight;
  return div;
}

