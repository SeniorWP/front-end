import { ChangeEvent, FC } from 'react'

import {MdSearch} from 'react-icons/md'

import styles from './Search.module.scss'

interface ISearch {
	searchTerm: string
	handleSearch: (event: ChangeEvent<HTMLInputElement>) => void
}

const Search: FC = () => {
	return (
		<div className={styles.search}>
			<MdSearch size={28}/>
			<input placeholder="Поиск..."/>
		</div>
	)
}

export default Search
