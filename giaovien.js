const list_giaovien = [
    { id: 1, 'name': 'Trần Anh Khoa', 'link': 'trananhkhoa.html' },
    // { id: 2, 'name': 'Hoàng Trọng Thạch', 'link': 'hoangtrongthach.html' },
    { id: 3, 'name': 'Nguyễn Minh Trường', 'link': 'nguyenminhtruong.html' },
    // { id: 4, 'name': 'Huỳnh Trọng Đức', 'link': 'huynhtrongduc.html' },
    { id: 5, 'name': 'Nguyễn Thị Thu Cúc', 'link': 'nguyenthithucuc.html' },
    { id: 6, 'name': 'Chu Thị Mai', 'link': 'chuthimai.html' },
    { id: 7, 'name': 'Phạm Văn Sơn', 'link': 'phamvanson.html' },
    // { id: 8, 'name': 'Trương Quang Mạnh', 'link': 'truongquangmanh.html' },
    { id: 9, 'name': 'Hồ Diên Lợi', 'link': 'hodienloi.html' },
    { id: 10, 'name': 'Nguyễn Thái Khánh Quyên', 'link': 'nguyenthaikhanhquyen.html' },
    { id: 11, 'name': 'Nguyễn Xuân Nhựt', 'link': 'nguyenxuannhut.html' },
    { id: 12, 'name': 'Đặng Hồng Hiệp', 'link': 'danghonghiep.html' },
    // { id: 13, 'name': 'Bùi Trọng Viên', 'link': 'buitrongvien.html' },
    // { id: 14, 'name': 'Thái Thị Huyên', 'link': 'thaithihuyen.html' },
    { id: 15, 'name': 'Huỳnh Tấn Phát', 'link': 'huynhtanphat.html' },
    { id: 16, 'name': 'Trần Nhật Nam', 'link': 'trannhatnam.html' },
    { id: 17, 'name': 'Lê Thị Tố Thi', 'link': 'lethitothi.html' },
    // { id: 18, 'name': 'Hoàng Mạnh Hùng', 'link': 'hoangmanhhung.html' },
    // { id: 19, 'name': 'Trần Thị Diễm', 'link': 'tranthidiem.html' },
    // { id: 20, 'name': 'Trần Anh Khoa', 'link': 'trananhkhoa.html' },
    // { id: 21, 'name': 'Trần Anh Khoa', 'link': 'trananhkhoa.html' },
    // { id: 22, 'name': 'Trần Anh Khoa', 'link': 'trananhkhoa.html' },
    // { id: 22, 'name': 'Trần Anh Khoa', 'link': 'trananhkhoa.html' },
    // { id: 23, 'name': 'Trần Anh Khoa', 'link': 'trananhkhoa.html' },
    // { id: 24, 'name': 'Trần Anh Khoa', 'link': 'trananhkhoa.html' },
    // { id: 25, 'name': 'Trần Anh Khoa', 'link': 'trananhkhoa.html' },
];
var html_link = ``;
var index = 1;
list_giaovien.forEach((item) => {
    html_link += `<li>
        <a class="block py-2 hover:text-red-800 hover:border-b border-gray-100"
        href="${item.link}">${index}. ${item.name}</a>
    </li>`;
    index = index + 1;
})
document.getElementById("list_giaovien").innerHTML = html_link;