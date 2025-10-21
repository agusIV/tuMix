import {createContext, useContext, useState, useEffect} from "react";
import type {ReactNode} from "react"

const DispositivoContext = createContext({esMovil: false})

interface DispositivoProps {
  children: ReactNode
}

export const DispositivoProovedor = ({children}: DispositivoProps) => {
  const [esMovil, setEsMovil] = useState(false)

  useEffect(() => {
    const checkearDispositivo = () => {
      const userAgent = navigator.userAgent.toLowerCase()
      const movil = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent)
      setEsMovil(movil)
    }

    checkearDispositivo()

    window.addEventListener('resize', checkearDispositivo);
    window.addEventListener('orientationchange', checkearDispositivo);
    // remover event listeners al desmontar
    return () => {
      window.removeEventListener('resize', checkearDispositivo);
      window.removeEventListener('orientationchange', checkearDispositivo);
    };
  }, [])

  return (
    <DispositivoContext.Provider value={{esMovil}}>
      {children}
    </DispositivoContext.Provider>
  )
}

export const useDispositivo = () => useContext(DispositivoContext)
