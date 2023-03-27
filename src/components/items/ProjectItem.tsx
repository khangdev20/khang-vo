import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { NotionRenderer, BlockMapType } from "react-notion";
import { SyncOutlined } from "@ant-design/icons";

export default function ProjectItem({ notionPageId }: any) {
    const [data, setData] = useState({});
    const [notionTitle, setNotionTile] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch(`https://notion-api.splitbee.io/v1/page/${notionPageId}`)
            .then((res) => res.json())
            .then((data) => {
                setData(data);
                const blockMap = data as BlockMapType;
                setNotionTile(
                    blockMap[Object.keys(blockMap)[0]].value.properties.title
                );
            })
            .finally(() => {
                setLoading(false);
            });
    }, [notionPageId]);

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
                    <span>
                        <Typography className="fw-bold text-uppercase">
                            {notionTitle}
                        </Typography>
                        {loading ? (
                            <SyncOutlined
                                spin={loading}
                                twoToneColor="#eb2f96"
                            />
                        ) : (
                            ""
                        )}
                    </span>
                </AccordionSummary>
                <AccordionDetails>
                    <NotionRenderer blockMap={data} />
                </AccordionDetails>
            </Accordion>
        </div>
    );
}
