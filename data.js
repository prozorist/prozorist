/** @typedef { 'USA' | 'France' | 'Switzerland' | 'Russia'  | 'Germany' } Country */

/**
 * @typedef {|
 *  'pharmaceutical' |
 *  'hospitality' |
 *  'wholesale' |
 *  'health' |
 *  'food' |
 *  'finance' |
 *  'oil' |
 *  'nutrition' |
 *  'manufacturing' |
 *  'advertising' |
 *  'online service' |
 *  'restaurants'
 * } Industry
 */

/**
 * @typedef {{
 *  readonly country: Country,
 *  readonly industry?: Industry,
 *  readonly notes?: string,
 *  readonly source?: string,
 * }} Record
 */

/** @typedef {{ readonly[k in string]: Record}} Data */

const msn =
    'https://www.msn.com/en-us/money/companies/these-companies-continue-to-do-business-in-russia/ar-AAUQUdP'

const reuters =
    'https://www.reuters.com/business/western-companies-wrestle-with-russia-half-exits-2022-03-18'

/** @type {Data} */
const data = {
    'Abbott Labs': {
        country: 'USA',
        industry: 'pharmaceutical',
        notes:
            'Halting non-essential operations in Russia but continuing to supply medications for diseases such ' +
            'as diabetes and cancer',
        source: msn,
    },
    'Pfizer': {
        country: 'USA',
        industry: 'pharmaceutical',
        notes:
            'Halting non-essential operations in Russia but continuing to supply medications for diseases such ' +
            'as diabetes and cancer',
        source: reuters,
    },
    'Bayer': {
        country: 'Germany',
        industry: 'pharmaceutical',
        notes:
            'Halting non-essential operations in Russia but continuing to supply medications for diseases such ' +
            'as diabetes and cancer',
        source: reuters,
    },
    'Eli Lilly and Company': {
        country: 'Germany',
        industry: 'pharmaceutical',
        notes:
            'Halting non-essential operations in Russia but continuing to supply medications for diseases such ' +
            'as diabetes and cancer',
        source: reuters,
    },
    'Novaritis': {
        country: 'Switzerland',
        industry: 'pharmaceutical',
        notes: 'Maintain manufacturing plants in the Russian Federation.',
        source: reuters,
    },
    'Accor': {
        country: 'France',
        industry: 'hospitality',
        notes:
            'It is keeping its 50-plus Russian locations open while suspending future development in the country.',
        source: msn,
    },
    'Hyat': {
        country: 'USA',
        industry: 'hospitality',
        notes:
            'On March 9 said it was suspending development activities and new investments in Russia ' +
            'and will "continue to evaluate hotel operations in Russia."',
        source: msn,
    },
    'Marriott': {
        country: 'USA',
        industry: 'hospitality',
        notes: 'The international chain has at least 10 locations in Russia.',
        source: msn,
    },
    'Metro AG': {
        country: 'Germany',
        industry: 'wholesale',
    },
    'Amway': {
        country: 'USA',
        industry: 'health',
        notes: 'On March 14, Amway said it was suspending product imports and pausing operations in Russia.',
        source: msn,
    },
    'Dunkin\' Donuts': {
        country: 'USA',
        industry: 'food',
        notes:
            'On March 11 it had halted all "current development and investment" in Russia, ' +
            'while noting it can\'t legally close the independently operated franchises.',
        source: msn,
    },
    'Cargill': {
        country: 'USA',
        industry: 'food',
        notes:
            'Cargill is scaling back business activities and has stopped investment in Russia, ' +
            'the U.S.agricultural giant said on March 11, but is continuing to offer what it ' +
            'called "essential food and feed facilities" there.',
        source: msn,
    },
    'Citigroup': {
        country: 'USA',
        industry: 'finance',
        notes:
            'Citigroup is expanding on its previously announced exit of its consumer banking business ' +
            'in Russia "to include other lines of business and continue to reduce our remaining ' +
            'operations and exposure,".',
        source: msn,
    },
    'General Mills': {
        country: 'USA',
        industry: 'food',
        notes: 'It has a joint venture with Nestle',
        source: msn,
    },
    'Nestle': {
        country: 'Switzerland',
        industry: 'food',
        notes:
            'Nestle on March 9 said it had suspended capital investment and advertising in Russia, ' +
            'but would continue to sell "essential" food products in that country.',
        source: msn,
    },
    'Halliburton': {
        country: 'USA',
        industry: 'oil',
        source: msn,
    },
    'Herbalife Nutrition': {
        country: 'USA',
        industry: 'nutrition',
        source: msn,

    },
    'Koch Industries': {
        country: 'USA',
        industry: 'manufacturing',
        source: msn,
    },
    'Leo Burnett': {
        country: 'USA',
        industry: 'advertising',
        notes:
            'Leo Burnett has an office in Moscow, and its Russian clients ' +
            'include Russian digital-services provider Rostelcom.',
        source: msn,
    },
    'Patreon': {
        country: 'USA',
        industry: 'online service',
        notes:
            'An online service that lets internet content creators earn money, continues to operate in Russia.',
        source: msn,
    },
    'Subway': {
        country: 'USA',
        industry: 'restaurants',
        notes:
            'Subway said it would redirect any profits from its Russian operations to ' +
            'humanitarian efforts, noting that roughly 450 outlets in Russia are ' +
            'independently owned and controlled by local franchisees.',
        source: msn,
    },
    'Kraken': {
        country: 'USA',
        industry: 'finance',
        notes:
            'The company would not freeze the accounts of Russian clients unless it was legally required to do so.',
        source: msn,
    },
    'Binance': {
        country: 'USA',
        industry: 'finance',
        notes:
            'Binance, is blocking the accounts of Russians on western economic sanction lists, ' +
            'but not Russians at large.',
        source: msn,
    },
    'Coinbase': {
        country: 'USA',
        industry: 'finance',
        notes:
            'CEO Brain Armstrong on March 4 tweeted that "ordinary Russians are using crypto as a lifeline." ' +
            'Still, the company would comply with any bans imposed by the U.S.government, he added.',
        source: msn,
    },
}

module.exports = {
    /** @readonly */
    data,
}
