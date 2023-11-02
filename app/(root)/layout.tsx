import { NavBar } from "@/components/navbar";
import { Sidebar } from "@/components/sidebar";

const RootLayout = ({
    children
}:{
    children: React.ReactNode;
}) => {
    return (  
        <div className="h-full">
            <NavBar/>
            <div className="hidden md:flex mt-16 flex-col fixed inset-y-0">
              <Sidebar/>
            </div>
            <main className="mt:2 md:pl-20 pt-16 h-full">
            {children}
            </main>
            
        </div>
    );
    
}

 
export default RootLayout;