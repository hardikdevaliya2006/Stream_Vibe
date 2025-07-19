import streamvibeborderlogo from '../../../../public/Logo/streamvibeborderlogo.svg';
import streamvibeplayerlogo from '../../../../public/Logo/streamvibeplayerlogo.svg';

const StreamVibeSppiner = () => {
  return (
    <div className='loaderContainer fixed h-full'>
      <div className="w-full h-full flex items-center justify-center">
        <div className="outerWrap sm:w-24 xss:h-18 xss:w-18 sm:h-24"> 
          <img src={streamvibeborderlogo} alt="streamvibeborderlogo" />
        </div>
        <div className="innerwrap h-4 w-4">
          <img src={streamvibeplayerlogo} alt="streamvibeborderlogo" />
        </div>
      </div>
    </div>
  )
}

export default StreamVibeSppiner