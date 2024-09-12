import { useEffect, useState } from 'react';
import img2 from './components/Wind.png'


function App() {

  // Functionality for fetching the API
  const [prec,setPrec] = useState("0");
  const [Temp,setTemp] = useState("0");
  const [wind,setWind] = useState("0");
  const [humidity,setHumidity] = useState("0");
  const [uv,setUv] = useState("0");

  // After clicking Search Button 
  const handeler = () => {
    let val = document.getElementById("inputField").value;
    const city = document.getElementById("cityName");

    if(val){
      fetch(`https://api.weatherapi.com/v1/current.json?key=7d4d42c463494c43b16115458240405&q=${val}&aqi=no`)
      .then((res) => res.json())
      .then((item) => {

        console.log(item);

        if(item.error){
          city.innerText = `Data not found for ${val}`;
        }
        else{
          setPrec(item.current.cloud);
          setTemp(item.current.temp_c);
          setHumidity(item.current.humidity);
          setWind(item.current.wind_kph);
          setUv(item.current.uv);
          city.innerText = `${item.location.name} Weather`;
        }
      })
    }
    else{
      city.innerText = `Please Enter city`;
    }
  }

  // Functionality for Dark Mode
  const [themeMode,setThemeMode] = useState("light");

  const DarkMode = () => {
    if(themeMode === "light"){
      setThemeMode("dark");
    }
    else{
      setThemeMode("light");
    }
  }

  useEffect(() => {
    const cards = document.querySelectorAll(".card");

    document.getElementById("box").classList.remove("light","dark");
    document.getElementById("box").classList.add(themeMode);

    document.getElementById("inputField").classList.remove("light","dark");
    document.getElementById("inputField").classList.add(themeMode);
    
    cards.forEach((card) => {
      card.classList.remove("light", "dark");
      card.classList.add(themeMode);
    })

  },[themeMode]);

  return (
    <>
    <div className="w-full h-screen bg-[#242424] flex flex-col justify-center items-center">
      {/* This is Weather App wrapper */}
      <div className='w-[40%]  border-2 rounded-lg'>

        {/* This is For Header */}
        <div className="flex justify-between py-5 rounded-t-lg text-[#2b1c1f] font-bold bg-slate-600">
            <div className='w-[40px] h-[40px] overflow-hidden'>
              <button onClick={DarkMode}><img src="https://c8.alamy.com/comp/2FKTDCK/dark-mode-switch-logo-icon-vector-day-night-switch-sticker-dark-and-light-mode-switcher-day-and-night-mode-gadget-application-vector-on-isolated-2FKTDCK.jpg" alt="Night Mode" className='w-full h-full object-cover rounded-full'/></button>
            </div>
            <h2 className="text-3xl">Weather App</h2>
            <div className='w-[40px] h-[40px] overflow-hidden'><img src="https://www.shutterstock.com/image-vector/palm-tree-icon-summer-travel-260nw-1448765705.jpg" alt="Tree logo" className='rounded-full'/></div>
        </div>

        {/* This is for main container */}
        <div className='rounded-b-lg text-white p-4' id='box'>

          {/* This is For SearchBar Field */}
          <div className="py-6 flex justify-center gap-5">
            <input className="rounded p-1 text-black" type="text" placeholder='Search Place' id='inputField'/>
            <button className="bg-gray-400 rounded px-4 text-black font-bold" onClick={handeler}>Search</button>
          </div>

          {/* This is for Card Container */}
          <div className='flex flex-col justify-center items-center mt-4'>
            <h1 className='text-lg font-bold text-blue-700' id='cityName'>Enter The City</h1>
            <div className='w-full flex gap-2 p-5 overflow-x-scroll'>

              <div className="border flex flex-col justify-around p-4 rounded-lg card">
                <div className='w-[150px] h-[80px] overflow-hidden'>
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYYkwQOhasvnT_SaZDxLtjoRpkUtAI1IUODA&s" alt="Logo" className='w-full h-full object-cover rounded' />
                </div>
                <div className='flex flex-col justify-center items-center mt-4'>
                  <h1 className='text-xl'>Precipitation</h1>
                  <div className='text-3xl'>{prec} %</div>
                </div>
              </div>

              <div className="border flex flex-col justify-around p-4 rounded-lg card">
                <div className='w-[150px] h-[80px] overflow-hidden'>
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzW0_E4nj-VfUU_r5IZ-sokUTBtENwE3Y_OdQqDcW9hlls7sZrei3ELWklgEN-K_tK1oA&usqp=CAU" alt="Logo" className='w-full h-full object-cover rounded' />
                </div>
                <div className='flex flex-col justify-center items-center mt-4'>
                  <h1 className='text-xl'>Temperature</h1>
                  <div className='text-3xl'>{Temp} &deg;C</div>
                </div>
              </div>

              <div className="border flex flex-col justify-around p-4 rounded-lg card">
              <div className='w-[150px] h-[80px] overflow-hidden'>
                  <img src={img2} alt="Logo" className='rounded' />
                </div>
                <div className='flex flex-col justify-center items-center mt-4'>
                  <h1 className='text-xl'>Wind</h1>
                  <div className='text-3xl'>{wind} <span className='text-lg'>km/hr</span></div>
                </div>
              </div>

              <div className="border flex flex-col justify-around p-4 rounded-lg card">
                <div className='w-[150px] h-[80px] overflow-hidden'>
                  <img src="https://www.shutterstock.com/image-vector/humidity-icon-weather-sensor-label-260nw-501091528.jpg" alt="Logo" className='w-full h-full object-cover rounded' />
                </div>
                <div className='flex flex-col justify-center items-center mt-4'>
                  <h1 className='text-xl'>Humidity</h1>
                  <div className='text-3xl'>{humidity} %</div>
                </div>
              </div>

              <div className="border flex flex-col justify-around p-4 rounded-lg card">
                <div className='w-[150px] h-[80px] overflow-hidden'>
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRefMsFHbEi8vsnC0yUWACfGhjr0V7YLA7sKA&s" alt="Logo" className='w-full h-full object-cover rounded' />
                </div>
                <div className='flex flex-col justify-center items-center mt-4'>
                  <h1 className='text-xl'>UV Radiation</h1>
                  <div className='text-3xl'>{uv}</div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </div>
    </>
  )
}

export default App
