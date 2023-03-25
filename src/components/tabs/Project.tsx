import React, { useEffect } from "react";
import ProjectItem from "../items/ProjectItem";

export default function Project() {
    useEffect(() => {
        document.title = "Võ Lê Nhựt Khang - Project";
    }, []);
    return (
        <div>
            <ProjectItem notionPageId="7f8fcd9f9cc44b6d9b00e7f9ce797623" />
            <ProjectItem notionPageId="8ff45e7246944685a1f310bdb9646930" />
            <ProjectItem notionPageId="8e00e63eed6c4fd7aa3eede22a43c20e" />
            <ProjectItem notionPageId="7ee43558439e4605a9d9433bf26fd51d" />
        </div>
    );
}
