// Le routing metadata en Next.js fait référence à la manière dont les informations sur le routage sont gérées et utilisées dans une application Next.js, sans avoir à écrire beaucoup de code.

// En termes simples, Next.js utilise un système de routage basé sur les fichiers et dossiers dans la structure de votre projet. Par exemple, si vous avez un fichier nommé pages/about.js, Next.js comprendra automatiquement que cette page doit être accessible via l'URL /about.

// Le "metadata" dans ce contexte signifie les informations supplémentaires sur le routage que Next.js peut fournir sans que vous ayez à les spécifier explicitement. Cela inclut des choses comme le nom des routes, les paramètres de routage et les propriétés de la page.

// Par exemple, si vous avez une page pages/products/[id].js qui affiche un article spécifique en fonction de son ID, Next.js peut fournir automatiquement l'ID de l'article dans les propriétés de la page, sans que vous ayez à extraire manuellement l'ID de l'URL.

// Cela simplifie grandement le développement en vous permettant de vous concentrer sur la logique métier de votre application plutôt que sur les détails du routage. Cela et également intéressant pour le SEO (Voir fichier layout)


export default function Home(){
  return (
    <div className='w-full h-screen flex items-center justify-center'>
      <h1 className="text-center text-slate-900 text-4xl my-6">PAGE HOME</h1>
    </div>
  )
}

