import Footer from "@components/Footer";
import Nav from "@components/Nav";
import Provider from "@components/Provider";
import "@styles/globals.css";

export const metadata = {
	title: "Promptomia",
	description: "Discover & Share AI Prompts.",
};

const RootLayout = ({ children }) => {
	return (
		<html lang='en'>
			<body>
				<Provider>
					<div className='main'>
						<div className='gradient' />
					</div>
					<main className='app'>
						<Nav />
						<section>{children}</section>
						<Footer />
					</main>
				</Provider>
			</body>
		</html>
	);
};

export default RootLayout;
