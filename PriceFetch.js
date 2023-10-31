const ethers = require('ethers');
const { factoryAddress, routerAddress, fromAddress, toAddress } = require("./AddressList")
const { erc20ABI, factoryABI, pairABI, routerABI } = require("./AbiInfo")


const provider = new ethers.providers.JsonRpcProvider("https://eth-mainnet.g.alchemy.com/v2/iStlBbc33sQN1AqGh9CymmqbDPEHv75G");

const factoryInstance = new ethers.Contract(factoryAddress, factoryABI, provider);
// console.log("This is factory Instance ", factoryInstance);
console.log("____________________________________________________________________");

const routerInstance = new ethers.Contract(routerAddress, routerABI, provider);

const priceFetch = async (humanFormat) => {
    // console.log(fromAddress);
    // console.log(toAddress);

    const token1 = new ethers.Contract(fromAddress, erc20ABI, provider);
    const token2 = new ethers.Contract(toAddress, erc20ABI, provider);

    const decimal1 = await token1.decimals();
    const decimal2 = await token2.decimals();
    // console.log(humanFormat);
    // console.log(decimal1);

    const amountIn = await ethers.utils.parseUnits(humanFormat, decimal1);
    console.log("This is amount in ", amountIn.toString());
    console.log("__________________________________________________________________________");
    // console.log(fromAddress);
    // console.log(toAddress);


    const amountsOut = await routerInstance.getAmountsOut(amountIn, [
        fromAddress,
        toAddress
    ])

    // const humanOutput = ethers.utils.formatUnits(amountsOut[1].toString, decimal2)
    console.log("This is the number of WETH", amountsOut[0].toString());
    console.log("This is the number of DAI", amountsOut[1].toString());
}

humanFormat = "100"

priceFetch(humanFormat);