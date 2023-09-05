import styles from './icon-button.module.css';

interface IconButtonProps {
    icon: React.ReactNode;
    label: string;
    style?: 'default' | 'circular' | 'square';
    type?: 'button' | 'submit' | 'reset';
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function Button(props: IconButtonProps) {
    const { icon, type = 'button', style = 'default', label, ...remainingProps } = props;
    return (
        <button
            className={`${style === 'circular' ? styles.circular : ''} ${style === 'square' ? styles.square : ''} ${
                styles.button
            }`}
            type={type}
            {...remainingProps}>
            <div>{icon}</div>
            <span className='visually-hidden'>{label}</span>
        </button>
    );
}
