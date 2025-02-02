import React from 'react'

import Menu from './Menu'
import CopyRight from './CopyRight'
import { getSession } from '@/app/lib/commonFunction'

const Footer = async () => {
  const session = await getSession()
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-gray-800 text-white sm:px-[4%] sm:py-6">
      {/* モバイルメニュー */}
      {session && (
        // sm以下の時にメニューを表示。sm以上の時はヘッダーに表示。
        <Menu />
      )}
      <CopyRight />
    </footer>
  )
}

export default Footer
