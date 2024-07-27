import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 4000;
app.use(cors());
const { GoogleGenerativeAI } = require("@google/generative-ai");

// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});

app.get("/", (req: Request, res: Response) => {
    async function run() {
        const link = req.query.link;
        const title = req.query.title;
        const channel = req.query.channel;

        // console.log(link, channel, title)
        const prompt =  `
        
        Provide a detailed summary of the video: ${link}. 
        
        Title: ${title}

        channel: ${channel}


        Include a comprehensive overview of the main points, key concepts, and supporting details. 
        Explain complex ideas in a clear and concise manner. 
        Use headings and bullet points to organize the information effectively. 
        If applicable, analyze the video's strengths, weaknesses, and potential areas for improvement.


        try without any extension`
      
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();
        res.send(text);
        console.log(text);
      }
      
      run();
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});