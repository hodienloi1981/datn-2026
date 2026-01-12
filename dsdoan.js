const list_doan = [
    {
        id: 1,
        name: 'Xây dựng Hệ thống Quản lý Bán hàng và Kho cho Doanh nghiệp nhỏ sử dụng Laravel Framework',
        teacher: 'Trần Anh Khoa',
        link: 'trananhkhoa.html',
        number: 2,
    },
    {
        id: 2,
        name: 'Xây dựng Hệ thống Quản lý Bán hàng và Kho cho Doanh nghiệp vừa và nhỏ (SME) sử dụng Django REST API và React.js',
        teacher: 'Trần Anh Khoa',
        link: 'trananhkhoa.html',
        number: 2,
    },
    // { id: 3, name: 'Tên đề tài 1', teacher: 'Hoàng Trọng Thạch', 'link': 'hoangtrongthach.html', number: 2 },
    // { id: 4, name: 'Tên đề tài 2', teacher: 'Hoàng Trọng Thạch', 'link': 'hoangtrongthach.html', number: 2 },
    {
        id: 5,
        name: 'Tìm hiểu hệ thống firewall pfsense cho doanh nghiệp',
        teacher: 'Nguyễn Minh Trường',
        link: 'nguyenminhtruong.html',
        number: 1,
    },
    {
        id: 6,
        name: 'Tìm hiểu và triển khai hệ thống điện toán đám mây OpenStack trên nền Linux ',
        teacher: 'Nguyễn Minh Trường',
        link: 'nguyenminhtruong.html',
        number: 2,
    },
    // { id: 7, name: 'Tên đề tài 1', teacher: 'Huỳnh Trọng Đức', 'link': 'huynhtrongduc.html', number: 2 },
    // { id: 8, name: 'Tên đề tài 2', teacher: 'Huỳnh Trọng Đức', 'link': 'huynhtrongduc.html', number: 2 },
    {
        id: 9,
        name: 'Tìm hiểu Python, Django và xây dựng website bán trái cây',
        teacher: 'Nguyễn Thị Thu Cúc',
        link: 'nguyenthithucuc.html',
        number: 2,
    },
    {
        id: 10,
        name: 'Tìm hiểu Python, Django và xây dựng website bán mỹ phẩm.',
        teacher: 'Nguyễn Thị Thu Cúc',
        link: 'nguyenthithucuc.html',
        number: 2,
    },
    {
        id: 11,
        name: 'Xây dựng ứng dụng web bán hàng quần áo thời trang',
        teacher: 'Chu Thi Mai',
        link: 'chuthimai.html',
        number: 2,
    },
    {
        id: 12,
        name: 'Xây dựng ứng dụng web bán máy tính',
        teacher: 'Chu Thị Mai',
        link: 'chuthimai.html',
        number: 2,
    },
    {
        id: 13,
        name: 'Kiểm thử website (tin tức, bán hàng, giáo dục…)',
        teacher: 'Phạm Văn Sơn',
        link: 'phamvanson.html',
        number: 2,
    },
    {
        id: 14,
        name: 'Kiểm thử ứng dụng (apps) trên nền windows/Android/IOS',
        teacher: 'Phạm Văn Sơn',
        link: 'phamvanson.html',
        number: 2,
    },
    // { id: 15, name: 'Tên đề tài 1', teacher: 'Trương Quang Mạnh', 'link': 'truongquangmanh.html', number: 2 },
    // { id: 16, name: 'Tên đề tài 2', teacher: 'Trương Quang Mạnh', 'link': 'truongquangmanh.html', number: 2 },
    // {
    //     id: 17,
    //     name: 'Xây dựng website gia sư',
    //     teacher: 'Hồ Diên Lợi',
    //     link: 'hodienloi.html',
    //     number: 4,
    // },
    // {
    //     id: 18,
    //     name: 'Xây dựng website thi trắc nghiệm',
    //     teacher: 'Hồ Diên Lợi',
    //     link: 'hodienloi.html',
    //     number: 4,
    // },
    {
        id: 19,
        name: 'Xây dựng ứng dụng đặt phòng khách sạn',
        teacher: 'Nguyễn Thái Khánh Quyên',
        link: 'nguyenthaikhanhquyen.html',
        number: 2,
    },
    {
        id: 20,
        name: 'Tên đề tài 2',
        teacher: 'Nguyễn Thái Khánh Quyên',
        link: 'nguyenthaikhanhquyen.html',
        number: 2,
    },
    {
        id: 21,
        name: 'XÂY DỰNG PHẦN MỀM GAME 3D BẰNG UNITY ENGINE',
        teacher: 'Nguyễn Xuân Nhựt',
        link: 'nguyenxuannhut.html',
        number: 2,
    },
    {
        id: 22,
        name: 'Xây dựng website bán cà phê',
        teacher: 'Nguyễn Xuân Nhựt',
        link: 'nguyenxuannhut.html',
        number: 2,
    },

    {
        id: 23,
        name: 'Sử dụng trí tuệ nhận tạo giám sát, cảnh báo và vô hiệu hóa một số tấn công mạng',
        teacher: 'Đặng Hồng Hiệp',
        link: 'danghonghiep.html',
        number: 2,
    },
    {
        id: 24,
        name: 'Phân tích dữ liệu lớn (Big Data) cho an ninh mạng',
        teacher: 'Đặng Hồng Hiệp',
        link: 'danghonghiep.html',
        number: 2,
    },
    // { id: 25, name: 'Tên đề tài 1', teacher: 'Bùi Trọng Viên', 'link': 'buitrongvien.html', number: 2 },
    // { id: 26, name: 'Tên đề tài 2', teacher: 'Bùi Trọng Viên', 'link': 'buitrongvien.html', number: 2 },
    // { id: 27, name: 'Tên đề tài 1', teacher: 'Thái Thị Huyên', 'link': 'thaithihuyen.html', number: 2 },
    // { id: 28, name: 'Tên đề tài 2', teacher: 'Thái Thị Huyên', 'link': 'thaithihuyen.html', number: 2 },
    {
        id: 29,
        name: 'XÂY DỰNG SÀN GIAO DỊCH BẤT ĐỘNG SẢN THÔNG MINH ĐA NỀN TẢNG THEO KIẾN TRÚC MICROSERVICE, TRIỂN KHAI BẰNG DOCKER',
        teacher: 'Huỳnh Tấn Phát',
        link: 'huynhtanphat.html',
        number: 4,
    },
    {
        id: 30,
        name: 'XÂY DỰNG HỆ THỐNG HỌC TẬP TRỰC TUYẾN CÁ NHÂN HÓA CHO LẬP TRÌNH VIÊN THEO KIẾN TRÚC MICROSERVICE, TRIỂN KHAI BẰNG DOCKER',
        teacher: 'Huỳnh Tấn Phát',
        link: 'huynhtanphat.html',
        number: 4,
    },
    {
        id: 31,
        name: 'Xây dựng web thương mại điện tử tích hợp nhận diện sản phẩm bằng thị giác máy tính và phân tích dữ liệu',
        teacher: 'Trần Nhật Nam',
        link: 'trannhatnam.html',
        number: 5,
    },
    {
        id: 32,
        name: 'Thiết kế và triển khai hệ thống web thương mại điện tử C2C dựa trên kiến trúc Modular Monolith',
        teacher: 'Trần Nhật Nam',
        link: 'trannhatnam.html',
        number: 5,
    },
    {
        id: 33,
        name: 'Xây dựng hệ thống quản lý chuỗi nhà hàng',
        teacher: 'Lê Thị Tố Thi',
        link: 'lethitothi.html',
        number: 3,
    },
    {
        id: 34,
        name: 'Xây dựng hệ thống quản lý chuỗi phòng trọ',
        teacher: 'Lê Thị Tố Thi',
        link: 'lethitothi.html',
        number: 3,
    },
    {
        id: 35,
        name: 'Triển khai hệ thống phòng thủ mạng đa lớp (IDS/IPS) và ứng dụng AI trong nhận diện tấn công Phishing/Malware',
        teacher: 'Vũ Thị Hường',
        link: 'vuthihuong.html',
        number: 2,
    },
    {
        id: 36,
        name: 'Thiết kế và triển khai hạ tầng mạng doanh nghiệp trên nền tảng ảo hóa (Proxmox/ESXi), tích hợp AI Assistant để tự động hóa quản trị. ',
        teacher: 'Vũ Thị Hường',
        link: 'vuthihuong.html',
        number: 2,
    },
    // { id: 37, name: 'Tên đề tài 1', teacher: 'Hoàng Mạnh Hùng', 'link': 'hoangmanhung.html', number: 2 },
    // { id: 38, name: 'Tên đề tài 2', teacher: 'Hoàng Mạnh Hùng', 'link': 'hoangmanhung.html', number: 2 },
    {
        id: 39,
        name: 'Xây dựng hệ thống quản lý chuỗi bảo trì xe máy ',
        teacher: 'Trần Thị Diễm',
        link: 'tranthidiem.html',
        number: 3,
    },
    {
        id: 40,
        name: 'Xây dựng hệ thống quản lý CV, đồ án lập trình và thông tin tuyển dụng cho Khoa Công nghệ Thông tin',
        teacher: 'Trần Thị Diễm',
        link: 'tranthidiem.html',
        number: 3,
    },
];
var html_tr = ``;
var stt = 1;
list_doan.forEach((item) => {
    html_tr += `
        <tr>
            <td class="border border-gray-300 p-3 text-center">${stt}</td>
            <td class="border border-gray-300 p-3">
                <a href="${item.link}" class="hover:text-red-800 hover:border-b">
                    ${item.name}
                </a>            
            </td>
            <td class="border border-gray-300 p-3">
                <a href="${item.link}">
                    ${item.teacher}
                </a>
            </td>
            <td class="border border-gray-300 p-3 text-center">${item.number}</td>
        </tr>
    `;
    stt = stt + 1;
});
document.getElementById('dsdoan').innerHTML = html_tr;
