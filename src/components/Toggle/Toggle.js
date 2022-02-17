import React from "react";

function Toggle({ wind, humidity, pressure, sunrise, sunset }) {
    const [isCollapsed, setIsCollapsed] = React.useState(true);

    return (
        <section className="details">
            <button className="details__button" type="button" onClick={() => setIsCollapsed(!isCollapsed)}>Show more details</button>
            {!isCollapsed &&
                (<>
                    <div className="details__item">
                        <p>Wind Speed</p>
                        <p>{wind} mph</p>
                    </div>
                    <div className="details__item">
                        <p>Humidity</p>
                        <p>{humidity} &#37;</p>
                    </div>
                    <div className="details__item">
                        <p>Pressure</p>
                        <p>{pressure} in</p>
                    </div>
                    <div className="details__item">
                        <p>Sunrise</p>
                        <p>{sunrise}</p>
                    </div>
                    <div className="details__item">
                        <p>Sunset</p>
                        <p>{sunset}</p>
                    </div>
                </>
                )}
        </section>
    );
}

export default Toggle;
