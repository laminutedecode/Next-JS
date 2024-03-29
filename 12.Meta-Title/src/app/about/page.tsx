import { Metadata } from "next"

export const metadata : Metadata = {
  title: {
    absolute: "About",
    default: "About - Formation",
    template: "%s | La Minute De Code ",
  },
  description: 'Generated by Next.js',

}
// Nous ouvons rajouter de sparametres . Par exemple, absolute pourrait être utilisé pour spécifier un chemin absolu vers une ressource, default pourrait être un paramètre par défaut, et template pourrait être une référence à un modèle utilisé pour afficher la page.

export default function About(){
  return (
    <div className='w-full h-screen flex items-center justify-center'>
    <h1 className="text-center text-slate-900 text-4xl my-6">PAGE ABOUT</h1>
  </div>
  )
}