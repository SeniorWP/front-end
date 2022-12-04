import { FC, ReactNode } from 'react'

import styles from './Layout.module.scss'

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
	return (
		<div className={styles.layout}>
			<div className={styles.center}>{children}</div>
		</div>
	)
}

export default Layout
