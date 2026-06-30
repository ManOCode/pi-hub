/**
 * Pi Hub Server - Main server entry point
 * 
 * This package handles requests and responses for the Pi Hub application.
 */

import express, { Request, Response } from 'express';
import { initializePiAgent, callPiAgent } from 'pi-hub-core';

// Initialize the Pi Agent through our core package
const piAgent = initializePiAgent();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

// Basic route
app.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Pi Hub Server is running!', agentStatus: piAgent ? 'initialized' : 'not initialized' });
});

// Health check route
app.get('/health', (req: Request, res: Response) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Example API route that uses the Pi Agent
app.post('/api/pi/agent', async (req: Request, res: Response) => {
  try {
    const { prompt, options } = req.body;
    
    if (!prompt) {
      return res.status(400).json({ success: false, error: 'Prompt is required' });
    }
    
    // Example of calling the Pi Agent through our core package
    const result = await callPiAgent(prompt, options);
    res.json({ success: true, data: result });
  } catch (error) {
    res.status(500).json({ success: false, error: (error as Error).message });
  }
});

app.listen(PORT, () => {
  console.log(`Pi Hub Server is running on port ${PORT}`);
});