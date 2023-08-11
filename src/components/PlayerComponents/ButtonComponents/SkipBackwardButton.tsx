
interface SkipBackwardButtonProps {
    SkipTrack: any
}

function SkipBackwardButton(props:SkipBackwardButtonProps) {
    return (
        <button className="skip-back-button" onClick={() => props.SkipTrack(false)}>
            <svg role="img" height='16' width='16' viewBox="0 0 16 16">
                <path d="M3.3 1a.7.7 0 0 1 .7.7v5.15l9.95-5.744a.7.7 0 0 1 1.05.606v12.575a.7.7 0 0 1-1.05.607L4 9.149V14.3a.7.7 0 0 1-.7.7H1.7a.7.7 0 0 1-.7-.7V1.7a.7.7 0 0 1 .7-.7h1.6z"></path>
            </svg>
        </button>
    )
}

export default SkipBackwardButton