import React from "react";
import INFO from "../data/user";

function article_1() {
	return {
		date: "January 2025",
		title: "Digitalization in University-Industry Collaboration",
		description:
			"Exploring how digital transformation reshapes academic-industry partnerships, balancing innovation, research, and industrial demands.",
		keywords: [
			"Digitalization in University-Industry Collaboration",
			"Rashelli",
			"Rasheli NJ",
			"Rasheli Jayalath",
		],
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph">{INFO.articles.article1_intro}</div>
					<a href="http://dx.doi.org/10.13140/RG.2.2.14911.21926" target="_blank" rel="noopener noreferrer">
						<img
							src={`${process.env.PUBLIC_URL}/ART1.png`}
							alt="article1"
							className="artImage"
						/>
					</a>
				</div>
			</React.Fragment>
		),
	};
}

function article_2() {
	return {
		date: "January 2025",
		title: "Createch for Small Business Productivity",
		description:
			"Examining how technology-driven solutions enhance efficiency, decision-making, and sustainability in small businesses.",
		style: ``,
		keywords: [
			"Createch for Small Business Productivity",
			"Rashelli",
			"Rasheli NJ",
			"Rasheli Jayalath",
		],
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph">{INFO.articles.article2_intro}</div>
					<a href="http://dx.doi.org/10.13140/RG.2.2.26058.89288" target="_blank" rel="noopener noreferrer">
						<img
							src={`${process.env.PUBLIC_URL}/ART2.png`}
							alt="article2"
							className="artImage"
						/>
					</a>
				</div>
			</React.Fragment>
		),
	};
}

const myArticles = [article_1, article_2];

export default myArticles;
