// les templates sont souvent utilisés pour créer une mise en page cohérente et réutilisable pour différentes pages de votre application. Ils sont similaires aux layouts mais avec des nuances spécifiques. 

// Les templates dans Next.js sont des composants React qui définissent la structure générale d'une page.
// Ils peuvent inclure des éléments tels que les en-têtes, les pieds de page, les barres de navigation et tout autre contenu qui est présent sur plusieurs pages de votre application.
// Les templates peuvent être utilisés pour créer une mise en page cohérente à travers différentes pages de votre application.
// Ils peuvent également contenir des zones de contenu dynamique qui varient d'une page à l'autre.

// Layouts :
// Les layouts sont des structures de mise en page plus spécifiques qui peuvent être utilisées pour envelopper le contenu d'une page spécifique.
// Contrairement aux templates qui définissent la structure générale de plusieurs pages, un layout est généralement associé à une seule page ou à un groupe restreint de pages qui nécessitent une mise en page similaire.
// Les layouts sont souvent utilisés pour encapsuler des composants qui sont communs à plusieurs pages, tels que des barres latérales, des zones de contenu réutilisables, ou pour appliquer des styles spécifiques à une page ou à un groupe de pages.

// Ils offrent une modularité supplémentaire en permettant de séparer la structure de la mise en page du contenu spécifique à une page.

export default function Home(){
  return (
    <div className='w-full h-screen flex items-center justify-center'>
      <h1 className="text-center text-slate-900 text-4xl my-6">PAGE HOME</h1>
    </div>
  )
}

