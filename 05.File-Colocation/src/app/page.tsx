// Le "file colocation" (ou "colocalisation des fichiers") est un concept utilisé dans Next.js pour organiser les fichiers de votre application de manière logique et intuitive. L'idée est de regrouper les fichiers associés à une même fonctionnalité ou à une même page dans le même répertoire, plutôt que de les disperser dans toute la structure de répertoires de votre projet.

// Next.js prend en charge cette approche en permettant de créer des pages, des composants, des styles et d'autres fichiers associés dans le même répertoire. Cela aide à maintenir une structure de projet claire et facile à comprendre.

// app/
// |-- index.js
// |-- about.js
// |-- products/
// |   |-- index.js
// |   |-- [productId].js
// components/
// |-- Header.js
// |-- Footer.js
// |-- ProductCard.js
// |-- ProductList.js
// styles/
// |-- global.css
// |-- components/
// |   |-- Header.module.css
// |   |-- Footer.module.css
// |   |-- ProductCard.module.css
// |   |-- ProductList.module.css


// Les modules CSS sont une méthode de gestion des styles CSS dans les applications web modernes. Contrairement aux fichiers CSS traditionnels, les modules CSS permettent de scoper les styles localement à un composant ou à une page spécifique, ce qui évite les conflits de noms de classe et facilite la maintenance du code.Exemple dansle composant navigation

export default function Home(){
  return (
    <div className='w-full h-screen flex items-center justify-center'>
      <h1 className="text-center text-slate-900 text-4xl my-6">PAGE HOME</h1>
    </div>
  )
}