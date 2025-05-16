// Bouton switch dark mode
document.addEventListener("DOMContentLoaded", function () {
  const darkSwitch = document.getElementById("darkModeSwitch");

  // Fonctions (setCookies) Crée un cookie avec un nom, une valeur et une durée d’expiration en jours.
  function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = `expires=${date.toUTCString()}`;
    document.cookie = `${name}=${value}; ${expires}; path=/`;
  }

  // fonction (getCookie) pour Récupère la valeur d’un cookie à partir de son nom
  function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(";").shift();
    return null;
  }

  // addEventListener pour ajoute un gestionnaire d’événement pour détecter le clic sur le bouton.

  if (darkSwitch) {
    darkSwitch.addEventListener("click", function () {
      const Dark = document.body.classList.toggle("dark-mode");
      setCookie("dark", Dark ? "on" : "off", 30);
    });
  }

  // Ajoute ou retire la classe CSS `dark-mode` sur le `<body>` pour activer/désactiver le mode sombre
  const darkModeCookie = getCookie("dark");
  if (darkModeCookie === "on") {
    document.body.classList.add("dark-mode");
  }
});
