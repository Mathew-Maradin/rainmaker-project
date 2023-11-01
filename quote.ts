import { ChainId, Fetcher, Route} from 'quickswap-sdk'
import { BigNumber, providers } from "ethers";
import { ETH, Token, USDC } from "@/tokens";

export type Quote = {
  swapBalance: any;
  slippagePercent: number;
};

const Token_Addresses = {
  "USDT": "0xc2132D05D31c914a87C6611C10748AEb04B58e8F",
  "ORBS": "0x82a0E6c02b91eC9f6ff943C0A933c03dBaa19689"
}

export async function getQuote(
  fromToken: String,
  toToken: String,
  fromAmount: BigInteger
): Promise<Quote> {
  // console.info(
  //   `Converting ${fromAmount.toString()} ${fromToken.symbol} to ${
  //     toToken.symbol
  //   }`
  // );
 
  const alchemy = "https://polygon-mainnet.g.alchemy.com/v2/Q4MUmW_mCYlqUIh7Gw1QHOXbBTttnDaj"
  const provider = new providers.JsonRpcProvider(alchemy)

  console.log(fromToken)
  console.log(toToken)

  const FROM_ADDRESS = Token_Addresses[fromToken]
  const TO_ADDRESS = Token_Addresses[toToken]

  const FROM = await Fetcher.fetchTokenData(137, FROM_ADDRESS, provider)
  const TO = await Fetcher.fetchTokenData(137, TO_ADDRESS, provider)
  const pair = await Fetcher.fetchPairData(FROM, TO, provider);
  const route = new Route([pair], TO)

  console.log(route.midPrice.toSignificant(10))

  // TODO:
  const swapBalance = route.midPrice.toSignificant(10) //BigNumber.from(route.midPrice);

  console.info(
    `Estimated swap balance: ${swapBalance.toString()} ${toToken.symbol}`
  );

  // Figure out spot values of tokens.

  // Calculate slippage on the swap.

  // TODO:
  const slippagePercent = 0.01;

  console.info(`Slippage: ${slippagePercent * 100}%`);

  return {
    swapBalance,
    slippagePercent,
  };
}