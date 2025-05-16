// stocker les items modal
const modal = {
  container: document.getElementById("cookieModal"),
  acceptButton: document.getElementById("acceptCookies"),
  refuseButton: document.getElementById("refuseCookies"),
};

// Vérifier si le cookie existe déjà
const cookieName = "cookieConsent";
const cookieValue = getCookie(cookieName);
if (cookieValue === "accepté" || cookieValue === "refused") {
  modal.container.style.display = "none";

}

// Fonction pour obtenir la valeur d'un cookie par son nom
function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift(); // condition pour n'est pas affichier si les cookies déja exist
}

// créer un cookie
function setCookie(name, value, days) {
  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  const expires = `expires=${date.toUTCString()}`;
  document.cookie = `${name}=${value}; ${expires}; path=/`;
}

// Fonction pour accepter les cookies et le créer pour une durée de 30 jours
function acceptCookies() {
  setCookie(cookieName, "accepté", 30);
  modal.container.style.display = "none";
}
function refuseCookies() {
  setCookie(cookieName, "refused", 30);
  modal.container.style.display = "none";
}

modal.acceptButton.addEventListener("click", acceptCookies);

modal.refuseButton.addEventListener("click", refuseCookies);
