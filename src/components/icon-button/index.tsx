import styles from './icon-button.module.css';

interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    icon: React.ReactNode;
    label: string;
    buttonStyle?: 'default' | 'circular' | 'square';
}

export default function Button(props: IconButtonProps) {
    const { icon, type = 'button', buttonStyle = 'default', label, ...remainingProps } = props;
    return (
        <button
            className={`${buttonStyle === 'circular' ? styles.circular : ''} ${
                buttonStyle === 'square' ? styles.square : ''
            } ${styles.button}`}
            type={type}
            {...remainingProps}>
            <div>{icon}</div>
            <span className='visually-hidden'>{label}</span>
        </button>
    );
}
