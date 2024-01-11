import "./SplashScreen.css"

export default function SplashScreen() {
    return (
        <div id="splashScreen" className="fixed z-50 h-dvh w-dvw flex items-center justify-center bg-custom-400">
            <div className="sk-chase">
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
            </div>
        </div>
    )
}
