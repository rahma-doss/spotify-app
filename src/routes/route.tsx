import Sidebar from "../components/layout/SideBar";
import MainContent from "../pages/MainContent"
import Callback from "../lib/Callback";

export default function Root() {
   
 
  

    return (
        <div className="h-screen min-w-[50rem] grid overflow-hidden grid-cols-[min-content_auto] gap-y-2 p-2 ">
            <Callback />
            <Sidebar />

          



                <MainContent />

                

                {/* <Footer /> */}
          

             <aside className="col-span-2 h-16  flex justify-between rounded-sm items-center 
             bg-gradient-to-r  from-fuchsia-600 to-blue-300  px-4 py-3">
                <p>
                    <span className="block text-sm tracking-wider">
                        PREVIEW OF SPOTIFY
                    </span>
                    Sign up to get unlimited songs and podcasts with occasional ads. No
                    credit card needed.
                </p>

      
            </aside> 
        </div>
    );
}