AngularJS + Twitch API
===============

Showing how to use Twitch and Angular JS with an Auto Poll system and html to text conversion filter.

In this example, I have a basic controller which includes a "Polling" service.
This will automatically connect to the Twitch API and pull data every 15 seconds (See the timeout in the poller function).

An observable array has its value set to the data object passed back from the poller function.

The filters contains an example of how to apply a simple html to plain text conversion on bindable data.

This is meant as an example to demonstrate how to add auto running tasks.

Have Fun.

