/* ==========================================================================
   Bộ đề: Hô hấp học — 30 ca lâm sàng chuyên sâu theo guideline GINA, GOLD & ATS.
   Tài liệu tham khảo: Bệnh viện Bạch Mai, Hướng dẫn chẩn đoán điều trị bệnh Hô hấp.
   ========================================================================== */
window.QUIZ_SET = {
  id: "ho-hap",
  eyebrow: "USMLE Step 2 CK · Chuyên đề Nội khoa",
  title: "Hô hấp học",
  blurb: "30 ca lâm sàng hô hấp chuyên sâu (GINA, GOLD, ATS/IDSA, Bạch Mai): Hen phế quản, đợt cấp COPD, viêm phổi CAP/áp xe, ARDS, tràn dịch/tràn khí màng phổi, thuyên tắc phổi và ung thư phổi.",

  cases: [
    {
      spec: "Hô hấp",
      task: "Bước xử trí tiếp theo",
      short: "Đợt cấp COPD có toan hô hấp cấp",
      vignette: [
        "Nam 68 tuổi tiền sử COPD giai đoạn nặng (GOLD D) hút thuốc lá 50 gói-năm, được đưa vào cấp cứu vì khó thở dữ dội, tím tái và ngủ gà tăng dần trong 24 giờ qua.",
        "Khám: Thở co kéo cơ ức đòn chũm, lồng ngực hình thùng, rì rào phế nang giảm toàn bộ, nghe có ran rít ran ngáy khắp hai phế trường.",
        "Khí máu động mạch (đang thở oxy qua gọng kính 2 L/phút): <b>pH 7,26, PaCO2 68 mm Hg, PaO2 55 mm Hg, HCO3- 30 mEq/L (Toan hô hấp mất bù trên nền toan hô hấp mạn tính)</b>."
      ],
      vitals: [
        ["Nhiệt độ", "37,4 °C"],
        ["Huyết áp", "145/88"],
        ["Mạch", "110 l/ph"],
        ["Nhịp thở", "30 l/ph"],
        ["SpO2", "85%"]
      ],
      stem: "Bước can thiệp hỗ trợ hô hấp tiếp theo có bằng chứng giảm tỉ lệ đặt nội khí quản và giảm tử vong cao nhất là gì?",
      choices: [
        "Thở máy không xâm nhập áp lực dương hai mức (NIV / BiPAP)",
        "Tăng lưu lượng oxy qua mặt nạ thở lại lên 15 L/phút để nâng SpO2 lên 100%",
        "Đặt nội khí quản thở máy xâm nhập ngay lập tức mà không cần thử thở không xâm nhập",
        "Tiêm tĩnh mạch Doxapram để kích thích trung tâm hô hấp",
        "Chỉ cho khí dung Salbutamol và tiếp tục theo dõi tại phòng bệnh thường"
      ],
      answer: 0,
      why: [
        "Bệnh nhân có <b>Đợt cấp COPD nặng kèm toan hô hấp cấp (pH < 7,35 và PaCO2 > 45 mmHg)</b>.",
        "<b>Thông khí nhân tạo không xâm nhập áp lực dương (NPPV / BiPAP)</b> là <b>chỉ định đầu tay số một</b> theo guideline GOLD: BiPAP giúp hỗ trợ công thở của cơ hô hấp, đào thải CO2 ứ đọng, cải thiện oxy máu, làm giảm 60% tỉ lệ phải đặt nội khí quản và giảm tỉ lệ tử vong rõ rệt.",
        "Lưu ý: <b>Mục tiêu oxy trong COPD chỉ duy trì SpO2 từ 88–92%</b> (hoặc PaO2 60–70 mmHg); thở oxy liều quá cao làm mất kích thích hô hấp do thiếu oxy và làm tăng hiệu ứng Haldane, gây ứ trệ CO2 nặng nề dẫn đến hôn mê toan hô hấp."
      ],
      wrongs: {
        1: "Tăng oxy liều cao (15 L/ph) làm tăng thêm ứ trệ CO2 (CO2 retention) do triệt tiêu kích thích hô hấp ngoại vi và gây chết não vì toan máu.",
        2: "Đặt nội khí quản chỉ đặt ra khi BiPAP thất bại sau 1–2 giờ, bệnh nhân ngừng thở hoặc hôn mê sâu mất phản xạ bảo vệ đường thở.",
        3: "Thuốc kích thích hô hấp không còn được khuyến cáo vì tăng tiêu thụ oxy cơ tim và gây loạn nhịp.",
        4: "Khí dung đơn thuần không đủ giải quyết tình trạng kiệt cơ hô hấp và toan máu nặng."
      },
      objective:
        "Đợt cấp COPD có toan hô hấp (pH < 7,35, PaCO2 > 45) có chỉ định thở máy không xâm nhập BiPAP đầu tay; mục tiêu SpO2 kiểm soát ở mức 88–92% để tránh ứ trệ CO2."
    },

    {
      spec: "Hô hấp",
      task: "Lựa chọn điều trị theo bậc",
      short: "Hen phế quản kiểm soát kém theo GINA",
      vignette: [
        "Nữ 24 tuổi có tiền sử hen phế quản từ nhỏ, đến khám vì 1 tháng nay thường xuyên bị các cơn khó thở khò khè ban ngày (4–5 ngày mỗi tuần) và thức giấc ban đêm do khó thở 2 lần mỗi tuần. Bệnh nhân phải dùng bình xịt cắt cơn SABA (Salbutamol) hầu như mỗi ngày.",
        "Hiện tại bệnh nhân chỉ dùng Salbutamol xịt khi có cơn đau khó thở mà không dùng bất kỳ thuốc duy trì nào khác.",
        "Đo chức năng thông khí phổi (Spirometry): FEV1 đạt 72% giá trị dự đoán, tỉ số FEV1/FVC = 0,68. Sau khi hít 400 mcg Salbutamol, FEV1 tăng 16% và tăng 280 mL (test hồi phục phế quản dương tính)."
      ],
      vitals: [
        ["Nhiệt độ", "36,8 °C"],
        ["Huyết áp", "118/74"],
        ["Mạch", "78 l/ph"],
        ["Nhịp thở", "16 l/ph"]
      ],
      stem: "Theo hướng dẫn quốc tế GINA mới nhất, chiến lược điều trị duy trì và cắt cơn ưu tiên hàng đầu là gì?",
      choices: [
        "Sử dụng Corticoid hít liều thấp phối hợp Formoterol (ICS-Formoterol) dùng vừa làm thuốc duy trì hàng ngày vừa làm thuốc cắt cơn khi khó thở (Liệu pháp MART/SMART)",
        "Tiếp tục dùng Salbutamol (SABA) xịt đơn độc khi có triệu chứng khó thở",
        "Uống Corticoid toàn thân (Prednisolone) kéo dài suốt đời",
        "Dùng thuốc giãn phế quản tác dụng kéo dài LABA (Salmeterol) đơn độc không có ICS",
        "Chỉ định uống Theophylline giải phóng chậm hàng ngày"
      ],
      answer: 0,
      why: [
        "Theo khuyến cáo <b>GINA (Global Initiative for Asthma)</b>, <b>KHÔNG CÒN KHUYẾN CÁO SỬ DỤNG SABA ĐƠN ĐỘC</b> vì dùng SABA đơn độc làm tăng nguy cơ đợt cấp nặng và tử vong do hen.",
        "Phác đồ ưu tiên số 1 (Track 1) của GINA cho bệnh nhân hen từ bậc 3 trở lên là: <b>Liệu pháp SMART/MART (Single Inhaler Maintenance and Reliever Therapy)</b> sử dụng <b>Corticoid hít phối hợp Formoterol (ICS-Formoterol liều thấp, ví dụ Budesonide-Formoterol)</b> trong một bình hít duy nhất:",
        "- Dùng <b>hàng ngày</b> làm thuốc kiểm soát nền.",
        "- Dùng <b>ngay khi xuất hiện triệu chứng khó thở</b> làm thuốc cắt cơn (vì Formoterol có tác dụng giãn phế quản nhanh tương đương Salbutamol trong khi vẫn cung cấp thêm một liều ICS chống viêm tại chỗ ngay thời điểm đường thở bị kích thích)."
      ],
      wrongs: {
        1: "SABA đơn độc làm tăng nguy cơ co thắt phế quản phản ứng và tăng đợt cấp hen ác tính.",
        2: "Corticoid uống duy trì gây biến chứng toàn thân nặng nề (loãng xương, đái tháo đường, suy thượng thận) và chỉ dùng cho hen kháng trị bậc 5.",
        3: "LABA đơn độc (không có ICS) bị CHỐNG CHỈ ĐỊNH TUYỆT ĐỐI trong hen vì làm tăng nguy cơ tử vong do hen.",
        4: "Theophylline có cửa sổ điều trị hẹp và độc tính cao, không phải lựa chọn ưu tiên."
      },
      objective:
        "Hướng dẫn GINA khuyến cáo liệu pháp SMART/MART với ICS-Formoterol làm cả thuốc duy trì và cắt cơn; chống chỉ định dùng SABA đơn độc hoặc LABA đơn độc trong điều trị hen."
    },

    {
      spec: "Hô hấp",
      task: "Bước xử trí cấp cứu",
      short: "Cơn hen phế quản cấp nặng đe dọa tính mạng",
      vignette: [
        "Nam 19 tuổi tiền sử hen phế quản nặng được đưa vào phòng cấp cứu trong tình trạng khó thở dữ dội, không thể nói hết một câu nguyên vẹn, vã mồ hôi và ngồi chồm hổm ra trước để thở.",
        "Khám: Thở nhanh 36 l/phút, co kéo hõm ức và cơ liên sườn. Ban đầu nghe phổi có ran rít ran ngáy dữ dội, nhưng 15 phút sau nghe phổi thấy <b>âm phế bào giảm sút nghiêm trọng, gần như không nghe thấy tiếng thở hay tiếng ran (lồng ngực im lặng - Silent chest)</b>.",
        "Khí máu động mạch: <b>pH 7,35, PaCO2 42 mm Hg, PaO2 56 mm Hg</b>."
      ],
      vitals: [
        ["Nhiệt độ", "37,0 °C"],
        ["Huyết áp", "135/85"],
        ["Mạch", "130 l/ph"],
        ["Nhịp thở", "36 l/ph"],
        ["SpO2", "84% với khí trời"]
      ],
      stem: "Ý nghĩa của giá trị PaCO2 42 mm Hg và dấu hiệu 'lồng ngực im lặng' ở bệnh nhân này là gì?",
      choices: [
        "Dấu hiệu cảnh báo kiệt cơ hô hấp cực kỳ nguy hiểm đe dọa ngừng thở; cần dùng Magnesi sulfat tĩnh mạch và chuẩn bị đặt nội khí quản cấp cứu",
        "Dấu hiệu cải thiện tốt vì PaCO2 đã trở về bình thường; chỉ cần cho bệnh nhân nghỉ ngơi",
        "Bệnh nhân bị toan hô hấp mạn tính; không cần can thiệp thêm",
        "Dấu hiệu của tràn dịch màng phổi lượng nhiều hai bên",
        "Dấu hiệu co thắt phế quản đã tự thoái lui hoàn toàn"
      ],
      answer: 0,
      why: [
        "Trong cơn hen cấp, bệnh nhân thở nhanh sâu 36 l/phút để bù trừ, đáng lẽ PaCO2 phải giảm rất thấp (< 30–35 mmHg).",
        "Khi <b>PaCO2 'bình thường hóa giả tạo' (42 mmHg) hoặc bắt đầu tăng lên</b> kết hợp với dấu hiệu <b>'Lồng ngực im lặng (Silent Chest)'</b>, đây là <b>dấu hiệu báo động đỏ của kiệt cơ hô hấp sắp ngừng thở</b> (không còn đủ sức để di chuyển luồng khí tạo ra tiếng ran).",
        "Xử trí cấp cứu: Oxy lưu lượng cao + Khí dung liên tục SABA phối hợp Ipratropium (SAMA) + <b>Corticoid tĩnh mạch (Methylprednisolone)</b> + <b>Magnesi sulfat 2g truyền tĩnh mạch</b> và chuẩn bị sẵn sàng phương tiện <b>đặt nội khí quản thở máy</b>."
      ],
      wrongs: {
        1: "Hiểu nhầm PaCO2 42 mmHg là bình thường trong bối cảnh thở nhanh 36 l/ph là sai lầm tử vong kinh điển; đây là dấu hiệu ứ CO2 do kiệt cơ hô hấp.",
        2: "Bệnh nhân không có tiền sử toan hô hấp mạn tính và đang có cơn khó thở cấp tính đe dọa tính mạng.",
        3: "Lồng ngực im lặng ở đây là do phế quản co thắt bít tắc nghẽn hoàn toàn, không phải tràn dịch màng phổi.",
        4: "Bệnh nhân đang tím tái, thở co kéo và SpO2 tụt còn 84%, không hề thoái lui."
      },
      objective:
        "Trong cơn hen phế quản cấp, PaCO2 bình thường hóa hoặc tăng lên kèm 'lồng ngực im lặng' là dấu hiệu kiệt cơ hô hấp đe dọa ngừng thở tử vong; xử trí bằng Magnesi sulfat tĩnh mạch, Corticoid tĩnh mạch và chuẩn bị đặt NKQ."
    },

    {
      spec: "Hô hấp",
      task: "Phân tầng nguy cơ và phác đồ kháng sinh",
      short: "Viêm phổi mắc phải cộng đồng (CAP) theo thang điểm CURB-65",
      vignette: [
        "Nam 72 tuổi được người nhà đưa đến khám vì sốt cao 39 °C, ho khạc đờm màu gỉ sắt và đau ngực kiểu màng phổi bên phải 3 ngày nay. Người nhà nhận thấy hôm nay cụ bị lú lẫn, không nhớ ngày tháng.",
        "Khám: Thở nhanh 32 l/phút, nghe phổi có hội chứng đông đặc (tiếng cọ màng phổi, ran nổ khu trú và gõ đục) ở 1/3 dưới phổi phải. Huyết áp đo được <b>85/55 mm Hg</b>.",
        "Xét nghiệm máu: Bạch cầu 18.500/mm³ (88% Neutrophil), <b>Ure máu (BUN) 28 mg/dL (10 mmol/L)</b>, Creatinine 1,4 mg/dL. X-quang ngực: Đông đặc phế nang thùy dưới phổi phải."
      ],
      vitals: [
        ["Nhiệt độ", "39,0 °C"],
        ["Huyết áp", "85/55"],
        ["Mạch", "116 l/ph"],
        ["Nhịp thở", "32 l/ph"],
        ["SpO2", "89% khí trời"]
      ],
      stem: "Điểm CURB-65 của bệnh nhân là bao nhiêu và phác đồ kháng sinh nhập viện điều trị thích hợp nhất là gì?",
      choices: [
        "Điểm CURB-65 = 4 điểm (Lú lẫn, Ure > 7 mmol/L, Nhịp thở ≥ 30, Huyết áp < 90/60, Tuổi ≥ 65); chỉ định nhập viện điều trị nội trú bằng Ceftriaxone (hoặc Cefotaxime) kết hợp Azithromycin (hoặc Levofloxacin)",
        "Điểm CURB-65 = 0 điểm; chỉ định kê đơn Amoxicillin đường uống điều trị ngoại trú tại nhà",
        "Điểm CURB-65 = 1 điểm; chỉ định dùng Ciprofloxacin đường uống đơn độc",
        "Không cần dùng kháng sinh, chỉ cần bù dịch và hạ sốt bằng Paracetamol",
        "Chỉ định dùng Vancomycin kết hợp Colistin đường hít"
      ],
      answer: 0,
      why: [
        "Thang điểm <b>CURB-65</b> đánh giá mức độ nặng của Viêm phổi cộng đồng (CAP):",
        "- <b>C</b>onfusion (Lú lẫn): Có (+1)",
        "- <b>U</b>rea > 7 mmol/L (BUN > 19 mg/dL): 28 mg/dL (+1)",
        "- <b>R</b>espiratory rate ≥ 30 l/phút: 32 l/phút (+1)",
        "- <b>B</b>lood pressure (HA tâm thu < 90 hoặc tâm trương ≤ 60): 85/55 mmHg (+1)",
        "- Tuổi <b>65</b> trở lên: 72 tuổi (+1)",
        "-> <b>Tổng điểm CURB-65 = 4 hoặc 5 điểm</b> (Nguy cơ tử vong rất cao >20%, bắt buộc nhập viện điều trị nội trú/xem xét ICU).",
        "Phác đồ kháng sinh chuẩn theo ATS/IDSA cho CAP nội trú: <b>Beta-lactam phổ rộng (Ceftriaxone / Ampicillin-Sulbactam) PHỐI HỢP Macrolide (Azithromycin)</b> HOẶC <b>Fluoroquinolone hô hấp đơn độc (Levofloxacin / Moxifloxacin)</b>."
      ],
      wrongs: {
        1: "Điểm 4-5 bắt buộc nhập viện khẩn cấp, điều trị ngoại trú bằng Amoxicillin sẽ dẫn đến sốc nhiễm khuẩn tử vong.",
        2: "Ciprofloxacin không phải là Quinolone hô hấp vì không bao phủ tốt phế cầu khuẩn (Streptococcus pneumoniae).",
        3: "Viêm phổi thùy điển hình do vi khuẩn bắt buộc điều trị kháng sinh diệt khuẩn khẩn cấp.",
        4: "Colistin chỉ dùng cho vi khuẩn Gram âm đa kháng trong bệnh viện, không phải chỉ định ban đầu cho CAP."
      },
      objective:
        "Thang điểm CURB-65 (Lú lẫn, Ure, Nhịp thở, Huyết áp, Tuổi ≥65) phân tầng mức độ nặng của viêm phổi CAP; điểm ≥2 cần nhập viện điều trị bằng Beta-lactam + Macrolide (hoặc Fluoroquinolone hô hấp)."
    },

    {
      spec: "Hô hấp",
      task: "Lựa chọn kháng sinh",
      short: "Viêm phổi hít ở bệnh nhân nghiện rượu",
      vignette: [
        "Nam 52 tuổi có tiền sử nghiện rượu nặng, được đưa vào viện vì sốt, ho khạc <b>đờm mủ màu nâu xám mùi hôi thối thối khắm</b> và sụt cân 2 tuần nay. Bệnh nhân có nhiều cơn say xỉn nôn mửa và ngủ li bì.",
        "Khám: Vệ sinh răng miệng rất kém, nhiều răng sâu và viêm quanh cuống răng. Nghe phổi có hội chứng đông đặc kèm ran nổ ở vùng giữa lưng bên phải.",
        "Chụp X-quang và CT ngực: Hình ảnh ổ tổn thương đông đặc tạo hang có mức nước - hơi (<b>áp xe phổi</b>) nằm ở <b>phân thùy sau thùy trên phổi phải (posterior segment of right upper lobe)</b>."
      ],
      vitals: [
        ["Nhiệt độ", "38,6 °C"],
        ["Huyết áp", "122/76"],
        ["Mạch", "96 l/ph"],
        ["Nhịp thở", "20 l/ph"]
      ],
      stem: "Căn nguyên vi sinh chủ yếu và phác đồ kháng sinh lựa chọn đầu tay là gì?",
      choices: [
        "Vi khuẩn kỵ khí khoang miệng (Peptostreptococcus, Fusobacterium, Prevotella); điều trị bằng Ampicillin-Sulbactam (hoặc Clindamycin / Amoxicillin-Clavulanate)",
        "Pseudomonas aeruginosa; điều trị bằng Ciprofloxacin đường uống",
        "Pneumocystis jirovecii; điều trị bằng Trimethoprim-Sulfamethoxazole",
        "Mycoplasma pneumoniae; điều trị bằng Doxycycline",
        "Virus cúm Influenza A; điều trị bằng Oseltamivir"
      ],
      answer: 0,
      why: [
        "Bệnh cảnh kinh điển của <b>Viêm phổi hít dẫn đến Áp xe phổi</b> (Aspiration Pneumonia / Lung Abscess) trên bệnh nhân nghiện rượu/suy giảm ý thức: ho khạc đờm mủ <b>mùi thối khắm đặc trưng</b>, sâu răng nặng, tổn thương tạo hang có mức nước - hơi ở vùng thấp phụ thuộc trọng lực (phân thùy sau thùy trên hoặc phân thùy đỉnh thùy dưới phổi phải do phế quản gốc phải dốc và thẳng hơn).",
        "Căn nguyên chủ đạo là <b>hỗn hợp vi khuẩn kỵ khí khoang miệng</b> kết hợp liên cầu khuẩn.",
        "Phác đồ điều trị đầu tay theo khuyến cáo: <b>Ampicillin-Sulbactam tĩnh mạch</b> HOẶC <b>Amoxicillin-Clavulanate</b> (hoặc <b>Clindamycin</b>). Điều trị kháng sinh kéo dài cho đến khi tổn thương trên X-quang xóa mờ hoàn toàn (thường 4–6 tuần)."
      ],
      wrongs: {
        1: "Ciprofloxacin không có tác dụng trên vi khuẩn kỵ khí khoang miệng gây áp xe phổi.",
        2: "Pneumocystis gây viêm phổi kẽ ở bệnh nhân HIV suy giảm miễn dịch nặng, không gây ho khạc đờm thối và áp xe tạo hang.",
        3: "Mycoplasma gây viêm phổi không điển hình ở người trẻ, không gây áp xe phổi kỵ khí.",
        4: "Thuốc kháng virus không có tác dụng trên tổn thương áp xe phổi vi khuẩn kỵ khí."
      },
      objective:
        "Viêm phổi hít/áp xe phổi do vi khuẩn kỵ khí khoang miệng (đờm thối, vị trí phân thùy sau thùy trên phổi phải) ở người nghiện rượu/sâu răng; điều trị đầu tay bằng Ampicillin-Sulbactam hoặc Clindamycin."
    },

    {
      spec: "Hô hấp",
      task: "Phân loại sinh hóa dịch màng phổi",
      short: "Tràn dịch màng phổi - Tiêu chuẩn Light",
      vignette: [
        "Nam 64 tuổi tiền sử suy tim mạn tính vào viện vì khó thở tăng dần. Khám thấy rì rào phế nang mất ở 1/3 dưới phổi phải, gõ đục. X-quang ngực: Tràn dịch màng phổi lượng vừa bên phải.",
        "Chọc hút dịch màng phổi xét nghiệm sinh hóa: Dịch màu vàng chanh trong vắt, <b>Protein dịch màng phổi 2,1 g/dL</b> (Protein huyết thanh 6,8 g/dL -> Tỉ số = 0,31), <b>LDH dịch màng phổi 80 U/L</b> (LDH huyết thanh 220 U/L, giới hạn trên bình thường của LDH huyết thanh là 200 U/L -> Tỉ số LDH = 0,36 và nồng độ LDH dịch < 2/3 giới hạn trên)."
      ],
      vitals: [
        ["Nhiệt độ", "36,8 °C"],
        ["Huyết áp", "130/80"],
        ["Mạch", "78 l/ph"],
        ["Nhịp thở", "18 l/ph"]
      ],
      stem: "Theo tiêu chuẩn Light, dịch màng phổi này thuộc loại nào và căn nguyên phù hợp nhất là gì?",
      choices: [
        "Dịch thấm (Transudate) do tăng áp lực thủy tĩnh trong Suy tim ứ huyết; điều trị bằng tối ưu hóa thuốc suy tim và lợi tiểu",
        "Dịch tiết (Exudate) do Viêm màng phổi nhiễm khuẩn; cần đặt ống dẫn lưu màng phổi ngay",
        "Dịch tiết do Ung thư màng phổi di căn; cần sinh thiết màng phổi mù",
        "Dịch dưỡng chấp do rò ống ngực; cần phẫu thuật thắt ống ngực",
        "Dịch mủ màng phổi; cần bơm rửa khoang màng phổi bằng dung dịch kháng sinh"
      ],
      answer: 0,
      why: [
        "<b>Tiêu chuẩn Light (Light's Criteria)</b> để xác định <b>Dịch tiết (Exudate)</b> khi thỏa mãn <b>ÍT NHẤT 1 TRONG 3 TIÊU CHUẨN</b>:",
        "1. Tỉ số Protein dịch màng phổi / Protein huyết thanh > 0,5.",
        "2. Tỉ số LDH dịch màng phổi / LDH huyết thanh > 0,6.",
        "3. LDH dịch màng phổi > 2/3 giới hạn trên bình thường của LDH huyết thanh.",
        "Ở bệnh nhân này, <b>CẢ 3 TIÊU CHUẨN ĐỀU ÂM TÍNH</b> (Tỉ số Protein 0,31 < 0,5; Tỉ số LDH 0,36 < 0,6; LDH 80 < 133) -> Chẩn đoán xác định là <b>DỊCH THẤM (Transudate)</b>.",
        "Căn nguyên hàng đầu của dịch thấm là <b>Suy tim ứ huyết</b> (tăng áp lực thủy tĩnh) hoặc Xơ gan, Hội chứng thận hư (giảm áp lực keo). Điều trị bằng <b>Lợi tiểu và tối ưu thuốc suy tim</b>."
      ],
      wrongs: {
        1: "Dịch tiết phải thỏa mãn ít nhất 1 tiêu chuẩn Light; ở đây cả 3 tiêu chuẩn đều âm tính.",
        2: "Tràn dịch do ung thư luôn là dịch tiết (Exudative effusion) do tổn thương tăng tính thấm màng phổi.",
        3: "Dịch dưỡng chấp có nồng độ Triglyceride dịch > 110 mg/dL và màu trắng đục như sữa.",
        4: "Mủ màng phổi có dịch đục mủ, LDH > 1000 U/L, pH < 7,2."
      },
      objective:
        "Tiêu chuẩn Light phân biệt dịch tiết và dịch thấm; dịch thấm (khi cả 3 tiêu chuẩn Light âm tính) do suy tim/xơ gan được điều trị bằng lợi tiểu mà không cần dẫn lưu hay sinh thiết màng phổi."
    },

    {
      spec: "Hô hấp",
      task: "Chỉ định dẫn lưu màng phổi",
      short: "Tràn dịch màng phổi cận viêm biến chứng (Complicated Parapneumonic Effusion)",
      vignette: [
        "Nam 55 tuổi đang điều trị viêm phổi thùy trái bằng Ceftriaxone ngày thứ 4 nhưng vẫn sốt cao dao động 38,8 °C và đau tức ngực bên trái tăng dần.",
        "Siêu âm ngực: Lớp dịch màng phổi tự do bên trái dày 35 mm có nhiều vách hóa mỏng bên trong. Chọc hút dịch màng phổi xét nghiệm: Dịch màu vàng đục, <b>pH dịch màng phổi 7,12</b>, <b>Glucose dịch màng phổi 32 mg/dL</b>, <b>LDH dịch màng phổi 1.250 U/L</b>. Nhuộm Gram thấy có cầu khuẩn Gram dương."
      ],
      vitals: [
        ["Nhiệt độ", "38,8 °C"],
        ["Huyết áp", "125/78"],
        ["Mạch", "98 l/ph"],
        ["Nhịp thở", "22 l/ph"]
      ],
      stem: "Chỉ định can thiệp bắt buộc tiếp theo để điều trị triệt để ổ tràn dịch này là gì?",
      choices: [
        "Đặt ống dẫn lưu màng phổi kín (Chest tube) để tháo sạch mủ/dịch kết hợp tiếp tục kháng sinh",
        "Chỉ cần tăng liều kháng sinh đường tĩnh mạch và không can thiệp thủ thuật",
        "Chọc hút dịch màng phổi bằng kim nhỏ lặp lại mỗi 3 ngày",
        "Tiêm corticoid trực tiếp vào khoang màng phổi để chống dính",
        "Chuyển sang dùng kháng sinh đường uống ngoại trú"
      ],
      answer: 0,
      why: [
        "Bệnh nhân có <b>Tràn dịch màng phổi cận viêm có biến chứng / Mủ màng phổi (Complicated Parapneumonic Effusion / Empyema)</b>.",
        "Các tiêu chuẩn bắt buộc phải <b>ĐẶT ỐNG DẪN LƯU MÀNG PHỔI KÍN (Chest tube drainage)</b> ngay gồm:",
        "1. <b>pH dịch màng phổi < 7,20</b> (chỉ điểm chuyển hóa kỵ khí của vi khuẩn sinh acid).",
        "2. <b>Glucose dịch màng phổi < 60 mg/dL</b> (vi khuẩn và bạch cầu tiêu thụ glucose).",
        "3. <b>LDH dịch màng phổi > 1.000 U/L</b>.",
        "4. Dịch mủ đại thể hoặc nhuộm Gram/cấy vi khuẩn dương tính.",
        "5. Có vách hóa (loculations) trên siêu âm.",
        "Kháng sinh đơn thuần không thể ngấm vào khoang màng phổi có pH acid và vỏ xơ dày; nếu không dẫn lưu sớm sẽ dẫn đến xơ hóa dày dính màng phổi (trapped lung) phải phẫu thuật bóc vỏ phổi."
      ],
      wrongs: {
        1: "Chỉ dùng kháng sinh đơn thuần khi pH < 7,2 sẽ thất bại hoàn toàn vì kháng sinh bị bất hoạt trong môi trường acid và ổ dịch hóa mủ tạo vách.",
        2: "Chọc kim nhỏ không thể hút sạch dịch có vách hóa và fibrin dày.",
        3: "Tiêm corticoid nội khoang màng phổi làm ức chế miễn dịch tại chỗ và bùng phát nhiễm khuẩn huyết.",
        4: "Bệnh nhân đang nhiễm trùng nặng cần dẫn lưu và kháng sinh tĩnh mạch nội trú."
      },
      objective:
        "Tràn dịch màng phổi cận viêm có biến chứng (pH < 7,2, Glucose < 60 mg/dL, LDH > 1000 hoặc Gram dương) bắt buộc phải ĐẶT ỐNG DẪN LƯU MÀNG PHỔI KÍN kết hợp kháng sinh để tránh biến chứng vách hóa xơ màng phổi."
    },

    {
      spec: "Hô hấp",
      task: "Bước xử trí cấp cứu",
      short: "Tràn khí màng phổi áp lực (Tension Pneumothorax)",
      vignette: [
        "Nam 23 tuổi sau tai nạn giao thông va đập ngực vào vô lăng, được đưa vào cấp cứu trong tình trạng tím tái, thở dốc và kích động.",
        "Khám: Thở nhanh 36 l/phút, tĩnh mạch cổ nổi căng phồng, <b>khí quản bị đẩy lệch hẳn sang bên TRÁI</b>. Khám lồng ngực bên PHẢI thấy: lồng ngực căng phồng bất động, gõ vang trống toàn bộ, <b>rì rào phế nang mất hoàn toàn ở phổi phải</b>.",
        "Huyết áp tụt dốc còn 70/40 mm Hg, mạch nhanh nhỏ 135 l/phút."
      ],
      vitals: [
        ["Nhiệt độ", "36,8 °C"],
        ["Huyết áp", "70/40"],
        ["Mạch", "135 l/ph"],
        ["Nhịp thở", "36 l/ph"],
        ["SpO2", "78%"]
      ],
      stem: "Bước xử trí cấp cứu tức thì tiếp theo cần làm NGAY LẬP TỨC là gì?",
      choices: [
        "Chọc kim lớn giải áp cấp cứu ở khoang liên sườn 2 đường giữa đòn (hoặc KLS 4–5 đường nách trước) bên phải trước khi chụp X-quang",
        "Đưa bệnh nhân đi chụp X-quang ngực thẳng khẩn cấp để xác định chẩn đoán",
        "Tiêm tĩnh mạch thuốc vận mạch Noradrenaline liều cao",
        "Đặt nội khí quản thở máy áp lực dương ngay lập tức",
        "Chụp CT lồng ngực có cản quang để tìm mạch máu vỡ"
      ],
      answer: 0,
      why: [
        "Bệnh nhân có <b>Tràn khí màng phổi áp lực (Tension Pneumothorax)</b>: Khí tràn vào khoang màng phổi theo cơ chế van một chiều làm áp lực khoang màng phổi tăng vọt, đè xẹp phổi hoàn toàn, <b>đẩy lệch trung thất và khí quản sang bên đối diện</b>, chèn ép tĩnh mạch chủ cản trở máu về tim gây tụt huyết áp và ngừng tim.",
        "<b>ĐÂY LÀ CHẨN ĐOÁN LÂM SÀNG THUẦN TÚY — TUYỆT ĐỐI KHÔNG ĐƯỢC TRÌ HOÃN ĐỂ CHỤP X-QUANG HAY CT</b>.",
        "Xử trí tối khẩn: <b>Chọc kim lớn giải áp (Needle decompression)</b> ở <b>Khoang liên sườn 2 đường giữa đòn</b> (hoặc KLS 4–5 đường nách trước) bên tổn thương để biến tràn khí áp lực thành tràn khí hở, sau đó <b>đặt ống dẫn lưu ngực kín (Chest tube)</b>."
      ],
      wrongs: {
        1: "Chờ chụp X-quang sẽ khiến bệnh nhân ngừng tim tử vong trước khi có kết quả phim.",
        2: "Vận mạch không giải quyết được tắc nghẽn cơ học do trung thất bị chèn ép.",
        3: "Thở máy áp lực dương trước khi giải áp sẽ bơm thêm khí vào màng phổi làm áp lực tăng cao hơn gây ngừng tuần hoàn tức thì.",
        4: "Chụp CT làm chậm trễ cấp cứu tử vong."
      },
      objective:
        "Tràn khí màng phổi áp lực là chẩn đoán lâm sàng cấp cứu (khí quản lệch bên đối diện, gõ vang mất rì rào phế nang, tụt HA); xử trí ngay bằng chọc kim giải áp trước khi chụp X-quang, sau đó đặt ống dẫn lưu ngực."
    },

    {
      spec: "Hô hấp",
      task: "Bước xử trí tiếp theo",
      short: "Thuyên tắc phổi cấp nguy cơ cao (Massive PE)",
      vignette: [
        "Nữ 58 tuổi sau phẫu thuật thay khớp háng 5 ngày trước, đột ngột khó thở dữ dội, đau ngực nhói và ngất xỉu trong nhà vệ sinh.",
        "Khám: Bệnh nhân lơ mơ, da tái lạnh, thở nhanh 32 l/phút, tĩnh mạch cổ nổi rõ, tiếng T2 mạnh ở đáy tim. Huyết áp tụt còn <b>75/45 mm Hg</b> không đáp ứng với truyền 500 mL dịch.",
        "Điện tâm đồ: Nhịp nhanh xoang 125 l/phút kèm hình ảnh kinh điển <b>S1Q3T3 (S sâu ở DI, Q sâu ở DIII, T âm ở DIII)</b> và T âm ở V1–V4. Siêu âm tim tại giường: Thất phải giãn to, giảm động thành tự do thất phải (dấu hiệu McConnel positive)."
      ],
      vitals: [
        ["Nhiệt độ", "37,0 °C"],
        ["Huyết áp", "75/45"],
        ["Mạch", "125 l/ph"],
        ["Nhịp thở", "32 l/ph"],
        ["SpO2", "83% với oxy kính"]
      ],
      stem: "Phương pháp điều trị tái tưới máu cấp cứu hàng đầu được chỉ định cho bệnh nhân này là gì?",
      choices: [
        "Thuốc tiêu sợi huyết toàn thân đường tĩnh mạch (Alteplase / rtPA)",
        "Thuốc chống đông đường uống Rivaroxaban đơn độc",
        "Tiêm dưới da Enoxaparin liều dự phòng",
        "Đặt lưới lọc tĩnh mạch chủ dưới (IVC filter) đơn độc",
        "Cho bệnh nhân thở oxy và chuyển về khoa điều trị nội"
      ],
      answer: 0,
      why: [
        "Bệnh nhân bị <b>Thuyên tắc động mạch phổi cấp nguy cơ cao (Massive / High-risk Pulmonary Embolism)</b> biểu hiện bằng <b>Tụt huyết áp kéo dài (HA tâm thu < 90 mmHg hoặc sốc tắc nghẽn)</b> kèm dấu hiệu suy thất phải cấp (S1Q3T3 trên ECG, thất phải giãn trên siêu âm).",
        "Theo khuyến cáo ESC và AHA, ở bệnh nhân thuyên tắc phổi có rối loạn huyết động và không có chống chỉ định xuất huyết tuyệt đối, <b>Thuốc tiêu sợi huyết toàn thân (Systemic Thrombolysis bằng Alteplase 100 mg truyền trong 2 giờ)</b> là <b>chỉ định cấp cứu sống còn hàng đầu</b> để nhanh chóng làm tan cục máu đông, giải phóng tắc nghẽn động mạch phổi và phục hồi cung lượng tim.",
        "Nếu có chống chỉ định tiêu sợi huyết hoặc tiêu sợi huyết thất bại, chỉ định <b>Lấy huyết khối qua ống thông (Catheter-directed embolectomy)</b> hoặc phẫu thuật mở lấy huyết khối."
      ],
      wrongs: {
        1: "Thuốc chống đông DOAC chỉ dùng cho thuyên tắc phổi nguy cơ thấp hoặc trung bình khi huyết động ổn định; DOAC không làm tan được cục máu đông đang gây sốc tim.",
        2: "Liều dự phòng không có tác dụng điều trị thuyên tắc phổi cấp diện rộng.",
        3: "Lưới lọc IVC chỉ dùng khi có chống chỉ định tuyệt đối với thuốc chống đông hoặc huyết khối tái phát dù đã dùng đủ chống đông, không giải quyết được cục máu đông ở phổi.",
        4: "Trì hoãn tiêu sợi huyết trên bệnh nhân sốc tắc nghẽn sẽ dẫn đến ngừng tuần hoàn nhanh chóng."
      },
      objective:
        "Thuyên tắc phổi cấp nguy cơ cao (kèm tụt huyết áp/sốc tắc nghẽn) có chỉ định cấp cứu bằng Thuốc tiêu sợi huyết toàn thân (Alteplase); DOAC chỉ dùng khi huyết động ổn định."
    },

    {
      spec: "Hô hấp",
      task: "Lựa chọn thuốc chống đông",
      short: "Thuyên tắc phổi cấp huyết động ổn định",
      vignette: [
        "Nam 45 tuổi đến khám vì đau ngực kiểu màng phổi bên phải tăng khi hít sâu và khó thở khởi phát sau chuyến bay kéo dài 14 tiếng từ Mỹ về Việt Nam. Bệnh nhân có sưng đau bắp chân phải.",
        "Khám: Bắp chân phải sưng to hơn chân trái 3 cm, ấn đau dọc đường đi của tĩnh mạch sâu. Khám tim phổi bình thường.",
        "Chụp CT mạch máu phổi (CTPA): <b>Khuyết thuốc cản quang hoàn toàn nhánh động mạch phổi phân thùy dưới phổi phải (thuyên tắc phổi)</b>. Siêu âm Doppler mạch chi dưới: Huyết khối tĩnh mạch sâu (DVT) tầng đùi khoeo chân phải. Huyết áp 128/78 mm Hg, Troponin và BNP hoàn toàn bình thường."
      ],
      vitals: [
        ["Nhiệt độ", "36,8 °C"],
        ["Huyết áp", "128/78"],
        ["Mạch", "86 l/ph"],
        ["Nhịp thở", "18 l/ph"],
        ["SpO2", "96% khí trời"]
      ],
      stem: "Thuốc chống đông đường uống nào sau đây là lựa chọn hàng đầu khởi trị theo khuyến cáo CHEST/ESC?",
      choices: [
        "Thuốc chống đông đường uống tác động trực tiếp (DOAC: Rivaroxaban hoặc Apixaban)",
        "Thuốc tiêu sợi huyết Alteplase truyền tĩnh mạch",
        "Aspirin 81 mg kết hợp Clopidogrel 75 mg hàng ngày",
        "Warfarin đơn độc ngay từ ngày đầu không cần thuốc bắc cầu",
        "Đặt lưới lọc tĩnh mạch chủ dưới dự phòng"
      ],
      answer: 0,
      why: [
        "Bệnh nhân có <b>Thuyên tắc phổi cấp nguy cơ thấp (Low-risk PE)</b>: Huyết động hoàn toàn ổn định (huyết áp bình thường), không có dấu hiệu suy thất phải trên hình ảnh và men tim bình thường.",
        "Khuyến cáo CHEST và ESC: <b>Thuốc chống đông đường uống trực tiếp (DOAC: Rivaroxaban, Apixaban, Dabigatran, Edoxaban) là lựa chọn ưu tiên hàng đầu</b> vượt trội hơn Warfarin do: (1) Hiệu quả tương đương nhưng giảm 50% nguy cơ xuất huyết não; (2) Rivaroxaban và Apixaban có thể dùng ngay từ ngày đầu mà không cần tiêm Heparin bắc cầu; (3) Không cần theo dõi xét nghiệm đông máu định kỳ (INR).",
        "Thời gian điều trị chống đông tối thiểu là <b>3 tháng</b> cho biến cố có yếu tố thúc đẩy tạm thời (chuyến bay dài)."
      ],
      wrongs: {
        1: "Tiêu sợi huyết chỉ chỉ định khi có tụt huyết áp/sốc; dùng tiêu sợi huyết cho PE nguy cơ thấp làm tăng nguy cơ xuất huyết đe dọa tính mạng mà không có lợi ích sống còn.",
        2: "Thuốc kháng tiểu cầu (Aspirin, Clopidogrel) không đủ hiệu quả điều trị huyết khối tĩnh mạch.",
        3: "Warfarin đơn độc trong những ngày đầu làm giảm Protein C trước (gây tăng đông nghịch lý), bắt buộc phải có Heparin bắc cầu ít nhất 5 ngày.",
        4: "Lưới lọc IVC không có chỉ định khi bệnh nhân dung nạp tốt với thuốc chống đông."
      },
      objective:
        "Thuyên tắc phổi nguy cơ thấp (huyết động ổn định) ưu tiên khởi trị bằng thuốc chống đông DOAC (Rivaroxaban, Apixaban) trong tối thiểu 3 tháng; không dùng tiêu sợi huyết và không dùng Warfarin đơn độc không bắc cầu."
    },

    {
      spec: "Hô hấp",
      task: "Chỉ định liệu pháp oxy dài hạn",
      short: "COPD và chỉ định thở oxy dài hạn tại nhà (LTOT)",
      vignette: [
        "Nam 70 tuổi tiền sử COPD giai đoạn nặng hút thuốc 45 gói-năm, đến tái khám định kỳ trong tình trạng bệnh ổn định, không có đợt cấp trong 3 tháng qua. Bệnh nhân đang dùng thuốc giãn phế quản hít tối ưu (LABA + LAMA + ICS).",
        "Khám: Rì rào phế nang giảm, không có ran ứ đọng, không phù chân. Đo chức năng hô hấp FEV1 = 35% dự đoán.",
        "Khí máu động mạch lúc nghỉ ngơi thở khí trời: <b>PaO2 = 53 mm Hg, SaO2 = 87%, PaCO2 = 46 mm Hg</b>."
      ],
      vitals: [
        ["Nhiệt độ", "36,7 °C"],
        ["Huyết áp", "125/75"],
        ["Mạch", "76 l/ph"],
        ["Nhịp thở", "18 l/ph"],
        ["SpO2", "87% khí trời"]
      ],
      stem: "Biện pháp điều trị không dùng thuốc nào sau đây được chứng minh giúp cải thiện tỷ lệ sống còn ở bệnh nhân này?",
      choices: [
        "Liệu pháp oxy dài hạn tại nhà (LTOT) ít nhất 15 giờ mỗi ngày",
        "Thở máy xâm nhập qua mở khí quản vĩnh viễn",
        "Nằm bất động tại giường để giảm tiêu thụ oxy",
        "Thở oxy ngắt quãng 1–2 giờ mỗi khi cảm thấy mệt",
        "Uống thuốc giãn phế quản Theophylline liều cao kéo dài"
      ],
      answer: 0,
      why: [
        "Chỉ định <b>Liệu pháp oxy dài hạn tại nhà (Long-term Oxygen Therapy - LTOT)</b> cho bệnh nhân COPD giai đoạn ổn định gồm:",
        "1. <b>PaO2 lúc nghỉ ≤ 55 mm Hg (hoặc SpO2 ≤ 88%)</b>.",
        "2. <b>PaO2 từ 56–59 mm Hg (hoặc SpO2 = 89%)</b> nếu có kèm bằng chứng: <b>Tâm phế mạn (Cor pulmonale), Phù do suy tim phải, hoặc Đa hồng cầu thứ phát (Hematocrit > 55%)</b>.",
        "Ở bệnh nhân này PaO2 = 53 mmHg thỏa mãn tiêu chuẩn nhóm 1. Để <b>cải thiện sống còn</b>, bệnh nhân bắt buộc phải <b>thở oxy liên tục ít nhất 15 giờ mỗi ngày (bao gồm cả lúc ngủ)</b> với lưu lượng chỉnh để đạt <b>mục tiêu SpO2 từ 88–92% (PaO2 60–65 mmHg)</b>."
      ],
      wrongs: {
        1: "Mở khí quản thở máy chỉ dùng cho suy hô hấp giai đoạn cuối không cai được máy, không phải điều trị chuẩn cho COPD ngoại trú.",
        2: "Bất động làm teo cơ hô hấp và suy giảm thể lực; phục hồi chức năng hô hấp và tập vận động mới giúp cải thiện chất lượng sống.",
        3: "Thở oxy ngắt quãng vài giờ khi mệt không làm giảm được tăng áp lực động mạch phổi và không cải thiện được sống còn.",
        4: "Theophylline không cải thiện tỷ lệ tử vong trong COPD."
      },
      objective:
        "Liệu pháp oxy dài hạn tại nhà (LTOT ≥ 15h/ngày) được chỉ định khi PaO2 ≤ 55 mmHg (hoặc SpO2 ≤ 88%) ở bệnh nhân COPD ổn định; đây là một trong số ít biện pháp chứng minh cải thiện sống còn (cùng với cai thuốc lá)."
    },

    {
      spec: "Hô hấp",
      task: "Bước chẩn đoán tiếp theo",
      short: "Bệnh bụi phổi Silic (Silicosis) và biến chứng lao",
      vignette: [
        "Nam 54 tuổi làm nghề thợ đẽo đá granite và khai thác mỏ đá 20 năm nay, đến khám vì ho khan và khó thở khi gắng sức tiến triển từ từ.",
        "Chụp X-quang ngực: <b>Nhiều nốt mờ nhỏ rải rác ưu thế ở thùy trên hai phổi</b> kèm hình ảnh <b>vôi hóa hạch rốn phổi hình vỏ trứng (eggshell calcification of hilar lymph nodes)</b>.",
        "Bệnh nhân gần đây xuất hiện sốt nhẹ về chiều, sụt 3 kg và ho khạc đờm có vệt máu."
      ],
      vitals: [
        ["Nhiệt độ", "37,8 °C"],
        ["Huyết áp", "120/75"],
        ["Mạch", "80 l/ph"],
        ["Nhịp thở", "18 l/ph"]
      ],
      stem: "Biến chứng nhiễm trùng cơ hội nào có nguy cơ tăng gấp 30 lần ở bệnh nhân bụi phổi Silic và cần làm xét nghiệm đờm tìm?",
      choices: [
        "Bệnh lao phổi (Silicotuberculosis do Mycobacterium tuberculosis)",
        "Viêm phổi do virus Cytomegalovirus (CMV)",
        "Nhiễm nấm Candida thực quản",
        "Viêm phổi do vi khuẩn Klebsiella pneumoniae",
        "Nhiễm giun lươn lan tỏa Strongyloides"
      ],
      answer: 0,
      why: [
        "Bệnh nhân mắc <b>Bệnh bụi phổi Silic (Silicosis)</b> do hít bụi tinh thể silica mạn tính trong nghề đẽo đá/mỏ đá. Hình ảnh X-quang kinh điển gồm: nốt mờ thùy trên và <b>vôi hóa hạch rốn phổi hình vỏ trứng (eggshell calcification)</b>.",
        "Bụi silica bị các đại thực bào phế nang thực bào nhưng tinh thể silica phá hủy lysosome làm chết đại thực bào, <b>làm suy giảm nghiêm trọng miễn dịch qua trung gian tế bào tại phổi</b>.",
        "Do đó, bệnh nhân Silicosis có <b>nguy cơ mắc bệnh Lao phổi (Silicotuberculosis) tăng gấp 30 lần</b> so với người bình thường. Khi bệnh nhân có triệu chứng sốt về chiều, sụt cân, ho ra máu, bắt buộc phải <b>xét nghiệm đờm tìm AFB / GeneXpert</b> để chẩn đoán lao phổi phối hợp."
      ],
      wrongs: {
        1: "CMV thường gặp ở bệnh nhân ghép tạng dùng ức chế miễn dịch nặng hoặc HIV giai đoạn cuối.",
        2: "Nấm Candida thực quản gặp trong suy giảm miễn dịch nặng, không phải biến chứng đặc trưng của nghề khai thác đá.",
        3: "Klebsiella gây viêm phổi thùy đờm thạch dâu tây ở người nghiện rượu.",
        4: "Giun lươn lan tỏa xảy ra khi dùng corticoid liều cao kéo dài."
      },
      objective:
        "Bệnh bụi phổi Silic (vôi hóa hạch rốn phổi hình vỏ trứng) làm suy giảm chức năng đại thực bào phế nang, làm tăng nguy cơ mắc bệnh Lao phổi (Silicotuberculosis) lên 30 lần; cần tầm soát lao định kỳ."
    },

    {
      spec: "Hô hấp",
      task: "Bước chẩn đoán và xử trí",
      short: "Bệnh Sarcoidosis phổi",
      vignette: [
        "Nữ 32 tuổi người Mỹ gốc Phi đến khám vì ho khan kéo dài 2 tháng, mệt mỏi và nổi các cục hồng ban đau ở mặt trước hai cẳng chân (<b>hồng ban nút - Erythema nodosum</b>).",
        "Khám: Viêm sưng đau hai khớp cổ chân đối xứng. Không sốt, không ran ở phổi.",
        "X-quang ngực: <b>Hạch rốn phổi và hạch cạnh khí quản hai bên to đối xứng (Bilateral hilar lymphadenopathy)</b> kèm thâm nhiễm dạng lưới nốt ở nhu mô phổi. Xét nghiệm: <b>Canxi máu tăng nhẹ 11,2 mg/dL</b>, Men chuyển Angiotensin (ACE) huyết thanh tăng cao."
      ],
      vitals: [
        ["Nhiệt độ", "37,2 °C"],
        ["Huyết áp", "118/72"],
        ["Mạch", "76 l/ph"],
        ["Nhịp thở", "16 l/ph"]
      ],
      stem: "Đặc điểm mô bệnh học điển hình và cơ chế gây tăng canxi máu trong bệnh cảnh này là gì?",
      choices: [
        "U hạt không hoại tử bã đậu (Non-caseating granulomas); đại thực bào trong u hạt biểu hiện enzym 1-alpha-hydroxylase làm tăng chuyển hóa vitamin D hoạt tính (1,25-OH2D)",
        "U hạt có hoại tử bã đậu do vi khuẩn lao; vi khuẩn tiết ra protein giống PTH (PTHrP)",
        "Tế bào Reed-Sternberg của u lympho Hodgkin; hủy xương trực tiếp",
        "Thâm nhiễm tương bào ác tính; tiết kháng thể đơn dòng M-protein",
        "Hoại tử dạng tơ huyết do viêm mạch kháng thể ANCA"
      ],
      answer: 0,
      why: [
        "Bệnh cảnh kinh điển của <b>Bệnh Sarcoidosis</b> (đặc biệt là <b>Hội chứng Löfgren</b>: Hạch rốn phổi hai bên + Hồng ban nút + Viêm khớp cổ chân).",
        "Đặc điểm mô bệnh học tiêu chuẩn vàng là <b>U hạt không hoại tử bã đậu (Non-caseating granulomas)</b> bao gồm tế bào biểu mô dạng biểu bì, tế bào khổng lồ đa nhân Langhans và lympho bào.",
        "Cơ chế tăng canxi máu: <b>Các đại thực bào hoạt hóa bên trong u hạt tự động biểu hiện enzym 1-alpha-hydroxylase độc lập với tuyến cận giáp</b>, biến đổi 25-OH Vitamin D thành <b>1,25-(OH)2 Vitamin D hoạt tính (Calcitriol)</b>, làm tăng hấp thu canxi tại ruột.",
        "Điều trị đầu tay khi có triệu chứng hoặc tổn thương cơ quan là <b>Corticoid đường uống (Prednisone)</b>."
      ],
      wrongs: {
        1: "Lao phổi đặc trưng bởi u hạt CÓ hoại tử bã đậu (Caseating granulomas), trong khi Sarcoidosis là u hạt KHÔNG hoại tử bã đậu.",
        2: "Tế bào Reed-Sternberg gặp trong U lympho Hodgkin.",
        3: "Tương bào ác tính gặp trong Đa u tủy xương.",
        4: "Hoại tử dạng tơ huyết gặp trong viêm mạch hệ thống (GPA, EGPA)."
      },
      objective:
        "Bệnh Sarcoidosis đặc trưng bởi hạch rốn phổi 2 bên, u hạt không bã đậu và tăng canxi máu do đại thực bào u hạt tiết 1-alpha-hydroxylase chuyển hóa vitamin D hoạt tính; điều trị đầu tay bằng Corticoid."
    },

    {
      spec: "Hô hấp",
      task: "Bước chẩn đoán tiếp theo",
      short: "Hội chứng ngưng thở khi ngủ do tắc nghẽn (OSA)",
      vignette: [
        "Nam 48 tuổi có chỉ số khối cơ thể BMI 34 kg/m² (béo phì), được vợ đưa đến khám vì <b>ngáy rất to khi ngủ kèm những cơn ngạt thở, ngưng thở giật mình thức giấc</b>. Ban ngày bệnh nhân buồn ngủ quá mức, thường xuyên ngủ gật khi đang lái xe hoặc họp cơ quan.",
        "Bệnh nhân có tiền sử tăng huyết áp kháng trị dù đang dùng 3 loại thuốc hạ áp phối hợp.",
        "Khám: Vòm họng hẹp, khẩu cái mềm thấp, lưỡi gà dài và chu vi vòng cổ lớn 44 cm."
      ],
      vitals: [
        ["Nhiệt độ", "36,8 °C"],
        ["Huyết áp", "152/94"],
        ["Mạch", "78 l/ph"],
        ["Nhịp thở", "16 l/ph"]
      ],
      stem: "Phương tiện tiêu chuẩn vàng để chẩn đoán xác định và phương pháp điều trị đầu tay hiệu quả nhất là gì?",
      choices: [
        "Đo đa ký giấc ngủ (Polysomnography) xác định chỉ số ngưng giảm thở (AHI ≥ 15); điều trị đầu tay bằng Thở máy áp lực dương liên tục (CPAP) khi ngủ",
        "Chụp CT sọ não có cản quang; điều trị bằng thuốc an thần Zolpidem trước khi ngủ",
        "Nội soi phế quản ống mềm; điều trị bằng thuốc giãn phế quản Salbutamol khí dung",
        "Đo chức năng hô hấp bằng phế thân ký; phẫu thuật cắt amiđan đơn độc",
        "Điều trị bằng thuốc kích thích thần kinh Modafinil mà không cần thở máy"
      ],
      answer: 0,
      why: [
        "Bệnh nhân có <b>Hội chứng ngưng thở khi ngủ do tắc nghẽn (Obstructive Sleep Apnea - OSA)</b> với tam chứng: ngáy to ngắt quãng, cơn ngưng thở được chứng kiến, buồn ngủ ban ngày quá mức (Daytime somnolence) và tăng huyết áp kháng trị trên nền béo phì.",
        "<b>Đo đa ký giấc ngủ qua đêm (Polysomnography)</b> là <b>tiêu chuẩn vàng</b>: xác định chỉ số <b>Ngưng thở - Giảm thở (Apnea-Hypopnea Index - AHI ≥ 15 lần/giờ</b> hoặc AHI ≥ 5 kèm triệu chứng).",
        "Phương pháp điều trị đầu tay hiệu quả nhất là <b>Thở máy áp lực dương liên tục (Continuous Positive Airway Pressure - CPAP)</b> khi ngủ để tạo nẹp khí nén giữ cho đường thở trên không bị xẹp. Đồng thời khuyến khích giảm cân và tránh rượu/thuốc an thần trước khi ngủ."
      ],
      wrongs: {
        1: "Thuốc an thần chống chỉ định tuyệt đối trong OSA vì làm giãn cơ hầu họng làm đường thở xẹp nặng nề hơn gây ngạt thở.",
        2: "OSA là tắc nghẽn ở vùng họng hầu đường hô hấp trên khi ngủ, không phải hẹp phế quản dưới.",
        3: "Cắt amidan chỉ hiệu quả ở trẻ em có phì đại amidan lớn, ít hiệu quả ở người lớn béo phì.",
        4: "Modafinil chỉ là thuốc hỗ trợ tỉnh táo tạm thời, không giải quyết được nguyên nhân tắc nghẽn đường thở và không làm giảm biến chứng tim mạch của OSA."
      },
      objective:
        "Hội chứng ngưng thở khi ngủ do tắc nghẽn (ngáy to, ngưng thở khi ngủ, buồn ngủ ban ngày, tăng HA kháng trị) chẩn đoán bằng Đo đa ký giấc ngủ (AHI ≥15) và điều trị đầu tay bằng thở CPAP khi ngủ."
    },

    {
      spec: "Hô hấp",
      task: "Lựa chọn kháng sinh",
      short: "Viêm phổi do Legionella pneumophila",
      vignette: [
        "Nam 58 tuổi vừa trở về sau chuyến du lịch ở khách sạn có hệ thống điều hòa trung tâm, nhập viện vì sốt cao liên tục 40 °C rét run, ho khan, đau đầu dữ dội, lú lẫn và đi ngoài phân lỏng nhiều nước 4 ngày nay.",
        "Khám: Bệnh nhân lơ mơ, mạch 80 l/phút (<b>dấu hiệu phân ly mạch - nhiệt độ / Faget sign: sốt 40 °C nhưng mạch chỉ 80</b>). Nghe phổi có ran ẩm rải rác thùy dưới phổi trái.",
        "Xét nghiệm máu: Bạch cầu 14.500/mm³, <b>Natri huyết thanh giảm thấp 124 mEq/L (Hạ natri máu)</b>, Men gan AST/ALT tăng nhẹ 85/92 U/L. X-quang ngực: Thâm nhiễm phế nang đông đặc thùy dưới phổi trái."
      ],
      vitals: [
        ["Nhiệt độ", "40,0 °C"],
        ["Huyết áp", "110/68"],
        ["Mạch", "80 l/ph"],
        ["Nhịp thở", "24 l/ph"]
      ],
      stem: "Phương pháp xét nghiệm chẩn đoán nhanh tại chỗ và kháng sinh điều trị thích hợp nhất là gì?",
      choices: [
        "Xét nghiệm tìm kháng nguyên Legionella trong nước tiểu (Urine Antigen Test); điều trị bằng Levofloxacin (hoặc Azithromycin)",
        "Nhuộm soi đờm tìm vi khuẩn lao kháng cồn toan (AFB); điều trị bằng Rifampin",
        "Xét nghiệm kháng thể kháng nhân (ANA); điều trị bằng Corticoid",
        "Cấy phân tìm vi khuẩn tả Vibrio cholerae; điều trị bằng Doxycycline",
        "Nhuộm Gram đờm; điều trị bằng Ampicillin tĩnh mạch đơn độc"
      ],
      answer: 0,
      why: [
        "Bệnh cảnh kinh điển của <b>Viêm phổi do Legionella (Legionnaires' disease)</b>: lây qua nguồn nước nhân tạo dạng khí dung (điều hòa khách sạn, tháp làm mát, vòi sen).",
        "Đặc trưng lâm sàng phối hợp nhiều hệ cơ quan: (1) <b>Sốt cao kèm dấu hiệu phân ly mạch - nhiệt độ (Faget's sign)</b>; (2) <b>Triệu chứng tiêu hóa (tiêu chảy, đau bụng)</b>; (3) <b>Triệu chứng thần kinh trung ương (lú lẫn, đau đầu)</b>; (4) <b>Hạ natri máu</b> (do SIADH hoặc mất muối) và tăng men gan.",
        "Chẩn đoán nhanh bằng <b>Xét nghiệm tìm kháng nguyên Legionella pneumophila serogroup 1 trong nước tiểu (Legionella Urine Antigen)</b>.",
        "Điều trị đầu tay bằng <b>Fluoroquinolone hô hấp (Levofloxacin/Moxifloxacin)</b> hoặc <b>Macrolide (Azithromycin)</b>."
      ],
      wrongs: {
        1: "Legionella không phải vi khuẩn lao và không bắt màu AFB.",
        2: "Hạ natri máu và sốt cao ở đây là do nhiễm trùng phổi cấp tính, không phải bệnh tự miễn lupus.",
        3: "Tiêu chảy ở đây là triệu chứng ngoài phổi của Legionella, không phải do vi khuẩn tả.",
        4: "Legionella là vi khuẩn nội bào bắt màu Gram rất kém, kháng tự nhiên với Beta-lactam như Ampicillin."
      },
      objective:
        "Viêm phổi do Legionella đặc trưng bởi sốt cao phân ly mạch nhiệt, tiêu chảy, lú lẫn và hạ natri máu; chẩn đoán bằng kháng nguyên Legionella trong nước tiểu và điều trị bằng Levofloxacin hoặc Azithromycin."
    },

    {
      spec: "Hô hấp",
      task: "Bước chẩn đoán và xử trí",
      short: "Viêm phổi do Mycoplasma và tán huyết tự miễn",
      vignette: [
        "Nữ 21 tuổi sinh viên đại học đến phòng khám vì sốt nhẹ, đau họng, đau đầu và ho khan dai dẳng từng cơn 2 tuần nay. Hai ngày nay bệnh nhân thấy mệt lả và củng mạc mắt hơi vàng.",
        "Khám: Họng đỏ nhẹ, màng nhĩ xung huyết có mụn nước (<b>viêm màng nhĩ bóng nước - bullous myringitis</b>). Nghe phổi chỉ có ít ran rít rải rác mặc dù trên X-quang ngực thâm nhiễm dạng lưới nốt lan tỏa hai bên phế trường (hình ảnh X-quang nặng hơn nhiều so với triệu chứng thực thể).",
        "Xét nghiệm: Hemoglobin giảm 8,8 g/dL, Bilirubin gián tiếp tăng, Haptoglobin giảm. <b>Nghiệm pháp ngưng kết kháng thể lạnh (Cold agglutinin titer) dương tính mạnh với kháng thể IgM</b>."
      ],
      vitals: [
        ["Nhiệt độ", "37,8 °C"],
        ["Huyết áp", "115/70"],
        ["Mạch", "88 l/ph"],
        ["Nhịp thở", "18 l/ph"]
      ],
      stem: "Căn nguyên gây bệnh và kháng sinh đường uống thích hợp nhất cho bệnh nhân này là gì?",
      choices: [
        "Mycoplasma pneumoniae; điều trị bằng Azithromycin (hoặc Doxycycline)",
        "Streptococcus pneumoniae; điều trị bằng Amoxicillin liều cao",
        "Pneumocystis jirovecii; điều trị bằng Co-trimoxazole",
        "Virus hợp bào hô hấp (RSV); điều trị bằng Ribavirin",
        "Klebsiella pneumoniae; điều trị bằng Cefepime"
      ],
      answer: 0,
      why: [
        "Bệnh cảnh kinh điển của <b>Viêm phổi không điển hình do Mycoplasma pneumoniae</b>: thường gặp ở thanh thiếu niên/người trẻ sống tập thể (ký túc xá, quân đội), ho khan kéo dài, dấu hiệu <b>viêm màng nhĩ bóng nước (bullous myringitis)</b> và hình ảnh X-quang thâm nhiễm lan tỏa nặng nề trong khi khám phổi chỉ nghe thấy ít ran (phân ly lâm sàng - X-quang).",
        "Biến chứng ngoài phổi đặc trưng: <b>Thiếu máu tán huyết tự miễn do kháng thể lạnh (Cold agglutinin disease)</b> qua trung gian <b>kháng thể IgM</b> chống lại kháng nguyên I trên màng hồng cầu gây vón kết hồng cầu ở nhiệt độ lạnh.",
        "Mycoplasma không có vách tế bào peptidoglycan nên kháng tự nhiên với Beta-lactam; điều trị bằng <b>Macrolide (Azithromycin)</b> hoặc <b>Doxycycline</b>."
      ],
      wrongs: {
        1: "Amoxicillin bất hoạt vì Mycoplasma không có vách tế bào để ức chế tổng hợp peptidoglycan.",
        2: "Pneumocystis gặp ở bệnh nhân suy giảm miễn dịch nặng.",
        3: "RSV gây viêm tiểu phế quản ở trẻ nhỏ, không gây tán huyết kháng thể lạnh ở người lớn.",
        4: "Klebsiella gây đờm thạch dâu tây ở người già nghiện rượu."
      },
      objective:
        "Viêm phổi do Mycoplasma ở người trẻ có ho khan, viêm màng nhĩ bóng nước và tán huyết tự miễn kháng thể lạnh (IgM); điều trị bằng Azithromycin hoặc Doxycycline (không dùng Beta-lactam)."
    },

    {
      spec: "Hô hấp",
      task: "Bước chẩn đoán tiếp theo",
      short: "Xơ phổi vô căn (Idiopathic Pulmonary Fibrosis - IPF)",
      vignette: [
        "Nam 66 tuổi đến khám vì khó thở khi gắng sức tăng dần trong 1 năm qua và ho khan mạn tính. Bệnh nhân không có tiền sử tiếp xúc bụi nghề nghiệp, không có bệnh lý tự miễn.",
        "Khám: <b>Ngón tay dùi trống ở cả hai bàn tay</b>. Nghe phổi nghe thấy <b>tiếng ran nổ khô mịn cuối thì hít vào ở cả hai đáy phổi giống như tiếng xé băng dính dán (ran Velcro)</b>.",
        "Chụp CT ngực độ phân giải cao (HRCT): Dày vách liên tiểu thùy, giãn phế quản co kéo và <b>hình ảnh tổ ong (honeycombing) ưu thế ở lớp dưới màng ngoài phổi vùng đáy hai bên</b> (mô hình viêm phổi kẽ thông thường - UIP pattern). Đo chức năng hô hấp: Hội chứng hạn chế (FVC giảm, FEV1/FVC bình thường) và giảm độ khuếch tán khí DLCO."
      ],
      vitals: [
        ["Nhiệt độ", "36,8 °C"],
        ["Huyết áp", "128/78"],
        ["Mạch", "76 l/ph"],
        ["Nhịp thở", "20 l/ph"],
        ["SpO2", "93% khí trời"]
      ],
      stem: "Chẩn đoán xác định và nhóm thuốc chống xơ hóa giúp làm chậm suy giảm chức năng phổi là gì?",
      choices: [
        "Xơ phổi vô căn (IPF); điều trị bằng thuốc chống xơ hóa (Pirfenidone hoặc Nintedanib)",
        "Hen phế quản dị ứng; điều trị bằng thuốc hít ICS-LABA",
        "Viêm phế nang dị ứng ngoại lai; điều trị bằng Corticoid liều cao",
        "Bệnh bụi phổi amiăng; điều trị bằng phẫu thuật bóc vỏ màng phổi",
        "Lao phổi sơ nhiễm; điều trị bằng phác đồ chống lao 4 thuốc"
      ],
      answer: 0,
      why: [
        "Bệnh nhân có đầy đủ đặc điểm của <b>Xơ phổi vô căn (Idiopathic Pulmonary Fibrosis - IPF)</b>: nam giới cao tuổi (>60 tuổi), khó thở gắng sức mạn tính, ngón tay dùi trống, <b>ran nổ khô Velcro ở đáy phổi</b> và hình ảnh HRCT điển hình <b>mô hình UIP với hình ảnh tổ ong (honeycombing) dưới màng phổi đáy phổi</b>.",
        "Cơ chế do vi chấn thương biểu mô phế nang lặp đi lặp lại kích hoạt tăng sinh nguyên bào sợi và lắng đọng chất nền ngoại bào bất thường.",
        "IPF không đáp ứng với Corticoid hay ức chế miễn dịch (thậm chí Corticoid làm tăng tử vong). Điều trị đặc hiệu là <b>Thuốc chống xơ hóa (Antifibrotic therapy: Pirfenidone hoặc Nintedanib)</b> giúp làm chậm tốc độ suy giảm dung tích sống gắng sức FVC. Biện pháp triệt để duy nhất ở bệnh nhân trẻ đủ điều kiện là <b>Ghép phổi (Lung transplantation)</b>."
      ],
      wrongs: {
        1: "Hen là bệnh tắc nghẽn đường dẫn khí có hồi phục, không gây xơ hóa tổ ong đáy phổi và ngón tay dùi trống.",
        2: "Corticoid bị chống chỉ định trong IPF vì thử nghiệm PANTHER chứng minh tăng tử vong và nhập viện.",
        3: "Bệnh nhân không có tiền sử phơi nhiễm amiăng và tổn thương amiăng có mảng màng phổi vôi hóa (pleural plaques).",
        4: "Không có tổn thương thâm nhiễm hang lao ở đỉnh phổi."
      },
      objective:
        "Xơ phổi vô căn (IPF) đặc trưng bởi ran Velcro đáy phổi, ngón tay dùi trống và hình ảnh tổ ong dưới màng phổi trên HRCT; điều trị bằng thuốc chống xơ hóa (Pirfenidone, Nintedanib) và ghép phổi, tránh dùng Corticoid."
    },

    {
      spec: "Hô hấp",
      task: "Bước chẩn đoán và phân loại",
      short: "Tràn dịch màng phổi do lao",
      vignette: [
        "Nam 34 tuổi nhập viện vì sốt nhẹ về chiều 38 °C kéo dài 3 tuần, sút 4 kg, đau tức ngực âm ỉ bên phải và khó thở khi đi lại.",
        "Khám: Hội chứng ba giảm ở nửa dưới phổi phải (rì rào phế nang mất, gõ đục, rung thanh giảm).",
        "Chọc hút dịch màng phổi: Dịch màu vàng chanh, Protein dịch 5,2 g/dL (dịch tiết), số lượng bạch cầu 3.200/mm³ với <b>88% là Lympho bào</b>. Nồng độ <b>Adenosine Deaminase (ADA) trong dịch màng phổi tăng rất cao 68 U/L</b> (bình thường < 40). Nhuộm soi trực tiếp AFB dịch màng phổi âm tính."
      ],
      vitals: [
        ["Nhiệt độ", "37,9 °C"],
        ["Huyết áp", "115/70"],
        ["Mạch", "84 l/ph"],
        ["Nhịp thở", "18 l/ph"]
      ],
      stem: "Phương tiện có độ nhạy cao nhất để chẩn đoán xác định nguyên nhân và phác đồ điều trị là gì?",
      choices: [
        "Tràn dịch màng phổi do Lao (Tuberculous Pleurisy); chẩn đoán bằng Sinh thiết màng phổi (tìm u hạt bã đậu và cấy vi khuẩn lao) và điều trị bằng phác đồ kháng lao 4 thuốc (2RHZE/4RHE)",
        "Tràn dịch do ung thư màng phổi nguyên phát Mesothelioma; điều trị bằng xạ trị",
        "Tràn dịch do viêm phổi vi khuẩn kỵ khí; điều trị bằng Clindamycin",
        "Tràn dịch do suy tim ứ huyết; điều trị bằng Furosemide",
        "Hội chứng thận hư; điều trị bằng truyền Albumin"
      ],
      answer: 0,
      why: [
        "Bệnh cảnh điển hình của <b>Tràn dịch màng phổi do Lao (Tuberculous Pleurisy)</b>: sốt về chiều, sụt cân, dịch tiết ưu thế <b>Lympho bào (>80%)</b> và <b>nồng độ ADA dịch màng phổi tăng cao (> 40 U/L)</b>.",
        "Nhuộm soi AFB dịch màng phổi trực tiếp có độ nhạy rất thấp (< 10–20%) vì cơ chế tràn dịch là phản ứng quá mẫn muộn của màng phổi với lượng nhỏ kháng nguyên lao.",
        "<b>Sinh thiết màng phổi mù (Pleural biopsy) hoặc qua nội soi màng phổi (Thoracoscopy)</b> là phương pháp có độ nhạy cao nhất (>85–90%) giúp tìm <b>u hạt có hoại tử bã đậu</b> và cấy vi khuẩn lao. Điều trị bằng <b>Phác đồ kháng lao chuẩn</b> (2 tháng tấn công RHZE + 4 tháng duy trì RHE)."
      ],
      wrongs: {
        1: "Mesothelioma gặp ở người cao tuổi tiếp xúc amiăng, dịch màng phổi thường có lẫn máu và dày màng phổi dạng nốt vỏ sò.",
        2: "Viêm phổi kỵ khí gây tràn dịch mủ ưu thế bạch cầu đa nhân trung tính (PMN) và mùi thối.",
        3: "Dịch suy tim là dịch thấm (Protein < 3 g/dL, ADA bình thường).",
        4: "Hội chứng thận hư gây dịch thấm hai bên do giảm áp lực keo."
      },
      objective:
        "Tràn dịch màng phổi do lao đặc trưng bởi dịch tiết ưu thế Lympho bào và ADA > 40 U/L; nhuộm soi AFB dịch màng phổi thường âm tính nên sinh thiết màng phổi là tiêu chuẩn vàng khẳng định."
    },

    {
      spec: "Hô hấp",
      task: "Bước chẩn đoán và điều trị",
      short: "Ung thư phổi tế bào nhỏ và hội chứng cận ung thư SIADH",
      vignette: [
        "Nam 62 tuổi hút thuốc lá 45 gói-năm, đến khám vì ho ra máu, sụt 6 kg và cảm thấy lờ đờ chậm chạp 1 tháng nay.",
        "Khám: Không phù, da niêm mạc ẩm bình thường (thể tích nội mạch bình thường). Khám thần kinh định hướng chậm chạp.",
        "Xét nghiệm máu: <b>Natri huyết thanh giảm rất nặng 118 mEq/L</b>, Áp lực thẩm thấu huyết tương giảm 250 mOsm/kg, Natri niệu 48 mEq/L (tăng bài tiết muối qua thận), Áp lực thẩm thấu nước tiểu 420 mOsm/kg (nước tiểu bị cô đặc không thích hợp). Chức năng tuyến giáp và thượng thận bình thường.",
        "Chụp CT lồng ngực: <b>Khối u trung tâm lớn ở rốn phổi phải xâm lấn trung thất và chèn ép phế quản gốc phải</b> kèm hạch trung thất phì đại."
      ],
      vitals: [
        ["Nhiệt độ", "36,8 °C"],
        ["Huyết áp", "125/78"],
        ["Mạch", "74 l/ph"],
        ["Nhịp thở", "16 l/ph"]
      ],
      stem: "Loại mô bệnh học ung thư phổi và hội chứng cận ung thư nào giải thích bệnh cảnh này?",
      choices: [
        "Ung thư phổi tế bào nhỏ (Small Cell Lung Cancer - SCLC) gây Hội chứng tiết ADH không thích hợp (SIADH); điều trị bằng hạn chế nước và hóa trị phác đồ Cisplatin + Etoposide",
        "Ung thư biểu mô vảy (Squamous Cell Carcinoma) gây tăng tiết PTHrP",
        "Ung thư biểu mô tuyến (Adenocarcinoma) gây hội chứng phì đại xương khớp do phổi",
        "U carcinoid phế quản gây hội chứng Carcinoid tiết Serotonin",
        "U màng phổi ác tính Mesothelioma"
      ],
      answer: 0,
      why: [
        "Bệnh nhân có <b>Ung thư phổi tế bào nhỏ (SCLC)</b> với đặc trưng: (1) Khối u vị trí <b>trung tâm rốn phổi</b> ở người hút thuốc lá nặng; (2) Tiến triển nhanh xâm lấn trung thất; (3) <b>Hội chứng cận ung thư kinh điển SIADH</b> do tế bào SCLC tự động tiết ra hormone chống bài niệu ADH lạc chỗ.",
        "SIADH gây hạ natri máu đẳng thể tích (Euvolemic hyponatremia: ALTT huyết tương giảm, ALTT niệu > 100 mOsm/kg, Natri niệu > 30–40 mEq/L).",
        "SCLC có nguồn gốc thần kinh nội tiết, phát triển rất nhanh nhưng <b>rất nhạy cảm với Hóa trị (Cisplatin + Etoposide) kết hợp Xạ trị</b>; phẫu thuật hầu như không có chỉ định."
      ],
      wrongs: {
        1: "Ung thư biểu mô vảy (Squamous cell) ở trung tâm nhưng gây hội chứng cận ung thư TĂNG CANXI MÁU do tiết PTHrP, không gây SIADH hạ natri máu.",
        2: "Ung thư biểu mô tuyến (Adenocarcinoma) nằm ở ngoại vi và không gây SIADH.",
        3: "Carcinoid gây đỏ bừng mặt, tiêu chảy và hở van ba lá.",
        4: "Mesothelioma xuất phát từ màng phổi liên quan amiăng."
      },
      objective:
        "Ung thư phổi tế bào nhỏ (SCLC) nằm ở trung tâm rốn phổi, có nguồn gốc thần kinh nội tiết và thường gây hội chứng cận ung thư SIADH (hạ natri máu) hoặc Cushing (tiết ACTH); điều trị bằng Hóa xạ trị."
    },

    {
      spec: "Hô hấp",
      task: "Bước chẩn đoán và điều trị đích",
      short: "Ung thư biểu mô tuyến của phổi và đột biến gen EGFR",
      vignette: [
        "Nữ 52 tuổi người gốc Á, <b>hoàn toàn không bao giờ hút thuốc lá</b>, đến khám vì ho khan kéo dài và đau tức ngực nhẹ bên trái 2 tháng nay.",
        "Chụp CT lồng ngực: <b>Khối mờ đơn độc kích thước 3,2 cm ở vùng ngoại vi thùy trên phổi trái</b> kèm một số nốt mờ nhỏ rải rác ở màng phổi. Sinh thiết xuyên thành ngực dưới hướng dẫn CT: <b>Ung thư biểu mô tuyến của phổi (Adenocarcinoma)</b>.",
        "Xét nghiệm sinh học phân tử giải trình tự gen khối u: <b>Dương tính với đột biến mất đoạn Exon 19 của thụ thể yếu tố tăng trưởng biểu bì (EGFR mutation positive)</b>."
      ],
      vitals: [
        ["Nhiệt độ", "36,7 °C"],
        ["Huyết áp", "118/72"],
        ["Mạch", "72 l/ph"],
        ["Nhịp thở", "16 l/ph"]
      ],
      stem: "Lựa chọn điều trị toàn thân bước một (First-line) tối ưu nhất cho bệnh nhân này là gì?",
      choices: [
        "Thuốc ức chế Tyrosine Kinase của EGFR thế hệ 3 đường uống (Osimertinib)",
        "Hóa trị truyền tĩnh mạch phác đồ Cisplatin kết hợp Etoposide",
        "Xạ trị toàn thân liều cao đơn thuần",
        "Phẫu thuật cắt toàn bộ một bên phổi trái ngay lập tức",
        "Chỉ dùng thuốc giảm đau Opioid chăm sóc giảm nhẹ"
      ],
      answer: 0,
      why: [
        "<b>Ung thư biểu mô tuyến (Adenocarcinoma)</b> là loại ung thư phổi phổ biến nhất hiện nay, đặc biệt là loại ung thư phổi thường gặp nhất ở <b>phụ nữ và người không hút thuốc lá</b>, tổn thương có vị trí điển hình ở <b>vùng ngoại vi nhu mô phổi</b>.",
        "Ở bệnh nhân châu Á không hút thuốc, tỉ lệ mang <b>đột biến gen EGFR (chủ yếu là mất đoạn Exon 19 hoặc đột biến điểm L858R ở Exon 21)</b> lên tới 40–50%.",
        "Khi có đột biến gen EGFR nhạy thuốc, điều trị đầu tay chuẩn là <b>Thuốc ức chế EGFR-Tyrosine Kinase thế hệ 3 đường uống (Osimertinib)</b>. Osimertinib vượt trội hơn hóa trị truyền thống về thời gian sống không bệnh tiến triển (PFS), kéo dài sống còn toàn bộ và có khả năng ngấm qua hàng rào máu não vượt trội để phòng ngừa di căn não."
      ],
      wrongs: {
        1: "Hóa trị truyền thống có hiệu quả và thời gian sống kém hơn rõ rệt so với thuốc nhắm trúng đích TKI ở bệnh nhân có đột biến gen EGFR.",
        2: "Xạ trị đơn thuần không kiểm soát được bệnh lý ung thư biểu mô tuyến giai đoạn tiến xa có di căn màng phổi.",
        3: "Khi đã có tổn thương màng phổi (giai đoạn IV), phẫu thuật cắt phổi không còn chỉ định triệt căn.",
        4: "Bệnh nhân có đột biến đích nhạy thuốc điều trị đáp ứng rất tốt với TKI, không thể chỉ chăm sóc giảm nhẹ."
      },
      objective:
        "Ung thư biểu mô tuyến của phổi (Adenocarcinoma) nằm ở ngoại vi, hay gặp ở phụ nữ không hút thuốc. Khi có đột biến gen EGFR, điều trị trúng đích đầu tay là thuốc ức chế EGFR-TKI (Osimertinib)."
    },

    {
      spec: "Hô hấp",
      task: "Bước xử trí cấp cứu",
      short: "Hội chứng tĩnh mạch chủ trên (Superior Vena Cava Syndrome)",
      vignette: [
        "Nam 60 tuổi hút thuốc lá 40 gói-năm, đến khám vì <b>phù to mặt, cổ và hai cánh tay (phù áo choàng)</b> tăng dần 1 tuần nay. Bệnh nhân cảm thấy nặng đầu, khó thở tăng lên khi cúi người ra trước hoặc giơ hai tay lên cao qua đầu (dấu hiệu Pemberton dương tính).",
        "Khám: Mặt và mi mắt phù nề tím tái, tĩnh mạch cổ nổi căng phồng không đập, nhiều mạng tĩnh mạch bàng hệ nổi ngoằn ngoèo đỏ tím ở thành ngực trên.",
        "Chụp CT ngực có cản quang: Khối u trung thất trên bên phải chèn ép gây hẹp gần hoàn toàn tĩnh mạch chủ trên (SVC)."
      ],
      vitals: [
        ["Nhiệt độ", "36,8 °C"],
        ["Huyết áp", "135/85"],
        ["Mạch", "92 l/ph"],
        ["Nhịp thở", "22 l/ph"]
      ],
      stem: "Bước can thiệp cấp cứu vừa giúp giải phóng nhanh tắc nghẽn tĩnh mạch vừa cải thiện triệu chứng tức thì là gì?",
      choices: [
        "Can thiệp đặt stent tĩnh mạch chủ trên qua da (Endovascular SVC Stenting) kết hợp xạ trị / hóa trị theo mô bệnh học",
        "Tiêm tĩnh mạch Furosemide liều cao kéo dài đơn độc",
        "Chỉ định phẫu thuật cắt bỏ toàn bộ tĩnh mạch chủ trên",
        "Bắt đầu dùng thuốc chống đông Warfarin đơn độc",
        "Cho bệnh nhân nằm đầu thấp chân cao"
      ],
      answer: 0,
      why: [
        "Bệnh nhân bị <b>Hội chứng tĩnh mạch chủ trên (SVC Syndrome)</b> do khối u phổi/trung thất chèn ép dòng máu hồi lưu từ đầu mặt cổ và hai chi trên về tâm nhĩ phải.",
        "Đặc trưng: <b>Phù áo choàng</b> (phù mặt, cổ, tay), tĩnh mạch bàng hệ nổi ở thành ngực, khó thở và tím tái khi cúi người.",
        "Phương pháp can thiệp cấp cứu mang lại hiệu quả giải tỏa triệu chứng nhanh nhất (trong vòng 24–48 giờ) là <b>Đặt Stent lòng tĩnh mạch chủ trên qua da (Endovascular SVC Stenting)</b>.",
        "Sau đó tiến hành sinh thiết khối u và điều trị đặc hiệu theo mô bệnh học (Hóa trị nếu là SCLC hoặc U lympho; Xạ trị nếu là NSCLC)."
      ],
      wrongs: {
        1: "Lợi tiểu chỉ giảm phù tạm thời nhẹ, không giải quyết được nguyên nhân chèn ép cơ học và có thể gây tụt huyết áp.",
        2: "Phẫu thuật bắc cầu tĩnh mạch có nguy cơ tử vong chu phẫu rất cao và chỉ dùng khi can thiệp stent thất bại.",
        3: "Warfarin không giải phóng được chèn ép u từ bên ngoài vào lòng mạch.",
        4: "Nằm đầu thấp sẽ làm tăng áp lực tĩnh mạch não gây phù não nặng nề hơn; bắt buộc phải nằm đầu cao."
      },
      objective:
        "Hội chứng tĩnh mạch chủ trên (phù áo choàng, tuần hoàn bàng hệ ngực) do u phổi chèn ép; xử trí cấp cứu giải áp nhanh bằng đặt Stent tĩnh mạch chủ trên qua da kết hợp hóa xạ trị."
    },

    {
      spec: "Hô hấp",
      task: "Bước chẩn đoán và xử trí",
      short: "Độc tính phổi do thuốc chống loạn nhịp Amiodarone",
      vignette: [
        "Nam 68 tuổi tiền sử rung nhĩ và suy tim đang điều trị duy trì bằng <b>Amiodarone 200 mg/ngày trong 9 tháng qua</b>, đến khám vì ho khan tiến triển, sốt nhẹ và khó thở khi đi lại 1 tháng nay.",
        "Khám: Nghe phổi có ran nổ rải rác ở hai đáy phổi. SpO2 91% khí trời.",
        "Chụp CT ngực độ phân giải cao: <b>Thâm nhiễm dạng kính mờ và dày xơ kẽ ở hai đáy phổi</b>. Nhuộm dịch rửa phế quản phế nang (BAL) thấy <b>nhiều đại thực bào chứa các thể vùi bọt mỡ xốp (foamy vacuolated macrophages)</b>."
      ],
      vitals: [
        ["Nhiệt độ", "37,4 °C"],
        ["Huyết áp", "120/75"],
        ["Mạch", "68 l/ph"],
        ["Nhịp thở", "20 l/ph"]
      ],
      stem: "Bước xử trí quan trọng hàng đầu và tiên quyết cho bệnh nhân này là gì?",
      choices: [
        "Ngừng ngay thuốc Amiodarone và dùng Corticoid toàn thân (Prednisone) nếu triệu chứng nặng",
        "Tăng liều Amiodarone lên 400 mg/ngày để kiểm soát rung nhĩ",
        "Tiếp tục Amiodarone và bắt đầu dùng kháng sinh Azithromycin",
        "Chỉ định thở oxy cao áp",
        "Phẫu thuật cắt thùy dưới phổi hai bên"
      ],
      answer: 0,
      why: [
        "<b>Độc tính phổi do Amiodarone (Amiodarone Pulmonary Toxicity - APT)</b> là biến chứng đe dọa tính mạng nghiêm trọng nhất của Amiodarone (xảy ra ở 5–10% bệnh nhân dùng kéo dài, nguy cơ tăng theo liều tích lũy).",
        "Cơ chế: Amiodarone là hợp chất ưa mỡ tích lũy trong mô phổi và gây độc trực tiếp lên tế bào phế nang + kích hoạt phản ứng miễn dịch quá mẫn (thấy <b>đại thực bào bọt mỡ foamy macrophages trong dịch rửa phế quản</b>).",
        "Bước xử trí tiên quyết bắt buộc là <b>NGỪNG NGAY AMIODARONE</b>. Vì thời gian bán thải của Amiodarone cực kỳ dài (lên tới 60–100 ngày), tổn thương phổi có thể tiếp tục tiến triển sau khi ngừng thuốc; do đó chỉ định thêm <b>Corticoid toàn thân (Prednisone 40–60 mg/ngày)</b> trong vài tháng để đảo ngược tình trạng viêm phổi kẽ."
      ],
      wrongs: {
        1: "Tăng liều Amiodarone sẽ làm tổn thương xơ hóa phổi lan tỏa dẫn đến suy hô hấp tử vong.",
        2: "Kháng sinh không có tác dụng với độc tính thuốc và để muộn Amiodarone sẽ gây xơ phổi không hồi phục.",
        3: "Oxy cao áp không có vai trò điều trị độc tính Amiodarone.",
        4: "Tổn thương phổi do Amiodarone là lan tỏa hai bên, không có chỉ định phẫu thuật cắt phổi."
      },
      objective:
        "Amiodarone gây độc tính phổi (viêm phổi kẽ, đại thực bào bọt mỡ); bước xử trí bắt buộc là ngừng ngay Amiodarone và điều trị bằng Corticoid toàn thân kéo dài do thời gian bán thải thuốc rất dài."
    },

    {
      spec: "Hô hấp",
      task: "Bước chẩn đoán và điều trị",
      short: "Bệnh hô hấp trầm trọng do Aspirin (AERD / Tam chứng Samter)",
      vignette: [
        "Nữ 36 tuổi đến khám vì sau khi uống 1 viên thuốc giảm đau Ibuprofen 400 mg điều trị đau bụng kinh khoảng 45 phút, bệnh nhân xuất hiện cơn <b>khó thở khò khè dữ dội, nghẹt mũi chảy nước mũi đầm đìa và đỏ bừng mặt mắt</b>.",
        "Tiền sử: Bệnh nhân có viêm mũi xoang mạn tính nhiều năm và đã từng <b>phẫu thuật nội soi cắt Polyp mũi 2 lần</b> do tái phát.",
        "Khám: Niêm mạc mũi phù nề, soi thấy khối polyp mũi tái phát che lấp khe giữa hai bên. Nghe phổi có ran rít ran ngáy khắp hai phế trường."
      ],
      vitals: [
        ["Nhiệt độ", "36,8 °C"],
        ["Huyết áp", "122/78"],
        ["Mạch", "96 l/ph"],
        ["Nhịp thở", "24 l/ph"]
      ],
      stem: "Cơ chế sinh bệnh học và nhóm thuốc điều trị bổ trợ đặc hiệu cho hội chứng này là gì?",
      choices: [
        "Ức chế enzym COX-1 làm chuyển hướng chuyển hóa acid arachidonic sang con đường 5-Lipoxygenase gây tăng sinh quá mức các Leukotriene (LTC4, LTD4, LTE4); điều trị bổ trợ bằng Thuốc kháng thụ thể Leukotriene (Montelukast / Zafirlukast)",
        "Phản ứng dị ứng qua trung gian IgE tức thì với phân tử Aspirin; điều trị bằng tiêm Adrenaline",
        "Tăng tiết Histamin do tế bào Mast tự miễn; điều trị bằng thuốc kháng Histamin H1 đơn độc",
        "Thiếu hụt chất ức chế C1-esterase bẩm sinh gây phù mạch",
        "Nhiễm nấm phế quản phổi dị ứng ABPA"
      ],
      answer: 0,
      why: [
        "Bệnh nhân có <b>Bệnh hô hấp trầm trọng do Aspirin (Aspirin-Exacerbated Respiratory Disease - AERD / Tam chứng Samter)</b> gồm 3 đặc điểm: (1) <b>Hen phế quản</b>; (2) <b>Viêm mũi xoang mạn tính có Polyp mũi tái phát</b>; (3) <b>Co thắt phế quản và triệu chứng viêm mũi cấp tính sau khi dùng Aspirin hoặc các NSAID ức chế COX-1</b>.",
        "Cơ chế: Đây <b>KHÔNG PHẢI dị ứng qua IgE</b>, mà là rối loạn chuyển hóa acid arachidonic. Thuốc NSAID ức chế COX-1 làm chặn con đường Prostaglandin E2 (chất ức chế viêm tự nhiên), khiến toàn bộ acid arachidonic bị chuyển hướng sang con đường men 5-Lipoxygenase, tạo ra lượng khổng lồ <b>Cysteinyl Leukotrienes (LTC4, LTD4, LTE4)</b> gây co thắt phế quản dữ dội và phù nề niêm mạc.",
        "Điều trị: Tránh tuyệt đối tất cả các thuốc NSAID ức chế COX-1, dùng thuốc ức chế thụ thể Leukotriene (<b>Montelukast, Zafirlukast</b>) hoặc ức chế 5-Lipoxygenase (Zileuton), và xem xét phương pháp <b>giảm mẫn cảm với Aspirin (Aspirin desensitization)</b>."
      ],
      wrongs: {
        1: "AERD là phản ứng không qua trung gian IgE (pseudo-allergy do rối loạn chuyển hóa leukotriene), không phải sốc phản vệ IgE.",
        2: "Kháng Histamin không ức chế được phản ứng co thắt phế quản dữ dội do Leukotriene.",
        3: "Thiếu C1-esterase inhibitor gây phù mạch di truyền (HAE) phù mặt thanh quản nhưng không có hen và polyp mũi.",
        4: "ABPA do nấm Aspergillus ở bệnh nhân hen có tăng IgE toàn phần và giãn phế quản trung tâm."
      },
      objective:
        "Tam chứng Samter (AERD: Hen + Polyp mũi + Co thắt phế quản do NSAID) do ức chế COX-1 làm tăng sản xuất Leukotriene; điều trị bằng tránh NSAID, dùng thuốc đối kháng Leukotriene (Montelukast) và giảm mẫn cảm Aspirin."
    },

    {
      spec: "Hô hấp",
      task: "Bước xử trí tiếp theo",
      short: "Tràn khí màng phổi tự phát nguyên phát",
      vignette: [
        "Nam 20 tuổi, thể trạng cao gầy (cao 1m82, nặng 58 kg), không có tiền sử bệnh phổi, đột ngột xuất hiện đau nhói ngực bên phải và khó thở nhẹ khi đang ngồi xem phim.",
        "Khám: Thở 20 l/phút, không có co kéo cơ hô hấp phụ. Khí quản nằm ở đường giữa, không lệch. Khám phổi phải: Rì rào phế nang giảm nhẹ ở đỉnh phổi phải, gõ vang nhẹ. Huyết áp 120/75 mm Hg, SpO2 96% khí trời.",
        "X-quang ngực thẳng: <b>Tràn khí màng phổi tự phát bên phải mức độ nhỏ</b> (khoảng cách từ màng phổi tạng đỉnh phổi đến thành ngực là 1,8 cm, < 2 cm), không có đè đẩy trung thất."
      ],
      vitals: [
        ["Nhiệt độ", "36,8 °C"],
        ["Huyết áp", "120/75"],
        ["Mạch", "76 l/ph"],
        ["Nhịp thở", "20 l/ph"],
        ["SpO2", "96% khí trời"]
      ],
      stem: "Cơ chế tổn thương giải phẫu và bước xử trí ban đầu thích hợp nhất cho bệnh nhân này là gì?",
      choices: [
        "Vỡ các bóng khí nhỏ dưới màng phổi ở đỉnh phổi (Apical subpleural blebs); xử trí ban đầu bằng thở oxy bổ sung và theo dõi sát lâm sàng/X-quang sau 4–6 giờ (hoặc chọc hút kim nhỏ nếu triệu chứng tăng)",
        "Vỡ kén khí do lao phổi; cần phẫu thuật cắt thùy phổi khẩn cấp",
        "Chọc kim giải áp cấp cứu ở KLS 2 đường giữa đòn ngay lập tức",
        "Đặt ống dẫn lưu màng phổi cỡ lớn (32 Fr) và hút liên tục",
        "Nội soi phế quản ống mềm bơm keo sinh học bít tắc"
      ],
      answer: 0,
      why: [
        "<b>Tràn khí màng phổi tự phát nguyên phát (Primary Spontaneous Pneumothorax - PSP)</b> thường gặp ở <b>nam thanh niên trẻ tuổi, cao gầy, người hút thuốc lá</b> do <b>vỡ các bóng khí nhỏ bẩm sinh dưới màng phổi ở vùng đỉnh phổi (Apical subpleural blebs)</b>.",
        "Bệnh nhân có tràn khí mức độ nhỏ (< 2 cm trên X-quang) và <b>huyết động hoàn toàn ổn định</b>, không khó thở nhiều.",
        "Khuyến cáo xử trí ban đầu: <b>Thở oxy bổ sung</b> (oxy nồng độ cao giúp tăng tốc độ tái hấp thu khí trong màng phổi lên gấp 4 lần nhờ làm giảm áp lực riêng phần của Nitơ trong máu) và <b>theo dõi sát 4–6 giờ</b>. Nếu tràn khí lượng lớn (>2 cm) hoặc có triệu chứng khó thở nhiều thì <b>chọc hút khí bằng kim nhỏ (Needle aspiration)</b> hoặc đặt ống dẫn lưu nhỏ (Pigtail catheter)."
      ],
      wrongs: {
        1: "Bệnh nhân không có tiền sử lao và không có chỉ định phẫu thuật cắt thùy phổi cho PSP nhỏ lần đầu.",
        2: "Chọc kim giải áp KLS 2 chỉ dùng cho Tràn khí màng phổi ÁP LỰC có rối loạn huyết động; bệnh nhân này khí quản đường giữa và HA bình thường.",
        3: "Ống dẫn lưu cỡ lớn không cần thiết và gây đau đớn cho tràn khí tự phát nguyên phát nhỏ.",
        4: "Nội soi phế quản không có vai trò trong xử trí tràn khí màng phổi tự phát."
      },
      objective:
        "Tràn khí màng phổi tự phát nguyên phát ở nam thanh niên cao gầy do vỡ bóng khí dưới màng phổi đỉnh phổi; trường hợp nhỏ (<2cm) huyết động ổn định xử trí bằng thở oxy và theo dõi sát hoặc chọc hút kim nhỏ."
    },

    {
      spec: "Hô hấp",
      task: "Bước xử trí cấp cứu",
      short: "Ho ra máu sét đánh (Massive Hemoptysis)",
      vignette: [
        "Nam 56 tuổi có tiền sử giãn phế quản và di chứng hang lao cũ ở thùy trên phổi phải, được đưa vào cấp cứu vì ho khạc ồ ạt ra máu đỏ tươi liên tục ước tính <b>trên 400 mL trong vòng 3 giờ qua</b>.",
        "Khám: Bệnh nhân ho sặc sụa, tím tái, thở rít, vã mồ hôi, đầy ran ẩm và tiếng lọc sọc ở phổi phải. SpO2 tụt còn 82% với khí trời, huyết áp 95/60 mm Hg."
      ],
      vitals: [
        ["Nhiệt độ", "37,0 °C"],
        ["Huyết áp", "95/60"],
        ["Mạch", "118 l/ph"],
        ["Nhịp thở", "30 l/ph"],
        ["SpO2", "82%"]
      ],
      stem: "Thứ tự các bước xử trí cấp cứu ưu tiên sống còn hàng đầu cho bệnh nhân này là gì?",
      choices: [
        "Bảo vệ đường thở (đặt nội khí quản chọn lọc phế quản) + Đặt bệnh nhân nằm nghiêng về BÊN PHỔI TỔN THƯƠNG (nằm nghiêng phải) + Chụp và nút tắc động mạch phế quản (Bronchial Artery Embolization - BAE)",
        "Đặt bệnh nhân nằm nghiêng về bên phổi lành (nghiêng trái) để thông khí tốt hơn",
        "Cho bệnh nhân uống thuốc giảm ho Codeine liều cao để ngừng ho",
        "Tiêm thuốc tiêu sợi huyết Alteplase để làm tan cục máu đông trong đường thở",
        "Chỉ định phẫu thuật cắt toàn bộ hai bên phổi cấp cứu"
      ],
      answer: 0,
      why: [
        "<b>Ho ra máu sét đánh / mức độ nặng (Massive Hemoptysis, thường định nghĩa ≥ 100–600 mL/24h)</b> là cấp cứu tối khẩn cấp; <b>nguyên nhân tử vong hàng đầu là SUY HÔ HẤP DO SẶC MÁU VÀO ĐƯỜNG THỞ (NGẠT THỞ), KHÔNG PHẢI DO MẤT MÁU</b>.",
        "Các bước cấp cứu sống còn gồm:",
        "1. <b>Bảo vệ đường thở và thông khí</b>: Đặt ống nội khí quản nòng lớn (hoặc ống 2 nòng) để hút sạch máu và thông khí chọn lọc phổi lành.",
        "2. <b>Tư thế bệnh nhân</b>: <b>BẮT BUỘC ĐẶT NẰM NGHIÊNG VỀ PHÍA PHỔI TỔN THƯƠNG (Nằm nghiêng phải)</b> để trọng lực giữ máu trong phổi bệnh, ngăn không cho máu chảy tràn sang phổi lành còn lại gây ngạt tắc.",
        "3. <b>Can thiệp cầm máu triệt để</b>: Nguồn chảy máu 90% xuất phát từ <b>hệ thống Động mạch phế quản (Bronchial arteries)</b> áp lực cao; <b>Chụp mạch và nút tắc động mạch phế quản (BAE)</b> là thủ thuật xâm lấn tối thiểu lựa chọn hàng đầu."
      ],
      wrongs: {
        1: "Nằm nghiêng về bên phổi lành sẽ khiến máu từ phổi bệnh chảy tràn theo trọng lực sang lấp đầy phổi lành, gây ngạt thở và ngừng tuần hoàn ngay lập tức.",
        2: "Thuốc ức chế ho làm ứ đọng máu đông trong khí phế quản gây bít tắc đường thở.",
        3: "Tiêu sợi huyết chống chỉ định tuyệt đối vì làm máu chảy ồ ạt hơn.",
        4: "Phẫu thuật cắt phổi cấp cứu chỉ đặt ra khi nút mạch thất bại và bệnh nhân chảy máu không cầm."
      },
      objective:
        "Ho ra máu sét đánh có nguy cơ tử vong do ngạt thở; cấp cứu ưu tiên bảo vệ đường thở, đặt nằm nghiêng về bên phổi tổn thương (để bảo vệ phổi lành) và Nút tắc động mạch phế quản (BAE) cầm máu."
    },

    {
      spec: "Hô hấp",
      task: "Bước chẩn đoán và hội chứng",
      short: "U đỉnh phổi Pancoast và hội chứng Horner",
      vignette: [
        "Nam 62 tuổi hút thuốc lá 35 gói-năm, đến khám vì đau âm ỉ liên tục ở vùng vai phải và mặt trong cẳng tay phải 2 tháng nay kèm yếu bàn tay phải.",
        "Khám: Teo các cơ ô mô cái và cơ gian cốt bàn tay phải. Khám mắt và mặt bên phải phát hiện <b>tam chứng: Sụp mi mắt phải nhẹ (Ptosis), Co nhỏ đồng tử mắt phải (Miosis) và Mất tiết mồ hôi nửa mặt phải (Anhidrosis)</b>.",
        "Chụp X-quang và CT lồng ngực: <b>Khối mờ kích thước 4,5 cm ở vùng đỉnh phổi phải (Superior sulcus tumor)</b> xâm lấn xương sườn 1, 2 và rễ thần kinh C8-T1."
      ],
      vitals: [
        ["Nhiệt độ", "36,8 °C"],
        ["Huyết áp", "125/78"],
        ["Mạch", "76 l/ph"],
        ["Nhịp thở", "16 l/ph"]
      ],
      stem: "Cấu trúc thần kinh nào bị chèn ép gây ra tam chứng ở mắt và mặt của bệnh nhân (Hội chứng Horner)?",
      choices: [
        "Chuỗi hạch giao cảm cổ ngực (Cervical sympathetic chain / Hạch sao Stellate ganglion)",
        "Dây thần kinh sọ số VII (Dây thần kinh mặt)",
        "Dây thần kinh sọ số III (Dây thần kinh vận nhãn)",
        "Đám rối thần kinh cánh tay thân trên (C5-C6)",
        "Dây thần kinh lang thang (Dây X)"
      ],
      answer: 0,
      why: [
        "Bệnh nhân mắc <b>Khối u rãnh đỉnh phổi (Pancoast tumor / Superior sulcus tumor)</b> - thường là ung thư phổi không tế bào nhỏ (NSCLC) xuất phát từ đỉnh phổi.",
        "Khối u đỉnh phổi chèn ép 2 cấu trúc giải phẫu lân cận chính:",
        "1. <b>Chuỗi hạch thần kinh giao cảm cổ ngực (Hạch sao / Stellate ganglion)</b>: Làm mất phân bố thần kinh giao cảm đến mắt và mặt cùng bên, gây ra <b>Hội chứng Horner kinh điển gồm: Sụp mi (Ptosis do liệt cơ Muller), Co đồng tử (Miosis do mất trương lực cơ giãn đồng tử) và Giảm tiết mồ hôi nửa mặt (Anhidrosis)</b>.",
        "2. <b>Đám rối thần kinh cánh tay thân dưới (Rễ C8–T1)</b>: Gây đau vai lan xuống mặt trong cẳng tay và teo cơ bàn tay.",
        "Xử trí chuẩn là Sinh thiết khối u + Hóa xạ trị đồng thời trước mổ (Neoadjuvant chemoradiation)."
      ],
      wrongs: {
        1: "Liệt dây VII gây méo miệng, liệt cơ mặt toàn bộ một bên và không nhắm kín mắt (Bell's palsy), không gây sụp mi hay co đồng tử.",
        2: "Liệt dây III gây GIÃN ĐỒNG TỬ và sụp mi hoàn toàn, không phải co nhỏ đồng tử như trong Horner.",
        3: "Tổn thương rễ C5-C6 gây liệt kiểu Erb-Duchenne (yếu dạng và xoay ngoài vai), không gây teo cơ bàn tay và hội chứng Horner.",
        4: "Dây X chi phối tạng ngực bụng, không gây hội chứng Horner ở mặt."
      },
      objective:
        "U đỉnh phổi Pancoast chèn ép hạch giao cảm cổ (hạch sao) gây Hội chứng Horner (sụp mi, co đồng tử, giảm tiết mồ hôi một bên mặt) và chèn ép rễ C8-T1 gây đau vai teo cơ bàn tay."
    },

    {
      spec: "Hô hấp",
      task: "Lựa chọn kháng sinh",
      short: "Nhiễm khuẩn Mycobacteria không lao (MAC) ở bệnh nhân giãn phế quản",
      vignette: [
        "Cụ bà 70 tuổi, thể trạng gầy gò (BMI 17,5 kg/m²), không hút thuốc lá, có tiền sử giãn phế quản thùy giữa phổi phải nhiều năm. Cụ đến khám vì ho khạc đờm trắng đục kéo dài 6 tháng nay, sốt nhẹ về chiều và sút 3 kg.",
        "Chụp CT ngực độ phân giải cao: Hình ảnh giãn phế quản dạng ống và các nốt mờ nhỏ dạng <b>'cây ra nụ' (tree-in-bud pattern) khu trú ưu thế ở thùy giữa phổi phải và thùy lưỡi phổi trái</b> (Hội chứng Lady Windermere).",
        "Cấy đờm 3 mẫu liên tiếp: Nhuộm soi AFB dương tính, định danh bằng PCR khẳng định mọc <b>Phức hợp Mycobacterium avium (MAC - Mycobacterium avium complex)</b>."
      ],
      vitals: [
        ["Nhiệt độ", "37,5 °C"],
        ["Huyết áp", "110/68"],
        ["Mạch", "74 l/ph"],
        ["Nhịp thở", "16 l/ph"]
      ],
      stem: "Phác đồ kháng sinh chuẩn theo khuyến cáo ATS/IDSA để điều trị nhiễm khuẩn MAC phổi là gì?",
      choices: [
        "Bộ ba kháng sinh: Macrolide (Azithromycin hoặc Clarithromycin) + Rifampin + Ethambutol dùng liên tục ít nhất 12 tháng sau khi cấy đờm âm tính",
        "Phác đồ điều trị lao chuẩn 4 thuốc: Isoniazid + Rifampin + Pyrazinamide + Ethambutol",
        "Doxycycline đơn độc trong 14 ngày",
        "Ciprofloxacin kết hợp Metronidazole đường uống trong 10 ngày",
        "Thuốc kháng nấm Voriconazole đường tĩnh mạch"
      ],
      answer: 0,
      why: [
        "Bệnh nhân bị <b>Nhiễm khuẩn Mycobacteria không lao ở phổi (NTM lung disease)</b> do <b>Phức hợp Mycobacterium avium (MAC)</b>, thường gặp ở phụ nữ cao tuổi gầy gò có phản xạ ức chế ho tự ý mạn tính (<b>Hội chứng Lady Windermere</b>) gây ứ đọng dịch ở thùy giữa và thùy lưỡi.",
        "Khác với vi khuẩn lao thông thường (M. tuberculosis), <b>MAC kháng tự nhiên với Isoniazid và Pyrazinamide</b>.",
        "Phác đồ chuẩn ATS/ERS/IDSA bắt buộc phải <b>phối hợp 3 thuốc</b>: <b>Macrolide (Azithromycin 250–500 mg hoặc Clarithromycin) + Rifampin (hoặc Rifabutin) + Ethambutol</b>.",
        "Thời gian điều trị kéo dài: <b>Uống 3 lần/tuần hoặc hàng ngày trong ít nhất 12 tháng KỂ TỪ KHI CẤY ĐỜM ÂM TÍNH HOÀN TOÀN</b> (tổng thời gian thường 15–18 tháng)."
      ],
      wrongs: {
        1: "Phác đồ lao chuẩn 4 thuốc (chứa INH và PZA) không có hiệu quả với MAC và gây độc gan không cần thiết.",
        2: "Doxycycline không đủ phổ diệt khuẩn và thời gian 14 ngày quá ngắn đối với vi khuẩn phát triển chậm như NTM.",
        3: "Ciprofloxacin/Metronidazole không có tác dụng với Mycobacteria.",
        4: "Voriconazole điều trị nấm Aspergillus, không điều trị trực khuẩn kháng cồn toan NTM."
      },
      objective:
        "Nhiễm Mycobacteria không lao (MAC) ở phổi có hình ảnh giãn phế quản và tree-in-bud thùy giữa; điều trị chuẩn bằng bộ ba: Macrolide (Azithromycin) + Rifampin + Ethambutol kéo dài 12 tháng sau khi cấy đờm âm tính."
    },

    {
      spec: "Hô hấp",
      task: "Bước xử trí tiếp theo",
      short: "Khối mờ đơn độc ở phổi (Solitary Pulmonary Nodule)",
      vignette: [
        "Nam 64 tuổi có tiền sử hút thuốc lá 40 gói-năm, đi khám sức khỏe định kỳ tình cờ phát hiện nốt mờ ở phổi.",
        "Chụp CT ngực độ phân giải cao: <b>Nốt mờ đơn độc kích thước 1,8 cm ở thùy trên phổi phải, bờ tua gai không đều (spiculated margins), không có vôi hóa</b>. Không thấy hạch trung thất to.",
        "Xem lại phim X-quang ngực chụp cách đây 3 năm trước: Hoàn toàn không có nốt mờ này (tổn thương mới xuất hiện)."
      ],
      vitals: [
        ["Nhiệt độ", "36,8 °C"],
        ["Huyết áp", "125/75"],
        ["Mạch", "72 l/ph"],
        ["Nhịp thở", "16 l/ph"]
      ],
      stem: "Đánh giá nguy cơ ác tính và bước xử trí tiếp theo thích hợp nhất theo khuyến cáo Fleischner Society là gì?",
      choices: [
        "Nguy cơ ác tính cao (Tuổi > 60, hút thuốc lá nặng, kích thước > 1 cm, bờ tua gai, tổn thương mới); chỉ định Chụp PET-CT hoặc Sinh thiết phổi / Phẫu thuật cắt bỏ nốt mờ chẩn đoán",
        "Nguy cơ ác tính rất thấp; chỉ cần hẹn chụp lại X-quang ngực sau 5 năm",
        "Kê đơn kháng sinh Amoxicillin 7 ngày và không cần chụp lại",
        "Điều trị thử nghiệm bằng thuốc chống lao 6 tháng",
        "Chỉ định chọc hút dịch màng phổi"
      ],
      answer: 0,
      why: [
        "<b>Nốt mờ đơn độc ở phổi (Solitary Pulmonary Nodule - SPN)</b> là tổn thương tròn/bầu dục đơn độc ≤ 3 cm nằm trong nhu mô phổi.",
        "Bệnh nhân có <b>toàn bộ các yếu tố nguy cơ ác tính cao (High pre-test probability of malignancy)</b>:",
        "- Tuổi cao (>60 tuổi) và hút thuốc lá nặng.",
        "- Kích thước nốt > 1,5 cm (nguy cơ ung thư > 50%).",
        "- <b>Bờ tua gai (Spiculated / Corona radiata)</b> và không có vôi hóa lành tính (như vôi hóa bắp rang bơ, đồng tâm).",
        "- Tổn thương mới xuất hiện (thời gian nhân đôi thể tích 1 tháng – 1 năm).",
        "Khuyến cáo Fleischner Society: Nốt nguy cơ cao cần <b>Chụp PET-CT để đánh giá chuyển hóa FDG</b> và tiến hành <b>Sinh thiết (qua nội soi phế quản / xuyên thành ngực) HOẶC Phẫu thuật nội soi lồng ngực (VATS) cắt nốt sinh thiết tức thì</b>."
      ],
      wrongs: {
        1: "Hẹn sau 5 năm sẽ bỏ lỡ giai đoạn ung thư phổi sớm có thể phẫu thuật triệt căn.",
        2: "Nốt bờ tua gai ở người hút thuốc lá không phải viêm phổi thông thường để điều trị kháng sinh đơn thuần.",
        3: "Điều trị thử lao không được khuyến cáo khi chưa có bằng chứng vi sinh và làm chậm trễ chẩn đoán ung thư.",
        4: "Không có tràn dịch màng phổi để chọc hút."
      },
      objective:
        "Nốt mờ đơn độc ở phổi nguy cơ cao (tuổi cao, hút thuốc, kích thước >1,5cm, bờ tua gai, mới xuất hiện) cần được đánh giá bằng PET-CT và Sinh thiết / Phẫu thuật cắt bỏ chẩn đoán; không trì hoãn theo dõi."
    },

    {
      spec: "Hô hấp",
      task: "Bước chẩn đoán và phân tích sinh hóa",
      short: "Tràn dưỡng chấp màng phổi (Chylothorax)",
      vignette: [
        "Nam 58 tuổi tiền sử phẫu thuật cắt thực quản điều trị ung thư cách đây 1 tuần, xuất hiện khó thở tăng dần và cảm giác tức nặng ngực bên trái.",
        "Khám: Mất rì rào phế nang ở 2/3 dưới phổi trái, gõ đục. X-quang ngực: Tràn dịch màng phổi lượng nhiều bên trái.",
        "Chọc hút dịch màng phổi: <b>Dịch màu trắng đục như sữa, không mùi</b>. Xét nghiệm sinh hóa dịch màng phổi: <b>Nồng độ Triglyceride trong dịch màng phổi tăng rất cao 240 mg/dL</b> (tiêu chuẩn chẩn đoán > 110 mg/dL), Protein dịch 4,2 g/dL."
      ],
      vitals: [
        ["Nhiệt độ", "36,8 °C"],
        ["Huyết áp", "120/75"],
        ["Mạch", "82 l/ph"],
        ["Nhịp thở", "20 l/ph"]
      ],
      stem: "Cơ chế tổn thương giải phẫu nào giải thích hiện tượng tràn dịch màu trắng sữa này?",
      choices: [
        "Tổn thương rách vỡ ống ngực (Thoracic duct) làm rò rỉ dịch dưỡng chấp giàu chylomicron vào khoang màng phổi",
        "Vỡ thực quản gây tràn dịch thức ăn vào màng phổi",
        "Nhiễm khuẩn mủ màng phổi do tụ cầu vàng",
        "Tràn dịch cholesterol mạn tính do lao màng phổi cũ",
        "Tràn dịch thấm do suy gan mất bù"
      ],
      answer: 0,
      why: [
        "Bệnh cảnh điển hình của <b>Tràn dưỡng chấp màng phổi (Chylothorax)</b> - biến chứng sau phẫu thuật lồng ngực/thực quản hoặc do u lympho trung thất chèn ép.",
        "Cơ chế: <b>Tổn thương rách ống ngực (Thoracic duct)</b> - mạch bạch huyết lớn nhất cơ thể vận chuyển dưỡng chấp giàu lipid và Chylomicron hấp thu từ ruột về hệ tuần hoàn tĩnh mạch.",
        "Chẩn đoán xác định: Dịch màng phổi màu trắng đục như sữa có <b>Nồng độ Triglyceride dịch > 110 mg/dL (1,24 mmol/L)</b> và phát hiện các hạt Chylomicron trên điện di lipoprotein.",
        "Xử trí: Đặt dẫn lưu màng phổi, áp dụng <b>chế độ ăn kiêng chất béo hoàn toàn, bổ sung Triglyceride chuỗi trung bình (MCT - Medium Chain Triglycerides)</b> hấp thu trực tiếp qua tĩnh mạch cửa không qua ống ngực, dùng Octreotide; nếu rò lượng lớn (>1 L/ngày) cần <b>Phẫu thuật thắt ống ngực hoặc nút tắc ống ngực qua da</b>."
      ],
      wrongs: {
        1: "Vỡ thực quản (Hội chứng Boerhaave) gây dịch màng phổi có nồng độ Amylase tăng cực cao, pH acid rất thấp (<6,0) và có cặn thức ăn.",
        2: "Mủ màng phổi (Empyema) có bạch cầu trung tính thoái hóa cao, mùi thối và Triglyceride bình thường.",
        3: "Tràn dịch cholesterol (Pseudochylothorax) gặp trong tràn dịch mạn tính hàng chục năm có nồng độ Cholesterol > 200 mg/dL nhưng Triglyceride < 50 mg/dL.",
        4: "Dịch suy gan là dịch thấm màu vàng trong, Triglyceride rất thấp."
      },
      objective:
        "Tràn dưỡng chấp màng phổi (Chylothorax) do tổn thương ống ngực (thường sau phẫu thuật ngực hoặc u lympho) đặc trưng bởi dịch màu trắng sữa có Triglyceride > 110 mg/dL; xử trí bằng dẫn lưu, ăn MCT và thắt ống ngực nếu rò nhiều."
    },

    {
      spec: "Hô hấp",
      task: "Bước chẩn đoán và phân loại",
      short: "Bệnh phổi tắc nghẽn mạn tính và kiểu hình khí phế thũng",
      vignette: [
        "Nam 62 tuổi hút thuốc lá 50 gói-năm, đến khám vì khó thở khi gắng sức tăng dần trong 3 năm qua. Bệnh nhân gầy gò (BMI 18 kg/m²), thở chúm môi khi thở ra (pursed-lip breathing), ngồi tư thế chống tay lên đùi (tripod position).",
        "Khám: Lồng ngực hình thùng, đường kính trước sau tăng, gõ vang toàn bộ hai phế trường, rì rào phế nang giảm sâu ở cả hai phổi. Không có phù chân, không có tím tái môi đầu chi (<b>kiểu hình 'Người thổi kèn hồng' - Pink Puffer</b>).",
        "Đo chức năng thông khí: FEV1 = 42% dự đoán, tỉ số FEV1/FVC = 0,52 (rối loạn thông khí tắc nghẽn không hồi phục hoàn toàn). Đo độ khuếch tán khí qua màng phế nang mao mạch: <b>DLCO giảm nặng còn 38% dự đoán</b>."
      ],
      vitals: [
        ["Nhiệt độ", "36,7 °C"],
        ["Huyết áp", "120/75"],
        ["Mạch", "76 l/ph"],
        ["Nhịp thở", "20 l/ph"],
        ["SpO2", "94% khí trời"]
      ],
      stem: "Cơ chế tổn thương giải phẫu bệnh học nào giải thích tình trạng giảm nặng chỉ số DLCO ở bệnh nhân này?",
      choices: [
        "Phá hủy vách phế nang và mất giường mao mạch phổi trong Khí phế thũng (Emphysema)",
        "Tăng tiết chất nhầy và phì đại tuyến dưới niêm mạc trong Viêm phế quản mạn",
        "Co thắt cơ trơn phế quản hồi phục trong Hen phế quản",
        "Dày màng đáy phế nang do lắng đọng phức hợp miễn dịch",
        "Yếu cơ hoành bẩm sinh hai bên"
      ],
      answer: 0,
      why: [
        "Bệnh nhân có <b>COPD kiểu hình Khí phế thũng ưu thế (Emphysema predominant / 'Pink Puffer')</b>:",
        "- Khí phế thũng được định nghĩa về mặt giải phẫu học là: <b>Sự giãn rộng vĩnh viễn của các khoang chứa khí nằm sau tiểu phế quản tận kèm theo sự PHÁ HỦY VÁCH PHẾ NANG mà không có xơ hóa rõ rệt</b> (do mất cân bằng Protease - Antiprotease do khói thuốc lá kích hoạt elastase của bạch cầu).",
        "- Sự phá hủy vách phế nang làm <b>mất diện tích bề mặt trao đổi khí và phá hủy mạng lưới mao mạch phổi đi kèm -> dẫn đến GIẢM NẶNG ĐỘ KHUÊCH TÁN KHÍ DLCO (Diffusing Capacity of the Lungs for Carbon Monoxide)</b>.",
        "- Phân biệt với <b>Viêm phế quản mạn tính ('Blue Bloater')</b>: tổn thương chủ yếu ở đường dẫn khí lớn với tăng tiết nhầy và phì đại tuyến nhầy (chỉ số Reid > 0,5), nhưng vách phế nang còn nguyên vẹn nên <b>DLCO thường BÌNH THƯỜNG</b>."
      ],
      wrongs: {
        1: "Viêm phế quản mạn có DLCO bình thường vì vách phế nang và mao mạch phổi không bị phá hủy.",
        2: "Hen phế quản thường có DLCO bình thường hoặc thậm chí tăng nhẹ do tăng thể tích máu mao mạch phổi.",
        3: "Dày màng đáy gặp trong bệnh tự miễn hoặc Goodpasture có xuất huyết phế nang làm tăng DLCO.",
        4: "Yếu cơ hoành gây giảm FVC nhưng không phá hủy màng phế nang mao mạch nên DLCO tính theo thể tích phế nang (DLCO/VA) bình thường."
      },
      objective:
        "Khí phế thũng trong COPD phá hủy vách phế nang và giường mao mạch phổi làm giảm diện tích trao đổi khí, dẫn đến giảm độ khuếch tán khí DLCO (khác với viêm phế quản mạn có DLCO bình thường)."
    }
  ]
};
