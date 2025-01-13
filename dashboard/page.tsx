
import AppBar from "../components/appbar";
import SearchBar from "../components/searchBar";

export default function dashboard(){
    return <div>
        <AppBar/>
        <div className="min-h-screen bg-neutral-900">
            <div className="grid grid-cols-[35%_65%] gap-4 p-4">
import AppBar from "../components/appbar";
import Recommendations from "../components/recommendations";
import SearchBar from "../components/searchBar";

export default function dashboard(){
    return <div>
        <AppBar/>
        <div className="min-h-screen bg-neutral-900">
            <div className="grid grid-cols-[35%_65%] gap-4 p-4">
                <div className="border-r border-neutral-800">
                    <SearchBar/>
                    <Recommendations/>
                </div>
                <div className="text-white ml-5 font-semibold text-2xl">
                    Dashboard
                </div>
            </div>
        </div>
    </div>
}
                <div className="border-r border-neutral-800">
                    <SearchBar/>
                </div>
                <div className="text-white ml-5 font-semibold text-2xl">
                    Dashboard
                </div>
            </div>
        </div>
    </div>
}
