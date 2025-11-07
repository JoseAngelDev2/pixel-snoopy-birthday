// server.js - simple proxy example
// npm i express node-fetch dotenv
import express from 'express';
import fetch from 'node-fetch';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3000;

// --- CONFIGURE: put your actual Gemini endpoint and model here ---
const GEMINI_API_URL = process.env.GEMINI_API_URL || 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent';
const GEMINI_MODEL = process.env.GEMINI_MODEL || 'gemini-1.5-flash';
const API_KEY = process.env.GEMINI_API_KEY || 'AIzaSyAiuWVZyVpV0M_ACtsOoP-onBZwKG7cM48'; // set in .env

// System prompt for Snoopy persona
const SYSTEM_PROMPT = `You are "Snoopy", a friendly pixel-art assistant for Karen. 
Respond kindly, playfully and helpfully. Keep answers concise and helpful for tasks, homework, reminders, and friendly chat. Avoid political, medical, legal advice.`;

app.post('/api/chat', async (req, res) => {
  try {
    const userMessage = req.body.message || '';
    if(!userMessage) return res.status(400).json({error:'No message'});

    // Prepare request payload according to the Gemini/Gen API you are using.
    // Replace this sample with the correct format for the API you're calling.
    const payload = {
      model: GEMINI_MODEL,
      messages: [
        {role: 'system', content: SYSTEM_PROMPT},
        {role: 'user', content: userMessage}
      ],
      // optional params: temperature, maxTokens, etc.
    };

    const apiRes = await fetch(GEMINI_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`
      },
      body: JSON.stringify(payload)
    });

    if(!apiRes.ok){
      const text = await apiRes.text();
      console.error('Gemini error', apiRes.status, text);
      return res.status(500).json({error:'Error from Gemini', detail: text});
    }

    const apiJson = await apiRes.json();

    // --- ADAPT: extract reply text depending on the response shape of your Gemini endpoint ---
    // Many generative APIs return something like apiJson.choices[0].message.content or similar.
    // Adjust the following lines to the actual response structure.
    let reply = '';
    if(apiJson?.choices && apiJson.choices[0]){
      reply = apiJson.choices[0].message?.content || apiJson.choices[0].text || JSON.stringify(apiJson.choices[0]);
    } else if(apiJson?.output?.[0]?.content){
      // alternative shape
      reply = apiJson.output.map(o=> o.content?.[0]?.text || '').join('\n');
    } else {
      reply = JSON.stringify(apiJson).slice(0,1000);
    }

    // Short small message to show on bubble
    const short = reply.split('\n')[0].slice(0,80);
    res.json({reply, short});
  } catch(err){
    console.error(err);
    res.status(500).json({error:'Server error', detail: err.message});
  }
});

app.listen(PORT, ()=> console.log(`Server running on ${PORT}`));
