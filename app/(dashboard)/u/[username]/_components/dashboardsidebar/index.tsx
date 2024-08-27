import { DashboardNavigation } from "./DashboardNavigation"
import DashboardSidebarToggle from "./DashboardSidebarToggle"
import { DashboardSideWrapper } from "./dashboardsidewrapper"

export const DashBoardSideBar = () =>{
    return(
        <DashboardSideWrapper>
            <DashboardSidebarToggle />
            <DashboardNavigation />
        </DashboardSideWrapper>
    )
}