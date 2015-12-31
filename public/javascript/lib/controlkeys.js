var controlKeyGroup = {
	controlKeys : {  // - and = as octave down and up. chrome only
            189: 'octaveDown',  //-
            187: 'octaveUp',  //=
            112: 'noteOffsetDown',  //F1
            113: 'noteOffsetUp',  //F2
        },
	sustainKeys : {  // - and = as octave down and up. chrome only
            192: 'sustainPedal',  //`
            16:  'sustainPedal',  //shift
        },
    nonMidiFuncKeys : {
            96: 'root',     //Num0
            // 112: 'F1',
            // 113: 'F2',
            114: 'F3',
            115: 'F4',
            // 116: 'F5',
            117: 'F6',
            118: 'F7',
            119: 'F8',
            120: 'F9',
            121: 'F10',
            122: 'F11',
            // 123: 'F12',
        },
    chordKeys : {
            97: 'dom7',     //Num1
            98: 'min',      //Num2
            99: 'M',        //Num3
            100: '7sus',//Num4
            101: 'min7',//Num5
            102: 'Maj7',//Num6
            103: 'dom9',//Num7
            104: 'min9',//Num8
            105: '6add9',//Num9
            106: '',//Num*
            107: '',//Num+
            109: '',//Num-
            110: '',//Num.
            111: '',//Num/
        },
};