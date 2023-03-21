import React, { useEffect } from "react";
import { Item } from "../items/Item";

export default function Contact() {
    useEffect(() => {
        document.title = "Võ Lê Nhựt Khang - Contact";
    }, []);
    return (
        <div>
            <Item
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Facebook_logo_%28square%29.png/480px-Facebook_logo_%28square%29.png"
                name="Facebook"
                linkDislay="@facebook.com/vokhang21"
                url="https://www.facebook.com/vokhang21"
            />
            <Item
                src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
                name="Linkedin"
                linkDislay="@linkedin.com/in/vokhang"
                url="https://www.linkedin.com/in/vokhang/"
            />
            <Item
                src="https://1000logos.net/wp-content/uploads/2021/05/Gmail-logo-500x281.png"
                name="Gmail"
                linkDislay="volenhatkhang1808@gmail.com"
            />
            <Item
                src="https://cdn-icons-png.flaticon.com/512/5968/5968853.png"
                name="GitLab"
                linkDislay="@gitlab.com/khangdev20"
                url="https://gitlab.com/khangdev20"
            />
            <Item
                src="https://cdn-icons-png.flaticon.com/512/2111/2111612.png"
                name="GitHub"
                linkDislay="@github.com/khangdev20"
                url="https://github.com/khangdev20"
            />
        </div>
    );
}
