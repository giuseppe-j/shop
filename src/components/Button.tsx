export type ButtonVariants = 'primary' | 'secondary';
export type ButtonSizes = 'sm' | 'md' | 'lg';

type Props = {
	size?: ButtonSizes;
	variant?: ButtonVariants;
	className?: string;
	text: string;
	onClick: () => void;
};

const variants = {
	primary: 'primary',
	secondary: 'secondary',
};

export const daisyConfig = {
	variants: {
		primary: 'primary',
		secondary: 'secondary',
	},
	sizes: {
		sm: 'sm',
		md: 'md',
		lg: 'lg',
	},
};

export const Button: React.FC<Props> = ({
	size = 'md',
	variant = 'primary',
	text,
	className,
	onClick,
}) => {
	const { variants, sizes } = daisyConfig;

	return (
		<button
			className={`px-4 py-1 rounded-full ${variants[variant]} ${sizes[size]} ${className}`}
			onClick={onClick}
		>
			{text}
		</button>
	);
};
