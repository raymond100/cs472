const btndecor = document.getElementById('btn-deco');
const textarea = document.getElementById('textarea');
const checkbox = document.querySelector("input[type = 'checkbox']");


btndecor.addEventListener('click', () => {
    if (textarea.value != "") {
        increaseFontEvery500ms();
    }
});

checkbox.addEventListener('change', (e) => {
    console.log("changed");
    if (checkbox.checked) {
        textarea.style.fontWeight = 'bold';
        textarea.style.color = 'green';
        textarea.style.textDecoration = 'underline';
    } else {
        textarea.style.fontWeight = 'normal';
        textarea.style.color = '#000';
        textarea.style.textDecoration = 'none';
    }
});

const btnPigLatin = document.createElement('button');
btnPigLatin.id = 'btn-latin';
btnPigLatin.innerHTML = 'Igpay Atinlay';
document.getElementById('setDecor').appendChild(btnPigLatin);

document.getElementById('btn-latin').addEventListener('click', () => {
    if (textarea.value != "") {
        textarea.value = pigLatinText(textarea.value);
    }
})

const btnMalkovitch = document.createElement('button');
btnMalkovitch.id = 'btn-malkovitch';
btnMalkovitch.innerHTML = 'Malkovitch';
document.getElementById('setDecor').appendChild(btnMalkovitch);

document.getElementById('btn-malkovitch').addEventListener('click', () => {
    if (textarea.value != "") {
        textarea.value = malkovitchText(textarea.value);
    }
})


const increaseFontEvery500ms = () => {
    let currentFont = 0;
    setInterval(() => {
        currentFont = parseInt(window.getComputedStyle(textarea).fontSize);
        textarea.style.fontSize = currentFont + 2 + 'px';
    }, 500);
}

const pigLatinText = (text) => {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
    const words = text.trim().split(' ');
    let newText = '';
    for (let word of words) {
        if (vowels.includes(word.charAt(0).toLowerCase())) {
            newText += word + 'ay ';
        } else {
            newText += word.substr(1) + word.charAt(0) + 'ay ';
        }
    }
    return newText;
}

const malkovitchText = (text) => {
    const words = text.trim().split(' ');
    let newText = '';
    for (let word of words) {
        if (word.length >= 5) {
            newText += 'Malkovich ';
        } else {
            newText += word + ' ';
        }
    }
    return newText;
}