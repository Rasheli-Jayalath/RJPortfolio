import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./iit.png"
								alt="IIT"
								className="work-image"
							/>
							<div className="work-title">Assistant Lecturer</div>
							<div className="work-subtitle">
								Informatics Institute of Technology (IIT Campus)
							</div>
							<div className="work-duration">Sep 2023 - Aug 2024</div>
						</div>

						<div className="work">
							<img
								src="./SJ.png"
								alt="SJ"
								className="work-image"
							/>
							<div className="work-title"> Junior Programmer</div>
							<div className="work-subtitle">
								Surbana Jurong Group
							</div>
							<div className="work-duration">June 2021 - March 2024</div>
						</div>
					</div>
				}
			/>
				<Card
				icon={faBriefcase}
				title="Education"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./lut.png"
								alt="LUT"
								className="work-image"
							/>
							<div className="work-title">MEng, Data Centric Engineering</div>
							<div className="work-duration">Aug 2024 - Present</div>
							<div className="work-subtitle">							
								Lappeenranta University of Technology, Finland
							</div>
							
						</div>

						<div className="work">
							<img
								src="./uow.png"
								alt="UOW"
								className="work-image"
							/>
							<div className="work-title">BEng (Hons) Software Engineering </div>
							<div className="work-subtitle">							
								University of Westminster London 
							</div>
							<div className="work-duration">Sep 2019 - June 2024</div>
						</div>
					</div>
				}
			/>
		</div> 
		
	);
};

export default Works;
