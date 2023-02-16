import DashboardNavbar from "../navigation/DashboardNavbar";
import AgentDashboardSidebar from "../dashboard/agent/AgentDashboardSidebar";
import DashboardMobileNavbar from "../navigation/DashboardMobileNavbar";
import React from "react";

interface LayoutProps {
    children:any
    title:string;
}

const AgentDashBoardLayout = ({children, title}:LayoutProps) => {
    return(
        <div className="font-quicksand">
            <DashboardNavbar />
            <div className="flex-col md:flex md:flex-row md:px-32">
                <div className="hidden md:flex flex-col md:px-12">
                    <AgentDashboardSidebar />
                </div>
                <div className="flex-col p-4">
                    <div className="flex items-center justify-between p-4">
                        <text className="text-3xl font-bold">{title}</text>
                        <div className="flex items-center justify-center flex-wrap md:hidden">
                            <DashboardMobileNavbar />
                        </div>
                    </div>
                    <div className="w-full">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AgentDashBoardLayout