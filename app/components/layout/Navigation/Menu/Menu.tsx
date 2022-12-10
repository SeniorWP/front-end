import { RoutesEnum } from 'constants/routes'
import { FC } from 'react'
import {
	MdOutlineFavoriteBorder,
	MdOutlineHome,
	MdOutlineMessage,
} from 'react-icons/md'

import styles from './Menu.module.scss'
import MenuItem from './MenuItem'
import { IMenuItem } from './types'

const Menu: FC = () => {
	const items: IMenuItem[] = [
		{
			icon: <MdOutlineHome size={28} />,
			link: RoutesEnum.Home,
			title: 'Home',
		},
		{
			icon: <MdOutlineMessage size={28} />,
			link: RoutesEnum.Message,
			title: 'Message',
		},
		{
			icon: <MdOutlineFavoriteBorder size={28} />,
			link: RoutesEnum.Favourites,
			title: 'Favorites',
		},
	]

	return (
		<div className={styles.menu}>
			<ul className={styles.ul}>
				{items.map((item) => (
					<MenuItem key={item.link} item={item} />
				))}
			</ul>
		</div>
	)
}

export default Menu
