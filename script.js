const runButton = document.getElementById('run-button');
const languageSelector = document.getElementById('language-selector');
const codeInput = document.getElementById('code-input');
const outputFrame = document.getElementById('output-frame');

languageSelector.addEventListener('change', () => {
  codeInput.value = '';
});

run
