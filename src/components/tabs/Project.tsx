import React, { useEffect } from "react";
import ProjectItem from "../items/ProjectItem";

export default function Project() {
    useEffect(() => {
        document.title = "Võ Lê Nhựt Khang - Project";
    }, []);
    return (
        <div>
            <ProjectItem
                projectName="Movies Website"
                projectPosition="Backend Developer/Leader"
                projectDescription={
                    "- Một ý tưởng nhất thời của cả nhóm \
                    nhưng lại là một bước ngoặt khiến cho bản thân mình phải cố gắng nổ lực nhiều hơn nữa. \
                    Sản phẩm gồm có những chức năng như: Xem phim, lưu lịch sử, tìm kiếm, bình luận, lưu danh sách phát, có thể nạp tiền vào tài khoản, \
                    cho phép người dùng nâng cấp tài khoản để có thể xem được nhiều phim hơn... Trong quá trình xây dựng có \
                    khó khắn nhất định và điển hình như: tiếp cận và học hỏi một thứ hoàn toàn mới. \
                    Đối với khả năng lúc bấy giờ và nhìn chung theo những mục tiêu được đặt ra lúc ban đầu thì dự án này thành công ở mức 8.5/10."
                }
                projectMember="3"
                projectContribute={
                    "- Nhóm có 3 thành viên có 2 front-end và 1 back-end và kết quả mong muốn là tạo ra 1 app mobile (React-Native), 1 website (ReactTS), \
                    1 back-end (ASP.NET Core) kèm theo đó là 1 admin page (ReactTS) để phục vụ cho việc quản lý dữ liệu của website. \
                    Bản thân đảm nhiệm vị trí xây dựng 100% back-end sử dụng các công nghệ như: ASP.NET Core 6, Entity Framework Core, PostgreSQL, Hangfire. \
                    Sản phẩm được xây dựng theo mô hình Restful API để có thể truy cập được dễ dàng ở mobile hoặc website và song song với đó là xây dựng admin  \
                    page ở mức cơ bản để có thể thao tác dữ liệu của website và test các đầu api trước khi đưa lên giao diện chính thức."
                }
                projectResult={
                    "- Với 6 tháng xây dựng và phát triển liên tục thì sản phẩm cuối cũng đã đáp ứng được những mục tiêu đề ra ban đầu 8.5/10 mục tiêu. \
                    Sau dự án bản thân đã học được thêm những công nghệ mới và biết cách xây dựng một Restful API, được làm việc với Hangfire và Dependency Injection cũng như một chút về front-end developer. \
                    Làm việc nhóm hiệu quả hơn phân chia công việc phù hợp lĩnh vực của thành viên."
                }
                backendUrl="https://gitlab.com/khangdev20/codeflixwebapi.git"
                adminUrl="https://github.com/khangdev20/dashboard-codeflix.git"
                github={true}
                group={1}
            />
            <ProjectItem
                projectName="Music Group Online Website "
                projectPosition="Backend Developer/Leader"
                projectDescription={
                    "- Website nghe nhạc trực tuyến cùng với nhau và nhạc của tất cả những người trong phòng được đồng bộ thời gian với nhau sử dụng công nghệ Socket và framework Socket.io.  \
                    Sản phẩm sử dụng ngôn ngữ lập trình chính là: JavaScript. Cùng với có là một số những Framework khác như Express xây dựng Restful API và Sequelize(ORM) hỗ trợ cho việc tương \
                    tác với database PosgreSQL, về phần của admin gồm có những chứng năng như được quyền thêm xóa sửa bài hát. Người dùng đăng nhập vào Website để được nghe nhạc online cùng với chủ phòng kèm với đó là các tính năng như bình luận, chủ phòng có thể thay đổi bài hát tùy chọn pause/play bài hát trong phòng."
                }
                projectMember="5"
                projectContribute={
                    "- Tìm hiểu nghiên cứu socket và phương pháp để xây dựng một dự án NodeJS. Lên lộ trình lập kế hoạch và  sử dụng những công cụ quản lý như Linear.app và GitLab. Bản thân đóng góp cho dự án 80% backend và xây dựng 90% admin page bằng ReactTS cũng như triển khai từng bước kết nối Server và Client."
                }
                projectResult={
                    "- Hài lòng với kết quả cuối cùng mà cả nhóm tạo ra được. Tuy lần đầu được tiếp cận với Socket và chính tay xây dựng được 1 real-time application mà đã bỏ lở ở những dự án trước cũng như được thực hành trên một ngôn ngữ lập trình khác giúp rèn luyện thêm về tư duy lập trình. Thời gian thực hiện 3 tháng với một khối lượng công việc lớn nhưng vì đã trãi qua 1-2 dự án trước đó nên việc setup tìm hiểu cũng trở nên nhanh chóng và dễ dàng hơn!"
                }
                backendUrl="https://gitlab.com/vnpt-podcast-radio/podcast-radio.git"
                adminUrl="https://gitlab.com/vnpt-podcast-radio/podcast-radio-admin-page.git"
                group={2}
                sheet="https://docs.google.com/spreadsheets/d/1mlIMa60dyBMCl0u9RJwQMwTZsGlTTzTVJEkmzBr5vtA/edit?usp=sharing"
            />
            <ProjectItem
                projectName="E-Commerce Website"
                projectDescription={
                    "- Một Website thương mại điện tử cho phép người dùng đăng nhập mua và đặt hàng sản phẩm của như khởi tạo cửa \
                     hàng và bắt đầu bán hàng. Sử dụng PHP Laravel và PostgreSQL. "
                }
                projectMember="4"
                projectPosition="Backend Developer/Leader"
                projectContribute="- Lên kế hoạch thực hiện cho cả nhóm, thiết kế database và xây dựng 100% back-end của Website với ngôn ngữ chính lập trình chính là PHP và Laravel với mô hình Restful API."
                projectResult={
                    "- Kết quả đáp ứng tốt những yêu cầu đặt ra lúc ban đầu 8/10. Thời gian bắt đầu và hoàn thành trong 2 tháng nên cũng có nhiều hạn chế như chưa áp dụng được GraphQL và Tối ưu hệ thống chưa thật sự tốt!"
                }
                backendUrl="https://gitlab.com/vnpt-php/e-commerce-backend.git"
                group={3}
                sheet="https://docs.google.com/spreadsheets/d/1VgovgrZli3l4VEgcWDTumfhsjrAuJvzPeeG9y06f0ag/edit?usp=sharing"
            />
            <ProjectItem
                projectName="My Profile"
                projectDescription="- Website thông tin cá nhân sử dụng tính năng GitHub Page."
                projectMember="1"
                projectContribute="- Xây được giao diện website cá nhân và hoàn thành trong 2 ngày, sử dụng các công nghệ như: Bootstrap 5, ReactTS, Material-UI, GitHub Page."
                projectPosition="Frontend Developer"
                projectResult="- Ôn lại một chút kiến thức về Fontend cũng như React. Tự xây đựng được website cá nhân và publish lên internet thông qua công cụ GitHub Page."
                adminUrl="https://github.com/khangdev20/khang-vo.git"
                github
                group={4}
                fontend
            />
        </div>
    );
}
