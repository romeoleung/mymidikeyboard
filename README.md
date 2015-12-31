# mymidikeyboard
my midi keyboard

## Install and Start up
1. Git from the repo:
    ```
        git clone https://github.com/romeoleung/mymidikeyboard.git
        npm install
    ```

2. Start the app:
	```
		node app.js
	```
Then launch your Chrome browser, and go to http://localhost:3000

### Note: 
1. Only supports Webkit browsers.
2. To use it as MIDI input in your music apps, please download and install `Loop Midi` from [Tobias Erichsen](http://www.tobias-erichsen.de/)'s website, then modify the 'app.js' file, find the code:
```javascript
	var defaultMidiPort = midi.MidiOutOpen(0);
```
Change the port number to the corresponding midi out port of your device, or in case of using Loop Midi on Windows, change it to 'loopMIDI Port' as a string to point to that port.
If you are on Mac, you'll need to find out how to create and link to virtual midi ports yourself.

## Instructions
Use the dropdown to change keyboard layouts.
Default is the original piano keyboard, 'asdf' for 'C, D, E, F' etc.

Use small number keyboard to generate chords. You need to first press any key on the keyboard to set the root note before pressing the chord keys.

Current setting is:
- Num3: Major
- Num2: Minor
- Num1: Dom7
- Num6: Maj7
- Num5: Min7
- Num4: 7sus
- Num9: 6add9
- Num8: Min9
- Num7: Dom9