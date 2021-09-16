function getFormattedNumber(n, decimals = 2) {
    n = Number(n)
    if (isNaN(Number(n))) return '...';
    n = (Math.floor(n * 10 ** decimals) / 10 ** decimals).toFixed(decimals)
    let [first, second] = n.split('.')
    first = first.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    if (decimals === 0) return first;
    return first + '.' + second
}

export default getFormattedNumber