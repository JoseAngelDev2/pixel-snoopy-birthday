import express from "express";
import fetch from "node-fetch";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();
const app = express();
app.use(express.json());

// --- Configuración base ---
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Carpeta pública (donde está tu chatbot.html)
app.use(express.static(path.join(__dirname, "public")));

// --- Variables de entorno ---
const PORT = process.env.PORT || 3000;
const API_KEY = process.env.GEMINI_API_KEY;
const GEMINI_API_URL =
  process.env.GEMINI_API_URL ||
  "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:generateContent";

// --- Mensaje del sistema ---
const SYSTEM_PROMPT = `
Eres Snoopy, un asistente pícaro, amable y juguetón.
Hablas con cariño a Karen 🐾, le ayudas con sus tareas y respondes en español con buen humor.
`;

// --- Ruta principal (sirve chatbot.html) ---
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "chatbot.html"));
});

// --- Ruta de chat ---
app.post("/api/chat", async (req, res) => {
  try {
    const userMessage = req.body.message?.trim();
    if (!userMessage) {
      return res.status(400).json({ error: "No message" });
    }

    const payload = {
      contents: [
        {
          role: "user",
          parts: [{ text: `${SYSTEM_PROMPT}\n\n${userMessage}` }],
        },
      ],
    };

    console.log("📩 Enviando a Gemini:", JSON.stringify(payload, null, 2));

    const response = await fetch(`${GEMINI_API_URL}?key=${API_KEY}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const data = await response.json();

    console.log("📨 Respuesta de Gemini:", JSON.stringify(data, null, 2));

    if (!response.ok || data.error) {
      console.error("❌ Error en Gemini:", data);
      return res.status(500).json({ error: "Gemini API error", detail: data });
    }

    const reply =
      data?.candidates?.[0]?.content?.parts?.[0]?.text?.trim() ||
      "Ups... Snoopy no entendió 🐾";

    res.json({ reply });
  } catch (err) {
    console.error("❌ Server error:", err);
    res.status(500).json({ error: "Server error", detail: err.message });
  }
});

// --- Iniciar servidor ---
app.listen(PORT, () =>
  console.log(`🐾 Snoopy Server corriendo en http://localhost:${PORT}`)
);
