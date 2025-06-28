import OPENAI_API_KEY from './config.js';

async function getAajKaVachan() {
  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${OPENAI_API_KEY}`
    },
    body: JSON.stringify({
      model: "gpt-4",
      messages: [{
        role: "user",
        content: "Ek madhur bhakti vachan do Krishna ya Radha-Krishna ke madhurya bhav me. Hindi mein sirf ek pankti ho."
      }],
      temperature: 0.9,
      max_tokens: 100
    })
  });

  const data = await response.json();
  const quote = data.choices?.[0]?.message?.content || "❌ वचन नहीं आया...";
  document.getElementById("vachan").innerText = quote;
}

getAajKaVachan();
