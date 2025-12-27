<?php

// 1. Définir le fichier où les données seront stockées
$file_path = 'partenariats_soumis.txt';

// Vérifier si la requête est bien de type POST (envoyée par le formulaire)
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // 2. Nettoyer et récupérer les données du formulaire
    // Utiliser htmlspecialchars pour prévenir les attaques XSS
    
    $org_name = isset($_POST['org_name']) ? htmlspecialchars(trim($_POST['org_name'])) : 'N/A';
    $contact_name = isset($_POST['contact_name']) ? htmlspecialchars(trim($_POST['contact_name'])) : 'N/A';
    $email = isset($_POST['email']) ? htmlspecialchars(trim($_POST['email'])) : 'N/A';
    $goal = isset($_POST['goal']) ? htmlspecialchars(trim($_POST['goal'])) : 'N/A';
    $message = isset($_POST['message']) ? htmlspecialchars(trim($_POST['message'])) : 'N/A';

    // 3. Formatage des données pour l'enregistrement
    $date_submission = date('Y-m-d H:i:s');
    
    $data_to_save = "\n--- NOUVELLE DEMANDE DE PARTENARIAT ---\n" .
                    "Date de Soumission: " . $date_submission . "\n" .
                    "Organisation: " . $org_name . "\n" .
                    "Contact: " . $contact_name . "\n" .
                    "Email: " . $email . "\n" .
                    "Objectif: " . $goal . "\n" .
                    "Message:\n" . $message . "\n" .
                    "-----------------------------------------\n";

    // 4. Enregistrement des données dans le fichier texte
    // FILE_APPEND permet d'ajouter à la fin du fichier sans écraser l'existant
    if (file_put_contents($file_path, $data_to_save, FILE_APPEND | LOCK_EX) !== false) {
        
        // 5. Redirection en cas de succès
        // Idéalement, on redirige vers une page de confirmation (ex: 'merci.html')
        // Si vous n'avez pas de page merci, vous pouvez utiliser un message HTML simple ici.
        
        header("Location: merci_soutien.html");
        exit;
        
    } else {
        // Gestion de l'erreur d'écriture sur le serveur
        echo "<html><body><h1>Erreur de Soumission</h1><p>Désolé, une erreur est survenue lors de l'enregistrement des données sur le serveur. Veuillez réessayer plus tard.</p><p><a href='soutenir.html'>Retour au formulaire</a></p></body></html>";
    }

} else {
    // Si la page est accédée directement sans formulaire POST
    echo "<html><body><p>Accès non autorisé. Veuillez soumettre le formulaire de partenariat.</p><p><a href='soutenir.html'>Retour au formulaire</a></p></body></html>";
}

?>