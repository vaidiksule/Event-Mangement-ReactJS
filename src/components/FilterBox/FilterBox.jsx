import { useState, useEffect } from "react";
import { generateDataOptions, months, years } from "../../utils/DataRender";
import "./FilterBox.css";

const FilterBox = ({ getMonthYear }) => {
    const [selectedMonth, setSelectedMonth] = useState("January");
    const [selectedYear, setSelectedYear] = useState(2023);
    const [selectedLocation, setSelectedLocation] = useState("Location1"); // Default location

    // Sample locations, you can replace this with your actual locations data
    const locations = ["Location1", "Location2", "Location3"];

    const monthToRender = () => generateDataOptions(months);
    const yearsToRender = () => generateDataOptions(years);
    const locationsToRender = () => generateDataOptions(locations);

    const handleMonthChange = (e) => {
        setSelectedMonth(e.target.value);
    };

    const handleYearChange = (e) => {
        setSelectedYear(Number(e.target.value));
    };

    const handleLocationChange = (e) => {
        setSelectedLocation(e.target.value);
    };

    useEffect(() => {
        const updateParent = () => {
            getMonthYear(selectedMonth, selectedYear, selectedLocation);
        };
        updateParent();
    }, [selectedMonth, selectedYear, selectedLocation, getMonthYear]);

    return (
        <div>
            <form className="filter-card">
                <div className="wrapper">
                    <div className="date">
                        <label htmlFor="month">Month: </label>
                        <select
                            value={selectedMonth}
                            onChange={handleMonthChange}
                        >
                            {monthToRender()}
                        </select>
                    </div>
                    <div className="date">
                        <label htmlFor="year">Year: </label>
                        <select
                            value={selectedYear}
                            onChange={handleYearChange}
                        >
                            {yearsToRender()}
                        </select>
                    </div>
                    <div className="date">
                        <label htmlFor="location">Location: </label>
                        <select
                            value={selectedLocation}
                            onChange={handleLocationChange}
                        >
                            {locationsToRender()}
                        </select>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default FilterBox;
