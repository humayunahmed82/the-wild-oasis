import DashboardFilter from "../features/dashboard/DashboardFilter";
import DashboardLayout from "../features/dashboard/DashboardLayout";

const Dashboard = () => {
	return (
		<>
			<div className="flex justify-between items-center">
				<h1 className="text-5xl font-semibold">Dashboard</h1>
				<DashboardFilter />
			</div>

			<DashboardLayout />
		</>
	);
};

export default Dashboard;
