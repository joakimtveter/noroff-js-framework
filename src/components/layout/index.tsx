import Header from '@/components/header';
import Footer from '@/components/footer';

interface LayoutProps {
    children: React.ReactNode;
    mainClassName?: string;
}

function Layout(props: LayoutProps) {
    return (
        <>
            <Header />
            <main className={props.mainClassName}>{props.children}</main>
            <Footer />
        </>
    );
}

export default Layout;
