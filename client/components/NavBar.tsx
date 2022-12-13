import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router';

const Navbar = () => {
  const { asPath } = useRouter();

  return (
    <nav className="mainNav">
      <ul>
        <li className={asPath === '/' ? "active" : ''}><Link href='/'>Home</Link></li>
        <li className={asPath === '/about' ? "active" : ''}><Link href='/about'>About</Link></li>
        <li className={asPath === '/list' ? "active" : ''}><Link href='/list'>User List</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar