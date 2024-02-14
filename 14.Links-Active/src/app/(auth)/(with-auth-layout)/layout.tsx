"use client";

// utiliser "use client" pour faire référence à l'utilisation du navigateur (côté client) pour effectuer certaines opérations. Cela peut inclure l'utilisation de fonctionnalités fournies par le navigateur, telles que le stockage local (LocalStorage), l'utilisation d'événements côté client, ou d'autres fonctionnalités qui ne sont pas directement gérées par le serveur.

import Link from "next/link"
import { usePathname } from "next/navigation"

// Ce hook permet d'obtenir le chemin d'accès actuel de l'URL du navigateur.  il est utilisé pour obtenir le chemin d'accès actuel de l'URL afin de mettre en surbrillance le lien de navigation correspondant dans la barre de navigation.

const navLinks = [
  {name: "Register", href:"/register"},
  {name: "Login", href:"/login"},
  {name: "Forgot Password", href:"/forgot-password"},
]


export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {


  //##
  const pathname = usePathname()





  return (
    <>
        <nav>
          <ul>{navLinks.map((link)=> {

            // ###
            
            const isActive = pathname.startsWith(link.href)


            //###
            return (
              <li key={link.name}><Link className={isActive ? "text-red-500 font-bold" : "text-slate-900"} href={link.href} >{link.name}</Link></li>
            )
          })}</ul>
        </nav>
     
        <h2>GROUPE AUTH</h2>
        {children}


    </>
  )
}

