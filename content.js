function getContrastRatio(fg, bg) {
  function luminance(r, g, b) {
    let a = [r, g, b].map((v) => {
      v /= 255;
      return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
    });
    return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
  }

  const fgLuminance = luminance(fg.r, fg.g, fg.b) + 0.05;
  const bgLuminance = luminance(bg.r, bg.g, bg.b) + 0.05;
  return fgLuminance > bgLuminance
    ? fgLuminance / bgLuminance
    : bgLuminance / fgLuminance;
}

function parseColor(color) {
  const canvas = document.createElement("canvas");
  canvas.width = 1;
  canvas.height = 1;
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = color;
  ctx.fillRect(0, 0, 1, 1);
  return ctx.getImageData(0, 0, 1, 1).data;
}

function getContrastData() {
  console.log("getContrastData appelé, extraction des données de contraste"); // Log pour suivre l'exécution

  const elements = document.querySelectorAll("*");
  const contrastResults = [];

  elements.forEach((el) => {
    const style = window.getComputedStyle(el);
    const fgColor = parseColor(style.color);
    const bgColor = parseColor(style.backgroundColor);
    const contrastRatio = getContrastRatio(
      { r: fgColor[0], g: fgColor[1], b: fgColor[2] },
      { r: bgColor[0], g: bgColor[1], b: bgColor[2] }
    );
    contrastResults.push({
      element: el.tagName,
      contrastRatio: contrastRatio.toFixed(2),
    });
  });

  console.log("Résultats du contraste générés:", contrastResults); // Log des résultats

  chrome.runtime.sendMessage(
    {
      type: "contrastResults",
      data: contrastResults,
    },
    () => {
      console.log("Résultats envoyés à la popup"); // Log pour confirmer l'envoi du message
    }
  );
}

// Appel la fonction pour collecter les données de contraste
getContrastData();
