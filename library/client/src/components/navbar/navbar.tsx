import { useHistory } from 'react-router-dom'

export default function Navbar(){
    const history = useHistory()
    function changePage(payload:string){
        history.push(payload)
    }
    return(
        <div className="grid grid-cols-2 text-xl">
            <p className="m-4 p-4 text-darkblue-500 font-bold
text-darkblue-500 font-bold">logo</p>
            <ul className="justify-end flex flex-row m-2">
                <li className="m-2 p-4 text-darkblue-500 font-bold" onClick={() => changePage('/')}>Home</li>
                <li className="m-2 p-4 text-darkblue-500 font-bold" onClick={() => changePage('/exploreBeforeLogin')}>Explore</li>
                <li className="hp:hidden tablet:hidden laptop:hidden desktop:inline desktop:m-2 desktop:bg-orange-600 desktop:p-4 desktop:w-24 desktop:text-center text-gray-50 desktop:font-bold desktop:rounded-lg">Sign In</li>
            </ul>
        </div>
    )
}