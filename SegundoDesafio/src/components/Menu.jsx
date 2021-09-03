import React from 'react'


export default function Menu() {
    return (
        <div className="Menu">
            <div className="MenuLinks">
                <ul>
                    <li>
                        <p>Featured</p>
                    </li>
                    <li> <p>video</p></li>
                    <li><p>Charts</p></li>
                    <li> <p>Live</p></li>
                </ul>
                <nav className="network">
                    <svg viewBox="0 0 20 16.43"><path d="M20 1.89l-2.3 2.16v.68a12.28 12.28 0 0 1-3.65 8.92c-5 5.13-13.1 1.76-14.05.81 0 0 3.78.14 5.81-1.76A4.15 4.15 0 0 1 2.3 9.86h2S.81 9.05.81 5.81A11 11 0 0 0 3 6.35S-.14 4.05 1.49.95a11.73 11.73 0 0 0 8.37 4.19A3.69 3.69 0 0 1 13.51 0a3.19 3.19 0 0 1 2.57 1.08 12.53 12.53 0 0 0 3.24-.81l-1.75 1.89A10.46 10.46 0 0 0 20 1.89z"></path></svg>
                </nav>
            </div>
        </div>
    )
}
