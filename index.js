var RtmClient = require('@slack/client').RtmClient;
var RTM_EVENTS = require('@slack/client').RTM_EVENTS;

var bot_token =  'xoxb-191912240592-NR5zSFDErvIQJtqcO1D3XfCP';

var rtm = new RtmClient(bot_token);
rtm.start();

rtm.on(RTM_EVENTS.MESSAGE, function handleRtmMessage(message) {
  console.log('hiiiii');
  var channel = "#general"; //could also be a channel, group, DM, or user ID (C1234), or a username (@don)
  rtm.sendMessage("Hello <@" + message.user + ">!", message.channel);
});