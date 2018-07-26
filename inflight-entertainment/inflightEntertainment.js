/*
Write a function that takes an integer flightLength (in minutes) and an array of
integers movieLengths (in minutes) and returns a boolean indicating whether
there are two numbers in movieLengths whose sum equals flightLength.

https://www.interviewcake.com/question/java/inflight-entertainment
*/
export const inflightEntertainment = (flightLength, movieLengths) => {
  let movieTimes = {};
  // Iterate over movieLengths
  movieLengths.forEach(movieDuration => {
    // Insert a time into the movieTimes object
    if (movieDuration < flightLength) {
      movieTimes[movieDuration] = movieTimes[movieDuration] || 0;
      movieTimes[movieDuration]++;
    }
  });

  // Iterate over movieLengths
  for (let i = 0; i < movieLengths.length; i++) {
    // Use flightLength - movieLength to key into movieTimes object looking for another
    // movie to equal the flightLength
    if (movieTimes.hasOwnProperty([flightLength - movieLengths[i]])) {
      // Make sure there are 2 movies of half the length of the flight
      if (flightLength - movieLengths[i] === movieLengths[i]) {
        if (movieTimes[flightLength - movieLengths[i]] > 1) {
          return true;
        }
      } else {
        return true;
      }
    }
  }

  return false;
};
