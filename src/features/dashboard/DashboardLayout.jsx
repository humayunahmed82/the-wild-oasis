import styled from "styled-components";

const StyledDashboardLayout = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	grid-template-rows: auto 34rem auto;
	gap: 2.4rem;
`;

import React from "react";

const DashboardLayout = () => {
	return (
		<div className="grid grid-cols-4 grid-rows-[auto_34rem_auto] gap-10">
			<div className="">Statistics</div>
			<div className="">Today's activity</div>
			<div className="">Chart stay durations</div>
			<div className="">Chart sales</div>
		</div>
	);
};

export default DashboardLayout;
