//, les intercepteurs de route, également connus sous le nom de middleware, vous permettent d'effectuer des actions spécifiques avant que la navigation vers une nouvelle page ne soit effectuée. Cela peut être utile pour différentes tâches telles que l'authentification, la gestion des autorisations, la préparation des données, etc. Prenons le scenario suivant. quand vous cliquer un bouton login un formulire apparait et si on reload le meme formulaire 

// nous avons une page de connexion avec un bouton de connexion et un formulaire de connexion comprenant des champs pour l'e-mail et le mot de passe.

// Lorsqu'un utilisateur visite la page de connexion et saisit ses informations de connexion, comme son adresse e-mail et son mot de passe, puis appuie sur le bouton "Se connecter", l'interception de route peut être utilisée pour :

// Valider les données : Avant de soumettre les informations de connexion, les données peuvent être validées côté client pour s'assurer qu'elles sont correctes et bien formatées. Par exemple, vous pourriez vérifier que l'e-mail est au bon format et que le mot de passe respecte les exigences de sécurité.

// Envoyer les données au serveur : Une fois les données validées, elles peuvent être envoyées au serveur pour vérification. Cela impliquerait généralement une requête HTTP à une API ou à une route spécifique de votre serveur, où les données de connexion peuvent être vérifiées par rapport à celles stockées dans une base de données.

// Vérifier l'authenticité des informations : Sur le serveur, vous pouvez vérifier si les informations de connexion sont correctes. Si les identifiants sont valides, vous pouvez créer une session d'utilisateur authentifiée.

// Redirection vers une autre page : Si les informations de connexion sont valides et que l'utilisateur est authentifié avec succès, vous pouvez alors rediriger l'utilisateur vers une autre page de l'application, telle que son tableau de bord personnel. 

// Gestion des erreurs : En cas d'erreur, par exemple si les identifiants de connexion sont incorrects, vous pouvez afficher un message d'erreur à l'utilisateur pour l'informer du problème et lui permettre de réessayer. créer dossier fold avec fold2

export default function Home(){
  return (
    <div className='w-full h-screen flex items-center justify-center'>
      <h1 className="text-center text-slate-900 text-4xl my-6">PAGE HOME</h1>
    </div>
  )
}

