// Simple client-side rendering application
import './styles.css';

interface AppState {
  count: number;
}

class App {
  private state: AppState = { count: 0 };
  private appElement: HTMLElement | null;

  constructor() {
    this.appElement = document.getElementById('app');
    this.render();
    this.setupEventListeners();
  }

  private setupEventListeners(): void {
    // We'll add event listeners after rendering
  }

  private increment(): void {
    this.state.count++;
    this.render();
  }

  private decrement(): void {
    this.state.count--;
    this.render();
  }

  private render(): void {
    if (!this.appElement) return;

    this.appElement.innerHTML = `
      <div class="app-container">
        <h1>Welcome to Pi-Hub</h1>
        <div class="counter">
          <p>Count: <span id="count">${this.state.count}</span></p>
          <button id="increment">+</button>
          <button id="decrement">-</button>
        </div>
      </div>
    `;

    // Setup event listeners after rendering
    const incrementBtn = document.getElementById('increment');
    const decrementBtn = document.getElementById('decrement');
    
    if (incrementBtn) {
      incrementBtn.addEventListener('click', () => this.increment());
    }
    
    if (decrementBtn) {
      decrementBtn.addEventListener('click', () => this.decrement());
    }
  }
}

// Initialize the app when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new App();
});