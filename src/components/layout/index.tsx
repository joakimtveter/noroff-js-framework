import Header from '@/components/header';
import Footer from '@/components/footer';
import SkipLink from '../skip-link';

interface LayoutProps {
    children: React.ReactNode;
    mainClassName?: string;
}

function Layout(props: LayoutProps) {
    return (
        <>
            <SkipLink />
            <Header />
            <main id='content' className={props.mainClassName}>
                {props.children}
            </main>
            <Footer />
        </>
    );
}

export default Layout;
