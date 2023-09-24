import ErrorIcon from '@/icons/error';
import styles from './forms.module.css';

interface TextAreaProps {
    name: string;
    label: string;
    autoComplete?: string;
    register?: any;
    error: any;
}

function TextArea(props: TextAreaProps) {
    const { name, label, register, error, ...textareaProps } = props;
    const hasError = error[name] ? true : false;

    return (
        <div className={styles.formcontrol}>
            <label className={styles.label} htmlFor={`${name}-field`}>
                {label + ':'}
            </label>
            <textarea
                {...register(name)}
                id={`${name}-field`}
                className={styles.textarea}
                rows={5}
                {...textareaProps}
            />
            {hasError ? (
                <div className={styles.error}>
                    <ErrorIcon size={16} />
                    Error: {error[name]?.message}
                </div>
            ) : null}
        </div>
    );
}

export default TextArea;
