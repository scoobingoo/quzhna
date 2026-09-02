/* ==========================================================================
   Bộ đề: Thận, Huyết học & Khớp — 30 ca lâm sàng chuyên sâu theo guideline KDIGO, ASH & ACR.
   Tài liệu tham khảo: Bệnh viện Bạch Mai, Hướng dẫn Thận học - Huyết học - Thấp khớp học.
   ========================================================================== */
window.QUIZ_SET = {
  id: "than-huyet-hoc-khop",
  eyebrow: "USMLE Step 2 CK · Chuyên đề Nội khoa",
  title: "Thận, Huyết học & Khớp",
  blurb: "30 ca lâm sàng chuyên sâu Thận - Huyết học - Cơ xương khớp (KDIGO, ASH, ACR, Bạch Mai): Hội chứng thận hư RVT, ATN, AIN, tăng kali máu ECG, thiếu máu thiếu sắt/B12/Thalassemia, AIHA, TTP, HIT, Đa u tủy xương MM, CML/CLL, Lupus SLE, Viêm khớp dạng thấp, Gout/Pseudogout, Viêm cột sống dính khớp và Viêm mạch máu ANCA.",

  cases: [
    {
      spec: "Thận học",
      task: "Bước chẩn đoán và xử trí",
      short: "Hội chứng thận hư và biến chứng huyết khối tĩnh mạch thận",
      vignette: [
        "Nam 46 tuổi có tiền sử mắc Bệnh cầu thận màng (Membranous Nephropathy) với Hội chứng thận hư (Protein niệu 8,2 g/24h, Albumin huyết thanh 1,8 g/dL, phù to hai chân).",
        "Bệnh nhân đột ngột xuất hiện <b>đau dữ dội vùng hông lưng bên trái kèm đái máu đại thể đỏ tươi và sốt nhẹ</b>. Lượng nước tiểu giảm dần và Creatinine huyết thanh tăng từ 1,0 lên 2,2 mg/dL.",
        "Chụp CT mạch máu thận có cản quang: <b>Khuyết thuốc cản quang hoàn toàn trong lòng tĩnh mạch thận trái (Huyết khối tĩnh mạch thận - Renal Vein Thrombosis)</b> kèm thận trái sưng to ứ máu."
      ],
      vitals: [
        ["Nhiệt độ", "37,6 °C"],
        ["Huyết áp", "140/90"],
        ["Mạch", "88 l/ph"],
        ["Nhịp thở", "18 l/ph"]
      ],
      stem: "Cơ chế sinh lý bệnh gây trạng thái tăng đông dẫn đến huyết khối tĩnh mạch thận trong hội chứng thận hư là gì và điều trị bắt đầu bằng gì?",
      choices: [
        "Mất qua nước tiểu các protein chống đông tự nhiên (đặc biệt là Antithrombin III, Protein C, Protein S) kết hợp tăng tổng hợp Fibrinogen tại gan; điều trị bắt đầu ngay bằng Thuốc chống đông toàn thân (Heparin / DOAC / Warfarin)",
        "Tăng kết tập tiểu cầu đơn thuần; điều trị bằng Aspirin 81 mg đơn độc",
        "Tắc nghẽn niệu quản do sỏi canxi; tán sỏi niệu quản cấp cứu",
        "Nhiễm khuẩn đài bể thận cấp; chỉ cần dùng kháng sinh Ciprofloxacin",
        "Hoại tử ống thận cấp do thiếu máu; điều trị bằng chạy thận nhân tạo"
      ],
      answer: 0,
      why: [
        "Bệnh nhân bị <b>Huyết khối tĩnh mạch thận (Renal Vein Thrombosis - RVT)</b> - biến chứng tắc mạch nguy hiểm thường gặp nhất ở bệnh nhân <b>Hội chứng thận hư do Bệnh cầu thận màng (Membranous Nephropathy)</b> khi <b>Albumin huyết thanh giảm sâu < 2,0–2,5 g/dL</b>.",
        "Cơ chế tăng đông trong Hội chứng thận hư: Mất qua màng lọc cầu thận các yếu tố chống đông tự nhiên có kích thước phân tử nhỏ (đặc biệt là <b>Antithrombin III</b>, Protein C và Protein S), kết hợp gan tăng tổng hợp bù trừ Fibrinogen và tăng độ nhớt máu.",
        "Tam chứng RVT cấp: <b>Đau hông lưng đột ngột + Đái máu đại thể + Suy giảm chức năng thận cấp</b>.",
        "Điều trị bắt buộc: <b>Thuốc chống đông toàn thân kéo dài</b> (Heparin chuyển tiếp Warfarin hoặc DOAC) trong ít nhất 6 tháng hoặc cho đến khi hội chứng thận hư lui bệnh."
      ],
      wrongs: {
        1: "Thuốc kháng tiểu cầu không đủ hiệu quả để điều trị huyết khối tĩnh mạch lớn trong bối cảnh thiếu hụt Antithrombin III nặng.",
        2: "Chụp CT đã chứng minh tắc tĩnh mạch thận do huyết khối, không phải sỏi niệu quản.",
        3: "Không có bằng chứng viêm đài bể thận vi khuẩn và có khuyết tắc tĩnh mạch rõ rệt.",
        4: "Suy thận ở đây do ứ trệ dòng thoát tĩnh mạch thận cấp, điều trị chống đông sẽ phục hồi chức năng thận."
      },
      objective:
        "Hội chứng thận hư gây tăng đông do mất Antithrombin III qua nước tiểu, dẫn đến biến chứng Huyết khối tĩnh mạch thận (đau hông lưng, đái máu đại thể); điều trị bằng Thuốc chống đông."
    },

    {
      spec: "Thận học",
      task: "Bước chẩn đoán và phân tích cặn nước tiểu",
      short: "Hoại tử ống thận cấp (ATN) do thiếu máu / thuốc độc thận",
      vignette: [
        "Nam 66 tuổi vừa trải qua phẫu thuật thay đoạn động mạch chủ bụng có kẹp mạch chủ kéo dài và dùng kháng sinh Aminoglycoside (Gentamicin) sau mổ. Ngày thứ 2 sau mổ, lượng nước tiểu giảm xuống còn 250 mL/24 giờ (thiểu niệu).",
        "Xét nghiệm: <b>Creatinine huyết thanh tăng nhanh từ 1,0 lên 3,4 mg/dL, BUN 68 mg/dL</b>.",
        "Xét nghiệm nước tiểu và cặn lắng: <b>Phân số bài xuất Natri (FENa) = 3,2% (> 2%)</b>, <b>Áp lực thẩm thấu nước tiểu = 280 mOsm/kg</b>, Natri niệu 58 mEq/L (> 40 mEq/L). Soi cặn lắng nước tiểu thấy: <b>Nhiều trụ hạt nâu bùn (Muddy brown granular casts) và các mảnh tế bào biểu mô ống thận bị bong tróc hoại tử</b>."
      ],
      vitals: [
        ["Nhiệt độ", "37,0 °C"],
        ["Huyết áp", "125/75"],
        ["Mạch", "80 l/ph"],
        ["Nhịp thở", "18 l/ph"]
      ],
      stem: "Chẩn đoán xác định cho tổn thương thận cấp này là gì?",
      choices: [
        "Hoại tử ống thận cấp tại thận (Acute Tubular Necrosis - ATN)",
        "Tổn thương thận cấp trước thận do giảm thể tích đơn thuần (Prerenal AKI)",
        "Viêm cầu thận tiến triển nhanh (RPGN)",
        "Viêm thận kẽ cấp do dị ứng thuốc (AIN)",
        "Tắc nghẽn đường dẫn niệu sau thận"
      ],
      answer: 0,
      why: [
        "Bệnh nhân có đầy đủ các tiêu chuẩn kinh điển của <b>Hoại tử ống thận cấp (Acute Tubular Necrosis - ATN)</b> do phối hợp thiếu máu tưới máu và độc tính của Aminoglycoside.",
        "Phân biệt giữa Suy thận trước thận và ATN tại thận: ATN có <b>Trụ hạt nâu bùn (Muddy brown casts)</b>, <b>FENa > 2%</b>, <b>Natri niệu > 40 mEq/L</b> và <b>ALTT niệu < 350 mOsm/kg</b> (mất khả năng cô đặc nước tiểu).",
        "Điều trị: Ngừng ngay các thuốc độc thận, tối ưu hóa huyết động bù đủ dịch và điều trị nâng đỡ chờ tế bào ống thận tự tái tạo hồi phục."
      ],
      wrongs: {
        1: "Suy thận trước thận có FENa < 1%, Na niệu < 20 mEq/L, ALTT niệu > 500 mOsm/kg và không có trụ hạt nâu bùn.",
        2: "Viêm cầu thận có trụ hồng cầu biến dạng và protein niệu vi thể.",
        3: "Viêm thận kẽ cấp (AIN) có trụ bạch cầu và bạch cầu ái toan niệu.",
        4: "Sau thận có giãn đài bể thận trên siêu âm."
      },
      objective:
        "Hoại tử ống thận cấp (ATN) đặc trưng bởi Trụ hạt nâu bùn trên cặn nước tiểu, FENa > 2%, Natri niệu > 40 mEq/L và ALTT niệu < 350 mOsm/kg; xử trí bằng ngừng thuốc độc thận và hồi sức dịch hỗ trợ."
    },

    {
      spec: "Thận học",
      task: "Bước chẩn đoán và xử trí",
      short: "Viêm thận kẽ cấp do thuốc (Acute Interstitial Nephritis - AIN)",
      vignette: [
        "Nam 56 tuổi đang điều trị viêm loét dạ dày bằng Omeprazole và uống Ibuprofen 2 tuần qua. Bệnh nhân đến khám vì sốt nhẹ, mệt mỏi và nổi ban đỏ ngứa toàn thân.",
        "Khám: <b>Phát ban dát sẩn dạng sởi rải rác ở thân mình và chi</b>, đau mỏi khớp cổ tay. Creatinine huyết thanh tăng từ 0,9 lên 2,8 mg/dL.",
        "Xét nghiệm: Bạch cầu máu có <b>Tỉ lệ Bạch cầu ái toan tăng cao 12% (Eosinophilia)</b>. Xét nghiệm nước tiểu: <b>Trụ bạch cầu (WBC casts) cấy vô khuẩn</b> và <b>Bạch cầu ái toan trong nước tiểu dương tính (Eosinophiluria)</b>."
      ],
      vitals: [
        ["Nhiệt độ", "38,2 °C"],
        ["Huyết áp", "130/80"],
        ["Mạch", "84 l/ph"],
        ["Nhịp thở", "16 l/ph"]
      ],
      stem: "Căn nguyên của tổn thương thận cấp này là gì và bước xử trí quan trọng hàng đầu là gì?",
      choices: [
        "Viêm thận kẽ cấp (Acute Interstitial Nephritis - AIN) do dị ứng thuốc (PPI / NSAID); bước xử trí quan trọng nhất là NGỪNG NGAY THUỐC THỦ PHẠM và dùng Corticoid nếu không cải thiện",
        "Viêm đài bể thận cấp; dùng kháng sinh Ciprofloxacin liều cao",
        "Viêm bàng quang cấp; kê đơn kháng sinh Fosfomycin",
        "Hoại tử nhú thận do thuốc giảm đau; phẫu thuật cắt thận",
        "Hẹp động mạch thận cấp tính; đặt stent động mạch thận"
      ],
      answer: 0,
      why: [
        "Bệnh nhân có <b>Tam chứng kinh điển của Viêm thận kẽ cấp do thuốc (Drug-Induced AIN)</b>: Sốt + Phát ban dát sẩn + Đau khớp kết hợp suy thận cấp.",
        "Cận lâm sàng: <b>Tăng bạch cầu ái toan máu (Eosinophilia) + Bạch cầu ái toan niệu (Eosinophiluria) + Trụ bạch cầu (WBC casts) cấy vô khuẩn</b>.",
        "Thuốc thủ phạm phổ biến: PPI (Omeprazole), NSAID, Penicillin/Cephalosporin, Lợi tiểu, Rifampin.",
        "Xử trí: <b>Ngừng ngay thuốc nghi ngờ</b>; nếu sau vài ngày không cải thiện chỉ định <b>Corticoid đường uống (Prednisone)</b>."
      ],
      wrongs: {
        1: "Cấy nước tiểu vô khuẩn và có tam chứng dị ứng thuốc; kháng sinh không có tác dụng.",
        2: "Viêm bàng quang không gây suy thận cấp tăng Creatinine.",
        3: "Hoại tử nhú thận gây đái máu đại thể có mô nhú thận trong nước tiểu.",
        4: "Không có hẹp mạch máu thận."
      },
      objective:
        "Viêm thận kẽ cấp (AIN do PPI, NSAID, Kháng sinh) đặc trưng bởi tam chứng sốt, phát ban, đau khớp kèm tăng bạch cầu ái toan máu/niệu và trụ bạch cầu; xử trí bằng ngừng ngay thuốc thủ phạm và dùng Corticoid nếu cần."
    },

    {
      spec: "Thận học",
      task: "Bước xử trí cấp cứu",
      short: "Cơn tăng kali máu nặng có biến đổi điện tâm đồ",
      vignette: [
        "Nam 58 tuổi tiền sử bệnh thận mạn giai đoạn 4 (eGFR 22 mL/ph) do đái tháo đường, nhập viện vì mệt lả và yếu liệt mềm cơ hai chân tiến triển sau khi ăn nhiều quả chuối và sầu riêng.",
        "Xét nghiệm máu khẩn tại giường: <b>Kali huyết thanh tăng rất cao 7,4 mEq/L (Tăng kali máu mức độ nặng)</b>.",
        "Điện tâm đồ: <b>Sóng T cao nhọn đối xứng đáy hẹp ở các chuyển đạo trước tim (Peaked T waves), khoảng PR kéo dài, sóng P dẹt và phức bộ QRS bắt đầu giãn rộng (QRS widening)</b>."
      ],
      vitals: [
        ["Nhiệt độ", "36,8 °C"],
        ["Huyết áp", "110/65"],
        ["Mạch", "52 l/ph"],
        ["Nhịp thở", "18 l/ph"]
      ],
      stem: "Thuốc tiêm tĩnh mạch cấp cứu đầu tiên cần phải thực hiện NGAY LẬP TỨC để bảo vệ tim trước khi làm các biện pháp hạ kali máu khác là gì?",
      choices: [
        "Tiêm tĩnh mạch Calci Gluconate 10% (10 mL trong 2–3 phút) dưới theo dõi monitor tim",
        "Tiêm tĩnh mạch Insulin Regular 10 đơn vị pha trong Glucose 50% ngay lập tức",
        "Khí dung Salbutamol liều cao (10–20 mg)",
        "Uống bột nhựa trao đổi ion gắn kali Sodium Zirconium Cyclosilicate (Lokelma)",
        "Chờ kết quả xét nghiệm máu lặp lại sau 2 giờ để khẳng định"
      ],
      answer: 0,
      why: [
        "Bệnh nhân có <b>Tăng kali máu nặng (K > 6,5–7,0 mEq/L) CÓ BIẾN ĐỔI TRÊN ĐIỆN TÂM ĐỒ</b> đe dọa rung thất và ngừng tim.",
        "<b>BƯỚC CẤP CỨU ĐẦU TIÊN SỐNG CÒN: TIÊM CALCI TĨNH MẠCH (CALCI GLUCONATE 10%)</b> để <b>ỔN ĐỊNH MÀNG TẾ BÀO CƠ TIM NGAY LẬP TỨC</b> bằng cách nâng ngưỡng điện thế hoạt động, ngăn ngừa khử cực tự phát gây rung thất.",
        "Sau khi đã tiêm Canxi bảo vệ tim, mới tiến hành: (1) Đưa K vào tế bào bằng <b>Insulin Regular 10 UI + Glucose 50g</b> và Khí dung Salbutamol; (2) Đào thải K vĩnh viễn bằng Lợi tiểu quai, Nhựa trao đổi ion hoặc Lọc máu cấp cứu."
      ],
      wrongs: {
        1: "Insulin/Glucose mất 15-30 phút mới hạ K; trong thời gian đó bệnh nhân có thể ngừng tim nếu chưa được Calci bảo vệ màng tim.",
        2: "Salbutamol khí dung không bảo vệ màng tim tức thì.",
        3: "Thuốc gắn kali tác dụng sau nhiều giờ, không cứu được bệnh nhân đang có biến đổi ECG cấp tính.",
        4: "Trì hoãn điều trị sẽ dẫn đến tử vong nhanh chóng."
      },
      objective:
        "Tăng kali máu nặng có biến đổi điện tâm đồ (sóng T nhọn, QRS rộng) cấp cứu đầu tiên bắt buộc phải tiêm Calci Gluconate 10% tĩnh mạch ngay để ổn định màng cơ tim phòng rung thất, sau đó mới dùng Insulin + Glucose và Salbutamol để hạ Kali."
    },

    {
      spec: "Huyết học",
      task: "Bước chẩn đoán phân biệt",
      short: "Thiếu máu hồng cầu nhỏ: Thiếu sắt vs Beta-Thalassemia Minor",
      vignette: [
        "Nam 22 tuổi gốc Địa Trung Hải đi khám sức khỏe nghĩa vụ quân sự, hoàn toàn không có triệu chứng cơ năng.",
        "Xét nghiệm: <b>Hemoglobin 11,2 g/dL</b>, <b>Số lượng hồng cầu RBC TĂNG CAO 6,2 triệu/mcL</b>, <b>MCV GIẢM CỰC SÂU 62 fL</b> -> <b>Chỉ số Mentzer (MCV / RBC) = 10 (< 13)</b>, RDW bình thường 12,8%.",
        "Xét nghiệm sắt: <b>Ferritin huyết thanh 140 ng/mL (hoàn toàn bình thường)</b>, Độ bão hòa Transferrin bình thường."
      ],
      vitals: [
        ["Nhiệt độ", "36,8 °C"],
        ["Huyết áp", "120/75"],
        ["Mạch", "72 l/ph"],
        ["Nhịp thở", "16 l/ph"]
      ],
      stem: "Xét nghiệm nào sau đây giúp khẳng định chẩn đoán mang gen Beta-Thalassemia dị hợp tử (Beta-Thalassemia Minor)?",
      choices: [
        "Điện di Hemoglobin (Hemoglobin Electrophoresis) phát hiện nồng độ Hemoglobin A2 (HbA2) tăng cao > 3,5%",
        "Thử nghiệm uống viên sắt sulfat liều cao trong 3 tháng",
        "Định lượng nồng độ Erythropoietin huyết thanh",
        "Sinh thiết tủy xương nhuộm sắt xanh Phổ (Prussian blue)",
        "Nghiệm pháp Coombs trực tiếp"
      ],
      answer: 0,
      why: [
        "Phân biệt giữa Thiếu máu thiếu sắt và <b>Beta-Thalassemia Minor (Thể ẩn / Mang gen)</b>:",
        "- Beta-Thalassemia Minor: Đột biến dị hợp tử gen beta-globin -> <b>Số lượng hồng cầu RBC TĂNG CAO (> 5 triệu) mặc dù MCV giảm rất sâu (< 70 fL) -> Chỉ số Mentzer (MCV/RBC) < 13</b>.",
        "- <b>Dự trữ sắt Ferritin và RDW hoàn toàn bình thường</b>.",
        "- Tiêu chuẩn vàng: <b>Điện di Hemoglobin thấy HbA2 (alpha2-delta2) TĂNG CAO > 3,5%</b>.",
        "- Bệnh nhân Beta-Thalassemia Minor <b>không cần điều trị và tuyệt đối không tự ý uống bổ sung sắt</b>."
      ],
      wrongs: {
        1: "Uống sắt ở bệnh nhân Thalassemia có dự trữ sắt bình thường sẽ gây quá tải ứ sắt mô.",
        2: "Erythropoietin không giúp phân biệt nguyên nhân thiếu máu hồng cầu nhỏ.",
        3: "Sinh thiết tủy là thủ thuật xâm lấn không cần thiết.",
        4: "Coombs dùng cho thiếu máu tán huyết tự miễn."
      },
      objective:
        "Beta-Thalassemia Minor đặc trưng bởi MCV giảm sâu kèm số lượng RBC tăng cao (Chỉ số Mentzer < 13), Ferritin bình thường; chẩn đoán xác định bằng Điện di Hemoglobin thấy HbA2 > 3,5%; không bổ sung sắt."
    },

    {
      spec: "Huyết học",
      task: "Bước chẩn đoán và điều trị",
      short: "Thiếu máu tán huyết tự miễn kháng thể ấm (Warm AIHA)",
      vignette: [
        "Nữ 32 tuổi có tiền sử Lupus ban đỏ hệ thống (SLE), đến khám vì mệt mỏi nhiều, khó thở khi đi lại, da xanh xao và nước tiểu sẫm màu màu nước chè đặc 1 tuần nay.",
        "Khám: Da niêm mạc nhợt nhạt, củng mạc mắt vàng nhẹ, lách to 2 cm dưới bờ sườn trái. Không sốt.",
        "Xét nghiệm máu: <b>Hemoglobin giảm nặng 6,8 g/dL, MCV 92 fL (Đẳng bào), Tỉ lệ hồng cầu lưới tăng rất cao 8,5%</b>. <b>Bilirubin gián tiếp tăng cao 3,8 mg/dL, LDH tăng vọt 950 U/L, Haptoglobin huyết thanh giảm gần bằng 0</b> (Tán huyết ngoài mạch).",
        "Tiêu bản máu ngoại vi: <b>Nhiều hồng cầu hình cầu nhỏ đậm đặc mất vùng sáng trung tâm (Spherocytes)</b> và đa sắc bào. <b>Nghiệm pháp Coombs trực tiếp (Direct Antiglobulin Test - DAT) DƯƠNG TÍNH MẠNH VỚI KHÁNG THỂ IGG</b> (và C3)."
      ],
      vitals: [
        ["Nhiệt độ", "37,0 °C"],
        ["Huyết áp", "110/68"],
        ["Mạch", "102 l/ph"],
        ["Nhịp thở", "20 l/ph"]
      ],
      stem: "Cơ chế phá hủy hồng cầu và thuốc điều trị đầu tay chuẩn xác nhất là gì?",
      choices: [
        "Kháng thể tự miễn IgG gắn vào kháng nguyên màng hồng cầu ở nhiệt độ cơ thể 37 °C, các đại thực bào lách nhận diện đoạn Fc và thực bào màng hồng cầu tạo hồng cầu hình cầu (Warm AIHA); điều trị đầu tay bằng Corticoid đường toàn thân (Prednisone 1 mg/kg/ngày)",
        "Kháng thể IgM làm vón kết hồng cầu ở đầu chi; điều trị bằng giữ ấm và Rituximab",
        "Hồng cầu hình cầu di truyền bẩm sinh; điều trị bằng cắt lách ngay",
        "Thiếu máu do tan máu vi mạch; điều trị bằng thay huyết tương PEX",
        "Thiếu hụt men G6PD; điều trị bằng truyền máu tươi"
      ],
      answer: 0,
      why: [
        "Bệnh nhân có <b>Thiếu máu tán huyết tự miễn kháng thể ấm (Warm Autoimmune Hemolytic Anemia - Warm AIHA)</b> thứ phát sau bệnh tự miễn Lupus (SLE).",
        "Cơ chế: <b>Tự kháng thể IgG (hoạt động tối ưu ở nhiệt độ cơ thể 37 °C)</b> bám lên bề mặt hồng cầu. Khi hồng cầu đi qua các xoang của <b>Lách</b>, các đại thực bào lách bắt giữ và gặm mất một phần màng tế bào tạo ra <b>Hồng cầu hình cầu (Spherocytes)</b> và phá hủy hồng cầu (Tán huyết ngoài mạch tại lách).",
        "Chẩn đoán xác định: <b>Nghiệm pháp Coombs trực tiếp dương tính với IgG</b>.",
        "Điều trị đầu tay số một: <b>Corticoid toàn thân (Prednisone 1 mg/kg/ngày)</b> để ức chế sản xuất kháng thể và ức chế đại thực bào lách. Nếu tái phát hoặc kháng trị: <b>Kháng thể đơn dòng kháng CD20 (Rituximab)</b> HOẶC <b>Phẫu thuật cắt lách (Splenectomy)</b>."
      ],
      wrongs: {
        1: "Kháng thể lạnh (Cold AIHA) do kháng thể IgM (Coombs dương tính với C3), không đáp ứng với Corticoid mà điều trị bằng giữ ấm và Rituximab.",
        2: "Hồng cầu hình cầu di truyền (Hereditary Spherocytosis) có tiền sử gia đình và Coombs âm tính.",
        3: "Tán huyết vi mạch (TTP/HUS) có mảnh vỡ hồng cầu Schistocytes và Coombs âm tính.",
        4: "G6PD có thể Heinz và Coombs âm tính."
      },
      objective:
        "Thiếu máu tán huyết tự miễn kháng thể ấm (Warm AIHA do IgG, có hồng cầu hình cầu spherocytes, Coombs trực tiếp IgG dương tính); điều trị đầu tay bằng Corticoid toàn thân (Prednisone)."
    },

    {
      spec: "Huyết học",
      task: "Bước xử trí cấp cứu",
      short: "Ban xuất huyết giảm tiểu cầu huyết khối (TTP) - Ngũ chứng",
      vignette: [
        "Nữ 34 tuổi khỏe mạnh được người nhà đưa vào cấp cứu vì sốt, lú lẫn nói nhảm, đau đầu và xuất hiện nhiều vết bầm tím xuất huyết dưới da tự nhiên.",
        "Khám: Bệnh nhân tiếp xúc chậm, lơ mơ định hướng kém, củng mạc mắt vàng nhẹ, nhiều chấm xuất huyết và mảng bầm tím ở cẳng chân. Không có dấu hiệu thần kinh khu trú.",
        "Xét nghiệm máu khẩn cấp:",
        "- <b>Số lượng tiểu cầu GIẢM NẶNG CÒN 14.000/mcL</b> (bình thường 150.000–450.000).",
        "- <b>Hemoglobin giảm 7,5 g/dL</b>, Hồng cầu lưới tăng 7,2%, Bilirubin gián tiếp tăng, LDH tăng rất cao 1.450 U/L, Haptoglobin giảm gần 0.",
        "- Tiêu bản máu ngoại vi: <b>Nhiều mảnh vỡ hồng cầu hình mũ cối / hình tam giác (Schistocytes / Helmet cells, chiếm 4,5%)</b> (Thiếu máu tán huyết vi mạch - MAHA).",
        "- Xét nghiệm đông máu: <b>PT, aPTT và Fibrinogen HOÀN TOÀN BÌNH THƯỜNG</b> (phân biệt với DIC).",
        "- Creatinine 2,1 mg/dL (Tổn thương thận cấp)."
      ],
      vitals: [
        ["Nhiệt độ", "38,5 °C"],
        ["Huyết áp", "125/75"],
        ["Mạch", "104 l/ph"],
        ["Nhịp thở", "18 l/ph"]
      ],
      stem: "Cơ chế enzym thiếu hụt, biện pháp cấp cứu sống còn duy nhất và chế phẩm máu nào BỊ CHỐNG CHỈ ĐỊNH TUYỆT ĐỐI?",
      choices: [
        "Thiếu hụt enzym phân cắt vWF (ADAMTS13 do tự kháng thể); cấp cứu sống còn bằng Thay huyết tương (Plasma Exchange - PEX) kết hợp Corticoid; CHỐNG CHỈ ĐỊNH TUYỆT ĐỐI TRUYỀN TIỂU CẦU",
        "Nhiễm độc tố Shiga toxin của vi khuẩn E. coli O157:H7; điều trị bằng truyền khối tiểu cầu ồ ạt",
        "Đông máu nội mạch rải rác; điều trị bằng truyền huyết tương tươi đông lạnh và tiểu cầu",
        "Ban xuất huyết giảm tiểu cầu miễn dịch (ITP); điều trị bằng tiêm IVIG đơn độc",
        "Suy thận cấp vô niệu; chỉ định chạy thận nhân tạo đơn thuần"
      ],
      answer: 0,
      why: [
        "Bệnh nhân có đầy đủ <b>Ngũ chứng kinh điển của Ban xuất huyết giảm tiểu cầu huyết khối (Thrombotic Thrombocytopenic Purpura - TTP / Hội chứng Moschcowitz)</b> (gặp đầy đủ ở 20–30% các ca, chỉ cần có Giảm tiểu cầu + Thiếu máu tán huyết vi mạch MAHA là đủ chỉ định cấp cứu):",
        "1. <b>Giảm tiểu cầu nặng (Thrombocytopenia)</b> gây xuất huyết niêm mạc da.",
        "2. <b>Thiếu máu tán huyết vi mạch (MAHA)</b> với nhiều <b>Mảnh vỡ hồng cầu Schistocytes</b> trên lam máu.",
        "3. <b>Rối loạn thần kinh dao động</b> (lú lẫn, đau đầu, co giật, đột quỵ).",
        "4. <b>Tổn thương thận cấp</b> (Creatinine tăng nhẹ-vừa).",
        "5. <b>Sốt</b>.",
        "- Cơ chế bệnh sinh: Do <b>tự kháng thể IgG ức chế enzym ADAMTS13</b> (hoạt tính enzym giảm < 10%). Enzym này chịu trách nhiệm cắt nhỏ các phân tử von Willebrand factor (vWF) siêu lớn (ULVWF). Thiếu ADAMTS13 khiến các chuỗi vWF siêu lớn tích tụ kết dính tiểu cầu ồ ạt, tạo ra các <b>vi huyết khối tiểu cầu trong vi mạch khắp cơ thể</b> làm tắc mạch thiếu máu não/thận và xé rách hồng cầu khi lưu thông qua (tạo Schistocytes).",
        "- <b>ĐÔNG MÁU BÌNH THƯỜNG</b>: PT, aPTT, Fibrinogen bình thường vì huyết khối TTP chỉ gồm tiểu cầu mà không kích hoạt chuỗi đông máu (khác với DIC).",
        "- <b>CẤP CỨU SỐNG CÒN</b>: <b>THAY HUYẾT TƯƠNG (PLASMA EXCHANGE - PEX)</b> khẩn cấp (vừa loại bỏ tự kháng thể vừa bổ sung enzym ADAMTS13 từ huyết tương người cho) kết hợp <b>Corticoid toàn thân</b> và thuốc ức chế kháng thể (Caplacizumab, Rituximab).",
        "- <b>CHỐNG CHỈ ĐỊNH TUYỆT ĐỐI TRUYỀN KHỐI TIỂU CẦU</b>: Truyền tiểu cầu giống như 'đổ thêm dầu vào lửa', cung cấp thêm nguyên liệu cho các chuỗi vWF siêu lớn kết tập tạo thêm vi huyết khối gây nhồi máu não/nhồi máu cơ tim và tử vong ngay lập tức."
      ],
      wrongs: {
        1: "Nhiễm Shiga toxin gây Hội chứng tán huyết tăng ure máu (HUS) thường gặp ở trẻ em sau đợt tiêu chảy ra máu, không thiếu hụt ADAMTS13 và không có triệu chứng thần kinh nổi trội.",
        2: "DIC có PT và aPTT kéo dài, Fibrinogen giảm thấp; ở đây đông máu hoàn toàn bình thường.",
        3: "ITP là giảm tiểu cầu đơn độc, KHÔNG CÓ thiếu máu tán huyết vi mạch Schistocytes và không có suy thận/thần kinh.",
        4: "Chạy thận không giải quyết được vi huyết khối tiểu cầu toàn thân đang đe dọa tắc mạch não tử vong."
      },
      objective:
        "TTP (Ngũ chứng: giảm tiểu cầu, tán huyết vi mạch Schistocytes, triệu chứng thần kinh, sốt, suy thận; đông máu bình thường) do thiếu hụt ADAMTS13; cấp cứu bằng Thay huyết tương (PEX) + Corticoid; CHỐNG CHỈ ĐỊNH TUYỆT ĐỐI truyền tiểu cầu."
    },

    {
      spec: "Huyết học",
      task: "Bước xử trí cấp cứu",
      short: "Giảm tiểu cầu do Heparin (Heparin-Induced Thrombocytopenia - HIT Type 2)",
      vignette: [
        "Nam 62 tuổi đang nằm viện điều trị sau phẫu thuật thay khớp gối toàn phần và được tiêm dưới da <b>Enoxaparin (Heparin trọng lượng phân tử thấp) dự phòng huyết khối ngày thứ 7</b>.",
        "Xét nghiệm máu kiểm tra định kỳ: <b>Số lượng tiểu cầu giảm đột ngột từ 260.000 xuống còn 95.000/mcL (Số lượng tiểu cầu giảm > 50% so với ban đầu)</b>. Bệnh nhân than phiền bắp chân trái sưng to đau và lạnh ngón chân cái.",
        "Siêu âm Doppler chi dưới phát hiện <b>Huyết khối tĩnh mạch sâu mới xuất hiện ở tầng đùi khoeo chân trái</b>. Điểm số thang điểm 4T đánh giá HIT = <b>7 điểm (Nguy cơ HIT cao)</b>."
      ],
      vitals: [
        ["Nhiệt độ", "36,8 °C"],
        ["Huyết áp", "125/75"],
        ["Mạch", "76 l/ph"],
        ["Nhịp thở", "16 l/ph"]
      ],
      stem: "Cơ chế miễn dịch của HIT Type 2 và thứ tự các bước xử trí bắt buộc tiếp theo là gì?",
      choices: [
        "Tự kháng thể IgG kháng lại phức hợp Heparin - Yếu tố 4 tiểu cầu (PF4) gây hoạt hóa tiểu cầu ồ ạt dẫn đến huyết khối nghịch lý; xử trí: NGỪNG NGAY TOÀN BỘ CÁC DẠNG HEPARIN và chuyển sang Thuốc ức chế trực tiếp Thrombin (Argatroban hoặc Bivalirudin / Fondaparinux)",
        "Độc tính trực tiếp của Heparin lên tủy xương; điều trị bằng truyền khối tiểu cầu cấp cứu",
        "Chuyển ngay sang dùng thuốc chống đông đường uống Warfarin liều cao ngay trong ngày đầu",
        "Tiếp tục Heparin và tăng gấp đôi liều để chống huyết khối",
        "Chỉ định phẫu thuật lấy huyết khối mạch máu khẩn cấp mà không cần đổi thuốc"
      ],
      answer: 0,
      why: [
        "Bệnh nhân bị <b>Giảm tiểu cầu do Heparin Típ 2 (Heparin-Induced Thrombocytopenia Type 2 - HIT Type 2)</b>:",
        "- Thời điểm xuất hiện: <b>Ngày thứ 5 đến ngày thứ 10 sau khi bắt đầu dùng Heparin</b> (hoặc sớm hơn trong vài giờ nếu đã từng dùng Heparin trong vòng 3 tháng qua).",
        "- Tiêu chuẩn: <b>Số lượng tiểu cầu giảm ≥ 50% so với mức nền</b> (thường giảm ở mức 40.000–100.000, hiếm khi < 20.000).",
        "- Cơ chế miễn dịch bệnh sinh: Cơ thể sinh ra <b>kháng thể IgG chống lại phức hợp [Heparin + Yếu tố 4 tiểu cầu (PF4)]</b>. Phức hợp miễn dịch này gắn vào thụ thể Fc-gamma-RIIa trên bề mặt tiểu cầu làm <b>hoạt hóa tiểu cầu ồ ạt, giải phóng các vi hạt tiền đông dẫn đến tình trạng TĂNG ĐÔNG NGHỊCH LÝ CỰC KỲ NGUY HIỂM GÂY HUYẾT KHỐI TĨNH MẠCH VÀ ĐỘNG MẠCH (HITT)</b> (nguy cơ huyết khối lên tới 50%).",
        "- Xử trí bắt buộc:",
        "1. <b>NGỪNG NGAY LẬP TỨC TẤT CẢ CÁC DẠNG HEPARIN</b> (bao gồm cả Heparin không phân đoạn UFH, LMWH Enoxaparin và dịch tráng ống thông Heparin flush).",
        "2. <b>BẮT ĐẦU NGAY THUỐC CHỐNG ĐÔNG KHÔNG PHẢI HEPARIN</b>: <b>Thuốc ức chế trực tiếp Thrombin đường tĩnh mạch (Argatroban, Bivalirudin) HOẶC Fondaparinux / DOAC</b>.",
        "3. <b>CHỐNG CHỈ ĐỊNH DÙNG WARFARIN TRONG GIAI ĐOẠN ĐẦU</b>: Vì Warfarin làm giảm nhanh Protein C trước gây hoại tử da do Warfarin và hoại tử chi do nghẽn mạch tĩnh mạch (Venous limb gangrene); chỉ được bắt đầu Warfarin sau khi tiểu cầu đã hồi phục > 150.000/mcL.",
        "4. <b>TRÁNH TRUYỀN TIỂU CẦU</b> vì làm tăng biến cố huyết khối."
      ],
      wrongs: {
        1: "HIT Type 2 là bệnh qua trung gian miễn dịch kháng thể, không phải ức chế tủy; truyền tiểu cầu chống chỉ định vì làm bùng phát huyết khối tắc mạch.",
        2: "Bắt đầu Warfarin ngay từ đầu khi đang HIT cấp làm cạn kiệt Protein C gây hoại tử da và hoại tử chi đe dọa cắt cụt.",
        3: "Tiếp tục Heparin sẽ làm tăng đông dữ dội dẫn đến nhồi máu phổi và tử vong.",
        4: "Phẫu thuật lấy huyết khối không ngăn được tình trạng hoạt hóa tiểu cầu toàn thân tiếp diễn nếu không đổi thuốc chống đông."
      },
      objective:
        "HIT Type 2 (tiểu cầu giảm > 50% sau 5-10 ngày dùng Heparin do kháng thể kháng Heparin-PF4 gây biến chứng huyết khối nghịch lý); xử trí bắt buộc ngừng ngay Heparin và chuyển sang Argatroban/Fondaparinux; cấm dùng Warfarin trong giai đoạn cấp."
    },

    {
      spec: "Huyết học",
      task: "Bước chẩn đoán và tiêu chuẩn",
      short: "Đa u tủy xương (Multiple Myeloma) - Tiêu chuẩn CRAB",
      vignette: [
        "Nam 68 tuổi đến khám vì đau lưng âm ỉ liên tục ở vùng cột sống thắt lưng 3 tháng nay, đau tăng khi vận động, kèm mệt mỏi, sụt 4 kg và hay bị các đợt nhiễm trùng viêm phổi tái phát.",
        "Khám: Da xanh nhợt, ấn đau dọc các gai sau đốt sống thắt lưng.",
        "Xét nghiệm máu và nước tiểu:",
        "- <b>Hemoglobin giảm 8,2 g/dL (Thiếu máu đẳng sắc đẳng bào)</b>.",
        "- <b>Canxi huyết thanh toàn phần tăng cao 11,6 mg/dL</b>.",
        "- <b>Creatinine huyết thanh tăng 2,4 mg/dL</b>, BUN 38 mg/dL.",
        "- <b>Protein toàn phần huyết thanh tăng rất cao 9,8 g/dL với Albumin giảm 3,0 g/dL -> Khoảng chênh Globulin (Protein - Albumin) = 6,8 g/dL (> 4 g/dL)</b>.",
        "- Tổng phân tích nước tiểu bằng que nhúng: <b>Protein niệu ÂM TÍNH HOẶC CHỈ VẾT (Que nhúng chỉ nhạy với Albumin, không phát hiện được chuỗi nhẹ Bence Jones)</b> trong khi định lượng Protein niệu 24h thực tế lên tới 4,2 g/24h.",
        "Chụp X-quang sọ não và cột sống: <b>Nhiều ổ tổn thương tiêu xương hình đục lỗ bờ sắc nét không có viền xơ hóa (Punched-out lytic bone lesions)</b>."
      ],
      vitals: [
        ["Nhiệt độ", "36,8 °C"],
        ["Huyết áp", "130/80"],
        ["Mạch", "76 l/ph"],
        ["Nhịp thở", "16 l/ph"]
      ],
      stem: "Bộ tiêu chuẩn chẩn đoán tổn thương cơ quan đích CRAB và xét nghiệm điện di xác định bệnh là gì?",
      choices: [
        "Đa u tủy xương (Multiple Myeloma) thỏa mãn tứ chứng CRAB: Canxi tăng (C), Suy thận Renal (R), Thiếu máu Anemia (A), Tổn thương tiêu xương Bone lesions (B); chẩn đoán bằng Điện di Protein huyết thanh/nước tiểu (SPEP/UPEP phát hiện M-spike đơn dòng) kết hợp Sinh thiết tủy xương (Tương bào ác tính ≥ 10%)",
        "Ung thư biểu mô tuyến tiền liệt di căn xương đặc xương",
        "Viêm khớp dạng thấp huyết thanh âm tính",
        "Loãng xương người già đơn thuần",
        "Bệnh thận đái tháo đường giai đoạn cuối"
      ],
      answer: 0,
      why: [
        "Bệnh cảnh kinh điển của <b>Đa u tủy xương (Multiple Myeloma - MM)</b> do <b>tăng sinh đơn dòng ác tính của các tương bào (Plasma cells) trong tủy xương</b> tiết ra lượng khổng lồ Kháng thể đơn dòng (M-protein, thường là IgG hoặc IgA) và các chuỗi nhẹ tự do (Kappa / Lambda).",
        "Bộ tiêu chuẩn tổn thương cơ quan đích kinh điển <b>CRAB</b>:",
        "1. <b>C - Hypercalcemia (Tăng canxi máu > 11 mg/dL)</b> do tương bào tiết yếu tố kích hoạt hủy cốt bào RANKL và MIP-1alpha.",
        "2. <b>R - Renal insufficiency (Suy thận, Creatinine > 2 mg/dL)</b> do <b>Bệnh thận chuỗi nhẹ (Myeloma Cast Nephropathy)</b>: Chuỗi nhẹ Bence Jones vượt quá khả năng tái hấp thu của ống lượn gần, đổ xuống ống lượn xa kết tủa với Protein Tamm-Horsfall tạo thành các trụ bít tắc lòng ống thận.",
        "- Điểm bẫy kinh điển: <b>Que nhúng nước tiểu âm tính với protein</b> (vì que chỉ bắt Albumin) trong khi protein niệu 24h thực tế rất cao.",
        "3. <b>A - Anemia (Thiếu máu đẳng bào Hb < 10 g/dL)</b> do tương bào ác tính chiếm chỗ tủy xương.",
        "4. <b>B - Bone lesions (Tổn thương tiêu xương đục lỗ Punched-out / Gãy xương bệnh lý)</b>.",
        "Tiêu chuẩn chẩn đoán xác định:",
        "- <b>Điện di Protein huyết thanh và nước tiểu (SPEP / UPEP)</b>: Thấy <b>Đỉnh tăng đơn dòng (M-spike)</b>.",
        "- <b>Sinh thiết / Hút tủy xương</b>: Thấy <b>Tương bào đơn dòng (Clonal plasma cells) chiếm ≥ 10%</b> tổng số tế bào có nhân trong tủy."
      ],
      wrongs: {
        1: "Ung thư tiền liệt tuyến gây di căn tạo xương ĐẶC XƯƠNG (Osteoblastic lesions) làm tăng PSA, không gây tổn thương tiêu xương đục lỗ và đỉnh M-spike.",
        2: "Viêm khớp dạng thấp gây bào mòn khớp nhỏ bàn tay, không gây tổn thương tiêu xương sọ não và suy thận chuỗi nhẹ.",
        3: "Loãng xương đơn thuần có xét nghiệm máu và điện di protein hoàn toàn bình thường.",
        4: "Bệnh thận đái tháo đường có protein niệu chủ yếu là Albumin bắt màu mạnh trên que nhúng."
      },
      objective:
        "Đa u tủy xương (Multiple Myeloma) thỏa mãn tiêu chuẩn CRAB (Canxi tăng, Suy thận chuỗi nhẹ que nhúng âm tính, Thiếu máu, Tổn thương tiêu xương đục lỗ); chẩn đoán bằng Điện di Protein (M-spike) và Sinh thiết tủy xương (Tương bào ≥ 10%)."
    },

    {
      spec: "Huyết học",
      task: "Bước chẩn đoán và điều trị đích",
      short: "Lơ-xê-mi tủy mạn tính (CML) và nhiễm sắc thể Philadelphia",
      vignette: [
        "Nam 50 tuổi đến khám vì mệt mỏi, sụt 5 kg, ăn nhanh no và cảm giác tức nặng vùng hạ sườn trái 3 tháng nay.",
        "Khám: Da niêm mạc nhợt nhẹ, <b>Lách to khổng lồ (Massive splenomegaly) độ IV chạm mào chậu trái</b>. Không sốt, không có hạch to ngoại vi.",
        "Tổng phân tích tế bào máu ngoại vi: <b>Số lượng bạch cầu TĂNG RẤT CAO 145.000/mcL</b> với sự hiện diện của <b>đầy đủ mọi giai đoạn phát triển của dòng bạch cầu hạt</b> từ tủy bào, hậu tủy bào, bạch cầu đũa đến bạch cầu đoạn trung tính, kèm tăng bạch cầu ái kiềm (Basophilia) và ái toan. Hemoglobin 10,2 g/dL, Tiểu cầu tăng 580.000/mcL.",
        "Xét nghiệm men Phosphatase kiềm của bạch cầu (<b>Leukocyte Alkaline Phosphatase - LAP score</b>): <b>Giảm rất thấp (LAP score < 20)</b> (phân biệt với phản ứng giả lơ-xê-mi Leukemoid reaction có LAP tăng cao)."
      ],
      vitals: [
        ["Nhiệt độ", "37,0 °C"],
        ["Huyết áp", "125/75"],
        ["Mạch", "80 l/ph"],
        ["Nhịp thở", "16 l/ph"]
      ],
      stem: "Bất thường di truyền tế bào phân tử đặc trưng và thuốc điều trị nhắm trúng đích đầu tay là gì?",
      choices: [
        "Nhiễm sắc thể Philadelphia chuyển đoạn t(9;22)(q34;q11) tạo gen dung hợp BCR-ABL1 có hoạt tính Tyrosine Kinase cấu trúc tăng liên tục; điều trị trúng đích đầu tay bằng Thuốc ức chế Tyrosine Kinase (Imatinib / Dasatinib)",
        "Chuyển đoạn t(15;17); điều trị bằng All-Trans Retinoic Acid (ATRA)",
        "Chuyển đoạn t(8;14); điều trị bằng Rituximab",
        "Đột biến gen JAK2 V617F; điều trị bằng Ruxolitinib",
        "Chuyển đoạn t(11;14); điều trị bằng Bortezomib"
      ],
      answer: 0,
      why: [
        "Bệnh cảnh kinh điển của <b>Lơ-xê-mi tủy mạn tính (Chronic Myeloid Leukemia - CML)</b> - một bệnh tăng sinh tủy ác tính dòng bạch cầu hạt:",
        "- Lâm sàng: Lách to khổng lồ, ăn nhanh no do lách chèn ép dạ dày, sụt cân.",
        "- Huyết đồ: <b>Bạch cầu tăng rất cao (> 100.000/mcL) với phổ tế bào đầy đủ mọi lứa tuổi dòng tủy (từ blast < 5% đến tế bào trưởng thành) kèm Tăng bạch cầu ái kiềm (Basophilia)</b>.",
        "- Phân biệt với <b>Phản ứng giả Lơ-xê-mi (Leukemoid Reaction do nhiễm trùng nặng)</b>: CML có <b>Chỉ số LAP (Leukocyte Alkaline Phosphatase) GIẢM RẤT THẤP</b> và có tăng bạch cầu ái kiềm (trong khi Leukemoid reaction có LAP TĂNG CAO và không có tăng ái kiềm).",
        "- Di truyền tế bào học kinh điển: <b>Nhiễm sắc thể Philadelphia (Ph chromosome) do chuyển đoạn tương hỗ t(9;22)(q34;q11)</b> nối gen <i>BCR</i> trên NST 22 với gen <i>ABL1</i> trên NST 9, tạo ra <b>protein dung hợp BCR-ABL1 có hoạt tính Tyrosine Kinase liên tục kích thích phân chia tế bào</b>.",
        "- Điều trị trúng đích cách mạng: <b>Thuốc ức chế Tyrosine Kinase đường uống thế hệ 1/2 (TKIs: Imatinib, Dasatinib, Nilotinib)</b> giúp kiểm soát bệnh lâu dài và đưa tỉ lệ sống sau 10 năm lên > 85–90%."
      ],
      wrongs: {
        1: "Chuyển đoạn t(15;17) đặc trưng cho Lơ-xê-mi tiền tủy bào cấp APL (AML M3) điều trị bằng ATRA.",
        2: "Chuyển đoạn t(8;14) tạo c-MYC gặp trong U lympho Burkitt.",
        3: "Đột biến JAK2 V617F gặp trong Đa hồng cầu nguyên phát (PV) và Tăng tiểu cầu tiên phát (ET).",
        4: "Chuyển đoạn t(11;14) gặp trong U lympho tế bào áo nang (Mantle cell lymphoma) hoặc Đa u tủy xương."
      },
      objective:
        "CML (lách to khổng lồ, bạch cầu tăng rất cao đủ mọi lứa tuổi, tăng basophil, chỉ số LAP giảm thấp) do chuyển đoạn t(9;22) tạo gen dung hợp BCR-ABL1; điều trị đích đầu tay bằng Imatinib (TKI)."
    },

    {
      spec: "Huyết học",
      task: "Bước chẩn đoán và điều trị cấp cứu",
      short: "Lơ-xê-mi tiền tủy bào cấp tính (APL / AML M3)",
      vignette: [
        "Nữ 28 tuổi khỏe mạnh nhập viện vì sốt, mệt lả và xuất huyết ồ ạt: <b>chảy máu chân răng liên tục, chảy máu mũi khó cầm và nhiều mảng xuất huyết lớn tự nhiên ở đùi và thân mình</b>.",
        "Xét nghiệm máu khẩn cấp: Hemoglobin 7,2 g/dL, Bạch cầu 8.500/mcL, Tiểu cầu giảm nặng 18.000/mcL. Tiêu bản tủy xương và máu ngoại vi: <b>Nhiều tế bào tiền tủy bào non bất thường chứa vô số thể que Auer rod xếp thành từng bó giống bó củi (Faggot cells)</b>.",
        "Xét nghiệm đông máu: <b>PT kéo dài 18 giây, aPTT kéo dài 48 giây, Fibrinogen giảm rất thấp 80 mg/dL, D-dimer tăng vọt > 20.000 ng/mL (Đông máu nội mạch rải rác - DIC cấp tính)</b>.",
        "Xét nghiệm di truyền học: Khẳng định <b>chuyển đoạn t(15;17)(q22;q12) tạo gen dung hợp PML-RARA</b>."
      ],
      vitals: [
        ["Nhiệt độ", "38,4 °C"],
        ["Huyết áp", "105/65"],
        ["Mạch", "110 l/ph"],
        ["Nhịp thở", "20 l/ph"]
      ],
      stem: "Thuốc điều trị biệt hóa tế bào trúng đích cấp cứu cần bắt đầu NGAY LẬP TỨC để ngăn ngừa xuất huyết não tử vong do DIC là gì?",
      choices: [
        "Bắt đầu ngay lập tức All-Trans Retinoic Acid (ATRA / Tretinoin) phối hợp Arsenic Trioxide (ATO) ngay khi nghi ngờ trên hình ảnh tế bào học trước khi có kết quả xét nghiệm gen",
        "Tiến hành ghép tủy tủy xương dị sinh cấp cứu ngay trong ngày đầu",
        "Chỉ truyền tiểu cầu đơn thuần và chờ kết quả giải trình tự gen sau 1 tuần",
        "Dùng thuốc chống đông Heparin liều cao đơn độc",
        "Dùng thuốc ức chế Tyrosine Kinase Imatinib"
      ],
      answer: 0,
      why: [
        "Bệnh nhân bị <b>Lơ-xê-mi tiền tủy bào cấp tính (Acute Promyelocytic Leukemia - APL / AML phân loại FAB M3)</b>:",
        "- Di truyền phân tử: <b>Chuyển đoạn t(15;17)(q22;q12) tạo gen dung hợp PML-RARA</b> (Receptor Acid Retinoic Alpha) làm chặn đứng quá trình biệt hóa của tế bào tủy ở giai đoạn tiền tủy bào (Promyelocyte).",
        "- Hình thái tế bào học kinh điển: <b>Tế bào chứa vô số que thể Auer xếp thành bó củi (Faggot cells)</b> chứa nhiều enzym hạt sơ cấp.",
        "- Cấp cứu tối khẩn cấp: Các hạt tiền tủy bào giải phóng ồ ạt Thromboplastin mô vào tuần hoàn gây <b>ĐÔNG MÁU NỘI MẠCH RẢI RÁC (DIC) CẤP TÍNH RẤT NẶNG</b> (nguy cơ xuất huyết não và xuất huyết phổi tử vong sớm > 10–20%).",
        "- Xử trí cấp cứu: <b>BẮT ĐẦU NGAY LẬP TỨC ALL-TRANS RETINOIC ACID (ATRA / Tretinoin) ĐƯỜNG UỐNG PHỐI HỢP ARSENIC TRIOXIDE (ATO) NGAY KHI CÓ HÌNH ẢNH TẾ BÀO NGHI NGỜ</b> (không được chờ kết quả PCR/FISH). ATRA kích hoạt thụ thể RARA thúc đẩy các tế bào non biệt hóa thành bạch cầu trưởng thành vô hại và làm ngừng giải phóng hạt gây DIC trong vòng 24–48h, biến APL từ thể lơ-xê-mi tử vong nhanh nhất thành thể có tỉ lệ chữa khỏi cao nhất (>90%).",
        "- Theo dõi biến chứng: <b>Hội chứng biệt hóa APL (Differentiation Syndrome)</b> sốt, khó thở thâm nhiễm phổi, điều trị bằng Dexamethasone."
      ],
      wrongs: {
        1: "Ghép tủy không phải điều trị ban đầu cho APL và bệnh nhân đang có DIC nặng không thể ghép tủy.",
        2: "Chờ kết quả xét nghiệm gen 1 tuần mà không dùng ATRA thì bệnh nhân sẽ tử vong vì xuất huyết não do DIC.",
        3: "Heparin đơn độc không ngăn được phóng thích hạt tiền tủy bào và làm tăng nguy cơ xuất huyết tử vong.",
        4: "Imatinib dùng cho CML t(9;22), không có tác dụng trên APL t(15;17)."
      },
      objective:
        "APL (AML M3: que Auer dạng bó củi faggot cells, chuyển đoạn t(15;17) PML-RARA, biến chứng DIC cấp); cấp cứu sống còn bắt buộc khởi động ngay ATRA + Arsenic Trioxide (ATO) để biệt hóa tế bào và kiểm soát DIC."
    },

    {
      spec: "Huyết học",
      task: "Bước chẩn đoán và tế bào học",
      short: "Lơ-xê-mi kinh dòng lympho (CLL) và tế bào bóng vỡ",
      vignette: [
        "Cụ ông 72 tuổi đi khám sức khỏe định kỳ, hoàn toàn không có triệu chứng khó thở, không sốt, không sụt cân.",
        "Khám: Sờ thấy <b>nhiều hạch cổ, hạch nách và hạch bẹn hai bên to 1,5–2 cm, mật độ chắc dẻo, không đau, di động</b>. Gan lách không to.",
        "Xét nghiệm máu: <b>Số lượng bạch cầu tăng cao 48.000/mcL với 85% là Lympho bào trưởng thành (Số lượng lympho tuyệt đối > 40.000/mcL)</b>. Hemoglobin 13,8 g/dL, Tiểu cầu 210.000/mcL (CLL giai đoạn Rai I / Binet A).",
        "Tiêu bản máu ngoại vi: <b>Tăng sinh dày đặc các tế bào lympho nhỏ trưởng thành hình thái bình thường và NHIỀU TẾ BÀO BÓNG VỠ / MẢNH VỠ TẾ BÀO HÌNH VẾT NHÒA (Smudge cells / Gumprecht shadows / Basket cells)</b> do màng tế bào lympho CLL yếu ớt bị vỡ khi kéo lam kính.",
        "Đo tế bào dòng chảy (Flow cytometry): Quần thể tế bào lympho B đơn dòng biểu hiện đồng thời <b>CD19, CD20, CD23 và kháng nguyên bất thường CD5</b> (dấu ấn bình thường của tế bào T)."
      ],
      vitals: [
        ["Nhiệt độ", "36,8 °C"],
        ["Huyết áp", "125/75"],
        ["Mạch", "72 l/ph"],
        ["Nhịp thở", "16 l/ph"]
      ],
      stem: "Chiến lược xử trí chuẩn theo khuyến cáo quốc tế cho bệnh nhân CLL giai đoạn sớm không triệu chứng này là gì?",
      choices: [
        "Theo dõi lâm sàng định kỳ chặt chẽ mà chưa cần điều trị hóa chất (Chiến lược 'Theo dõi và Chờ đợi' - Watch and Wait)",
        "Bắt đầu hóa trị liệu liều cao phối hợp ngay lập tức",
        "Tiến hành phẫu thuật nạo vét toàn bộ hạch cổ và hạch nách",
        "Chỉ định xạ trị toàn thân",
        "Bắt đầu dùng kháng sinh phổ rộng kéo dài"
      ],
      answer: 0,
      why: [
        "Bệnh nhân có <b>Lơ-xê-mi kinh dòng lympho (Chronic Lymphocytic Leukemia - CLL)</b> - bệnh lơ-xê-mi phổ biến nhất ở người cao tuổi.",
        "Đặc điểm nhận diện kinh điển:",
        "- Tiêu bản máu ngoại vi: <b>Tế bào bóng vỡ (Smudge cells / Gumprecht shadows)</b>.",
        "- Đo dòng chảy tế bào (Flow cytometry): Tế bào lympho B biểu hiện <b>CD19, CD20, CD23 VÀ KHÁNG NGUYÊN BẤT THƯỜNG CD5</b>.",
        "Chiến lược điều trị chuẩn quốc tế (NCCN / ESMO):",
        "- <b>Giai đoạn sớm không triệu chứng (Rai giai đoạn 0–II, Binet A/B)</b>: <b>CHIẾN LƯỢC THEO DÕI VÀ CHỜ ĐỢI (WATCH AND WAIT)</b>. Các nghiên cứu chứng minh điều trị hóa chất sớm ở giai đoạn này không mang lại lợi ích sống còn mà chỉ làm tăng độc tính và biến chứng nhiễm trùng.",
        "- Chỉ định bắt đầu điều trị thuốc (như thuốc ức chế BTK Ibrutinib, Acalabrutinib hoặc thuốc ức chế BCL-2 Venetoclax) khi có: (1) <b>Triệu chứng B</b> (sốt, sụt cân, đổ mồ hôi đêm); (2) <b>Suy tủy tiến triển</b> (Thiếu máu Hb < 10 hoặc Giảm tiểu cầu < 100k - Rai III/IV); (3) Hạch hoặc lách to khổng lồ chèn ép; (4) Thời gian nhân đôi bạch cầu < 6 tháng.",
        "- Cảnh giác biến chứng: <b>Hội chứng chuyển dạng Richter (Richter Transformation)</b> chuyển thành U lympho tế bào B lớn lan tỏa (DLBCL) tiến triển tối cấp khi hạch to nhanh đột ngột kèm sốt sụt cân."
      ],
      wrongs: {
        1: "Hóa trị sớm trong CLL không triệu chứng không cải thiện sống còn và gây độc tủy không cần thiết.",
        2: "Phẫu thuật nạo hạch không có vai trò vì CLL là bệnh ác tính hệ thống toàn thân lan tỏa.",
        3: "Xạ trị toàn thân không phải điều trị chuẩn.",
        4: "Kháng sinh chỉ dùng khi có nhiễm trùng cấp tính."
      },
      objective:
        "CLL (người cao tuổi, lympho tăng cao, tế bào bóng vỡ smudge cells, đồng biểu hiện CD5 và CD20); giai đoạn sớm không triệu chứng chỉ định chiến lược 'Theo dõi và Chờ đợi' (Watch and Wait) mà chưa cần hóa trị."
    },

    {
      spec: "Khớp & Tự miễn",
      task: "Bước chẩn đoán và điều trị",
      short: "Lupus ban đỏ hệ thống (SLE) và Viêm thận Lupus",
      vignette: [
        "Nữ 26 tuổi đến khám vì sốt nhẹ kéo dài, mệt mỏi, đau nhức sưng đau các khớp cổ tay và khớp bàn ngón tay hai bên đối xứng không có biến dạng bào mòn xương.",
        "Khám: <b>Ban đỏ hình cánh bướm ở gò má và sống mũi không qua rãnh mũi má (Malar rash / Butterfly rash)</b>, ban nhạy cảm ánh sáng ở vùng cổ ngực và có loét không đau ở vòm miệng.",
        "Xét nghiệm máu và miễn dịch:",
        "- <b>Kháng thể kháng nhân (ANA) dương tính mạnh hiệu giá 1:640</b> (Độ nhạy > 98%).",
        "- <b>Kháng thể kháng DNA chuỗi kép (Anti-dsDNA) dương tính rất cao</b> và Kháng thể Anti-Smith (Anti-Sm) dương tính (Độ đặc hiệu > 95%).",
        "- <b>Nồng độ Bổ thể C3 và C4 huyết thanh giảm rất sâu (Hypocomplementemia)</b> chỉ điểm bệnh đang hoạt động.",
        "- Xét nghiệm nước tiểu: <b>Protein niệu 2,4 g/24h, cặn nước tiểu có trụ hồng cầu và hồng cầu biến dạng</b> (Viêm thận Lupus hoạt động)."
      ],
      vitals: [
        ["Nhiệt độ", "37,6 °C"],
        ["Huyết áp", "135/85"],
        ["Mạch", "84 l/ph"],
        ["Nhịp thở", "16 l/ph"]
      ],
      stem: "Thuốc điều trị nền tảng bắt buộc cho mọi bệnh nhân SLE và phác đồ điều trị tấn công cho Viêm thận Lupus tăng sinh (Class III/IV) là gì?",
      choices: [
        "Hydroxychloroquine là thuốc nền tảng bắt buộc cho mọi bệnh nhân SLE; điều trị tấn công Viêm thận Lupus tăng sinh bằng Corticoid liều cao phối hợp Mycophenolate Mofetil (MMF) HOẶC Cyclophosphamide",
        "Chỉ dùng thuốc giảm đau Paracetamol đơn độc",
        "Kháng sinh Penicillin điều trị phòng ngừa thấp tim",
        "Thuốc chống đông Warfarin đơn độc",
        "Thuốc ức chế TNF-alpha (Infliximab) liều cao"
      ],
      answer: 0,
      why: [
        "Bệnh nhân thỏa mãn đầy đủ tiêu chuẩn EULAR/ACR chẩn đoán <b>Lupus ban đỏ hệ thống (Systemic Lupus Erythematosus - SLE)</b> có tổn thương đa cơ quan (Da niêm mạc, Khớp, Máu, Thận).",
        "Dấu ấn miễn dịch kinh điển:",
        "- <b>ANA</b>: Sàng lọc có độ nhạy cao nhất (>98%).",
        "- <b>Anti-dsDNA và Anti-Smith</b>: Độ đặc hiệu cao nhất (>95%). Nồng độ Anti-dsDNA tăng cao đi kèm <b>Giảm bổ thể C3/C4</b> phản ánh trực tiếp <b>mức độ hoạt động của bệnh và nguy cơ đợt bùng phát Viêm thận Lupus</b>.",
        "Chiến lược điều trị chuẩn theo guideline ACR/KDIGO:",
        "1. <b>HYDROXYCHLOROQUINE (HCQ) LÀ THUỐC NỀN TẢNG BẮT BUỘC CHO MỌI BỆNH NHÂN SLE</b> (giúp giảm đợt bùng phát, giảm tổn thương cơ quan và cải thiện sống còn lâu dài; cần khám mắt định kỳ tầm soát độc tính võng mạc).",
        "2. <b>Điều trị tấn công Viêm thận Lupus tăng sinh (Lupus Nephritis Class III/IV)</b>: <b>Corticoid tĩnh mạch liều cao (Methylprednisolone pulse) phối hợp Mycophenolate Mofetil (MMF) HOẶC Cyclophosphamide tĩnh mạch</b>, sau đó duy trì bằng MMF hoặc Azathioprine.",
        "Lưu ý: <b>Thuốc ức chế TNF-alpha (Infliximab, Etanercept) CÓ THỂ GÂY LUPUS DO THUỐC (Drug-induced lupus)</b> và không dùng điều trị SLE."
      ],
      wrongs: {
        1: "Paracetamol không có tác dụng ức chế phản ứng viêm tự miễn phức hợp kháng nguyên-kháng thể phá hủy cầu thận.",
        2: "SLE không phải thấp tim sau liên cầu; Penicillin hoàn toàn vô tác dụng.",
        3: "Warfarin chỉ dùng khi có biến chứng huyết khối do hội chứng kháng Phospholipid phối hợp.",
        4: "Kháng TNF-alpha có thể làm khởi phát đợt bùng phát lupus do thuốc, không phải điều trị chuẩn cho viêm thận lupus."
      },
      objective:
        "SLE và Viêm thận Lupus (Anti-dsDNA tăng, C3/C4 giảm, protein niệu và trụ hồng cầu) điều trị nền tảng bằng Hydroxychloroquine bắt buộc cho mọi ca; tấn công viêm thận lupus bằng Corticoid + Mycophenolate Mofetil (MMF) hoặc Cyclophosphamide."
    },

    {
      spec: "Khớp & Tự miễn",
      task: "Bước chẩn đoán và điều trị DMARD",
      short: "Viêm khớp dạng thấp (Rheumatoid Arthritis) và điều trị DMARD sớm",
      vignette: [
        "Nữ 42 tuổi đến khám vì đau nhức và sưng nóng ở <b>các khớp cổ tay, khớp bàn ngón tay (MCP 2, 3) và khớp liên ngón gần (PIP 2, 3) cả hai bàn tay đối xứng</b> kéo dài 3 tháng nay.",
        "Bệnh nhân than phiền có <b>cứng khớp buổi sáng kéo dài hơn 90 phút sau khi thức dậy</b>, phải ngâm tay nước ấm xoa bóp mới cử động linh hoạt được.",
        "Khám: Khớp cổ tay và MCP 2, 3 hai bên sưng nề hình thoi, ấn đau, nghiệm pháp bóp khớp bàn tay (Squeeze test) dương tính. Khớp liên ngón xa (DIP) hoàn toàn bình thường.",
        "Xét nghiệm: Tốc độ lắng máu ESR tăng 68 mm/h, CRP 38 mg/L. Yếu tố dạng thấp (RF) dương tính và <b>Kháng thể kháng Peptid Citrullin hóa vòng (Anti-CCP / ACPA) DƯƠNG TÍNH MẠNH > 200 U/mL (Độ đặc hiệu > 95–98%)</b>.",
        "X-quang bàn tay: Loãng xương quanh khớp và hẹp khe khớp nhẹ."
      ],
      vitals: [
        ["Nhiệt độ", "37,0 °C"],
        ["Huyết áp", "120/75"],
        ["Mạch", "76 l/ph"],
        ["Nhịp thở", "16 l/ph"]
      ],
      stem: "Thuốc chống thấp khớp làm thay đổi bệnh kinh điển (csDMARD) đầu tay số một cần bắt đầu càng sớm càng tốt là gì?",
      choices: [
        "Methotrexate đường uống kết hợp bổ sung Acid Folic hàng ngày (ngoại trừ ngày uống Methotrexate)",
        "Uống thuốc giảm đau NSAID (Celecoxib) đơn độc kéo dài",
        "Tiêm Corticoid liều cao kéo dài suốt đời đơn thuần",
        "Chỉ định phẫu thuật thay khớp bàn tay ngay lập tức",
        "Thuốc kháng sinh Doxycycline kéo dài 6 tháng"
      ],
      answer: 0,
      why: [
        "Bệnh nhân có <b>Viêm khớp dạng thấp (Rheumatoid Arthritis - RA)</b> điển hình thỏa mãn tiêu chuẩn ACR/EULAR 2010:",
        "- Lâm sàng: <b>Viêm màng hoạt dịch đa khớp nhỏ đối xứng hai bên (MCP, PIP, cổ tay), cứng khớp buổi sáng > 1 giờ</b> (khác với Thoái hóa khớp cứng khớp < 30 phút và tổn thương khớp liên ngón xa DIP tạo hạt Heberden).",
        "- Dấu ấn miễn dịch: <b>Anti-CCP (ACPA) có độ đặc hiệu cực cao (>95–98%)</b> và có giá trị tiên lượng tổn thương bào mòn khớp tiến triển nặng.",
        "- Nguyên tắc điều trị 'Điều trị nhắm trúng đích' (Treat-to-Target): <b>BẮT ĐẦU CÀNG SỚM CÀNG TỐT THUỐC DMARD ĐỂ NGĂN NGỪA BÀO MÒN VÀ BIẾN DẠNG KHỚP VĨNH VIỄN</b> (như biến dạng ngón tay cổ thiên nga Swan-neck, ngón tay lỗ khuy Boutonniere, lệch trục về phía xương trụ).",
        "- <b>METHOTREXATE (MTX) LÀ csDMARD LỰA CHỌN HÀNG ĐẦU SỐ MỘT</b> (ức chế enzym Dihydrofolate Reductase). Bắt buộc <b>bổ sung Acid Folic (1–5 mg/ngày)</b> để giảm tác dụng phụ loét miệng, rụng tóc, rối loạn tiêu hóa và độc gan mà không làm giảm hiệu quả chống viêm của MTX.",
        "- NSAIDs và Corticoid liều thấp chỉ dùng làm <b>thuốc bắc cầu (Bridging therapy)</b> giảm đau trong vài tuần đầu chờ Methotrexate phát huy tác dụng (sau 6–12 tuần)."
      ],
      wrongs: {
        1: "NSAIDs chỉ giảm triệu chứng đau tạm thời nhưng hoàn toàn KHÔNG NGĂN ĐƯỢC quá trình bào mòn phá hủy khớp của RA.",
        2: "Corticoid đơn độc kéo dài gây loãng xương, đái tháo đường, suy thượng thận và không thay thế được DMARD.",
        3: "Phẫu thuật chỉ đặt ra khi khớp đã bị dính/phá hủy hoàn toàn ở giai đoạn muộn.",
        4: "Kháng sinh không có tác dụng với bệnh viêm khớp tự miễn RA."
      },
      objective:
        "Viêm khớp dạng thấp (khớp nhỏ đối xứng MCP/PIP, cứng khớp sáng >1h, Anti-CCP dương tính đặc hiệu); điều trị DMARD đầu tay chuẩn là Methotrexate bắt đầu sớm kết hợp bổ sung Acid Folic để ngăn ngừa bào mòn khớp."
    },

    {
      spec: "Khớp & Tự miễn",
      task: "Bước chẩn đoán và điều trị",
      short: "Cơn Gout cấp ở bệnh nhân suy thận mạn",
      vignette: [
        "Nam 62 tuổi có tiền sử Bệnh thận mạn giai đoạn 3b (eGFR 35 mL/ph), thức giấc lúc nửa đêm vì <b>đau dữ dội chói lọi ở khớp bàn ngón chân cái bên phải (Khớp MTP 1 - Podagra)</b> sau bữa tiệc uống nhiều bia và ăn hải sản tối qua.",
        "Khám: Khớp bàn ngón chân cái bên phải sưng to, nóng đỏ rực, căng bóng và nhạy cảm đau dữ dội đến mức chạm nhẹ vào mép chăn cũng không chịu nổi.",
        "Chọc hút dịch khớp làm xét nghiệm: Bạch cầu dịch khớp 35.000/mm³ (ưu thế 88% bạch cầu đa nhân trung tính), cấy vi khuẩn âm tính. <b>Soi dưới kính hiển vi phân cực phát hiện: Nhiều tinh thể hình kim sắc nhọn nằm trong và ngoài bào tương tế bào, PHÂN CỰC ÂM MẠNH (Strongly negatively birefringent) PHÁT RA MÀU VÀNG KHI NẰM SONG SONG VỚI TRỤC CỦA KÍNH BÙ (Yellow when parallel)</b>."
      ],
      vitals: [
        ["Nhiệt độ", "37,6 °C"],
        ["Huyết áp", "135/85"],
        ["Mạch", "84 l/ph"],
        ["Nhịp thở", "16 l/ph"]
      ],
      stem: "Thuốc cắt cơn viêm khớp Gout cấp tính an toàn và thích hợp nhất cho bệnh nhân có suy thận mạn này là gì?",
      choices: [
        "Corticoid (Tiêm Corticoid nội khớp hoặc uống Prednisone toàn thân ngắn ngày)",
        "Thuốc chống viêm không steroid NSAID (Indomethacin liều cao)",
        "Colchicine liều cao đường uống liên tục",
        "Bắt đầu ngay thuốc hạ acid uric Allopurinol liều tối đa",
        "Uống dung dịch Natri Bicarbonate kiềm hóa nước tiểu đơn độc"
      ],
      answer: 0,
      why: [
        "Bệnh nhân có <b>Cơn Gout cấp tính (Acute Gouty Arthritis)</b> tại vị trí kinh điển <b>Khớp ngón chân cái (Podagra)</b>.",
        "Tiêu chuẩn vàng chẩn đoán: <b>Dịch khớp thấy tinh thể Monosodium Urate (MSU) hình kim, phân cực âm mạnh (Màu VÀNG khi song song với trục ánh sáng phân cực / Màu XANH khi vuông góc)</b>.",
        "Lựa chọn thuốc cắt cơn Gout cấp ở bệnh nhân có <b>Suy giảm chức năng thận (CKD, eGFR < 60 mL/ph)</b>:",
        "1. <b>CORTICOID (PREDNISONE UỐNG HOẶC TIÊM CORTICOID NỘI KHỚP) LÀ LỰA CHỌN AN TOÀN VÀ HIỆU QUẢ HÀNG ĐẦU</b> vì không gây độc thận.",
        "2. <b>NSAIDs (Indomethacin, Naproxen) BỊ CHỐNG CHỈ ĐỊNH</b> vì làm giảm tưới máu thận qua ức chế Prostaglandin gây suy thận cấp tiến triển nặng.",
        "3. <b>Colchicine bị chống chỉ định hoặc phải giảm liều rất thấp</b> vì đào thải qua thận, suy thận làm tích lũy thuốc gây độc thần kinh cơ và ức chế tủy xương nghiêm trọng.",
        "4. <b>NGUYÊN TẮC VÀNG: KHÔNG ĐƯỢC BẮT ĐẦU HOẶC THAY ĐỔI LIỀU THUỐC HẠ ACID URIC (ALLOPURINOL, FEBUXOSTAT) TRONG CƠN GOUT CẤP</b> vì sự thay đổi đột ngột nồng độ acid uric máu sẽ làm tan các hạt tophi, giải phóng thêm tinh thể vào dịch khớp làm cơn gút cấp bùng phát kéo dài và dữ dội hơn."
      ],
      wrongs: {
        1: "NSAIDs chống chỉ định tuyệt đối ở bệnh nhân có suy thận mạn vì gây suy thận cấp hoại tử ống thận/thiếu máu.",
        2: "Colchicine liều cao ở bệnh nhân suy thận gây tích lũy ngộ độc thần kinh cơ teo cơ tử vong.",
        3: "Khởi trị Allopurinol trong cơn cấp làm biến động acid uric máu khiến cơn đau khớp nặng hơn; chỉ bắt đầu Allopurinol sau khi cơn cấp đã lui hoàn toàn 2–4 tuần.",
        4: "Kiềm hóa nước tiểu không có tác dụng cắt cơn đau gút cấp tính."
      },
      objective:
        "Cơn Gout cấp (tinh thể Urate hình kim phân cực âm màu vàng khi song song) ở bệnh nhân suy thận điều trị an toàn nhất bằng Corticoid (tránh NSAID và Colchicine); không bắt đầu hạ acid uric bằng Allopurinol trong cơn cấp."
    },

    {
      spec: "Khớp & Tự miễn",
      task: "Bước chẩn đoán và phân biệt tinh thể",
      short: "Bệnh giả Gút (Pseudogout / CPPD) và tinh thể hình thoi",
      vignette: [
        "Cụ bà 74 tuổi sau phẫu thuật thay khớp háng 3 ngày, xuất hiện <b>sưng to, nóng đỏ và đau dữ dội ở khớp gối bên phải</b> không thể gập chân được.",
        "X-quang khớp gối phải: <b>Hiện tượng lắng đọng canxi tạo đường cản quang viền theo sụn chêm và sụn khớp (Vôi hóa sụn khớp - Chondrocalcinosis)</b>.",
        "Chọc hút dịch khớp gối: Dịch màu vàng đục, bạch cầu 28.000/mm³ (80% Neutrophil), cấy vi khuẩn âm tính. Soi dịch khớp dưới kính hiển vi phân cực: <b>Nhiều tinh thể hình thoi / hình hộp chữ nhật (Rhomboid-shaped crystals), PHÂN CỰC DƯƠNG YẾU (Weakly positively birefringent) PHÁT RA MÀU XANH KHI NẰM SONG SONG VỚI TRỤC KÍNH BÙ (Blue when parallel)</b>."
      ],
      vitals: [
        ["Nhiệt độ", "37,6 °C"],
        ["Huyết áp", "130/80"],
        ["Mạch", "80 l/ph"],
        ["Nhịp thở", "16 l/ph"]
      ],
      stem: "Bản chất hóa học của tinh thể lắng đọng trong bệnh Giả Gút (CPPD) này là gì?",
      choices: [
        "Tinh thể Canxi Pyrophosphate Dihydrate (CPPD)",
        "Tinh thể Monosodium Urate (MSU)",
        "Tinh thể Canxi Oxalate",
        "Tinh thể Canxi Hydroxyapatite",
        "Tinh thể Cholesterol"
      ],
      answer: 0,
      why: [
        "Bệnh cảnh kinh điển của <b>Viêm khớp do lắng đọng tinh thể Canxi Pyrophosphate (CPPD / Bệnh Giả Gút - Pseudogout)</b>:",
        "- Dịch tễ: Người cao tuổi (>65–70 tuổi), thường khởi phát sau phẫu thuật, chấn thương hoặc bệnh nội khoa cấp tính (Cường cận giáp, Ứ sắt Hemochromatosis, Hạ magnesi máu).",
        "- Vị trí tổn thương phổ biến nhất: <b>Khớp gối (chiếm > 50%)</b> > Khớp cổ tay > Khớp vai.",
        "- X-quang đặc trưng: <b>Vôi hóa sụn khớp (Chondrocalcinosis)</b> tạo đường viền tăng đậm độ cản quang ở sụn chêm và sụn khớp trong.",
        "- Phân biệt kinh điển với <b>Bệnh Gút (Gout)</b>:",
        "- <b>CPPD (Giả Gút)</b>: <b>Tinh thể CANXI PYROPHOSPHATE hình thoi / hình hộp, PHÂN CỰC DƯƠNG (Màu XANH khi song song / Màu VÀNG khi vuông góc)</b>.",
        "- <b>Gout</b>: <b>Tinh thể MONOSODIUM URATE hình kim, PHÂN CỰC ÂM (Màu VÀNG khi song song / Màu XANH khi vuông góc)</b>.",
        "- Điều trị đợt cấp: Tiêm Corticoid nội khớp, NSAID hoặc Colchicine."
      ],
      wrongs: {
        1: "Monosodium Urate là tinh thể hình kim phân cực âm trong bệnh Gout thật.",
        2: "Canxi Oxalate gặp trong sỏi thận hoặc bệnh nhân chạy thận mạn tính lắng đọng tinh thể hình phong bì thư.",
        3: "Canxi Hydroxyapatite gây viêm quanh khớp vôi hóa (Basic calcium phosphate disease) không nhìn thấy được dưới kính phân cực thông thường.",
        4: "Tinh thể cholesterol có hình chữ nhật khuyết góc gặp trong tràn dịch khớp mạn tính."
      },
      objective:
        "Bệnh giả Gút (Pseudogout/CPPD ở khớp gối người già, vôi hóa sụn khớp chondrocalcinosis) đặc trưng bởi tinh thể Canxi Pyrophosphate hình thoi phân cực dương màu xanh khi song song (khác với Gout hình kim phân cực âm màu vàng)."
    },

    {
      spec: "Khớp & Tự miễn",
      task: "Bước chẩn đoán và điều trị",
      short: "Viêm cột sống dính khớp (Ankylosing Spondylitis)",
      vignette: [
        "Nam 24 tuổi đến khám vì <b>đau âm ỉ vùng thắt lưng và hai mông kéo dài hơn 6 tháng nay, đau tăng nhiều vào nửa đêm về sáng làm thức giấc</b>, kèm cảm giác cứng đờ cột sống thắt lưng buổi sáng kéo dài > 45 phút, <b>triệu chứng đau và cứng lưng GIẢM RÕ RỆT KHI VẬN ĐỘNG THỂ DỤC và đau tăng khi nghỉ ngơi</b> (Đau thắt lưng kiểu viêm - Inflammatory back pain).",
        "Khám: Độ giãn cột sống thắt lưng giảm rõ rệt (Nghiệm pháp Schober < 15 cm), độ giãn lồng ngực giảm < 2,5 cm, ấn đau hai khớp cùng chậu. Bệnh nhân có tiền sử một đợt <b>Viêm màng bồ đào trước cấp tính (Acute anterior uveitis)</b> ở mắt phải đỏ đau nhìn mờ.",
        "X-quang khung chậu: <b>Viêm xơ hóa và hẹp dính khớp cùng chậu hai bên đối xứng (Bilateral Sacroiliitis độ 3)</b>. Xét nghiệm: <b>Kháng nguyên HLA-B27 dương tính</b>, ESR và CRP tăng cao."
      ],
      vitals: [
        ["Nhiệt độ", "36,8 °C"],
        ["Huyết áp", "120/75"],
        ["Mạch", "74 l/ph"],
        ["Nhịp thở", "16 l/ph"]
      ],
      stem: "Hình ảnh X-quang cột sống giai đoạn tiến xa và nhóm thuốc điều trị đầu tay hiệu quả nhất là gì?",
      choices: [
        "Cột sống hình cây tre (Bamboo spine) do cầu xương dính các đốt sống (Syndesmophytes); điều trị đầu tay bằng Thuốc chống viêm không steroid (NSAIDs liều đủ liên tục) kết hợp tập vật lý trị liệu, nếu thất bại dùng Thuốc ức chế TNF-alpha / IL-17",
        "Gãy lún đốt sống do loãng xương; điều trị bằng Alendronate",
        "Thoát vị đĩa đệm chèn ép rễ; phẫu thuật mổ mở lấy nhân đệm cấp cứu",
        "Viêm đĩa đệm đốt sống do vi khuẩn lao; điều trị bằng kháng lao",
        "Trượt đốt sống thắt lưng; điều trị bằng nẹp cố định cột sống bất động tuyệt đối"
      ],
      answer: 0,
      why: [
        "Bệnh nhân mắc <b>Viêm cột sống dính khớp (Ankylosing Spondylitis - AS)</b> - bệnh lý viêm khớp cột sống huyết thanh âm tính (Seronegative Spondyloarthropathy) điển hình:",
        "- Dịch tễ: Nam thanh niên trẻ tuổi (<30–40 tuổi), mang gen <b>HLA-B27 dương tính (>90%)</b>.",
        "- Đặc trưng lâm sàng: <b>Đau thắt lưng kiểu viêm (giảm khi vận động, tăng khi nghỉ, cứng khớp sáng > 30p)</b>, giảm độ giãn cột sống (Nghiệm pháp Schober dương tính) và tổn thương ngoài khớp phổ biến nhất là <b>Viêm màng bồ đào trước (Anterior Uveitis)</b>.",
        "- Chẩn đoán hình ảnh: <b>Viêm khớp cùng chậu hai bên (Bilateral Sacroiliitis)</b> trên X-quang/MRI là tiêu chuẩn bắt buộc; giai đoạn muộn hình thành các cầu xương (Syndesmophytes) dính liền các thân đốt sống tạo hình ảnh <b>'Cột sống hình cây tre' (Bamboo Spine)</b>.",
        "- Chiến lược điều trị theo guideline ACR/EULAR:",
        "1. <b>LỰA CHỌN ĐẦU TAY BẮT BUỘC</b>: <b>Thuốc chống viêm không steroid (NSAIDs liều tối đa liên tục, ví dụ Naproxen, Celecoxib)</b> kết hợp <b>Chương trình tập vật lý trị liệu phục hồi chức năng vận động cột sống</b>.",
        "2. Nếu không đáp ứng đầy đủ với ít nhất 2 loại NSAID: <b>Thuốc sinh học kháng TNF-alpha (Infliximab, Adalimumab, Etanercept) HOẶC kháng IL-17 (Secukinumab)</b> mang lại hiệu quả kiểm soát bệnh vượt trội.",
        "Lưu ý: <b>Thuốc DMARD kinh điển (Methotrexate, Sulfasalazine) KHÔNG CÓ HIỆU QUẢ trên tổn thương cột sống trục</b>."
      ],
      wrongs: {
        1: "Loãng xương gãy đốt sống gặp ở người già, đau kiểu cơ học tăng khi vận động, không có HLA-B27 và viêm khớp cùng chậu.",
        2: "Đau kiểu cơ học tăng khi đi lại cúi người và lan theo rễ thần kinh tọa, không cải thiện khi tập thể dục.",
        3: "Viêm đĩa đệm do lao (Pott) gây hủy đĩa đệm và áp xe lạnh psoas, thường 1 tầng.",
        4: "Bất động tuyệt đối chống chỉ định trong AS vì làm dính cứng cột sống nhanh hơn; bắt buộc phải tập vận động duy trì tầm vận động."
      },
      objective:
        "Viêm cột sống dính khớp (nam thanh niên, đau lưng kiểu viêm giảm khi vận động, HLA-B27, viêm khớp cùng chậu 2 bên, cột sống hình cây tre); điều trị đầu tay bằng NSAIDs liều đủ + tập vận động, dùng kháng TNF-alpha nếu thất bại."
    },

    {
      spec: "Khớp & Tự miễn",
      task: "Bước xử trí cấp cứu",
      short: "Cơn khủng hoảng thận do Xơ cứng bì (Scleroderma Renal Crisis)",
      vignette: [
        "Nữ 48 tuổi có tiền sử mắc <b>Xơ cứng bì hệ thống thể lan tỏa (Diffuse Systemic Sclerosis) mang kháng thể Anti-RNA Polymerase III</b>. Bệnh nhân đang được bác sĩ phòng khám tư kê đơn Prednisone 30 mg/ngày điều trị đau khớp trong 1 tháng qua.",
        "Bệnh nhân nhập viện vì đau đầu dữ dội, nhìn mờ, khó thở và phù mặt. <b>Huyết áp đo được tăng vọt 215/120 mm Hg (Tăng huyết áp ác tính mới xuất hiện)</b>.",
        "Xét nghiệm: <b>Creatinine huyết thanh tăng vọt từ 0,8 lên 3,2 mg/dL</b>. Xét nghiệm máu thấy có thiếu máu tán huyết vi mạch (Schistocytes) và giảm tiểu cầu nhẹ. Tổng phân tích nước tiểu có protein niệu và hồng cầu niệu vi thể."
      ],
      vitals: [
        ["Nhiệt độ", "36,8 °C"],
        ["Huyết áp", "215/120"],
        ["Mạch", "96 l/ph"],
        ["Nhịp thở", "22 l/ph"]
      ],
      stem: "Căn nguyên của biến chứng cấp tính này và thuốc ức chế hạ huyết áp duy nhất được chứng minh cứu sống tính mạng bệnh nhân là gì?",
      choices: [
        "Cơn khủng hoảng thận do Xơ cứng bì (Scleroderma Renal Crisis - SRC) bị kích hoạt bởi Corticoid liều cao; thuốc điều trị cấp cứu đầu tay số một là Thuốc ức chế men chuyển (ACE inhibitor: Captopril tác dụng ngắn)",
        "Tăng liều Corticoid Methylprednisolone truyền tĩnh mạch liều xung",
        "Dùng thuốc chẹn kênh canxi Nifedipine đơn độc",
        "Tiêm thuốc chẹn beta Labetalol đường tĩnh mạch đơn độc",
        "Chỉ định lọc máu cấp cứu ngay lập tức mà không dùng thuốc ức chế men chuyển"
      ],
      answer: 0,
      why: [
        "Bệnh nhân bị <b>Cơn khủng hoảng thận do Xơ cứng bì (Scleroderma Renal Crisis - SRC)</b> - biến chứng tối khẩn cấp xảy ra ở bệnh nhân Xơ cứng bì thể lan tỏa (đặc biệt ở người mang kháng thể <b>Anti-RNA Polymerase III</b>):",
        "- Yếu tố khởi kích nguy hiểm hàng đầu: <b>DÙNG CORTICOID LIỀU CAO (> 15 mg/ngày)</b>.",
        "- Cơ chế bệnh sinh: Tăng sinh nội mạc và co thắt mạch máu thận dữ dội dẫn đến thiếu máu cục bộ bộ máy cạnh cầu thận, kích hoạt <b>hệ thống Renin-Angiotensin-Aldosterone (RAAS) giải phóng lượng Renin khổng lồ</b> -> gây <b>Cơn tăng huyết áp kịch phát ác tính + Suy thận cấp tiến triển nhanh + Thiếu máu tán huyết vi mạch MAHA</b>.",
        "- <b>THUỐC ĐIỀU TRỊ CẤP CỨU SỐNG CÒN DUY NHẤT: THUỐC ỨC CHẾ MEN CHUYỂN (ACE INHIBITORS: ƯU TIÊN CAPTOPRIL ĐƯỜNG UỐNG TÁC DỤNG NGẮN CHỈNH LIỀU NHANH)</b>:",
        "- Captopril ức chế trực tiếp sự tạo thành Angiotensin II, giải phóng co thắt tiểu động mạch đến của thận, hạ huyết áp và phục hồi tưới máu thận.",
        "- Kể cả khi Creatinine huyết thanh tăng nhẹ sau khi dùng ACEi, <b>VẪN BẮT BUỘC TIẾP TỤC DUY TRÌ ACE INHIBITOR</b> vì đây là thuốc duy nhất cứu sống quả thận và tính mạng bệnh nhân.",
        "- <b>CHỐNG CHỈ ĐỊNH TĂNG LIỀU CORTICOID</b> vì corticoid chính là nguyên nhân gây co mạch thận bùng phát cơn SRC."
      ],
      wrongs: {
        1: "Tăng liều Corticoid là sai lầm chết người vì Corticoid chính là yếu tố kích hoạt và làm nặng thêm cơn co mạch thận SRC.",
        2: "Chẹn canxi có thể dùng phối hợp thêm nhưng không ức chế được cơ chế bệnh sinh then chốt của hệ RAAS như ACEi.",
        3: "Chẹn beta không ức chế được thụ thể Angiotensin II tại mạch máu thận.",
        4: "Nếu không dùng ACEi thì bệnh nhân sẽ mất chức năng thận vĩnh viễn và tử vong dù có lọc máu."
      },
      objective:
        "Cơn khủng hoảng thận do Xơ cứng bì (SRC: tăng HA ác tính, suy thận cấp, tán huyết vi mạch sau dùng Corticoid); điều trị cấp cứu bắt buộc số một là Thuốc ức chế men chuyển ACEi (Captopril); chống chỉ định dùng Corticoid liều cao."
    },

    {
      spec: "Khớp & Tự miễn",
      task: "Bước xử trí cấp cứu",
      short: "Viêm động mạch tế bào khổng lồ (Giant Cell Arteritis)",
      vignette: [
        "Cụ bà 72 tuổi đến khám vì <b>đau đầu dữ dội liên tục ở vùng thái dương bên phải 2 tuần nay, chải đầu thấy da đầu đau rát buốt</b>. Cụ than phiền <b>khi nhai thức ăn được vài phút thì hai cơ hàm bị mỏi nhức dữ dội buộc phải dừng nhai (Đau hàm cách hồi - Jaw claudication)</b>.",
        "Sáng nay, cụ đột ngột bị <b>mất thị lực thoáng qua ở mắt phải (Amaurosis fugax)</b> kéo dài 10 phút rồi nhìn lại được. Cụ có tiền sử đau cứng cơ vùng gốc chi hai vai và háng (Đau đa cơ do thấp - Polymyalgia Rheumatica).",
        "Khám: Động mạch thái dương nông bên phải dày cứng, nổi rõ dưới da, ấn đau chói và mất mạch đập.",
        "Xét nghiệm máu khẩn: <b>Tốc độ lắng máu (ESR) tăng rất cao 98 mm/h (tiêu chuẩn > 50 mm/h)</b>, CRP 52 mg/L."
      ],
      vitals: [
        ["Nhiệt độ", "37,5 °C"],
        ["Huyết áp", "135/85"],
        ["Mạch", "78 l/ph"],
        ["Nhịp thở", "16 l/ph"]
      ],
      stem: "Bước xử trí cấp cứu ngay lập tức để ngăn ngừa biến chứng mù mắt vĩnh viễn không hồi phục là gì?",
      choices: [
        "Bắt đầu ngay lập tức Corticoid liều cao đường tĩnh mạch / đường uống (Methylprednisolone hoặc Prednisone 60 mg/ngày) TRƯỚC KHI tiến hành Sinh thiết động mạch thái dương",
        "Chờ xếp lịch phẫu thuật Sinh thiết động mạch thái dương sau 3 ngày rồi mới bắt đầu dùng thuốc",
        "Uống thuốc giảm đau Paracetamol kết hợp Aspirin 81 mg tại nhà",
        "Chụp MRI sọ não kiểm tra và cho về theo dõi",
        "Tiêm thuốc tiêu sợi huyết Alteplase tĩnh mạch"
      ],
      answer: 0,
      why: [
        "Bệnh nhân có đầy đủ các triệu chứng kinh điển của <b>Viêm động mạch tế bào khổng lồ (Giant Cell Arteritis - GCA / Viêm động mạch thái dương)</b>:",
        "- Dịch tễ: Người cao tuổi (>50 tuổi), liên quan chặt chẽ với <b>Đau đa cơ do thấp (Polymyalgia Rheumatica - PMR)</b>.",
        "- Triệu chứng đặc trưng có giá trị chẩn đoán cao nhất: <b>Đau hàm cách hồi khi nhai (Jaw claudication, đặc hiệu nhất) + Đau da đầu khi chải tóc + Đau đầu thái dương + Động mạch thái dương dày đau mất đập + Tốc độ lắng máu ESR tăng rất cao (> 50–100 mm/h)</b>.",
        "- <b>BIẾN CHỨNG TỐI KHẨN CẤP: MÙ MẮT VĨNH VIỄN KHÔNG HỒI PHỤC (Ischemic Optic Neuropathy)</b> do viêm tắc nhánh động mạch mi sau ngắn (cấp máu cho gai thị thần kinh thị giác).",
        "- <b>NGUYÊN TẮC VÀNG TRONG USMLE: BẮT ĐẦU CORTICOID LIỀU CAO NGAY LẬP TỨC (NGAY KHI VỪA NGHI NGỜ TRÊN LÂM SÀNG) ĐỂ CỨU THỊ LỰC</b>:",
        "- Tuyệt đối không được trì hoãn điều trị để chờ làm sinh thiết động mạch thái dương.",
        "- Tổn thương mô bệnh học dạng u hạt tế bào khổng lồ trên thành động mạch vẫn tồn tại trong 1–2 tuần sau khi dùng corticoid nên sinh thiết sau đó vẫn cho kết quả chính xác."
      ],
      wrongs: {
        1: "Chờ sinh thiết động mạch thái dương sau 3 ngày mà không dùng corticoid sẽ khiến bệnh nhân bị mù mắt vĩnh viễn không thể hồi phục.",
        2: "Paracetamol/Aspirin không ức chế được phản ứng viêm hoại tử u hạt mạch máu lớn.",
        3: "MRI không điều trị được viêm mạch và làm chậm trễ thời gian vàng bảo vệ thị lực.",
        4: "Tiêu sợi huyết không có chỉ định cho viêm mạch máu tự miễn và gây nguy cơ xuất huyết."
      },
      objective:
        "Viêm động mạch thái dương tế bào khổng lồ (người già, đau đầu, đau hàm khi nhai, tăng ESR > 50) có nguy cơ mù mắt vĩnh viễn; BẮT BUỘC dùng ngay Corticoid liều cao trước khi làm sinh thiết động mạch thái dương."
    },

    {
      spec: "Khớp & Tự miễn",
      task: "Bước chẩn đoán và điều trị",
      short: "Bệnh u hạt kèm viêm đa mạch (Granulomatosis with Polyangiitis - GPA)",
      vignette: [
        "Nam 48 tuổi đến khám vì <b>viêm xoang mũi mủ tái phát nhiều đợt kháng trị với kháng sinh kèm nghẹt mũi chảy máu cam liên tục</b>. Khám tai mũi họng phát hiện thủng vách ngăn mũi làm sụp sống mũi tạo <b>hình ảnh mũi hình yên ngựa (Saddle-nose deformity)</b>.",
        "Bệnh nhân có ho khạc đờm lẫn máu và khó thở nhẹ. Chụp CT lồng ngực: <b>Nhiều nốt mờ và khối thâm nhiễm tạo hang ở hai phổi (Cavitary pulmonary nodules)</b>.",
        "Xét nghiệm: <b>Creatinine tăng 2,6 mg/dL</b>. Tổng phân tích nước tiểu có <b>Protein niệu, hồng cầu niệu vi thể và Trụ hồng cầu (Viêm cầu thận hoại tử)</b>.",
        "Xét nghiệm tự kháng thể: <b>Kháng thể kháng bào tương bạch cầu đa nhân trung tính dạng hạt tế bào chất (c-ANCA / Anti-Proteinase 3 / Anti-PR3) DƯƠNG TÍNH MẠNH</b>."
      ],
      vitals: [
        ["Nhiệt độ", "37,8 °C"],
        ["Huyết áp", "140/90"],
        ["Mạch", "86 l/ph"],
        ["Nhịp thở", "20 l/ph"]
      ],
      stem: "Chẩn đoán xác định cho hội chứng viêm mạch máu hoại tử này và phác đồ điều trị tấn công chuẩn là gì?",
      choices: [
        "Bệnh u hạt kèm viêm đa mạch (GPA / Wegener's Granulomatosis); điều trị tấn công bằng Corticoid liều cao phối hợp Rituximab HOẶC Cyclophosphamide",
        "Bệnh Viêm đa mạch vi thể (MPA); p-ANCA dương tính",
        "Hội chứng Goodpasture (Anti-GBM); điều trị bằng lọc huyết tương đơn độc",
        "Bệnh lao phổi đa kháng thuốc; điều trị bằng phác đồ kháng lao hàng 2",
        "Ung thư biểu mô vòm họng di căn phổi"
      ],
      answer: 0,
      why: [
        "Bệnh cảnh kinh điển của <b>Bệnh u hạt kèm viêm đa mạch (Granulomatosis with Polyangiitis - GPA / trước đây gọi là Wegener's Granulomatosis)</b> - viêm mạch máu nhỏ liên quan ANCA:",
        "- <b>Tam chứng cơ quan kinh điển (Tai mũi họng + Phổi + Thận)</b>:",
        "1. <b>Đường hô hấp trên (Tai mũi họng, >90%)</b>: Viêm xoang mạn tính kháng trị, viêm tai giữa, loét niêm mạc mũi, thủng vách ngăn mũi tạo <b>dị tật Mũi hình yên ngựa (Saddle-nose deformity)</b>, hẹp dưới thanh môn.",
        "2. <b>Đường hô hấp dưới (Phổi)</b>: Ho ra máu, <b>Nốt mờ và tổn thương tạo hang trên phim phổi (Cavitary lung lesions)</b>.",
        "3. <b>Thận</b>: <b>Viêm cầu thận tiến triển nhanh (RPGN) hình liềm hoại tử ít miễn dịch (Pauci-immune crescentic GN)</b> gây đái máu có trụ hồng cầu và suy thận cấp.",
        "- Dấu ấn huyết thanh học vàng: <b>c-ANCA dương tính (Kháng thể kháng Proteinase 3 / Anti-PR3, độ đặc hiệu > 95%)</b>.",
        "- Điều trị tấn công lui bệnh (Induction of remission): <b>Corticoid tĩnh mạch liều cao (Methylprednisolone) PHỐI HỢP Kháng thể đơn dòng Rituximab (kháng CD20) HOẶC Cyclophosphamide</b>."
      ],
      wrongs: {
        1: "Viêm đa mạch vi thể (MPA) không có tổn thương u hạt tạo hang ở phổi và không có tổn thương viêm xoang thủng vách ngăn mũi, thường liên quan p-ANCA (Anti-MPO).",
        2: "Goodpasture có kháng thể Anti-GBM (chuỗi alpha-3 collagen IV), không có tổn thương tai mũi họng mũi yên ngựa và c-ANCA âm tính.",
        3: "Lao phổi có thể tạo hang nhưng không gây viêm cầu thận hoại tử và c-ANCA âm tính.",
        4: "Ung thư vòm họng không tạo ra c-ANCA và không gây viêm cầu thận trụ hồng cầu."
      },
      objective:
        "GPA (Wegener: tam chứng tai mũi họng thủng vách ngăn mũi yên ngựa, tổn thương phổi tạo hang ho ra máu, viêm cầu thận đái máu; c-ANCA/Anti-PR3 dương tính); điều trị tấn công bằng Corticoid + Rituximab hoặc Cyclophosphamide."
    },

    {
      spec: "Thận học",
      task: "Bước chẩn đoán và sinh bệnh học",
      short: "Bệnh kháng thể kháng màng đáy cầu thận (Hội chứng Goodpasture)",
      vignette: [
        "Nam 26 tuổi hút thuốc lá đến khám vì ho ra máu tươi từng đợt, khó thở và mệt lả 4 ngày nay. Hai ngày nay bệnh nhân thấy nước tiểu chuyển sang <b>màu đỏ sẫm như nước coca và lượng nước tiểu giảm dần</b>.",
        "Xét nghiệm máu và nước tiểu: <b>Creatinine tăng vọt lên 4,5 mg/dL</b>, Hemoglobin giảm 8,2 g/dL. Nước tiểu có protein niệu và <b>nhiều trụ hồng cầu (RBC casts)</b>. X-quang ngực: Thâm nhiễm phế nang lan tỏa hai bên phế trường (Xuất huyết phế nang lan tỏa - DAH).",
        "Xét nghiệm tự kháng thể: <b>Kháng thể kháng màng đáy cầu thận (Anti-GBM Antibodies) DƯƠNG TÍNH MẠNH</b>. c-ANCA và p-ANCA âm tính.",
        "Sinh thiết thận: Viêm cầu thận hoại tử hình liềm (Crescentic GN). Miễn dịch huỳnh quang (Immunofluorescence): <b>Lắng đọng kháng thể IgG dạng đường thẳng liên tục mịn màng dọc theo màng đáy cầu thận (Linear deposition of IgG along GBM)</b>."
      ],
      vitals: [
        ["Nhiệt độ", "37,4 °C"],
        ["Huyết áp", "145/90"],
        ["Mạch", "92 l/ph"],
        ["Nhịp thở", "22 l/ph"]
      ],
      stem: "Tự kháng thể Anti-GBM tấn công trực tiếp vào cấu trúc phân tử nào của màng đáy và phương pháp can thiệp cấp cứu sống còn là gì?",
      choices: [
        "Kháng thể kháng chuỗi alpha-3 của Collagen Type IV trong màng đáy cầu thận và phế nang; điều trị cấp cứu sống còn bằng Thay huyết tương (Plasma Exchange - PEX) để loại bỏ kháng thể kết hợp Corticoid và Cyclophosphamide",
        "Kháng thể kháng thụ thể Phospholipase A2; điều trị bằng thuốc lợi tiểu",
        "Kháng thể kháng nhân ANA; điều trị bằng Hydroxychloroquine",
        "Phức hợp miễn dịch lắng đọng dạng hạt lấm tấm; điều trị bằng kháng sinh",
        "Lắng đọng chất dạng tinh bột Amyloid; điều trị bằng ghép tạng"
      ],
      answer: 0,
      why: [
        "Bệnh nhân có <b>Hội chứng Goodpasture / Bệnh kháng màng đáy cầu thận (Anti-GBM Disease)</b> - một bệnh tự miễn Type II (độc tế bào qua trung gian kháng thể):",
        "- Cơ chế phân tử: Tự kháng thể IgG tấn công trực tiếp vào <b>epitope trên chuỗi alpha-3 của Collagen Type IV (Alpha-3 chain of Type IV Collagen)</b> - cấu trúc có mặt đồng thời ở <b>Màng đáy cầu thận (GBM)</b> và <b>Màng đáy phế nang phổi</b>.",
        "- Biểu hiện kinh điển <b>Hội chứng Phổi - Thận (Pulmonary-Renal Syndrome)</b>: <b>Xuất huyết phế nang lan tỏa (Ho ra máu, thâm nhiễm phổi) + Viêm cầu thận tiến triển nhanh RPGN (Đái máu, trụ hồng cầu, suy thận tiến triển trong vài ngày)</b>.",
        "- Miễn dịch huỳnh quang sinh thiết thận: <b>LẮNG ĐỌNG IGG DẠNG ĐƯỜNG THẲNG TUYẾN TÍNH DỌC THEO MÀNG ĐÁY (Linear IgG deposition)</b> (khác với viêm cầu thận do phức hợp miễn dịch có lắng đọng dạng hạt lấm tấm Granular).",
        "- Cấp cứu sống còn: <b>THAY HUYẾT TƯƠNG (PLASMAPHERESIS / PEX)</b> liên tục hàng ngày để loại bỏ nhanh chóng kháng thể Anti-GBM lưu hành, kết hợp <b>Corticoid liều cao và Cyclophosphamide</b> để ngăn ngừa tủy xương sản xuất kháng thể mới."
      ],
      wrongs: {
        1: "Anti-PLA2R là kháng thể trong Bệnh cầu thận màng (gây hội chứng thận hư, không gây ho ra máu và lắng đọng dạng hạt).",
        2: "ANA trong Lupus có lắng đọng phức hợp miễn dịch dạng hạt 'full-house', không phải đường thẳng linear.",
        3: "Lắng đọng dạng hạt gặp trong PSGN hoặc Viêm thận Lupus.",
        4: "Amyloidosis lắng đọng chất vô định hình bắt màu đỏ Congo."
      },
      objective:
        "Hội chứng Goodpasture (Anti-GBM kháng chuỗi alpha-3 Collagen Type IV gây xuất huyết phế nang + suy thận cấp trụ hồng cầu, miễn dịch huỳnh quang dạng đường thẳng Linear IgG); cấp cứu bằng Thay huyết tương (PEX) + Corticoid + Cyclophosphamide."
    },

    {
      spec: "Thận học",
      task: "Bước chẩn đoán phân biệt",
      short: "Bệnh thận IgA (Bệnh Berger) sau nhiễm khuẩn đường hô hấp",
      vignette: [
        "Nam 22 tuổi đến khám vì thấy <b>nước tiểu chuyển sang màu đỏ sẫm như nước rửa thịt hoặc màu coca xuất hiện ngày hôm qua</b>. Bệnh nhân đang bị sốt nhẹ, đau rát họng và ho do viêm đường hô hấp trên khởi phát <b>cách đây 1 ngày (Đái máu xuất hiện ĐỒNG THỜI trong vòng 24–48 giờ sau nhiễm trùng họng - Synpharyngitic hematuria)</b>.",
        "Tiền sử: Bệnh nhân từng bị 1 đợt đái máu tương tự cách đây 1 năm sau khi bị cảm cúm rồi tự hết sau vài ngày.",
        "Khám: Huyết áp 125/78 mm Hg, không phù, họng đỏ xung huyết.",
        "Xét nghiệm: Creatinine 0,9 mg/dL (bình thường), Protein niệu 0,6 g/24h, cặn lắng nước tiểu có nhiều hồng cầu biến dạng. <b>Nồng độ Bổ thể C3 và C4 huyết thanh HOÀN TOÀN BÌNH THƯỜNG</b>."
      ],
      vitals: [
        ["Nhiệt độ", "37,6 °C"],
        ["Huyết áp", "125/78"],
        ["Mạch", "76 l/ph"],
        ["Nhịp thở", "16 l/ph"]
      ],
      stem: "Chẩn đoán xác định và đặc điểm phân biệt quan trọng nhất giữa Bệnh thận IgA và Viêm cầu thận sau nhiễm liên cầu (PSGN) là gì?",
      choices: [
        "Bệnh thận IgA (Bệnh Berger); phân biệt bằng Đái máu xuất hiện sớm trong vòng 1–2 ngày sau nhiễm trùng (Synpharyngitic) và Bổ thể C3/C4 hoàn toàn BÌNH THƯỜNG (trong khi PSGN xuất hiện muộn sau 2–4 tuần và C3 GIẢM THẤP)",
        "Viêm cầu thận sau nhiễm liên cầu (PSGN); điều trị bằng kháng sinh Penicillin tĩnh mạch liều cao",
        "Sỏi bàng quang gây trầy xước niêm mạc; nội soi bàng quang tán sỏi",
        "Viêm niệu đạo do Chlamydia; điều trị bằng Azithromycin",
        "Ung thư biểu mô bàng quang; phẫu thuật cắt bàng quang"
      ],
      answer: 0,
      why: [
        "Bệnh nhân có <b>Bệnh thận IgA (IgA Nephropathy / Bệnh Berger)</b> - bệnh cầu thận nguyên phát phổ biến nhất trên toàn thế giới (đặc biệt ở người trẻ gốc Á).",
        "Bảng phân biệt kinh điển sống còn trong USMLE giữa <b>Bệnh thận IgA</b> và <b>Viêm cầu thận sau nhiễm liên cầu (PSGN)</b>:",
        "1. <b>Thời gian tiềm tàng từ khi viêm họng đến khi đái máu</b>:",
        "- <b>Bệnh thận IgA</b>: <b>Xuất hiện RẤT SỚM trong vòng 1–2 NGÀY (Đái máu cùng thì với viêm họng - Synpharyngitic Hematuria)</b>.",
        "- <b>PSGN</b>: <b>Xuất hiện MUỘN sau 1–3 TUẦN sau viêm họng hoặc 3–6 TUẦN sau nhiễm trùng da/chốc lở (Post-infectious)</b>.",
        "2. <b>Nồng độ Bổ thể C3 huyết thanh</b>:",
        "- <b>Bệnh thận IgA</b>: <b>BỔ THỂ C3 VÀ C4 HOÀN TOÀN BÌNH THƯỜNG</b>.",
        "- <b>PSGN</b>: <b>BỔ THỂ C3 GIẢM RẤT THẤP THOÁNG QUA</b> (do hoạt hóa bổ thể theo con đường nhánh thay thế, trở về bình thường sau 6–8 tuần).",
        "3. <b>Mô bệnh học</b>: Bệnh thận IgA thấy <b>lắng đọng IgA ưu thế ở vùng gian mạch (Mesangial IgA deposition)</b> trên miễn dịch huỳnh quang.",
        "- Điều trị: Theo dõi huyết áp, <b>Thuốc ức chế men chuyển (ACEi / ARB)</b> để kiểm soát huyết áp và giảm protein niệu bảo vệ thận."
      ],
      wrongs: {
        1: "PSGN xuất hiện muộn 2-4 tuần sau viêm họng và có Bổ thể C3 giảm thấp; ở đây đái máu ngày thứ 1 và C3 bình thường.",
        2: "Đái máu toàn bãi có hồng cầu biến dạng và protein niệu, có tiền sử tái phát theo đợt viêm họng, là nguồn gốc từ cầu thận chứ không phải sỏi cơ học.",
        3: "Viêm niệu đạo có đái buốt đái rắt và mủ niệu đạo.",
        4: "Ung thư bàng quang thường gặp ở người già hút thuốc lá có đái máu không đau, không tái phát theo đợt viêm họng ở thanh niên 22 tuổi."
      },
      objective:
        "Bệnh thận IgA (Berger) đặc trưng bởi đái máu đại thể xuất hiện sớm trong vòng 1-2 ngày sau viêm họng (Synpharyngitic) và Bổ thể C3/C4 BÌNH THƯỜNG (khác với PSGN xuất hiện muộn sau 2-4 tuần và C3 giảm thấp); điều trị bằng ACEi/ARB."
    },

    {
      spec: "Khớp & Tự miễn",
      task: "Bước chẩn đoán và xét nghiệm đông máu",
      short: "Hội chứng kháng Phospholipid (Antiphospholipid Syndrome - APS)",
      vignette: [
        "Nữ 30 tuổi đến khám vì sưng đau và phù đỏ toàn bộ cẳng chân trái. Siêu âm Doppler khẳng định Huyết khối tĩnh mạch sâu (DVT) chân trái tự phát.",
        "Khai thác tiền sử sản khoa: Bệnh nhân có <b>tiền sử sảy thai liên tiếp 3 lần trước tuần thứ 10 của thai kỳ và 1 lần thai chết lưu không rõ nguyên nhân ở tuần thứ 24</b> mặc dù thai nhi hoàn toàn bình thường về hình thái.",
        "Xét nghiệm đông máu:",
        "- <b>Thời gian Thromboplastin một phần hoạt hóa (aPTT) KÉO DÀI BẤT THƯỜNG 52 giây (bình thường 25–35s)</b>.",
        "- Tiến hành <b>Nghiệm pháp trộn huyết tương tỷ lệ 1:1 với huyết tương người bình thường (Mixing study): aPTT KHÔNG ĐƯỢC ĐIỀU CHỈNH TRỞ VỀ BÌNH THƯỜNG</b> (chứng tỏ có chất ức chế đông máu lưu hành - Lupus Anticoagulant).",
        "- Xét nghiệm huyết thanh: <b>Kháng thể Kháng Cardiolipin (Anti-Cardiolipin IgG/IgM) và Kháng thể Anti-beta2 Glycoprotein I dương tính mạnh</b> lặp lại ở 2 lần xét nghiệm cách nhau 12 tuần."
      ],
      vitals: [
        ["Nhiệt độ", "36,8 °C"],
        ["Huyết áp", "120/75"],
        ["Mạch", "76 l/ph"],
        ["Nhịp thở", "16 l/ph"]
      ],
      stem: "Nghịch lý xét nghiệm đông máu và chiến lược điều trị chống đông lâu dài chuẩn cho bệnh nhân này là gì?",
      choices: [
        "Chất chống đông Lupus (Lupus Anticoagulant) gây kéo dài aPTT giả tạo trong ống nghiệm (in vitro) do cạnh tranh gắn phospholipid xét nghiệm nhưng trong cơ thể (in vivo) lại gây trạng thái tăng đông tắc mạch dữ dội; điều trị chống đông lâu dài bằng Warfarin (duy trì INR mục tiêu 2,0–3,0)",
        "Thiếu hụt yếu tố VIII (Hemophilia A); điều trị bằng truyền yếu tố VIII định kỳ",
        "Bệnh Von Willebrand; điều trị bằng Desmopressin",
        "Thiếu hụt Yếu tố XII; không cần điều trị",
        "Giảm tiểu cầu do tự kháng thể; điều trị bằng cắt lách"
      ],
      answer: 0,
      why: [
        "Bệnh nhân thỏa mãn đầy đủ tiêu chuẩn Sapporo/Sydney chẩn đoán <b>Hội chứng kháng Phospholipid (Antiphospholipid Syndrome - APS)</b>:",
        "- Tiêu chuẩn lâm sàng: <b>Huyết khối mạch máu (DVT) VÀ Biến cố thai sản (Sảy thai liên tiếp / Thai lưu sau tuần 10)</b>.",
        "- Tiêu chuẩn xét nghiệm (dương tính kéo dài ≥ 12 tuần): Kháng thể <b>Lupus Anticoagulant</b>, <b>Anti-Cardiolipin</b>, hoặc <b>Anti-beta2 Glycoprotein I</b>.",
        "- <b>NGHỊCH LÝ ĐÔNG MÁU KINH ĐIỂN CỦA LUPUS ANTICOAGULANT</b>:",
        "- <b>Trong ống nghiệm (In Vitro)</b>: Kháng thể gắn cạnh tranh với phospholipid nhân tạo của bộ kit xét nghiệm -> làm <b>aPTT KÉO DÀI GIẢ TẠO</b> và <b>Nghiệm pháp trộn (Mixing study) KHÔNG THỂ SỬA CHỮA ĐƯỢC aPTT</b>.",
        "- <b>Trong cơ thể bệnh nhân (In Vivo)</b>: Kháng thể kích hoạt tế bào nội mô và tiểu cầu gây <b>TRẠNG THÁI TĂNG ĐÔNG MẠNH MẼ VỚI NGUY CƠ HUYẾT KHỐI TĨNH MẠCH VÀ ĐỘNG MẠCH RẤT CAO</b>.",
        "- Điều trị chuẩn: Bệnh nhân đã có biến cố tắc mạch bắt buộc dùng <b>Thuốc chống đông kháng Vitamin K (Warfarin duy trì INR 2,0–3,0 suốt đời)</b>. (Lưu ý: DOAC không được khuyến cáo cho APS có nguy cơ huyết khối cao do nghiên cứu TRAPS cho thấy tăng biến cố tắc mạch so với Warfarin).",
        "- Phụ nữ mang thai mắc APS: Điều trị bằng <b>Heparin trọng lượng phân tử thấp (LMWH) phối hợp Aspirin liều thấp</b> (chống chỉ định Warfarin trong thai kỳ vì gây quái thai)."
      ],
      wrongs: {
        1: "Hemophilia A là bệnh di truyền lặn liên kết X ở nam giới gây chảy máu cơ khớp, và nghiệm pháp trộn sẽ sửa chữa được aPTT về bình thường.",
        2: "Von Willebrand gây chảy máu niêm mạc, không gây tắc mạch huyết khối và thai lưu liên tiếp.",
        3: "Thiếu yếu tố XII kéo dài aPTT nhưng không gây bệnh lý tắc mạch hay thai lưu trên lâm sàng.",
        4: "APS là bệnh lý tăng đông huyết khối, không phải giảm tiểu cầu đơn thuần cần cắt lách."
      },
      objective:
        "Hội chứng kháng Phospholipid (APS: huyết khối tái phát, sảy thai liên tiếp, sảy thai lưu muộn) có nghịch lý aPTT kéo dài in vitro do Lupus Anticoagulant nhưng gây tăng đông in vivo; điều trị chống đông lâu dài bằng Warfarin (INR 2-3)."
    },

    {
      spec: "Huyết học",
      task: "Bước chẩn đoán phân biệt",
      short: "Thiếu máu hồng cầu to: Thiếu Vitamin B12 vs Thiếu Folate",
      vignette: [
        "Nam 64 tuổi đến khám vì mệt mỏi, khó thở khi gắng sức, lưỡi đỏ bóng mất gai (viêm teo gai lưỡi) và <b>cảm giác tê bì châm chích mất cảm giác ở cả hai bàn chân lan lên cẳng chân, đi lại loạng choạng mất thăng bằng đặc biệt khi nhắm mắt hoặc trong bóng tối</b>.",
        "Khám thần kinh: <b>Mất cảm giác rung âm thoa và mất cảm giác bản thể tư thế khớp ở hai chi dưới, nghiệm pháp Romberg dương tính, tăng phản xạ gân xương và dấu hiệu Babinski dương tính hai bên (Thoái hóa kết hợp bán cấp tủy sống - Subacute Combined Degeneration)</b>.",
        "Xét nghiệm máu: <b>Hemoglobin giảm nặng 7,0 g/dL, MCV TĂNG CAO 116 fL (Thiếu máu hồng cầu to)</b>.",
        "Tiêu bản máu ngoại vi: Hồng cầu to hình bầu dục (Macro-ovalocytes) và <b>Bạch cầu đa nhân trung tính phân nhiều đoạn (Hypersegmented neutrophils có ≥ 6 múi)</b>."
      ],
      vitals: [
        ["Nhiệt độ", "36,8 °C"],
        ["Huyết áp", "125/75"],
        ["Mạch", "88 l/ph"],
        ["Nhịp thở", "18 l/ph"]
      ],
      stem: "Cặp xét nghiệm chuyển hóa nào sau đây giúp phân biệt chắc chắn Thiếu Vitamin B12 với Thiếu Folate?",
      choices: [
        "Cả Axit Methylmalonic (MMA) và Homocysteine đều TĂNG CAO trong Thiếu Vitamin B12; trong khi Thiếu Folate chỉ tăng Homocysteine mà MMA HOÀN TOÀN BÌNH THƯỜNG",
        "Cả MMA và Homocysteine đều bình thường trong thiếu Vitamin B12",
        "Thiếu Vitamin B12 làm giảm Homocysteine",
        "Thiếu Folate làm tăng MMA chọn lọc",
        "Định lượng Ferritin huyết thanh"
      ],
      answer: 0,
      why: [
        "Bệnh nhân có <b>Thiếu máu hồng cầu khổng lồ do Thiếu Vitamin B12 (Cobalamin)</b> gây biến chứng thần kinh kinh điển <b>Thoái hóa kết hợp bán cấp tủy sống (Subacute Combined Degeneration of Spinal Cord - SCD)</b> do tổn thương mất myelin ở <b>Cột sau tủy sống (mất cảm giác rung và bản thể -> thất điều cảm giác, Romberg dương tính)</b> và <b>Dải vỏ gai ngoài (liệt trên nhân, Babinski dương tính)</b>.",
        "Phân biệt vàng giữa <b>Thiếu Vitamin B12</b> và <b>Thiếu Axit Folic (Folate)</b>:",
        "- Cả hai đều gây: Thiếu máu hồng cầu to (MCV > 100 fL) + <b>Bạch cầu đa nhân phân nhiều đoạn (Hypersegmented Neutrophils ≥ 5–6 múi)</b> + Tăng Homocysteine.",
        "- <b>ĐẶC ĐIỂM KHÁC BIỆT DUY NHẤT VỀ CHUYỂN HÓA</b>:",
        "1. <b>Thiếu Vitamin B12</b>: Vitamin B12 là coenzym của men Methylmalonyl-CoA mutase -> Khi thiếu B12, <b>CẢ AXIT METHYLMALONIC (MMA) VÀ HOMOCYSTEINE ĐỀU TĂNG CAO</b>. Sự tích tụ MMA là nguyên nhân trực tiếp gây tổn thương bao myelin và biến chứng thần kinh.",
        "2. <b>Thiếu Folate</b>: Folate chỉ tham gia chuyển hóa Homocysteine thành Methionine -> <b>HOMOCYSTEINE TĂNG NHƯNG MMA HOÀN TOÀN BÌNH THƯỜNG</b> và <b>KHÔNG BAO GIỜ CÓ TRIỆU CHỨNG THẦN KINH</b>.",
        "- <b>CẢNH BÁO TỬ VĂNG KINH ĐIỂN</b>: Nếu điều trị bổ sung Axit Folic đơn độc cho bệnh nhân thiếu B12, thiếu máu có thể cải thiện giả tạo nhưng <b>tổn thương thần kinh sẽ tiến triển nhanh chóng dẫn đến liệt tủy vĩnh viễn không hồi phục</b>. Bắt buộc phải điều trị bằng <b>Tiêm bắp Vitamin B12 (Cyanocobalamin / Hydroxocobalamin)</b>."
      ],
      wrongs: {
        1: "MMA và Homocysteine tăng rất nhạy khi thiếu B12 tế bào.",
        2: "Cả B12 và Folate đều làm tăng Homocysteine do ức chế tổng hợp methionine.",
        3: "Thiếu folate không làm tăng MMA vì men mutase không phụ thuộc folate.",
        4: "Ferritin phân biệt thiếu sắt, không phân biệt B12 và Folate."
      },
      objective:
        "Thiếu B12 gây thiếu máu hồng cầu to kèm tổn thương thần kinh cột sau/dải vỏ gai (SCD) và làm TĂNG CẢ MMA VÀ HOMOCYSTEINE; Thiếu Folate chỉ tăng Homocysteine còn MMA bình thường và không có triệu chứng thần kinh."
    },

    {
      spec: "Huyết học",
      task: "Bước chẩn đoán và tế bào học",
      short: "Thiếu máu tán huyết do thiếu hụt men G6PD",
      vignette: [
        "Nam 20 tuổi người Mỹ gốc Phi đang điều trị nhiễm trùng đường tiểu bằng kháng sinh <b>Trimethoprim-Sulfamethoxazole (Bactrim)</b> ngày thứ 3, đột ngột xuất hiện mệt mỏi, đau lưng, vàng mắt và <b>nước tiểu chuyển sang màu đen sẫm như nước tương xì dầu</b>.",
        "Khám: Củng mạc mắt vàng đậm, da xanh tái. Khám tim phổi bình thường, không có lách to.",
        "Xét nghiệm: <b>Hemoglobin tụt nhanh từ 14,2 xuống còn 8,5 g/dL</b>, Hồng cầu lưới tăng 9,0%, Bilirubin gián tiếp tăng, Haptoglobin huyết thanh không đo được, Hemoglobin niệu dương tính mạnh (Tán huyết nội mạch cấp).",
        "Tiêu bản máu ngoại vi nhuộm Wright và nhuộm tím tinh thể: <b>Các tế bào hồng cầu bị cắn gặm mất một phần bào tương hình bán nguyệt (Bite cells / Degmacytes)</b> và <b>Các thể vùi bất thường bắt màu bám sát màng hồng cầu (Thể Heinz - Heinz bodies)</b>. Nghiệm pháp Coombs trực tiếp âm tính."
      ],
      vitals: [
        ["Nhiệt độ", "37,2 °C"],
        ["Huyết áp", "120/75"],
        ["Mạch", "98 l/ph"],
        ["Nhịp thở", "18 l/ph"]
      ],
      stem: "Cơ chế sinh hóa bảo vệ tế bào hồng cầu bị suy giảm và thời điểm chính xác để xét nghiệm đo hoạt độ enzym G6PD là khi nào?",
      choices: [
        "Thiếu hụt men Glucose-6-Phosphate Dehydrogenase (G6PD) làm giảm tạo NADPH, khiến Glutathione không thể hoàn nguyên để chống lại các chất oxy hóa gây kết tủa Hemoglobin (thể Heinz); xét nghiệm đo hoạt độ enzym G6PD nên thực hiện SAU KHI ĐỢT TÁN HUYẾT CẤP ĐÃ QUA ĐI TỪ 2–3 THÁNG",
        "Thiếu hụt men Pyruvate Kinase; đo enzym ngay trong cơn cấp",
        "Đột biến chuỗi beta globin gây hồng cầu hình liềm",
        "Thiếu hụt enzym Ankyrin màng tế bào",
        "Tán huyết do kháng thể lạnh IgM"
      ],
      answer: 0,
      why: [
        "Bệnh cảnh kinh điển của <b>Thiếu hụt men G6PD (G6PD Deficiency)</b> di truyền lặn trên nhiễm sắc thể X:",
        "- Cơ chế sinh hóa: Con đường Hexose Monophosphate (HMP Shunt) sử dụng men <b>G6PD để tạo ra phân tử NADPH</b>. NADPH là chất khử bắt buộc để duy trì <b>Glutathione ở trạng thái khử (GSH)</b> - chất chống oxy hóa tự nhiên duy nhất bảo vệ tế bào hồng cầu khỏi các gốc tự do oxy hóa (ROS).",
        "- Yếu tố kích phát: <b>Ăn đậu tằm (Fava beans / Favism), Thuốc oxy hóa (Sulfa drugs như TMP-SMX, Dapsone, Primaquine, Nitrofurantoin) hoặc Nhiễm trùng cấp</b>.",
        "- Tổn thương tế bào học: Khi bị oxy hóa, các phân tử Hemoglobin bị biến tính kết tủa tạo thành các <b>Thể Heinz (Heinz bodies)</b> bám vào màng hồng cầu. Khi hồng cầu đi qua lách, các đại thực bào lách sẽ 'cắn' bỏ các thể Heinz này tạo thành các <b>Tế bào hồng cầu bị cắn (Bite cells / Degmacytes / Blister cells)</b> dẫn đến tán huyết nội mạch và ngoại mạch dữ dội.",
        "- <b>BẪY XÉT NGHIỆM KINH ĐIỂN</b>: <b>TRONG ĐỢT TÁN HUYẾT CẤP, XÉT NGHIỆM ĐO HOẠT ĐỘ MEN G6PD CÓ THỂ BÌNH THƯỜNG GIẢ TẠO</b> (do tất cả các hồng cầu già thiếu enzym nặng đã bị vỡ hết, trong máu chỉ còn lại các hồng cầu lưới non mới sinh có mức enzym G6PD cao) -> <b>BẮT BUỘC ĐO LẠI HOẠT ĐỘ MEN G6PD SAU 2–3 THÁNG KHI ĐỢT CẤP ĐÃ LUI HOÀN TOÀN</b>.",
        "- Xử trí: Ngừng ngay thuốc thủ phạm, truyền dịch kiềm hóa nước tiểu và truyền máu nếu thiếu máu nặng."
      ],
      wrongs: {
        1: "Thiếu Pyruvate Kinase gây tán huyết bẩm sinh từ nhỏ không phụ thuộc thuốc oxy hóa.",
        2: "Hồng cầu hình liềm có hồng cầu hình liềm biến dạng (Sickle cells) và tắc mạch đau xương khớp.",
        3: "Thiếu Ankyrin/Spectrin gây hồng cầu hình cầu di truyền Coombs âm tính.",
        4: "Kháng thể lạnh có ngưng kết tố lạnh IgM dương tính."
      },
      objective:
        "Thiếu G6PD (di truyền lặn NST X, tán huyết sau dùng thuốc Sulfa/đậu tằm) có thể Heinz và Bite cells trên lam máu; xét nghiệm đo hoạt độ men G6PD phải làm sau đợt cấp 2-3 tháng để tránh âm tính giả."
    },

    {
      spec: "Huyết học",
      task: "Bước chẩn đoán và điều trị",
      short: "Ban xuất huyết giảm tiểu cầu miễn dịch (ITP)",
      vignette: [
        "Nữ 26 tuổi khỏe mạnh đến khám vì xuất hiện <b>nhiều chấm xuất huyết dạng nốt chấm đỏ li ti ở hai cẳng chân và bầm tím tự nhiên ở cẳng tay 3 ngày nay kèm chảy máu chân răng khi đánh răng</b>. Bệnh nhân không sốt, không dùng thuốc gì.",
        "Khám: Rất nhiều chấm xuất huyết (Petechiae) và mảng bầm máu (Purpura) ở da và niêm mạc miệng. <b>Hoàn toàn KHÔNG CÓ lách to hay hạch to ngoại vi</b>.",
        "Xét nghiệm máu: <b>Số lượng tiểu cầu GIẢM NẶNG CÒN 12.000/mcL</b>. Hemoglobin 13,2 g/dL (bình thường), Bạch cầu 6.800/mcL (bình thường) (<b>Giảm tiểu cầu đơn độc</b>). Tiêu bản máu ngoại vi: Các tế bào hồng cầu và bạch cầu hoàn toàn bình thường, có một vài tiểu cầu to khổng lồ, KHÔNG CÓ mảnh vỡ hồng cầu Schistocytes.",
        "Xét nghiệm đông máu (PT, aPTT, Fibrinogen) hoàn toàn bình thường. Xét nghiệm HIV và Viêm gan C âm tính."
      ],
      vitals: [
        ["Nhiệt độ", "36,8 °C"],
        ["Huyết áp", "118/74"],
        ["Mạch", "76 l/ph"],
        ["Nhịp thở", "16 l/ph"]
      ],
      stem: "Chẩn đoán xác định và phác đồ điều trị đầu tay chuẩn cho bệnh nhân ITP người lớn có tiểu cầu < 30.000/mcL kèm chảy máu niêm mạc là gì?",
      choices: [
        "Ban xuất huyết giảm tiểu cầu miễn dịch (Immune Thrombocytopenia - ITP); điều trị đầu tay bằng Corticoid đường uống/tĩnh mạch (Dexamethasone 40 mg/ngày trong 4 ngày HOẶC Prednisone 1 mg/kg/ngày) PHỐI HỢP Immunoglobulin tĩnh mạch (IVIG)",
        "Truyền khối tiểu cầu định kỳ mỗi tuần",
        "Phẫu thuật cắt lách cấp cứu ngay trong ngày đầu",
        "Thuốc ức chế miễn dịch Cyclophosphamide liều cao",
        "Kháng sinh Ceftriaxone đường tĩnh mạch"
      ],
      answer: 0,
      why: [
        "Bệnh nhân có <b>Ban xuất huyết giảm tiểu cầu miễn dịch (Immune Thrombocytopenia - ITP)</b>:",
        "- Cơ chế: Do <b>tự kháng thể IgG kháng lại glycoprotein màng tiểu cầu (chủ yếu là GPIIb/IIIa)</b> làm các đại thực bào ở Lách bắt giữ và tiêu hủy tiểu cầu ngoại vi.",
        "- Đặc điểm nhận diện cốt lõi: <b>GIẢM TIỂU CẦU ĐƠN ĐỘC Ở NGƯỜI TRẺ KHỎE MẠNH KHÔNG CÓ LÁCH TO</b> (lách to gợi ý bệnh lý tăng sinh lympho hoặc xơ gan), lam máu ngoại vi bình thường không có Schistocytes.",
        "- Chỉ định điều trị ở người lớn: Khi <b>Số lượng tiểu cầu < 30.000/mcL HOẶC có biểu hiện chảy máu niêm mạc hoạt động</b>.",
        "- Phác đồ điều trị đầu tay theo guideline ASH:",
        "1. <b>Corticoid toàn thân</b>: <b>Dexamethasone liều cao (40 mg/ngày x 4 ngày) HOẶC Prednisone (1 mg/kg/ngày)</b>.",
        "2. <b>Immunoglobulin truyền tĩnh mạch (IVIG) HOẶC Anti-D</b>: Chỉ định khi cần nâng tiểu cầu nhanh chóng trong trường hợp chảy máu đe dọa tính mạng hoặc cần phẫu thuật khẩn cấp (IVIG phong bế thụ thể Fc của đại thực bào lách làm ngừng phá hủy tiểu cầu trong vòng 24–48h).",
        "- <b>TRUYỀN TIỂU CẦU CHỈ CHỈ ĐỊNH KHI XUẤT HUYẾT ĐE DỌA TÍNH MẠNG (XUẤT HUYẾT NÃO)</b> vì tiểu cầu truyền vào sẽ bị tự kháng thể phá hủy nhanh chóng trong vài giờ.",
        "- Điều trị bước 2 nếu kháng trị: <b>Thuốc đồng vận thụ thể Thrombopoietin (TPO-RAs: Eltrombopag, Romiplostim), Rituximab hoặc Cắt lách</b>."
      ],
      wrongs: {
        1: "Truyền tiểu cầu thường quy không có hiệu quả trong ITP vì tự kháng thể phá hủy tiểu cầu truyền vào sau vài phút; chỉ dùng khi chảy máu đe dọa tính mạng.",
        2: "Cắt lách là điều trị bước hai sau khi thất bại với thuốc, không phải chỉ định ban đầu.",
        3: "Cyclophosphamide là thuốc ức chế tủy nặng, chỉ dùng cho ITP kháng trị đa thuốc giai đoạn muộn.",
        4: "ITP là bệnh tự miễn không do nhiễm khuẩn, kháng sinh không có tác dụng."
      },
      objective:
        "ITP (giảm tiểu cầu đơn độc không lách to ở người trẻ, lam máu bình thường); điều trị đầu tay khi tiểu cầu < 30.000/mcL kèm chảy máu bằng Corticoid (Dexamethasone/Prednisone) phối hợp IVIG; hạn chế truyền tiểu cầu."
    },

    {
      spec: "Huyết học",
      task: "Bước chẩn đoán và sinh bệnh học",
      short: "Đông máu nội mạch rải rác (DIC) trong sốc nhiễm khuẩn",
      vignette: [
        "Nam 58 tuổi đang nằm tại khoa Hồi sức tích cực điều trị sốc nhiễm khuẩn do viêm phổi nặng (thở máy, dùng Noradrenaline). Bệnh nhân đột ngột xuất hiện <b>máu rỉ liên tục không cầm từ các vị trí chọc kim tiêm truyền tĩnh mạch, chảy máu niêm mạc mũi miệng và xuất hiện các mảng hoại tử tím đen ở các đầu ngón tay ngón chân (Purpura fulminans)</b>.",
        "Xét nghiệm máu và đông máu khẩn cấp:",
        "- <b>Số lượng tiểu cầu giảm nặng còn 28.000/mcL</b>.",
        "- <b>Thời gian Prothrombin (PT/INR) KÉO DÀI 22 giây (INR 2,1)</b>.",
        "- <b>Thời gian Thromboplastin từng phần hoạt hóa (aPTT) KÉO DÀI 62 giây</b>.",
        "- <b>Nồng độ Fibrinogen huyết tương GIẢM RẤT THẤP CÒN 75 mg/dL (tiêu chuẩn < 100 mg/dL)</b>.",
        "- <b>Sản phẩm thoái giáng Fibrin (FDP) và D-Dimer TĂNG RẤT CAO > 35.000 ng/mL</b>.",
        "- Tiêu bản máu ngoại vi: Có mảnh vỡ hồng cầu Schistocytes."
      ],
      vitals: [
        ["Nhiệt độ", "39,0 °C"],
        ["Huyết áp", "85/50"],
        ["Mạch", "125 l/ph"],
        ["Nhịp thở", "26 l/ph"]
      ],
      stem: "Cơ chế rối loạn đông máu bệnh lý tiêu thụ nào giải thích đồng thời hiện tượng huyết khối tắc mạch và chảy máu ồ ạt trong hội chứng này?",
      choices: [
        "Đông máu nội mạch rải rác (Disseminated Intravascular Coagulation - DIC) do giải phóng ồ ạt yếu tố mô (Tissue Factor) kích hoạt dòng thác đông máu toàn thân gây cạn kiệt toàn bộ các yếu tố đông máu, Fibrinogen và tiểu cầu (Bệnh lý đông máu tiêu thụ - Consumptive Coagulopathy)",
        "Suy tế bào gan tối cấp đơn thuần",
        "Thiếu hụt Vitamin K nặng do dùng kháng sinh",
        "Bệnh Hemophilia mắc phải do kháng thể kháng yếu tố VIII",
        "Giảm tiểu cầu do tự kháng thể ITP"
      ],
      answer: 0,
      why: [
        "Bệnh nhân bị <b>Đông máu nội mạch rải rác (Disseminated Intravascular Coagulation - DIC)</b> thứ phát sau Sốc nhiễm khuẩn (Septic Shock):",
        "- Cơ chế bệnh sinh hai pha nguy hiểm (Consumptive Coagulopathy):",
        "1. Nội độc tố vi khuẩn và các cytokine tiền viêm kích thích giải phóng ồ ạt <b>Yếu tố mô (Tissue Factor)</b> -> Kích hoạt dòng thác đông máu toàn thân tạo ra lượng khổng lồ <b>Thrombin</b>.",
        "2. Thrombin tạo ra vô số cục máu đông fibrin vi mạch lan tỏa khắp các cơ quan -> Gây <b>Tắc mạch hoại tử đầu chi (Purpura fulminans) và suy đa tạng</b>.",
        "3. Quá trình tạo huyết khối ồ ạt làm <b>TIÊU THỤ CẠN KIỆT TOÀN BỘ TIỂU CẦU, FIBRINOGEN VÀ CÁC YẾU TỐ ĐÔNG MÁU</b>, kết hợp hệ thống tiêu sợi huyết thứ phát hoạt hóa quá mức phân cắt Fibrin -> Gây <b>CHẢY MÁU Ồ ẠT KHẮP NƠI (Rỉ máu chân kim, chảy máu niêm mạc)</b>.",
        "- Bộ xét nghiệm đông máu kinh điển khẳng định DIC:",
        "- <b>Tiểu cầu GIẢM NẶNG</b>.",
        "- <b>PT và aPTT ĐỀU KÉO DÀI</b>.",
        "- <b>Fibrinogen GIẢM THẤP (< 100–150 mg/dL)</b>.",
        "- <b>D-Dimer và FDP TĂNG CỰC CAO</b>.",
        "- Tiêu bản máu có <b>Mảnh vỡ hồng cầu Schistocytes</b>.",
        "- Điều trị: <b>Điều trị căn nguyên gốc là quan trọng nhất (Kháng sinh, kiểm soát ổ nhiễm khuẩn)</b> + Hồi sức truyền máu thay thế các thành phần bị tiêu thụ: <b>Huyết tương tươi đông lạnh (FFP)</b> bù yếu tố đông máu, <b>Tủa lạnh (Cryoprecipitate)</b> bù Fibrinogen (khi < 100 mg/dL), và <b>Truyền khối tiểu cầu</b> (khi < 20.000–50.000 kèm chảy máu)."
      ],
      wrongs: {
        1: "Suy gan có giảm yếu tố đông máu nhưng không có tăng D-Dimer cực cao và Schistocytes tán huyết vi mạch như DIC.",
        2: "Thiếu Vitamin K chỉ kéo dài PT (và aPTT muộn), không làm giảm tiểu cầu và không làm giảm Fibrinogen.",
        3: "Hemophilia mắc phải chỉ kéo dài aPTT đơn độc, PT và tiểu cầu bình thường.",
        4: "ITP có đông máu PT, aPTT và Fibrinogen hoàn toàn bình thường."
      },
      objective:
        "DIC (Đông máu nội mạch rải rác trong sốc nhiễm trùng) đặc trưng bởi hội chứng đông máu tiêu thụ: Tiểu cầu giảm, PT và aPTT kéo dài, Fibrinogen giảm thấp, D-dimer tăng rất cao; điều trị nguyên nhân gốc kết hợp truyền FFP, Tủa lạnh và Tiểu cầu."
    },

    {
      spec: "Thận học",
      task: "Bước chẩn đoán và tự kháng thể",
      short: "Bệnh cầu thận màng và kháng thể Anti-PLA2R",
      vignette: [
        "Nam 52 tuổi đến khám vì phù to toàn thân hai chân và mi mắt tăng dần 1 tháng nay. Bệnh nhân không có tiền sử đái tháo đường, không có sốt hay đau khớp.",
        "Xét nghiệm máu và nước tiểu:",
        "- <b>Protein niệu 24 giờ tăng rất cao 9,5 g/24h (Hội chứng thận hư mức độ nặng)</b>.",
        "- <b>Albumin huyết thanh giảm sâu 1,9 g/dL</b>, Cholesterol toàn phần tăng cao 380 mg/dL.",
        "- Creatinine 1,1 mg/dL, Bổ thể C3 và C4 bình thường, ANA âm tính, HBsAg và Anti-HCV âm tính.",
        "Xét nghiệm huyết thanh học chuyên sâu: <b>Kháng thể kháng thụ thể Phospholipase A2 màng (Anti-PLA2R Antibodies) DƯƠNG TÍNH MẠNH hiệu giá 1:320</b>."
      ],
      vitals: [
        ["Nhiệt độ", "36,8 °C"],
        ["Huyết áp", "135/85"],
        ["Mạch", "76 l/ph"],
        ["Nhịp thở", "16 l/ph"]
      ],
      stem: "Hình ảnh mô bệnh học kinh điển trên kính hiển vi điện tử / nhuộm bạc của Bệnh cầu thận màng (Membranous Nephropathy) là gì?",
      choices: [
        "Dày màng đáy cầu thận lan tỏa với hình ảnh 'Gai và Vòm' dưới biểu mô (Subepithelial 'Spike and Dome' appearance on silver stain)",
        "Xóa mờ các chân lồi của tế bào có chân (Podocyte effacement) trên kính hiển vi điện tử mà kính quang học hoàn toàn bình thường",
        "Lắng đọng phức hợp miễn dịch hình quai dây thép (Wire-loop lesions)",
        "Tăng sinh gian mạch với lắng đọng IgA",
        "Xơ hóa cầu thận từng đoạn khu trú (FSGS)"
      ],
      answer: 0,
      why: [
        "Bệnh nhân mắc <b>Bệnh cầu thận màng nguyên phát (Primary Membranous Nephropathy - MN)</b> - nguyên nhân hàng đầu gây Hội chứng thận hư ở người lớn da trắng không đái tháo đường.",
        "Cơ chế tự miễn phân tử: 70–80% các ca do <b>Tự kháng thể IgG4 kháng lại Thụ thể Phospholipase A2 màng (Anti-PLA2R Antibodies)</b> nằm trên bề mặt tế bào có chân (Podocytes) của màng lọc cầu thận.",
        "Mô bệnh học kinh điển:",
        "1. <b>Kính hiển vi quang học / Nhuộm bạc (Silver stain)</b>: Dày màng đáy cầu thận lan tỏa tạo <b>Hình ảnh 'Gai nhọn và Vòm' (Subepithelial Spikes and Dome)</b>.",
        "2. <b>Miễn dịch huỳnh quang</b>: <b>Lắng đọng IgG và C3 dạng hạt lấm tấm mịn (Granular pattern) ở lớp dưới biểu mô (Subepithelial)</b>.",
        "3. <b>Kính hiển vi điện tử</b>: Lắng đọng đậm đặc điện tử ở dưới tế bào biểu mô có chân.",
        "- Lưu ý: Bệnh nhân Bệnh cầu thận màng có <b>nguy cơ cao nhất bị Huyết khối tĩnh mạch thận (RVT) và thuyên tắc phổi</b> khi Albumin < 2,0–2,5 g/dL -> Cần dùng thuốc chống đông dự phòng.",
        "- Điều trị: ACEi/ARB kiểm soát huyết áp + Nếu nguy cơ cao dùng <b>Rituximab HOẶC Phác đồ phối hợp Corticoid + Cyclophosphamide (Phác đồ Ponticelli cải biên)</b>."
      ],
      wrongs: {
        1: "Xóa mờ chân lồi podocyte đơn thuần mà kính quang học bình thường là đặc trưng của Bệnh tổn thương tối thiểu (Minimal Change Disease) ở trẻ em.",
        2: "Wire-loop lesions là tổn thương dày thành mao mạch dưới nội mô trong Viêm thận Lupus Class IV.",
        3: "Tăng sinh gian mạch lắng đọng IgA gặp trong Bệnh thận IgA.",
        4: "FSGS là xơ hóa từng phần một số cầu thận."
      },
      objective:
        "Bệnh cầu thận màng nguyên phát (Anti-PLA2R dương tính gây hội chứng thận hư ở người lớn); mô học đặc trưng bởi dày màng đáy dạng 'Spike and Dome' dưới biểu mô trên nhuộm bạc; nguy cơ cao huyết khối tĩnh mạch thận."
    },

    {
      spec: "Thận học",
      task: "Bước chẩn đoán và tiên lượng",
      short: "Viêm cầu thận sau nhiễm liên cầu (PSGN)",
      vignette: [
        "Bé trai 9 tuổi được mẹ đưa đến khám vì <b>mắt sưng húp phù mi mắt vào buổi sáng và nước tiểu chuyển sang màu sẫm như nước coca hoặc nước rửa thịt</b>.",
        "Khai thác tiền sử: Bé từng bị một đợt <b>viêm họng sốt cao đau rát họng cách đây đúng 3 tuần</b> và đã tự khỏi.",
        "Khám: Phù mi mắt hai bên, phù mu chân nhẹ, <b>Huyết áp tăng 138/88 mm Hg</b>. Không có phát ban ngoài da.",
        "Xét nghiệm máu và nước tiểu:",
        "- Xét nghiệm nước tiểu: <b>Nhiều hồng cầu biến dạng và Trụ hồng cầu (RBC casts)</b>, Protein niệu mức độ vừa 1,2 g/24h.",
        "- <b>Nồng độ Bổ thể C3 huyết thanh GIẢM RẤT THẤP 28 mg/dL</b> (bình thường 90–180), Bổ thể C4 bình thường.",
        "- <b>Hiệu giá kháng thể kháng Streptolysin O (ASO titer) và Anti-DNase B TĂNG RẤT CAO</b>."
      ],
      vitals: [
        ["Nhiệt độ", "37,0 °C"],
        ["Huyết áp", "138/88"],
        ["Mạch", "80 l/ph"],
        ["Nhịp thở", "18 l/ph"]
      ],
      stem: "Cơ chế miễn dịch lắng đọng và tiên lượng hồi phục của bệnh cảnh Viêm cầu thận sau nhiễm liên cầu (PSGN) ở trẻ em là gì?",
      choices: [
        "Phức hợp miễn dịch lưu hành (chứa kháng nguyên liên cầu SpeB / NAPIr) lắng đọng dưới biểu mô tạo hình ảnh 'Gò đất' (Subepithelial Humps); đại đa số (>95%) trẻ em hồi phục hoàn toàn chỉ với điều trị hỗ trợ kiểm soát huyết áp và lợi tiểu",
        "Nhiễm khuẩn trực tiếp liên cầu tại mô cầu thận; cần tiêm kháng sinh liên tục 6 tháng",
        "Tiến triển thành suy thận mạn giai đoạn cuối ở 90% trường hợp",
        "Cần bắt đầu lọc máu chu kỳ ngay lập tức",
        "Chỉ định bắt buộc tiêm Corticoid liều cao kéo dài"
      ],
      answer: 0,
      why: [
        "Bệnh nhân có <b>Viêm cầu thận sau nhiễm liên cầu khuẩn (Post-Streptococcal Glomerulonephritis - PSGN)</b> do các chủng liên cầu khuẩn tan huyết beta nhóm A sinh độc tố thận (Nephritogenic Group A Streptococcus chủng 12 gây viêm họng hoặc chủng 49 gây chốc lở da).",
        "Đặc điểm nhận diện kinh điển:",
        "1. <b>Thời gian tiềm tàng</b>: Xuất hiện <b>2–4 tuần sau viêm họng</b> HOẶC <b>3–6 tuần sau chốc lở da (Impetigo)</b>.",
        "2. <b>Hội chứng viêm cầu thận cấp (Nephritic Syndrome)</b>: <b>Phù mặt + Tăng huyết áp + Đái máu đại thể có trụ hồng cầu</b>.",
        "3. <b>Xét nghiệm huyết thanh học</b>: <b>Hiệu giá ASO hoặc Anti-DNase B tăng cao + BỔ THỂ C3 GIẢM THẤP THOÁNG QUA</b> (do hoạt hóa bổ thể theo con đường nhánh thay thế).",
        "4. <b>Mô bệnh học</b>: Miễn dịch huỳnh quang thấy lắng đọng IgG và C3 dạng hạt lấm tấm 'Bầu trời đầy sao' (Starry sky pattern); kính hiển vi điện tử thấy <b>LẮNG ĐỌNG HÌNH GÒ ĐẤT DƯỚI BIỂU MÔ (SUBEPITHELIAL HUMPS)</b>.",
        "Tiên lượng và xử trí: <b>Tiên lượng ở trẻ em cực kỳ tốt (>95% hồi phục hoàn toàn không để lại di chứng)</b>. Bổ thể C3 tự bình thường hóa sau 6–8 tuần. Điều trị chủ yếu là <b>Hỗ trợ triệu chứng: Hạn chế muối nước, Thuốc lợi tiểu quai (Furosemide) và thuốc hạ huyết áp</b> (Corticoid không có chỉ định thường quy)."
      ],
      wrongs: {
        1: "PSGN là phản ứng miễn dịch sau nhiễm trùng, không phải vi khuẩn sống nhân lên tại thận; kháng sinh không làm thay đổi diễn tiến của đợt viêm cầu thận.",
        2: "Chỉ < 1% trẻ em tiến triển mạn tính (ở người lớn tiên lượng xấu hơn khoảng 20%).",
        3: "Chỉ định lọc máu rất hiếm khi chỉ khi suy thận thiểu niệu quá tải dịch nặng kháng lợi tiểu.",
        4: "Corticoid không được khuyến cáo thường quy cho PSGN điển hình."
      },
      objective:
        "PSGN (2-4 tuần sau viêm họng, phù, tăng HA, đái máu trụ hồng cầu, ASO tăng, C3 giảm thấp, lắng đọng hình gò đất subepithelial humps); tiên lượng trẻ em >95% hồi phục hoàn toàn với điều trị hỗ trợ lợi tiểu và hạ áp."
    },

    {
      spec: "Huyết học",
      task: "Bước xử trí tiếp theo",
      short: "Thiếu máu thiếu sắt ở người lớn tuổi và tầm soát ung thư tiêu hóa",
      vignette: [
        "Nam 66 tuổi đến khám vì mệt mỏi tăng dần, hoa mắt chóng mặt khi đứng dậy và giảm khả năng gắng sức 2 tháng nay. Bệnh nhân không có tiền sử bệnh lý, không dùng thuốc giảm đau NSAID, không nhận thấy đi ngoài phân đen hay chảy máu đại thể.",
        "Khám: Da xanh niêm mạc nhợt nhạt, móng tay dẹt lõm hình thìa (Koilonychia). Khám bụng mềm, không đau, không sờ thấy khối u.",
        "Xét nghiệm máu:",
        "- <b>Hemoglobin giảm nặng 7,6 g/dL, MCV giảm 68 fL (Thiếu máu hồng cầu nhỏ nhược sắc)</b>, RDW tăng cao 18,5%.",
        "- <b>Ferritin huyết thanh GIẢM RẤT THẤP 6 ng/mL (tiêu chuẩn vàng < 30 ng/mL khẳng định cạn kiệt dự trữ sắt)</b>.",
        "- Sắt huyết thanh giảm 22 mcg/dL, Khả năng gắn sắt toàn phần (TIBC) tăng cao 440 mcg/dL, <b>Độ bão hòa Transferrin giảm sâu 5% (< 15%)</b>."
      ],
      vitals: [
        ["Nhiệt độ", "36,8 °C"],
        ["Huyết áp", "115/70"],
        ["Mạch", "88 l/ph"],
        ["Nhịp thở", "16 l/ph"]
      ],
      stem: "Quy tắc lâm sàng bắt buộc nào trong thực hành y khoa đối với bệnh nhân nam giới cao tuổi (hoặc phụ nữ sau mãn kinh) có Thiếu máu thiếu sắt không rõ nguyên nhân?",
      choices: [
        "Bắt buộc coi Thiếu máu thiếu sắt ở nam giới cao tuổi là do Chảy máu đường tiêu hóa tiềm ẩn do Ung thư đường tiêu hóa (Ung thư đại trực tràng / dạ dày) cho đến khi có bằng chứng ngược lại; chỉ định Nội soi toàn bộ đại tràng (Colonoscopy) VÀ Nội soi dạ dày tá tràng (EGD)",
        "Chỉ cần kê đơn uống viên sắt Sulfat trong 6 tháng và không cần thăm dò thêm",
        "Chỉ định truyền máu và cho về theo dõi định kỳ",
        "Chụp CT sọ não tìm chảy máu nội sọ",
        "Sinh thiết tủy xương ngay lập tức"
      ],
      answer: 0,
      why: [
        "<b>QUY TẮC VÀNG BẮT BUỘC TRONG USMLE VÀ NỘI KHOA LÂM SÀNG</b>:",
        "- Bất kỳ bệnh nhân <b>Nam giới ở mọi lứa tuổi HOẶC Phụ nữ sau mãn kinh</b> xuất hiện <b>THIẾU MÁU THIẾU SẮT (Iron Deficiency Anemia: Ferritin < 30 ng/mL, MCV < 80 fL)</b> mà không có nguyên nhân mất máu rõ ràng (như hiến máu nhiều lần):",
        "- <b>BẮT BUỘC PHẢI COI LÀ DO CHẢY MÁU ĐƯỜNG TIÊU HÓA MÃN TÍNH DO UNG THƯ ĐƯỜNG TIÊU HÓA (ĐẶC BIỆT LÀ UNG THƯ ĐẠI TRÀNG PHẢI / MANH TRÀNG HOẶC UNG THƯ DẠ DÀY) CHO ĐẾN KHI ĐƯỢC CHỨNG MINH NGƯỢC LẠI</b>.",
        "- Lý do: Ung thư đại tràng bên phải (Manh tràng, Đại tràng lên) có lòng đại tràng rộng và phân còn lỏng nên <b>KHÔNG GÂY TẮC RUỘT HAY THAY ĐỔI THÓI QUEN ĐẠI TIỆN</b>, mà khối u chỉ <b>chảy máu rỉ rả vi thể lượng rất ít hàng ngày mắt thường không thấy được (Occult blood loss)</b> dẫn đến cạn kiệt toàn bộ dự trữ sắt của cơ thể.",
        "- Bước thăm dò bắt buộc đầu tay: <b>NỘI SOI TOÀN BỘ ĐẠI TRÀNG (Colonoscopy) KẾT HỢP NỘI SOI THỰC QUẢN DẠ DÀY TÁ TRÀNG (EGD)</b>.",
        "- Tuyệt đối không được chỉ kê đơn uống sắt rồi cho bệnh nhân về vì sẽ làm bỏ sót ung thư đại tràng giai đoạn có thể phẫu thuật triệt căn."
      ],
      wrongs: {
        1: "Chỉ uống sắt mà không nội soi tìm nguyên nhân là sai lầm tắc trách bỏ lỡ cơ hội phẫu thuật cứu sống bệnh nhân ung thư đại trực tràng.",
        2: "Truyền máu chỉ giải quyết triệu chứng tạm thời, không điều trị được căn nguyên mất máu tiêu hóa.",
        3: "Chảy máu nội sọ gây tai biến thần kinh cấp, không gây thiếu máu thiếu sắt mạn tính.",
        4: "Ferritin < 30 ng/mL đã khẳng định 100% thiếu sắt, không cần sinh thiết tủy xương."
      },
      objective:
        "Thiếu máu thiếu sắt ở nam giới hoặc phụ nữ sau mãn kinh BẮT BUỘC phải tầm soát Ung thư đường tiêu hóa (Ung thư đại tràng phải) bằng Nội soi đại tràng toàn bộ và Nội soi dạ dày tá tràng; cấm chỉ kê đơn uống sắt đơn thuần."
    }
  ]
};
