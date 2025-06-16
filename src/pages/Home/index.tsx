
import React from 'react';
import AnimateElement from 'components/common/AnimateElement';
import { appData } from 'appconfig/data/data';
import { useAppDispatch, useAppSelector } from 'appconfig/redux-store/hooks';
import { setActiveApartment, setActiveFloor, setActiveTower } from 'appconfig/redux-store/slices/global';
import type { Apartment, Floor } from 'models/app-interface';

const HomePage = () => {
    const dispatch = useAppDispatch();
    const { activeTower, activeFloor, activeApartment } = useAppSelector((state) => state.global);

    const handleTowerClick = (index: number) => {
        dispatch(setActiveTower(appData?.towers[index]));
        dispatch(setActiveFloor({}));
        dispatch(setActiveApartment({}));
    };

    const handleFloorClick = (floor: Floor) => {
        dispatch(setActiveFloor(floor));
        dispatch(setActiveApartment({}));
    };

    const handleApartmentClick = (apartment: Apartment) => {
        dispatch(setActiveApartment(apartment));
    };

    return (
        <div className="">
            <div className="flex flex-col  gap-x-4 items-center max-w-xl mx-auto justify-center">
                <h1 className="font-bold">TOWER OVERVIEW</h1>
                <div className="flex gap-x-3 justify-center mt-4">
                    {appData?.towers.map((item, index) => (
                        <AnimateElement scale={{ hover: 1.07, tap: 0.9 }} key={index} onClick={() => handleTowerClick(index)}>
                            <div
                                className={`bg-white border whitespace-nowrap border-gray-400 text-sm rounded-lg w-full px-6 md:px-10 py-3 cursor-pointer hover:bg-gray-100 transition-colors ${
                                    'id' in activeTower && activeTower.id === item?.id ? 'btn-black-container' : ''
                                }`}
                            >
                                {item?.name}
                            </div>
                        </AnimateElement>
                    ))}
                </div>
                {activeTower && 'id' in activeTower && (
                    <div className="mt-4">
                        <h1 className="font-bold text-center">
                            {' '}
                            {activeFloor && (activeFloor as Floor).floorNumber
                                ? `FLOOR VIEW (Floor ${(activeFloor as Floor).floorNumber}) `
                                : 'SELECT A FLOOR'}
                        </h1>
                        <div className="w-full  xl:min-w-xl flex flex-col md:flex-row gap-x-5 justify-between items-start">
                            <div className=" max-w-screen md:max-w-auto px-2 w-full  md:w-auto whitespace-no-wrap scrolling-touch overflow-x-scroll md:overflow-x-visible   scroll-none ">
                                <div className="flex md:flex-col gap-x-3 md:max-w-[130px] md:min-w-[130px] min-w-[200px]  w-full  gap-y-1  mt-4">
                                    {activeTower?.floors.map((floor: Floor, index: number) => (
                                        <AnimateElement
                                            scale={{ hover: 1.07, tap: 0.9 }}
                                            key={index}
                                            onClick={() => handleFloorClick(floor)}
                                        >
                                            <div
                                                className={` border   mx-auto border-gray-400 text-center text-xs rounded-lg px-5 py-1 cursor-pointer hover:bg-gray-100 transition-colors ${
                                                    (activeFloor as Floor).floorNumber === floor?.floorNumber ? 'bg-gray-200 ' : ''
                                                }`}
                                            >
                                                Floor&nbsp;{floor?.floorNumber}
                                            </div>
                                        </AnimateElement>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <div className="flex items-stretch w-full gap-x-1  mt-4 mx-3">
                                    {'apartments' in activeFloor &&
                                        activeFloor.apartments.map((apartment: Apartment, _i: number) => (
                                            <AnimateElement
                                                scale={{ hover: 1.07, tap: 0.9 }}
                                                key={_i}
                                                onClick={() => handleApartmentClick(apartment)}
                                                className="w-[31%] md:w-auto"
                                            >
                                                <div
                                                    className={`border border-gray-400 flex flex-col justify-between text-xs rounded-lg px-2 md:px-6 py-1 h-full cursor-pointer hover:bg-gray-100 transition-colors ${
                                                        (activeApartment as Apartment).id === apartment?.id ? 'bg-gray-200 ' : ''
                                                    }`}
                                                >
                                                    <div>
                                                        <h2 className="font-bold mb-2">Apartment {_i + 1}</h2>
                                                        <img
                                                            src={apartment?.thumbnail}
                                                            alt={apartment?.metadata?.unitType}
                                                            className="object-fit md:h-48 md:w-96 md:object-cover "
                                                        />
                                                    </div>
                                                    <div className="text-left text-xs mt-2">
                                                        <div className="">Area: {apartment?.metadata?.area}</div>
                                                        <div className="">Room count: {apartment?.metadata?.roomCount}</div>
                                                        <div className="">Unit: {apartment?.metadata?.unitType}</div>
                                                    </div>
                                                </div>
                                            </AnimateElement>
                                        ))}
                                </div>

                                <div className=" ">
                                    {'id' in activeApartment && (
                                        <div className="mx-3">
                                            <h1 className="font-bold mt-4 mb-2 text-center">Selected apartment view </h1>
                                            <div className="bg-white border border-gray-400 text-xs rounded-lg px-6 py-1 cursor-pointer hover:bg-gray-100 transition-colors">
                                                <h2 className="font-bold mb-2">Apartment {activeApartment?.id}</h2>
                                                <img
                                                    src={activeApartment?.largeImage}
                                                    alt={activeApartment?.largeImage}
                                                    className="max-h-[400px] min-h-[400px]  w-full object-contain "
                                                />
                                            </div>
                                            <div className="text-left text-xs mt-2">
                                                <h3 className="font-bold underline">Meta data:</h3>
                                                <div className="">Description: {activeApartment?.metadata?.description}</div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};
export default HomePage;
