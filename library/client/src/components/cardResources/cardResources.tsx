import './cardResources.css'
import InputSearch from '../inputSearch/inputSearch'
export default function CardResources(){
    return (
        <div>
            <div className="grid justify-center">
                <InputSearch/>
            </div>
            <div className="grid grid-cols-auto tablet:grid tablet:grid-cols-auto laptop:grid laptop:grid-cols-2 desktop:grid desktop:grid-cols-4 lg:grid-rows-auto p-10">
                <div className="bg-pink-400 grid justify-center align-center p-8 m-8 rounded-lg">
                    <p className="text-center text-xl">Tilt.js</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum esse fugit porro nemo molestias qui.</p>
                    <button 
                    className="btnDetailClub grid justify-self-center align-self-center font-bold bg-pink-400 mt-4 rounded-lg w-44 p-4">Visit</button>
                </div>
                <div className="bg-pink-400 grid justify-center align-center p-8 m-8 rounded-lg">
                    <p className="text-center text-xl">Tilt.js</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum esse fugit porro nemo molestias qui.</p>
                    <button 
                    className="btnDetailClub grid justify-self-center align-self-center font-bold bg-pink-400 mt-4 rounded-lg w-44 p-4">Visit</button>
                </div>
                <div className="bg-pink-400 grid justify-center align-center p-8 m-8 rounded-lg">
                    <p className="text-center text-xl">Tilt.js</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum esse fugit porro nemo molestias qui.</p>
                    <button 
                    className="btnDetailClub grid justify-self-center align-self-center font-bold bg-pink-400 mt-4 rounded-lg w-44 p-4">Visit</button>
                </div>
                <div className="bg-pink-400 grid justify-center align-center p-8 m-8 rounded-lg">
                    <p className="text-center text-xl">Tilt.js</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum esse fugit porro nemo molestias qui.</p>
                    <button 
                    className="btnDetailClub grid justify-self-center align-self-center font-bold bg-pink-400 mt-4 rounded-lg w-44 p-4">Visit</button>
                </div>
                <div className="bg-pink-400 grid justify-center align-center p-8 m-8 rounded-lg">
                    <p className="text-center text-xl">Tilt.js</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum esse fugit porro nemo molestias qui.</p>
                    <button 
                    className="btnDetailClub grid justify-self-center align-self-center font-bold bg-pink-400 mt-4 rounded-lg w-44 p-4">Visit</button>
                </div>
            </div>
        </div>
    )
}