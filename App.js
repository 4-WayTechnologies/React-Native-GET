import React, {useEffect, useState} from 'react';
import {ActivityIndicator, ScrollView, Text, View} from 'react-native';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch('https://covid-19-statistics.p.rapidapi.com/regions', {
      method: 'GET',
      url: 'https://covid-19-statistics.p.rapidapi.com/regions',
      headers: {
        'X-RapidAPI-Key': '5ad52ae891msha57664fb78d9e38p1be7edjsn79ae240f9e3a',
        'X-RapidAPI-Host': 'covid-19-statistics.p.rapidapi.com',
      },
    })
      .then(reponse => reponse.json())
      .then(data => {
        console.log('data', data);
        setIsLoading(false);
        setResponse(data);
      })
      .catch(error => {
        console.log('something failed miserably');
        setIsLoading(false);
        setError(true);
      });
  }, []);

  return (
    <View>
      {isLoading ? (
        <ActivityIndicator size={30} />
      ) : error ? (
        <Text>ERROR OCCURED</Text>
      ) : (
        <ScrollView>
          <Text>{JSON.stringify(response)}</Text>
        </ScrollView>
      )}
    </View>
  );
};

export default App;