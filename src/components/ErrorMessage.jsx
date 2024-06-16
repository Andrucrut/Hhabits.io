import common from "./error.css";

export default function ErrorMessage({ error }) {
    return(
        <>
            {error && <p className={common.error}>{error}</p>}
        </>
    )
}