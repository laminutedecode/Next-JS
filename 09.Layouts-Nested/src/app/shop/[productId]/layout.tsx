
// children est une prop spéciale qui est passée au composant ProductLayout. Cette prop children représente le contenu qui est défini à l'intérieur des balises d'ouverture et de fermeture du composant ProductLayout.

// React.ReactNode est le type de props, ce qui signifie qu'il peut contenir n'importe quel élément React valide, tel qu'un composant, du texte, ou d'autres éléments HTML.

export default function ProductLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
     
        <h2>Je suis rajouter depuis layout de products</h2>
        {children}


    </>
  )
}


// Les layouts nested dans Next.js permettent d'imbriquer des mises en page les unes dans les autres. Cela rend la structure de votre application plus modulaire et réutilisable en séparant la logique de mise en page en différents composants. C'est utile pour créer des mises en page générales réutilisables (comme la navigation ou le pied de page) et pour personnaliser la mise en page de différentes parties de votre application. 