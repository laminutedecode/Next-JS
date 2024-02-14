// En Next.js, "Link" est un composant utilisé pour la navigation entre différentes pages de votre application sans rechargement complet de la page. C'est une alternative à l'utilisation des balises <a> traditionnelles en html (voir navigation)

export default function Home(){
  return (
    <div className='w-full h-screen flex items-center justify-center'>
      <h1 className="text-center text-slate-900 text-4xl my-6">PAGE HOME</h1>
    </div>
  )
}

