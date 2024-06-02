import {useTheme, useThemeUpdate} from "./context/ThemeProvider";

function getTheme (theme) {
    return {
        background: theme ? '#000000' : '#ffff',
        color: theme ? '#ffff' : '#000000',
    }
}

export function FunctionComponent () {
    const dark = useTheme()
    const changeTheme = useThemeUpdate()
    return (
        <div style={getTheme(dark)}>
            <h1>Function Component</h1>
            <button onClick={changeTheme}></button>
        </div>
    );
}

export default FunctionComponent