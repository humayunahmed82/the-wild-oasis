import Spinner from "../../ui/Spinner";
import TodayItem from "./TodayItem";

import { useTodayActivity } from "./useTodayActivity";

const TodayActivity = () => {
	const { isLoading, activities } = useTodayActivity();

	return (
		<div className="bg-white dark:bg-[#18212f] border border-solid border-gray-100 dark:border-gray-800 rounded-lg p-[3.2rem] flex flex-col gap-[2.4rem] col-span-2 pt-10">
			<div className="flex justify-between items-center">
				<h2 className="text-[2rem] font-semibold">Today</h2>
			</div>

			{!isLoading ? (
				activities?.length ? (
					<ul className="overflow-y-auto overflow-x-hidden [&::-webkit-scrollbar]:w-0">
						{activities.map((activity) => (
							<TodayItem activity={activity} key={activity.id} />
						))}
					</ul>
				) : (
					<p className="text-center text-3xl font-medium mt-3">
						No Activity Today...
					</p>
				)
			) : (
				<Spinner />
			)}
		</div>
	);
};

export default TodayActivity;
