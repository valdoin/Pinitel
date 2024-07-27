function updateBoxes() {
    const input = document.getElementById('nameInput');
    const cursor = document.getElementById('cursor');
    const value = input.value;

    for (let i = 0; i < 10; i++) {
        const box = document.getElementById(`box${i}`);
        box.textContent = value[i] || '';
    }

    if (value.length > 0) {
        const cursorPosition = value.length - 1;
        const cursorBox = document.getElementById(`box${cursorPosition}`);
        cursor.style.left = `${cursorBox.offsetLeft + cursorBox.offsetWidth}px`;
        cursor.style.display = 'inline'; 
    } else {
        cursor.style.display = 'none'; 
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('nameInput');
    input.focus();
    input.addEventListener('input', updateBoxes);
    document.addEventListener('click', () => {
        input.focus();
    });
});