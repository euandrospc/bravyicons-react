import './App.css'
import * as BravyIcons from 'bravyicons-react'
import React from 'react'
import { toast } from 'sonner'

type IconComponent = React.ComponentType<{ className?: string }>
type BravyIconsModule = Record<string, IconComponent | unknown>

function App() {
  const [iconSize, setIconSize] = React.useState(24)
  const [searchTerm, setSearchTerm] = React.useState('')

  const iconNames = Object.keys(BravyIcons).filter(name =>
    name !== 'icons' &&
    name !== 'createBravyIconsComponent' &&
    name !== 'default'
  )

  const filteredIcons = iconNames.filter(iconName =>
    iconName.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleCopyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      toast.success('Ícone copiado para a área de transferência!')
    })
  }

  return (

    <div className="relative min-h-screen w-full">

      <div className="min-h-screen w-full relative bg-black">
        <div
          className="absolute inset-0 z-0"
          style={{
            background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(99, 102, 241, 0.25), transparent 70%), #000000",
          }}
        />

        <div className="relative w-full z-10 flex flex-col min-h-screen items-center justify-center p-4">
          <header className='text-center mb-8'>
            <h1 className='text-white text-4xl font-bold mb-2'>Bravyicons React</h1>
            <p className='text-gray-400 text-lg mb-6'>
              {filteredIcons.length} de {iconNames.length} ícones
            </p>
            <div className='flex flex-col sm:flex-row items-center justify-center gap-4 mb-4'>
              <div className='flex items-center gap-2'>
                <label htmlFor="search" className='text-white text-sm'>Pesquisar:</label>
                <input
                  id="search"
                  type="text"
                  placeholder="Digite o nome do ícone..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className='px-3 py-2 rounded-lg bg-white/10 text-white placeholder-gray-400 border border-white/20 focus:border-blue-400 focus:outline-none transition-colors duration-200 w-64'
                />
              </div>

              <div className='flex items-center gap-2'>
                <label htmlFor="size" className='text-white text-sm'>Tamanho:</label>
                <input
                  id="size"
                  type="range"
                  min="16"
                  max="64"
                  value={iconSize}
                  onChange={(e) => setIconSize(Number(e.target.value))}
                  className='w-24 accent-purple-500'
                />
                <span className='text-white text-sm w-8'>{iconSize}px</span>
              </div>
            </div>
          </header>
          {filteredIcons.length === 0 ? (
            <div className='text-center py-12'>
              <p className='text-gray-400 text-lg'>Nenhum ícone encontrado para "{searchTerm}"</p>
              <p className='text-gray-500 text-sm mt-2'>Tente usar outros termos de pesquisa</p>
            </div>
          ) : (
            <div className='grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 2xl:grid-cols-12 gap-4'>
              {filteredIcons.map((iconName) => {
                const IconComponent = (BravyIcons as BravyIconsModule)[iconName] as IconComponent

                return (
                  <div
                    key={iconName}
                    className='group cursor-pointer isolate flex justify-center items-center flex-col py-4 px-2 aspect-video rounded-xl bg-white/10 hover:bg-white/20 shadow-lg ring-1 ring-black/5 transition-all duration-200'
                    title={`${iconName} - Clique para copiar`}
                    onClick={() => handleCopyToClipboard(`import { ${iconName} } from 'bravyicons-react'`)}
                  >
                    <div
                      className='text-white mb-2 group-hover:text-blue-400 transition-colors duration-200'
                      style={{
                        width: `${iconSize}px`,
                        height: `${iconSize}px`,
                        minWidth: `${iconSize}px`,
                        minHeight: `${iconSize}px`
                      }}
                    >
                      <IconComponent className='w-full h-full' />
                    </div>
                    <span className='text-gray-400 text-xs text-center truncate w-full group-hover:text-white transition-colors duration-200'>
                      {iconName}
                    </span>
                  </div>
                )
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default App
