"use client"


// export default function ErrorBoundary({error}:{error: Error}){
//   return <div>Erreur dans reviewID - {error.message}</div>
// }

//redemare le serveur
{/* <Layout>
  <Template>
    <ErrorBoundary fallback={<Error />}>
      <Suspense fallback={<Loading />}>
        <ErrorBoundary fallback={<Notfound />}>
          <Page />
        </ErrorBoundary>
      </Suspense>
    </ErrorBoundary>
  </Template>
</Layout> */}




export default function ErrorBoundary({error, reset}:{error: Error; reset: ()=> void;}){

  // void signifie qu'elle renvoie une fonction qui ne retourne rien


  return (
    <>
    <div>Erreur dans reviewID - {error.message}</div>
    <button onClick={reset} className="border border-teal-500">Retester</button>
    </>
  )
}

// explliquer quil peut c emettre dans nimporte quelle niveau donc si je mest ce fichier plus haut tous les enfants vont en heriter. copier le fichier error dans productId