/*
Given these unsorted tickets, sort them and figure out the origin and the
final destination and sort the tickets

tickets =
[
  ['charlotte', 'durham'],
  ['san francisco', 'denver'],
  ['nashville', 'charlotte'],
  ['st. louis', 'nashville'],
  ['los angeles', 'san francisco'],
  ['denver', 'st. louis'],
]

destination = {
  durham:         ['charlotte', 'durham']
  denver:         ['san francisco', 'denver']
  xcharlotte:      ['nashville', 'charlotte']
  xnashville       ['st. louis', 'nashville']
  san francisco   ['los angeles', 'san francisco']
  xst. louis       ['denver', 'st. louis']
}

arrival = {
  charlotte:        ['charlotte', 'durham']
  san francisco:    ['san francisco', 'denver']
  nashville:      ['nashville', 'charlotte']
  st louis:         ['st. louis', 'nashville']
  los angeles:      ['los angeles', 'san francisco']
  denver:           ['denver', 'st. louis']
}

*/

import LinkedList from "./LinkedList";

export const unsortedTickets = tickets => {
  let destinations = {};
  let arrivals = {};

  // Iterate through the tickets
  tickets.forEach(ticket => {
    // Object destructure arrival and destination
    let [arrival, destination] = ticket;
    // Insert array into arrival and destination objects with the arrival/destination as the key
    destinations[destination] = ticket;
    arrivals[arrival] = ticket;
  });

  // Create a new list with the first item in the array as the head of the list
  let sortedTickets = new LinkedList();
  sortedTickets.insertHead(tickets[0]);
  // while (there is a key in destinations that matches head[0] ||
  //        there is a key in the arrivals that matches tail[1])
  let matchingDestinationForArrival = destinations[sortedTickets.getHead()[0]];
  let matchingArrivalForDesitination = arrivals[sortedTickets.getTail()[1]];
  while (matchingDestinationForArrival || matchingArrivalForDesitination) {
    // get the head and tail from the list
    // find the matching key in arrivals/destinations using the head and tail
    // if there is a matching destination with arrival
    if (matchingDestinationForArrival) {
      // then add to head of list
      sortedTickets.insertHead(matchingDestinationForArrival);
      // delete the key from the destinations obj
      delete destinations[matchingDestinationForArrival[1]];
    }
    // if there is a matching arrival with destination
    if (matchingArrivalForDesitination) {
      // then add to tail of list
      sortedTickets.insertTail(matchingArrivalForDesitination);
      // delete the key from the arrivals obj
      delete arrivals[matchingArrivalForDesitination[0]];
    }
    matchingDestinationForArrival = destinations[sortedTickets.getHead()[0]];
    matchingArrivalForDesitination = arrivals[sortedTickets.getTail()[1]];
  }
  return sortedTickets.printList();
};
