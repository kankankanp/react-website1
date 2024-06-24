export const Result = ({resultFront, resultBack, city}: any) => {
  const bgChange = () => {
    if (main === 'Clear') {
      const bgColor = ' bg-orange-300';
      return bgColor;
    } else if (main === 'Clouds') {
      const bgColor = ' bg-sky-800';
      return bgColor;
    } else if (main === 'Rain') {
      const bgColor =' bg-blue-400';
      return bgColor;
    } else {
      const bgColor ='';
      return bgColor;
    }
  }
  
  
  const {description, icon, main} = resultFront;
  const {temp, temp_max, temp_min, humidity} = resultBack;


console.log(icon);



  return (
    <div className="relative *:absolute *:top-0 *:left-0 " style={{backfaceVisibility: 'hidden'}}>
      <div className={'h-[400px] w-1/2 mx-auto rounded-3xl flex justify-around z-20' + (
        icon === ''
          ? ' hidden'
          : ' block animate-fade-in-bottom'
        ) + (bgChange())
      }>
        <div className="ml-14 *:text-center *:text-white flex items-center flex-col">
          <h2 className="border-b-2 border-white text-7xl mt-6 mb-8">{city}</h2>
          <ul>
            <li className="text-6xl">{main}</li>
            <li className="mt-3 text-3xl">{description}</li>
          </ul>
        </div>
        <div className="flex items-center">
          <img className={'block w-[15rem] h-auto object-contain'} src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt="Weather Icon" />
        </div>
      </div>


      <div className={'h-[400px]  w-1/2 mx-auto rounded-3xl flex justify-around z-0' + (
        icon === ''
          ? ' hidden'
          : ' block animate-fade-in-bottom'
        ) + (bgChange())
      }>
        <div className="ml-14 *:text-center *:text-white flex items-center flex-col rotate-rotate-y--180">
          <h2 className="border-b-2 border-white text-7xl mt-6 mb-8">{city}</h2>
          <ul>
            <li className="text-6xl">{temp}</li>
            <li className="mt-3 text-3xl">{temp_max}</li>
            <li className="mt-3 text-3xl">{temp_min}</li>
            <li className="mt-3 text-3xl">{humidity}</li>
          </ul>
        </div>
        <div className="flex items-center">
          <img className={'block w-[15rem] h-auto object-contain'} src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt="Weather Icon" />
        </div>
      </div>
    </div>
  )
}