const https = require('https');

// const movieTitles = function (substr) {
//   let result = [];
//   https.get(`https://jsonmock.hackerrank.com/api/movies/search/?Title=${substr}`, (res) => {
//     res.on('data', (d) => {
//       // Returned data is buffered and needs to be parsed depending on what type of data is returned.
//       // In this case data is JSON formatted, so use JSON to parse
//       let data = JSON.parse(d);
//       let movieData = data.data;
//       for (let i = 0; i < movieData.length; i++) {
//         let movieTitle = movieData[i].Title;
//         if (movieTitle.includes(substr)) {
//           result.push(movieTitle);
//         }
//       }
//       console.log(result.join('\n'));
//     });
//   }).on('error', (e) => {
//     console.error(e);
//   });
// };

// const movieTitles = function (substr) {
//   let data;
//   let result = [];
//   https.get(`https://jsonmock.hackerrank.com/api/movies/search/?Title=${substr}`, (res) => {
//     res.on('data', (d) => {
//       // Returned data is buffered and needs to be parsed depending on what type of data is returned.
//       // In this case data is JSON formatted, so use JSON to parse
//       data = JSON.parse(d);
//       let movieData = data.data;
//       for (let i = 0; i < movieData.length; i++) {
//         let movieTitle = movieData[i].Title;
//         if (movieTitle.includes(substr)) {
//           result.push(movieTitle);
//         }
//       }
//       for (let i = 1; i < data.total_pages; i++) {
//         https.get(`https://jsonmock.hackerrank.com/api/movies/search/?Title=${substr}&page=${i + 1}`, (resp) => {
//           resp.on('data', (e) => {
//             data = JSON.parse(e);
//             movieData = data.data;
//             for (let j = 0; j < movieData.length; j++) {
//               let movieTitle = movieData[j].Title;
//               if (movieTitle.includes(substr)) {
//                 result.push(movieTitle);
//               }
//             }
//             console.log(result);
//           });
//         });
//       }
//     });
//   }).on('error', (e) => {
//     console.error(e);
//   });
// };

const movieTitles = function (substr, page, results) {
  let url = 'https://jsonmock.hackerrank.com/api/movies/search/';

  let queryString = page ? `?Title=${substr}&page=${page}` : `?Title=${substr}`;

  results = results || [];

  https.get(url + queryString, (res) => {
    let data = '';
    res.on('data', (chunk) => {
      data += chunk;
    });
    res.on('end', () => {
      data = JSON.parse(data);
      let movieData = data.data;
      // console.log('data: ', data);
      results = results.concat(movieData);
      if (data.page < data.total_pages) {
        movieTitles(substr, data.page + 1, results);
      } else {
        let moviesWithSubstr = [];
        for (let i = 0; i < results.length; i++) {
          let movieTitle = results[i].Title;
          if (movieTitle.includes(substr)) {
            moviesWithSubstr.push(movieTitle);
          }
        }
        console.log(moviesWithSubstr.join('\n'));
      }
    });
  }).on('error', (e) => {
    console.error(e);
  });
};

movieTitles('Spiderman');
