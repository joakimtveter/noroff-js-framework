import { IconProps } from '@/types/icon';

export default function DeleteIcon(props: IconProps) {
    const { size = 1.25, color = 'currentColor' } = props;

    return (
        <svg height={size + 'em'} width={size + 'em'} viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fill={color}
                d='M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z'></path>
        </svg>
    );
}
