import { Helmet } from 'react-helmet-async';
import Layout from '@/components/layout';

function SuccessPage() {
    return (
        <>
            <Helmet>
                <title>{'Success Page'}</title>
            </Helmet>
            <Layout>
                <h1>Success Page</h1>
            </Layout>
        </>
    );
}

export default SuccessPage;
