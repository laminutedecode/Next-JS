// Le fichier error.tsx est un composant spécial dans Next.js utilisé pour la gestion des erreurs sur le côté client. Lorsque Next.js détecte une erreur lors du rendu d'une page, il utilise ce fichier pour afficher une page d'erreur personnalisée au lieu de simplement planter avec un message d'erreur par défaut. aller dans le dossier review dans page puis errors

export default function Home(){
  return (
    <div className='w-full h-screen flex items-center justify-center'>
      <h1 className="text-center text-slate-900 text-4xl my-6">PAGE HOME</h1>
    </div>
  )
}

