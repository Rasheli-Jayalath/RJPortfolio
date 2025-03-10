import React, { useEffect , useState} from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/about.css";

const About = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "about");

		// State to control popup modal
		const [popupImage, setPopupImage] = useState(null);

		const openPopup = (image) => {
			setPopupImage(image);
		};
	
		const closePopup = () => {
			setPopupImage(null);
		};

	return (
		<React.Fragment>
			<Helmet>
				<title>{`About | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="about" />
				<div className="content-wrapper">
					<div className="about-logo-container">
						<div className="about-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="about-container">
						<div className="about-main">
							<div className="about-right-side">
								<div className="title about-title">
									{INFO.about.title}
								</div>

								<div className="subtitle about-subtitle">
									{INFO.about.description}
								</div>
									{/* About Extra Images Section */}		
								<div className="about-extra-images">
									<div className="image-item" onClick={() => openPopup("./Work1.png")}>
										<img src="./work1.png" alt="Work 1" className="about-extra-image" />
										<div className="image-title">My Journey as an Assistant Lecturer</div>
									</div>
									<div className="image-item" onClick={() => openPopup("./grad.png")}>
										<img src="./grad.png" alt="Work 2" className="about-extra-image" />
										<div className="image-title">Convocation</div>
									</div>
								</div>
							</div>

							<div className="about-left-side">
								<div className="about-image-container">
									<div className="about-image-wrapper">
										<img
											src="about.jpg"
											alt="about"
											className="about-image"
										/>
									</div>
								</div>

								<div className="about-socials">
									<Socials />
								</div>
							</div>
						</div>
						<div className="about-socials-mobile">
							<Socials />
						</div>
					</div>
					<div className="page-footer">
						<Footer />
					</div>
				</div>

				{/* Popup Modal for Image View */}
				{popupImage && (
					<div className="image-popup-overlay" onClick={closePopup}>
						<div className="image-popup">
							<img src={popupImage} alt="Enlarged View" className="popup-image" />
						</div>
					</div>
				)}
			</div>
		</React.Fragment>
	);
};

export default About;
