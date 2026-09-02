/* ==========================================================================
   Bộ đề: Nội khoa — 5 ca lâm sàng, trọng tâm chẩn đoán và bước xử trí tiếp theo.
   Đơn vị xét nghiệm theo hệ quy ước Hoa Kỳ, giống đề thi thật.
   ========================================================================== */
window.QUIZ_SET = {
  id: "noi-khoa",
  eyebrow: "USMLE Step 2 CK · Nội khoa",
  title: "Năm ca nội khoa",
  blurb: "Trọng tâm: chẩn đoán và bước xử trí tiếp theo tốt nhất. Chọn đáp án trước, giải thích hiện sau.",

  cases: [
    {
      spec: "Tim mạch",
      task: "Bước xử trí tiếp theo",
      short: "Đau ngực + tụt huyết áp sau nitroglycerin",
      vignette: [
        "Nam 64 tuổi vào khoa cấp cứu vì đau thắt ngực sau xương ức dữ dội, khởi phát 90 phút trước, lan xuống thượng vị, kèm vã mồ hôi và buồn nôn. Tiền sử tăng huyết áp, hút thuốc 40 gói-năm. Chưa từng đau ngực kiểu này.",
        "Điện tâm đồ: ST chênh lên 2,5 mm ở DII, DIII và aVF; ST chênh xuống soi gương ở DI và aVL. Bệnh nhân được nhai aspirin 325 mg và ngậm dưới lưỡi nitroglycerin.",
        "Năm phút sau, bệnh nhân lơ mơ, da lạnh ẩm. Huyết áp 74/48 mm Hg. Tĩnh mạch cổ nổi rõ tới góc hàm khi nằm đầu cao 45°. Phổi trong hai bên. Tim nhịp đều, không tiếng thổi, không T3. Phòng thông tim đã được kích hoạt, dự kiến can thiệp sau 25 phút."
      ],
      vitals: [
        ["Nhiệt độ", "36,8 °C"],
        ["Huyết áp", "74/48"],
        ["Mạch", "54 l/ph"],
        ["Nhịp thở", "20 l/ph"],
        ["SpO2", "96% khí trời"]
      ],
      stem: "Bước xử trí tiếp theo tốt nhất cho bệnh nhân này là gì?",
      choices: [
        "Truyền nhanh 500 mL NaCl 0,9% tĩnh mạch",
        "Bắt đầu truyền dopamine liều tăng dần",
        "Tiêm tĩnh mạch furosemide 40 mg",
        "Cho thêm nitroglycerin và metoprolol tĩnh mạch",
        "Đặt bóng đối xung động mạch chủ trước khi chuyển phòng thông tim"
      ],
      answer: 0,
      why: [
        "Tam chứng <b>tụt huyết áp + tĩnh mạch cổ nổi + phổi trong</b> xuất hiện ngay sau khi dùng nitrat, trên nền <b>nhồi máu cơ tim ST chênh lên thành dưới</b>, là hình ảnh kinh điển của <b>nhồi máu thất phải</b> do tắc động mạch vành phải đoạn gần. Khoảng 40% nhồi máu thành dưới có kèm tổn thương thất phải.",
        "Thất phải bị nhồi máu mất khả năng bơm máu chủ động nên <b>cung lượng tim phụ thuộc hoàn toàn vào tiền tải</b>. Bất kỳ thuốc nào giảm tiền tải — nitrat, lợi tiểu, morphine — đều gây tụt huyết áp đột ngột, đúng như diễn biến ở đây. Xử trí đầu tay là <b>bù dịch tinh thể</b> để nâng áp lực đổ đầy thất phải, đồng thời nhanh chóng <b>tái tưới máu bằng can thiệp mạch vành</b>.",
        "Chẩn đoán được khẳng định bằng <b>điện tâm đồ chuyển đạo bên phải</b>: ST chênh lên ≥1 mm ở V4R. Hãy làm V4R cho mọi trường hợp nhồi máu thành dưới trước khi cho nitrat."
      ],
      wrongs: {
        1: "Thuốc vận mạch chỉ đặt ra khi đã bù đủ dịch (thường 1–2 L) mà huyết áp vẫn thấp; khi đó dobutamine được ưu tiên vì cải thiện co bóp thất phải. Dùng vận mạch trước khi bù tiền tải là chữa ngọn.",
        2: "Furosemide làm giảm thêm tiền tải, đẩy bệnh nhân vào sốc sâu hơn. Phổi trong hai bên đã loại trừ quá tải dịch — không có chỉ định lợi tiểu.",
        3: "Đây là sai lầm nguy hiểm nhất trong nhóm. Nitrat thêm sẽ lặp lại đúng cơ chế vừa gây tụt huyết áp, còn chẹn beta tĩnh mạch chống chỉ định khi có dấu hiệu sốc tim và nhịp chậm (mạch 54 l/ph).",
        4: "Bóng đối xung dành cho sốc tim kháng trị hoặc biến chứng cơ học (hở van hai lá cấp, thủng vách liên thất). Nó xâm lấn, làm chậm tái tưới máu, và không giải quyết vấn đề cốt lõi ở đây là thiếu tiền tải."
      },
      objective:
        "Nhồi máu cơ tim thành dưới kèm tụt huyết áp, tĩnh mạch cổ nổi và phổi trong gợi ý nhồi máu thất phải. Khẳng định bằng ST chênh lên ở V4R, xử trí bằng bù dịch tĩnh mạch và tái tưới máu sớm; tuyệt đối tránh nitrat, lợi tiểu và morphine."
    },

    {
      spec: "Hô hấp",
      task: "Bước tiếp theo trong chẩn đoán",
      short: "Viêm phổi không đáp ứng kháng sinh",
      vignette: [
        "Nam 58 tuổi nhập viện ngày thứ tư vì viêm phổi thùy dưới phải mắc phải cộng đồng, đang dùng ceftriaxone và azithromycin đường tĩnh mạch đúng liều. Tiền sử đái tháo đường típ 2 và nghiện rượu.",
        "Bệnh nhân vẫn sốt cao dao động, đau ngực kiểu màng phổi bên phải tăng lên, khó thở khi gắng sức nhẹ. Khám: rì rào phế nang mất ở đáy phổi phải, gõ đục, không có tiếng cọ màng phổi.",
        "X-quang ngực hôm nay cho thấy vùng đông đặc thùy dưới phải không thay đổi, kèm mờ góc sườn hoành phải nhiều hơn phim nhập viện. Phim nằm nghiêng phải đo được lớp dịch tự do dày 26 mm. Hai mẫu cấy máu đều âm tính."
      ],
      vitals: [
        ["Nhiệt độ", "38,9 °C"],
        ["Huyết áp", "118/70"],
        ["Mạch", "104 l/ph"],
        ["Nhịp thở", "24 l/ph"],
        ["SpO2", "92% khí trời"]
      ],
      labs: {
        title: "Xét nghiệm hôm nay",
        rows: [
          ["Bạch cầu", "19.400/mm³", "4.000–11.000", "hi"],
          ["Bạch cầu đa nhân trung tính", "86%", "40–70", "hi"],
          ["Hemoglobin", "11,8 g/dL", "13,5–17,5", "lo"],
          ["Creatinine", "0,9 mg/dL", "0,6–1,2", ""],
          ["Albumin", "2,9 g/dL", "3,5–5,5", "lo"]
        ]
      },
      stem: "Bước tiếp theo tốt nhất trong xử trí bệnh nhân này là gì?",
      choices: [
        "Chọc dò dịch màng phổi chẩn đoán",
        "Đổi kháng sinh sang piperacillin-tazobactam kết hợp vancomycin",
        "Chụp cắt lớp vi tính ngực có cản quang",
        "Đặt ống dẫn lưu màng phổi ngay",
        "Tiếp tục phác đồ hiện tại và đánh giá lại sau 48 giờ"
      ],
      answer: 0,
      why: [
        "Bệnh nhân viêm phổi <b>không cải thiện sau 72 giờ kháng sinh phù hợp</b> kèm <b>tràn dịch màng phổi dày trên 10 mm</b> trên phim nằm nghiêng — đây là chỉ định kinh điển của <b>chọc dò dịch màng phổi chẩn đoán</b>. Câu hỏi cần trả lời không phải là kháng sinh có đủ mạnh chưa, mà là đã có ổ nhiễm khu trú cần dẫn lưu hay chưa.",
        "Dịch chọc ra được phân tích: <b>pH, glucose, LDH, protein, nhuộm Gram và cấy</b>. Kết quả phân tầng thành ba nhóm và quyết định điều trị: tràn dịch cận viêm phổi <i>không biến chứng</i> (pH &gt; 7,2; glucose &gt; 60 mg/dL; cấy âm) chỉ cần kháng sinh; <i>có biến chứng</i> (pH &lt; 7,2; glucose &lt; 60 mg/dL; LDH &gt; 1.000 U/L hoặc cấy dương) cần dẫn lưu; <i>mủ màng phổi</i> (hút ra mủ đại thể) cần dẫn lưu ngay, thường kèm tiêu sợi huyết trong màng phổi hoặc phẫu thuật.",
        "Nghiện rượu và albumin thấp là yếu tố nguy cơ của viêm phổi hít với vi khuẩn kỵ khí — nhóm rất dễ tiến triển thành mủ màng phổi vách hóa nếu chọc dò bị trì hoãn."
      ],
      wrongs: {
        1: "Mở rộng phổ kháng sinh theo kinh nghiệm không dẫn lưu được ổ dịch nhiễm khuẩn. Kháng sinh khuếch tán kém vào khoang màng phổi có mủ, và quyết định đổi thuốc nên dựa trên kết quả cấy dịch chứ không phải phỏng đoán.",
        2: "Cắt lớp vi tính rất hữu ích để đánh giá vách hóa, áp xe phổi hay tắc nghẽn phế quản, nhưng hình ảnh không cho biết pH hay glucose dịch màng phổi — tức là không thay thế được chọc dò trong quyết định có dẫn lưu hay không. Nó là bước sau, không phải bước tiếp theo.",
        3: "Dẫn lưu là thủ thuật xâm lấn và chỉ đặt ra khi dịch đạt tiêu chuẩn tràn dịch có biến chứng hoặc hút ra mủ đại thể. Ở đây chưa có dữ kiện nào cho phép kết luận điều đó.",
        4: "Bệnh nhân đã thất bại điều trị sau 72 giờ và có tràn dịch đáng kể. Chờ thêm 48 giờ cho phép fibrin lắng đọng tạo vách, làm dẫn lưu về sau khó khăn hơn nhiều và làm tăng tỉ lệ tử vong."
      },
      objective:
        "Bệnh nhân viêm phổi không cải thiện sau 48–72 giờ kháng sinh mà có tràn dịch màng phổi dày trên 10 mm phải được chọc dò chẩn đoán. Đặc điểm sinh hóa và vi sinh của dịch — chứ không phải hình ảnh học — quyết định có cần dẫn lưu hay không."
    },

    {
      spec: "Tiêu hóa – Gan mật",
      task: "Can thiệp giảm tử vong",
      short: "Nôn ra máu trên nền xơ gan",
      vignette: [
        "Nam 54 tuổi xơ gan do rượu (Child-Pugh B) được đưa vào cấp cứu sau hai lần nôn ra máu đỏ tươi lượng nhiều tại nhà. Nội soi cách đây một năm ghi nhận giãn tĩnh mạch thực quản độ II, bệnh nhân đã tự bỏ thuốc từ sáu tháng nay.",
        "Khám: lơ mơ nhẹ nhưng định hướng được, củng mạc vàng, sao mạch ở ngực, cổ trướng lượng vừa, không đau bụng khu trú, không dấu hiệu màng não. Thăm trực tràng có phân đen.",
        "Bệnh nhân đã được đặt hai đường truyền lớn, truyền 1.500 mL dịch tinh thể và một đơn vị hồng cầu lắng, bắt đầu octreotide tĩnh mạch và truyền pantoprazole. Đội nội soi đã được báo, dự kiến nội soi cấp cứu trong 6 giờ tới."
      ],
      vitals: [
        ["Nhiệt độ", "37,2 °C"],
        ["Huyết áp", "92/58"],
        ["Mạch", "112 l/ph"],
        ["Nhịp thở", "22 l/ph"],
        ["SpO2", "97% khí trời"]
      ],
      labs: {
        title: "Xét nghiệm lúc nhập viện",
        rows: [
          ["Hemoglobin", "8,2 g/dL", "13,5–17,5", "lo"],
          ["Tiểu cầu", "74.000/mm³", "150.000–400.000", "lo"],
          ["INR", "1,9", "0,8–1,1", "hi"],
          ["Bilirubin toàn phần", "3,4 mg/dL", "0,3–1,2", "hi"],
          ["Albumin", "2,6 g/dL", "3,5–5,5", "lo"],
          ["Creatinine", "1,1 mg/dL", "0,6–1,2", ""]
        ]
      },
      stem: "Ngoài các biện pháp đã thực hiện, can thiệp nào sau đây làm giảm tử vong nhiều nhất ở bệnh nhân này?",
      choices: [
        "Ceftriaxone tĩnh mạch",
        "Truyền huyết tương tươi đông lạnh để đưa INR về dưới 1,5",
        "Truyền hồng cầu lắng cho tới khi hemoglobin đạt trên 10 g/dL",
        "Bắt đầu propranolol đường uống ngay",
        "Đặt TIPS cấp cứu trước khi nội soi"
      ],
      answer: 0,
      why: [
        "Mọi bệnh nhân <b>xơ gan có xuất huyết tiêu hóa trên</b> đều phải được <b>kháng sinh dự phòng</b>, thường là ceftriaxone 1 g tĩnh mạch mỗi 24 giờ trong 7 ngày — <b>bất kể có cổ trướng hay không, bất kể nguồn chảy máu là giãn tĩnh mạch hay loét</b>.",
        "Đây là một trong số rất ít can thiệp trong bệnh cảnh này được chứng minh <b>giảm tử vong</b>, chứ không chỉ giảm biến chứng. Xuất huyết làm vi khuẩn từ lòng ruột chuyển vị mạnh, trong khi xơ gan gây suy giảm miễn dịch: hậu quả là viêm phúc mạc nhiễm khuẩn tiên phát và nhiễm khuẩn huyết. Kháng sinh dự phòng làm giảm cả nhiễm khuẩn, <b>tỉ lệ chảy máu tái phát</b> lẫn tử vong.",
        "Cùng với đó, ba trụ cột còn lại của xử trí cấp là thuốc co mạch tạng (octreotide), hồi sức hạn chế, và nội soi trong vòng 12 giờ để thắt búi giãn."
      ],
      wrongs: {
        1: "INR ở bệnh nhân xơ gan <b>không</b> phản ánh nguy cơ chảy máu, vì gan giảm tổng hợp đồng thời cả yếu tố đông máu lẫn yếu tố kháng đông (protein C, S, antithrombin). Truyền huyết tương thường quy làm tăng thể tích tuần hoàn, kéo theo tăng áp lực tĩnh mạch cửa và làm chảy máu nặng thêm.",
        2: "Ngược với trực giác: chiến lược truyền máu <b>hạn chế</b> — chỉ truyền khi hemoglobin dưới 7 g/dL, đích 7–9 g/dL — cho tỉ lệ sống cao hơn rõ rệt. Truyền phóng khoáng làm tăng áp lực cửa và tăng chảy máu tái phát.",
        3: "Chẹn beta không chọn lọc là thuốc <b>dự phòng</b> chảy máu, dùng sau khi ổn định. Trong giai đoạn cấp, nó làm mất đáp ứng nhịp nhanh bù trừ và gây tụt huyết áp ở bệnh nhân đang giảm thể tích.",
        4: "TIPS cấp cứu là biện pháp cứu vãn khi nội soi thất bại không cầm được máu. TIPS sớm trong 72 giờ có thể cân nhắc ở nhóm nguy cơ rất cao, nhưng luôn là <b>sau</b> nội soi chứ không phải thay thế nội soi."
      },
      objective:
        "Kháng sinh dự phòng bằng ceftriaxone là bắt buộc cho mọi bệnh nhân xơ gan có xuất huyết tiêu hóa trên và là một trong ít can thiệp làm giảm tử vong. Đi kèm là octreotide, chiến lược truyền máu hạn chế với ngưỡng hemoglobin 7 g/dL, và nội soi trong 12 giờ."
    },

    {
      spec: "Nội tiết",
      task: "Xét nghiệm chẩn đoán tiếp theo",
      short: "Tăng huyết áp kháng trị kèm hạ kali máu",
      vignette: [
        "Nữ 47 tuổi tái khám vì huyết áp không kiểm soát được suốt bốn năm. Hiện dùng đủ liều lisinopril 40 mg, amlodipine 10 mg và hydrochlorothiazide 25 mg mỗi ngày; bệnh nhân uống thuốc đều, có sổ theo dõi huyết áp tại nhà xác nhận số đo tương tự.",
        "Bệnh nhân than mệt mỏi, chuột rút bắp chân về đêm và tiểu đêm ba đến bốn lần. Không nôn, không tiêu chảy, không dùng thuốc nhuận tràng hay lợi tiểu nào khác, không ăn cam thảo. Không cơn đau đầu kịch phát, không hồi hộp, không vã mồ hôi từng cơn.",
        "Khám: BMI 27 kg/m², không phù ngoại vi, không tiếng thổi ở bụng, không béo trung tâm, không vết rạn da tím, không yếu cơ gốc chi. Kali máu vẫn thấp dai dẳng dù đã bổ sung kali clorid uống 40 mEq mỗi ngày trong hai tháng."
      ],
      vitals: [
        ["Huyết áp", "168/102"],
        ["Mạch", "76 l/ph"],
        ["BMI", "27 kg/m²"],
        ["Nhịp thở", "14 l/ph"]
      ],
      labs: {
        title: "Sinh hóa máu",
        rows: [
          ["Natri", "144 mEq/L", "135–145", ""],
          ["Kali", "3,0 mEq/L", "3,5–5,0", "lo"],
          ["Bicarbonat", "31 mEq/L", "22–28", "hi"],
          ["Creatinine", "0,9 mg/dL", "0,6–1,2", ""],
          ["Glucose đói", "96 mg/dL", "70–100", ""],
          ["Kali niệu 24 giờ", "48 mEq/24h", "< 30 khi hạ kali máu", "hi"]
        ]
      },
      stem: "Xét nghiệm nào sau đây là bước tiếp theo tốt nhất để xác định nguyên nhân?",
      choices: [
        "Tỉ số aldosterone trên renin huyết tương",
        "Định lượng metanephrine tự do huyết tương",
        "Chụp cắt lớp vi tính bụng có cản quang",
        "Cortisol tự do nước tiểu 24 giờ",
        "Siêu âm Doppler động mạch thận"
      ],
      answer: 0,
      why: [
        "Bộ ba <b>tăng huyết áp kháng trị</b> (chưa kiểm soát dù dùng ba thuốc trong đó có lợi tiểu), <b>hạ kali máu</b> với <b>mất kali qua thận</b> (kali niệu trên 30 mEq/24h trong khi kali máu thấp) và <b>kiềm chuyển hóa</b> hướng thẳng tới <b>cường aldosterone nguyên phát</b> — nguyên nhân tăng huyết áp thứ phát nội tiết thường gặp nhất.",
        "Xét nghiệm tầm soát là <b>tỉ số aldosterone/renin huyết tương</b>. Kết quả điển hình: aldosterone huyết tương tăng (≥15 ng/dL) trong khi hoạt độ renin bị <b>ức chế</b>, tỉ số ≥20. Điểm mấu chốt phân biệt với các nguyên nhân khác chính là renin thấp: aldosterone tiết tự chủ ức chế ngược hệ renin-angiotensin.",
        "Quy trình sau đó theo đúng thứ tự: <b>khẳng định sinh hóa</b> (nghiệm pháp truyền muối hoặc captopril) → <b>chụp cắt lớp thượng thận</b> → <b>lấy máu tĩnh mạch thượng thận</b> để phân biệt u tuyến một bên (cắt bỏ) với tăng sản hai bên (spironolactone). Lưu ý thực hành: nên bù kali trước khi xét nghiệm và ngưng thuốc kháng aldosterone 4–6 tuần; ức chế men chuyển làm renin tăng nên có thể gây âm tính giả — renin vẫn bị ức chế trong khi đang dùng lisinopril càng củng cố chẩn đoán."
      ],
      wrongs: {
        1: "U tủy thượng thận biểu hiện bằng cơn kịch phát: đau đầu, hồi hộp, vã mồ hôi trên nền huyết áp dao động. Bệnh nhân này hoàn toàn không có triệu chứng kịch phát, và u tủy thượng thận không gây hạ kali máu kèm kiềm chuyển hóa.",
        2: "Chụp hình ảnh trước khi khẳng định sinh hóa là sai lầm cổ điển. Khoảng 4% người trưởng thành có u thượng thận phát hiện tình cờ không chức năng; thấy một khối trên phim mà chưa chứng minh nó tiết aldosterone có thể dẫn tới cắt tuyến thượng thận sai bên hoặc không cần thiết.",
        3: "Hội chứng Cushing cần được nghĩ tới khi có béo trung tâm, mặt tròn, vết rạn da tím, yếu cơ gốc chi, tăng đường huyết, bầm tím dễ — đều không có ở đây. Hạ kali máu nặng trong Cushing chủ yếu gặp ở thể tiết ACTH lạc chỗ, thường kèm sụt cân và tăng sắc tố da.",
        4: "Hẹp động mạch thận gợi ý bởi tiếng thổi ở bụng, phù phổi chớp nhoáng, creatinine tăng sau khi dùng ức chế men chuyển, hoặc bệnh cảnh loạn sản xơ cơ ở phụ nữ trẻ. Quan trọng hơn về cơ chế: đây là cường aldosterone <b>thứ phát</b>, nên renin sẽ <b>tăng</b> chứ không bị ức chế."
      },
      objective:
        "Tăng huyết áp kháng trị kèm hạ kali máu do mất qua thận và kiềm chuyển hóa là bệnh cảnh của cường aldosterone nguyên phát. Tầm soát bằng tỉ số aldosterone/renin huyết tương trước, khẳng định bằng nghiệm pháp ức chế, rồi mới chụp hình ảnh — không bao giờ chụp trước."
    },

    {
      spec: "Huyết học",
      task: "Bước xử trí tiếp theo",
      short: "Giảm tiểu cầu hậu phẫu kèm huyết khối mới",
      vignette: [
        "Nam 68 tuổi đang nằm viện ngày hậu phẫu thứ bảy sau thay khớp háng phải theo chương trình. Bệnh nhân được dự phòng huyết khối bằng heparin không phân đoạn tiêm dưới da từ ngày phẫu thuật. Hậu phẫu trước đó diễn tiến thuận lợi, vết mổ khô, không sốt.",
        "Sáng nay bệnh nhân than đau và sưng bắp chân trái — bên đối diện với chân được mổ. Khám: chân trái sưng nề, chu vi bắp chân lớn hơn bên phải 4 cm, ấn đau dọc tĩnh mạch. Không xuất huyết da niêm, không chảy máu vết mổ, không chảy máu chân răng.",
        "Siêu âm Doppler: huyết khối tĩnh mạch sâu đùi – khoeo trái. Không có bằng chứng nhiễm khuẩn; bệnh nhân không dùng thuốc mới nào ngoài paracetamol và heparin dự phòng."
      ],
      vitals: [
        ["Nhiệt độ", "37,0 °C"],
        ["Huyết áp", "134/78"],
        ["Mạch", "88 l/ph"],
        ["Nhịp thở", "16 l/ph"],
        ["SpO2", "97% khí trời"]
      ],
      labs: {
        title: "Diễn biến tiểu cầu",
        rows: [
          ["Tiểu cầu — ngày nhập viện", "265.000/mm³", "150.000–400.000", ""],
          ["Tiểu cầu — hậu phẫu ngày 4", "198.000/mm³", "150.000–400.000", ""],
          ["Tiểu cầu — hôm nay", "78.000/mm³", "150.000–400.000", "lo"],
          ["Hemoglobin", "11,9 g/dL", "13,5–17,5", "lo"],
          ["INR", "1,1", "0,8–1,1", ""],
          ["Fibrinogen", "390 mg/dL", "200–400", ""],
          ["Creatinine", "1,0 mg/dL", "0,6–1,2", ""]
        ]
      },
      stem: "Bước xử trí tiếp theo tốt nhất là gì?",
      choices: [
        "Ngưng toàn bộ heparin và bắt đầu argatroban",
        "Ngưng heparin và bắt đầu warfarin",
        "Chuyển sang enoxaparin liều điều trị",
        "Truyền khối tiểu cầu và đặt lưới lọc tĩnh mạch chủ dưới",
        "Ngưng heparin và theo dõi tiểu cầu, chưa dùng kháng đông"
      ],
      answer: 0,
      why: [
        "Bệnh cảnh khớp trọn vẹn với <b>giảm tiểu cầu do heparin</b>: tiểu cầu giảm hơn 50% so với nền, thời điểm khởi phát <b>ngày 5–10</b> sau khi bắt đầu heparin, <b>huyết khối mới</b> xuất hiện, và không có nguyên nhân giải thích nào khác. Đó chính là bốn tiêu chí của thang điểm 4T ở mức nguy cơ cao.",
        "Điều quan trọng nhất phải nhớ: <b>đây là bệnh lý tăng đông, không phải bệnh lý chảy máu</b>. Kháng thể kháng phức hợp yếu tố tiểu cầu 4 – heparin hoạt hóa tiểu cầu ồ ạt, sinh ra thrombin; tiểu cầu tụt là vì bị tiêu thụ trong quá trình tạo huyết khối. Nguy cơ huyết khối mới lên tới khoảng 50% trong 30 ngày kế tiếp nếu không kháng đông.",
        "Xử trí gồm hai vế phải làm cùng lúc: <b>ngưng mọi nguồn heparin</b> (kể cả dịch tráng catheter, heparin phủ ống thông, và mọi heparin trọng lượng phân tử thấp) <b>và bắt đầu ngay kháng đông không phải heparin</b> — thuốc ức chế thrombin trực tiếp như argatroban hoặc bivalirudin, hoặc fondaparinux/thuốc kháng đông đường uống thế hệ mới. Gửi xét nghiệm kháng thể kháng PF4-heparin nhưng <b>không chờ kết quả</b> mới điều trị."
      ],
      wrongs: {
        1: "Warfarin đơn độc trong giai đoạn cấp là chống chỉ định. Warfarin làm giảm protein C nhanh hơn các yếu tố đông máu, tạo trạng thái tăng đông thoáng qua gây <b>hoại tử da do warfarin</b> và hoại thư chi. Chỉ bắt đầu warfarin khi tiểu cầu đã hồi phục trên 150.000 và phải gối đầu ít nhất 5 ngày với thuốc kháng đông không heparin.",
        2: "Heparin trọng lượng phân tử thấp <b>phản ứng chéo</b> với kháng thể kháng PF4-heparin ở phần lớn trường hợp, nên hoàn toàn chống chỉ định trong bệnh lý này. Đây là bẫy hay gặp nhất của dạng câu hỏi này.",
        3: "Không có chỉ định truyền tiểu cầu khi bệnh nhân không chảy máu — cung cấp thêm tiểu cầu chỉ đổ thêm cơ chất cho quá trình tạo huyết khối. Lưới lọc tĩnh mạch chủ dưới càng làm tăng nguy cơ huyết khối và không thay thế được kháng đông.",
        4: "Chỉ ngưng heparin là chưa đủ. Kháng thể vẫn tồn tại và tiếp tục hoạt hóa tiểu cầu nhiều tuần; bệnh nhân này đã có huyết khối tĩnh mạch sâu nên càng bắt buộc phải kháng đông."
      },
      objective:
        "Tiểu cầu giảm trên 50% vào ngày 5–10 dùng heparin kèm huyết khối mới là giảm tiểu cầu do heparin. Phải ngưng mọi nguồn heparin đồng thời bắt đầu ngay một thuốc kháng đông không heparin; tránh heparin trọng lượng phân tử thấp, warfarin đơn độc và truyền tiểu cầu."
    }
  ]
};
