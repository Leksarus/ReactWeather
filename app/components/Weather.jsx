var React = require('react');
var Form = require('WeatherForm');
var Feedback = require('WeatherFeedback');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
	getInitialState: function() {
		return {
			isLoading: false
		};
	},
	handleSearch: function(location) {
		var self = this;

		this.setState({isLoading: true});

		openWeatherMap.getTemp(location).then(function(temp) {
			self.setState({
				location: location,
				temp: temp,
				isLoading: false
			});
		}, function(errorMessage) {
			self.setState({ isLoading: false })
			alert(errorMessage);
		});
	},
	render: function() {
		var {isLoading, location, temp} = this.state;
		
		function renderMessage() {
			if (isLoading) {
				return <h3 className="text-center">Fetching weather...</h3>
			} else if ((temp === 0 && location) || (temp && location)) {
				return <Feedback location={location} temp={temp}/>;
			}
		}

		return (
			<div>
				<h1 className="text-center">Get Weather</h1>
				<Form onSearch={this.handleSearch}/>
				{renderMessage()}	
			</div>
		);
	}

});

module.exports = Weather;