/**
 * Pi Hub Core - Main entry point
 * 
 * This package provides the core functionality for interacting with Pi Network
 * using the pi-coding-agent SDK.
 */

import { createAgentSession } from '@earendil-works/pi-coding-agent';

// Initialize the Pi coding agent
let piAgent: any;
try {
  piAgent = createAgentSession({
    // Configuration will be added here
    // For now, we'll use default settings
  });
} catch (error) {
  console.warn('Pi Agent initialization failed:', (error as Error).message);
  piAgent = null;
}

console.log('Pi Hub Core initialized');

export const initializePiAgent = () => {
  console.log('Initializing Pi Agent...');
  return piAgent;
};

export const callPiAgent = async (prompt: string, options: any = {}) => {
  console.log(`Calling Pi Agent with prompt: ${prompt}`, options);
  
  if (!piAgent) {
    throw new Error('Pi Agent is not initialized');
  }
  
  try {
    // This is where we would use the piAgent to make actual calls
    // For example: await piAgent.prompt(prompt, options);
    return { success: true, data: { message: 'Pi Agent called successfully', prompt } };
  } catch (error) {
    console.error('Error calling Pi Agent:', error);
    throw error;
  }
};