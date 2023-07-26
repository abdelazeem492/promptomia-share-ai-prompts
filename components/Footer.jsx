import Image from "next/image";
import Link from "next/link";

const social = [
	{
		src: "/assets/icons/facebook.svg",
		alt: "facebook",
		link: "https://www.facebook.com/abdelazim.hassan.492/",
	},
	{
		src: "/assets/icons/instagram.svg",
		alt: "instagram",
		link: "https://www.instagram.com/abdelazim_hassan492/",
	},
	{
		src: "/assets/icons/linkedin.svg",
		alt: "linkedin",
		link: "https://www.linkedin.com/in/abdelazim-hassan-017774280/",
	},
	{
		src: "/assets/icons/github.svg",
		alt: "github",
		link: "https://github.com/abdelazeem492",
	},
];

const Footer = () => {
	return (
		<footer className='w-full py-4 mt-5 text-gray-600 flex gap-3 flex-wrap items-center justify-between border-t '>
			<div>
				Developed by{" "}
				<Link
					href={"https://abdelazimhassan.com"}
					target='_blank'
					className='orange_gradient font-semibold '
				>
					Abdelazim Hassan
				</Link>{" "}
				©2023
			</div>

			<div className='flex gap-2'>
				{social.map((item, idx) => (
					<Link
						key={idx}
						href={item.link}
						target='_blank'
						className='opacity-70 hover:opacity-100 ease-in-out duration-300'
					>
						<Image src={item.src} alt={item.alt} width={22} height={22} />
					</Link>
				))}
			</div>
		</footer>
	);
};

export default Footer;
