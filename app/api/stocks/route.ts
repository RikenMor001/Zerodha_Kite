import axios from "axios";
import { NextResponse } from "next/server";

const ALPHA_VANTAGE_API_KEY = process.env.ALPHA_VENTAGE_API_KEY || "demo";

const stocks = [
  { symbol: "NIFTY50.BSE", name: "Nifty 50" },
  { symbol: "HDFCBANK.BSE", name: "HDFC Bank" },
  { symbol: "ICICIBANK.BSE", name: "ICICI Bank" },
  { symbol: "KOTAKBANK.BSE", name: "Kotak Bank" },
  { symbol: "AXISBANK.BSE", name: "Axis Bank" },
  { symbol: "SBIN.BSE", name: "SBI" },
];

export async function GET() {
  try {
    const stockData = await Promise.all(
      stocks.map(async (stock) => {
        try {
          const response = await axios.get(
            `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${stock.symbol}&apikey=${ALPHA_VANTAGE_API_KEY}`
          );

          const quote = response.data["Global Quote"];
          return {
            symbol: stock.symbol,
            name: stock.name,
            price: quote?.["05. price"] || "N/A",
            change: quote?.["09. change"] || "N/A",
            changePercent: quote?.["10. change percent"] || "N/A",
          };
        } catch (error: unknown) {
          console.error(`Error fetching ${stock.symbol}:`, error);
          return {
            symbol: stock.symbol,
            name: stock.name,
            price: "N/A",
            change: "N/A",
            changePercent: "N/A",
          };
        }
      })
    );

    return NextResponse.json(stockData);
  } catch (error: unknown) {
    console.error("General fetch error:", error);
    return NextResponse.json(
      { error: "Failed to fetch the stock price" },
      { status: 500 }
    );
  }
}
