document.getElementById("checkContrast").addEventListener("click", () => {
  console.log("Bouton Vérifier le contraste cliqué"); // Log pour voir si le bouton est cliqué

  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    console.log("Onglet actif détecté, Injection du script..."); // Log pour confirmer la détection de l'onglet

    chrome.scripting.executeScript(
      {
        target: { tabId: tabs[0].id },
        files: ["content.js"],
      },
      () => {
        console.log("Script de contenu injecté dans la page"); // Log pour confirmer l'injection du script
      }
    );
  });
});

// Ecoute les messages du script de contenu
chrome.runtime.onMessage.addListener((message) => {
  console.log("Message reçu du script de contenu:", message); // Log des messages reçus
  if (message.type === "contrastResults") {
    displayResults(message.data);
  }
});

function displayResults(results) {
  console.log("Affichage des résultats:", results); // Log des résultats pour confirmer leur réception

  const resultsContainer = document.getElementById("results");
  resultsContainer.innerHTML = "";

  results.forEach((result) => {
    const div = document.createElement("div");
    div.innerHTML = `<p>${result.element}: Ratio de contraste ${result.contrastRatio}</p>`;
    resultsContainer.appendChild(div);
  });
}
function displayResults(results) {
  const resultsContainer = document.getElementById("results");
  resultsContainer.innerHTML = "";

  results.forEach((result) => {
    const contrastRatio = parseFloat(result.contrastRatio);
    let explanation = "";
    let contrastClass = "";

    if (contrastRatio < 3) {
      explanation = `Le contraste du ${result.element} est très faible (ratio de contraste ${contrastRatio}). Il est non conforme aux normes d'accessibilité WCAG.`;
      contrastClass = "low-contrast";
    } else if (contrastRatio >= 3 && contrastRatio < 4.5) {
      explanation = `Le contraste du ${result.element} est moyen (ratio de contraste ${contrastRatio}). Il pourrait être amélioré pour une meilleure lisibilité.`;
      contrastClass = "medium-contrast";
    } else if (contrastRatio >= 4.5 && contrastRatio < 7) {
      explanation = `Le contraste du ${result.element} est acceptable (ratio de contraste ${contrastRatio}). Il est conforme aux normes WCAG.`;
      contrastClass = "good-contrast";
    } else if (contrastRatio >= 7) {
      explanation = `Le contraste du ${result.element} est excellent (ratio de contraste ${contrastRatio}), conforme aux normes d'accessibilité WCAG.`;
      contrastClass = "good-contrast";
    }

    const div = document.createElement("div");
    div.className = `result-item ${contrastClass}`;
    div.innerHTML = `<p>${explanation}</p>`;
    resultsContainer.appendChild(div);
  });
}
