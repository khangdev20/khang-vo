import React, { useEffect } from "react";
import "../../index.css";

export default function Description() {
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
    ];
    const RenderEn = () => {
        return (
            <div className="mx-2">
                {programming.map((program, key) => (
                    <img
                        key={key}
                        alt={program.name}
                        title={program.name}
                        className="mx-1 m-1 logo-hover"
                        src={program.logo}
                    />
                ))}
            </div>
        );
    };

    useEffect(() => {
        document.title = "Võ Lê Nhựt Khang - Description";
    }, []);
    return (
        <div className="p-4">
            <div>
                <p className="text-center">Hòa đồng - Vui vẻ - Chăm chỉ</p>
            </div>
            <div>
                <div className="h6 fw-bold">🏫 EDUCATION:</div>
                <div className="align-items-center mx-2 mb-3">
                    <div>
                        <a
                            href="https://www.hutech.edu.vn/"
                            className="p-0 m-0 mx-4 h6 fw-bold text-decoration-none text-dark d-hover text-uppercase"
                        >
                            Ho Chi Minh City University of Technology (HUTECH)
                        </a>
                        <img
                            alt=""
                            height={25}
                            src="https://cdn.haitrieu.com/wp-content/uploads/2021/09/Logo-DH-CONG-NGHE-THANH-PHO-HO-CHI-MINH-HUTECH.png"
                        />
                    </div>
                    <p className="p-0 m-0 mx-3 fw-lighter">
                        👩‍🎓Final year student
                    </p>
                </div>
            </div>
            <div className="mb-4">
                <div className="h6 fw-bold">😉 TECHNICAL SKILLS:</div>
                <div className="d-flex mx-3 fex-column">
                    <RenderEn />
                </div>
            </div>
            <div className="mb-4">
                <div className="h6 fw-bold">📖 CERTIFICATES:</div>
                <div className="mx-4">
                    <p className="p-0 m-0 mx-2 fw-lighter">
                        - Agile & Scrum course with DEK Technologies Vietnam
                        (06/2022)
                    </p>
                    <p className="p-0 m-0 mx-2 fw-lighter">
                        - Communication and Teamwork Skills (05/2022)
                    </p>
                    <p className="p-0 m-0 mx-2 fw-lighter">
                        - Presentation and Job Seeking Skills (05/2022)
                    </p>

                    <p className="p-0 m-0 mx-2 fw-lighter">
                        - Certificate of English B1 (12/2022)
                    </p>
                </div>
            </div>
            <div className="mb-4">
                <div className="h6 fw-bold">🥰 HOBBIES:</div>
                <div className="d-flex mx-4 flex-wrap">
                    <p className="p-1.5 m-1 mx-1 fw-bold btn btn-outline-secondary">
                        Sing🎤
                    </p>
                    <p className="p-1.5 m-1 mx-1 fw-bold btn btn-outline-secondary">
                        Music🎵
                    </p>
                    <p className="p-1.5 m-1 mx-1 fw-bold btn btn-outline-secondary">
                        Guitar 🎸
                    </p>
                    <p className="p-1.5 m-1 mx-1 fw-bold btn btn-outline-secondary">
                        Football ⚽
                    </p>
                    <p className="p-1.5 m-1 mx-1 fw-bold btn btn-outline-secondary">
                        Technology 🧑‍💻
                    </p>
                    <p className="p-1.5 m-1 mx-1 fw-bold btn btn-outline-secondary">
                        Travel ✈️
                    </p>
                </div>
            </div>
        </div>
    );
}
