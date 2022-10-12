import Document, { Html, Head, Main, NextScript } from 'next/document'

class AppDocument extends Document {
	render() {
		return (
			<Html lang="en">
				<Head>
					<meta name="Main page" content="Havish's personal website" />
					<meta
						name="keywords"
						content="Havish, Netla, Georgia Tech, Developer, InfernoAI, News451, InsightAI, MRHS, Rocket Launch, Software"
					/>
					<meta
						name="description"
						content="Havish Netla's developer portfolio"
					/>
					<meta name="author" content="Havish Netla" />
					<link rel="icon" type="image/png" href="/favicon.png" />
					<title>Havish Netla</title>

					<script
						src="https://kit.fontawesome.com/e641e1045a.js"
						crossOrigin="anonymous"
					/>
					<link rel="preconnect" href="https://fonts.googleapis.com" />
					<link crossOrigin rel="preconnect" href="https://fonts.gstatic.com" />
					<link
						href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@100;200;300;400;500;600;700;800;900&display=swap"
						rel="stylesheet"
					/>
				</Head>
				<body className="transition duration-500 ease-in-out">
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}

export default AppDocument
