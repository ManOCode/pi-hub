export class Settings {
  private settingsElement: HTMLElement;
  
  constructor() {
    this.settingsElement = document.createElement('div');
    this.settingsElement.className = 'settings-container';
    this.render();
  }
  
  private render(): void {
    this.settingsElement.innerHTML = `
      <div class="settings-content">
        <h2>Settings</h2>
        <div class="settings-section">
          <h3>Profiles</h3>
          <div class="setting-item">
            <label for="profile-selector">Active Profile</label>
            <select id="profile-selector" name="profile-selector">
              <option value="default">Default</option>
              <option value="developer">Developer</option>
              <option value="minimal">Minimal</option>
            </select>
          </div>
          <div class="setting-item">
            <label for="new-profile">New Profile Name</label>
            <input type="text" id="new-profile" name="new-profile" placeholder="Enter profile name">
          </div>
          <div class="settings-actions">
            <button id="create-profile">Create Profile</button>
            <button id="delete-profile">Delete Profile</button>
          </div>
        </div>
        
        <div class="settings-section">
          <h3>Appearance</h3>
          <div class="setting-item">
            <label for="theme-toggle">Dark Mode</label>
            <input type="checkbox" id="theme-toggle" name="theme-toggle">
          </div>
        </div>
        
        <div class="settings-section">
          <h3>API Configuration</h3>
          <div class="setting-item">
            <label for="api-key">API Key</label>
            <input type="password" id="api-key" name="api-key" placeholder="Enter your API key">
          </div>
          <div class="setting-item">
            <label for="pi-network-key">Pi Network Key</label>
            <input type="password" id="pi-network-key" name="pi-network-key" placeholder="Enter your Pi Network key">
          </div>
        </div>
        
        <div class="settings-section">
          <h3>Preferences</h3>
          <div class="setting-item">
            <label for="auto-save">Auto Save</label>
            <input type="checkbox" id="auto-save" name="auto-save" checked>
          </div>
          <div class="setting-item">
            <label for="notifications">Enable Notifications</label>
            <input type="checkbox" id="notifications" name="notifications" checked>
          </div>
        </div>
        
        <div class="settings-actions">
          <button id="save-settings">Save Settings</button>
          <button id="reset-settings">Reset to Defaults</button>
        </div>
      </div>
    `;
    
    this.setupEventListeners();
  }
  
  private setupEventListeners(): void {
    const saveButton = this.settingsElement.querySelector('#save-settings');
    const resetButton = this.settingsElement.querySelector('#reset-settings');
    const themeToggle = this.settingsElement.querySelector('#theme-toggle') as HTMLInputElement;
    const createProfileButton = this.settingsElement.querySelector('#create-profile');
    const deleteProfileButton = this.settingsElement.querySelector('#delete-profile');
    
    saveButton?.addEventListener('click', () => {
      // Save settings logic would go here
      alert('Settings saved!');
    });
    
    resetButton?.addEventListener('click', () => {
      // Reset settings logic would go here
      if (confirm('Are you sure you want to reset all settings to defaults?')) {
        // Reset logic
        alert('Settings reset to defaults!');
      }
    });
    
    themeToggle?.addEventListener('change', (e) => {
      const target = e.target as HTMLInputElement;
      if (target.checked) {
        document.body.classList.add('dark-mode');
      } else {
        document.body.classList.remove('dark-mode');
      }
    });
    
    createProfileButton?.addEventListener('click', () => {
      const newProfileInput = this.settingsElement.querySelector('#new-profile') as HTMLInputElement;
      const profileName = newProfileInput.value.trim();
      
      if (profileName) {
        const profileSelector = this.settingsElement.querySelector('#profile-selector') as HTMLSelectElement;
        const option = document.createElement('option');
        option.value = profileName.toLowerCase().replace(/\s+/g, '-');
        option.textContent = profileName;
        profileSelector.appendChild(option);
        profileSelector.value = option.value;
        newProfileInput.value = '';
        alert(`Profile "${profileName}" created!`);
      } else {
        alert('Please enter a profile name.');
      }
    });
    
    deleteProfileButton?.addEventListener('click', () => {
      const profileSelector = this.settingsElement.querySelector('#profile-selector') as HTMLSelectElement;
      const selectedOption = profileSelector.options[profileSelector.selectedIndex];
      
      if (selectedOption.value !== 'default') {
        if (confirm(`Are you sure you want to delete the "${selectedOption.textContent}" profile?`)) {
          profileSelector.removeChild(selectedOption);
          profileSelector.value = 'default';
          alert('Profile deleted!');
        }
      } else {
        alert('Cannot delete the default profile.');
      }
    });
  }
  
  getElement(): HTMLElement {
    return this.settingsElement;
  }
}