const halfMinimalSettingsButton = document.getElementById('half-minimal-settings-button');
const halfMinimalDropdown = document.getElementById('half-minimal-dropdown');
const halfMinimalRandomCheckbox = document.getElementById('p-71');

halfMinimalSettingsButton.addEventListener('click', (event) => {
  event.preventDefault();
  halfMinimalDropdown.style.display = halfMinimalDropdown.style.display === 'flex' ? 'none' : 'flex';
});

document.addEventListener('click', (event) => {
  if (!halfMinimalDropdown.contains(event.target) && !halfMinimalSettingsButton.contains(event.target)) {
    halfMinimalDropdown.style.display = 'none';
  }
});

function populateHalfMinimalDropdown() {
  halfMinimalRandomCheckbox.checked = savedata.halfMinimalModeRandom;
}

halfMinimalRandomCheckbox.addEventListener('click', e => {
  savedata.halfMinimalModeRandom = e.target.checked;
  refresh();
});
