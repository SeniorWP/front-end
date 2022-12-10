import { RoutesEnum } from 'constants/routes'
import Link from 'next/link'
import { FC } from 'react'
import { MdAccountBox } from 'react-icons/md'

import Search from '@/components/ui/Search/Search'

import styles from './Header.module.scss'

const Header: FC = () => {
	return (
		<div className={styles.header}>
			<Search />
			<Link href={RoutesEnum.Login}>
				<span>login</span>
				<MdAccountBox size={28} />
			</Link>
		</div>
	)
}
export default Header
