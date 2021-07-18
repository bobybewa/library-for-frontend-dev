import { useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
export default function InputSearch(){
    const [input, setInput] = useState<string>('')
    function handleSearch(e:any){
        const target = e.target

        setInput(target.value)
    }

    function handleSubmit(){
        console.log(input, 'input');
        
    }
    function enterPress(e:any){
        // e.preventDefault()
        const code = e.charCode
        if(code === 13){
            e.preventDefault()
            console.log(input);
            setInput('')
        }
        console.log(e.charCode);
        

    }
    return(
        <div className="hp:hidden tablet:hidden laptop:hidden desktop:block search_wrap search_wrap_3">
            <div className="search_box">
                <form>
                    <input type="text" className="input" onKeyPress={enterPress} value={input} onChange={handleSearch} placeholder="search..." />
                </form>
                <div className="btn btn_common">
                    <AiOutlineSearch className="absolute top-3 left-3 text-4xl text-gray-50" onClick={handleSubmit}/>
                </div>
            </div>
        </div>
    )
}