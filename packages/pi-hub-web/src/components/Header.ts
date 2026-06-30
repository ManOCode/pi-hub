export class Header {
  private headerElement: HTMLElement;
  
  constructor() {
    this.headerElement = document.createElement('header');
    this.headerElement.className = 'header';
    this.render();
  }
  
  private render(): void {
    this.headerElement.innerHTML = `
      <div class="header-content">
        <h1 class="header-title">Pi-Hub</h1>
        <div class="header-actions">
          <button class="settings-button" aria-label="Settings">
            &#9881;
          </button>
        </div>
      </div>
    `;
    
    this.setupEventListeners();
  }
  
  private setupEventListeners(): void {
    const settingsButton = this.headerElement.querySelector('.settings-button');
    const headerTitle = this.headerElement.querySelector('.header-title');
    
    // Add click event for header title to go to home
    headerTitle?.addEventListener('click', (e) => {
      e.preventDefault();
      window.location.hash = '';
    });
    
    // Add click event for settings button
    settingsButton?.addEventListener('click', (e) => {
      e.preventDefault();
      window.location.hash = '#settings';
    });
  }
  
  getElement(): HTMLElement {
    return this.headerElement;
  }
}