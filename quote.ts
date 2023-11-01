import { ChainId, Fetcher, Route, Trade, TokenAmount, TradeType} from 'quickswap-sdk'
import { BigNumber, providers, BigintIsh } from "ethers";
import { ETH, Token, USDC } from "@/tokens";

export type Quote = {
  swapBalance: any;
  slippagePercent: number;
};

const Token_Addresses: Record<string, string> = {
  "USDT": "0xc2132D05D31c914a87C6611C10748AEb04B58e8F",
  "ORBS": "0x82a0E6c02b91eC9f6ff943C0A933c03dBaa19689",
  "TEL": "0xdF7837DE1F2Fa4631D716CF2502f8b230F1dcc32",
  "WETH": "0x7ceb23fd6bc0add59e62ac25578270cff1b9f619",
  "CHAMP": "0x8f9e8e833a69aa467e42c46cca640da84dd4585f",
  "BLOK": "0x229b1b6c23ff8953d663c4cbb519717e323a0a84"
}

const alchemy = "https://polygon-mainnet.g.alchemy.com/v2/Q4MUmW_mCYlqUIh7Gw1QHOXbBTttnDaj"
const provider = new providers.JsonRpcProvider(alchemy)

export async function getQuote(
  fromToken: string,
  toToken: string,
  fromAmount: number
): Promise<Quote> {
  const FROM_ADDRESS = Token_Addresses[fromToken]
  const TO_ADDRESS = Token_Addresses[toToken]

  const FROM = await Fetcher.fetchTokenData(137, FROM_ADDRESS, provider)
  const TO = await Fetcher.fetchTokenData(137, TO_ADDRESS, provider)
  const pair = await Fetcher.fetchPairData(FROM, TO, provider);
  const route = new Route([pair], TO)

  console.log(route.midPrice.toSignificant(10))
  console.log(fromAmount)
  const fromAmountBigint: BigintIsh = BigNumber.from(fromAmount);

  // const trade = new Trade(route, new TokenAmount(FROM, fromAmountBigint), TradeType.EXACT_INPUT);
  // console.log(trade.outputAmount.toSignificant(6))

  const swapBalance = route.midPrice.toSignificant(10) //BigNumber.from(route.midPrice);

  const slippagePercent = 0.01;

  console.info(`Slippage: ${slippagePercent * 100}%`);

  return {
    swapBalance,
    slippagePercent,
  };
}