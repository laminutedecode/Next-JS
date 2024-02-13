// les layouts nested (ou superposés) font référence à une technique où vous pouvez imbriquer des mises en page (layouts) les unes dans les autres pour structurer votre application de manière modulaire et réutilisable. Cette approche permet de séparer la logique de mise en page en différents composants, ce qui facilite la maintenance et favorise la réutilisation du code.Nous allons ensuite créer un fichier layout.tsx dans le dossier [productsId]

export default function Home(){
  return (
    <div className='w-full h-screen flex items-center justify-center'>
      <h1 className="text-center text-slate-900 text-4xl my-6">PAGE HOME</h1>
    </div>
  )
}

