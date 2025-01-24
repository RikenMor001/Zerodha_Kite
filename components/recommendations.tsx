
interface StockData{
    symbol: string,
    price: number,
    change: number,
    changePercent: number
}

export default function Recommendations(){

    const [ selectedStock, setSelectedStock ] = useState<string | null>(null);
    const stocks: StockData[] = [
        {
            symbol: "INDIA VIX", 
            price: 12.45,
            change: 0.45,
            changePercent: 3.75
        }
    ]

    return <div className="text-white font-semibold text-xs mt-5">
            <div className="mb-2 rounded-md border border-neutral-800 shadow=lg w-[90%] px-2 py-3" style={{fontSize: "13px", fontWeight: "lighter"}}>
                <button>
                    INDIA VIX           
                </button>
            </div>
            <div className="mb-2 rounded-md border border-neutral-800 shadow=lg w-[90%] px-2 py-3" style={{fontSize: "13px", fontWeight: "lighter"}}>
                <button>
                    NIFTY 50
                </button>
            </div>
            <div className="mb-2 rounded-md border border-neutral-800 shadow=lg w-[90%] px-2 py-3" style={{fontSize: "13px", fontWeight: "lighter"}}>
                <button>
                    HDFCBANK 
                </button>
            </div>
            <div className="mb-2 rounded-md border border-neutral-800 shadow=lg w-[90%] px-2 py-3" style={{fontSize: "13px", fontWeight: "lighter"}}>
                <button>
                    ICICIBANK 
                </button>
            </div>
            <div className="mb-2 rounded-md border border-neutral-800 shadow=lg w-[90%] px-2 py-3" style={{fontSize: "13px", fontWeight: "lighter"}}>
                <button>
                    KOTAKBANK 
                </button>
            </div>
            <div className="mb-2 rounded-md border border-neutral-800 shadow=lg w-[90%] px-2 py-3" style={{fontSize: "13px", fontWeight: "lighter"}}>
                <button>
                    AXISBANK 
                </button>
            </div>
            <div className="mb-2 rounded-md border border-neutral-800 shadow=lg w-[90%] px-2 py-3" style={{fontSize: "13px", fontWeight: "lighter"}}>
                <button>
                    SBIN
                </button>
            </div>
    </div>    
}


