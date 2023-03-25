import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Divider,
    Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { NotionRenderer, BlockMapType } from "react-notion";

export default function ProjectItem(
    {
        projectName,
        projectDescription,
        projectMember,
        projectContribute,
        projectResult,
        projectPosition,
        notionPageId,
        projectRepository,
        backendUrl,
        adminUrl,
        github,
        android,
        group,
        fontend,
        sheet,
    }: any,
    engineers: [] = []
) {
    const [data, setData] = useState({});
    const [notionTitle, setNotionTile] = useState("");

    useEffect(() => {
        fetch(`https://notion-api.splitbee.io/v1/page/${notionPageId}`)
            .then((res) => res.json())
            .then((data) => {
                setData(data);
                const blockMap = data as BlockMapType;
                setNotionTile(
                    blockMap[Object.keys(blockMap)[0]].value.properties.title
                );
            });
    }, []);

    return (
        <div className="p-2">
            <Accordion className="rounded">
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    className="rounded"
                    sx={{
                        background:
                            "linear-gradient(to right, #f4c4ee, #edbbed, #e6b1ec, #dea8eb, #d4a0eb)",
                    }}
                >
                    <Typography className="fw-bold text-uppercase">
                        {notionTitle}
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <NotionRenderer blockMap={data} />
                </AccordionDetails>
            </Accordion>
        </div>
    );
}
