import React from 'react';import { ChannelList } from './ChannelList';import './chat.scss';
export class Chat extends React.Component {

configureSocket = () => {

  var socket = socketClient(SERVER);
  socket.on('connection', () => {
    if (this.state.channel) {
      this.handleChannelSelect(this.state.channel.id);
    }
  });

  socket.on('channel', channel => {
    
    let channels = this.state.channels;
      channels.forEach(c => {
        if (c.id === channel.id) {
          c.participants = channel.participants;
        }
  });

  this.setState({ channels });});

socket.on('message', message => {
  let channels = this.state.channels
    channels.forEach(c => {
      if (c.id === message.channel_id) {
        if (!c.messages) {
          c.messages = [message];
        } else {
          c.messages.push(message);
        }
      }
    });
    this.setState({ channels });
  });
  this.socket = socket;}
handleSendMessage = (channel_id, text) => {
  this.socket.emit('send-message', { channel_id, text, senderName: this.socket.id, id: Date.now() });}
render() {
  return (
    <div classname="chat-app"></div>

      <channellist channels="{this.state.channels}" onselectchannel="{this.handleChannelSelect}"></channellist>
      
      <messagespanel onsendmessage="{this.handleSendMessage}" channel="{this.state.channel}"></messagespanel>
    
    
  );
‍}
