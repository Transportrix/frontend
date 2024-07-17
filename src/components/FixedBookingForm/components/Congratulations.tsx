import FramerWrapper from "@/components/FramerWrapper";
import { fadeIn } from "@/lib/animations";
import Image from 'next/image';

function Congratulations() {
    
    return ( 
        <FramerWrapper {...fadeIn} className="flex flex-col min-h-screen">
            <div className="flex flex-1 justify-center items-center space-x-4 p-8">
                {/* Left Container with Text */}
                <div className="flex-1 bg-white p-8 rounded-lg shadow-lg">
                    <h2 className="text-3xl font-bold mb-4">Congratulations!</h2>
                    <p>Your achievement is remarkable. Celebrate this moment!</p>
                </div>
                {/* Right Container with Image */}
                <div className="flex-1 bg-white p-8 rounded-lg shadow-lg flex items-center justify-center">
                    <Image
                        src="/https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx2psfOvbDLrO2ZGJ7sTN8MKWf0Zq5KCEWag&s" // Replace with your image path
                        alt="Celebratory Image"
                        width={300} // Set appropriate width
                        height={300} // Set appropriate height
                        className="rounded-lg"
                    />
                </div>
            </div>
            {/* Continue Button */}
           
        </FramerWrapper>
    );
}

export default Congratulations;