// En Next.js, les "unmatched routes" (routes non associées) font référence aux routes qui ne correspondent à aucun des fichiers ou des chemins définis dans votre application Next.js. Ces routes sont souvent utilisées pour gérer les cas où un utilisateur essaie d'accéder à une page qui n'existe pas ou à une route qui n'a pas été spécifiquement déclarée dans votre application.

// Lorsque Next.js reçoit une demande pour une route qui ne correspond à aucun des fichiers ou des chemins définis dans votre application, il peut générer une réponse 404 (Not Found) ou rediriger l'utilisateur vers une page d'erreur personnalisée.

export default function Home(){
  return (
    <div className='w-full h-screen flex items-center justify-center'>
      <h1 className="text-center text-slate-900 text-4xl my-6">PAGE HOME</h1>
    </div>
  )
}

