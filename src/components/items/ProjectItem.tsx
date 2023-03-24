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
        // notion-api-worker
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
                    <Divider />
                    <NotionRenderer blockMap={data} />
                    <Divider />
                    <div className="mt-2 mx-3 ">
                        {backendUrl ? (
                            <a
                                href={backendUrl}
                                className="btn mt-2 btn-outline-danger"
                            >
                                Backend
                                <img
                                    className="mx-1"
                                    alt=""
                                    src="https://cdn-icons-png.flaticon.com/512/5968/5968853.png"
                                    width={25}
                                />
                            </a>
                        ) : (
                            ""
                        )}
                        {adminUrl ? (
                            <a
                                href={adminUrl}
                                className={`btn mt-2 mx-3 ${
                                    github
                                        ? "btn-outline-dark"
                                        : "btn-outline-danger"
                                }`}
                            >
                                {fontend ? "Frontend" : "Admin page"}
                                <img
                                    className="mx-1"
                                    alt=""
                                    src={
                                        github
                                            ? "https://cdn.icon-icons.com/icons2/2368/PNG/512/github_logo_icon_143772.png"
                                            : "https://cdn-icons-png.flaticon.com/512/5968/5968853.png"
                                    }
                                    width={25}
                                />
                            </a>
                        ) : (
                            ""
                        )}

                        {android ? (
                            <a
                                href={android}
                                className={`btn mx-3 ${
                                    github
                                        ? "btn-outline-dark"
                                        : "btn-outline-danger"
                                }`}
                            >
                                Android
                                <img
                                    className="mx-1"
                                    alt=""
                                    src={
                                        github
                                            ? "https://cdn.icon-icons.com/icons2/2368/PNG/512/github_logo_icon_143772.png"
                                            : "https://cdn-icons-png.flaticon.com/512/5968/5968853.png"
                                    }
                                    width={25}
                                />
                            </a>
                        ) : (
                            ""
                        )}
                        {sheet ? (
                            <a
                                href={sheet}
                                className={"btn mt-2 mx-1 btn-outline-success"}
                            >
                                Plan
                                <img
                                    className="mx-1"
                                    alt=""
                                    src={
                                        "https://cdn-icons-png.flaticon.com/512/2991/2991114.png"
                                    }
                                    width={25}
                                />
                            </a>
                        ) : (
                            ""
                        )}
                    </div>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}
