import Container from '../container';
import styles from './footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <Container type='full'>
                <p className={styles.text}>
                    This page is a school submission for the{' '}
                    <a href='https://www.noroff.no/en/studies/vocational-school/front-end-development'>
                        Noroff Frontend development course
                    </a>{' '}
                    by <a href='https://joakimtveter.no'>Joakim Tveter</a>. No actual products are sold on this page.
                </p>
            </Container>
        </footer>
    );
}
