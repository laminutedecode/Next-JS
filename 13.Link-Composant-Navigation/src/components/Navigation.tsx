import styles from '../styles/components/navigation.module.css';


import Link from 'next/link';




export default function Navigation(){
  return (
    <nav className={styles.container}>
      <ul className='flex justify-center items-cnter gap-5'>
        <li className='text-white'>
          <Link href="/">Accueil</Link>
        </li>
        <li className='text-white'>
          <Link href="/about">À propos</Link>
        </li>
        <li className='text-white'>
          <Link href="/shop" passHref>Shop</Link>
        </li>
      </ul>
    </nav>
  )
}

// Link: Ce composant est importé depuis next/link. Il permet de créer des liens entre les différentes pages de votre application. Vous pouvez l'utiliser en encadrant tout élément HTML, comme un bouton ou un texte, pour le rendre cliquable et déclencher la navigation vers une autre page.

// href: C'est un attribut obligatoire pour le composant Link. Il spécifie l'URL de destination vers laquelle la navigation doit se faire lorsque le lien est cliqué.

// (voir page.tsx de shop)