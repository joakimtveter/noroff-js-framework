interface ButtonProps {
    children: React.ReactNode;
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    type?: 'button' | 'submit' | 'reset';
}

export default function Button(props: ButtonProps) {
    const { children, startIcon, endIcon, type, ...remainingProps } = props;
    return (
        <button type={type} {...remainingProps}>
            {startIcon}
            {children}
            {endIcon}
        </button>
    );
}
