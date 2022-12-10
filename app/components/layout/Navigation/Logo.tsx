import Link from 'next/link'
import { FC } from 'react'

import Title from '@/components/ui/Title/Title'

import styles from './Navigation.module.scss'
import { RoutesEnum } from 'constants/routes'

const Logo: FC = () => {
	return (
		<Link href={RoutesEnum.Home} className={styles.logo}>
			<Title variant="h1">MRent</Title>
		</Link>
	)
}
export default Logo
