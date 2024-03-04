

function afficherResultat(score, nbMotsProposes) {
  // on affiche le score de l'utilisateur
  console.log("Votre score est de " + score + " sur " + nbMotsProposes);
}

function choisirPhrasesOuMots() {
    // Tant que l'utilisateur n'a pas choisis "mots" ou "phrases", on lui redemade
  let choix = prompt(
    'voulez-vous jouer avec les mots (entrez "mots") ou les phrases (entrez "phrases") ?'
  );
  while (choix !== "mots" && choix !== "phrases") {
    choix = prompt('Vous devez choisir entre: "mots" ou "phrases" ');
  }
  return choix
}

function lancerBoucleDeJeu(ListePropositions) {
    let score = 0
    for (let i = 0; i < ListePropositions.length; i++) {
        motUtilisateur = prompt('Entrez le mot : ' + ListePropositions[i]);
        if (motUtilisateur === ListePropositions[i]) {
          score++
        }
      }
      return score
}

function lancerJeu() {
    let choix = choisirPhrasesOuMots()
    let score = 0
    let nbMotsProposes = 0

    if(choix === 'mots') {
        score = lancerBoucleDeJeu(listeMots)
        nbMotsProposes = listeMots.length
    }else {
        score = lancerBoucleDeJeu(listePhrases)
        nbMotsProposes = listePhrases.length
    }
    afficherResultat(score, nbMotsProposes)
}

