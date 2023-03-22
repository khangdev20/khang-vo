import React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Contact from "./Contact";
import Project from "./Project";
import Description from "./Description";

export default function TabHeader() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    return (
        <Box sx={{ bgcolor: "background.paper" }}>
            <Tabs value={value} onChange={handleChange} centered>
                <Tab
                    className="fw-bold text-dark text-capitalize"
                    label="Contact"
                />
                <Tab
                    className="fw-bold text-dark text-capitalize"
                    label="Project"
                />
                <Tab
                    className="fw-bold  text-dark text-capitalize"
                    label="Description"
                />
            </Tabs>
            {value === 0 ? (
                <Contact />
            ) : value === 1 ? (
                <Project />
            ) : (
                <Description />
            )}
        </Box>
    );
}
