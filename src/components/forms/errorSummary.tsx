interface ErrorSummaryProps {
    errors: Object;
}
export default function ErrorSummary(props: ErrorSummaryProps) {
    const { errors } = props;

    const errorList = [];
    for (const [, value] of Object.entries(errors)) {
        errorList.push(value?.message);
    }
    return (
        <div>
            <ul>
                {errorList.map((message: any, index: number) => (
                    <li key={message + index}>{message}</li>
                ))}
            </ul>
        </div>
    );
}
