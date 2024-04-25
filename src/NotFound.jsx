import { Link } from "react-router-dom";

export default function NotFound() {
    return (<div data-cy="404-page">
        <p>Ooops! Unexistent link</p><span><Link to="/">Return to home</Link></span>
    </div >
    )
}