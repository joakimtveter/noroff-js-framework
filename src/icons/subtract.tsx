import { IconProps } from '@/types/icon';

export default function SubtractIcon(props: IconProps) {
    const { size = 2, color = 'currentColor' } = props;

    return (
        <svg
            height={size + 'em'}
            width={size + 'em'}
            viewBox='0 -960 960 960'
            xmlns='http://www.w3.org/2000/svg'
            {...props}>
            <path
                fill={color}
                d='M280-440h400v-80H280v80ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z'
            />
        </svg>
    );
}