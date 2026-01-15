import { ReactNode } from 'react'
import Banner from '@/components/Banner'
import Footer from '@/components/Footer'
import {
  BANNER_BACKGROUND_COLOR,
  BANNER_TEXT_COLOR,
  BANNER_VISIBLE,
} from '@/constants'
import './MainLayout.css'

interface MainLayoutProps {
  children: ReactNode
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="main-layout">
      <Banner
        backgroundColor={BANNER_BACKGROUND_COLOR}
        textColor={BANNER_TEXT_COLOR}
        isVisible={BANNER_VISIBLE}
      />
      <header>
        {/* Add your header/navigation here */}
      </header>
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default MainLayout
