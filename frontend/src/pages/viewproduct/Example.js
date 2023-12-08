import React, { useState } from 'react'

const Example = ({product}) => {
    const [activeImg, setActiveImage] = useState(product.photos_directory.imageUrl[0])

    return (
        <div className='flex flex-col justify-between lg:flex-row gap-16 lg:items-center '>
            <div className='flex flex-col gap-6 lg:w-2/4'>
                <img src={activeImg} alt="" className='w-25 h-25 aspect-square object-cover rounded-xl'/>
                <div className='flex flex-row justify-between h-24'>
                  {(product.photos_directory.imageUrl).map((image) =>
                  <img src={image} alt={product.name} className='w-24 h-24 rounded-md cursor-pointer' onClick={() => setActiveImage(image)}/>
                   )}
                </div>
            </div>
            {/* ABOUT */}
            <div className='flex flex-col gap-4 lg:w-2/4'>
                <div>
                    <span className=' text-violet-600 font-semibold'>Special Sneaker</span>
                    <h1 className='text-3xl font-bold'>Nike Invincible 3</h1>
                </div>
                <p className='text-gray-700'>
                Con un'ammortizzazione incredibile per sostenerti in tutti i tuoi chilometri, Invincible 3 offre un livello di comfort elevatissimo sotto il piede per aiutarti a dare il massimo oggi, domani e oltre. Questo modello incredibilmente elastico e sostenitivo, è pensato per dare il massimo lungo il tuo percorso preferito e fare ritorno a casa carico di energia, in attesa della prossima corsa.
                </p>
                <p className='text-gray-700'>
                <span className=' text-violet-600 font-semibold'>Address : </span>
                163 Calumet Street, Boston, MA, 02120
                </p>
                <h6 className='text-2xl font-semibold'>$ 199.00</h6>
                <div className='flex flex-row items-center gap-12'>
                    <a href="#" className="inline-block rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-center font-medium text-white hover:bg-indigo-700">
                    Rent now
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Example
