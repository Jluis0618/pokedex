
import { tailspin } from 'ldrs'

export const Loader = () => {

  tailspin.register()

  return ( 
    <div className="container-loader">
    <l-tailspin
      size="40"
      stroke="5"
      speed="0.9" 
      color="black" 
    ></l-tailspin>
    </div>
  )
}
