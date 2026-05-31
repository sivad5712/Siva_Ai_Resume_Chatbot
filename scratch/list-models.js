const fs = require("fs");
const path = require("path");

async function run() {
  let apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    const envPath = path.join(__dirname, "../.env.local");
    if (fs.existsSync(envPath)) {
      const content = fs.readFileSync(envPath, "utf8");
      const match = content.match(/GEMINI_API_KEY\s*=\s*(.+)/);
      if (match) {
        apiKey = match[1].trim();
      }
    }
  }
  
  try {
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`);
    const data = await response.json();
    if (data.models) {
      console.log("Gemini models found:");
      data.models.forEach(m => {
        if (m.name.includes("gemini")) {
          console.log(`- ${m.name}`);
        }
      });
    } else {
      console.log("No models returned:", data);
    }
  } catch (error) {
    console.error("Error:", error);
  }
}

run();
