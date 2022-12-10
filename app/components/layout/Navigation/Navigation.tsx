import { FC } from 'react'
import Logo from './Logo'
import Menu from './Menu/Menu'

import styles from './Navigation.module.scss'

const Navigation: FC = () => {
	return <div className={styles.navigation}>
		<Logo/>
		<Menu/>
	</div>
}
export default Navigation
