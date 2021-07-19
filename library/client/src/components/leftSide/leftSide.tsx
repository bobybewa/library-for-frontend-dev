import React from 'react';
import foto  from '../../source/img/Usability testing-pana.png'
import './leftSide.css'
import InputSearch  from '../inputSearch/inputSearch'
const LeftSide: React.FC  = () => {
    return (
        <div className="desktop:grid desktop:grid-cols-2 desktop:relative desktop:top-38">
            <div className="grid justify-center desktop:relative desktop:top-20">
                <img src={foto} className="w-96 tablet:justify-self-center tablet:w-3/4 desktop:w-4/5" alt=""/>
            </div>
            <div className="p-8 ">
                <div className="desktop:relative desktop:top-60">
                    <p className="text-2xl font-bold text-orange-600 tablet:text-3xl laptop:text-5xl">TODAY's RESEARCH,</p>
                    <p className="text-2xl font-bold text-orange-600 tablet:text-3xl laptop:text-5xl ">TOMORROW's INOVATION</p>
                    <p className="mt-2 text-darkblue-500 tablet:text-xl">A library collects sources of information and similar resources, made accessible to a defined for reference.</p>
                    <button className="mt-4 bg-orange-600 text-gray-50 font-bold w-28 rounded-md h-9 tablet:w-44 tablet:h-12 tablet:text-xl desktop:hidden">Sign In</button>
                    <InputSearch/>
                </div>
            </div>
        </div>
    )
}

export default LeftSide