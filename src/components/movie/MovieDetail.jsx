import { AppBar, Tabs } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Tab from '@material-ui/core/Tab';
import React from 'react';
import { COLORS } from '../../colors';
import Cast from './details/Cast';
import OtherInfo from './details/OtherInfo';
import Reviews from './details/Reviews';
import Storyline from './details/Storyline';



const TabPanel = (props) => {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			{value === index && <Box p={5}>{children}</Box>}
		</div>
	);
};

function tabProps(index) {
	return {
		id: `simple-tab-${index}`,
		'aria-controls': `simple-tabpanel-${index}`
	};
}

class MovieDetail extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: 0
		};
		this.handleChange = this.handleChange.bind(this);
	}

	 MovieTabs = [
		{
			title: 'Reviews',
			component: <Reviews movie={this.props.movieDetails}/>
		},
		{
			title: 'Storyline',
			component: <Storyline movie={this.props.movieDetails}/>
		},
		{
			title: 'Cast',
			component: <Cast movie={this.props.movieDetails}/>
		},
		{
			title: 'Other Info',
			component: <OtherInfo movie={this.props.movieDetails}/>
		}
	];

	handleChange(event, value) {
		this.setState({ value });
	}

	render() {
		const value = this.state.value;
		return (
			<div>
				<AppBar position="static" style={{ backgroundColor: '#fff' }} elevation={0}>
					<Tabs
						value={value}
						onChange={this.handleChange}
						aria-label="Movie Detail Tabs"
						centered
						style={{ color: COLORS.textOnPrimary }}
					>
						{this.MovieTabs.map((tab, index) => (
							<Tab
								key={index}
								label={`${tab.title}`}
								{...tabProps(index)}
								className="py-3"
								style={{ textTransform: 'capitalize', fontSize: 16 }}
							/>
						))}
					</Tabs>
					{this.MovieTabs.map((tab, index) => (
						<TabPanel
							key={index}
							value={value}
							index={index}
							style={{ backgroundColor: COLORS.grey }}
							className="mx-n3"
						>
							{tab.component}
						</TabPanel>
					))}
				</AppBar>
			</div>
		);
	}
}

export default MovieDetail;
