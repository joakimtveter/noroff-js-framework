/**
 * Formats a number to a currency string. Norwegian currency and locale.
 * @param ammount
 * @returns
 */
export function formatCurrency(ammount: number): string {
    return new Intl.NumberFormat('nb-NO', {
        style: 'currency',
        currency: 'NOK',
    }).format(ammount);
}
