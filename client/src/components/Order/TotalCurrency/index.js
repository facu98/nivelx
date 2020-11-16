export default function totalCurrency(num) {
    return "$" + Number(num.toFixed(1)).toLocaleString() + " ";
};