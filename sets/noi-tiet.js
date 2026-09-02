/* ==========================================================================
   Bộ đề: Nội tiết & Chuyển hóa — 30 ca lâm sàng chuyên sâu theo guideline ADA & Endocrine Society.
   Tài liệu tham khảo: Sách Nội tiết học trong thực hành lâm sàng, Bệnh viện Bạch Mai.
   ========================================================================== */
window.QUIZ_SET = {
  id: "noi-tiet",
  eyebrow: "USMLE Step 2 CK · Chuyên đề Nội khoa",
  title: "Nội tiết & Chuyển hóa",
  blurb: "30 ca lâm sàng nội tiết chuyên sâu (ADA, Endocrine Society, Bạch Mai): DKA/HHS, ĐTĐ típ 2 và bảo vệ tim thận SGLT2i/GLP-1 RA, bão giáp/hôn mê phù niêm, Basedow, suy thượng thận cấp, Cushing, Conn, Pheochromocytoma, đái tháo nhạt, SIADH, MEN-1/MEN-2 và rối loạn chuyển hóa Canxi.",

  cases: [
    {
      spec: "Nội tiết",
      task: "Bước xử trí cấp cứu",
      short: "Nhiễm toan ceton do đái tháo đường (DKA)",
      vignette: [
        "Nữ 19 tuổi có tiền sử đái tháo đường típ 1, được người nhà đưa vào cấp cứu vì thở nhanh sâu dồn dập (thở Kussmaul), hơi thở có mùi táo chín (mùi acetone), đau bụng buồn nôn và lơ mơ.",
        "Khám: Mắt trũng, niêm mạc khô kiệt, da đàn hồi kém, huyết áp 95/60 mm Hg, mạch 118 l/phút, nhịp thở 30 l/phút.",
        "Xét nghiệm máu khẩn: <b>Glucose huyết tương 450 mg/dL</b>, <b>pH máu động mạch 7,15, HCO3- 9 mEq/L</b>, Khoảng trống Anion (Anion Gap) = 24 mEq/L (Toan chuyển hóa tăng khoảng trống Anion nặng), <b>Ceton máu và Ceton niệu (+++)</b>. <b>Kali huyết thanh 4,8 mEq/L</b>, Natri 130 mEq/L."
      ],
      vitals: [
        ["Nhiệt độ", "37,0 °C"],
        ["Huyết áp", "95/60"],
        ["Mạch", "118 l/ph"],
        ["Nhịp thở", "30 l/ph"]
      ],
      stem: "Nguyên tắc hồi sức dịch, điện giải và insulin chuẩn xác nhất theo hướng dẫn ADA trong giờ đầu tiên là gì?",
      choices: [
        "Truyền tĩnh mạch nhanh 1.000–1.500 mL NaCl 0,9% trong giờ đầu + Bắt đầu truyền Insulin Regular tĩnh mạch liên tục 0,1 đơn vị/kg/giờ + Bổ sung Kali vào dịch truyền ngay khi K máu < 5,2 mEq/L để phòng ngừa hạ kali máu do insulin",
        "Tiêm tĩnh mạch Bolus Insulin liều cao và KHÔNG truyền dịch để tránh phù não",
        "Truyền dung dịch Natri Bicarbonate 8,4% liều cao ngay lập tức cho mọi bệnh nhân DKA",
        "Chỉ cho uống viên hạ đường huyết Metformin và bù nước bằng đường uống",
        "Chờ kết quả cấy máu sau 48 giờ mới bắt đầu dùng insulin"
      ],
      answer: 0,
      why: [
        "Xử trí <b>Nhiễm toan ceton do đái tháo đường (DKA)</b> theo khuyến cáo <b>ADA (American Diabetes Association)</b>:",
        "1. <b>Bù dịch tinh thể là ưu tiên hàng đầu</b>: Truyền nhanh <b>NaCl 0,9% với tốc độ 1.000–1.500 mL trong giờ đầu tiên</b> để phục hồi thể tích nội mạch và tưới máu mô.",
        "2. <b>Insulin</b>: Truyền <b>Insulin Regular tĩnh mạch liên tục 0,1 đơn vị/kg/giờ</b> (chỉ tiêm khi Kali máu ≥ 3,3 mEq/L; nếu K < 3,3 mEq/L thì BẮT BUỘC BÙ KALI TRƯỚC rồi mới dùng insulin để tránh ngừng tim do hạ kali máu).",
        "3. <b>Bù Kali</b>: Dù Kali máu xét nghiệm ban đầu có thể bình thường hoặc hơi cao do toan máu đẩy K ra ngoài tế bào, <b>tổng lượng Kali toàn cơ thể luôn luôn bị thiếu hụt nặng</b>. Khi truyền insulin và dịch, Kali sẽ đi ào ạt vào lại nội bào; do đó <b>bắt buộc phải pha 20–30 mEq Kali vào mỗi lít dịch truyền ngay khi Kali máu < 5,2 mEq/L</b>.",
        "4. <b>Khi Glucose máu giảm xuống < 200 mg/dL</b>: <b>Đổi dịch sang Glucose 5% pha NaCl 0,45%</b> trong khi vẫn tiếp tục duy trì truyền insulin cho đến khi hết toan ceton (pH > 7,30, HCO3- ≥ 18 mEq/L và Anion Gap đóng lại)."
      ],
      wrongs: {
        1: "Không truyền dịch sẽ làm tụt huyết áp sốc giảm thể tích và suy thận cấp hoại tử ống thận.",
        2: "Bicarbonate KHÔNG ĐƯỢC KHUYẾN CÁO thường quy vì gây toan dịch não tủy nghịch lý, hạ kali máu và trì hoãn thoái lui ceton; chỉ xem xét khi pH < 6,9.",
        3: "Metformin chống chỉ định tuyệt đối trong DKA vì làm tăng nguy cơ toan acid lactic tử vong.",
        4: "Trì hoãn insulin sẽ khiến quá trình sinh ceton tiếp diễn dẫn đến phù não và tử vong."
      },
      objective:
        "DKA đòi hỏi bù dịch NaCl 0,9% tích cực đầu tiên, truyền Insulin tĩnh mạch liên tục, bắt buộc bù Kali sớm khi K < 5,2 mEq/L và thêm Glucose 5% khi đường máu < 200 mg/dL cho đến khi đóng khoảng trống Anion."
    },

    {
      spec: "Nội tiết",
      task: "Bước xử trí tiếp theo",
      short: "Hôn mê tăng áp lực thẩm thấu do đái tháo đường (HHS)",
      vignette: [
        "Cụ ông 78 tuổi mắc đái tháo đường típ 2 sống một mình, bị viêm phổi 5 ngày nay nhưng không uống nước được. Cụ được hàng xóm phát hiện trong tình trạng hôn mê sâu, co giật cục bộ nửa người bên phải.",
        "Khám: Dấu hiệu mất nước mức độ cực kỳ nghiêm trọng (mắt trũng sâu, niêm mạc khô nứt nẻ, véo da mất sau nhiều giây), huyết áp 80/50 mm Hg, mạch nhanh nhỏ 126 l/phút.",
        "Xét nghiệm máu khẩn: <b>Glucose huyết tương tăng cực cao 1.050 mg/dL</b>, <b>Áp lực thẩm thấu huyết tương hiệu dụng = 345 mOsm/kg</b> (tiêu chuẩn HHS > 320 mOsm/kg), <b>pH máu 7,38, HCO3- 23 mEq/L (Không có toan ceton)</b>, Ceton niệu âm tính. <b>Natri máu 152 mEq/L (Natri hiệu chỉnh = 152 + 1,6 x [(1050-100)/100] = 167 mEq/L)</b>, BUN 54 mg/dL, Creatinine 2,6 mg/dL."
      ],
      vitals: [
        ["Nhiệt độ", "38,0 °C"],
        ["Huyết áp", "80/50"],
        ["Mạch", "126 l/ph"],
        ["Nhịp thở", "18 l/ph"]
      ],
      stem: "Đặc điểm bệnh sinh chính và bước can thiệp cấp cứu quan trọng nhất để cứu sống bệnh nhân là gì?",
      choices: [
        "Tình trạng tăng áp lực thẩm thấu máu cực cao gây mất nước nội bào tế bào não; can thiệp quan trọng nhất là Hồi sức bù lượng dịch khổng lồ (thiếu hụt 8–10 lít) bằng NaCl 0,9% (sau đó đổi NaCl 0,45% vì tăng natri máu hiệu chỉnh) kết hợp Insulin liều thấp",
        "Tiêm thuốc chống động kinh Phenytoin liều cao đơn độc",
        "Tiêm tĩnh mạch dung dịch Natri Clorid ưu trương 3%",
        "Cho bệnh nhân uống dung dịch Oresol qua sonde dạ dày",
        "Chỉ định lọc máu cấp cứu ngay lập tức mà không bù dịch"
      ],
      answer: 0,
      why: [
        "Bệnh nhân có <b>Hội chứng tăng áp lực thẩm thấu tăng đường huyết (Hyperosmolar Hyperglycemic State - HHS)</b>:",
        "- Tiêu chuẩn chẩn đoán: <b>Glucose máu > 600 mg/dL (ở đây 1.050 mg/dL) + Áp lực thẩm thấu máu hiệu dụng > 320 mOsm/kg (ở đây 345 mOsm/kg) + Không có toan chuyển hóa (pH > 7,30, HCO3- > 18)</b>.",
        "- Cơ chế: Bệnh nhân ĐTĐ típ 2 vẫn còn một lượng nhỏ insulin nội sinh đủ để ức chế quá trình phân giải mỡ sinh ceton, nhưng không đủ để kiểm soát đường huyết. Lợi niệu thẩm thấu kéo dài làm <b>mất nước cực kỳ nghiêm trọng (ước tính thiếu hụt từ 8 đến 10–12 lít nước)</b>, dẫn đến teo tế bào não và co giật/hôn mê.",
        "- Xử trí cấp cứu: <b>BÙ DỊCH KHỔNG LỒ LÀ BIỆN PHÁP SỐNG CÒN QUAN TRỌNG NHẤT</b> (ban đầu dùng NaCl 0,9% nâng huyết áp, sau đó chuyển sang <b>NaCl 0,45% nửa trương</b> vì Natri hiệu chỉnh rất cao 167 mEq/L) kết hợp <b>Insulin truyền tĩnh mạch liều thấp</b>.",
        "- Tỉ lệ tử vong của HHS cao hơn DKA nhiều lần (10–20% so với <1% của DKA)."
      ],
      wrongs: {
        1: "Co giật ở đây là do tăng ALTT máu và tổn thương chuyển hóa; bù dịch hạ ALTT sẽ hết co giật mà không cần dùng thuốc động kinh đơn độc.",
        2: "NaCl 3% ưu trương chống chỉ định tuyệt đối vì làm ALTT máu tăng vọt gây tử vong ngay lập tức.",
        3: "Bệnh nhân đang hôn mê tụt huyết áp bắt buộc bù dịch tĩnh mạch cấp cứu, uống qua sonde không kịp và nguy cơ trào ngược hít sặc.",
        4: "Lọc máu khi đang thiếu 10 lít dịch sẽ làm sập tuần hoàn tử vong."
      },
      objective:
        "HHS (đường máu > 600 mg/dL, ALTT > 320 mOsm/kg, không toan ceton) gây mất nước cực nặng (8–10 lít); xử trí sống còn là hồi sức bù dịch lượng lớn (NaCl 0,9% đổi sang NaCl 0,45% nếu Na hiệu chỉnh cao) kết hợp Insulin."
    },

    {
      spec: "Nội tiết",
      task: "Lựa chọn thuốc theo khuyến cáo ADA",
      short: "Đái tháo đường típ 2 kèm bệnh tim mạch xơ vữa và suy tim",
      vignette: [
        "Nam 62 tuổi có tiền sử Đái tháo đường típ 2 8 năm, Tăng huyết áp và <b>Nhồi máu cơ tim cũ kèm Suy tim phân suất tống máu giảm (HFrEF, EF 35%)</b>. Bệnh nhân đang dùng Metformin 1.000 mg x 2 lần/ngày, Carvedilol, Sacubitril/Valsartan và Spironolactone.",
        "Khám: Thể trạng béo phì (BMI 32 kg/m²), huyết áp 128/78 mm Hg, không phù.",
        "Xét nghiệm máu: <b>HbA1c 8,4%</b> (mục tiêu < 7,0%), <b>Độ lọc cầu thận eGFR 52 mL/ph/1,73m²</b>, Tỉ số Albumin/Creatinine nước tiểu (uACR) 180 mg/g (tăng bài tiết albumin vi thể)."
      ],
      vitals: [
        ["Nhiệt độ", "36,8 °C"],
        ["Huyết áp", "128/78"],
        ["Mạch", "72 l/ph"],
        ["Nhịp thở", "16 l/ph"]
      ],
      stem: "Theo đồng thuận ADA / KDIGO và ESC mới nhất, nhóm thuốc hạ đường huyết nào là chỉ định bắt buộc ưu tiên hàng đầu phối hợp thêm để vừa kiểm soát đường huyết vừa giảm tái nhập viện do suy tim và bảo vệ thận?",
      choices: [
        "Thuốc ức chế kênh đồng vận chuyển Natri - Glucose 2 (SGLT2 inhibitor: Dapagliflozin hoặc Empagliflozin)",
        "Thuốc nhóm Sulfonylurea thế hệ 2 (Gliclazide hoặc Glimepiride)",
        "Thuốc nhóm Thiazolidinedione (Pioglitazone)",
        "Insulin NPH tiêm dưới da liều cao trước khi đi ngủ",
        "Thuốc ức chế enzym Alpha-glucosidase (Acarbose)"
      ],
      answer: 0,
      why: [
        "Theo khuyến cáo mới nhất của <b>ADA Standards of Care và KDIGO</b>, ở bệnh nhân Đái tháo đường típ 2 có <b>Suy tim (HFrEF/HFpEF) HOẶC Bệnh thận mạn (CKD với eGFR 20–60 hoặc có Albumin niệu)</b>:",
        "1. <b>Thuốc ức chế SGLT2 (SGLT2 inhibitors: Dapagliflozin, Empagliflozin) là CHỈ ĐỊNH ƯU TIÊN BẮT BUỘC HÀNG ĐẦU</b> bất kể mức HbA1c ban đầu là bao nhiêu.",
        "2. Lợi ích chứng minh vượt trội: <b>Giảm 30% tỉ lệ nhập viện vì suy tim, giảm tử vong tim mạch và làm chậm rõ rệt tốc độ suy giảm chức năng thận</b> (nhờ cơ chế giảm tái hấp thu natri-glucose ở ống lượn gần, phục hồi phản hồi cầu - ống thận làm giảm áp lực nội cầu thận).",
        "3. Ngoài ra, nếu bệnh nhân có Bệnh tim mạch do xơ vữa (ASCVD) nổi trội, <b>Thuốc đồng vận thụ thể GLP-1 (GLP-1 RA: Semaglutide, Liraglutide, Dulaglutide)</b> cũng là lựa chọn ưu tiên hàng đầu giúp giảm biến cố mạch vành, đột quỵ và giảm cân mạnh mẽ.",
        "Lưu ý: <b>Pioglitazone (TZD) BỊ CHỐNG CHỈ ĐỊNH TUYỆT ĐỐI trong Suy tim</b> vì gây giữ muối nước làm bùng phát đợt cấp suy tim."
      ],
      wrongs: {
        1: "Sulfonylurea gây nguy cơ hạ đường huyết và tăng cân, không có lợi ích bảo vệ tim mạch hay bảo vệ thận trong suy tim.",
        2: "Pioglitazone (TZD) chống chỉ định tuyệt đối ở bệnh nhân suy tim vì gây ứ dịch phù phổi cấp.",
        3: "Insulin gây tăng cân và tăng nguy cơ hạ đường huyết, không có tác dụng bảo vệ tim thận đặc hiệu như SGLT2i.",
        4: "Acarbose hiệu quả hạ HbA1c yếu và không cải thiện tiên lượng sống còn tim mạch."
      },
      objective:
        "Ở bệnh nhân ĐTĐ típ 2 có kèm Suy tim hoặc Bệnh thận mạn (CKD/Albumin niệu), thuốc ức chế SGLT2 (Dapagliflozin, Empagliflozin) là chỉ định ưu tiên hàng đầu giúp giảm nhập viện do suy tim và bảo vệ thận; chống chỉ định TZD (Pioglitazone) trong suy tim."
    },

    {
      spec: "Nội tiết",
      task: "Bước chẩn đoán phân biệt",
      short: "Hạ đường huyết và phân biệt căn nguyên bằng C-peptide",
      vignette: [
        "Nữ 34 tuổi là điều dưỡng viên, được đưa vào cấp cứu vì vã mồ hôi, run rẩy, lú lẫn và ngất xỉu trong ca trực đêm.",
        "Test nhanh đường mao mạch tại giường: <b>Glucose máu 32 mg/dL (Hạ đường huyết nặng)</b>. Sau khi tiêm tĩnh mạch 50 mL Glucose 30%, bệnh nhân tỉnh táo hoàn toàn (Tam chứng Whipple dương tính). Bệnh nhân phủ nhận tiền sử đái tháo đường hay dùng bất kỳ thuốc nào.",
        "Mẫu máu xét nghiệm lấy đúng vào thời điểm bệnh nhân đang bị hạ đường huyết (Glucose < 50 mg/dL) cho kết quả:",
        "- <b>Insulin huyết thanh: Tăng rất cao (45 mcU/mL)</b> (không bị ức chế).",
        "- <b>C-peptide huyết thanh: Giảm cực thấp / Không phát hiện được (< 0,1 ng/mL)</b>.",
        "- <b>Proinsulin: Bình thường</b>.",
        "- <b>Sàng lọc thuốc hạ đường huyết nhóm Sulfonylurea trong máu và nước tiểu: Âm tính</b>."
      ],
      vitals: [
        ["Nhiệt độ", "36,8 °C"],
        ["Huyết áp", "115/70"],
        ["Mạch", "98 l/ph"],
        ["Nhịp thở", "16 l/ph"]
      ],
      stem: "Căn nguyên nào giải thích chính xác nhất kết quả xét nghiệm hạ đường huyết này?",
      choices: [
        "Tự tiêm Insulin ngoại sinh do rối loạn tâm thần giả bệnh (Factitious Hypoglycemia / Exogenous Insulin injection)",
        "U tiết insulin tuyến tụy (Insulinoma)",
        "Ngộ độc thuốc uống hạ đường huyết Sulfonylurea giấu kín",
        "Hội chứng tự miễn kháng insulin (Bệnh Hirata)",
        "Suy tuyến thượng thận nguyên phát"
      ],
      answer: 0,
      why: [
        "Sinh hóa tổng hợp Insulin nội sinh: Tuyến tụy tổng hợp phân tử <b>Proinsulin</b>, sau đó phân cắt thành <b>Insulin và C-peptide với tỉ lệ đồng phân tử 1:1</b> và cùng được giải phóng vào máu.",
        "Phân biệt các nguyên nhân hạ đường huyết có nồng độ Insulin cao:",
        "1. <b>Tiêm Insulin ngoại sinh (Exogenous Insulin)</b>: Chế phẩm insulin tổng hợp <b>CHỈ CHỨA INSULIN NGUYÊN CHẤT MÀ HOÀN TOÀN KHÔNG CÓ C-PEPTIDE</b>. Nồng độ insulin ngoại sinh cao sẽ ức chế ngược tuyến tụy tiết insulin nội sinh -> <b>Insulin huyết thanh TĂNG CAO trong khi C-PEPTIDE VÀ PROINSULIN GIẢM CỰC THẤP / ÂM TÍNH</b> (thường gặp ở nhân viên y tế hoặc người nhà bệnh nhân đái tháo đường).",
        "2. <b>U tiết Insulin (Insulinoma)</b>: Tăng tiết insulin nội sinh -> <b>Insulin TĂNG + C-peptide TĂNG + Proinsulin TĂNG</b>, sàng lọc Sulfonylurea âm tính.",
        "3. <b>Uống thuốc Sulfonylurea (hoặc Meglitinide)</b>: Thuốc kích thích tế bào beta tụy tiết insulin nội sinh -> <b>Insulin TĂNG + C-peptide TĂNG</b> kèm <b>Sàng lọc Sulfonylurea trong máu/nước tiểu DƯƠNG TÍNH</b>."
      ],
      wrongs: {
        1: "Insulinoma làm tăng đồng thời cả Insulin, C-peptide và Proinsulin; ở đây C-peptide âm tính hoàn toàn.",
        2: "Uống Sulfonylurea làm tăng C-peptide và xét nghiệm sàng lọc thuốc trong nước tiểu phải dương tính.",
        3: "Kháng thể kháng insulin tự miễn có C-peptide tăng cao và hiệu giá kháng thể dương tính.",
        4: "Suy thượng thận có insulin máu thấp thích hợp khi hạ đường huyết."
      },
      objective:
        "Hạ đường huyết do tiêm Insulin ngoại sinh đặc trưng bởi Insulin huyết thanh tăng cao nhưng C-peptide và Proinsulin giảm thấp/âm tính (khác với Insulinoma và ngộ độc Sulfonylurea có cả Insulin và C-peptide cùng tăng)."
    },

    {
      spec: "Nội tiết",
      task: "Bước xử trí cấp cứu",
      short: "Cơn bão giáp trạng (Thyroid Storm)",
      vignette: [
        "Nữ 28 tuổi có tiền sử bệnh Basedow (Graves' disease) tự ý bỏ thuốc kháng giáp 3 tháng nay, vừa trải qua một đợt nhổ răng số 8 bị nhiễm trùng. Bệnh nhân được đưa vào cấp cứu vì sốt cao đùng đùng 40,5 °C, vã mồ hôi đầm đìa, tim đập nhanh dồn dập, nôn mửa tiêu chảy dữ dội và kích động mê sảng.",
        "Khám: Mắt lồi rõ hai bên, tuyến giáp to độ II có tiếng thổi tâm thu liên tục tại bướu giáp. Điện tâm đồ: Rung nhĩ đáp ứng thất rất nhanh 165 l/phút. Huyết áp 150/60 mm Hg.",
        "Điểm số thang điểm Burch-Wartofsky đánh giá bão giáp = <b>65 điểm (Khẳng định Cơn bão giáp / Thyroid Storm)</b>."
      ],
      vitals: [
        ["Nhiệt độ", "40,5 °C"],
        ["Huyết áp", "150/60"],
        ["Mạch", "165 l/ph (rung nhĩ)"],
        ["Nhịp thở", "28 l/ph"]
      ],
      stem: "Thứ tự phối hợp 4 nhóm thuốc điều trị cấp cứu chuẩn xác nhất theo guideline ATA/Endocrine Society là gì?",
      choices: [
        "Thuốc chẹn beta (Propranolol liều cao) + Thuốc kháng giáp tổng hợp liều cao (Propylthiouracil - PTU) + Dung dịch Iod vô cơ (Dung dịch Lugol/SSKI dùng SAU PTU ít nhất 1 giờ) + Corticoid tĩnh mạch (Hydrocortisone)",
        "Dùng dung dịch Iod (Lugol) ngay lập tức trước khi cho uống thuốc kháng giáp",
        "Cho uống Aspirin liều cao để hạ sốt khẩn cấp",
        "Tiêm thuốc kháng giáp Methimazole đơn độc và chuyển về phòng bệnh thường",
        "Chỉ định phẫu thuật cắt toàn bộ tuyến giáp cấp cứu ngay trong đêm"
      ],
      answer: 0,
      why: [
        "<b>Cơn bão giáp trạng (Thyroid Storm)</b> là cấp cứu nội tiết tối khẩn cấp với tỉ lệ tử vong lên tới 20–30%.",
        "Phác đồ điều trị đa tầng theo khuyến cáo <b>ATA (American Thyroid Association)</b>:",
        "1. <b>Thuốc chẹn beta giao cảm</b>: <b>Propranolol tĩnh mạch hoặc uống liều cao</b> (vừa kiểm soát nhịp nhanh/rung nhĩ, vừa có tác dụng ức chế chuyển T4 thành T3 ở ngoại vi).",
        "2. <b>Thuốc kháng giáp tổng hợp (Thionamides)</b>: <b>PTU (Propylthiouracil) được ưu tiên hơn Methimazole trong cơn bão giáp</b> vì PTU vừa ức chế tổng hợp hormone mới vừa ức chế men 5'-deiodinase ngoại vi.",
        "3. <b>Dung dịch Iod vô cơ (Lugol / SSKI / Potassium Iodide)</b>: <b>BẮT BUỘC DÙNG SAU KHI ĐÃ UỐNG PTU ÍT NHẤT 1 GIỜ</b> (hiệu ứng Wolff-Chaikoff ức chế giải phóng hormone giáp; nếu dùng Iod trước khi phong bế tuyến giáp bằng PTU, tuyến giáp sẽ dùng lượng Iod này làm nguyên liệu tổng hợp thêm hormone gây bùng phát bão giáp nặng hơn - hiệu ứng Jod-Basedow).",
        "4. <b>Corticoid đường tĩnh mạch</b>: <b>Hydrocortisone 100 mg mỗi 8 giờ</b> (ức chế chuyển T4 thành T3 và dự phòng suy thượng thận tương đối do tăng chuyển hóa).",
        "5. <b>CHỐNG CHỈ ĐỊNH DÙNG ASPIRIN ĐỂ HẠ SỐT</b>: Aspirin cạnh tranh gắn kết với TBG (Thyroid Binding Globulin) làm đẩy hormone T3/T4 tự do vào máu tăng cao hơn; bắt buộc dùng <b>Paracetamol</b>."
      ],
      wrongs: {
        1: "Dùng dung dịch Iod trước PTU sẽ cung cấp nguyên liệu cho tuyến giáp tổng hợp thêm hormone làm bão giáp bùng nổ tử vong.",
        2: "Aspirin chống chỉ định tuyệt đối vì đẩy T3/T4 tự do ra khỏi protein vận chuyển TBG làm tăng nồng độ hormone tự do trong máu.",
        3: "Methimazole đơn độc không đủ kiểm soát cơn bão giáp và không ức chế chuyển T4 thành T3 nhanh bằng PTU.",
        4: "Phẫu thuật tuyến giáp trong cơn bão giáp có tỉ lệ tử vong chu phẫu gần 100% và bị chống chỉ định tuyệt đối."
      },
      objective:
        "Cơn bão giáp điều trị chuẩn bằng 4 nhóm thuốc: Propranolol + PTU + Dung dịch Lugol (dùng sau PTU ít nhất 1h để tránh hiệu ứng Jod-Basedow) + Hydrocortisone tĩnh mạch; hạ sốt bằng Paracetamol, tuyệt đối tránh dùng Aspirin."
    },

    {
      spec: "Nội tiết",
      task: "Bước xử trí cấp cứu",
      short: "Hôn mê phù niêm (Myxedema Coma)",
      vignette: [
        "Cụ bà 76 tuổi có tiền sử suy giáp tự ý bỏ thuốc Levothyroxine 1 năm nay, được đưa vào cấp cứu vào một ngày mùa đông giá rét trong tình trạng hôn mê, thở chậm nông và phù toàn thân.",
        "Khám: <b>Hạ thân nhiệt nặng 34,2 °C</b>, nhịp tim rất chậm 42 l/phút, huyết áp tụt 80/50 mm Hg, nhịp thở 8 l/phút. Mặt tròn phù niêm không lõm, mi mắt mọng, giọng khàn đặc, phản xạ gân gót pha thư giãn chậm kéo dài (Hung-up reflex).",
        "Xét nghiệm máu khẩn: <b>TSH tăng cực cao > 100 mcIU/mL, Free T4 giảm gần bằng 0</b>, <b>Natri huyết thanh giảm nặng 118 mEq/L (Hạ natri máu)</b>, Đường máu 55 mg/dL. Khí máu động mạch có ứ trệ CO2 toan hô hấp (PaCO2 65 mm Hg)."
      ],
      vitals: [
        ["Nhiệt độ", "34,2 °C"],
        ["Huyết áp", "80/50"],
        ["Mạch", "42 l/ph"],
        ["Nhịp thở", "8 l/ph"]
      ],
      stem: "Phác đồ điều trị cấp cứu hồi sức và thứ tự dùng hormone chuẩn xác nhất là gì?",
      choices: [
        "Hỗ trợ hô hấp (đặt nội khí quản thở máy) + Ủ ấm thụ động + Bắt đầu tiêm tĩnh mạch Hydrocortisone TRƯỚC HOẶC ĐỒNG THỜI với Hormone tuyến giáp tĩnh mạch (Levothyroxine T4 phối hợp Liothyronine T3)",
        "Cho uống Levothyroxine liều cao qua sonde dạ dày đơn độc mà không dùng corticoid",
        "Ủ ấm chủ động bên ngoài bằng chăn điện nhiệt độ cao ngay lập tức",
        "Truyền dung dịch Natri Bicarbonate liều cao đơn độc",
        "Tiêm thuốc co mạch Dopamine liều tối đa đơn độc"
      ],
      answer: 0,
      why: [
        "<b>Hôn mê phù niêm (Myxedema Coma)</b> là biến chứng suy giáp nặng mất bù đe dọa tính mạng (tử vong 30–40%) thường khởi phát sau nhiễm trùng, thời tiết lạnh hoặc dùng thuốc an thần ở người cao tuổi.",
        "Đặc trưng lâm sàng: <b>Tam chứng Hạ thân nhiệt (<35 °C) + Rối loạn tri giác hôn mê + Suy hô hấp nhịp thở chậm/ứ CO2</b> kết hợp nhịp tim chậm, hạ natri máu và hạ đường huyết.",
        "Nguyên tắc xử trí cấp cứu sống còn:",
        "1. <b>Bảo vệ đường thở</b>: Đặt nội khí quản thở máy sớm vì bệnh nhân bị ức chế trung tâm hô hấp và phù nề đường thở trên.",
        "2. <b>Ủ ấm thụ động</b> (dùng chăn thường trong phòng ấm; <b>tránh ủ ấm chủ động bằng nhiệt bên ngoài</b> vì gây giãn mạch ngoại vi đột ngột làm sụp huyết áp và sốc).",
        "3. <b>BẮT BUỘC TIÊM HYDROCORTISONE TĨNH MẠCH TRƯỚC KHI TRUYỀN LEVOTHYROXINE</b>: Bệnh nhân suy giáp nặng thường có suy thượng thận thứ phát tiềm tàng. Nếu bù hormone giáp trước, tốc độ chuyển hóa toàn thân tăng vọt sẽ làm cạn kiệt lượng cortisol ít ỏi còn lại, đẩy bệnh nhân vào <b>Cơn suy thượng thận cấp (Adrenal Crisis) gây ngừng tim tử vong ngay lập tức</b>.",
        "4. <b>Hormone giáp tĩnh mạch</b>: Nạp liều cao Levothyroxine (T4) 200–400 mcg tĩnh mạch phối hợp Liothyronine (T3) tĩnh mạch."
      ],
      wrongs: {
        1: "Bù hormone giáp đơn thuần mà không có Hydrocortisone sẽ kích hoạt cơn suy thượng thận cấp tử vong tức thì.",
        2: "Ủ ấm chủ động bằng chăn điện gây giãn mạch ngoại vi đột ngột làm tụt huyết áp sốc không hồi phục.",
        3: "Bicarbonate không giải quyết được nguyên nhân ức chế hô hấp do thiếu hormone giáp.",
        4: "Thuốc co mạch không có hiệu quả khi thụ thể catecholamine chưa được kích hoạt bởi hormone giáp và cortisol."
      },
      objective:
        "Hôn mê phù niêm (hạ thân nhiệt, nhịp chậm, suy hô hấp, hạ Na) bắt buộc tiêm Hydrocortisone tĩnh mạch trước hoặc đồng thời với Levothyroxine tĩnh mạch để phòng ngừa suy thượng thận cấp tử vong; chỉ ủ ấm thụ động."
    },

    {
      spec: "Nội tiết",
      task: "Bước chẩn đoán và lựa chọn điều trị",
      short: "Bệnh Basedow (Graves' Disease) và bệnh mắt nội tiết",
      vignette: [
        "Nữ 30 tuổi đến khám vì sụt 6 kg trong 2 tháng dù ăn rất nhiều, hồi hộp đánh trống ngực, sợ nóng vã mồ hôi, run tay và mắt lồi to dần gây cộm xốn nhìn đôi.",
        "Khám: Tuyến giáp to lan tỏa độ II, mềm mịn, nghe có tiếng thổi tâm thu liên tục ở hai cực trên tuyến giáp. <b>Lồi mắt hai bên (Exophthalmos), co rút cơ nâng mi mắt và phù niêm trước xương chày (Pretibial myxedema)</b>.",
        "Xét nghiệm: <b>TSH giảm < 0,01 mcIU/mL, Free T4 tăng cao 48 pmol/L</b>. Kháng thể kháng thụ thể TSH (<b>TRAb / TSI - Thyroid Stimulating Immunoglobulin</b>) dương tính mạnh 18 IU/L (bình thường < 1,5). Xạ hình tuyến giáp bằng Iod phóng xạ (RAIU): <b>Tuyến giáp tăng bắt xạ lan tỏa đồng nhất toàn bộ hai thùy (Diffuse homogenous uptake)</b>."
      ],
      vitals: [
        ["Nhiệt độ", "37,4 °C"],
        ["Huyết áp", "145/65 (áp lực mạch rộng)"],
        ["Mạch", "112 l/ph"],
        ["Nhịp thở", "18 l/ph"]
      ],
      stem: "Phương pháp điều trị nào sau đây bị CHỐNG CHỈ ĐỊNH hoặc cần thận trọng tối đa vì có nguy cơ làm nặng thêm bệnh mắt Basedow (Graves' Orbitopathy)?",
      choices: [
        "Điều trị bằng Iod phóng xạ I-131 đơn độc (Radioactive Iodine Ablation)",
        "Thuốc kháng giáp tổng hợp Methimazole đường uống",
        "Thuốc chẹn beta giao cảm Propranolol",
        "Phẫu thuật cắt gần toàn bộ tuyến giáp",
        "Corticoid đường tĩnh mạch liều cao (Methylprednisolone)"
      ],
      answer: 0,
      why: [
        "Bệnh nhân có <b>Bệnh Basedow (Graves' Disease)</b> điển hình: Bướu giáp mạch lan tỏa, bướu lồi mắt (Graves' Ophthalmopathy), phù niêm trước xương chày, <b>kháng thể kích thích thụ thể TSH (TSI/TRAb) dương tính</b> và xạ hình RAIU tăng bắt xạ lan tỏa đồng nhất.",
        "Đặc điểm điều trị quan trọng về <b>Bệnh mắt Basedow</b>:",
        "- <b>ĐIỀU TRỊ BẰNG IOD PHÓNG XẠ I-131 ĐƠN ĐỘC CÓ NGUY CƠ LÀM NẶNG THÊM RÕ RỆT BỆNH MẮT BASEDOW</b>: Tia xạ làm phá hủy tế bào tuyến giáp giải phóng ồ ạt kháng nguyên TSH-R vào máu, làm tăng sinh kháng thể TRAb tấn công thụ thể TSH và IGF-1R trên nguyên bào sợi hốc mắt, gây viêm phù nề và lồi mắt nặng nề hơn (thậm chí mất thị lực).",
        "- Nếu bệnh nhân có bệnh mắt mức độ vừa-nặng đang hoạt động: <b>Ưu tiên điều trị bằng Thuốc kháng giáp tổng hợp (Methimazole) HOẶC Phẫu thuật cắt tuyến giáp</b>; nếu bắt buộc dùng I-131 thì phải <b>dùng kèm Corticoid toàn thân dự phòng</b>.",
        "- Phụ nữ mang thai 3 tháng đầu ưu tiên dùng <b>PTU</b> (do Methimazole có nguy cơ gây dị tật teo lỗ mũi sau / bất sản da đầu); từ tam cá nguyệt 2 trở đi đổi sang <b>Methimazole</b> để tránh độc gan của PTU."
      ],
      wrongs: {
        1: "Methimazole không làm nặng bệnh mắt và là thuốc kháng giáp đầu tay chuẩn ở người lớn không mang thai 3 tháng đầu.",
        2: "Propranolol giúp kiểm soát nhanh triệu chứng giao cảm tim nhanh run tay.",
        3: "Phẫu thuật cắt tuyến giáp không làm tăng TRAb và không làm nặng bệnh mắt.",
        4: "Corticoid truyền tĩnh mạch là điều trị chuẩn cho bệnh mắt Basedow thể hoạt động mức độ nặng."
      },
      objective:
        "Điều trị Iod phóng xạ I-131 có nguy cơ làm nặng thêm bệnh mắt Basedow do kích hoạt giải phóng kháng thể TRAb; ở bệnh nhân có bệnh mắt hoạt động ưu tiên dùng Methimazole hoặc Phẫu thuật, hoặc phải dùng kèm Corticoid dự phòng nếu dùng I-131."
    },

    {
      spec: "Nội tiết",
      task: "Bước chẩn đoán và điều trị",
      short: "Viêm giáp bán cấp De Quervain sau nhiễm virus",
      vignette: [
        "Nữ 36 tuổi đến khám vì <b>đau dữ dội ở vùng cổ trước lan lên hàm dưới và hai tai 1 tuần nay, nuốt đau và quay đầu đau</b>. Hai tuần trước bệnh nhân có sốt, đau họng và viêm đường hô hấp trên.",
        "Khám: <b>Tuyến giáp to nhẹ, mật độ chắc và ẤN ĐAU CHÓI DỮ DỘI (Exquisitely tender thyroid gland)</b>. Bệnh nhân có run tay nhẹ và tim nhanh 98 l/phút.",
        "Xét nghiệm máu: <b>Tốc độ lắng máu (ESR) tăng rất cao 92 mm/h, CRP 45 mg/L</b>. TSH giảm thấp 0,05 mcIU/mL, Free T4 tăng cao (giai đoạn nhiễm độc giáp thoáng qua). <b>Độ tập trung Iod phóng xạ tại tuyến giáp (RAIU 24h) giảm gần bằng 0 (Very low / undetectable RAIU < 1%)</b>."
      ],
      vitals: [
        ["Nhiệt độ", "37,8 °C"],
        ["Huyết áp", "125/75"],
        ["Mạch", "98 l/ph"],
        ["Nhịp thở", "16 l/ph"]
      ],
      stem: "Chẩn đoán xác định và thuốc điều trị đầu tay để giảm đau và chống viêm là gì?",
      choices: [
        "Viêm giáp bán cấp dạng u hạt (De Quervain's / Subacute Granulomatous Thyroiditis); điều trị giảm đau bằng NSAID liều cao (như Ibuprofen) hoặc Corticoid đường uống (Prednisone)",
        "Viêm giáp mủ cấp do vi khuẩn; điều trị bằng phẫu thuật rạch tháo mủ cấp cứu",
        "Bệnh Basedow khởi phát; điều trị bằng thuốc kháng giáp Methimazole liều cao",
        "Ung thư tuyến giáp thể tủy; phẫu thuật cắt tuyến giáp toàn phần",
        "Viêm tuyến giáp Hashimoto; bắt buộc bổ sung Levothyroxine ngay lập tức"
      ],
      answer: 0,
      why: [
        "Bệnh cảnh kinh điển của <b>Viêm tuyến giáp bán cấp De Quervain (Subacute Granulomatous Thyroiditis / De Quervain's Thyroiditis)</b>:",
        "- Bệnh sử: Xuất hiện sau một đợt <b>nhiễm virus đường hô hấp trên</b> (Coxsackie, Adenovirus, Cúm).",
        "- Dấu hiệu lâm sàng đặc trưng kinh điển số một: <b>TUYẾN GIÁP SƯNG TO VÀ ẤN ĐAU CHÓI DỮ DỘI (Tender thyroid gland) LAN LÊN GÓC HÀM VÀ TAI</b>.",
        "- Cận lâm sàng đặc trưng: <b>Tốc độ lắng máu (ESR) tăng rất cao (> 50–100 mm/h)</b> + Tình trạng nhiễm độc giáp thoáng qua do vỡ các nang giáp giải phóng hormone có sẵn vào máu.",
        "- Chẩn đoán phân biệt vàng: <b>Độ tập trung Iod phóng xạ (RAIU) GIẢM RẤT THẤP (< 1–3%)</b> do các tế bào nang giáp bị viêm tổn thương không còn khả năng bắt giữ iod (khác hoàn toàn với bệnh Basedow có RAIU tăng cao lan tỏa).",
        "Tiến triển tự khỏi theo 3 giai đoạn: Nhiễm độc giáp -> Suy giáp thoáng qua -> Bình giáp hoàn toàn sau vài tháng.",
        "Điều trị: <b>NSAID liều cao (Ibuprofen, Aspirin)</b> cho thể nhẹ-vừa; <b>Corticoid uống (Prednisone 40 mg/ngày)</b> cho thể đau nhiều sốt cao. Thuốc chẹn beta (Propranolol) kiểm soát tim nhanh. <b>KHÔNG DÙNG THUỐC KHÁNG GIÁP (Methimazole/PTU)</b> vì tuyến giáp không tăng tổng hợp hormone mới."
      ],
      wrongs: {
        1: "Viêm giáp mủ cấp do vi khuẩn (hiếm gặp, do rò xoang lê) có áp xe hóa mủ khu trú 1 bên sốt cao rét run, không phải viêm giáp bán cấp toàn bộ 2 thùy sau virus.",
        2: "Thuốc kháng giáp hoàn toàn không có tác dụng vì cơ chế là vỡ nang giải phóng hormone cũ chứ không phải tăng tổng hợp mới.",
        3: "Ung thư giáp thường là nhân giáp cứng chắc không đau, không sốt tăng ESR cao sau nhiễm virus.",
        4: "Giai đoạn đầu đang nhiễm độc giáp, không được dùng Levothyroxine."
      },
      objective:
        "Viêm giáp bán cấp De Quervain (sau nhiễm virus, tuyến giáp đau chói, ESR tăng rất cao, RAIU giảm gần bằng 0); điều trị bằng NSAID hoặc Corticoid để chống viêm giảm đau, không dùng thuốc kháng giáp tổng hợp."
    },

    {
      spec: "Nội tiết",
      task: "Bước xử trí cấp cứu",
      short: "Cơn suy tuyến thượng thận cấp (Adrenal Crisis)",
      vignette: [
        "Nam 38 tuổi có tiền sử bệnh Addison (Suy thượng thận nguyên phát tự miễn) đang điều trị Hydrocortisone và Fludrocortisone. Bệnh nhân bị sốt cao nôn ói và tiêu chảy cấp do ngộ độc thức ăn 2 ngày nay nhưng không tăng liều thuốc.",
        "Bệnh nhân được đưa vào cấp cứu trong tình trạng lơ mơ, da sạm đen ở các nếp gấp bàn tay và niêm mạc má, thở nhanh, da tái lạnh vã mồ hôi. <b>Huyết áp tụt sâu 75/40 mm Hg không đáp ứng sau khi đã truyền 1.500 mL NaCl 0,9%</b>.",
        "Xét nghiệm máu khẩn: <b>Natri máu giảm thấp 124 mEq/L (Hạ natri máu)</b>, <b>Kali máu tăng cao 6,2 mEq/L (Tăng kali máu)</b>, Glucose máu giảm 52 mg/dL (Hạ đường huyết), BUN/Creatinine tăng cao."
      ],
      vitals: [
        ["Nhiệt độ", "38,5 °C"],
        ["Huyết áp", "75/40"],
        ["Mạch", "122 l/ph"],
        ["Nhịp thở", "24 l/ph"]
      ],
      stem: "Bước can thiệp cấp cứu sống còn quyết định hàng đầu cần thực hiện NGAY LẬP TỨC là gì?",
      choices: [
        "Tiêm tĩnh mạch Hydrocortisone 100 mg Bolus ngay lập tức (sau đó 50–100 mg mỗi 6 giờ) kết hợp Hồi sức bù dịch NaCl 0,9% và Glucose 5%",
        "Chờ làm nghiệm pháp kích thích bằng ACTH (Synacthen test) trong 60 phút rồi mới tiêm thuốc",
        "Tiêm tĩnh mạch Furosemide để hạ kali máu khẩn cấp",
        "Dùng thuốc vận mạch Noradrenaline liều cao đơn độc mà không dùng corticoid",
        "Cho bệnh nhân uống viên Fludrocortisone liều gấp đôi"
      ],
      answer: 0,
      why: [
        "Bệnh nhân bị <b>Cơn suy tuyến thượng thận cấp (Acute Adrenal Crisis)</b> - cấp cứu tối khẩn cấp do thiếu hụt Cortisol và Aldosterone tuyệt đối trong bối cảnh stress nhiễm trùng cấp tính (ngộ độc thức ăn).",
        "Đặc trưng lâm sàng và sinh hóa kinh điển:",
        "- <b>Sốc tụt huyết áp kháng trị với bù dịch và vận mạch</b> (do mất tác dụng hiệp đồng của cortisol lên trương lực co mạch của catecholamine).",
        "- Bộ ba điện giải: <b>Hạ Natri máu + Tăng Kali máu + Hạ Glucose máu</b>.",
        "- Tăng sắc tố da niêm mạc (Hyperpigmentation) do ACTH và MSH tăng cao phản ứng bù trừ trong suy thượng thận nguyên phát.",
        "Xử trí tối khẩn sống còn: <b>TIÊM TĨNH MẠCH HYDROCORTISONE 100 MG NGAY LẬP TỨC</b> (không được trì hoãn để làm xét nghiệm chẩn đoán vì sẽ khiến bệnh nhân ngừng tim tử vong). Hydrocortisone liều 100 mg vừa cung cấp hoạt tính Glucocorticoid mạnh vừa có hoạt tính Mineralocorticoid giữ muối nước (không cần bổ sung thêm Fludrocortisone trong giai đoạn cấp) + Bù dịch NaCl 0,9% và Glucose 5%."
      ],
      wrongs: {
        1: "Trì hoãn điều trị để làm test chẩn đoán trên bệnh nhân đang sốc tụt huyết áp là sai lầm chết người kinh điển.",
        2: "Lợi tiểu làm giảm thể tích tuần hoàn và làm tụt huyết áp sập tuần hoàn tử vong.",
        3: "Vận mạch không thể co mạch hiệu quả nếu thiếu Cortisol.",
        4: "Bệnh nhân đang nôn ói và sốc nặng, thuốc uống không hấp thu được."
      },
      objective:
        "Cơn suy thượng thận cấp (sốc tụt huyết áp kháng dịch, hạ Na, tăng K, hạ đường huyết) đòi hỏi tiêm tĩnh mạch Hydrocortisone 100 mg ngay lập tức kết hợp bù dịch NaCl 0,9% và Glucose; tuyệt đối không trì hoãn để làm xét nghiệm."
    },

    {
      spec: "Nội tiết",
      task: "Bước chẩn đoán và định vị",
      short: "Hội chứng Cushing và thuật toán chẩn đoán nguyên nhân",
      vignette: [
        "Nữ 38 tuổi đến khám vì tăng 12 kg trong 6 tháng, mặt tròn như mặt trăng (Moon facies), tích tụ mỡ ở vùng gáy (Gù trâu - Buffalo hump) và béo bụng trung tâm trong khi hai tay hai chân teo nhỏ và yếu cơ gốc chi.",
        "Khám: <b>Nhiều vết rạn da màu tím đỏ rộng > 1 cm ở bụng và đùi (Purple striae)</b>, rậm lông mặt, nhiều vết bầm tím tự nhiên trên da mỏng. Huyết áp 155/95 mm Hg.",
        "Các xét nghiệm sàng lọc bước 1 khẳng định Hội chứng Cushing (Tăng cortisol tự do trong nước tiểu 24h gấp 4 lần và Cortisol huyết tương lúc 8h sáng sau Test ức chế Dexamethasone liều thấp 1mg qua đêm không ức chế được = 16 mcg/dL, bình thường < 1,8).",
        "Xét nghiệm bước 2: <b>Nồng độ ACTH huyết tương tăng cao 85 pg/mL (Hội chứng Cushing phụ thuộc ACTH)</b>. Tiến hành <b>Test ức chế Dexamethasone liều cao (8 mg qua đêm): Nồng độ Cortisol huyết thanh GIẢM ĐƯỢC TRÊN 50% so với ban đầu (bị ức chế thành công)</b>."
      ],
      vitals: [
        ["Nhiệt độ", "36,8 °C"],
        ["Huyết áp", "155/95"],
        ["Mạch", "78 l/ph"],
        ["Nhịp thở", "16 l/ph"]
      ],
      stem: "Căn nguyên chính xác của hội chứng Cushing ở bệnh nhân này là gì và phương tiện hình ảnh học bước tiếp theo cần làm là gì?",
      choices: [
        "Bệnh Cushing (Cushing Disease) do U tuyến yên tăng tiết ACTH (Corticotroph adenoma); bước tiếp theo là Chụp cộng hưởng từ tuyến yên (Pituitary MRI có tiêm đối quang từ)",
        "U vỏ thượng thận tăng tiết Cortisol tự chủ (Adrenal adenoma); chụp CT tuyến thượng thận",
        "Hội chứng tiết ACTH lạc chỗ do Ung thư phổi tế bào nhỏ (SCLC); chụp CT ngực",
        "Hội chứng Cushing ngoại sinh do lạm dụng thuốc Corticoid",
        "U tủy thượng thận Pheochromocytoma"
      ],
      answer: 0,
      why: [
        "Thuật toán tiếp cận chẩn đoán Hội chứng Cushing chuẩn quốc tế:",
        "1. <b>Bước 1: Khẳng định hội chứng Cushing (Tăng cortisol máu tự do)</b>: Dùng ít nhất 2 trong 3 test (Cortisol tự do nước tiểu 24h, Cortisol nước bọt ban đêm, Test ức chế Dexamethasone liều thấp 1mg).",
        "2. <b>Bước 2: Định lượng nồng độ ACTH huyết tương</b>:",
        "- Nếu ACTH giảm thấp (< 5 pg/mL) -> <b>Không phụ thuộc ACTH</b> (U vỏ thượng thận -> chụp CT thượng thận).",
        "- Nếu ACTH tăng cao (> 15–20 pg/mL) -> <b>Phụ thuộc ACTH</b> (tiến sang Bước 3).",
        "3. <b>Bước 3: Phân biệt Bệnh Cushing (U tuyến yên) vs Tiết ACTH lạc chỗ (U ngoài tuyến yên như SCLC)</b>:",
        "- <b>Bệnh Cushing do u tuyến yên</b>: Các tế bào u tuyến yên vẫn còn bảo tồn một phần cơ chế ức chế điều hòa ngược âm tính -> <b>Test Dexamethasone LIỀU CAO (8 mg) làm Cortisol GIẢM > 50%</b> (và Test kích thích CRH làm ACTH tăng vọt).",
        "- <b>Tiết ACTH lạc chỗ (Ectopic ACTH như ung thư phổi)</b>: Hoàn toàn không chịu sự điều hòa ngược -> Test Dexamethasone liều cao KHÔNG ỨC CHẾ ĐƯỢC (Cortisol không giảm).",
        "-> Kết luận bệnh nhân bị <b>Bệnh Cushing (Cushing's Disease) do U tuyến yên</b>; bước tiếp theo là <b>Chụp MRI tuyến yên</b> để định vị khối u và phẫu thuật cắt u qua xoang bướm (Transsphenoidal surgery)."
      ],
      wrongs: {
        1: "U vỏ thượng thận có nồng độ ACTH bị ức chế giảm gần bằng 0.",
        2: "Tiết ACTH lạc chỗ do ung thư phổi không bị ức chế bởi Dexamethasone liều cao 8mg.",
        3: "Cushing do thuốc ngoại sinh có nồng độ ACTH và Cortisol nội sinh đều giảm thấp.",
        4: "Pheochromocytoma tiết catecholamine gây cơn tăng huyết áp tim nhanh, không gây rạn da tím và mặt tròn."
      },
      objective:
        "Thuật toán Cushing: ACTH cao + Test Dexamethasone liều cao 8mg ức chế được Cortisol > 50% khẳng định Bệnh Cushing do u tuyến yên; chỉ định chụp MRI tuyến yên và phẫu thuật nội soi qua xoang bướm."
    },

    {
      spec: "Nội tiết",
      task: "Bước chẩn đoán và điều trị",
      short: "Hội chứng Conn (Cường Aldosterone nguyên phát)",
      vignette: [
        "Nam 44 tuổi đến khám vì tăng huyết áp kháng trị (huyết áp 165/100 mm Hg dù đang phối hợp 3 thuốc hạ áp gồm Amlodipine, Valsartan và Metoprolol) kèm mệt mỏi và yếu cơ hai chân từng đợt.",
        "Xét nghiệm máu: <b>Kali huyết thanh giảm thấp 2,9 mEq/L (Hạ kali máu tự phát)</b>, Natri 144 mEq/L, Bicarbonate máu tăng 31 mEq/L (Kiềm chuyển hóa).",
        "Xét nghiệm sàng lọc nội tiết chuyên sâu: <b>Nồng độ Aldosterone huyết tương (PAC) tăng cao 38 ng/dL</b>, <b>Hoạt độ Renin huyết tương (PRA) bị ức chế giảm thấp 0,4 ng/mL/h</b> -> <b>Tỉ số Aldosterone/Renin (ARR) = 95</b> (tiêu chuẩn sàng lọc dương tính khi ARR > 20–30)."
      ],
      vitals: [
        ["Nhiệt độ", "36,8 °C"],
        ["Huyết áp", "165/100"],
        ["Mạch", "76 l/ph"],
        ["Nhịp thở", "16 l/ph"]
      ],
      stem: "Cơ chế sinh lý bệnh và nhóm thuốc điều trị nội khoa đặc hiệu kháng thụ thể là gì?",
      choices: [
        "Tăng tiết Aldosterone tự chủ nguyên phát từ vỏ thượng thận gây tăng tái hấp thu Natri và tăng bài xuất Kali/H+ tại ống lượn xa; điều trị bằng Thuốc kháng thụ thể Mineralocorticoid (Spironolactone hoặc Eplerenone)",
        "Hẹp động mạch thận gây cường Aldosterone thứ phát; điều trị bằng thuốc ức chế men chuyển",
        "U tủy thượng thận; điều trị bằng thuốc chẹn alpha",
        "Suy thận mạn giai đoạn cuối; điều trị bằng chạy thận nhân tạo",
        "Hội chứng Cushing; điều trị bằng Ketoconazole"
      ],
      answer: 0,
      why: [
        "Bệnh cảnh kinh điển của <b>Cường Aldosterone nguyên phát (Primary Hyperaldosteronism / Hội chứng Conn)</b>:",
        "- Biểu hiện: <b>Tăng huyết áp kháng trị + Hạ kali máu tự phát (hoặc sau dùng lợi tiểu nhẹ) + Kiềm chuyển hóa</b>.",
        "- Cơ chế: U vỏ thượng thận tiết Aldosterone (Conn adenoma) hoặc Tăng sản tuyến thượng thận hai bên tự chủ kích thích bơm ENaC và H+/K+-ATPase ở tế bào chính ống góp thận -> <b>Tăng tái hấp thu Na+ giữ nước (gây tăng HA nhưng không phù do hiện tượng thoát Aldosterone) VÀ Tăng bài tiết K+, H+ vào nước tiểu (gây hạ Kali máu và kiềm chuyển hóa)</b>.",
        "- Thể tích nội mạch tăng làm <b>ỨC CHẾ TIẾT RENIN TỪ BỘ MÁY CẠNH CẦU THẬN -> Tỉ số PAC/PRA (ARR) TĂNG CAO > 20–30</b> (phân biệt với Hẹp động mạch thận có Renin TĂNG CAO).",
        "- Điều trị: <b>Thuốc đối kháng thụ thể Mineralocorticoid (MRA: Spironolactone hoặc Eplerenone)</b> nếu do tăng sản hai bên; <b>Phẫu thuật nội soi cắt tuyến thượng thận mang u</b> nếu do u một bên (sau khi làm nghiệm pháp lấy mẫu máu tĩnh mạch thượng thận AVS để phân định bên tổn thương)."
      ],
      wrongs: {
        1: "Hẹp động mạch thận gây cường Aldosterone THỨ PHÁT có Renin máu tăng rất cao (ARR < 10); ở đây Renin bị ức chế hoàn toàn.",
        2: "Pheochromocytoma tiết catecholamine không làm tăng chọn lọc Aldosterone có Renin ức chế.",
        3: "Suy thận mạn thường gây tăng kali máu và toan chuyển hóa, không gây hạ kali máu kiềm chuyển hóa.",
        4: "Không có các triệu chứng lâm sàng của hội chứng Cushing."
      },
      objective:
        "Cường Aldosterone nguyên phát (Conn: tăng HA kháng trị, hạ Kali máu, kiềm chuyển hóa, tỉ số Aldosterone/Renin ARR > 20); điều trị bằng Spironolactone/Eplerenone hoặc phẫu thuật cắt u thượng thận nội soi."
    },

    {
      spec: "Nội tiết",
      task: "Bước chẩn đoán và chuẩn bị phẫu thuật",
      short: "U tủy thượng thận (Pheochromocytoma) - Chẹn Alpha trước chẹn Beta sau",
      vignette: [
        "Nam 42 tuổi đến khám vì các cơn kịch phát xuất hiện 2–3 lần mỗi tuần: <b>đau đầu dữ dội như búa bổ, vã mồ hôi ướt đẫm áo, hồi hộp đánh trống ngực tim đập thình thịch và cảm giác lo âu hoảng sợ tột độ (Tam chứng kinh điển 5P)</b>. Sau cơn bệnh nhân mệt lả và đi tiểu nhiều.",
        "Khám TRONG CƠN: Da tái nhợt, run đầu chi, <b>huyết áp tăng vọt 220/120 mm Hg, mạch 130 l/phút</b>. Ngoài cơn huyết áp hoàn toàn bình thường 120/80 mm Hg.",
        "Xét nghiệm nội tiết: <b>Nồng độ Metanephrines và Normetanephrines tự do trong huyết tương tăng gấp 5 lần giới hạn trên</b> (kết hợp Metanephrines nước tiểu 24h tăng cao). Chụp CT ổ bụng: <b>Khối u tủy thượng thận bên phải kích thước 4,5 cm ngấm thuốc cản quang không đồng nhất</b>."
      ],
      vitals: [
        ["Nhiệt độ", "37,2 °C"],
        ["Huyết áp trong cơn", "220/120"],
        ["Mạch trong cơn", "130 l/ph"],
        ["Nhịp thở", "22 l/ph"]
      ],
      stem: "Nguyên tắc chuẩn bị thuốc điều trị nội khoa bắt buộc trước khi tiến hành phẫu thuật cắt bỏ khối u là gì?",
      choices: [
        "Bắt đầu bằng Thuốc chẹn thụ thể Alpha-adrenergic (Phenoxybenzamine hoặc Doxazosin) trước trong 10–14 ngày; CHỈ DÙNG THUỐC CHẸN BETA SAU KHI ĐÃ ĐẠT PHONG BẾ ALPHA ĐẦY ĐỦ",
        "Dùng thuốc chẹn Beta (Propranolol) đơn độc liều cao ngay từ đầu",
        "Tiến hành phẫu thuật cắt u cấp cứu ngay mà không cần chuẩn bị thuốc",
        "Dùng thuốc ức chế men chuyển Enalapril đơn độc",
        "Chỉ định xạ trị khối u thượng thận"
      ],
      answer: 0,
      why: [
        "Bệnh cảnh kinh điển của <b>U tủy thượng thận (Pheochromocytoma)</b> xuất phát từ tế bào ưa crom (Chromaffin cells) tủy thượng thận tiết quá mức Catecholamine (Epinephrine và Norepinephrine).",
        "Tam chứng kinh điển: <b>Cơn đau đầu kịch phát (Headache) + Vã mồ hôi nhiều (Sweating) + Tim nhanh hồi hộp (Tachycardia)</b> trên nền tăng huyết áp kịch phát.",
        "Chẩn đoán xác định: <b>Định lượng Metanephrines tự do huyết tương</b> (độ nhạy >97%) hoặc Metanephrines nước tiểu 24h.",
        "<b>NGUYÊN TẮC VÀNG TRONG CHUẨN BỊ PHẪU THUẬT: CHẸN ALPHA TRƯỚC, CHẸN BETA SAU (ALPHA-BLOCKADE BEFORE BETA-BLOCKADE)</b>:",
        "- Bắt buộc dùng <b>Thuốc chẹn alpha không hồi phục (Phenoxybenzamine) hoặc chẹn alpha-1 chọn lọc (Doxazosin) trong ít nhất 10–14 ngày trước mổ</b> để giãn mạch kiểm soát huyết áp và bù đủ thể tích nội mạch.",
        "- <b>TUYỆT ĐỐI KHÔNG DÙNG CHẸN BETA ĐƠN ĐỘC HOẶC DÙNG TRƯỚC CHẸN ALPHA</b>: Vì nếu chẹn thụ thể Beta-2 (thụ thể gây giãn mạch), lượng Catecholamine khổng lồ trong máu sẽ tác động hoàn toàn không đối kháng lên thụ thể Alpha-1 gây <b>co thắt mạch máu toàn thân cực độ (Unopposed Alpha-agonist effect), dẫn đến cơn tăng huyết áp kịch phát ác tính, phù phổi cấp và đột quỵ tử vong</b>.",
        "- Thuốc chẹn beta chỉ được thêm vào sau 2–3 ngày phong bế alpha để điều trị nhịp nhanh."
      ],
      wrongs: {
        1: "Chẹn beta đơn độc trước chẹn alpha là sai lầm chết người kinh điển trong USMLE vì gây co mạch không đối kháng đẩy huyết áp lên mức tử vong.",
        2: "Phẫu thuật khi chưa chuẩn bị chẹn alpha sẽ gây bão catecholamine khi phẫu thuật viên chạm vào u dẫn đến ngừng tim trên bàn mổ.",
        3: "Ức chế men chuyển không phong bế được tác dụng trực tiếp của catecholamine lên mạch máu.",
        4: "Pheochromocytoma là khối u phẫu thuật triệt căn, không dùng xạ trị đơn thuần."
      },
      objective:
        "Pheochromocytoma chẩn đoán bằng Metanephrines huyết tương/niệu; chuẩn bị phẫu thuật BẮT BUỘC dùng Chẹn Alpha (Phenoxybenzamine) trước ít nhất 10-14 ngày, chỉ thêm Chẹn Beta sau khi đã phong bế alpha đầy đủ để tránh co mạch không đối kháng tử vong."
    },

    {
      spec: "Nội tiết",
      task: "Bước chẩn đoán phân biệt",
      short: "Đái tháo nhạt trung ương sau mổ u tuyến yên",
      vignette: [
        "Nam 26 tuổi vừa trải qua phẫu thuật nội soi qua xoang bướm cắt bỏ khối u tuyến yên (Craniopharyngioma) cách đây 2 ngày. Bệnh nhân đột ngột xuất hiện <b>tiểu nhiều dữ dội với thể tích nước tiểu lên tới 7,5 lít/24 giờ kèm khát nước liên tục, thích uống nước đá lạnh</b>.",
        "Xét nghiệm máu và nước tiểu:",
        "- <b>Natri huyết thanh tăng 148 mEq/L</b>, Áp lực thẩm thấu huyết tương tăng 305 mOsm/kg.",
        "- <b>Áp lực thẩm thấu nước tiểu giảm rất thấp 110 mOsm/kg</b> (Nước tiểu bị pha loãng không thích hợp < 300 mOsm/kg, tỉ trọng nước tiểu 1.002).",
        "Tiến hành <b>Nghiệm pháp tiêm thử nghiệm Desmopressin (dDAVP Test)</b>: Sau khi tiêm 2 mcg dDAVP dưới da, <b>Áp lực thẩm thấu nước tiểu tăng vọt lên 520 mOsm/kg (Tăng > 100% so với ban đầu)</b> và thể tích nước tiểu giảm rõ rệt."
      ],
      vitals: [
        ["Nhiệt độ", "36,8 °C"],
        ["Huyết áp", "118/74"],
        ["Mạch", "80 l/ph"],
        ["Nhịp thở", "16 l/ph"]
      ],
      stem: "Chẩn đoán xác định và phương pháp điều trị duy trì lâu dài thích hợp nhất là gì?",
      choices: [
        "Đái tháo nhạt trung ương (Central Diabetes Insipidus) do tổn thương giải phóng ADH từ thùy sau tuyến yên; điều trị duy trì bằng Desmopressin (dDAVP) đường xịt mũi hoặc uống",
        "Đái tháo nhạt do thận (Nephrogenic DI); điều trị bằng thuốc lợi tiểu Thiazide",
        "Hội chứng cuồng uống tâm căn (Primary Psychogenic Polydipsia); điều trị bằng hạn chế nước",
        "Đái tháo đường mất kiểm soát; điều trị bằng Insulin",
        "Hội chứng mất muối do não (Cerebral Salt Wasting); điều trị bằng truyền NaCl 3%"
      ],
      answer: 0,
      why: [
        "Bệnh nhân có <b>Đái tháo nhạt trung ương (Central Diabetes Insipidus - CDI)</b> - biến chứng rất phổ biến sau phẫu thuật vùng tuyến yên - cuống tuyến yên.",
        "Cơ chế: Tổn thương thùy sau tuyến yên / nhân trên thị và nhân cạnh não thất vùng dưới đồi làm <b>mất khả năng tổng hợp và bài tiết hormone chống bài niệu ADH (Vasopressin)</b> -> Ống lượn xa và ống góp không thể tái hấp thu nước -> <b>Đa niệu nước tiểu loãng (ALTT niệu < 300 mOsm/kg) + Tăng ALTT máu và tăng natri máu</b>.",
        "Phân biệt giữa <b>Đái tháo nhạt trung ương (Central DI)</b> và <b>Đái tháo nhạt do thận (Nephrogenic DI)</b> bằng <b>Nghiệm pháp tiêm Desmopressin (dDAVP test)</b>:",
        "- <b>Đái tháo nhạt trung ương</b>: Thận hoàn toàn bình thường, chỉ thiếu hormone ADH -> <b>Sau khi tiêm dDAVP, ALTT nước tiểu TĂNG VỌT TRÊN 50–100%</b> (đáp ứng hoàn hảo).",
        "- <b>Đái tháo nhạt do thận</b> (do đột biến thụ thể V2 hoặc ngộ độc Lithium): Ống thận trơ với ADH -> <b>Sau khi tiêm dDAVP, ALTT nước tiểu KHÔNG ĐỔI hoặc chỉ tăng rất nhẹ (< 10–50%)</b>.",
        "Điều trị duy trì cho Đái tháo nhạt trung ương: <b>Desmopressin (dDAVP) xịt mũi hoặc uống</b>."
      ],
      wrongs: {
        1: "Đái tháo nhạt do thận không đáp ứng với dDAVP ngoại sinh; ở đây ALTT niệu tăng vọt từ 110 lên 520 (>300%).",
        2: "Cuồng uống tâm căn có ALTT máu giảm thấp (<280 mOsm/kg) và khi làm nghiệm pháp nhịn nước ALTT niệu sẽ tự cô đặc > 600 mOsm/kg mà không cần tiêm dDAVP.",
        3: "Đường máu bình thường, không có lợi niệu thẩm thấu do glucose.",
        4: "Mất muối do não gây hạ natri máu và thể tích dịch giảm, không gây tăng natri máu nước tiểu loãng."
      },
      objective:
        "Đái tháo nhạt trung ương (thiếu ADH sau mổ tuyến yên) gây đa niệu loãng và tăng ALTT máu; chẩn đoán phân biệt bằng nghiệm pháp dDAVP làm ALTT niệu tăng vọt > 50-100%; điều trị bằng Desmopressin (dDAVP)."
    },

    {
      spec: "Nội tiết",
      task: "Bước chẩn đoán và điều trị",
      short: "Hội chứng tiết ADH không thích hợp (SIADH)",
      vignette: [
        "Nam 66 tuổi có tiền sử ung thư phổi đang điều trị, nhập viện vì mệt mỏi, buồn nôn, chán ăn, đi lại loạng choạng và lú lẫn nhẹ.",
        "Khám: Bệnh nhân tỉnh nhưng định hướng chậm, không phù, niêm mạc ẩm bình thường, véo da bình thường, tĩnh mạch cổ không nổi (<b>Thể tích dịch nội mạch hoàn toàn bình thường - Euvolemic state</b>). Huyết áp 125/75 mm Hg.",
        "Xét nghiệm máu và nước tiểu:",
        "- <b>Natri huyết thanh giảm nặng 119 mEq/L (Hạ natri máu thực sự)</b>, Áp lực thẩm thấu huyết tương giảm 248 mOsm/kg (bình thường 275–295).",
        "- <b>Áp lực thẩm thấu nước tiểu tăng cao 460 mOsm/kg (> 100 mOsm/kg - Nước tiểu cô đặc không thích hợp)</b>.",
        "- <b>Natri trong nước tiểu tăng cao 52 mEq/L (> 30–40 mEq/L)</b>.",
        "- Chức năng tuyến giáp (TSH, FT4), chức năng tuyến thượng thận (Cortisol lúc 8h sáng) và chức năng thận (Creatinine) hoàn toàn bình thường."
      ],
      vitals: [
        ["Nhiệt độ", "36,8 °C"],
        ["Huyết áp", "125/75"],
        ["Mạch", "74 l/ph"],
        ["Nhịp thở", "16 l/ph"]
      ],
      stem: "Biện pháp điều trị ban đầu nền tảng cho Hạ natri máu đẳng thể tích do SIADH mức độ vừa không có triệu chứng co giật là gì?",
      choices: [
        "Hạn chế lượng nước uống vào nghiêm ngặt (< 800–1.000 mL/ngày)",
        "Truyền tĩnh mạch nhanh 2 lít dung dịch NaCl 0,9% đẳng trương",
        "Tiêm tĩnh mạch Furosemide liều cao kết hợp uống nhiều nước",
        "Tiêm thuốc kháng sinh Vancomycin",
        "Tiêm insulin nhanh liều cao"
      ],
      answer: 0,
      why: [
        "Bệnh nhân thỏa mãn đầy đủ <b>Tiêu chuẩn chẩn đoán Hội chứng tiết ADH không thích hợp (SIADH)</b>:",
        "1. <b>Hạ natri máu nhược trương (Hypotonic Hyponatremia: ALTT huyết tương < 275 mOsm/kg)</b>.",
        "2. <b>Thể tích dịch nội mạch bình thường (Euvolemia)</b>: Không phù, không tăng áp lực tĩnh mạch cổ, không tụt huyết áp tư thế.",
        "3. <b>Nước tiểu bị cô đặc không thích hợp</b>: <b>ALTT nước tiểu > 100 mOsm/kg</b> (ở đây 460 mOsm/kg).",
        "4. <b>Mất muối qua nước tiểu</b>: <b>Natri niệu > 30–40 mEq/L</b> (ở đây 52 mEq/L).",
        "5. Đã loại trừ suy giáp, suy thượng thận và suy thận.",
        "Điều trị SIADH:",
        "- <b>Biện pháp nền tảng đầu tay</b>: <b>HẠN CHẾ NƯỚC UỐNG VÀO (< 800–1.000 mL/24h)</b>.",
        "- <b>LƯU Ý: TRUYỀN DUNG DỊCH NACL 0,9% ĐẲNG TRƯƠNG BỊ CHỐNG CHỈ ĐỊNH VÌ SẼ LÀM HẠ NATRI MÁU NẶNG HƠN</b> (Do ADH làm giữ lại toàn bộ lượng nước tự do trong khi thận bài xuất toàn bộ lượng muối truyền vào qua nước tiểu cô đặc).",
        "- Nếu hạ natri máu nặng có triệu chứng thần kinh cấp (co giật, hôn mê): Truyền cấp cứu <b>NaCl 3% ưu trương</b> (nâng Natri không quá 8–10 mEq/L trong 24 giờ đầu để <b>phòng ngừa Hội chứng hủy Myelin cầu não thẩm thấu - Osmotic Demyelination Syndrome / CPM</b>).",
        "- Thuốc đối kháng thụ thể V2 của Vasopressin: <b>Tolvaptan, Conivaptan</b>."
      ],
      wrongs: {
        1: "Truyền NaCl 0,9% trong SIADH là sai lầm kinh điển vì thận bài tiết muối và giữ nước lại, làm Natri máu tụt sâu hơn.",
        2: "Uống nhiều nước sẽ làm ngộ độc nước gây co giật tử vong.",
        3: "Kháng sinh không giải quyết được hội chứng SIADH cận ung thư.",
        4: "Insulin dùng điều trị tăng đường huyết hoặc tăng kali máu, không dùng trong SIADH."
      },
      objective:
        "SIADH (hạ natri máu đẳng thể tích, ALTT niệu > 100, Na niệu > 40) điều trị đầu tay bằng Hạn chế nước; tuyệt đối không truyền NaCl 0,9% (làm Natri máu tụt sâu hơn); nếu hạ Na nặng co giật dùng NaCl 3% ưu trương chỉnh liều chậm."
    },

    {
      spec: "Nội tiết",
      task: "Bước chẩn đoán và xác định",
      short: "Bệnh to đầu chi (Acromegaly) do u tuyến yên tiết GH",
      vignette: [
        "Nam 45 tuổi đến khám vì nhận thấy <b>cỡ giày và cỡ nhẫn tăng liên tục trong 3 năm qua</b>, khuôn mặt thô ráp dần với xương gò má nhô to, hàm dưới nhô ra trước (Prognathism), khoảng cách giữa các răng thưa rộng và giọng nói trở nên trầm ồm.",
        "Bệnh nhân than phiền mệt mỏi, đau nhức các khớp xương, ngáy to khi ngủ và tê bì ngón tay cái, trỏ, giữa hai bàn tay (Hội chứng ống cổ tay hai bên). Bệnh nhân mới được chẩn đoán Tăng huyết áp và Đái tháo đường típ 2.",
        "Khám: Bàn tay bàn chân to dày hình mái chèo, da dày ẩm nhiều mồ hôi, lưỡi to (Macroglossia)."
      ],
      vitals: [
        ["Nhiệt độ", "36,8 °C"],
        ["Huyết áp", "148/92"],
        ["Mạch", "76 l/ph"],
        ["Nhịp thở", "16 l/ph"]
      ],
      stem: "Xét nghiệm sàng lọc ban đầu có độ nhạy cao nhất và nghiệm pháp động lực học khẳng định chẩn đoán là gì?",
      choices: [
        "Sàng lọc bước 1 bằng Định lượng IGF-1 (Insulin-like Growth Factor 1) huyết thanh; Khẳng định bước 2 bằng Nghiệm pháp dung nạp 75g Glucose đường uống (OGTT không ức chế được GH xuống < 1 ng/mL)",
        "Định lượng nồng độ GH huyết thanh ngẫu nhiên vào buổi sáng đơn độc",
        "Chụp X-quang xương bàn chân",
        "Định lượng Cortisol máu 8 giờ sáng",
        "Nghiệm pháp nhịn nước kéo dài 12 giờ"
      ],
      answer: 0,
      why: [
        "Bệnh cảnh kinh điển của <b>Bệnh to đầu chi (Acromegaly)</b> do <b>U tuyến yên tiết Hormone tăng trưởng GH (Somatotroph adenoma)</b> xuất hiện ở người trưởng thành sau khi các sụn tiếp hợp đã cốt hóa hoàn toàn.",
        "Biểu hiện lâm sàng: To các đầu xương và mô mềm (tăng cỡ giày nhẫn, hàm dưới nhô vẩu, răng thưa, lưỡi to), dày da, hội chứng ống cổ tay hai bên, tăng huyết áp, đái tháo đường, phì đại cơ tim và tăng nguy cơ Polyp/Ung thư đại tràng.",
        "Chiến lược cận lâm sàng chẩn đoán chuẩn:",
        "1. <b>Sàng lọc bước 1 nhạy nhất</b>: <b>Định lượng IGF-1 huyết thanh (Somatomedin C)</b>. (Không dùng GH ngẫu nhiên vì GH tiết ngắt quãng theo nhịp sinh học và có thời gian bán thải rất ngắn vài phút, trong khi IGF-1 do gan tiết ra dưới kích thích của GH có nồng độ ổn định suốt cả ngày).",
        "2. <b>Khẳng định bước 2</b>: <b>Nghiệm pháp dung nạp 75g Glucose đường uống (Oral Glucose Tolerance Test - OGTT)</b>:",
        "- Bình thường nồng độ đường máu cao sẽ ức chế hoàn toàn thùy trước tuyến yên làm GH giảm xuống < 1 ng/mL (hoặc < 0,4 ng/mL).",
        "- Trong Acromegaly, <b>u tuyến yên tiết GH tự chủ nên nồng độ GH KHÔNG THỂ BỊ ỨC CHẾ</b>.",
        "3. <b>Hình ảnh</b>: Chụp <b>MRI tuyến yên</b> định vị khối u.",
        "Điều trị lựa chọn số một: <b>Phẫu thuật nội soi cắt u qua xoang bướm (Transsphenoidal surgery)</b>; điều trị nội khoa bằng Đồng vận Somatostatin (Octreotide, Lanreotide) hoặc thuốc đối kháng thụ thể GH (Pegvisomant)."
      ],
      wrongs: {
        1: "Định lượng GH ngẫu nhiên có độ nhạy rất thấp và dễ dương tính/âm tính giả do GH tiết từng cơn.",
        2: "X-quang chỉ thấy biến dạng xương, không chẩn đoán được nguyên nhân nội tiết.",
        3: "Cortisol dùng cho bệnh Cushing, không phải Acromegaly.",
        4: "Nghiệm pháp nhịn nước dùng cho đái tháo nhạt."
      },
      objective:
        "Bệnh to đầu chi (Acromegaly: tăng kích thước bàn tay chân, hàm vẩu, hội chứng ống cổ tay) sàng lọc bước 1 bằng IGF-1 huyết thanh; khẳng định bước 2 bằng Nghiệm pháp dung nạp Glucose (OGTT không ức chế được GH); điều trị đầu tay bằng phẫu thuật qua xoang bướm."
    },

    {
      spec: "Nội tiết",
      task: "Bước chẩn đoán và chỉ định phẫu thuật",
      short: "Cường tuyến cận giáp nguyên phát (Primary Hyperparathyroidism)",
      vignette: [
        "Nữ 58 tuổi đi khám vì mệt mỏi, đau mỏi xương khớp lan tỏa, táo bón mạn tính và có tiền sử <b>sỏi thận tái phát 2 lần</b> trong 3 năm qua.",
        "Xét nghiệm máu và nước tiểu:",
        "- <b>Canxi huyết thanh toàn phần tăng cao 11,8 mg/dL</b> (bình thường 8,5–10,5), Canxi ion hóa tăng.",
        "- <b>Hormone tuyến cận giáp nguyên vẹn (Intact PTH) tăng cao 110 pg/mL</b> (bình thường 15–65 - tăng không thích hợp trong bối cảnh canxi máu cao).",
        "- <b>Phosphat huyết thanh giảm thấp 2,1 mg/dL (Hạ phosphat máu)</b>.",
        "- Canxi bài tiết trong nước tiểu 24 giờ tăng 350 mg/24h (loại trừ Tăng canxi máu giảm canxi niệu gia đình FHH).",
        "Đo mật độ xương DEXA: Loãng xương nặng ưu thế ở 1/3 ngoài xương quay (vùng xương vỏ chịu tác động mạnh của PTH)."
      ],
      vitals: [
        ["Nhiệt độ", "36,8 °C"],
        ["Huyết áp", "130/80"],
        ["Mạch", "74 l/ph"],
        ["Nhịp thở", "16 l/ph"]
      ],
      stem: "Căn nguyên phổ biến nhất và phương pháp điều trị triệt căn duy nhất cho bệnh nhân này là gì?",
      choices: [
        "U tuyến cận giáp đơn độc lành tính (Parathyroid Adenoma, chiếm 85%); điều trị triệt căn bằng Phẫu thuật cắt bỏ tuyến cận giáp mang u (Parathyroidectomy)",
        "Tăng canxi máu do ung thư di căn xương; điều trị bằng hóa trị",
        "Ngộ độc Vitamin D; điều trị bằng truyền dịch",
        "Bệnh Sarcoidosis; điều trị bằng Corticoid",
        "Suy thận mạn gây cường cận giáp thứ phát; điều trị bằng thuốc gắn phosphat"
      ],
      answer: 0,
      why: [
        "Bệnh nhân có <b>Cường tuyến cận giáp nguyên phát (Primary Hyperparathyroidism - PHPT)</b> với câu thần chú kinh điển: <i>'Stones, Bones, Abdominal groans, and Psychiatric overtones'</i> (Sỏi thận + Đau loãng xương + Táo bón/đau bụng + Trầm cảm lo âu).",
        "Đặc điểm xét nghiệm kinh điển: <b>TĂNG CANXI MÁU + TĂNG PTH (hoặc PTH bình thường cao không bị ức chế) + GIẢM PHOSPHAT MÁU</b>.",
        "Căn nguyên: 85% do <b>U tuyến cận giáp đơn độc lành tính (Parathyroid Adenoma)</b>, 15% do Tăng sản cả 4 tuyến cận giáp.",
        "Chỉ định phẫu thuật cắt tuyến cận giáp (theo guideline quốc tế):",
        "1. Bệnh nhân có triệu chứng (sỏi thận, gãy xương).",
        "2. Canxi huyết thanh > 1,0 mg/dL trên giới hạn bình thường (ở đây 11,8 > 11,5).",
        "3. Tuổi < 50 tuổi.",
        "4. Mật độ xương T-score ≤ -2,5 tại bất kỳ vị trí nào.",
        "5. Độ lọc cầu thận eGFR < 60 mL/ph hoặc Canxi niệu 24h > 400 mg/ngày.",
        "-> <b>Phẫu thuật cắt tuyến cận giáp (Parathyroidectomy)</b> là <b>phương pháp điều trị triệt căn duy nhất</b> (định vị trước mổ bằng Xạ hình Sestamibi SPECT và Siêu âm cổ)."
      ],
      wrongs: {
        1: "Tăng canxi máu do ung thư (tiết PTHrP hoặc di căn xương) có nồng độ PTH nguyên vẹn BỊ ỨC CHẾ GIẢM GẦN BẰNG 0.",
        2: "Ngộ độc Vitamin D có 25-OH Vitamin D tăng rất cao và PTH bị ức chế giảm thấp.",
        3: "Sarcoidosis có 1,25-(OH)2 Vitamin D tăng và PTH bị ức chế hoàn toàn.",
        4: "Cường cận giáp thứ phát do suy thận có nồng độ Canxi máu GIẢM hoặc bình thường và Phosphat máu TĂNG CAO."
      },
      objective:
        "Cường cận giáp nguyên phát (85% do u tuyến cận giáp) đặc trưng bởi Canxi máu tăng + PTH tăng/không ức chế + Phosphat máu giảm; phẫu thuật cắt tuyến cận giáp là điều trị triệt căn duy nhất."
    },

    {
      spec: "Nội tiết",
      task: "Bước chẩn đoán và xử trí cấp cứu",
      short: "Hạ canxi máu cấp sau phẫu thuật cắt tuyến giáp",
      vignette: [
        "Nữ 42 tuổi vừa trải qua phẫu thuật cắt toàn bộ tuyến giáp điều trị ung thư tuyến giáp dạng nhú 24 giờ trước. Bệnh nhân than phiền xuất hiện cảm giác <b>tê bì châm chích kiến bò dữ dội quanh miệng và các đầu ngón tay ngón chân</b> kèm co cứng cơ bắp chân.",
        "Khám: Bác sĩ gõ nhẹ vào trước gờ tai trên đường đi của dây thần kinh VII thấy <b>các cơ mặt cùng bên co giật mạnh (Dấu hiệu Chvostek dương tính)</b>; khi bơm bao đo huyết áp lên trên huyết áp tâm thu 20 mm Hg và giữ trong 3 phút, bàn tay bệnh nhân <b>co quắp gập các khớp bàn ngón và duỗi các khớp liên ngón tạo hình ảnh 'Bàn tay người đỡ đẻ' (Dấu hiệu Trousseau dương tính)</b>.",
        "Điện tâm đồ: <b>Khoảng QT kéo dài (QTc 510 ms)</b>. Xét nghiệm: <b>Canxi huyết thanh toàn phần giảm thấp 6,4 mg/dL</b>, PTH giảm thấp 4 pg/mL."
      ],
      vitals: [
        ["Nhiệt độ", "36,8 °C"],
        ["Huyết áp", "120/75"],
        ["Mạch", "82 l/ph"],
        ["Nhịp thở", "18 l/ph"]
      ],
      stem: "Bước can thiệp điều trị cấp cứu dùng thuốc đường tĩnh mạch ngay lập tức là gì?",
      choices: [
        "Tiêm tĩnh mạch chậm Calci Gluconate 10% (1–2 ống trong 10–20 phút) dưới theo dõi monitor tim",
        "Cho uống viên Canxi Carbonate đơn độc tại giường",
        "Tiêm bắp Calcitonin liều cao",
        "Tiêm tĩnh mạch Furosemide để tăng đào thải phospho",
        "Tiêm tĩnh mạch dung dịch Kali Clorid"
      ],
      answer: 0,
      why: [
        "Bệnh nhân có <b>Hạ canxi máu cấp tính có triệu chứng đe dọa tính mạng</b> do <b>Suy tuyến cận giáp sau phẫu thuật cắt toàn bộ tuyến giáp (Post-thyroidectomy Hypoparathyroidism)</b> do vô tình làm tổn thương mạch máu nuôi hoặc cắt phải các tuyến cận giáp.",
        "Triệu chứng thần kinh - cơ kinh điển do tăng tính hưng phấn màng tế bào thần kinh:",
        "1. Dị cảm quanh miệng và đầu chi (Paresthesias).",
        "2. <b>Dấu hiệu Chvostek</b>: Gõ dây VII gây co giật cơ mặt.",
        "3. <b>Dấu hiệu Trousseau</b>: Bơm bao đo huyết áp gây co quắp bàn tay (Carpal spasm - nhạy và đặc hiệu hơn Chvostek).",
        "4. Biến chứng nguy hiểm: <b>Co thắt thanh quản (Laryngospasm) gây ngạt thở, co giật toàn thể và Loạn nhịp tim do khoảng QT kéo dài</b>.",
        "Xử trí cấp cứu: <b>Tiêm tĩnh mạch chậm CALCI GLUCONATE 10% (1–2 ống 10 mL pha trong Glucose 5% tiêm trong 10–20 phút)</b> dưới theo dõi monitor tim (ưu tiên Calci Gluconate hơn Calci Clorid vì ít gây hoại tử mô nếu chệch ven). Sau đó duy trì bằng <b>Canxi đường uống kết hợp Vitamin D hoạt tính (Calcitriol)</b>."
      ],
      wrongs: {
        1: "Canxi đường uống có thời gian khởi phát tác dụng chậm nhiều giờ, không cứu được bệnh nhân đang có co thắt cơ và QT kéo dài đe dọa co thắt thanh quản tử vong.",
        2: "Calcitonin là thuốc HẠ CANXI MÁU, dùng vào sẽ làm ngừng tim ngay lập tức.",
        3: "Lợi tiểu Furosemide làm tăng thải canxi qua nước tiểu, làm hạ canxi máu nặng nề hơn.",
        4: "Kali Clorid không có tác dụng điều trị hạ canxi máu."
      },
      objective:
        "Hạ canxi máu cấp sau mổ tuyến giáp (dấu hiệu Chvostek/Trousseau, co quắp cơ, QT kéo dài) là cấp cứu khẩn; xử trí ngay bằng tiêm tĩnh mạch chậm Calci Gluconate 10% dưới monitor tim, sau đó duy trì bằng Canxi uống + Calcitriol."
    },

    {
      spec: "Nội tiết",
      task: "Bước chẩn đoán và điều trị",
      short: "Bệnh Paget xương (Osteitis Deformans)",
      vignette: [
        "Nam 68 tuổi đến khám vì đau âm ỉ liên tục ở vùng xương chày cẳng chân phải và vùng xương chậu. Người nhà nhận thấy <b>cỡ mũ của bệnh nhân phải tăng lên trong 2 năm qua do xương sọ to dần</b>, và bệnh nhân xuất hiện <b>giảm thính lực tiếp nhận ở cả hai tai</b>.",
        "Khám: Xương chày phải cong hình lưỡi kiếm ra trước, sờ da bên ngoài vùng xương ấm nóng hơn bên đối diện.",
        "Xét nghiệm máu: <b>Phosphatase kiềm (ALP) tăng rất cao 650 U/L</b> (bình thường < 120), trong khi <b>Nồng độ Canxi huyết thanh và Phosphat huyết thanh hoàn toàn bình thường</b>. Chức năng gan bình thường.",
        "X-quang: Dày vỏ xương, bè xương thô to xen kẽ các vùng tiêu xương và xơ hóa xương. Sinh thiết xương: <b>Hình ảnh xương dạng khảm / dạng ghép hình (Mosaic pattern of lamellar bone)</b> với các đường xi măng ngẫu nhiên."
      ],
      vitals: [
        ["Nhiệt độ", "36,8 °C"],
        ["Huyết áp", "135/80"],
        ["Mạch", "78 l/ph"],
        ["Nhịp thở", "16 l/ph"]
      ],
      stem: "Cơ chế rối loạn tái cấu trúc xương và thuốc điều trị đầu tay hiệu quả nhất là gì?",
      choices: [
        "Tăng hoạt tính hủy cốt bào quá mức ban đầu tiếp nối bằng quá trình tạo xương hỗn loạn vô tổ chức của tạo cốt bào; điều trị đầu tay bằng Thuốc nhóm Bisphosphonate (Axit Zoledronic truyền tĩnh mạch hoặc Alendronate đường uống)",
        "Thiếu hụt Vitamin D mạn tính gây bệnh nhuyễn xương; điều trị bằng Ergocalciferol",
        "Ung thư biểu mô di căn xương; điều trị bằng hóa chất",
        "Nhiễm trùng viêm xương tủy xương mạn tính do tụ cầu; điều trị bằng kháng sinh 6 tháng",
        "Đa u tủy xương; điều trị bằng Bortezomib"
      ],
      answer: 0,
      why: [
        "Bệnh cảnh kinh điển của <b>Bệnh Paget xương (Paget's Disease of Bone / Osteitis Deformans)</b>:",
        "- Bệnh học qua 3 giai đoạn: (1) <b>Giai đoạn tiêu xương</b> do các hủy cốt bào khổng lồ đa nhân hoạt động quá mức; (2) <b>Giai đoạn hỗn hợp</b> tạo cốt bào tăng sinh bù trừ ồ ạt; (3) <b>Giai đoạn xơ hóa</b> tạo ra cấu trúc xương xốp yếu, biến dạng với <b>hình ảnh mô học dạng khảm (Mosaic pattern / Jigsaw puzzle pattern)</b>.",
        "- Lâm sàng: Tăng kích thước xương sọ (tăng cỡ mũ), điếc tiếp nhận do chèn ép dây VIII qua lỗ ống tai trong, xương chày cong hình kiếm, da trên xương ấm do tăng sinh mạch máu.",
        "- Bộ ba xét nghiệm đặc trưng: <b>PHOSPHATASE KIỀM (ALP) TĂNG CỰC CAO TRONG KHI CANXI VÀ PHOSPHAT MÁU HOÀN TOÀN BÌNH THƯỜNG</b>.",
        "- Biến chứng nguy hiểm: Suy tim cung lượng cao (do dò động tĩnh mạch trong xương Paget) và <b>Chuyển dạng ác tính thành Ung thư xương (Osteosarcoma < 1%, nghi ngờ khi đau tăng vọt đột ngột và tổn thương phá hủy xương mới)</b>.",
        "- Điều trị đầu tay: <b>Thuốc nhóm Bisphosphonate (Zoledronic acid truyền tĩnh mạch 1 liều duy nhất hoặc Alendronate)</b> để ức chế hủy cốt bào."
      ],
      wrongs: {
        1: "Nhuyễn xương (Osteomalacia) có Canxi máu giảm và Phosphat máu giảm, không có hình ảnh xương dạng khảm và tăng kích thước hộp sọ.",
        2: "Di căn xương ác tính thường kèm đau dữ dội về đêm và Canxi máu tăng cao.",
        3: "Viêm xương tủy xương có sốt, lỗ rò mủ và tăng bạch cầu/CRP.",
        4: "Đa u tủy xương có tổn thương tiêu xương đục lỗ (punched-out lesions), thiếu máu và Canxi máu tăng."
      },
      objective:
        "Bệnh Paget xương (tăng kích thước hộp sọ, điếc, xương chày cong) đặc trưng bởi ALP tăng rất cao trong khi Canxi/Phosphat bình thường và mô học dạng khảm; điều trị đầu tay bằng Bisphosphonate (Zoledronic acid)."
    },

    {
      spec: "Nội tiết",
      task: "Bước chẩn đoán và sàng lọc gen",
      short: "Hội chứng đa u tuyến nội tiết Típ 1 (MEN-1)",
      vignette: [
        "Nam 36 tuổi đến khám vì sỏi thận tái phát nhiều đợt. Xét nghiệm phát hiện <b>Canxi máu tăng 11,6 mg/dL và PTH tăng cao 98 pg/mL</b>, chẩn đoán Cường cận giáp nguyên phát do tăng sản 4 tuyến cận giáp.",
        "Khai thác tiền sử bệnh nhân kể: 1 năm nay thường xuyên bị đau rát thượng vị và tiêu chảy phân mỡ do <b>Loét dạ dày tá tràng đa ổ kháng trị (Hội chứng Zollinger-Ellison do U Gastrinoma tụy)</b>. Ngoài ra bệnh nhân có giảm thị lực thái dương hai bên, chụp MRI phát hiện <b>Khối u tuyến yên tiết Prolactin (Prolactinoma)</b> kích thước 1,2 cm.",
        "Tiền sử gia đình có mẹ đẻ từng phẫu thuật u tụy nội tiết và u tuyến cận giáp."
      ],
      vitals: [
        ["Nhiệt độ", "36,8 °C"],
        ["Huyết áp", "125/75"],
        ["Mạch", "76 l/ph"],
        ["Nhịp thở", "16 l/ph"]
      ],
      stem: "Đột biến gen ức chế khối u nào là nguyên nhân của Hội chứng Đa u tuyến nội tiết Típ 1 (Tam chứng 3P) này?",
      choices: [
        "Đột biến gen MEN1 (mã hóa protein Menin) trên nhiễm sắc thể số 11",
        "Đột biến tiền gen sinh ung RET (Proto-oncogene RET) trên nhiễm sắc thể 10",
        "Đột biến gen VHL trên nhiễm sắc thể số 3",
        "Đột biến gen NF1 (Neurofibromin)",
        "Đột biến gen TP53 (Hội chứng Li-Fraumeni)"
      ],
      answer: 0,
      why: [
        "Bệnh nhân có đầy đủ <b>Tam chứng 3P kinh điển của Hội chứng Đa u tuyến nội tiết Típ 1 (Multiple Endocrine Neoplasia Type 1 - MEN-1 / Hội chứng Wermer)</b> di truyền trội trên nhiễm sắc thể thường:",
        "1. <b>Parathyroid (Tuyến cận giáp, >95% các ca)</b>: Cường cận giáp nguyên phát do tăng sản đa tuyến gây tăng canxi máu và sỏi thận.",
        "2. <b>Pancreatic neuroendocrine tumors (U thần kinh nội tiết tụy/tá tràng, 60–70%)</b>: Thường gặp nhất là <b>Gastrinoma (gây hội chứng Zollinger-Ellison)</b> hoặc Insulinoma.",
        "3. <b>Pituitary adenomas (U tuyến yên, 30–40%)</b>: Thường gặp nhất là <b>Prolactinoma</b> gây tăng tiết prolactin và chèn ép giao thoa thị giác.",
        "Nguyên nhân di truyền: <b>Đột biến mất chức năng ở gen ức chế khối u MEN1 (mã hóa protein Menin) nằm trên cánh dài nhiễm sắc thể số 11 (11q13)</b>.",
        "Phân biệt với <b>MEN-2A và MEN-2B</b>: Do đột biến gen <b>RET proto-oncogene</b>, đặc trưng bởi Ung thư tuyến giáp thể tủy (MTC) + U tủy thượng thận (Pheochromocytoma)."
      ],
      wrongs: {
        1: "Đột biến RET gây hội chứng MEN-2A và MEN-2B (MTC + Pheochromocytoma).",
        2: "Gen VHL gây hội chứng Von Hippel-Lindau (U nguyên bào mạch máu tiểu não, ung thư biểu mô tế bào thận RCC, u tủy thượng thận).",
        3: "Gen NF1 gây bệnh U xơ thần kinh Típ 1 (nốt Von Recklinghausen, u sợi thần kinh, u tủy thượng thận).",
        4: "Gen TP53 gây hội chứng Li-Fraumeni (ung thư vú, sarcom, u não, ung thư vỏ thượng thận ở người trẻ)."
      },
      objective:
        "Hội chứng MEN-1 (Tam chứng 3P: U tuyến cận giáp + U tụy thần kinh nội tiết Gastrinoma/Insulinoma + U tuyến yên Prolactinoma) do đột biến gen ức chế khối u MEN1 (Menin) trên NST 11."
    },

    {
      spec: "Nội tiết",
      task: "Bước chẩn đoán và tầm soát",
      short: "Hội chứng MEN-2B và đột biến gen RET",
      vignette: [
        "Nam 19 tuổi, thể trạng gầy cao lênh khênh, các ngón tay ngón chân dài ngoẵng và khớp lỏng lẻo giống hội chứng Marfan (<b>Thể tạng dạng Marfan - Marfanoid habitus</b>), đến khám vì sờ thấy một khối u cứng ở thùy giáp bên phải.",
        "Khám niêm mạc miệng và mắt phát hiện: <b>Nhiều nốt u nhỏ màu hồng nhạt ở niêm mạc môi, đầu lưỡi và kết mạc mi mắt (U thần kinh niêm mạc - Mucosal neuromas)</b>. Bệnh nhân có tiền sử phình đại tràng do u hạch thần kinh ruột (Intestinal ganglioneuromatosis).",
        "Sinh thiết nhân giáp: <b>Ung thư biểu mô tuyến giáp thể tủy (Medullary Thyroid Cancer - MTC)</b>. Xét nghiệm <b>Calcitonin huyết thanh tăng rất cao</b>.",
        "Đo huyết áp: 185/110 mm Hg, nồng độ Metanephrines tự do trong nước tiểu 24h tăng cao (kèm U tủy thượng thận Pheochromocytoma)."
      ],
      vitals: [
        ["Nhiệt độ", "36,8 °C"],
        ["Huyết áp", "185/110"],
        ["Mạch", "108 l/ph"],
        ["Nhịp thở", "18 l/ph"]
      ],
      stem: "Chẩn đoán xác định hội chứng di truyền và đột biến gen nguyên nhân là gì?",
      choices: [
        "Hội chứng Đa u tuyến nội tiết Típ 2B (MEN-2B) do đột biến hoạt hóa tiền gen sinh ung RET (Proto-oncogene RET)",
        "Hội chứng MEN-2A do đột biến gen MEN1",
        "Hội chứng Marfan do đột biến gen FBN1",
        "U xơ thần kinh Típ 1 (NF1)",
        "Hội chứng McCune-Albright"
      ],
      answer: 0,
      why: [
        "Bệnh nhân có đầy đủ đặc điểm kinh điển của <b>Hội chứng Đa u tuyến nội tiết Típ 2B (MEN-2B)</b>:",
        "1. <b>Ung thư biểu mô tuyến giáp thể tủy (Medullary Thyroid Carcinoma - MTC, 100%)</b> xuất phát từ tế bào C cận nang tiết <b>Calcitonin</b>, tiến triển cực kỳ ác tính xuất hiện từ rất sớm.",
        "2. <b>U tủy thượng thận (Pheochromocytoma, 50%)</b>.",
        "3. <b>U thần kinh niêm mạc (Mucosal Neuromas)</b> ở môi, lưỡi và mi mắt.",
        "4. <b>Thể tạng dạng Marfan (Marfanoid Habitus)</b> và u hạch thần kinh đường ruột (Ganglioneuromatosis).",
        "- Phân biệt giữa <b>MEN-2A</b> và <b>MEN-2B</b> (cả hai đều do đột biến hoạt hóa thụ thể tyrosine kinase <b>RET Proto-oncogene</b>):",
        "- <b>MEN-2A</b>: <b>MTC + Pheochromocytoma + CƯỜNG CẬN GIÁP NGUYÊN PHÁT (Parathyroid hyperplasia)</b>.",
        "- <b>MEN-2B</b>: <b>MTC + Pheochromocytoma + U THẦN KINH NIÊM MẠC + THỂ TẠNG DẠNG MARFAN</b> (HOÀN TOÀN KHÔNG CÓ CƯỜNG CẬN GIÁP).",
        "Tất cả trẻ em mang đột biến gen RET gây MEN-2B đều có chỉ định <b>Phẫu thuật cắt toàn bộ tuyến giáp dự phòng (Prophylactic thyroidectomy)</b> ngay trong năm đầu đời."
      ],
      wrongs: {
        1: "MEN-2A có kèm Cường cận giáp nguyên phát và không có u thần kinh niêm mạc hay thể tạng dạng Marfan.",
        2: "Hội chứng Marfan chỉ có bất thường mô liên kết gãy xương/mắt/động mạch chủ, không có ung thư biểu mô thể tủy và u tủy thượng thận.",
        3: "NF1 có u sợi thần kinh ngoài da và vết cà phê sữa, không có ung thư giáp thể tủy tiết calcitonin.",
        4: "McCune-Albright có tam chứng dậy thì sớm, loạn sản xơ xương và vết cà phê sữa bờ rách."
      },
      objective:
        "Hội chứng MEN-2B (Ung thư biểu mô giáp thể tủy MTC + U tủy thượng thận + U thần kinh niêm mạc môi lưỡi + Thể tạng dạng Marfan) do đột biến hoạt hóa gen RET; cần cắt tuyến giáp dự phòng sớm."
    },

    {
      spec: "Nội tiết",
      task: "Bước xử trí cấp cứu",
      short: "Cơn khủng hoảng tăng canxi máu ác tính",
      vignette: [
        "Nam 64 tuổi có tiền sử ung thư biểu mô tế bào vảy ở phổi, được đưa vào cấp cứu vì lơ mơ, lú lẫn, nôn mửa liên tục, táo bón nặng và tiểu tiện rất nhiều trong 3 ngày qua.",
        "Khám: Dấu hiệu mất nước nặng, niêm mạc khô kiệt, da đàn hồi kém, huyết áp 95/60 mm Hg, mạch 108 l/phút.",
        "Điện tâm đồ: <b>Khoảng QT bị rút ngắn rõ rệt (Shortened QT interval)</b>.",
        "Xét nghiệm máu khẩn: <b>Canxi huyết thanh toàn phần tăng cực cao 15,2 mg/dL</b> (Canxi ion hóa tăng rất cao), <b>PTH nguyên vẹn (intact PTH) bị ức chế hoàn toàn < 3 pg/mL</b>. Nồng độ <b>Protein liên quan hormone tuyến cận giáp (PTHrP) trong máu tăng rất cao</b>. BUN 48 mg/dL, Creatinine 2,4 mg/dL."
      ],
      vitals: [
        ["Nhiệt độ", "36,8 °C"],
        ["Huyết áp", "95/60"],
        ["Mạch", "108 l/ph"],
        ["Nhịp thở", "18 l/ph"]
      ],
      stem: "Thứ tự phối hợp các bước điều trị cấp cứu hạ canxi máu chuẩn xác nhất là gì?",
      choices: [
        "Hồi sức bù dịch khẩn cấp bằng Truyền tĩnh mạch NaCl 0,9% tốc độ cao (200–300 mL/giờ) + Tiêm Calcitonin để hạ canxi nhanh trong 24–48h + Truyền tĩnh mạch Bisphosphonate (Axit Zoledronic) để duy trì tác dụng kéo dài",
        "Tiêm tĩnh mạch thuốc lợi tiểu Furosemide liều cao ngay lập tức trước khi truyền dịch",
        "Cho uống thuốc ức chế canxi Diltiazem liều cao",
        "Tiêm thuốc hormone tuyến cận giáp Teriparatide",
        "Chỉ định lọc máu cấp cứu ngay mà không cần truyền dịch"
      ],
      answer: 0,
      why: [
        "Bệnh nhân bị <b>Cơn khủng hoảng tăng canxi máu ác tính (Severe Malignant Hypercalcemia, Canxi > 14 mg/dL)</b> do <b>Ung thư phổi tế bào vảy tiết PTHrP (Humoral Hypercalcemia of Malignancy)</b>.",
        "Canxi máu tăng rất cao làm mất khả năng cô đặc nước tiểu của thận (gây đái tháo nhạt do thận), dẫn đến mất nước và suy thận cấp nặng nề, làm canxi máu càng tăng cao theo vòng xoắn bệnh lý.",
        "Phác đồ điều trị đa tầng chuẩn theo khuyến cáo quốc tế:",
        "1. <b>Bước 1 QUAN TRỌNG NHẤT VÀ TIÊN QUYẾT: BÙ DỊCH THỂ TÍCH LỚN</b>: <b>Truyền tĩnh mạch NaCl 0,9% với tốc độ cao 200–300 mL/giờ</b> (3–4 lít trong 24h đầu) để phục hồi thể tích nội mạch, tăng độ lọc cầu thận và tăng bài xuất canxi qua nước tiểu.",
        "2. <b>Bước 2 HẠ CANXI NHANH TỨC THÌ</b>: <b>Calcitonin tiêm dưới da/tiêm bắp (4–8 đơn vị/kg mỗi 12h)</b> giúp hạ canxi nhanh trong vòng vài giờ (nhưng bị hiện tượng dung nạp nhanh tachyphylaxis sau 48h).",
        "3. <b>Bước 3 DUY TRÌ TÁC DỤNG KÉO DÀI</b>: <b>Bisphosphonate truyền tĩnh mạch (Zoledronic acid 4 mg hoặc Pamidronate)</b> ức chế mạnh hủy cốt bào, phát huy tác dụng sau 48–72h và duy trì hạ canxi trong 2–4 tuần.",
        "Lưu ý: <b>Lợi tiểu quai (Furosemide) CHỈ ĐƯỢC DÙNG SAU KHI ĐÃ BÙ ĐỦ DỊCH NỘI MẠCH</b> và có dấu hiệu quá tải dịch; dùng Furosemide trước khi bù dịch sẽ làm tụt huyết áp và tử vong."
      ],
      wrongs: {
        1: "Dùng Furosemide khi bệnh nhân đang mất nước nặng sẽ làm sập thể tích tuần hoàn và suy thận cấp trầm trọng hơn.",
        2: "Chẹn kênh canxi không làm giảm nồng độ canxi tự do trong máu.",
        3: "Teriparatide là dẫn xuất PTH làm tăng thêm canxi máu.",
        4: "Lọc máu chỉ chỉ định khi tăng canxi máu đe dọa tính mạng kèm suy thận vô niệu nặng không thể truyền dịch."
      },
      objective:
        "Tăng canxi máu ác tính nặng (>14 mg/dL) cấp cứu chuẩn gồm: Bù dịch NaCl 0,9% tốc độ cao trước tiên + Tiêm Calcitonin (hạ nhanh 24-48h) + Truyền Bisphosphonate (Axit Zoledronic duy trì dài hạn); không dùng Furosemide trước khi bù đủ dịch."
    },

    {
      spec: "Nội tiết",
      task: "Bước chẩn đoán và điều trị",
      short: "Hội chứng Sheehan (Suy tuyến yên sau sinh do băng huyết)",
      vignette: [
        "Nữ 29 tuổi đến khám vì mệt mỏi kiệt sức, sợ lạnh, da khô bong vảy, rụng lông nách lông mu và sút cân kể từ sau khi sinh con thứ hai cách đây 6 tháng. Bệnh nhân có tiền sử sinh nở bị <b>băng huyết sau sinh nặng nề (Postpartum hemorrhage) phải truyền 6 đơn vị máu và hồi sức tích cực</b>.",
        "Bệnh nhân cho biết <b>sau khi sinh hoàn toàn không có sữa mẹ để cho con bú (Mất sữa sau sinh - Failure of lactation)</b> và đến nay <b>chưa từng có kinh nguyệt trở lại (Vô kinh thứ phát - Secondary amenorrhea)</b>.",
        "Xét nghiệm nội tiết: <b>Prolactin giảm rất thấp, TSH giảm kèm FT4 giảm (Suy giáp thứ phát), ACTH giảm kèm Cortisol giảm (Suy thượng thận thứ phát), LH và FSH giảm kèm Estradiol giảm (Suy sinh dục thứ phát)</b>."
      ],
      vitals: [
        ["Nhiệt độ", "36,2 °C"],
        ["Huyết áp", "90/58"],
        ["Mạch", "60 l/ph"],
        ["Nhịp thở", "16 l/ph"]
      ],
      stem: "Cơ chế tổn thương thiếu máu cục bộ của Hội chứng Sheehan là gì và hormone nào bắt buộc phải bù đầu tiên?",
      choices: [
        "Hoại tử thiếu máu cục bộ thùy trước tuyến yên do tụt huyết áp sốc mất máu trên nền tuyến yên phì đại tăng tưới máu trong thai kỳ; bắt buộc bù Hormone vỏ thượng thận (Hydrocortisone) TRƯỚC HOẶC ĐỒNG THỜI với Hormone tuyến giáp (Levothyroxine)",
        "Viêm tuyến yên tự miễn tế bào lympho; điều trị bằng kháng thể đơn dòng",
        "U tuyến yên chèn ép; phẫu thuật cắt u",
        "Suy buồng trứng sớm nguyên phát; bù Estrogen đơn độc",
        "Suy giáp nguyên phát do viêm giáp sau sinh; bù Levothyroxine đơn độc liều cao"
      ],
      answer: 0,
      why: [
        "Bệnh cảnh kinh điển của <b>Hội chứng Sheehan (Sheehan Syndrome / Postpartum Pituitary Necrosis)</b>:",
        "- Cơ chế: Trong thai kỳ, thùy trước tuyến yên phì đại tăng kích thước gấp đôi (tăng sinh tế bào tiết prolactin Lactotrophs) nhưng hệ thống mạch máu nuôi dưỡng (hệ cửa tuyến yên) không tăng sinh tương xứng -> Khi xảy ra <b>băng huyết sau sinh nặng gây tụt huyết áp sốc mất máu</b>, tuyến yên bị <b>thiếu máu cục bộ và hoại tử nhồi máu toàn bộ thùy trước</b>.",
        "- Dấu hiệu sớm nhất: <b>Mất sữa sau sinh (Thiếu Prolactin)</b>.",
        "- Dấu hiệu tiếp theo: <b>Vô kinh thứ phát kéo dài (Thiếu LH/FSH)</b>, rụng lông nách lông mu, suy giáp thứ phát (thiếu TSH) và suy thượng thận thứ phát (thiếu ACTH).",
        "- Nguyên tắc điều trị hormone thay thế suốt đời: <b>BẮT BUỘC BÙ GLUCOCORTICOID (Hydrocortisone/Prednisone) ĐẦU TIÊN TRƯỚC KHI BÙ LEVOTHYROXINE</b> để tránh làm tăng chuyển hóa gây bùng phát cơn suy thượng thận cấp tử vong."
      ],
      wrongs: {
        1: "Viêm tuyến yên tế bào lympho không liên quan đến biến cố băng huyết sau sinh mất máu nặng.",
        2: "Tuyến yên bị teo nhỏ và tạo hình ảnh hố yên rỗng (Empty sella) trên MRI, không phải u tuyến yên.",
        3: "LH/FSH giảm thấp chứng tỏ suy buồng trứng thứ phát do tuyến yên, không phải tại buồng trứng.",
        4: "Bù Levothyroxine trước khi bù Hydrocortisone sẽ đẩy bệnh nhân vào cơn suy thượng thận cấp tử vong."
      },
      objective:
        "Hội chứng Sheehan (hoại tử thùy trước tuyến yên sau băng huyết sinh con) gây mất sữa sau sinh, vô kinh, rụng lông mu và suy đa tuyến thứ phát; điều trị bắt buộc bù Hydrocortisone trước khi bù Levothyroxine."
    },

    {
      spec: "Nội tiết",
      task: "Bước chẩn đoán và điều trị",
      short: "Tăng sản thượng thận bẩm sinh (CAH) thiếu men 21-Hydroxylase",
      vignette: [
        "Bé gái sơ sinh 12 ngày tuổi được đưa vào cấp cứu vì nôn trớ liên tục, bú kém, sụt cân và li bì. Khám bộ phận sinh dục ngoài phát hiện: <b>Âm vật phì đại to giống dương vật kèm dính nếp môi lớn tạo bìu rỗng (Cơ quan sinh dục ngoài mơ hồ / Nam hóa - Ambiguous genitalia / Virilization)</b>.",
        "Khám cấp cứu: Bé có dấu hiệu mất nước nặng, huyết áp tụt 60/35 mm Hg, mạch 160 l/phút.",
        "Xét nghiệm máu khẩn: <b>Natri máu giảm thấp 120 mEq/L (Hạ natri máu), Kali máu tăng rất cao 7,2 mEq/L (Tăng kali máu mất muối)</b>, Glucose máu 45 mg/dL. <b>Nồng độ 17-Hydroxyprogesterone (17-OHP) trong huyết thanh tăng vọt lên 4.500 ng/dL</b> (bình thường < 100 ng/dL)."
      ],
      vitals: [
        ["Nhiệt độ", "36,5 °C"],
        ["Huyết áp", "60/35"],
        ["Mạch", "160 l/ph"],
        ["Nhịp thở", "28 l/ph"]
      ],
      stem: "Enzym bị thiếu hụt trong con đường sinh tổng hợp steroid và phác đồ điều trị hormone thay thế duy trì suốt đời là gì?",
      choices: [
        "Thiếu hụt enzym 21-Hydroxylase (chiếm 90–95% các ca CAH); điều trị duy trì bằng Hydrocortisone (thay thế glucocorticoid và ức chế ACTH) kết hợp Fludrocortisone (thay thế mineralocorticoid giữ muối)",
        "Thiếu hụt enzym 11-beta-Hydroxylase; điều trị bằng thuốc hạ áp",
        "Thiếu hụt enzym 17-alpha-Hydroxylase; điều trị bằng estrogen",
        "Hội chứng bất nhạy cảm Androgen hoàn toàn; phẫu thuật cắt tinh hoàn",
        "Hội chứng Turner (45,XO); điều trị bằng hormone tăng trưởng GH"
      ],
      answer: 0,
      why: [
        "Bệnh cảnh kinh điển của <b>Tăng sản tuyến thượng thận bẩm sinh (Congenital Adrenal Hyperplasia - CAH) thể mất muối cổ điển</b> do <b>Thiếu hụt enzym 21-Hydroxylase (chiếm > 90% các ca)</b> di truyền lặn trên NST thường:",
        "1. Thiếu 21-Hydroxylase làm <b>chặn đứng con đường tổng hợp Cortisol và Aldosterone</b>:",
        "- Thiếu Aldosterone -> Mất muối nước qua thận gây <b>Hạ Natri máu + Tăng Kali máu + Tụt huyết áp sốc</b> xuất hiện tuần thứ 1–2 sau sinh.",
        "- Thiếu Cortisol -> Mất ức chế ngược làm <b>tuyến yên tăng tiết ACTH ồ ạt</b>, kích thích vỏ thượng thận phì đại.",
        "2. Toàn bộ tiền chất bị ứ đọng (đặc biệt là <b>17-Hydroxyprogesterone / 17-OHP</b>) bị chuyển hướng ồ ạt sang con đường tổng hợp <b>Androgen (Testosterone)</b> -> Gây <b>Nam hóa cơ quan sinh dục ngoài ở bé gái (Âm vật phì đại, dính môi lớn)</b>.",
        "Điều trị chuẩn suốt đời: <b>Hydrocortisone</b> (để bù Cortisol và ức chế ACTH nhằm giảm sản xuất Androgen) phối hợp <b>Fludrocortisone</b> (bù Mineralocorticoid để giữ muối nước)."
      ],
      wrongs: {
        1: "Thiếu 11-beta-Hydroxylase làm tích tụ 11-deoxycorticosterone (DOC) có hoạt tính giữ muối gây TĂNG HUYẾT ÁP và HẠ KALI MÁU, không gây mất muối hạ huyết áp.",
        2: "Thiếu 17-alpha-Hydroxylase gây tăng huyết áp, hạ kali máu và không nam hóa (thiếu androgen).",
        3: "Bất nhạy cảm Androgen (AIS) có kiểu nhân 46,XY và cơ quan sinh dục ngoài là nữ hoàn toàn, không có suy thượng thận mất muối.",
        4: "Turner (45,XO) có cổ bàng quang, lùn và vô kinh nguyên phát, không có nam hóa âm vật và tăng 17-OHP."
      },
      objective:
        "Tăng sản thượng thận bẩm sinh do thiếu 21-Hydroxylase đặc trưng bởi 17-OHP tăng rất cao, nam hóa cơ quan sinh dục ở bé gái và suy thượng thận mất muối (hạ Na, tăng K, tụt HA); điều trị bằng Hydrocortisone + Fludrocortisone."
    },

    {
      spec: "Nội tiết",
      task: "Bước chẩn đoán và cơ chế",
      short: "Bệnh nhuyễn xương (Osteomalacia) do thiếu Vitamin D",
      vignette: [
        "Nữ 48 tuổi có tiền sử phẫu thuật cắt dạ dày nối hỗng tràng (Roux-en-Y gastric bypass) điều trị béo phì cách đây 3 năm, đến khám vì <b>đau nhức âm ỉ toàn bộ các xương chậu, cột sống và hai chân tăng dần</b> kèm yếu cơ gốc chi khiến bệnh nhân đi lại lạch bạch như dáng đi chim cánh cụt (Waddling gait) và khó khăn khi đứng dậy từ ghế.",
        "Khám: Ấn đau tức lan tỏa ở xương chậu và xương chày. Cơ lực gốc chi đùi hai bên giảm 4/5.",
        "Xét nghiệm máu: <b>Canxi huyết thanh giảm nhẹ 8,2 mg/dL, Phosphat huyết thanh giảm thấp 2,0 mg/dL (Hạ phosphat máu), Phosphatase kiềm (ALP) tăng cao 240 U/L</b>, <b>Nồng độ 25-Hydroxyvitamin D [25-(OH)D] giảm rất nặng 7 ng/mL</b> (bình thường > 30), <b>PTH nguyên vẹn tăng cao 135 pg/mL (Cường cận giáp thứ phát)</b>.",
        "Chụp X-quang khung chậu và xương đùi: Giảm đậm độ xương toàn bộ và phát hiện các đường sáng mảnh vuông góc với vỏ xương không di lệch (<b>Đường nứt xương giả / Vùng Looser - Looser's zones / Pseudofractures</b>)."
      ],
      vitals: [
        ["Nhiệt độ", "36,8 °C"],
        ["Huyết áp", "120/75"],
        ["Mạch", "74 l/ph"],
        ["Nhịp thở", "16 l/ph"]
      ],
      stem: "Cơ chế khiếm khuyết khoáng hóa chất nền xương của bệnh cảnh này là gì?",
      choices: [
        "Khiếm khuyết quá trình khoáng hóa chất nền xương mới tạo (Osteoid) do thiếu hụt Canxi và Phosphat thứ phát sau thiếu hụt Vitamin D mạn tính (Bệnh nhuyễn xương - Osteomalacia)",
        "Mất đồng đều cả chất khoáng và chất nền protein của xương trong Loãng xương",
        "Tiêu xương quá mức do u tương bào ác tính",
        "Đột biến gen Collagen type I trong tạo xương bất toàn",
        "Xơ cứng xương do ngộ độc Fluoride"
      ],
      answer: 0,
      why: [
        "Bệnh cảnh kinh điển của <b>Bệnh nhuyễn xương ở người lớn (Osteomalacia / ở trẻ em gọi là Còi xương Rickets)</b> thường xảy ra sau phẫu thuật giảm béo (Bariatric surgery), bệnh Celiac hoặc thiếu tiếp xúc ánh nắng mặt trời.",
        "Cơ chế bệnh sinh:",
        "1. Thiếu hụt trầm trọng <b>25-OH Vitamin D</b> làm giảm hấp thu Canxi và Phosphat tại ruột.",
        "2. Canxi máu giảm kích thích tuyến cận giáp tăng tiết <b>PTH phản ứng bù trừ (Cường cận giáp thứ phát)</b>.",
        "3. PTH tăng cao giúp duy trì canxi máu ở mức cận dưới bình thường nhưng lại <b>làm tăng bài tiết Phosphat ồ ạt qua nước tiểu -> gây HẠ PHOSPHAT MÁU NẶNG</b>.",
        "4. Tích số [Canxi x Phosphat] giảm thấp khiến các tạo cốt bào dù tiết ra chất nền hữu cơ (Osteoid) bình thường nhưng <b>KHÔNG THỂ KHOÁNG HÓA VÀ LẮNG ĐỌNG TINH THỂ HYDROXYAPATITE LÊN CHẤT NỀN ĐƯỢC (Impaired mineralization of osteoid)</b>.",
        "- Đặc trưng X-quang kinh điển: <b>Đường nứt xương giả (Looser's zones / Milkman lines)</b> là những đường thấu quang nhỏ vuông góc vỏ xương.",
        "- Phân biệt với <b>Loãng xương (Osteoporosis)</b>: Loãng xương giảm cả khối lượng khoáng lẫn chất nền hữu cơ theo tỉ lệ bình thường (xét nghiệm Canxi, Phosphat, ALP, PTH đều HOÀN TOÀN BÌNH THƯỜNG).",
        "Điều trị: <b>Bổ sung Vitamin D liều cao (Ergocalciferol / Cholecalciferol 50.000 IU/tuần) kết hợp Canxi</b>."
      ],
      wrongs: {
        1: "Loãng xương có các chỉ số sinh hóa máu (Canxi, Phosphat, ALP, PTH) hoàn toàn bình thường, không có Looser's zones và đau xương yếu cơ.",
        2: "U tương bào gây tăng Canxi máu và ức chế PTH.",
        3: "Tạo xương bất toàn (Osteogenesis imperfecta) do đột biến collagen type I gây củng mạc mắt xanh và gãy xương tái phát từ nhỏ.",
        4: "Ngộ độc Fluoride làm tăng đậm độ xương đặc xơ."
      },
      objective:
        "Nhuyễn xương (Osteomalacia do thiếu Vitamin D) gây khiếm khuyết khoáng hóa chất nền xương, đặc trưng bởi đau xương, yếu cơ, Looser's zones trên X-quang, Vitamin D giảm, PTH tăng, Canxi giảm nhẹ và Phosphat giảm."
    },

    {
      spec: "Nội tiết",
      task: "Bước chẩn đoán và điều trị",
      short: "Tăng cholesterol máu gia đình (Familial Hypercholesterolemia)",
      vignette: [
        "Nam 32 tuổi khỏe mạnh đến khám vì xuất hiện <b>các nốt cục cứng chắc không đau bám vào gân gót Achilles hai bên (U vàng gân - Tendon xanthomas) và ban vàng ở mí mắt (Xanthelasma)</b>, kèm vòng cung giác mạc sớm (Corneal arcus).",
        "Tiền sử gia đình: Bố đẻ bị nhồi máu cơ tim đột tử năm 39 tuổi, chú ruột phải đặt stent mạch vành năm 41 tuổi.",
        "Xét nghiệm bilan lipid máu lúc đói: <b>Cholesterol toàn phần 420 mg/dL</b>, <b>LDL-Cholesterol tăng cực cao 310 mg/dL</b> (tiêu chuẩn nghi ngờ > 190 mg/dL), Triglyceride 140 mg/dL (bình thường), HDL-C 45 mg/dL."
      ],
      vitals: [
        ["Nhiệt độ", "36,8 °C"],
        ["Huyết áp", "125/78"],
        ["Mạch", "72 l/ph"],
        ["Nhịp thở", "16 l/ph"]
      ],
      stem: "Cơ chế thụ thể phân tử và phác đồ phối hợp thuốc hạ lipid máu tích cực tối ưu là gì?",
      choices: [
        "Đột biến mất chức năng gen thụ thể LDL (LDL Receptor gene) làm tế bào gan không thể thu nhận và thanh thải hạt LDL từ máu; điều trị tích cực bằng Statin cường độ cao (Atorvastatin 80 mg hoặc Rosuvastatin 40 mg) PHỐI HỢP Ezetimibe và Thuốc ức chế PCSK9 (Evolocumab / Alirocumab)",
        "Thiếu hụt enzym Lipoprotein Lipase (LPL); điều trị bằng Fibrate đơn độc",
        "Đột biến gen ApoE2; điều trị bằng chế độ ăn kiêng đơn thuần",
        "Đột biến thụ thể Insulin; điều trị bằng Metformin",
        "Tăng Triglyceride máu gia đình; điều trị bằng dầu cá Omega-3 liều cao"
      ],
      answer: 0,
      why: [
        "Bệnh cảnh kinh điển của <b>Tăng cholesterol máu gia đình dị hợp tử (Heterozygous Familial Hypercholesterolemia - HeFH)</b> di truyền trội trên NST thường:",
        "- Cơ chế: <b>Đột biến mất chức năng ở gen Thụ thể LDL (LDLR gene, chiếm 85–90%)</b> hoặc đột biến gen <i>APOB</i> / đột biến tăng chức năng <i>PCSK9</i> làm <b>suy giảm khả năng bắt giữ và giáng hóa LDL-C tại tế bào gan</b>, dẫn đến nồng độ LDL-C lưu hành trong máu tăng cực cao suốt từ lúc mới sinh.",
        "- Dấu hiệu thực thể bệnh lý đặc trưng: <b>U vàng gân (Tendon xanthomas) đặc biệt ở gân gót Achilles và gân duỗi ngón tay</b> + Vòng cung giác mạc sớm trước 45 tuổi.",
        "- Nguy cơ: Xơ vữa mạch vành tiến triển tối cấp gây nhồi máu cơ tim sớm ở độ tuổi 30–40.",
        "- Phác đồ điều trị tích cực ba tầng theo khuyến cáo AHA/ACC/ESC (mục tiêu hạ LDL-C ≥ 50% và đạt < 55–70 mg/dL):",
        "1. <b>Statin cường độ cao liều tối đa dung nạp</b> (Atorvastatin 80 mg hoặc Rosuvastatin 40 mg).",
        "2. Phối hợp thêm <b>Ezetimibe 10 mg</b> (ức chế hấp thu cholesterol tại biểu mô ruột NPC1L1).",
        "3. Thêm <b>Thuốc kháng thể đơn dòng ức chế enzym PCSK9 (Evolocumab hoặc Alirocumab tiêm dưới da mỗi 2 tuần)</b> giúp tăng tái sử dụng thụ thể LDL trên bề mặt tế bào gan."
      ],
      wrongs: {
        1: "Thiếu enzym LPL (Tăng lipid máu Type I) làm tăng Triglyceride và Chylomicron cực cao gây viêm tụy cấp và u vàng phát ban (Eruptive xanthomas), không gây u vàng gân gót.",
        2: "Đột biến ApoE2 (Type III Dysbetalipoproteinemia) gây tăng cả Cholesterol và Triglyceride kèm u vàng lòng bàn tay (Palmar xanthomas).",
        3: "Đột biến thụ thể insulin gây hội chứng kháng insulin nặng, không gây tăng chọn lọc LDL-C > 300.",
        4: "Omega-3 chỉ hạ Triglyceride, không có tác dụng hạ LDL-C đột biến thụ thể."
      },
      objective:
        "Tăng cholesterol máu gia đình (HeFH do đột biến thụ thể LDL) đặc trưng bởi LDL-C > 190 mg/dL, u vàng gân gót Achilles và nhồi máu cơ tim sớm; điều trị tích cực bằng Statin cường độ cao phối hợp Ezetimibe và ức chế PCSK9."
    },

    {
      spec: "Nội tiết",
      task: "Bước chẩn đoán và điều trị",
      short: "Loãng xương sau mãn kinh và phòng ngừa gãy xương",
      vignette: [
        "Cụ bà 68 tuổi, thể trạng gầy nhỏ (BMI 19 kg/m²), mãn kinh năm 50 tuổi, đến khám vì đau lưng âm ỉ. Chiều cao của cụ đo được giảm 4 cm so với thời trẻ, cột sống lưng có gù nhẹ.",
        "Chụp X-quang cột sống thắt lưng: <b>Hình ảnh lún xẹp đốt sống L1 và L3 mức độ nhẹ (Vertebral compression fractures)</b>.",
        "Đo mật độ xương bằng phương pháp hấp phụ tia X năng lượng kép (DEXA scan): <b>Chỉ số T-score tại cổ xương đùi là -2,8 và tại cột sống thắt lưng là -3,1 (Tiêu chuẩn loãng xương khi T-score ≤ -2,5)</b>. Xét nghiệm Canxi, Phosphat, ALP, Creatinine và 25-OH Vitamin D trong giới hạn bình thường."
      ],
      vitals: [
        ["Nhiệt độ", "36,8 °C"],
        ["Huyết áp", "125/75"],
        ["Mạch", "72 l/ph"],
        ["Nhịp thở", "16 l/ph"]
      ],
      stem: "Thuốc chống hủy xương đầu tay được khuyến cáo lựa chọn hàng đầu để điều trị và phòng ngừa gãy xương tái phát là gì?",
      choices: [
        "Thuốc nhóm Bisphosphonate đường uống (Alendronate hoặc Risedronate) kết hợp bổ sung Canxi và Vitamin D",
        "Liệu pháp hormone thay thế Estrogen liều cao kéo dài đơn độc",
        "Chỉ định uống Canxi đơn độc không cần dùng thuốc chống hủy xương",
        "Thuốc giảm đau chống viêm không steroid NSAID kéo dài",
        "Phẫu thuật cố định cột sống bằng nẹp vít toàn bộ"
      ],
      answer: 0,
      why: [
        "Bệnh nhân có <b>Loãng xương sau mãn kinh (Postmenopausal Osteoporosis)</b> đã có biến chứng gãy lún đốt sống và <b>T-score ≤ -2,5 trên DEXA</b>.",
        "Cơ chế: Sau mãn kinh, sự thiếu hụt <b>Estrogen</b> làm mất tác dụng ức chế giải phóng cytokine tiền viêm (IL-1, IL-6, TNF-alpha) và làm tăng tín hiệu <b>RANKL</b>, dẫn đến tăng sinh và hoạt hóa quá mức các hủy cốt bào (Osteoclasts), làm tốc độ tiêu xương vượt xa tốc độ tạo xương.",
        "Điều trị đầu tay theo guideline quốc tế (AACE/Endocrine Society):",
        "1. <b>Thuốc nhóm Bisphosphonate đường uống (Alendronate 70 mg/tuần hoặc Risedronate 35 mg/tuần)</b> HOẶC <b>Zoledronic acid truyền tĩnh mạch 1 lần/năm</b> (gắn chặt vào bề mặt tinh thể hydroxyapatite và gây chết theo chương trình của hủy cốt bào).",
        "2. <b>Hướng dẫn uống Bisphosphonate đường uống đúng cách</b>: <b>Uống vào buổi sáng ngay khi vừa ngủ dậy với 1 cốc nước lọc đầy (200–250 mL), giữ tư thế ngồi thẳng hoặc đứng ít nhất 30–60 phút và không ăn uống gì khác</b> trong thời gian này để <b>phòng ngừa biến chứng loét viêm thực quản do thuốc (Pill-induced esophagitis)</b>.",
        "3. Bổ sung đầy đủ <b>Canxi (1.000–1.200 mg/ngày)</b> và <b>Vitamin D (800–1.000 IU/ngày)</b>."
      ],
      wrongs: {
        1: "Liệu pháp hormone Estrogen không còn là lựa chọn đầu tay do tăng nguy cơ ung thư vú, đột quỵ và thuyên tắc huyết khối tĩnh mạch ở phụ nữ cao tuổi.",
        2: "Canxi đơn độc không đủ để đảo ngược quá trình hủy xương của loãng xương đã có gãy đốt sống.",
        3: "NSAIDs không chữa được loãng xương và tăng nguy cơ loét dạ dày/suy thận ở người già.",
        4: "Gãy lún đốt sống không chèn ép tủy thần kinh hoàn toàn điều trị nội khoa bảo tồn, không mổ nẹp vít toàn bộ."
      },
      objective:
        "Loãng xương (T-score ≤ -2,5 hoặc có gãy xương lún đốt sống) điều trị đầu tay bằng Bisphosphonate đường uống (Alendronate) kèm Canxi + Vitamin D; hướng dẫn uống nhiều nước và ngồi thẳng 30 phút để phòng viêm loét thực quản."
    },

    {
      spec: "Nội tiết",
      task: "Bước chẩn đoán và tế bào học",
      short: "Ung thư tuyến giáp dạng nhú (Papillary Thyroid Carcinoma)",
      vignette: [
        "Nữ 34 tuổi đi khám sức khỏe tình cờ phát hiện nhân tuyến giáp. Khám cổ sờ thấy một <b>nhân cứng chắc, không đau, kích thước khoảng 1,8 cm ở thùy phải tuyến giáp di động theo nhịp nuốt</b> và một hạch cổ nhóm IV cùng bên to 1,2 cm.",
        "Siêu âm tuyến giáp: <b>Nhân giáp giảm âm rất mạnh, chiều cao lớn hơn chiều rộng (Taller-than-wide), bờ đa cung không đều, có các nốt vi vôi hóa nhỏ dạng chấm cát (Microcalcifications) và có tăng sinh mạch máu nội khối (TIRADS 5)</b>. Chức năng tuyến giáp TSH hoàn toàn bình thường.",
        "Tiến hành <b>Chọc hút tế bào bằng kim nhỏ (FNA) dưới hướng dẫn siêu âm</b>."
      ],
      vitals: [
        ["Nhiệt độ", "36,8 °C"],
        ["Huyết áp", "118/74"],
        ["Mạch", "72 l/ph"],
        ["Nhịp thở", "16 l/ph"]
      ],
      stem: "Đặc điểm nhân tế bào học kinh điển nào trên tiêu bản FNA khẳng định chẩn đoán Ung thư biểu mô tuyến giáp dạng nhú (Papillary Carcinoma)?",
      choices: [
        "Nhân tế bào sáng trong suốt có rãnh dọc khía nhân và thể cát vôi hóa đồng tâm (Orphan Annie eye nuclei, Nuclear grooves, and Psammoma bodies)",
        "Lắng đọng chất dạng tinh bột Amyloid bắt màu đỏ Congo dương tính",
        "Tế bào Hurthle ái toan tăng sinh đơn dòng",
        "Thâm nhiễm tương bào và u hạt không bã đậu",
        "Tế bào Reed-Sternberg đa nhân"
      ],
      answer: 0,
      why: [
        "Bệnh nhân mắc <b>Ung thư biểu mô tuyến giáp dạng nhú (Papillary Thyroid Carcinoma - PTC)</b> - loại ung thư tuyến giáp phổ biến nhất (chiếm 80–85% các ca ung thư giáp, tiên lượng sống sau 10 năm >95%).",
        "Đặc điểm hình ảnh siêu âm nguy cơ ác tính cao (TIRADS 5): Giảm âm, vi vôi hóa (Microcalcifications), bờ tua gai không đều, trục dọc (Taller than wide).",
        "Đặc điểm tế bào học và mô bệnh học kinh điển trên tiêu bản FNA:",
        "1. <b>Nhân mắt mồ côi Annie (Orphan Annie Eye Nuclei)</b>: Nhân tế bào to, sáng trong suốt do chất nhiễm sắc phân tán ra ngoại vi.",
        "2. <b>Khía nhân dọc (Nuclear grooves / Coffee bean nuclei)</b> và thể vùi giả trong nhân (Intranuclear pseudoinclusions).",
        "3. <b>Thể cát (Psammoma bodies)</b>: Các cấu trúc vôi hóa dạng lớp đồng tâm đặc trưng.",
        "Đường di căn chủ yếu: <b>Di căn theo đường bạch huyết đến các hạch cổ khu vực</b>.",
        "Điều trị chuẩn: <b>Phẫu thuật cắt toàn bộ tuyến giáp kết hợp vét hạch cổ</b> -> Xạ trị bằng Iod phóng xạ I-131 tiêu diệt mô giáp sót -> Uống Levothyroxine liều ức chế TSH."
      ],
      wrongs: {
        1: "Chất dạng tinh bột Amyloid bắt màu đỏ Congo phát huỳnh quang màu xanh táo dưới kính hiển vi phân cực là đặc trưng của Ung thư biểu mô tuyến giáp THỂ TỦY (Medullary Thyroid Cancer).",
        2: "Tế bào Hurthle gặp trong Ung thư thể nang (Follicular) hoặc viêm giáp Hashimoto.",
        3: "Thâm nhiễm tương bào gặp trong viêm giáp tự miễn.",
        4: "Tế bào Reed-Sternberg gặp trong U lympho Hodgkin."
      },
      objective:
        "Ung thư tuyến giáp dạng nhú (Papillary Carcinoma) di căn hạch cổ, tế bào học kinh điển có nhân mắt Orphan Annie, khía nhân và thể cát Psammoma bodies; điều trị bằng phẫu thuật cắt giáp vét hạch + I-131."
    },

    {
      spec: "Nội tiết",
      task: "Bước chẩn đoán và quản lý thai kỳ",
      short: "Đái tháo đường thai kỳ (Gestational Diabetes Mellitus - GDM)",
      vignette: [
        "Thai phụ 28 tuổi mang thai con đầu ở <b>tuần thứ 26 của thai kỳ</b>, đi khám thai định kỳ. Thai phụ không có tiền sử đái tháo đường trước khi mang thai, thể trạng thừa cân trước mang thai (BMI 27 kg/m²).",
        "Tiến hành làm <b>Nghiệm pháp dung nạp 75g Glucose đường uống 1 bước (75g 2-hour OGTT)</b> lúc đói vào buổi sáng:",
        "- <b>Glucose huyết tương lúc đói: 98 mg/dL</b> (Ngưỡng chẩn đoán ≥ 92 mg/dL).",
        "- Glucose huyết tương sau 1 giờ: 190 mg/dL (Ngưỡng chẩn đoán ≥ 180 mg/dL).",
        "- Glucose huyết tương sau 2 giờ: 162 mg/dL (Ngưỡng chẩn đoán ≥ 153 mg/dL)."
      ],
      vitals: [
        ["Nhiệt độ", "36,8 °C"],
        ["Huyết áp", "118/74"],
        ["Mạch", "78 l/ph"],
        ["Nhịp thở", "16 l/ph"]
      ],
      stem: "Chiến lược điều trị bước một ban đầu và thuốc hạ đường huyết lựa chọn đầu tay an toàn nhất khi chế độ ăn thất bại là gì?",
      choices: [
        "Chẩn đoán Đái tháo đường thai kỳ (GDM); bước một là Can thiệp chế độ dinh dưỡng tiết chế kết hợp tập thể dục nhẹ; nếu đường huyết không đạt mục tiêu thì Insulin là thuốc điều trị đầu tay chuẩn an toàn nhất",
        "Kê đơn thuốc uống Sulfonylurea (Glibenclamide) ngay lập tức",
        "Chỉ định đình chỉ thai nghén khẩn cấp",
        "Uống thuốc ức chế SGLT2 Dapagliflozin",
        "Không cần can thiệp gì vì đường huyết thai kỳ sẽ tự bình thường hóa sau sinh"
      ],
      answer: 0,
      why: [
        "Theo khuyến cáo <b>ADA và ACOG</b>, tất cả thai phụ không có đái tháo đường từ trước đều được sàng lọc <b>Đái tháo đường thai kỳ (GDM) ở tuần 24 đến 28 của thai kỳ</b> bằng nghiệm pháp 75g OGTT (chỉ cần <b>≥ 1 giá trị vượt ngưỡng</b> là khẳng định chẩn đoán: Lúc đói ≥ 92 mg/dL, 1h ≥ 180 mg/dL, 2h ≥ 153 mg/dL).",
        "Cơ chế: Bánh rau thai bài tiết các hormone kháng insulin (Human Placental Lactogen - hPL, Progesterone, Cortisol) đạt đỉnh ở tam cá nguyệt thứ 3.",
        "Chiến lược điều trị chuẩn:",
        "1. <b>Bước 1</b>: <b>Tiết chế dinh dưỡng và vận động thể lực</b> (ăn chia nhỏ bữa, giảm carbohydrate tinh chế, theo dõi đường huyết mao mạch hàng ngày).",
        "2. <b>Bước 2</b>: Nếu sau 1–2 tuần chế độ ăn không đạt mục tiêu (Đường huyết lúc đói ≤ 95 mg/dL và sau ăn 1h ≤ 140 mg/dL hoặc sau ăn 2h ≤ 120 mg/dL) -> <b>INSULIN LÀ THUỐC LỰA CHỌN HÀNG ĐẦU AN TOÀN NHẤT</b> (Insulin không qua hàng rào bánh rau thai, hiệu quả kiểm soát đường huyết tối ưu và giảm nguy cơ thai to, hạ đường huyết sơ sinh, đa ối).",
        "Lưu ý: <b>Thuốc ức chế SGLT2 và GLP-1 RA CHỐNG CHỈ ĐỊNH trong thai kỳ</b>."
      ],
      wrongs: {
        1: "Sulfonylurea qua hàng rào bánh rau thai và có nguy cơ gây hạ đường huyết sơ sinh kéo dài và tăng cân thai nhi.",
        2: "GDM kiểm soát nội khoa tốt đảm bảo thai kỳ an toàn, không có chỉ định đình chỉ thai.",
        3: "SGLT2i chống chỉ định tuyệt đối trong thai kỳ do nguy cơ dị tật thận tiết niệu thai nhi.",
        4: "Không kiểm soát đường huyết sẽ gây biến chứng thai to (Macrosomia), kẹt vai khi đẻ, đa ối và thai chết lưu."
      },
      objective:
        "Đái tháo đường thai kỳ (sàng lọc tuần 24-28 bằng 75g OGTT) điều trị bước một bằng điều chỉnh dinh dưỡng/vận động; nếu không đạt mục tiêu thì Insulin là thuốc đầu tay an toàn nhất (không qua nhau thai)."
    },

    {
      spec: "Nội tiết",
      task: "Bước chẩn đoán và biến chứng ác tính",
      short: "Viêm giáp Hashimoto và biến chứng U lympho tuyến giáp",
      vignette: [
        "Cụ bà 70 tuổi có tiền sử mắc Viêm tuyến giáp Hashimoto điều trị Levothyroxine 15 năm nay, đến khám khẩn cấp vì <b>bướu tuyến giáp to lên cực kỳ nhanh chóng chỉ trong vòng 3 tuần qua</b>.",
        "Khám cổ: Tuyến giáp to khổng lồ độ III, mật độ cứng chắc như gỗ, cố định dính chặt vào mô xung quanh, gây <b>khó thở thở rít thanh quản, nuốt nghẹn và khàn tiếng tiến triển nhanh</b> do chèn ép khí quản và thực quản. Xuất hiện nhiều hạch cổ to cứng hai bên.",
        "Xét nghiệm: Kháng thể <b>Anti-TPO (Anti-Thyroperoxidase) dương tính rất cao > 1.000 IU/mL</b>. Chụp CT cổ: Khối u tuyến giáp khổng lồ thâm nhiễm chèn ép hẹp lòng khí quản."
      ],
      vitals: [
        ["Nhiệt độ", "36,8 °C"],
        ["Huyết áp", "130/80"],
        ["Mạch", "76 l/ph"],
        ["Nhịp thở", "22 l/ph"]
      ],
      stem: "Biến chứng ác tính hiếm gặp nào có nguy cơ tăng gấp 60 lần ở bệnh nhân viêm giáp Hashimoto mạn tính và phương pháp sinh thiết xác định là gì?",
      choices: [
        "U lympho tuyến giáp nguyên phát (Primary Thyroid Lymphoma - thường là U lympho tế bào B lớn lan tỏa DLBCL); chẩn đoán bằng Sinh thiết lõi kim (Core needle biopsy) hoặc Sinh thiết mở",
        "Ung thư biểu mô tuyến giáp thể nhú",
        "Ung thư biểu mô tuyến giáp thể tủy",
        "Bướu giáp đơn thuần lành tính to nhanh do xuất huyết trong nang",
        "Áp xe tuyến giáp do vi khuẩn kỵ khí"
      ],
      answer: 0,
      why: [
        "Bệnh nhân có biến chứng kinh điển của <b>U lympho tuyến giáp nguyên phát (Primary Thyroid Lymphoma - phần lớn là U lympho tế bào B lớn lan tỏa / DLBCL)</b>.",
        "Dịch tễ học và cơ chế: <b>Bệnh nhân viêm tuyến giáp Hashimoto mạn tính có nguy cơ mắc U lympho tuyến giáp TĂNG GẤP 60 LẦN</b> so với người bình thường do quá trình kích thích viêm lympho mạn tính kéo dài hàng chục năm tại tuyến giáp.",
        "Dấu hiệu lâm sàng báo động đỏ: <b>Tuyến giáp to nhanh đột ngột trong vài tuần ở bệnh nhân cao tuổi có tiền sử Hashimoto kèm triệu chứng chèn ép cơ học dữ dội (khó thở, nuốt nghẹn, khàn tiếng)</b>.",
        "Chẩn đoán: <b>Chọc hút kim nhỏ (FNA) thường KHÔNG ĐỦ để phân biệt giữa viêm giáp Hashimoto nặng và u lympho</b>; do đó bắt buộc phải tiến hành <b>Sinh thiết lõi kim (Core Needle Biopsy) HOẶC Sinh thiết mở (Surgical biopsy)</b> để làm hóa mô miễn dịch (xác định dấu ấn CD20 của tế bào B).",
        "Điều trị: Rất nhạy cảm với <b>Hóa trị phác đồ CHOP kết hợp Rituximab (R-CHOP) và Xạ trị</b>."
      ],
      wrongs: {
        1: "Ung thư thể nhú tiến triển rất chậm qua nhiều năm, không to nhanh đột ngột gây chèn ép khẩn cấp trong 3 tuần.",
        2: "Ung thư thể tủy xuất phát từ tế bào C cận nang, không liên quan đến viêm giáp Hashimoto.",
        3: "Xuất huyết trong nang gây đau chói dữ dội đột ngột và trên siêu âm là nang dịch có dịch máu, không phải khối u đặc thâm nhiễm dính cứng.",
        4: "Áp xe giáp có sốt cao rét run, nóng đỏ đau tại chỗ và tăng bạch cầu cao."
      },
      objective:
        "Viêm giáp Hashimoto mạn tính có nguy cơ cao tiến triển thành U lympho tuyến giáp (to nhanh trong vài tuần, chèn ép khí quản khàn tiếng); chẩn đoán xác định bằng Sinh thiết lõi kim (Core biopsy) và điều trị bằng Hóa xạ trị (R-CHOP)."
    },

    {
      spec: "Nội tiết",
      task: "Bước chẩn đoán và điều trị",
      short: "Đái tháo nhạt do thận do dùng thuốc Lithium",
      vignette: [
        "Nam 42 tuổi có tiền sử Rối loạn cảm xúc lưỡng cực đang điều trị duy trì ổn định bằng <b>Lithium Carbonate trong 4 năm qua</b>. Bệnh nhân đến khám vì <b>uống rất nhiều nước (5–6 lít/ngày) và đi tiểu liên tục cả ngày lẫn đêm</b>.",
        "Xét nghiệm máu và nước tiểu:",
        "- <b>Natri huyết thanh: 146 mEq/L (ở giới hạn trên bình thường cao)</b>, Áp lực thẩm thấu huyết tương: 302 mOsm/kg.",
        "- <b>Áp lực thẩm thấu nước tiểu: 140 mOsm/kg (Nước tiểu bị pha loãng không thích hợp)</b>.",
        "- Sau khi tiêm thử nghiệm <b>Desmopressin (dDAVP)</b>: Áp lực thẩm thấu nước tiểu <b>chỉ tăng nhẹ lên 155 mOsm/kg (< 10% - Hoàn toàn không đáp ứng với dDAVP)</b>.",
        "- Nồng độ Lithium huyết thanh trong ngưỡng điều trị (0,9 mEq/L)."
      ],
      vitals: [
        ["Nhiệt độ", "36,8 °C"],
        ["Huyết áp", "122/76"],
        ["Mạch", "74 l/ph"],
        ["Nhịp thở", "16 l/ph"]
      ],
      stem: "Cơ chế gây độc thận của Lithium và thuốc lợi tiểu nào được chỉ định điều trị đặc hiệu để ức chế kênh đưa Lithium vào tế bào ống góp thận?",
      choices: [
        "Lithium tích tụ trong tế bào chính ống góp qua kênh ENaC làm ức chế tín hiệu Aquaporin-2 gây Đái tháo nhạt do thận (Nephrogenic DI); điều trị đặc hiệu bằng Thuốc lợi tiểu Amiloride (chẹn kênh ENaC)",
        "Lithium phá hủy thùy sau tuyến yên gây đái tháo nhạt trung ương; điều trị bằng dDAVP liều cao",
        "Lithium gây hoại tử ống thận cấp; điều trị bằng chạy thận nhân tạo",
        "Lithium kích thích bài tiết ANP từ tâm nhĩ; điều trị bằng bù muối",
        "Hội chứng Fanconi; điều trị bằng bù bicarbonate"
      ],
      answer: 0,
      why: [
        "Bệnh nhân bị <b>Đái tháo nhạt do thận do thuốc (Lithium-induced Nephrogenic Diabetes Insipidus)</b> - tác dụng phụ thận mạn tính phổ biến nhất của Lithium (gặp ở 20–30% bệnh nhân dùng kéo dài).",
        "Cơ chế sinh bệnh học phân tử:",
        "1. Lithium đi vào trong các <b>tế bào chính của ống góp thận (Principal cells)</b> thông qua <b>Kênh biểu mô Natri (ENaC - Epithelial Sodium Channel)</b>.",
        "2. Sự tích tụ Lithium trong bào tương sẽ ức chế men Adenylyl cyclase và enzym GSK-3beta, làm <b>mất khả năng đáp ứng của ống thận với hormone ADH -> các kênh nước Aquaporin-2 không thể hòa màng để tái hấp thu nước</b>.",
        "3. Nghiệm pháp tiêm dDAVP: <b>Không có đáp ứng (ALTT niệu không tăng)</b> khẳng định cơ chế tại thận.",
        "Điều trị đặc hiệu:",
        "- Xem xét ngừng hoặc giảm liều Lithium nếu bác sĩ tâm thần cho phép.",
        "- Thuốc điều trị đặc hiệu hàng đầu: <b>Thuốc lợi tiểu Amiloride</b> (Amiloride có tác dụng <b>phong bế trực tiếp kênh ENaC ở bờ lòng ống thận</b>, ngăn không cho Lithium tiếp tục đi vào tích tụ trong tế bào ống góp).",
        "- Phối hợp <b>Lợi tiểu Thiazide (Hydrochlorothiazide) + Hạn chế muối</b> (gây giảm nhẹ thể tích tuần hoàn làm tăng tái hấp thu nước và natri bù trừ ở ống lượn gần, làm giảm lượng nước đổ về ống góp)."
      ],
      wrongs: {
        1: "Lithium gây tổn thương thụ thể tại thận, không làm tổn thương tuyến yên; dDAVP hoàn toàn vô tác dụng.",
        2: "Chức năng lọc cầu thận Creatinine bình thường, không phải hoại tử ống thận cấp cần chạy thận.",
        3: "Không liên quan đến hormone ANP của tâm nhĩ.",
        4: "Hội chứng Fanconi là tổn thương ống lượn gần gây mất glucose, acid amin, phosphat và acid uric qua nước tiểu."
      },
      objective:
        "Đái tháo nhạt do thận do Lithium (không đáp ứng với dDAVP) do Lithium đi qua kênh ENaC gây trơ với ADH; điều trị đặc hiệu bằng Thuốc lợi tiểu Amiloride (chẹn kênh ENaC ngăn Lithium vào tế bào ống góp) kết hợp Thiazide và hạn chế muối."
    }
  ]
};
