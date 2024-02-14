export default function Loading(){
  return (
    <div className="flex justify-center items-center h-screen">
    <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
  </div>
  )
}

// En créant un fichier nommé "_loading.js" (ou "_loading.jsx" si vous utilisez JSX) dans le dossier "pages", vous pouvez personnaliser l'apparence de cet indicateur de chargement en définissant un composant React. Ce composant peut contenir n'importe quel contenu que vous souhaitez afficher pendant le chargement, comme une animation personnalisée, un message d'attente, etc.