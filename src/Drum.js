import { useEffect } from "react";

function Drum(){
    const divsData = [
        {
            audioDivId: "Heater-1",
            audioId: "Q",
            audioSrc: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
        },
        {
            audioDivId: "Heater-2",
            audioId: "W",
            audioSrc: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
        },
        {
            audioDivId: "Heater-3",
            audioId: "E",
            audioSrc: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
        },
        {
            audioDivId: "Heater-4",
            audioId: "A",
            audioSrc: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
        },
        {
            audioDivId: "Clap",
            audioId: "S",
            audioSrc: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
        },
        {
            audioDivId: "Open-HH",
            audioId: "D",
            audioSrc: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
        },
        {
            audioDivId: "Kick-n'-Hat",
            audioId: "Z",
            audioSrc: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
        },
        {
            audioDivId: "Kick",
            audioId: "X",
            audioSrc: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
        },
        {
            audioDivId: "Closed-HH",
            audioId: "C",
            audioSrc: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
        },
    ]


    const playSound = (event) => {
        event.target.style.backgroundColor = '#ee050d';
        const audioElement = document.getElementById(event.target.innerText);
        const display = document.getElementById("display");

        const  audioDivId = divsData.find((divsData)=>{
            return divsData.audioId === event.target.innerText
        }).audioDivId

        const audioDiv = document.getElementById(audioDivId);

        display.innerText = audioDivId;

        audioElement.currentTime = 0;
        audioElement.play();

        setTimeout(()=>{
            audioDiv.style.backgroundColor = '#0516f8'
        }, 100)
    }

    useEffect(()=>{
        document.addEventListener('keydown', detectKeyDown, true)
    })

    const detectKeyDown = (event) => {
        const audioElement = document.getElementById(event.key.toUpperCase());

        if (audioElement != null){
            const  audioDivId = divsData.find((divsData)=>{
                return divsData.audioId === event.key.toUpperCase()
            }).audioDivId

            const audioDiv = document.getElementById(audioDivId);
            const display = document.getElementById("display");

            display.innerText = audioDivId;

            audioDiv.style.backgroundColor = '#ee050d';

            audioElement.currentTime = 0;
            audioElement.play();

            setTimeout(()=>{
                audioDiv.style.backgroundColor = '#0516f8'
            }, 100)
        }
    }

    return (
        <div className="inner-container" id="drum-machine">
            <p id="display"></p>
            <div className="pad-bank">
                {divsData.map((objects)=>{
                    return (
                        <div
                            className="drum-pad"
                            id={objects.audioDivId}
                            onClick={(event)=> {playSound(event)}}
                        >{objects.audioId}
                            <audio className="clip" id={objects.audioId} src={objects.audioSrc}></audio>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Drum


