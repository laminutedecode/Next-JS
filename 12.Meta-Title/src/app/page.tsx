
// La balise <title> dans Next.js, comme dans toute application web, est utilisée pour spécifier le titre de la page qui est affiché dans la barre de titre du navigateur. 

// Dans Next.js, vous pouvez définir la balise <title> dynamiquement en utilisant un composant spécial appelé Head fourni par Next.js. Ce composant Head permet de modifier les balises <head> du document HTML pour inclure des métadonnées telles que le titre de la page. Voir la layout

export default function Home(){
  return (
    <div className='w-full h-screen flex items-center justify-center'>
      <h1 className="text-center text-slate-900 text-4xl my-6">PAGE HOME</h1>
    </div>
  )
}

