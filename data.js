const studentData = [
  {
    "Họ và tên": "DƯƠNG THANH TOÀN",
    "gioi tinh": "Nam",
    "Dan tộc": "Kinh",
    "Lớp năm học 2024-2025": "10B1",
    "Lớp năm học 2025-2026": "11B1"
  },
  {
    "Họ và tên": "TRẦN CHÍ DŨNG",
    "gioi tinh": "Nam",
    "Dan tộc": "Lào",
    "Lớp năm học 2024-2025": "10B1",
    "Lớp năm học 2025-2026": "11B1"
  },
  {
    "Họ và tên": "NGUYỄN ĐÌNH KHÁNH",
    "gioi tinh": "Nam",
    "Dan tộc": "Kinh",
    "Lớp năm học 2024-2025": "10B1",
    "Lớp năm học 2025-2026": "11B1"
  },
  {
    "Họ và tên": "TÒNG GIA HUY",
    "gioi tinh": "Nam",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B1",
    "Lớp năm học 2025-2026": "11B1"
  },
  {
    "Họ và tên": "VŨ THÀNH SƠN",
    "gioi tinh": "Nam",
    "Dan tộc": "Kinh",
    "Lớp năm học 2024-2025": "10B1",
    "Lớp năm học 2025-2026": "11B1"
  },
  {
    "Họ và tên": "TÒNG GIA LONG",
    "gioi tinh": "Nam",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B1",
    "Lớp năm học 2025-2026": "11B1"
  },
  {
    "Họ và tên": "NGUYỄN KHÁNH NHI",
    "gioi tinh": "Nữ",
    "Dan tộc": "Kinh",
    "Lớp năm học 2024-2025": "10B1",
    "Lớp năm học 2025-2026": "11B1"
  },
  {
    "Họ và tên": "ĐÀO QUỐC PHONG",
    "gioi tinh": "Nam",
    "Dan tộc": "Kinh",
    "Lớp năm học 2024-2025": "10B1",
    "Lớp năm học 2025-2026": "11B1"
  },
  {
    "Họ và tên": "LẠI ĐÌNH GIA HUY",
    "gioi tinh": "Nam",
    "Dan tộc": "Kinh",
    "Lớp năm học 2024-2025": "10B1",
    "Lớp năm học 2025-2026": "11B1"
  },
  {
    "Họ và tên": "VŨ TIẾN DŨNG",
    "gioi tinh": "Nam",
    "Dan tộc": "Kinh",
    "Lớp năm học 2024-2025": "10B1",
    "Lớp năm học 2025-2026": "11B1"
  },
  {
    "Họ và tên": "LẦU THỊ KIM HUỆ",
    "gioi tinh": "Nữ",
    "Dan tộc": "HMông",
    "Lớp năm học 2024-2025": "10B1",
    "Lớp năm học 2025-2026": "11B1"
  },
  {
    "Họ và tên": "NGUYỄN BẢO AN",
    "gioi tinh": "Nam",
    "Dan tộc": "Kinh",
    "Lớp năm học 2024-2025": "10B1",
    "Lớp năm học 2025-2026": "11B1"
  },
  {
    "Họ và tên": "NGUYỄN GIA BẢO",
    "gioi tinh": "Nam",
    "Dan tộc": "Kinh",
    "Lớp năm học 2024-2025": "10B1",
    "Lớp năm học 2025-2026": "11B1"
  },
  {
    "Họ và tên": "TÒNG NHẬT TÂN",
    "gioi tinh": "Nam",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B1",
    "Lớp năm học 2025-2026": "11B1"
  },
  {
    "Họ và tên": "PHAN CHÍ DŨNG",
    "gioi tinh": "Nam",
    "Dan tộc": "Kinh",
    "Lớp năm học 2024-2025": "10B1",
    "Lớp năm học 2025-2026": "11B1"
  },
  {
    "Họ và tên": "NGUYỄN THỊ THU TRANG",
    "gioi tinh": "Nữ",
    "Dan tộc": "Kinh",
    "Lớp năm học 2024-2025": "10B1",
    "Lớp năm học 2025-2026": "11B1"
  },
  {
    "Họ và tên": "NGUYỄN THỊ BẠCH DƯƠNG",
    "gioi tinh": "Nữ",
    "Dan tộc": "Kinh",
    "Lớp năm học 2024-2025": "10B1",
    "Lớp năm học 2025-2026": "11B1"
  },
  {
    "Họ và tên": "NGUYỄN PHÚC BÌNH",
    "gioi tinh": "Nam",
    "Dan tộc": "Kinh",
    "Lớp năm học 2024-2025": "10B1",
    "Lớp năm học 2025-2026": "11B1"
  },
  {
    "Họ và tên": "CẦM YẾN NHI",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B1",
    "Lớp năm học 2025-2026": "11B1"
  },
  {
    "Họ và tên": "ĐÀO VĂN LONG",
    "gioi tinh": "Nam",
    "Dan tộc": "Kinh",
    "Lớp năm học 2024-2025": "10B1",
    "Lớp năm học 2025-2026": "11B1"
  },
  {
    "Họ và tên": "NGÔ TRUNG HIẾU",
    "gioi tinh": "Nam",
    "Dan tộc": "Kinh",
    "Lớp năm học 2024-2025": "10B1",
    "Lớp năm học 2025-2026": "11B1"
  },
  {
    "Họ và tên": "LÒ VIỆT TRƯỜNG",
    "gioi tinh": "Nam",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B1",
    "Lớp năm học 2025-2026": "11B1"
  },
  {
    "Họ và tên": "LÒ THỊ NGỌC",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B1",
    "Lớp năm học 2025-2026": "11B1"
  },
  {
    "Họ và tên": "QUÀNG VĂN BÌNH",
    "gioi tinh": "Nam",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B1",
    "Lớp năm học 2025-2026": "11B1"
  },
  {
    "Họ và tên": "DƯƠNG NGUYỄN HÀ VI",
    "gioi tinh": "Nữ",
    "Dan tộc": "Kinh",
    "Lớp năm học 2024-2025": "10B1",
    "Lớp năm học 2025-2026": "11B1"
  },
  {
    "Họ và tên": "LƯỜNG ĐỨC VIỆT",
    "gioi tinh": "Nam",
    "Dan tộc": "Lào",
    "Lớp năm học 2024-2025": "10B1",
    "Lớp năm học 2025-2026": "11B1"
  },
  {
    "Họ và tên": "VÌ VĂN THÀNH",
    "gioi tinh": "Nam",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B1",
    "Lớp năm học 2025-2026": "11B1"
  },
  {
    "Họ và tên": "TÒNG HUY HOÀNG",
    "gioi tinh": "Nam",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B1",
    "Lớp năm học 2025-2026": "11B1"
  },
  {
    "Họ và tên": "ĐẶNG MINH TIẾN",
    "gioi tinh": "Nam",
    "Dan tộc": "Kinh",
    "Lớp năm học 2024-2025": "10B1",
    "Lớp năm học 2025-2026": "11B1"
  },
  {
    "Họ và tên": "DƯƠNG HOÀI NAM",
    "gioi tinh": "Nam",
    "Dan tộc": "Kinh",
    "Lớp năm học 2024-2025": "10B2",
    "Lớp năm học 2025-2026": "11B1"
  },
  {
    "Họ và tên": "VÌ THỊ NGUYỆT",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B2",
    "Lớp năm học 2025-2026": "11B1"
  },
  {
    "Họ và tên": "LÒ THỊ THƯ",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B2",
    "Lớp năm học 2025-2026": "11B1"
  },
  {
    "Họ và tên": "VÌ THỊ KIM CHI",
    "gioi tinh": "Nữ",
    "Dan tộc": "Lào",
    "Lớp năm học 2024-2025": "10B2",
    "Lớp năm học 2025-2026": "11B1"
  },
  {
    "Họ và tên": "SỘNG THỊ PẠ CHUA",
    "gioi tinh": "Nữ",
    "Dan tộc": "HMông",
    "Lớp năm học 2024-2025": "10B2",
    "Lớp năm học 2025-2026": "11B1"
  },
  {
    "Họ và tên": "LƯỜNG THỊ NHƯ",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B2",
    "Lớp năm học 2025-2026": "11B1"
  },
  {
    "Họ và tên": "TÒNG THỊ ÁNH TUYẾT",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B2",
    "Lớp năm học 2025-2026": "11B1"
  },
  {
    "Họ và tên": "TÒNG THỊ YẾN NHI",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B2",
    "Lớp năm học 2025-2026": "11B1"
  },
  {
    "Họ và tên": "VÌ THỊ THU TRANG",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B2",
    "Lớp năm học 2025-2026": "11B1"
  },
  {
    "Họ và tên": "HÀ THỊ MINH HẰNG",
    "gioi tinh": "Nữ",
    "Dan tộc": "Lào",
    "Lớp năm học 2024-2025": "10B2",
    "Lớp năm học 2025-2026": "11B1"
  },
  {
    "Họ và tên": "TÒNG THỊ XUÂN",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B2",
    "Lớp năm học 2025-2026": "11B1"
  },
  {
    "Họ và tên": "LÒ THỊ NGỌC BÍCH",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B2",
    "Lớp năm học 2025-2026": "11B1"
  },
  {
    "Họ và tên": "BẠC QUỲNH NHƯ",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B3",
    "Lớp năm học 2025-2026": "11B1"
  },
  {
    "Họ và tên": "LƯỜNG THỊ VÂN",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B3",
    "Lớp năm học 2025-2026": "11B1"
  },
  {
    "Họ và tên": "THÀO THỊ CÔNG",
    "gioi tinh": "Nữ",
    "Dan tộc": "HMông",
    "Lớp năm học 2024-2025": "10B10",
    "Lớp năm học 2025-2026": "11B10"
  },
  {
    "Họ và tên": "LÒ THỊ QUỲNH NHƯ",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B10",
    "Lớp năm học 2025-2026": "11B10"
  },
  {
    "Họ và tên": "VÀNG THỊ HỢ",
    "gioi tinh": "Nữ",
    "Dan tộc": "HMông",
    "Lớp năm học 2024-2025": "10B10",
    "Lớp năm học 2025-2026": "11B10"
  },
  {
    "Họ và tên": "VÌ THỊ TÂM NHƯ",
    "gioi tinh": "Nữ",
    "Dan tộc": "Lào",
    "Lớp năm học 2024-2025": "10B10",
    "Lớp năm học 2025-2026": "11B10"
  },
  {
    "Họ và tên": "LÒ THỊ QUÝ",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B10",
    "Lớp năm học 2025-2026": "11B10"
  },
  {
    "Họ và tên": "QUÀNG VĂN HUY",
    "gioi tinh": "Nam",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B10",
    "Lớp năm học 2025-2026": "11B10"
  },
  {
    "Họ và tên": "LÒ VĂN HẢO",
    "gioi tinh": "Nam",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B10",
    "Lớp năm học 2025-2026": "11B10"
  },
  {
    "Họ và tên": "LƯỜNG DUY KHÁNH",
    "gioi tinh": "Nam",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B10",
    "Lớp năm học 2025-2026": "11B10"
  },
  {
    "Họ và tên": "TÒNG VĂN NGHIỆP",
    "gioi tinh": "Nam",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B10",
    "Lớp năm học 2025-2026": "11B10"
  },
  {
    "Họ và tên": "VÌ THỊ ÁNH TUYẾT",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B10",
    "Lớp năm học 2025-2026": "11B10"
  },
  {
    "Họ và tên": "HÀ VĂN KHƯƠNG",
    "gioi tinh": "Nam",
    "Dan tộc": "Lào",
    "Lớp năm học 2024-2025": "10B10",
    "Lớp năm học 2025-2026": "11B10"
  },
  {
    "Họ và tên": "TÒNG ĐỨC DUY",
    "gioi tinh": "Nam",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B10",
    "Lớp năm học 2025-2026": "11B10"
  },
  {
    "Họ và tên": "QUÀNG VĂN THƠM",
    "gioi tinh": "Nam",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B10",
    "Lớp năm học 2025-2026": "11B10"
  },
  {
    "Họ và tên": "SỒNG A SỬ",
    "gioi tinh": "Nam",
    "Dan tộc": "HMông",
    "Lớp năm học 2024-2025": "10B10",
    "Lớp năm học 2025-2026": "11B10"
  },
  {
    "Họ và tên": "MÙA A SANG",
    "gioi tinh": "Nam",
    "Dan tộc": "HMông",
    "Lớp năm học 2024-2025": "10B10",
    "Lớp năm học 2025-2026": "11B10"
  },
  {
    "Họ và tên": "MÙA A KHAI",
    "gioi tinh": "Nam",
    "Dan tộc": "HMông",
    "Lớp năm học 2024-2025": "10B10",
    "Lớp năm học 2025-2026": "11B10"
  },
  {
    "Họ và tên": "LÒ THỊ HÀ YẾN",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B10",
    "Lớp năm học 2025-2026": "11B10"
  },
  {
    "Họ và tên": "TÒNG VĂN PHÚ",
    "gioi tinh": "Nam",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B10",
    "Lớp năm học 2025-2026": "11B10"
  },
  {
    "Họ và tên": "LÒ VĂN SƠN",
    "gioi tinh": "Nam",
    "Dan tộc": "Lào",
    "Lớp năm học 2024-2025": "10B10",
    "Lớp năm học 2025-2026": "11B10"
  },
  {
    "Họ và tên": "LƯỜNG THỊ TƯƠI",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B10",
    "Lớp năm học 2025-2026": "11B10"
  },
  {
    "Họ và tên": "TÒNG HOÀNG LÂM",
    "gioi tinh": "Nam",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B10",
    "Lớp năm học 2025-2026": "11B10"
  },
  {
    "Họ và tên": "TÒNG THỊ HIỆP",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B10",
    "Lớp năm học 2025-2026": "11B10"
  },
  {
    "Họ và tên": "LÒ THANH THẢO",
    "gioi tinh": "Nam",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B10",
    "Lớp năm học 2025-2026": "11B10"
  },
  {
    "Họ và tên": "VÌ AN KHANG",
    "gioi tinh": "Nam",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B10",
    "Lớp năm học 2025-2026": "11B10"
  },
  {
    "Họ và tên": "VÌ VĂN KHÁNH",
    "gioi tinh": "Nam",
    "Dan tộc": "Khơ-Mú",
    "Lớp năm học 2024-2025": "10B10",
    "Lớp năm học 2025-2026": "11B10"
  },
  {
    "Họ và tên": "LÒ VĂN QUÝ",
    "gioi tinh": "Nam",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B10",
    "Lớp năm học 2025-2026": "11B10"
  },
  {
    "Họ và tên": "VÀNG CHỊ QUÂN",
    "gioi tinh": "Nam",
    "Dan tộc": "HMông",
    "Lớp năm học 2024-2025": "10B9",
    "Lớp năm học 2025-2026": "11B10"
  },
  {
    "Họ và tên": "LÒ THỊ THÁI",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B9",
    "Lớp năm học 2025-2026": "11B10"
  },
  {
    "Họ và tên": "TÒNG QUANG TRUNG",
    "gioi tinh": "Nam",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B9",
    "Lớp năm học 2025-2026": "11B10"
  },
  {
    "Họ và tên": "TÒNG VĂN QUÂN",
    "gioi tinh": "Nam",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B9",
    "Lớp năm học 2025-2026": "11B10"
  },
  {
    "Họ và tên": "LƯỜNG VĂN KHANG",
    "gioi tinh": "Nam",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B9",
    "Lớp năm học 2025-2026": "11B10"
  },
  {
    "Họ và tên": "LÒ VĂN KHÁNH",
    "gioi tinh": "Nam",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B9",
    "Lớp năm học 2025-2026": "11B10"
  },
  {
    "Họ và tên": "TÒNG VĂN KHẢI",
    "gioi tinh": "Nam",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B9",
    "Lớp năm học 2025-2026": "11B10"
  },
  {
    "Họ và tên": "SỒNG THỊ DUA",
    "gioi tinh": "Nữ",
    "Dan tộc": "HMông",
    "Lớp năm học 2024-2025": "10B9",
    "Lớp năm học 2025-2026": "11B10"
  },
  {
    "Họ và tên": "TÒNG VĂN QUÂN",
    "gioi tinh": "Nam",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B9",
    "Lớp năm học 2025-2026": "11B10"
  },
  {
    "Họ và tên": "CÚT VĂN THÀNH",
    "gioi tinh": "Nam",
    "Dan tộc": "Khơ-Mú",
    "Lớp năm học 2024-2025": "10B9",
    "Lớp năm học 2025-2026": "11B10"
  },
  {
    "Họ và tên": "TÒNG ANH SƠN",
    "gioi tinh": "Nam",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B9",
    "Lớp năm học 2025-2026": "11B10"
  },
  {
    "Họ và tên": "LƯỜNG DUY MẠNH",
    "gioi tinh": "Nam",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B1",
    "Lớp năm học 2025-2026": "11B2"
  },
  {
    "Họ và tên": "LÒ VĂN CHƯƠNG",
    "gioi tinh": "Nam",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B1",
    "Lớp năm học 2025-2026": "11B2"
  },
  {
    "Họ và tên": "LÒ THỊ NGỌC NHI",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B1",
    "Lớp năm học 2025-2026": "11B2"
  },
  {
    "Họ và tên": "LÒ THỊ OANH",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B1",
    "Lớp năm học 2025-2026": "11B2"
  },
  {
    "Họ và tên": "LÒ QUANG LONG",
    "gioi tinh": "Nam",
    "Dan tộc": "Lào",
    "Lớp năm học 2024-2025": "10B1",
    "Lớp năm học 2025-2026": "11B2"
  },
  {
    "Họ và tên": "LÒ HÀ HƯNG",
    "gioi tinh": "Nam",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B1",
    "Lớp năm học 2025-2026": "11B2"
  },
  {
    "Họ và tên": "LÒ THỊ ÚI NHƯ",
    "gioi tinh": "Nữ",
    "Dan tộc": "Lào",
    "Lớp năm học 2024-2025": "10B1",
    "Lớp năm học 2025-2026": "11B2"
  },
  {
    "Họ và tên": "BÙI ĐĂNG NINH",
    "gioi tinh": "Nam",
    "Dan tộc": "Kinh",
    "Lớp năm học 2024-2025": "10B1",
    "Lớp năm học 2025-2026": "11B2"
  },
  {
    "Họ và tên": "VÌ THỊ KIM MAI",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B1",
    "Lớp năm học 2025-2026": "11B2"
  },
  {
    "Họ và tên": "NGUYỄN TRUNG HIẾU",
    "gioi tinh": "Nam",
    "Dan tộc": "Kinh",
    "Lớp năm học 2024-2025": "10B1",
    "Lớp năm học 2025-2026": "11B2"
  },
  {
    "Họ và tên": "LÒ THÀNH TRUNG",
    "gioi tinh": "Nam",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B1",
    "Lớp năm học 2025-2026": "11B2"
  },
  {
    "Họ và tên": "HOÀNG MINH PHÚC",
    "gioi tinh": "Nam",
    "Dan tộc": "Kinh",
    "Lớp năm học 2024-2025": "10B1",
    "Lớp năm học 2025-2026": "11B2"
  },
  {
    "Họ và tên": "VÌ TIẾN ĐẠT",
    "gioi tinh": "Nam",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B1",
    "Lớp năm học 2025-2026": "11B2"
  },
  {
    "Họ và tên": "TÒNG PHƯƠNG ANH",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B1",
    "Lớp năm học 2025-2026": "11B2"
  },
  {
    "Họ và tên": "LÊ SƠN HẢI",
    "gioi tinh": "Nam",
    "Dan tộc": "Kinh",
    "Lớp năm học 2024-2025": "10B1",
    "Lớp năm học 2025-2026": "11B2"
  },
  {
    "Họ và tên": "QUÀNG ĐỨC QUÂN",
    "gioi tinh": "Nam",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B1",
    "Lớp năm học 2025-2026": "11B2"
  },
  {
    "Họ và tên": "LÒ THỊ DIỆP LINH",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B2",
    "Lớp năm học 2025-2026": "11B2"
  },
  {
    "Họ và tên": "THÀO THỊ LIA",
    "gioi tinh": "Nữ",
    "Dan tộc": "HMông",
    "Lớp năm học 2024-2025": "10B2",
    "Lớp năm học 2025-2026": "11B2"
  },
  {
    "Họ và tên": "LƯỜNG THỊ NGỌC LINH",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B2",
    "Lớp năm học 2025-2026": "11B2"
  },
  {
    "Họ và tên": "NGUYỄN KIM NGỌC",
    "gioi tinh": "Nam",
    "Dan tộc": "Tày",
    "Lớp năm học 2024-2025": "10B2",
    "Lớp năm học 2025-2026": "11B2"
  },
  {
    "Họ và tên": "GIÀNG CẢU MUA",
    "gioi tinh": "Nam",
    "Dan tộc": "HMông",
    "Lớp năm học 2024-2025": "10B2",
    "Lớp năm học 2025-2026": "11B2"
  },
  {
    "Họ và tên": "LÒ THỊ THU THUỶ",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B2",
    "Lớp năm học 2025-2026": "11B2"
  },
  {
    "Họ và tên": "QUÀNG THỊ NGỌC",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B2",
    "Lớp năm học 2025-2026": "11B2"
  },
  {
    "Họ và tên": "QUÀNG THỊ HÀ VI",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B2",
    "Lớp năm học 2025-2026": "11B2"
  },
  {
    "Họ và tên": "VÀNG PẠ HUA",
    "gioi tinh": "Nữ",
    "Dan tộc": "HMông",
    "Lớp năm học 2024-2025": "10B2",
    "Lớp năm học 2025-2026": "11B2"
  },
  {
    "Họ và tên": "QUÀNG ĐĂNG KHÔI",
    "gioi tinh": "Nam",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B2",
    "Lớp năm học 2025-2026": "11B2"
  },
  {
    "Họ và tên": "LÒ PHI TRƯỜNG",
    "gioi tinh": "Nam",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B2",
    "Lớp năm học 2025-2026": "11B2"
  },
  {
    "Họ và tên": "CHÁ THỊ PHƯƠNG LINH",
    "gioi tinh": "Nữ",
    "Dan tộc": "HMông",
    "Lớp năm học 2024-2025": "10B2",
    "Lớp năm học 2025-2026": "11B2"
  },
  {
    "Họ và tên": "LY A SỘNG",
    "gioi tinh": "Nam",
    "Dan tộc": "HMông",
    "Lớp năm học 2024-2025": "10B2",
    "Lớp năm học 2025-2026": "11B2"
  },
  {
    "Họ và tên": "LÒ VĂN BÌNH",
    "gioi tinh": "Nam",
    "Dan tộc": "Khơ-Mú",
    "Lớp năm học 2024-2025": "10B2",
    "Lớp năm học 2025-2026": "11B2"
  },
  {
    "Họ và tên": "LÒ MẠNH QUỲNH",
    "gioi tinh": "Nam",
    "Dan tộc": "Lào",
    "Lớp năm học 2024-2025": "10B2",
    "Lớp năm học 2025-2026": "11B2"
  },
  {
    "Họ và tên": "LÒ THỊ THU TRANG",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B3",
    "Lớp năm học 2025-2026": "11B2"
  },
  {
    "Họ và tên": "VÌ THỊ ÁNH",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B3",
    "Lớp năm học 2025-2026": "11B2"
  },
  {
    "Họ và tên": "LƯỜNG THỊ QUỲNH HƯƠNG",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B3",
    "Lớp năm học 2025-2026": "11B2"
  },
  {
    "Họ và tên": "HÀNG THỊ XA",
    "gioi tinh": "Nữ",
    "Dan tộc": "HMông",
    "Lớp năm học 2024-2025": "10B3",
    "Lớp năm học 2025-2026": "11B2"
  },
  {
    "Họ và tên": "LY THỊ SUA CHUA",
    "gioi tinh": "Nữ",
    "Dan tộc": "HMông",
    "Lớp năm học 2024-2025": "10B3",
    "Lớp năm học 2025-2026": "11B2"
  },
  {
    "Họ và tên": "LÒ THỊ HUYỀN MY",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B3",
    "Lớp năm học 2025-2026": "11B2"
  },
  {
    "Họ và tên": "QUÀNG GIA HUY",
    "gioi tinh": "Nam",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B3",
    "Lớp năm học 2025-2026": "11B2"
  },
  {
    "Họ và tên": "THÀO PHƯƠNG ĐÔNG",
    "gioi tinh": "Nam",
    "Dan tộc": "HMông",
    "Lớp năm học 2024-2025": "10B3",
    "Lớp năm học 2025-2026": "11B2"
  },
  {
    "Họ và tên": "LÒ THỊ THU SA",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B3",
    "Lớp năm học 2025-2026": "11B2"
  },
  {
    "Họ và tên": "SỘNG THỊ NHÌA",
    "gioi tinh": "Nữ",
    "Dan tộc": "HMông",
    "Lớp năm học 2024-2025": "10B3",
    "Lớp năm học 2025-2026": "11B2"
  },
  {
    "Họ và tên": "LÒ THỊ TUYẾT",
    "gioi tinh": "Nữ",
    "Dan tộc": "Lào",
    "Lớp năm học 2024-2025": "10B3",
    "Lớp năm học 2025-2026": "11B2"
  },
  {
    "Họ và tên": "VÀNG A ĐÔNG",
    "gioi tinh": "Nam",
    "Dan tộc": "HMông",
    "Lớp năm học 2024-2025": "10B3",
    "Lớp năm học 2025-2026": "11B2"
  },
  {
    "Họ và tên": "LÒ THỊ NGỌC LINH",
    "gioi tinh": "Nữ",
    "Dan tộc": "Lào",
    "Lớp năm học 2024-2025": "10B3",
    "Lớp năm học 2025-2026": "11B2"
  },
  {
    "Họ và tên": "PHAN HUY LƯỢNG",
    "gioi tinh": "Nam",
    "Dan tộc": "Kinh",
    "Lớp năm học 2024-2025": "10B1",
    "Lớp năm học 2025-2026": "11B3"
  },
  {
    "Họ và tên": "LÒ TIẾN ĐẠT",
    "gioi tinh": "Nam",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B2",
    "Lớp năm học 2025-2026": "11B3"
  },
  {
    "Họ và tên": "VÀNG A NAM",
    "gioi tinh": "Nam",
    "Dan tộc": "HMông",
    "Lớp năm học 2024-2025": "10B2",
    "Lớp năm học 2025-2026": "11B3"
  },
  {
    "Họ và tên": "LÒ VĂN NGHĨA",
    "gioi tinh": "Nam",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B2",
    "Lớp năm học 2025-2026": "11B3"
  },
  {
    "Họ và tên": "CHÁ THỊ PHƯƠNG LAN",
    "gioi tinh": "Nữ",
    "Dan tộc": "HMông",
    "Lớp năm học 2024-2025": "10B2",
    "Lớp năm học 2025-2026": "11B3"
  },
  {
    "Họ và tên": "LÒ VĂN PHÚ",
    "gioi tinh": "Nam",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B2",
    "Lớp năm học 2025-2026": "11B3"
  },
  {
    "Họ và tên": "LÒ VĂN KHƯƠNG",
    "gioi tinh": "Nam",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B2",
    "Lớp năm học 2025-2026": "11B3"
  },
  {
    "Họ và tên": "LÒ VĂN DUY",
    "gioi tinh": "Nam",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B2",
    "Lớp năm học 2025-2026": "11B3"
  },
  {
    "Họ và tên": "ĐOÀN VĂN HUY",
    "gioi tinh": "Nam",
    "Dan tộc": "Kinh",
    "Lớp năm học 2024-2025": "10B2",
    "Lớp năm học 2025-2026": "11B3"
  },
  {
    "Họ và tên": "TÒNG VĂN THƠ",
    "gioi tinh": "Nam",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B2",
    "Lớp năm học 2025-2026": "11B3"
  },
  {
    "Họ và tên": "LY A CHUNG",
    "gioi tinh": "Nam",
    "Dan tộc": "HMông",
    "Lớp năm học 2024-2025": "10B2",
    "Lớp năm học 2025-2026": "11B3"
  },
  {
    "Họ và tên": "LÒ VĂN HÙNG",
    "gioi tinh": "Nam",
    "Dan tộc": "Lào",
    "Lớp năm học 2024-2025": "10B2",
    "Lớp năm học 2025-2026": "11B3"
  },
  {
    "Họ và tên": "MÙA CHA PÓ",
    "gioi tinh": "Nam",
    "Dan tộc": "HMông",
    "Lớp năm học 2024-2025": "10B2",
    "Lớp năm học 2025-2026": "11B3"
  },
  {
    "Họ và tên": "LÒ VĂN LÝ",
    "gioi tinh": "Nam",
    "Dan tộc": "Khơ-Mú",
    "Lớp năm học 2024-2025": "10B2",
    "Lớp năm học 2025-2026": "11B3"
  },
  {
    "Họ và tên": "LÒ HIẾU NGUYÊN",
    "gioi tinh": "Nam",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B2",
    "Lớp năm học 2025-2026": "11B3"
  },
  {
    "Họ và tên": "LƯỜNG VĂN HÂN",
    "gioi tinh": "Nam",
    "Dan tộc": "Lào",
    "Lớp năm học 2024-2025": "10B2",
    "Lớp năm học 2025-2026": "11B3"
  },
  {
    "Họ và tên": "VÌ VĂN KHÁNH",
    "gioi tinh": "Nam",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B2",
    "Lớp năm học 2025-2026": "11B3"
  },
  {
    "Họ và tên": "VÌ ANH NGHĨA",
    "gioi tinh": "Nam",
    "Dan tộc": "Lào",
    "Lớp năm học 2024-2025": "10B2",
    "Lớp năm học 2025-2026": "11B3"
  },
  {
    "Họ và tên": "LƯỜNG VĂN HUY",
    "gioi tinh": "Nam",
    "Dan tộc": "Lào",
    "Lớp năm học 2024-2025": "10B2",
    "Lớp năm học 2025-2026": "11B3"
  },
  {
    "Họ và tên": "VỪ THỊ GANH",
    "gioi tinh": "Nữ",
    "Dan tộc": "HMông",
    "Lớp năm học 2024-2025": "10B2",
    "Lớp năm học 2025-2026": "11B3"
  },
  {
    "Họ và tên": "LÒ THỊ THƯƠNG",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B3",
    "Lớp năm học 2025-2026": "11B3"
  },
  {
    "Họ và tên": "MÒNG TUẤN ANH",
    "gioi tinh": "Nam",
    "Dan tộc": "Khơ-Mú",
    "Lớp năm học 2024-2025": "10B3",
    "Lớp năm học 2025-2026": "11B3"
  },
  {
    "Họ và tên": "SỘNG DÊ PÓ",
    "gioi tinh": "Nam",
    "Dan tộc": "HMông",
    "Lớp năm học 2024-2025": "10B3",
    "Lớp năm học 2025-2026": "11B3"
  },
  {
    "Họ và tên": "VÀNG A LỘNG",
    "gioi tinh": "Nam",
    "Dan tộc": "HMông",
    "Lớp năm học 2024-2025": "10B3",
    "Lớp năm học 2025-2026": "11B3"
  },
  {
    "Họ và tên": "LÒ VĂN TÂN",
    "gioi tinh": "Nam",
    "Dan tộc": "Khơ-Mú",
    "Lớp năm học 2024-2025": "10B3",
    "Lớp năm học 2025-2026": "11B3"
  },
  {
    "Họ và tên": "VÌ VĂN VIỆT",
    "gioi tinh": "Nam",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B3",
    "Lớp năm học 2025-2026": "11B3"
  },
  {
    "Họ và tên": "GIÀNG THỊ PHÚC",
    "gioi tinh": "Nữ",
    "Dan tộc": "HMông",
    "Lớp năm học 2024-2025": "10B3",
    "Lớp năm học 2025-2026": "11B3"
  },
  {
    "Họ và tên": "VÀNG A ĐÊNH",
    "gioi tinh": "Nam",
    "Dan tộc": "HMông",
    "Lớp năm học 2024-2025": "10B3",
    "Lớp năm học 2025-2026": "11B3"
  },
  {
    "Họ và tên": "LÒ ANH QUÂN",
    "gioi tinh": "Nam",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B3",
    "Lớp năm học 2025-2026": "11B3"
  },
  {
    "Họ và tên": "QUÀNG THỊ YẾN DIỆP",
    "gioi tinh": "Nữ",
    "Dan tộc": "Lào",
    "Lớp năm học 2024-2025": "10B3",
    "Lớp năm học 2025-2026": "11B3"
  },
  {
    "Họ và tên": "HÀNG A KA DANH",
    "gioi tinh": "Nam",
    "Dan tộc": "HMông",
    "Lớp năm học 2024-2025": "10B3",
    "Lớp năm học 2025-2026": "11B3"
  },
  {
    "Họ và tên": "VỪ A NỤ",
    "gioi tinh": "Nam",
    "Dan tộc": "HMông",
    "Lớp năm học 2024-2025": "10B3",
    "Lớp năm học 2025-2026": "11B3"
  },
  {
    "Họ và tên": "QUÀNG HOÀI BĂNG",
    "gioi tinh": "Nam",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B3",
    "Lớp năm học 2025-2026": "11B3"
  },
  {
    "Họ và tên": "VÌ VĂN CƯỜNG",
    "gioi tinh": "Nam",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B3",
    "Lớp năm học 2025-2026": "11B3"
  },
  {
    "Họ và tên": "TÒNG VĂN TRƯỜNG",
    "gioi tinh": "Nam",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B3",
    "Lớp năm học 2025-2026": "11B3"
  },
  {
    "Họ và tên": "HÀNG A CHÁNG",
    "gioi tinh": "Nam",
    "Dan tộc": "HMông",
    "Lớp năm học 2024-2025": "10B3",
    "Lớp năm học 2025-2026": "11B3"
  },
  {
    "Họ và tên": "TÒNG VĂN HIỆP",
    "gioi tinh": "Nam",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B3",
    "Lớp năm học 2025-2026": "11B3"
  },
  {
    "Họ và tên": "LÒ VĂN HUY",
    "gioi tinh": "Nam",
    "Dan tộc": "Khơ-Mú",
    "Lớp năm học 2024-2025": "10B3",
    "Lớp năm học 2025-2026": "11B3"
  },
  {
    "Họ và tên": "QUÀNG VĂN QUYẾT",
    "gioi tinh": "Nam",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B3",
    "Lớp năm học 2025-2026": "11B3"
  },
  {
    "Họ và tên": "TÒNG THỊ THUÝ HÀ",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B3",
    "Lớp năm học 2025-2026": "11B3"
  },
  {
    "Họ và tên": "TÒNG DUY NGHĨA",
    "gioi tinh": "Nam",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B3",
    "Lớp năm học 2025-2026": "11B3"
  },
  {
    "Họ và tên": "VỪ A SO",
    "gioi tinh": "Nam",
    "Dan tộc": "HMông",
    "Lớp năm học 2024-2025": "10B3",
    "Lớp năm học 2025-2026": "11B3"
  },
  {
    "Họ và tên": "GIÀNG LẬU CHÀNH",
    "gioi tinh": "Nam",
    "Dan tộc": "HMông",
    "Lớp năm học 2024-2025": "10B3",
    "Lớp năm học 2025-2026": "11B3"
  },
  {
    "Họ và tên": "LÒ VĂN HỮU",
    "gioi tinh": "Nam",
    "Dan tộc": "Lào",
    "Lớp năm học 2024-2025": "10B3",
    "Lớp năm học 2025-2026": "11B3"
  },
  {
    "Họ và tên": "VỪ A CHUA",
    "gioi tinh": "Nam",
    "Dan tộc": "HMông",
    "Lớp năm học 2024-2025": "10B3",
    "Lớp năm học 2025-2026": "11B3"
  },
  {
    "Họ và tên": "LÒ VĂN PHI",
    "gioi tinh": "Nam",
    "Dan tộc": "Lào",
    "Lớp năm học 2024-2025": "10B3",
    "Lớp năm học 2025-2026": "11B3"
  },
  {
    "Họ và tên": "THÀO A CỦ",
    "gioi tinh": "Nam",
    "Dan tộc": "HMông",
    "Lớp năm học 2024-2025": "10B3",
    "Lớp năm học 2025-2026": "11B3"
  },
  {
    "Họ và tên": "VÌ THỊ KIM NGÂN",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B4",
    "Lớp năm học 2025-2026": "11B4"
  },
  {
    "Họ và tên": "MÙA THỊ MAI",
    "gioi tinh": "Nữ",
    "Dan tộc": "HMông",
    "Lớp năm học 2024-2025": "10B4",
    "Lớp năm học 2025-2026": "11B4"
  },
  {
    "Họ và tên": "TÒNG THỊ THÚY HẬU",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B4",
    "Lớp năm học 2025-2026": "11B4"
  },
  {
    "Họ và tên": "LÒ THỊ ÁNH NGỌC",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B4",
    "Lớp năm học 2025-2026": "11B4"
  },
  {
    "Họ và tên": "LÒ THỊ DIỆU LY",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B4",
    "Lớp năm học 2025-2026": "11B4"
  },
  {
    "Họ và tên": "HÀ NHƯ NGỌC",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B4",
    "Lớp năm học 2025-2026": "11B4"
  },
  {
    "Họ và tên": "TẠ THỊ CẨM TÚ",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B4",
    "Lớp năm học 2025-2026": "11B4"
  },
  {
    "Họ và tên": "VÌ MINH QUÂN",
    "gioi tinh": "Nam",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B4",
    "Lớp năm học 2025-2026": "11B4"
  },
  {
    "Họ và tên": "LÒ THỊ MAI HƯƠNG",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B4",
    "Lớp năm học 2025-2026": "11B4"
  },
  {
    "Họ và tên": "VÌ HOÀNG KIỀU ANH",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B4",
    "Lớp năm học 2025-2026": "11B4"
  },
  {
    "Họ và tên": "VÌ THỊ NGUYỆT ANH",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B4",
    "Lớp năm học 2025-2026": "11B4"
  },
  {
    "Họ và tên": "LÒ THỊ LAN PHƯƠNG",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B4",
    "Lớp năm học 2025-2026": "11B4"
  },
  {
    "Họ và tên": "QUÀNG TRUNG HIẾU",
    "gioi tinh": "Nam",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B4",
    "Lớp năm học 2025-2026": "11B4"
  },
  {
    "Họ và tên": "LƯỜNG THỊ HÀ VY",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B4",
    "Lớp năm học 2025-2026": "11B4"
  },
  {
    "Họ và tên": "TÒNG THỊ VIỆT ANH",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B4",
    "Lớp năm học 2025-2026": "11B4"
  },
  {
    "Họ và tên": "NGUYỄN THỊ MINH PHƯƠNG",
    "gioi tinh": "Nữ",
    "Dan tộc": "Lào",
    "Lớp năm học 2024-2025": "10B4",
    "Lớp năm học 2025-2026": "11B4"
  },
  {
    "Họ và tên": "TÒNG THỊ HẢI YẾN",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B4",
    "Lớp năm học 2025-2026": "11B4"
  },
  {
    "Họ và tên": "QUÀNG THỊ THẢO NHI",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B4",
    "Lớp năm học 2025-2026": "11B4"
  },
  {
    "Họ và tên": "LÒ THỊ ÓN",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B4",
    "Lớp năm học 2025-2026": "11B4"
  },
  {
    "Họ và tên": "VÌ THỊ HƯƠNG GIANG",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B4",
    "Lớp năm học 2025-2026": "11B4"
  },
  {
    "Họ và tên": "VÌ THỊ THÙY TRANG",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B4",
    "Lớp năm học 2025-2026": "11B4"
  },
  {
    "Họ và tên": "TÒNG THỊ NHƯ",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B4",
    "Lớp năm học 2025-2026": "11B4"
  },
  {
    "Họ và tên": "VÌ THỊ HẢI YẾN",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B4",
    "Lớp năm học 2025-2026": "11B4"
  },
  {
    "Họ và tên": "LÒ QUỐC KHÁNH",
    "gioi tinh": "Nam",
    "Dan tộc": "Lào",
    "Lớp năm học 2024-2025": "10B4",
    "Lớp năm học 2025-2026": "11B4"
  },
  {
    "Họ và tên": "LÒ THỊ MINH TRANG",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B4",
    "Lớp năm học 2025-2026": "11B4"
  },
  {
    "Họ và tên": "VÌ THỊ LỆ QUYÊN",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B4",
    "Lớp năm học 2025-2026": "11B4"
  },
  {
    "Họ và tên": "VÌ THỊ TÂM NHƯ",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B4",
    "Lớp năm học 2025-2026": "11B4"
  },
  {
    "Họ và tên": "LÒ THỊ LAN HƯƠNG",
    "gioi tinh": "Nữ",
    "Dan tộc": "Lào",
    "Lớp năm học 2024-2025": "10B4",
    "Lớp năm học 2025-2026": "11B4"
  },
  {
    "Họ và tên": "ĐINH MẠNH HẠO",
    "gioi tinh": "Nam",
    "Dan tộc": "Mường",
    "Lớp năm học 2024-2025": "10B4",
    "Lớp năm học 2025-2026": "11B4"
  },
  {
    "Họ và tên": "VÌ THỊ THÚY",
    "gioi tinh": "Nữ",
    "Dan tộc": "Lào",
    "Lớp năm học 2024-2025": "10B4",
    "Lớp năm học 2025-2026": "11B4"
  },
  {
    "Họ và tên": "LÒ THỊ KIM NHƯ",
    "gioi tinh": "Nữ",
    "Dan tộc": "Lào",
    "Lớp năm học 2024-2025": "10B5",
    "Lớp năm học 2025-2026": "11B4"
  },
  {
    "Họ và tên": "LÒ THỊ HẰNG PHƯƠNG",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B5",
    "Lớp năm học 2025-2026": "11B4"
  },
  {
    "Họ và tên": "TÒNG THỊ TRANG",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B5",
    "Lớp năm học 2025-2026": "11B4"
  },
  {
    "Họ và tên": "GIÀNG A KHUA",
    "gioi tinh": "Nam",
    "Dan tộc": "HMông",
    "Lớp năm học 2024-2025": "10B5",
    "Lớp năm học 2025-2026": "11B4"
  },
  {
    "Họ và tên": "VÌ THỊ TRANG",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B5",
    "Lớp năm học 2025-2026": "11B4"
  },
  {
    "Họ và tên": "SỘNG THỊ DUA",
    "gioi tinh": "Nữ",
    "Dan tộc": "HMông",
    "Lớp năm học 2024-2025": "10B5",
    "Lớp năm học 2025-2026": "11B4"
  },
  {
    "Họ và tên": "SỘNG A TRỊ",
    "gioi tinh": "Nam",
    "Dan tộc": "HMông",
    "Lớp năm học 2024-2025": "10B5",
    "Lớp năm học 2025-2026": "11B4"
  },
  {
    "Họ và tên": "VÌ THANH TÙNG",
    "gioi tinh": "Nam",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B5",
    "Lớp năm học 2025-2026": "11B4"
  },
  {
    "Họ và tên": "VÌ THỊ NGỌC BÍCH",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B5",
    "Lớp năm học 2025-2026": "11B4"
  },
  {
    "Họ và tên": "VÀNG A MONG",
    "gioi tinh": "Nam",
    "Dan tộc": "HMông",
    "Lớp năm học 2024-2025": "10B6",
    "Lớp năm học 2025-2026": "11B4"
  },
  {
    "Họ và tên": "VÌ THỊ HỒNG MY",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B6",
    "Lớp năm học 2025-2026": "11B4"
  },
  {
    "Họ và tên": "LÒ THỊ NGỌC HUYỀN",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B6",
    "Lớp năm học 2025-2026": "11B4"
  },
  {
    "Họ và tên": "TÒNG THỊ ĐIỆP",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B4",
    "Lớp năm học 2025-2026": "11B5"
  },
  {
    "Họ và tên": "HOÀNG THỊ BẢO NGỌC",
    "gioi tinh": "Nữ",
    "Dan tộc": "Tày",
    "Lớp năm học 2024-2025": "10B4",
    "Lớp năm học 2025-2026": "11B5"
  },
  {
    "Họ và tên": "PÍT VĂN QUANG",
    "gioi tinh": "Nam",
    "Dan tộc": "Khơ-Mú",
    "Lớp năm học 2024-2025": "10B4",
    "Lớp năm học 2025-2026": "11B5"
  },
  {
    "Họ và tên": "LÒ THỊ HỒNG",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B4",
    "Lớp năm học 2025-2026": "11B5"
  },
  {
    "Họ và tên": "QUÀNG THỊ NGA",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B4",
    "Lớp năm học 2025-2026": "11B5"
  },
  {
    "Họ và tên": "CÀ THỊ SA",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B4",
    "Lớp năm học 2025-2026": "11B5"
  },
  {
    "Họ và tên": "TRẦN THANH HÀ",
    "gioi tinh": "Nữ",
    "Dan tộc": "Mường",
    "Lớp năm học 2024-2025": "10B4",
    "Lớp năm học 2025-2026": "11B5"
  },
  {
    "Họ và tên": "LÊ NGỌC DƯƠNG",
    "gioi tinh": "Nam",
    "Dan tộc": "Kinh",
    "Lớp năm học 2024-2025": "10B4",
    "Lớp năm học 2025-2026": "11B5"
  },
  {
    "Họ và tên": "SỘNG A HÀ",
    "gioi tinh": "Nam",
    "Dan tộc": "HMông",
    "Lớp năm học 2024-2025": "10B4",
    "Lớp năm học 2025-2026": "11B5"
  },
  {
    "Họ và tên": "VÌ THỊ NHƯ",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B4",
    "Lớp năm học 2025-2026": "11B5"
  },
  {
    "Họ và tên": "VỪ A MỆNH",
    "gioi tinh": "Nam",
    "Dan tộc": "HMông",
    "Lớp năm học 2024-2025": "10B4",
    "Lớp năm học 2025-2026": "11B5"
  },
  {
    "Họ và tên": "CÀ VĂN THÀNH",
    "gioi tinh": "Nam",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B4",
    "Lớp năm học 2025-2026": "11B5"
  },
  {
    "Họ và tên": "LÒ THỊ MY SA",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B4",
    "Lớp năm học 2025-2026": "11B5"
  },
  {
    "Họ và tên": "LÒ VĂN LÂM",
    "gioi tinh": "Nam",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B4",
    "Lớp năm học 2025-2026": "11B5"
  },
  {
    "Họ và tên": "VÌ VĂN DƯƠNG",
    "gioi tinh": "Nam",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B4",
    "Lớp năm học 2025-2026": "11B5"
  },
  {
    "Họ và tên": "THÀO PẠ NẠ",
    "gioi tinh": "Nữ",
    "Dan tộc": "HMông",
    "Lớp năm học 2024-2025": "10B5",
    "Lớp năm học 2025-2026": "11B5"
  },
  {
    "Họ và tên": "LƯỜNG THỊ XUÂN MAI",
    "gioi tinh": "Nữ",
    "Dan tộc": "Lào",
    "Lớp năm học 2024-2025": "10B5",
    "Lớp năm học 2025-2026": "11B5"
  },
  {
    "Họ và tên": "VÌ THỊ NGỌC LINH",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B5",
    "Lớp năm học 2025-2026": "11B5"
  },
  {
    "Họ và tên": "VÌ VĂN NGHIỆP",
    "gioi tinh": "Nam",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B5",
    "Lớp năm học 2025-2026": "11B5"
  },
  {
    "Họ và tên": "TÒNG VĂN ĐỒNG",
    "gioi tinh": "Nam",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B5",
    "Lớp năm học 2025-2026": "11B5"
  },
  {
    "Họ và tên": "MÒNG THỊ NGOAN",
    "gioi tinh": "Nữ",
    "Dan tộc": "Khơ-Mú",
    "Lớp năm học 2024-2025": "10B5",
    "Lớp năm học 2025-2026": "11B5"
  },
  {
    "Họ và tên": "TÒNG THỊ HÀ MY",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B5",
    "Lớp năm học 2025-2026": "11B5"
  },
  {
    "Họ và tên": "SỘNG XUÂN MẠNH",
    "gioi tinh": "Nam",
    "Dan tộc": "HMông",
    "Lớp năm học 2024-2025": "10B5",
    "Lớp năm học 2025-2026": "11B5"
  },
  {
    "Họ và tên": "TÒNG THỊ THU THỦY",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B5",
    "Lớp năm học 2025-2026": "11B5"
  },
  {
    "Họ và tên": "LÒ VĂN ĐÔNG",
    "gioi tinh": "Nam",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B5",
    "Lớp năm học 2025-2026": "11B5"
  },
  {
    "Họ và tên": "LÒ THỊ YẾN",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B5",
    "Lớp năm học 2025-2026": "11B5"
  },
  {
    "Họ và tên": "LÒ THỊ HÀ VI",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B5",
    "Lớp năm học 2025-2026": "11B5"
  },
  {
    "Họ và tên": "TÒNG THỊ NHI",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B5",
    "Lớp năm học 2025-2026": "11B5"
  },
  {
    "Họ và tên": "TÒNG TRUNG DŨNG",
    "gioi tinh": "Nam",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B5",
    "Lớp năm học 2025-2026": "11B5"
  },
  {
    "Họ và tên": "LÒ TUẤN ANH",
    "gioi tinh": "Nam",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B5",
    "Lớp năm học 2025-2026": "11B5"
  },
  {
    "Họ và tên": "QUÀNG THỊ DIỆP",
    "gioi tinh": "Nữ",
    "Dan tộc": "Lào",
    "Lớp năm học 2024-2025": "10B5",
    "Lớp năm học 2025-2026": "11B5"
  },
  {
    "Họ và tên": "SỘNG THỊ SÊNH",
    "gioi tinh": "Nữ",
    "Dan tộc": "HMông",
    "Lớp năm học 2024-2025": "10B5",
    "Lớp năm học 2025-2026": "11B5"
  },
  {
    "Họ và tên": "TÒNG VĂN HOÀNG",
    "gioi tinh": "Nam",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B5",
    "Lớp năm học 2025-2026": "11B5"
  },
  {
    "Họ và tên": "TÒNG THỊ HẢI",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B5",
    "Lớp năm học 2025-2026": "11B5"
  },
  {
    "Họ và tên": "TÒNG VĂN ĐẠI",
    "gioi tinh": "Nam",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B5",
    "Lớp năm học 2025-2026": "11B5"
  },
  {
    "Họ và tên": "QUÀNG VĂN VŨ",
    "gioi tinh": "Nam",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B5",
    "Lớp năm học 2025-2026": "11B5"
  },
  {
    "Họ và tên": "LÒ HỮU PHƯỚC",
    "gioi tinh": "Nam",
    "Dan tộc": "Lào",
    "Lớp năm học 2024-2025": "10B5",
    "Lớp năm học 2025-2026": "11B5"
  },
  {
    "Họ và tên": "TÒNG THỊ KIM HUỆ",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B6",
    "Lớp năm học 2025-2026": "11B5"
  },
  {
    "Họ và tên": "VÀNG THỊ MY",
    "gioi tinh": "Nữ",
    "Dan tộc": "HMông",
    "Lớp năm học 2024-2025": "10B6",
    "Lớp năm học 2025-2026": "11B5"
  },
  {
    "Họ và tên": "VÀNG A LỘNG",
    "gioi tinh": "Nam",
    "Dan tộc": "HMông",
    "Lớp năm học 2024-2025": "10B6",
    "Lớp năm học 2025-2026": "11B5"
  },
  {
    "Họ và tên": "LÒ THỊ LẢ",
    "gioi tinh": "Nữ",
    "Dan tộc": "Khơ-Mú",
    "Lớp năm học 2024-2025": "10B6",
    "Lớp năm học 2025-2026": "11B5"
  },
  {
    "Họ và tên": "VỪ THỊ IA",
    "gioi tinh": "Nữ",
    "Dan tộc": "HMông",
    "Lớp năm học 2024-2025": "10B6",
    "Lớp năm học 2025-2026": "11B5"
  },
  {
    "Họ và tên": "LÒ THỊ DIỆP",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B6",
    "Lớp năm học 2025-2026": "11B5"
  },
  {
    "Họ và tên": "PÍT VĂN TRƯỞNG",
    "gioi tinh": "Nam",
    "Dan tộc": "Khơ-Mú",
    "Lớp năm học 2024-2025": "10B4",
    "Lớp năm học 2025-2026": "11B6"
  },
  {
    "Họ và tên": "SỘNG TIẾN THÀNH",
    "gioi tinh": "Nam",
    "Dan tộc": "HMông",
    "Lớp năm học 2024-2025": "10B4",
    "Lớp năm học 2025-2026": "11B6"
  },
  {
    "Họ và tên": "LÒ TUẤN HÙNG",
    "gioi tinh": "Nam",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B5",
    "Lớp năm học 2025-2026": "11B6"
  },
  {
    "Họ và tên": "TÒNG THỊ MINH HẰNG",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B5",
    "Lớp năm học 2025-2026": "11B6"
  },
  {
    "Họ và tên": "VÌ THỊ THƯ",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B5",
    "Lớp năm học 2025-2026": "11B6"
  },
  {
    "Họ và tên": "LÒ VĂN NGUYỄN",
    "gioi tinh": "Nam",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B5",
    "Lớp năm học 2025-2026": "11B6"
  },
  {
    "Họ và tên": "SỘNG THANH BI",
    "gioi tinh": "Nam",
    "Dan tộc": "HMông",
    "Lớp năm học 2024-2025": "10B5",
    "Lớp năm học 2025-2026": "11B6"
  },
  {
    "Họ và tên": "TÒNG TUẤN ANH",
    "gioi tinh": "Nam",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B5",
    "Lớp năm học 2025-2026": "11B6"
  },
  {
    "Họ và tên": "LÒ DUY ĐIỆP",
    "gioi tinh": "Nam",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B5",
    "Lớp năm học 2025-2026": "11B6"
  },
  {
    "Họ và tên": "VỪ A LỆNH",
    "gioi tinh": "Nam",
    "Dan tộc": "HMông",
    "Lớp năm học 2024-2025": "10B5",
    "Lớp năm học 2025-2026": "11B6"
  },
  {
    "Họ và tên": "LƯỜNG THÚY NGUYỆT",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B5",
    "Lớp năm học 2025-2026": "11B6"
  },
  {
    "Họ và tên": "TÒNG MẠNH TRƯỜNG",
    "gioi tinh": "Nam",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B5",
    "Lớp năm học 2025-2026": "11B6"
  },
  {
    "Họ và tên": "TÒNG VĂN HOÀNG",
    "gioi tinh": "Nam",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B5",
    "Lớp năm học 2025-2026": "11B6"
  },
  {
    "Họ và tên": "LÒ VĂN HOÀNG",
    "gioi tinh": "Nam",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B5",
    "Lớp năm học 2025-2026": "11B6"
  },
  {
    "Họ và tên": "TÒNG VĂN MIỀN",
    "gioi tinh": "Nam",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B5",
    "Lớp năm học 2025-2026": "11B6"
  },
  {
    "Họ và tên": "LÒ TUẤN ĐIỆP",
    "gioi tinh": "Nam",
    "Dan tộc": "Khơ-Mú",
    "Lớp năm học 2024-2025": "10B5",
    "Lớp năm học 2025-2026": "11B6"
  },
  {
    "Họ và tên": "GIÀNG A MẠNH",
    "gioi tinh": "Nam",
    "Dan tộc": "HMông",
    "Lớp năm học 2024-2025": "10B5",
    "Lớp năm học 2025-2026": "11B6"
  },
  {
    "Họ và tên": "SỘNG CHÊNH LẠ",
    "gioi tinh": "Nam",
    "Dan tộc": "HMông",
    "Lớp năm học 2024-2025": "10B6",
    "Lớp năm học 2025-2026": "11B6"
  },
  {
    "Họ và tên": "QUÀNG THỊ HỒNG NGỌC",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B6",
    "Lớp năm học 2025-2026": "11B6"
  },
  {
    "Họ và tên": "LÒ THỊ TUYỀN",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B6",
    "Lớp năm học 2025-2026": "11B6"
  },
  {
    "Họ và tên": "TÒNG MINH NHẬT",
    "gioi tinh": "Nam",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B6",
    "Lớp năm học 2025-2026": "11B6"
  },
  {
    "Họ và tên": "VÌ THỊ MỸ TÂM",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B6",
    "Lớp năm học 2025-2026": "11B6"
  },
  {
    "Họ và tên": "LÒ VĂN NHẬT",
    "gioi tinh": "Nam",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B6",
    "Lớp năm học 2025-2026": "11B6"
  },
  {
    "Họ và tên": "LÒ THỊ ANH",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B6",
    "Lớp năm học 2025-2026": "11B6"
  },
  {
    "Họ và tên": "LẬU BẢ TAỨ",
    "gioi tinh": "Nam",
    "Dan tộc": "HMông",
    "Lớp năm học 2024-2025": "10B6",
    "Lớp năm học 2025-2026": "11B6"
  },
  {
    "Họ và tên": "TÒNG THỊ NHUNG",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B6",
    "Lớp năm học 2025-2026": "11B6"
  },
  {
    "Họ và tên": "TÒNG VĂN PHƯƠNG",
    "gioi tinh": "Nam",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B6",
    "Lớp năm học 2025-2026": "11B6"
  },
  {
    "Họ và tên": "VÌ THỊ KIM CHI",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B6",
    "Lớp năm học 2025-2026": "11B6"
  },
  {
    "Họ và tên": "HÀNG A TỦA",
    "gioi tinh": "Nam",
    "Dan tộc": "HMông",
    "Lớp năm học 2024-2025": "10B6",
    "Lớp năm học 2025-2026": "11B6"
  },
  {
    "Họ và tên": "QUÀNG VĂN HOÀNG",
    "gioi tinh": "Nam",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B6",
    "Lớp năm học 2025-2026": "11B6"
  },
  {
    "Họ và tên": "LÒ TUẤN VŨ",
    "gioi tinh": "Nam",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B6",
    "Lớp năm học 2025-2026": "11B6"
  },
  {
    "Họ và tên": "LÒ THỊ ÁNH NGUYỆT",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B6",
    "Lớp năm học 2025-2026": "11B6"
  },
  {
    "Họ và tên": "SỒNG PHÚC ĐẠT",
    "gioi tinh": "Nam",
    "Dan tộc": "HMông",
    "Lớp năm học 2024-2025": "10B6",
    "Lớp năm học 2025-2026": "11B6"
  },
  {
    "Họ và tên": "CÀ VĂN HOÀNG",
    "gioi tinh": "Nam",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B6",
    "Lớp năm học 2025-2026": "11B6"
  },
  {
    "Họ và tên": "TÒNG VĂN GIÁP",
    "gioi tinh": "Nam",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B6",
    "Lớp năm học 2025-2026": "11B6"
  },
  {
    "Họ và tên": "LÒ THỊ YẾN NHI",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B6",
    "Lớp năm học 2025-2026": "11B6"
  },
  {
    "Họ và tên": "LÒ VĂN TOẢN",
    "gioi tinh": "Nam",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B6",
    "Lớp năm học 2025-2026": "11B6"
  },
  {
    "Họ và tên": "QUÀNG VĂN XUÂN",
    "gioi tinh": "Nam",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B6",
    "Lớp năm học 2025-2026": "11B6"
  },
  {
    "Họ và tên": "LƯỜNG VĂN NAM",
    "gioi tinh": "Nam",
    "Dan tộc": "Lào",
    "Lớp năm học 2024-2025": "10B6",
    "Lớp năm học 2025-2026": "11B6"
  },
  {
    "Họ và tên": "VỪ A HONG",
    "gioi tinh": "Nam",
    "Dan tộc": "HMông",
    "Lớp năm học 2024-2025": "10B6",
    "Lớp năm học 2025-2026": "11B6"
  },
  {
    "Họ và tên": "TÒNG VĂN THẮNG",
    "gioi tinh": "Nam",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B6",
    "Lớp năm học 2025-2026": "11B6"
  },
  {
    "Họ và tên": "VÌ VĂN LUÂN",
    "gioi tinh": "Nam",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B6",
    "Lớp năm học 2025-2026": "11B6"
  },
  {
    "Họ và tên": "LÒ THỊ MINH NGUYỆT",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B6",
    "Lớp năm học 2025-2026": "11B6"
  },
  {
    "Họ và tên": "VÌ VĂN TRƯỜNG",
    "gioi tinh": "Nam",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B6",
    "Lớp năm học 2025-2026": "11B6"
  },
  {
    "Họ và tên": "THÀO A HỜ",
    "gioi tinh": "Nam",
    "Dan tộc": "HMông",
    "Lớp năm học 2024-2025": "10B6",
    "Lớp năm học 2025-2026": "11B6"
  },
  {
    "Họ và tên": "THÀO A LY",
    "gioi tinh": "Nam",
    "Dan tộc": "HMông",
    "Lớp năm học 2024-2025": "10B6",
    "Lớp năm học 2025-2026": "11B6"
  },
  {
    "Họ và tên": "LÊ VĂN SƠN",
    "gioi tinh": "Nam",
    "Dan tộc": "Kinh",
    "Lớp năm học 2024-2025": "10B7",
    "Lớp năm học 2025-2026": "11B7"
  },
  {
    "Họ và tên": "LÒ THỊ PHƯƠNG TRINH",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B7",
    "Lớp năm học 2025-2026": "11B7"
  },
  {
    "Họ và tên": "TÒNG THỊ TỐ UYÊN",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B7",
    "Lớp năm học 2025-2026": "11B7"
  },
  {
    "Họ và tên": "TRỊNH NGUYỄN TRƯỜNG GIANG",
    "gioi tinh": "Nam",
    "Dan tộc": "Kinh",
    "Lớp năm học 2024-2025": "10B7",
    "Lớp năm học 2025-2026": "11B7"
  },
  {
    "Họ và tên": "TỐNG MAI HƯƠNG",
    "gioi tinh": "Nữ",
    "Dan tộc": "Kinh",
    "Lớp năm học 2024-2025": "10B7",
    "Lớp năm học 2025-2026": "11B7"
  },
  {
    "Họ và tên": "TÒNG THỊ PHƯƠNG VY",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B7",
    "Lớp năm học 2025-2026": "11B7"
  },
  {
    "Họ và tên": "VÌ THỊ YẾN",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B7",
    "Lớp năm học 2025-2026": "11B7"
  },
  {
    "Họ và tên": "LÒ THỊ BẢO CHÂU",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B7",
    "Lớp năm học 2025-2026": "11B7"
  },
  {
    "Họ và tên": "LƯỜNG THỊ NHƯ YẾN",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B7",
    "Lớp năm học 2025-2026": "11B7"
  },
  {
    "Họ và tên": "LÒ THỊ ÁNH",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B7",
    "Lớp năm học 2025-2026": "11B7"
  },
  {
    "Họ và tên": "LÒ THỊ THU HÀ",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B7",
    "Lớp năm học 2025-2026": "11B7"
  },
  {
    "Họ và tên": "LÒ THỊ TÂM",
    "gioi tinh": "Nữ",
    "Dan tộc": "Lào",
    "Lớp năm học 2024-2025": "10B7",
    "Lớp năm học 2025-2026": "11B7"
  },
  {
    "Họ và tên": "TÒNG THỊ QUỲNH NHƯ",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B7",
    "Lớp năm học 2025-2026": "11B7"
  },
  {
    "Họ và tên": "TÒNG THỊ THANH HỒNG",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B7",
    "Lớp năm học 2025-2026": "11B7"
  },
  {
    "Họ và tên": "LÒ THỊ MAI HƯƠNG",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B7",
    "Lớp năm học 2025-2026": "11B7"
  },
  {
    "Họ và tên": "LÒ THỊ TUYÊN",
    "gioi tinh": "Nữ",
    "Dan tộc": "Lào",
    "Lớp năm học 2024-2025": "10B7",
    "Lớp năm học 2025-2026": "11B7"
  },
  {
    "Họ và tên": "LÒ THỊ HƯƠNG",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B7",
    "Lớp năm học 2025-2026": "11B7"
  },
  {
    "Họ và tên": "VÌ THỊ PHƯƠNG ANH",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B7",
    "Lớp năm học 2025-2026": "11B7"
  },
  {
    "Họ và tên": "LÒ THỊ KHÁNH HUYỀN",
    "gioi tinh": "Nữ",
    "Dan tộc": "Lào",
    "Lớp năm học 2024-2025": "10B7",
    "Lớp năm học 2025-2026": "11B7"
  },
  {
    "Họ và tên": "QUÀNG THỊ THU HẰNG",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B7",
    "Lớp năm học 2025-2026": "11B7"
  },
  {
    "Họ và tên": "VÌ VĂN TÙNG",
    "gioi tinh": "Nam",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B7",
    "Lớp năm học 2025-2026": "11B7"
  },
  {
    "Họ và tên": "TÒNG THỊ NGỌC ÁNH",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B7",
    "Lớp năm học 2025-2026": "11B7"
  },
  {
    "Họ và tên": "GIÀNG THỊ DỞ",
    "gioi tinh": "Nữ",
    "Dan tộc": "HMông",
    "Lớp năm học 2024-2025": "10B7",
    "Lớp năm học 2025-2026": "11B7"
  },
  {
    "Họ và tên": "GIÀNG THỊ CA DIA",
    "gioi tinh": "Nữ",
    "Dan tộc": "HMông",
    "Lớp năm học 2024-2025": "10B7",
    "Lớp năm học 2025-2026": "11B7"
  },
  {
    "Họ và tên": "LÒ THỊ MINH CHÂU",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B7",
    "Lớp năm học 2025-2026": "11B7"
  },
  {
    "Họ và tên": "LÒ THỊ KIM OANH",
    "gioi tinh": "Nữ",
    "Dan tộc": "Lào",
    "Lớp năm học 2024-2025": "10B7",
    "Lớp năm học 2025-2026": "11B7"
  },
  {
    "Họ và tên": "LÒ THỊ KIM OANH",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B7",
    "Lớp năm học 2025-2026": "11B7"
  },
  {
    "Họ và tên": "QUÀNG ĐỨC DUY",
    "gioi tinh": "Nam",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B7",
    "Lớp năm học 2025-2026": "11B7"
  },
  {
    "Họ và tên": "TÒNG MINH HIẾU",
    "gioi tinh": "Nam",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B7",
    "Lớp năm học 2025-2026": "11B7"
  },
  {
    "Họ và tên": "TRẦN THỊ HÀ LINH",
    "gioi tinh": "Nữ",
    "Dan tộc": "Kinh",
    "Lớp năm học 2024-2025": "10B7",
    "Lớp năm học 2025-2026": "11B7"
  },
  {
    "Họ và tên": "LÒ VĂN HÂN",
    "gioi tinh": "Nam",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B7",
    "Lớp năm học 2025-2026": "11B7"
  },
  {
    "Họ và tên": "LÒ THỊ QUỲNH MAI",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B7",
    "Lớp năm học 2025-2026": "11B7"
  },
  {
    "Họ và tên": "GIÀNG TRÍ QUỲNH",
    "gioi tinh": "Nam",
    "Dan tộc": "HMông",
    "Lớp năm học 2024-2025": "10B7",
    "Lớp năm học 2025-2026": "11B7"
  },
  {
    "Họ và tên": "LẬU XUÂN TỈNH",
    "gioi tinh": "Nam",
    "Dan tộc": "HMông",
    "Lớp năm học 2024-2025": "10B8",
    "Lớp năm học 2025-2026": "11B7"
  },
  {
    "Họ và tên": "GIÀNG THỊ DÊNH SUA",
    "gioi tinh": "Nữ",
    "Dan tộc": "HMông",
    "Lớp năm học 2024-2025": "10B8",
    "Lớp năm học 2025-2026": "11B7"
  },
  {
    "Họ và tên": "THÀO THỊ CU",
    "gioi tinh": "Nữ",
    "Dan tộc": "HMông",
    "Lớp năm học 2024-2025": "10B8",
    "Lớp năm học 2025-2026": "11B7"
  },
  {
    "Họ và tên": "LẬU BẢ BON",
    "gioi tinh": "Nam",
    "Dan tộc": "HMông",
    "Lớp năm học 2024-2025": "10B8",
    "Lớp năm học 2025-2026": "11B7"
  },
  {
    "Họ và tên": "SỘNG A SÚA",
    "gioi tinh": "Nam",
    "Dan tộc": "HMông",
    "Lớp năm học 2024-2025": "10B8",
    "Lớp năm học 2025-2026": "11B7"
  },
  {
    "Họ và tên": "LẦU BẢ THÀNH",
    "gioi tinh": "Nam",
    "Dan tộc": "HMông",
    "Lớp năm học 2024-2025": "10B8",
    "Lớp năm học 2025-2026": "11B7"
  },
  {
    "Họ và tên": "VÌ THỊ THƯ",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B8",
    "Lớp năm học 2025-2026": "11B7"
  },
  {
    "Họ và tên": "QUÀNG THỊ THẢO",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B8",
    "Lớp năm học 2025-2026": "11B7"
  },
  {
    "Họ và tên": "VÀNG THỊ BẦU",
    "gioi tinh": "Nữ",
    "Dan tộc": "HMông",
    "Lớp năm học 2024-2025": "10B8",
    "Lớp năm học 2025-2026": "11B7"
  },
  {
    "Họ và tên": "LÒ THỊ HẢI YẾN",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B8",
    "Lớp năm học 2025-2026": "11B7"
  },
  {
    "Họ và tên": "CÀ THỊ HUYỀN TRANG",
    "gioi tinh": "Nữ",
    "Dan tộc": "Lào",
    "Lớp năm học 2024-2025": "10B8",
    "Lớp năm học 2025-2026": "11B7"
  },
  {
    "Họ và tên": "TÒNG THỊ MINH HUYỀN",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B7",
    "Lớp năm học 2025-2026": "11B8"
  },
  {
    "Họ và tên": "TÒNG VĂN ĐIỆP",
    "gioi tinh": "Nam",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B7",
    "Lớp năm học 2025-2026": "11B8"
  },
  {
    "Họ và tên": "MÒNG THỊ THANH",
    "gioi tinh": "Nữ",
    "Dan tộc": "Khơ-Mú",
    "Lớp năm học 2024-2025": "10B7",
    "Lớp năm học 2025-2026": "11B8"
  },
  {
    "Họ và tên": "LƯỜNG THỊ TOẢN",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B7",
    "Lớp năm học 2025-2026": "11B8"
  },
  {
    "Họ và tên": "TÒNG QUỐC TRỌNG",
    "gioi tinh": "Nam",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B7",
    "Lớp năm học 2025-2026": "11B8"
  },
  {
    "Họ và tên": "LÒ THỊ NGỌC ÁNH",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B7",
    "Lớp năm học 2025-2026": "11B8"
  },
  {
    "Họ và tên": "VÌ THỊ HÀ CHI",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B7",
    "Lớp năm học 2025-2026": "11B8"
  },
  {
    "Họ và tên": "LÒ QUỐC ANH",
    "gioi tinh": "Nam",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B7",
    "Lớp năm học 2025-2026": "11B8"
  },
  {
    "Họ và tên": "VÌ THỊ THANH GIANG",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B7",
    "Lớp năm học 2025-2026": "11B8"
  },
  {
    "Họ và tên": "VÀNG DẠ SA",
    "gioi tinh": "Nam",
    "Dan tộc": "HMông",
    "Lớp năm học 2024-2025": "10B7",
    "Lớp năm học 2025-2026": "11B8"
  },
  {
    "Họ và tên": "TÒNG ANH TUẤN",
    "gioi tinh": "Nam",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B7",
    "Lớp năm học 2025-2026": "11B8"
  },
  {
    "Họ và tên": "QUÀNG ĐỨC TRƯƠNG",
    "gioi tinh": "Nam",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B7",
    "Lớp năm học 2025-2026": "11B8"
  },
  {
    "Họ và tên": "QUÀNG THỊ THANH THẢO",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B7",
    "Lớp năm học 2025-2026": "11B8"
  },
  {
    "Họ và tên": "TÒNG MINH ĐỨC",
    "gioi tinh": "Nam",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B7",
    "Lớp năm học 2025-2026": "11B8"
  },
  {
    "Họ và tên": "GIÀNG A MÔNG",
    "gioi tinh": "Nam",
    "Dan tộc": "HMông",
    "Lớp năm học 2024-2025": "10B8",
    "Lớp năm học 2025-2026": "11B8"
  },
  {
    "Họ và tên": "GIÀNG THỊ CHI",
    "gioi tinh": "Nữ",
    "Dan tộc": "HMông",
    "Lớp năm học 2024-2025": "10B8",
    "Lớp năm học 2025-2026": "11B8"
  },
  {
    "Họ và tên": "LÒ THỊ THANH THẢO",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B8",
    "Lớp năm học 2025-2026": "11B8"
  },
  {
    "Họ và tên": "GIÀNG THỊ BẬU",
    "gioi tinh": "Nữ",
    "Dan tộc": "HMông",
    "Lớp năm học 2024-2025": "10B8",
    "Lớp năm học 2025-2026": "11B8"
  },
  {
    "Họ và tên": "GIÀNG A CỦA",
    "gioi tinh": "Nam",
    "Dan tộc": "HMông",
    "Lớp năm học 2024-2025": "10B8",
    "Lớp năm học 2025-2026": "11B8"
  },
  {
    "Họ và tên": "LÒ THỊ DƯƠNG HOA",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B8",
    "Lớp năm học 2025-2026": "11B8"
  },
  {
    "Họ và tên": "LƯỜNG THỊ BẢO LAN",
    "gioi tinh": "Nữ",
    "Dan tộc": "Lào",
    "Lớp năm học 2024-2025": "10B8",
    "Lớp năm học 2025-2026": "11B8"
  },
  {
    "Họ và tên": "LƯỜNG THANH TÙNG",
    "gioi tinh": "Nam",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B8",
    "Lớp năm học 2025-2026": "11B8"
  },
  {
    "Họ và tên": "TÒNG ĐỨC TIỆP",
    "gioi tinh": "Nam",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B8",
    "Lớp năm học 2025-2026": "11B8"
  },
  {
    "Họ và tên": "LÒ VĂN HẢI",
    "gioi tinh": "Nam",
    "Dan tộc": "Lào",
    "Lớp năm học 2024-2025": "10B8",
    "Lớp năm học 2025-2026": "11B8"
  },
  {
    "Họ và tên": "GIÀNG A SỌ",
    "gioi tinh": "Nam",
    "Dan tộc": "HMông",
    "Lớp năm học 2024-2025": "10B8",
    "Lớp năm học 2025-2026": "11B8"
  },
  {
    "Họ và tên": "LÒ THÀNH TƯ",
    "gioi tinh": "Nam",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B8",
    "Lớp năm học 2025-2026": "11B8"
  },
  {
    "Họ và tên": "GIÀNG A KHÁNH",
    "gioi tinh": "Nam",
    "Dan tộc": "HMông",
    "Lớp năm học 2024-2025": "10B8",
    "Lớp năm học 2025-2026": "11B8"
  },
  {
    "Họ và tên": "GIÀNG THỊ ĐẠI",
    "gioi tinh": "Nữ",
    "Dan tộc": "HMông",
    "Lớp năm học 2024-2025": "10B8",
    "Lớp năm học 2025-2026": "11B8"
  },
  {
    "Họ và tên": "GIÀNG A THÊNH",
    "gioi tinh": "Nam",
    "Dan tộc": "HMông",
    "Lớp năm học 2024-2025": "10B8",
    "Lớp năm học 2025-2026": "11B8"
  },
  {
    "Họ và tên": "QUÀNG VĂN CƯỜNG",
    "gioi tinh": "Nam",
    "Dan tộc": "Khơ-Mú",
    "Lớp năm học 2024-2025": "10B8",
    "Lớp năm học 2025-2026": "11B8"
  },
  {
    "Họ và tên": "TRẦN DANH ĐẠI",
    "gioi tinh": "Nam",
    "Dan tộc": "Kinh",
    "Lớp năm học 2024-2025": "10B8",
    "Lớp năm học 2025-2026": "11B8"
  },
  {
    "Họ và tên": "SỘNG A SĂNG",
    "gioi tinh": "Nam",
    "Dan tộc": "HMông",
    "Lớp năm học 2024-2025": "10B8",
    "Lớp năm học 2025-2026": "11B8"
  },
  {
    "Họ và tên": "LÒ VĂN KHOAN",
    "gioi tinh": "Nam",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B8",
    "Lớp năm học 2025-2026": "11B8"
  },
  {
    "Họ và tên": "VÌ XUÂN TRƯỜNG",
    "gioi tinh": "Nam",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B8",
    "Lớp năm học 2025-2026": "11B8"
  },
  {
    "Họ và tên": "LÒ THỊ ÁNH TUYẾT",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B8",
    "Lớp năm học 2025-2026": "11B8"
  },
  {
    "Họ và tên": "TÒNG VĂN THÀNH",
    "gioi tinh": "Nam",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B8",
    "Lớp năm học 2025-2026": "11B8"
  },
  {
    "Họ và tên": "TÒNG QUỐC HUY",
    "gioi tinh": "Nam",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B8",
    "Lớp năm học 2025-2026": "11B8"
  },
  {
    "Họ và tên": "LƯỜNG BÍCH HỮU",
    "gioi tinh": "Nam",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B8",
    "Lớp năm học 2025-2026": "11B8"
  },
  {
    "Họ và tên": "LÒ DUY NHẬT",
    "gioi tinh": "Nam",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B8",
    "Lớp năm học 2025-2026": "11B8"
  },
  {
    "Họ và tên": "VÀNG THÀNH DƯƠNG",
    "gioi tinh": "Nam",
    "Dan tộc": "HMông",
    "Lớp năm học 2024-2025": "10B8",
    "Lớp năm học 2025-2026": "11B8"
  },
  {
    "Họ và tên": "ĐÈO VĂN KHẢI",
    "gioi tinh": "Nam",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B8",
    "Lớp năm học 2025-2026": "11B8"
  },
  {
    "Họ và tên": "LÒ VIỆT CƯỜNG",
    "gioi tinh": "Nam",
    "Dan tộc": "Lào",
    "Lớp năm học 2024-2025": "10B8",
    "Lớp năm học 2025-2026": "11B8"
  },
  {
    "Họ và tên": "VÌ VĂN GIANG",
    "gioi tinh": "Nam",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B8",
    "Lớp năm học 2025-2026": "11B8"
  },
  {
    "Họ và tên": "TÒNG VĂN TIỆP",
    "gioi tinh": "Nam",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B8",
    "Lớp năm học 2025-2026": "11B8"
  },
  {
    "Họ và tên": "LÒ VĂN HẢO",
    "gioi tinh": "Nam",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B8",
    "Lớp năm học 2025-2026": "11B8"
  },
  {
    "Họ và tên": "CẦM ĐẶNG DUY",
    "gioi tinh": "Nam",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B8",
    "Lớp năm học 2025-2026": "11B8"
  },
  {
    "Họ và tên": "TÒNG VĂN KHANG ANH",
    "gioi tinh": "Nam",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B10",
    "Lớp năm học 2025-2026": "11B9"
  },
  {
    "Họ và tên": "LÝ A TỘNG",
    "gioi tinh": "Nam",
    "Dan tộc": "HMông",
    "Lớp năm học 2024-2025": "10B10",
    "Lớp năm học 2025-2026": "11B9"
  },
  {
    "Họ và tên": "VÀNG A TRẢ",
    "gioi tinh": "Nam",
    "Dan tộc": "HMông",
    "Lớp năm học 2024-2025": "10B10",
    "Lớp năm học 2025-2026": "11B9"
  },
  {
    "Họ và tên": "TÒNG THỊ DƯƠNG",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B10",
    "Lớp năm học 2025-2026": "11B9"
  },
  {
    "Họ và tên": "VÌ TUẤN KHANG",
    "gioi tinh": "Nam",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B10",
    "Lớp năm học 2025-2026": "11B9"
  },
  {
    "Họ và tên": "VÌ NGỌC BÍCH",
    "gioi tinh": "Nữ",
    "Dan tộc": "Lào",
    "Lớp năm học 2024-2025": "10B10",
    "Lớp năm học 2025-2026": "11B9"
  },
  {
    "Họ và tên": "TÒNG THỊ VINH HUỆ",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B10",
    "Lớp năm học 2025-2026": "11B9"
  },
  {
    "Họ và tên": "LÒ THỊ HẢI YẾN",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B10",
    "Lớp năm học 2025-2026": "11B9"
  },
  {
    "Họ và tên": "LẬU BẢ BI",
    "gioi tinh": "Nam",
    "Dan tộc": "HMông",
    "Lớp năm học 2024-2025": "10B10",
    "Lớp năm học 2025-2026": "11B9"
  },
  {
    "Họ và tên": "TÒNG THỊ HỒNG DIỆP",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B10",
    "Lớp năm học 2025-2026": "11B9"
  },
  {
    "Họ và tên": "GIÀNG THỊ PHƯƠNG",
    "gioi tinh": "Nữ",
    "Dan tộc": "HMông",
    "Lớp năm học 2024-2025": "10B10",
    "Lớp năm học 2025-2026": "11B9"
  },
  {
    "Họ và tên": "VỪ A TẤƯ",
    "gioi tinh": "Nam",
    "Dan tộc": "HMông",
    "Lớp năm học 2024-2025": "10B10",
    "Lớp năm học 2025-2026": "11B9"
  },
  {
    "Họ và tên": "HÀNG A DI",
    "gioi tinh": "Nam",
    "Dan tộc": "HMông",
    "Lớp năm học 2024-2025": "10B10",
    "Lớp năm học 2025-2026": "11B9"
  },
  {
    "Họ và tên": "LƯỜNG THỊ SƠN",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B9",
    "Lớp năm học 2025-2026": "11B9"
  },
  {
    "Họ và tên": "LÒ THỊ THU PHƯƠNG",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B9",
    "Lớp năm học 2025-2026": "11B9"
  },
  {
    "Họ và tên": "LÒ HẢI YẾN",
    "gioi tinh": "Nữ",
    "Dan tộc": "Lào",
    "Lớp năm học 2024-2025": "10B9",
    "Lớp năm học 2025-2026": "11B9"
  },
  {
    "Họ và tên": "QUÀNG ĐỨC THẮNG",
    "gioi tinh": "Nam",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B9",
    "Lớp năm học 2025-2026": "11B9"
  },
  {
    "Họ và tên": "LÒ THỊ THÚY",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B9",
    "Lớp năm học 2025-2026": "11B9"
  },
  {
    "Họ và tên": "LÒ VĂN NHẤT",
    "gioi tinh": "Nam",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B9",
    "Lớp năm học 2025-2026": "11B9"
  },
  {
    "Họ và tên": "LÒ THỊ MINH CHUYỀN",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B9",
    "Lớp năm học 2025-2026": "11B9"
  },
  {
    "Họ và tên": "LÒ THỊ MAI HẠNH",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B9",
    "Lớp năm học 2025-2026": "11B9"
  },
  {
    "Họ và tên": "VÌ THỊ HÀ QUYÊN",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B9",
    "Lớp năm học 2025-2026": "11B9"
  },
  {
    "Họ và tên": "LÒ VĂN HOÀNG LONG",
    "gioi tinh": "Nam",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B9",
    "Lớp năm học 2025-2026": "11B9"
  },
  {
    "Họ và tên": "QUÀNG THỊ NHƯ",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B9",
    "Lớp năm học 2025-2026": "11B9"
  },
  {
    "Họ và tên": "TÒNG VĂN QUÂN",
    "gioi tinh": "Nam",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B9",
    "Lớp năm học 2025-2026": "11B9"
  },
  {
    "Họ và tên": "TÒNG THỊ DUNG",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B9",
    "Lớp năm học 2025-2026": "11B9"
  },
  {
    "Họ và tên": "TÒNG THỊ HÀ VI",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B9",
    "Lớp năm học 2025-2026": "11B9"
  },
  {
    "Họ và tên": "ĐÈO THỊ NHƯ",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B9",
    "Lớp năm học 2025-2026": "11B9"
  },
  {
    "Họ và tên": "LÒ THỊ KHAY",
    "gioi tinh": "Nữ",
    "Dan tộc": "Lào",
    "Lớp năm học 2024-2025": "10B9",
    "Lớp năm học 2025-2026": "11B9"
  },
  {
    "Họ và tên": "QUÀNG THỊ THU",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B9",
    "Lớp năm học 2025-2026": "11B9"
  },
  {
    "Họ và tên": "LÒ THỊ TỐ NHƯ",
    "gioi tinh": "Nữ",
    "Dan tộc": "Lào",
    "Lớp năm học 2024-2025": "10B9",
    "Lớp năm học 2025-2026": "11B9"
  },
  {
    "Họ và tên": "QUÀNG THỊ NHƯ",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B9",
    "Lớp năm học 2025-2026": "11B9"
  },
  {
    "Họ và tên": "LẬU BẢ SÚA",
    "gioi tinh": "Nam",
    "Dan tộc": "HMông",
    "Lớp năm học 2024-2025": "10B9",
    "Lớp năm học 2025-2026": "11B9"
  },
  {
    "Họ và tên": "GIÀNG THỊ SAY",
    "gioi tinh": "Nữ",
    "Dan tộc": "HMông",
    "Lớp năm học 2024-2025": "10B9",
    "Lớp năm học 2025-2026": "11B9"
  },
  {
    "Họ và tên": "LÒ VĂN CƯỜNG",
    "gioi tinh": "Nam",
    "Dan tộc": "Lào",
    "Lớp năm học 2024-2025": "10B9",
    "Lớp năm học 2025-2026": "11B9"
  },
  {
    "Họ và tên": "VÌ THỊ THU HỒNG",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B9",
    "Lớp năm học 2025-2026": "11B9"
  },
  {
    "Họ và tên": "VÌ THỊ MIỀN",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "10B9",
    "Lớp năm học 2025-2026": "11B9"
  },
  {
    "Họ và tên": "NGUYỄN THU HẰNG",
    "gioi tinh": "Nữ",
    "Dan tộc": "Kinh",
    "Lớp năm học 2024-2025": "11B1",
    "Lớp năm học 2025-2026": "12B1"
  },
  {
    "Họ và tên": "QUÀNG THỊ THẢO HUYỀN",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "11B1",
    "Lớp năm học 2025-2026": "12B1"
  },
  {
    "Họ và tên": "ĐÀO THỊ QUỲNH ANH",
    "gioi tinh": "Nữ",
    "Dan tộc": "Kinh",
    "Lớp năm học 2024-2025": "11B1",
    "Lớp năm học 2025-2026": "12B1"
  },
  {
    "Họ và tên": "SÙNG THỊ LAN NHI",
    "gioi tinh": "Nữ",
    "Dan tộc": "HMông",
    "Lớp năm học 2024-2025": "11B1",
    "Lớp năm học 2025-2026": "12B1"
  },
  {
    "Họ và tên": "QUÀNG THỊ MAI ANH",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "11B1",
    "Lớp năm học 2025-2026": "12B1"
  },
  {
    "Họ và tên": "VŨ XUÂN QUỲNH",
    "gioi tinh": "Nữ",
    "Dan tộc": "Kinh",
    "Lớp năm học 2024-2025": "11B1",
    "Lớp năm học 2025-2026": "12B1"
  },
  {
    "Họ và tên": "NGUYỄN THU HỒNG",
    "gioi tinh": "Nữ",
    "Dan tộc": "Kinh",
    "Lớp năm học 2024-2025": "11B1",
    "Lớp năm học 2025-2026": "12B1"
  },
  {
    "Họ và tên": "NGÔ THỊ ANH ĐÀO",
    "gioi tinh": "Nữ",
    "Dan tộc": "Kinh",
    "Lớp năm học 2024-2025": "11B1",
    "Lớp năm học 2025-2026": "12B1"
  },
  {
    "Họ và tên": "LƯỜNG THỊ THUỲ LINH",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "11B1",
    "Lớp năm học 2025-2026": "12B1"
  },
  {
    "Họ và tên": "NGUYỄN TRÀ MY",
    "gioi tinh": "Nữ",
    "Dan tộc": "Kinh",
    "Lớp năm học 2024-2025": "11B1",
    "Lớp năm học 2025-2026": "12B1"
  },
  {
    "Họ và tên": "MAI KHÁNH HUYỀN",
    "gioi tinh": "Nữ",
    "Dan tộc": "Kinh",
    "Lớp năm học 2024-2025": "11B1",
    "Lớp năm học 2025-2026": "12B1"
  },
  {
    "Họ và tên": "ĐẶNG THANH NHÀN",
    "gioi tinh": "Nữ",
    "Dan tộc": "Kinh",
    "Lớp năm học 2024-2025": "11B1",
    "Lớp năm học 2025-2026": "12B1"
  },
  {
    "Họ và tên": "TRƯƠNG VŨ QUỲNH CHI",
    "gioi tinh": "Nữ",
    "Dan tộc": "Kinh",
    "Lớp năm học 2024-2025": "11B1",
    "Lớp năm học 2025-2026": "12B1"
  },
  {
    "Họ và tên": "VƯƠNG THỊ GIANG",
    "gioi tinh": "Nữ",
    "Dan tộc": "Kinh",
    "Lớp năm học 2024-2025": "11B1",
    "Lớp năm học 2025-2026": "12B1"
  },
  {
    "Họ và tên": "TÒNG THỊ QUỲNH NHƯ",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "11B1",
    "Lớp năm học 2025-2026": "12B1"
  },
  {
    "Họ và tên": "LÊ YẾN NHI",
    "gioi tinh": "Nữ",
    "Dan tộc": "Kinh",
    "Lớp năm học 2024-2025": "11B1",
    "Lớp năm học 2025-2026": "12B1"
  },
  {
    "Họ và tên": "LÊ THỊ THU PHƯƠNG",
    "gioi tinh": "Nữ",
    "Dan tộc": "Kinh",
    "Lớp năm học 2024-2025": "11B1",
    "Lớp năm học 2025-2026": "12B1"
  },
  {
    "Họ và tên": "TÒNG VIỆT HOÀNG",
    "gioi tinh": "Nam",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "11B1",
    "Lớp năm học 2025-2026": "12B1"
  },
  {
    "Họ và tên": "VÌ THỊ LINH",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "11B1",
    "Lớp năm học 2025-2026": "12B1"
  },
  {
    "Họ và tên": "TÒNG THỊ NHƯ PHƯƠNG",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "11B1",
    "Lớp năm học 2025-2026": "12B1"
  },
  {
    "Họ và tên": "QUÀNG THỊ PHƯƠNG XA",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "11B1",
    "Lớp năm học 2025-2026": "12B1"
  },
  {
    "Họ và tên": "LÒ THỊ DIỄM NHƯ",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "11B1",
    "Lớp năm học 2025-2026": "12B1"
  },
  {
    "Họ và tên": "LÒ THỊ SOA",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "11B1",
    "Lớp năm học 2025-2026": "12B1"
  },
  {
    "Họ và tên": "LÒ THU HÀ",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "11B1",
    "Lớp năm học 2025-2026": "12B1"
  },
  {
    "Họ và tên": "LÒ THỊ KIM HUỆ",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "11B1",
    "Lớp năm học 2025-2026": "12B1"
  },
  {
    "Họ và tên": "DƯƠNG ĐỨC ANH",
    "gioi tinh": "Nam",
    "Dan tộc": "Kinh",
    "Lớp năm học 2024-2025": "11B1",
    "Lớp năm học 2025-2026": "12B1"
  },
  {
    "Họ và tên": "QUÀNG HUY HOÀNG",
    "gioi tinh": "Nam",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "11B1",
    "Lớp năm học 2025-2026": "12B1"
  },
  {
    "Họ và tên": "NGUYỄN VŨ ĐẠT",
    "gioi tinh": "Nam",
    "Dan tộc": "Kinh",
    "Lớp năm học 2024-2025": "11B1",
    "Lớp năm học 2025-2026": "12B1"
  },
  {
    "Họ và tên": "CẦM NHẬT PHƯƠNG",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "11B1",
    "Lớp năm học 2025-2026": "12B1"
  },
  {
    "Họ và tên": "VÌ THỊ BÍCH NGỌC",
    "gioi tinh": "Nữ",
    "Dan tộc": "Lào",
    "Lớp năm học 2024-2025": "11B1",
    "Lớp năm học 2025-2026": "12B1"
  },
  {
    "Họ và tên": "LẬU SÚA ĐẠI",
    "gioi tinh": "Nam",
    "Dan tộc": "HMông",
    "Lớp năm học 2024-2025": "11B1",
    "Lớp năm học 2025-2026": "12B1"
  },
  {
    "Họ và tên": "NGUYỄN MẠNH HÙNG",
    "gioi tinh": "Nam",
    "Dan tộc": "Kinh",
    "Lớp năm học 2024-2025": "11B1",
    "Lớp năm học 2025-2026": "12B1"
  },
  {
    "Họ và tên": "LÒ DUY QUÂN",
    "gioi tinh": "Nam",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "11B1",
    "Lớp năm học 2025-2026": "12B1"
  },
  {
    "Họ và tên": "TÒNG NGỌC SƠN",
    "gioi tinh": "Nam",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "11B1",
    "Lớp năm học 2025-2026": "12B1"
  },
  {
    "Họ và tên": "QUÀNG THẾ TOÀN",
    "gioi tinh": "Nam",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "11B1",
    "Lớp năm học 2025-2026": "12B1"
  },
  {
    "Họ và tên": "LÒ THỊ DỊU",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "11B1",
    "Lớp năm học 2025-2026": "12B1"
  },
  {
    "Họ và tên": "TÒNG KỲ PHONG",
    "gioi tinh": "Nam",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "11B1",
    "Lớp năm học 2025-2026": "12B2"
  },
  {
    "Họ và tên": "QUÀNG THỊ THU HIỂU",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "11B1",
    "Lớp năm học 2025-2026": "12B2"
  },
  {
    "Họ và tên": "TÒNG THỊ PHƯƠNG LINH",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "11B1",
    "Lớp năm học 2025-2026": "12B2"
  },
  {
    "Họ và tên": "LÒ THỊ HUYỀN",
    "gioi tinh": "Nữ",
    "Dan tộc": "Khơ-Mú",
    "Lớp năm học 2024-2025": "11B1",
    "Lớp năm học 2025-2026": "12B2"
  },
  {
    "Họ và tên": "LÒ QUỐC ANH",
    "gioi tinh": "Nam",
    "Dan tộc": "Lào",
    "Lớp năm học 2024-2025": "11B10",
    "Lớp năm học 2025-2026": "12B10"
  },
  {
    "Họ và tên": "MÙA NGỌC KHÁNH",
    "gioi tinh": "Nam",
    "Dan tộc": "HMông",
    "Lớp năm học 2024-2025": "11B10",
    "Lớp năm học 2025-2026": "12B10"
  },
  {
    "Họ và tên": "LÒ NGỌC HOÀNG",
    "gioi tinh": "Nam",
    "Dan tộc": "Lào",
    "Lớp năm học 2024-2025": "11B10",
    "Lớp năm học 2025-2026": "12B10"
  },
  {
    "Họ và tên": "QUÀNG VĂN DUY",
    "gioi tinh": "Nam",
    "Dan tộc": "Lào",
    "Lớp năm học 2024-2025": "11B10",
    "Lớp năm học 2025-2026": "12B10"
  },
  {
    "Họ và tên": "LÒ ĐĂNG KHÔI",
    "gioi tinh": "Nam",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "11B10",
    "Lớp năm học 2025-2026": "12B10"
  },
  {
    "Họ và tên": "QUÀNG VĂN NHẬT",
    "gioi tinh": "Nam",
    "Dan tộc": "Lào",
    "Lớp năm học 2024-2025": "11B10",
    "Lớp năm học 2025-2026": "12B10"
  },
  {
    "Họ và tên": "TÒNG VĂN HOÀNG",
    "gioi tinh": "Nam",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "11B10",
    "Lớp năm học 2025-2026": "12B10"
  },
  {
    "Họ và tên": "VÌ VĂN THÀNH",
    "gioi tinh": "Nam",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "11B10",
    "Lớp năm học 2025-2026": "12B10"
  },
  {
    "Họ và tên": "HẠNG A SANG",
    "gioi tinh": "Nam",
    "Dan tộc": "HMông",
    "Lớp năm học 2024-2025": "11B10",
    "Lớp năm học 2025-2026": "12B10"
  },
  {
    "Họ và tên": "TÒNG VĂN DUY",
    "gioi tinh": "Nam",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "11B10",
    "Lớp năm học 2025-2026": "12B10"
  },
  {
    "Họ và tên": "LÒ VĂN VIỆT",
    "gioi tinh": "Nam",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "11B10",
    "Lớp năm học 2025-2026": "12B10"
  },
  {
    "Họ và tên": "VÌ MẠNH QUÂN",
    "gioi tinh": "Nam",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "11B10",
    "Lớp năm học 2025-2026": "12B10"
  },
  {
    "Họ và tên": "QUÀNG VĂN BÌNH",
    "gioi tinh": "Nam",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "11B10",
    "Lớp năm học 2025-2026": "12B10"
  },
  {
    "Họ và tên": "VỪ VẢ CHÊNH",
    "gioi tinh": "Nam",
    "Dan tộc": "HMông",
    "Lớp năm học 2024-2025": "11B10",
    "Lớp năm học 2025-2026": "12B10"
  },
  {
    "Họ và tên": "LƯỜNG VĂN HIỆP",
    "gioi tinh": "Nam",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "11B10",
    "Lớp năm học 2025-2026": "12B10"
  },
  {
    "Họ và tên": "MÒNG THỊ NGỌC",
    "gioi tinh": "Nữ",
    "Dan tộc": "Khơ-Mú",
    "Lớp năm học 2024-2025": "11B10",
    "Lớp năm học 2025-2026": "12B10"
  },
  {
    "Họ và tên": "HÀNG A CHI",
    "gioi tinh": "Nam",
    "Dan tộc": "HMông",
    "Lớp năm học 2024-2025": "11B10",
    "Lớp năm học 2025-2026": "12B10"
  },
  {
    "Họ và tên": "GIÀNG A MUA",
    "gioi tinh": "Nam",
    "Dan tộc": "HMông",
    "Lớp năm học 2024-2025": "11B10",
    "Lớp năm học 2025-2026": "12B10"
  },
  {
    "Họ và tên": "VÌ VĂN HÀ",
    "gioi tinh": "Nam",
    "Dan tộc": "Lào",
    "Lớp năm học 2024-2025": "11B10",
    "Lớp năm học 2025-2026": "12B10"
  },
  {
    "Họ và tên": "LÒ VĂN HẢI",
    "gioi tinh": "Nam",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "11B10",
    "Lớp năm học 2025-2026": "12B10"
  },
  {
    "Họ và tên": "LÒ VĂN VŨ",
    "gioi tinh": "Nam",
    "Dan tộc": "Lào",
    "Lớp năm học 2024-2025": "11B10",
    "Lớp năm học 2025-2026": "12B10"
  },
  {
    "Họ và tên": "VÌ THỊ HIỆU",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "11B10",
    "Lớp năm học 2025-2026": "12B10"
  },
  {
    "Họ và tên": "MÒNG VĂN HỌC",
    "gioi tinh": "Nam",
    "Dan tộc": "Khơ-Mú",
    "Lớp năm học 2024-2025": "11B10",
    "Lớp năm học 2025-2026": "12B10"
  },
  {
    "Họ và tên": "LÒ GIA HUY",
    "gioi tinh": "Nam",
    "Dan tộc": "Lào",
    "Lớp năm học 2024-2025": "11B10",
    "Lớp năm học 2025-2026": "12B10"
  },
  {
    "Họ và tên": "TÒNG CÔNG ĐẠT",
    "gioi tinh": "Nam",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "11B10",
    "Lớp năm học 2025-2026": "12B10"
  },
  {
    "Họ và tên": "TÒNG VĂN ANH",
    "gioi tinh": "Nam",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "11B10",
    "Lớp năm học 2025-2026": "12B10"
  },
  {
    "Họ và tên": "VÌ VĂN HÙNG",
    "gioi tinh": "Nam",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "11B10",
    "Lớp năm học 2025-2026": "12B9"
  },
  {
    "Họ và tên": "TÒNG VĂN LÂM",
    "gioi tinh": "Nam",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "11B10",
    "Lớp năm học 2025-2026": "12B9"
  },
  {
    "Họ và tên": "GIÀNG PÓ TỦA",
    "gioi tinh": "Nam",
    "Dan tộc": "HMông",
    "Lớp năm học 2024-2025": "11B10",
    "Lớp năm học 2025-2026": "12B9"
  },
  {
    "Họ và tên": "LƯỜNG VĂN QUỐC",
    "gioi tinh": "Nam",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "11B10",
    "Lớp năm học 2025-2026": "12B9"
  },
  {
    "Họ và tên": "HẠNG A DƠ",
    "gioi tinh": "Nam",
    "Dan tộc": "HMông",
    "Lớp năm học 2024-2025": "11B10",
    "Lớp năm học 2025-2026": "12B9"
  },
  {
    "Họ và tên": "VÌ VIỆT QUÝ",
    "gioi tinh": "Nam",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "11B10",
    "Lớp năm học 2025-2026": "12B9"
  },
  {
    "Họ và tên": "LÒ VĂN KHUYẾN",
    "gioi tinh": "Nam",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "11B10",
    "Lớp năm học 2025-2026": "12B9"
  },
  {
    "Họ và tên": "LÒ VĂN THI",
    "gioi tinh": "Nam",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "11B10",
    "Lớp năm học 2025-2026": "12B9"
  },
  {
    "Họ và tên": "GIÀNG A CỦA",
    "gioi tinh": "Nam",
    "Dan tộc": "HMông",
    "Lớp năm học 2024-2025": "11B2",
    "Lớp năm học 2025-2026": "12B2"
  },
  {
    "Họ và tên": "GIÀNG A KHẢI",
    "gioi tinh": "Nam",
    "Dan tộc": "HMông",
    "Lớp năm học 2024-2025": "11B2",
    "Lớp năm học 2025-2026": "12B2"
  },
  {
    "Họ và tên": "TÒNG THỊ HÀ",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "11B2",
    "Lớp năm học 2025-2026": "12B2"
  },
  {
    "Họ và tên": "GIÀNG THỊ BI",
    "gioi tinh": "Nữ",
    "Dan tộc": "HMông",
    "Lớp năm học 2024-2025": "11B2",
    "Lớp năm học 2025-2026": "12B2"
  },
  {
    "Họ và tên": "SỘNG THỊ CHU",
    "gioi tinh": "Nữ",
    "Dan tộc": "HMông",
    "Lớp năm học 2024-2025": "11B2",
    "Lớp năm học 2025-2026": "12B2"
  },
  {
    "Họ và tên": "LƯỜNG THỊ TƯƠI",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "11B2",
    "Lớp năm học 2025-2026": "12B2"
  },
  {
    "Họ và tên": "LÒ TUẤN KIỆT",
    "gioi tinh": "Nam",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "11B2",
    "Lớp năm học 2025-2026": "12B2"
  },
  {
    "Họ và tên": "HẠNG THỊ SUA",
    "gioi tinh": "Nữ",
    "Dan tộc": "HMông",
    "Lớp năm học 2024-2025": "11B2",
    "Lớp năm học 2025-2026": "12B2"
  },
  {
    "Họ và tên": "NGUYỄN THỊ KIM NGÂN",
    "gioi tinh": "Nữ",
    "Dan tộc": "Kinh",
    "Lớp năm học 2024-2025": "11B2",
    "Lớp năm học 2025-2026": "12B2"
  },
  {
    "Họ và tên": "LẬU BẢ TÔNG",
    "gioi tinh": "Nam",
    "Dan tộc": "HMông",
    "Lớp năm học 2024-2025": "11B2",
    "Lớp năm học 2025-2026": "12B2"
  },
  {
    "Họ và tên": "VÌ THỊ HOA LY",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "11B2",
    "Lớp năm học 2025-2026": "12B2"
  },
  {
    "Họ và tên": "SỘNG THỊ LY",
    "gioi tinh": "Nữ",
    "Dan tộc": "HMông",
    "Lớp năm học 2024-2025": "11B2",
    "Lớp năm học 2025-2026": "12B2"
  },
  {
    "Họ và tên": "GIÀNG PẠ NA",
    "gioi tinh": "Nữ",
    "Dan tộc": "HMông",
    "Lớp năm học 2024-2025": "11B2",
    "Lớp năm học 2025-2026": "12B2"
  },
  {
    "Họ và tên": "VÌ HOÀNG ĐIỆP",
    "gioi tinh": "Nam",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "11B2",
    "Lớp năm học 2025-2026": "12B2"
  },
  {
    "Họ và tên": "THÀO THỊ PÀNG",
    "gioi tinh": "Nữ",
    "Dan tộc": "HMông",
    "Lớp năm học 2024-2025": "11B2",
    "Lớp năm học 2025-2026": "12B2"
  },
  {
    "Họ và tên": "VÌ THỊ BÍCH LOAN",
    "gioi tinh": "Nữ",
    "Dan tộc": "Lào",
    "Lớp năm học 2024-2025": "11B2",
    "Lớp năm học 2025-2026": "12B2"
  },
  {
    "Họ và tên": "THÀO THỊ MÁI",
    "gioi tinh": "Nữ",
    "Dan tộc": "HMông",
    "Lớp năm học 2024-2025": "11B2",
    "Lớp năm học 2025-2026": "12B2"
  },
  {
    "Họ và tên": "LÒ VĂN TRƯỜNG",
    "gioi tinh": "Nam",
    "Dan tộc": "Lào",
    "Lớp năm học 2024-2025": "11B2",
    "Lớp năm học 2025-2026": "12B2"
  },
  {
    "Họ và tên": "THÀO THỊ PẠ DÔNG",
    "gioi tinh": "Nữ",
    "Dan tộc": "HMông",
    "Lớp năm học 2024-2025": "11B2",
    "Lớp năm học 2025-2026": "12B2"
  },
  {
    "Họ và tên": "LƯỜNG THỊ TRANG",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "11B2",
    "Lớp năm học 2025-2026": "12B2"
  },
  {
    "Họ và tên": "LÒ VĂN PHÚC",
    "gioi tinh": "Nam",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "11B2",
    "Lớp năm học 2025-2026": "12B2"
  },
  {
    "Họ và tên": "TÒNG HỮU THỊNH",
    "gioi tinh": "Nam",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "11B2",
    "Lớp năm học 2025-2026": "12B2"
  },
  {
    "Họ và tên": "VÌ VĂN KIẾN",
    "gioi tinh": "Nam",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "11B2",
    "Lớp năm học 2025-2026": "12B2"
  },
  {
    "Họ và tên": "VÌ VĂN OANH",
    "gioi tinh": "Nam",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "11B2",
    "Lớp năm học 2025-2026": "12B2"
  },
  {
    "Họ và tên": "HÀNG A TỒNG",
    "gioi tinh": "Nam",
    "Dan tộc": "HMông",
    "Lớp năm học 2024-2025": "11B2",
    "Lớp năm học 2025-2026": "12B2"
  },
  {
    "Họ và tên": "NGUYỄN HÀ CHÂU",
    "gioi tinh": "Nam",
    "Dan tộc": "Kinh",
    "Lớp năm học 2024-2025": "11B2",
    "Lớp năm học 2025-2026": "12B2"
  },
  {
    "Họ và tên": "NGUYỄN ĐỨC CẢNH",
    "gioi tinh": "Nam",
    "Dan tộc": "Kinh",
    "Lớp năm học 2024-2025": "11B2",
    "Lớp năm học 2025-2026": "12B3"
  },
  {
    "Họ và tên": "VÌ VĂN MINH",
    "gioi tinh": "Nam",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "11B2",
    "Lớp năm học 2025-2026": "12B3"
  },
  {
    "Họ và tên": "LÒ ANH HOÀNG",
    "gioi tinh": "Nam",
    "Dan tộc": "Lào",
    "Lớp năm học 2024-2025": "11B2",
    "Lớp năm học 2025-2026": "12B3"
  },
  {
    "Họ và tên": "LÒ VĂN QUÂN",
    "gioi tinh": "Nam",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "11B2",
    "Lớp năm học 2025-2026": "12B3"
  },
  {
    "Họ và tên": "TÒNG VĂN CHUNG",
    "gioi tinh": "Nam",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "11B2",
    "Lớp năm học 2025-2026": "12B3"
  },
  {
    "Họ và tên": "SỘNG A MINH",
    "gioi tinh": "Nam",
    "Dan tộc": "HMông",
    "Lớp năm học 2024-2025": "11B2",
    "Lớp năm học 2025-2026": "12B3"
  },
  {
    "Họ và tên": "TRẦN VĂN TRUNG",
    "gioi tinh": "Nam",
    "Dan tộc": "Kinh",
    "Lớp năm học 2024-2025": "11B2",
    "Lớp năm học 2025-2026": "12B3"
  },
  {
    "Họ và tên": "SỘNG A KÝ",
    "gioi tinh": "Nam",
    "Dan tộc": "HMông",
    "Lớp năm học 2024-2025": "11B2",
    "Lớp năm học 2025-2026": "12B3"
  },
  {
    "Họ và tên": "ĐINH DƯƠNG TIẾN",
    "gioi tinh": "Nam",
    "Dan tộc": "Kinh",
    "Lớp năm học 2024-2025": "11B2",
    "Lớp năm học 2025-2026": "12B3"
  },
  {
    "Họ và tên": "VÀNG A DIA",
    "gioi tinh": "Nam",
    "Dan tộc": "HMông",
    "Lớp năm học 2024-2025": "11B3",
    "Lớp năm học 2025-2026": "12B2"
  },
  {
    "Họ và tên": "HẠNG A CHUA",
    "gioi tinh": "Nam",
    "Dan tộc": "HMông",
    "Lớp năm học 2024-2025": "11B3",
    "Lớp năm học 2025-2026": "12B2"
  },
  {
    "Họ và tên": "VÀNG A LANH",
    "gioi tinh": "Nam",
    "Dan tộc": "HMông",
    "Lớp năm học 2024-2025": "11B3",
    "Lớp năm học 2025-2026": "12B2"
  },
  {
    "Họ và tên": "VÀNG QUANG KHẢI",
    "gioi tinh": "Nam",
    "Dan tộc": "HMông",
    "Lớp năm học 2024-2025": "11B3",
    "Lớp năm học 2025-2026": "12B2"
  },
  {
    "Họ và tên": "THÀO CÔNG MỆNH",
    "gioi tinh": "Nam",
    "Dan tộc": "HMông",
    "Lớp năm học 2024-2025": "11B3",
    "Lớp năm học 2025-2026": "12B2"
  },
  {
    "Họ và tên": "LÒ VĂN THUYÊN",
    "gioi tinh": "Nam",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "11B3",
    "Lớp năm học 2025-2026": "12B2"
  },
  {
    "Họ và tên": "VÀNG A MỆNH",
    "gioi tinh": "Nam",
    "Dan tộc": "HMông",
    "Lớp năm học 2024-2025": "11B3",
    "Lớp năm học 2025-2026": "12B3"
  },
  {
    "Họ và tên": "THÀO A CHƯ",
    "gioi tinh": "Nam",
    "Dan tộc": "HMông",
    "Lớp năm học 2024-2025": "11B3",
    "Lớp năm học 2025-2026": "12B3"
  },
  {
    "Họ và tên": "LƯỜNG VĂN DƯƠNG",
    "gioi tinh": "Nam",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "11B3",
    "Lớp năm học 2025-2026": "12B3"
  },
  {
    "Họ và tên": "THÀO THỊ DẠNH",
    "gioi tinh": "Nữ",
    "Dan tộc": "HMông",
    "Lớp năm học 2024-2025": "11B3",
    "Lớp năm học 2025-2026": "12B3"
  },
  {
    "Họ và tên": "LÒ VĂN NGHIỆP",
    "gioi tinh": "Nam",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "11B3",
    "Lớp năm học 2025-2026": "12B3"
  },
  {
    "Họ và tên": "LÒ VĂN BẮC",
    "gioi tinh": "Nam",
    "Dan tộc": "Lào",
    "Lớp năm học 2024-2025": "11B3",
    "Lớp năm học 2025-2026": "12B3"
  },
  {
    "Họ và tên": "LÒ VIỆT ANH",
    "gioi tinh": "Nam",
    "Dan tộc": "Lào",
    "Lớp năm học 2024-2025": "11B3",
    "Lớp năm học 2025-2026": "12B3"
  },
  {
    "Họ và tên": "GIÀNG SỘNG PÓ",
    "gioi tinh": "Nam",
    "Dan tộc": "HMông",
    "Lớp năm học 2024-2025": "11B3",
    "Lớp năm học 2025-2026": "12B3"
  },
  {
    "Họ và tên": "VÀNG DINH DẠ",
    "gioi tinh": "Nam",
    "Dan tộc": "HMông",
    "Lớp năm học 2024-2025": "11B3",
    "Lớp năm học 2025-2026": "12B3"
  },
  {
    "Họ và tên": "LÒ THỊ KIÊN",
    "gioi tinh": "Nữ",
    "Dan tộc": "Khơ-Mú",
    "Lớp năm học 2024-2025": "11B3",
    "Lớp năm học 2025-2026": "12B3"
  },
  {
    "Họ và tên": "MÒNG VĂN BÍNH",
    "gioi tinh": "Nam",
    "Dan tộc": "Khơ-Mú",
    "Lớp năm học 2024-2025": "11B3",
    "Lớp năm học 2025-2026": "12B3"
  },
  {
    "Họ và tên": "SÈO VĂN MẠNH",
    "gioi tinh": "Nam",
    "Dan tộc": "Khơ-Mú",
    "Lớp năm học 2024-2025": "11B3",
    "Lớp năm học 2025-2026": "12B3"
  },
  {
    "Họ và tên": "MÒNG VĂN ĐOÀN",
    "gioi tinh": "Nam",
    "Dan tộc": "Khơ-Mú",
    "Lớp năm học 2024-2025": "11B3",
    "Lớp năm học 2025-2026": "12B3"
  },
  {
    "Họ và tên": "THÀO CA DÊNH",
    "gioi tinh": "Nam",
    "Dan tộc": "HMông",
    "Lớp năm học 2024-2025": "11B3",
    "Lớp năm học 2025-2026": "12B3"
  },
  {
    "Họ và tên": "LƯỜNG TUẤN TÀI",
    "gioi tinh": "Nam",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "11B3",
    "Lớp năm học 2025-2026": "12B3"
  },
  {
    "Họ và tên": "MÒNG VĂN LÂM",
    "gioi tinh": "Nam",
    "Dan tộc": "Khơ-Mú",
    "Lớp năm học 2024-2025": "11B3",
    "Lớp năm học 2025-2026": "12B3"
  },
  {
    "Họ và tên": "CÚT VĂN VỮNG",
    "gioi tinh": "Nam",
    "Dan tộc": "Khơ-Mú",
    "Lớp năm học 2024-2025": "11B3",
    "Lớp năm học 2025-2026": "12B3"
  },
  {
    "Họ và tên": "LƯỜNG HẢI DUY",
    "gioi tinh": "Nam",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "11B3",
    "Lớp năm học 2025-2026": "12B3"
  },
  {
    "Họ và tên": "LÈO VIỆT HÙNG",
    "gioi tinh": "Nam",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "11B3",
    "Lớp năm học 2025-2026": "12B3"
  },
  {
    "Họ và tên": "ĐÀO QUANG PHÚC",
    "gioi tinh": "Nam",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "11B3",
    "Lớp năm học 2025-2026": "12B3"
  },
  {
    "Họ và tên": "NGẦN ANH QUÝ",
    "gioi tinh": "Nam",
    "Dan tộc": "Lào",
    "Lớp năm học 2024-2025": "11B3",
    "Lớp năm học 2025-2026": "12B3"
  },
  {
    "Họ và tên": "LÒ VĂN TUẤN",
    "gioi tinh": "Nam",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "11B3",
    "Lớp năm học 2025-2026": "12B3"
  },
  {
    "Họ và tên": "ĐẶNG THÁI MINH",
    "gioi tinh": "Nam",
    "Dan tộc": "Kinh",
    "Lớp năm học 2024-2025": "11B3",
    "Lớp năm học 2025-2026": "12B3"
  },
  {
    "Họ và tên": "LÒ VĂN HẢI",
    "gioi tinh": "Nam",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "11B3",
    "Lớp năm học 2025-2026": "12B3"
  },
  {
    "Họ và tên": "TÒNG THANH QUYỀN",
    "gioi tinh": "Nam",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "11B3",
    "Lớp năm học 2025-2026": "12B3"
  },
  {
    "Họ và tên": "LÒ VĂN CÔNG",
    "gioi tinh": "Nam",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "11B3",
    "Lớp năm học 2025-2026": "12B3"
  },
  {
    "Họ và tên": "TÒNG VĂN DUY",
    "gioi tinh": "Nam",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "11B3",
    "Lớp năm học 2025-2026": "12B3"
  },
  {
    "Họ và tên": "TÒNG THỊ THÙY CHINH",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "11B4",
    "Lớp năm học 2025-2026": "12B4"
  },
  {
    "Họ và tên": "LÒ VĂN QUANG",
    "gioi tinh": "Nam",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "11B4",
    "Lớp năm học 2025-2026": "12B4"
  },
  {
    "Họ và tên": "NGUYỄN KHÁNH PHƯƠNG",
    "gioi tinh": "Nữ",
    "Dan tộc": "Kinh",
    "Lớp năm học 2024-2025": "11B4",
    "Lớp năm học 2025-2026": "12B4"
  },
  {
    "Họ và tên": "VÌ THỊ HỒNG VINH",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "11B4",
    "Lớp năm học 2025-2026": "12B4"
  },
  {
    "Họ và tên": "LÒ ĐỨC DUY",
    "gioi tinh": "Nam",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "11B4",
    "Lớp năm học 2025-2026": "12B4"
  },
  {
    "Họ và tên": "NGUYỄN ĐỨC HUY",
    "gioi tinh": "Nam",
    "Dan tộc": "Kinh",
    "Lớp năm học 2024-2025": "11B4",
    "Lớp năm học 2025-2026": "12B4"
  },
  {
    "Họ và tên": "VÌ THỊ KHÁNH LINH",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "11B4",
    "Lớp năm học 2025-2026": "12B4"
  },
  {
    "Họ và tên": "VÌ THỊ TRÀ MY",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "11B4",
    "Lớp năm học 2025-2026": "12B4"
  },
  {
    "Họ và tên": "TÒNG THỊ LAN ANH",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "11B4",
    "Lớp năm học 2025-2026": "12B4"
  },
  {
    "Họ và tên": "LÒ THỊ THU HÀ",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "11B4",
    "Lớp năm học 2025-2026": "12B4"
  },
  {
    "Họ và tên": "HÀ QUỲNH NHƯ",
    "gioi tinh": "Nữ",
    "Dan tộc": "Mường",
    "Lớp năm học 2024-2025": "11B4",
    "Lớp năm học 2025-2026": "12B4"
  },
  {
    "Họ và tên": "SỒNG A TÔNG",
    "gioi tinh": "Nam",
    "Dan tộc": "HMông",
    "Lớp năm học 2024-2025": "11B4",
    "Lớp năm học 2025-2026": "12B4"
  },
  {
    "Họ và tên": "LÒ DIỆP MY",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "11B4",
    "Lớp năm học 2025-2026": "12B4"
  },
  {
    "Họ và tên": "LÒ THỊ THẢO MY",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "11B4",
    "Lớp năm học 2025-2026": "12B4"
  },
  {
    "Họ và tên": "VÌ VĂN TUẤN",
    "gioi tinh": "Nam",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "11B4",
    "Lớp năm học 2025-2026": "12B4"
  },
  {
    "Họ và tên": "QUÀNG THỊ PHÓNG",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "11B4",
    "Lớp năm học 2025-2026": "12B4"
  },
  {
    "Họ và tên": "VÌ THỊ NHUNG",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "11B4",
    "Lớp năm học 2025-2026": "12B4"
  },
  {
    "Họ và tên": "LƯỜNG THỊ THANH HUYỀN",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "11B4",
    "Lớp năm học 2025-2026": "12B4"
  },
  {
    "Họ và tên": "TÒNG THỊ THUÝ MÙI",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "11B4",
    "Lớp năm học 2025-2026": "12B4"
  },
  {
    "Họ và tên": "LÒ THỊ NHƯ",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "11B4",
    "Lớp năm học 2025-2026": "12B4"
  },
  {
    "Họ và tên": "LÒ NGỌC HOÀNG LINH",
    "gioi tinh": "Nữ",
    "Dan tộc": "Lào",
    "Lớp năm học 2024-2025": "11B4",
    "Lớp năm học 2025-2026": "12B4"
  },
  {
    "Họ và tên": "VÌ VÂN NHI",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "11B4",
    "Lớp năm học 2025-2026": "12B4"
  },
  {
    "Họ và tên": "VÌ THỊ KIM CÚC",
    "gioi tinh": "Nữ",
    "Dan tộc": "Lào",
    "Lớp năm học 2024-2025": "11B4",
    "Lớp năm học 2025-2026": "12B4"
  },
  {
    "Họ và tên": "LƯỜNG MINH HIẾU",
    "gioi tinh": "Nam",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "11B4",
    "Lớp năm học 2025-2026": "12B4"
  },
  {
    "Họ và tên": "CÀ THỊ THANH",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "11B4",
    "Lớp năm học 2025-2026": "12B4"
  },
  {
    "Họ và tên": "NGUYỄN NHẬT HOÀNG",
    "gioi tinh": "Nam",
    "Dan tộc": "Kinh",
    "Lớp năm học 2024-2025": "11B4",
    "Lớp năm học 2025-2026": "12B4"
  },
  {
    "Họ và tên": "LÒ THỊ HẢI YẾN",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "11B4",
    "Lớp năm học 2025-2026": "12B4"
  },
  {
    "Họ và tên": "LÒ THỊ HẰNG CHUNG",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "11B4",
    "Lớp năm học 2025-2026": "12B4"
  },
  {
    "Họ và tên": "HÀ THỊ YẾN NGÂN",
    "gioi tinh": "Nữ",
    "Dan tộc": "Lào",
    "Lớp năm học 2024-2025": "11B4",
    "Lớp năm học 2025-2026": "12B4"
  },
  {
    "Họ và tên": "LÒ HÀ KHÁNH LY",
    "gioi tinh": "Nữ",
    "Dan tộc": "Lào",
    "Lớp năm học 2024-2025": "11B4",
    "Lớp năm học 2025-2026": "12B4"
  },
  {
    "Họ và tên": "LƯỜNG NGỌC NHI",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "11B4",
    "Lớp năm học 2025-2026": "12B4"
  },
  {
    "Họ và tên": "NGUYỄN THÀNH ĐẠT",
    "gioi tinh": "Nam",
    "Dan tộc": "Kinh",
    "Lớp năm học 2024-2025": "11B4",
    "Lớp năm học 2025-2026": "12B4"
  },
  {
    "Họ và tên": "VÌ THỊ DIỆP",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "11B4",
    "Lớp năm học 2025-2026": "12B4"
  },
  {
    "Họ và tên": "TÒNG THỊ HÀ",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "11B4",
    "Lớp năm học 2025-2026": "12B5"
  },
  {
    "Họ và tên": "LÒ THỊ KIM",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "11B4",
    "Lớp năm học 2025-2026": "12B5"
  },
  {
    "Họ và tên": "VÌ THỊ YẾN NHI",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "11B4",
    "Lớp năm học 2025-2026": "12B5"
  },
  {
    "Họ và tên": "LƯỜNG THỊ HOA",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "11B4",
    "Lớp năm học 2025-2026": "12B5"
  },
  {
    "Họ và tên": "LƯỜNG ĐỨC ANH",
    "gioi tinh": "Nam",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "11B4",
    "Lớp năm học 2025-2026": "12B5"
  },
  {
    "Họ và tên": "NGÔ THẾ DƯƠNG",
    "gioi tinh": "Nam",
    "Dan tộc": "Kinh",
    "Lớp năm học 2024-2025": "11B4",
    "Lớp năm học 2025-2026": "12B5"
  },
  {
    "Họ và tên": "TÒNG THỊ HÀ LINH",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "11B4",
    "Lớp năm học 2025-2026": "12B5"
  },
  {
    "Họ và tên": "TÒNG THỊ LAN",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "11B4",
    "Lớp năm học 2025-2026": "12B5"
  },
  {
    "Họ và tên": "LÒ THỊ DIỆU LY",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "11B4",
    "Lớp năm học 2025-2026": "12B5"
  },
  {
    "Họ và tên": "TÒNG THỊ THẢO VY",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "11B4",
    "Lớp năm học 2025-2026": "12B5"
  },
  {
    "Họ và tên": "LƯỜNG HẢI SƠN",
    "gioi tinh": "Nam",
    "Dan tộc": "Lào",
    "Lớp năm học 2024-2025": "11B5",
    "Lớp năm học 2025-2026": "12B4"
  },
  {
    "Họ và tên": "LÒ VĂN KIÊN",
    "gioi tinh": "Nam",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "11B5",
    "Lớp năm học 2025-2026": "12B4"
  },
  {
    "Họ và tên": "TÒNG VĂN QUYẾT",
    "gioi tinh": "Nam",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "11B5",
    "Lớp năm học 2025-2026": "12B4"
  },
  {
    "Họ và tên": "MÙA THỊ DỦA",
    "gioi tinh": "Nữ",
    "Dan tộc": "HMông",
    "Lớp năm học 2024-2025": "11B5",
    "Lớp năm học 2025-2026": "12B4"
  },
  {
    "Họ và tên": "LÒ THỊ LINH",
    "gioi tinh": "Nữ",
    "Dan tộc": "Lào",
    "Lớp năm học 2024-2025": "11B5",
    "Lớp năm học 2025-2026": "12B4"
  },
  {
    "Họ và tên": "VỪ THỊ XUÂN NÀNG",
    "gioi tinh": "Nữ",
    "Dan tộc": "HMông",
    "Lớp năm học 2024-2025": "11B5",
    "Lớp năm học 2025-2026": "12B4"
  },
  {
    "Họ và tên": "SỘNG THỊ MỶ",
    "gioi tinh": "Nữ",
    "Dan tộc": "HMông",
    "Lớp năm học 2024-2025": "11B5",
    "Lớp năm học 2025-2026": "12B4"
  },
  {
    "Họ và tên": "VÌ DƯƠNG THIÊN",
    "gioi tinh": "Nam",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "11B5",
    "Lớp năm học 2025-2026": "12B4"
  },
  {
    "Họ và tên": "LÒ THỊ LÂM",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "11B5",
    "Lớp năm học 2025-2026": "12B5"
  },
  {
    "Họ và tên": "VÌ THỊ HÀ LINH",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "11B5",
    "Lớp năm học 2025-2026": "12B5"
  },
  {
    "Họ và tên": "GIÀNG THỊ DỢ",
    "gioi tinh": "Nữ",
    "Dan tộc": "HMông",
    "Lớp năm học 2024-2025": "11B5",
    "Lớp năm học 2025-2026": "12B5"
  },
  {
    "Họ và tên": "VÌ THỊ HÀ",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "11B5",
    "Lớp năm học 2025-2026": "12B5"
  },
  {
    "Họ và tên": "TÒNG THỊ THƠM",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "11B5",
    "Lớp năm học 2025-2026": "12B5"
  },
  {
    "Họ và tên": "VỪ THU TRANG",
    "gioi tinh": "Nữ",
    "Dan tộc": "HMông",
    "Lớp năm học 2024-2025": "11B5",
    "Lớp năm học 2025-2026": "12B5"
  },
  {
    "Họ và tên": "LÒ VĂN DIỆP",
    "gioi tinh": "Nam",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "11B5",
    "Lớp năm học 2025-2026": "12B5"
  },
  {
    "Họ và tên": "VÌ THỊ LINH",
    "gioi tinh": "Nữ",
    "Dan tộc": "Khơ-Mú",
    "Lớp năm học 2024-2025": "11B5",
    "Lớp năm học 2025-2026": "12B5"
  },
  {
    "Họ và tên": "TÒNG VIỆT TRUNG",
    "gioi tinh": "Nam",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "11B5",
    "Lớp năm học 2025-2026": "12B5"
  },
  {
    "Họ và tên": "ĐÈO THỊ HIỆU",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "11B5",
    "Lớp năm học 2025-2026": "12B5"
  },
  {
    "Họ và tên": "TÒNG THỊ LAN",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "11B5",
    "Lớp năm học 2025-2026": "12B5"
  },
  {
    "Họ và tên": "LÒ THỊ NHƯ",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "11B5",
    "Lớp năm học 2025-2026": "12B5"
  },
  {
    "Họ và tên": "LÒ QUỲNH NHƯ",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "11B5",
    "Lớp năm học 2025-2026": "12B5"
  },
  {
    "Họ và tên": "VÌ THỊ CHÂM",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "11B5",
    "Lớp năm học 2025-2026": "12B5"
  },
  {
    "Họ và tên": "LƯỜNG THỊ VI",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "11B5",
    "Lớp năm học 2025-2026": "12B5"
  },
  {
    "Họ và tên": "VÌ THỊ THẢO PHƯƠNG",
    "gioi tinh": "Nữ",
    "Dan tộc": "Lào",
    "Lớp năm học 2024-2025": "11B5",
    "Lớp năm học 2025-2026": "12B5"
  },
  {
    "Họ và tên": "LÒ THỊ THẢO VY",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "11B5",
    "Lớp năm học 2025-2026": "12B5"
  },
  {
    "Họ và tên": "LÒ THỊ LAN HƯƠNG",
    "gioi tinh": "Nữ",
    "Dan tộc": "Lào",
    "Lớp năm học 2024-2025": "11B5",
    "Lớp năm học 2025-2026": "12B5"
  },
  {
    "Họ và tên": "QUÀNG THỊ THƯ",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "11B5",
    "Lớp năm học 2025-2026": "12B5"
  },
  {
    "Họ và tên": "VÌ THỊ LAN",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "11B5",
    "Lớp năm học 2025-2026": "12B5"
  },
  {
    "Họ và tên": "TÒNG DUY KHÁNH",
    "gioi tinh": "Nam",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "11B5",
    "Lớp năm học 2025-2026": "12B5"
  },
  {
    "Họ và tên": "LÒ TUẤN TÚ",
    "gioi tinh": "Nam",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "11B5",
    "Lớp năm học 2025-2026": "12B5"
  },
  {
    "Họ và tên": "QUÀNG VĂN DUY",
    "gioi tinh": "Nam",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "11B5",
    "Lớp năm học 2025-2026": "12B5"
  },
  {
    "Họ và tên": "LÒ THỊ THU",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "11B5",
    "Lớp năm học 2025-2026": "12B5"
  },
  {
    "Họ và tên": "TÒNG VĂN THẢO",
    "gioi tinh": "Nam",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "11B5",
    "Lớp năm học 2025-2026": "12B5"
  },
  {
    "Họ và tên": "LÒ THỊ MINH",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "11B5",
    "Lớp năm học 2025-2026": "12B5"
  },
  {
    "Họ và tên": "VÌ THỊ YẾN",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "11B5",
    "Lớp năm học 2025-2026": "12B5"
  },
  {
    "Họ và tên": "LÒ THỊ THANH HƯƠNG",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "11B5",
    "Lớp năm học 2025-2026": "12B5"
  },
  {
    "Họ và tên": "LƯỜNG CHÍ THỨC",
    "gioi tinh": "Nam",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "11B5",
    "Lớp năm học 2025-2026": "12B6"
  },
  {
    "Họ và tên": "LÒ VĂN SANG",
    "gioi tinh": "Nam",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "11B5",
    "Lớp năm học 2025-2026": "12B6"
  },
  {
    "Họ và tên": "VÌ KHÁNH TÙNG",
    "gioi tinh": "Nam",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "11B5",
    "Lớp năm học 2025-2026": "12B6"
  },
  {
    "Họ và tên": "TÒNG VĂN NẮNG",
    "gioi tinh": "Nam",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "11B5",
    "Lớp năm học 2025-2026": "12B6"
  },
  {
    "Họ và tên": "VÌ THỊ XANH",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "11B5",
    "Lớp năm học 2025-2026": "12B6"
  },
  {
    "Họ và tên": "LÒ CẦM THẾ ANH",
    "gioi tinh": "Nam",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "11B6",
    "Lớp năm học 2025-2026": "12B5"
  },
  {
    "Họ và tên": "QUÀNG VĂN KHÔI",
    "gioi tinh": "Nam",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "11B6",
    "Lớp năm học 2025-2026": "12B5"
  },
  {
    "Họ và tên": "LÒ THỊ KIỀU OANH",
    "gioi tinh": "Nữ",
    "Dan tộc": "Lào",
    "Lớp năm học 2024-2025": "11B6",
    "Lớp năm học 2025-2026": "12B5"
  },
  {
    "Họ và tên": "HÀNG A TRỪ",
    "gioi tinh": "Nam",
    "Dan tộc": "HMông",
    "Lớp năm học 2024-2025": "11B6",
    "Lớp năm học 2025-2026": "12B6"
  },
  {
    "Họ và tên": "TÒNG VĂN HÙNG",
    "gioi tinh": "Nam",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "11B6",
    "Lớp năm học 2025-2026": "12B6"
  },
  {
    "Họ và tên": "LÒ VĂN LINH",
    "gioi tinh": "Nam",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "11B6",
    "Lớp năm học 2025-2026": "12B6"
  },
  {
    "Họ và tên": "QUÀNG THỊ XUÂN",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "11B6",
    "Lớp năm học 2025-2026": "12B6"
  },
  {
    "Họ và tên": "TÒNG KHÁNH DUY",
    "gioi tinh": "Nam",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "11B6",
    "Lớp năm học 2025-2026": "12B6"
  },
  {
    "Họ và tên": "LÒ QUỐC QUYỀN",
    "gioi tinh": "Nam",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "11B6",
    "Lớp năm học 2025-2026": "12B6"
  },
  {
    "Họ và tên": "VÌ NGUYỆT ÁNH",
    "gioi tinh": "Nữ",
    "Dan tộc": "Lào",
    "Lớp năm học 2024-2025": "11B6",
    "Lớp năm học 2025-2026": "12B6"
  },
  {
    "Họ và tên": "LƯỜNG VĂN KHẢI",
    "gioi tinh": "Nam",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "11B6",
    "Lớp năm học 2025-2026": "12B6"
  },
  {
    "Họ và tên": "TÒNG VĂN CƯƠNG",
    "gioi tinh": "Nam",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "11B6",
    "Lớp năm học 2025-2026": "12B6"
  },
  {
    "Họ và tên": "VÌ DUY CƯỜNG",
    "gioi tinh": "Nam",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "11B6",
    "Lớp năm học 2025-2026": "12B6"
  },
  {
    "Họ và tên": "TÒNG VĂN HIỆP",
    "gioi tinh": "Nam",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "11B6",
    "Lớp năm học 2025-2026": "12B6"
  },
  {
    "Họ và tên": "LÒ ĐỨC TRỌNG",
    "gioi tinh": "Nam",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "11B6",
    "Lớp năm học 2025-2026": "12B6"
  },
  {
    "Họ và tên": "MÒNG THỊ HÀ",
    "gioi tinh": "Nữ",
    "Dan tộc": "Khơ-Mú",
    "Lớp năm học 2024-2025": "11B6",
    "Lớp năm học 2025-2026": "12B6"
  },
  {
    "Họ và tên": "TÒNG VĂN ĐẠT",
    "gioi tinh": "Nam",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "11B6",
    "Lớp năm học 2025-2026": "12B6"
  },
  {
    "Họ và tên": "VÌ HẢI ÂU",
    "gioi tinh": "Nam",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "11B6",
    "Lớp năm học 2025-2026": "12B6"
  },
  {
    "Họ và tên": "TÒNG VĂN QUANG",
    "gioi tinh": "Nam",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "11B6",
    "Lớp năm học 2025-2026": "12B6"
  },
  {
    "Họ và tên": "LÒ HOÀNG HIỆP",
    "gioi tinh": "Nam",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "11B6",
    "Lớp năm học 2025-2026": "12B6"
  },
  {
    "Họ và tên": "LÒ VĂN THẬT",
    "gioi tinh": "Nam",
    "Dan tộc": "Lào",
    "Lớp năm học 2024-2025": "11B6",
    "Lớp năm học 2025-2026": "12B6"
  },
  {
    "Họ và tên": "LẬU BẢ CẢNH",
    "gioi tinh": "Nam",
    "Dan tộc": "HMông",
    "Lớp năm học 2024-2025": "11B6",
    "Lớp năm học 2025-2026": "12B6"
  },
  {
    "Họ và tên": "LÒ VĂN MƯỜI",
    "gioi tinh": "Nam",
    "Dan tộc": "Lào",
    "Lớp năm học 2024-2025": "11B6",
    "Lớp năm học 2025-2026": "12B6"
  },
  {
    "Họ và tên": "VÀNG A THANH",
    "gioi tinh": "Nam",
    "Dan tộc": "HMông",
    "Lớp năm học 2024-2025": "11B6",
    "Lớp năm học 2025-2026": "12B6"
  },
  {
    "Họ và tên": "VÀNG A VƯ",
    "gioi tinh": "Nam",
    "Dan tộc": "HMông",
    "Lớp năm học 2024-2025": "11B6",
    "Lớp năm học 2025-2026": "12B6"
  },
  {
    "Họ và tên": "LÒ ANH NHẬT",
    "gioi tinh": "Nam",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "11B6",
    "Lớp năm học 2025-2026": "12B6"
  },
  {
    "Họ và tên": "QUÀNG HẢI THẮNG",
    "gioi tinh": "Nam",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "11B6",
    "Lớp năm học 2025-2026": "12B6"
  },
  {
    "Họ và tên": "THÀO A BÌNH",
    "gioi tinh": "Nam",
    "Dan tộc": "HMông",
    "Lớp năm học 2024-2025": "11B6",
    "Lớp năm học 2025-2026": "12B6"
  },
  {
    "Họ và tên": "VÌ QUỐC ĐÌNH",
    "gioi tinh": "Nam",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "11B6",
    "Lớp năm học 2025-2026": "12B6"
  },
  {
    "Họ và tên": "LÒ MẠNH TRIỆU",
    "gioi tinh": "Nam",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "11B6",
    "Lớp năm học 2025-2026": "12B6"
  },
  {
    "Họ và tên": "LY NGỌC DONG",
    "gioi tinh": "Nam",
    "Dan tộc": "HMông",
    "Lớp năm học 2024-2025": "11B6",
    "Lớp năm học 2025-2026": "12B6"
  },
  {
    "Họ và tên": "HÀNG A HỒ",
    "gioi tinh": "Nam",
    "Dan tộc": "HMông",
    "Lớp năm học 2024-2025": "11B6",
    "Lớp năm học 2025-2026": "12B6"
  },
  {
    "Họ và tên": "VỪ BẢ MỆNH",
    "gioi tinh": "Nam",
    "Dan tộc": "HMông",
    "Lớp năm học 2024-2025": "11B6",
    "Lớp năm học 2025-2026": "12B6"
  },
  {
    "Họ và tên": "SỘNG A LỆNH",
    "gioi tinh": "Nam",
    "Dan tộc": "HMông",
    "Lớp năm học 2024-2025": "11B6",
    "Lớp năm học 2025-2026": "12B6"
  },
  {
    "Họ và tên": "PHẠM BẢO TRUNG",
    "gioi tinh": "Nam",
    "Dan tộc": "Kinh",
    "Lớp năm học 2024-2025": "11B6",
    "Lớp năm học 2025-2026": "12B6"
  },
  {
    "Họ và tên": "VÌ THỊ NGỌC ÁNH",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "11B6",
    "Lớp năm học 2025-2026": "12B6"
  },
  {
    "Họ và tên": "LÒ VĂN THẮNG",
    "gioi tinh": "Nam",
    "Dan tộc": "Lào",
    "Lớp năm học 2024-2025": "11B6",
    "Lớp năm học 2025-2026": "12B6"
  },
  {
    "Họ và tên": "LÒ TÙNG SƠN",
    "gioi tinh": "Nam",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "11B6",
    "Lớp năm học 2025-2026": "12B6"
  },
  {
    "Họ và tên": "LÒ VĂN DUY",
    "gioi tinh": "Nam",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "11B6",
    "Lớp năm học 2025-2026": "12B6"
  },
  {
    "Họ và tên": "VÌ QUANG HUY",
    "gioi tinh": "Nam",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "11B6",
    "Lớp năm học 2025-2026": "12B6"
  },
  {
    "Họ và tên": "VÀNG THỊ VIỆT MAI",
    "gioi tinh": "Nữ",
    "Dan tộc": "HMông",
    "Lớp năm học 2024-2025": "11B7",
    "Lớp năm học 2025-2026": "12B7"
  },
  {
    "Họ và tên": "LÒ THỊ MINH TUYẾT",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "11B7",
    "Lớp năm học 2025-2026": "12B7"
  },
  {
    "Họ và tên": "TÒNG THỊ THU NGUYỆT",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "11B7",
    "Lớp năm học 2025-2026": "12B7"
  },
  {
    "Họ và tên": "LƯỜNG THỊ MINH NGUYỆT",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "11B7",
    "Lớp năm học 2025-2026": "12B7"
  },
  {
    "Họ và tên": "LÒ THỊ LUYẾN",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "11B7",
    "Lớp năm học 2025-2026": "12B7"
  },
  {
    "Họ và tên": "GIÀNG PẠ CU",
    "gioi tinh": "Nữ",
    "Dan tộc": "HMông",
    "Lớp năm học 2024-2025": "11B7",
    "Lớp năm học 2025-2026": "12B7"
  },
  {
    "Họ và tên": "TÒNG THỊ KIỀU NGA",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "11B7",
    "Lớp năm học 2025-2026": "12B7"
  },
  {
    "Họ và tên": "LÒ THỊ KIM",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "11B7",
    "Lớp năm học 2025-2026": "12B7"
  },
  {
    "Họ và tên": "LÒ THỊ MAY QUÝ",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "11B7",
    "Lớp năm học 2025-2026": "12B7"
  },
  {
    "Họ và tên": "LÒ THỊ THU HIỀN",
    "gioi tinh": "Nữ",
    "Dan tộc": "Lào",
    "Lớp năm học 2024-2025": "11B7",
    "Lớp năm học 2025-2026": "12B7"
  },
  {
    "Họ và tên": "SỘNG PẠ NA",
    "gioi tinh": "Nữ",
    "Dan tộc": "HMông",
    "Lớp năm học 2024-2025": "11B7",
    "Lớp năm học 2025-2026": "12B7"
  },
  {
    "Họ và tên": "VÀNG THU TRANG",
    "gioi tinh": "Nữ",
    "Dan tộc": "HMông",
    "Lớp năm học 2024-2025": "11B7",
    "Lớp năm học 2025-2026": "12B7"
  },
  {
    "Họ và tên": "LÒ XUÂN HUY",
    "gioi tinh": "Nam",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "11B7",
    "Lớp năm học 2025-2026": "12B7"
  },
  {
    "Họ và tên": "CÀ NGỌC BÍCH",
    "gioi tinh": "Nữ",
    "Dan tộc": "Lào",
    "Lớp năm học 2024-2025": "11B7",
    "Lớp năm học 2025-2026": "12B7"
  },
  {
    "Họ và tên": "LÈO XUÂN MAI",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "11B7",
    "Lớp năm học 2025-2026": "12B7"
  },
  {
    "Họ và tên": "HẠNG THỊ SAY",
    "gioi tinh": "Nữ",
    "Dan tộc": "HMông",
    "Lớp năm học 2024-2025": "11B7",
    "Lớp năm học 2025-2026": "12B7"
  },
  {
    "Họ và tên": "QUÀNG THỊ NHƯ NGUYỆT",
    "gioi tinh": "Nữ",
    "Dan tộc": "Lào",
    "Lớp năm học 2024-2025": "11B7",
    "Lớp năm học 2025-2026": "12B7"
  },
  {
    "Họ và tên": "THÀO A PHỆNH",
    "gioi tinh": "Nam",
    "Dan tộc": "HMông",
    "Lớp năm học 2024-2025": "11B7",
    "Lớp năm học 2025-2026": "12B7"
  },
  {
    "Họ và tên": "HOÀNG ANH KIỆT",
    "gioi tinh": "Nam",
    "Dan tộc": "Lào",
    "Lớp năm học 2024-2025": "11B7",
    "Lớp năm học 2025-2026": "12B7"
  },
  {
    "Họ và tên": "VÀNG A ĐẠI",
    "gioi tinh": "Nam",
    "Dan tộc": "HMông",
    "Lớp năm học 2024-2025": "11B7",
    "Lớp năm học 2025-2026": "12B7"
  },
  {
    "Họ và tên": "SỘNG ME DỢ",
    "gioi tinh": "Nữ",
    "Dan tộc": "HMông",
    "Lớp năm học 2024-2025": "11B7",
    "Lớp năm học 2025-2026": "12B7"
  },
  {
    "Họ và tên": "LÒ THỊ HỒNG",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "11B7",
    "Lớp năm học 2025-2026": "12B7"
  },
  {
    "Họ và tên": "VÌ THỊ CHI",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "11B7",
    "Lớp năm học 2025-2026": "12B7"
  },
  {
    "Họ và tên": "LÒ THỊ NHI",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "11B7",
    "Lớp năm học 2025-2026": "12B7"
  },
  {
    "Họ và tên": "VÌ VĂN GIÁP",
    "gioi tinh": "Nam",
    "Dan tộc": "Lào",
    "Lớp năm học 2024-2025": "11B7",
    "Lớp năm học 2025-2026": "12B7"
  },
  {
    "Họ và tên": "THÀO THỊ NA",
    "gioi tinh": "Nữ",
    "Dan tộc": "HMông",
    "Lớp năm học 2024-2025": "11B7",
    "Lớp năm học 2025-2026": "12B7"
  },
  {
    "Họ và tên": "TÒNG THỊ NINH",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "11B7",
    "Lớp năm học 2025-2026": "12B7"
  },
  {
    "Họ và tên": "VÌ THỊ THUÝ HẰNG",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "11B7",
    "Lớp năm học 2025-2026": "12B8"
  },
  {
    "Họ và tên": "VÀNG THÚY VÂN",
    "gioi tinh": "Nữ",
    "Dan tộc": "HMông",
    "Lớp năm học 2024-2025": "11B7",
    "Lớp năm học 2025-2026": "12B8"
  },
  {
    "Họ và tên": "TÒNG THỊ XINH",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "11B7",
    "Lớp năm học 2025-2026": "12B8"
  },
  {
    "Họ và tên": "VÌ THỊ HẠNH",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "11B7",
    "Lớp năm học 2025-2026": "12B8"
  },
  {
    "Họ và tên": "TÒNG THỊ LAN ANH",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "11B7",
    "Lớp năm học 2025-2026": "12B8"
  },
  {
    "Họ và tên": "THÀO THỊ CỞ",
    "gioi tinh": "Nữ",
    "Dan tộc": "HMông",
    "Lớp năm học 2024-2025": "11B7",
    "Lớp năm học 2025-2026": "12B8"
  },
  {
    "Họ và tên": "VÌ THỊ HÀ LINH",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "11B7",
    "Lớp năm học 2025-2026": "12B8"
  },
  {
    "Họ và tên": "LÒ VĂN LÂM",
    "gioi tinh": "Nam",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "11B7",
    "Lớp năm học 2025-2026": "12B8"
  },
  {
    "Họ và tên": "QUÀNG VĂN TRƯỜNG",
    "gioi tinh": "Nam",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "11B7",
    "Lớp năm học 2025-2026": "12B8"
  },
  {
    "Họ và tên": "LÒ NHẬT NGUYÊN",
    "gioi tinh": "Nam",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "11B7",
    "Lớp năm học 2025-2026": "12B8"
  },
  {
    "Họ và tên": "VÌ QUỲNH XUÂN",
    "gioi tinh": "Nam",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "11B7",
    "Lớp năm học 2025-2026": "12B8"
  },
  {
    "Họ và tên": "THÀO NỤ LY",
    "gioi tinh": "Nam",
    "Dan tộc": "HMông",
    "Lớp năm học 2024-2025": "11B8",
    "Lớp năm học 2025-2026": "12B7"
  },
  {
    "Họ và tên": "VÀNG A CHUA",
    "gioi tinh": "Nam",
    "Dan tộc": "HMông",
    "Lớp năm học 2024-2025": "11B8",
    "Lớp năm học 2025-2026": "12B7"
  },
  {
    "Họ và tên": "THÀO CHƯ PÓ",
    "gioi tinh": "Nam",
    "Dan tộc": "HMông",
    "Lớp năm học 2024-2025": "11B8",
    "Lớp năm học 2025-2026": "12B7"
  },
  {
    "Họ và tên": "GIÀNG A PHI",
    "gioi tinh": "Nam",
    "Dan tộc": "HMông",
    "Lớp năm học 2024-2025": "11B8",
    "Lớp năm học 2025-2026": "12B7"
  },
  {
    "Họ và tên": "SỘNG PẠ DÊNH",
    "gioi tinh": "Nữ",
    "Dan tộc": "HMông",
    "Lớp năm học 2024-2025": "11B8",
    "Lớp năm học 2025-2026": "12B7"
  },
  {
    "Họ và tên": "VÀNG A PHỊA",
    "gioi tinh": "Nam",
    "Dan tộc": "HMông",
    "Lớp năm học 2024-2025": "11B8",
    "Lớp năm học 2025-2026": "12B7"
  },
  {
    "Họ và tên": "GIÀNG A LY",
    "gioi tinh": "Nam",
    "Dan tộc": "HMông",
    "Lớp năm học 2024-2025": "11B8",
    "Lớp năm học 2025-2026": "12B7"
  },
  {
    "Họ và tên": "SỘNG A SỆNH",
    "gioi tinh": "Nam",
    "Dan tộc": "HMông",
    "Lớp năm học 2024-2025": "11B8",
    "Lớp năm học 2025-2026": "12B7"
  },
  {
    "Họ và tên": "SỘNG A TỘNG",
    "gioi tinh": "Nam",
    "Dan tộc": "HMông",
    "Lớp năm học 2024-2025": "11B8",
    "Lớp năm học 2025-2026": "12B7"
  },
  {
    "Họ và tên": "GIÀNG A LY",
    "gioi tinh": "Nam",
    "Dan tộc": "HMông",
    "Lớp năm học 2024-2025": "11B8",
    "Lớp năm học 2025-2026": "12B8"
  },
  {
    "Họ và tên": "CÀ THỊ THÚY HẠNH",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "11B8",
    "Lớp năm học 2025-2026": "12B8"
  },
  {
    "Họ và tên": "LẦU CÔNG MẠNH",
    "gioi tinh": "Nam",
    "Dan tộc": "HMông",
    "Lớp năm học 2024-2025": "11B8",
    "Lớp năm học 2025-2026": "12B8"
  },
  {
    "Họ và tên": "LÒ THỊ HƯỞNG",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "11B8",
    "Lớp năm học 2025-2026": "12B8"
  },
  {
    "Họ và tên": "SỒNG A THẮNG",
    "gioi tinh": "Nam",
    "Dan tộc": "HMông",
    "Lớp năm học 2024-2025": "11B8",
    "Lớp năm học 2025-2026": "12B8"
  },
  {
    "Họ và tên": "TÒNG VĂN DƯƠNG",
    "gioi tinh": "Nam",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "11B8",
    "Lớp năm học 2025-2026": "12B8"
  },
  {
    "Họ và tên": "LÒ HOÀNG ANH",
    "gioi tinh": "Nam",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "11B8",
    "Lớp năm học 2025-2026": "12B8"
  },
  {
    "Họ và tên": "VÌ VĂN PHÚC",
    "gioi tinh": "Nam",
    "Dan tộc": "Lào",
    "Lớp năm học 2024-2025": "11B8",
    "Lớp năm học 2025-2026": "12B8"
  },
  {
    "Họ và tên": "VÌ THỊ ANH",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "11B8",
    "Lớp năm học 2025-2026": "12B8"
  },
  {
    "Họ và tên": "LÒ VĂN HOÀNG",
    "gioi tinh": "Nam",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "11B8",
    "Lớp năm học 2025-2026": "12B8"
  },
  {
    "Họ và tên": "LƯỜNG DUY HẢI",
    "gioi tinh": "Nam",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "11B8",
    "Lớp năm học 2025-2026": "12B8"
  },
  {
    "Họ và tên": "LÒ VĂN CƯỜNG",
    "gioi tinh": "Nam",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "11B8",
    "Lớp năm học 2025-2026": "12B8"
  },
  {
    "Họ và tên": "SỘNG LẬU PÓ",
    "gioi tinh": "Nam",
    "Dan tộc": "HMông",
    "Lớp năm học 2024-2025": "11B8",
    "Lớp năm học 2025-2026": "12B8"
  },
  {
    "Họ và tên": "LÒ VĂN MINH VŨ",
    "gioi tinh": "Nam",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "11B8",
    "Lớp năm học 2025-2026": "12B8"
  },
  {
    "Họ và tên": "LÒ VĂN KHOA",
    "gioi tinh": "Nam",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "11B8",
    "Lớp năm học 2025-2026": "12B8"
  },
  {
    "Họ và tên": "GIÀNG A TU",
    "gioi tinh": "Nam",
    "Dan tộc": "HMông",
    "Lớp năm học 2024-2025": "11B8",
    "Lớp năm học 2025-2026": "12B8"
  },
  {
    "Họ và tên": "LÒ HIẾU HIỆP",
    "gioi tinh": "Nam",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "11B8",
    "Lớp năm học 2025-2026": "12B8"
  },
  {
    "Họ và tên": "TÒNG XUÂN QUYỀN",
    "gioi tinh": "Nam",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "11B8",
    "Lớp năm học 2025-2026": "12B8"
  },
  {
    "Họ và tên": "VÌ VĂN DUY",
    "gioi tinh": "Nam",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "11B8",
    "Lớp năm học 2025-2026": "12B8"
  },
  {
    "Họ và tên": "QUÀNG LỆ QUYÊN",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "11B8",
    "Lớp năm học 2025-2026": "12B8"
  },
  {
    "Họ và tên": "TÒNG VĂN ANH",
    "gioi tinh": "Nam",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "11B8",
    "Lớp năm học 2025-2026": "12B8"
  },
  {
    "Họ và tên": "MÒNG THỊ TRANG",
    "gioi tinh": "Nữ",
    "Dan tộc": "Khơ-Mú",
    "Lớp năm học 2024-2025": "11B8",
    "Lớp năm học 2025-2026": "12B8"
  },
  {
    "Họ và tên": "LÒ VĂN HẬU",
    "gioi tinh": "Nam",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "11B8",
    "Lớp năm học 2025-2026": "12B8"
  },
  {
    "Họ và tên": "LÒ QUÂN HIỆP",
    "gioi tinh": "Nam",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "11B8",
    "Lớp năm học 2025-2026": "12B8"
  },
  {
    "Họ và tên": "TÒNG VĂN CHUNG",
    "gioi tinh": "Nam",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "11B8",
    "Lớp năm học 2025-2026": "12B8"
  },
  {
    "Họ và tên": "LẬU BẢ DỆNH",
    "gioi tinh": "Nam",
    "Dan tộc": "HMông",
    "Lớp năm học 2024-2025": "11B9",
    "Lớp năm học 2025-2026": "12B10"
  },
  {
    "Họ và tên": "ĐÈO THỊ QUỲNH PHƯƠNG",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "11B9",
    "Lớp năm học 2025-2026": "12B10"
  },
  {
    "Họ và tên": "CÀ VĂN THIỆU",
    "gioi tinh": "Nam",
    "Dan tộc": "Lào",
    "Lớp năm học 2024-2025": "11B9",
    "Lớp năm học 2025-2026": "12B10"
  },
  {
    "Họ và tên": "GIÀNG THỊ GIÂY",
    "gioi tinh": "Nữ",
    "Dan tộc": "HMông",
    "Lớp năm học 2024-2025": "11B9",
    "Lớp năm học 2025-2026": "12B10"
  },
  {
    "Họ và tên": "VÌ THỊ NHẬT",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "11B9",
    "Lớp năm học 2025-2026": "12B10"
  },
  {
    "Họ và tên": "HẠNG A PÓ",
    "gioi tinh": "Nam",
    "Dan tộc": "HMông",
    "Lớp năm học 2024-2025": "11B9",
    "Lớp năm học 2025-2026": "12B10"
  },
  {
    "Họ và tên": "TÒNG VĂN HOÀNG",
    "gioi tinh": "Nam",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "11B9",
    "Lớp năm học 2025-2026": "12B10"
  },
  {
    "Họ và tên": "LÒ ĐỨC DUY",
    "gioi tinh": "Nam",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "11B9",
    "Lớp năm học 2025-2026": "12B10"
  },
  {
    "Họ và tên": "LÒ THỊ HÀ NHƯ",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "11B9",
    "Lớp năm học 2025-2026": "12B9"
  },
  {
    "Họ và tên": "QUÀNG THỊ NGỌC CHUYÊN",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "11B9",
    "Lớp năm học 2025-2026": "12B9"
  },
  {
    "Họ và tên": "LƯỜNG THỊ NHƯ",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "11B9",
    "Lớp năm học 2025-2026": "12B9"
  },
  {
    "Họ và tên": "LÒ THỊ PHƯƠNG",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "11B9",
    "Lớp năm học 2025-2026": "12B9"
  },
  {
    "Họ và tên": "GIÀNG Ý NGUYỆN",
    "gioi tinh": "Nam",
    "Dan tộc": "HMông",
    "Lớp năm học 2024-2025": "11B9",
    "Lớp năm học 2025-2026": "12B9"
  },
  {
    "Họ và tên": "LẬU BẢ PHỘNG",
    "gioi tinh": "Nam",
    "Dan tộc": "HMông",
    "Lớp năm học 2024-2025": "11B9",
    "Lớp năm học 2025-2026": "12B9"
  },
  {
    "Họ và tên": "VÀNG THỊ SUNG VY",
    "gioi tinh": "Nữ",
    "Dan tộc": "HMông",
    "Lớp năm học 2024-2025": "11B9",
    "Lớp năm học 2025-2026": "12B9"
  },
  {
    "Họ và tên": "GIÀNG THỊ HUA XI",
    "gioi tinh": "Nữ",
    "Dan tộc": "HMông",
    "Lớp năm học 2024-2025": "11B9",
    "Lớp năm học 2025-2026": "12B9"
  },
  {
    "Họ và tên": "VÌ THỊ THẢO",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "11B9",
    "Lớp năm học 2025-2026": "12B9"
  },
  {
    "Họ và tên": "LÒ THỊ NHUNG",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "11B9",
    "Lớp năm học 2025-2026": "12B9"
  },
  {
    "Họ và tên": "SỒNG A LỆNH",
    "gioi tinh": "Nam",
    "Dan tộc": "HMông",
    "Lớp năm học 2024-2025": "11B9",
    "Lớp năm học 2025-2026": "12B9"
  },
  {
    "Họ và tên": "TÒNG THỊ DIỆP",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "11B9",
    "Lớp năm học 2025-2026": "12B9"
  },
  {
    "Họ và tên": "VÌ THỊ NGỌC",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "11B9",
    "Lớp năm học 2025-2026": "12B9"
  },
  {
    "Họ và tên": "VÌ THỊ THẢO",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "11B9",
    "Lớp năm học 2025-2026": "12B9"
  },
  {
    "Họ và tên": "LƯỜNG LAN PHƯƠNG",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "11B9",
    "Lớp năm học 2025-2026": "12B9"
  },
  {
    "Họ và tên": "VÀNG THỊ LIA",
    "gioi tinh": "Nữ",
    "Dan tộc": "HMông",
    "Lớp năm học 2024-2025": "11B9",
    "Lớp năm học 2025-2026": "12B9"
  },
  {
    "Họ và tên": "LƯỜNG THỊ QUÝ",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "11B9",
    "Lớp năm học 2025-2026": "12B9"
  },
  {
    "Họ và tên": "TÒNG THỊ YẾN NHI",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "11B9",
    "Lớp năm học 2025-2026": "12B9"
  },
  {
    "Họ và tên": "TÒNG THỊ HÀ MY",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "11B9",
    "Lớp năm học 2025-2026": "12B9"
  },
  {
    "Họ và tên": "TÒNG THỊ GIANG",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "11B9",
    "Lớp năm học 2025-2026": "12B9"
  },
  {
    "Họ và tên": "TÒNG XUÂN HIỆP",
    "gioi tinh": "Nam",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "11B9",
    "Lớp năm học 2025-2026": "12B9"
  },
  {
    "Họ và tên": "GIÀNG A DẠƯ",
    "gioi tinh": "Nam",
    "Dan tộc": "HMông",
    "Lớp năm học 2024-2025": "11B9",
    "Lớp năm học 2025-2026": "12B9"
  },
  {
    "Họ và tên": "VÌ VĂN HÙNG",
    "gioi tinh": "Nam",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "11B9",
    "Lớp năm học 2025-2026": "12B9"
  },
  {
    "Họ và tên": "HÀNG A SƠN",
    "gioi tinh": "Nam",
    "Dan tộc": "HMông",
    "Lớp năm học 2024-2025": "11B9",
    "Lớp năm học 2025-2026": "12B9"
  },
  {
    "Họ và tên": "TÒNG VĂN TUYỀN",
    "gioi tinh": "Nam",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "11B9",
    "Lớp năm học 2025-2026": "12B9"
  },
  {
    "Họ và tên": "LÒ THỊ HOÀI LY",
    "gioi tinh": "Nữ",
    "Dan tộc": "Thái",
    "Lớp năm học 2024-2025": "11B9",
    "Lớp năm học 2025-2026": "12B9"
  }
];