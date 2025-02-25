(function() {
    var apiKey = 'YOUR_API_KEY_HERE'; // Use the variable for the actual API key
    var cityName = 'CITY_NAME_HERE'; // Replace with dynamic city if needed
    var url = 'http://api.weatherstack.com/current?access_key=' + apiKey + '&query=' + encodeURIComponent(cityName);
    
    var response = new sn_ws.RESTMessageV2();
    response.setHttpMethod('get');
    response.setEndpoint(url);
    
    var res = response.execute();
    var responseBody = res.getBody();
    var responseJson = JSON.parse(responseBody);
    
    // Extract the necessary weather data (matching WeatherStack response format)
    var temperature = responseJson.current.temperature;
    var description = responseJson.current.weather_descriptions[0]; // First description
    var icon = responseJson.current.weather_icons[0]; // First icon URL
    
    // Send the data to the client
    data.weather = {
			  city: cityName,
        temperature: temperature,
        description: description,
        icon: icon
    };
})(input, data);
