import '../index.css'

export default function DashboardLayout({
  children,
  users,
  notifications,
  analytics,
  loginuser
}: {
  children: React.ReactNode;
  users: React.ReactNode;
  notifications: React.ReactNode;
  analytics: React.ReactNode;
  loginuser: React.ReactNode;
}){

  // rajouter variable egalement
  const isLogged = false;
//puis dans ll return


  return isLogged ? (
    <div>
    
    <div>{children}</div>
    <div className="flex">
    <div className="flex flex-col">
      <div>{users}</div>
      <div>{analytics}</div>
    </div>
    <div>
      <div>{notifications}</div>
    </div>
    </div>

    </div>

  ) :  (
    loginuser
  )
}