/** @typedef {'USA' | 'France' | 'Switzerland' | 'Russia'  | 'Germany' } Country */

/**
 * @typedef {{
 *  readonly country: Country,
 *  readonly notes?: string,
 * }} Record
 */

/** @typedef {{ readonly[k in string]: Record}} Data */

// source: https://www.msn.com/en-us/money/companies/these-companies-continue-to-do-business-in-russia/ar-AAUQUdP?ocid=uxbndlbing

/** @type {Data} */
const data = {
    'Abbott Labs': { country: 'USA' },
    'Accor': { country: 'France' },
    'Hyat': { country: 'USA' },
    'Marriott': { country: 'USA' },
    'Metro AG': { country: 'Germany' },
    'Amway': { country: 'USA' },
    'Dunkin Donuts': { country: 'USA' },
    'Cargill': { country: 'USA' },
    'Citigroup': { country: 'USA' },
    'General Mills': { country: 'USA' },
    'Nestle': { country: 'Switzerland' },
    'Halliburton': { country: 'USA' },
    'Herbalife Nutrition': { country: 'USA' },
    'Koch Industries': { country: 'USA' },
    'Leo Burnett': { country: 'USA' },
    'Subway': { country: 'USA' },
    'Kraken': { country: 'USA' },
    'Binance': { country: 'USA' },
    'Coinbase': { country: 'USA' },
}

module.exports = {
    /** @readonly */
    data,
}
