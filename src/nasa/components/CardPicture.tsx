import { Picture } from '../interfaces/pictureInterface'

interface Props {
  data: Picture
}

export const CardPicture=({ data }: Props) => {
  return (
    <div className="bg-base-100 shadow-sm mx-auto overflow-hidden p-0 border border-gray-400 rounded-2xl">
      <figure className='h-full'>
        <img className='h-full object-cover' src={data?.url} alt={data.title} />
      </figure>
      <div className="p-6 h-full w-full">
        <h2 className="font-bold text-xl mb-2 relative top-0">{data?.title}</h2>
      </div>
      <div className="block w-full justify-end">
        <span className='font-bold'>{data?.description}</span>
      </div>
    </div>
  )
}