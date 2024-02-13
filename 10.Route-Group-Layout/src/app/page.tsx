// Les route group layouts sont une technique utilisée dans les applications web pour organiser et gérer la mise en page des différentes sections ou groupes de routes. Plutôt que de définir la mise en page pour chaque route individuellement, vous regroupez les routes qui partagent une même mise en page sous un même groupe. Ensuite, vous appliquez une mise en page spécifique à ce groupe de routes.

// L'utilité principale des route group layouts est de simplifier la gestion de la mise en page dans les applications web, en particulier celles qui ont plusieurs pages ou sections avec une structure de mise en page similaire. 

export default function Home(){
  return (
    <div className='w-full h-screen flex items-center justify-center'>
      <h1 className="text-center text-slate-900 text-4xl my-6">PAGE HOME</h1>
    </div>
  )
}

