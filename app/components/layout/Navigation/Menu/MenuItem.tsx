import cn from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC } from 'react'

import styles from './Menu.module.scss'
import { IMenuItem } from './types'

const MenuItem: FC<{ item: IMenuItem }> = ({ item }) => {
	const { asPath } = useRouter()

	console.log(asPath)

	return (
		<li
			className={cn({
				[styles.active]: asPath === item.link,
			})}
		>
			<Link href={item.link}>
				<span>{item.icon}</span>
				<span>{item.title}</span>
			</Link>
		</li>
	)
}

export default MenuItem
