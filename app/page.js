// Name: Jan Luan
// UTorID: luanjan
// app/page.js
export default function Home() {
    return (
        <div className="w-full h-screen flex flex-col bg-gradient-to-b from-[#db4439] to-[#75241e] overflow-hidden">
            <nav className="flex justify-between items-center p-6 text-2xl font-bold text-[#eaecd7] font-['Inknut_Antiqua']">
                <div className="flex space-x-8">
                    <span>Home</span>
                    <span>Coffee</span>
                    <span>Bagels</span>
                    <span>Tea</span>
                    <span>Sandwich</span>
                </div>
            </nav>

            <div className="absolute top-6 right-10 w-[150px] h-[52px] bg-[#eaecd7] rounded-full flex items-center justify-center text-[#db4439] text-base font-black font-['Inknut_Antiqua']">
                Login
            </div>

            <div className="flex flex-grow items-center justify-center px-8 gap-12">
                <div className="text-left max-w-xl">
                    <h1 className="text-[#eaecd7] text-[80px] font-black font-['Inknut_Antiqua'] leading-[100px]">
                        Welcome
                    </h1>
                    <p className="text-[#eaecd7] text-[30px] font-semibold font-['Inknut_Antiqua'] leading-[40px] mt-4">
                        The best coffee shop
                    </p>
                </div>

                <div className="relative w-[400px] h-[400px]">
                    <img
                        className="absolute top-[-30px] left-1/2 transform -translate-x-1/2 w-[420px] h-[450px]"
                        src="https://images.pexels.com/photos/1170659/pexels-photo-1170659.jpeg?cs=srgb&dl=art-bread-brown-1170659.jpg&fm=jpg"
                        alt="Placeholder"
                    />
                </div>
            </div>

            <footer className="w-full h-[80px] bg-white flex justify-around items-center text-[#db4439] text-xl font-black font-['Inknut_Antiqua']">
                <span>Coffee</span>
                <span>Bagels</span>
                <span>Tea</span>
                <span>Contact me</span>
                <span>Privacy policy</span>
            </footer>
        </div>
    );
            }
