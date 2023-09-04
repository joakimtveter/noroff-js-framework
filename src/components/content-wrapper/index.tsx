import styles from './content-wrapper.module.css';

interface ContentWrapperProps {
    children: React.ReactNode;
}

function ContentWrapper(props: ContentWrapperProps) {
    return <div className={styles.wrapper}>{props.children}</div>;
}

export default ContentWrapper;
