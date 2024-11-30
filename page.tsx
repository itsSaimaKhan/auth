import Image from "next/image";



import Dashboard from "../../components/Dashboard";


export default function Home() {
  return (
   <main className="bg-[#122e4a] h-screen flex items-center justify-center pt-2 py-10 "  >
    
    <div className=" grid h-80 w-80 grid-col-1 bg-white md:grid-col-2">
      <div className="bg-[#20272e] text-white flex items-center justify-center flex-col">
        <div className="my-6">
          <h1 className="text-3xl font-semibold "> WELCOME</h1>  <br/>     <br/>

        
          <Dashboard/>   
 
    </div>
    </div>
    </div>
    
   </main>
  );
}
