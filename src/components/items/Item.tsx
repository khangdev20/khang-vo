import React from "react";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import { Avatar } from "@mui/material";
import "../../index.css";

export const Item = ({ src, name, linkDislay, url }: any) => {
    return (
        <div className="d-flex align-items-center bg-light bg-gradient  p-2 m-4 rounded justify-content-between ">
            <div className="d-flex align-items-center text-truncate">
                <Avatar className="mx-2" variant="square" src={src} />
                <div className="d-flex mx-3 flex-column ">
                    <span className="h5 p-0 m-0 mx-2  d-hover ">{name}</span>
                    <span
                        className="h6 p-0 m-2 mx-2 fst-italic d-hover"
                        title={url}
                    >
                        <a className="text-truncate" href={url}>
                            {linkDislay}
                        </a>
                    </span>
                </div>
            </div>
            <div className="mx-2">
                <ArrowForwardIosOutlinedIcon
                    sx={{
                        opacity: 0.4,
                    }}
                />
            </div>
        </div>
    );
};
