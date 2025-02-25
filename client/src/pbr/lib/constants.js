import BigNumber from 'bignumber.js/bignumber'

export const SUBTRACT_GAS_LIMIT = 100000
export const START_REWARD_AT_BLOCK = 3525595 // TODO
export const NUMBER_BLOCKS_PER_YEAR = 2800000 // ~7500 block/day

export const START_NEW_POOL_AT = 1609255800 // 2020/12/29 22h30

const ONE_MINUTE_IN_SECONDS = new BigNumber(60)
const ONE_HOUR_IN_SECONDS = ONE_MINUTE_IN_SECONDS.times(60)
const ONE_DAY_IN_SECONDS = ONE_HOUR_IN_SECONDS.times(24)
const ONE_YEAR_IN_SECONDS = ONE_DAY_IN_SECONDS.times(365)

export const INTEGERS = {
  ONE_MINUTE_IN_SECONDS,
  ONE_HOUR_IN_SECONDS,
  ONE_DAY_IN_SECONDS,
  ONE_YEAR_IN_SECONDS,
  ZERO: new BigNumber(0),
  ONE: new BigNumber(1),
  ONES_31: new BigNumber('4294967295'), // 2**32-1
  ONES_127: new BigNumber('340282366920938463463374607431768211455'), // 2**128-1
  ONES_255: new BigNumber(
    '115792089237316195423570985008687907853269984665640564039457584007913129639935',
  ), // 2**256-1
  INTEREST_RATE_BASE: new BigNumber('1e18'),
}


// TODO: change the address & set LP pool
export const contractAddresses = {
  pbr: {
    1: '0x298d492e8c1d909d3f63bc4a36c66c64acb3d695', // pbr token
    42: '0x0d6ae2a429df13e44a07cd2969e085e4833f64a0'
  },
  masterLaunchpad: {
    1: '0x0d9b8d30d17acec29b71088cc61fb013fbce0e12',
    42: '0xdB1B2cCdca2142a6297994101E83Da279F6c20dD' // launchpad contract
  },
  weth: {
    1: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
    42: '0xd0a1e359811322d97991e03f863a0c30c2cf029c' // weth
  }
}

