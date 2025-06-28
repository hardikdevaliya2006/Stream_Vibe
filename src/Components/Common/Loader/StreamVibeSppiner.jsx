import streamvibeborderlogo from '../../../../public/Logo/streamvibeborderlogo.svg';
import streamvibeplayerlogo from '../../../../public/Logo/streamvibeplayerlogo.svg';

const StreamVibeSppiner = () => {
  return (
    <div className='loaderContainer h-full'>
      <div className="w-full h-full flex items-center justify-center">
        <div className="outerWrap h-18 w-18"> 
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