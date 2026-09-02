/* ==========================================================================
   Bộ đề: Tiêu hóa & Gan mật — 30 ca lâm sàng chuyên sâu theo guideline AASLD, ACG & Bộ Y tế.
   Tài liệu tham khảo: Bệnh viện Bạch Mai, Hướng dẫn chẩn đoán điều trị bệnh Tiêu hóa - Gan mật.
   ========================================================================== */
window.QUIZ_SET = {
  id: "tieu-hoa",
  eyebrow: "USMLE Step 2 CK · Chuyên đề Nội khoa",
  title: "Tiêu hóa & Gan mật",
  blurb: "30 ca lâm sàng tiêu hóa - gan mật chuyên sâu (AASLD, ACG, Bạch Mai): Xuất huyết tiêu hóa vỡ giãn TMTQ/loét, xơ gan SBP/não gan/HRS, viêm tụy cấp Atlanta, IBD (Crohn/UC), bệnh gan tự miễn/ứ đồng/ứ sắt và cấp cứu ngoại khoa tiêu hóa.",

  cases: [
    {
      spec: "Tiêu hóa",
      task: "Bước xử trí tiếp theo",
      short: "Xuất huyết tiêu hóa do vỡ giãn tĩnh mạch thực quản",
      vignette: [
        "Nam 54 tuổi có tiền sử xơ gan do rượu Child-Pugh B, được đưa vào cấp cứu vì nôn ra máu đỏ tươi ồ ạt khoảng 500 mL kèm đi ngoài phân đen.",
        "Khám: Bệnh nhân da tái lạnh, vã mồ hôi, mạch nhanh 118 l/phút, huyết áp tụt còn 85/55 mm Hg. Bụng có tuần hoàn bàng hệ cửa chủ kiểu đầu sứa, lách to 3 cm dưới bờ sườn trái."
      ],
      vitals: [
        ["Nhiệt độ", "36,8 °C"],
        ["Huyết áp", "85/55"],
        ["Mạch", "118 l/ph"],
        ["Nhịp thở", "22 l/ph"]
      ],
      stem: "Bộ tứ can thiệp cấp cứu ban đầu chuẩn xác nhất theo guideline AASLD trước khi tiến hành nội soi là gì?",
      choices: [
        "Đặt hai đường truyền tĩnh mạch lớn bù dịch tinh thể (mục tiêu Hb 7–8 g/dL) + Truyền thuốc co mạch tạng (Octreotide/Terlipressin) + Kháng sinh dự phòng Ceftriaxone tĩnh mạch + Nội soi can thiệp thắt vòng cao su (EVL) trong vòng 12 giờ",
        "Truyền máu ồ ạt để nâng Hemoglobin lên mức bình thường > 12 g/dL ngay lập tức",
        "Cho bệnh nhân uống dung dịch cầm máu đông tụ tại chỗ và chuyển về khoa điều trị nội",
        "Tiêm thuốc chẹn beta giao cảm Propranolol đường tĩnh mạch ngay trong cơn chảy máu cấp",
        "Đặt ống sonde Sengstaken-Blakemore chèn ép bóng ngay từ đầu mà không cần nội soi"
      ],
      answer: 0,
      why: [
        "Xử trí <b>Xuất huyết do vỡ giãn tĩnh mạch thực quản (Variceal bleeding)</b> theo khuyến cáo <b>AASLD và Baveno VII</b> gồm 4 trụ cột:",
        "1. <b>Hồi sức dịch và chiến lược truyền máu hạn chế</b>: Mục tiêu duy trì <b>Hemoglobin từ 7 đến 8 g/dL</b> (truyền máu quá nhiều làm tăng áp lực tĩnh mạch cửa gây bùng phát tái chảy máu dữ dội và tăng tử vong).",
        "2. <b>Thuốc co mạch tạng</b>: <b>Octreotide (hoặc Terlipressin, Somatostatin)</b> truyền tĩnh mạch liên tục 3–5 ngày để làm giảm áp lực dòng máu tĩnh mạch cửa.",
        "3. <b>Kháng sinh dự phòng ngắn hạn</b>: <b>Ceftriaxone 1g/ngày tĩnh mạch trong 7 ngày</b> bắt buộc cho mọi bệnh nhân xơ gan xuất huyết tiêu hóa để giảm nguy cơ nhiễm trùng dịch cổ trướng (SBP), giảm tái xuất huyết và giảm tỉ lệ tử vong.",
        "4. <b>Nội soi cấp cứu</b>: Tiến hành trong vòng 12 giờ để <b>Thắt búi giãn tĩnh mạch bằng vòng cao su (Endoscopic Variceal Ligation - EVL)</b>.",
        "Lưu ý: <b>Chẹn beta (Propranolol, Carvedilol) CHỐNG CHỈ ĐỊNH trong giai đoạn xuất huyết cấp</b>, chỉ được bắt đầu sau khi đã cầm máu ổn định để dự phòng thứ phát."
      ],
      wrongs: {
        1: "Truyền máu nâng Hb > 10–12 g/dL làm tăng áp lực tĩnh mạch cửa quá mức gây bung vỡ lại búi giãn và tăng tỉ lệ tử vong.",
        2: "Thuốc uống không có hiệu quả trên tĩnh mạch thực quản đang phun máu áp lực cao.",
        3: "Chẹn beta làm mất nhịp nhanh bù trừ trong khi đang sốc giảm thể tích, chống chỉ định trong cơn chảy máu cấp.",
        4: "Sonde chèn bóng (Blakemore) chỉ là biện pháp cứu vãn tạm thời khi nội soi thất bại và chảy máu ồ ạt đe dọa tử vong."
      },
      objective:
        "Xuất huyết vỡ giãn tĩnh mạch thực quản xử trí chuẩn: Truyền máu hạn chế (mục tiêu Hb 7–8 g/dL), Octreotide truyền tĩnh mạch, Kháng sinh Ceftriaxone dự phòng và Nội soi thắt vòng cao su (EVL) trong 12h."
    },

    {
      spec: "Tiêu hóa",
      task: "Bước xử trí tiếp theo",
      short: "Xuất huyết tiêu hóa do loét dạ dày (Phân loại Forrest Ia)",
      vignette: [
        "Nam 62 tuổi tiền sử dùng thuốc giảm đau Naproxen điều trị thoái hóa khớp gối 1 tháng nay, nhập viện vì nôn ra máu đỏ tươi lẫn máu cục và đi ngoài phân đen như bã cà phê.",
        "Khám: Mạch 104 l/phút, huyết áp 100/60 mm Hg. Bụng mềm, ấn đau tức nhẹ vùng thượng vị.",
        "Nội soi dạ dày tá tràng cấp cứu phát hiện: <b>Ổ loét đường kính 1,5 cm ở bờ cong nhỏ dạ dày đang có máu phun thành tia (Forrest Ia)</b>."
      ],
      vitals: [
        ["Nhiệt độ", "36,8 °C"],
        ["Huyết áp", "100/60"],
        ["Mạch", "104 l/ph"],
        ["Nhịp thở", "18 l/ph"]
      ],
      stem: "Phương pháp can thiệp nội soi kết hợp thuốc tối ưu nhất theo khuyến cáo ACG để ngăn ngừa tái xuất huyết là gì?",
      choices: [
        "Can thiệp nội soi phối hợp 2 phương pháp (Tiêm Adrenaline cầm máu kết hợp Kẹp clip kim loại / Đầu dò nhiệt) + Truyền tĩnh mạch PPI liều cao (Esomeprazole bolus 80 mg sau đó truyền liên tục 8 mg/giờ)",
        "Chỉ tiêm Adrenaline đơn độc qua nội soi và uống viên kháng acid Antacid",
        "Uống thuốc Sucralfate bọc niêm mạc dạ dày tại giường",
        "Chỉ định mổ mở cắt 2/3 dạ dày cấp cứu ngay lập tức",
        "Dùng thuốc ức chế thụ thể Histamin H2 (Famotidine) đường tĩnh mạch"
      ],
      answer: 0,
      why: [
        "Theo phân loại <b>Forrest trong xuất huyết tiêu hóa do loét</b>: Forrest Ia (Máu phun thành tia) và Forrest Ib (Máu chảy rỉ rả) có nguy cơ tái xuất huyết rất cao (>80–90%) nếu không được can thiệp.",
        "Khuyến cáo của Hội Tiêu hóa Hoa Kỳ (ACG):",
        "1. <b>Can thiệp nội soi phối hợp 2 phương pháp (Dual endoscopic therapy)</b>: Tiêm Adrenaline pha loãng 1:10.000 để co mạch tạm thời <b>BẮT BUỘC KẾT HỢP với phương pháp cơ học (Kẹp Clip kim loại - Hemoclip) HOẶC phương pháp nhiệt (Đầu dò nhiệt Heater probe / APC)</b>. Tiêm Adrenaline đơn độc có tỉ lệ tái chảy máu cao và không được khuyến cáo.",
        "2. <b>Thuốc ức chế bơm Proton (PPI) liều cao đường tĩnh mạch</b>: <b>Esomeprazole hoặc Pantoprazole 80 mg tiêm tĩnh mạch bolus, sau đó truyền liên tục 8 mg/giờ trong 72 giờ</b> (duy trì pH dạ dày > 6,0 để ổn định cục máu đông và ngăn ngừa pepsin tiêu sợi huyết)."
      ],
      wrongs: {
        1: "Tiêm Adrenaline đơn độc có tỉ lệ tái xuất huyết rất cao và bị khuyến cáo không nên dùng đơn độc.",
        2: "Sucralfate không có vai trò trong cầm máu ổ loét đang phun máu thành tia.",
        3: "Phẫu thuật chỉ đặt ra khi can thiệp nội soi thất bại sau 2 lần hoặc chảy máu tái phát không thể kiểm soát.",
        4: "Kháng H2 bị hiện tượng dung nạp nhanh (tachyphylaxis) sau 24h và không duy trì được pH > 6,0 ổn định như PPI."
      },
      objective:
        "Loét dạ dày xuất huyết Forrest Ia/Ib đòi hỏi can thiệp nội soi phối hợp 2 phương pháp (tiêm Adrenaline + Kẹp Hemoclip/nhiệt) kết hợp truyền tĩnh mạch PPI liều cao trong 72 giờ để duy trì pH > 6."
    },

    {
      spec: "Tiêu hóa",
      task: "Lựa chọn phác đồ điều trị",
      short: "Diệt trừ Helicobacter pylori kháng Clarithromycin",
      vignette: [
        "Nữ 42 tuổi được nội soi dạ dày phát hiện ổ loét hành tá tràng kích thước 1,0 cm. Test nhanh Urease (CLO test) từ mảnh sinh thiết niêm mạc hang vị dương tính mạnh với <i>Helicobacter pylori</i>.",
        "Bệnh nhân sống tại khu vực có tỉ lệ vi khuẩn H. pylori kháng Clarithromycin > 15% và từng dùng kháng sinh nhóm Macrolide điều trị viêm họng trước đây. Bệnh nhân không có tiền sử dị ứng thuốc."
      ],
      vitals: [
        ["Nhiệt độ", "36,8 °C"],
        ["Huyết áp", "118/72"],
        ["Mạch", "74 l/ph"],
        ["Nhịp thở", "16 l/ph"]
      ],
      stem: "Phác đồ diệt trừ H. pylori bước một (First-line) được khuyến cáo ưu tiên hàng đầu theo guideline ACG và Bộ Y tế là gì?",
      choices: [
        "Phác đồ 4 thuốc có Bismuth trong 14 ngày: PPI (liều chuẩn x 2 lần/ngày) + Bismuth subsalicylate + Metronidazole + Tetracycline",
        "Phác đồ 3 thuốc cổ điển trong 7 ngày: PPI + Clarithromycin + Amoxicillin",
        "Chỉ dùng PPI liều cao đơn độc trong 8 tuần",
        "Dùng kháng sinh Ciprofloxacin kết hợp Doxycycline trong 5 ngày",
        "Uống men vi sinh Probiotic đơn độc"
      ],
      answer: 0,
      why: [
        "Theo khuyến cáo hiện nay của <b>Hội Tiêu hóa Hoa Kỳ (ACG) và Phác đồ Bệnh viện Bạch Mai / Bộ Y tế</b>, do tỉ lệ <i>H. pylori</i> kháng Clarithromycin tại Việt Nam và nhiều nước đã vượt ngưỡng 15–20%, <b>phác đồ 3 thuốc truyền thống chứa Clarithromycin KHÔNG CÒN ĐƯỢC KHUYẾN CÁO LÀM LỰA CHỌN BƯỚC MỘT</b> vì tỉ lệ thất bại rất cao.",
        "Phác đồ lựa chọn đầu tay chuẩn số một hiện nay là <b>PHÁC ĐỒ 4 THUỐC CÓ BISMUTH (Bismuth quadruple therapy) TRONG 14 NGÀY</b> bao gồm:",
        "1. <b>PPI liều chuẩn x 2 lần/ngày</b> (ví dụ Esomeprazole 20 mg x 2 lần/ngày).",
        "2. <b>Bismuth subsalicylate / Bismuth subcitrate</b> (120–300 mg x 4 lần/ngày).",
        "3. <b>Metronidazole</b> (500 mg x 3–4 lần/ngày).",
        "4. <b>Tetracycline</b> (500 mg x 4 lần/ngày).",
        "Kiểm tra lại hiệu quả diệt trừ vi khuẩn bằng <b>Test thở C13/C14 (Urea Breath Test) hoặc Kháng nguyên phân</b> sau khi ngừng kháng sinh ít nhất 4 tuần và ngừng PPI ít nhất 2 tuần."
      ],
      wrongs: {
        1: "Phác đồ 3 thuốc chứa Clarithromycin có tỉ lệ kháng thuốc cao và thời gian 7 ngày không đủ diệt trừ vi khuẩn.",
        2: "PPI đơn độc chỉ làm lành ổ loét tạm thời nhưng không diệt được H. pylori, ổ loét sẽ tái phát 100%.",
        3: "Ciprofloxacin không phải là kháng sinh được khuyến cáo trong phác đồ đầu tay của H. pylori.",
        4: "Probiotic chỉ là hỗ trợ giảm tác dụng phụ tiêu chảy của kháng sinh, không diệt được vi khuẩn."
      },
      objective:
        "Phác đồ diệt trừ H. pylori đầu tay ưu tiên hàng đầu tại vùng có tỉ lệ kháng thuốc cao là Phác đồ 4 thuốc có Bismuth (PPI + Bismuth + Metronidazole + Tetracycline) trong 14 ngày."
    },

    {
      spec: "Tiêu hóa",
      task: "Bước xử trí tiếp theo",
      short: "Hội chứng gan thận (Hepatorenal Syndrome - HRS)",
      vignette: [
        "Nam 58 tuổi tiền sử xơ gan mất bù do rượu có cổ trướng kháng trị đang dùng Furosemide và Spironolactone. Bệnh nhân nhập viện vì mệt lả và lượng nước tiểu giảm dần còn < 300 mL/24 giờ.",
        "Khám: Vàng da, cổ trướng căng, không có dấu hiệu nhiễm trùng màng bụng (PMN dịch cổ trướng 80/mm³). Huyết áp 95/58 mm Hg.",
        "Xét nghiệm máu và nước tiểu: <b>Creatinine huyết thanh tăng vọt từ 0,9 lên 2,8 mg/dL</b>. Đã tiến hành <b>ngừng toàn bộ thuốc lợi tiểu và bù đủ thể tích tuần hoàn bằng truyền Albumin tĩnh mạch (1 g/kg/ngày trong 48 giờ) nhưng Creatinine máu không hề cải thiện</b>. Nước tiểu: Natri niệu < 10 mEq/L, cặn nước tiểu bình thường không có trụ hồng cầu hay trụ hạt nâu bùn. Siêu âm thận bình thường."
      ],
      vitals: [
        ["Nhiệt độ", "36,7 °C"],
        ["Huyết áp", "95/58"],
        ["Mạch", "88 l/ph"],
        ["Nhịp thở", "18 l/ph"]
      ],
      stem: "Chẩn đoán xác định và phác đồ điều trị thuốc đặc hiệu đầu tay cho hội chứng này là gì?",
      choices: [
        "Hội chứng gan thận (Hepatorenal Syndrome - HRS); điều trị bằng Thuốc co mạch tạng Terlipressin (hoặc Noradrenaline) kết hợp truyền Albumin tĩnh mạch",
        "Hoại tử ống thận cấp (ATN) do thuốc lợi tiểu; điều trị bằng chạy thận nhân tạo ngay",
        "Viêm cầu thận sau nhiễm trùng; điều trị bằng Corticoid liều cao",
        "Tắc nghẽn đường tiết niệu sau thận; đặt sonde bàng quang liên tục",
        "Tăng liều Spironolactone và Furosemide truyền tĩnh mạch"
      ],
      answer: 0,
      why: [
        "Bệnh nhân thỏa mãn đầy đủ <b>tiêu chuẩn chẩn đoán Hội chứng gan thận (Hepatorenal Syndrome - HRS-AKI)</b>:",
        "1. Xơ gan có cổ trướng.",
        "2. Tổn thương thận cấp (Creatinine tăng nhanh).",
        "3. <b>Không cải thiện sau ít nhất 48 giờ ngừng lợi tiểu và bù đủ Albumin tĩnh mạch (1 g/kg/ngày)</b>.",
        "4. Không có sốc, không dùng thuốc độc thận, không có bệnh lý thực thể tại thận (không protein niệu, không trụ hạt, siêu âm thận bình thường, Na niệu < 10 mEq/L do tăng tái hấp thu muối bù trừ).",
        "Cơ chế: Giãn mạch tạng cực độ làm tụt huyết áp hiệu dụng dẫn đến <b>co thắt mạch máu thận dữ dội qua trung gian hệ RAAS và giao cảm</b>.",
        "Điều trị thuốc đặc hiệu đầu tay: <b>Terlipressin truyền tĩnh mạch (thuốc co mạch tạng) PHỐI HỢP TRUYỀN ALBUMIN</b> (hoặc Noradrenaline + Albumin tại ICU). Biện pháp triệt để duy nhất cứu sống bệnh nhân là <b>Ghép gan (Liver Transplantation)</b>."
      ],
      wrongs: {
        1: "ATN có cặn nước tiểu chứa trụ hạt nâu bùn (muddy brown casts) và Na niệu > 40 mEq/L; ở đây Na niệu < 10 và cặn trong.",
        2: "Không có viêm cầu thận thực tổn (không có protein niệu và trụ hồng cầu).",
        3: "Siêu âm thận bình thường không có giãn đài bể thận, đã loại trừ nguyên nhân sau thận.",
        4: "Tiếp tục dùng lợi tiểu sẽ làm tụt thêm tưới máu thận và làm bệnh nhân tử vong nhanh chóng."
      },
      objective:
        "Hội chứng gan thận (HRS) là suy thận chức năng do co mạch thận ở bệnh nhân xơ gan không đáp ứng bù Albumin 48h; điều trị đặc hiệu bằng Terlipressin kết hợp Albumin tĩnh mạch và ghép gan."
    },

    {
      spec: "Tiêu hóa",
      task: "Bước xử trí ban đầu",
      short: "Viêm tụy cấp và hồi sức bù dịch tích cực",
      vignette: [
        "Nam 42 tuổi nhập viện giờ thứ 4 vì <b>đau thượng vị dữ dội đột ngột sau bữa tiệc thịt nướng và rượu bia</b>. Đau xuyên ra sau lưng, đau tăng khi nằm ngửa và đỡ đau khi ngồi cúi người gập bụng về phía trước, kèm nôn liên tục nhiều lần không giảm đau.",
        "Khám: Bụng chướng nhẹ, ấn đau tức dữ dội vùng thượng vị, không có phản ứng thành bụng. Không có vết bầm tím quanh rốn (Cullen) hay ở mạn sườn (Grey Turner).",
        "Xét nghiệm máu: <b>Amylase huyết thanh 1.450 U/L</b> (bình thường < 100), <b>Lipase huyết thanh 2.800 U/L</b> (bình thường < 60 - tăng gấp gần 50 lần giới hạn trên). Hematocrit 48% (cô đặc máu), BUN 24 mg/dL."
      ],
      vitals: [
        ["Nhiệt độ", "37,6 °C"],
        ["Huyết áp", "110/68"],
        ["Mạch", "106 l/ph"],
        ["Nhịp thở", "22 l/ph"]
      ],
      stem: "Biện pháp can thiệp điều trị nội khoa quan trọng nhất trong 24 giờ đầu tiên để ngăn ngừa biến chứng hoại tử tụy là gì?",
      choices: [
        "Hồi sức bù dịch tinh thể tích cực sớm bằng dung dịch Ringer Lactate (200–250 mL/giờ) kết hợp giảm đau bằng Opioid",
        "Chỉ định chụp CT lồng ngực và bụng có cản quang ngay trong vòng 2 giờ đầu nhập viện",
        "Dùng kháng sinh dự phòng Carbapenem (Imipenem) đường tĩnh mạch ngay lập tức",
        "Cho bệnh nhân nhịn ăn uống tuyệt đối kéo dài 2 tuần qua sonde dạ dày",
        "Chỉ định phẫu thuật mở bụng thăm dò cắt lọc tụy cấp cứu"
      ],
      answer: 0,
      why: [
        "Chẩn đoán xác định <b>Viêm tụy cấp (Acute Pancreatitis)</b> thỏa mãn 2/3 tiêu chuẩn Atlanta: Đau thượng vị điển hình xuyên lưng và <b>Lipase huyết thanh tăng > 3 lần giới hạn trên</b>.",
        "Can thiệp quan trọng nhất quyết định tiên lượng trong 24 giờ đầu là <b>HỒI SỨC BÙ DỊCH SỚM TÍCH CỰC (Early Goal-Directed Fluid Resuscitation)</b>:",
        "- Lựa chọn tối ưu: <b>Dung dịch Ringer Lactate</b> (tốt hơn NaCl 0,9% vì giảm nguy cơ toan chuyển hóa tăng clo máu và giảm phản ứng viêm toàn thân SIRS).",
        "- Tốc độ: <b>200–250 mL/giờ</b> (hoặc bolus 20 mL/kg sau đó duy trì 3 mL/kg/h) nhằm mục tiêu giảm Hematocrit, giảm BUN và duy trì nước tiểu > 0,5–1 mL/kg/h để <b>chống cô đặc máu và ngăn ngừa hoại tử thiếu máu vi mạch tụy</b>.",
        "- <b>KHÔNG CHỤP CT CẢN QUANG QUÁ SỚM (< 48–72h)</b> vì vùng hoại tử tụy chưa hình thành rõ và thuốc cản quang làm nặng thêm tình trạng thiếu máu tụy.",
        "- <b>KHÔNG DÙNG KHÁNG SINH DỰ PHÒNG</b> cho viêm tụy cấp thể phù thông thường."
      ],
      wrongs: {
        1: "Chụp CT cản quang quá sớm (<48h) không đánh giá chính xác được mức độ hoại tử tụy và thuốc cản quang gây độc thận trên nền cô đặc máu.",
        2: "Kháng sinh dự phòng không làm giảm tử vong hay giảm nhiễm trùng trong viêm tụy cấp không hoại tử và làm tăng nguy cơ nấm/kháng thuốc.",
        3: "Nhịn ăn kéo dài làm teo nhung mao ruột và tăng vi khuẩn chuyển vị; khuyến cáo hiện nay cho ăn lại sớm bằng đường miệng ngay khi hết nôn và giảm đau bụng.",
        4: "Phẫu thuật cấp cứu chống chỉ định trong giai đoạn sớm vì làm tăng tỉ lệ tử vong do suy đa tạng."
      },
      objective:
        "Viêm tụy cấp (Lipase > 3 lần) xử trí then chốt trong 24h đầu là hồi sức bù dịch tích cực bằng Ringer Lactate để chống cô đặc máu và phòng hoại tử tụy; không chụp CT quá sớm (<48h) và không dùng kháng sinh dự phòng."
    },

    {
      spec: "Tiêu hóa",
      task: "Bước xử trí tiếp theo",
      short: "Viêm tụy cấp hoại tử nhiễm trùng",
      vignette: [
        "Nam 48 tuổi đang điều trị viêm tụy cấp hoại tử nặng ngày thứ 18. Sau 1 tuần lâm sàng tạm ổn, bệnh nhân đột ngột sốt cao trở lại 39,2 °C, rét run, bạch cầu máu tăng vọt lên 22.000/mm³ và bụng chướng đau dữ dội.",
        "Chụp CT bụng có cản quang kiểm tra: Ổ hoại tử tụy và quanh tụy có kích thước 8 cm chứa <b>nhiều bóng khí nhỏ sinh hơi bên trong (gas bubbles within pancreatic necrosis)</b>."
      ],
      vitals: [
        ["Nhiệt độ", "39,2 °C"],
        ["Huyết áp", "105/65"],
        ["Mạch", "112 l/ph"],
        ["Nhịp thở", "22 l/ph"]
      ],
      stem: "Chẩn đoán xác định và chiến lược can thiệp theo bậc (Step-up approach) chuẩn xác nhất là gì?",
      choices: [
        "Viêm tụy hoại tử nhiễm trùng (Infected Pancreatic Necrosis); điều trị bằng Kháng sinh ngấm mô tụy (Carbapenem) kết hợp Dẫn lưu ổ hoại tử qua da hoặc qua nội soi dạ dày (Step-up approach)",
        "Nang giả tụy vô khuẩn; chỉ cần tiếp tục theo dõi không can thiệp",
        "Chỉ định mổ mở cắt lọc hoại tử tụy rộng rãi ngay trong ngày đầu",
        "Tiêm thuốc ức chế bài tiết tụy Somatostatin đơn độc",
        "Điều trị bằng thuốc chống nấm Amphotericin B tĩnh mạch đơn độc"
      ],
      answer: 0,
      why: [
        "Hình ảnh <b>bóng khí sinh hơi bên trong ổ hoại tử tụy trên CT sau 2–4 tuần</b> là dấu hiệu bệnh lý đặc trưng khẳng định <b>Hoại tử tụy nhiễm trùng (Infected Pancreatic Necrosis)</b> do vi khuẩn đường ruột xâm nhập.",
        "Chiến lược điều trị hiện đại theo khuyến cáo quốc tế (<b>Step-up Approach</b>):",
        "1. <b>Kháng sinh đường tĩnh mạch có khả năng ngấm sâu vào mô tụy hoại tử</b>: <b>Carbapenem (Meropenem / Imipenem)</b> hoặc Quinolone + Metronidazole.",
        "2. <b>Can thiệp xâm lấn tối thiểu từng bước</b>: <b>Dẫn lưu qua da dưới hướng dẫn CT (Percutaneous drainage)</b> hoặc <b>Dẫn lưu qua thành dạ dày dưới hướng dẫn siêu âm nội soi (Transgastric endoscopic drainage)</b>. Nếu dẫn lưu tối thiểu sau 72h không cải thiện mới tiến hành nội soi cắt lọc hoại tử sau phúc mạc (VARD) hoặc mổ mở.",
        "Nghiên cứu PANTER trial chứng minh Step-up approach giảm biến chứng suy đa tạng và giảm tử vong rõ rệt so với mổ mở cắt lọc ngay từ đầu."
      ],
      wrongs: {
        1: "Có bóng khí sinh hơi và sốt cao khẳng định hoại tử nhiễm trùng, không phải nang giả tụy vô trùng.",
        2: "Mổ mở cắt lọc ồ ạt ngay từ đầu có tỉ lệ biến chứng và tử vong rất cao (trên 40–50%).",
        3: "Somatostatin không giải quyết được ổ hoại tử nhiễm trùng sinh hơi.",
        4: "Kháng sinh Carbapenem diệt vi khuẩn Gram âm/kỵ khí là bắt buộc, không phải nấm đơn độc."
      },
      objective:
        "Viêm tụy hoại tử nhiễm trùng (bóng khí trong ổ hoại tử trên CT) điều trị bằng kháng sinh ngấm mô tụy (Carbapenem) kết hợp chiến lược can thiệp từng bước (Step-up approach: dẫn lưu qua da/nội soi trước, mổ sau nếu thất bại)."
    },

    {
      spec: "Tiêu hóa",
      task: "Bước chẩn đoán phân biệt",
      short: "Viêm loét đại tràng chảy máu (Ulcerative Colitis)",
      vignette: [
        "Nữ 26 tuổi đến khám vì <b>tiêu chảy phân lỏng lẫn máu tươi và chất nhầy 6–8 lần/ngày</b> kèm đau quặn bụng dưới bên trái và mót rặn (tenesmus) kéo dài 2 tháng nay. Bệnh nhân sút 4 kg và mệt mỏi.",
        "Khám: Bụng mềm, ấn đau dọc khung đại tràng sigma và hố chậu trái. Khám quanh hậu môn hoàn toàn bình thường, không có nứt kẽ hay lỗ rò hậu môn.",
        "Nội soi đại trực tràng toàn bộ: <b>Tổn thương viêm đỏ, mất mạng lưới mạch máu dưới niêm mạc, niêm mạc dễ chảy máu khi chạm vào và có các vết loét nông liên tục bắt đầu từ trực tràng lan liên tục lên đến góc lách</b> (không có vùng niêm mạc lành xen kẽ). Đoạn cuối hồi tràng hoàn toàn bình thường. Sinh thiết: <b>Viêm giới hạn ở lớp niêm mạc và dưới niêm mạc, có hình ảnh áp xe vi thể ở khe tuyến (crypt abscesses)</b>."
      ],
      vitals: [
        ["Nhiệt độ", "37,4 °C"],
        ["Huyết áp", "115/70"],
        ["Mạch", "84 l/ph"],
        ["Nhịp thở", "16 l/ph"]
      ],
      stem: "Chẩn đoán xác định và thuốc điều trị duy trì đầu tay lựa chọn là gì?",
      choices: [
        "Viêm loét đại trực tràng chảy máu (Ulcerative Colitis); điều trị duy trì đầu tay bằng 5-ASA đường uống và/hoặc đặt trực tràng (Mesalamine)",
        "Bệnh Crohn; điều trị duy trì bằng thuốc kháng TNF-alpha",
        "Viêm đại tràng do thiếu máu cục bộ; điều trị bằng phẫu thuật cắt đại tràng trái",
        "Hội chứng ruột kích thích thể tiêu chảy (IBS-D); điều trị bằng Loperamide",
        "Bệnh túi thừa đại tràng chảy máu; điều trị bằng kháng sinh Ciprofloxacin"
      ],
      answer: 0,
      why: [
        "Bệnh nhân có đầy đủ đặc điểm kinh điển của <b>Viêm loét đại trực tràng chảy máu (Ulcerative Colitis - UC)</b>:",
        "- Lâm sàng: <b>Tiêu chảy phân máu nhầy liên tục kèm mót rặn</b>, đau quặn bụng dưới trái.",
        "- Nội soi: <b>Tổn thương LIÊN TỤC bắt đầu từ trực tràng</b> lan ngược lên đại tràng (Rectal involvement), <b>KHÔNG CÓ vùng niêm mạc lành xen kẽ (No skip lesions)</b>, hồi tràng bình thường.",
        "- Mô bệnh học: Tổn thương nông giới hạn ở <b>lớp niêm mạc và dưới niêm mạc</b>, có <b>áp xe khe tuyến (Crypt abscesses)</b>, KHÔNG CÓ u hạt (No granulomas).",
        "- Phân biệt với <b>Bệnh Crohn</b>: Crohn có tổn thương ngắt quãng (skip lesions) từ miệng đến hậu môn, tổn thương xuyên thành (transmural), hay có lỗ rò/nứt hậu môn, và có u hạt không bã đậu.",
        "Điều trị duy trì đầu tay cho UC mức độ nhẹ-vừa: <b>Hợp chất 5-ASA (Mesalamine / Sulfasalazine) đường uống kết hợp viên đặt/thụt trực tràng</b>."
      ],
      wrongs: {
        1: "Bệnh Crohn có tổn thương ngắt quãng, tổn thương xuyên thành và hay có lỗ rò hậu môn; ở đây tổn thương liên tục từ trực tràng và chỉ nông ở niêm mạc.",
        2: "Thiếu máu đại tràng gặp ở người cao tuổi có bệnh tim mạch sau tụt huyết áp cấp.",
        3: "IBS không bao giờ có tiêu chảy ra máu, không sụt cân và nội soi hoàn toàn bình thường.",
        4: "Bệnh túi thừa gây chảy máu đỏ tươi ồ ạt không đau bụng nhiều, không gây tiêu chảy phân máu nhầy mạn tính."
      },
      objective:
        "Viêm loét đại trực tràng chảy máu (UC) đặc trưng bởi tổn thương liên tục từ trực tràng, nông ở niêm mạc và áp xe khe tuyến; điều trị duy trì đầu tay bằng 5-ASA (Mesalamine)."
    },

    {
      spec: "Tiêu hóa",
      task: "Bước chẩn đoán và biến chứng",
      short: "Bệnh Crohn và biến chứng lỗ rò quanh hậu môn",
      vignette: [
        "Nam 24 tuổi đến khám vì đau quặn bụng từng cơn quanh rốn và hố chậu phải kèm tiêu chảy phân lỏng 4–5 lần/ngày không có máu đại thể kéo dài 6 tháng nay, sút 5 kg. Bệnh nhân có loét áp-tơ tái diễn ở miệng.",
        "Khám hậu môn trực tràng: Phát hiện <b>hai lỗ rò quanh hậu môn đang rỉ dịch mủ (perianal fistulas) kèm nứt kẽ hậu môn sâu phức tạp</b>.",
        "Nội soi đại tràng và hồi tràng: Hình ảnh niêm mạc <b>lát đá cuội (cobblestone appearance)</b> với các vết loét hình rắn bò sâu xen kẽ các vùng niêm mạc hoàn toàn lành lặn (<b>tổn thương nhảy cóc - skip lesions</b>), đoạn cuối hồi tràng hẹp và loét nặng. Sinh thiết: <b>Viêm xuyên thành kèm u hạt không bã đậu (Non-caseating granulomas)</b>."
      ],
      vitals: [
        ["Nhiệt độ", "37,5 °C"],
        ["Huyết áp", "120/75"],
        ["Mạch", "80 l/ph"],
        ["Nhịp thở", "16 l/ph"]
      ],
      stem: "Bệnh nhân này có nguy cơ cao nhất mắc loại sỏi thận nào do cơ chế kém hấp thu mỡ ở hồi tràng?",
      choices: [
        "Sỏi thận Canxi Oxalate (do tăng hấp thu Oxalate tự do tại đại tràng khi acid béo không hấp thu gắn cạnh tranh với Canxi)",
        "Sỏi thận Acid Uric do tăng thoái giáng purin",
        "Sỏi thận Struvite (Nhiễm trùng) do vi khuẩn Proteus",
        "Sỏi thận Cystine bẩm sinh",
        "Sỏi mật cholesterol đơn thuần không có sỏi thận"
      ],
      answer: 0,
      why: [
        "Bệnh nhân có đầy đủ đặc điểm kinh điển của <b>Bệnh Crohn (Crohn's Disease)</b>: tổn thương đoạn cuối hồi tràng, tổn thương nhảy cóc (skip lesions), hình ảnh lát đá cuội, viêm xuyên thành, <b>u hạt không bã đậu</b> và <b>biến chứng rò quanh hậu môn phức tạp</b>.",
        "Cơ chế tạo <b>Sỏi thận Canxi Oxalate ở bệnh nhân Crohn tổn thương hồi tràng</b>:",
        "1. Đoạn cuối hồi tràng bị viêm loét làm mất khả năng hấp thu muối mật và chất béo -> <b>chất béo không được hấp thu ứ đọng trong lòng ruột</b>.",
        "2. Các acid béo tự do trong lòng ruột sẽ <b>gắn cạnh tranh với ion Canxi</b> để tạo thành xà phòng canxi.",
        "3. Bình thường Canxi gắn với Oxalate tạo muối không tan đào thải ra phân. Khi Canxi bị acid béo kéo đi hết, <b>phân tử Oxalate ở dạng tự do tự do được hấp thu ồ ạt qua niêm mạc đại tràng vào máu (Enteric hyperoxaluria)</b>, thải qua thận và kết tinh thành <b>Sỏi Canxi Oxalate tại thận</b>.",
        "Ngoài ra bệnh nhân Crohn còn có nguy cơ tạo <b>Sỏi mật Cholesterol</b> do cạn kiệt muối mật hồi tràng."
      ],
      wrongs: {
        1: "Sỏi acid uric liên quan đến bệnh Gout hoặc nước tiểu quá toan do mất kiềm tiêu chảy, nhưng cơ chế đặc trưng trực tiếp của tổn thương hồi tràng là sỏi Canxi Oxalate.",
        2: "Sỏi Struvite hình san hô do nhiễm trùng đường tiểu vi khuẩn sinh men urease (Proteus, Klebsiella).",
        3: "Sỏi Cystine do khiếm khuyết tái hấp thu acid amin bẩm sinh ở ống thận.",
        4: "Bệnh nhân có tổn thương hồi tràng có nguy cơ sỏi thận canxi oxalate rất cao."
      },
      objective:
        "Bệnh Crohn tổn thương hồi tràng (viêm xuyên thành, u hạt không bã đậu, rò hậu môn) gây kém hấp thu mỡ làm tăng hấp thu Oxalate tự do tại đại tràng, dẫn đến biến chứng tạo Sỏi thận Canxi Oxalate."
    },

    {
      spec: "Tiêu hóa",
      task: "Bước chẩn đoán và chống chỉ định",
      short: "Giãn đại tràng nhiễm độc (Toxic Megacolon)",
      vignette: [
        "Nữ 32 tuổi có tiền sử Viêm loét đại tràng chảy máu (UC) đang điều trị đợt bùng phát, nhập viện vì sốt cao 39,4 °C, đau bụng chướng dữ dội, mệt lả và lú lẫn.",
        "Khám: Bệnh nhân biểu hiện nhiễm độc nặng, da tái, mạch nhanh 128 l/phút, huyết áp tụt 88/55 mm Hg. Bụng chướng to căng bóng, ấn đau chói khắp bụng kèm phản ứng thành bụng và cảm ứng phúc mạc rõ rệt, tiếng nhu động ruột mất hoàn toàn.",
        "Chụp X-quang bụng không chuẩn bị: <b>Đại tràng ngang giãn to mất nếp niêm mạc với đường kính 7,5 cm (tiêu chuẩn > 6 cm)</b> kèm hình ảnh phù nề thành ruột (thumbprinting)."
      ],
      vitals: [
        ["Nhiệt độ", "39,4 °C"],
        ["Huyết áp", "88/55"],
        ["Mạch", "128 l/ph"],
        ["Nhịp thở", "26 l/ph"]
      ],
      stem: "Thủ thuật thăm dò nào sau đây bị CHỐNG CHỈ ĐỊNH TUYỆT ĐỐI vì nguy cơ gây thủng ruột tử vong?",
      choices: [
        "Nội soi toàn bộ đại tràng bằng ống soi mềm (Complete Colonoscopy)",
        "Chụp X-quang bụng không chuẩn bị tư thế nằm và đứng",
        "Chụp CT cắt lớp vi tính ổ bụng không tiêm thuốc cản quang",
        "Xét nghiệm cấy máu tìm vi khuẩn",
        "Đặt ống sonde dạ dày giảm áp"
      ],
      answer: 0,
      why: [
        "Bệnh nhân bị <b>Giãn đại tràng nhiễm độc (Toxic Megacolon)</b> - biến chứng đe dọa tính mạng của Viêm loét đại tràng (UC) hoặc nhiễm <i>C. difficile</i>: (1) Bằng chứng giãn đại tràng trên X-quang (<b>đường kính đại tràng ngang > 6 cm</b>); (2) Hội chứng đáp ứng viêm toàn thân SIRS / Nhiễm độc (sốt cao >38,6 °C, nhịp nhanh >120 l/ph, tụt huyết áp, tăng bạch cầu); (3) Đau bụng chướng và phúc mạc kích thích.",
        "<b>NỘI SOI TOÀN BỘ ĐẠI TRÀNG BỊ CHỐNG CHỈ ĐỊNH TUYỆT ĐỐI</b>: Thành đại tràng đang bị viêm hoại tử mỏng như tờ giấy; việc bơm hơi và đưa ống soi qua các góc đại tràng sẽ gây <b>thủng đại tràng ồ ạt dẫn đến viêm phúc mạc phân và tử vong ngay lập tức</b>.",
        "Xử trí: Nhịn ăn hoàn toàn, đặt sonde dạ dày, bù dịch tích cực, <b>Kháng sinh phổ rộng tĩnh mạch kết hợp Corticoid tĩnh mạch liều cao (Methylprednisolone)</b>. Nếu không cải thiện sau 24–48 giờ hoặc có dấu hiệu thủng: <b>Phẫu thuật cắt toàn bộ đại tràng cấp cứu (Subtotal colectomy)</b>."
      ],
      wrongs: {
        1: "X-quang bụng không chuẩn bị là phương tiện chẩn đoán và theo dõi kích thước đại tràng an toàn hàng đầu.",
        2: "Chụp CT bụng có thể thực hiện để phát hiện biến chứng thủng ruột hoặc áp xe quanh đại tràng.",
        3: "Cấy máu là bắt buộc để phát hiện nhiễm khuẩn huyết vi khuẩn đường ruột.",
        4: "Đặt sonde dạ dày giúp giảm áp đường tiêu hóa trên."
      },
      objective:
        "Giãn đại tràng nhiễm độc (đại tràng ngang giãn >6 cm kèm nhiễm độc toàn thân) CHỐNG CHỈ ĐỊNH TUYỆT ĐỐI nội soi toàn bộ đại tràng vì nguy cơ thủng ruột; điều trị nội khoa tích cực hoặc phẫu thuật cắt đại tràng cấp cứu."
    },

    {
      spec: "Tiêu hóa",
      task: "Bước chẩn đoán tiếp theo",
      short: "Bệnh Celiac và viêm da dạng herpes",
      vignette: [
        "Nữ 28 tuổi đến khám vì tiêu chảy phân mỡ sống nhiều nước, đầy bụng khó tiêu và sút 4 kg trong 6 tháng nay. Bệnh nhân có tổn thương da ngứa dữ dội: <b>nhiều mụn nước nhỏ mọc thành chùm đối xứng ở mặt duỗi hai cùi chỏ tay, hai đầu gối và mông (Viêm da dạng Herpes - Dermatitis herpetiformis)</b>.",
        "Xét nghiệm máu: <b>Hemoglobin giảm 9,8 g/dL, MCV 72 fL (Thiếu máu thiếu sắt hồng cầu nhỏ)</b>, Ferritin giảm thấp 8 ng/mL dù không có chảy máu đại thể; Canxi máu và Vitamin D giảm nhẹ."
      ],
      vitals: [
        ["Nhiệt độ", "36,8 °C"],
        ["Huyết áp", "110/70"],
        ["Mạch", "76 l/ph"],
        ["Nhịp thở", "16 l/ph"]
      ],
      stem: "Xét nghiệm huyết thanh học sàng lọc đầu tay nhạy nhất và phương pháp điều trị triệt để là gì?",
      choices: [
        "Định lượng Kháng thể kháng Transglutaminase mô dạng IgA (Anti-tTG IgA) kết hợp IgA toàn phần; điều trị triệt để bằng Chế độ ăn kiêng hoàn toàn Gluten suốt đời",
        "Xét nghiệm kháng thể kháng nhân ANA; điều trị bằng Corticoid",
        "Xét nghiệm Calprotectin trong phân; điều trị bằng kháng sinh Ciprofloxacin",
        "Cấy phân tìm ký sinh trùng Giardia lamblia; điều trị bằng Metronidazole",
        "Đo nồng độ Gastrin huyết thanh; điều trị bằng phẫu thuật cắt dạ dày"
      ],
      answer: 0,
      why: [
        "Bệnh cảnh kinh điển của <b>Bệnh Celiac (Celiac Disease / Bệnh nhạy cảm với Gluten)</b> phối hợp tổn thương da đặc trưng <b>Viêm da dạng Herpes (Dermatitis herpetiformis)</b>.",
        "Tổn thương viêm tự miễn do mẫn cảm với <b>Gluten</b> (protein trong lúa mì, lúa mạch, lúa mạch đen) gây <b>teo các nhung mao niêm mạc tá tràng và hỗng tràng (Villous atrophy)</b>, dẫn đến hội chứng kém hấp thu đa chất:",
        "- Kém hấp thu sắt tại tá tràng -> <b>Thiếu máu thiếu sắt kháng trị với viên uống</b>.",
        "- Kém hấp thu mỡ và các vitamin tan trong dầu (A, D, E, K), canxi.",
        "Sàng lọc huyết thanh đầu tay nhạy và đặc hiệu nhất: <b>Kháng thể kháng mô Transglutaminase IgA (Anti-tTG IgA)</b> đi kèm định lượng IgA toàn phần (để loại trừ âm tính giả do thiếu hụt IgA bẩm sinh). Khẳng định bằng <b>Sinh thiết tá tràng qua nội soi</b>.",
        "Điều trị duy nhất triệt để: <b>Chế độ ăn kiêng không chứa Gluten suốt đời (Strict Gluten-free diet)</b>. Thuốc <b>Dapsone</b> giúp giảm nhanh tổn thương da viêm da dạng herpes."
      ],
      wrongs: {
        1: "Bệnh Celiac là bệnh qua trung gian miễn dịch với gluten, không phải lupus tự miễn hệ thống.",
        2: "Calprotectin phân tăng trong IBD, không đặc hiệu để chẩn đoán nguyên nhân Celiac.",
        3: "Giardia gây tiêu chảy phân mỡ nhưng không gây viêm da dạng herpes và teo nhung mao tự miễn.",
        4: "Gastrinoma gây loét dạ dày tá tràng nặng, không gây viêm da mụn nước đối xứng."
      },
      objective:
        "Bệnh Celiac gây kém hấp thu sắt/mỡ và viêm da dạng herpes (mụn nước đối xứng cùi chỏ/gối); sàng lọc bằng Anti-tTG IgA và sinh thiết tá tràng teo nhung mao; điều trị triệt để bằng ăn kiêng Gluten suốt đời."
    },

    {
      spec: "Tiêu hóa",
      task: "Bước xử trí cấp cứu",
      short: "Viêm đường mật cấp do sỏi (Tam chứng Charcot / Ngũ chứng Reynolds)",
      vignette: [
        "Cụ bà 74 tuổi được đưa vào cấp cứu vì sốt cao rét run 39,5 °C, đau quặn dữ dội hạ sườn phải lan lên vai phải và vàng da vàng mắt đậm (<b>Tam chứng Charcot</b>).",
        "Khám: Bệnh nhân lơ mơ lẫn lộn, tụt huyết áp 80/50 mm Hg (<b>Ngũ chứng Reynolds = Tam chứng Charcot + Tụt HA + Lú lẫn thần kinh</b>). Ấn đau chói hạ sườn phải, gan to mấp mé bờ sườn.",
        "Xét nghiệm: Bạch cầu 24.000/mm³ (92% Neutrophil), Bilirubin toàn phần 8,5 mg/dL (trực tiếp 6,8 mg/dL), Phosphatase kiềm (ALP) và GGT tăng rất cao. Siêu âm ổ bụng: <b>Giãn toàn bộ đường mật trong và ngoài gan, ống mật chủ giãn 16 mm có hình ảnh sỏi kẹt đoạn thấp kèm bóng cản</b>."
      ],
      vitals: [
        ["Nhiệt độ", "39,5 °C"],
        ["Huyết áp", "80/50"],
        ["Mạch", "122 l/ph"],
        ["Nhịp thở", "24 l/ph"]
      ],
      stem: "Bước can thiệp cấp cứu tối khẩn cấp giúp giải phóng tắc nghẽn và cứu sống bệnh nhân là gì?",
      choices: [
        "Hồi sức dịch + Kháng sinh phổ rộng tĩnh mạch + Dẫn lưu đường mật cấp cứu qua Nội soi mật tụy ngược dòng (ERCP cắt cơ vòng lấy sỏi / đặt stent)",
        "Chỉ định phẫu thuật cắt túi mật nội soi ngay trong đêm",
        "Điều trị nội khoa bằng thuốc tan sỏi Ursodeoxycholic acid đường uống",
        "Chọc hút dẫn lưu ổ bụng đơn thuần",
        "Chỉ dùng kháng sinh đơn độc và theo dõi tại khoa phòng thường"
      ],
      answer: 0,
      why: [
        "Bệnh nhân bị <b>Viêm đường mật cấp nhiễm trùng tắc nghẽn nặng đe dọa tính mạng (Acute Suppurative Cholangitis)</b> với <b>Ngũ chứng Reynolds (Reynolds' Pentad: Đau hạ sườn phải + Sốt rét run + Vàng da + Tụt huyết áp + Rối loạn tri giác)</b> do sỏi kẹt ống mật chủ.",
        "Mủ và vi khuẩn tích tụ trong đường mật bị tắc dưới áp lực cao đẩy vi khuẩn và độc tố trực tiếp vào tuần hoàn gan gây sốc nhiễm khuẩn tối cấp.",
        "Xử trí cấp cứu sống còn gồm: (1) Hồi sức tuần hoàn bằng dịch và vận mạch; (2) Kháng sinh phổ rộng tĩnh mạch (như Piperacillin-Tazobactam hoặc Carbapenem); (3) <b>DẪN LƯU ĐƯỜNG MẬT CẤP CỨU KHẨN CẤP QUA NỘI SOI MẬT TỤY NGƯỢC DÒNG (ERCP)</b> để giải phóng áp lực đường mật. Nếu ERCP không thành công thì dẫn lưu đường mật qua da qua gan (PTBD)."
      ],
      wrongs: {
        1: "Cắt túi mật không giải quyết được sỏi kẹt ống mật chủ đang gây sốc nhiễm khuẩn đường mật.",
        2: "Thuốc tan sỏi tác dụng sau nhiều tháng, hoàn toàn vô giá trị trong cấp cứu sốc nhiễm khuẩn đường mật.",
        3: "Không có ổ tụ dịch màng bụng tự do.",
        4: "Kháng sinh đơn thuần không thể ngấm vào đường mật đang bị tắc nghẽn áp lực cao; không dẫn lưu thì bệnh nhân tử vong 100%."
      },
      objective:
        "Viêm đường mật cấp có ngũ chứng Reynolds (Charcot + Tụt HA + Lú lẫn) là cấp cứu tối khẩn; xử trí bắt buộc gồm Kháng sinh tĩnh mạch và Dẫn lưu đường mật cấp cứu qua ERCP để giải phóng áp lực."
    },

    {
      spec: "Tiêu hóa",
      task: "Bước chẩn đoán và xử trí",
      short: "Viêm túi mật cấp do sỏi",
      vignette: [
        "Nữ 46 tuổi thể trạng béo (BMI 31 kg/m²), sinh 3 con, đến khám vì đau quặn dữ dội hạ sườn phải liên tục hơn 8 giờ sau khi ăn tiệc nhiều dầu mỡ tối qua, đau lan lên xương bả vai phải kèm sốt 38,4 °C và buồn nôn.",
        "Khám: Bác sĩ đặt tay vào dưới bờ sườn phải và yêu cầu bệnh nhân hít sâu vào, bệnh nhân <b>đột ngột ngừng thở vào giữa chừng vì đau chói dữ dội (Dấu hiệu Murphy dương tính)</b>.",
        "Xét nghiệm: Bạch cầu 15.200/mm³, Bilirubin toàn phần 1,2 mg/dL (bình thường). Siêu âm bụng: <b>Sỏi kẹt ở cổ túi mật, thành túi mật dày 5 mm (tiêu chuẩn > 4 mm), có lớp dịch quanh túi mật và dấu hiệu Murphy siêu âm dương tính</b>. Ống mật chủ không giãn."
      ],
      vitals: [
        ["Nhiệt độ", "38,4 °C"],
        ["Huyết áp", "125/80"],
        ["Mạch", "92 l/ph"],
        ["Nhịp thở", "18 l/ph"]
      ],
      stem: "Chẩn đoán xác định và phương pháp điều trị triệt để tối ưu nhất là gì?",
      choices: [
        "Viêm túi mật cấp do sỏi (Acute Calculous Cholecystitis); điều trị bằng Kháng sinh tĩnh mạch kết hợp Phẫu thuật nội soi cắt túi mật sớm (Early Laparoscopic Cholecystectomy trong vòng 72 giờ)",
        "Cơn đau quặn mật đơn thuần; kê đơn thuốc giảm đau chống co thắt và cho về nhà",
        "Viêm đường mật cấp; chỉ định nội soi ERCP khẩn cấp",
        "Thủng tạng rỗng; mổ mở khâu lỗ thủng cấp cứu",
        "Viêm gan siêu vi cấp; điều trị bằng thuốc kháng virus"
      ],
      answer: 0,
      why: [
        "Bệnh nhân có đầy đủ tiêu chuẩn Tokyo Guidelines cho <b>Viêm túi mật cấp do sỏi (Acute Calculous Cholecystitis)</b>:",
        "- Lâm sàng: Đau hạ sườn phải kéo dài > 6h, sốt, <b>Dấu hiệu Murphy dương tính</b>.",
        "- Cận lâm sàng: Tăng bạch cầu, siêu âm thấy <b>thành túi mật dày > 4 mm, dịch quanh túi mật và sỏi kẹt cổ túi mật</b>.",
        "- Phân biệt: Cơn đau quặn mật đơn thuần thường tự hết sau 4–6 giờ và KHÔNG CÓ sốt, không tăng bạch cầu, không dày thành túi mật.",
        "Điều trị chuẩn tối ưu theo khuyến cáo: <b>Kháng sinh đường tĩnh mạch</b> (như Ceftriaxone + Metronidazole) phối hợp <b>Phẫu thuật nội soi cắt túi mật sớm (Laparoscopic Cholecystectomy) trong vòng 72 giờ đầu nhập viện</b> để giảm biến chứng hoại tử/thủng túi mật và giảm thời gian nằm viện."
      ],
      wrongs: {
        1: "Cơn đau quặn mật không có sốt, không tăng bạch cầu và không dày thành túi mật; bệnh nhân này đã viêm túi mật cấp bắt buộc nhập viện.",
        2: "Ống mật chủ không giãn và Bilirubin bình thường, không có viêm đường mật tắc nghẽn để làm ERCP.",
        3: "Không có liềm hơi dưới hoành trên X-quang và không có phản ứng thành bụng co cứng như gỗ.",
        4: "Viêm gan cấp không có dấu hiệu Murphy và không dày thành túi mật có sỏi kẹt."
      },
      objective:
        "Viêm túi mật cấp do sỏi đặc trưng bởi dấu hiệu Murphy dương tính và thành túi mật dày > 4 mm trên siêu âm; điều trị bằng kháng sinh tĩnh mạch và Phẫu thuật nội soi cắt túi mật sớm trong vòng 72 giờ."
    },

    {
      spec: "Tiêu hóa",
      task: "Bước chẩn đoán và điều trị",
      short: "Viêm gan tự miễn (Autoimmune Hepatitis)",
      vignette: [
        "Nữ 32 tuổi có tiền sử mắc Viêm tuyến giáp Hashimoto, đến khám vì mệt mỏi nhiều, chán ăn, đau mỏi khớp và vàng mắt nhẹ 2 tháng nay. Bệnh nhân không uống rượu, không dùng thuốc chuyển hóa qua gan.",
        "Khám: Củng mạc mắt vàng nhẹ, sao mạch rải rác ở ngực. Không có cổ trướng.",
        "Xét nghiệm máu: <b>AST 650 U/L, ALT 720 U/L</b>, Bilirubin toàn phần 3,8 mg/dL. HBsAg âm tính, Anti-HCV âm tính. <b>Protein toàn phần 8,8 g/dL với nồng độ Gamma-Globulin (IgG) huyết thanh tăng rất cao</b>.",
        "Xét nghiệm tự kháng thể: <b>Kháng thể kháng cơ trơn (Anti-Smooth Muscle Antibody - ASMA / Anti-Actin) dương tính mạnh hiệu giá 1:320</b> và Kháng thể kháng nhân (ANA) dương tính."
      ],
      vitals: [
        ["Nhiệt độ", "37,0 °C"],
        ["Huyết áp", "118/74"],
        ["Mạch", "76 l/ph"],
        ["Nhịp thở", "16 l/ph"]
      ],
      stem: "Phương pháp điều trị ức chế miễn dịch chuẩn hàng đầu cho bệnh nhân này là gì?",
      choices: [
        "Corticoid (Prednisone) đơn độc hoặc phối hợp với Azathioprine",
        "Thuốc kháng virus Tenofovir alafenamide đường uống",
        "Tiêm Interferon-alpha kéo dài 48 tuần",
        "Phẫu thuật cắt thùy gan trái",
        "Uống thuốc lợi tiểu Spironolactone liều cao"
      ],
      answer: 0,
      why: [
        "Bệnh cảnh điển hình của <b>Viêm gan tự miễn Típ 1 (Autoimmune Hepatitis - AIH Type 1)</b>: thường gặp ở phụ nữ trẻ có tiền sử bệnh tự miễn khác (Hashimoto), tăng men gan kiểu hoại tử tế bào gan (AST/ALT tăng cao), <b>tăng nồng độ IgG huyết thanh (Hypergammaglobulinemia)</b> và <b>Kháng thể kháng cơ trơn ASMA dương tính hiệu giá cao</b> (hoặc ANA dương tính).",
        "Sinh thiết gan (nếu làm) cho thấy hình ảnh <b>Viêm gan ranh giới (Interface hepatitis) với thâm nhiễm dày đặc tương bào (Plasma cells)</b>.",
        "Điều trị chuẩn theo guideline AASLD: <b>Corticoid toàn thân (Prednisone) khởi đầu liều cao để hạ men gan nhanh chóng, sau đó giảm liều dần và phối hợp duy trì với Azathioprine</b> để duy trì lui bệnh lâu dài và giảm tác dụng phụ của corticoid."
      ],
      wrongs: {
        1: "Các xét nghiệm viêm gan virus B và C đều âm tính, thuốc kháng virus hoàn toàn không có chỉ định.",
        2: "Interferon chống chỉ định trong viêm gan tự miễn vì kích hoạt hệ miễn dịch làm bùng phát suy gan tối cấp.",
        3: "Tổn thương viêm gan tự miễn là lan tỏa toàn bộ nhu mô gan, không phải tổn thương khu trú để cắt gan.",
        4: "Bệnh nhân không có phù hay cổ trướng để dùng lợi tiểu."
      },
      objective:
        "Viêm gan tự miễn Típ 1 (phụ nữ trẻ, tăng men gan, tăng IgG huyết thanh, kháng thể ASMA dương tính); điều trị ức chế miễn dịch đầu tay bằng Prednisone phối hợp Azathioprine."
    },

    {
      spec: "Tiêu hóa",
      task: "Bước chẩn đoán và điều trị",
      short: "Viêm đường mật tiên phát (Primary Biliary Cholangitis - PBC)",
      vignette: [
        "Nữ 50 tuổi đến khám vì <b>ngứa dữ dội toàn thân, đặc biệt ở lòng bàn tay và lòng bàn chân, ngứa nhiều về đêm</b> gây mất ngủ kéo dài 6 tháng nay, kèm mệt mỏi nhiều. Bệnh nhân không sốt, không đau bụng.",
        "Khám: Nhiều vết gãi trầy xước trên da, có các <b>u vàng quanh mi mắt (Xanthelasma)</b>. Củng mạc mắt vàng nhẹ. Gan to 2 cm dưới bờ sườn phải, mật độ chắc.",
        "Xét nghiệm máu: <b>Phosphatase kiềm (ALP) tăng rất cao 480 U/L</b> (bình thường < 120), <b>GGT tăng cao 350 U/L</b>, AST/ALT tăng nhẹ (65/70 U/L), Bilirubin toàn phần 2,4 mg/dL. Cholesterol toàn phần tăng cao 320 mg/dL. <b>Kháng thể kháng ty thể (Anti-Mitochondrial Antibody - AMA) dương tính mạnh hiệu giá 1:640</b>."
      ],
      vitals: [
        ["Nhiệt độ", "36,8 °C"],
        ["Huyết áp", "125/78"],
        ["Mạch", "72 l/ph"],
        ["Nhịp thở", "16 l/ph"]
      ],
      stem: "Chẩn đoán xác định và thuốc điều trị làm chậm tiến triển bệnh duy nhất được khuyến cáo đầu tay là gì?",
      choices: [
        "Viêm đường mật tiên phát (Primary Biliary Cholangitis - PBC); điều trị bằng Axit Ursodeoxycholic (UDCA - Ursodiol)",
        "Viêm xơ chai đường mật nguyên phát (PSC); điều trị bằng đặt stent đường mật",
        "Sỏi kẹt ống mật chủ; điều trị bằng mổ lấy sỏi",
        "U bóng Vater; điều trị bằng phẫu thuật Whipple",
        "Dị ứng thức ăn mạn tính; điều trị bằng thuốc kháng Histamin H1 đơn độc"
      ],
      answer: 0,
      why: [
        "Bệnh cảnh kinh điển của <b>Viêm đường mật tiên phát (Primary Biliary Cholangitis - PBC, trước đây gọi là Xơ gan ứ mật nguyên phát)</b>:",
        "- Dịch tễ: Phụ nữ trung niên (40–60 tuổi).",
        "- Triệu chứng khởi đầu: <b>Ngứa dữ dội (Pruritus)</b> và mệt mỏi, u vàng quanh mắt (Xanthelasma) do ứ đọng lipid.",
        "- Xét nghiệm: <b>Tăng men ứ mật nổi trội (ALP và GGT tăng rất cao)</b> và dấu ấn huyết thanh học vàng là <b>Kháng thể kháng ty thể (Anti-Mitochondrial Antibodies - AMA) dương tính > 95%</b>.",
        "- Bệnh học: Phản ứng tự miễn phá hủy các <b>ống dẫn mật nhỏ trong tiểu thùy gan (Intrahepatic interlobular bile ducts)</b>.",
        "Thuốc điều trị đầu tay duy nhất chứng minh làm chậm tiến triển xơ gan và kéo dài thời gian sống không cần ghép gan là <b>Axit Ursodeoxycholic (UDCA / Ursodiol liều 13–15 mg/kg/ngày)</b>."
      ],
      wrongs: {
        1: "PSC (Viêm xơ chai đường mật) thường gặp ở nam giới có kèm Viêm loét đại tràng (UC), AMA âm tính và tổn thương đường mật lớn dạng chuỗi hạt trên MRCP.",
        2: "Sỏi ống mật chủ gây đau quặn mật và sốt rét run, không gây ngứa mạn tính 6 tháng có AMA dương tính.",
        3: "U bóng Vater gây vàng da tắc mật tiến triển nhanh không đau kèm túi mật to (dấu hiệu Courvoisier).",
        4: "Kháng Histamin không chữa được ngứa do ứ đọng muối mật trong PBC (ngứa do PBC đáp ứng với Cholestyramine, Rifampin hoặc Naltrexone)."
      },
      objective:
        "Viêm đường mật tiên phát (PBC ở phụ nữ trung niên, ngứa dữ dội, tăng ALP, u vàng xanthelasma, kháng thể AMA dương tính); điều trị chuẩn bằng Axit Ursodeoxycholic (UDCA)."
    },

    {
      spec: "Tiêu hóa",
      task: "Bước chẩn đoán và nguy cơ ung thư",
      short: "Viêm xơ chai đường mật nguyên phát (PSC) và IBD",
      vignette: [
        "Nam 36 tuổi có tiền sử mắc <b>Viêm loét đại trực tràng chảy máu (Ulcerative Colitis) 8 năm nay</b>, đến tái khám định kỳ. Bệnh nhân cảm thấy mệt mỏi, ngứa nhẹ và sụt 2 kg.",
        "Xét nghiệm máu: <b>Phosphatase kiềm (ALP) tăng cao 380 U/L</b>, GGT 280 U/L, Bilirubin toàn phần 2,1 mg/dL, AST/ALT tăng nhẹ. Kháng thể kháng ty thể (AMA) âm tính, p-ANCA (perinuclear ANCA) dương tính.",
        "Chụp cộng hưởng từ mật tụy (MRCP): Hình ảnh <b>hẹp nhiều đoạn xen kẽ các đoạn giãn tạo hình ảnh chuỗi hạt (beaded appearance / multifocal strictures and dilatations) ở cả đường mật trong và ngoài gan</b>."
      ],
      vitals: [
        ["Nhiệt độ", "36,8 °C"],
        ["Huyết áp", "120/75"],
        ["Mạch", "74 l/ph"],
        ["Nhịp thở", "16 l/ph"]
      ],
      stem: "Chẩn đoán xác định và loại ung thư đường mật nào có nguy cơ tăng vọt ở bệnh nhân này cần được tầm soát định kỳ?",
      choices: [
        "Viêm xơ chai đường mật nguyên phát (Primary Sclerosing Cholangitis - PSC); nguy cơ cao mắc Ung thư đường mật (Cholangiocarcinoma) và Ung thư đại trực tràng",
        "Viêm đường mật tiên phát (PBC); nguy cơ ung thư biểu mô tế bào vảy",
        "U nang ống mật chủ; nguy cơ u lympho",
        "Bệnh sỏi đường mật trong gan; nguy cơ ung thư tụy",
        "Hẹp đường mật sau chấn thương"
      ],
      answer: 0,
      why: [
        "Bệnh nhân có <b>Viêm xơ chai đường mật nguyên phát (Primary Sclerosing Cholangitis - PSC)</b>:",
        "- Mối liên quan chặt chẽ: <b>Khoảng 70–80% bệnh nhân PSC có kèm theo Viêm loét đại tràng (Ulcerative Colitis)</b>.",
        "- Chẩn đoán hình ảnh: <b>MRCP (hoặc ERCP)</b> là tiêu chuẩn vàng, thấy hình ảnh xơ hóa hẹp và giãn nở ngắt quãng tạo <b>hình ảnh chuỗi hạt (Beaded appearance / 'Onion-skin' fibrosis trên sinh thiết)</b> ở cả cây đường mật trong và ngoài gan.",
        "- Biến chứng ác tính nghiêm trọng: Bệnh nhân PSC có nguy cơ cực kỳ cao tiến triển thành <b>Ung thư đường mật (Cholangiocarcinoma, nguy cơ 10–15% trọn đời)</b> và <b>Ung thư đại trực tràng</b> (bắt buộc nội soi đại tràng tầm soát hàng năm từ thời điểm chẩn đoán PSC)."
      ],
      wrongs: {
        1: "PBC gặp ở nữ, liên quan AMA dương tính và chỉ tổn thương ống mật nhỏ trong gan, không tạo hình ảnh chuỗi hạt trên MRCP.",
        2: "U nang ống mật chủ là dị tật bẩm sinh giãn thành nang, không phải hình ảnh chuỗi hạt đa ổ.",
        3: "Sỏi đường mật trong gan không liên quan đến viêm loét đại tràng UC.",
        4: "Bệnh nhân không có tiền sử chấn thương hay phẫu thuật đường mật."
      },
      objective:
        "Viêm xơ chai đường mật nguyên phát (PSC) liên quan chặt chẽ với Viêm loét đại tràng (UC), có hình ảnh chuỗi hạt trên MRCP; biến chứng nguy hiểm nhất là Ung thư đường mật (Cholangiocarcinoma) và Ung thư đại trực tràng."
    },

    {
      spec: "Tiêu hóa",
      task: "Bước chẩn đoán và điều trị",
      short: "Bệnh ứ sắt mô di truyền (Hereditary Hemochromatosis)",
      vignette: [
        "Nam 52 tuổi đến khám vì mệt mỏi mạn tính, đau các khớp bàn ngón tay (MCP 2, 3), giảm ham muốn tình dục và da sạm màu đồng xỉn màu dù không đi nắng (<b>tam chứng 'Đái tháo đường màu đồng' - Bronze diabetes</b>).",
        "Khám: Da sạm xám đồng, gan to chắc 3 cm dưới bờ sườn, teo tinh hoàn hai bên. Xét nghiệm đường huyết lúc đói 185 mg/dL (ĐTĐ mới phát hiện).",
        "Xét nghiệm sắt: <b>Ferritin huyết thanh tăng rất cao 1.850 ng/mL</b> (bình thường < 300), <b>Độ bão hòa Transferrin (Transferrin saturation) tăng vọt 78%</b> (tiêu chuẩn > 45%). Men gan AST/ALT tăng nhẹ."
      ],
      vitals: [
        ["Nhiệt độ", "36,8 °C"],
        ["Huyết áp", "130/80"],
        ["Mạch", "76 l/ph"],
        ["Nhịp thở", "16 l/ph"]
      ],
      stem: "Đột biến gen nguyên nhân và phương pháp điều trị thải sắt đầu tay hiệu quả nhất là gì?",
      choices: [
        "Đột biến đồng hợp tử gen HFE (C282Y/C282Y); điều trị đầu tay bằng Trích máu định kỳ (Therapeutic Phlebotomy)",
        "Đột biến gen ATP7B; điều trị bằng thuốc gắp đồng Penicillamine",
        "Đột biến gen CFTR; điều trị bằng bù enzym tụy",
        "Đột biến gen Alpha-1 Antitrypsin; điều trị bằng truyền enzym thay thế",
        "Thiếu hụt men G6PD; điều trị bằng tránh các thuốc oxy hóa"
      ],
      answer: 0,
      why: [
        "Bệnh cảnh kinh điển của <b>Bệnh ứ sắt mô di truyền (Hereditary Hemochromatosis)</b> do đột biến gen <b>HFE (thường gặp nhất là đột biến đồng hợp tử C282Y/C282Y)</b> làm giảm sản xuất Hepcidin tại gan, dẫn đến <b>tăng hấp thu sắt không kiểm soát tại ruột non</b>.",
        "Sắt lắng đọng gây phá hủy các cơ quan:",
        "- Gan -> Xơ gan và nguy cơ cao ung thư gan HCC.",
        "- Tụy -> Đái tháo đường.",
        "- Da -> Tăng sắc tố da màu đồng (Bronze diabetes).",
        "- Khớp -> Viêm khớp giả gút (lắng đọng Canxi pyrophosphate tại khớp MCP 2, 3).",
        "- Tim -> Bệnh cơ tim giãn/hạn chế.",
        "- Tuyến yên -> Suy sinh dục thứ phát (teo tinh hoàn, giảm ham muốn).",
        "Sàng lọc: <b>Độ bão hòa Transferrin > 45%</b> và Ferritin > 1.000 ng/mL. Khẳng định bằng xét nghiệm gen HFE.",
        "Điều trị đầu tay hiệu quả nhất: <b>Trích máu tĩnh mạch định kỳ (Therapeutic Phlebotomy)</b> rút 500 mL máu mỗi 1–2 tuần cho đến khi Ferritin đạt 50–100 ng/mL."
      ],
      wrongs: {
        1: "Đột biến ATP7B gây bệnh Wilson (ứ đồng), không phải ứ sắt.",
        2: "CFTR gây bệnh Xơ nang (Cystic Fibrosis).",
        3: "Alpha-1 Antitrypsin gây khí phế thũng đáy phổi và xơ gan ở người trẻ.",
        4: "G6PD gây thiếu máu tán huyết sau ăn đậu tằm/thuốc oxy hóa."
      },
      objective:
        "Bệnh ứ sắt mô (Hemochromatosis do đột biến gen HFE) gây xơ gan, đái tháo đường màu đồng, viêm khớp và teo tinh hoàn; chẩn đoán bằng độ bão hòa Transferrin > 45% và điều trị đầu tay bằng Trích máu tĩnh mạch (Phlebotomy)."
    },

    {
      spec: "Tiêu hóa",
      task: "Bước chẩn đoán và điều trị",
      short: "Bệnh Wilson (Rối loạn chuyển hóa đồng di truyền)",
      vignette: [
        "Nam 18 tuổi được gia đình đưa đến khám vì thay đổi tính tình, kết quả học tập sa sút, thường xuyên cáu gắt trầm cảm và xuất hiện triệu chứng run tay khi vận động, nói ngọng và đi lại cứng nhắc giống hội chứng Parkinson.",
        "Khám mắt bằng đèn khe (Slit-lamp examination): Phát hiện <b>vòng sắc tố màu nâu vàng ở rìa màng Descemet của giác mạc cả hai mắt (Vòng Kayser-Fleischer)</b>. Khám bụng thấy lách to mấp mé bờ sườn.",
        "Xét nghiệm: AST 115 U/L, ALT 98 U/L, <b>Nồng độ Ceruloplasmin trong huyết thanh giảm thấp 8 mg/dL</b> (bình thường 20–40), <b>Đồng bài tiết trong nước tiểu 24 giờ tăng rất cao 180 mcg/24h</b> (bình thường < 40)."
      ],
      vitals: [
        ["Nhiệt độ", "36,8 °C"],
        ["Huyết áp", "115/70"],
        ["Mạch", "76 l/ph"],
        ["Nhịp thở", "16 l/ph"]
      ],
      stem: "Cơ chế khiếm khuyết phân tử và thuốc gắp đồng (Chelating agent) điều trị đầu tay là gì?",
      choices: [
        "Đột biến gen ATP7B trên nhiễm sắc thể 13 làm suy giảm bài tiết đồng qua mật; điều trị bằng Thuốc gắp đồng (D-Penicillamine hoặc Trientine) kết hợp Kẽm",
        "Đột biến gen HFE; điều trị bằng trích máu tĩnh mạch",
        "Thiếu hụt enzym Galactose-1-phosphate uridyltransferase; kiêng sữa hoàn toàn",
        "Đột biến gen FBN1 gây hội chứng Marfan; dùng thuốc chẹn beta",
        "Đột biến thụ thể LDL; dùng Statin liều cao"
      ],
      answer: 0,
      why: [
        "Bệnh cảnh kinh điển của <b>Bệnh Wilson (Thoái hóa gan đậu ngựa - Hepatolenticular degeneration)</b> di truyền lặn trên NST thường do đột biến gen <b>ATP7B</b> (mã hóa bơm ATPase vận chuyển đồng qua màng tiểu quản mật).",
        "Khiếm khuyết làm <b>đồng không thể bài tiết vào mật và không gắn được vào apoceruloplasmin</b>, dẫn đến ứ đọng đồng tự do gây độc tại các cơ quan:",
        "1. <b>Não (Hạch nền / Thể đậu)</b>: Rối loạn vận động (run tay kiểu đập cánh 'wing-beating tremor', cứng đờ, Parkinsonism, thất điều) và rối loạn tâm thần hành vi.",
        "2. <b>Mắt</b>: <b>Vòng Kayser-Fleischer</b> màu nâu vàng quanh rìa giác mạc.",
        "3. <b>Gan</b>: Viêm gan mạn, xơ gan hoặc suy gan cấp tán huyết Coombs âm tính.",
        "Bộ ba xét nghiệm chẩn đoán: <b>Ceruloplasmin máu giảm + Đồng niệu 24h tăng + Vòng Kayser-Fleischer</b>.",
        "Điều trị thải đồng: <b>Thuốc gắp đồng (Chelating agents: D-Penicillamine hoặc Trientine)</b> giúp tăng thải đồng qua thận, sau đó duy trì bằng <b>Kẽm (Zinc acetate)</b> để ức chế hấp thu đồng tại ruột."
      ],
      wrongs: {
        1: "Gen HFE gây bệnh ứ sắt Hemochromatosis, không liên quan đến đồng.",
        2: "Galactosemia ở trẻ sơ sinh gây đục thủy tinh thể và suy gan sau bú sữa.",
        3: "Hội chứng Marfan gây phình tách động mạch chủ và trật thủy tinh thể lên trên.",
        4: "Tăng cholesterol gia đình gây u vàng gân gót và nhồi máu cơ tim sớm."
      },
      objective:
        "Bệnh Wilson (đột biến ATP7B ứ đọng đồng ở gan và não) đặc trưng bởi vòng Kayser-Fleischer, Ceruloplasmin máu giảm, đồng niệu tăng và triệu chứng ngoại tháp; điều trị bằng thuốc gắp đồng Penicillamine/Trientine và Kẽm."
    },

    {
      spec: "Tiêu hóa",
      task: "Bước chẩn đoán tiếp theo",
      short: "Thiếu máu cục bộ mạc treo cấp tính (Acute Mesenteric Ischemia)",
      vignette: [
        "Nam 72 tuổi có tiền sử rung nhĩ không dùng thuốc chống đông đều đặn, đột ngột xuất hiện <b>cơn đau bụng dữ dội quanh rốn khởi phát dữ dội 2 giờ trước</b>, đau liên tục kèm nôn mửa và đi ngoài phân lỏng 1 lần.",
        "Khám lâm sàng: Bệnh nhân lăn lộn vì đau đớn dữ dội, nhưng khi <b>khám bụng thấy bụng mềm, chỉ ấn đau tức nhẹ quanh rốn, hoàn toàn KHÔNG CÓ phản ứng thành bụng hay cảm ứng phúc mạc (Đau bụng dữ dội KHÔNG TƯƠNG XỨNG với dấu hiệu thực thể nghèo nàn)</b>.",
        "Xét nghiệm máu khẩn: Bạch cầu 19.800/mm³, <b>Lactate máu tăng cao 4,2 mmol/L</b>, Toan chuyển hóa tăng khoảng trống Anion."
      ],
      vitals: [
        ["Nhiệt độ", "37,2 °C"],
        ["Huyết áp", "135/85"],
        ["Mạch", "116 l/ph (rung nhĩ)"],
        ["Nhịp thở", "22 l/ph"]
      ],
      stem: "Phương tiện chẩn đoán hình ảnh tiêu chuẩn vàng lựa chọn hàng đầu khẩn cấp là gì?",
      choices: [
        "Chụp cắt lớp vi tính mạch máu ổ bụng có tiêm thuốc cản quang (CT Angiography - CTA mạc treo)",
        "Chụp X-quang bụng không chuẩn bị tư thế đứng",
        "Nội soi dạ dày tá tràng ống mềm tại giường",
        "Siêu âm ổ bụng tổng quát đơn thuần",
        "Chụp lưu thông ruột non bằng thuốc cản quang Barium đường uống"
      ],
      answer: 0,
      why: [
        "Bệnh cảnh kinh điển của <b>Thiếu máu cục bộ mạc treo cấp tính (Acute Mesenteric Ischemia - AMI)</b> do <b>cục huyết khối từ tâm nhĩ rung bắn đi gây tắc cấp tính Động mạch mạc treo tràng trên (SMA embolism, chiếm 50% các ca)</b>.",
        "Dấu hiệu lâm sàng kinh điển có giá trị gợi ý chẩn đoán cao nhất: <b>Đau bụng dữ dội khởi phát đột ngột KHÔNG TƯƠNG XỨNG với dấu hiệu khám thực thể bụng nghèo nàn (Pain out of proportion to physical exam findings)</b>.",
        "Khi xuất hiện tăng Lactate máu và toan chuyển hóa, đây là dấu hiệu ruột đã bắt đầu bị hoại tử thiếu máu.",
        "Phương tiện chẩn đoán xác định nhanh và chính xác nhất: <b>Chụp cắt lớp vi tính mạch máu (CTA mạc treo)</b> cho thấy trực tiếp vị trí tắc khuyết thuốc của SMA và dấu hiệu thiếu máu thành ruột (phù nề thành ruột, mất ngấm thuốc, khí trong thành ruột).",
        "Xử trí: Kháng đông Heparin tĩnh mạch + Tái thông mạch khẩn cấp (Phẫu thuật mở lấy huyết khối / Can thiệp nội mạch) kết hợp cắt bỏ đoạn ruột hoại tử nếu có."
      ],
      wrongs: {
        1: "X-quang bụng thường bình thường ở giai đoạn sớm và chỉ thấy liềm hơi khi ruột đã hoại tử thủng hoàn toàn.",
        2: "Nội soi dạ dày không quan sát được ruột non và làm chậm trễ thời gian vàng tái tưới máu ruột.",
        3: "Siêu âm bụng bị cản trở bởi hơi ruột chướng và có độ nhạy rất thấp với tắc SMA.",
        4: "Uống thuốc cản quang Barium chống chỉ định tuyệt đối vì gây viêm phúc mạc nặng nếu thủng ruột."
      },
      objective:
        "Thiếu máu mạc treo cấp do tắc SMA (ở bệnh nhân rung nhĩ) đặc trưng bởi đau bụng dữ dội không tương xứng với khám bụng và tăng Lactate máu; chẩn đoán khẩn cấp bằng Chụp CTA mạch máu mạc treo."
    },

    {
      spec: "Tiêu hóa",
      task: "Bước chẩn đoán xác định",
      short: "Hội chứng Zollinger-Ellison (Gastrinoma)",
      vignette: [
        "Nam 46 tuổi đến khám vì đau rát thượng vị tái diễn liên tục và tiêu chảy phân mỡ 6 tháng nay, không đáp ứng với thuốc ức chế bơm proton PPI liều thông thường. Bệnh nhân có tiền sử tăng canxi máu do u tuyến cận giáp (nghi ngờ hội chứng MEN-1).",
        "Nội soi dạ dày tá tràng: Niêm mạc dạ dày phì đại các nếp niêm mạc, phát hiện <b>nhiều ổ loét sâu lớn ở vị trí bất thường: đoạn 2, đoạn 3 tá tràng và hỗng tràng</b>.",
        "Xét nghiệm: <b>Nồng độ Gastrin huyết thanh lúc đói tăng rất cao 1.650 pg/mL</b> (bình thường < 100 pg/mL) và pH dịch vị < 2,0."
      ],
      vitals: [
        ["Nhiệt độ", "36,8 °C"],
        ["Huyết áp", "125/78"],
        ["Mạch", "76 l/ph"],
        ["Nhịp thở", "16 l/ph"]
      ],
      stem: "Nghiệm pháp kích thích nào giúp chẩn đoán khẳng định Gastrinoma khi nồng độ Gastrin tăng ở mức ranh giới?",
      choices: [
        "Nghiệm pháp kích thích bằng Secretin (Secretin Stimulation Test làm nồng độ Gastrin tăng vọt nghịch lý > 120 pg/mL)",
        "Nghiệm pháp nhịn nước kéo dài 24 giờ",
        "Nghiệm pháp kích thích bằng Glucagon",
        "Nghiệm pháp dung nạp Glucose đường uống",
        "Nghiệm pháp ức chế Dexamethasone liều thấp"
      ],
      answer: 0,
      why: [
        "Bệnh nhân mắc <b>Hội chứng Zollinger-Ellison (ZES)</b> do <b>khối u thần kinh nội tiết tiết Gastrin (Gastrinoma)</b> thường nằm trong tam giác Gastrinoma (tá tràng, tụy, rốn gan), có thể nằm trong bệnh cảnh <b>Đa u tuyến nội tiết Típ 1 (MEN-1)</b>.",
        "Gastrin tăng cao kích thích tế bào thành dạ dày tăng tiết acid chlohydric tối đa, gây ra: (1) <b>Loét dạ dày tá tràng nhiều ổ ở vị trí xa bất thường (đoạn xa tá tràng, hỗng tràng) kháng trị với PPI</b>; (2) <b>Tiêu chảy phân mỡ</b> do lượng acid khổng lồ tràn xuống ruột non làm bất hoạt enzym tụy Lipase.",
        "Chẩn đoán: Nồng độ Gastrin huyết thanh lúc đói > 1.000 pg/mL kèm pH dịch vị < 2,0 khẳng định ZES. Nếu Gastrin ở mức 100–1.000, tiến hành <b>Nghiệm pháp kích thích bằng Secretin (Secretin Stimulation Test)</b>:",
        "- Bình thường Secretin ức chế tế bào G của dạ dày làm giảm tiết Gastrin.",
        "- Trong Gastrinoma, tiêm Secretin làm <b>nồng độ Gastrin tăng vọt nghịch lý (Paradoxical rise > 120 pg/mL)</b>.",
        "Định vị khối u bằng <b>Xạ hình thụ thể Somatostatin (OctreoScan / 68Ga-DOTATATE PET-CT)</b>."
      ],
      wrongs: {
        1: "Nghiệm pháp nhịn nước dùng chẩn đoán đái tháo nhạt, không liên quan đến Gastrinoma.",
        2: "Glucagon không phải nghiệm pháp chuẩn chẩn đoán Gastrinoma.",
        3: "Dung nạp glucose dùng chẩn đoán đái tháo đường hoặc bệnh to đầu chi Acromegaly.",
        4: "Nghiệm pháp Dexamethasone dùng chẩn đoán hội chứng Cushing."
      },
      objective:
        "Hội chứng Zollinger-Ellison (Gastrinoma) gây loét đa ổ kháng trị ở đoạn xa tá tràng và tiêu chảy mỡ; chẩn đoán bằng nồng độ Gastrin lúc đói > 1000 pg/mL và nghiệm pháp tiêm Secretin làm Gastrin tăng vọt nghịch lý."
    },

    {
      spec: "Tiêu hóa",
      task: "Bước chẩn đoán và điều trị",
      short: "Co thắt tâm vị (Achalasia)",
      vignette: [
        "Nữ 34 tuổi đến khám vì <b>nuốt nghẹn tăng dần kéo dài 1 năm nay đối với CẢ THỨC ĂN ĐẶC LẪN THỨC ĂN LỎNG ngay từ đầu</b>. Bệnh nhân thường xuyên bị trớ thức ăn chưa tiêu hóa ra gối khi nằm ngủ ban đêm, có mùi hôi miệng và sút 5 kg.",
        "Chụp X-quang thực quản có uống thuốc cản quang Barium: <b>Thực quản giãn to ứ đọng thuốc bên trên, đoạn nối thực quản dạ dày thon nhỏ dần tạo hình ảnh 'Mỏ chim' (Bird's beak appearance)</b>.",
        "Đo áp lực thực quản độ phân giải cao (High-Resolution Manometry - HRM): Mất hoàn toàn nhu động thân thực quản ở thì nuốt và <b>Cơ thắt thực quản dưới (LES) không giãn ra hoàn toàn khi nuốt</b> (áp lực nghỉ LES tăng cao và áp lực tích hợp IRP tăng > 15 mm Hg)."
      ],
      vitals: [
        ["Nhiệt độ", "36,8 °C"],
        ["Huyết áp", "115/70"],
        ["Mạch", "72 l/ph"],
        ["Nhịp thở", "16 l/ph"]
      ],
      stem: "Cơ chế thoái hóa thần kinh giải phẫu bệnh và các phương pháp điều trị triệt để cho bệnh cảnh này là gì?",
      choices: [
        "Thoái hóa và mất các tế bào hạch thần kinh phó giao cảm ức chế (tiết NO và VIP) trong đám rối Auerbach (Myenteric plexus); điều trị triệt để bằng Phẫu thuật cắt cơ thắt dưới thực quản (Heller Myotomy / POEM) hoặc Nong bóng khí nén cơ thắt (Pneumatic Dilation)",
        "Tăng sinh quá mức tế bào vảy niêm mạc thực quản; điều trị bằng hóa xạ trị",
        "Co thắt thực quản lan tỏa; điều trị bằng thuốc chống co thắt",
        "Vòng thắt Schatzki; điều trị bằng nong hẹp cơ học đơn thuần",
        "Rối loạn thần kinh chức năng nuốt khó tâm căn; điều trị bằng thuốc an thần"
      ],
      answer: 0,
      why: [
        "Bệnh cảnh kinh điển của <b>Co thắt tâm vị (Achalasia)</b>:",
        "- Triệu chứng lâm sàng cốt lõi: <b>Nuốt nghẹn đồng thời CẢ THỨC ĂN ĐẶC VÀ LỎNG ngay từ đầu (Dysphagia to both solids and liquids)</b> kèm trớ thức ăn chưa tiêu (phân biệt với Ung thư thực quản nuốt nghẹn thức ăn đặc trước, lỏng sau).",
        "- Hình ảnh X-quang Barium: <b>Hình ảnh mỏ chim (Bird's beak appearance)</b>.",
        "- Tiêu chuẩn vàng: <b>Đo áp lực thực quản (Manometry)</b> thấy mất nhu động thân thực quản và cơ thắt dưới thực quản (LES) không giãn khi nuốt.",
        "- Bệnh học: <b>Mất các tế bào thần kinh ức chế (tiết Nitric Oxide và VIP) trong đám rối thần kinh cơ ruột Auerbach (Myenteric plexus)</b>.",
        "- Điều trị triệt để: (1) <b>Cắt cơ tâm vị qua nội soi miệng (POEM)</b> hoặc <b>Phẫu thuật nội soi cắt cơ Heller (Laparoscopic Heller Myotomy)</b>; (2) <b>Nong tâm vị bằng bóng khí nén (Pneumatic balloon dilation)</b>; (3) Tiêm độc tố Botulinum (Botox) vào LES cho người già yếu không thể phẫu thuật."
      ],
      wrongs: {
        1: "Achalasia là bệnh lý thần kinh cơ trơn, không phải ung thư biểu mô vảy (mặc dù ứ đọng mạn tính làm tăng nhẹ nguy cơ ung thư sau nhiều năm).",
        2: "Co thắt thực quản lan tỏa (DES) gây đau ngực dữ dội kiểu co thắt và hình ảnh thực quản hình xoắn nút chai (corkscrew esophagus), cơ LES vẫn giãn bình thường.",
        3: "Vòng Schatzki chỉ gây nuốt nghẹn gián đoạn với thức ăn đặc (miếng thịt to), không nghẹn thức ăn lỏng.",
        4: "Nuốt khó có tổn thương hình thái mỏ chim rõ rệt, không phải bệnh tâm căn."
      },
      objective:
        "Co thắt tâm vị (Achalasia) do mất tế bào hạch đám rối Auerbach gây nuốt nghẹn cả đặc và lỏng kèm hình ảnh mỏ chim trên X-quang; điều trị triệt để bằng Phẫu thuật cắt cơ Heller / POEM hoặc Nong bóng khí nén."
    },

    {
      spec: "Tiêu hóa",
      task: "Bước chẩn đoán và tiên lượng",
      short: "Hội chứng Mallory-Weiss sau nôn ói dữ dội",
      vignette: [
        "Nam 38 tuổi sau khi uống rượu say đã nôn khan và nôn thốc tháo thức ăn liên tục 5–6 lần. Ở lần nôn thứ 7, bệnh nhân đột ngột <b>nôn ra máu đỏ tươi khoảng 100 mL lẫn dịch vị</b>.",
        "Khám: Bệnh nhân tỉnh táo, tiếp xúc tốt, huyết áp 120/75 mm Hg, mạch 80 l/phút. Bụng mềm, ấn đau tức nhẹ vùng thượng vị, không có phản ứng thành bụng.",
        "Nội soi dạ dày cấp cứu phát hiện: <b>Vết rách rách niêm mạc nông nằm dọc theo chiều dài (longitudinal mucosal tear) ngay tại vị trí tiếp giáp tâm vị - thực quản (Gastroesophageal junction)</b>, hiện tại mép rách đã tạo cục máu đông đáy phẳng sạch, không còn chảy máu (Forrest III)."
      ],
      vitals: [
        ["Nhiệt độ", "36,8 °C"],
        ["Huyết áp", "120/75"],
        ["Mạch", "80 l/ph"],
        ["Nhịp thở", "16 l/ph"]
      ],
      stem: "Cơ chế bệnh sinh và thái độ xử trí tiếp theo thích hợp nhất cho bệnh nhân này là gì?",
      choices: [
        "Rách nông lớp niêm mạc/dưới niêm mạc do tăng áp lực đột ngột trong buồng dạ dày khi nôn ói (Hội chứng Mallory-Weiss); đại đa số tự cầm máu ổn định chỉ cần theo dõi và dùng PPI đường uống",
        "Vỡ toàn bộ các lớp thành thực quản (Hội chứng Boerhaave); cần phẫu thuật mở ngực khâu lỗ vỡ cấp cứu",
        "Vỡ giãn tĩnh mạch thực quản do xơ gan; cần thắt vòng cao su ngay",
        "Ung thư biểu mô thực quản xuất huyết; cần cắt thực quản",
        "Thủng ổ loét dạ dày; cần phẫu thuật nội soi khâu lỗ thủng"
      ],
      answer: 0,
      why: [
        "Bệnh cảnh kinh điển của <b>Hội chứng Mallory-Weiss (Mallory-Weiss Syndrome)</b>: nôn ói dữ dội nhiều lần dẫn đến <b>rách nông lớp niêm mạc và dưới niêm mạc dọc theo vùng nối thực quản - dạ dày</b> do tăng áp lực buồng dạ dày đột ngột.",
        "Đặc điểm phân biệt sống còn với <b>Hội chứng Boerhaave</b>:",
        "- <b>Mallory-Weiss</b>: <b>RÁCH NÔNG NIÊM MẠC</b> (KHÔNG xuyên thủng toàn bộ thành), chỉ gây nôn ra máu lượng ít-vừa, huyết động ổn định, không tràn khí màng phổi/dưới da.",
        "- <b>Boerhaave</b>: <b>VỠ XUYÊN THÀNH TOÀN BỘ CÁC LỚP THỰC QUẢN</b>, gây đau ngực dữ dội, tràn khí dưới da, viêm trung thất nhiễm trùng sốc đe dọa tử vong.",
        "Tiên lượng và xử trí Mallory-Weiss: <b>Khoảng 90% các trường hợp tự cầm máu ổn định</b> mà không cần can thiệp nội soi. Chỉ cần điều trị nội khoa hỗ trợ bằng <b>thuốc ức chế bơm proton (PPI)</b> và chống nôn. Can thiệp nội soi (kẹp clip) chỉ đặt ra khi đang có máu chảy hoạt động."
      ],
      wrongs: {
        1: "Boerhaave là vỡ toàn bộ thành thực quản gây đau ngực dữ dội, sốt, tràn khí dưới da vùng cổ và sốc nhiễm trùng; ở đây chỉ rách nông niêm mạc.",
        2: "Không có tiền sử xơ gan, lách to hay búi giãn tĩnh mạch trên nội soi.",
        3: "Vết rách thẳng nông đáy sạch sau nôn ói, không phải khối u ác tính sùi loét.",
        4: "Không có liềm hơi dưới hoành và bụng mềm hoàn toàn."
      },
      objective:
        "Hội chứng Mallory-Weiss là rách nông niêm mạc chỗ nối dạ dày-thực quản sau nôn ói dữ dội (thường tự cầm máu, điều trị bảo tồn bằng PPI); phân biệt với Hội chứng Boerhaave là vỡ toàn bộ thành thực quản đe dọa tử vong."
    },

    {
      spec: "Tiêu hóa",
      task: "Bước chẩn đoán xác định",
      short: "Hội chứng Boerhaave (Vỡ thực quản tự phát sau nôn)",
      vignette: [
        "Nam 50 tuổi sau bữa tiệc uống nhiều rượu và nôn mửa dữ dội, đột ngột xuất hiện <b>cơn đau dữ dội xé sau xương ức lan ra sau lưng và khó thở tăng nhanh</b>.",
        "Khám: Bệnh nhân vã mồ hôi, da tái, sốt 38,6 °C, nhịp thở 28 l/phút, huyết áp 90/60 mm Hg. Sờ vùng nền cổ và hố thượng đòn phát hiện <b>tiếng lạo xạo lép bép dưới da (tràn khí dưới da - Subcutaneous emphysema)</b>. Nghe tim có tiếng lạo xạo giòn đồng thì với nhịp tim (dấu hiệu Hamman). Phổi trái giảm thông khí.",
        "X-quang ngực: <b>Tràn khí trung thất (Pneumomediastinum) và tràn dịch màng phổi bên trái</b>. Chọc hút dịch màng phổi trái: Dịch màu đục acid có <b>nồng độ Amylase tăng cực cao</b>."
      ],
      vitals: [
        ["Nhiệt độ", "38,6 °C"],
        ["Huyết áp", "90/60"],
        ["Mạch", "120 l/ph"],
        ["Nhịp thở", "28 l/ph"]
      ],
      stem: "Phương tiện chẩn đoán hình ảnh thuốc cản quang tiêu chuẩn vàng lựa chọn đầu tay để xác định vị trí rò rỉ là gì?",
      choices: [
        "Chụp thực quản có uống thuốc cản quang tan trong nước (Gastrografin / Water-soluble contrast esophagram)",
        "Chụp thực quản bằng thuốc cản quang Barium sulfate nồng độ cao",
        "Nội soi thực quản dạ dày bằng ống soi cứng",
        "Chụp X-quang khung đại tràng cản quang",
        "Nội soi ổ bụng thăm dò"
      ],
      answer: 0,
      why: [
        "Bệnh cảnh kinh điển của <b>Hội chứng Boerhaave (Vỡ thực quản tự phát / Spontaneous Esophageal Rupture)</b> với <b>Tam chứng Mackler kinh điển: Nôn mửa dữ dội + Đau ngực dữ dội + Tràn khí dưới da vùng cổ (Subcutaneous emphysema)</b>.",
        "Thực quản bị vỡ toàn bộ các lớp (thường ở 1/3 dưới thành bên trái thực quản), làm dịch vị dạ dày, thức ăn và vi khuẩn tràn vào trung thất và màng phổi trái gây <b>Viêm trung thất hoại tử cấp (Mediastinitis)</b> (dịch màng phổi có nồng độ <b>Amylase nước bọt tăng cực cao và pH < 6,0</b>).",
        "Phương tiện chẩn đoán xác định: <b>Chụp thực quản bằng thuốc cản quang tan trong nước (Gastrografin / Meglumine diatrizoate)</b> cho thấy trực tiếp dòng thuốc cản quang rò rỉ ra ngoài thực quản.",
        "<b>CHỐNG CHỈ ĐỊNH DÙNG THUỐC CẢN QUANG BARIUM</b>: Barium nếu rò vào trung thất sẽ gây phản ứng viêm hạt xơ hóa trung thất vĩnh viễn (Severe mediastinal granulomatous reaction).",
        "Xử trí: Kháng sinh phổ rộng tĩnh mạch + Nhịn ăn hoàn toàn + <b>Phẫu thuật mở ngực khâu lỗ vỡ thực quản và dẫn lưu trung thất cấp cứu</b> (can thiệp trong vòng 24 giờ đầu có tỉ lệ sống còn >75%)."
      ],
      wrongs: {
        1: "Barium cản quang chống chỉ định tuyệt đối vì gây viêm trung thất dạng u hạt xơ hóa vĩnh viễn cực kỳ nguy hiểm.",
        2: "Nội soi ống cứng làm tăng áp lực trong lòng thực quản và có nguy cơ làm rách toác rộng hơn lỗ vỡ.",
        3: "Vỡ thực quản ở lồng ngực, không liên quan đến đại tràng.",
        4: "Tổn thương nằm ở khoang màng phổi trung thất bên trái, cần mở ngực chứ không phải nội soi ổ bụng đơn thuần."
      },
      objective:
        "Hội chứng Boerhaave (vỡ xuyên thành thực quản sau nôn ói) gây tràn khí trung thất/dưới da và viêm trung thất có dịch màng phổi Amylase cao; chẩn đoán bằng chụp thực quản cản quang tan trong nước (Gastrografin) và phẫu thuật cấp cứu."
    },

    {
      spec: "Tiêu hóa",
      task: "Bước chẩn đoán và điều trị",
      short: "Viêm đại tràng thiếu máu cục bộ (Ischemic Colitis)",
      vignette: [
        "Cụ bà 76 tuổi có tiền sử suy tim và xơ vữa động mạch toàn thân, vừa trải qua một đợt tụt huyết áp thoáng qua sau khi dùng thuốc lợi tiểu liều cao. Mười hai giờ sau, cụ xuất hiện <b>đau quặn dữ dội ở hố chậu trái kèm buồn đi ngoài liên tục và đi ra phân lỏng lẫn máu đỏ tươi</b>.",
        "Khám: Bụng mềm, ấn đau tức nhiều ở vùng hố chậu trái và dọc đại tràng xuống, không có đề kháng thành bụng. Thăm trực tràng có máu đỏ tươi theo găng.",
        "Nội soi đại trực tràng sigma ống mềm (không bơm quá nhiều hơi): <b>Niêm mạc đại tràng góc lách và đại tràng sigma phù nề tím tái, có các mảng xuất huyết dưới niêm mạc và vết loét nông dọc theo bờ mạc treo (dấu hiệu ranh giới thiếu máu)</b>. Đoạn trực tràng hoàn toàn hồng hào bình thường."
      ],
      vitals: [
        ["Nhiệt độ", "37,5 °C"],
        ["Huyết áp", "125/75"],
        ["Mạch", "84 l/ph"],
        ["Nhịp thở", "18 l/ph"]
      ],
      stem: "Hai vùng giải phẫu đại tràng 'ranh giới cấp máu' (Watershed areas) nào dễ bị tổn thương thiếu máu cục bộ nhất trong cơ chế này?",
      choices: [
        "Góc lách đại tràng (Điểm Griffiths - ranh giới giữa SMA và IMA) và Chỗ nối đại tràng sigma - trực tràng (Điểm Sudeck - ranh giới giữa IMA và động mạch chậu trong)",
        "Đoạn đầu manh tràng và ruột thừa",
        "Toàn bộ trực tràng và ống hậu môn",
        "Đại tràng lên và góc gan đại tràng",
        "Đoạn tá tràng D2 và hỗng tràng"
      ],
      answer: 0,
      why: [
        "Bệnh cảnh kinh điển của <b>Viêm đại tràng thiếu máu cục bộ (Ischemic Colitis)</b> - dạng thiếu máu tiêu hóa phổ biến nhất ở người cao tuổi có bệnh tim mạch sau một đợt <b>giảm tưới máu hệ thống thoáng qua (tụt huyết áp, suy tim, mất nước, sốc)</b>.",
        "Giải phẫu học kinh điển: Hai vùng <b>'Ranh giới phân chia cấp máu / Vùng đầu sóng ngọn gió' (Watershed areas)</b> có mạng lưới bàng hệ nghèo nàn nhất nên dễ bị hoại tử thiếu máu nhất khi huyết áp tụt:",
        "1. <b>Góc lách đại tràng (Điểm Griffiths / Splenic flexure)</b>: Nơi tiếp giáp tận cùng giữa Động mạch mạc treo tràng trên (SMA) và Động mạch mạc treo tràng dưới (IMA).",
        "2. <b>Chỗ nối đại tràng Sigma - Trực tràng (Điểm Sudeck / Rectosigmoid junction)</b>: Nơi tiếp giáp giữa Động mạch mạc treo tràng dưới (IMA) và Động mạch trực tràng giữa/dưới (nhánh từ ĐM chậu trong).",
        "- Lưu ý: <b>Trực tràng luôn được bảo tồn không bị tổn thương</b> do có cấp máu kép dồi dào từ động mạch chậu trong.",
        "Điều trị đại đa số (80–90%) là <b>Nội khoa bảo tồn</b>: Bù dịch nâng huyết áp tưới máu, cho ruột nghỉ ngơi (nhịn ăn) và Kháng sinh phổ rộng. Phẫu thuật cắt đại tràng chỉ chỉ định khi có hoại tử ruột xuyên thành hoặc viêm phúc mạc."
      ],
      wrongs: {
        1: "Manh tràng được cấp máu dồi dào trực tiếp từ nhánh hồi đại tràng của SMA.",
        2: "Trực tràng có hệ thống mạch kép phong phú nên hầu như không bao giờ bị viêm đại tràng thiếu máu cục bộ.",
        3: "Đại tràng lên được cấp máu thẳng bởi ĐM đại tràng phải từ SMA.",
        4: "Tá tràng được cấp máu bởi vòng mạch thân tạng và mạc treo tràng trên."
      },
      objective:
        "Viêm đại tràng thiếu máu cục bộ ở người già sau tụt huyết áp đặc trưng bởi đau hố chậu trái và đi ngoài phân máu tươi; tổn thương ưu thế ở các vùng ranh giới mạch máu (Góc lách - điểm Griffiths và Chỗ nối Sigma-Trực tràng - điểm Sudeck); trực tràng không bị ảnh hưởng."
    },

    {
      spec: "Tiêu hóa",
      task: "Lựa chọn điều trị",
      short: "Nhiễm trùng Clostridioides difficile tái phát nhiều lần",
      vignette: [
        "Cụ bà 72 tuổi nhập viện vì tiêu chảy phân lỏng nhiều nước 8–10 lần/ngày kèm đau quặn bụng dưới và sốt nhẹ 38 °C. Cụ vừa hoàn thành đợt điều trị nhiễm <i>Clostridioides difficile</i> lần thứ hai cách đây 2 tuần bằng Vancomycin uống 10 ngày.",
        "Xét nghiệm độc tố trong phân (C. diff Toxin A/B EIA và PCR) dương tính khẳng định <b>Nhiễm C. difficile tái phát lần thứ hai (Second recurrence / Đợt bệnh thứ 3)</b>.",
        "Bạch cầu máu 13.500/mm³, Creatinine 1,0 mg/dL."
      ],
      vitals: [
        ["Nhiệt độ", "38,0 °C"],
        ["Huyết áp", "125/75"],
        ["Mạch", "86 l/ph"],
        ["Nhịp thở", "18 l/ph"]
      ],
      stem: "Phương pháp điều trị được khuyến cáo ưu tiên hàng đầu theo guideline IDSA/ACG cho bệnh nhân tái phát nhiều lần là gì?",
      choices: [
        "Vancomycin đường uống theo phác đồ giảm liều dần kéo dài (Tapered/Pulsed regimen) HOẶC Fidaxomicin, và xem xét chỉ định Cấy ghép vi sinh vật phân (Fecal Microbiota Transplantation - FMT)",
        "Uống Metronidazole liều cao trong 14 ngày",
        "Tiêm tĩnh mạch Vancomycin liều cao",
        "Uống thuốc cầm tiêu chảy Loperamide liều tối đa",
        "Chỉ định phẫu thuật cắt toàn bộ đại tràng ngay"
      ],
      answer: 0,
      why: [
        "Theo khuyến cáo mới nhất của <b>IDSA / SHEA và ACG</b> cho <b>Nhiễm Clostridioides difficile tái phát nhiều lần (Từ lần tái phát thứ 2 trở lên)</b>:",
        "1. <b>Phác đồ thuốc</b>: <b>Vancomycin đường uống phác đồ giảm liều và ngắt quãng (Tapered and pulsed Vancomycin regimen trong 6–8 tuần)</b> HOẶC <b>Fidaxomicin</b> (thuốc kháng sinh diệt khuẩn chọn lọc ít phá hủy hệ vi sinh đường ruột).",
        "2. <b>Cấy ghép vi sinh vật phân (Fecal Microbiota Transplantation - FMT)</b>: Là phương pháp hiệu quả nhất với tỉ lệ chữa khỏi thành công >90% ở bệnh nhân tái phát từ 2 lần trở lên giúp phục hồi toàn diện hệ vi khuẩn chí đường ruột lành mạnh để cạnh tranh kìm hãm bào tử C. diff.",
        "Lưu ý: <b>Metronidazole không còn được khuyến cáo</b> do tỉ lệ thất bại cao. <b>Vancomycin TIÊM TĨNH MẠCH KHÔNG CÓ TÁC DỤNG</b> vì không bài tiết vào lòng đại tràng (bắt buộc phải dùng đường UỐNG). <b>Loperamide CHỐNG CHỈ ĐỊNH TUYỆT ĐỐI</b> vì gây ứ đọng độc tố dẫn đến giãn đại tràng nhiễm độc."
      ],
      wrongs: {
        1: "Metronidazole không còn là lựa chọn ưu tiên cho C. diff tái phát vì hiệu quả kém và độc tính thần kinh.",
        2: "Vancomycin tĩnh mạch không bài tiết qua biểu mô ruột vào lòng đại tràng nên hoàn toàn vô tác dụng với C. diff.",
        3: "Thuốc cầm tiêu chảy Loperamide chống chỉ định tuyệt đối vì gây giữ độc tố làm vỡ ruột / phình đại tràng nhiễm độc.",
        4: "Phẫu thuật chỉ dùng cho viêm đại tràng tối cấp có thủng ruột hoặc sốc kháng trị."
      },
      objective:
        "C. difficile tái phát từ lần 2 trở lên điều trị bằng Vancomycin uống giảm liều dần (tapered) hoặc Fidaxomicin và chỉ định Cấy ghép vi sinh vật phân (FMT); tuyệt đối không dùng Vancomycin tĩnh mạch và cấm dùng Loperamide."
    },

    {
      spec: "Tiêu hóa",
      task: "Bước chẩn đoán và hướng dẫn tầm soát",
      short: "Polyp đại tràng và khoảng cách tầm soát ung thư",
      vignette: [
        "Nam 54 tuổi đi nội soi đại tràng tầm soát ung thư lần đầu tiên trong đời. Quá trình soi đạt chất lượng tốt, chuẩn bị đại tràng sạch, soi đến tận đáy manh tràng.",
        "Bác sĩ nội soi phát hiện và tiến hành cắt trọn <b>3 polyp đại tràng</b>:",
        "- Một polyp kích thước <b>1,4 cm ở đại tràng lên</b> có kết quả giải phẫu bệnh là <b>U tuyến nhung mao (Villous adenoma) có loạn sản biểu mô độ cao (High-grade dysplasia)</b>.",
        "- Hai polyp kích thước 5 mm ở đại tràng sigma là u tuyến ống (Tubular adenomas) loạn sản độ thấp.",
        "- Diện cắt cuống polyp hoàn toàn sạch tế bào ác tính."
      ],
      vitals: [
        ["Nhiệt độ", "36,8 °C"],
        ["Huyết áp", "120/75"],
        ["Mạch", "72 l/ph"],
        ["Nhịp thở", "16 l/ph"]
      ],
      stem: "Đặc điểm mô bệnh học polyp nào có nguy cơ ác tính hóa cao nhất và khoảng cách hẹn nội soi đại tràng kiểm tra lại là bao lâu?",
      choices: [
        "Polyp dạng nhung mao (Villous) có nguy cơ ác tính cao nhất; bệnh nhân thuộc nhóm nguy cơ cao (polyp ≥ 10 mm, thành phần nhung mao, loạn sản độ cao, ≥ 3 polyp), hẹn nội soi đại tràng kiểm tra lại sau 3 NĂM",
        "Polyp tăng sản có nguy cơ ác tính cao nhất; hẹn nội soi sau 10 năm",
        "Polyp dạng ống có nguy cơ ác tính cao nhất; hẹn nội soi sau 5 năm",
        "Bệnh nhân đã cắt hết polyp nên không cần nội soi lại suốt đời",
        "Chỉ định phẫu thuật cắt đại tràng phải dự phòng ngay lập tức"
      ],
      answer: 0,
      why: [
        "Phân loại nguy cơ ác tính của Polyp tuyến đại tràng (Adenomatous Polyps):",
        "1. <b>Mô bệnh học</b>: <b>U tuyến nhung mao (Villous adenoma) có nguy cơ ung thư hóa CAO NHẤT (khoảng 30–40%)</b> > U tuyến ống - nhung mao (Tubulovillous) > U tuyến ống (Tubular adenoma, chỉ khoảng 5%).",
        "2. <b>Loạn sản</b>: Loạn sản độ cao (High-grade dysplasia) có nguy cơ cao hơn loạn sản độ thấp.",
        "3. <b>Kích thước</b>: Kích thước ≥ 10 mm (1 cm) có nguy cơ cao.",
        "Hướng dẫn của US Multi-Society Task Force (MSTF) về khoảng cách theo dõi sau cắt polyp:",
        "- <b>Nhóm polyp nguy cơ cao (High-risk adenomas)</b>: Có u tuyến nhung mao, loạn sản độ cao, kích thước ≥ 10 mm, HOẶC có từ 3–4 u tuyến -> <b>HẸN NỘI SOI ĐẠI TRÀNG KIỂM TRA LẠI SAU 3 NĂM</b>.",
        "- (Nếu có ≥ 5 polyp hoặc cắt nhiều mảnh u tuyến lớn -> soi lại sau 1 năm; nếu chỉ có 1–2 u tuyến ống nhỏ < 10 mm -> soi lại sau 7–10 năm)."
      ],
      wrongs: {
        1: "Polyp tăng sản (Hyperplastic polyp) lành tính không phải u tuyến và nguy cơ ác tính rất thấp.",
        2: "Polyp dạng ống có nguy cơ ác tính thấp hơn nhiều so với dạng nhung mao.",
        3: "Polyp nguy cơ cao có khả năng mọc polyp mới và phát triển ung thư biểu mô đại tràng nếu không theo dõi định kỳ.",
        4: "Polyp đã được cắt trọn vẹn diện cắt sạch, không có chỉ định phẫu thuật cắt đại tràng."
      },
      objective:
        "U tuyến dạng nhung mao (Villous adenoma) kích thước ≥ 10 mm có nguy cơ ung thư đại tràng cao nhất; sau khi cắt trọn vẹn, bệnh nhân thuộc nhóm nguy cơ cao cần được hẹn nội soi đại tràng kiểm tra lại sau 3 năm."
    },

    {
      spec: "Tiêu hóa",
      task: "Bước chẩn đoán và tầm soát",
      short: "Ung thư biểu mô tế bào gan (HCC) trên nền xơ gan",
      vignette: [
        "Nam 56 tuổi có tiền sử xơ gan do viêm gan B mạn tính đang điều trị Tenofovir đều đặn, đi khám sức khỏe định kỳ theo hẹn.",
        "Siêu âm ổ bụng tầm soát định kỳ phát hiện: <b>Khối u đặc đơn độc kích thước 2,8 cm ở phân thùy VII gan phải</b>. Xét nghiệm nồng độ <b>Alpha-fetoprotein (AFP) huyết thanh tăng lên 240 ng/mL</b> (trước đó 6 tháng là 8 ng/mL).",
        "Chụp CT cắt lớp vi tính ổ bụng 4 pha có cản quang động học (Dynamic 4-phase contrast CT): <b>Khối u ngấm thuốc mạnh và nhanh ở thì động mạch gan (Arterial hyperenhancement), sau đó thải thuốc nhanh tạo hình ảnh rửa trôi ở thì tĩnh mạch cửa và thì muộn (Venous washout) kèm hình ảnh vỏ bao ngấm thuốc</b>."
      ],
      vitals: [
        ["Nhiệt độ", "36,8 °C"],
        ["Huyết áp", "125/75"],
        ["Mạch", "74 l/ph"],
        ["Nhịp thở", "16 l/ph"]
      ],
      stem: "Theo tiêu chuẩn LI-RADS / AASLD, khối u này có cần bắt buộc phải sinh thiết gan trước khi quyết định điều trị không và phương án can thiệp tối ưu cho u đơn độc 2,8 cm trên nền xơ gan còn bù (Child-Pugh A) là gì?",
      choices: [
        "Không cần sinh thiết gan vì hình ảnh CT động học 4 pha điển hình (Ngấm thuốc thì động mạch + Thải thuốc thì tĩnh mạch) đủ tiêu chuẩn chẩn đoán xác định HCC; can thiệp triệt căn bằng Cắt gan theo phân thùy HOẶC Đốt sóng cao tần (RFA) / Ghép gan",
        "Bắt buộc phải sinh thiết gan xuyên thành bụng trước mọi trường hợp nghi ngờ HCC",
        "Chỉ định xạ trị toàn thân đơn độc",
        "Uống thuốc kháng sinh phòng nhiễm trùng khối u",
        "Tiêm vắc-xin viêm gan B liều cao để tiêu diệt khối u"
      ],
      answer: 0,
      why: [
        "<b>Ung thư biểu mô tế bào gan (Hepatocellular Carcinoma - HCC)</b> là ung thư biểu mô nguyên phát duy nhất có thể <b>CHẨN ĐOÁN XÁC ĐỊNH BẰNG HÌNH ẢNH HỌC MÀ KHÔNG BẮT BUỘC PHẢI SINH THIẾT</b> ở bệnh nhân có yếu tố nguy cơ cao (Xơ gan hoặc Viêm gan B mạn).",
        "Tiêu chuẩn chẩn đoán hình ảnh kinh điển trên <b>CT 4 pha hoặc MRI gan có chất tương phản từ</b>:",
        "1. Khối u kích thước ≥ 1 cm trên nền gan xơ.",
        "2. <b>Ngấm thuốc mạnh thì động mạch (Arterial Phase Hyperenhancement)</b> do khối u được nuôi chủ yếu bởi động mạch gan.",
        "3. <b>Rửa trôi thuốc thì tĩnh mạch cửa / thì muộn (Washout appearance)</b> và có <b>vỏ bao ngấm thuốc (Enhancing capsule)</b>.",
        "Sinh thiết gan không bắt buộc và có nguy cơ gây gieo rắc tế bào ung thư dọc theo đường kim (tumor seeding).",
        "Lựa chọn điều trị triệt căn cho u đơn độc < 3 cm trên nền gan Child-Pugh A: <b>Phẫu thuật cắt phần gan mang u (Resection)</b> HOẶC <b>Đốt sóng cao tần phá hủy u tại chỗ (Radiofrequency Ablation - RFA)</b> HOẶC <b>Ghép gan (Liver transplantation theo tiêu chuẩn Milan)</b>."
      ],
      wrongs: {
        1: "Sinh thiết gan không bắt buộc khi hình ảnh CT/MRI 4 pha đã điển hình và có nguy cơ gieo rắc tế bào ác tính.",
        2: "Nhu mô gan lành rất nhạy cảm với tia xạ, xạ trị toàn thân không phải điều trị chuẩn cho HCC đơn độc giai đoạn sớm.",
        3: "Kháng sinh không có tác dụng với tế bào ung thư.",
        4: "Vắc-xin chỉ có tác dụng phòng ngừa lây nhiễm HBV ban đầu, không chữa được ung thư đã hình thành."
      },
      objective:
        "HCC trên nền xơ gan được chẩn đoán xác định bằng CT/MRI 4 pha (ngấm thuốc thì động mạch + rửa trôi thì tĩnh mạch) mà không cần sinh thiết; khối u đơn độc <3 cm trên nền gan Child-Pugh A điều trị triệt căn bằng Cắt gan, Đốt sóng cao tần RFA hoặc Ghép gan."
    },

    {
      spec: "Tiêu hóa",
      task: "Bước xử trí tiếp theo",
      short: "Nang giả tụy có triệu chứng sau viêm tụy cấp",
      vignette: [
        "Nam 44 tuổi có tiền sử điều trị viêm tụy cấp nặng do rượu cách đây <b>6 tuần</b>. Bệnh nhân đến khám lại vì cảm giác đầy bụng, nhanh no, buồn nôn sau khi ăn và đau tức âm ỉ vùng thượng vị.",
        "Khám: Bụng mềm, sờ thấy một khối tròn nhẵn, ranh giới rõ, ấn tức nhẹ ở vùng thượng vị lệch trái.",
        "Chụp CT cắt lớp vi tính bụng: <b>Khối dạng nang chứa dịch đồng nhất kích thước 8,5 cm ở vùng thân và đuôi tụy, có vỏ bao xơ dày ngấm thuốc bao bọc rõ ràng (thành nang đã trưởng thành sau > 4 tuần), chèn ép vào mặt sau dạ dày</b>. Không có sỏi mật, không có vách hóa hay nụ sùi bên trong nang."
      ],
      vitals: [
        ["Nhiệt độ", "36,8 °C"],
        ["Huyết áp", "120/75"],
        ["Mạch", "76 l/ph"],
        ["Nhịp thở", "16 l/ph"]
      ],
      stem: "Phương pháp can thiệp xâm lấn tối thiểu điều trị triệt để nang giả tụy có triệu chứng này là gì?",
      choices: [
        "Dẫn lưu nang vào dạ dày qua nội soi dưới hướng dẫn siêu âm nội soi (EUS-guided cystogastrostomy)",
        "Chọc hút nang bằng kim nhỏ qua da một lần duy nhất tại phòng khám",
        "Tiêm cồn tuyệt đối vào trong lòng nang để làm xơ hóa",
        "Phẫu thuật cắt toàn bộ khối tá tụy (phẫu thuật Whipple)",
        "Chỉ dùng thuốc kháng sinh đường uống kéo dài"
      ],
      answer: 0,
      why: [
        "Bệnh nhân có <b>Nang giả tụy (Pancreatic Pseudocyst)</b> - ổ tụ dịch hoại tử tụy được bao bọc bởi <b>vỏ xơ hạt không có biểu mô lót (Non-epithelialized fibrous wall)</b> hình thành sau <b>ít nhất 4–6 tuần</b> kể từ đợt viêm tụy cấp.",
        "Chỉ định can thiệp nang giả tụy: Khi nang có <b>kích thước lớn (> 6 cm) VÀ có triệu chứng chèn ép (đau, buồn nôn, nhanh no do chèn ép dạ dày tá tràng)</b>, nhiễm trùng hoặc vỡ/chảy máu.",
        "Phương pháp can thiệp lựa chọn hàng đầu hiện nay: <b>Dẫn lưu nang vào dạ dày qua nội soi dưới hướng dẫn siêu âm nội soi (EUS-guided Cystogastrostomy)</b> bằng cách đặt Stent kim loại tự nở (LAMS) tạo đường thông giữa nang tụy và lòng dạ dày.",
        "Phương pháp này có tỉ lệ thành công cao (>90%), ít xâm lấn và ít biến chứng hơn mổ hở."
      ],
      wrongs: {
        1: "Chọc hút kim qua da đơn thuần có tỉ lệ tái phát dịch nang gần như 100% và tăng nguy cơ nhiễm trùng đưa vi khuẩn từ da vào nang.",
        2: "Tiêm cồn vào nang tụy có nguy cơ rò dịch tụy gây viêm phúc mạc hoại tử.",
        3: "Whipple chỉ dùng cho u đầu tụy ác tính, không dùng cho nang giả tụy lành tính ở thân đuôi tụy.",
        4: "Kháng sinh không làm tiêu được khối nang dịch có vỏ bao xơ dày đang chèn ép cơ học."
      },
      objective:
        "Nang giả tụy (ổ dịch có vỏ xơ không biểu mô sau >4 tuần viêm tụy cấp) có triệu chứng chèn ép dạ dày điều trị tối ưu bằng Dẫn lưu nang vào dạ dày qua siêu âm nội soi (EUS-guided cystogastrostomy)."
    },

    {
      spec: "Tiêu hóa",
      task: "Bước chẩn đoán và điều trị",
      short: "Hội chứng ruột kích thích (IBS) theo tiêu chuẩn Rome IV",
      vignette: [
        "Nữ 26 tuổi nhân viên ngân hàng đến khám vì đau quặn bụng dưới tái diễn nhiều đợt trong 9 tháng qua. Cơn đau thường xuất hiện vào buổi sáng, <b>đau thuyên giảm rõ rệt sau khi đi đại tiện</b>.",
        "Khi đau bụng, bệnh nhân thường đi ngoài phân lỏng nát 3–4 lần/ngày xen kẽ những đợt táo bón phân dê 3 ngày mới đi một lần. <b>Bệnh nhân hoàn toàn KHÔNG CÓ các dấu hiệu báo động: không đi ngoài ra máu, không sốt, không sụt cân, không đau bụng hay tiêu chảy ban đêm làm thức giấc</b>.",
        "Xét nghiệm: Công thức máu, CRP, Calprotectin trong phân và xét nghiệm kháng thể celiac Anti-tTG IgA hoàn toàn bình thường."
      ],
      vitals: [
        ["Nhiệt độ", "36,7 °C"],
        ["Huyết áp", "110/70"],
        ["Mạch", "72 l/ph"],
        ["Nhịp thở", "16 l/ph"]
      ],
      stem: "Chẩn đoán xác định và bước tiếp cận điều trị ban đầu thích hợp nhất cho bệnh nhân này là gì?",
      choices: [
        "Hội chứng ruột kích thích thể hỗn hợp (IBS-M) theo tiêu chuẩn Rome IV; giải thích trấn an bệnh nhân, áp dụng chế độ ăn giảm FODMAP và tập thể dục giảm căng thẳng",
        "Bệnh Viêm loét đại tràng chảy máu; chỉ định dùng Corticoid liều cao",
        "Ung thư đại trực tràng giai đoạn sớm; chỉ định phẫu thuật",
        "Nhiễm ký sinh trùng amip đường ruột mạn tính; điều trị bằng Metronidazole",
        "Kém dung nạp Lactose đơn thuần; chỉ cần kiêng sữa bò"
      ],
      answer: 0,
      why: [
        "Bệnh nhân thỏa mãn đầy đủ <b>Tiêu chuẩn Rome IV cho Hội chứng ruột kích thích (Irritable Bowel Syndrome - IBS)</b>:",
        "- <b>Đau bụng tái diễn ít nhất 1 ngày/tuần trong 3 tháng qua</b> (khởi phát ít nhất 6 tháng trước) kết hợp với <b>ÍT NHẤT 2 TRONG 3 TIÊU CHUẨN</b>:",
        "1. Đau bụng liên quan đến việc đi đại tiện (thường đỡ đau sau khi đi ngoài).",
        "2. Thay đổi tần số đi đại tiện.",
        "3. Thay đổi hình thái/khuôn phân.",
        "- <b>KHÔNG CÓ DẤU HIỆU CỜ ĐỎ (Red flags / Alarm features)</b>: Tuổi khởi phát > 50, sụt cân không rõ nguyên nhân, đi ngoài ra máu, sốt, tiêu chảy ban đêm, tiền sử gia đình IBD/ung thư đại tràng, thiếu máu thiếu sắt, tăng dấu ấn viêm (CRP/Calprotectin).",
        "Điều trị ban đầu: Trấn an bệnh nhân về tính chất lành tính mạn tính, <b>Chế độ ăn ít chất lên men tạo hơi (Low-FODMAP diet)</b>, tập luyện thể thao giảm stress. Dùng thuốc giãn cơ trơn (Mebeverine, Trimebutine) khi đau quặn hoặc thuốc chống trầm cảm 3 vòng liều thấp (Amitriptyline) để điều hòa trục não - ruột."
      ],
      wrongs: {
        1: "IBS không bao giờ có đi ngoài ra máu hay tăng Calprotectin như IBD; dùng corticoid là sai lầm nguy hại.",
        2: "Không có dấu hiệu cờ đỏ và xét nghiệm bình thường ở người trẻ 26 tuổi.",
        3: "Không có bằng chứng amip trong phân và không có phân nhầy máu.",
        4: "Kém dung nạp lactose chỉ gây chướng bụng tiêu chảy sau khi uống sữa, không giải thích được kiểu đau bụng thuyên giảm sau đi ngoài mạn tính 9 tháng."
      },
      objective:
        "Hội chứng ruột kích thích (IBS theo Rome IV: đau bụng liên quan đại tiện kèm thay đổi khuôn phân, không có dấu hiệu cờ đỏ) là rối loạn tương tác não-ruột lành tính; tiếp cận điều trị bằng chế độ ăn low-FODMAP, giảm stress và điều chỉnh triệu chứng."
    },

    {
      spec: "Tiêu hóa",
      task: "Bước chẩn đoán và điều trị",
      short: "Viêm túi thừa đại tràng cấp tính (Acute Diverticulitis)",
      vignette: [
        "Nam 62 tuổi đến cấp cứu vì <b>đau âm ỉ liên tục ở hố chậu trái (Left Lower Quadrant pain) 3 ngày nay</b> kèm sốt nhẹ 38,2 °C, buồn nôn và táo bón.",
        "Khám: Bụng mềm, <b>ấn đau chói và có phản ứng đề kháng thành bụng nhẹ khu trú ở hố chậu trái (được mệnh danh là 'Viêm ruột thừa bên trái')</b>. Không có cảm ứng phúc mạc toàn thể.",
        "Xét nghiệm: Bạch cầu 14.800/mm³ (82% Neutrophil). Chụp CT ổ bụng có tiêm thuốc cản quang tĩnh mạch: <b>Dày thành đại tràng sigma khu trú kèm hình ảnh túi thừa viêm, thâm nhiễm mỡ quanh đại tràng (Pericolic fat stranding)</b>, không có ổ áp xe lớn, không có khí tự do trong ổ bụng (Viêm túi thừa không biến chứng - Hinchey Ia)."
      ],
      vitals: [
        ["Nhiệt độ", "38,2 °C"],
        ["Huyết áp", "130/80"],
        ["Mạch", "86 l/ph"],
        ["Nhịp thở", "18 l/ph"]
      ],
      stem: "Phương tiện chẩn đoán hình ảnh tiêu chuẩn vàng và phác đồ điều trị nội khoa ngoại trú thích hợp là gì?",
      choices: [
        "Chụp CT cắt lớp vi tính bụng có cản quang là tiêu chuẩn vàng; điều trị bằng Kháng sinh đường uống bao phủ vi khuẩn Gram âm và kỵ khí (Ciprofloxacin + Metronidazole HOẶC Amoxicillin-Clavulanate) kết hợp chế độ ăn lỏng",
        "Nội soi đại tràng toàn bộ cấp cứu để rửa sạch túi thừa",
        "Chụp khung đại tràng có bơm thuốc cản quang Barium",
        "Chỉ định mổ cắt đại tràng sigma cấp cứu ngay lập tức",
        "Uống thuốc nhuận tràng kích thích liều cao"
      ],
      answer: 0,
      why: [
        "Bệnh cảnh kinh điển của <b>Viêm túi thừa đại tràng cấp (Acute Diverticulitis)</b> - thường xảy ra ở đại tràng sigma với biểu hiện <b>Đau hố chậu trái + Sốt + Tăng bạch cầu ('Left-sided appendicitis')</b>.",
        "<b>Chụp CT cắt lớp vi tính ổ bụng có cản quang</b> là <b>tiêu chuẩn vàng</b> giúp xác định vị trí viêm, đánh giá độ dày thành ruột, thâm nhiễm mỡ và phát hiện biến chứng (áp xe, thủng, tắc ruột, rò bàng quang).",
        "<b>NỘI SOI ĐẠI TRÀNG VÀ CHỤP BARIUM BỊ CHỐNG CHỈ ĐỊNH TRONG GIAI ĐOẠN VIÊM CẤP</b> vì nguy cơ làm vỡ túi thừa gây thủng ruột (chỉ nội soi đại tràng kiểm tra sau khi đợt viêm đã khỏi hoàn toàn 6–8 tuần để loại trừ ung thư đại tràng ẩn giấu).",
        "Điều trị viêm túi thừa không biến chứng nhẹ: <b>Chế độ ăn lỏng và Kháng sinh bao phủ vi khuẩn đường ruột (Ciprofloxacin + Metronidazole hoặc Amoxicillin-Clavulanate)</b> trong 7–10 ngày."
      ],
      wrongs: {
        1: "Nội soi đại tràng trong đợt viêm cấp chống chỉ định vì bơm hơi làm thủng túi thừa viêm mủ.",
        2: "Chụp Barium chống chỉ định vì thuốc cản quang rò vào màng bụng gây viêm phúc mạc Barium tử vong.",
        3: "Phẫu thuật (Hartmann) chỉ đặt ra khi có viêm phúc mạc phân do thủng hoặc áp xe lớn không dẫn lưu được.",
        4: "Nhuận tràng kích thích làm tăng co bóp và áp lực trong lòng đại tràng gây vỡ túi thừa."
      },
      objective:
        "Viêm túi thừa cấp (đau hố chậu trái, sốt) chẩn đoán xác định bằng Chụp CT bụng có cản quang; chống chỉ định nội soi đại tràng trong đợt cấp; điều trị bằng kháng sinh phổ Gram âm/kỵ khí và ăn lỏng."
    },

    {
      spec: "Tiêu hóa",
      task: "Bước chẩn đoán và điều trị",
      short: "Hội chứng Budd-Chiari (Tắc tĩnh mạch gan)",
      vignette: [
        "Nữ 28 tuổi có tiền sử dùng thuốc tránh thai đường uống kết hợp 3 năm nay và mắc hội chứng tăng sinh tủy (Đa hồng cầu nguyên phát Polycythemia vera mang đột biến gen JAK2 V617F), nhập viện vì <b>đau dữ dội hạ sườn phải, bụng chướng to nhanh chóng và vàng da xuất hiện trong vòng 1 tuần qua</b>.",
        "Khám: Bụng chướng căng dịch cổ trướng nhiều, <b>gan to căng tức ấn rất đau (Tender hepatomegaly)</b>. Không có sốt.",
        "Chọc hút dịch màng bụng: Dịch màu vàng rơm, <b>Độ chênh Albumin huyết thanh - dịch cổ trướng (SAAG) = 1,4 g/dL (> 1,1 g/dL - Tăng áp lực tĩnh mạch cửa)</b> kèm <b>Nồng độ Protein dịch cổ trướng tăng rất cao 3,6 g/dL (> 2,5 g/dL)</b>.",
        "Siêu âm Doppler mạch máu gan: <b>Mất phổ dòng chảy trong 3 nhánh tĩnh mạch trên gan (Hepatic veins) do huyết khối bít tắc hoàn toàn</b>, dòng chảy tĩnh mạch chủ dưới bị chèn ép, thùy đuôi gan phì đại bù trừ."
      ],
      vitals: [
        ["Nhiệt độ", "37,0 °C"],
        ["Huyết áp", "125/78"],
        ["Mạch", "88 l/ph"],
        ["Nhịp thở", "18 l/ph"]
      ],
      stem: "Chẩn đoán xác định và bước xử trí điều trị tái thông mạch máu ưu tiên theo bậc là gì?",
      choices: [
        "Hội chứng Budd-Chiari (Tắc nghẽn dòng thoát tĩnh mạch gan do huyết khối); điều trị bằng Thuốc chống đông Heparin/DOAC + Lợi tiểu, nếu thất bại tiến hành Can thiệp nội mạch (Nong mạch/Đặt stent tĩnh mạch gan hoặc Tạo luồng thông cửa chủ trong gan qua tĩnh mạch cảnh - TIPS)",
        "Suy tim phải cấp; điều trị bằng Dobutamine",
        "Viêm gan siêu vi B cấp tính; điều trị bằng thuốc kháng virus Entecavir",
        "Viêm phúc mạc nhiễm khuẩn nguyên phát; điều trị bằng Cefotaxime",
        "Áp xe gan do amip; điều trị bằng chọc hút mủ qua da"
      ],
      answer: 0,
      why: [
        "Bệnh cảnh kinh điển của <b>Hội chứng Budd-Chiari (Budd-Chiari Syndrome)</b>: Tắc nghẽn dòng máu hồi lưu từ các tĩnh mạch gan về tĩnh mạch chủ dưới do huyết khối (thường trên nền bệnh lý tăng đông: Đột biến <b>JAK2 V617F</b> trong Đa hồng cầu, Hội chứng kháng Phospholipid, uống thuốc tránh thai).",
        "Tam chứng kinh điển: <b>Đau hạ sườn phải + Cổ trướng tiến triển nhanh + Gan to ấn đau</b>.",
        "Đặc điểm dịch màng bụng đặc trưng: <b>SAAG cao (> 1,1 g/dL - tăng áp cửa) KẾT HỢP Protein dịch cổ trướng cao (> 2,5 g/dL)</b> do các xoang gan vẫn bảo tồn tính thấm mao mạch trước khi bị tắc sau xoang.",
        "Chẩn đoán xác định: <b>Siêu âm Doppler mạch gan</b> thấy huyết khối tĩnh mạch gan và phì đại thùy đuôi (do thùy đuôi đổ thẳng vào IVC).",
        "Chiến lược điều trị: (1) <b>Thuốc chống đông toàn thân suốt đời</b> + kiểm soát cổ trướng bằng lợi tiểu; (2) Can thiệp nội mạch: <b>Tạo luồng thông cửa - chủ trong gan qua tĩnh mạch cảnh (TIPS)</b> hoặc nong mạch/stent tĩnh mạch gan để giải phóng ứ trệ máu gan; (3) Ghép gan nếu suy gan tối cấp."
      ],
      wrongs: {
        1: "Suy tim phải có tĩnh mạch cổ nổi đập theo nhịp tim và không có huyết khối bít tắc tĩnh mạch gan trên Doppler.",
        2: "Viêm gan B cấp có AST/ALT tăng hàng ngàn đơn vị, không có tắc mạch trên Doppler.",
        3: "Dịch cổ trướng không có bạch cầu đa nhân trung tính tăng cao và không có sốt.",
        4: "Áp xe gan có ổ giảm âm hóa mủ trên siêu âm và sốt cao rét run."
      },
      objective:
        "Hội chứng Budd-Chiari (tắc tĩnh mạch gan do huyết khối trên nền tăng đông) gây tam chứng gan to đau, cổ trướng nhanh và SAAG cao + Protein dịch cao; chẩn đoán bằng Doppler mạch gan và điều trị bằng Chống đông kết hợp can thiệp TIPS."
    }
  ]
};
