// Nous allons parler des gestionnaire de route. nous avons appris à acheminer vers les pages. nous pouvons également créer des gestionnaires de requêtes personnalisés pour nos routes en utilisant la fonctionnalité appelée gestionnaires de routes. contrairement aux routes de pages, qui répondent avec du contenu HTML, les gestionnaires de routes vous permettent de créer des points de terminaison RESTful, vous donnant le contrôle de la réponse.de plus il n'y a pas de surcharge liée à la création et à la configuration d'un serveur séparé.les gestionnaires de routes sont également parfaits pour faire des demandes d'API externes. les gestionnaires de routes s'exécutent côté serveur, garantissant que les informations sensibles telles que les clés privées restent sécurisées et ne sont jamais transmises au navigateur. créer hello

export default function Home() {
  return (
     <>
     <h1>Home</h1></>
  );
}
