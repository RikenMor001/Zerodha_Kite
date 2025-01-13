
import AppBar from "../components/appbar";
import SearchBar from "../components/searchBar";

export default function dashboard(){
    return <div>
        <AppBar/>
        <div className="min-h-screen bg-neutral-900">
            <div className="grid grid-cols-[35%_65%] gap-4 p-4 text-white">
                <div className="border-r border-neutral-800">
                    <SearchBar/>
                </div>
                <div className="text-white">
                    hello there 
                </div>
            </div>
        </div>
    </div>
}
