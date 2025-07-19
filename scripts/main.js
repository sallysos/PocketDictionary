let currentSize = parseInt(localStorage.getItem('fontSize')) || 16;
document.documentElement.style.fontSize = currentSize + "px";; 

function applyFontSize(size) {
    document.documentElement.style.fontSize = size + "px";
    localStorage.setItem('fontSize', size);
}
const incBtn = document.getElementById("increase-font");
const decBtn = document.getElementById("decrease-font");

if (incBtn && decBtn) {
incBtn.addEventListener("click", () => {
    currentSize += 2;
    applyFontSize(currentSize);
});

decBtn.addEventListener("click", () => {
    if (currentSize > 10) {
    currentSize -= 2;
    applyFontSize(currentSize);
    }
});
}

const themeSelect = document.getElementById('theme-select');
const savedTheme = localStorage.getItem('theme');

document.body.setAttribute('data-theme', savedTheme);

if (savedTheme) {
    document.body.setAttribute('data-theme', savedTheme);
    themeSelect.value = savedTheme;
}
themeSelect.addEventListener('change', function () {
    const selectedTheme = this.value;
    document.body.setAttribute('data-theme', selectedTheme);
    localStorage.setItem('theme', selectedTheme);
});
