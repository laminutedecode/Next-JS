
export const metadata = {
  title: 'About La Minute De Code',
  description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis sapiente similique sit odio, ea assumenda quas possimus quos beatae nobis?',
}

//accéder a l'url http://localhost:3000/ et http://localhost:3000/about et regarder dans le head au niveau du title et de la description. Nous pouvons le faire également sur nos page dynamique comme pour shop dans page.tsx


export default function About(){
  return (
    <div className='w-full h-screen flex items-center justify-center'>
    <h1 className="text-center text-slate-900 text-4xl my-6">PAGE ABOUT</h1>
  </div>
  )
}