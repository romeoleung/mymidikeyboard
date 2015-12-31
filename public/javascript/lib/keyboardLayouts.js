var layout = {};
        layout.original = {  // Original
            name: 'original',
            65: 'c4',
            87: 'c#4',
            83: 'd4',
            69: 'd#4',
            68: 'e4',
            70: 'f4',
            84: 'f#4',
            71: 'g4',
            89: 'g#4',
            72: 'a4',
            85: 'a#4',
            74: 'b4'
        };

        layout.fifthUniVerticalInverted = {  // Vertical left hand. Q => C
            name: 'fifthUniVerticalInverted',
            49: 'f3',    //1
            81: 'c4',    //q
            65: 'g3',    //a
            90: 'd4',    //z
            50: 'a3',    //2
            87: 'e3',    //w
            83: 'b3',    //s
            88: 'f#3',   //x
            51: 'c#4',   //3
            69: 'g#3',   //e
            68: 'd#4',   //d
            67: 'a#3',   //c
            52: 'f3',    //4
            82: 'c4',    //r
            70: 'g3',    //f
            86: 'd4'     //v
        };

        layout.fifthUniHorizontal = {  // Horizontal left hand. A => C
            name: 'fifthUniHorizontal',
            65: 'f3',    //a
            83: 'c4',    //s
            68: 'g3',    //d
            70: 'd4',    //f
            71: 'a3',    //g
            72: 'e3',    //h
            74: 'b3',    //j
            75: 'f#3',   //k
            76: 'c#4',   //l
            59: 'g#3',   //;
            39: 'd#4',   //'

            81: 'd4',    //q
            87: 'a3',    //w
            69: 'e3',    //e
            82: 'b3',    //r
            84: 'f#3',   //t
            89: 'c#4',   //y
            85: 'g#3',   //u
            73: 'd#4',   //i
            79: 'a#3',   //o
            80: 'f3',    //p
            91: 'c4',    //[
            93: 'g3',    //]

            49: 'b3',    //1
            50: 'f#3',   //2
            51: 'c#4',   //3
            52: 'g#3',   //4
            53: 'd#4',   //5
            54: 'a#3',   //6
            55: 'f3',    //7
            56: 'c4',    //8
            57: 'g3',    //9
            48: 'd4',    //0

            90: 'g#3',   //z
            88: 'd#4',   //x
            67: 'a#3',   //c
            86: 'f3',    //v
            66: 'c4',    //b
            78: 'g3',    //n
            77: 'd4',    //m
            44: 'a3',    //,
            46: 'e3',    //.
            47: 'b3'    ///
        };


        layout.bayanTypeBInverted = {  // Bayan type-B inverted - Romeo method
            name: 'bayanTypeBInverted',
            221: 'c3',    //]
            222: 'c#3',   //'
            191: 'd3',    ///
            219: 'd#3',    //[
            186: 'e3',   //;
            190: 'f3',    //.
            80: 'f#3',    //p
            76: 'g3',   //l
            188: 'g#3',    //,
            48: 'g#3',    //0
            79: 'a3',   //o
            75: 'a#3',   //k
            77: 'b3',    //m
            57: 'b3',    //9
            73: 'c4',   //i
            74: 'c#4',    //j
            78: 'd4',    //n
            56: 'd4',    //8
            85: 'd#4',   //u
            72: 'e4',    //h
            66: 'f4',    //b
            55: 'f4',    //7
            89: 'f#4',   //y
            71: 'g4',    //g
            86: 'g#4',    //v
            54: 'g#4',   //6
            84: 'a4',   //t
            70: 'a#4',    //f
            67: 'b4',   //c
            53: 'b4',   //5
            82: 'c5',    //r
            68: 'c#5',    //d
            88: 'd5',   //x
            52: 'd5',   //4
            69: 'd#5',    //e
            83: 'e5',    //s
            90: 'f5',   //z
            51: 'f5',   //3
            87: 'f#5',    //w
            65: 'g5',    //a
            50: 'g#5',   //2
            81: 'a5',    //q
            49: 'b5'    //1
        };

        layout.fifthUniVwithBayanTypeB = {  // Vertical left hand. Q => C
            name: 'fifthUniVwithBayanTypeB',
            49: 'fbass',    //1
            81: 'cbass',    //q
            65: 'gbass',    //a
            90: 'dbass',    //z
            50: 'abass',    //2
            87: 'ebass',    //w
            83: 'bbass',    //s
            88: 'f#bass',   //x
            51: 'c#bass',   //3
            69: 'g#bass',   //e
            68: 'd#bass',   //d
            67: 'a#bass',   //c

            //Bayan Type B, C at "O"
            221: 'd#3',    //]
            222: 'e3',   //'
            191: 'f3',    ///
            219: 'f#3',    //[
            186: 'g3',   //;
            190: 'g#3',    //.
            80: 'a3',    //p
            76: 'a#3',   //l
            188: 'b3',    //,
            48: 'b3',    //0
            79: 'c4',   //o
            75: 'c#4',   //k
            77: 'd4',    //m
            57: 'd4',    //9
            73: 'd#4',   //i
            74: 'e4',    //j
            78: 'f4',    //n
            56: 'f4',    //8
            85: 'f#4',   //u
            72: 'g4',    //h
            66: 'g#4',    //b
            55: 'g#4',    //7
            89: 'a4',   //y
            71: 'a#4',    //g
            86: 'b4',    //v
            54: 'b4',   //6
            84: 'c5',   //t
            70: 'c#5',    //f
            53: 'd5',   //5
            82: 'd#5',    //r
            52: 'f5',   //4
            67: 'd5',   //c
            68: 'e5',    //d
            69: 'f#5',    //e
            51: 'g#5',   //3
        };

        layout.fifthUniwithBayanTypeB = {  // Vertical left hand. Q => C
            name: 'fifthUniwithBayanTypeB',
            49: 'f#bass',    //1
            81: 'bbass',    //q
            65: 'ebass',    //a
            90: 'abass',    //z
            50: 'dbass',    //2
            87: 'gbass',    //w
            83: 'cbass',    //s
            88: 'fbass',   //x


            //Bayan Type B, C at "O"
            221: 'd#3',    //]
            222: 'e3',   //'
            191: 'f3',    ///
            219: 'f#3',    //[
            186: 'g3',   //;
            190: 'g#3',    //.
            80: 'a3',    //p
            76: 'a#3',   //l
            188: 'b3',    //,
            48: 'b3',    //0
            79: 'c4',   //o
            75: 'c#4',   //k
            77: 'd4',    //m
            57: 'd4',    //9
            73: 'd#4',   //i
            74: 'e4',    //j
            78: 'f4',    //n
            56: 'f4',    //8
            85: 'f#4',   //u
            72: 'g4',    //h
            66: 'g#4',    //b
            55: 'g#4',    //7
            89: 'a4',   //y
            71: 'a#4',    //g
            86: 'b4',    //v
            54: 'b4',   //6
            84: 'c5',   //t
            70: 'c#5',    //f
            53: 'd5',   //5
            82: 'd#5',    //r
            52: 'f5',   //4
            67: 'd5',   //c
            68: 'e5',    //d
            69: 'f#5',    //e
            51: 'g#5',   //3
        };

        layout.reasonKongPad = {  
            name: 'reasonKongPad',
            90: 'c2',   //z
            88: 'c#2',   //x
            67: 'd2',   //c
            86: 'd#2',    //v
            66: 'c4',    //b
            78: 'g3',    //n
            77: 'd4',    //m
            44: 'a3',    //,
            46: 'e3',    //.
            47: 'b3',    ///

            65: 'e2',    //a
            83: 'f2',    //s
            68: 'f#2',    //d
            70: 'g2',    //f
            71: 'a3',    //g
            72: 'e3',    //h
            74: 'b3',    //j
            75: 'f#3',   //k
            76: 'c#4',   //l
            59: 'g#3',   //;
            39: 'd#4',   //'

            81: 'g#2',    //q
            87: 'a2',    //w
            69: 'a#2',    //e
            82: 'b2',    //r
            84: 'f#3',   //t
            89: 'c#4',   //y
            85: 'g#3',   //u
            73: 'd#4',   //i
            79: 'a#3',   //o
            80: 'f3',    //p
            91: 'c4',    //[
            93: 'g3',    //]

            49: 'c3',    //1
            50: 'c#3',   //2
            51: 'd3',   //3
            52: 'd#3',   //4
            53: 'd#4',   //5
            54: 'a#3',   //6
            55: 'f3',    //7
            56: 'c4',    //8
            57: 'g3',    //9
            48: 'd4',    //0

        };

        layout.bayanTypeB = {  // Bayan type-B inverted - Romeo method
            name: 'bayanTypeB',
            221: 'a5',    //]
            222: 'g5',   //'
            219: 'f#5',    //[
            191: 'f5',    ///
            186: 'e5',   //;
            80: 'd#5',    //p
            48: 'd5',    //0
            190: 'd5',    //.
            76: 'c#5',   //l
            79: 'c5',   //o
            57: 'b4',    //9
            188: 'b4',    //,
            75: 'a#4',   //k
            73: 'a4',   //i
            56: 'g#4',    //8
            77: 'g#4',    //m
            74: 'g4',    //j
            85: 'f#4',   //u
            55: 'f4',    //7
            78: 'f4',    //n
            72: 'e4',    //h
            89: 'd#4',   //y
            54: 'd4',   //6
            66: 'd4',    //b
            71: 'c#4',    //g
            84: 'c4',   //t
            53: 'b3',   //5
            86: 'b3',    //v
            70: 'a#3',    //f
            82: 'a3',    //r
            52: 'g#3',   //4
            67: 'g#3',   //c
            68: 'g3',    //d
            69: 'f#3',    //e
            51: 'f3',   //3
            88: 'f3',   //x
            83: 'e3',    //s
            87: 'd#3',    //w
            50: 'd3',   //2
            90: 'd3',   //z
            65: 'c#3',    //a
            81: 'c3',    //q
            49: 'b2'    //1
        };