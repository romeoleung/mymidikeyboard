(function($){
    // connect to socket.io
    var socket = io.connect(''); // change to appropiate for network access

    ////////////

    var KeyBoard = function(el) {
        this._el = el;
        this.octave = 0;
        this.noteOffset = 0;
        this.notes = notes;
        this.controls = controls;
        this.keys = layout.original;
        this.controlKeys = controlKeyGroup.controlKeys;
        this.sustainKeys = controlKeyGroup.sustainKeys;
        this.nonMidiFuncKeys = controlKeyGroup.nonMidiFuncKeys;
        this.chordKeys = controlKeyGroup.chordKeys;
        this.init();
    };

    KeyBoard.prototype = function(){
        var init = function(){
            createKeys.call(this);
            bindEvents.call(this);
        },
        createKeys = function(){
            var self = this;
            $.each(this.notes, function(index,item){
                createKey.call(self,index,item);
            });
        },
        createKey = function(note,message){
            var key = $('<div/>').attr('rel',message).addClass(note).addClass('key').appendTo(this._el);
            if ( note.indexOf('#') > 0 ) {
                key.addClass('sharp');
            }
        },
        bindEvents = function(){
            var self = this,
                note, key, code, pressed = {}, pressedControls = {}, pressedNonMidiFuncs = {}, activeRoot, pressedChords = {};

            // Click
            this._el.find('.key').on('mousedown touchstart',function(e){
                e.preventDefault();
                note = $(this).attr('rel');
                noteDown.call(self,note);
            }).on('mouseup touchend',function(e){
                e.preventDefault();
                note = $(this).attr('rel');
                noteUp.call(self,note);
            });

            // Keyboard
            $(window).on('keydown',function(e){
                if ( self.keys[e.keyCode] ) {
                    e.preventDefault();
                    note = self.notes[self.keys[e.keyCode]];
                    key = getKey.call(self,note).addClass('active');
                    if ( pressed[note] !== true ) {
                        pressed[note] = true;
                        noteDown.call(self,note,self.keys[e.keyCode]); 
                    }
                } else if ( self.controlKeys[e.keyCode] ) {
                    e.preventDefault();
                    code = self.controlKeys[e.keyCode];
                    if ( code === 'octaveUp' ) {
                        octaveUp.call(self);
                    } else if ( code === 'octaveDown') {
                        octaveDown.call(self);
                    } else if ( code === 'noteOffsetUp' ) {
                        noteOffsetUp.call(self);
                    } else if ( code === 'noteOffsetDown') {
                        noteOffsetDown.call(self);
                    }


                } else if (self.sustainKeys[e.keyCode]) {  //Adding sustain key control
                    e.preventDefault();
                    sustainControl = self.controls[self.sustainKeys[e.keyCode]];
                    // key = getKey.call(self,note).addClass('active');
                    if ( pressedControls[sustainControl] !== true ) {
                        pressedControls[sustainControl] = true;
                        sustainControlDown.call(self,sustainControl);
                    };
                } else if (self.nonMidiFuncKeys[e.keyCode]) {
                    e.preventDefault();
                    nonMidiFuncKey = self.nonMidiFuncKeys[e.keyCode];
                    if ( pressedNonMidiFuncs[nonMidiFuncKey] !== true ) {
                        pressedNonMidiFuncs[nonMidiFuncKey] = true;
                        nonMidiFuncDown.call(self,nonMidiFuncKey);
                    };
                } else if (self.chordKeys[e.keyCode]) {
                    e.preventDefault();
                    chordText = self.chordKeys[e.keyCode];
                    if ( pressedChords[chordText] !== true ) {
                        pressedChords[chordText] = true;
                        chordDown.call(self,activeRoot,chordText);
                    }
                }



            }).on('keyup',function(e){
                if ( self.keys[e.keyCode] ) {
                    e.preventDefault();
                    note = self.notes[self.keys[e.keyCode]];
                    key = getKey.call(self,note).removeClass('active');
                    pressed[note] = false;
                    noteUp.call(self,note,self.keys[e.keyCode]);
                } else if (self.sustainKeys[e.keyCode]) {
                    e.preventDefault();
                    sustainControl = self.controls[self.sustainKeys[e.keyCode]];
                    // key = getKey.call(self,note).removeClass('active');
                    pressedControls[sustainControl] = false;
                    sustainControlUp.call(self,sustainControl);
                } else if (self.nonMidiFuncKeys[e.keyCode]) {
                    e.preventDefault();
                    nonMidiFuncKey = self.nonMidiFuncKeys[e.keyCode];
                    pressedNonMidiFuncs[nonMidiFuncKey] = false;
                    nonMidiFuncUp.call(self,nonMidiFuncKey);
                } else if (self.chordKeys[e.keyCode]) {
                    e.preventDefault();
                    chordText = self.chordKeys[e.keyCode];
                    // chordKey = e.keyCode;  //this is new
                    pressedChords[chordText] = false;  // this needs to be update to when releasing one key, reduce the number in the counter. only when counter reaches 0 to perform the real key up.
                    // socket.emit('chordup',{message: activeRoot});
                    chordUp.call(self,activeRoot,chordText);
                }
            });

            // Remote Click
            socket.on('playeddown', function(data){
                getKey.call(self,data.message).addClass('active');
            });

            socket.on('playedup', function(data){
                getKey.call(self,data.message).removeClass('active');
            });

            //On Page Load, display active key layout
                $('keyboardLayout').val(self.keys.name);

            //Change Key Layout
            $('#keyboardLayout').change(function (e) {
                console.log($('#keyboardLayout').val());
                self.keys = layout[$('#keyboardLayout').val()];
            })
        },
        getKey = function(message) {
            return this._el.find('div[rel="'+message+'"]');
        },
        noteDown = function(note,keyPushed){
            var octavedNote;
            console.log(note);
            if (keyPushed.search('bass') >= 0) {
                // octavedNote = getNoteOffset.call(this,note);
                octavedNote = note;
            } else {
                var tempNote = getNoteOffset.call(this,note);
                octavedNote = getNoteInOctave.call(this,tempNote);
            }
            socket.emit('notedown',{message: octavedNote});
            self.activeRoot = octavedNote;
            console.log(activeRoot);
        },
        noteUp = function(note,keyPushed){
            var octavedNote;
            if (keyPushed.search('bass') >= 0) {
                // octavedNote = getNoteOffset.call(this,note);
                octavedNote = note;
            } else {
                var tempNote = getNoteOffset.call(this,note);
                octavedNote = getNoteInOctave.call(this,tempNote);
            }
            socket.emit('noteup',{message: octavedNote});
            self.activeRoot = octavedNote;
            console.log(activeRoot);
        },
        getNoteInOctave = function(note){
            var octave = this.octave;
            if ( octave === 0 ) {
                return note;
            } else {
                return ~~note + ( 12 * octave );
            }
        },

        getNoteOffset = function(note){
            var noteOffset = this.noteOffset;
            if ( noteOffset === 0 ) {
                return note;
            } else {
                return ~~note + noteOffset;
            }
        },

        noteOffsetUp = function() {
            if ( this.noteOffset === 6 ) { return; }
            this.noteOffset += 1;
        },
        noteOffsetDown = function() {
            if ( this.noteOffset === -6 ) { return; }
            this.noteOffset -= 1;
        },

        octaveUp = function() {
            if ( this.octave === 4 ) { return; }
            this.octave += 1;
        },
        octaveDown = function() {
            if ( this.octave === -4 ) { return; }
            this.octave -= 1;
        },
        sustainControlDown = function(control) {
            console.log('sustain is down');
            socket.emit('sustaindown',{message: control});
        },

        sustainControlUp = function(control) {
            console.log('sustain is up');
            socket.emit('sustainup',{message: control});
        },

        nonMidiFuncDown = function(funcText) {
            //when chordRoot button is pressed hold, for every new key pressed down, ignore its release function
            console.log(funcText +' is down');
            socket.emit('nonmidifuncdown',{message: funcText});
        },

        nonMidiFuncUp = function(funcText) {
            console.log(funcText + ' is up');
            socket.emit('nonmidifuncup',{message: funcText});
        },

        chordDown = function(activeRoot, chordText) {
            console.log('chord key is down');
            socket.emit('chorddown',{messageRoot: self.activeRoot, messageChordText: chordText});
        },

        chordUp = function(activeRoot, chordText) {
            console.log('chord key is up');
            socket.emit('chordup',{messageRoot: self.activeRoot, messageChordText: chordText});
        };


        
        return {
            init: init
        };

    }();

    var keyboard = new KeyBoard($('#keyboard'));

    ////////////


    // send message on click
    $('#controller a').on('click', function(e){
        e.preventDefault();
        socket.emit('controller',{ message: $(this).data('message') });
    });

    socket.on('playeddown', function (data) {
        $('#messagebox').text(data.message);
    })

    //On Page init, get keyboard layout list
    var keyboardLayoutList = [];
    for (var kb in layout) {
        keyboardLayoutList.push('<option value=' + kb + '>' + kb + '</option>');
    };
    console.log(keyboardLayoutList);
    $('#keyboardLayout').html(keyboardLayoutList);

    $('#keyboardLayout').val(keyboard.keys.name);

})(jQuery);