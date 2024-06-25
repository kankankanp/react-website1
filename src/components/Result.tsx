import ReactCardFlip from "react-card-flip";
import { useState } from "react";

export const Result = ({resultFront, resultBack, city}: any) => {
  const bgChange = () => {
    if (main === 'Clear') {
      const bgColor = ' bg-orange-300';
      return bgColor;
    } else if (main === 'Clouds') {
      const bgColor = ' bg-slate-700';
      return bgColor;
    } else if (main === 'Rain') {
      const bgColor =' bg-sky-700';
      return bgColor;
    } else {
      const bgColor ='';
      return bgColor;
    }
  }

  const [isFlipped, setIsFlipped] = useState(false);
  
  function flipCard() {
    setIsFlipped(!isFlipped);
  }
  
  const {description, icon, main} = resultFront;
  const {temp, temp_max, temp_min, humidity} = resultBack;


console.log(icon);

console.log(city);

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal"> 
        <div onClick={flipCard} className={'h-[400px] w-1/2 mx-auto rounded-3xl flex justify-around' + (
          icon === ''
            ? ' hidden'
            : ' block animate-fade-in-bottom'
          ) + (bgChange())
        }>
          <div className="ml-14 *:text-center *:text-white flex items-center flex-col">
            <h2 className="px-12 border-b-2 border-white text-8xl mt-10 mb-8">{city}</h2>
            <ul>
              <li className="mt-4 text-7xl">{main}</li>
              <li className="mt-1 text-3xl">{description}</li>
            </ul>
          </div>
          <div className="flex items-center">
            <img className={'block w-[15rem] h-auto object-contain'} src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt="Weather Icon" />
          </div>
        </div>


        <div onClick={flipCard} className={'h-[400px]  w-1/2 mx-auto rounded-3xl flex justify-around' + (
          icon === ''
            ? ' hidden'
            : ' block'
          ) + (bgChange())
        }>
          <div className="ml-14 *:text-center *:text-white flex items-center flex-col xl:flex-row rotate-rotate-y--180">
            <h2 className="px-12 border-b-2 border-white text-8xl mt-10 mb-8">{city}</h2>
            <ul>
              <li className="text-7xl">{temp}°C</li>
              <li className="mt-1 text-3xl">Max:{temp_max}°C</li>
              <li className="mt-1 text-3xl">Min:{temp_min}°C</li>
              <li className="mt-1 text-3xl">Hum:{humidity}%</li>
            </ul>
          </div>
          <div className="flex items-center">
            <img className={'block w-[15rem] h-auto object-contain'} src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt="Weather Icon" />
          </div>
        </div>
    </ReactCardFlip>
  )
}