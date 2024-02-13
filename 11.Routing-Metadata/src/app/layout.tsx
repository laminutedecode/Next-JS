import './index.css'
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"

// Dans le contexte du SEO le "routing metadata" peut être utilisé pour améliorer la manière dont les moteurs de recherche indexent et affichent votre site dans les résultats de recherche.

//  où vous définissez des métadonnées comme le titre et la description dans un fichier de layout, cela peut être très bénéfique pour le SEO.

// Titre: Le titre de votre page est un facteur clé pour le SEO. En spécifiant un titre pertinent et descriptif pour chaque page via les métadonnées, vous pouvez aider les moteurs de recherche à comprendre de quoi parle votre page et à l'afficher de manière appropriée dans les résultats de recherche.

// Description : La description de votre page est souvent affichée dans les résultats de recherche en tant que snippet. En fournissant une description concise et informative pour chaque page, vous pouvez encourager les utilisateurs à cliquer sur votre lien dans les résultats de recherche, ce qui peut augmenter le trafic vers votre site.

// En définissant ces métadonnées dans un fichier de layout, vous pouvez les rendre facilement accessibles à toutes les pages de votre application. Cela vous permet de maintenir une cohérence dans la manière dont les métadonnées sont définies et utilisées dans toute votre application, ce qui peut être très bénéfique pour le SEO. cette objet on peut lé créer sur des pages exempel sur notre page about

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}


// En claire, vous pouvez utiliser les données de routage pour personnaliser le comportement de votre système de routage. Par exemple, vous pourriez avoir des règles qui dirigent automatiquement le trafic vers différentes versions de vos pages en fonction de certains critères, tels que l'emplacement géographique de l'utilisateur ou le type d'appareil qu'il utilise.

// Gestion des redirections : Les données de routage peuvent être utilisées pour définir des règles de redirections. Par exemple, vous pourriez avoir des règles qui redirigent automatiquement les utilisateurs d'une URL obsolète vers une nouvelle URL lorsque vous modifiez la structure de votre site.

// Optimisation du SEO : Les données de routage peuvent être utilisées pour optimiser le SEO en définissant des règles qui génèrent automatiquement des balises de titre, des méta-descriptions et d'autres éléments de contenu en fonction de l'URL de la page. Cela peut vous aider à maintenir une structure de site cohérente et à améliorer la visibilité de votre site dans les résultats de recherche.

// Contrôle des accès : Vous pouvez définir des règles de contrôle d'accès qui restreignent l'accès à certaines parties de votre site en fonction de l'URL de la page demandée ou d'autres critères de routage.

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
        <Footer />
        </body>
    </html>
  )
}
