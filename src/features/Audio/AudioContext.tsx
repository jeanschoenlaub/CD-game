import React, { createContext, useState, useContext, type ReactNode, useEffect, useRef } from 'react';

interface AudioContextType {
    isPlaying: boolean;
    playTrack: (trackIndex: number) => void;
    togglePlay: () => void;
    volume: number;
    setVolume: (volume: number) => void;
    downloadTrack: (tackId:number, shouldDownload: boolean) => void;
}

// Create a context with a default value
export const AudioContext = createContext<AudioContextType>({
    isPlaying: false,
    //eslint-disable-next-line @typescript-eslint/no-empty-function
    playTrack: () => {}, // Provide a noop function as a placeholder
    //eslint-disable-next-line @typescript-eslint/no-empty-function
    togglePlay: () => {},
    volume: 0.4,
    //eslint-disable-next-line @typescript-eslint/no-empty-function
    setVolume: () => {},

    //eslint-disable-next-line @typescript-eslint/no-empty-function
    downloadTrack: () => {}
});

export const useAudio = () => {
    const context = useContext(AudioContext);
    if (!context) {
        throw new Error("useWizard must be used within a Wizard Wrapper");
    }
    return context;
};


interface AudioProviderProps {
    children: ReactNode;
}


export const AudioProvider: React.FC<AudioProviderProps> = ({ children }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [volume, setVolume] = useState(0.3); // Range: 0.0 - 1.0
    const [currentTrack, setCurrentTrack] = useState(0);
    const playlist = [
        "/audio/music/Drumatic.mp3",
    ]; // Your playlist array

    // Function to play a specific track
    const playTrack = (trackIndex: number) => {
        setIsPlaying(true);
        setCurrentTrack(trackIndex);
    };

    // Create an audio object only in a browser environment
    const isBrowser = typeof window !== "undefined";
    const audio = useRef(isBrowser ? new Audio() : null).current;

    //const musicRef = useRef();

    // useEffect(() => {
    //     // Check if the current track URL is defined
    //     if (!isBrowser || !audio) return; // Exit if not in browser
    //     const trackUrl = playlist[currentTrack];
    //     if (trackUrl && typeof trackUrl === 'string') {
    //         audio.src = trackUrl;
    //         if (isPlaying) {
    //             audio.play().catch((e) => {
    //                 console.error("Error playing audio:", e);
    //             });
    //         }
    //     }
    // }, [currentTrack, isPlaying, playlist]);

    // Function to toggle play/pause
    const togglePlay = () => {
        setIsPlaying(!isPlaying);
    };

    // Effect to handle play/pause
    useEffect(() => {
        if (!isBrowser || !audio) return; // Exit if not in browser
    
        if (isPlaying) {
            audio.play().catch((error) => {
                console.error("Error playing audio:", error);
                // Handle the error, e.g., by resetting the play state
            });
        } else {

            audio.pause();
        }
    }, [isPlaying]);

    // Effect to handle volume changes
    useEffect(() => {
        if (!isBrowser || !audio) return; // Exit if not in browser
        audio.volume = volume;
    }, [volume]);

    // Function to initiate download of a specific track
    const downloadTrack = (trackIndex: number, shouldDownload: boolean) => {
        const trackUrl = playlist[trackIndex];
        if (trackUrl && audio && shouldDownload) {
            audio.src = trackUrl;
        }
    };

    return (
        <AudioContext.Provider value={{ isPlaying, playTrack, togglePlay, volume, downloadTrack, setVolume }}>
            {children}
        </AudioContext.Provider>
    );
};

export default AudioContext;