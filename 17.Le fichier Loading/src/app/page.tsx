// les templates sont souvent utilisés pour créer une mise en page cohérente et réutilisable pour différentes pages de votre application. Ils sont similaires aux layouts dans d'autres frameworks ou bibliothèques comme React ou Vue.js. Les templates permettent de définir une structure de base pour vos pages, ce qui facilite la gestion de l'aspect visuel et de la disposition globale de votre application. aller dans le layout de auth et montrer que le state ne change pas 

export default function Home(){
  return (
    <div className='w-full h-screen flex items-center justify-center'>
      <h1 className="text-center text-slate-900 text-4xl my-6">PAGE HOME</h1>
    </div>
  )
}

