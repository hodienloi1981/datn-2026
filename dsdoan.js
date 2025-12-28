const list_doan = [
    { id: 1, name: 'Xây dựng website gia sư', teacher: 'Hồ Diên Lợi', 'link': 'hodienloi.html', number: 2 },
    { id: 2, name: 'Xây dựng website thi trắc nghiệm', teacher: 'Hồ Diên Lợi', 'link': 'hodienloi.html', number: 2 },
    { id: 3, name: 'Xây dựng ứng dụng web bán hàng quần áo thời trang', teacher: 'Chu Thi Mai', 'link': 'chuthimai.html', number: 2 },
    { id: 4, name: 'Xây dựng ứng dụng web bán máy tính', teacher: 'Chu Thị Mai', 'link': 'chuthimai.html', number: 2 },
    { id: 5, name: 'Kiểm thử website (tin tức, bán hàng, giáo dục…)', teacher: 'Phạm Văn Sơn', 'link': 'phamvanson.html', number: 2 },
    { id: 6, name: 'Kiểm thử ứng dụng (apps) trên nền windows/Android/IOS', teacher: 'Phạm Văn Sơn', 'link': 'phamvanson.html', number: 2 },
    { id: 7, name: 'XÂY DỰNG PHẦN MỀM GAME 3D BẰNG UNITY ENGINE', teacher: 'Nguyễn Xuân Nhựt', 'link': 'nguyenxuannhut.html', number: 2 },
    { id: 8, name: 'Xây dựng website bán cà phê', teacher: 'Nguyễn Xuân Nhựt', 'link': 'nguyenxuannhut.html', number: 2 },
    { id: 9, name: 'Sử dụng trí tuệ nhận tạo giám sát, cảnh báo và vô hiệu hóa một số tấn công mạng', teacher: 'Đặng Hồng Hiệp', 'link': 'danghonghiep.html', number: 2 },
    { id: 10, name: 'Phân tích dữ liệu lớn (Big Data) cho an ninh mạng', teacher: 'Đặng Hồng Hiệp', 'link': 'danghonghiep.html', number: 2 },
    // { id: 11, name: 'Tên đề tài 1', teacher: 'Hồ Diên Lợi', 'link': 'hodienloi.html', number: 2 },
    // { id: 12, name: 'Tên đề tài 1', teacher: 'Hồ Diên Lợi', 'link': 'hodienloi.html', number: 2 },
    // { id: 13, name: 'Tên đề tài 1', teacher: 'Hồ Diên Lợi', 'link': 'hodienloi.html', number: 2 },
];
var html_tr = ``;
list_doan.forEach((item) => {
    html_tr += `
        <tr>
            <td class="border border-gray-300 p-3 text-center">${item.id}</td>
            <td class="border border-gray-300 p-3">
                <a href="${item.link}">
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
});
document.getElementById('dsdoan').innerHTML = html_tr;