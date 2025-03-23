import React from 'react';
import Link from 'next/link';
import { IoIosLogOut } from 'react-icons/io';

export const LogOutLink = () => {
  return (
    <Link
      href="/api/auth/signout"
      className="hover:text-pink-300"
      aria-label="ログアウト"
    >
      <IoIosLogOut size={25} data-testid="icon" />
    </Link>
  );
};
