export const Form = (props: any) => {
  return (
      <div>
          <form className="text-center flex justify-center mt-6 mb-20" onSubmit={props.getWeather}>
              <input className="block w-2/5 h-20 text-4xl border-blue-500 border-2 bg-gray-200 rounded-md" type="text" placeholder="City Name" onChange={e => {
                props.setCity(e.target.value)
                props.setResultFront({
                    icon: '',
                })
                }
            }/> 
              <button className="bg-blue-500 hover:bg-blue-300 text-white font-bold py-2 px-4 h-20 rounded transition">Search!!</button> 
          </form>
      </div>
  );
};
 