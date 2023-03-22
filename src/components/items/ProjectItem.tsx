import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Divider,
    Typography,
} from "@mui/material";
import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function ProjectItem(
    {
        projectName,
        projectDescription,
        projectMember,
        projectContribute,
        projectResult,
        projectPosition,
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
    const programming = [
        {
            name: "ASP.NET CORE",
            logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCu-M-ZrBfrGrH2xuQqlNCf0BsM7VY93DtU7O6jebpPFTmNxpsCm5azF7oeZJ2SeWUT2g&usqp=CAU",
        },
        {
            name: "Node JS",
            logo: "https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png",
        },
        {
            name: "TYPESCRIPT",
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png",
        },
        {
            name: "SEQUELIZE",
            logo: "https://seeklogo.com/images/S/sequelize-logo-9A5075DB9F-seeklogo.com.png",
        },
        {
            name: "LARAVEL",
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/985px-Laravel.svg.png",
        },
        {
            name: "socket.io",
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Socket-io.svg/1024px-Socket-io.svg.png",
        },
        {
            name: "PostgreSQL",
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1985px-Postgresql_elephant.svg.png",
        },
        {
            name: "Express",
            logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ18v7qjb95jfqfBueH0PMFkla_3cPQQORDPL_pkACa7Z1IpqKY-8fkvEv75YiV5cwwRXE&usqp=CAU",
        },
        {
            name: "Git",
            logo: "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png",
        },
        {
            name: "GitHub",
            logo: "https://cdn.icon-icons.com/icons2/2368/PNG/512/github_logo_icon_143772.png",
        },
        {
            name: "GitLab",
            logo: "https://cdn-icons-png.flaticon.com/512/5968/5968853.png",
        },
        {
            name: "ReactJS",
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
        },
        {
            name: "Hangfire",
            logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT15nUdQn09z5H68X44pSAbKAua4rwsgLZuk8mti26n7hgNQ0wd2HuHzY-nkiic5AOw2XM&usqp=CAU",
        },
        {
            name: "Postman",
            logo: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/postman-icon.png",
        },
        {
            name: "Bootstrap",
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1280px-Bootstrap_logo.svg.png",
        },
        {
            name: "Material-UI",
            logo: "https://mui.com/static/logo.png",
        },
        {
            nam: "Ant-Design",
            logo: "https://camo.githubusercontent.com/363242675617648bfbedd1610f89ac28df0f9e1bac8749d83109fafdf8524fff/68747470733a2f2f67772e616c697061796f626a656374732e636f6d2f7a6f732f726d73706f7274616c2f4b4470677667754d704766716148506a6963524b2e737667",
        },
        {
            name: "PHP",
            logo: " https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/2560px-PHP-logo.svg.png",
        },
    ];
    const group1 = [
        {
            name: "ASP.NET CORE",
            logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCu-M-ZrBfrGrH2xuQqlNCf0BsM7VY93DtU7O6jebpPFTmNxpsCm5azF7oeZJ2SeWUT2g&usqp=CAU",
        },
        {
            name: "Hangfire",
            logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT15nUdQn09z5H68X44pSAbKAua4rwsgLZuk8mti26n7hgNQ0wd2HuHzY-nkiic5AOw2XM&usqp=CAU",
        },
        {
            name: "ReactJS",
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
        },
        {
            name: "Postman",
            logo: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/postman-icon.png",
        },
        {
            name: "TYPESCRIPT",
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png",
        },
        {
            name: "PostgreSQL",
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1985px-Postgresql_elephant.svg.png",
        },
        {
            name: "Material-UI",
            logo: "https://mui.com/static/logo.png",
        },
        {
            name: "GitLab",
            logo: "https://cdn-icons-png.flaticon.com/512/5968/5968853.png",
        },
        {
            name: "GitHub",
            logo: "https://cdn.icon-icons.com/icons2/2368/PNG/512/github_logo_icon_143772.png",
        },
    ];
    const group2 = [
        {
            name: "socket.io",
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Socket-io.svg/1024px-Socket-io.svg.png",
        },
        {
            name: "Node JS",
            logo: "https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png",
        },
        {
            name: "TYPESCRIPT",
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png",
        },
        {
            name: "SEQUELIZE",
            logo: "https://seeklogo.com/images/S/sequelize-logo-9A5075DB9F-seeklogo.com.png",
        },
        {
            name: "GitLab",
            logo: "https://cdn-icons-png.flaticon.com/512/5968/5968853.png",
        },
        {
            name: "Express",
            logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ18v7qjb95jfqfBueH0PMFkla_3cPQQORDPL_pkACa7Z1IpqKY-8fkvEv75YiV5cwwRXE&usqp=CAU",
        },
        {
            name: "ReactJS",
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
        },
        {
            name: "Postman",
            logo: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/postman-icon.png",
        },
        {
            name: "Bootstrap",
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1280px-Bootstrap_logo.svg.png",
        },
        {
            name: "PostgreSQL",
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1985px-Postgresql_elephant.svg.png",
        },
    ];
    const group3 = [
        {
            name: "LARAVEL",
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/985px-Laravel.svg.png",
        },
        {
            name: "PostgreSQL",
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1985px-Postgresql_elephant.svg.png",
        },
        {
            name: "GitLab",
            logo: "https://cdn-icons-png.flaticon.com/512/5968/5968853.png",
        },
        {
            name: "Postman",
            logo: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/postman-icon.png",
        },
        {
            name: "PHP",
            logo: " https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/2560px-PHP-logo.svg.png",
        },
    ];
    const group4 = [
        {
            name: "ReactJS",
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
        },
        {
            name: "Material-UI",
            logo: "https://mui.com/static/logo.png",
        },
        {
            name: "Bootstrap",
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1280px-Bootstrap_logo.svg.png",
        },
    ];
    const RenderEn = () => {
        let tech = programming;
        if (group === 1) {
            tech = group1;
        } else if (group === 2) {
            tech = group2;
        } else if (group === 3) {
            tech = group3;
        } else if (group === 4) {
            tech = group4;
        }
        return (
            <div className="mx-3">
                {tech.map((program, key) => (
                    <img
                        key={key}
                        alt={program.name}
                        title={program.name}
                        className="mx-2 m-2"
                        style={{
                            height: 25,
                            margin: 1,
                        }}
                        src={program.logo}
                    />
                ))}
            </div>
        );
    };
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
                        {projectName}
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Divider />
                    <div>
                        <div className="fw-bold">✨Description:</div>
                        <div className="p-0 m-2 mx-4 text-justify">
                            {projectDescription}
                        </div>
                    </div>
                    <div className="d-flex align-items-center">
                        <div className="fw-bold">🧑‍🤝‍🧑Member:</div>
                        <div className="p-0 m-0 mx-1 fw-bold">
                            {projectMember}
                        </div>
                    </div>
                    <div className="d-flex align-items-center">
                        <div className="fw-bold">🧑‍💻Position:</div>
                        <div className="p-0 m-0 mx-1 fw-bold">
                            {projectPosition}
                        </div>
                    </div>
                    <div>
                        <div className="fw-bold">🛠️Contribute:</div>
                        <div className="p-0 m-2 mx-4 text-justify">
                            {projectContribute}
                        </div>
                    </div>
                    <div>
                        <div className="fw-bold h6">✨Result:</div>
                        <div className="p-0 m-2 mx-4 text-justify">
                            {projectResult}
                        </div>
                    </div>
                    <div>
                        <div className="fw-bold">⚙️Engineering:</div>
                        <RenderEn />
                    </div>
                    <Divider />
                    <div className="mt-2">
                        {backendUrl ? (
                            <a
                                href={backendUrl}
                                className="btn btn-outline-danger"
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
                                className={`btn mx-3 ${
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
                                className={"btn mx-1 btn-outline-success"}
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
