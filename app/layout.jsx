import '@styles/globals.css';
import Navbar from '@components/Navbar';


export const metadata ={
    title : "Image Creation",
    description : "Prototype for the synthetic medical image creation "
}
const Rootlayout = ({children}) => {
  return (
          <html lang='en'>
            <body>
                <div className='main'>
                    <div className='gradient'/>
                 </div>
                 <main className='app'>
                    <Navbar/>
                    {children}

                 </main>
            </body>

        </html>
  )
}

export default Rootlayout;