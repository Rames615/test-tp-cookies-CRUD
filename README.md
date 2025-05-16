## Étapes pour gérer le consentement des cookies

1. **Vérifiez la présence des boutons dans votre HTML.**

2. **Ajoutez le code JavaScript** pour enregistrer le choix dans un cookie avec une date de validité de 30 jours.

3. **Explications :**
    - Quand la page charge, si le cookie `cookieConsent` n’existe pas, la modal s’affiche.
    - Si l’utilisateur clique sur **Accepter**, le cookie `cookieConsent=accepted` est créé.
    - Si l’utilisateur clique sur **Refuser**, le cookie `cookieConsent=refused` est créé.
    - La modal disparaît après le choix de l’utilisateur.