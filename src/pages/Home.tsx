import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Avatar, Divider } from "@mui/material";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import TabHeader from "../components/tabs/TabHeader";
import EditLocationAltOutlinedIcon from "@mui/icons-material/EditLocationAltOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import "../index.css";

export default function Home() {
    const iconSize = {
        fontSize: 25,
    };

    console.log(iconSize);
    return (
        <div
            className="container p-3 rounded min-vh-100"
            style={{
                maxWidth: "730px",
                background: "white",
            }}
        >
            <div className="p-2">
                <div className="d-flex flex-wrap align-items-center justify-content-center ">
                    <div className="d-flex align-items-center flex-wrap justify-content-center m-2">
                        <Avatar
                            alt="Remy Sharp"
                            src="https://scontent-hkg4-1.xx.fbcdn.net/v/t39.30808-6/328891727_1204167630214778_6585072608141860780_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=59vTW-KyBPAAX8K5mq7&_nc_ht=scontent-hkg4-1.xx&oh=00_AfCtOFURQ974jmID6503NSQysJm9tfJAuCJOaoNFv-HAlg&oe=641DA2D9"
                            sx={{ width: 140, height: 140 }}
                        />
                        <div className="mx-2 p-3 m-0 ">
                            <div className="d-flex align-items-center">
                                <PersonOutlinedIcon sx={iconSize} />
                                <span className="h5 p-0 m-2 mx-2 fw-normal">
                                    Võ Lê Nhựt Khang
                                </span>
                            </div>
                            <div className="d-flex align-items-center ">
                                <LocalPhoneOutlinedIcon sx={iconSize} />
                                <span className="h5 p-0 m-2 mx-2 fw-normal">
                                    0789511312
                                </span>
                            </div>
                            <div className="d-flex align-items-center">
                                <EditLocationAltOutlinedIcon sx={iconSize} />
                                <span className="h5 p-0 m-2 mx-2 fw-normal ">
                                    TP. Hồ Chí Minh
                                </span>
                            </div>
                            <div className="d-flex align-items-center">
                                <WorkOutlineOutlinedIcon sx={iconSize} />
                                <span className="h5 p-0 m-2 mx-2 fw-normal ">
                                    Backend Developer
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex flex-column align-items-center d-hover mb-3">
                        <img
                            alt="hutech"
                            height={40}
                            src="https://cdn.haitrieu.com/wp-content/uploads/2021/09/Logo-DH-CONG-NGHE-THANH-PHO-HO-CHI-MINH-HUTECH.png"
                        />
                        <a
                            href="https://www.hutech.edu.vn/"
                            className="p-0 m-1 mx-2 h6 fw-bold text-decoration-none text-dark"
                        >
                            HUTECH UNIVERSITY
                        </a>
                    </div>
                </div>
                <Divider sx={{ borderBottomWidth: 4 }} variant="fullWidth" />
                <TabHeader />
            </div>
            <footer>
                <div className="text-center">
                    <p>
                        <em>Copyright by Le Nhut Khang, Vo</em>
                    </p>
                </div>
            </footer>
        </div>
    );
}
