const header = document.getElementById("typing-effect");
const parts = [
  { text: "Hello, ", color: "white" },
  { text: "my name ", color: "var(--blue)" },
  { text: "is ", color: "white" },
  { text: "Remy!", color: "bisque" },
];

let i = 0;
let text = parts.map((part) => part.text).join("");

const typingEffect = () => {
  let html = "";
  let typedChars = 0;

  for (const part of parts) {
    let currentText = "";
    for (let j = 0; j < part.text.length && typedChars < i; j++) {
      currentText += part.text[j];
      typedChars++;
    }

    html += `<span style="color: ${part.color}">${currentText}</span>`;
  }

  header.innerHTML = html;

  i++;
  if (i > text.length) {
    i = 0;
    setTimeout(typingEffect, 5000);
  } else {
    setTimeout(typingEffect, 250);
  }
};

typingEffect();
