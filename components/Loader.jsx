import Image from "next/image";

import LoaderImage from "@public/assets/icons/loader.svg";

const Loader = () => {
	return (
		<div className='w-full flex-center'>
			<Image
				src={LoaderImage}
				width={50}
				height={50}
				alt='loader'
				className='object-contain mt-10'
			/>
		</div>
	);
};

export default Loader;
