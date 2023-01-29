import DashboardNavbar from "../../../components/navigation/DashboardNavbar";
import CardsSection from "../../../components/dashboard/CardsSesction";
import AdminDashboardSidebar from "../../../components/dashboard/admin/AdminDashboardSidebar";
import AdminDashboardMobileNavbar from "../../../components/navigation/AdminDashboardMobileNavbar";
import { collection, getDocs } from "firebase/firestore";
import { fireStore } from "../../../firebase";
import { useState, useEffect } from "react";


export default function AdminDashboard() {

  const [totalListings, setTotalListings] = useState(0);
  const [pendingListings, setPendingListings] = useState(0);
  const [totalApplications, setTotalApplications] = useState(0);
  const [doneDeals, setDoneDeals] = useState(0);

  const querySnapshot = getDocs(collection(fireStore, "properties"));
    const getListings = async () => {
      let counter = 0
      let pendingCounter = 0
    await querySnapshot.then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
          if(doc.data().isApproved === true){
            counter++
          }else{
            pendingCounter++
          }
      });
      setTotalListings(counter)
      setPendingListings(pendingCounter)
    });
  };

  const getApplications = () => {
    let counter = 0;
    getDocs(collection(fireStore, "applications")).then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        counter++
      })
      setTotalApplications(counter)
    })
  }
  const getDoneDeals = () => {
    let counter = 0;
    getDocs(collection(fireStore, "donedeals")).then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        counter++
      })
      setDoneDeals(counter)
    })
  }

  useEffect(() => {
    getListings();
    getApplications();
    getDoneDeals();
  }, []);

  return (
    <div className="font-quicksand">
      <DashboardNavbar />
      <div className="flex flex-col md:grid md:grid-cols-5 px-32">
        <div className="hidden md:flex flex-col md:px-12">
          <AdminDashboardSidebar />
        </div>
        <div className="flex flex-col p-4 md:col-span-3">
          <div className="flex items-center justify-between p-4">
            <text className="text-3xl font-bold">Dashboard</text>
            <div className="flex items-center justify-center flex-wrap md:hidden">
              <AdminDashboardMobileNavbar />
            </div>
          </div>
          <CardsSection totalApplications={totalApplications} totalListings={totalListings} doneDeals={doneDeals} pendingListings={pendingListings}/>
        </div>
      </div>
    </div>
  );
}
