import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import Layout from '@/components/layout';
import Container from '@/components/container';
import TextField from '@/components/forms/textField';
import TextArea from '@/components/forms/textArea';
import ErrorSummary from '@/components/forms/errorSummary';
import Button from '@/components/button';

import styles from './contactPage.module.css';

const schema = yup.object({
    name: yup.string().required('Name is required').min(3, 'Name must be at least 3 characters'),
    subject: yup.string().required('Subject is required').min(3, 'Name must be at least 3 characters'),
    email: yup.string().required('Email is required').email('Invalid email address'),
    message: yup.string().required('Message is required').min(3, 'Message must be at least 3 characters'),
});

export default function ContactPage() {
    const {
        reset,
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ resolver: yupResolver(schema), mode: 'onBlur' });
    const onSubmit = (data: any) => {
        console.log('Contact form submission: ', data);
        reset({ name: '', subject: '', email: '', message: '' });
    };
    return (
        <>
            <Helmet>
                <title>{'Contact Us - MyStore'}</title>
                <meta
                    name='description'
                    content='Contact us for any questions you might have. This page is a school assignment submission, no actual products are sold on this site.'
                />
                <meta name='keywords' content='Contact, Questions, Help' />
            </Helmet>
            <Layout>
                <Container>
                    <hgroup>
                        <h1>Contact Us</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat minus cumque nesciunt nobis
                            praesentium labore nihil necessitatibus.
                        </p>
                    </hgroup>

                    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                        <TextField
                            name='name'
                            label='Full name'
                            autoComplete='name'
                            register={register}
                            error={errors}
                        />
                        <TextField
                            name='subject'
                            label='Subject'
                            autoComplete='off'
                            register={register}
                            error={errors}
                        />
                        <TextField name='email' label='Email' autoComplete='email' register={register} error={errors} />
                        <TextArea
                            name='message'
                            label='Message'
                            autoComplete='off'
                            register={register}
                            error={errors}
                        />
                        {Object.keys(errors).length > 0 ? <ErrorSummary errors={errors} /> : null}
                        <Button type='submit'>Send message</Button>
                    </form>
                </Container>
            </Layout>
        </>
    );
}
