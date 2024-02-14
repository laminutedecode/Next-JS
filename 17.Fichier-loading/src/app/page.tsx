// le fichier "loading" est un composant spécial qui peut être utilisé pour personnaliser l'apparence de l'indicateur de chargement lors du chargement d'une page ou d'une route. Lorsque vous effectuez une transition entre les pages ou que vous chargez des données de manière asynchrone, 

export default function Home(){
  return (
    <div className='w-full h-screen flex items-center justify-center'>
      <h1 className="text-center text-slate-900 text-4xl my-6">PAGE HOME</h1>
    </div>
  )
}

