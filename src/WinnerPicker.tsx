import { useEffect, useState } from 'react';
import { BeatLoader } from 'react-spinners';
import { contestants } from './contestants';

const WinnerPicker = () => {
  const [winner, setWinner] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const pickWinner = () => {
    const randomIndex = Math.floor(Math.random() * contestants.length);
    const selectedWinner = contestants[randomIndex];
    setIsLoading(true);
    setWinner(selectedWinner);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => {
      clearTimeout(timeout);
    };
  }, [winner]);

  return (
    <div
      style={{ minHeight: '100vw', position: 'fixed' }}
      className=' w-screen flex flex-col justify-center items-center bg-xmasLight bg-no-repeat bg-cover bg-center bg-fixed'
    >
      <div className='relative inline-flex group'>
        <div className='absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt'></div>
        {!winner && !isLoading && (
          <button
            onClick={pickWinner}
            className='cursor-pointer relative inline-flex items-center justify-center px-10 py-6 text-[50px] bg-[rgba(0,0,0,.15)] text-white transition-all duration-200  font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 font-xmas'
          >
            Pick a Winner
          </button>
        )}
      </div>
      {winner && !isLoading && (
        <div className='flex flex-col items-center justify-center'>
          <p className='text-[red] text-[75px] mb-5 animate-bounce font-dancing italic'>
            Congratulations!
          </p>
          <p className='bg-gradient-to-r from-blue-800 via-[#3c8d0d] to-orange-500 inline-block text-transparent bg-clip-text text-[100px] animate-pulse font-xmas font-[700]'>
            {' '}
            {winner}
          </p>
        </div>
      )}
      {isLoading && <BeatLoader className='h-50' color='white' />}
    </div>
  );
};

export default WinnerPicker;
