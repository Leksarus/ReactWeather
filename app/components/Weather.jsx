var React = require('react');
var Form = require('WeatherForm');
var Feedback = require('WeatherFeedback');
var openWeatherMap = require('openWeatherMap');
var ErrorModal = require('ErrorModal');

var Weather = React.createClass({
	getInitialState: function() {
		return {
			isLoading: false
		};
	},
	handleSearch: function(location) {
		var self = this;

		this.setState({
			isLoading: true,
			errorMessage: undefined
		});

		openWeatherMap.getTemp(location).then(function(temp) {
			self.setState({
				location: location,
				temp: temp,
				isLoading: false
			});
		}, function(e) {
			self.setState({ 
				isLoading: false,
				errorMessage: e.message 
			})
			alert(errorMessage);
		});
	},
	render: function() {
		var {isLoading, location, temp, errorMessage} = this.state;
		
		function renderMessage() {
			if (isLoading) {
				return <h3 className="text-center">Fetching weather...</h3>
			} else if ((temp === 0 && location) || (temp && location)) {
				return <Feedback location={location} temp={temp}/>;
			}
		}

		function renderError() {
			if (typeof errorMessage === 'string') {
				return (
					<ErrorModal message={errorMessage}/>
				)
			}
		} 

		return (
			<div>
				<h1 className="text-center">Get Weather</h1>
				<Form onSearch={this.handleSearch}/>
				{renderMessage()}
				{renderError()}
			</div>
		);
	}

});

module.exports = Weather;