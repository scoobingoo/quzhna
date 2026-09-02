/* ==========================================================================
   Bộ đề: Sản phụ khoa — 30 ca lâm sàng, trọng tâm chẩn đoán và bước xử trí tiếp theo.
   Đơn vị xét nghiệm theo hệ quy ước Hoa Kỳ, giống đề thi thật.
   ========================================================================== */
window.QUIZ_SET = {
  id: "san-phu-khoa",
  eyebrow: "USMLE Step 2 CK · Sản phụ khoa",
  title: "Sản phụ khoa",
  blurb: "30 ca sản khoa và phụ khoa. Trọng tâm: chẩn đoán và bước xử trí tiếp theo tốt nhất — chọn đáp án trước, giải thích hiện sau.",

  cases: [
    {
      spec: "Sản khoa",
      task: "Bước xử trí tiếp theo",
      short: "Tiền sản giật có dấu hiệu nặng ở tuần 34",
      vignette: [
        "Sản phụ 29 tuổi, con so, thai 34 tuần 2 ngày, đến khám vì đau đầu dữ dội không đáp ứng paracetamol trong hai ngày, kèm <b>nhìn mờ và thấy đốm sáng nhấp nháy</b>. Sáng nay có đau vùng thượng vị và hạ sườn phải.",
        "Huyết áp đo hai lần cách nhau 4 giờ đều trên 160/110 mm Hg. Trước tuần 20 huyết áp luôn bình thường.",
        "Khám: phù mặt và hai bàn tay, phản xạ gân xương tăng mạnh, có rung giật cổ chân. Tim thai 148 lần/phút, dao động nội tại tốt, có nhịp tăng, không nhịp giảm. Cổ tử cung đóng, không ra máu, không ra nước ối, không cơn co."
      ],
      vitals: [
        ["Nhiệt độ", "36,8 °C"],
        ["Huyết áp", "168/114"],
        ["Mạch", "96 l/ph"],
        ["Nhịp thở", "18 l/ph"],
        ["Tuổi thai", "34 tuần 2 ngày"]
      ],
      labs: {
        title: "Xét nghiệm",
        rows: [
          ["Tiểu cầu", "88.000/mm³", "150.000–400.000", "lo"],
          ["AST", "168 U/L", "10–40", "hi"],
          ["ALT", "142 U/L", "10–40", "hi"],
          ["Creatinine", "1,3 mg/dL", "0,5–1,0", "hi"],
          ["Tỉ số protein/creatinine niệu", "1,8", "< 0,3", "hi"],
          ["LDH", "486 U/L", "140–280", "hi"]
        ]
      },
      stem: "Bước xử trí tiếp theo tốt nhất là gì?",
      choices: [
        "Truyền magnesium sulfat, hạ huyết áp bằng thuốc tĩnh mạch và chấm dứt thai kỳ",
        "Truyền magnesium sulfat, tiêm corticoid trưởng thành phổi và chờ tới 37 tuần",
        "Cho nghỉ ngơi tại giường, theo dõi huyết áp và xét nghiệm mỗi tuần",
        "Bắt đầu methyldopa đường uống và cho về theo dõi ngoại trú",
        "Truyền dịch tinh thể để tăng thể tích tuần hoàn rồi đánh giá lại"
      ],
      answer: 0,
      why: [
        "Sản phụ có <b>tiền sản giật với dấu hiệu nặng</b>. Chỉ cần một tiêu chí là đủ, ở đây có tới bốn: huyết áp từ 160/110 trở lên, <b>triệu chứng thần kinh trung ương</b> (đau đầu dai dẳng, rối loạn thị giác), <b>đau thượng vị hoặc hạ sườn phải kèm men gan tăng</b>, và <b>tiểu cầu dưới 100.000</b>. Bộ ba tan máu, tăng men gan, giảm tiểu cầu đã thành <b>hội chứng HELLP</b>.",
        "Điều trị triệt để duy nhất của tiền sản giật là <b>lấy thai và nhau ra</b>. Với thai <b>từ 34 tuần trở lên</b> mà có dấu hiệu nặng, khuyến cáo là <b>chấm dứt thai kỳ ngay</b> sau khi ổn định mẹ — không trì hoãn để chờ trưởng thành phổi, vì nguy cơ sản giật, đột quỵ, vỡ gan, rau bong non và tử vong mẹ vượt xa lợi ích hô hấp cho con ở tuổi thai này.",
        "Ba việc làm <b>song song</b>: <b>magnesium sulfat</b> để dự phòng co giật (không phải để hạ áp), <b>thuốc hạ áp tĩnh mạch</b> — labetalol, hydralazine hoặc nifedipine tác dụng nhanh — với đích khoảng 140–150/90–100 mm Hg nhằm phòng đột quỵ mẹ mà không làm giảm tưới máu bánh nhau, và <b>khởi phát chuyển dạ</b>. Đường sinh ngả âm đạo vẫn ưu tiên nếu điều kiện cho phép; mổ lấy thai chỉ theo chỉ định sản khoa."
      ],
      wrongs: {
        1: "Chờ đợi có kiểm soát chỉ áp dụng cho tiền sản giật <b>không có dấu hiệu nặng</b> và thai dưới 37 tuần, hoặc dấu hiệu nặng ở thai <b>dưới 34 tuần</b> khi mẹ và con còn ổn định. Bệnh nhân này đã 34 tuần và có hội chứng HELLP — kéo dài thai kỳ là nguy hiểm cho mẹ.",
        2: "Nghỉ ngơi tại giường không hề làm thay đổi diễn tiến tiền sản giật. Theo dõi hàng tuần ở một sản phụ đang có triệu chứng thần kinh và tiểu cầu 88.000 là bỏ mặc nguy cơ sản giật trong vài giờ tới.",
        3: "Methyldopa tác dụng chậm, dùng cho tăng huyết áp mạn trong thai kỳ chứ không dùng để kiểm soát cơn tăng huyết áp nặng. Cho về ngoại trú là hoàn toàn không thể chấp nhận.",
        4: "Sản phụ tiền sản giật có rò rỉ mao mạch lan tỏa; truyền dịch quá tay dễ gây <b>phù phổi cấp</b>, một trong các nguyên nhân tử vong mẹ hàng đầu trong bệnh cảnh này."
      },
      objective:
        "Tiền sản giật có dấu hiệu nặng từ tuần 34 trở lên cần chấm dứt thai kỳ sau khi ổn định mẹ. Ba việc làm song song là magnesium sulfat dự phòng co giật, hạ áp bằng thuốc tĩnh mạch khi huyết áp từ 160/110, và khởi phát chuyển dạ; không trì hoãn để chờ trưởng thành phổi ở tuổi thai này."
    },

    {
      spec: "Sản khoa",
      task: "Chẩn đoán nhiều khả năng nhất",
      short: "Ra máu âm đạo kèm tử cung co cứng đau",
      vignette: [
        "Sản phụ 33 tuổi, con rạ lần ba, thai 33 tuần, được đưa vào cấp cứu vì <b>đau bụng dữ dội liên tục</b> khởi phát đột ngột 1 giờ trước, kèm ra máu âm đạo đỏ sẫm lượng vừa. Sản phụ hút thuốc 15 điếu mỗi ngày và có tăng huyết áp mạn.",
        "Khám: sản phụ vật vã, đau nhiều. <b>Tử cung co cứng như gỗ, ấn rất đau, không thả lỏng giữa các cơn</b>. Đo cơn co cho thấy các cơn tần số cao, biên độ thấp.",
        "Tim thai 102 lần/phút, dao động nội tại giảm, có nhịp giảm muộn lặp lại. Siêu âm tại giường: bánh nhau bám mặt sau đáy tử cung, <b>không</b> che lỗ trong cổ tử cung; hình ảnh khối tăng âm không đồng nhất sau bánh nhau."
      ],
      vitals: [
        ["Nhiệt độ", "36,9 °C"],
        ["Huyết áp", "94/58"],
        ["Mạch", "126 l/ph"],
        ["Nhịp thở", "24 l/ph"],
        ["Tuổi thai", "33 tuần"]
      ],
      labs: {
        title: "Xét nghiệm",
        rows: [
          ["Hemoglobin", "8,4 g/dL", "12,0–16,0", "lo"],
          ["Tiểu cầu", "94.000/mm³", "150.000–400.000", "lo"],
          ["Fibrinogen", "118 mg/dL", "200–400 (thai kỳ: 350–650)", "lo"],
          ["INR", "1,8", "0,8–1,1", "hi"],
          ["D-dimer", "Tăng rất cao", "—", "hi"]
        ]
      },
      stem: "Chẩn đoán nhiều khả năng nhất là gì?",
      choices: [
        "Rau bong non",
        "Rau tiền đạo",
        "Vỡ tử cung",
        "Mạch máu tiền đạo",
        "Chuyển dạ sinh non kèm ra máu do xóa mở cổ tử cung"
      ],
      answer: 0,
      why: [
        "Bộ dấu hiệu là <b>rau bong non</b> kinh điển: <b>ra máu âm đạo kèm đau bụng</b>, <b>tử cung co cứng như gỗ và ấn đau</b>, cơn co tần số cao biên độ thấp, và <b>suy thai</b>. Bánh nhau bám ở đáy tử cung nên đã loại trừ rau tiền đạo.",
        "Điểm quan trọng nhất cần nhớ: <b>lượng máu chảy ra ngoài không phản ánh mức mất máu thật sự</b>. Ở thể bong non ẩn, máu tụ lại sau bánh nhau nên sản phụ có thể sốc mà âm đạo chỉ ra ít máu — đúng như ở đây, ra máu chỉ lượng vừa nhưng mạch 126 và huyết áp 94/58.",
        "Rau bong non là nguyên nhân sản khoa hàng đầu gây <b>đông máu nội mạch rải rác</b>: thromboplastin từ mô rau bị bong đổ vào tuần hoàn mẹ, hoạt hóa đông máu ồ ạt và tiêu thụ hết yếu tố. Bộ xét nghiệm ở đây đã đầy đủ: <b>fibrinogen thấp, tiểu cầu giảm, INR kéo dài, D-dimer tăng</b>. Fibrinogen là chỉ số theo dõi nhạy nhất trong sản khoa vì bình thường nó tăng cao trong thai kỳ, nên giá trị 118 mg/dL là rất bất thường. Các yếu tố nguy cơ điển hình đều có mặt: tăng huyết áp, hút thuốc, con rạ nhiều lần."
      ],
      wrongs: {
        1: "Rau tiền đạo gây ra máu đỏ tươi <b>không đau</b>, tử cung mềm, và siêu âm cho thấy bánh nhau che lỗ trong cổ tử cung. Siêu âm ở đây đã bác bỏ trực tiếp.",
        2: "Vỡ tử cung thường xảy ra trong chuyển dạ ở sản phụ có sẹo mổ cũ, biểu hiện bằng đau chói đột ngột rồi <b>mất cơn co</b>, ngôi thai cao lên và mất tim thai. Sản phụ này chưa chuyển dạ, không sẹo mổ cũ, và tử cung đang tăng trương lực chứ không mất cơn co.",
        3: "Mạch máu tiền đạo gây ra máu ngay sau khi vỡ ối, tim thai xấu đi rất nhanh, nhưng <b>không đau bụng</b> và sản phụ không sốc vì máu mất là máu của thai chứ không phải của mẹ.",
        4: "Ra máu do xóa mở cổ tử cung chỉ là dây máu lẫn nhầy, không gây tụt huyết áp, không làm tử cung co cứng và không gây rối loạn đông máu."
      },
      objective:
        "Ra máu âm đạo kèm đau bụng và tử cung co cứng ấn đau là rau bong non; lượng máu ra ngoài không phản ánh mức mất máu thật vì máu có thể tụ sau bánh nhau. Đây là nguyên nhân sản khoa hàng đầu của đông máu nội mạch rải rác, theo dõi tốt nhất bằng fibrinogen."
    },

    {
      spec: "Sản khoa",
      task: "Bước tiếp theo trong chẩn đoán",
      short: "Ra máu đỏ tươi không đau ở quý ba",
      vignette: [
        "Sản phụ 31 tuổi, con rạ lần hai, thai 31 tuần, đến cấp cứu vì <b>ra máu âm đạo đỏ tươi lượng vừa, hoàn toàn không đau</b>, xuất hiện đột ngột khi đang ngủ. Đây là lần ra máu đầu tiên.",
        "Tiền sử: một lần mổ lấy thai cách đây ba năm. Sản phụ chưa siêu âm hình thái học vì bỏ lỡ lịch hẹn ở tuần 20.",
        "Khám: sản phụ tỉnh táo, không đau bụng. Tử cung <b>mềm, không tăng trương lực, không ấn đau</b>. Không có cơn co tử cung trên monitor. Tim thai 145 lần/phút, dao động nội tại tốt, có nhịp tăng, không nhịp giảm.",
        "Điều dưỡng chuẩn bị dụng cụ để bác sĩ thăm khám âm đạo bằng tay đánh giá độ mở cổ tử cung."
      ],
      vitals: [
        ["Nhiệt độ", "36,8 °C"],
        ["Huyết áp", "116/72"],
        ["Mạch", "94 l/ph"],
        ["Nhịp thở", "18 l/ph"],
        ["Tuổi thai", "31 tuần"]
      ],
      labs: {
        title: "Xét nghiệm",
        rows: [
          ["Hemoglobin", "10,6 g/dL", "12,0–16,0", "lo"],
          ["Tiểu cầu", "232.000/mm³", "150.000–400.000", ""],
          ["Fibrinogen", "462 mg/dL", "350–650 (thai kỳ)", ""],
          ["INR", "1,0", "0,8–1,1", ""],
          ["Nhóm máu", "O, Rh dương", "—", ""]
        ]
      },
      stem: "Bước tiếp theo tốt nhất là gì?",
      choices: [
        "Siêu âm xác định vị trí bánh nhau trước khi thăm khám âm đạo",
        "Thăm khám âm đạo bằng tay để đánh giá độ mở cổ tử cung",
        "Đặt mỏ vịt và lấy dịch cổ tử cung làm xét nghiệm fibronectin bào thai",
        "Mổ lấy thai cấp cứu ngay",
        "Truyền oxytocin để rút ngắn thời gian chuyển dạ"
      ],
      answer: 0,
      why: [
        "<b>Ra máu đỏ tươi không đau trong quý ba là rau tiền đạo cho tới khi chứng minh được điều ngược lại.</b> Tử cung mềm, không cơn co, tim thai bình thường và sản phụ ổn định — hoàn toàn trái ngược với rau bong non.",
        "Nguyên tắc an toàn tuyệt đối: <b>không thăm khám âm đạo bằng tay khi chưa biết vị trí bánh nhau</b>. Nếu bánh nhau che lỗ trong cổ tử cung, ngón tay khám có thể làm rách các xoang mạch máu và gây <b>chảy máu ồ ạt</b> đe dọa tính mạng cả mẹ lẫn con trong vài phút. Đây là điểm mà dạng câu hỏi này luôn kiểm tra.",
        "Vì vậy bước bắt buộc là <b>siêu âm</b> — qua bụng trước, sau đó qua ngã âm đạo nếu cần vì đầu dò đặt ở túi cùng chứ không đưa qua cổ tử cung nên vẫn an toàn và chính xác hơn nhiều. Sản phụ có <b>sẹo mổ lấy thai cũ</b>, đây là yếu tố nguy cơ của cả rau tiền đạo lẫn <b>rau cài răng lược</b>, nên siêu âm còn phải đánh giá mức độ xâm lấn cơ tử cung. Nếu mẹ và con ổn định ở tuổi thai 31 tuần, hướng xử trí là điều trị bảo tồn tại viện, tiêm corticoid trưởng thành phổi và mổ lấy thai chủ động khoảng tuần 36–37."
      ],
      wrongs: {
        1: "Đây chính là hành động chống chỉ định. Thăm khám bằng tay khi có rau tiền đạo có thể gây chảy máu ồ ạt không kiểm soát.",
        2: "Đặt mỏ vịt nhẹ nhàng có thể chấp nhận được sau khi đã loại trừ rau tiền đạo, nhưng fibronectin bào thai <b>không có giá trị khi đang ra máu</b> vì máu gây dương tính giả. Xét nghiệm này cũng không giải quyết câu hỏi cấp bách là nguồn chảy máu.",
        3: "Mổ cấp cứu chỉ đặt ra khi mẹ mất máu nhiều gây huyết động không ổn định hoặc tim thai xấu. Ở đây mẹ ổn định và tim thai hoàn toàn bình thường, mổ ngay ở tuần 31 sẽ gây non tháng không cần thiết.",
        4: "Kích thích chuyển dạ khi có rau tiền đạo là cực kỳ nguy hiểm: cơn co và cổ tử cung mở sẽ làm bánh nhau bong khỏi đoạn dưới và gây xuất huyết ồ ạt."
      },
      objective:
        "Ra máu đỏ tươi không đau ở quý ba phải nghĩ tới rau tiền đạo và tuyệt đối không thăm khám âm đạo bằng tay trước khi siêu âm xác định vị trí bánh nhau. Sẹo mổ lấy thai cũ làm tăng nguy cơ cả rau tiền đạo lẫn rau cài răng lược."
    },

    {
      spec: "Cấp cứu sản phụ khoa",
      task: "Bước xử trí tiếp theo",
      short: "Đau bụng dữ dội kèm sốc ở phụ nữ trễ kinh",
      vignette: [
        "Nữ 27 tuổi được đưa vào cấp cứu vì đau bụng dưới bên phải dữ dội khởi phát đột ngột 40 phút trước, sau đó ngất một lần. Bệnh nhân trễ kinh 7 tuần, có ra ít máu âm đạo sẫm màu rải rác một tuần nay nhưng nghĩ là kinh nguyệt.",
        "Tiền sử: một đợt viêm vùng chậu điều trị cách đây ba năm, đang đặt dụng cụ tử cung.",
        "Khám: da lạnh ẩm, vã mồ hôi, lơ mơ. Bụng chướng, <b>phản ứng thành bụng toàn bộ, cảm ứng phúc mạc rõ</b>. Khám âm đạo: <b>đau chói khi lắc cổ tử cung</b>, túi cùng sau đầy và rất đau. Thử thai nước tiểu dương tính.",
        "Siêu âm tại giường: <b>không thấy túi thai trong buồng tử cung</b>, có dịch tự do lượng nhiều trong ổ bụng và túi cùng Douglas."
      ],
      vitals: [
        ["Nhiệt độ", "36,4 °C"],
        ["Huyết áp", "72/40"],
        ["Mạch", "138 l/ph"],
        ["Nhịp thở", "28 l/ph"],
        ["SpO2", "96% khí trời"]
      ],
      labs: {
        title: "Xét nghiệm",
        rows: [
          ["Beta-hCG huyết thanh", "4.860 mIU/mL", "—", ""],
          ["Hemoglobin", "7,2 g/dL", "12,0–16,0", "lo"],
          ["Tiểu cầu", "268.000/mm³", "150.000–400.000", ""],
          ["Nhóm máu", "A, Rh âm", "—", ""],
          ["Lactat", "4,2 mmol/L", "0,5–2,2", "hi"]
        ]
      },
      stem: "Bước xử trí tiếp theo tốt nhất là gì?",
      choices: [
        "Hồi sức và mổ cấp cứu ngay",
        "Tiêm methotrexate liều đơn theo diện tích da",
        "Định lượng lại beta-hCG sau 48 giờ để so sánh",
        "Siêu âm ngã âm đạo chi tiết rồi hội chẩn lại",
        "Nạo buồng tử cung để xác định có gai rau hay không"
      ],
      answer: 0,
      why: [
        "Đây là <b>thai ngoài tử cung vỡ</b> gây <b>sốc mất máu</b>: trễ kinh với thử thai dương, đau bụng đột ngột dữ dội, ngất, cảm ứng phúc mạc, đau khi lắc cổ tử cung, dịch tự do nhiều trong ổ bụng, hemoglobin 7,2 và huyết áp 72/40.",
        "Khi đã có <b>huyết động không ổn định</b>, không còn chỗ cho thêm bất kỳ xét nghiệm nào: bệnh nhân cần <b>hồi sức song song với mổ cấp cứu</b> — hai đường truyền lớn, truyền máu theo phác đồ truyền máu khối lượng lớn, và chuyển thẳng phòng mổ. Phẫu thuật thường là cắt vòi tử cung bên tổn thương qua nội soi hoặc mở bụng tùy mức độ chảy máu và kinh nghiệm kíp mổ.",
        "Hai chi tiết cần nhớ thêm. Thứ nhất, <b>đặt dụng cụ tử cung không làm tăng nguy cơ thai ngoài tử cung tuyệt đối</b>, nhưng khi đã có thai dù đang đặt dụng cụ thì xác suất thai đó nằm ngoài tử cung cao hơn hẳn. Thứ hai, bệnh nhân <b>Rh âm</b> nên phải tiêm <b>immunoglobulin kháng D</b> sau xử trí để dự phòng bất đồng nhóm máu cho lần mang thai sau."
      ],
      wrongs: {
        1: "Methotrexate chỉ dùng cho thai ngoài tử cung <b>chưa vỡ</b> ở bệnh nhân huyết động ổn định, khối thai nhỏ, không có tim thai và beta-hCG dưới ngưỡng cho phép. Dùng cho bệnh nhân đang sốc là bỏ mặc chảy máu trong ổ bụng.",
        2: "Theo dõi động học beta-hCG dùng cho <b>thai chưa rõ vị trí</b> ở bệnh nhân ổn định, không đau nhiều. Chờ 48 giờ ở bệnh nhân đang sốc là để bệnh nhân tử vong vì mất máu.",
        3: "Siêu âm ngã âm đạo cho hình ảnh chi tiết hơn, nhưng siêu âm tại giường đã cho đủ thông tin quyết định: buồng tử cung trống với beta-hCG cao và dịch ổ bụng nhiều. Trì hoãn để chụp thêm là sai.",
        4: "Nạo buồng tử cung có thể giúp phân biệt thai lưu trong tử cung với thai ngoài tử cung ở bệnh nhân ổn định, nhưng ở đây chẩn đoán đã rõ và bệnh nhân đang chảy máu trong ổ bụng."
      },
      objective:
        "Thai ngoài tử cung vỡ có huyết động không ổn định đòi hỏi hồi sức và mổ cấp cứu ngay, không làm thêm xét nghiệm hay hình ảnh nào. Methotrexate chỉ dành cho thai ngoài tử cung chưa vỡ ở bệnh nhân ổn định, và sản phụ Rh âm cần tiêm immunoglobulin kháng D."
    },

    {
      spec: "Phụ khoa",
      task: "Bước xử trí tiếp theo",
      short: "Thai ngoài tử cung chưa vỡ, huyết động ổn định",
      vignette: [
        "Nữ 30 tuổi đến khám vì đau âm ỉ hố chậu trái và ra ít máu âm đạo trong bốn ngày. Bệnh nhân trễ kinh 6 tuần. Không ngất, không đau vai, không sốt.",
        "Khám: tỉnh táo, không vẻ mặt đau đớn. Bụng mềm, ấn đau nhẹ hố chậu trái, <b>không có cảm ứng phúc mạc</b>. Cổ tử cung không đau khi lắc, túi cùng không đầy.",
        "Siêu âm ngã âm đạo: buồng tử cung trống, nội mạc dày 12 mm; khối cạnh phần phụ trái kích thước <b>2,4 cm, không có tim thai</b>; dịch tự do túi cùng Douglas lượng rất ít.",
        "Bệnh nhân mong muốn giữ khả năng sinh sản, sống gần bệnh viện và cam kết tái khám đúng hẹn."
      ],
      vitals: [
        ["Nhiệt độ", "36,8 °C"],
        ["Huyết áp", "118/74"],
        ["Mạch", "82 l/ph"],
        ["Nhịp thở", "16 l/ph"]
      ],
      labs: {
        title: "Xét nghiệm",
        rows: [
          ["Beta-hCG huyết thanh", "2.140 mIU/mL", "—", ""],
          ["Hemoglobin", "12,4 g/dL", "12,0–16,0", ""],
          ["Bạch cầu", "7.800/mm³", "4.000–11.000", ""],
          ["Tiểu cầu", "254.000/mm³", "150.000–400.000", ""],
          ["AST / ALT", "22 / 19 U/L", "10–40", ""],
          ["Creatinine", "0,7 mg/dL", "0,5–1,0", ""]
        ]
      },
      stem: "Bước xử trí tiếp theo tốt nhất là gì?",
      choices: [
        "Tiêm methotrexate bắp liều đơn và theo dõi beta-hCG ngày 4 và ngày 7",
        "Mổ nội soi cắt vòi tử cung trái",
        "Theo dõi chờ đợi, không can thiệp gì",
        "Nạo buồng tử cung rồi tiêm methotrexate",
        "Tiêm immunoglobulin kháng D và hẹn khám lại sau hai tuần"
      ],
      answer: 0,
      why: [
        "Bệnh nhân có <b>thai ngoài tử cung chưa vỡ</b> và thỏa toàn bộ tiêu chuẩn dùng <b>methotrexate</b>: huyết động ổn định, không có dấu hiệu vỡ hay cảm ứng phúc mạc, <b>khối thai dưới 3,5–4 cm</b>, <b>không có hoạt động tim thai</b>, <b>beta-hCG dưới khoảng 5.000 mIU/mL</b>, chức năng gan thận và huyết học bình thường, và bệnh nhân có thể tuân thủ theo dõi.",
        "Methotrexate là thuốc kháng chuyển hóa ức chế men dihydrofolat reductase, ngăn tổng hợp DNA ở tế bào nuôi đang phân chia nhanh. Ưu điểm lớn là <b>bảo tồn vòi tử cung</b>, tránh gây mê và phẫu thuật.",
        "Theo dõi có phác đồ chặt chẽ: định lượng beta-hCG vào <b>ngày 4 và ngày 7</b>. Nồng độ thường <b>tăng nhẹ</b> giữa ngày 1 và ngày 4 — điều này bình thường, không phải thất bại. Tiêu chí thành công là <b>giảm ít nhất 15% giữa ngày 4 và ngày 7</b>; nếu không đạt thì tiêm liều thứ hai hoặc chuyển mổ. Cần dặn bệnh nhân <b>tránh acid folic, thuốc kháng viêm không steroid, rượu và quan hệ tình dục</b>, và quay lại ngay nếu đau bụng tăng."
      ],
      wrongs: {
        1: "Phẫu thuật là lựa chọn hợp lý nhưng không phải <b>tốt nhất</b> khi bệnh nhân đủ tiêu chuẩn nội khoa và mong muốn giữ khả năng sinh sản. Mổ được chỉ định khi có vỡ, huyết động không ổn định, khối lớn, có tim thai, beta-hCG cao, hoặc bệnh nhân không thể tuân thủ theo dõi.",
        2: "Theo dõi chờ đợi chỉ hợp lý khi beta-hCG <b>thấp và đang giảm tự nhiên</b>, gợi ý thai ngoài tử cung đang tự thoái triển. Ở đây beta-hCG 2.140 mIU/mL và bệnh nhân đang có triệu chứng, không thể chỉ ngồi chờ.",
        3: "Nạo buồng tử cung không có vai trò khi siêu âm đã xác định được khối thai ngoài tử cung. Nó chỉ dùng khi chưa rõ vị trí thai và cần phân biệt với thai lưu trong tử cung.",
        4: "Bệnh nhân này không được nêu là Rh âm, và dù có thì immunoglobulin kháng D chỉ là biện pháp dự phòng đi kèm, không phải điều trị khối thai. Hẹn hai tuần mà không can thiệp là để nguy cơ vỡ xảy ra."
      },
      objective:
        "Thai ngoài tử cung chưa vỡ ở bệnh nhân ổn định, khối dưới 3,5 cm, không có tim thai và beta-hCG dưới khoảng 5.000 mIU/mL có thể điều trị bằng methotrexate liều đơn. Theo dõi beta-hCG ngày 4 và ngày 7, đích là giảm ít nhất 15% giữa hai mốc đó."
    },

    {
      spec: "Sản khoa",
      task: "Bước xử trí tiếp theo",
      short: "Băng huyết sau sinh với tử cung mềm nhão",
      vignette: [
        "Sản phụ 34 tuổi vừa sinh thường một bé trai 4.200 g sau chuyển dạ kéo dài 19 giờ có truyền oxytocin tăng co. Đây là lần sinh thứ năm. Bánh nhau sổ tự nhiên, <b>kiểm tra thấy nguyên vẹn, đủ màng</b>.",
        "Mười phút sau sổ nhau, máu âm đạo chảy thành dòng liên tục, ước lượng đã mất khoảng 1.200 mL. Sản phụ bắt đầu chóng mặt, buồn nôn.",
        "Khám: <b>tử cung sờ mềm nhão, đáy tử cung trên rốn, không co hồi thành khối cầu an toàn</b>. Kiểm tra cổ tử cung và âm đạo bằng van: không thấy rách, không tụ máu. Không có dấu hiệu lộn tử cung."
      ],
      vitals: [
        ["Nhiệt độ", "36,9 °C"],
        ["Huyết áp", "88/52"],
        ["Mạch", "124 l/ph"],
        ["Nhịp thở", "24 l/ph"],
        ["SpO2", "97% khí trời"]
      ],
      labs: {
        title: "Xét nghiệm",
        rows: [
          ["Hemoglobin (trước sinh 11,8)", "7,6 g/dL", "12,0–16,0", "lo"],
          ["Tiểu cầu", "186.000/mm³", "150.000–400.000", ""],
          ["Fibrinogen", "384 mg/dL", "350–650 (thai kỳ)", ""],
          ["INR", "1,1", "0,8–1,1", ""]
        ]
      },
      stem: "Bước xử trí tiếp theo tốt nhất là gì?",
      choices: [
        "Xoa bóp tử cung hai tay đồng thời truyền oxytocin liều cao",
        "Mổ cắt tử cung cấp cứu",
        "Thắt động mạch tử cung hai bên",
        "Nút mạch tử cung dưới hướng dẫn chụp mạch",
        "Truyền huyết tương tươi đông lạnh để điều chỉnh đông máu"
      ],
      answer: 0,
      why: [
        "Đây là <b>băng huyết sau sinh do đờ tử cung</b> — nguyên nhân của khoảng <b>70–80%</b> các trường hợp băng huyết. Dấu hiệu quyết định là <b>tử cung mềm nhão, không co hồi</b>, trong khi bánh nhau đã sổ đủ và đường sinh dục không rách.",
        "Toàn bộ yếu tố nguy cơ đều hiện diện: <b>tử cung căng giãn quá mức</b> (thai to 4.200 g), <b>chuyển dạ kéo dài có dùng oxytocin</b> làm cơ tử cung mệt mỏi và giảm đáp ứng, và <b>đẻ nhiều lần</b>.",
        "Xử trí đi theo bậc thang, luôn bắt đầu từ biện pháp ít xâm lấn nhất: <b>xoa bóp tử cung hai tay</b> kết hợp <b>thuốc co hồi tử cung</b> — oxytocin trước, rồi methylergonovine (chống chỉ định khi tăng huyết áp), carboprost (chống chỉ định khi hen phế quản) và misoprostol. Song song là hồi sức tích cực: hai đường truyền lớn, truyền máu, và acid tranexamic. Nếu thất bại mới leo thang sang chèn bóng buồng tử cung, mũi khâu B-Lynch, thắt mạch hoặc nút mạch, và cắt tử cung là biện pháp cuối cùng."
      ],
      wrongs: {
        1: "Cắt tử cung là <b>biện pháp cuối cùng</b>, chỉ thực hiện khi mọi biện pháp bảo tồn đã thất bại và tính mạng sản phụ bị đe dọa. Nhảy thẳng tới đó khi chưa thử xoa bóp và thuốc co hồi là mất khả năng sinh sản không cần thiết.",
        2: "Thắt động mạch tử cung là bước leo thang <b>sau</b> khi thuốc co hồi và các biện pháp cơ học thất bại; nó đòi hỏi mở bụng và không phải bước đầu tiên.",
        3: "Nút mạch có hiệu quả cao nhưng cần phòng chụp mạch và ê kíp can thiệp, mất nhiều thời gian chuẩn bị. Nó không phù hợp với sản phụ đang chảy máu ồ ạt và tụt huyết áp ngay lúc này.",
        4: "Xét nghiệm đông máu ở đây hoàn toàn bình thường — fibrinogen 384 mg/dL và INR 1,1. Nguyên nhân chảy máu là cơ học chứ không phải rối loạn đông máu, nên truyền huyết tương không giải quyết vấn đề."
      },
      objective:
        "Băng huyết sau sinh với tử cung mềm nhão sau khi đã loại trừ sót nhau và rách đường sinh dục là do đờ tử cung. Xử trí theo bậc thang, bắt đầu bằng xoa bóp tử cung hai tay và thuốc co hồi, rồi mới tới biện pháp cơ học, thắt mạch hay nút mạch; cắt tử cung là lựa chọn cuối cùng."
    },

    {
      spec: "Sản khoa",
      task: "Bước xử trí tiếp theo",
      short: "Ối vỡ non ở tuần 32 chưa nhiễm khuẩn",
      vignette: [
        "Sản phụ 26 tuổi, con so, thai 32 tuần 1 ngày, đến khám vì <b>ra nước ối lượng nhiều đột ngột</b> cách đây 3 giờ, sau đó vẫn tiếp tục rỉ nước làm ướt băng vệ sinh.",
        "Sản phụ không đau bụng, không cơn co, không ra máu, không sốt, không đau khi ấn tử cung, dịch không hôi.",
        "Đặt mỏ vịt: thấy dịch trong đọng ở túi cùng sau và chảy ra qua lỗ cổ tử cung khi sản phụ ho. Giấy nitrazine chuyển xanh; soi tươi thấy hình ảnh dương xỉ. Không thăm khám âm đạo bằng tay.",
        "Siêu âm: một thai sống, ngôi đầu, chỉ số ối giảm rõ. Monitor: tim thai 142 lần/phút, dao động nội tại tốt, có nhịp tăng, không nhịp giảm, không cơn co."
      ],
      vitals: [
        ["Nhiệt độ", "36,8 °C"],
        ["Huyết áp", "112/68"],
        ["Mạch", "84 l/ph"],
        ["Nhịp thở", "16 l/ph"],
        ["Tuổi thai", "32 tuần 1 ngày"]
      ],
      labs: {
        title: "Xét nghiệm",
        rows: [
          ["Bạch cầu", "10.200/mm³", "4.000–11.000 (thai kỳ tới 15.000)", ""],
          ["CRP", "6 mg/L", "< 5", ""],
          ["Cấy dịch âm đạo tìm liên cầu nhóm B", "Đang chờ kết quả", "—", ""],
          ["Hemoglobin", "11,4 g/dL", "12,0–16,0", "lo"]
        ]
      },
      stem: "Bước xử trí tiếp theo tốt nhất là gì?",
      choices: [
        "Nhập viện, tiêm corticoid trưởng thành phổi, dùng kháng sinh kéo dài thời gian tiềm tàng và theo dõi tới 34 tuần",
        "Khởi phát chuyển dạ ngay để tránh nhiễm khuẩn ối",
        "Cho về theo dõi tại nhà, hẹn khám lại sau ba ngày",
        "Truyền thuốc giảm co kéo dài tới tuần 37",
        "Khâu vòng cổ tử cung cấp cứu"
      ],
      answer: 0,
      why: [
        "Sản phụ có <b>ối vỡ non trên thai non tháng</b> ở tuần 32, hiện <b>không có bằng chứng nhiễm khuẩn ối</b> (không sốt, tử cung không đau, dịch không hôi, bạch cầu và CRP bình thường) và <b>tim thai bình thường</b>.",
        "Ở tuổi thai <b>từ 24 đến dưới 34 tuần</b> mà mẹ và con đều ổn định, hướng xử trí là <b>điều trị mong đợi tại viện</b>, gồm bốn thành phần: <b>corticoid</b> (betamethasone) làm trưởng thành phổi và giảm xuất huyết não thất cùng viêm ruột hoại tử; <b>kháng sinh</b> phổ rộng 7 ngày giúp <b>kéo dài thời gian tiềm tàng</b> và giảm nhiễm khuẩn sơ sinh; <b>magnesium sulfat</b> bảo vệ thần kinh nếu sinh trước 32 tuần; và <b>theo dõi sát</b> dấu hiệu nhiễm khuẩn cùng tim thai.",
        "Mục tiêu là kéo dài tới <b>34 tuần</b> rồi chấm dứt thai kỳ, vì sau mốc này nguy cơ nhiễm khuẩn ối, chèn ép dây rốn và rau bong non vượt quá lợi ích của việc trưởng thành thêm. <b>Bắt buộc phải chấm dứt ngay</b> bất kể tuổi thai nếu xuất hiện viêm màng ối, rau bong non, sa dây rốn hoặc tim thai xấu."
      ],
      wrongs: {
        1: "Chấm dứt thai kỳ ngay ở tuần 32 khi chưa có nhiễm khuẩn sẽ khiến trẻ chịu toàn bộ biến chứng non tháng — hội chứng suy hô hấp, xuất huyết não thất, viêm ruột hoại tử — trong khi mỗi ngày kéo dài thêm đều có lợi.",
        2: "Ối vỡ non luôn phải nhập viện theo dõi vì nguy cơ nhiễm khuẩn ối, sa dây rốn và chuyển dạ có thể xuất hiện bất cứ lúc nào. Theo dõi tại nhà là không an toàn.",
        3: "Thuốc giảm co chỉ dùng ngắn hạn khoảng 48 giờ để kịp hoàn thành liệu trình corticoid; dùng kéo dài trên nền ối vỡ làm tăng nguy cơ nhiễm khuẩn ối mà không cải thiện kết cục sơ sinh.",
        4: "Khâu vòng cổ tử cung dành cho hở eo tử cung khi màng ối còn nguyên. Khâu vòng khi ối đã vỡ làm tăng mạnh nguy cơ nhiễm khuẩn; nếu sản phụ đang có vòng khâu thì thường phải tháo."
      },
      objective:
        "Ối vỡ non từ 24 đến dưới 34 tuần, không có nhiễm khuẩn ối và tim thai bình thường, được điều trị mong đợi tại viện với corticoid, kháng sinh kéo dài thời gian tiềm tàng và magnesium sulfat bảo vệ thần kinh, theo dõi tới 34 tuần. Có viêm màng ối, rau bong non, sa dây rốn hay tim thai xấu thì chấm dứt thai kỳ ngay."
    },

    {
      spec: "Sản khoa",
      task: "Bước xử trí tiếp theo",
      short: "Nhịp tim thai giảm muộn lặp lại trong chuyển dạ",
      vignette: [
        "Sản phụ 28 tuổi, con so, thai 39 tuần, đang chuyển dạ giai đoạn hoạt động, cổ tử cung mở 7 cm. Sản phụ đang được truyền oxytocin tăng co và đã gây tê ngoài màng cứng cách đây 30 phút.",
        "Monitor 20 phút gần nhất: tim thai cơ bản 145 lần/phút, dao động nội tại <b>giảm</b>, xuất hiện <b>nhịp giảm muộn lặp lại theo sau hầu hết các cơn co</b> — đáy nhịp giảm đến sau đỉnh cơn co và hồi phục sau khi cơn co kết thúc.",
        "Cơn co tử cung: tần số <b>6 cơn trong 10 phút</b>, kéo dài 70–80 giây, tử cung không thả lỏng hoàn toàn giữa các cơn. Sản phụ đang nằm ngửa.",
        "Huyết áp mẹ hiện 88/54 mm Hg, giảm so với mức 118/72 trước khi gây tê."
      ],
      vitals: [
        ["Nhiệt độ", "36,9 °C"],
        ["Huyết áp", "88/54"],
        ["Mạch", "104 l/ph"],
        ["Nhịp thở", "18 l/ph"],
        ["SpO2", "98% khí trời"]
      ],
      stem: "Bước xử trí tiếp theo tốt nhất là gì?",
      choices: [
        "Ngưng oxytocin, cho sản phụ nằm nghiêng trái, thở oxy, truyền dịch nhanh và nâng huyết áp mẹ",
        "Mổ lấy thai cấp cứu ngay lập tức",
        "Tăng liều oxytocin để rút ngắn giai đoạn chuyển dạ",
        "Đặt giác hút hỗ trợ sinh đường âm đạo",
        "Truyền ối qua ống thông buồng tử cung"
      ],
      answer: 0,
      why: [
        "<b>Nhịp giảm muộn</b> phản ánh <b>suy tuần hoàn tử cung – rau</b>: giảm tưới máu bánh nhau trong cơn co gây thiếu oxy cho thai. Khi lặp lại kèm <b>giảm dao động nội tại</b>, đây là monitor <b>nhóm II</b> đang xấu, cần can thiệp ngay.",
        "Điều mấu chốt là hai nguyên nhân ở đây <b>đều đảo ngược được</b>: <b>cơn co cường tính</b> do oxytocin (trên 5 cơn trong 10 phút, tử cung không thả lỏng giữa cơn nên máu không kịp tưới lại khoảng gian gai rau) và <b>tụt huyết áp mẹ</b> do gây tê ngoài màng cứng làm giãn mạch.",
        "Vì vậy bước đầu tiên là <b>hồi sức thai trong tử cung</b>, làm đồng thời nhiều việc: <b>ngưng oxytocin</b>, <b>nằm nghiêng trái</b> để giải phóng tĩnh mạch chủ dưới khỏi bị tử cung đè, <b>thở oxy</b>, <b>truyền dịch nhanh</b> và dùng thuốc co mạch như ephedrine hoặc phenylephrine để nâng huyết áp mẹ. Nếu monitor không cải thiện sau các biện pháp này, khi đó mới chuyển sang mổ lấy thai."
      ],
      wrongs: {
        1: "Mổ ngay là quá vội khi nguyên nhân còn đảo ngược được và chưa thử hồi sức trong tử cung. Mổ lấy thai được chỉ định khi monitor <b>nhóm III</b> hoặc nhóm II không cải thiện sau hồi sức đầy đủ.",
        2: "Tăng oxytocin làm cơn co cường tính nặng thêm, rút ngắn thêm thời gian tưới máu bánh nhau giữa các cơn — đúng cơ chế đang gây thiếu oxy cho thai. Đây là lựa chọn gây hại trực tiếp.",
        3: "Sinh giúp bằng dụng cụ chỉ thực hiện khi cổ tử cung <b>mở trọn</b>, ngôi đã lọt thấp và màng ối đã vỡ. Cổ tử cung mới mở 7 cm nên hoàn toàn chống chỉ định.",
        4: "Truyền ối dùng cho <b>nhịp giảm biến đổi</b> do chèn ép dây rốn khi thiểu ối, không phải cho nhịp giảm muộn do suy tuần hoàn tử cung – rau."
      },
      objective:
        "Nhịp giảm muộn lặp lại chỉ điểm suy tuần hoàn tử cung – rau, thường do cơn co cường tính vì oxytocin hoặc tụt huyết áp mẹ sau gây tê ngoài màng cứng. Xử trí đầu tiên là hồi sức thai trong tử cung — ngưng oxytocin, nằm nghiêng trái, thở oxy, bù dịch và nâng huyết áp — rồi mới cân nhắc mổ nếu không cải thiện."
    },

    {
      spec: "Cấp cứu sản phụ khoa",
      task: "Bước xử trí tiếp theo",
      short: "Sờ thấy dây rốn trong âm đạo sau vỡ ối",
      vignette: [
        "Sản phụ 31 tuổi, con rạ, thai 36 tuần, ngôi mông chưa được chẩn đoán trước đó, đang chuyển dạ với cổ tử cung mở 6 cm. Bác sĩ vừa bấm ối chủ động cách đây một phút.",
        "Ngay sau khi nước ối chảy ra, monitor cho thấy tim thai <b>tụt xuống 68 lần/phút và duy trì ở mức đó</b>, không hồi phục.",
        "Thăm khám âm đạo: sờ thấy <b>một quai dây rốn đập nằm trong âm đạo, phía dưới ngôi thai</b>. Ngôi mông còn cao, chưa lọt.",
        "Phòng mổ được báo động, ê kíp gây mê đang tới. Sản phụ tỉnh, huyết động ổn định."
      ],
      vitals: [
        ["Nhiệt độ", "36,8 °C"],
        ["Huyết áp", "122/74"],
        ["Mạch", "98 l/ph"],
        ["Nhịp thở", "20 l/ph"],
        ["Tim thai", "68 l/ph kéo dài"]
      ],
      stem: "Trong lúc chờ chuyển phòng mổ, việc quan trọng nhất cần làm là gì?",
      choices: [
        "Giữ nguyên bàn tay trong âm đạo nâng ngôi thai lên khỏi dây rốn và cho sản phụ nằm tư thế đầu thấp mông cao",
        "Dùng tay đẩy dây rốn trở lại buồng tử cung",
        "Truyền oxytocin để đẩy nhanh cuộc sinh đường âm đạo",
        "Kẹp và cắt dây rốn để tránh chèn ép thêm",
        "Cho sản phụ rặn ngay để sinh nhanh qua đường âm đạo"
      ],
      answer: 0,
      why: [
        "Đây là <b>sa dây rốn</b> — cấp cứu sản khoa tối khẩn. Nguy hiểm không nằm ở bản thân dây rốn nằm sai chỗ mà ở chỗ <b>ngôi thai đè lên dây rốn</b>, cắt đứt tuần hoàn nuôi thai; nhịp tim thai chậm kéo dài chính là biểu hiện của điều đó.",
        "Vì vậy việc duy nhất có ý nghĩa trong lúc chờ mổ là <b>giải phóng dây rốn khỏi bị đè</b>: người khám <b>giữ nguyên bàn tay trong âm đạo, dùng tay nâng ngôi thai lên</b> và <b>không rút tay ra cho tới khi em bé được lấy ra khỏi tử cung</b> trong phòng mổ. Đồng thời đặt sản phụ ở <b>tư thế đầu thấp mông cao</b> hoặc tư thế gối – ngực để trọng lực kéo ngôi thai rời khỏi dây rốn.",
        "Các biện pháp hỗ trợ khác gồm thở oxy, ngưng oxytocin, dùng thuốc giảm co để giảm áp lực cơn co, và bơm bàng quang đầy nước muối nếu phải chờ lâu. Xử trí triệt để là <b>mổ lấy thai cấp cứu</b>. Yếu tố nguy cơ điển hình đều có ở đây: <b>ngôi bất thường</b> và <b>bấm ối khi ngôi còn cao</b>."
      ],
      wrongs: {
        1: "Đẩy dây rốn trở lại buồng tử cung thường thất bại, gây co thắt mạch máu dây rốn và làm tình trạng thiếu oxy nặng thêm. Nguyên tắc là nâng ngôi thai lên chứ không phải đẩy dây rốn vào.",
        2: "Oxytocin làm tăng cơn co, mỗi cơn co lại ép ngôi thai xuống mạnh hơn lên dây rốn. Ngược lại, ở đây cần dùng thuốc <b>giảm co</b>.",
        3: "Kẹp cắt dây rốn khi thai còn trong tử cung là cắt đứt hoàn toàn nguồn cấp oxy duy nhất cho thai — hành động gây tử vong ngay lập tức.",
        4: "Sinh nhanh đường âm đạo chỉ khả thi khi cổ tử cung đã mở trọn và ngôi đã lọt thấp. Ở đây cổ tử cung mới mở 6 cm với ngôi mông cao; ép rặn chỉ làm dây rốn bị đè nặng hơn."
      },
      objective:
        "Sa dây rốn cần nâng ngôi thai lên khỏi dây rốn bằng tay và giữ nguyên tay trong âm đạo cho tới khi lấy thai ra, kết hợp tư thế đầu thấp mông cao và mổ lấy thai cấp cứu. Không được đẩy dây rốn vào lại buồng tử cung và không dùng oxytocin."
    },

    {
      spec: "Phụ khoa",
      task: "Bước xử trí tiếp theo",
      short: "Đau hạ vị kèm đau khi lắc cổ tử cung",
      vignette: [
        "Nữ 23 tuổi đến khám vì đau hạ vị âm ỉ hai bên tăng dần trong năm ngày, kèm ra khí hư vàng hôi và giao hợp đau. Bệnh nhân có hai bạn tình trong sáu tháng qua, không dùng bao cao su thường xuyên.",
        "Kinh cuối cách đây hai tuần, đều. Không nôn, không tiêu chảy, không tiểu buốt, không đau khi tiểu.",
        "Khám: nhiệt độ 38,3 °C. Bụng ấn đau hạ vị hai bên, không phản ứng thành bụng. Khám mỏ vịt: cổ tử cung viêm đỏ, mủ nhầy chảy ra từ lỗ cổ tử cung, chạm vào dễ chảy máu. <b>Đau chói khi lắc cổ tử cung, đau khi ấn tử cung và ấn hai phần phụ</b>.",
        "Thử thai nước tiểu âm tính. Siêu âm ngã âm đạo: không thấy khối áp xe, không dịch ổ bụng, hai phần phụ không giãn."
      ],
      vitals: [
        ["Nhiệt độ", "38,3 °C"],
        ["Huyết áp", "116/72"],
        ["Mạch", "98 l/ph"],
        ["Nhịp thở", "18 l/ph"]
      ],
      labs: {
        title: "Xét nghiệm",
        rows: [
          ["Bạch cầu", "14.600/mm³", "4.000–11.000", "hi"],
          ["CRP", "62 mg/L", "< 5", "hi"],
          ["Soi tươi dịch âm đạo", "Nhiều bạch cầu", "—", ""],
          ["Xét nghiệm khuếch đại acid nucleic lậu và Chlamydia", "Đang chờ kết quả", "—", ""],
          ["Thử thai", "Âm tính", "—", ""]
        ]
      },
      stem: "Bước xử trí tiếp theo tốt nhất là gì?",
      choices: [
        "Bắt đầu ngay ceftriaxone kết hợp doxycycline và metronidazole, không chờ kết quả xét nghiệm",
        "Chờ kết quả xét nghiệm lậu và Chlamydia rồi mới điều trị theo tác nhân",
        "Chỉ dùng metronidazole cho viêm âm đạo do vi khuẩn",
        "Nội soi ổ bụng để khẳng định chẩn đoán trước khi điều trị",
        "Chụp cắt lớp bụng chậu có cản quang"
      ],
      answer: 0,
      why: [
        "Bệnh nhân có <b>viêm vùng chậu</b>. Tiêu chuẩn chẩn đoán tối thiểu rất rộng một cách có chủ ý: chỉ cần <b>một</b> trong ba dấu hiệu — đau khi lắc cổ tử cung, đau khi ấn tử cung, hoặc đau khi ấn phần phụ — ở phụ nữ trẻ có nguy cơ, sau khi loại trừ nguyên nhân khác. Bệnh nhân này có cả ba, kèm sốt, mủ nhầy cổ tử cung và bạch cầu tăng.",
        "Nguyên tắc điều trị là <b>ngưỡng chẩn đoán thấp và điều trị ngay theo kinh nghiệm</b>, <b>không chờ kết quả vi sinh</b>. Lý do là hậu quả của việc bỏ sót rất nặng nề và không hồi phục: <b>vô sinh do tắc vòi tử cung, thai ngoài tử cung và đau vùng chậu mạn tính</b>, với nguy cơ tăng theo từng đợt viêm.",
        "Phác đồ ngoại trú là <b>ceftriaxone tiêm bắp một liều</b> phủ lậu cầu, <b>doxycycline 14 ngày</b> phủ Chlamydia, và <b>metronidazole 14 ngày</b> phủ vi khuẩn kỵ khí. Bệnh nhân ổn định, dung nạp thuốc uống, không có áp xe vòi trứng và không mang thai nên điều trị ngoại trú là phù hợp. Bắt buộc phải <b>điều trị cho bạn tình</b> và tầm soát HIV cùng giang mai."
      ],
      wrongs: {
        1: "Chờ kết quả mất vài ngày, trong khi tổn thương vòi tử cung diễn ra ngay trong giai đoạn viêm cấp. Hơn nữa, xét nghiệm âm tính <b>không loại trừ</b> viêm vùng chậu, vì bệnh thường do nhiều vi khuẩn phối hợp gồm cả kỵ khí và vi khuẩn thường trú âm đạo.",
        2: "Metronidazole đơn thuần bỏ sót hoàn toàn lậu cầu và Chlamydia — hai tác nhân chính. Bệnh cảnh ở đây cũng vượt xa viêm âm đạo đơn thuần, vốn không gây sốt hay đau khi lắc cổ tử cung.",
        3: "Nội soi ổ bụng là tiêu chuẩn vàng nhưng xâm lấn và chỉ dùng khi chẩn đoán không rõ hoặc điều trị thất bại. Không bao giờ được để bệnh nhân chờ nội soi mới bắt đầu kháng sinh.",
        4: "Chụp cắt lớp có ích khi nghi áp xe vòi trứng hoặc cần loại trừ bệnh lý ngoại khoa như viêm ruột thừa, nhưng siêu âm đã không thấy áp xe và bệnh cảnh phụ khoa đã rõ."
      },
      objective:
        "Viêm vùng chậu chỉ cần một trong ba dấu hiệu đau khi lắc cổ tử cung, đau khi ấn tử cung hoặc ấn phần phụ là đủ để điều trị ngay theo kinh nghiệm, không chờ kết quả vi sinh, vì hậu quả bỏ sót là vô sinh và thai ngoài tử cung. Phác đồ phủ lậu cầu, Chlamydia và vi khuẩn kỵ khí, kèm điều trị bạn tình."
    },

    {
      spec: "Phụ khoa",
      task: "Bước tiếp theo trong chẩn đoán",
      short: "Ra máu âm đạo sau mãn kinh",
      vignette: [
        "Nữ 58 tuổi, mãn kinh từ năm 51 tuổi, đến khám vì <b>ra máu âm đạo lượng ít nhưng tái đi tái lại trong sáu tuần</b>. Bệnh nhân không dùng liệu pháp hormone thay thế, không dùng thuốc chống đông.",
        "Tiền sử: béo phì với BMI 34 kg/m², đái tháo đường típ 2, tăng huyết áp, chưa từng sinh con, kinh nguyệt bắt đầu năm 11 tuổi. Không tiền sử gia đình ung thư.",
        "Khám: âm hộ và âm đạo teo nhẹ, có ít máu sẫm trong âm đạo. Cổ tử cung trơn láng, không tổn thương nhìn thấy, không polyp. Tử cung không to, hai phần phụ không sờ thấy khối.",
        "Siêu âm ngã âm đạo: <b>nội mạc tử cung dày 11 mm, không đồng nhất</b>; không có khối phần phụ, không dịch ổ bụng."
      ],
      vitals: [
        ["Nhiệt độ", "36,7 °C"],
        ["Huyết áp", "142/86"],
        ["Mạch", "78 l/ph"],
        ["BMI", "34 kg/m²"]
      ],
      labs: {
        title: "Xét nghiệm",
        rows: [
          ["Hemoglobin", "11,2 g/dL", "12,0–16,0", "lo"],
          ["Tiểu cầu", "268.000/mm³", "150.000–400.000", ""],
          ["INR", "1,0", "0,8–1,1", ""],
          ["HbA1c", "7,8%", "< 5,7", "hi"],
          ["Thử thai", "Không chỉ định", "—", ""]
        ]
      },
      stem: "Bước tiếp theo tốt nhất là gì?",
      choices: [
        "Sinh thiết nội mạc tử cung",
        "Kê estrogen bôi tại chỗ điều trị teo âm đạo và hẹn khám lại sau ba tháng",
        "Làm xét nghiệm tế bào học cổ tử cung",
        "Định lượng CA-125 huyết thanh",
        "Chụp cộng hưởng từ tiểu khung"
      ],
      answer: 0,
      why: [
        "<b>Mọi trường hợp ra máu âm đạo sau mãn kinh đều là ung thư nội mạc tử cung cho tới khi chứng minh được điều ngược lại.</b> Khoảng 10% phụ nữ ra máu sau mãn kinh thực sự có ung thư nội mạc, và đây là triệu chứng khởi đầu ở phần lớn bệnh nhân — chính vì vậy bệnh thường được phát hiện ở giai đoạn sớm và tiên lượng tốt nếu không bỏ sót.",
        "Bệnh nhân có gần như trọn bộ yếu tố nguy cơ của <b>tăng estrogen không đối kháng</b>: béo phì (mô mỡ chuyển androgen thành estron nhờ men aromatase), đái tháo đường, tăng huyết áp, <b>chưa từng sinh con</b> và có kinh sớm — tức số chu kỳ tiếp xúc estrogen suốt đời nhiều.",
        "Nội mạc dày <b>trên 4 mm</b> ở phụ nữ sau mãn kinh có ra máu là chỉ định lấy mô. Ngưỡng ≤ 4 mm có giá trị tiên đoán âm rất cao, nhưng ở đây nội mạc dày 11 mm và không đồng nhất, nên bắt buộc <b>sinh thiết nội mạc tử cung</b> tại phòng khám. Nếu sinh thiết không lấy đủ mô hoặc kết quả âm tính mà vẫn ra máu, phải làm <b>soi buồng tử cung kèm nạo sinh thiết</b>."
      ],
      wrongs: {
        1: "Teo niêm mạc là nguyên nhân thường gặp nhất của ra máu sau mãn kinh về mặt thống kê, nhưng nó là <b>chẩn đoán loại trừ</b>. Điều trị theo hướng này mà chưa lấy mô là bỏ sót ung thư trong ba tháng quý giá.",
        2: "Xét nghiệm tế bào học cổ tử cung tầm soát ung thư cổ tử cung, không tầm soát nội mạc. Nó có độ nhạy rất thấp với ung thư nội mạc và kết quả bình thường không loại trừ được gì.",
        3: "CA-125 dùng theo dõi ung thư buồng trứng đã biết, không có vai trò chẩn đoán ở đây và tăng trong rất nhiều bệnh lành tính.",
        4: "Cộng hưởng từ dùng để đánh giá mức xâm lấn cơ tử cung <b>sau khi</b> đã có chẩn đoán mô bệnh học, nhằm lập kế hoạch phẫu thuật. Nó không thay thế được việc lấy mô."
      },
      objective:
        "Ra máu âm đạo sau mãn kinh phải được xem là ung thư nội mạc tử cung cho tới khi loại trừ. Nội mạc dày trên 4 mm trên siêu âm ngã âm đạo là chỉ định sinh thiết nội mạc; teo niêm mạc chỉ là chẩn đoán loại trừ sau khi đã có mô bệnh học."
    },

    {
      spec: "Cấp cứu sản phụ khoa",
      task: "Bước xử trí tiếp theo",
      short: "Đau hố chậu đột ngột kèm khối phần phụ",
      vignette: [
        "Nữ 24 tuổi vào cấp cứu vì <b>đau hố chậu phải khởi phát đột ngột dữ dội</b> cách đây 5 giờ khi đang tập thể dục, đau từng cơn kịch phát rồi dịu bớt, kèm buồn nôn và nôn nhiều lần.",
        "Bệnh nhân đang điều trị kích thích buồng trứng để hỗ trợ sinh sản. Kinh cuối cách đây 12 ngày. Thử thai nước tiểu âm tính.",
        "Khám: bệnh nhân vật vã vì đau. Bụng ấn đau hố chậu phải, <b>sờ thấy khối mềm ấn rất đau</b>, không có phản ứng thành bụng rõ. Nhiệt độ 37,6 °C.",
        "Siêu âm ngã âm đạo có Doppler: buồng trứng phải <b>to 7 cm, phù nề, các nang noãn bị đẩy ra ngoại vi</b>; <b>tín hiệu dòng chảy động mạch và tĩnh mạch giảm rõ so với bên trái</b>. Có ít dịch túi cùng Douglas. Ruột thừa không quan sát thấy bất thường."
      ],
      vitals: [
        ["Nhiệt độ", "37,6 °C"],
        ["Huyết áp", "118/74"],
        ["Mạch", "104 l/ph"],
        ["Nhịp thở", "20 l/ph"]
      ],
      labs: {
        title: "Xét nghiệm",
        rows: [
          ["Bạch cầu", "13.400/mm³", "4.000–11.000", "hi"],
          ["Hemoglobin", "12,6 g/dL", "12,0–16,0", ""],
          ["CRP", "18 mg/L", "< 5", "hi"],
          ["Beta-hCG", "Âm tính", "—", ""],
          ["Tổng phân tích nước tiểu", "Bình thường", "—", ""]
        ]
      },
      stem: "Bước xử trí tiếp theo tốt nhất là gì?",
      choices: [
        "Mổ nội soi cấp cứu tháo xoắn và bảo tồn buồng trứng",
        "Cho giảm đau, theo dõi sát và siêu âm lại sau 12 giờ",
        "Bắt đầu kháng sinh phổ rộng theo phác đồ viêm vùng chậu",
        "Chụp cắt lớp bụng chậu có cản quang",
        "Chọc hút nang buồng trứng dưới hướng dẫn siêu âm"
      ],
      answer: 0,
      why: [
        "Bệnh cảnh là <b>xoắn buồng trứng</b>: đau hố chậu <b>khởi phát đột ngột, dữ dội, từng cơn</b>, kèm nôn, trên nền <b>buồng trứng to do kích thích rụng trứng</b> — yếu tố nguy cơ hàng đầu vì buồng trứng to và nặng dễ xoay quanh cuống mạch. Siêu âm cho hình ảnh kinh điển: buồng trứng phù nề với các nang bị đẩy ra ngoại vi.",
        "Đây là <b>cấp cứu ngoại khoa</b>. Xoắn cắt tuần hoàn tĩnh mạch trước, gây phù nề và nhồi máu xuất huyết, cuối cùng là hoại tử. <b>Thời gian là buồng trứng</b>: tháo xoắn sớm cho phép bảo tồn được mô buồng trứng ở phần lớn trường hợp, trong khi trì hoãn dẫn tới mất buồng trứng vĩnh viễn ở một phụ nữ đang mong con.",
        "Một cạm bẫy quan trọng: <b>Doppler còn tín hiệu không loại trừ được xoắn</b>. Buồng trứng có tuần hoàn kép từ động mạch buồng trứng và động mạch tử cung, nên dòng động mạch có thể vẫn còn ngay cả khi đã xoắn. Chẩn đoán là <b>lâm sàng</b>, và nội soi vừa để chẩn đoán vừa để điều trị. Xu hướng hiện nay là <b>tháo xoắn và bảo tồn</b> ngay cả khi buồng trứng trông tím sẫm, vì mô thường hồi phục sau khi tái tưới máu."
      ],
      wrongs: {
        1: "Theo dõi 12 giờ là quãng thời gian đủ để buồng trứng hoại tử không hồi phục. Không có lý do trì hoãn khi lâm sàng và siêu âm đã rất gợi ý.",
        2: "Viêm vùng chậu đau âm ỉ tăng dần hai bên, có khí hư mủ và đau khi lắc cổ tử cung, chứ không khởi phát đột ngột một bên khi đang vận động. Kháng sinh không giải quyết được vấn đề cơ học là cuống mạch bị xoắn.",
        3: "Cắt lớp có thể thấy buồng trứng to nhưng kém hơn siêu âm Doppler trong bệnh lý này, đồng thời gây nhiễm xạ cho phụ nữ trẻ đang điều trị sinh sản và làm chậm mổ.",
        4: "Chọc hút nang không tháo được xoắn cuống mạch, có nguy cơ nhiễm khuẩn và chảy máu, và bỏ lỡ cơ hội đánh giá trực tiếp buồng trứng."
      },
      objective:
        "Đau hố chậu khởi phát đột ngột kèm nôn ở phụ nữ có buồng trứng to là xoắn buồng trứng cho tới khi loại trừ; đây là cấp cứu ngoại khoa cần nội soi tháo xoắn sớm để bảo tồn buồng trứng. Doppler còn tín hiệu dòng chảy không loại trừ được chẩn đoán vì buồng trứng có tuần hoàn kép."
    },

    {
      spec: "Sản khoa",
      task: "Chẩn đoán nhiều khả năng nhất",
      short: "Sốt và đau tử cung ngày hậu sản thứ ba",
      vignette: [
        "Sản phụ 27 tuổi, ngày hậu sản thứ ba sau mổ lấy thai cấp cứu vì chuyển dạ đình trệ. Trước mổ sản phụ đã vỡ ối 22 giờ và được thăm khám âm đạo nhiều lần.",
        "Từ hôm qua sản phụ sốt cao 38,9 °C hai lần cách nhau trên 6 giờ, kèm đau bụng dưới tăng dần và <b>sản dịch hôi</b>.",
        "Khám: vết mổ thành bụng khô, không đỏ, không chảy dịch, không tụ máu. <b>Tử cung co hồi kém, ấn đau rõ ở đáy và thân tử cung</b>. Hai vú mềm, không cương, không đỏ. Phổi trong. Không đau khi vỗ hố thắt lưng. Hai chi dưới không sưng, không đau bắp chân."
      ],
      vitals: [
        ["Nhiệt độ", "38,9 °C"],
        ["Huyết áp", "112/68"],
        ["Mạch", "112 l/ph"],
        ["Nhịp thở", "20 l/ph"],
        ["SpO2", "97% khí trời"]
      ],
      labs: {
        title: "Xét nghiệm",
        rows: [
          ["Bạch cầu", "19.800/mm³", "4.000–11.000", "hi"],
          ["Bạch cầu đa nhân trung tính", "88%", "40–70", "hi"],
          ["Hemoglobin", "9,8 g/dL", "12,0–16,0", "lo"],
          ["CRP", "142 mg/L", "< 5", "hi"],
          ["Tổng phân tích nước tiểu", "Bình thường, không bạch cầu", "—", ""],
          ["X-quang ngực", "Không thâm nhiễm", "—", ""]
        ]
      },
      stem: "Chẩn đoán nhiều khả năng nhất và điều trị phù hợp là gì?",
      choices: [
        "Viêm nội mạc tử cung hậu sản — clindamycin kết hợp gentamicin tĩnh mạch",
        "Nhiễm khuẩn vết mổ thành bụng — mở vết mổ dẫn lưu",
        "Viêm thận bể thận cấp — ceftriaxone tĩnh mạch",
        "Viêm tắc tĩnh mạch chậu nhiễm khuẩn — kháng đông đơn thuần",
        "Viêm vú — dicloxacillin đường uống và tiếp tục cho bú"
      ],
      answer: 0,
      why: [
        "Đây là <b>viêm nội mạc tử cung hậu sản</b> — nguyên nhân sốt hậu sản thường gặp nhất. Chẩn đoán dựa trên <b>sốt sau 24 giờ đầu hậu sản kèm tử cung co hồi kém và ấn đau</b>, cùng sản dịch hôi, sau khi đã loại trừ các nguồn nhiễm khuẩn khác — điều đã được làm ở đây qua khám vết mổ, vú, phổi, thận và chi dưới.",
        "Bệnh nhân có đủ các yếu tố nguy cơ hàng đầu: <b>mổ lấy thai</b> (yếu tố nguy cơ mạnh nhất, tăng nguy cơ gấp 5–20 lần so với sinh thường), <b>ối vỡ kéo dài trên 18 giờ</b>, <b>chuyển dạ kéo dài</b> và <b>thăm khám âm đạo nhiều lần</b>.",
        "Nhiễm khuẩn do <b>nhiều vi khuẩn phối hợp</b> đi ngược từ đường sinh dục dưới lên, gồm cả vi khuẩn hiếu khí và kỵ khí. Phác đồ chuẩn là <b>clindamycin kết hợp gentamicin tĩnh mạch</b>, tiếp tục cho tới khi bệnh nhân hết sốt trên 24–48 giờ; sau đó thường không cần chuyển sang kháng sinh uống. Nếu sốt dai dẳng sau 48–72 giờ dùng kháng sinh đúng, phải nghĩ tới áp xe tồn dư, sót nhau hoặc viêm tắc tĩnh mạch chậu nhiễm khuẩn."
      ],
      wrongs: {
        1: "Nhiễm khuẩn vết mổ biểu hiện bằng vết mổ đỏ, nóng, đau, chảy dịch mủ hoặc bung mép. Vết mổ ở đây hoàn toàn bình thường và ổ đau nằm ở tử cung.",
        2: "Viêm thận bể thận gây đau vùng thắt lưng, đau khi vỗ hố thắt lưng và có bạch cầu cùng vi khuẩn trong nước tiểu. Tổng phân tích nước tiểu ở đây bình thường.",
        3: "Viêm tắc tĩnh mạch chậu nhiễm khuẩn là <b>chẩn đoán loại trừ</b>, chỉ nghĩ tới khi sốt kéo dài dù đã dùng kháng sinh phổ rộng đủ liều. Điều trị cũng phải phối hợp kháng sinh với kháng đông, chứ không dùng kháng đông đơn thuần.",
        4: "Viêm vú thường xuất hiện muộn hơn, quanh tuần thứ 2–3, với vùng vú đỏ, cứng, đau khu trú. Hai vú ở đây hoàn toàn bình thường."
      },
      objective:
        "Sốt sau 24 giờ đầu hậu sản kèm tử cung co hồi kém và ấn đau là viêm nội mạc tử cung, với mổ lấy thai và ối vỡ kéo dài là yếu tố nguy cơ chính. Điều trị bằng clindamycin kết hợp gentamicin tĩnh mạch cho tới khi hết sốt 24–48 giờ; sốt dai dẳng gợi ý áp xe hoặc viêm tắc tĩnh mạch chậu nhiễm khuẩn."
    },

    {
      spec: "Sản khoa",
      task: "Bước xử trí tiếp theo",
      short: "Đái tháo đường thai kỳ không đạt đích bằng ăn kiêng",
      vignette: [
        "Sản phụ 32 tuổi, thai 28 tuần, được chẩn đoán <b>đái tháo đường thai kỳ</b> sau nghiệm pháp dung nạp glucose ở tuần 26. Sản phụ đã tuân thủ chế độ ăn có kiểm soát carbohydrate và đi bộ 30 phút mỗi ngày trong hai tuần.",
        "Sổ theo dõi đường huyết mao mạch hai tuần qua: đường huyết đói dao động <b>102–112 mg/dL</b>, đường huyết sau ăn một giờ nhiều bữa trong khoảng <b>152–178 mg/dL</b>. Sản phụ ghi chép đầy đủ và ăn đúng thực đơn được tư vấn.",
        "BMI trước mang thai 29 kg/m². Tăng cân từ đầu thai kỳ 9 kg. Siêu âm: một thai sống, ước lượng cân nặng ở bách phân vị 82, chỉ số ối bình thường."
      ],
      vitals: [
        ["Nhiệt độ", "36,7 °C"],
        ["Huyết áp", "124/78"],
        ["Mạch", "86 l/ph"],
        ["Tuổi thai", "28 tuần"]
      ],
      labs: {
        title: "Đường huyết mao mạch tự theo dõi",
        rows: [
          ["Đường huyết đói (đích < 95)", "102–112 mg/dL", "< 95", "hi"],
          ["Sau ăn 1 giờ (đích < 140)", "152–178 mg/dL", "< 140", "hi"],
          ["HbA1c", "6,2%", "< 6,0 trong thai kỳ", "hi"],
          ["Ceton niệu", "Âm tính", "—", ""],
          ["Creatinine", "0,6 mg/dL", "0,5–1,0", ""]
        ]
      },
      stem: "Bước xử trí tiếp theo tốt nhất là gì?",
      choices: [
        "Bắt đầu insulin",
        "Tiếp tục điều chỉnh chế độ ăn thêm bốn tuần rồi đánh giá lại",
        "Bắt đầu metformin đường uống",
        "Bắt đầu glyburide đường uống",
        "Chấm dứt thai kỳ chủ động ở tuần 34 để tránh thai to"
      ],
      answer: 0,
      why: [
        "Sản phụ đã thử <b>thay đổi lối sống trong hai tuần</b> nhưng vẫn không đạt đích đường huyết trong thai kỳ: <b>đói dưới 95 mg/dL</b> và <b>sau ăn một giờ dưới 140 mg/dL</b>. Khi ăn kiêng và vận động thất bại, phải chuyển sang điều trị bằng thuốc.",
        "<b>Insulin là lựa chọn đầu tay</b> cho đái tháo đường thai kỳ. Lý do rất rõ ràng: insulin là phân tử lớn, <b>không qua được hàng rào bánh nhau</b>, nên không có nguy cơ tác động trực tiếp lên thai; đồng thời liều có thể chỉnh linh hoạt theo từng thời điểm trong ngày để xử lý cả tăng đường huyết đói lẫn sau ăn.",
        "Kiểm soát đường huyết tốt làm giảm rõ rệt các biến chứng: <b>thai to</b>, đẻ khó do kẹt vai, chấn thương khi sinh, <b>hạ đường huyết sơ sinh</b>, tăng bilirubin máu và hội chứng suy hô hấp. Ước lượng cân nặng thai ở bách phân vị 82 cho thấy thai đã bắt đầu tăng trưởng quá mức, càng khẳng định cần can thiệp ngay."
      ],
      wrongs: {
        1: "Thêm bốn tuần chờ đợi ở tuần 28 là khoảng thời gian mà thai tăng trưởng nhanh nhất; đường huyết mẹ cao trong giai đoạn này thúc đẩy tăng insulin ở thai và gây thai to. Hai tuần thử chế độ ăn đã là đủ để kết luận thất bại.",
        2: "Metformin qua được bánh nhau và có thể dùng như lựa chọn thay thế ở một số bệnh nhân, nhưng dữ liệu an toàn dài hạn cho trẻ còn hạn chế và một tỉ lệ đáng kể sản phụ vẫn phải bổ sung insulin. Nó không phải lựa chọn <b>tốt nhất</b>.",
        3: "Glyburide qua bánh nhau nhiều hơn và liên quan tới tăng tỉ lệ thai to cùng hạ đường huyết sơ sinh so với insulin, nên hiện không còn được ưu tiên.",
        4: "Chấm dứt thai kỳ ở tuần 34 gây non tháng nặng nề trong khi hoàn toàn có thể kiểm soát đường huyết bằng thuốc. Thời điểm sinh ở đái tháo đường thai kỳ kiểm soát tốt thường là 39–40 tuần."
      },
      objective:
        "Đái tháo đường thai kỳ không đạt đích sau một đến hai tuần điều chỉnh chế độ ăn và vận động cần chuyển sang insulin — lựa chọn đầu tay vì không qua được bánh nhau và chỉnh liều linh hoạt. Đích là đường huyết đói dưới 95 mg/dL và sau ăn một giờ dưới 140 mg/dL."
    },

    {
      spec: "Sản khoa",
      task: "Bước xử trí tiếp theo",
      short: "Sản phụ Rh âm sau chấn thương bụng",
      vignette: [
        "Sản phụ 25 tuổi, con so, thai 26 tuần, đến cấp cứu sau tai nạn giao thông nhẹ: xe bị đâm từ phía sau khi đang dừng đèn đỏ, sản phụ có thắt dây an toàn, <b>bụng va vào vô lăng</b>. Sản phụ không mất ý thức, không chấn thương chỗ khác.",
        "Hiện sản phụ tỉnh táo hoàn toàn, không đau bụng nhiều, không ra máu âm đạo, không ra nước ối, thai vẫn máy bình thường.",
        "Khám: bụng mềm, có vết bầm nhẹ ở thành bụng dưới, tử cung mềm không tăng trương lực, không ấn đau khu trú. Monitor 4 giờ: tim thai 148 lần/phút, dao động nội tại tốt, có nhịp tăng, không nhịp giảm; ghi nhận vài cơn co thưa không đều.",
        "Nhóm máu của sản phụ là <b>O, Rh âm</b>; xét nghiệm kháng thể bất thường (Coombs gián tiếp) <b>âm tính</b>. Chồng có nhóm máu Rh dương."
      ],
      vitals: [
        ["Nhiệt độ", "36,8 °C"],
        ["Huyết áp", "114/70"],
        ["Mạch", "88 l/ph"],
        ["Nhịp thở", "16 l/ph"],
        ["Tuổi thai", "26 tuần"]
      ],
      labs: {
        title: "Xét nghiệm",
        rows: [
          ["Nhóm máu mẹ", "O, Rh âm", "—", ""],
          ["Coombs gián tiếp", "Âm tính", "—", ""],
          ["Hemoglobin", "11,6 g/dL", "12,0–16,0", "lo"],
          ["Fibrinogen", "428 mg/dL", "350–650 (thai kỳ)", ""],
          ["Xét nghiệm Kleihauer-Betke", "Đang chờ kết quả", "—", ""]
        ]
      },
      stem: "Ngoài theo dõi monitor kéo dài, bước xử trí quan trọng nhất là gì?",
      choices: [
        "Tiêm immunoglobulin kháng D cho sản phụ",
        "Truyền máu Rh âm dự phòng cho sản phụ",
        "Chỉ theo dõi, chưa cần can thiệp vì Coombs gián tiếp âm tính",
        "Chọc ối định lượng bilirubin trong nước ối",
        "Truyền máu cho thai qua tĩnh mạch rốn"
      ],
      answer: 0,
      why: [
        "Sản phụ <b>Rh âm</b>, chồng Rh dương nên thai có thể Rh dương, và <b>Coombs gián tiếp âm tính</b> nghĩa là sản phụ <b>chưa bị mẫn cảm</b>. Đây chính là nhóm cần dự phòng: mục tiêu là ngăn hệ miễn dịch mẹ tạo kháng thể kháng D sau khi tiếp xúc hồng cầu thai.",
        "<b>Chấn thương bụng trong thai kỳ là một chỉ định tiêm immunoglobulin kháng D</b>, vì va chạm có thể gây <b>truyền máu thai sang mẹ</b> ngay cả khi lượng rất nhỏ và không có triệu chứng. Chỉ khoảng 0,1 mL hồng cầu thai đã đủ gây mẫn cảm.",
        "Các chỉ định khác cần thuộc lòng: thường quy ở <b>tuần 28</b>, trong vòng <b>72 giờ sau sinh</b> nếu con Rh dương, sau sảy thai, thai ngoài tử cung, phá thai, chọc ối hoặc sinh thiết gai nhau, ra máu âm đạo trong thai kỳ và ngoại xoay thai. Nên làm <b>xét nghiệm Kleihauer-Betke</b> để ước lượng thể tích máu thai truyền sang mẹ và tính liều bổ sung nếu vượt liều chuẩn. Ý nghĩa lâu dài rất lớn: một khi đã mẫn cảm thì không đảo ngược được, và các thai Rh dương sau đó có nguy cơ thiếu máu tan máu nặng, phù thai và thai lưu."
      ],
      wrongs: {
        1: "Sản phụ không mất máu đáng kể và huyết động hoàn toàn ổn định. Truyền máu dự phòng không có chỉ định và không ngăn được mẫn cảm Rh.",
        2: "Hiểu ngược hoàn toàn: Coombs gián tiếp âm tính là lý do <b>phải</b> dự phòng, vì sản phụ còn có thể được bảo vệ. Nếu Coombs đã dương thì việc mẫn cảm đã xảy ra và immunoglobulin kháng D không còn tác dụng.",
        3: "Chọc ối định lượng bilirubin đánh giá mức tan máu ở thai của sản phụ <b>đã mẫn cảm</b>; ngày nay phần lớn được thay bằng đo vận tốc đỉnh tâm thu động mạch não giữa bằng Doppler. Nó không có vai trò dự phòng.",
        4: "Truyền máu cho thai dành cho thai đã thiếu máu nặng do bệnh tan máu. Thai này hoàn toàn bình thường trên monitor."
      },
      objective:
        "Sản phụ Rh âm chưa mẫn cảm cần tiêm immunoglobulin kháng D sau chấn thương bụng, ra máu, thủ thuật xâm lấn, ở tuần 28 và trong vòng 72 giờ sau sinh nếu con Rh dương. Coombs gián tiếp âm tính là điều kiện để dự phòng còn hiệu quả, vì mẫn cảm một khi đã xảy ra thì không đảo ngược được."
    },

    {
      spec: "Cấp cứu sản phụ khoa",
      task: "Bước xử trí tiếp theo",
      short: "Co giật toàn thể ở sản phụ 36 tuần",
      vignette: [
        "Sản phụ 22 tuổi, con so, thai 36 tuần, đang ngồi chờ khám thì lên <b>cơn co giật toàn thể co cứng – co giật kéo dài 70 giây</b>, sau đó lơ mơ. Người nhà kể sản phụ than đau đầu và nhìn mờ suốt hai ngày qua nhưng không đi khám.",
        "Sản phụ không có tiền sử động kinh, không chấn thương đầu, không sốt, không dùng thuốc hay chất kích thích.",
        "Sau cơn: sản phụ dần tỉnh lại, còn lú lẫn nhẹ. Không dấu thần kinh khu trú, không cứng gáy. Phù mặt và hai tay rõ, phản xạ gân xương tăng mạnh có rung giật cổ chân. Đường huyết mao mạch 96 mg/dL.",
        "Monitor: tim thai 132 lần/phút, dao động nội tại giảm thoáng qua sau cơn giật rồi hồi phục dần. Không ra máu âm đạo, tử cung mềm."
      ],
      vitals: [
        ["Nhiệt độ", "36,9 °C"],
        ["Huyết áp", "176/112"],
        ["Mạch", "108 l/ph"],
        ["Nhịp thở", "22 l/ph"],
        ["SpO2", "96% với oxy mask"]
      ],
      labs: {
        title: "Xét nghiệm",
        rows: [
          ["Tiểu cầu", "132.000/mm³", "150.000–400.000", "lo"],
          ["AST", "96 U/L", "10–40", "hi"],
          ["Creatinine", "1,1 mg/dL", "0,5–1,0", "hi"],
          ["Tỉ số protein/creatinine niệu", "2,4", "< 0,3", "hi"],
          ["Đường huyết", "96 mg/dL", "70–100", ""],
          ["Natri", "138 mEq/L", "135–145", ""]
        ]
      },
      stem: "Bước xử trí tiếp theo tốt nhất là gì?",
      choices: [
        "Truyền magnesium sulfat tĩnh mạch",
        "Tiêm lorazepam tĩnh mạch rồi truyền phenytoin",
        "Mổ lấy thai cấp cứu ngay lập tức trong khi sản phụ còn lơ mơ",
        "Chụp cắt lớp sọ não trước khi dùng bất kỳ thuốc nào",
        "Truyền nhanh 2 lít dịch tinh thể để cải thiện tưới máu bánh nhau"
      ],
      answer: 0,
      why: [
        "Đây là <b>sản giật</b>: cơn co giật toàn thể ở sản phụ có tiền sản giật mà không giải thích được bằng nguyên nhân khác. Toàn bộ bối cảnh đã rõ — tăng huyết áp nặng, protein niệu, triệu chứng thần kinh báo trước, phù, tăng phản xạ, men gan tăng và tiểu cầu giảm.",
        "<b>Magnesium sulfat là thuốc lựa chọn</b>, vừa cắt cơn đang có vừa dự phòng cơn tái phát, và đã được chứng minh <b>vượt trội hơn cả phenytoin lẫn diazepam</b> trong bệnh cảnh này. Phác đồ là liều nạp 4–6 g tĩnh mạch trong 15–20 phút rồi duy trì 1–2 g mỗi giờ, kéo dài ít nhất 24 giờ sau sinh.",
        "Phải theo dõi <b>ngộ độc magnesium</b> theo thứ tự xuất hiện: <b>mất phản xạ gân xương</b> trước, rồi <b>ức chế hô hấp</b>, rồi ngừng tim; đồng thời theo dõi nước tiểu vì magnesium thải qua thận. Thuốc giải độc là <b>canxi gluconat tĩnh mạch</b>. Sau khi ổn định mẹ — cắt cơn giật và hạ huyết áp — thì <b>chấm dứt thai kỳ</b> là bước tiếp theo, nhưng chỉ sau khi mẹ đã ổn định."
      ],
      wrongs: {
        1: "Benzodiazepine và phenytoin là thuốc cho co giật do nguyên nhân thần kinh. Trong sản giật, chúng kém hiệu quả hơn magnesium sulfat rõ rệt và còn gây ức chế hô hấp cho cả mẹ lẫn thai.",
        2: "Mổ lấy thai khi mẹ chưa được ổn định là sai lầm nguy hiểm: gây mê trên nền sản giật chưa kiểm soát làm tăng nguy cơ co giật tái phát, xuất huyết não và tử vong mẹ. Nguyên tắc là <b>ổn định mẹ trước, lấy thai sau</b>. Ngoài ra, sản giật không đồng nghĩa với chỉ định mổ; nhiều trường hợp vẫn sinh đường âm đạo được.",
        3: "Hình ảnh sọ não chỉ cần khi bệnh cảnh không điển hình — có dấu thần kinh khu trú, cơn giật kéo dài hay tái phát dù đã dùng magnesium, hoặc bệnh nhân không tỉnh lại. Ở đây chẩn đoán đã rõ và trì hoãn điều trị là nguy hiểm.",
        4: "Truyền dịch nhanh ở sản phụ tiền sản giật có rò rỉ mao mạch dễ gây phù phổi cấp, và không hề dự phòng được co giật tái phát."
      },
      objective:
        "Sản giật được điều trị bằng magnesium sulfat, vượt trội hơn phenytoin và diazepam trong cắt và dự phòng cơn. Phải theo dõi ngộ độc magnesium theo thứ tự mất phản xạ gân xương rồi ức chế hô hấp, với thuốc giải là canxi gluconat; chấm dứt thai kỳ chỉ tiến hành sau khi mẹ đã ổn định."
    },

    {
      spec: "Cấp cứu sản phụ khoa",
      task: "Chẩn đoán nhiều khả năng nhất",
      short: "Trụy mạch đột ngột ngay sau sổ thai",
      vignette: [
        "Sản phụ 36 tuổi, con rạ lần bốn, thai 40 tuần, vừa sinh thường sau chuyển dạ nhanh có dùng oxytocin. Ngay <b>trong lúc sổ thai</b>, sản phụ đột ngột kêu khó thở dữ dội, kích động rồi mất ý thức trong vòng chưa đầy hai phút.",
        "Sản phụ tím tái nhanh, SpO2 tụt xuống 68%, huyết áp không đo được, mạch bẹn yếu. Ê kíp tiến hành hồi sinh tim phổi và đặt nội khí quản.",
        "Ngay sau đó máu chảy ồ ạt từ đường sinh dục, <b>máu loãng không đông</b>, đồng thời rỉ máu tại các vị trí kim tiêm và chân catheter.",
        "Trước cuộc sinh sản phụ hoàn toàn khỏe mạnh, không tiền sử bệnh tim phổi, không dị ứng thuốc, không dùng thuốc gì ngoài oxytocin."
      ],
      vitals: [
        ["Nhiệt độ", "36,7 °C"],
        ["Huyết áp", "Không đo được"],
        ["Mạch", "146 l/ph, yếu"],
        ["Nhịp thở", "Bóp bóng qua nội khí quản"],
        ["SpO2", "68%"]
      ],
      labs: {
        title: "Xét nghiệm cấp cứu",
        rows: [
          ["Fibrinogen", "62 mg/dL", "350–650 (thai kỳ)", "lo"],
          ["Tiểu cầu", "48.000/mm³", "150.000–400.000", "lo"],
          ["INR", "3,4", "0,8–1,1", "hi"],
          ["D-dimer", "Tăng rất cao", "—", "hi"],
          ["Hemoglobin", "6,4 g/dL", "12,0–16,0", "lo"]
        ]
      },
      stem: "Chẩn đoán nhiều khả năng nhất là gì?",
      choices: [
        "Thuyên tắc ối",
        "Thuyên tắc phổi do huyết khối",
        "Sốc phản vệ với oxytocin",
        "Nhồi máu cơ tim chu sinh",
        "Băng huyết sau sinh do đờ tử cung đơn thuần"
      ],
      answer: 0,
      why: [
        "Đây là <b>thuyên tắc ối</b>. Bộ ba kinh điển xuất hiện đúng theo trình tự đặc trưng: <b>suy hô hấp và thiếu oxy đột ngột</b>, <b>trụy tim mạch</b>, rồi <b>đông máu nội mạch rải rác</b> — tất cả trong vòng vài phút, xảy ra <b>trong lúc chuyển dạ hoặc ngay sau sổ thai</b>.",
        "Chi tiết quyết định để phân biệt là <b>rối loạn đông máu xuất hiện rất sớm và rất nặng</b>: máu chảy ra không đông, rỉ máu ở mọi vị trí chọc kim, fibrinogen chỉ còn 62 mg/dL. Không có nguyên nhân trụy mạch sản khoa nào khác gây đông máu nội mạch rải rác nhanh và dữ dội đến vậy.",
        "Cơ chế được hiểu là <b>phản ứng kiểu phản vệ với kháng nguyên thai</b> lọt vào tuần hoàn mẹ, gây co mạch phổi, suy thất phải rồi suy thất trái, kèm hoạt hóa đông máu ồ ạt. Chẩn đoán hoàn toàn <b>dựa trên lâm sàng và là chẩn đoán loại trừ</b>. Điều trị chỉ mang tính hỗ trợ: hồi sinh tim phổi, hỗ trợ hô hấp và huyết động, và <b>truyền máu khối lượng lớn</b> gồm hồng cầu, huyết tương, tiểu cầu và tủa lạnh. Yếu tố nguy cơ gồm đẻ nhiều lần, tuổi mẹ cao, chuyển dạ nhanh và dùng thuốc tăng co — đều có ở đây."
      ],
      wrongs: {
        1: "Thuyên tắc phổi do huyết khối cũng gây khó thở đột ngột và trụy mạch, nhưng <b>không gây đông máu nội mạch rải rác cấp tính</b> với fibrinogen tụt xuống 62 mg/dL. Nó cũng thường có yếu tố nguy cơ như bất động, tiền sử huyết khối hay mổ lớn.",
        2: "Sốc phản vệ gây tụt huyết áp và co thắt phế quản, thường kèm mày đay, phù mạch và co thắt thanh quản, nhưng không gây rối loạn đông máu tiêu thụ nặng như vậy. Oxytocin cũng rất hiếm khi gây phản vệ.",
        3: "Nhồi máu cơ tim chu sinh biểu hiện bằng đau ngực, biến đổi điện tâm đồ và troponin tăng, diễn tiến không đột ngột như vậy và không giải thích được rối loạn đông máu.",
        4: "Đờ tử cung gây chảy máu do tử cung không co, nhưng máu <b>vẫn đông bình thường</b> lúc đầu và không gây suy hô hấp cùng trụy mạch <b>trước khi</b> chảy máu. Ở đây trình tự ngược lại: suy hô hấp và trụy mạch đến trước, chảy máu đến sau."
      },
      objective:
        "Thuyên tắc ối biểu hiện bằng suy hô hấp đột ngột, trụy tim mạch rồi đông máu nội mạch rải rác nặng, xảy ra trong chuyển dạ hoặc ngay sau sổ thai. Rối loạn đông máu xuất hiện sớm và dữ dội là điểm phân biệt với thuyên tắc phổi do huyết khối và với băng huyết do đờ tử cung; điều trị chỉ là hỗ trợ và truyền máu khối lượng lớn."
    },

    {
      spec: "Sản khoa",
      task: "Bước xử trí tiếp theo",
      short: "Chuyển dạ đình trệ giai đoạn hoạt động",
      vignette: [
        "Sản phụ 29 tuổi, con so, thai 40 tuần 3 ngày, đang chuyển dạ giai đoạn hoạt động. Cổ tử cung mở 6 cm lúc 8 giờ sáng; khám lại lúc 12 giờ trưa và lúc 14 giờ đều vẫn <b>6 cm, xóa 80%, ngôi đầu ở vị trí 0</b>. Màng ối đã vỡ tự nhiên từ 6 giờ sáng, nước ối trong.",
        "Đo cơn co bằng ống thông áp lực trong buồng tử cung: cơn co tần số 3 trong 10 phút, <b>tổng đơn vị Montevideo chỉ đạt 140</b> trong hai giờ liên tiếp.",
        "Sản phụ đã được gây tê ngoài màng cứng, hiện không đau nhiều, huyết động ổn định. Tim thai 140 lần/phút, dao động nội tại tốt, có nhịp tăng, không nhịp giảm.",
        "Ước lượng cân nặng thai trên lâm sàng khoảng 3.300 g. Khung chậu khám lâm sàng không hẹp."
      ],
      vitals: [
        ["Nhiệt độ", "36,9 °C"],
        ["Huyết áp", "118/72"],
        ["Mạch", "88 l/ph"],
        ["Nhịp thở", "16 l/ph"],
        ["Tuổi thai", "40 tuần 3 ngày"]
      ],
      stem: "Bước xử trí tiếp theo tốt nhất là gì?",
      choices: [
        "Truyền oxytocin tăng co để đạt cơn co đủ mạnh",
        "Mổ lấy thai vì chuyển dạ ngừng tiến triển",
        "Đặt giác hút hỗ trợ sinh đường âm đạo",
        "Ngưng gây tê ngoài màng cứng và chờ thêm bốn giờ",
        "Bấm ối để tăng cường cơn co"
      ],
      answer: 0,
      why: [
        "Sản phụ có <b>chuyển dạ chậm tiến triển ở giai đoạn hoạt động</b>: cổ tử cung không thay đổi trong sáu giờ. Nhưng trước khi kết luận là <b>ngừng tiến triển thực sự</b>, phải trả lời một câu hỏi bắt buộc: <b>cơn co đã đủ mạnh chưa?</b>",
        "Câu trả lời nằm ở <b>đơn vị Montevideo</b>. Cơn co được xem là đủ khi đạt <b>từ 200 đơn vị Montevideo trở lên</b>. Ở đây chỉ đạt 140, tức là <b>cơn co không đủ</b> — nói cách khác, sản phụ chưa từng có một cuộc chuyển dạ đúng nghĩa để có thể kết luận thất bại.",
        "Định nghĩa <b>ngừng tiến triển giai đoạn hoạt động</b> đòi hỏi: cổ tử cung mở từ 6 cm trở lên, màng ối đã vỡ, và <b>không thay đổi sau ít nhất 4 giờ có cơn co đủ mạnh</b> hoặc 6 giờ với cơn co không đủ dù đã dùng oxytocin. Vì vậy bước đúng là <b>truyền oxytocin tăng co</b> để đưa cơn co lên mức hiệu quả, rồi đánh giá lại. Mẹ và con đều ổn định nên hoàn toàn có thời gian làm việc này."
      ],
      wrongs: {
        1: "Mổ lúc này là <b>quá sớm</b> và là nguyên nhân hàng đầu của tình trạng mổ lấy thai con so không cần thiết. Chưa thể kết luận chuyển dạ thất bại khi cơn co chưa bao giờ đủ mạnh.",
        2: "Sinh giúp bằng dụng cụ chỉ được thực hiện khi cổ tử cung <b>mở trọn</b> và ngôi đã lọt thấp. Cổ tử cung mới 6 cm nên hoàn toàn chống chỉ định.",
        3: "Gây tê ngoài màng cứng có thể kéo dài giai đoạn hai đôi chút nhưng <b>không</b> làm tăng tỉ lệ mổ lấy thai, và ngưng tê không phải biện pháp điều trị cơn co yếu. Chờ thêm mà không can thiệp gì là bỏ phí thời gian.",
        4: "Màng ối <b>đã vỡ tự nhiên từ 6 giờ sáng</b>, nên không còn gì để bấm. Đây là chi tiết trong bệnh án cần đọc kỹ."
      },
      objective:
        "Trước khi kết luận chuyển dạ ngừng tiến triển, phải xác nhận cơn co đủ mạnh — từ 200 đơn vị Montevideo trở lên. Cổ tử cung từ 6 cm không thay đổi cần ít nhất 4 giờ có cơn co đủ, hoặc 6 giờ với cơn co không đủ dù đã dùng oxytocin, mới đủ tiêu chuẩn mổ lấy thai."
    },

    {
      spec: "Sản khoa",
      task: "Bước xử trí tiếp theo",
      short: "Sốt trong chuyển dạ sau ối vỡ kéo dài",
      vignette: [
        "Sản phụ 24 tuổi, con so, thai 39 tuần, đang chuyển dạ giai đoạn hoạt động, cổ tử cung mở 7 cm. Ối vỡ tự nhiên cách đây 20 giờ, đã được thăm khám âm đạo bảy lần.",
        "Trong hai giờ qua sản phụ sốt tăng dần lên 38,6 °C, mạch nhanh. Sản phụ than đau bụng liên tục cả ngoài cơn co.",
        "Khám: <b>tử cung ấn đau ngay cả khi không có cơn co</b>, <b>nước ối chảy ra đục và có mùi hôi</b>. Không có triệu chứng tiết niệu, phổi trong, không viêm họng, không viêm vú, hai chi dưới bình thường.",
        "Monitor: <b>tim thai cơ bản 178 lần/phút</b>, dao động nội tại giảm nhẹ, không nhịp giảm. Cơn co đều, tiến triển tốt."
      ],
      vitals: [
        ["Nhiệt độ", "38,6 °C"],
        ["Huyết áp", "108/64"],
        ["Mạch", "122 l/ph"],
        ["Nhịp thở", "22 l/ph"],
        ["Tim thai", "178 l/ph"]
      ],
      labs: {
        title: "Xét nghiệm",
        rows: [
          ["Bạch cầu", "22.400/mm³", "tới 15.000 trong chuyển dạ", "hi"],
          ["Bạch cầu đa nhân trung tính", "89%", "40–70", "hi"],
          ["CRP", "118 mg/L", "< 5", "hi"],
          ["Tổng phân tích nước tiểu", "Bình thường", "—", ""],
          ["Cấy máu", "Đã lấy, đang chờ", "—", ""]
        ]
      },
      stem: "Bước xử trí tiếp theo tốt nhất là gì?",
      choices: [
        "Bắt đầu ngay ampicillin kết hợp gentamicin tĩnh mạch và tiếp tục cho sinh, không trì hoãn cuộc sinh",
        "Mổ lấy thai cấp cứu ngay lập tức",
        "Dùng thuốc giảm co để tạm ngưng chuyển dạ cho tới khi hết sốt",
        "Chỉ hạ sốt bằng paracetamol và theo dõi thêm bốn giờ",
        "Chờ kết quả cấy máu rồi chọn kháng sinh theo kháng sinh đồ"
      ],
      answer: 0,
      why: [
        "Đây là <b>viêm màng ối</b> — nhiễm khuẩn trong buồng ối. Tiêu chuẩn lâm sàng đã đầy đủ: <b>sốt mẹ</b> cộng với ít nhất hai trong các dấu hiệu <b>tử cung ấn đau</b>, <b>nước ối đục hôi</b>, <b>tim thai nhanh trên 160</b>, mạch mẹ nhanh và bạch cầu mẹ tăng. Yếu tố nguy cơ rất rõ: ối vỡ 20 giờ và thăm khám âm đạo nhiều lần.",
        "Xử trí gồm hai việc làm <b>đồng thời</b>: <b>kháng sinh tĩnh mạch ngay</b> — ampicillin cộng gentamicin, thêm clindamycin hoặc metronidazole nếu mổ lấy thai để phủ kỵ khí — và <b>cho sinh</b>. Kháng sinh trong lúc chuyển dạ làm giảm rõ rệt nhiễm khuẩn sơ sinh và viêm nội mạc tử cung ở mẹ.",
        "Điểm cốt lõi cần nắm: <b>viêm màng ối không phải là chỉ định mổ lấy thai</b>. Buồng tử cung nhiễm khuẩn cần được làm trống, nhưng đường sinh do <b>chỉ định sản khoa</b> quyết định. Sản phụ này đang tiến triển tốt ở 7 cm nên tiếp tục sinh đường âm đạo là hợp lý; mổ chỉ đặt ra nếu có suy thai hoặc chuyển dạ ngừng tiến triển. Cần báo bác sĩ sơ sinh vì trẻ có nguy cơ nhiễm khuẩn sớm."
      ],
      wrongs: {
        1: "Mổ lấy thai ở sản phụ đang nhiễm khuẩn buồng ối làm tăng đáng kể nguy cơ viêm nội mạc tử cung, nhiễm khuẩn vết mổ và áp xe. Nó chỉ nên thực hiện khi có chỉ định sản khoa thực sự.",
        2: "Ngừng chuyển dạ là hoàn toàn ngược hướng: ổ nhiễm khuẩn nằm trong buồng tử cung, kéo dài thời gian chỉ làm nhiễm khuẩn nặng thêm cho cả mẹ lẫn con.",
        3: "Hạ sốt đơn thuần che lấp dấu hiệu theo dõi mà không xử lý nhiễm khuẩn. Trì hoãn kháng sinh làm tăng nguy cơ nhiễm khuẩn huyết sơ sinh và viêm màng não.",
        4: "Cấy máu mất 24–48 giờ và thường âm tính. Nhiễm khuẩn trong buồng ối do nhiều vi khuẩn phối hợp, luôn được điều trị theo kinh nghiệm ngay."
      },
      objective:
        "Viêm màng ối được chẩn đoán khi sốt mẹ kèm tử cung ấn đau, nước ối hôi, tim thai nhanh hoặc bạch cầu mẹ tăng, thường sau ối vỡ kéo dài. Xử trí là kháng sinh tĩnh mạch ngay và cho sinh không trì hoãn; bản thân viêm màng ối không phải chỉ định mổ lấy thai."
    },

    {
      spec: "Sản khoa",
      task: "Bước xử trí tiếp theo",
      short: "Sản phụ mang liên cầu nhóm B vào chuyển dạ",
      vignette: [
        "Sản phụ 30 tuổi, con so, thai 39 tuần, nhập viện vì cơn co đều 5 phút một lần, cổ tử cung mở 4 cm, xóa 70%. Màng ối vừa vỡ tự nhiên 30 phút trước, nước ối trong.",
        "Kết quả cấy dịch âm đạo – trực tràng làm ở tuần 36 ghi nhận <b>liên cầu nhóm B dương tính</b>. Sản phụ không có triệu chứng tiết niệu trong thai kỳ, không sốt, thai kỳ diễn tiến bình thường.",
        "Tiền sử dị ứng: sản phụ kể từng bị <b>nổi mày đay lan tỏa</b> sau khi uống amoxicillin lúc nhỏ, không khó thở, không phù mặt, không tụt huyết áp, không phải nhập viện.",
        "Khám hiện tại: sản phụ khỏe, không sốt. Tim thai 142 lần/phút, dao động nội tại tốt, có nhịp tăng, không nhịp giảm."
      ],
      vitals: [
        ["Nhiệt độ", "36,8 °C"],
        ["Huyết áp", "116/70"],
        ["Mạch", "88 l/ph"],
        ["Nhịp thở", "16 l/ph"],
        ["Tuổi thai", "39 tuần"]
      ],
      labs: {
        title: "Xét nghiệm",
        rows: [
          ["Cấy liên cầu nhóm B tuần 36", "Dương tính", "—", "hi"],
          ["Kháng sinh đồ liên cầu nhóm B", "Nhạy clindamycin và erythromycin", "—", ""],
          ["Bạch cầu", "11.800/mm³", "tới 15.000 trong chuyển dạ", ""],
          ["Hemoglobin", "11,8 g/dL", "12,0–16,0", "lo"]
        ]
      },
      stem: "Bước xử trí tiếp theo tốt nhất là gì?",
      choices: [
        "Dùng cefazolin tĩnh mạch dự phòng trong chuyển dạ",
        "Dùng penicillin G tĩnh mạch dù có tiền sử dị ứng",
        "Dùng vancomycin tĩnh mạch",
        "Không dùng kháng sinh vì sản phụ không sốt và nước ối trong",
        "Dùng amoxicillin đường uống trong chuyển dạ"
      ],
      answer: 0,
      why: [
        "Sản phụ mang <b>liên cầu nhóm B</b> nên có chỉ định <b>dự phòng kháng sinh trong chuyển dạ</b>. Mục tiêu là ngăn <b>nhiễm khuẩn sơ sinh khởi phát sớm</b> — bệnh cảnh nhiễm khuẩn huyết, viêm phổi và viêm màng não trong tuần đầu đời, với tỉ lệ tử vong và di chứng thần kinh đáng kể. Dự phòng phải bắt đầu càng sớm càng tốt và lý tưởng là <b>ít nhất 4 giờ trước sinh</b>.",
        "Việc chọn thuốc phụ thuộc vào <b>mức độ dị ứng penicillin</b>. Tiền sử ở đây là <b>mày đay đơn thuần, không có dấu hiệu phản vệ</b> — không khó thở, không phù mạch, không tụt huyết áp, không phải nhập viện — tức là <b>nguy cơ phản vệ thấp</b>. Với nhóm này, <b>cefazolin</b> là lựa chọn đúng: hiệu quả tốt với liên cầu nhóm B và tỉ lệ phản ứng chéo với penicillin rất thấp.",
        "Cần nhớ trọn sơ đồ: không dị ứng thì dùng <b>penicillin G</b> (hoặc ampicillin); dị ứng <b>nguy cơ thấp</b> dùng <b>cefazolin</b>; dị ứng <b>nguy cơ cao</b> thì dùng <b>clindamycin nếu vi khuẩn còn nhạy</b>, và dùng <b>vancomycin nếu kháng clindamycin hoặc chưa có kháng sinh đồ</b>."
      ],
      wrongs: {
        1: "Dùng penicillin ở người có tiền sử dị ứng rõ ràng là không cần thiết khi đã có lựa chọn an toàn tương đương. Mày đay là phản ứng qua trung gian IgE thật sự, không nên bỏ qua.",
        2: "Vancomycin dành cho dị ứng <b>nguy cơ cao</b> kèm vi khuẩn kháng clindamycin hoặc chưa rõ độ nhạy. Dùng ở đây là quá mức, kém hiệu quả hơn beta-lactam với liên cầu nhóm B và góp phần tạo kháng thuốc.",
        3: "Dự phòng dựa trên <b>tình trạng mang vi khuẩn</b>, không dựa vào việc sản phụ có sốt hay không. Phần lớn trẻ nhiễm khuẩn sớm sinh ra từ mẹ mang vi khuẩn nhưng hoàn toàn không có triệu chứng.",
        4: "Dự phòng bắt buộc phải dùng <b>đường tĩnh mạch</b> để đạt nồng độ đủ cao trong máu thai và nước ối. Đường uống không đạt được mục tiêu này, và amoxicillin cũng chính là thuốc sản phụ từng dị ứng."
      },
      objective:
        "Sản phụ mang liên cầu nhóm B cần dự phòng kháng sinh tĩnh mạch trong chuyển dạ, lý tưởng ít nhất 4 giờ trước sinh, bất kể có sốt hay không. Không dị ứng dùng penicillin G, dị ứng nguy cơ thấp dùng cefazolin, dị ứng nguy cơ cao dùng clindamycin nếu còn nhạy hoặc vancomycin nếu kháng."
    },


    {
      spec: "Phụ khoa",
      task: "Bước xử trí tiếp theo",
      short: "Kinh thưa, rậm lông và béo phì ở phụ nữ trẻ",
      vignette: [
        "Nữ 24 tuổi đến khám vì <b>kinh thưa</b>: từ năm 16 tuổi tới nay chỉ có khoảng 5–6 chu kỳ mỗi năm, có khi ba tháng mới hành kinh một lần. Bệnh nhân chưa từng mang thai và hiện chưa mong con.",
        "Bệnh nhân phiền lòng vì <b>mọc lông sẫm màu ở môi trên, cằm và quanh quầng vú</b> tăng dần vài năm nay, kèm mụn trứng cá dai dẳng vùng hàm. Bệnh nhân tăng 14 kg trong ba năm.",
        "Khám: BMI 32 kg/m², vòng eo 96 cm. Điểm rậm lông Ferriman-Gallwey là 14. <b>Gai đen ở gáy và hai nách</b>. Không rụng tóc kiểu nam, không phì đại âm vật, không giọng trầm, không teo vú. Tuyến giáp không to.",
        "Siêu âm ngã âm đạo: hai buồng trứng to, nhiều nang nhỏ ở ngoại vi; nội mạc tử cung dày 13 mm, đồng nhất. Thử thai âm tính."
      ],
      vitals: [
        ["Nhiệt độ", "36,7 °C"],
        ["Huyết áp", "134/84"],
        ["Mạch", "78 l/ph"],
        ["BMI", "32 kg/m²"]
      ],
      labs: {
        title: "Xét nghiệm",
        rows: [
          ["Testosterone toàn phần", "78 ng/dL", "15–70", "hi"],
          ["DHEA-S", "268 µg/dL", "35–430", ""],
          ["17-hydroxyprogesteron", "62 ng/dL", "< 200", ""],
          ["Prolactin", "16 ng/mL", "4–23", ""],
          ["TSH", "2,1 mIU/L", "0,4–4,0", ""],
          ["Glucose đói", "108 mg/dL", "70–100", "hi"],
          ["HbA1c", "5,9%", "< 5,7", "hi"]
        ]
      },
      stem: "Ngoài tư vấn giảm cân, bước điều trị tiếp theo tốt nhất cho bệnh nhân chưa mong con là gì?",
      choices: [
        "Thuốc tránh thai kết hợp estrogen – progestin",
        "Clomiphene citrate để kích thích rụng trứng",
        "Chỉ theo dõi, không cần điều trị vì bệnh nhân chưa mong con",
        "Spironolactone đơn thuần",
        "Nạo sinh thiết nội mạc tử cung rồi cắt tử cung dự phòng"
      ],
      answer: 0,
      why: [
        "Bệnh nhân thỏa <b>tiêu chuẩn Rotterdam</b> của <b>hội chứng buồng trứng đa nang</b> — cần ít nhất hai trong ba: rối loạn phóng noãn, cường androgen trên lâm sàng hoặc xét nghiệm, và hình ảnh buồng trứng đa nang. Ở đây có đủ cả ba, sau khi đã loại trừ nguyên nhân khác bằng prolactin, TSH và 17-hydroxyprogesteron bình thường.",
        "Với bệnh nhân <b>chưa mong con</b>, <b>thuốc tránh thai kết hợp</b> là lựa chọn đầu tay vì giải quyết đồng thời ba vấn đề: tạo chu kỳ ra máu đều đặn, giảm cường androgen (estrogen làm tăng globulin gắn hormone sinh dục nên giảm testosterone tự do, còn progestin đối kháng tác dụng androgen), và quan trọng nhất là <b>bảo vệ nội mạc tử cung</b>.",
        "Điểm mấu chốt về bệnh sinh: không phóng noãn nghĩa là <b>không có hoàng thể, không có progesteron</b>, nên nội mạc chịu <b>estrogen không đối kháng kéo dài</b> — dẫn tới tăng sinh nội mạc và làm tăng đáng kể nguy cơ <b>ung thư nội mạc tử cung</b>. Nội mạc dày 13 mm ở người trẻ vô kinh kéo dài chính là dấu hiệu của điều đó. Song song cần tầm soát và xử trí <b>hội chứng chuyển hóa</b>: đường huyết đói và HbA1c của bệnh nhân đã ở ngưỡng tiền đái tháo đường."
      ],
      wrongs: {
        1: "Clomiphene và letrozole dùng để <b>kích thích rụng trứng ở bệnh nhân mong con</b>. Bệnh nhân này chưa mong con, nên gây phóng noãn là không đúng mục tiêu điều trị.",
        2: "Không điều trị là bỏ mặc nội mạc tử cung dưới estrogen không đối kháng suốt nhiều năm — con đường dẫn tới tăng sinh nội mạc và ung thư nội mạc ở tuổi rất trẻ.",
        3: "Spironolactone kháng androgen giúp cải thiện rậm lông và thường được <b>thêm vào</b> sau vài tháng nếu chưa đủ, nhưng nó không điều hòa chu kỳ, không bảo vệ nội mạc, và <b>gây quái thai</b> nên bắt buộc phải đi kèm biện pháp tránh thai.",
        4: "Cắt tử cung dự phòng ở phụ nữ 24 tuổi là hoàn toàn không tương xứng. Nguy cơ nội mạc được kiểm soát tốt bằng progestin hoặc thuốc tránh thai kết hợp."
      },
      objective:
        "Hội chứng buồng trứng đa nang chẩn đoán theo tiêu chuẩn Rotterdam sau khi loại trừ bệnh tuyến giáp, tăng prolactin và tăng sản thượng thận bẩm sinh. Ở bệnh nhân chưa mong con, thuốc tránh thai kết hợp là đầu tay vì điều hòa chu kỳ, giảm cường androgen và bảo vệ nội mạc khỏi estrogen không đối kháng."
    },

    {
      spec: "Phụ khoa",
      task: "Chẩn đoán nhiều khả năng nhất",
      short: "Rong kinh kéo dài kèm tử cung to gồ ghề",
      vignette: [
        "Nữ 41 tuổi đến khám vì <b>hành kinh kéo dài 8–9 ngày với lượng máu rất nhiều</b>, phải thay băng vệ sinh mỗi 1–2 giờ và ra nhiều cục máu đông, kéo dài ba năm và nặng dần. Chu kỳ vẫn đều 28 ngày.",
        "Bệnh nhân thấy nặng tức vùng hạ vị, <b>tiểu nhiều lần</b> và táo bón. Không đau khi giao hợp, không đau bụng kinh dữ dội, không ra máu giữa chu kỳ, không ra máu sau giao hợp.",
        "Khám: da niêm nhợt. Bụng sờ thấy khối vùng hạ vị tương đương thai 14 tuần. Khám âm đạo: <b>tử cung to, chắc, bề mặt gồ ghề nhiều khối lồi</b>, di động được, không đau. Hai phần phụ không sờ thấy khối. Cổ tử cung bình thường.",
        "Siêu âm ngã âm đạo: tử cung 13 cm với <b>nhiều khối giảm âm ranh giới rõ trong cơ tử cung</b>, khối lớn nhất 5 cm nằm dưới niêm mạc lồi vào buồng tử cung. Hai buồng trứng bình thường."
      ],
      vitals: [
        ["Nhiệt độ", "36,7 °C"],
        ["Huyết áp", "112/70"],
        ["Mạch", "94 l/ph"],
        ["BMI", "26 kg/m²"]
      ],
      labs: {
        title: "Xét nghiệm",
        rows: [
          ["Hemoglobin", "8,2 g/dL", "12,0–16,0", "lo"],
          ["MCV", "72 fL", "80–100", "lo"],
          ["Ferritin", "5 ng/mL", "15–200", "lo"],
          ["Thử thai", "Âm tính", "—", ""],
          ["TSH", "1,9 mIU/L", "0,4–4,0", ""],
          ["Sinh thiết nội mạc tử cung", "Nội mạc tăng sinh, không có tế bào không điển hình", "—", ""]
        ]
      },
      stem: "Chẩn đoán nhiều khả năng nhất là gì?",
      choices: [
        "U xơ tử cung",
        "Lạc nội mạc trong cơ tử cung",
        "Ung thư nội mạc tử cung",
        "Polyp nội mạc tử cung",
        "Rối loạn chức năng do không phóng noãn"
      ],
      answer: 0,
      why: [
        "Bệnh cảnh là <b>u xơ tử cung</b>: rong kinh cường kinh với <b>chu kỳ vẫn đều</b>, tử cung <b>to, chắc, bề mặt gồ ghề nhiều khối, không đau</b>, kèm triệu chứng chèn ép do khối lớn — tiểu nhiều lần vì đè bàng quang, táo bón vì đè trực tràng.",
        "Siêu âm khẳng định: nhiều khối giảm âm ranh giới rõ trong cơ tử cung. Vị trí quyết định triệu chứng: khối <b>dưới niêm mạc</b> lồi vào buồng tử cung làm tăng diện tích nội mạc và cản trở co hồi cơ tử cung nên gây ra máu nhiều nhất, dù thường có kích thước nhỏ hơn các khối khác.",
        "Hậu quả toàn thân đã rõ: <b>thiếu máu thiếu sắt nặng</b> với hemoglobin 8,2 g/dL, hồng cầu nhỏ và ferritin cạn kiệt. Sinh thiết nội mạc là bước bắt buộc ở phụ nữ trên 45 tuổi hoặc có yếu tố nguy cơ để loại trừ ác tính, và ở đây đã cho kết quả lành tính. Hướng điều trị tùy nguyện vọng sinh sản: từ dụng cụ tử cung chứa levonorgestrel, acid tranexamic, thuốc nội tiết, tới cắt u xơ qua soi buồng tử cung, nút động mạch tử cung hoặc cắt tử cung."
      ],
      wrongs: {
        1: "Lạc nội mạc trong cơ tử cung cũng gây cường kinh nhưng tử cung <b>to đều, mềm và ấn đau</b>, kèm <b>đau bụng kinh dữ dội tăng dần</b>. Siêu âm cho hình ảnh cơ tử cung không đồng nhất, dày không đối xứng, không có khối ranh giới rõ.",
        2: "Ung thư nội mạc thường gây <b>ra máu bất thường giữa chu kỳ hoặc sau mãn kinh</b> chứ không phải cường kinh với chu kỳ đều, và sinh thiết ở đây đã loại trừ.",
        3: "Polyp nội mạc thường gây ra máu <b>giữa chu kỳ</b> hoặc rỉ rả, không làm tử cung to gồ ghề 13 cm và không gây triệu chứng chèn ép.",
        4: "Ra máu do không phóng noãn có đặc điểm <b>chu kỳ không đều, thưa hoặc kéo dài không dự đoán được</b>. Bệnh nhân này có chu kỳ hoàn toàn đều, cho thấy trục nội tiết vẫn hoạt động bình thường và nguyên nhân là cấu trúc."
      },
      objective:
        "Cường kinh với chu kỳ đều kèm tử cung to chắc gồ ghề và triệu chứng chèn ép là u xơ tử cung; khối dưới niêm mạc gây ra máu nhiều nhất. Cần sinh thiết nội mạc để loại trừ ác tính ở phụ nữ trên 45 tuổi hoặc có yếu tố nguy cơ, và điều trị thiếu máu thiếu sắt kèm theo."
    },

    {
      spec: "Phụ khoa",
      task: "Bước tiếp theo trong chẩn đoán",
      short: "Đau bụng kinh nặng dần kèm giao hợp đau sâu",
      vignette: [
        "Nữ 29 tuổi đến khám vì <b>đau bụng kinh nặng dần</b> suốt sáu năm, nay phải nghỉ làm 1–2 ngày mỗi chu kỳ dù đã dùng thuốc kháng viêm không steroid. Đau bắt đầu 1–2 ngày <b>trước</b> khi ra máu và kéo dài suốt kỳ kinh.",
        "Bệnh nhân còn <b>đau sâu khi giao hợp</b>, <b>đau khi đại tiện trong kỳ kinh</b> và đau vùng chậu mạn tính ngoài kỳ kinh. Hai vợ chồng <b>chưa có thai sau 18 tháng quan hệ không dùng biện pháp tránh thai</b>.",
        "Khám: <b>các nốt cứng ấn đau ở dây chằng tử cung – cùng</b>, <b>tử cung ngả sau và cố định, kém di động</b>, ấn đau túi cùng sau. Không sốt, không khí hư bất thường, không đau khi lắc cổ tử cung kiểu viêm nhiễm.",
        "Siêu âm ngã âm đạo: một nang buồng trứng trái 4 cm với <b>hồi âm mịn đồng nhất kiểu kính mờ</b>. Thử thai âm tính, xét nghiệm lậu và Chlamydia âm tính."
      ],
      vitals: [
        ["Nhiệt độ", "36,8 °C"],
        ["Huyết áp", "112/70"],
        ["Mạch", "76 l/ph"],
        ["BMI", "22 kg/m²"]
      ],
      labs: {
        title: "Xét nghiệm",
        rows: [
          ["Hemoglobin", "12,2 g/dL", "12,0–16,0", ""],
          ["Bạch cầu", "7.400/mm³", "4.000–11.000", ""],
          ["CRP", "3 mg/L", "< 5", ""],
          ["CA-125", "68 U/mL", "< 35", "hi"],
          ["Thử thai", "Âm tính", "—", ""]
        ]
      },
      stem: "Chẩn đoán nhiều khả năng nhất và tiêu chuẩn vàng để khẳng định là gì?",
      choices: [
        "Lạc nội mạc tử cung — nội soi ổ bụng có sinh thiết tổn thương",
        "Viêm vùng chậu mạn tính — cấy dịch cổ tử cung",
        "Lạc nội mạc trong cơ tử cung — cộng hưởng từ tiểu khung",
        "Ung thư buồng trứng — định lượng CA-125 lặp lại",
        "Hội chứng ruột kích thích — nội soi đại tràng"
      ],
      answer: 0,
      why: [
        "Bệnh cảnh là <b>lạc nội mạc tử cung</b> với bộ triệu chứng kinh điển thường được gọi là các chữ D: <b>đau bụng kinh</b>, <b>giao hợp đau sâu</b>, <b>đau khi đại tiện</b>, đau vùng chậu mạn và <b>vô sinh</b>. Đặc điểm gợi ý cao là đau <b>khởi phát trước khi ra máu</b> và nặng dần theo năm tháng.",
        "Khám thực thể có giá trị rất cao: <b>các nốt cứng ấn đau ở dây chằng tử cung – cùng</b> và <b>tử cung ngả sau cố định</b> do dính. Nang buồng trứng có hồi âm mịn kiểu kính mờ là hình ảnh điển hình của <b>nang lạc nội mạc</b>, hình thành do máu kinh cũ tích tụ.",
        "<b>Nội soi ổ bụng quan sát trực tiếp tổn thương kèm sinh thiết mô bệnh học là tiêu chuẩn vàng</b>. Tổn thương điển hình là các nốt màu xanh đen kiểu vết bỏng thuốc súng trên phúc mạc, kèm dính. Trên thực hành, điều trị thử bằng thuốc tránh thai kết hợp hoặc progestin thường được bắt đầu trước khi nội soi ở bệnh nhân không vô sinh; nhưng khi có <b>vô sinh</b> như ở đây, nội soi vừa chẩn đoán vừa cho phép <b>đốt hoặc cắt tổn thương và gỡ dính</b>, giúp cải thiện khả năng có thai."
      ],
      wrongs: {
        1: "Viêm vùng chậu gây đau tăng dần cấp tính kèm sốt, khí hư mủ, bạch cầu và CRP tăng. Ở đây các chỉ số viêm bình thường và xét nghiệm vi khuẩn âm tính; đau lại có tính chu kỳ theo kinh nguyệt.",
        2: "Lạc nội mạc trong cơ tử cung thường gặp ở phụ nữ lớn tuổi hơn, đã sinh nhiều lần, với tử cung <b>to đều và mềm</b>, gây cường kinh nổi bật. Nó không tạo nốt ở dây chằng tử cung – cùng hay nang buồng trứng kiểu kính mờ.",
        3: "CA-125 tăng nhẹ rất thường gặp trong lạc nội mạc tử cung và nhiều bệnh lành tính khác, nên không đặc hiệu. Ung thư buồng trứng ở tuổi 29 với bệnh sử sáu năm mang tính chu kỳ như vậy là rất khó xảy ra.",
        4: "Hội chứng ruột kích thích gây đau bụng liên quan tới đại tiện và thay đổi thói quen đi ngoài, nhưng không gây giao hợp đau sâu, không tạo nốt ở dây chằng tử cung – cùng và không gây vô sinh."
      },
      objective:
        "Đau bụng kinh nặng dần, giao hợp đau sâu, đau khi đại tiện và vô sinh, kèm nốt ở dây chằng tử cung – cùng và tử cung ngả sau cố định là lạc nội mạc tử cung. Tiêu chuẩn vàng là nội soi ổ bụng quan sát và sinh thiết tổn thương, đồng thời cho phép điều trị khi bệnh nhân vô sinh."
    },

    {
      spec: "Phụ khoa",
      task: "Bước tiếp theo trong chẩn đoán",
      short: "Vô sinh nguyên phát 14 tháng",
      vignette: [
        "Cặp vợ chồng đến khám vì <b>chưa có thai sau 14 tháng</b> quan hệ đều đặn không dùng biện pháp tránh thai. Người vợ 28 tuổi, chưa từng mang thai.",
        "Người vợ có <b>kinh nguyệt đều mỗi 29 ngày</b>, hành kinh 4 ngày lượng vừa, có căng ngực và tăng tiết dịch nhầy trong suốt giữa chu kỳ. Không đau bụng kinh nhiều, không giao hợp đau, không tiền sử viêm vùng chậu hay phẫu thuật ổ bụng.",
        "Khám phụ khoa và siêu âm ngã âm đạo hoàn toàn bình thường. TSH, prolactin bình thường; progesteron huyết thanh ngày 21 là 12 ng/mL.",
        "Người chồng 31 tuổi, khỏe mạnh, không tiền sử quai bị sau dậy thì, không phẫu thuật bìu, không dùng thuốc, không hút thuốc. <b>Chưa từng làm xét nghiệm nào.</b>"
      ],
      vitals: [
        ["Nhiệt độ", "36,7 °C"],
        ["Huyết áp", "110/68"],
        ["Mạch", "72 l/ph"],
        ["BMI (vợ)", "22 kg/m²"]
      ],
      labs: {
        title: "Xét nghiệm của người vợ",
        rows: [
          ["TSH", "1,8 mIU/L", "0,4–4,0", ""],
          ["Prolactin", "14 ng/mL", "4–23", ""],
          ["Progesteron ngày 21", "12 ng/mL", "> 3 xác nhận có phóng noãn", ""],
          ["FSH ngày 3", "6,4 mIU/mL", "< 10", ""],
          ["AMH", "2,8 ng/mL", "1,0–4,0", ""]
        ]
      },
      stem: "Bước tiếp theo tốt nhất là gì?",
      choices: [
        "Xét nghiệm tinh dịch đồ cho người chồng",
        "Chụp buồng tử cung – vòi trứng có cản quang cho người vợ",
        "Nội soi ổ bụng chẩn đoán cho người vợ",
        "Bắt đầu clomiphene citrate kích thích phóng noãn",
        "Chuyển thẳng sang thụ tinh trong ống nghiệm"
      ],
      answer: 0,
      why: [
        "Cặp đôi đã đủ tiêu chuẩn <b>vô sinh</b>: không có thai sau <b>12 tháng</b> quan hệ đều không tránh thai ở phụ nữ dưới 35 tuổi (ngưỡng rút xuống <b>6 tháng</b> nếu từ 35 tuổi trở lên).",
        "Nguyên tắc tiếp cận là làm <b>xét nghiệm đơn giản, rẻ và không xâm lấn trước</b>. <b>Tinh dịch đồ</b> đứng đầu danh sách: yếu tố nam giới chiếm khoảng <b>một phần ba</b> nguyên nhân vô sinh và góp phần thêm ở một phần ba nữa, trong khi xét nghiệm chỉ tốn ít tiền, không xâm lấn và cho kết quả nhanh.",
        "Ở đây, người vợ <b>đã có bằng chứng phóng noãn tốt</b>: chu kỳ đều, có triệu chứng giữa chu kỳ, và progesteron ngày 21 là 12 ng/mL — trên ngưỡng 3 ng/mL xác nhận đã phóng noãn. Dự trữ buồng trứng cũng bình thường. Trong khi đó người chồng <b>chưa được đánh giá gì cả</b>. Bỏ qua nửa còn lại của cặp đôi để đi thẳng vào thủ thuật xâm lấn cho người vợ là sai lầm logic điển hình của dạng câu hỏi này."
      ],
      wrongs: {
        1: "Chụp buồng tử cung – vòi trứng là bước quan trọng để đánh giá độ thông vòi và buồng tử cung, nhưng nó xâm lấn hơn, có nhiễm xạ, gây đau và có nguy cơ nhiễm khuẩn. Nó được làm <b>sau</b> tinh dịch đồ.",
        2: "Nội soi ổ bụng xâm lấn nhất, cần gây mê, và chỉ đặt ra khi nghi lạc nội mạc hoặc dính vùng chậu. Bệnh nhân này không có triệu chứng nào gợi ý điều đó.",
        3: "Clomiphene kích thích phóng noãn ở người <b>không phóng noãn</b>. Người vợ đã phóng noãn bình thường, nên dùng thuốc là điều trị sai đích và chỉ làm tăng nguy cơ đa thai.",
        4: "Thụ tinh trong ống nghiệm là bước cuối, tốn kém và xâm lấn, chỉ dùng sau khi đã xác định nguyên nhân và các biện pháp đơn giản hơn thất bại."
      },
      objective:
        "Vô sinh được xác định sau 12 tháng không có thai ở phụ nữ dưới 35 tuổi, hoặc 6 tháng nếu từ 35 tuổi trở lên. Đánh giá bắt đầu bằng xét nghiệm rẻ và ít xâm lấn nhất — tinh dịch đồ cho người chồng cùng xác nhận phóng noãn ở người vợ — trước khi làm chụp buồng tử cung – vòi trứng hay nội soi."
    },

    {
      spec: "Phụ khoa",
      task: "Bước tiếp theo trong chẩn đoán",
      short: "Tế bào học cổ tử cung bất thường mức độ cao",
      vignette: [
        "Nữ 33 tuổi đến nhận kết quả tầm soát cổ tử cung định kỳ. Bệnh nhân không có triệu chứng: không ra máu bất thường, không ra máu sau giao hợp, không khí hư hôi, không đau vùng chậu.",
        "Tiền sử: bắt đầu quan hệ tình dục năm 17 tuổi, có bốn bạn tình trong đời, hút thuốc 8 gói-năm, <b>chưa từng tiêm vắc-xin HPV</b>. Đã sinh hai con đường âm đạo. Không suy giảm miễn dịch, HIV âm tính.",
        "Kết quả xét nghiệm tế bào học: <b>tổn thương trong biểu mô vảy mức độ cao (HSIL)</b>. Xét nghiệm HPV nguy cơ cao: dương tính với týp 16.",
        "Khám mỏ vịt hiện tại: cổ tử cung trơn láng, không thấy tổn thương sùi hay loét bằng mắt thường, không chảy máu khi chạm."
      ],
      vitals: [
        ["Nhiệt độ", "36,7 °C"],
        ["Huyết áp", "118/74"],
        ["Mạch", "74 l/ph"],
        ["BMI", "24 kg/m²"]
      ],
      labs: {
        title: "Kết quả tầm soát",
        rows: [
          ["Tế bào học cổ tử cung", "HSIL", "Bình thường", "hi"],
          ["HPV nguy cơ cao", "Dương tính, týp 16", "Âm tính", "hi"],
          ["Thử thai", "Âm tính", "—", ""],
          ["HIV", "Âm tính", "—", ""]
        ]
      },
      stem: "Bước tiếp theo tốt nhất là gì?",
      choices: [
        "Soi cổ tử cung kèm sinh thiết vùng nghi ngờ",
        "Làm lại tế bào học cổ tử cung sau 12 tháng",
        "Cắt tử cung toàn phần",
        "Tiêm vắc-xin HPV rồi làm lại xét nghiệm sau sáu tháng",
        "Chụp cộng hưởng từ tiểu khung để đánh giá giai đoạn"
      ],
      answer: 0,
      why: [
        "Bệnh nhân có <b>HSIL</b> — tổn thương trong biểu mô vảy mức độ cao — kèm <b>HPV týp 16</b>, týp nguy cơ cao nhất, chịu trách nhiệm cho khoảng một nửa số ca ung thư cổ tử cung. Đây là nhóm nguy cơ cao rõ rệt.",
        "Điều cần nhớ là <b>tế bào học chỉ là xét nghiệm tầm soát, không phải chẩn đoán</b>. Nó lấy tế bào bong chứ không đánh giá được mô và mức độ xâm lấn. Vì vậy mọi kết quả bất thường mức độ cao đều phải được <b>chuyển sang bước chẩn đoán mô bệnh học</b>.",
        "<b>Soi cổ tử cung</b> dùng acid acetic và dung dịch Lugol để bộc lộ vùng bất thường, cho phép sinh thiết đúng chỗ, đồng thời nạo ống cổ tử cung khi cần. Kết quả mô bệnh học mới quyết định điều trị: theo dõi, hay cắt bằng vòng điện, hay khoét chóp. Cần nhớ thêm rằng <b>hút thuốc lá</b> là yếu tố nguy cơ độc lập vì làm giảm miễn dịch tại chỗ và cản trở việc đào thải HPV, nên tư vấn cai thuốc là một phần của điều trị."
      ],
      wrongs: {
        1: "Theo dõi lặp lại chỉ phù hợp với bất thường <b>mức độ thấp</b> ở phụ nữ trẻ, nơi tỉ lệ tự thoái triển cao. Với HSIL kèm HPV 16, chờ 12 tháng có nguy cơ để tổn thương tiến triển thành ung thư xâm lấn.",
        2: "Cắt tử cung không bao giờ là bước đầu cho một tổn thương <b>tiền ung thư chưa được xác định bằng mô bệnh học</b>. Các biện pháp bảo tồn hiệu quả cao và giữ được khả năng sinh sản.",
        3: "Vắc-xin HPV có tính <b>dự phòng</b>, không điều trị được nhiễm HPV đã có hay tổn thương đang tồn tại. Nó vẫn nên được tiêm nhưng không thay thế việc soi cổ tử cung.",
        4: "Chụp cộng hưởng từ dùng để <b>đánh giá giai đoạn ung thư đã được chẩn đoán</b>. Ở đây chưa có chẩn đoán ung thư nào, và tổn thương tiền xâm lấn không thấy được trên hình ảnh."
      },
      objective:
        "Tế bào học cổ tử cung là xét nghiệm tầm soát chứ không phải chẩn đoán; kết quả HSIL hoặc HPV týp 16 hay 18 cần chuyển sang soi cổ tử cung kèm sinh thiết. Mô bệnh học mới quyết định điều trị bảo tồn bằng cắt vòng điện hay khoét chóp, và cai thuốc lá là một phần của xử trí."
    },

    {
      spec: "Phụ khoa",
      task: "Bước xử trí tiếp theo",
      short: "Khối phần phụ phức tạp ở phụ nữ sau mãn kinh",
      vignette: [
        "Nữ 63 tuổi, mãn kinh năm 50 tuổi, đến khám vì <b>bụng chướng dần và cảm giác đầy bụng</b> trong bốn tháng, ăn nhanh no, sụt 5 kg. Bệnh nhân đã khám tiêu hóa và được chẩn đoán hội chứng ruột kích thích nhưng không đỡ.",
        "Tiền sử: chưa từng sinh con, chưa từng dùng thuốc tránh thai. <b>Chị gái bị ung thư vú năm 44 tuổi, mẹ bị ung thư buồng trứng năm 58 tuổi.</b>",
        "Khám: bụng chướng, gõ đục vùng thấp, <b>có dịch tự do</b>. Khám phụ khoa: sờ thấy <b>khối vùng chậu phải chắc, kém di động, bề mặt không đều</b>. Không hạch bẹn.",
        "Siêu âm ngã âm đạo: khối phần phụ phải <b>9 cm, dạng hỗn hợp, có vách dày và chồi nhú trong lòng, tăng sinh mạch trên Doppler</b>; dịch ổ bụng lượng nhiều."
      ],
      vitals: [
        ["Nhiệt độ", "36,8 °C"],
        ["Huyết áp", "128/78"],
        ["Mạch", "88 l/ph"],
        ["BMI", "23 kg/m²"]
      ],
      labs: {
        title: "Xét nghiệm",
        rows: [
          ["CA-125", "684 U/mL", "< 35", "hi"],
          ["Hemoglobin", "10,4 g/dL", "12,0–16,0", "lo"],
          ["Albumin", "3,1 g/dL", "3,5–5,5", "lo"],
          ["Creatinine", "0,8 mg/dL", "0,5–1,0", ""],
          ["Sinh thiết nội mạc tử cung", "Nội mạc teo, không ác tính", "—", ""]
        ]
      },
      stem: "Bước xử trí tiếp theo tốt nhất là gì?",
      choices: [
        "Chuyển bác sĩ ung thư phụ khoa để phẫu thuật đánh giá giai đoạn và giảm khối u",
        "Chọc hút dịch nang qua ngã âm đạo để xét nghiệm tế bào",
        "Chọc tháo dịch ổ bụng và theo dõi CA-125 mỗi ba tháng",
        "Mổ nội soi cắt phần phụ phải đơn thuần tại khoa phụ sản thông thường",
        "Hóa trị theo kinh nghiệm trước khi có chẩn đoán mô bệnh học"
      ],
      answer: 0,
      why: [
        "Đây là <b>ung thư buồng trứng cho tới khi chứng minh được điều ngược lại</b>. Mọi dấu hiệu nguy cơ cao đều hiện diện: <b>phụ nữ sau mãn kinh</b>, khối <b>đặc, có vách và chồi nhú, tăng sinh mạch</b>, kích thước lớn, kèm <b>dịch ổ bụng</b> và <b>CA-125 tăng rất cao</b>. Triệu chứng mơ hồ kéo dài kiểu tiêu hóa chính là cách bệnh này thường bị chẩn đoán muộn.",
        "Tiền sử gia đình rất gợi ý <b>hội chứng ung thư vú – buồng trứng di truyền</b> liên quan đột biến BRCA. Chưa từng sinh con và chưa từng dùng thuốc tránh thai cũng là yếu tố nguy cơ, do số lần rụng trứng suốt đời nhiều hơn.",
        "Điểm quyết định về xử trí: bệnh nhân phải được <b>chuyển tới bác sĩ ung thư phụ khoa</b>. Ung thư buồng trứng được <b>đánh giá giai đoạn bằng phẫu thuật</b>, và yếu tố tiên lượng mạnh nhất là <b>mức độ giảm khối u tối ưu</b> — lượng u còn sót lại sau mổ. Phẫu thuật do bác sĩ chuyên ngành ung thư phụ khoa thực hiện cho tỉ lệ giảm khối tối ưu và thời gian sống thêm cao hơn rõ rệt so với phẫu thuật viên tổng quát."
      ],
      wrongs: {
        1: "Chọc hút khối nghi ác tính là <b>chống chỉ định</b> vì có thể làm vỡ vỏ khối u và gieo rắc tế bào ung thư khắp ổ bụng, làm tăng giai đoạn bệnh và xấu tiên lượng.",
        2: "Chọc tháo dịch chỉ giảm triệu chứng tạm thời và không điều trị gì. Theo dõi CA-125 trong khi khối u tiếp tục lan tràn là bỏ mặc bệnh tiến triển.",
        3: "Cắt phần phụ đơn thuần không thực hiện được đánh giá giai đoạn đầy đủ, vốn đòi hỏi rửa ổ bụng làm tế bào học, cắt mạc nối lớn, sinh thiết phúc mạc nhiều vị trí và nạo hạch. Mổ không đúng chuyên khoa dễ để sót u và phải mổ lại.",
        4: "Hóa trị tân bổ trợ có vai trò ở bệnh nhân không thể giảm khối tối ưu ngay hoặc thể trạng quá kém, nhưng vẫn cần <b>bằng chứng mô bệnh học</b> trước khi bắt đầu, và quyết định đó thuộc về bác sĩ ung thư phụ khoa."
      },
      objective:
        "Khối phần phụ đặc có vách và chồi nhú ở phụ nữ sau mãn kinh, kèm dịch ổ bụng và CA-125 tăng cao, là ung thư buồng trứng cho tới khi loại trừ. Bệnh nhân phải được chuyển bác sĩ ung thư phụ khoa vì đánh giá giai đoạn là bằng phẫu thuật và mức giảm khối u tối ưu quyết định tiên lượng; tuyệt đối không chọc hút khối nghi ác tính."
    },

    {
      spec: "Sản khoa",
      task: "Bước xử trí tiếp theo",
      short: "Tử cung lớn hơn tuổi thai kèm nôn nặng",
      vignette: [
        "Nữ 21 tuổi, trễ kinh 11 tuần, đến khám vì <b>nôn nghén rất nặng</b> phải nhập viện truyền dịch hai lần, kèm ra máu âm đạo lượng ít màu nâu sẫm rải rác hai tuần nay. Hôm nay bệnh nhân ra ít <b>mô giống chùm nho nhỏ</b> theo máu.",
        "Bệnh nhân còn thấy hồi hộp, run tay, sợ nóng và sụt cân dù đang mang thai.",
        "Khám: <b>tử cung tương đương thai 16 tuần</b>, mềm, không đau. <b>Không nghe được tim thai bằng Doppler.</b> Hai phần phụ sờ thấy khối nang hai bên. Tuyến giáp to lan tỏa nhẹ, run tay biên độ nhỏ.",
        "Siêu âm: buồng tử cung chứa <b>khối hồi âm hỗn hợp dạng tổ ong với nhiều nang nhỏ, không thấy phôi thai, không thấy tim thai</b>; hai buồng trứng có nang hoàng tuyến."
      ],
      vitals: [
        ["Nhiệt độ", "37,2 °C"],
        ["Huyết áp", "148/92"],
        ["Mạch", "116 l/ph"],
        ["Nhịp thở", "20 l/ph"],
        ["Tuổi thai theo kinh cuối", "11 tuần"]
      ],
      labs: {
        title: "Xét nghiệm",
        rows: [
          ["Beta-hCG huyết thanh", "428.000 mIU/mL", "—", "hi"],
          ["TSH", "0,04 mIU/L", "0,4–4,0", "lo"],
          ["FT4", "2,6 ng/dL", "0,8–1,8", "hi"],
          ["Hemoglobin", "9,6 g/dL", "12,0–16,0", "lo"],
          ["Nhóm máu", "B, Rh âm", "—", ""],
          ["X-quang ngực", "Không tổn thương di căn", "—", ""]
        ]
      },
      stem: "Bước xử trí tiếp theo tốt nhất là gì?",
      choices: [
        "Hút nạo buồng tử cung, sau đó theo dõi beta-hCG hàng tuần cho tới khi âm tính",
        "Cắt tử cung toàn phần ngay",
        "Hóa trị bằng methotrexate trước khi lấy mô",
        "Theo dõi và chờ sảy tự nhiên",
        "Khởi phát chuyển dạ bằng misoprostol"
      ],
      answer: 0,
      why: [
        "Đây là <b>thai trứng toàn phần</b>: tử cung <b>lớn hơn tuổi thai</b>, <b>không có phôi và không có tim thai</b>, hình ảnh <b>tổ ong</b> trên siêu âm, <b>beta-hCG rất cao</b>, ra mô hình chùm nho, kèm <b>nang hoàng tuyến hai buồng trứng</b>.",
        "Các biểu hiện toàn thân đều do <b>beta-hCG cực cao</b>: nôn nghén nặng, tăng huyết áp <b>trước tuần 20</b> (tiền sản giật sớm — luôn phải nghĩ tới thai trứng), và <b>cường giáp</b> do beta-hCG có cấu trúc chuỗi alpha giống TSH nên kích thích thụ thể TSH.",
        "Điều trị là <b>hút nạo buồng tử cung</b>, ưu tiên hút chân không vì ít nguy cơ thủng và giúp lấy mô làm giải phẫu bệnh. Quan trọng không kém là <b>theo dõi beta-hCG hàng tuần cho tới khi âm tính ba lần liên tiếp</b>, rồi hàng tháng trong sáu tháng, để phát hiện <b>u nguyên bào nuôi tồn lưu</b> — xảy ra ở khoảng 15–20% thai trứng toàn phần. Trong suốt thời gian theo dõi, bệnh nhân <b>bắt buộc tránh thai</b> vì thai mới sẽ làm beta-hCG tăng và không phân biệt được với bệnh tồn lưu. Bệnh nhân Rh âm nên cần immunoglobulin kháng D."
      ],
      wrongs: {
        1: "Cắt tử cung chỉ cân nhắc ở phụ nữ lớn tuổi đã đủ con hoặc khi chảy máu không kiểm soát. Ở bệnh nhân 21 tuổi, hút nạo bảo tồn khả năng sinh sản và hiệu quả tương đương. Lưu ý cắt tử cung cũng <b>không</b> miễn trừ việc theo dõi beta-hCG.",
        2: "Methotrexate dùng cho <b>u nguyên bào nuôi tồn lưu</b> sau khi beta-hCG không giảm đúng cách. Nó không thay thế được việc lấy mô ra khỏi buồng tử cung, và không có mô bệnh học thì không phân biệt được thai trứng với ung thư nguyên bào nuôi.",
        3: "Chờ sảy tự nhiên kéo dài nguy cơ chảy máu ồ ạt, cường giáp nặng lên và tiền sản giật tiến triển, đồng thời không có mô để chẩn đoán mô bệnh học.",
        4: "Khởi phát bằng thuốc co bóp tử cung làm tăng nguy cơ <b>gieo rắc mô nguyên bào nuôi vào tuần hoàn</b> gây thuyên tắc phổi do mô trứng, nên bị tránh trong thai trứng."
      },
      objective:
        "Thai trứng biểu hiện bằng tử cung lớn hơn tuổi thai, không có tim thai, hình ảnh tổ ong, beta-hCG rất cao, nôn nặng, tiền sản giật trước tuần 20 và cường giáp. Điều trị là hút nạo buồng tử cung kèm theo dõi beta-hCG cho tới khi âm tính và tránh thai suốt thời gian theo dõi để phát hiện u nguyên bào nuôi tồn lưu."
    },

    {
      spec: "Sản khoa",
      task: "Bước xử trí tiếp theo",
      short: "Ra máu và đau bụng ở thai 9 tuần, cổ tử cung mở",
      vignette: [
        "Nữ 28 tuổi, thai 9 tuần theo kinh cuối, vào cấp cứu vì <b>ra máu âm đạo lượng nhiều</b> kèm đau quặn bụng dưới từng cơn trong 8 giờ. Bệnh nhân đã ra vài cục máu đông lớn và một ít mô.",
        "Siêu âm hai tuần trước xác nhận một túi thai trong buồng tử cung có phôi và tim thai.",
        "Khám: bụng mềm, ấn đau hạ vị nhẹ, không phản ứng thành bụng. Đặt mỏ vịt: <b>máu chảy qua lỗ cổ tử cung, cổ tử cung mở khoảng 1 cm, sờ thấy mô nhau nằm ở lỗ trong</b>.",
        "Siêu âm hiện tại: buồng tử cung còn <b>mô hồi âm hỗn hợp dày 22 mm</b>, không thấy phôi, không thấy tim thai; không có khối phần phụ, không dịch ổ bụng bất thường."
      ],
      vitals: [
        ["Nhiệt độ", "37,0 °C"],
        ["Huyết áp", "102/62"],
        ["Mạch", "108 l/ph"],
        ["Nhịp thở", "18 l/ph"]
      ],
      labs: {
        title: "Xét nghiệm",
        rows: [
          ["Beta-hCG", "8.400 mIU/mL (trước đó 62.000)", "—", "lo"],
          ["Hemoglobin", "9,4 g/dL", "12,0–16,0", "lo"],
          ["Bạch cầu", "11.200/mm³", "4.000–11.000", "hi"],
          ["Nhóm máu", "O, Rh âm", "—", ""],
          ["Coombs gián tiếp", "Âm tính", "—", ""]
        ]
      },
      stem: "Chẩn đoán và bước xử trí tiếp theo phù hợp nhất là gì?",
      choices: [
        "Sảy thai không hoàn toàn — hút buồng tử cung và tiêm immunoglobulin kháng D",
        "Dọa sảy thai — nghỉ ngơi và theo dõi ngoại trú",
        "Thai lưu — chờ sảy tự nhiên trong bốn tuần",
        "Sảy thai hoàn toàn — cho về, hẹn kiểm tra beta-hCG sau một tuần",
        "Thai ngoài tử cung — tiêm methotrexate"
      ],
      answer: 0,
      why: [
        "Đây là <b>sảy thai không hoàn toàn</b>. Ba yếu tố xác định: <b>cổ tử cung mở</b>, <b>đã sổ một phần mô thai</b>, và <b>vẫn còn mô lưu lại trong buồng tử cung</b> — thể hiện qua lớp mô hồi âm hỗn hợp dày 22 mm trên siêu âm và beta-hCG giảm mạnh nhưng chưa về không.",
        "Việc phân loại các thể sảy thai dựa vào <b>cổ tử cung đóng hay mở</b> và <b>đã sổ hết mô hay chưa</b>: dọa sảy thì cổ tử cung <b>đóng</b> và thai còn sống; sảy khó tránh thì cổ tử cung <b>mở</b> nhưng chưa sổ mô; sảy không hoàn toàn thì đã sổ một phần; sảy hoàn toàn thì buồng tử cung <b>trống</b> và cổ tử cung đã đóng lại; thai lưu thì thai chết nhưng cổ tử cung <b>đóng</b> và chưa ra máu nhiều.",
        "Bệnh nhân đang <b>ra máu nhiều với hemoglobin 9,4 g/dL và mạch 108</b>, nên hướng xử trí là <b>hút buồng tử cung</b> để cầm máu nhanh và lấy hết mô — nhanh và chắc chắn hơn dùng misoprostol hay chờ đợi. Vì bệnh nhân <b>Rh âm chưa mẫn cảm</b>, bắt buộc tiêm <b>immunoglobulin kháng D</b>."
      ],
      wrongs: {
        1: "Dọa sảy đòi hỏi <b>cổ tử cung đóng</b> và thai còn sống. Ở đây cổ tử cung đã mở, mô đã sổ một phần và không còn tim thai.",
        2: "Thai lưu là thai chết lưu trong buồng tử cung với <b>cổ tử cung đóng</b> và thường chưa ra máu. Bệnh nhân này đã sổ mô qua cổ tử cung mở và đang ra máu nhiều, nên chờ bốn tuần là nguy hiểm.",
        3: "Sảy hoàn toàn đòi hỏi buồng tử cung <b>trống</b> trên siêu âm và hết ra máu, cổ tử cung đóng lại. Lớp mô dày 22 mm ở đây bác bỏ trực tiếp.",
        4: "Siêu âm hai tuần trước đã xác nhận thai <b>trong buồng tử cung</b>, và siêu âm hiện tại không có khối phần phụ. Methotrexate hoàn toàn không có chỉ định."
      },
      objective:
        "Sảy thai không hoàn toàn có cổ tử cung mở, đã sổ một phần mô và còn mô lưu lại trong buồng tử cung; khi ra máu nhiều thì hút buồng tử cung là lựa chọn nhanh và chắc chắn nhất. Sản phụ Rh âm chưa mẫn cảm bắt buộc được tiêm immunoglobulin kháng D sau mọi trường hợp sảy thai."
    },

    {
      spec: "Sản khoa",
      task: "Bước xử trí tiếp theo",
      short: "Tăng huyết áp mạn đang dùng lisinopril, mới có thai",
      vignette: [
        "Nữ 34 tuổi đến khám vì <b>chậm kinh và thử thai tại nhà dương tính</b>. Siêu âm xác nhận một thai sống trong buồng tử cung, tương đương <b>7 tuần</b>.",
        "Bệnh nhân bị <b>tăng huyết áp mạn</b> từ năm 29 tuổi, hiện dùng <b>lisinopril 20 mg mỗi ngày</b> và huyết áp kiểm soát tốt quanh 128/78 mm Hg. Bệnh nhân uống thuốc đều và <b>vẫn tiếp tục dùng cho tới sáng nay</b>.",
        "Không có protein niệu trước đây, chức năng thận bình thường, không tiền sử bệnh thận hay đái tháo đường. Bệnh nhân chưa dùng acid folic.",
        "Khám: huyết áp 132/80 mm Hg, không phù, soi đáy mắt không tổn thương, tim phổi bình thường."
      ],
      vitals: [
        ["Nhiệt độ", "36,8 °C"],
        ["Huyết áp", "132/80"],
        ["Mạch", "80 l/ph"],
        ["BMI", "27 kg/m²"],
        ["Tuổi thai", "7 tuần"]
      ],
      labs: {
        title: "Xét nghiệm ban đầu",
        rows: [
          ["Creatinine", "0,7 mg/dL", "0,5–1,0", ""],
          ["Tỉ số protein/creatinine niệu", "0,08", "< 0,3", ""],
          ["Kali", "4,1 mEq/L", "3,5–5,0", ""],
          ["TSH", "1,6 mIU/L", "0,4–4,0", ""],
          ["HbA1c", "5,3%", "< 5,7", ""]
        ]
      },
      stem: "Bước xử trí tiếp theo tốt nhất là gì?",
      choices: [
        "Ngưng lisinopril, chuyển sang labetalol hoặc nifedipine và bắt đầu aspirin liều thấp từ tuần 12",
        "Tiếp tục lisinopril vì huyết áp đang kiểm soát tốt",
        "Ngưng toàn bộ thuốc hạ áp cho tới sau sinh",
        "Chuyển sang hydrochlorothiazide liều thấp",
        "Chấm dứt thai kỳ vì nguy cơ dị tật do thuốc"
      ],
      answer: 0,
      why: [
        "<b>Thuốc ức chế men chuyển và thuốc chẹn thụ thể angiotensin chống chỉ định trong thai kỳ</b>. Chúng gây <b>bệnh lý thận do thuốc ức chế men chuyển ở thai</b>: suy thận thai nhi dẫn tới <b>thiểu ối</b>, từ đó gây thiểu sản phổi, biến dạng chi và mặt, cùng bất thường cốt hóa xương sọ. Nguy cơ lớn nhất ở quý hai và quý ba, nên <b>phải ngưng ngay</b>.",
        "Thuốc thay thế an toàn trong thai kỳ là <b>labetalol</b>, <b>nifedipine tác dụng kéo dài</b> và <b>methyldopa</b>. Đích huyết áp trong tăng huyết áp mạn khi mang thai không nên quá thấp, thường quanh 140/90 mm Hg, vì hạ áp quá mức làm giảm tưới máu bánh nhau và gây thai chậm tăng trưởng.",
        "Điểm thứ hai không được quên: bệnh nhân tăng huyết áp mạn thuộc nhóm <b>nguy cơ cao tiền sản giật</b>, nên cần <b>aspirin liều thấp bắt đầu từ tuần 12–16</b> và duy trì tới khi sinh; biện pháp này giảm rõ rệt tỉ lệ tiền sản giật, sinh non và thai chậm tăng trưởng. Đồng thời cần bổ sung <b>acid folic</b> và lập kế hoạch siêu âm theo dõi tăng trưởng thai."
      ],
      wrongs: {
        1: "Kiểm soát huyết áp tốt cho mẹ không bù đắp được độc tính trực tiếp lên thận thai. Đây là chống chỉ định tuyệt đối, không phải cân nhắc lợi hại.",
        2: "Ngưng hết thuốc ở bệnh nhân tăng huyết áp mạn thực sự làm tăng nguy cơ tăng huyết áp nặng, rau bong non và tai biến mạch máu não cho mẹ. Cần đổi thuốc chứ không phải bỏ điều trị.",
        3: "Lợi tiểu thiazide không phải lựa chọn ưu tiên trong thai kỳ vì làm giảm thể tích huyết tương, trong khi thai kỳ cần tăng thể tích tuần hoàn; nó chỉ được tiếp tục trong một số trường hợp đã dùng ổn định từ trước.",
        4: "Đã phơi nhiễm thuốc ức chế men chuyển trong quý một không phải là chỉ định chấm dứt thai kỳ. Nguy cơ chính nằm ở quý hai và ba, và việc cần làm là ngưng thuốc ngay rồi theo dõi thai bằng siêu âm."
      },
      objective:
        "Thuốc ức chế men chuyển và chẹn thụ thể angiotensin chống chỉ định trong thai kỳ vì gây suy thận thai, thiểu ối và thiểu sản phổi; phải đổi sang labetalol, nifedipine hoặc methyldopa. Tăng huyết áp mạn là yếu tố nguy cơ cao tiền sản giật nên cần aspirin liều thấp từ tuần 12–16."
    },

    {
      spec: "Phụ khoa",
      task: "Bước tiếp theo trong chẩn đoán",
      short: "Vô kinh thứ phát sáu tháng",
      vignette: [
        "Nữ 26 tuổi đến khám vì <b>mất kinh sáu tháng liên tiếp</b>. Trước đó chu kỳ đều mỗi 30 ngày kể từ năm 13 tuổi. Bệnh nhân đã lập gia đình, quan hệ đều, <b>không dùng biện pháp tránh thai</b>.",
        "Bệnh nhân kể có <b>tiết dịch trắng đục ở hai đầu vú</b> khi nặn, dù chưa từng mang thai. Kèm theo là <b>đau đầu âm ỉ vùng trán</b> vài tháng nay và thỉnh thoảng <b>va vào khung cửa bên cạnh</b> khi đi lại.",
        "Bệnh nhân không sụt cân, không tập luyện quá sức, không stress bất thường, không dùng thuốc chống loạn thần, thuốc chống nôn hay thuốc chống trầm cảm. Không có cơn bốc hỏa, không khô âm đạo nhiều.",
        "Khám: tuyến giáp không to, không rậm lông, không gai đen, không vết rạn da tím. Nặn hai vú có ít dịch trắng đục. Khám phụ khoa bình thường."
      ],
      vitals: [
        ["Nhiệt độ", "36,7 °C"],
        ["Huyết áp", "108/68"],
        ["Mạch", "70 l/ph"],
        ["BMI", "23 kg/m²"]
      ],
      labs: {
        title: "Xét nghiệm bước đầu",
        rows: [
          ["Thử thai (beta-hCG)", "Âm tính", "—", ""],
          ["TSH", "1,7 mIU/L", "0,4–4,0", ""],
          ["Prolactin", "168 ng/mL", "4–23", "hi"],
          ["FSH", "3,2 mIU/mL", "—", ""],
          ["Estradiol", "18 pg/mL", "—", "lo"]
        ]
      },
      stem: "Bước tiếp theo tốt nhất là gì?",
      choices: [
        "Chụp cộng hưởng từ tuyến yên có tiêm thuốc đối quang",
        "Làm nghiệm pháp progestin để đánh giá nội mạc",
        "Bắt đầu cabergoline ngay mà không cần chẩn đoán hình ảnh",
        "Định lượng FSH lặp lại sau một tháng để xác định suy buồng trứng sớm",
        "Nội soi buồng tử cung tìm dính buồng tử cung"
      ],
      answer: 0,
      why: [
        "Bệnh nhân có <b>vô kinh thứ phát</b> kèm <b>tiết sữa</b> và <b>prolactin tăng rất cao</b> (168 ng/mL). Ba nguyên nhân đầu tiên phải loại trừ trong vô kinh thứ phát đã được kiểm tra: <b>có thai</b> (âm tính), <b>bệnh tuyến giáp</b> (TSH bình thường) và <b>tăng prolactin</b> — chính là bất thường tìm thấy ở đây.",
        "Prolactin cao ức chế tiết GnRH theo nhịp, làm giảm LH và FSH, dẫn tới không phóng noãn và thiếu estrogen — giải thích trọn vẹn cả vô kinh lẫn estradiol thấp.",
        "Điều buộc phải làm hình ảnh là <b>triệu chứng chèn ép khối</b>: <b>đau đầu</b> và <b>va vào vật ở hai bên</b> gợi ý <b>bán manh hai bên phía thái dương</b> do khối u chèn giao thoa thị giác. Cộng với mức prolactin trên 100 ng/mL — ngưỡng gợi ý mạnh <b>u tuyến yên tiết prolactin thực sự</b> chứ không phải tăng prolactin do thuốc hay do cuống tuyến yên bị chèn — thì <b>chụp cộng hưởng từ tuyến yên</b> là bắt buộc để xác định kích thước khối và mức xâm lấn, từ đó quyết định điều trị. Cần khám thị trường chính thức song song."
      ],
      wrongs: {
        1: "Nghiệm pháp progestin giúp đánh giá tình trạng estrogen và đường ra của máu kinh, nhưng ở đây nguyên nhân đã được xác định bằng xét nghiệm. Nó không cho biết có u tuyến yên hay không.",
        2: "Cabergoline đúng là điều trị đầu tay của u tuyến yên tiết prolactin, nhưng <b>không được bắt đầu trước khi có hình ảnh</b>: cần biết kích thước khối, mức chèn ép giao thoa thị giác và có căn cứ để theo dõi đáp ứng điều trị.",
        3: "Suy buồng trứng sớm có <b>FSH tăng cao</b> kèm estradiol thấp, thường có cơn bốc hỏa và khô âm đạo. Ở đây FSH thấp, tức tổn thương nằm ở trung ương chứ không phải tại buồng trứng.",
        4: "Dính buồng tử cung xảy ra sau nạo buồng tử cung, nhiễm khuẩn hoặc phẫu thuật tử cung, và <b>không gây tiết sữa hay tăng prolactin</b>. Bệnh nhân cũng không có tiền sử can thiệp buồng tử cung."
      },
      objective:
        "Vô kinh thứ phát cần loại trừ thai nghén, bệnh tuyến giáp và tăng prolactin trước tiên. Prolactin tăng cao kèm tiết sữa, đau đầu và khiếm khuyết thị trường đòi hỏi chụp cộng hưởng từ tuyến yên trước khi điều trị; FSH thấp chỉ ra nguyên nhân trung ương, khác với suy buồng trứng sớm có FSH tăng."
    }
  ]
};
