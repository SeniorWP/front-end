import cn from 'classnames'
import { FC, PropsWithChildren } from 'react'

type Size = 'h1' | 'h2' | 'h3'

interface TitleProps {
	className?: string
	variant?: Size
}

const Title: FC<PropsWithChildren<TitleProps>> = ({
	className,
	variant = 'h1',
	children,
	...props
}) => {
	const Tag = `${variant}` as keyof JSX.IntrinsicElements

	return (
		<Tag className={cn(className)} {...props}>
			{children}
		</Tag>
	)
}

export default Title
