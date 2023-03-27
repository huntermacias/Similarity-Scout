export const nodejs = `const axios = require("axios");

const options = {
    method: 'POST',
    url: 'https://similarityscout.netlify.app/api/v1/similarity',
    params: {
      text1: 'First text',
      text2: 'Second text'
    },
    headers: {
      'Authorization': 'YOUR_API_KEY',
    }
  };
  
axios.request(options).then(function (response) {
    console.log(response.data);
}).catch(function (error) {
    console.error(error);
});`

export const python = `import requests

url = 'https://similarityscout.netlify.app/api/v1/similarity'
api_key = 'YOUR_API_KEY'
text1 = 'First text'
text2 = 'Second text'

headers = {
    'Authorization': api_key
}

payload = {
    'text1': text1,
    'text2': text2
}

response = requests.post(url, headers=headers, json=payload)

if response.status_code == 200:
    data = response.json()
    print(data)
else:
    print(f'Request failed with status code {response.status_code}')`


export const FAQ = `
Question 1. What is the API key and how do I get it?

Answer 1: The API key is a unique identifier that allows you to access the API. 
To get your API key, visit the landing page and click create key. 
Once you've created a key, you can revoke your API key at any time.



Question: 2 How do I use the API in my code?

Answer 2: To use the API in your code, you can send a POST request 
to the API endpoint with your API key and the two texts you want to compare. 
The example Python & NodeJs code above demonstrates how to do this.



Question: 3 What is the format of the response?

Answer 3: The API response is returned in JSON format, and includes 
the similarity score between the two texts you provided. 



Question: 4 What is the rate limit for the API?
Answer 4: The API currently has a rate limit of 50 requests per hour. 
If you exceed this limit, you'll receive a 429 Too Many Requests response. 
If you need to make more requests, please contact us to discuss increasing your rate limit.



Question: 5 How accurate is the similarity score?

Answer 5: The similarity score provided by the API is based on advanced 
natural language processing algorithms, and is designed to be as accurate as possible. 
However, the accuracy of the score can vary depending on the complexity 
and length of the texts being compared. 
If you have any questions about the accuracy of the score, please contact us for more information.
`
