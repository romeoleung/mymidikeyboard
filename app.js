/**
 * Module dependencies.
 */
var express = require('express'),
	app = express(), routes = require('./routes'),
	server = require('http').createServer(app),
	io = require('socket.io').listen(server),
	teoria = require('teoria'),
	midi = require('jazz-midi');

//settings
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.static(__dirname + '/public'));

//router
app.get('/', routes.index);

// Functions

var jazz = require('jazz-midi');
var midi = new jazz.MIDI();
// var defaultMidiPort = midi.MidiOutOpen('loopMIDI Port');
var defaultMidiPort = midi.MidiOutOpen(0);

if(defaultMidiPort){
  io.sockets.on('connection', function (socket) {

  // note
  socket.on('notedown',function(data){
    midi.MidiOut(0x90,data.message,100);
    socket.broadcast.emit('playeddown',{'message':data.message});
  });

  // note stop
  socket.on('noteup',function(data){
    midi.MidiOut(0x80,data.message,100);
    socket.broadcast.emit('playedup',{'message':data.message});
  });


  // chord down
  socket.on('chorddown',function(data){
    var rootNote = teoria.note.fromMIDI(data.messageRoot);
    var chordNotes = rootNote.chord(data.messageChordText).notes();
    for (var i = 0; i < chordNotes.length; i++) {
      midi.MidiOut(0x90,chordNotes[i].midi(),100);
    };
    socket.broadcast.emit('playeddown',{'message':data.message});
  });

  // chord
  socket.on('chordup',function(data){
    var rootNote = teoria.note.fromMIDI(data.messageRoot);
    var chordNotes = rootNote.chord(data.messageChordText).notes();
    for (var i = 0; i < chordNotes.length; i++) {
      midi.MidiOut(0x80,chordNotes[i].midi(),100);
    };
    socket.broadcast.emit('playedup',{'message':data.message});
  });

  // sustain
  socket.on('sustaindown',function(data){
    midi.MidiOut(0xB0,data.message,127);
    socket.broadcast.emit('playeddown',{'message':data.message});
  });

  // sustain stop
  socket.on('sustainup',function(data){
    midi.MidiOut(0xB0,data.message,0);
    socket.broadcast.emit('playedup',{'message':data.message});
  });



  // controller
  socket.on('controller',function(data){
    var message = parseInt(data.message,10);
    midi.MidiOut(message,0,0);
  });

  // non Midi functions
  socket.on('nonmidifuncdown',function(data){
    midi.MidiOut(0xB0,data.message,127);
    socket.emit('playeddown',{'message':data.message});
  });

  // non Midi functions stop
  socket.on('nonmidifuncup',function(data){
    midi.MidiOut(0xB0,data.message,0);
    socket.emit('playedup',{'message':data.message});
  });


});
} else {
  console.log('Cannot open default MIDI-Out port!');
}

//Server Start
server.listen(3000);