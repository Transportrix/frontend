import Image from "next/image";
import BackAndContinueControls from "./BackAndContinueControls";

function FlexiCongratulations() {
    return ( 
        <div>
             Congrats @Bismark
     <div className="h-full bg-primary-100  w-full">
        <div className="flex items-center justify-center">
           
            <div>
            <Image
                        src="/Frame 5262.png" // Ensure this image path is correct
                        alt="Bus"
                        className="bus-details-image"
                        width={486}  
                        height={385}
                    
                      />
                    <div>
                      <p className="text-2xl font-bold ml-8 text-white">CONGRATULATIONS</p>
                      <p className="ml-8  text-white">X-X-X-X-X-X-X  is yours.</p>
                    </div >
            </div>
        </div>
    </div>
    <BackAndContinueControls />

 </div>
     );
}

export default FlexiCongratulations;