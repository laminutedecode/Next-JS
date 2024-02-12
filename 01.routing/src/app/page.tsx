// le fichier page.tsx  peut être utilisé pour personnaliser le comportement global de l'application. Ce fichier est utilisé pour encapsuler votre application avec des composants ou des fonctionnalités que vous souhaitez appliquer de manière cohérente sur toutes les pages.



export default function Home(){
  return (
    <div className='w-full h-screen flex items-center justify-center'>
      <h1 className="text-center text-slate-900 text-4xl my-6">PAGE HOME</h1>
    </div>
  )
}