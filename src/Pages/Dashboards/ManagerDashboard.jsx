
import AdminHeader from "../../Components/Headers/AdminHeader";
import Footer from "../../Components/Headers/Footer";
import StatsTabel from "../../Components/Stats/StatsTabel";
import Table from "../../Components/Table/Table";
export default function ManagerDashboard() {
  return (
    <>
      <div className="flex flex-col min-h-screen m-auto">
        <AdminHeader />
        <div className="container max-w-lg m-auto py-3 text-center">
        <h2 className="text-2xl">Welcome Manager</h2>
        </div>
        <div className="container p-10 space-x-4 text-center">
          <StatsTabel title="Forms" count="40" desc="Total Forms Created" />
          <StatsTabel title="Forms" count="40" desc="Total Forms Created" />
          <StatsTabel title="Forms" count="40" desc="Total Forms Created" />
        </div>
        <div className="container max-w-[900px] shadow-lg rounded-lg p-5 m-auto">
          <Table />
        </div>
        <Footer />
      </div>
    </>
  );
}
