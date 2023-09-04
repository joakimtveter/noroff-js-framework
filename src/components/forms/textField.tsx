import ErrorIcon from '@/icons/error';
import styles from './forms.module.css';

interface TextFieldProps {
    name: string;
    label: string;
    type?: string;
    autoComplete?: string;
    register?: any;
    error: any;
}

function TextField(props: TextFieldProps) {
    const { name, label, type = 'text', register, error, ...inputProps } = props;
    const hasError = error[name] ? true : false;

    return (
        <div className={styles.formcontrol}>
            <label className={styles.label} htmlFor={`${name}-field`}>
                {label + ':'}
            </label>
            <input {...register(name)} id={`${name}-field`} className={styles.input} type={type} {...inputProps} />
            {hasError ? (
                <div className={styles.error}>
                    <ErrorIcon size={16} />
                    Error: {error[name]?.message}
                </div>
            ) : null}
        </div>
    );
}

export default TextField;
