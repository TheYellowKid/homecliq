import {useEffect, useState} from 'react';
import Avatar from "../avatar/Avatar";

export default function DashboardNavbar() {

  const [username, setUsername] = useState<string>("Elvin");
  const [userrole, setUserrole] = useState<string>("Admin");


useEffect(() => {
    if (typeof window !== 'undefined') {
     setUsername(localStorage.getItem("firstname") as string)
     setUserrole(localStorage.getItem("role") as string)
  }
}, [username, userrole]);

  return (
    <nav
      className="sticky top-0 flex  items-center justify-between w-screen p-6 bg-white shadow"
      style={{ zIndex: 10 }}
    >
      <div className="flex flex-row-reverse w-full">
        <div className="flex items-center justify-center gap-4">
          <text>{username}, </text>
          <text>{userrole}</text>
          <Avatar />
        </div>
      </div>
    </nav>
  );
}
