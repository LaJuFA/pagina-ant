import React from 'react'

const footer = () => {
  return (
    <footer className='bg-black text-white pt-8 flex justify-center w-screen'>
        <div className='mx-auto flex-column w-screen'>
            <div className='flex gap-5 justify-center'>
                <div className='border'>
                    <p>esto es una carta con texto</p>
                </div>
                <div className='border'>
                    <p>esto es una carta con texto</p>
                </div>
                <div className='border'>
                    <p>esto es una carta con texto</p>
                </div>
            </div>
            <div className='flex-column'>
                <div className='flex flex-wrap justify-between items-center px-8'>
                    <div className='bold py-4 flex-column'>
                        <h1 className='text-yellow text-lg'>YTS</h1>
                        <p className='text-sm'>"Damos voz a las historias que viven en los márgenes."</p>
                    </div>
                    <div className='flex-column'>
                        <h1>contactenos</h1>
                        <button>Aqui</button>
                    </div>
                </div>
                <div className='bg-black text-center py-1'>
                    <p>© 2024 Yellow Tapes Studios. Todos los derechos reservados.</p>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default footer