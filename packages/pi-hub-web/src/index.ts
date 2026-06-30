// Simple client-side rendering application
import './styles.css';
import { Header } from './components/Header';
import { Settings } from './components/Settings';

class App {
  private appElement: HTMLElement | null;
  private header: Header;
  private settings: Settings;

  constructor() {
    this.appElement = document.getElementById('app');
    this.header = new Header();
    this.settings = new Settings();
    this.render();
    this.setupRouting();
  }

  private render(): void {
    if (!this.appElement) return;

    this.appElement.innerHTML = '';
    this.appElement.appendChild(this.header.getElement());
    
    // Create main content container
    const mainContent = document.createElement('main');
    mainContent.className = 'main-content';
    mainContent.id = 'mainContent';
    
    // Default home content
    mainContent.innerHTML = `
      <div class="content">
        <h1>Pi-Hub</h1>
        <p>Your gateway to Pi Network tools and resources.</p>
      </div>
    `;
    
    this.appElement.appendChild(mainContent);
  }
  
  private setupRouting(): void {
    // Handle hash changes for routing
    window.addEventListener('hashchange', () => {
      this.handleRoute();
    });
    
    // Handle initial route
    this.handleRoute();
  }
  
  private handleRoute(): void {
    const hash = window.location.hash;
    const mainContent = document.getElementById('mainContent');
    
    if (!mainContent) return;
    
    if (hash === '#settings') {
      // Show settings page
      mainContent.innerHTML = '';
      mainContent.appendChild(this.settings.getElement());
    } else {
      // Show home page (default route)
      mainContent.innerHTML = `
        <div class="content">
          <h1>Pi-Hub</h1>
          <p>Your gateway to Pi Network tools and resources.</p>
        </div>
      `;
    }
  }
}

// Initialize the app when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new App();
});