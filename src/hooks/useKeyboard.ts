import { useEffect, useState } from 'react'

const useKeyboard = () => {
    const [lastKeyPressed, setLastKeyPressed] = useState<string | null>(null)
    
    useEffect(() => {
        const trackKeyPress = (event: KeyboardEvent) => setLastKeyPressed(event.key)
        window.addEventListener('keydown', trackKeyPress)
        return () => window.removeEventListener('keydown', trackKeyPress)
    }, []);

    return lastKeyPressed;
}

export default useKeyboard;