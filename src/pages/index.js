import Hero from '@/components/Hero';
import About from '@/components/About';
import Head from 'next/head';

const Home = () => {
	return (
		<>
			<Head>
				<title>Jonathan's Portfolio</title>
				<meta name="description" content="Jonathan's Portfolio" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.jpeg" />
			</Head>
			<div>
				<Hero />
				<About />
			
			</div>
		</>
	);
};

export default Home;