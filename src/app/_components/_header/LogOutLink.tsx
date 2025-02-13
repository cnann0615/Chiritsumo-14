import Link from 'next/link'
import React from 'react'
import { IoIosLogOut } from 'react-icons/io'

const LogOutLink = () => {
  return (
    <Link
      href="/api/auth/signout"
      className="hover:text-pink-300"
      aria-label="ログアウト">
      <IoIosLogOut size={25} data-testid="icon" />
    </Link>
  )
}

export default LogOutLink
