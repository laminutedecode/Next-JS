// Les groupes de routes (ou route groups) dans Next.js sont une fonctionnalité qui vous permet d'organiser et de structurer vos routes de manière logique et hiérarchique. Cela vous permet de regrouper des routes liées entre elles sous un même préfixe d'URL, ce qui rend la gestion des routes plus efficace et plus organisée. Créer register,login et forgot-password dans un dossier auth

export default function Home(){
  return (
    <div className='w-full h-screen flex items-center justify-center'>
      <h1 className="text-center text-slate-900 text-4xl my-6">PAGE HOME</h1>
    </div>
  )
}

//  Les groupes de routes vous permettent d'organiser vos routes de manière logique et hiérarchique. Cela rend la structure de votre application plus claire et plus facile à comprendre, car les routes liées entre elles sont regroupées sous un même préfixe d'URL.En regroupant des routes similaires sous un même groupe, vous simplifiez la gestion et la maintenance de votre application. De plus, les groupes de routes vous permettent de réutiliser des fonctionnalités ou des composants spécifiques à travers plusieurs routes et de plus elle sont tres flexible  dans la gestion des transitions de route et d'autres événements associés.  Vous pouvez associer des événements spécifiques à un groupe de routes pour exécuter une logique particulière lorsqu'une route du groupe est activée ou lorsqu'il y a un changement de route à l'intérieur du groupe. On peut acceder avec /auth/login etc.. mais si on mest le dossier entre () (auth) on pourra donc les regrouper et donc acceder a lurl /login etc...