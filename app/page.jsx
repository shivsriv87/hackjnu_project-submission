import Feed from '@components/Feed';
const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
         <h1 className="head_text text-center orange_gradient">Synthetic 
         <br className="max-md:hidden"/>
         <span className="orange_gradient text-center">
         Medical Image Creation 
         </span>

         </h1>
         <p className="desc text-center">
            
Innovative web app enabling healthcare facilities to generate synthetic medical images for enhanced training, research, and diagnostic purposes.

         </p>















         
     <Feed/>
    </section>

  )
}

export default Home