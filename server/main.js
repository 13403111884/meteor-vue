import { Meteor } from 'meteor/meteor';

import '/imports/lib/collections/Time';
import '/imports/lib/publications/Time';
import '/imports/lib/methods/UpdateTime';

Meteor.startup(() => {
  // Update the current time
  Meteor.call('UpdateTime')
  // Add a new doc on each start.
  Time.insert({ time: new Date() })
  // Print the current time from the database
  console.log(`The time is now ${Time.findOne().time}`)
})
