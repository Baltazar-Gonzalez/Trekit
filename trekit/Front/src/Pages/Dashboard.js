import React from 'react';
import { BsCurrencyDollar } from 'react-icons/bs';
import { GoPrimitiveDot } from 'react-icons/go';
import { IoIosMore } from 'react-icons/io';

import Stacked from '../Components/Stacked.js';
import Pie from '../Components/Pie.js';
import Bar from '../Components/Bar.js';
import Button from '../Components/Button.js';
import Sparkline from '../Components/Sparkline.js';
import Doughnut from '../Components/Doughnut.js';
import { earningData, medicalproBranding, recentTransactions, weeklyStats, dropdownData, ecomPieChartData, SparklineAreaData, SparklineAreaData2 } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';
import product9 from '../data/product9.jpg';

function Dashboard(){
    return (
        
        <div className='mt-12'>
             <div className="flex flex-wrap lg:flex-nowrap justify-center ">
                <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center">
                    <div className="flex justify-between items-center">
                        <div>
                            <p className="font-bold text-gray-400">Ganancias</p>
                            <p className="text-2xl">$11,532.25</p>
                        </div>
                    </div>
                    <div className='mt-6'>
                        <Button color="white" bgColor="#3f2" text="Descargar" borderRadius="10px" size="md" />
                    </div>
                </div>
                <div className='flex m-3 flex-wrap justify-center gap-1 items-center '>
                    {earningData.map((item)=>(
                        <div key={item.title} className="bg-white h-44 dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 p-4 pt-9 rounded-2xl">
                            <button type='button' style={{color: item.iconColor, backgroundColor: item.iconBg}} className="text-2xl opacity-0.9 rounded-full  p-4 hover:drop-shadow-xl">
                                {item.icon}
                            </button>
                            <p className='mt-3'>
                                <span className='text-lg font-semibold'>{item.amount}</span>
                                <span className={`text-sm text-${item.pcColor} ml-2`}>
                                    {item.percentage}
                                </span>
                            </p>
                            <p className='text-sm text-gray-400 mt-1'>{item.title}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex gap-10 flex-wrap justify-center">
                <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-780  ">
                    <div className="flex justify-between">
                        <p className="font-semibold text-xl">Energia Producida</p>
                        <div className="flex items-center gap-4">
                        <p className="flex items-center gap-2 text-gray-600 hover:drop-shadow-xl">
                            <span>
                            <GoPrimitiveDot />
                            </span>
                            <span>16/10 - 22/10</span>
                        </p>
                        <p className="flex items-center gap-2 text-green-400 hover:drop-shadow-xl">
                            <span>
                            <GoPrimitiveDot />
                            </span>
                            <span>23/10 - 29/10</span>
                        </p>
                        </div>
                    </div>
                    <div className='mt-10 flex gap-10 flex-wrap justify-center'>
                        <div className=" border-r-1 border-color m-4 pr-10">
                            <div>
                                <p>
                                <span className="text-3xl font-semibold">43,431 W</span>
                                <span className="p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full text-white bg-green-400 ml-3 text-xs">
                                    23%
                                </span>
                                </p>
                                <p className="text-gray-500 mt-1">23/10 - 29/10</p>
                            </div>
                            <div className="mt-8">
                                <p className="text-3xl font-semibold">35,310 W</p>
                                <p className="text-gray-500 mt-1">16/10 - 22/10</p>
                            </div>
                            <div className='mt-5 w-full'>
                                <Sparkline currentColor="black" id="line-sparkLine" type="Line" height="80px" width="250px" data={SparklineAreaData} point={true}  />
                            </div>
                        </div>
                        <div>
                            <Bar currentColor="black" id="line-sparkLine" type="Line" width="320px" height="360px" data={[SparklineAreaData, SparklineAreaData2]} color="black" />
                        </div>
                    </div>
                </div>
                <div>
                    <div className=" rounded-2xl md:w-400 p-4 m-3 " style={{ backgroundColor: "rgb(94, 222, 148)" }}>
                        <div className="flex justify-between items-center ">
                            <p className="font-semibold text-white text-2xl">Ganancia</p>
                            <div>
                                <p className="text-2xl text-white font-semibold mt-8">$63,448.78</p>
                                <p className="text-gray-200">Mensual</p>
                            </div>
                        </div>
                        <div className="mt-4">
                            <Sparkline currentColor="white" id="column-sparkLine" height="100px" type="Column" data={SparklineAreaData2} width="320" point={false} color="rgb(242, 252, 253)" />
                        </div>
                    </div>
                    <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl md:w-400 p-8 m-3 flex justify-center items-center gap-10">
                        <div>
                            <p className="text-2xl font-semibold ">39,354 W</p>
                            <p className="text-gray-400">Almacenada</p>
                        </div>
                        <div className="w-40">
                            <Doughnut id="pie-chart" data={ecomPieChartData} legendVisiblity={false} height="160px" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard