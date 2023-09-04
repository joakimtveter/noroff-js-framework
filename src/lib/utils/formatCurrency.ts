export default function formatCurrency(ammount: number) {
    return new Intl.NumberFormat('nb-NO', {
        style: 'currency',
        currency: 'NOK',
    }).format(ammount);
}
