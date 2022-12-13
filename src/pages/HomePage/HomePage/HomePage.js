import React from 'react'
import { Box } from '@material-ui/core'
import WatchNews from 'components/WatchNews/WatchNews'
import Banner from 'components/Banner/Banner.js'
import imgX from 'images/anhhome10.png'
import imgY from 'images/anhhome11.png'
import sale1 from 'images/sale1.png'
import sale2 from 'images/sale2.png'
import sale3 from 'images/sale3.png'
import sale4 from 'images/sale4.png'
import sale5 from 'images/sale5.png'
import sale6 from 'images/sale6.png'
import sale7 from 'images/sale7.png'
import { LaptopAndTablet, Phone, Watch } from '../StaticParam.js'
import TopProducts from '../TopProducts.js'
import { MainLayout } from 'components/Layout'

const dataBannerResult = [
	{
		banner: sale1,
	},
	{
		banner: sale2,
	},
	{
		banner: sale3,
	},
	{
		banner: sale4,
	},
	{
		banner: sale5,
	},
	{
		banner: sale6,
	},
	{
		banner: sale7,
	},
]

const HomePage = (props) => {
	return (
		<MainLayout>
			<Banner dataBannerResult={dataBannerResult} imgX={imgX} imgY={imgY} />
			<Box m="0.5rem 0">
				<TopProducts fetchedCategories={Phone} />
			</Box>
			<Box m="0.5rem 0">
				<TopProducts fetchedCategories={LaptopAndTablet} />
			</Box>
			<Box m="0.5rem 0">
				<TopProducts fetchedCategories={Watch} />
			</Box>
			<Box m="0.5rem 0">
				<WatchNews />
			</Box>
		</MainLayout>
	)
}
export default HomePage
