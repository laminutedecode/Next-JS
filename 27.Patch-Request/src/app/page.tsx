// En Next.js, le patch request est utilisé pour envoyer des requêtes HTTP PATCH à un serveur. Ce type de requête est utilisé pour mettre à jour partiellement une ressource existante sur le serveur. Contrairement aux requêtes HTTP PUT qui remplacent entièrement une ressource, les requêtes PATCH permettent de modifier uniquement les champs spécifiés dans la requête, laissant les autres champs inchangés. aller dans route http://localhost:3000/reviews/1

export default function Home() {
  return (
     <>
     <h1>Home</h1></>
  );
}
