const erc20ABI = require("./erc20ABI.json");

// it will return the address of liquidity contract address

// liquidity contract address for the pair of WBNB and BUSD "0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16"

const factoryABI = require("./factory.json");

const pairABI = [
    "function token0() external view returns (address)",
    "function token1() external view returns (address)",
    "function getReserves() external view returns (uint112 reserve0, uint112 reserve1, uint32 blockTimestampLast)"
]

const routerABI = require("./router.json");

module.exports = { erc20ABI, factoryABI, pairABI, routerABI };