export const supportedPools = [
  {
    pid: -1,
    lpAddresses: {//launchpad ct
      1: '0x0d9b8d30d17acec29b71088cc61fb013fbce0e12',
      42: '0xdB1B2cCdca2142a6297994101E83Da279F6c20dD',
    },
    tokenAddresses: {
      1: '0x4bb3205bf648b7f59ef90dee0f1b62f6116bc7ca',
      42: '0x0d6ae2a429df13e44a07cd2969e085e4833f64a0',
    },
    lpExplorer: 'https://etherscan.io/address/0x4bb3205bf648b7f59ef90dee0f1b62f6116bc7ca',
    name: 'Beyond Finance',
    symbol: 'beyond-pbr',
    description: `BYN/ETH`,
    introduce: `Beyond Finance is a decentralized platform for creating and trading synthetic financial products.`,
    website: 'https://beyondfinance.io/',
    twitter: 'https://twitter.com/beyondfinanceio',
    telegram: 'https://t.me/beyondfinanceglobal',
    whitepaper: 'https://beyond-finance.gitbook.io/beyond-finance/',
    tokenSymbol: 'BYN',
    tokenExplorer: 'https://etherscan.io/token/0x4bb3205bf648b7f59ef90dee0f1b62f6116bc7ca',
    icon: '/img/tokens/byn.png',
    totalSupply: '100,000,000 BYN',
    total: '13.95 ETH',
    ratio: 4300, // 1 ETH = 4300 BYN, 1eth=2150$
    min: 0.1, // 215$
    max: 0.233, // 500$ , 0.28 600$
    access: 'Private',
    distribution: 'April 13th 2021, 18:00 UTC',
    startAt: 1618329600,
    endAt: 1618333140,
    claimAt: 1618336800,
    startDate: "April 14th 2021, 15:00 UTC"
  },
  {
    pid: -2,
    lpAddresses: {
      1: '0x0d9b8d30d17acec29b71088cc61fb013fbce0e12',
      42: '0xdB1B2cCdca2142a6297994101E83Da279F6c20dD',
    },
    tokenAddresses: {
      1: '',
      42: '',
    },
    lpExplorer: 'https://etherscan.io/address',
    name: 'Zenchain',
    symbol: 'ZEN-PBR',
    description: `ZEN/ETH`,
    introduce: `ZenChain is a dedicated blockchain that is optimized specifically for DeFi and NFT applications`,
    website: 'https://zenchain.co',
    twitter: 'https://twitter.com/zenchainco',
    telegram: 'https://t.me/zenchaingroup',
    whitepaper: 'https://docs.zenchain.co',
    tokenSymbol: 'ZEN',
    tokenExplorer: 'https://etherscan.io/token',
    icon: '/img/tokens/zen.png',
    totalSupply: '100,000,000 ZEN',
    total: '17.647 ETH',//1eth=3k5$
    ratio: 11333,
    min: 0.1,
    max: 0.1176,
    access: 'Private',
    distribution: 'May 24th 2021, 21:00 UTC',
    startAt: 1621350000,
    endAt: 1621353600,
    claimAt: 1621894200,
    startDate: "May 18th 2021, 15:00 UTC"
  },
  {
    pid: 3,
    lpAddresses: {
      1: '0x0d9b8d30d17acec29b71088cc61fb013fbce0e12',
      42: '0xdB1B2cCdca2142a6297994101E83Da279F6c20dD',
    },
    tokenAddresses: {
      1: '',
      42: '',
    },
    lpExplorer: 'https://etherscan.io/address',
    name: 'Cryptopunt',
    symbol: 'PUN-PBR',
    description: `PUN/ETH`,
    introduce: `Cryptopunt is quickly becoming the leading blockchain-based gaming and gambling platform.`,
    website: 'https://www.cryptopunt.com/',
    twitter: 'https://twitter.com/PuntCrypto',
    telegram: 'https://t.me/CryptoPunt',
    whitepaper: 'https://www.cryptopunt.com/download_file/74/1',
    tokenSymbol: 'PUN',
    tokenExplorer: 'https://etherscan.io/token',
    icon: '/img/tokens/punt.jpg',
    totalSupply: '160,000,000 PUN',
    total: 'TBA',
    ratio: 0,
    min: 0.12,//300$
    max: 0.2,//500$
    maxTier1: 0.12,//300$
    maxTier2: 0.16,//400$
    maxTier3: 0.2,//500$
    access: 'Private',
    distribution: 'TBA',
    startAt: 0,
    endAt: 1921147665,
    claimAt: 0,
    startDate: "TBA"
  },
  {
    pid: 4,
    lpAddresses: {
      1: '0x0d9b8d30d17acec29b71088cc61fb013fbce0e12',
      42: '0xdB1B2cCdca2142a6297994101E83Da279F6c20dD',
    },
    tokenAddresses: {
      1: '',
      42: '',
    },
    lpExplorer: 'https://etherscan.io/address',
    name: 'Cryptopunt',
    symbol: 'PUN-PBR',
    description: `PUN/ETH`,
    introduce: `Cryptopunt is quickly becoming the leading blockchain-based gaming and gambling platform.`,
    website: 'https://www.cryptopunt.com/',
    twitter: 'https://twitter.com/PuntCrypto',
    telegram: 'https://t.me/CryptoPunt',
    whitepaper: 'https://www.cryptopunt.com/download_file/74/1',
    tokenSymbol: 'PUN',
    tokenExplorer: 'https://etherscan.io/token',
    icon: '/img/tokens/punt.jpg',
    totalSupply: '160,000,000 PUN',
    total: 'TBA',
    ratio: 0,
    min: 0.12,//300$
    max: 0.2,//500$
    maxTier1: 0.12,//300$
    maxTier2: 0.16,//400$
    maxTier3: 0.2,//500$
    access: 'Public',
    distribution: 'TBA',
    startAt: 0,
    endAt: 1921147665,
    claimAt: 0,
    startDate: "TBA"
  },
  {
    pid: 1,
    lpAddresses: {
      1: '0x0d9b8d30d17acec29b71088cc61fb013fbce0e12',
      42: '0xdB1B2cCdca2142a6297994101E83Da279F6c20dD',
    },
    tokenAddresses: {
      1: '',
      42: '',
    },
    lpExplorer: 'https://etherscan.io/address',
    name: 'DragonBite',
    symbol: 'BITE-PBR',
    description: `BITE/ETH`,
    introduce: `DragonBite is a truly open decentralised Asset Management platform for customers to store and swap all kinds of digital assets in One App with One password`,
    website: 'https://dragonbite.io',
    twitter: 'https://twitter.com/DragonBiteDB',
    telegram: 'https://t.me/DragonBite',
    whitepaper: 'https://dragonbite-media.s3-ap-southeast-1.amazonaws.com/media/DragonBiteWhitePaper_8c67.pdf',
    tokenSymbol: 'BITE',
    tokenExplorer: 'https://etherscan.io/token',
    icon: '/img/tokens/bite.png',
    totalSupply: '1,000,000,000 BITE',
    total: '16 ETH',//1eth=2k500
    ratio: 100000,
    min: 0.12,//300$
    max: 0.2,//500$
    maxTier1: 0.12,//300$
    maxTier2: 0.16,//400$
    maxTier3: 0.2,//500$
    access: 'Public',
    distribution: 'June 11th 2021, 15:30 UTC',
    // startAt: 1623420000,
    startAt: 1523420000,//test
    //endAt: 1623423600,
    endAt: 1623219170,
    claimAt: 1623223500,
    startDate: "June 11th 2021"
  },
  {
    pid: 2,
    lpAddresses: {
      1: '0x0d9b8d30d17acec29b71088cc61fb013fbce0e12',
      42: '0xdB1B2cCdca2142a6297994101E83Da279F6c20dD',
    },
    tokenAddresses: {
      1: '',
      42: '',
    },
    lpExplorer: 'https://etherscan.io/address',
    name: 'DragonBite',
    symbol: 'BITE-PBR',
    description: `BITE/ETH`,
    introduce: `DragonBite is a truly open decentralised Asset Management platform for customers to store and swap all kinds of digital assets in One App with One password`,
    website: 'https://dragonbite.io',
    twitter: 'https://twitter.com/DragonBiteDB',
    telegram: 'https://t.me/DragonBite',
    whitepaper: 'https://dragonbite-media.s3-ap-southeast-1.amazonaws.com/media/DragonBiteWhitePaper_8c67.pdf',
    tokenSymbol: 'BITE',
    tokenExplorer: 'https://etherscan.io/token',
    icon: '/img/tokens/bite.png',
    totalSupply: '1,000,000,000 BITE',
    total: '24 ETH',
    ratio: 100000,
    min: 0.12,//300$
    max: 0.2,//500$
    maxTier1: 0.12,//300$
    maxTier2: 0.16,//400$
    maxTier3: 0.2,//500$
    access: 'Private',
    distribution: 'June 11th 2021, 15:30 UTC',
    //startAt: 1623420000,
    startAt: 1523420000,//test
    //endAt: 1623423600,
    endAt: 1623219170,
    claimAt: 1623223500,
    startDate: "June 11th 2021"
  }

]
