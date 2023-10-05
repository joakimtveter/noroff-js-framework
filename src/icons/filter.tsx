import { IconProps } from '@/types/icon';

export default function FilterIcon(props: IconProps) {
    const { size = 3, color = 'currentColor' } = props;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' height={size + 'em'} width={size + 'em'}>
            <path fill={color} d='M10 20v-7L2.95 4h18.1L14 13v7h-4Z' />
        </svg>
    );
}
