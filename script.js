// 1. Base de données des utilisateurs avec leurs informations

const utilisateurs = [
  { nom: "Alice", login: "12345", motDePasse: "abc123" },

  { nom: "Bob", login: "67890", motDePasse: "xyz789" },

  {
    nom: "Charlie",
    login: "11223",
    motDePasse: "def456",
  },
];

// Accès au profil avec login et mot de passe

function accesProfil() {
  const entreeLogin = document.getElementById("login").value;

  const entreeMotDePasse = document.getElementById("motDePasse").value;

  const accesProfil = document.getElementById("accesProfil");

  const utilisateur = utilisateurs.find(
    (acces) =>
      acces.login === entreeLogin && acces.motDePasse === entreeMotDePasse
  );
  if (!utilisateur) {
    messageResultat.textContent =
      "Erreur:Votre login ou votre mot de passe est incorrect";
    messageResultat.style.color = "black";
    messageResultat.className = "alert alert-danger mt-3";
  }
}

//page de profil personnalisée et déconnexion

let utilisateurC = "Alice","Bob", "Charlie"
console.log(Bienvenue +utilisateurC+, soyez le bienvenue dans votre profil);



