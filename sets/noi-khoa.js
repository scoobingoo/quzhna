/* ==========================================================================
   Bộ đề: Nội khoa — 30 ca lâm sàng, trọng tâm chẩn đoán và bước xử trí tiếp theo.
   Đơn vị xét nghiệm theo hệ quy ước Hoa Kỳ, giống đề thi thật.
   ========================================================================== */
window.QUIZ_SET = {
  id: "noi-khoa",
  eyebrow: "USMLE Step 2 CK · Nội khoa",
  title: "Nội khoa",
  blurb: "30 ca nội khoa qua 10 chuyên khoa. Trọng tâm: chẩn đoán và bước xử trí tiếp theo tốt nhất — chọn đáp án trước, giải thích hiện sau.",

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
    },

    {
      spec: "Thận – Điện giải",
      task: "Bước xử trí tiếp theo",
      short: "Hạ natri máu nặng kèm co giật",
      vignette: [
        "Nữ 68 tuổi được đưa vào cấp cứu sau một cơn co giật toàn thể kéo dài hai phút tại nhà. Trong hai tuần qua người nhà thấy bà lơ mơ dần, ăn kém, buồn nôn và nói lẫn. Tiền sử ung thư phổi tế bào nhỏ mới chẩn đoán ba tháng trước, hiện chưa điều trị đặc hiệu.",
        "Khám: lơ mơ, mở mắt khi gọi to, không dấu thần kinh khu trú, không cứng gáy. Niêm mạc ẩm, không phù ngoại vi, tĩnh mạch cổ không nổi, huyết áp không thay đổi theo tư thế. Không dùng lợi tiểu, không nôn hay tiêu chảy.",
        "Áp lực thẩm thấu máu đo được 248 mOsm/kg; áp lực thẩm thấu niệu 512 mOsm/kg; natri niệu 62 mEq/L. Chức năng tuyến giáp và cortisol buổi sáng bình thường."
      ],
      vitals: [
        ["Nhiệt độ", "36,9 °C"],
        ["Huyết áp", "126/76"],
        ["Mạch", "82 l/ph"],
        ["Nhịp thở", "16 l/ph"],
        ["SpO2", "96% khí trời"]
      ],
      labs: {
        title: "Xét nghiệm lúc nhập viện",
        rows: [
          ["Natri", "112 mEq/L", "135–145", "lo"],
          ["Kali", "3,9 mEq/L", "3,5–5,0", ""],
          ["Bicarbonat", "24 mEq/L", "22–28", ""],
          ["Creatinine", "0,7 mg/dL", "0,6–1,2", ""],
          ["Ure máu", "8 mg/dL", "7–20", "lo"],
          ["Acid uric", "2,1 mg/dL", "3,5–7,2", "lo"],
          ["Glucose", "94 mg/dL", "70–100", ""]
        ]
      },
      stem: "Bước xử trí tiếp theo tốt nhất là gì?",
      choices: [
        "Truyền natri clorid 3% ưu trương",
        "Hạn chế nước dưới 800 mL mỗi ngày",
        "Truyền natri clorid 0,9% đẳng trương nhanh",
        "Bắt đầu tolvaptan đường uống",
        "Tiêm tĩnh mạch furosemide kèm bù natri clorid uống"
      ],
      answer: 0,
      why: [
        "Bệnh nhân có <b>hạ natri máu nặng kèm triệu chứng thần kinh nặng</b> (co giật, rối loạn ý thức). Khi đã có co giật hoặc hôn mê, nguyên nhân không còn quan trọng bằng việc <b>nâng natri cấp cứu bằng dung dịch ưu trương</b> — thường 100–150 mL NaCl 3% truyền trong 10–20 phút, lặp lại tới ba lần cho tới khi triệu chứng cải thiện.",
        "Mục tiêu là nâng natri <b>4–6 mEq/L trong vài giờ đầu</b>, đủ để cắt phù não và chấm dứt co giật. Sau khi triệu chứng đã lui, tốc độ điều chỉnh phải chậm lại, <b>không vượt quá 8 mEq/L trong 24 giờ</b> để tránh hội chứng hủy myelin do thẩm thấu.",
        "Bức tranh sinh hóa là <b>SIADH</b> kinh điển: hạ natri nhược trương, thể tích dịch ngoại bào bình thường trên lâm sàng, nước tiểu <b>cô đặc không thích hợp</b> (áp lực thẩm thấu niệu &gt; 100 mOsm/kg), natri niệu &gt; 40 mEq/L, kèm ure và acid uric thấp do pha loãng và tăng thải. Ung thư phổi tế bào nhỏ là nguyên nhân tiết ADH lạc chỗ điển hình."
      ],
      wrongs: {
        1: "Hạn chế nước là nền tảng điều trị SIADH <b>mạn tính, không triệu chứng</b>. Nó nâng natri quá chậm — vài mEq mỗi ngày — nên hoàn toàn không phù hợp với bệnh nhân đang co giật vì phù não.",
        2: "Trong SIADH, truyền dịch đẳng trương có thể làm natri <b>giảm thêm</b>: thận đang cô đặc nước tiểu mạnh sẽ thải natri vừa truyền ra ngoài dưới thể tích nước tiểu nhỏ và giữ lại nước tự do. Đây là bẫy hay gặp.",
        3: "Tolvaptan (đối kháng thụ thể vasopressin) chỉ dùng cho SIADH mạn kháng trị, có nguy cơ điều chỉnh natri quá nhanh và gây độc gan; không dùng trong cấp cứu thần kinh.",
        4: "Phối hợp lợi tiểu quai với muối uống là chiến lược duy trì dài hạn cho SIADH, tác dụng chậm và khó kiểm soát tốc độ — không dùng khi bệnh nhân đang co giật."
      },
      objective:
        "Hạ natri máu kèm co giật hoặc hôn mê là cấp cứu: truyền ngay NaCl 3% để nâng natri 4–6 mEq/L, sau đó giới hạn tốc độ dưới 8 mEq/L trong 24 giờ. Áp lực thẩm thấu niệu cao, natri niệu cao, ure và acid uric thấp trên nền thể tích bình thường xác định SIADH."
    },

    {
      spec: "Nhiễm khuẩn",
      task: "Bước xử trí tiếp theo",
      short: "Sốt, cứng gáy, phù gai thị",
      vignette: [
        "Nam 56 tuổi vào cấp cứu vì sốt cao, đau đầu dữ dội tăng dần trong 18 giờ và nôn vọt. Người nhà kể bệnh nhân bắt đầu lú lẫn từ hai giờ trước. Tiền sử cắt lách sau chấn thương cách đây tám năm.",
        "Khám: điểm Glasgow 13, cứng gáy rõ, dấu Kernig dương tính. Soi đáy mắt thấy <b>phù gai thị hai bên</b>. Không có yếu liệt khu trú, đồng tử đều và phản xạ ánh sáng tốt. Da không có ban xuất huyết.",
        "Bác sĩ trực dự định chọc dịch não tủy ngay tại giường."
      ],
      vitals: [
        ["Nhiệt độ", "39,4 °C"],
        ["Huyết áp", "142/84"],
        ["Mạch", "116 l/ph"],
        ["Nhịp thở", "22 l/ph"],
        ["SpO2", "95% khí trời"]
      ],
      labs: {
        title: "Xét nghiệm cấp cứu",
        rows: [
          ["Bạch cầu", "22.800/mm³", "4.000–11.000", "hi"],
          ["Bạch cầu đa nhân trung tính", "89%", "40–70", "hi"],
          ["Tiểu cầu", "180.000/mm³", "150.000–400.000", ""],
          ["Natri", "136 mEq/L", "135–145", ""],
          ["Creatinine", "1,0 mg/dL", "0,6–1,2", ""]
        ]
      },
      stem: "Trình tự xử trí đúng nhất cho bệnh nhân này là gì?",
      choices: [
        "Cấy máu, tiêm ngay dexamethasone và kháng sinh, chụp cắt lớp sọ não, rồi mới chọc dịch não tủy",
        "Chọc dịch não tủy ngay lập tức rồi mới dùng kháng sinh",
        "Chụp cắt lớp sọ não trước, chọc dịch não tủy sau, rồi mới dùng kháng sinh",
        "Tiêm kháng sinh rồi theo dõi, chỉ chọc dịch não tủy nếu không cải thiện sau 24 giờ",
        "Bắt đầu acyclovir tĩnh mạch đơn thuần và chụp cộng hưởng từ sọ não"
      ],
      answer: 0,
      why: [
        "Bệnh nhân có <b>phù gai thị</b> và <b>rối loạn ý thức</b> — hai trong số các chỉ định bắt buộc phải <b>chụp cắt lớp sọ não trước khi chọc dịch não tủy</b> (cùng với dấu thần kinh khu trú, co giật mới khởi phát, suy giảm miễn dịch, tiền sử bệnh lý thần kinh trung ương). Chọc dò khi có khối choán chỗ hoặc tăng áp lực nội sọ có nguy cơ gây tụt kẹt não.",
        "Nhưng chụp phim <b>không được làm chậm kháng sinh</b>. Trình tự chuẩn là: <b>cấy máu → dexamethasone + kháng sinh theo kinh nghiệm → chụp cắt lớp → chọc dịch não tủy</b>. Cấy máu vẫn dương tính ở khoảng 50–70% trường hợp, và dù dịch não tủy có thể mất khả năng mọc vi khuẩn sau vài giờ, số lượng tế bào, protein và glucose vẫn giữ nguyên giá trị chẩn đoán.",
        "<b>Dexamethasone phải được tiêm trước hoặc cùng lúc với liều kháng sinh đầu tiên</b>: nó làm giảm di chứng thần kinh và tử vong trong viêm màng não do phế cầu, nhưng mất tác dụng nếu tiêm sau khi vi khuẩn đã ly giải. Bệnh nhân <b>cắt lách</b> đặc biệt dễ nhiễm vi khuẩn có vỏ — phế cầu, não mô cầu, <i>Haemophilus influenzae</i>. Phác đồ kinh nghiệm cho người trưởng thành: vancomycin cộng ceftriaxone."
      ],
      wrongs: {
        1: "Chọc dịch não tủy ngay là đúng ở phần lớn bệnh nhân viêm màng não, nhưng chống chỉ định tương đối khi có phù gai thị và rối loạn ý thức vì nguy cơ tụt kẹt não.",
        2: "Đúng về mặt trình tự hình ảnh nhưng <b>sai ở chỗ trì hoãn kháng sinh</b>. Mỗi giờ chậm kháng sinh trong viêm màng não vi khuẩn làm tăng rõ rệt tỉ lệ tử vong; không bao giờ chờ phim hay chờ dịch não tủy.",
        3: "Không bao giờ được bỏ chọc dịch não tủy khi nghi viêm màng não vi khuẩn. Phân tích dịch định hướng vi khuẩn, kháng sinh đồ và thời gian điều trị; theo dõi suông là chậm trễ nguy hiểm.",
        4: "Viêm não do herpes thường biểu hiện thay đổi hành vi, ảo giác, co giật và tổn thương thùy thái dương, thường không kèm bạch cầu máu tăng cao như vậy. Acyclovir hay được thêm vào phác đồ khi chưa loại trừ, nhưng không thay thế kháng sinh cho viêm màng não vi khuẩn."
      },
      objective:
        "Khi nghi viêm màng não vi khuẩn có phù gai thị, dấu thần kinh khu trú hoặc rối loạn ý thức: cấy máu, tiêm dexamethasone cùng kháng sinh theo kinh nghiệm ngay, chụp cắt lớp sọ não, rồi mới chọc dịch não tủy. Hình ảnh học không bao giờ được làm chậm liều kháng sinh đầu tiên."
    },

    {
      spec: "Thần kinh",
      task: "Bước tiếp theo trong chẩn đoán",
      short: "Đau đầu sét đánh, cắt lớp sọ não bình thường",
      vignette: [
        "Nữ 44 tuổi đến cấp cứu vì cơn đau đầu dữ dội nhất đời, khởi phát <b>đột ngột trong vài giây</b> khi đang nâng tạ tại phòng gym cách đây 9 giờ. Đau lan ra sau gáy, kèm buồn nôn và nôn hai lần, sợ ánh sáng.",
        "Hiện đau đã giảm bớt sau thuốc giảm đau. Khám thần kinh hoàn toàn bình thường: không yếu liệt, không rối loạn cảm giác, các dây thần kinh sọ bình thường, soi đáy mắt không phù gai. Cứng gáy nhẹ. Không sốt.",
        "Chụp cắt lớp vi tính sọ não không cản quang thực hiện lúc 9 giờ sau khởi phát: không thấy máu trong khoang dưới nhện, không tổn thương choán chỗ, không nhồi máu."
      ],
      vitals: [
        ["Nhiệt độ", "36,7 °C"],
        ["Huyết áp", "158/92"],
        ["Mạch", "88 l/ph"],
        ["Nhịp thở", "16 l/ph"],
        ["SpO2", "98% khí trời"]
      ],
      stem: "Bước tiếp theo tốt nhất trong chẩn đoán là gì?",
      choices: [
        "Chọc dịch não tủy",
        "Cho xuất viện với chẩn đoán đau nửa đầu và hẹn tái khám",
        "Chụp cộng hưởng từ sọ não có tiêm thuốc",
        "Điện não đồ",
        "Chụp cắt lớp sọ não lặp lại sau 24 giờ"
      ],
      answer: 0,
      why: [
        "Đây là <b>đau đầu sét đánh</b> — cường độ cực đại đạt trong vòng dưới một phút — cho tới khi chứng minh được điều ngược lại phải xem là <b>xuất huyết dưới nhện</b>. Khởi phát khi gắng sức, đau lan sau gáy, nôn và cứng gáy càng củng cố nghi ngờ.",
        "Độ nhạy của cắt lớp vi tính không cản quang phụ thuộc chặt vào thời gian: khoảng <b>98–100% trong 6 giờ đầu</b>, nhưng giảm dần còn khoảng 90% ở 24 giờ và dưới 50% sau một tuần, do máu bị pha loãng và tiêu đi. Bệnh nhân này chụp ở <b>giờ thứ 9</b>, tức đã ra ngoài cửa sổ mà phim âm tính đủ để loại trừ.",
        "Vì vậy phải <b>chọc dịch não tủy</b>. Hai dấu hiệu cần tìm: <b>hồng cầu không giảm dần giữa ống thứ nhất và ống thứ tư</b> (khác với chạm mạch khi chọc) và <b>xanthochromia</b> — dịch ly tâm có màu vàng do bilirubin từ hồng cầu thoái giáng, xuất hiện sau khoảng 6–12 giờ và tồn tại tới hai tuần. Nếu dịch não tủy dương tính, bước kế tiếp là chụp mạch não tìm túi phình."
      ],
      wrongs: {
        1: "Cho về là sai lầm nghiêm trọng nhất. Khoảng một phần ba bệnh nhân xuất huyết dưới nhện có <b>chảy máu báo hiệu</b> nhẹ trước khi vỡ phình lớn; bỏ sót giai đoạn này khiến tỉ lệ tử vong tăng vọt. Đau nửa đầu không khởi phát sét đánh lần đầu ở tuổi 44.",
        2: "Cộng hưởng từ thường quy có tiêm thuốc không phải công cụ loại trừ xuất huyết dưới nhện cấp; các chuỗi xung nhạy máu như FLAIR hay GRE có ích nhưng khó tiếp cận cấp cứu và vẫn không thay thế được dịch não tủy trong bối cảnh này.",
        3: "Điện não đồ dùng cho co giật và động kinh, không có vai trò trong đau đầu sét đánh.",
        4: "Chụp lại cắt lớp sau 24 giờ chỉ làm độ nhạy <b>giảm thêm</b>, vì máu tiếp tục tiêu đi theo thời gian. Đây là hướng ngược hoàn toàn với sinh lý bệnh."
      },
      objective:
        "Đau đầu sét đánh với cắt lớp sọ não âm tính sau mốc 6 giờ vẫn chưa loại trừ được xuất huyết dưới nhện; phải chọc dịch não tủy tìm xanthochromia và hồng cầu không giảm dần qua các ống. Dịch dương tính thì tiến hành chụp mạch não tìm túi phình."
    },

    {
      spec: "Nội tiết",
      task: "Bước xử trí tiếp theo",
      short: "Toan ceton do đái tháo đường, kali 3,1",
      vignette: [
        "Nam 24 tuổi đái tháo đường típ 1 vào cấp cứu vì buồn nôn, nôn nhiều và đau bụng trong hai ngày. Bệnh nhân đã tự ngưng insulin bốn ngày trước vì hết thuốc. Khát nhiều, tiểu nhiều, sụt 3 kg.",
        "Khám: tỉnh, đáp ứng chậm, niêm mạc khô, dấu véo da mất chậm, thở nhanh sâu kiểu Kussmaul, hơi thở mùi ceton. Bụng mềm, ấn đau nhẹ lan tỏa, không phản ứng thành bụng.",
        "Bệnh nhân đã được truyền 1 lít NaCl 0,9% trong giờ đầu tại phòng cấp cứu. Ê kíp đang chuẩn bị truyền insulin thường liên tục."
      ],
      vitals: [
        ["Nhiệt độ", "36,6 °C"],
        ["Huyết áp", "104/64"],
        ["Mạch", "124 l/ph"],
        ["Nhịp thở", "28 l/ph"],
        ["SpO2", "99% khí trời"]
      ],
      labs: {
        title: "Xét nghiệm cấp cứu",
        rows: [
          ["Glucose", "548 mg/dL", "70–100", "hi"],
          ["Natri", "131 mEq/L", "135–145", "lo"],
          ["Kali", "3,1 mEq/L", "3,5–5,0", "lo"],
          ["Bicarbonat", "8 mEq/L", "22–28", "lo"],
          ["Clorid", "97 mEq/L", "98–106", "lo"],
          ["pH máu động mạch", "7,12", "7,35–7,45", "lo"],
          ["Ceton máu (beta-hydroxybutyrat)", "6,8 mmol/L", "< 0,6", "hi"],
          ["Creatinine", "1,3 mg/dL", "0,6–1,2", "hi"]
        ]
      },
      stem: "Bước xử trí tiếp theo tốt nhất là gì?",
      choices: [
        "Bù kali tĩnh mạch trước, hoãn insulin cho tới khi kali trên 3,3 mEq/L",
        "Bắt đầu truyền insulin ngay theo kế hoạch, bù kali đồng thời",
        "Truyền natri bicarbonat để điều chỉnh toan máu",
        "Tiêm insulin nhanh liều nạp tĩnh mạch rồi truyền liên tục",
        "Chuyển sang truyền glucose 5% pha insulin"
      ],
      answer: 0,
      why: [
        "Kali máu <b>3,1 mEq/L</b> nằm dưới ngưỡng an toàn. Quy tắc bắt buộc trong toan ceton do đái tháo đường: <b>nếu kali dưới 3,3 mEq/L thì phải bù kali trước và tạm hoãn insulin</b> cho tới khi kali vượt ngưỡng này.",
        "Lý do nằm ở chỗ kali máu <b>không phản ánh dự trữ kali toàn cơ thể</b>. Toan máu và thiếu insulin đẩy kali từ trong tế bào ra ngoài, trong khi lợi niệu thẩm thấu làm mất kali qua nước tiểu suốt nhiều ngày. Vì vậy bệnh nhân đã <b>thiếu kali toàn thân trầm trọng</b> ngay cả khi xét nghiệm máu bình thường; ở đây kali đã thấp rõ, nghĩa là thiếu hụt còn nặng hơn nhiều.",
        "Insulin đẩy kali ngược vào tế bào rất nhanh. Truyền insulin khi kali đang 3,1 có thể gây <b>hạ kali máu cấp</b> dẫn tới loạn nhịp thất, liệt cơ hô hấp và ngừng tim. Trình tự đúng: bù dịch → kiểm tra kali → bù kali nếu dưới 3,3 → khởi động insulin, và duy trì kali trong khoảng 4–5 mEq/L trong suốt quá trình điều trị."
      ],
      wrongs: {
        1: "Đây là câu trả lời đúng ở đa số ca toan ceton — nhưng chỉ khi kali từ 3,3 mEq/L trở lên. Bệnh nhân này ở dưới ngưỡng, nên khởi động insulin ngay là nguy hiểm.",
        2: "Bicarbonat chỉ cân nhắc khi pH dưới 6,9. Ở pH 7,12, nó không cải thiện tiên lượng mà còn gây hạ kali nặng thêm, toan nghịch thường trong dịch não tủy và làm chậm thanh thải ceton.",
        3: "Liều nạp insulin tĩnh mạch không còn được khuyến cáo thường quy khi đã truyền liên tục đủ liều; quan trọng hơn, nó khuếch đại đúng nguy cơ hạ kali đang cần tránh ở bệnh nhân này.",
        4: "Glucose chỉ được thêm vào dịch truyền khi đường huyết giảm xuống khoảng 200 mg/dL, để tiếp tục truyền insulin cắt ceton mà không gây hạ đường huyết. Ở mức 548 mg/dL thì chưa có chỉ định."
      },
      objective:
        "Trong toan ceton do đái tháo đường, phải kiểm tra kali trước khi truyền insulin: kali dưới 3,3 mEq/L thì bù kali trước và hoãn insulin. Kali máu luôn đánh giá thấp mức thiếu hụt toàn cơ thể, và insulin sẽ kéo kali vào tế bào gây loạn nhịp nếu bù không đủ."
    },

    {
      spec: "Thấp khớp",
      task: "Bước xử trí tiếp theo",
      short: "Đau đầu thái dương kèm nhìn mờ ở người cao tuổi",
      vignette: [
        "Nữ 74 tuổi đến khám vì đau đầu vùng thái dương phải liên tục trong ba tuần, tăng lên khi chải tóc. Bệnh nhân kể mỏi hàm khi nhai kéo dài, phải ngừng giữa bữa ăn. Trong hai tháng qua có đau và cứng khớp vai, hông vào buổi sáng kéo dài hơn một giờ, sụt 4 kg, sốt nhẹ về chiều.",
        "Sáng nay bệnh nhân thấy <b>mắt phải mờ thoáng qua khoảng 10 phút rồi tự hồi phục</b>. Hiện thị lực hai mắt 8/10.",
        "Khám: động mạch thái dương phải nổi rõ, cứng, ấn đau, mạch đập yếu hơn bên trái. Không yếu liệt. Soi đáy mắt hiện chưa thấy phù gai thị."
      ],
      vitals: [
        ["Nhiệt độ", "37,6 °C"],
        ["Huyết áp", "138/80"],
        ["Mạch", "84 l/ph"],
        ["Nhịp thở", "16 l/ph"]
      ],
      labs: {
        title: "Xét nghiệm",
        rows: [
          ["Tốc độ máu lắng giờ đầu", "98 mm", "< 30", "hi"],
          ["CRP", "86 mg/L", "< 5", "hi"],
          ["Hemoglobin", "10,4 g/dL", "12,0–16,0", "lo"],
          ["Tiểu cầu", "512.000/mm³", "150.000–400.000", "hi"],
          ["Creatinine", "0,8 mg/dL", "0,6–1,2", ""]
        ]
      },
      stem: "Bước xử trí tiếp theo tốt nhất là gì?",
      choices: [
        "Bắt đầu ngay corticoid liều cao, sinh thiết động mạch thái dương sau đó",
        "Sinh thiết động mạch thái dương trước, chỉ điều trị khi kết quả dương tính",
        "Siêu âm Doppler động mạch thái dương rồi quyết định",
        "Bắt đầu methotrexate kết hợp prednisone liều thấp",
        "Cho aspirin liều thấp và hẹn khám chuyên khoa mắt trong tuần"
      ],
      answer: 0,
      why: [
        "Đây là <b>viêm động mạch tế bào khổng lồ</b>: tuổi trên 50, đau đầu thái dương mới xuất hiện, <b>mỏi hàm khi nhai</b> (dấu hiệu đặc hiệu nhất), động mạch thái dương cứng và đau, máu lắng cùng CRP tăng rất cao, kèm bệnh cảnh đau đa cơ do thấp và thiếu máu viêm mạn.",
        "<b>Mất thị lực thoáng qua là dấu hiệu báo động.</b> Nó báo trước bệnh lý thần kinh thị do thiếu máu trước, có thể gây <b>mù vĩnh viễn trong vòng vài ngày</b>, và tổn thương một khi đã xảy ra thì không hồi phục. Vì vậy phải <b>bắt đầu corticoid ngay lập tức</b> — prednisone 1 mg/kg/ngày, hoặc methylprednisolone tĩnh mạch liều cao khi đã có mất thị lực thực sự — chứ tuyệt đối không chờ bất kỳ xét nghiệm nào.",
        "Sinh thiết vẫn là tiêu chuẩn vàng và cần được làm, nhưng <b>làm sau</b>: mô bệnh học vẫn còn dương tính trong khoảng <b>hai tuần</b> kể từ khi bắt đầu corticoid, nên điều trị sớm không làm mất cơ hội chẩn đoán. Lưu ý tổn thương phân bố nhảy cóc nên cần lấy đoạn động mạch dài 1–2 cm."
      ],
      wrongs: {
        1: "Chờ kết quả sinh thiết có thể mất vài ngày — đúng khoảng thời gian bệnh nhân có nguy cơ mù hẳn. Không bao giờ trì hoãn corticoid vì lý do thủ thuật hay giải phẫu bệnh.",
        2: "Siêu âm có thể thấy dấu hiệu quầng giảm âm quanh thành mạch và hữu ích ở nhiều trung tâm, nhưng nó là công cụ hỗ trợ chẩn đoán, không phải lý do để hoãn corticoid ở bệnh nhân đã có triệu chứng thị giác.",
        3: "Methotrexate và tocilizumab là thuốc tiết kiệm corticoid dùng về sau. Prednisone liều thấp hoàn toàn không đủ để bảo vệ thị lực trong giai đoạn cấp.",
        4: "Aspirin có thể được thêm vào nhưng chỉ là biện pháp phụ trợ. Hẹn khám vài ngày sau ở một bệnh nhân đang mất thị lực thoáng qua là chậm trễ có thể dẫn tới mù không hồi phục."
      },
      objective:
        "Viêm động mạch tế bào khổng lồ ở người trên 50 tuổi có đau đầu thái dương, mỏi hàm khi nhai và máu lắng tăng cao phải được điều trị corticoid liều cao ngay khi nghi ngờ, đặc biệt khi đã có triệu chứng thị giác. Sinh thiết động mạch thái dương làm sau và vẫn dương tính trong khoảng hai tuần đầu điều trị."
    },

    {
      spec: "Hô hấp",
      task: "Bước xử trí tiếp theo",
      short: "Thuyên tắc phổi kèm tụt huyết áp",
      vignette: [
        "Nữ 61 tuổi vào cấp cứu vì khó thở đột ngột và đau ngực kiểu màng phổi bên phải khởi phát 2 giờ trước. Bệnh nhân vừa trải qua chuyến bay 14 giờ ba ngày trước; tiền sử ung thư vú đang điều trị hóa chất.",
        "Khám ban đầu: tỉnh, khó thở rõ, huyết áp 118/72, mạch 108. Chụp cắt lớp vi tính động mạch phổi: <b>huyết khối lớn ở thân động mạch phổi lan sang cả hai nhánh chính</b>, tỉ lệ đường kính thất phải trên thất trái là 1,4.",
        "Trong lúc chuyển bệnh nhân về khoa, huyết áp tụt xuống 76/44 mm Hg và không đáp ứng sau 1 lít dịch tinh thể. Bệnh nhân lơ mơ, da lạnh ẩm, tĩnh mạch cổ nổi. Không có tiền sử xuất huyết, không phẫu thuật gần đây, không tổn thương nội sọ."
      ],
      vitals: [
        ["Nhiệt độ", "36,9 °C"],
        ["Huyết áp", "76/44"],
        ["Mạch", "128 l/ph"],
        ["Nhịp thở", "32 l/ph"],
        ["SpO2", "86% với oxy mask"]
      ],
      labs: {
        title: "Xét nghiệm",
        rows: [
          ["Troponin I", "0,42 ng/mL", "< 0,04", "hi"],
          ["NT-proBNP", "3.100 pg/mL", "< 125", "hi"],
          ["Lactat", "4,6 mmol/L", "0,5–2,2", "hi"],
          ["Hemoglobin", "11,6 g/dL", "12,0–16,0", "lo"],
          ["Tiểu cầu", "212.000/mm³", "150.000–400.000", ""],
          ["Creatinine", "1,1 mg/dL", "0,6–1,2", ""]
        ]
      },
      stem: "Bước xử trí tiếp theo tốt nhất là gì?",
      choices: [
        "Tiêu sợi huyết toàn thân bằng alteplase",
        "Truyền heparin không phân đoạn đơn thuần và theo dõi sát",
        "Đặt lưới lọc tĩnh mạch chủ dưới",
        "Chuyển sang rivaroxaban đường uống liều tấn công",
        "Truyền thêm 2 lít dịch tinh thể rồi đánh giá lại"
      ],
      answer: 0,
      why: [
        "Đây là <b>thuyên tắc phổi nguy cơ cao</b> — trước đây gọi là thuyên tắc phổi diện rộng — được định nghĩa bằng <b>tụt huyết áp kéo dài</b>: huyết áp tâm thu dưới 90 mm Hg trên 15 phút hoặc cần thuốc vận mạch, không do nguyên nhân khác. Kèm theo là bằng chứng suy thất phải trên hình ảnh, troponin và NT-proBNP tăng, lactat tăng do giảm tưới máu.",
        "Ở nhóm này, <b>tiêu sợi huyết toàn thân là điều trị được chỉ định</b> nếu không có chống chỉ định tuyệt đối. Alteplase 100 mg truyền trong 2 giờ làm tan nhanh cục máu, giảm hậu tải thất phải và phục hồi cung lượng tim. Bệnh nhân này không có xuất huyết đang hoạt động, không phẫu thuật lớn hay chấn thương gần đây, không bệnh lý nội sọ — tức không có chống chỉ định tuyệt đối.",
        "Tỉ lệ tử vong của thuyên tắc phổi có sốc lên tới trên 30%, cao hơn nhiều so với nguy cơ xuất huyết nội sọ do tiêu sợi huyết (khoảng 2–3%). Nếu có chống chỉ định tuyệt đối hoặc tiêu sợi huyết thất bại, phương án thay thế là <b>lấy huyết khối bằng ống thông hoặc phẫu thuật</b>."
      ],
      wrongs: {
        1: "Heparin đơn thuần là điều trị chuẩn cho thuyên tắc phổi nguy cơ thấp và trung bình. Nó ngăn cục máu lan rộng nhưng <b>không làm tan cục máu đã có</b>, nên không đủ cứu một bệnh nhân đang sốc do tắc nghẽn.",
        2: "Lưới lọc chỉ dành cho bệnh nhân có chống chỉ định tuyệt đối với kháng đông hoặc tái phát thuyên tắc dù đã kháng đông đủ. Nó không xử lý được cục máu đang chẹn động mạch phổi ngay lúc này.",
        3: "Thuốc kháng đông đường uống thế hệ mới không có vai trò trong sốc do thuyên tắc phổi: hấp thu đường uống không đáng tin ở bệnh nhân giảm tưới máu tạng, và cũng không có tác dụng tiêu cục máu.",
        4: "Bù dịch quá tay ở suy thất phải cấp làm thất phải giãn thêm, đẩy vách liên thất sang trái và <b>giảm thêm</b> cung lượng tim. Sau khi đã truyền 1 lít không đáp ứng, bước tiếp theo là thuốc vận mạch và tái tưới máu, không phải thêm dịch."
      },
      objective:
        "Thuyên tắc phổi kèm tụt huyết áp kéo dài là thuyên tắc nguy cơ cao và có chỉ định tiêu sợi huyết toàn thân khi không có chống chỉ định tuyệt đối. Heparin đơn thuần chỉ ngăn cục máu lan chứ không làm tan cục máu, và bù dịch quá mức làm suy thất phải nặng thêm."
    },

    {
      spec: "Ung thư",
      task: "Bước xử trí tiếp theo",
      short: "Đau lưng kèm yếu hai chân ở bệnh nhân ung thư",
      vignette: [
        "Nam 66 tuổi ung thư tuyến tiền liệt di căn xương, đang điều trị nội tiết, đến khám vì đau lưng vùng ngực dưới tăng dần trong ba tuần. Đau tăng khi nằm và về đêm, không giảm với thuốc giảm đau thông thường.",
        "Từ hôm qua bệnh nhân thấy hai chân yếu dần, đi lại phải vịn tường; sáng nay không tự đứng dậy khỏi ghế được. Bệnh nhân kể cảm giác tê bì như đeo đai quanh thân mình ngang rốn.",
        "Khám: sức cơ hai chân 3/5 đối xứng, tăng phản xạ gân gối và gân gót hai bên, dấu Babinski dương tính hai bên, mất cảm giác từ ngang rốn trở xuống. Ấn đau chói cột sống ngực T10. Cầu bàng quang gõ đục, bệnh nhân chưa đi tiểu được từ tối qua."
      ],
      vitals: [
        ["Nhiệt độ", "36,8 °C"],
        ["Huyết áp", "142/86"],
        ["Mạch", "82 l/ph"],
        ["Nhịp thở", "16 l/ph"]
      ],
      labs: {
        title: "Xét nghiệm",
        rows: [
          ["PSA", "184 ng/mL", "< 4", "hi"],
          ["Canxi toàn phần", "9,8 mg/dL", "8,5–10,5", ""],
          ["Phosphatase kiềm", "462 U/L", "40–130", "hi"],
          ["Hemoglobin", "10,8 g/dL", "13,5–17,5", "lo"],
          ["Creatinine", "1,2 mg/dL", "0,6–1,2", ""]
        ]
      },
      stem: "Bước xử trí tiếp theo tốt nhất là gì?",
      choices: [
        "Tiêm ngay dexamethasone tĩnh mạch và chụp cộng hưởng từ toàn bộ cột sống cấp cứu",
        "Chụp X-quang cột sống ngực và cho thuốc giảm đau opioid",
        "Xạ hình xương toàn thân để xác định vị trí di căn",
        "Chụp cộng hưởng từ cột sống ngực trong vòng 48 giờ, chưa cần thuốc",
        "Chọc dịch não tủy để loại trừ di căn màng não mềm"
      ],
      answer: 0,
      why: [
        "Đây là <b>chèn ép tủy sống do di căn</b> — một cấp cứu ung thư học. Bộ dấu hiệu kinh điển đã đầy đủ: <b>đau lưng tăng về đêm và khi nằm</b> ở bệnh nhân ung thư đã biết, <b>yếu hai chân kèm dấu hiệu tổn thương nơ-ron vận động trên</b>, <b>mức cảm giác rõ ràng</b>, và <b>bí tiểu</b>.",
        "Hai việc phải làm <b>song song, ngay lập tức</b>: tiêm <b>dexamethasone tĩnh mạch liều cao</b> để giảm phù nề quanh tủy và bảo tồn chức năng thần kinh, đồng thời chụp <b>cộng hưởng từ toàn bộ cột sống</b> — không chỉ đoạn nghi ngờ, vì có tới một phần ba bệnh nhân có nhiều ổ chèn ép ở các tầng khác nhau, và bỏ sót ổ thứ hai sẽ làm kế hoạch xạ trị hoặc phẫu thuật sai.",
        "Yếu tố tiên lượng quan trọng nhất là <b>chức năng thần kinh tại thời điểm bắt đầu điều trị</b>. Bệnh nhân còn đi được thường giữ được khả năng đi; bệnh nhân đã liệt hoàn toàn hiếm khi hồi phục. Điều trị tiếp theo là xạ trị hoặc phẫu thuật giải ép tùy độ vững cột sống, mức độ nhạy xạ của khối u và toàn trạng."
      ],
      wrongs: {
        1: "X-quang thường quy bỏ sót phần lớn tổn thương chèn ép tủy vì không thấy được mô mềm ngoài màng cứng, và chỉ giảm đau đơn thuần trong khi tủy đang bị chèn sẽ dẫn đến liệt vĩnh viễn.",
        2: "Xạ hình xương phát hiện di căn xương nhưng không đánh giá được mức độ chèn ép tủy hay ranh giới khối u ngoài màng cứng, và làm mất thời gian quý giá.",
        3: "Đúng về phương tiện nhưng <b>sai về thời gian và thiếu corticoid</b>. Đây là cấp cứu tính bằng giờ, không phải 48 giờ; mỗi giờ trì hoãn đều làm giảm khả năng hồi phục vận động.",
        4: "Di căn màng não mềm thường biểu hiện bằng tổn thương nhiều dây thần kinh sọ và rễ ở các mức rải rác, không cho một mức cảm giác gọn gàng kèm dấu hiệu nơ-ron vận động trên như ở đây. Chọc dịch não tủy khi có khối chèn ép tủy còn có nguy cơ làm nặng thêm."
      },
      objective:
        "Đau lưng tăng về đêm kèm yếu chi dưới, mức cảm giác và rối loạn cơ tròn ở bệnh nhân ung thư là chèn ép tủy sống do di căn. Xử trí là tiêm dexamethasone ngay đồng thời chụp cộng hưởng từ toàn bộ cột sống cấp cứu, rồi xạ trị hoặc phẫu thuật giải ép."
    },

    {
      spec: "Tim mạch",
      task: "Bước xử trí tiếp theo",
      short: "Rung nhĩ mới phát hiện, huyết động ổn định",
      vignette: [
        "Nữ 72 tuổi đi khám định kỳ, tình cờ phát hiện mạch không đều. Bệnh nhân kể thỉnh thoảng hồi hộp và hụt hơi khi leo cầu thang trong khoảng hai tháng nay, không đau ngực, không ngất, không phù chân.",
        "Tiền sử: tăng huyết áp 15 năm, đái tháo đường típ 2 8 năm, không tiền sử đột quỵ hay chảy máu. Không dùng thuốc kháng đông.",
        "Điện tâm đồ: rung nhĩ, tần số thất trung bình 92 lần/phút, không có sóng P, khoảng RR không đều tuyệt đối, không ST chênh. Siêu âm tim: nhĩ trái giãn nhẹ, EF 58%, không huyết khối, không hẹp van hai lá, không van tim nhân tạo."
      ],
      vitals: [
        ["Nhiệt độ", "36,7 °C"],
        ["Huyết áp", "138/82"],
        ["Mạch", "92 l/ph, không đều"],
        ["Nhịp thở", "16 l/ph"],
        ["SpO2", "97% khí trời"]
      ],
      labs: {
        title: "Xét nghiệm",
        rows: [
          ["TSH", "1,8 mIU/L", "0,4–4,0", ""],
          ["Creatinine", "0,9 mg/dL", "0,6–1,2", ""],
          ["Hemoglobin", "13,1 g/dL", "12,0–16,0", ""],
          ["Tiểu cầu", "244.000/mm³", "150.000–400.000", ""],
          ["Kali", "4,2 mEq/L", "3,5–5,0", ""]
        ]
      },
      stem: "Ngoài kiểm soát tần số thất, bước xử trí nào sau đây quan trọng nhất?",
      choices: [
        "Bắt đầu thuốc kháng đông đường uống thế hệ mới",
        "Bắt đầu aspirin 81 mg mỗi ngày",
        "Sốc điện chuyển nhịp ngay trong hôm nay",
        "Bắt đầu amiodarone để duy trì nhịp xoang",
        "Triệt đốt nút nhĩ thất và đặt máy tạo nhịp"
      ],
      answer: 0,
      why: [
        "Ưu tiên số một ở rung nhĩ không phải là nhịp mà là <b>dự phòng đột quỵ</b>. Điểm <b>CHA₂DS₂-VASc</b> của bệnh nhân là 4: tăng huyết áp 1, đái tháo đường 1, tuổi 65–74 là 1, giới nữ 1. Với nam từ 2 điểm và nữ từ 3 điểm trở lên, kháng đông đường uống được chỉ định rõ ràng.",
        "Vì bệnh nhân <b>không hẹp van hai lá mức độ trung bình đến nặng và không có van tim cơ học</b>, đây là rung nhĩ không do bệnh van tim, nên <b>thuốc kháng đông đường uống thế hệ mới</b> (apixaban, rivaroxaban, dabigatran, edoxaban) được ưu tiên hơn warfarin: hiệu quả tương đương hoặc tốt hơn trong dự phòng đột quỵ, ít xuất huyết nội sọ hơn rõ rệt và không cần theo dõi INR.",
        "Về chiến lược nhịp, các thử nghiệm lớn cho thấy <b>kiểm soát tần số và kiểm soát nhịp cho tỉ lệ tử vong tương đương</b> ở bệnh nhân lớn tuổi ít triệu chứng. Điều then chốt cần nhớ: <b>chuyển nhịp không xóa được nhu cầu kháng đông</b>, vì nguy cơ đột quỵ phụ thuộc điểm CHA₂DS₂-VASc chứ không phụ thuộc việc nhịp xoang có được duy trì hay không."
      ],
      wrongs: {
        1: "Aspirin gần như không có hiệu quả dự phòng đột quỵ do rung nhĩ, trong khi vẫn mang nguy cơ xuất huyết tiêu hóa. Nó đã bị loại khỏi khuyến cáo cho chỉ định này.",
        2: "Rung nhĩ đã kéo dài trên 48 giờ hoặc không rõ thời điểm khởi phát thì <b>không được sốc điện ngay</b> nếu chưa siêu âm tim qua thực quản loại trừ huyết khối nhĩ trái hoặc chưa kháng đông đủ ba tuần — nguy cơ bắn cục máu gây đột quỵ. Bệnh nhân cũng đang ổn định huyết động nên không có chỉ định cấp cứu.",
        3: "Amiodarone có nhiều độc tính lên tuyến giáp, phổi, gan và mắt; nó không phải lựa chọn đầu tay ở bệnh nhân lớn tuổi ít triệu chứng, và quan trọng hơn, nó không thay thế được kháng đông.",
        4: "Triệt đốt nút nhĩ thất kèm đặt máy tạo nhịp là biện pháp cuối cùng khi không kiểm soát được tần số bằng thuốc. Bệnh nhân này chưa dùng thuốc kiểm soát tần số nào."
      },
      objective:
        "Ở rung nhĩ, quyết định quan trọng nhất là dự phòng đột quỵ dựa trên điểm CHA₂DS₂-VASc, không phải chiến lược nhịp. Rung nhĩ không do bệnh van tim với điểm đủ ngưỡng nên dùng thuốc kháng đông đường uống thế hệ mới; aspirin không đủ và chuyển nhịp không loại bỏ nhu cầu kháng đông."
    },

    {
      spec: "Tim mạch",
      task: "Bước xử trí tiếp theo",
      short: "Suy tim phân suất tống máu giảm mới chẩn đoán",
      vignette: [
        "Nam 58 tuổi đến khám vì khó thở khi gắng sức tăng dần trong bốn tháng, hiện đi bộ khoảng 100 mét đã phải dừng. Bệnh nhân phải kê hai gối khi ngủ và thỉnh thoảng thức giấc vì khó thở về đêm. Phù hai mắt cá chân tăng về chiều.",
        "Tiền sử: nhồi máu cơ tim thành trước cách đây ba năm, đã đặt stent; tăng huyết áp; hút thuốc đã bỏ. Hiện chỉ dùng aspirin và atorvastatin.",
        "Khám: tĩnh mạch cổ nổi 8 cm, ran ẩm hai đáy phổi, mỏm tim lệch trái, có tiếng T3, phù mềm ấn lõm hai cẳng chân. Siêu âm tim: EF 28%, giãn thất trái, giảm động vùng trước vách, hở van hai lá cơ năng mức độ nhẹ–vừa."
      ],
      vitals: [
        ["Nhiệt độ", "36,8 °C"],
        ["Huyết áp", "126/78"],
        ["Mạch", "88 l/ph"],
        ["Nhịp thở", "20 l/ph"],
        ["SpO2", "95% khí trời"]
      ],
      labs: {
        title: "Xét nghiệm",
        rows: [
          ["NT-proBNP", "2.640 pg/mL", "< 125", "hi"],
          ["Creatinine", "1,1 mg/dL", "0,6–1,2", ""],
          ["Kali", "4,3 mEq/L", "3,5–5,0", ""],
          ["Natri", "138 mEq/L", "135–145", ""],
          ["Hemoglobin", "13,8 g/dL", "13,5–17,5", ""],
          ["TSH", "2,2 mIU/L", "0,4–4,0", ""]
        ]
      },
      stem: "Ngoài lợi tiểu quai để kiểm soát triệu chứng sung huyết, phối hợp thuốc nào sau đây cải thiện sống còn nhiều nhất?",
      choices: [
        "Sacubitril-valsartan, chẹn beta, đối kháng thụ thể mineralocorticoid và ức chế SGLT2",
        "Digoxin kết hợp furosemide liều cao",
        "Amlodipine kết hợp isosorbide mononitrate",
        "Aspirin liều cao kết hợp clopidogrel",
        "Chỉ dùng lợi tiểu quai và hạn chế muối, đánh giá lại sau ba tháng"
      ],
      answer: 0,
      why: [
        "Bệnh nhân có <b>suy tim phân suất tống máu giảm</b> (EF ≤ 40%) do bệnh cơ tim thiếu máu cục bộ. Bốn nhóm thuốc tạo thành <b>nền tảng điều trị</b> hiện nay, mỗi nhóm đều được chứng minh <b>giảm tử vong và tái nhập viện</b> một cách độc lập: ức chế thụ thể angiotensin–neprilysin, chẹn beta, đối kháng thụ thể mineralocorticoid và ức chế SGLT2.",
        "Lợi ích của chúng <b>cộng dồn</b>, và xu hướng hiện nay là khởi động cả bốn nhóm sớm với liều thấp rồi tăng dần, thay vì tối ưu từng thuốc một cách tuần tự. Chẹn beta phải chọn đúng loại có bằng chứng — carvedilol, metoprolol succinat, bisoprolol — và chỉ bắt đầu khi bệnh nhân đã hết sung huyết.",
        "<b>Lợi tiểu quai giúp dễ chịu nhưng không kéo dài sự sống.</b> Đây là điểm phân biệt cốt lõi mà dạng câu hỏi này luôn kiểm tra: thuốc cải thiện triệu chứng và thuốc cải thiện tiên lượng là hai nhóm khác nhau. Nếu EF vẫn ≤ 35% sau ba tháng điều trị nội khoa tối ưu, cần xét đặt máy phá rung tự động để dự phòng đột tử."
      ],
      wrongs: {
        1: "Digoxin làm giảm nhập viện nhưng <b>không giảm tử vong</b>, có cửa sổ điều trị hẹp và dễ ngộ độc, đặc biệt khi suy thận hoặc hạ kali. Nó chỉ là thuốc thêm vào ở giai đoạn sau.",
        2: "Chẹn kênh canxi nhóm dihydropyridine không cải thiện tiên lượng suy tim; các nhóm chẹn kênh canxi khác còn có tác dụng giảm co bóp cơ tim gây hại. Phối hợp hydralazine với isosorbide dinitrate chỉ dành cho một nhóm bệnh nhân đặc thù hoặc khi không dung nạp thuốc ức chế hệ renin.",
        3: "Kháng kết tập tiểu cầu kép dùng cho hội chứng vành cấp và sau đặt stent trong thời gian giới hạn, không phải điều trị suy tim mạn và không cải thiện phân suất tống máu.",
        4: "Trì hoãn ba tháng ở bệnh nhân suy tim có triệu chứng rõ với EF 28% là bỏ lỡ cơ hội tái cấu trúc thất trái ngược chiều. Điều trị nền tảng cần bắt đầu ngay."
      },
      objective:
        "Suy tim phân suất tống máu giảm cần bốn nhóm thuốc nền tảng — ức chế thụ thể angiotensin–neprilysin, chẹn beta có bằng chứng, đối kháng mineralocorticoid và ức chế SGLT2 — vì cả bốn đều giảm tử vong. Lợi tiểu quai chỉ giải quyết triệu chứng sung huyết và không kéo dài sự sống."
    },

    {
      spec: "Hô hấp",
      task: "Bước xử trí tiếp theo",
      short: "Đợt cấp COPD kèm toan hô hấp",
      vignette: [
        "Nam 69 tuổi bệnh phổi tắc nghẽn mạn tính vào cấp cứu vì khó thở tăng trong ba ngày, ho khạc đờm nhiều và đổi màu sang vàng xanh. Hút thuốc 50 gói-năm, đã bỏ hai năm. Trong năm qua nhập viện hai lần vì đợt cấp.",
        "Khám: tỉnh, nói được từng cụm từ ngắn, ngồi chồm về trước, co kéo cơ hô hấp phụ rõ, thở chúm môi. Lồng ngực hình thùng, gõ vang, rì rào phế nang giảm lan tỏa, ran rít ran ngáy hai phế trường. Không sốt cao, không phù chân, không đau ngực.",
        "Bệnh nhân đã được khí dung salbutamol kết hợp ipratropium hai lần, tiêm methylprednisolone tĩnh mạch và bắt đầu kháng sinh. Sau 45 phút, tình trạng khó thở vẫn không cải thiện."
      ],
      vitals: [
        ["Nhiệt độ", "37,3 °C"],
        ["Huyết áp", "148/88"],
        ["Mạch", "112 l/ph"],
        ["Nhịp thở", "30 l/ph"],
        ["SpO2", "89% với oxy gọng 2 L/ph"]
      ],
      labs: {
        title: "Khí máu động mạch sau điều trị ban đầu",
        rows: [
          ["pH", "7,26", "7,35–7,45", "lo"],
          ["PaCO2", "68 mm Hg", "35–45", "hi"],
          ["PaO2", "58 mm Hg", "80–100", "lo"],
          ["Bicarbonat", "30 mEq/L", "22–28", "hi"],
          ["Bạch cầu", "13.200/mm³", "4.000–11.000", "hi"]
        ]
      },
      stem: "Bước xử trí tiếp theo tốt nhất là gì?",
      choices: [
        "Thông khí không xâm nhập áp lực dương hai mức",
        "Đặt nội khí quản và thở máy xâm nhập ngay",
        "Tăng oxy lên mask túi 15 L/phút",
        "Truyền natri bicarbonat để điều chỉnh pH",
        "Truyền theophylline tĩnh mạch"
      ],
      answer: 0,
      why: [
        "Bệnh nhân đợt cấp COPD đã điều trị nội khoa tối ưu nhưng vẫn <b>toan hô hấp mất bù</b> (pH 7,26, PaCO₂ 68) kèm khó thở nặng và dùng cơ hô hấp phụ. Đây chính là chỉ định kinh điển của <b>thông khí không xâm nhập</b>.",
        "Thông khí không xâm nhập ở nhóm này là một trong những can thiệp có bằng chứng mạnh nhất trong hô hấp: nó <b>giảm nhu cầu đặt nội khí quản, giảm thời gian nằm viện và giảm tử vong</b>. Cơ chế là áp lực hít vào hỗ trợ cơ hô hấp đang mệt và tăng thông khí phút để thải CO₂, còn áp lực thở ra bù trừ áp lực dương cuối kỳ thở ra nội sinh do bẫy khí.",
        "Bệnh nhân còn <b>tỉnh táo, hợp tác được và bảo vệ được đường thở</b> — điều kiện cần để thông khí không xâm nhập thành công. Cần đánh giá lại khí máu sau 1–2 giờ: nếu pH và PaCO₂ không cải thiện, hoặc bệnh nhân rối loạn ý thức, mới chuyển sang đặt nội khí quản."
      ],
      wrongs: {
        1: "Đặt nội khí quản là bước sau khi thông khí không xâm nhập thất bại, hoặc khi có chống chỉ định: hôn mê, ngừng thở, mất phản xạ bảo vệ đường thở, huyết động không ổn, nôn nhiều. Bệnh nhân này còn tỉnh và hợp tác, đặt ống ngay là quá mức và mang thêm nguy cơ viêm phổi liên quan thở máy.",
        2: "Ở bệnh nhân COPD ứ CO₂, oxy liều cao làm <b>nặng thêm tình trạng tăng CO₂</b> do mất co mạch phổi do thiếu oxy làm xấu tỉ lệ thông khí–tưới máu và do hiệu ứng Haldane. Đích SpO₂ ở nhóm này là <b>88–92%</b>, và bệnh nhân đang ở 89% — tức đã đạt đích.",
        3: "Toan ở đây là <b>toan hô hấp</b>, do phổi không thải được CO₂. Bicarbonat không giải quyết nguyên nhân, còn tạo thêm CO₂ khi bị đệm, làm bệnh nhân đang ứ khí càng nặng hơn.",
        4: "Theophylline có cửa sổ điều trị rất hẹp, gây loạn nhịp và co giật, hiệu quả khiêm tốn. Nó đã bị loại khỏi phác đồ đợt cấp thường quy."
      },
      objective:
        "Đợt cấp COPD có toan hô hấp với pH dưới 7,35 và PaCO₂ tăng, trên bệnh nhân còn tỉnh táo, là chỉ định của thông khí không xâm nhập — biện pháp giảm cả tỉ lệ đặt nội khí quản lẫn tử vong. Đích SpO₂ giữ ở 88–92% vì oxy liều cao làm ứ CO₂ nặng thêm."
    },


    {
      spec: "Hô hấp",
      task: "Bước xử trí tiếp theo",
      short: "Hen kiểm soát kém khi chỉ dùng thuốc cắt cơn",
      vignette: [
        "Nữ 27 tuổi hen phế quản từ nhỏ đến khám vì ho và khò khè tăng. Bệnh nhân phải dùng salbutamol xịt <b>4–5 lần mỗi tuần</b> vào ban ngày và thức giấc vì khó thở khoảng <b>ba đêm mỗi tháng</b>. Hai tháng qua phải nghỉ làm hai ngày vì cơn hen.",
        "Bệnh nhân hiện chỉ dùng salbutamol khi cần, không dùng thuốc dự phòng nào. Kỹ thuật xịt được kiểm tra và thực hiện đúng. Không hút thuốc, không nuôi thú cưng, nhà không ẩm mốc.",
        "Khám lúc này: nói trọn câu, không co kéo cơ hô hấp phụ, rì rào phế nang đều, ran rít rải rác cuối thì thở ra hai phế trường. Hô hấp ký: FEV1 74% giá trị dự đoán, tăng 16% và 260 mL sau test giãn phế quản."
      ],
      vitals: [
        ["Nhiệt độ", "36,7 °C"],
        ["Huyết áp", "116/70"],
        ["Mạch", "82 l/ph"],
        ["Nhịp thở", "18 l/ph"],
        ["SpO2", "97% khí trời"]
      ],
      stem: "Bước điều trị tiếp theo tốt nhất là gì?",
      choices: [
        "Thêm corticoid dạng hít liều thấp kết hợp thuốc giãn phế quản tác dụng kéo dài",
        "Tăng tần suất dùng salbutamol xịt theo nhu cầu",
        "Bắt đầu prednisone uống kéo dài",
        "Thêm montelukast đơn thuần",
        "Bắt đầu omalizumab tiêm dưới da"
      ],
      answer: 0,
      why: [
        "Bệnh nhân có hen <b>kiểm soát kém</b>: dùng thuốc cắt cơn trên hai lần mỗi tuần, có triệu chứng về đêm và hạn chế hoạt động. Bất kỳ tiêu chí nào trong số đó cũng đủ để kết luận cần leo thang điều trị.",
        "Nguyên tắc nền tảng của hen là <b>hen là bệnh viêm mạn tính đường thở</b>, nên trụ cột điều trị là <b>corticoid dạng hít</b> chứ không phải thuốc giãn phế quản. Ở mức độ dai dẳng trung bình như đây, phối hợp corticoid hít liều thấp với thuốc giãn phế quản tác dụng kéo dài là bước chuẩn; nhiều phác đồ hiện nay dùng chính phối hợp này vừa làm thuốc duy trì vừa làm thuốc cắt cơn.",
        "Điểm mấu chốt để nhớ: <b>tần suất dùng thuốc cắt cơn chính là thước đo mức kiểm soát</b>. Dùng trên hai lần mỗi tuần đồng nghĩa với viêm đường thở chưa được kiểm soát, và chỉ tăng thuốc cắt cơn là che triệu chứng chứ không chạm tới bệnh."
      ],
      wrongs: {
        1: "Tăng thuốc giãn phế quản mà không kiểm soát viêm làm tăng nguy cơ đợt cấp nặng và tử vong do hen. Dùng trên một bình salbutamol mỗi tháng là dấu hiệu cảnh báo, không phải giải pháp.",
        2: "Corticoid uống dành cho đợt cấp trong thời gian ngắn. Dùng kéo dài ở hen trung bình gây loãng xương, đái tháo đường, đục thủy tinh thể và ức chế trục hạ đồi – tuyến yên – thượng thận, hoàn toàn không tương xứng với mức bệnh này.",
        3: "Thuốc đối kháng thụ thể leukotriene có hiệu quả yếu hơn corticoid hít rõ rệt. Nó là lựa chọn thêm vào hoặc thay thế khi không dung nạp corticoid hít, không phải bước leo thang đầu tay.",
        4: "Kháng thể đơn dòng kháng IgE dành cho hen nặng dai dẳng đã điều trị tối ưu bằng corticoid hít liều cao phối hợp mà vẫn không kiểm soát, có bằng chứng dị ứng và IgE tăng. Bệnh nhân này còn chưa dùng thuốc dự phòng nào."
      },
      objective:
        "Cần dùng thuốc cắt cơn trên hai lần mỗi tuần, có triệu chứng về đêm hoặc hạn chế hoạt động đều là dấu hiệu hen chưa kiểm soát và phải leo thang. Corticoid dạng hít là trụ cột vì hen là bệnh viêm mạn tính; tăng thuốc giãn phế quản đơn thuần làm tăng nguy cơ đợt cấp nặng."
    },

    {
      spec: "Tiêu hóa – Gan mật",
      task: "Bước xử trí tiếp theo",
      short: "Viêm tụy cấp do sỏi kèm viêm đường mật",
      vignette: [
        "Nữ 52 tuổi vào cấp cứu vì đau thượng vị dữ dội lan ra sau lưng khởi phát 14 giờ trước, kèm nôn nhiều. Bệnh nhân có nhiều đợt đau hạ sườn phải sau ăn béo trong sáu tháng qua. BMI 32 kg/m², không uống rượu.",
        "Trong 8 giờ nằm viện, bệnh nhân sốt cao rét run, da và củng mạc vàng rõ hơn, và bắt đầu lơ mơ. Khám: ấn đau thượng vị và hạ sườn phải, không phản ứng thành bụng, nhu động ruột giảm.",
        "Siêu âm bụng: sỏi túi mật nhiều viên, <b>ống mật chủ giãn 11 mm</b>, không thấy rõ sỏi trong ống mật chủ do hơi ruột. Bệnh nhân đã được bù dịch tích cực và dùng kháng sinh phổ rộng."
      ],
      vitals: [
        ["Nhiệt độ", "39,1 °C"],
        ["Huyết áp", "88/54"],
        ["Mạch", "126 l/ph"],
        ["Nhịp thở", "26 l/ph"],
        ["SpO2", "94% khí trời"]
      ],
      labs: {
        title: "Xét nghiệm",
        rows: [
          ["Lipase", "1.840 U/L", "10–140", "hi"],
          ["Bilirubin toàn phần", "6,8 mg/dL", "0,3–1,2", "hi"],
          ["Bilirubin trực tiếp", "5,1 mg/dL", "< 0,3", "hi"],
          ["ALT", "312 U/L", "10–40", "hi"],
          ["Phosphatase kiềm", "486 U/L", "40–130", "hi"],
          ["Bạch cầu", "21.600/mm³", "4.000–11.000", "hi"],
          ["Lactat", "3,8 mmol/L", "0,5–2,2", "hi"]
        ]
      },
      stem: "Bước xử trí tiếp theo tốt nhất là gì?",
      choices: [
        "Nội soi mật tụy ngược dòng cấp cứu để dẫn lưu đường mật",
        "Cắt túi mật nội soi cấp cứu",
        "Chụp cộng hưởng từ đường mật rồi quyết định",
        "Tiếp tục kháng sinh và bù dịch, mổ chương trình sau 6 tuần",
        "Chọc dẫn lưu túi mật qua da"
      ],
      answer: 0,
      why: [
        "Bệnh nhân có <b>viêm tụy cấp do sỏi mật</b> kèm <b>viêm đường mật ngược dòng nặng</b>. Tam chứng Charcot — sốt, vàng da, đau hạ sườn phải — đã đầy đủ, và thêm <b>tụt huyết áp cùng rối loạn ý thức</b> tạo thành <b>ngũ chứng Reynolds</b>, tức viêm đường mật có sốc.",
        "Đây là tình huống bắt buộc <b>dẫn lưu đường mật cấp cứu trong vòng 24 giờ</b>, và nội soi mật tụy ngược dòng là phương pháp được ưu tiên: nó vừa lấy sỏi kẹt vừa cắt cơ vòng Oddi để giải áp đường mật đang nhiễm khuẩn. Kháng sinh đơn thuần không đủ vì ổ nhiễm vẫn còn tắc nghẽn — giống như áp xe chưa dẫn lưu.",
        "Cần phân biệt rõ hai chỉ định: viêm tụy cấp do sỏi <b>đơn thuần</b> không cần nội soi mật tụy sớm, chỉ cần bù dịch và cắt túi mật trong cùng lần nằm viện. Nội soi cấp cứu chỉ đặt ra khi có <b>viêm đường mật kèm theo</b> hoặc tắc mật kéo dài không cải thiện — đúng tình huống ở đây."
      ],
      wrongs: {
        1: "Cắt túi mật là bắt buộc nhưng làm <b>sau</b> khi đã giải quyết viêm đường mật và ổn định bệnh nhân. Phẫu thuật trên bệnh nhân đang sốc nhiễm khuẩn và viêm tụy cấp có tỉ lệ biến chứng rất cao, và bản thân nó không giải áp được ống mật chủ.",
        2: "Chụp cộng hưởng từ đường mật rất chính xác để tìm sỏi ống mật chủ, nhưng chỉ là chẩn đoán hình ảnh. Ở bệnh nhân đã có ngũ chứng Reynolds thì xác suất tắc mật đủ cao để đi thẳng tới can thiệp; chờ chụp phim là mất thời gian nguy hiểm.",
        3: "Điều trị nội khoa đơn thuần ở viêm đường mật có sốc có tỉ lệ tử vong rất cao. Ổ nhiễm khuẩn trong đường mật bị tắc không thể được kiểm soát bằng kháng sinh nếu không dẫn lưu.",
        4: "Dẫn lưu túi mật qua da giải quyết viêm túi mật cấp ở bệnh nhân quá nặng để mổ. Nó <b>không dẫn lưu được ống mật chủ</b> khi có sỏi kẹt phía dưới ống túi mật, nên không giải quyết được vấn đề ở đây."
      },
      objective:
        "Viêm đường mật ngược dòng có tụt huyết áp hoặc rối loạn ý thức (ngũ chứng Reynolds) cần dẫn lưu đường mật cấp cứu bằng nội soi mật tụy ngược dòng, vì kháng sinh không kiểm soát được ổ nhiễm còn tắc nghẽn. Viêm tụy do sỏi đơn thuần thì không cần nội soi sớm, chỉ cần cắt túi mật trong cùng đợt nằm viện."
    },

    {
      spec: "Tiêu hóa – Gan mật",
      task: "Bước tiếp theo trong chẩn đoán",
      short: "Loét dạ dày chảy máu đã cầm",
      vignette: [
        "Nam 49 tuổi nhập viện vì nôn ra máu và đi ngoài phân đen hai ngày. Bệnh nhân dùng ibuprofen liều cao gần như hàng ngày trong bốn tháng vì đau lưng. Không uống rượu, không tiền sử bệnh gan.",
        "Sau khi hồi sức bằng dịch và truyền hai đơn vị hồng cầu lắng, huyết động ổn định. Nội soi dạ dày tá tràng cấp cứu phát hiện <b>một ổ loét 12 mm ở hang vị với cục máu đông bám dính</b>; đã được tiêm cầm máu và kẹp clip thành công, không còn chảy máu hoạt động.",
        "Bệnh nhân được truyền pantoprazole liên tục và ngưng hoàn toàn thuốc kháng viêm không steroid. Sinh thiết niêm mạc hang vị đã được lấy trong lúc nội soi."
      ],
      vitals: [
        ["Nhiệt độ", "36,8 °C"],
        ["Huyết áp", "122/74"],
        ["Mạch", "84 l/ph"],
        ["Nhịp thở", "16 l/ph"],
        ["SpO2", "98% khí trời"]
      ],
      labs: {
        title: "Xét nghiệm sau hồi sức",
        rows: [
          ["Hemoglobin", "9,8 g/dL", "13,5–17,5", "lo"],
          ["MCV", "82 fL", "80–100", ""],
          ["Tiểu cầu", "268.000/mm³", "150.000–400.000", ""],
          ["INR", "1,0", "0,8–1,1", ""],
          ["Ure máu", "34 mg/dL", "7–20", "hi"],
          ["Creatinine", "0,9 mg/dL", "0,6–1,2", ""]
        ]
      },
      stem: "Bước tiếp theo quan trọng nhất để giảm nguy cơ tái phát là gì?",
      choices: [
        "Xét nghiệm và điều trị tiệt trừ Helicobacter pylori",
        "Duy trì thuốc ức chế bơm proton suốt đời, không cần xét nghiệm thêm",
        "Nội soi lặp lại sau 24 giờ để kiểm tra cầm máu",
        "Chuyển sang thuốc kháng viêm ức chế chọn lọc COX-2",
        "Chụp cắt lớp bụng có cản quang tìm khối u dạ dày"
      ],
      answer: 0,
      why: [
        "Hai nguyên nhân chi phối gần như toàn bộ loét dạ dày tá tràng là <b>Helicobacter pylori</b> và <b>thuốc kháng viêm không steroid</b>. Bệnh nhân đã ngưng thuốc kháng viêm, nên việc còn lại phải làm là <b>xác định và tiệt trừ vi khuẩn</b>.",
        "Tiệt trừ thành công làm <b>giảm tỉ lệ tái phát loét từ khoảng 60–70% mỗi năm xuống dưới 10%</b> — không có can thiệp nào khác cho hiệu quả lớn tương đương. Ở bệnh nhân loét có biến chứng chảy máu, đây là bước bắt buộc chứ không phải tùy chọn.",
        "Trong bối cảnh này, <b>sinh thiết trong lúc nội soi</b> là cách xác định tiện nhất; nếu dựa vào test hơi thở ure hay kháng nguyên trong phân thì phải lưu ý cả thuốc ức chế bơm proton lẫn kháng sinh và chảy máu đang hoạt động đều gây <b>âm tính giả</b>, nên cần ngưng thuốc ức chế bơm proton khoảng hai tuần trước khi làm. Sau đợt điều trị, phải <b>khẳng định đã tiệt trừ</b> bằng test hơi thở hoặc kháng nguyên phân, không dùng huyết thanh vì kháng thể tồn tại lâu dài."
      ],
      wrongs: {
        1: "Thuốc ức chế bơm proton làm lành ổ loét và giảm tái phát, nhưng nếu vi khuẩn còn tồn tại thì loét sẽ quay lại khi ngưng thuốc. Duy trì suốt đời cũng kèm nguy cơ thiếu vitamin B12, hạ magiê, loãng xương và nhiễm <i>Clostridioides difficile</i>.",
        2: "Nội soi lặp lại thường quy không được khuyến cáo khi đã cầm máu tốt; chỉ làm lại khi có dấu hiệu chảy máu tái phát. Loét dạ dày (khác loét tá tràng) cần nội soi kiểm tra lành sau 8–12 tuần, nhưng đó không phải biện pháp giảm tái phát.",
        3: "Ức chế chọn lọc COX-2 ít gây loét hơn nhưng vẫn còn nguy cơ, đồng thời làm tăng biến cố tim mạch. Ở bệnh nhân vừa xuất huyết tiêu hóa nặng, quay lại bất kỳ thuốc kháng viêm nào cũng là lựa chọn kém.",
        4: "Chụp cắt lớp không có vai trò tầm soát ung thư dạ dày trong tình huống này; sinh thiết ổ loét qua nội soi mới là cách loại trừ ác tính, và việc đó đã được thực hiện."
      },
      objective:
        "Sau xuất huyết do loét dạ dày tá tràng, bước quan trọng nhất để dự phòng tái phát là xét nghiệm và tiệt trừ Helicobacter pylori, đồng thời ngưng thuốc kháng viêm không steroid. Cần khẳng định đã tiệt trừ bằng test hơi thở ure hoặc kháng nguyên phân, lưu ý thuốc ức chế bơm proton gây âm tính giả."
    },

    {
      spec: "Tiêu hóa – Gan mật",
      task: "Bước tiếp theo trong chẩn đoán",
      short: "Tiêu chảy mạn kèm thiếu máu và ban ngứa",
      vignette: [
        "Nữ 31 tuổi đến khám vì tiêu chảy phân lỏng, nhiều bọt, mùi hôi và nổi trên mặt nước trong 14 tháng. Bệnh nhân sụt 7 kg dù ăn uống bình thường, thường xuyên chướng bụng và mệt mỏi.",
        "Bệnh nhân còn có <b>ban sẩn mụn nước rất ngứa ở mặt duỗi khuỷu tay và mông</b> tái đi tái lại trong hai năm, đã điều trị nhiều đợt như chàm nhưng không khỏi. Tiền sử gia đình: mẹ bị viêm tuyến giáp Hashimoto.",
        "Khám: da xanh, viêm lưỡi teo gai, viêm khóe miệng. Bụng mềm, chướng nhẹ. Không gan lách to. Không có máu trong phân, không sốt."
      ],
      vitals: [
        ["Nhiệt độ", "36,6 °C"],
        ["Huyết áp", "104/66"],
        ["Mạch", "78 l/ph"],
        ["BMI", "18,4 kg/m²"]
      ],
      labs: {
        title: "Xét nghiệm",
        rows: [
          ["Hemoglobin", "9,4 g/dL", "12,0–16,0", "lo"],
          ["MCV", "76 fL", "80–100", "lo"],
          ["Ferritin", "6 ng/mL", "15–200", "lo"],
          ["Folat", "2,1 ng/mL", "> 4", "lo"],
          ["Canxi toàn phần", "8,1 mg/dL", "8,5–10,5", "lo"],
          ["Albumin", "3,2 g/dL", "3,5–5,5", "lo"],
          ["INR", "1,4", "0,8–1,1", "hi"],
          ["IgA toàn phần", "218 mg/dL", "70–400", ""]
        ]
      },
      stem: "Xét nghiệm nào sau đây là bước tiếp theo tốt nhất?",
      choices: [
        "Kháng thể IgA kháng transglutaminase mô",
        "Nội soi đại tràng toàn bộ kèm sinh thiết",
        "Cấy phân và soi tìm ký sinh trùng",
        "Định lượng elastase trong phân",
        "Xét nghiệm hơi thở hydro sau uống lactose"
      ],
      answer: 0,
      why: [
        "Bức tranh là <b>kém hấp thu</b> điển hình: phân mỡ, sụt cân dù ăn được, và thiếu hụt đồng thời nhiều chất hấp thu ở ruột non đoạn gần — <b>sắt, folat, canxi và vitamin K</b> (biểu hiện bằng INR kéo dài).",
        "Manh mối quyết định là <b>viêm da dạng herpes</b>: ban sẩn mụn nước cực ngứa ở mặt duỗi khuỷu, gối và mông. Đây là biểu hiện ngoài ruột gần như đặc hiệu của <b>bệnh celiac</b>. Tiền sử gia đình có bệnh tự miễn tuyến giáp càng phù hợp, vì celiac hay đi kèm bệnh tuyến giáp tự miễn và đái tháo đường típ 1.",
        "Xét nghiệm tầm soát đầu tay là <b>kháng thể IgA kháng transglutaminase mô</b>, làm cùng <b>IgA toàn phần</b> vì thiếu IgA chọn lọc gặp ở khoảng 2–3% bệnh nhân celiac và sẽ gây âm tính giả — ở đây IgA bình thường nên kết quả đáng tin. Điểm thực hành quan trọng: bệnh nhân <b>phải đang ăn gluten</b> khi làm xét nghiệm, nếu không cả huyết thanh lẫn sinh thiết đều có thể âm tính giả. Chẩn đoán được khẳng định bằng sinh thiết tá tràng thấy teo nhung mao, tăng lympho bào nội biểu mô và tăng sản hốc tuyến."
      ],
      wrongs: {
        1: "Nội soi đại tràng khảo sát bệnh lý đại tràng như viêm loét đại tràng hay Crohn đại tràng. Kém hấp thu các chất ở ruột non đoạn gần chỉ ra tổn thương ruột non, nên nội soi tá tràng mới là hướng đúng.",
        2: "Nhiễm ký sinh trùng như <i>Giardia</i> có thể gây kém hấp thu và cần cân nhắc, nhưng không giải thích được ban viêm da dạng herpes kéo dài hai năm và bối cảnh tự miễn gia đình.",
        3: "Elastase phân thấp chỉ điểm suy tụy ngoại tiết — thường trên nền viêm tụy mạn do rượu, xơ nang hoặc ung thư tụy. Bệnh nhân không uống rượu và không có tiền sử viêm tụy.",
        4: "Bất dung nạp lactose gây chướng bụng, sôi bụng và tiêu chảy sau ăn sữa, nhưng <b>không</b> gây sụt cân nhiều, phân mỡ hay thiếu hụt vi chất, vì niêm mạc ruột vẫn nguyên vẹn."
      },
      objective:
        "Tiêu chảy phân mỡ kèm thiếu sắt, folat, canxi và vitamin K gợi ý kém hấp thu tại ruột non đoạn gần; viêm da dạng herpes ở mặt duỗi gần như đặc hiệu cho bệnh celiac. Tầm soát bằng IgA kháng transglutaminase mô cùng IgA toàn phần, khi bệnh nhân vẫn đang ăn gluten, rồi khẳng định bằng sinh thiết tá tràng."
    },

    {
      spec: "Nội tiết",
      task: "Bước xử trí tiếp theo",
      short: "Tụt huyết áp, hạ natri và tăng kali sau ngưng corticoid",
      vignette: [
        "Nam 42 tuổi được đưa vào cấp cứu vì mệt lả, buồn nôn và đau bụng lan tỏa từ hai ngày nay, hôm nay không ngồi dậy nổi. Bệnh nhân bị viêm khớp dạng thấp, dùng prednisone 20 mg/ngày suốt tám tháng và <b>tự ngưng đột ngột cách đây năm ngày</b> vì hết thuốc.",
        "Ba ngày trước bệnh nhân bị viêm họng sốt cao. Khám: lơ mơ, da khô, mắt trũng, không phù. Bụng mềm, ấn đau lan tỏa nhẹ, không phản ứng thành bụng, không dấu hiệu ngoại khoa.",
        "Huyết áp không đáp ứng sau 2 lít dịch tinh thể. Bệnh nhân không dùng thuốc lợi tiểu, không nôn kéo dài, không tiêu chảy."
      ],
      vitals: [
        ["Nhiệt độ", "38,4 °C"],
        ["Huyết áp", "78/46"],
        ["Mạch", "122 l/ph"],
        ["Nhịp thở", "24 l/ph"],
        ["SpO2", "96% khí trời"]
      ],
      labs: {
        title: "Xét nghiệm cấp cứu",
        rows: [
          ["Natri", "126 mEq/L", "135–145", "lo"],
          ["Kali", "5,9 mEq/L", "3,5–5,0", "hi"],
          ["Glucose", "54 mg/dL", "70–100", "lo"],
          ["Bicarbonat", "17 mEq/L", "22–28", "lo"],
          ["Creatinine", "1,6 mg/dL", "0,6–1,2", "hi"],
          ["Bạch cầu ái toan", "8%", "0–4", "hi"],
          ["Cortisol ngẫu nhiên", "2,4 µg/dL", "> 18 khi stress", "lo"]
        ]
      },
      stem: "Bước xử trí tiếp theo tốt nhất là gì?",
      choices: [
        "Tiêm ngay hydrocortisone tĩnh mạch liều stress kèm bù dịch và glucose",
        "Truyền noradrenaline để nâng huyết áp",
        "Làm nghiệm pháp kích thích bằng ACTH rồi mới điều trị",
        "Truyền insulin kèm glucose để hạ kali máu",
        "Bắt đầu fludrocortisone đường uống"
      ],
      answer: 0,
      why: [
        "Đây là <b>cơn suy thượng thận cấp</b> trên nền <b>suy thượng thận thứ phát do ngưng corticoid đột ngột</b>. Dùng prednisone liều ức chế trong tám tháng đã ức chế trục hạ đồi – tuyến yên – thượng thận; khi ngưng đột ngột và lại gặp yếu tố stress là nhiễm khuẩn, cơ thể không thể tăng tiết cortisol đáp ứng.",
        "Bộ xét nghiệm rất gợi ý: <b>tụt huyết áp không đáp ứng dịch</b>, <b>hạ natri</b>, <b>tăng kali</b>, <b>hạ đường huyết</b>, tăng bạch cầu ái toan và cortisol thấp không thích hợp giữa lúc đang stress nặng.",
        "Điều trị phải <b>bắt đầu ngay lập tức</b>: hydrocortisone 100 mg tĩnh mạch, sau đó 50 mg mỗi 6 giờ, cùng bù dịch muối đẳng trương và glucose ưu trương để nâng đường huyết. <b>Không được chờ bất kỳ xét nghiệm nào</b> — có thể lấy máu định lượng cortisol và ACTH trước khi tiêm, nhưng điều trị đi trước kết quả. Song song phải tìm và xử lý yếu tố khởi phát, ở đây là nhiễm khuẩn hô hấp."
      ],
      wrongs: {
        1: "Thuốc vận mạch hầu như không hiệu quả khi thiếu cortisol, vì cortisol cần thiết để mạch máu đáp ứng với catecholamine. Huyết áp chỉ hồi phục sau khi bù corticoid — đó chính là lý do bệnh nhân không đáp ứng dịch.",
        2: "Nghiệm pháp kích thích ACTH giúp khẳng định chẩn đoán nhưng mất thời gian và không được làm chậm điều trị. Nếu cần làm sau đó, dùng dexamethasone thay hydrocortisone vì nó không gây nhiễu định lượng cortisol.",
        3: "Tăng kali ở đây là <b>hậu quả</b> của thiếu corticoid; nó tự điều chỉnh khi bù hydrocortisone và dịch. Kali 5,9 mEq/L chưa có biến đổi điện tâm đồ thì không cần can thiệp hạ kali cấp cứu riêng.",
        4: "Fludrocortisone chỉ thay thế mineralocorticoid và dùng đường uống — vô nghĩa ở bệnh nhân đang sốc, nôn và cần tác dụng tức thì. Hơn nữa hydrocortisone liều cao đã đủ hoạt tính mineralocorticoid."
      },
      objective:
        "Tụt huyết áp không đáp ứng dịch kèm hạ natri, tăng kali và hạ đường huyết ở người vừa ngưng corticoid kéo dài là cơn suy thượng thận cấp. Tiêm hydrocortisone tĩnh mạch ngay cùng bù dịch và glucose, không chờ kết quả cortisol hay nghiệm pháp ACTH, đồng thời điều trị yếu tố khởi phát."
    },

    {
      spec: "Nội tiết",
      task: "Bước xử trí tiếp theo",
      short: "Sốt cao, kích động và rung nhĩ ở bệnh nhân Basedow",
      vignette: [
        "Nữ 38 tuổi bệnh Basedow bỏ điều trị methimazole sáu tháng, được đưa vào cấp cứu sau khi mổ ruột thừa cấp cứu hôm qua. Từ đêm qua bệnh nhân sốt rất cao, kích động, nói nhảm và nôn nhiều lần.",
        "Khám: kích thích vận động, run tay biên độ lớn, da nóng ẩm đầm đìa mồ hôi. Tuyến giáp to lan tỏa, có tiếng thổi tâm thu trên tuyến. Lồi mắt hai bên. Tim nhịp nhanh không đều. Gan to dưới bờ sườn 3 cm, củng mạc vàng nhẹ.",
        "Điện tâm đồ: rung nhĩ đáp ứng thất nhanh 168 lần/phút. Không có ban xuất huyết, không cứng gáy; cấy máu đã được lấy."
      ],
      vitals: [
        ["Nhiệt độ", "40,2 °C"],
        ["Huyết áp", "148/56"],
        ["Mạch", "168 l/ph, không đều"],
        ["Nhịp thở", "30 l/ph"],
        ["SpO2", "96% khí trời"]
      ],
      labs: {
        title: "Xét nghiệm",
        rows: [
          ["TSH", "< 0,01 mIU/L", "0,4–4,0", "lo"],
          ["FT4", "5,8 ng/dL", "0,8–1,8", "hi"],
          ["FT3", "18,4 pg/mL", "2,3–4,2", "hi"],
          ["Bilirubin toàn phần", "2,6 mg/dL", "0,3–1,2", "hi"],
          ["Bạch cầu", "14.100/mm³", "4.000–11.000", "hi"],
          ["Canxi toàn phần", "10,9 mg/dL", "8,5–10,5", "hi"]
        ]
      },
      stem: "Thứ tự dùng thuốc đúng nhất trong xử trí đặc hiệu là gì?",
      choices: [
        "Propranolol và propylthiouracil trước, iod vô cơ ít nhất một giờ sau đó, kèm hydrocortisone",
        "Iod vô cơ trước tiên để chẹn nhanh tuyến giáp, rồi mới dùng thuốc kháng giáp",
        "Chỉ dùng methimazole liều cao và hạ sốt bằng aspirin",
        "Iod phóng xạ cấp cứu",
        "Cắt tuyến giáp cấp cứu ngay trong 24 giờ"
      ],
      answer: 0,
      why: [
        "Đây là <b>cơn bão giáp</b>: cường giáp nặng kèm sốt rất cao, rối loạn ý thức, nhịp nhanh không tương xứng và rối loạn chức năng gan, khởi phát bởi yếu tố stress là cuộc mổ. Chẩn đoán là lâm sàng — không chờ kết quả hormone, vì mức FT4 không phân biệt được cơn bão giáp với cường giáp thông thường.",
        "Điều trị có bốn hướng và <b>thứ tự rất quan trọng</b>: chẹn beta để cắt biểu hiện cường giao cảm; thuốc kháng giáp tổng hợp để chặn tổng hợp hormone mới; iod vô cơ để chặn giải phóng hormone đã dự trữ; và corticoid để giảm chuyển T4 thành T3 ở ngoại vi, đồng thời điều trị suy thượng thận tương đối kèm theo.",
        "<b>Iod phải được cho sau thuốc kháng giáp ít nhất một giờ.</b> Nếu cho iod trước, nó trở thành cơ chất cho tuyến giáp tổng hợp thêm hormone và làm cơn bão nặng lên — đây chính là điểm mà dạng câu hỏi này luôn kiểm tra. <b>Propylthiouracil</b> được ưu tiên hơn methimazole trong cơn bão giáp vì ngoài chặn tổng hợp nó còn ức chế men khử iod chuyển T4 thành T3 ở ngoại vi."
      ],
      wrongs: {
        1: "Đảo ngược thứ tự là sai lầm nguy hiểm: iod cung cấp nguyên liệu cho tuyến giáp còn chưa bị chặn tổng hợp, làm bùng thêm hormone.",
        2: "Methimazole đơn thuần không đủ trong cơn bão giáp — thiếu chẹn beta, iod và corticoid. Ngoài ra <b>aspirin chống chỉ định</b> vì nó đẩy hormone giáp khỏi protein gắn, làm tăng hormone tự do và khiến bệnh nặng thêm; hạ sốt bằng paracetamol và làm mát vật lý.",
        3: "Iod phóng xạ là điều trị triệt để lâu dài, tác dụng sau nhiều tuần đến vài tháng, hoàn toàn không dùng trong cấp cứu.",
        4: "Phẫu thuật tuyến giáp trên bệnh nhân đang bão giáp có tỉ lệ tử vong rất cao. Chỉ mổ sau khi đã đưa bệnh nhân về bình giáp."
      },
      objective:
        "Cơn bão giáp được chẩn đoán trên lâm sàng và điều trị bằng bốn nhóm: chẹn beta, thuốc kháng giáp (ưu tiên propylthiouracil), iod vô cơ và corticoid. Iod bắt buộc phải dùng ít nhất một giờ sau thuốc kháng giáp, và aspirin chống chỉ định vì làm tăng hormone giáp tự do."
    },

    {
      spec: "Thận – Điện giải",
      task: "Bước tiếp theo trong chẩn đoán",
      short: "Thiểu niệu sau tiêu chảy kéo dài",
      vignette: [
        "Nam 74 tuổi được đưa vào viện vì mệt và tiểu ít dần trong ba ngày. Trước đó bệnh nhân tiêu chảy phân lỏng nhiều lần mỗi ngày suốt một tuần sau chuyến du lịch, ăn uống kém và gần như không uống nước.",
        "Tiền sử tăng huyết áp, dùng lisinopril và hydrochlorothiazide; không dùng thuốc kháng viêm, không chụp thuốc cản quang gần đây, không dùng kháng sinh nhóm aminoglycosid.",
        "Khám: niêm mạc khô, mắt trũng, dấu véo da mất chậm, tĩnh mạch cổ xẹp, huyết áp tụt 24 mm Hg khi chuyển từ nằm sang đứng. Không phù, không cầu bàng quang. Siêu âm: hai thận kích thước bình thường, không giãn đài bể thận, không sỏi."
      ],
      vitals: [
        ["Nhiệt độ", "36,9 °C"],
        ["Huyết áp", "96/58"],
        ["Mạch", "108 l/ph"],
        ["Nhịp thở", "18 l/ph"],
        ["SpO2", "97% khí trời"]
      ],
      labs: {
        title: "Xét nghiệm",
        rows: [
          ["Creatinine (nền 3 tháng trước 0,9)", "3,2 mg/dL", "0,6–1,2", "hi"],
          ["Ure máu", "78 mg/dL", "7–20", "hi"],
          ["Natri niệu", "12 mEq/L", "—", ""],
          ["Phân suất thải natri (FENa)", "0,4%", "—", ""],
          ["Áp lực thẩm thấu niệu", "620 mOsm/kg", "—", ""],
          ["Cặn nước tiểu", "Trụ trong, không trụ hạt bùn", "—", ""]
        ]
      },
      stem: "Chẩn đoán và bước xử trí tiếp theo phù hợp nhất là gì?",
      choices: [
        "Tổn thương thận cấp trước thận — bù dịch tinh thể tĩnh mạch và ngưng lisinopril cùng lợi tiểu",
        "Hoại tử ống thận cấp — bù dịch dè dặt và chuẩn bị lọc máu",
        "Viêm thận kẽ cấp — bắt đầu corticoid",
        "Tổn thương thận cấp sau thận — đặt sonde tiểu giải áp",
        "Viêm cầu thận cấp — sinh thiết thận"
      ],
      answer: 0,
      why: [
        "Toàn bộ dữ kiện hướng tới <b>tổn thương thận cấp trước thận</b> do giảm thể tích: mất dịch qua tiêu chảy, uống kém, dấu mất nước rõ trên lâm sàng, tụt huyết áp tư thế.",
        "Bộ chỉ số nước tiểu khẳng định chẩn đoán. Thận còn <b>nguyên vẹn về chức năng ống thận</b> nên đáp ứng đúng cách với giảm tưới máu: giữ natri tối đa (<b>natri niệu 12 mEq/L, FENa 0,4%</b>), cô đặc nước tiểu mạnh (<b>620 mOsm/kg</b>), và <b>cặn nước tiểu sạch</b>. Tỉ lệ ure trên creatinine là 24, trên ngưỡng 20 điển hình của nguyên nhân trước thận do tăng tái hấp thu ure theo natri và nước.",
        "Xử trí là <b>bù dịch tinh thể</b> và <b>ngưng các thuốc làm nặng thêm</b>: lợi tiểu gây mất dịch tiếp, còn ức chế men chuyển làm giãn tiểu động mạch đi và hạ áp lực lọc cầu thận đúng lúc tưới máu thận đang thấp. Nếu bù dịch đủ mà creatinine không cải thiện sau 24–72 giờ, phải nghĩ tổn thương đã chuyển sang hoại tử ống thận cấp."
      ],
      wrongs: {
        1: "Hoại tử ống thận cấp cho hình ảnh ngược lại: ống thận mất khả năng cô đặc và giữ natri, nên <b>FENa &gt; 2%</b>, natri niệu &gt; 40 mEq/L, áp lực thẩm thấu niệu gần đẳng trương và cặn nước tiểu có <b>trụ hạt màu nâu bùn</b>. Bệnh nhân này không có dấu hiệu nào như vậy.",
        2: "Viêm thận kẽ cấp thường do thuốc — kháng sinh beta-lactam, thuốc kháng viêm, thuốc ức chế bơm proton — với sốt, ban da, tăng bạch cầu ái toan và bạch cầu trong nước tiểu. Bệnh nhân không dùng các thuốc này và không có hội chứng dị ứng.",
        3: "Nguyên nhân sau thận cần bằng chứng tắc nghẽn: cầu bàng quang, giãn đài bể thận trên siêu âm, tiền sử phì đại tuyến tiền liệt hay sỏi. Siêu âm ở đây hoàn toàn bình thường.",
        4: "Viêm cầu thận biểu hiện bằng tiểu máu với hồng cầu biến dạng, trụ hồng cầu, protein niệu và thường có tăng huyết áp cùng phù — trái ngược với bệnh cảnh giảm thể tích và cặn nước tiểu sạch ở đây."
      },
      objective:
        "Tổn thương thận cấp trước thận có FENa dưới 1%, natri niệu thấp, nước tiểu cô đặc, tỉ lệ ure trên creatinine trên 20 và cặn nước tiểu sạch; xử trí là bù dịch và ngưng lợi tiểu cùng thuốc ức chế hệ renin. Hoại tử ống thận cấp thì FENa trên 2% và có trụ hạt nâu bùn."
    },

    {
      spec: "Thận – Điện giải",
      task: "Bước xử trí tiếp theo",
      short: "Tăng kali máu kèm biến đổi điện tâm đồ",
      vignette: [
        "Nam 63 tuổi bệnh thận mạn giai đoạn 4 đến khám vì mệt mỏi và yếu cơ hai chân tăng dần trong hai ngày. Bệnh nhân được kê thêm spironolactone cách đây 10 ngày vì suy tim, đồng thời vẫn đang dùng lisinopril.",
        "Bệnh nhân kể có ăn nhiều chuối và uống nước dừa vì nghe nói tốt cho thận. Không nôn, không tiêu chảy, không dùng thuốc kháng viêm.",
        "Điện tâm đồ tại giường: <b>sóng T cao nhọn đối xứng ở các chuyển đạo trước tim, sóng P dẹt gần như biến mất, phức bộ QRS giãn rộng 0,14 giây</b>. Nhịp đều 62 lần/phút."
      ],
      vitals: [
        ["Nhiệt độ", "36,7 °C"],
        ["Huyết áp", "132/78"],
        ["Mạch", "62 l/ph"],
        ["Nhịp thở", "16 l/ph"],
        ["SpO2", "97% khí trời"]
      ],
      labs: {
        title: "Xét nghiệm cấp cứu",
        rows: [
          ["Kali", "7,4 mEq/L", "3,5–5,0", "hi"],
          ["Natri", "137 mEq/L", "135–145", ""],
          ["Bicarbonat", "18 mEq/L", "22–28", "lo"],
          ["Creatinine", "3,8 mg/dL", "0,6–1,2", "hi"],
          ["Mức lọc cầu thận ước tính", "17 mL/ph/1,73m²", "> 90", "lo"],
          ["Canxi toàn phần", "8,4 mg/dL", "8,5–10,5", "lo"],
          ["Glucose", "108 mg/dL", "70–100", "hi"]
        ]
      },
      stem: "Bước xử trí đầu tiên tốt nhất là gì?",
      choices: [
        "Tiêm tĩnh mạch canxi gluconat",
        "Truyền insulin thường kèm glucose ưu trương",
        "Khí dung salbutamol liều cao",
        "Cho natri polystyrene sulfonat hoặc patiromer đường uống",
        "Chuẩn bị lọc máu cấp cứu"
      ],
      answer: 0,
      why: [
        "Bệnh nhân có <b>tăng kali máu nặng kèm biến đổi điện tâm đồ tiến triển</b>: sóng T cao nhọn, mất sóng P và QRS giãn rộng. Giai đoạn tiếp theo là sóng hình sin rồi rung thất hoặc vô tâm thu — có thể xảy ra trong vài phút.",
        "Vì vậy việc <b>đầu tiên</b> phải làm là <b>ổn định màng tế bào cơ tim bằng canxi</b>, thường 1 g canxi gluconat tĩnh mạch trong 2–3 phút. Canxi <b>không làm giảm kali máu chút nào</b>, nhưng nó nâng ngưỡng khử cực của tế bào cơ tim, đối kháng ngay tác dụng gây loạn nhịp của kali và có tác dụng trong vòng vài phút, kéo dài khoảng 30–60 phút.",
        "Sau khi tim đã được bảo vệ mới lần lượt tiến hành: <b>đẩy kali vào tế bào</b> bằng insulin kèm glucose, salbutamol khí dung và bicarbonat nếu có toan chuyển hóa; rồi <b>thải kali ra khỏi cơ thể</b> bằng lợi tiểu quai, thuốc gắn kali đường uống hoặc lọc máu. Đồng thời phải <b>ngưng ngay spironolactone và lisinopril</b> và hạn chế thực phẩm giàu kali."
      ],
      wrongs: {
        1: "Insulin kèm glucose là bước quan trọng tiếp theo và hạ kali khoảng 0,5–1 mEq/L, nhưng phải mất 15–30 phút mới có tác dụng. Trong khoảng thời gian đó, quả tim với QRS giãn rộng vẫn có thể rung thất, nên nó không phải bước đầu tiên.",
        2: "Salbutamol liều cao cũng đẩy kali vào tế bào nhưng khởi phát chậm, hiệu quả thay đổi nhiều giữa các bệnh nhân, và không bảo vệ cơ tim tức thì.",
        3: "Các thuốc gắn kali ở ruột thải kali thật sự nhưng tác dụng tính bằng giờ. Chúng thuộc bước xử trí sau, không dùng cho cấp cứu điện tâm đồ.",
        4: "Lọc máu là biện pháp thải kali hiệu quả nhất và bệnh nhân này rất có thể sẽ cần, nhưng chuẩn bị và thực hiện mất thời gian. Không bao giờ để bệnh nhân chờ máy lọc mà chưa được tiêm canxi."
      },
      objective:
        "Tăng kali máu có biến đổi điện tâm đồ cần tiêm canxi tĩnh mạch ngay để ổn định màng tế bào cơ tim, dù canxi không hạ kali. Sau đó mới đẩy kali vào tế bào bằng insulin kèm glucose và salbutamol, rồi thải kali bằng thuốc gắn kali, lợi tiểu hoặc lọc máu, đồng thời ngưng thuốc gây tăng kali."
    },

    {
      spec: "Nhiễm khuẩn",
      task: "Bước tiếp theo trong chẩn đoán",
      short: "Sốt kéo dài kèm tiếng thổi mới ở người tiêm chích",
      vignette: [
        "Nam 34 tuổi tiêm chích ma túy đường tĩnh mạch đến cấp cứu vì sốt cao rét run kéo dài 12 ngày, mệt nhiều, sụt 4 kg. Bệnh nhân đã tự uống amoxicillin ba ngày nhưng không đỡ.",
        "Khám: sốt cao, vẻ nhiễm trùng. Tim có <b>tiếng thổi tâm thu mới ở bờ trái xương ức, tăng lên khi hít vào</b>. Phổi có ran ẩm rải rác hai bên. Nhiều vết tiêm chích cũ và mới ở hố khuỷu hai bên. Có vài nốt xuất huyết nhỏ ở kết mạc và <b>các nốt Janeway không đau ở lòng bàn tay</b>.",
        "X-quang ngực: nhiều đám mờ tròn rải rác hai phổi, một số có hình hang nhỏ."
      ],
      vitals: [
        ["Nhiệt độ", "39,2 °C"],
        ["Huyết áp", "108/62"],
        ["Mạch", "116 l/ph"],
        ["Nhịp thở", "24 l/ph"],
        ["SpO2", "93% khí trời"]
      ],
      labs: {
        title: "Xét nghiệm",
        rows: [
          ["Bạch cầu", "18.900/mm³", "4.000–11.000", "hi"],
          ["Hemoglobin", "9,9 g/dL", "13,5–17,5", "lo"],
          ["CRP", "184 mg/L", "< 5", "hi"],
          ["Creatinine", "1,4 mg/dL", "0,6–1,2", "hi"],
          ["Hồng cầu niệu", "25–30/vi trường", "0–2", "hi"]
        ]
      },
      stem: "Bước tiếp theo tốt nhất trong chẩn đoán là gì?",
      choices: [
        "Cấy máu ba mẫu ở ba vị trí khác nhau trước khi dùng kháng sinh, rồi siêu âm tim",
        "Siêu âm tim qua thực quản ngay, chưa cần cấy máu",
        "Chụp cắt lớp ngực có cản quang để đánh giá tổn thương phổi",
        "Bắt đầu vancomycin theo kinh nghiệm và đánh giá lại sau 72 giờ",
        "Xét nghiệm huyết thanh chẩn đoán nhiễm nấm xâm lấn"
      ],
      answer: 0,
      why: [
        "Bệnh cảnh là <b>viêm nội tâm mạc nhiễm khuẩn van ba lá</b> ở người tiêm chích: sốt kéo dài, tiếng thổi mới <b>tăng khi hít vào</b> (đặc trưng của bệnh lý van tim bên phải), và <b>thuyên tắc nhiễm khuẩn lên phổi</b> tạo các nốt mờ có hang. Nốt Janeway và tiểu máu vi thể là các hiện tượng mạch máu và miễn dịch đi kèm.",
        "Chẩn đoán dựa trên <b>tiêu chuẩn Duke</b>, mà hai tiêu chuẩn chính là <b>cấy máu dương tính với vi khuẩn điển hình</b> và <b>bằng chứng tổn thương nội tâm mạc trên siêu âm tim</b>. Vì vậy bước đầu tiên là <b>cấy máu ít nhất ba mẫu, lấy ở ba vị trí khác nhau, cách nhau ít nhất một giờ, trước khi dùng kháng sinh</b>.",
        "Thứ tự này quan trọng vì kháng sinh làm cấy máu âm tính giả và khiến bệnh nhân phải điều trị kéo dài 4–6 tuần mà không bao giờ biết được tác nhân hay kháng sinh đồ. Ở người tiêm chích, tác nhân hàng đầu là <b>tụ cầu vàng</b>. Siêu âm tim qua thành ngực làm ngay sau đó; nếu âm tính mà nghi ngờ vẫn cao thì chuyển sang siêu âm qua thực quản."
      ],
      wrongs: {
        1: "Siêu âm qua thực quản có độ nhạy cao nhất nhưng chỉ cung cấp <b>một</b> trong hai tiêu chuẩn chính, và không cho biết tác nhân. Với van ba lá, siêu âm qua thành ngực thường đã đủ nhìn thấy sùi vì van nằm ở vị trí trước.",
        2: "Các nốt mờ có hang trên phim đã được giải thích trọn vẹn bằng thuyên tắc nhiễm khuẩn từ van ba lá. Cắt lớp ngực không thay đổi hướng xử trí và không xác định được tác nhân.",
        3: "Dùng kháng sinh trước khi cấy máu ở bệnh nhân <b>huyết động ổn định</b> và bệnh diễn tiến bán cấp là sai lầm cổ điển. Chỉ khi bệnh nhân nhiễm khuẩn huyết nặng hoặc sốc mới cấy nhanh rồi dùng kháng sinh ngay.",
        4: "Viêm nội tâm mạc do nấm hiếm hơn nhiều và thường gặp ở người có van nhân tạo, catheter lâu ngày hoặc suy giảm miễn dịch nặng. Cấy máu thường quy vẫn là bước đầu tiên."
      },
      objective:
        "Nghi viêm nội tâm mạc nhiễm khuẩn thì phải cấy máu ba mẫu ở ba vị trí trước khi dùng kháng sinh, rồi siêu âm tim — đó là hai tiêu chuẩn chính của Duke. Ở người tiêm chích, van ba lá thường bị tổn thương nhất, gây tiếng thổi tăng khi hít vào và thuyên tắc nhiễm khuẩn lên phổi."
    },

    {
      spec: "Nhiễm khuẩn",
      task: "Bước xử trí tiếp theo",
      short: "Khó thở tăng dần ở bệnh nhân HIV chưa điều trị",
      vignette: [
        "Nam 39 tuổi nhiễm HIV phát hiện bốn năm trước nhưng bỏ điều trị kháng retrovirus từ hai năm nay, đến khám vì khó thở khi gắng sức tăng dần trong ba tuần, ho khan và sốt nhẹ về chiều. Sụt 8 kg trong ba tháng.",
        "Khám: gầy, nấm miệng dạng mảng trắng ở lưỡi và vòm khẩu cái. Phổi nghe gần như bình thường, chỉ vài ran nổ rất nhẹ hai đáy — không tương xứng với mức độ khó thở. SpO2 lúc nghỉ 93%, <b>giảm xuống 84% sau khi đi bộ 50 mét</b>.",
        "X-quang ngực: thâm nhiễm kẽ dạng lưới lan tỏa hai bên đối xứng, ưu thế quanh rốn phổi, không tràn dịch, không hạch rốn phổi."
      ],
      vitals: [
        ["Nhiệt độ", "38,1 °C"],
        ["Huyết áp", "112/70"],
        ["Mạch", "104 l/ph"],
        ["Nhịp thở", "26 l/ph"],
        ["SpO2", "93% khí trời khi nghỉ"]
      ],
      labs: {
        title: "Xét nghiệm",
        rows: [
          ["Số lượng CD4", "68/mm³", "500–1.500", "lo"],
          ["Tải lượng HIV", "184.000 bản sao/mL", "—", "hi"],
          ["LDH", "612 U/L", "140–280", "hi"],
          ["Beta-D-glucan huyết thanh", "324 pg/mL", "< 80", "hi"],
          ["PaO2 khí máu động mạch", "64 mm Hg", "80–100", "lo"],
          ["Chênh áp oxy phế nang – động mạch", "42 mm Hg", "< 15", "hi"]
        ]
      },
      stem: "Bước xử trí tiếp theo tốt nhất là gì?",
      choices: [
        "Trimethoprim-sulfamethoxazole liều cao kèm prednisone",
        "Trimethoprim-sulfamethoxazole liều cao đơn thuần",
        "Bắt đầu ngay điều trị kháng retrovirus trước khi dùng kháng sinh",
        "Phác đồ chống lao bốn thuốc",
        "Ceftriaxone kết hợp azithromycin theo phác đồ viêm phổi cộng đồng"
      ],
      answer: 0,
      why: [
        "Bệnh cảnh là <b>viêm phổi do <i>Pneumocystis jirovecii</i></b>: CD4 dưới 200, khó thở tăng dần bán cấp, ho khan, <b>phổi nghe nghèo nàn không tương xứng với mức thiếu oxy</b>, giảm bão hòa rõ khi gắng sức, thâm nhiễm kẽ lan tỏa hai bên, LDH và beta-D-glucan tăng.",
        "Điều trị đặc hiệu là <b>trimethoprim-sulfamethoxazole liều cao</b> trong 21 ngày. Điểm quyết định trong câu này là chỉ định <b>corticoid bổ trợ</b>: bắt buộc thêm khi có <b>PaO₂ dưới 70 mm Hg khí trời</b> hoặc <b>chênh áp oxy phế nang – động mạch trên 35 mm Hg</b>. Bệnh nhân này thỏa cả hai tiêu chí.",
        "Lý do là kháng sinh giết nấm hàng loạt gây phản ứng viêm dữ dội trong phế nang, làm oxy hóa máu <b>xấu đi trong 3–5 ngày đầu</b>. Corticoid dùng trước hoặc cùng lúc với liều kháng sinh đầu tiên làm giảm rõ rệt suy hô hấp và tử vong. Điều trị kháng retrovirus sẽ bắt đầu sau đó, thường trong vòng hai tuần."
      ],
      wrongs: {
        1: "Đúng thuốc nhưng <b>thiếu corticoid</b>, trong khi bệnh nhân đã thỏa tiêu chí về khí máu. Bỏ corticoid ở nhóm này làm tăng nguy cơ suy hô hấp phải thở máy và tăng tử vong.",
        2: "Điều trị kháng retrovirus là cần thiết nhưng không bao giờ đi trước điều trị nhiễm trùng cơ hội đang đe dọa tính mạng. Bắt đầu quá sớm còn có nguy cơ hội chứng viêm phục hồi miễn dịch làm bệnh phổi nặng thêm.",
        3: "Lao phổi ở bệnh nhân HIV thường cho hình ảnh thâm nhiễm thùy trên, hạch rốn phổi, tràn dịch hoặc hình ảnh lan tỏa dạng kê, và diễn tiến kéo dài hơn với ho có đờm. Beta-D-glucan tăng không phù hợp với lao.",
        4: "Viêm phổi vi khuẩn điển hình cho đông đặc thùy, ho đờm mủ, khởi phát cấp trong vài ngày và không gây chênh áp oxy lớn với phổi nghe gần bình thường như vậy."
      },
      objective:
        "Viêm phổi do Pneumocystis ở bệnh nhân CD4 dưới 200 biểu hiện khó thở bán cấp, phổi nghe nghèo nàn, thâm nhiễm kẽ lan tỏa và LDH tăng. Điều trị bằng trimethoprim-sulfamethoxazole liều cao, và bắt buộc thêm corticoid khi PaO₂ dưới 70 mm Hg hoặc chênh áp oxy phế nang – động mạch trên 35 mm Hg."
    },


    {
      spec: "Nhiễm khuẩn",
      task: "Bước xử trí tiếp theo",
      short: "Ho ra máu kéo dài kèm hang thùy trên",
      vignette: [
        "Nam 46 tuổi nhập viện vì ho kéo dài 10 tuần, hai tuần nay có ho ra máu lượng ít. Bệnh nhân sốt về chiều, <b>ra mồ hôi đầm đìa về đêm</b> và sụt 9 kg trong ba tháng. Bệnh nhân sống trong khu nhà trọ đông người và mới ra tù cách đây một năm.",
        "Khám: gầy, ran nổ vùng đỉnh phổi phải. Không hạch ngoại vi lớn, không gan lách to. Xét nghiệm HIV âm tính.",
        "X-quang ngực: <b>thâm nhiễm thùy trên phổi phải kèm một hang thành dày</b>, không tràn dịch màng phổi. Bệnh nhân hiện đang nằm ở buồng bệnh sáu giường cùng các bệnh nhân khác."
      ],
      vitals: [
        ["Nhiệt độ", "38,3 °C"],
        ["Huyết áp", "118/72"],
        ["Mạch", "94 l/ph"],
        ["Nhịp thở", "20 l/ph"],
        ["SpO2", "96% khí trời"]
      ],
      labs: {
        title: "Xét nghiệm",
        rows: [
          ["Bạch cầu", "11.400/mm³", "4.000–11.000", "hi"],
          ["Hemoglobin", "10,6 g/dL", "13,5–17,5", "lo"],
          ["Natri", "131 mEq/L", "135–145", "lo"],
          ["Albumin", "3,0 g/dL", "3,5–5,5", "lo"],
          ["CD4", "Không chỉ định (HIV âm tính)", "—", ""]
        ]
      },
      stem: "Bước xử trí tiếp theo tốt nhất là gì?",
      choices: [
        "Chuyển ngay sang phòng cách ly áp lực âm và lấy ba mẫu đờm tìm trực khuẩn kháng cồn kháng acid",
        "Bắt đầu phác đồ chống lao bốn thuốc ngay, chưa cần cách ly",
        "Làm phản ứng lao tố trong da và chờ kết quả sau 48–72 giờ",
        "Nội soi phế quản lấy dịch rửa phế quản phế nang trong hôm nay",
        "Điều trị kháng sinh phổ rộng cho viêm phổi hoại tử và chụp lại phim sau một tuần"
      ],
      answer: 0,
      why: [
        "Bệnh cảnh điển hình của <b>lao phổi hoạt động</b>: ho trên ba tuần, ho ra máu, sốt về chiều, đổ mồ hôi đêm, sụt cân, cùng yếu tố dịch tễ là sống tập thể và tiền sử ở trại giam. Hình ảnh <b>hang ở thùy trên</b> là dạng lao thứ phát kinh điển do vùng này có áp lực oxy cao nhất.",
        "Ưu tiên tuyệt đối là <b>kiểm soát lây truyền</b>. Lao lan qua giọt khí dung lơ lửng, nên bệnh nhân phải được chuyển ngay sang <b>phòng cách ly áp lực âm</b>, nhân viên dùng khẩu trang lọc hạt N95. Bệnh nhân đang nằm chung buồng sáu giường là một nguy cơ lây nhiễm đang diễn ra từng giờ.",
        "Song song, lấy <b>ba mẫu đờm cách nhau ít nhất 8 giờ, trong đó có một mẫu buổi sáng sớm</b>, để soi tìm trực khuẩn kháng cồn kháng acid, làm xét nghiệm khuếch đại acid nucleic và nuôi cấy kèm kháng sinh đồ. Xét nghiệm khuếch đại acid nucleic cho kết quả trong vài giờ và phát hiện được cả đột biến kháng rifampicin. Sau khi lấy mẫu, bắt đầu phác đồ bốn thuốc isoniazid, rifampicin, pyrazinamid và ethambutol kèm bổ sung pyridoxin."
      ],
      wrongs: {
        1: "Dùng thuốc là đúng nhưng bỏ cách ly là sai sót nghiêm trọng về kiểm soát nhiễm khuẩn: bệnh nhân vẫn lây cho cả buồng bệnh trong nhiều ngày trước khi đờm chuyển âm. Ngoài ra cần lấy mẫu vi sinh trước khi dùng thuốc để còn nuôi cấy và làm kháng sinh đồ.",
        2: "Phản ứng lao tố trong da chỉ cho biết đã <b>nhiễm</b> lao, không phân biệt được lao tiềm ẩn với lao hoạt động, và có thể âm tính giả ở bệnh nhân lao nặng hay suy dinh dưỡng. Nó vô dụng khi đã có hình ảnh hang và triệu chứng rõ.",
        3: "Nội soi phế quản chỉ đặt ra khi bệnh nhân không khạc được đờm hoặc ba mẫu đờm âm tính mà nghi ngờ vẫn cao. Nó là thủ thuật sinh khí dung, làm tăng nguy cơ lây cho nhân viên nếu thực hiện khi chưa có biện pháp bảo hộ đầy đủ.",
        4: "Viêm phổi hoại tử do vi khuẩn thường diễn tiến cấp trong vài ngày với sốt cao và bệnh nhân trông nặng, chứ không phải bệnh sử mười tuần kèm sụt cân và mồ hôi đêm. Trì hoãn một tuần để chụp lại phim vừa chậm điều trị vừa kéo dài thời gian lây."
      },
      objective:
        "Ho trên ba tuần kèm sốt về chiều, mồ hôi đêm, sụt cân và hang thùy trên là lao phổi hoạt động cho tới khi chứng minh ngược lại. Việc đầu tiên là cách ly áp lực âm, sau đó lấy ba mẫu đờm soi, xét nghiệm khuếch đại acid nucleic và nuôi cấy trước khi bắt đầu phác đồ bốn thuốc."
    },

    {
      spec: "Huyết học",
      task: "Bước tiếp theo trong chẩn đoán",
      short: "Thiếu máu thiếu sắt ở nam giới 62 tuổi",
      vignette: [
        "Nam 62 tuổi đến khám vì mệt mỏi và khó thở khi leo cầu thang trong bốn tháng. Bệnh nhân không đau ngực, không sốt, không sụt cân rõ. Đi ngoài phân bình thường về màu sắc, không thấy máu đỏ, thỉnh thoảng có táo bón xen kẽ.",
        "Bệnh nhân ăn uống đầy đủ, không ăn chay, không dùng thuốc kháng viêm, không uống rượu. Tiền sử gia đình: bố mất vì ung thư đại tràng năm 70 tuổi. Bệnh nhân chưa từng nội soi đại tràng.",
        "Khám: da niêm nhợt, móng tay lõm hình thìa. Bụng mềm, không sờ thấy khối, gan lách không to. Thăm trực tràng: không sờ thấy khối, phân có máu ẩn dương tính."
      ],
      vitals: [
        ["Nhiệt độ", "36,7 °C"],
        ["Huyết áp", "128/76"],
        ["Mạch", "92 l/ph"],
        ["Nhịp thở", "16 l/ph"],
        ["BMI", "24 kg/m²"]
      ],
      labs: {
        title: "Công thức máu và sắt",
        rows: [
          ["Hemoglobin", "8,6 g/dL", "13,5–17,5", "lo"],
          ["MCV", "71 fL", "80–100", "lo"],
          ["RDW", "18,4%", "11,5–14,5", "hi"],
          ["Ferritin", "7 ng/mL", "15–200", "lo"],
          ["Sắt huyết thanh", "24 µg/dL", "60–170", "lo"],
          ["Khả năng gắn sắt toàn phần", "462 µg/dL", "250–400", "hi"],
          ["Độ bão hòa transferrin", "5%", "20–50", "lo"],
          ["Tiểu cầu", "486.000/mm³", "150.000–400.000", "hi"]
        ]
      },
      stem: "Bước tiếp theo tốt nhất là gì?",
      choices: [
        "Nội soi đại tràng toàn bộ kết hợp nội soi dạ dày tá tràng",
        "Bổ sung sắt uống và kiểm tra lại công thức máu sau ba tháng",
        "Truyền sắt tĩnh mạch rồi theo dõi",
        "Điện di huyết sắc tố tìm bệnh thalassemia",
        "Xét nghiệm máu ẩn trong phân lặp lại ba lần"
      ],
      answer: 0,
      why: [
        "Xét nghiệm khẳng định <b>thiếu máu thiếu sắt</b>: hồng cầu nhỏ nhược sắc, ferritin rất thấp, độ bão hòa transferrin thấp, khả năng gắn sắt tăng và tiểu cầu tăng phản ứng.",
        "Nguyên tắc then chốt: <b>ở nam giới trưởng thành và phụ nữ sau mãn kinh, thiếu máu thiếu sắt là mất máu qua đường tiêu hóa cho tới khi chứng minh được điều ngược lại</b>. Họ không có nguồn mất sắt sinh lý như kinh nguyệt, còn chế độ ăn ở người ăn uống bình thường gần như không bao giờ đủ gây thiếu sắt nặng như vậy.",
        "Vì vậy bắt buộc phải <b>soi cả đường tiêu hóa trên và dưới</b> trong cùng đợt khảo sát. Ung thư đại tràng phải, đặc biệt là manh tràng, là chẩn đoán phải loại trừ đầu tiên: khối u ở đây thường chảy máu rỉ rả kín đáo và chỉ biểu hiện bằng thiếu máu, vì phân còn lỏng nên không gây tắc hay thay đổi thói quen đi ngoài rõ rệt. Bệnh nhân còn có tiền sử gia đình bậc một mắc ung thư đại tràng."
      ],
      wrongs: {
        1: "Bổ sung sắt sẽ làm hemoglobin tăng lên và <b>che lấp</b> dấu hiệu duy nhất đang chỉ điểm khối u, khiến chẩn đoán ung thư bị lùi lại nhiều tháng. Sắt được bổ sung nhưng phải làm song song với việc tìm nguyên nhân, không thay thế nó.",
        2: "Truyền sắt tĩnh mạch dành cho bệnh nhân không dung nạp hoặc kém hấp thu sắt uống. Đường dùng không phải vấn đề ở đây — vấn đề là chưa tìm ra nguồn mất máu.",
        3: "Thalassemia thể nhẹ cũng gây hồng cầu nhỏ nhưng có <b>ferritin bình thường hoặc tăng</b>, RDW thường bình thường và số lượng hồng cầu không giảm tương xứng. Ferritin 7 ng/mL đã khẳng định thiếu sắt thật sự.",
        4: "Máu ẩn trong phân là công cụ <b>tầm soát ở người không triệu chứng</b>. Ở bệnh nhân đã có thiếu máu thiếu sắt rõ, kết quả âm tính cũng không loại trừ được gì vì khối u chảy máu ngắt quãng — nội soi vẫn phải làm."
      },
      objective:
        "Thiếu máu thiếu sắt ở nam giới hoặc phụ nữ sau mãn kinh phải được xem là mất máu qua đường tiêu hóa và cần nội soi cả trên lẫn dưới, ưu tiên loại trừ ung thư đại tràng phải. Bổ sung sắt đơn thuần che lấp dấu hiệu chỉ điểm và làm chậm chẩn đoán ác tính."
    },

    {
      spec: "Thần kinh",
      task: "Bước xử trí tiếp theo",
      short: "Liệt nửa người khởi phát 100 phút trước",
      vignette: [
        "Nữ 67 tuổi được người nhà đưa vào cấp cứu. Bệnh nhân đang ăn sáng thì đột ngột nói khó và yếu hẳn nửa người phải; người nhà xác định chính xác thời điểm khởi phát là <b>100 phút trước</b> khi tới viện.",
        "Tiền sử: tăng huyết áp, rung nhĩ nhưng không dùng kháng đông vì bệnh nhân tự bỏ. Không chấn thương đầu, không phẫu thuật, không xuất huyết tiêu hóa, không đột quỵ trước đây, không dùng thuốc chống đông.",
        "Khám: tỉnh, thất ngôn kiểu Broca, liệt mặt trung ương phải, sức cơ tay phải 1/5 và chân phải 3/5, Babinski phải dương tính. Điểm NIHSS là 14. Đường huyết mao mạch 132 mg/dL.",
        "Chụp cắt lớp vi tính sọ não không cản quang: <b>không có xuất huyết</b>, không thấy tổn thương giảm tỉ trọng rõ, không hiệu ứng choán chỗ."
      ],
      vitals: [
        ["Nhiệt độ", "36,8 °C"],
        ["Huyết áp", "168/94"],
        ["Mạch", "96 l/ph, không đều"],
        ["Nhịp thở", "18 l/ph"],
        ["SpO2", "97% khí trời"]
      ],
      labs: {
        title: "Xét nghiệm cấp cứu",
        rows: [
          ["Tiểu cầu", "232.000/mm³", "150.000–400.000", ""],
          ["INR", "1,0", "0,8–1,1", ""],
          ["aPTT", "28 giây", "25–35", ""],
          ["Glucose", "132 mg/dL", "70–100", "hi"],
          ["Creatinine", "0,9 mg/dL", "0,6–1,2", ""]
        ]
      },
      stem: "Bước xử trí tiếp theo tốt nhất là gì?",
      choices: [
        "Truyền alteplase tĩnh mạch ngay",
        "Cho aspirin 325 mg và nhập khoa đột quỵ theo dõi",
        "Hạ huyết áp về dưới 140/90 rồi mới cân nhắc điều trị",
        "Bắt đầu heparin truyền tĩnh mạch vì có rung nhĩ",
        "Chụp cộng hưởng từ sọ não trước khi quyết định điều trị"
      ],
      answer: 0,
      why: [
        "Bệnh nhân bị <b>đột quỵ thiếu máu não cấp</b> — nhiều khả năng do lấp mạch từ tim trên nền rung nhĩ không kháng đông — và đang ở trong <b>cửa sổ 4,5 giờ</b> của tiêu sợi huyết tĩnh mạch. Thời điểm khởi phát được xác định chắc chắn, cắt lớp đã loại trừ xuất huyết, và bệnh nhân không có chống chỉ định nào.",
        "Huyết áp 168/94 <b>nằm trong ngưỡng cho phép</b>: giới hạn để dùng tiêu sợi huyết là dưới <b>185/110 mm Hg</b>. Đường huyết trong khoảng an toàn (trên 50 và dưới 400 mg/dL), tiểu cầu trên 100.000, INR dưới 1,7. Thiếu sót vận động nặng với NIHSS 14 nghĩa là không phải khiếm khuyết quá nhẹ để bỏ qua.",
        "<b>Thời gian là não</b>: mỗi phút trì hoãn làm mất khoảng 1,9 triệu nơ-ron, và lợi ích của tiêu sợi huyết giảm dần theo từng phút. Sau khi truyền alteplase, huyết áp cần giữ dưới 180/105 mm Hg trong 24 giờ, và mọi thuốc kháng đông hay kháng kết tập tiểu cầu phải hoãn 24 giờ. Song song vẫn đánh giá chỉ định lấy huyết khối bằng dụng cụ nếu có tắc mạch lớn."
      ],
      wrongs: {
        1: "Aspirin là điều trị cho bệnh nhân <b>ngoài</b> cửa sổ tiêu sợi huyết hoặc có chống chỉ định. Dùng aspirin thay cho alteplase ở bệnh nhân đủ điều kiện là bỏ mất can thiệp hiệu quả nhất, và còn làm tăng nguy cơ chảy máu nếu sau đó vẫn truyền tiêu sợi huyết.",
        2: "Hạ huyết áp tích cực trong đột quỵ thiếu máu cấp làm <b>giảm tưới máu vùng tranh tối tranh sáng</b> và mở rộng ổ nhồi máu. Chỉ hạ áp khi vượt 185/110 trước tiêu sợi huyết, hoặc vượt 220/120 nếu không dùng tiêu sợi huyết.",
        3: "Heparin không có vai trò trong giai đoạn cấp của đột quỵ do lấp mạch từ tim: nó không cải thiện kết cục thần kinh và làm tăng nguy cơ chuyển dạng xuất huyết. Kháng đông cho rung nhĩ được bắt đầu sau vài ngày tùy kích thước ổ nhồi máu.",
        4: "Cộng hưởng từ nhạy hơn với nhồi máu sớm nhưng mất thời gian và <b>không bắt buộc</b> để ra quyết định: cắt lớp không cản quang loại trừ xuất huyết là đủ điều kiện để dùng tiêu sợi huyết trong cửa sổ."
      },
      objective:
        "Đột quỵ thiếu máu não trong vòng 4,5 giờ, đã loại trừ xuất huyết trên cắt lớp và không có chống chỉ định, cần truyền alteplase càng sớm càng tốt. Huyết áp chỉ cần dưới 185/110 trước khi truyền, và hạ áp quá tay làm mở rộng ổ nhồi máu."
    },

    {
      spec: "Thần kinh",
      task: "Bước xử trí tiếp theo",
      short: "Yếu cơ dao động kèm suy hô hấp tiến triển",
      vignette: [
        "Nữ 45 tuổi nhược cơ chẩn đoán hai năm trước, đang dùng pyridostigmine, nhập viện vì yếu toàn thân tăng nhanh trong bốn ngày sau một đợt viêm phổi. Bệnh nhân sụp mi hai bên, nhìn đôi, nói giọng mũi và <b>sặc khi uống nước</b>.",
        "Hôm nay bệnh nhân thở nông nhanh, không nói hết được một câu dài, phải ngồi để thở. Khám: sụp mi tăng khi nhìn lên kéo dài, yếu cơ gốc chi, yếu cơ cổ không giữ được đầu, phản xạ gân xương bình thường, không rối loạn cảm giác.",
        "Đo tại giường: <b>dung tích sống gắng sức 14 mL/kg</b> và <b>áp lực hít vào tối đa −22 cm H₂O</b>, cả hai đều xấu đi so với 4 giờ trước. Khí máu hiện tại PaCO₂ 46 mm Hg."
      ],
      vitals: [
        ["Nhiệt độ", "37,4 °C"],
        ["Huyết áp", "138/84"],
        ["Mạch", "108 l/ph"],
        ["Nhịp thở", "30 l/ph"],
        ["SpO2", "94% khí trời"]
      ],
      stem: "Bước xử trí tiếp theo tốt nhất là gì?",
      choices: [
        "Chuyển hồi sức, chuẩn bị hỗ trợ hô hấp và bắt đầu thay huyết tương hoặc immunoglobulin tĩnh mạch",
        "Tăng liều pyridostigmine đường uống",
        "Bắt đầu prednisone liều cao đơn thuần và theo dõi tại khoa thường",
        "Chờ tới khi SpO2 giảm dưới 90% rồi mới đặt nội khí quản",
        "Cắt tuyến ức cấp cứu"
      ],
      answer: 0,
      why: [
        "Đây là <b>cơn nhược cơ</b> — đợt yếu cơ nặng lên tới mức đe dọa hô hấp, thường khởi phát bởi nhiễm khuẩn, phẫu thuật, thai nghén hoặc một số thuốc như aminoglycosid, fluoroquinolone, chẹn beta và magnesium.",
        "Quyết định then chốt là <b>theo dõi cơ học hô hấp chứ không theo dõi SpO₂</b>. Trong bệnh lý thần kinh cơ, bệnh nhân suy bơm hô hấp nhưng phổi vẫn trao đổi khí bình thường, nên <b>SpO₂ còn tốt cho tới khi bệnh nhân sắp ngừng thở</b>. Ngưỡng báo động là <b>dung tích sống gắng sức dưới 20 mL/kg</b>, <b>áp lực hít vào tối đa âm hơn −30 cm H₂O</b> và áp lực thở ra tối đa dưới 40 cm H₂O — quy tắc 20/30/40. Bệnh nhân này đã vượt ngưỡng và còn đang xấu đi, kèm PaCO₂ bắt đầu tăng.",
        "Vì vậy phải <b>chuyển hồi sức ngay, chuẩn bị hỗ trợ hô hấp</b> và bắt đầu điều trị đặc hiệu bằng <b>thay huyết tương hoặc immunoglobulin tĩnh mạch</b>, hai biện pháp có tác dụng trong vài ngày. Corticoid liều cao được thêm vào nhưng lưu ý nó có thể làm yếu cơ nặng thêm thoáng qua trong 1–2 tuần đầu, nên chỉ khởi động khi đã sẵn sàng hỗ trợ hô hấp."
      ],
      wrongs: {
        1: "Tăng thuốc ức chế men cholinesterase không đủ để cắt cơn nhược cơ và có nguy cơ gây <b>cơn cholinergic</b> — cũng yếu cơ nhưng kèm tăng tiết đờm dãi, đau bụng, tiêu chảy và co đồng tử — làm bệnh cảnh hô hấp nặng thêm. Trong cơn nhược cơ, pyridostigmine thường được tạm ngưng.",
        2: "Corticoid đơn thuần tác dụng chậm và có thể làm yếu cơ xấu đi thoáng qua. Để bệnh nhân ở khoa thường với dung tích sống 14 mL/kg là bỏ qua nguy cơ ngừng thở đột ngột.",
        3: "Chờ SpO₂ tụt là sai lầm sinh lý căn bản của dạng câu hỏi này: giảm bão hòa oxy là dấu hiệu <b>rất muộn</b> trong suy hô hấp do thần kinh cơ, xuất hiện khi bệnh nhân đã kiệt sức và sắp ngừng thở.",
        4: "Cắt tuyến ức có vai trò trong điều trị lâu dài, đặc biệt khi có u tuyến ức, nhưng không bao giờ thực hiện trong cơn cấp — phẫu thuật lúc này sẽ làm cơn nặng thêm."
      },
      objective:
        "Cơn nhược cơ được đánh giá bằng dung tích sống gắng sức và áp lực hít vào tối đa, không bằng SpO₂ vốn chỉ tụt ở giai đoạn rất muộn. Dung tích sống dưới 20 mL/kg đòi hỏi chuyển hồi sức và hỗ trợ hô hấp, kèm điều trị đặc hiệu bằng thay huyết tương hoặc immunoglobulin tĩnh mạch."
    },

    {
      spec: "Thấp khớp",
      task: "Bước tiếp theo trong chẩn đoán",
      short: "Đau khớp, ban cánh bướm và protein niệu",
      vignette: [
        "Nữ 26 tuổi đến khám vì đau và sưng các khớp bàn ngón, cổ tay hai bên đối xứng kèm cứng khớp buổi sáng khoảng 45 phút, kéo dài năm tháng. Bệnh nhân mệt nhiều, rụng tóc, loét miệng không đau tái đi tái lại.",
        "Bệnh nhân kể mỗi lần ra nắng thì nổi <b>ban đỏ hai gò má, bắc qua sống mũi nhưng chừa rãnh mũi má</b>. Ba tuần nay hai mí mắt nề vào buổi sáng và nước tiểu có nhiều bọt.",
        "Khám: ban cánh bướm rõ, loét niêm mạc miệng, sưng đau khớp không biến dạng, phù mềm quanh mắt và hai cẳng chân. Không tràn dịch màng phổi trên lâm sàng."
      ],
      vitals: [
        ["Nhiệt độ", "37,5 °C"],
        ["Huyết áp", "152/94"],
        ["Mạch", "88 l/ph"],
        ["Nhịp thở", "16 l/ph"]
      ],
      labs: {
        title: "Xét nghiệm",
        rows: [
          ["Hemoglobin", "9,2 g/dL", "12,0–16,0", "lo"],
          ["Bạch cầu", "3.100/mm³", "4.000–11.000", "lo"],
          ["Tiểu cầu", "98.000/mm³", "150.000–400.000", "lo"],
          ["Creatinine", "1,7 mg/dL", "0,6–1,2", "hi"],
          ["Protein niệu 24 giờ", "2,8 g", "< 0,15", "hi"],
          ["Cặn nước tiểu", "Trụ hồng cầu, hồng cầu biến dạng", "—", ""],
          ["Bổ thể C3 và C4", "Giảm cả hai", "—", "lo"],
          ["Kháng thể kháng nhân (ANA)", "Dương tính 1:1280", "< 1:80", "hi"]
        ]
      },
      stem: "Xét nghiệm nào sau đây vừa đặc hiệu nhất cho chẩn đoán vừa phản ánh tổn thương cơ quan ở bệnh nhân này?",
      choices: [
        "Kháng thể kháng chuỗi kép DNA",
        "Yếu tố dạng thấp",
        "Kháng thể kháng peptid citrullin vòng",
        "Kháng thể kháng Ro (SSA) và kháng La (SSB)",
        "Kháng thể kháng bào tương bạch cầu đa nhân (ANCA)"
      ],
      answer: 0,
      why: [
        "Bệnh cảnh đầy đủ của <b>lupus ban đỏ hệ thống</b>: viêm khớp không bào mòn đối xứng, ban cánh bướm nhạy cảm ánh sáng, loét miệng không đau, rụng tóc, giảm cả ba dòng tế bào máu, ANA dương tính hiệu giá cao, và bằng chứng <b>viêm thận lupus</b> là protein niệu ngưỡng cao kèm trụ hồng cầu và hồng cầu biến dạng.",
        "<b>Kháng thể kháng chuỗi kép DNA</b> có độ đặc hiệu rất cao cho lupus (khoảng 95%) trong khi ANA chỉ nhạy chứ không đặc hiệu. Quan trọng hơn trong bối cảnh này, hiệu giá kháng chuỗi kép DNA <b>tương quan với hoạt tính bệnh, đặc biệt là viêm thận lupus</b>, nên nó vừa giúp khẳng định chẩn đoán vừa dùng theo dõi điều trị.",
        "Bộ đôi <b>kháng chuỗi kép DNA tăng cùng bổ thể C3 và C4 giảm</b> là dấu ấn kinh điển của đợt bùng phát lupus có tổn thương thận, do phức hợp miễn dịch lắng đọng ở cầu thận và hoạt hóa tiêu thụ bổ thể. Bước tiếp theo về xử trí là <b>sinh thiết thận</b> để phân loại tổn thương, vì phân nhóm mô bệnh học quyết định phác đồ ức chế miễn dịch."
      ],
      wrongs: {
        1: "Yếu tố dạng thấp dương tính ở khoảng 20–30% bệnh nhân lupus nhưng hoàn toàn không đặc hiệu — nó cũng dương trong viêm gan siêu vi C, hội chứng Sjögren, viêm nội tâm mạc và cả người khỏe mạnh lớn tuổi.",
        2: "Kháng peptid citrullin vòng rất đặc hiệu cho <b>viêm khớp dạng thấp</b>. Bệnh này gây viêm khớp bào mòn, biến dạng khớp, nhưng không gây ban cánh bướm, loét miệng hay viêm thận với trụ hồng cầu.",
        3: "Kháng Ro và kháng La gặp trong hội chứng Sjögren, lupus da bán cấp và có ý nghĩa quan trọng ở phụ nữ mang thai vì nguy cơ block tim bẩm sinh — nhưng chúng không đặc hiệu cho lupus và không tương quan với viêm thận.",
        4: "ANCA chỉ điểm viêm mạch nhỏ như u hạt kèm viêm đa mạch hay viêm đa mạch vi thể. Các bệnh này gây viêm cầu thận tiến triển nhanh nhưng thường <b>không</b> làm giảm bổ thể và không có ban cánh bướm nhạy cảm ánh sáng."
      },
      objective:
        "Kháng thể kháng chuỗi kép DNA đặc hiệu cao cho lupus ban đỏ hệ thống và tương quan với hoạt tính bệnh, đặc biệt là viêm thận lupus, trong khi ANA chỉ nhạy chứ không đặc hiệu. Kháng chuỗi kép DNA tăng kèm bổ thể C3, C4 giảm là dấu ấn đợt bùng phát có tổn thương thận; sinh thiết thận quyết định phác đồ điều trị."
    }
  ]
};
