import { getSelfByUsername } from "@/lib/auth-service";
import { redirect } from "next/navigation";
import Navbar from "./_components/navbar";
import { DashBoardSideBar } from "./_components/dashboardsidebar";
import { DashBoardChildrenContainer } from "./_components/DashBoardChildrenContainer";

interface DashBoardLayoutProps {
  params: { username: string };
  children: React.ReactNode;
}

const DashBoardLayout = async ({ params, children }: DashBoardLayoutProps) => {
  const self = await getSelfByUsername(params.username);
  if (!self) {
    redirect("/");
  }

  return (
    <>
      <Navbar />
      <div className="flex h-full pt-20">
        <DashBoardSideBar />
        <DashBoardChildrenContainer>{children}</DashBoardChildrenContainer>
      </div>
    </>
  );
};

export default DashBoardLayout;
