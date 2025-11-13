// import { usePictures } from '../hooks/usePictures'
import { CardPicture } from './CardPicture'
import data from '../data/data.json'

export const CardList=() => {
  // const { data } = usePictures()
  return (
    <div className='max-w-6xl mx-auto flex flex-col h-full px-9'>
      <div className='p-4 px-3'>
        <h1 className='text-black font-bold text-sm text-center lg:text-2xl'>
          Find your next inspiration, learn something new, or share your own video to help others grow!
        </h1>
      </div>
      <div className='mx-auto grid grid-col-2 md:grid-cols-3 gap-2.5 flex-1 flex-grow my-2'>
        {
          data?.map( picture => (
            <CardPicture key={picture.url} data={ picture }/>
          ))
        }
      </div>
      {
        data?.length == 0 && (
          <div className='flex justify-center items-center h-full'>
            <h1 className='text-black font-bold text-xl text-center lg:text-6xl'>
              No pictures found
            </h1>
          </div>
        )
      }
      {/* <div className='flex justify-between items-center my-12'>
          <button
            disabled={ page == 1 }
            onClick={prevPage}
            className='text-white font-bold w-[120px] p-2 bg-black rounded-md hover:bg-slate-800 transition-all disabled:cursor-not-allowed disabled:bg-slate-700'
          >
            previous
          </button>
          <span>{ page }</span>
          <button
            onClick={nextPage}
            className='text-white font-bold w-[120px] p-2 bg-black rounded-md hover:bg-slate-800 transition-all'
          >
            next
          </button>
      </div> */}
    </div>
  )
}