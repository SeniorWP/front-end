import { Montserrat } from '@next/font/google'
import cn from 'classnames'
import { FC, ReactNode } from 'react'

import Header from './Header.tsx/Header'
import styles from './Layout.module.scss'
import Navigation from './Navigation/Navigation'

const montserrat = Montserrat({
	weight: '400',
	subsets: ['latin'],
})

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
	return (
		<div className={cn(styles.layout, montserrat.className)}>
			<Navigation />
			<div className={styles.center}>
				<Header />
				{children}
			</div>
		</div>
	)
}

export default Layout
