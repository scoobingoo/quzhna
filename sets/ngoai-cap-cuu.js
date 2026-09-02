/* ==========================================================================
   Bộ đề: Ngoại khoa & Cấp cứu — 30 ca lâm sàng, trọng tâm chẩn đoán và bước xử trí tiếp theo.
   Đơn vị xét nghiệm theo hệ quy ước Hoa Kỳ, giống đề thi thật.
   ========================================================================== */
window.QUIZ_SET = {
  id: "ngoai-cap-cuu",
  eyebrow: "USMLE Step 2 CK · Ngoại khoa & Cấp cứu",
  title: "Ngoại khoa & Cấp cứu",
  blurb: "30 ca ngoại tổng quát, chấn thương, mạch máu và ngộ độc. Trọng tâm: chẩn đoán và bước xử trí tiếp theo tốt nhất — chọn đáp án trước, giải thích hiện sau.",

  cases: [
    {
      spec: "Ngoại tổng quát",
      task: "Bước tiếp theo trong chẩn đoán",
      short: "Đau quanh rốn chuyển xuống hố chậu phải",
      vignette: [
        "Nam 22 tuổi vào cấp cứu vì đau bụng 18 giờ. Đau <b>khởi đầu âm ỉ quanh rốn</b>, sau khoảng 8 giờ <b>khu trú dần xuống hố chậu phải</b> và tăng dần thành đau liên tục. Bệnh nhân chán ăn hoàn toàn, buồn nôn, nôn hai lần sau khi đau.",
        "Bệnh nhân đi lại chậm, khom người, đau tăng khi ho và khi xe chạy qua chỗ xóc.",
        "Khám: <b>ấn đau chói tại điểm McBurney, có phản ứng thành bụng khu trú và dấu cảm ứng phúc mạc</b>. Dấu Rovsing dương tính. Nhu động ruột giảm. Thăm trực tràng đau bên phải.",
        "Không tiêu chảy, không tiểu buốt, không tiền sử bệnh lý, không phẫu thuật ổ bụng."
      ],
      vitals: [
        ["Nhiệt độ", "38,2 °C"],
        ["Huyết áp", "124/76"],
        ["Mạch", "104 l/ph"],
        ["Nhịp thở", "18 l/ph"],
        ["SpO2", "98% khí trời"]
      ],
      labs: {
        title: "Xét nghiệm",
        rows: [
          ["Bạch cầu", "16.800/mm³", "4.000–11.000", "hi"],
          ["Bạch cầu đa nhân trung tính", "84%", "40–70", "hi"],
          ["CRP", "68 mg/L", "< 5", "hi"],
          ["Creatinine", "0,9 mg/dL", "0,6–1,2", ""],
          ["Tổng phân tích nước tiểu", "Bình thường", "—", ""],
          ["Lipase", "38 U/L", "10–140", ""]
        ]
      },
      stem: "Bước tiếp theo tốt nhất là gì?",
      choices: [
        "Hội chẩn ngoại khoa để mổ cắt ruột thừa, không cần thêm chẩn đoán hình ảnh",
        "Chụp cắt lớp bụng chậu có cản quang trước khi hội chẩn ngoại",
        "Chỉ điều trị kháng sinh và theo dõi trong 48 giờ",
        "Siêu âm bụng rồi đánh giá lại sau 6 giờ",
        "Nội soi đại tràng cấp cứu"
      ],
      answer: 0,
      why: [
        "Đây là <b>viêm ruột thừa cấp</b> với bệnh cảnh <b>kinh điển đến mức không cần hình ảnh học</b>. Trình tự triệu chứng rất đặc trưng và phản ánh đúng sinh lý bệnh: đau <b>tạng</b> mơ hồ quanh rốn khi lòng ruột thừa bị tắc và căng, rồi chuyển thành đau <b>thành</b> khu trú ở hố chậu phải khi viêm lan tới phúc mạc thành.",
        "Trình tự <b>chán ăn → đau → nôn</b> cũng là điểm phân biệt quan trọng: trong viêm dạ dày ruột, nôn thường đến <b>trước</b> đau. Khám có phản ứng thành bụng và cảm ứng phúc mạc khu trú, cùng bạch cầu trung tính tăng cao, tạo nên điểm Alvarado rất cao.",
        "Ở <b>nam giới trẻ có bệnh cảnh điển hình</b>, chụp cắt lớp thường quy <b>không làm thay đổi quyết định</b> mà chỉ làm chậm mổ, tăng nguy cơ thủng và gây nhiễm xạ không cần thiết. Hình ảnh học được dành cho trường hợp <b>không điển hình</b>, phụ nữ trong độ tuổi sinh sản (cần loại trừ bệnh lý phụ khoa), trẻ nhỏ, người cao tuổi, hoặc khi nghi biến chứng như áp xe hay đám quánh ruột thừa."
      ],
      wrongs: {
        1: "Cắt lớp rất hữu ích khi chẩn đoán chưa rõ, nhưng ở bệnh cảnh kinh điển thế này nó chỉ trì hoãn phẫu thuật. Nguy cơ thủng tăng rõ rệt sau 24–36 giờ kể từ khi khởi phát.",
        2: "Kháng sinh đơn thuần được nghiên cứu cho viêm ruột thừa <b>không biến chứng</b> ở một số bệnh nhân chọn lọc, nhưng tỉ lệ thất bại và tái phát cao, và không phải lựa chọn chuẩn khi đã có phản ứng thành bụng cùng cảm ứng phúc mạc.",
        3: "Siêu âm là lựa chọn hàng đầu ở <b>trẻ em và phụ nữ mang thai</b> để tránh nhiễm xạ, nhưng phụ thuộc người làm và thường không thấy được ruột thừa ở người lớn. Chờ thêm 6 giờ là chậm trễ nguy hiểm.",
        4: "Nội soi đại tràng chống chỉ định khi nghi viêm phúc mạc: bơm hơi làm tăng nguy cơ thủng và không có vai trò chẩn đoán ở đây."
      },
      objective:
        "Viêm ruột thừa cấp điển hình có đau di chuyển từ quanh rốn xuống hố chậu phải, trình tự chán ăn rồi đau rồi nôn, kèm phản ứng thành bụng và bạch cầu trung tính tăng. Ở nam giới trẻ với bệnh cảnh kinh điển, nên hội chẩn ngoại mổ ngay mà không cần chụp cắt lớp; hình ảnh học dành cho ca không điển hình."
    },

    {
      spec: "Ngoại tổng quát",
      task: "Bước xử trí tiếp theo",
      short: "Bụng cứng như gỗ và liềm hơi dưới hoành",
      vignette: [
        "Nam 58 tuổi vào cấp cứu vì <b>đau bụng dữ dội khởi phát đột ngột như dao đâm</b> ở thượng vị cách đây 3 giờ, sau đó lan ra khắp bụng. Bệnh nhân nằm im không dám cử động vì mọi cử động đều làm đau tăng.",
        "Tiền sử: đau thượng vị âm ỉ nhiều tháng, tự mua và dùng <b>ibuprofen hàng ngày</b> vì đau khớp gối; hút thuốc lá.",
        "Khám: bệnh nhân vẻ mặt đau đớn, thở nông. <b>Bụng cứng như gỗ toàn bộ, phản ứng thành bụng và cảm ứng phúc mạc rõ khắp bụng</b>, <b>mất hoàn toàn nhu động ruột</b>. Gõ mất vùng đục trước gan.",
        "X-quang bụng đứng: <b>hình liềm hơi tự do dưới cơ hoành hai bên</b>."
      ],
      vitals: [
        ["Nhiệt độ", "38,4 °C"],
        ["Huyết áp", "96/58"],
        ["Mạch", "126 l/ph"],
        ["Nhịp thở", "26 l/ph"],
        ["SpO2", "95% khí trời"]
      ],
      labs: {
        title: "Xét nghiệm",
        rows: [
          ["Bạch cầu", "21.400/mm³", "4.000–11.000", "hi"],
          ["Lactat", "3,6 mmol/L", "0,5–2,2", "hi"],
          ["Creatinine", "1,5 mg/dL", "0,6–1,2", "hi"],
          ["Lipase", "82 U/L", "10–140", ""],
          ["Hemoglobin", "13,8 g/dL", "13,5–17,5", ""],
          ["INR", "1,1", "0,8–1,1", ""]
        ]
      },
      stem: "Bước xử trí tiếp theo tốt nhất là gì?",
      choices: [
        "Hồi sức dịch, kháng sinh phổ rộng và mổ cấp cứu",
        "Chụp cắt lớp bụng có cản quang đường uống để xác định vị trí thủng",
        "Đặt sonde dạ dày, truyền thuốc ức chế bơm proton và theo dõi nội khoa",
        "Nội soi dạ dày tá tràng cấp cứu để kẹp clip ổ loét",
        "Chọc dò ổ bụng chẩn đoán"
      ],
      answer: 0,
      why: [
        "Đây là <b>thủng tạng rỗng</b>, gần như chắc chắn do <b>thủng ổ loét dạ dày tá tràng</b> trên nền dùng thuốc kháng viêm không steroid kéo dài. Bệnh cảnh gồm ba yếu tố: <b>đau khởi phát đột ngột dữ dội</b>, <b>viêm phúc mạc toàn thể</b> với bụng cứng như gỗ, và <b>hơi tự do trong ổ bụng</b> trên phim.",
        "Hình liềm hơi dưới hoành cùng <b>mất vùng đục trước gan</b> là bằng chứng trực tiếp của khí thoát ra khỏi ống tiêu hóa. Khi đã có dấu hiệu này kèm viêm phúc mạc, <b>chẩn đoán đã xong</b> và không cần thêm thăm dò nào.",
        "Bệnh nhân đang có dấu hiệu <b>nhiễm khuẩn huyết</b>: sốt, mạch nhanh, tụt huyết áp, bạch cầu và lactat tăng. Xử trí là ba việc <b>song song</b>: <b>hồi sức dịch tích cực</b>, <b>kháng sinh phổ rộng</b> phủ vi khuẩn Gram âm và kỵ khí, và <b>chuyển mổ cấp cứu</b> để khâu lỗ thủng, thường có đắp mạc nối, kèm rửa sạch ổ bụng. Trì hoãn phẫu thuật làm tỉ lệ tử vong tăng theo từng giờ."
      ],
      wrongs: {
        1: "Chụp cắt lớp có thể định vị lỗ thủng chính xác hơn, nhưng bệnh nhân đã có chẩn đoán rõ và đang tụt huyết áp. Đặc biệt, <b>cản quang đường uống</b> ở bệnh nhân thủng tạng rỗng làm dịch tràn thêm vào ổ bụng và tăng nguy cơ hít sặc.",
        2: "Điều trị nội khoa bảo tồn chỉ được cân nhắc trong tình huống rất hiếm: lỗ thủng đã tự bịt, bệnh nhân ổn định hoàn toàn và không có viêm phúc mạc lan tỏa. Bệnh nhân này viêm phúc mạc toàn thể kèm dấu hiệu sốc.",
        3: "Nội soi <b>chống chỉ định</b> khi đã thủng: bơm hơi làm khí và dịch tràn thêm vào ổ bụng, làm bệnh nặng thêm nhanh chóng.",
        4: "Chọc dò ổ bụng không cần thiết khi hình ảnh và lâm sàng đã xác định chẩn đoán, đồng thời làm chậm mổ."
      },
      objective:
        "Đau bụng khởi phát đột ngột dữ dội kèm bụng cứng như gỗ và hơi tự do dưới hoành là thủng tạng rỗng, thường do loét dạ dày tá tràng trên nền thuốc kháng viêm không steroid. Xử trí là hồi sức dịch, kháng sinh phổ rộng và mổ cấp cứu ngay, không trì hoãn để chụp thêm hay nội soi."
    },

    {
      spec: "Ngoại tổng quát",
      task: "Bước xử trí tiếp theo",
      short: "Tắc ruột non kèm dấu hiệu thắt nghẹt",
      vignette: [
        "Nữ 64 tuổi vào viện vì <b>đau bụng quặn từng cơn, nôn nhiều ra dịch xanh và bí trung đại tiện</b> 20 giờ. Tiền sử <b>mổ cắt tử cung qua đường bụng</b> cách đây 12 năm; không mổ nào khác.",
        "Bệnh nhân được đặt sonde dạ dày dẫn lưu, nhịn ăn và truyền dịch. Sau 8 giờ theo dõi, <b>tính chất đau đổi từ quặn cơn sang đau liên tục dữ dội</b>, không còn khoảng nghỉ giữa cơn.",
        "Khám lại: bụng chướng căng, <b>ấn đau khu trú kèm phản ứng thành bụng ở hố chậu trái</b>, <b>nhu động ruột nay đã mất</b>. Bệnh nhân sốt mới xuất hiện, mạch nhanh dần.",
        "Chụp cắt lớp bụng: quai ruột non giãn, có mức nước hơi, <b>một quai ruột thành dày phù nề với dấu hiệu ngấm thuốc kém, mỡ mạc treo mờ và dịch tự do quanh quai ruột đó</b>; đại tràng xẹp."
      ],
      vitals: [
        ["Nhiệt độ", "38,5 °C"],
        ["Huyết áp", "98/60"],
        ["Mạch", "124 l/ph"],
        ["Nhịp thở", "24 l/ph"],
        ["SpO2", "96% khí trời"]
      ],
      labs: {
        title: "Xét nghiệm hiện tại",
        rows: [
          ["Bạch cầu", "19.600/mm³", "4.000–11.000", "hi"],
          ["Lactat", "4,1 mmol/L", "0,5–2,2", "hi"],
          ["Creatinine", "1,6 mg/dL", "0,6–1,2", "hi"],
          ["Kali", "3,2 mEq/L", "3,5–5,0", "lo"],
          ["Bicarbonat", "18 mEq/L", "22–28", "lo"],
          ["CRP", "168 mg/L", "< 5", "hi"]
        ]
      },
      stem: "Bước xử trí tiếp theo tốt nhất là gì?",
      choices: [
        "Mổ cấp cứu thăm dò và giải phóng chỗ tắc",
        "Tiếp tục điều trị bảo tồn thêm 24 giờ",
        "Chụp lưu thông ruột non với thuốc cản quang tan trong nước",
        "Nội soi đại tràng để tháo tắc",
        "Đặt stent qua chỗ hẹp dưới nội soi"
      ],
      answer: 0,
      why: [
        "Bệnh nhân có <b>tắc ruột non do dây dính</b> — nguyên nhân thường gặp nhất ở người có tiền sử mổ bụng — nhưng điều quan trọng là bệnh đã <b>chuyển sang thắt nghẹt</b>, tức quai ruột bị siết mất máu nuôi.",
        "Các dấu hiệu báo động đều đã xuất hiện: <b>đau đổi từ quặn cơn sang liên tục</b>, <b>đau khu trú kèm phản ứng thành bụng</b>, <b>sốt</b>, <b>mạch nhanh</b>, <b>bạch cầu tăng cao</b> và <b>lactat tăng</b> — dấu hiệu thiếu máu mô. Trên cắt lớp, hình ảnh <b>thành ruột ngấm thuốc kém, mỡ mạc treo mờ và dịch tự do quanh quai ruột</b> là bằng chứng hình ảnh của thiếu máu ruột.",
        "Ranh giới quyết định trong dạng câu hỏi này rất rõ: <b>tắc ruột non đơn thuần</b> được điều trị bảo tồn — nhịn ăn, sonde dạ dày, bù dịch và điện giải — vì phần lớn tự thông; nhưng <b>ngay khi có dấu hiệu thắt nghẹt hoặc thất bại điều trị bảo tồn thì phải mổ ngay</b>. Chậm trễ dẫn tới hoại tử, thủng, viêm phúc mạc phân và tỉ lệ tử vong tăng vọt."
      ],
      wrongs: {
        1: "Điều trị bảo tồn chỉ dành cho tắc ruột <b>không có dấu hiệu thắt nghẹt</b> và bệnh nhân ổn định. Tiếp tục chờ ở đây là để quai ruột hoại tử và thủng.",
        2: "Chụp lưu thông với cản quang tan trong nước vừa chẩn đoán vừa có tác dụng điều trị nhẹ trong tắc ruột <b>bán phần không biến chứng</b>. Nó chống chỉ định khi nghi thắt nghẹt và chỉ làm mất thời gian.",
        3: "Nội soi đại tràng không tiếp cận được ruột non và không tháo được dây dính; nó chỉ dùng để tháo <b>xoắn đại tràng sigma</b>, một bệnh cảnh hoàn toàn khác.",
        4: "Đặt stent là biện pháp giảm nhẹ cho <b>tắc đại tràng do ung thư</b> ở bệnh nhân không mổ được. Nó không có vai trò trong tắc ruột non do dính có thắt nghẹt."
      },
      objective:
        "Tắc ruột non do dính thường được điều trị bảo tồn, nhưng phải mổ cấp cứu ngay khi có dấu hiệu thắt nghẹt: đau chuyển từ quặn cơn sang liên tục, đau khu trú kèm phản ứng thành bụng, sốt, bạch cầu và lactat tăng, hoặc thành ruột ngấm thuốc kém trên cắt lớp."
    },

    {
      spec: "Chấn thương",
      task: "Bước xử trí tiếp theo",
      short: "Chấn thương bụng kín kèm tụt huyết áp dai dẳng",
      vignette: [
        "Nam 27 tuổi được xe cứu thương đưa vào sau <b>tai nạn xe máy tốc độ cao</b>, va đập mạnh vào thành bụng bên trái. Bệnh nhân tỉnh nhưng vật vã, than đau bụng và <b>đau lan lên vai trái</b>.",
        "Đánh giá ban đầu: đường thở thông, thở đều, phổi thông khí hai bên đối xứng, khí quản giữa, tĩnh mạch cổ không nổi. Không có tổn thương ngực hở.",
        "Khám bụng: <b>bụng chướng dần, ấn đau lan tỏa, phản ứng thành bụng vùng hạ sườn trái</b>, có vết bầm tím lớn ở thành bụng bên trái. Khung chậu vững, không chảy máu ngoài đáng kể, không gãy xương đùi.",
        "Bệnh nhân đã được truyền 2 lít dịch tinh thể và 2 đơn vị hồng cầu lắng nhưng <b>huyết áp vẫn 78/44 mm Hg và mạch 138</b>. Siêu âm FAST tại giường: <b>dịch tự do lượng nhiều ở khoang Morison, quanh lách và túi cùng Douglas</b>."
      ],
      vitals: [
        ["Nhiệt độ", "36,2 °C"],
        ["Huyết áp", "78/44"],
        ["Mạch", "138 l/ph"],
        ["Nhịp thở", "28 l/ph"],
        ["SpO2", "97% với oxy mask"]
      ],
      labs: {
        title: "Xét nghiệm",
        rows: [
          ["Hemoglobin", "7,4 g/dL", "13,5–17,5", "lo"],
          ["Lactat", "5,8 mmol/L", "0,5–2,2", "hi"],
          ["INR", "1,4", "0,8–1,1", "hi"],
          ["Tiểu cầu", "148.000/mm³", "150.000–400.000", "lo"],
          ["Kiềm dư", "−9 mEq/L", "−2 đến +2", "lo"]
        ]
      },
      stem: "Bước xử trí tiếp theo tốt nhất là gì?",
      choices: [
        "Mở bụng cấp cứu ngay",
        "Chụp cắt lớp bụng chậu có cản quang để phân độ tổn thương",
        "Nút mạch lách dưới hướng dẫn chụp mạch",
        "Điều trị bảo tồn không mổ và theo dõi tại hồi sức",
        "Rửa ổ bụng chẩn đoán trước khi quyết định"
      ],
      answer: 0,
      why: [
        "Nguyên tắc chi phối toàn bộ xử trí chấn thương bụng kín là: <b>bệnh nhân huyết động không ổn định kèm FAST dương tính thì phải mở bụng ngay</b>. Bệnh nhân vẫn tụt huyết áp sau khi đã truyền 2 lít dịch và 2 đơn vị máu — tức <b>không đáp ứng hồi sức</b> — và có bằng chứng chảy máu trong ổ bụng lượng nhiều.",
        "Cơ chế và vị trí chấn thương chỉ tới <b>vỡ lách</b>: va đập hạ sườn trái, bầm tím thành bụng trái, và <b>đau lan lên vai trái</b> — dấu Kehr, do máu trong ổ bụng kích thích cơ hoành và dẫn truyền qua thần kinh hoành lên khoanh cổ C3–C5.",
        "<b>Không được đưa bệnh nhân không ổn định đi chụp cắt lớp</b>. Phòng chụp là nơi không thể hồi sức đầy đủ, và mọi phút trôi qua đều là máu tiếp tục mất. Song song với chuyển mổ, cần kích hoạt <b>phác đồ truyền máu khối lượng lớn</b> và xử trí <b>tam chứng chết người</b>: hạ thân nhiệt, toan chuyển hóa và rối loạn đông máu — cả ba đều đã bắt đầu xuất hiện ở đây."
      ],
      wrongs: {
        1: "Cắt lớp là thăm dò chuẩn cho bệnh nhân chấn thương bụng kín <b>ổn định huyết động</b>. Ở bệnh nhân đang sốc mất máu, nó bị gọi là chuyến đi tới phòng chụp của tử thần.",
        2: "Nút mạch rất hữu ích cho tổn thương lách hoặc gan ở bệnh nhân <b>ổn định hoặc đáp ứng tạm thời</b> với hồi sức. Nó cần thời gian chuẩn bị và không phù hợp với bệnh nhân đang chảy máu ồ ạt không đáp ứng.",
        3: "Điều trị bảo tồn không mổ cho tổn thương tạng đặc chỉ áp dụng khi bệnh nhân <b>ổn định huyết động</b>, không có tổn thương tạng rỗng và có điều kiện theo dõi sát. Bệnh nhân này không đủ tiêu chuẩn nào.",
        4: "Rửa ổ bụng chẩn đoán đã gần như bị thay thế bởi FAST vì FAST nhanh hơn và không xâm lấn. Ở đây FAST đã dương tính rõ ràng, làm thêm thủ thuật chỉ trì hoãn mổ."
      },
      objective:
        "Trong chấn thương bụng kín, bệnh nhân huyết động không ổn định với FAST dương tính cần mở bụng cấp cứu ngay, không được đưa đi chụp cắt lớp. Đau lan lên vai trái là dấu Kehr gợi ý vỡ lách, và cần kích hoạt truyền máu khối lượng lớn cùng xử trí tam chứng hạ thân nhiệt, toan máu và rối loạn đông máu."
    },

    {
      spec: "Chấn thương",
      task: "Bước xử trí tiếp theo",
      short: "Khó thở dữ dội và lệch khí quản sau chấn thương ngực",
      vignette: [
        "Nam 34 tuổi được đưa vào cấp cứu sau tai nạn giao thông, bị vô lăng đập mạnh vào ngực phải. Bệnh nhân <b>khó thở dữ dội tăng nhanh trong 10 phút</b>, kích động, vã mồ hôi.",
        "Khám: bệnh nhân tím tái, thở gắng sức. <b>Lồng ngực phải căng phồng, gõ vang, mất hoàn toàn rì rào phế nang bên phải</b>. <b>Khí quản bị đẩy lệch sang trái</b>. <b>Tĩnh mạch cổ nổi căng</b>.",
        "Bên trái phổi thông khí bình thường. Không có vết thương ngực hở, không có mảng sườn di động.",
        "Huyết áp tụt nhanh từ 118/70 xuống 74/42 trong vòng 5 phút. Điều dưỡng vừa gọi khoa X-quang xuống chụp phim ngực tại giường."
      ],
      vitals: [
        ["Nhiệt độ", "36,4 °C"],
        ["Huyết áp", "74/42"],
        ["Mạch", "142 l/ph"],
        ["Nhịp thở", "36 l/ph"],
        ["SpO2", "82% với oxy mask"]
      ],
      stem: "Bước xử trí tiếp theo tốt nhất là gì?",
      choices: [
        "Chọc kim giải áp khoang màng phổi phải ngay lập tức, sau đó đặt ống dẫn lưu màng phổi",
        "Chờ chụp X-quang ngực tại giường để xác định chẩn đoán rồi mới can thiệp",
        "Đặt nội khí quản và thở máy áp lực dương",
        "Chọc dẫn lưu màng ngoài tim",
        "Truyền nhanh dịch và máu để nâng huyết áp trước khi làm thủ thuật"
      ],
      answer: 0,
      why: [
        "Đây là <b>tràn khí màng phổi áp lực</b> — một trong số ít chẩn đoán mà việc chờ xét nghiệm hay hình ảnh có thể giết chết bệnh nhân. Bộ dấu hiệu đã đầy đủ: <b>mất rì rào phế nang và gõ vang một bên</b>, <b>khí quản lệch sang bên đối diện</b>, <b>tĩnh mạch cổ nổi</b>, thiếu oxy nặng và <b>tụt huyết áp tiến triển nhanh</b>.",
        "Cơ chế là khí vào khoang màng phổi theo cơ chế <b>van một chiều</b> và tích tụ dần. Áp lực dương trong lồng ngực đẩy trung thất sang bên đối diện, <b>gập và ép tĩnh mạch chủ</b>, làm máu tĩnh mạch không về được tim — dẫn tới sốc <b>tắc nghẽn</b>. Điều đó giải thích vì sao truyền dịch không giải quyết được vấn đề.",
        "<b>Đây là chẩn đoán lâm sàng, và điều trị đi trước hình ảnh học.</b> Xử trí ngay là <b>chọc kim giải áp</b> — kim lớn vào khoang liên sườn 2 đường giữa đòn, hoặc khoang liên sườn 4–5 đường nách giữa theo khuyến cáo hiện nay vì thành ngực ở vị trí đó mỏng hơn. Sau khi khí thoát ra và bệnh nhân cải thiện, tiến hành <b>đặt ống dẫn lưu màng phổi</b> để điều trị triệt để."
      ],
      wrongs: {
        1: "Chờ chụp phim là sai lầm kinh điển và có thể gây ngừng tim trong vài phút. Phim X-quang không bao giờ được yêu cầu trước khi giải áp một tràn khí màng phổi áp lực đã rõ trên lâm sàng.",
        2: "Thở máy áp lực dương làm <b>khí tiếp tục bị đẩy vào khoang màng phổi</b>, khiến áp lực tăng nhanh hơn và bệnh nhân xấu đi đột ngột. Nếu buộc phải đặt ống, phải giải áp trước.",
        3: "Chèn ép tim cấp cũng gây tụt huyết áp và tĩnh mạch cổ nổi, nhưng phổi thông khí <b>đều hai bên</b>, tiếng tim mờ và khí quản <b>không lệch</b>. Ở đây các dấu hiệu tại phổi là quyết định.",
        4: "Bù dịch chỉ là biện pháp tạm thời và không giải quyết được nguyên nhân cơ học đang chặn máu về tim. Trì hoãn giải áp để truyền dịch là mất thời gian sống còn."
      },
      objective:
        "Tràn khí màng phổi áp lực là chẩn đoán lâm sàng gồm mất rì rào phế nang và gõ vang một bên, khí quản lệch, tĩnh mạch cổ nổi và tụt huyết áp; phải chọc kim giải áp ngay rồi mới đặt dẫn lưu, tuyệt đối không chờ X-quang. Thở máy áp lực dương trước khi giải áp làm bệnh nặng lên nhanh chóng."
    },

    {
      spec: "Mạch máu",
      task: "Bước xử trí tiếp theo",
      short: "Đau bụng lan lưng kèm khối đập theo mạch",
      vignette: [
        "Nam 71 tuổi vào cấp cứu vì <b>đau bụng dữ dội khởi phát đột ngột, lan ra sau lưng và xuống hông trái</b> cách đây 45 phút. Bệnh nhân ngất một lần tại nhà.",
        "Tiền sử: <b>hút thuốc 50 gói-năm</b>, tăng huyết áp, rối loạn lipid máu, bệnh động mạch vành. Bệnh nhân từng được siêu âm phát hiện <b>phình động mạch chủ bụng 5,2 cm</b> nhưng bỏ tái khám hai năm nay.",
        "Khám: da lạnh ẩm, vã mồ hôi, lơ mơ. Bụng chướng, ấn đau lan tỏa; <b>sờ thấy khối ở giữa bụng, đập theo nhịp mạch và giãn nở hai bên</b>. <b>Mạch đùi hai bên yếu.</b>",
        "Không nôn ra máu, không đi ngoài phân đen. Không có tiền sử sỏi thận."
      ],
      vitals: [
        ["Nhiệt độ", "36,1 °C"],
        ["Huyết áp", "76/44"],
        ["Mạch", "132 l/ph"],
        ["Nhịp thở", "28 l/ph"],
        ["SpO2", "94% khí trời"]
      ],
      labs: {
        title: "Xét nghiệm",
        rows: [
          ["Hemoglobin", "8,2 g/dL", "13,5–17,5", "lo"],
          ["Lactat", "5,2 mmol/L", "0,5–2,2", "hi"],
          ["Creatinine", "1,8 mg/dL", "0,6–1,2", "hi"],
          ["INR", "1,2", "0,8–1,1", "hi"],
          ["Tổng phân tích nước tiểu", "Không hồng cầu", "—", ""]
        ]
      },
      stem: "Bước xử trí tiếp theo tốt nhất là gì?",
      choices: [
        "Chuyển thẳng phòng mổ để can thiệp cấp cứu, hồi sức song song trên đường đi",
        "Chụp cắt lớp bụng có cản quang để xác định vị trí vỡ",
        "Siêu âm bụng tại giường rồi hội chẩn mạch máu",
        "Truyền dịch tích cực để nâng huyết áp về bình thường trước khi mổ",
        "Chụp niệu quản – bàng quang để loại trừ cơn đau quặn thận"
      ],
      answer: 0,
      why: [
        "Đây là <b>vỡ phình động mạch chủ bụng</b>. Tam chứng kinh điển đã đầy đủ: <b>đau bụng hoặc lưng khởi phát đột ngột</b>, <b>tụt huyết áp</b>, và <b>khối đập theo mạch giãn nở ở bụng</b>. Bệnh nhân còn có tiền sử phình đã biết ở kích thước nguy hiểm và toàn bộ yếu tố nguy cơ, đứng đầu là hút thuốc lá.",
        "Khi bệnh nhân <b>không ổn định huyết động</b> và tam chứng đã rõ, <b>chẩn đoán là lâm sàng</b> và phải <b>chuyển thẳng phòng mổ</b>, vừa đi vừa hồi sức. Mỗi phút trì hoãn đều làm tăng tỉ lệ tử vong, vốn đã rất cao — phần lớn bệnh nhân tử vong trước khi tới được bệnh viện.",
        "Một điểm thực hành quan trọng: nên áp dụng <b>hồi sức kiểm soát huyết áp</b>, tức giữ huyết áp tâm thu ở mức vừa đủ tưới máu não khoảng 70–90 mm Hg thay vì đưa về bình thường. Nâng huyết áp quá tay sẽ <b>thổi bay cục máu đông đang tạm bịt chỗ vỡ</b> và biến chảy máu có kiểm soát thành xuất huyết ồ ạt. Cần cảnh giác rằng vỡ phình rất hay bị chẩn đoán nhầm là cơn đau quặn thận ở người cao tuổi."
      ],
      wrongs: {
        1: "Cắt lớp là thăm dò chuẩn cho bệnh nhân nghi vỡ phình <b>còn ổn định huyết động</b>, giúp lập kế hoạch đặt stent graft nội mạch. Ở bệnh nhân đang sốc, nó chỉ làm chậm can thiệp.",
        2: "Siêu âm tại giường xác định được kích thước phình nhưng <b>kém nhạy với máu chảy sau phúc mạc</b>. Ở bệnh nhân có tam chứng đầy đủ và đang sốc, siêu âm không thay đổi quyết định.",
        3: "Đưa huyết áp về bình thường làm bong cục máu đông cầm tạm chỗ vỡ và gây chảy máu ồ ạt. Đây là sai lầm sinh lý quan trọng nhất trong tình huống này.",
        4: "Cơn đau quặn thận là chẩn đoán nhầm thường gặp nhất, nhưng nó <b>không gây tụt huyết áp, không gây ngất và không có khối đập theo mạch</b>. Nước tiểu ở đây cũng không có hồng cầu."
      },
      objective:
        "Vỡ phình động mạch chủ bụng có tam chứng đau bụng hoặc lưng đột ngột, tụt huyết áp và khối đập theo mạch; bệnh nhân không ổn định cần chuyển thẳng phòng mổ, hồi sức song song, không chờ chụp cắt lớp. Giữ huyết áp tâm thu ở mức vừa đủ tưới máu chứ không đưa về bình thường để tránh làm bong cục máu đông cầm tạm."
    },

    {
      spec: "Mạch máu",
      task: "Bước tiếp theo trong chẩn đoán",
      short: "Đau bụng dữ dội không tương xứng khám bụng",
      vignette: [
        "Nữ 76 tuổi vào cấp cứu vì <b>đau bụng quanh rốn dữ dội khởi phát đột ngột</b> cách đây 4 giờ, kèm nôn và một lần đi ngoài phân lỏng. Bệnh nhân mô tả đau ở mức 10/10 và không giảm dù đã tiêm morphine hai lần.",
        "Tiền sử: <b>rung nhĩ</b> nhưng bệnh nhân <b>tự ngưng thuốc kháng đông ba tháng trước</b>; tăng huyết áp; suy tim.",
        "Điểm nổi bật khi khám: bệnh nhân vật vã vì đau, nhưng <b>bụng mềm, chỉ ấn đau nhẹ lan tỏa, không phản ứng thành bụng, không cảm ứng phúc mạc</b>. Nhu động ruột còn nghe được. Mức độ đau <b>hoàn toàn không tương xứng</b> với dấu hiệu khám bụng nghèo nàn.",
        "Điện tâm đồ: rung nhĩ đáp ứng thất 108 lần/phút."
      ],
      vitals: [
        ["Nhiệt độ", "37,4 °C"],
        ["Huyết áp", "132/78"],
        ["Mạch", "108 l/ph, không đều"],
        ["Nhịp thở", "24 l/ph"],
        ["SpO2", "96% khí trời"]
      ],
      labs: {
        title: "Xét nghiệm",
        rows: [
          ["Bạch cầu", "19.200/mm³", "4.000–11.000", "hi"],
          ["Lactat", "4,8 mmol/L", "0,5–2,2", "hi"],
          ["Bicarbonat", "17 mEq/L", "22–28", "lo"],
          ["Amylase", "168 U/L", "30–110", "hi"],
          ["Creatinine", "1,2 mg/dL", "0,6–1,2", ""],
          ["X-quang bụng", "Không hơi tự do, không mức nước hơi rõ", "—", ""]
        ]
      },
      stem: "Bước tiếp theo tốt nhất trong chẩn đoán là gì?",
      choices: [
        "Chụp cắt lớp vi tính mạch máu ổ bụng",
        "Siêu âm bụng tổng quát",
        "Nội soi đại tràng cấp cứu",
        "Chụp X-quang bụng không chuẩn bị lặp lại sau 6 giờ",
        "Chọc dò ổ bụng chẩn đoán"
      ],
      answer: 0,
      why: [
        "Bệnh cảnh là <b>thiếu máu mạc treo cấp</b>, gần như chắc chắn do <b>lấp mạch từ tim</b> ở bệnh nhân rung nhĩ vừa ngưng kháng đông. Cục máu thường mắc ở <b>động mạch mạc treo tràng trên</b>.",
        "Dấu hiệu quyết định — và cũng là câu thường được hỏi nhất về bệnh này — là <b>đau bụng dữ dội không tương xứng với dấu hiệu thực thể nghèo nàn</b>. Lý do nằm ở diễn tiến bệnh: giai đoạn đầu <b>chỉ có niêm mạc ruột thiếu máu</b>, gây đau tạng dữ dội, trong khi phúc mạc chưa bị viêm nên bụng vẫn mềm. Chỉ khi ruột đã <b>hoại tử toàn bộ thành</b> thì mới xuất hiện viêm phúc mạc — nhưng lúc đó tiên lượng đã rất xấu.",
        "<b>Chụp cắt lớp vi tính mạch máu ổ bụng</b> là thăm dò lựa chọn: nó nhanh, sẵn có, và cho thấy trực tiếp chỗ tắc mạch cùng các dấu hiệu thiếu máu ruột như thành ruột dày, ngấm thuốc kém, hơi trong thành ruột hoặc hơi trong tĩnh mạch cửa. <b>Lactat tăng cùng toan chuyển hóa</b> là dấu hiệu sinh hóa cảnh báo, dù bình thường cũng không loại trừ được chẩn đoán ở giai đoạn sớm. Điều trị gồm kháng sinh, kháng đông và tái thông mạch bằng can thiệp nội mạch hoặc phẫu thuật lấy cục máu, cắt đoạn ruột hoại tử."
      ],
      wrongs: {
        1: "Siêu âm bụng bị hạn chế nặng bởi hơi trong ruột giãn và không đánh giá được tưới máu ruột. Nó có thể hữu ích cho bệnh lý gan mật nhưng không phải cho bệnh cảnh này.",
        2: "Nội soi đại tràng quan sát được <b>viêm đại tràng thiếu máu</b> — một bệnh khác, nhẹ hơn, thường ở vùng phân thủy đại tràng, biểu hiện bằng đau nhẹ và đi ngoài máu. Nội soi không đánh giá được ruột non và bơm hơi làm tăng nguy cơ thủng ở ruột đang thiếu máu.",
        3: "X-quang bụng thường bình thường ở giai đoạn sớm; các dấu hiệu như hơi trong thành ruột chỉ xuất hiện <b>muộn</b>, khi ruột đã hoại tử. Chờ 6 giờ là bỏ mất cửa sổ cứu ruột.",
        4: "Chọc dò ổ bụng không giúp chẩn đoán tắc mạch mạc treo và trì hoãn thăm dò thật sự cần thiết."
      },
      objective:
        "Thiếu máu mạc treo cấp có đặc trưng là đau bụng dữ dội không tương xứng với dấu hiệu khám nghèo nàn, thường do lấp mạch từ tim ở bệnh nhân rung nhĩ. Chụp cắt lớp vi tính mạch máu ổ bụng là thăm dò lựa chọn; lactat tăng là dấu hiệu muộn và bình thường không loại trừ chẩn đoán."
    },

    {
      spec: "Chấn thương",
      task: "Bước xử trí tiếp theo",
      short: "Đau cẳng chân tăng dần sau bó bột",
      vignette: [
        "Nam 19 tuổi bị <b>gãy kín thân hai xương cẳng chân trái</b> do đá bóng, đã được nắn và bó bột cách đây 8 giờ.",
        "Bệnh nhân than <b>đau tăng dần dữ dội</b>, hiện đau 10/10 và <b>không đáp ứng với morphine liều tăng dần</b>. Đây là điểm khiến điều dưỡng gọi bác sĩ.",
        "Khám sau khi rạch bột: <b>cẳng chân trái căng cứng như đá</b>, các khoang cơ căng phồng. <b>Đau dữ dội khi làm động tác duỗi thụ động các ngón chân</b>. Bệnh nhân mô tả <b>tê bì và cảm giác kiến bò ở mu bàn chân</b>.",
        "<b>Mạch mu chân và mạch chày sau vẫn bắt được rõ</b>, bàn chân hồng, thời gian đổ đầy mao mạch dưới 2 giây."
      ],
      vitals: [
        ["Nhiệt độ", "37,1 °C"],
        ["Huyết áp", "142/86"],
        ["Mạch", "112 l/ph"],
        ["Nhịp thở", "22 l/ph"],
        ["SpO2", "98% khí trời"]
      ],
      labs: {
        title: "Xét nghiệm",
        rows: [
          ["Creatine kinase", "6.400 U/L", "30–200", "hi"],
          ["Creatinine", "1,1 mg/dL", "0,6–1,2", ""],
          ["Kali", "5,2 mEq/L", "3,5–5,0", "hi"],
          ["Myoglobin niệu", "Dương tính", "Âm tính", "hi"],
          ["Áp lực khoang trước đo được", "48 mm Hg", "< 10", "hi"]
        ]
      },
      stem: "Bước xử trí tiếp theo tốt nhất là gì?",
      choices: [
        "Mở cân giải áp cấp cứu",
        "Chờ tới khi mất mạch mu chân rồi mới can thiệp",
        "Nâng cao chi và chườm lạnh, đánh giá lại sau hai giờ",
        "Chụp cắt lớp mạch máu chi dưới",
        "Tăng thêm liều giảm đau và theo dõi sát"
      ],
      answer: 0,
      why: [
        "Đây là <b>hội chứng khoang cấp</b>. Chẩn đoán dựa trên lâm sàng với các dấu hiệu đã đầy đủ: <b>đau không tương xứng và không đáp ứng thuốc giảm đau</b> — dấu hiệu sớm nhất và đáng tin nhất; <b>đau khi duỗi thụ động</b> các cơ trong khoang — dấu hiệu nhạy nhất; khoang căng cứng; và dị cảm do thần kinh bị chèn.",
        "Điểm bẫy quan trọng nhất: <b>mạch vẫn bắt được không loại trừ hội chứng khoang</b>. Áp lực trong khoang chỉ cần vượt <b>áp lực tưới máu mao mạch</b> — khoảng 30 mm Hg hoặc trong vòng 30 mm Hg dưới huyết áp tâm trương — là đã gây thiếu máu cơ và thần kinh, trong khi <b>áp lực động mạch lớn cao hơn nhiều</b> nên mạch vẫn còn. <b>Mất mạch là dấu hiệu rất muộn</b>, khi cơ đã hoại tử.",
        "Xử trí là <b>mở cân giải áp cấp cứu</b> tất cả các khoang liên quan — cẳng chân có bốn khoang. Trước đó phải <b>tháo bỏ hoàn toàn bột và mọi băng ép</b>. Chi phải để <b>ngang mức tim</b>, không nâng cao. Bệnh nhân đã có <b>tiêu cơ vân</b> với creatine kinase tăng cao, myoglobin niệu và tăng kali, nên cần bù dịch tích cực để bảo vệ thận."
      ],
      wrongs: {
        1: "Chờ mất mạch là hiểu sai căn bản về sinh lý bệnh. Đến lúc đó cơ đã hoại tử không hồi phục, dẫn tới co rút Volkmann, mất chức năng vĩnh viễn hoặc phải cắt cụt.",
        2: "<b>Nâng cao chi làm giảm áp lực tưới máu</b> và khiến thiếu máu nặng thêm; chi phải để ngang tim. Chườm lạnh gây co mạch, cũng làm giảm tưới máu. Trì hoãn hai giờ là quá muộn.",
        3: "Cắt lớp mạch máu đánh giá mạch lớn, vốn <b>vẫn thông</b> trong hội chứng khoang. Nó không chẩn đoán được bệnh và chỉ làm chậm mổ.",
        4: "Tăng giảm đau <b>che lấp dấu hiệu quan trọng nhất</b> để theo dõi bệnh, khiến chẩn đoán bị bỏ sót cho tới khi tổn thương không hồi phục."
      },
      objective:
        "Hội chứng khoang cấp biểu hiện bằng đau không tương xứng và không đáp ứng giảm đau, đau khi duỗi thụ động, khoang căng cứng và dị cảm; mạch còn bắt được không loại trừ chẩn đoán vì mất mạch là dấu hiệu rất muộn. Xử trí là tháo bột và mở cân giải áp cấp cứu, để chi ngang tim chứ không nâng cao."
    },

    {
      spec: "Chấn thương",
      task: "Bước xử trí tiếp theo",
      short: "Bỏng trong đám cháy nhà kín",
      vignette: [
        "Nam 41 tuổi được cứu ra từ <b>đám cháy trong nhà kín</b> sau khi mắc kẹt khoảng 15 phút. Bệnh nhân bị bỏng ở mặt, cổ, ngực và hai cánh tay.",
        "Khám: <b>lông mi, lông mày và lông mũi bị cháy sém</b>; <b>bồ hóng đen quanh lỗ mũi và trong khoang miệng</b>; <b>khàn tiếng rõ</b> và <b>thở rít nhẹ thì hít vào</b>. Bệnh nhân ho ra <b>đờm lẫn muội than</b>.",
        "Bỏng độ hai và độ ba ở mặt, cổ trước, ngực trước và mặt trước hai cánh tay, ước tính khoảng 27% diện tích da.",
        "Hiện bệnh nhân còn tỉnh, nói được nhưng giọng khàn dần trong 20 phút quan sát. SpO2 đo được 97% với oxy mask."
      ],
      vitals: [
        ["Nhiệt độ", "36,6 °C"],
        ["Huyết áp", "128/76"],
        ["Mạch", "118 l/ph"],
        ["Nhịp thở", "26 l/ph"],
        ["SpO2", "97% với oxy mask"]
      ],
      labs: {
        title: "Xét nghiệm",
        rows: [
          ["Carboxyhemoglobin", "22%", "< 3 (không hút thuốc)", "hi"],
          ["Lactat", "4,4 mmol/L", "0,5–2,2", "hi"],
          ["pH máu động mạch", "7,31", "7,35–7,45", "lo"],
          ["PaO2", "96 mm Hg", "80–100", ""],
          ["Hemoglobin", "15,2 g/dL", "13,5–17,5", ""]
        ]
      },
      stem: "Bước xử trí tiếp theo tốt nhất là gì?",
      choices: [
        "Đặt nội khí quản sớm ngay bây giờ",
        "Theo dõi sát đường thở và chỉ đặt nội khí quản khi SpO2 tụt dưới 90%",
        "Bù dịch theo công thức Parkland rồi đánh giá lại đường thở sau",
        "Nội soi phế quản chẩn đoán trước khi quyết định can thiệp đường thở",
        "Khí dung epinephrine và tiêm corticoid để giảm phù nề đường thở"
      ],
      answer: 0,
      why: [
        "Bệnh nhân có <b>bỏng đường hô hấp</b> với gần như toàn bộ dấu hiệu cảnh báo: <b>cháy sém lông mặt và lông mũi</b>, <b>bồ hóng trong mũi miệng</b>, <b>đờm lẫn muội than</b>, <b>khàn tiếng</b>, <b>thở rít</b>, cùng bối cảnh mắc kẹt trong <b>không gian kín</b> và bỏng vùng mặt cổ.",
        "Nguyên tắc sống còn là <b>đặt nội khí quản sớm, trước khi phù nề làm mất đường thở</b>. Phù nề đường hô hấp trên sau bỏng nhiệt tiến triển nhanh trong <b>vài giờ đầu</b> và còn nặng thêm khi truyền dịch hồi sức. Khi đã tắc, việc đặt ống trở nên cực kỳ khó khăn hoặc bất khả thi, buộc phải mở khí quản cấp cứu trong điều kiện tồi tệ. <b>Giọng khàn dần trong 20 phút quan sát</b> chính là bằng chứng phù nề đang tiến triển.",
        "Điểm mấu chốt thứ hai: <b>SpO₂ không đáng tin ở bệnh nhân ngộ độc khí carbon monoxide</b>. Máy đo bão hòa oxy qua mạch không phân biệt được carboxyhemoglobin với oxyhemoglobin, nên cho kết quả <b>cao giả tạo</b> — ở đây SpO₂ 97% trong khi carboxyhemoglobin đã 22%. Vì vậy phải cho <b>oxy 100%</b> để rút ngắn thời gian bán thải của carbon monoxide, và đánh giá bằng khí máu cùng đo carboxyhemoglobin trực tiếp."
      ],
      wrongs: {
        1: "Chờ SpO₂ tụt là sai lầm kép: SpO₂ vốn không đáng tin trong ngộ độc carbon monoxide, và tắc nghẽn đường thở trên do phù nề gây suy hô hấp rất đột ngột, không có thời gian phản ứng.",
        2: "Bù dịch theo Parkland là cần thiết và phải làm, nhưng <b>đường thở luôn đứng trước</b> trong trình tự ABC. Hơn nữa chính việc truyền dịch lớn sẽ làm phù nề đường thở nặng thêm, càng là lý do phải đặt ống trước.",
        3: "Nội soi phế quản đánh giá được mức tổn thương nhưng làm chậm việc bảo vệ đường thở. Nếu cần, nó có thể thực hiện <b>sau khi</b> đã đặt nội khí quản.",
        4: "Epinephrine khí dung và corticoid không ngăn được phù nề tiến triển do bỏng nhiệt và không có bằng chứng hiệu quả trong bối cảnh này; dựa vào chúng sẽ trì hoãn can thiệp thật sự cần thiết."
      },
      objective:
        "Bỏng trong không gian kín kèm cháy lông mặt, bồ hóng trong mũi miệng, đờm muội than, khàn tiếng hoặc thở rít là chỉ định đặt nội khí quản sớm trước khi phù nề làm mất đường thở. SpO₂ cho kết quả cao giả tạo trong ngộ độc carbon monoxide nên phải dùng oxy 100% và đo carboxyhemoglobin trực tiếp."
    },

    {
      spec: "Ngộ độc",
      task: "Bước xử trí tiếp theo",
      short: "Uống paracetamol liều lớn 6 giờ trước",
      vignette: [
        "Nữ 19 tuổi được bạn cùng phòng đưa vào cấp cứu sau khi thú nhận đã <b>uống khoảng 30 viên paracetamol 500 mg cùng một lúc</b> với mục đích tự tử, <b>cách đây đúng 6 giờ</b>. Bệnh nhân không uống rượu và không dùng thuốc nào khác.",
        "Hiện bệnh nhân <b>tỉnh táo hoàn toàn, chỉ than buồn nôn nhẹ và mệt</b>, đã nôn hai lần. Không đau bụng nhiều, không vàng da, không lú lẫn, không chảy máu.",
        "Khám: sinh hiệu ổn định, bụng mềm, ấn đau nhẹ hạ sườn phải, gan không to. Không dấu hiệu bệnh não gan, không sao mạch, không phù.",
        "Nồng độ paracetamol huyết thanh đo tại thời điểm <b>4 giờ sau uống</b> là <b>212 µg/mL</b>. Đối chiếu toán đồ Rumack-Matthew: <b>nằm trên đường điều trị</b>."
      ],
      vitals: [
        ["Nhiệt độ", "36,8 °C"],
        ["Huyết áp", "116/72"],
        ["Mạch", "88 l/ph"],
        ["Nhịp thở", "16 l/ph"],
        ["SpO2", "99% khí trời"]
      ],
      labs: {
        title: "Xét nghiệm",
        rows: [
          ["Paracetamol (4 giờ sau uống)", "212 µg/mL", "Trên đường điều trị", "hi"],
          ["AST", "38 U/L", "10–40", ""],
          ["ALT", "42 U/L", "10–40", "hi"],
          ["INR", "1,1", "0,8–1,1", ""],
          ["Bilirubin toàn phần", "0,8 mg/dL", "0,3–1,2", ""],
          ["Creatinine", "0,7 mg/dL", "0,5–1,0", ""],
          ["Salicylat", "Âm tính", "—", ""]
        ]
      },
      stem: "Bước xử trí tiếp theo tốt nhất là gì?",
      choices: [
        "Bắt đầu N-acetylcysteine ngay lập tức",
        "Cho than hoạt tính uống liều duy nhất",
        "Chờ men gan tăng rồi mới bắt đầu N-acetylcysteine",
        "Lọc máu cấp cứu",
        "Theo dõi men gan mỗi 6 giờ và cho ra viện nếu vẫn bình thường sau 24 giờ"
      ],
      answer: 0,
      why: [
        "Nồng độ paracetamol tại mốc 4 giờ nằm <b>trên đường điều trị của toán đồ Rumack-Matthew</b>, tức bệnh nhân có nguy cơ tổn thương gan và <b>có chỉ định dùng N-acetylcysteine</b>.",
        "Yếu tố quyết định là <b>thời gian</b>. N-acetylcysteine đạt hiệu quả <b>gần như tuyệt đối khi dùng trong vòng 8 giờ</b> sau khi uống, và hiệu quả giảm dần rõ rệt sau mốc đó. Bệnh nhân đang ở <b>giờ thứ 6</b> — vẫn trong cửa sổ vàng, nên mỗi giờ trì hoãn đều quan trọng.",
        "Cơ chế cần nắm: paracetamol liều cao làm cạn kiệt glutathion ở gan, khiến chất chuyển hóa độc <b>NAPQI</b> tích tụ và gây hoại tử tế bào gan vùng trung tâm tiểu thùy. <b>N-acetylcysteine bổ sung tiền chất của glutathion</b> để trung hòa NAPQI. Bẫy lâm sàng lớn nhất của ngộ độc paracetamol là <b>bệnh nhân trông hoàn toàn bình thường trong 24 giờ đầu</b>; men gan chỉ tăng vọt vào ngày thứ 2–3 và suy gan tối cấp xuất hiện ngày thứ 3–4. Vẻ ngoài khỏe mạnh không hề có nghĩa là an toàn. Cũng cần đánh giá tâm thần và bảo đảm an toàn cho bệnh nhân sau ý định tự tử."
      ],
      wrongs: {
        1: "Than hoạt chỉ có ích khi dùng <b>trong vòng 1–2 giờ</b> sau uống, trước khi thuốc được hấp thu. Ở giờ thứ 6, paracetamol đã hấp thu hoàn toàn nên than hoạt vô ích.",
        2: "Chờ men gan tăng là bỏ lỡ toàn bộ cơ hội điều trị: khi men gan đã tăng thì hoại tử tế bào gan <b>đã xảy ra</b>. N-acetylcysteine có tác dụng <b>dự phòng</b> tổn thương, không đảo ngược được tổn thương đã có.",
        3: "Lọc máu không phải điều trị của ngộ độc paracetamol trong trường hợp này; nó chỉ cân nhắc trong ngộ độc cực nặng với nồng độ rất cao kèm hôn mê và toan máu nặng.",
        4: "Theo dõi suông ở bệnh nhân có nồng độ trên đường điều trị là để bệnh tiến triển thành suy gan tối cấp. Vẻ ngoài bình thường trong 24 giờ đầu là đặc điểm của bệnh, không phải dấu hiệu an toàn."
      },
      objective:
        "Ngộ độc paracetamol có nồng độ trên đường điều trị của toán đồ Rumack-Matthew cần dùng N-acetylcysteine ngay, hiệu quả gần như tuyệt đối trong vòng 8 giờ đầu. Bệnh nhân trông hoàn toàn bình thường trong 24 giờ đầu nên không được chờ men gan tăng mới điều trị; than hoạt chỉ hữu ích trong 1–2 giờ đầu."
    },

    {
      spec: "Ngoại tổng quát",
      task: "Bước tiếp theo trong chẩn đoán",
      short: "Đau hạ sườn phải kéo dài kèm dấu Murphy",
      vignette: [
        "Nữ 46 tuổi vào cấp cứu vì <b>đau hạ sườn phải liên tục 14 giờ</b>, khởi phát sau bữa ăn nhiều mỡ, lan lên vai phải và vùng dưới xương bả vai phải. Kèm buồn nôn và nôn.",
        "Bệnh nhân từng có nhiều đợt đau tương tự nhưng chỉ kéo dài 1–2 giờ rồi tự hết; lần này đau <b>không hết mà tăng dần</b>.",
        "Tiền sử: BMI 33 kg/m², bốn lần sinh con, đang dùng thuốc tránh thai. Không vàng da, nước tiểu và phân màu bình thường.",
        "Khám: sốt, ấn đau rõ hạ sườn phải. <b>Dấu Murphy dương tính</b> — bệnh nhân ngừng thở đột ngột khi ấn dưới bờ sườn phải lúc hít vào. Không có vàng da củng mạc, không phản ứng thành bụng lan tỏa.",
        "Siêu âm bụng: <b>nhiều sỏi trong túi mật, thành túi mật dày 6 mm, có dịch quanh túi mật, dấu Murphy siêu âm dương tính</b>; ống mật chủ 4 mm không giãn."
      ],
      vitals: [
        ["Nhiệt độ", "38,4 °C"],
        ["Huyết áp", "126/78"],
        ["Mạch", "102 l/ph"],
        ["Nhịp thở", "18 l/ph"],
        ["SpO2", "98% khí trời"]
      ],
      labs: {
        title: "Xét nghiệm",
        rows: [
          ["Bạch cầu", "15.800/mm³", "4.000–11.000", "hi"],
          ["Bilirubin toàn phần", "1,1 mg/dL", "0,3–1,2", ""],
          ["ALT", "42 U/L", "10–40", "hi"],
          ["Phosphatase kiềm", "118 U/L", "40–130", ""],
          ["Lipase", "56 U/L", "10–140", ""],
          ["CRP", "94 mg/L", "< 5", "hi"]
        ]
      },
      stem: "Bước xử trí tiếp theo tốt nhất là gì?",
      choices: [
        "Nhập viện, nhịn ăn, bù dịch, kháng sinh và cắt túi mật nội soi trong cùng đợt nằm viện",
        "Nội soi mật tụy ngược dòng cấp cứu",
        "Cho về, hẹn mổ chương trình sau sáu tuần khi hết viêm",
        "Chỉ dùng kháng sinh và giảm đau, không cần phẫu thuật",
        "Chọc dẫn lưu túi mật qua da ngay"
      ],
      answer: 0,
      why: [
        "Đây là <b>viêm túi mật cấp do sỏi</b>. Điểm phân biệt then chốt với <b>cơn đau quặn mật đơn thuần</b> là ba yếu tố: <b>đau kéo dài trên 4–6 giờ và không tự hết</b>, <b>có sốt và bạch cầu tăng</b>, và <b>dấu Murphy dương tính</b> — bằng chứng của viêm thành túi mật chứ không chỉ là co thắt do sỏi kẹt cổ túi mật thoáng qua.",
        "Siêu âm là thăm dò đầu tay và đã cho đầy đủ tiêu chuẩn: sỏi túi mật, <b>thành túi mật dày trên 4 mm</b>, dịch quanh túi mật và dấu Murphy siêu âm dương tính. Bệnh nhân có các yếu tố nguy cơ kinh điển của sỏi mật: nữ, béo phì, đẻ nhiều lần, tuổi trung niên, dùng estrogen.",
        "Về xử trí, điểm quan trọng nhất là <b>thời điểm mổ</b>: bằng chứng hiện nay ủng hộ <b>cắt túi mật nội soi sớm, trong cùng đợt nằm viện, lý tưởng trong 72 giờ đầu</b>. So với mổ trì hoãn, mổ sớm cho thời gian nằm viện ngắn hơn, ít biến chứng hơn và tránh được nguy cơ tái phát trong thời gian chờ. <b>Xét nghiệm gan gần như bình thường và ống mật chủ không giãn</b> đã loại trừ sỏi ống mật chủ và viêm đường mật đi kèm."
      ],
      wrongs: {
        1: "Nội soi mật tụy ngược dòng dành cho <b>sỏi ống mật chủ hoặc viêm đường mật</b>, biểu hiện bằng vàng da, bilirubin và phosphatase kiềm tăng, ống mật chủ giãn. Bệnh nhân này không có dấu hiệu nào.",
        2: "Trì hoãn sáu tuần là chiến lược cũ, nay không còn được ưu tiên vì bệnh nhân có nguy cơ tái phát viêm, hoại tử túi mật hoặc thủng trong thời gian chờ.",
        3: "Kháng sinh kiểm soát nhiễm khuẩn nhưng không loại bỏ được sỏi và túi mật bệnh lý; tỉ lệ tái phát rất cao và biến chứng có thể nặng.",
        4: "Dẫn lưu túi mật qua da dành cho bệnh nhân <b>quá nặng hoặc nhiều bệnh nền không chịu được gây mê</b>. Bệnh nhân 46 tuổi, huyết động ổn định hoàn toàn phù hợp với phẫu thuật."
      },
      objective:
        "Viêm túi mật cấp phân biệt với cơn đau quặn mật ở chỗ đau kéo dài trên 4–6 giờ, có sốt, bạch cầu tăng và dấu Murphy dương tính, với siêu âm thấy thành túi mật dày và dịch quanh túi mật. Điều trị là kháng sinh cùng cắt túi mật nội soi sớm trong cùng đợt nằm viện, lý tưởng trong 72 giờ đầu."
    },

    {
      spec: "Ngoại tổng quát",
      task: "Bước xử trí tiếp theo",
      short: "Đau hố chậu trái kèm sốt ở người 62 tuổi",
      vignette: [
        "Nam 62 tuổi vào cấp cứu vì <b>đau hố chậu trái tăng dần trong ba ngày</b>, kèm sốt, chán ăn và thay đổi thói quen đi ngoài. Bệnh nhân có tiền sử táo bón mạn, ăn ít chất xơ.",
        "Bệnh nhân không nôn ra máu, không đi ngoài phân máu ồ ạt, không sụt cân trước đó.",
        "Khám: ấn đau khu trú hố chậu trái, có <b>phản ứng thành bụng nhẹ tại chỗ</b>, không cảm ứng phúc mạc lan tỏa. Sờ thấy cảm giác đầy chắc vùng hố chậu trái. Nhu động ruột giảm. Thăm trực tràng đau nhưng không sờ thấy khối, không máu.",
        "Chụp cắt lớp bụng chậu có cản quang: <b>dày thành đại tràng sigma, nhiều túi thừa, thâm nhiễm mỡ quanh đại tràng</b>; <b>không có hơi tự do, không ổ áp xe, không tắc ruột</b>."
      ],
      vitals: [
        ["Nhiệt độ", "38,3 °C"],
        ["Huyết áp", "132/80"],
        ["Mạch", "98 l/ph"],
        ["Nhịp thở", "18 l/ph"],
        ["SpO2", "97% khí trời"]
      ],
      labs: {
        title: "Xét nghiệm",
        rows: [
          ["Bạch cầu", "15.200/mm³", "4.000–11.000", "hi"],
          ["CRP", "112 mg/L", "< 5", "hi"],
          ["Lactat", "1,6 mmol/L", "0,5–2,2", ""],
          ["Creatinine", "1,0 mg/dL", "0,6–1,2", ""],
          ["Hemoglobin", "13,4 g/dL", "13,5–17,5", "lo"]
        ]
      },
      stem: "Bước xử trí tiếp theo tốt nhất là gì?",
      choices: [
        "Nhịn ăn, bù dịch, kháng sinh phủ Gram âm và kỵ khí, và nội soi đại tràng sau 6–8 tuần",
        "Nội soi đại tràng cấp cứu ngay trong đợt cấp",
        "Mổ cắt đại tràng sigma cấp cứu",
        "Dẫn lưu qua da dưới hướng dẫn cắt lớp",
        "Chỉ dùng thuốc giảm đau và thuốc nhuận tràng, cho về theo dõi"
      ],
      answer: 0,
      why: [
        "Đây là <b>viêm túi thừa đại tràng cấp không biến chứng</b>. Bệnh cảnh thường được ví như viêm ruột thừa nhưng ở bên trái: đau hố chậu trái, sốt, bạch cầu tăng, ở người trên 50 tuổi có chế độ ăn ít chất xơ. Cắt lớp đã xác nhận và quan trọng hơn là <b>loại trừ biến chứng</b>: không thủng, không áp xe, không tắc ruột, không rò.",
        "Điều trị là <b>nội khoa</b>: nhịn ăn hoặc chế độ ăn lỏng, bù dịch, và <b>kháng sinh phủ vi khuẩn Gram âm cùng kỵ khí</b> — thường ciprofloxacin kết hợp metronidazole, hoặc amoxicillin-clavulanat. Bệnh nhân có phản ứng thành bụng khu trú và sốt nên điều trị nội trú là hợp lý.",
        "Điểm phải nhớ về theo dõi: cần <b>nội soi đại tràng sau 6–8 tuần</b>, khi ổ viêm đã lui hẳn. Lý do là <b>ung thư đại tràng có thể biểu hiện giống hệt viêm túi thừa</b> trên cả lâm sàng lẫn hình ảnh. Nội soi phải hoãn tới sau giai đoạn cấp vì bơm hơi vào đại tràng đang viêm làm tăng nguy cơ thủng."
      ],
      wrongs: {
        1: "Nội soi trong đợt cấp <b>chống chỉ định</b> vì nguy cơ thủng đại tràng đang viêm. Nó bắt buộc phải làm nhưng chỉ sau 6–8 tuần.",
        2: "Phẫu thuật cấp cứu dành cho viêm túi thừa <b>có biến chứng</b>: thủng gây viêm phúc mạc toàn thể, tắc ruột, rò, hoặc thất bại điều trị nội khoa. Cắt lớp ở đây đã loại trừ tất cả.",
        3: "Dẫn lưu qua da dành cho <b>áp xe quanh đại tràng trên 3–4 cm</b>. Bệnh nhân không có ổ áp xe nào trên phim.",
        4: "Bỏ kháng sinh ở bệnh nhân sốt, bạch cầu tăng và có phản ứng thành bụng là điều trị dưới mức. Thuốc nhuận tràng trong giai đoạn cấp cũng có thể làm tăng nguy cơ thủng."
      },
      objective:
        "Viêm túi thừa đại tràng cấp không biến chứng được điều trị nội khoa bằng nhịn ăn, bù dịch và kháng sinh phủ Gram âm cùng kỵ khí, sau khi cắt lớp đã loại trừ thủng, áp xe và tắc ruột. Bắt buộc nội soi đại tràng sau 6–8 tuần để loại trừ ung thư, không nội soi trong đợt cấp vì nguy cơ thủng."
    },

    {
      spec: "Ngoại tổng quát",
      task: "Bước xử trí tiếp theo",
      short: "Khối bẹn không đẩy lên được kèm nôn",
      vignette: [
        "Nam 58 tuổi vào cấp cứu vì <b>khối phồng vùng bẹn phải to lên và đau dữ dội</b> từ 8 giờ trước. Bệnh nhân có khối thoát vị bẹn phải nhiều năm, trước đây <b>vẫn tự đẩy lên được</b> khi nằm, nhưng lần này không đẩy lên được.",
        "Từ 4 giờ nay bệnh nhân <b>nôn nhiều, bụng chướng và bí trung đại tiện</b>.",
        "Khám: khối vùng bẹn – bìu phải kích thước 6 cm, <b>căng cứng, rất đau khi sờ, da phía trên đỏ sẫm</b>, <b>không đẩy lên được</b>, gõ đục, không nghe nhu động ruột trong khối. Bụng chướng, ấn đau lan tỏa, nhu động ruột tăng âm sắc kim khí.",
        "Bác sĩ trực định thử nắn đẩy khối thoát vị lên bằng tay."
      ],
      vitals: [
        ["Nhiệt độ", "38,6 °C"],
        ["Huyết áp", "104/64"],
        ["Mạch", "122 l/ph"],
        ["Nhịp thở", "24 l/ph"],
        ["SpO2", "96% khí trời"]
      ],
      labs: {
        title: "Xét nghiệm",
        rows: [
          ["Bạch cầu", "18.400/mm³", "4.000–11.000", "hi"],
          ["Lactat", "3,9 mmol/L", "0,5–2,2", "hi"],
          ["Creatinine", "1,4 mg/dL", "0,6–1,2", "hi"],
          ["Kali", "3,3 mEq/L", "3,5–5,0", "lo"],
          ["Bicarbonat", "19 mEq/L", "22–28", "lo"]
        ]
      },
      stem: "Bước xử trí tiếp theo tốt nhất là gì?",
      choices: [
        "Hồi sức, kháng sinh và mổ cấp cứu, không cố nắn đẩy khối thoát vị",
        "Nắn đẩy khối thoát vị bằng tay sau khi giảm đau và an thần",
        "Chườm đá và đặt bệnh nhân ở tư thế đầu thấp rồi thử nắn lại",
        "Chụp cắt lớp bụng có cản quang trước khi quyết định",
        "Đặt sonde dạ dày, bù dịch và mổ chương trình sau khi ổn định vài ngày"
      ],
      answer: 0,
      why: [
        "Đây là <b>thoát vị bẹn nghẹt</b> — quai ruột bị kẹt trong bao thoát vị và <b>mất máu nuôi</b>. Bệnh nhân đã có đủ dấu hiệu: khối <b>không đẩy lên được</b>, <b>đau dữ dội</b>, <b>da đỏ sẫm phía trên</b>, cùng <b>tắc ruột</b> (nôn, chướng bụng, bí trung đại tiện) và <b>dấu hiệu toàn thân của thiếu máu ruột</b>: sốt, mạch nhanh, bạch cầu và lactat tăng.",
        "Cần phân biệt hai khái niệm: thoát vị <b>kẹt</b> là không đẩy lên được nhưng ruột còn nuôi được; thoát vị <b>nghẹt</b> là đã có thiếu máu ruột, biểu hiện bằng đau dữ dội, thay đổi màu da, sốt, nhiễm độc và toan chuyển hóa. Nghẹt là <b>cấp cứu ngoại khoa</b>.",
        "Điểm cốt lõi về xử trí: <b>tuyệt đối không cố nắn đẩy khối thoát vị đã nghẹt</b>. Nắn đẩy có thể đưa <b>quai ruột đã hoại tử trở vào ổ bụng</b>, gây thủng và viêm phúc mạc phân mà không ai nhìn thấy — biến chứng gọi là thoát vị bị đẩy vào giả. Xử trí đúng là hồi sức dịch, kháng sinh, đặt sonde dạ dày và <b>mổ cấp cứu</b> để mở bao thoát vị, đánh giá quai ruột, cắt đoạn hoại tử nếu cần và phục hồi thành bụng."
      ],
      wrongs: {
        1: "Nắn đẩy chỉ được phép với thoát vị <b>kẹt nhưng chưa nghẹt</b>: không sốt, không nhiễm độc, da bình thường và thời gian ngắn. Ở bệnh nhân này, nắn đẩy có thể gây tai họa.",
        2: "Chườm đá và tư thế đầu thấp là các thủ thuật hỗ trợ nắn đẩy ở trường hợp kẹt đơn thuần. Áp dụng cho ca đã nghẹt là mất thời gian trong khi ruột tiếp tục hoại tử.",
        3: "Cắt lớp có thể hữu ích khi chẩn đoán chưa rõ, nhưng ở đây khám thực thể đã đủ để chẩn đoán và bệnh nhân đang có dấu hiệu nhiễm độc — trì hoãn là có hại.",
        4: "Mổ chương trình sau vài ngày là dành cho thoát vị không biến chứng. Ruột đang thiếu máu không thể chờ; hoại tử và thủng sẽ xảy ra trong vài giờ."
      },
      objective:
        "Thoát vị bẹn nghẹt có khối không đẩy lên được, đau dữ dội, da đổi màu, kèm tắc ruột và dấu hiệu toàn thân của thiếu máu ruột là cấp cứu ngoại khoa cần hồi sức, kháng sinh và mổ ngay. Tuyệt đối không cố nắn đẩy khối đã nghẹt vì có thể đưa quai ruột hoại tử vào ổ bụng."
    },

    {
      spec: "Ngoại tổng quát",
      task: "Bước tiếp theo trong chẩn đoán",
      short: "Đi ngoài máu đỏ tươi lượng lớn ở người 74 tuổi",
      vignette: [
        "Nam 74 tuổi vào cấp cứu vì <b>đi ngoài ra máu đỏ tươi lượng lớn nhiều lần</b> trong 4 giờ, không đau bụng. Bệnh nhân thấy chóng mặt và suýt ngất khi đứng dậy.",
        "Tiền sử: <b>túi thừa đại tràng</b> phát hiện qua nội soi ba năm trước, tăng huyết áp, dùng aspirin dự phòng. Không nôn ra máu, không đau bụng, không sụt cân.",
        "Khám: da niêm nhợt, chi lạnh. Bụng mềm hoàn toàn, <b>không ấn đau, không phản ứng thành bụng</b>. Thăm trực tràng: máu đỏ tươi lượng nhiều, không sờ thấy khối, không trĩ chảy máu đang hoạt động.",
        "Bệnh nhân đã được đặt hai đường truyền lớn, truyền 1.500 mL dịch tinh thể và 2 đơn vị hồng cầu lắng. <b>Đặt sonde dạ dày hút ra dịch mật trong, không có máu.</b> Sau hồi sức, huyết áp lên 108/66 và mạch còn 98."
      ],
      vitals: [
        ["Nhiệt độ", "36,7 °C"],
        ["Huyết áp", "108/66 (sau hồi sức)"],
        ["Mạch", "98 l/ph"],
        ["Nhịp thở", "20 l/ph"],
        ["SpO2", "97% khí trời"]
      ],
      labs: {
        title: "Xét nghiệm",
        rows: [
          ["Hemoglobin", "8,6 g/dL", "13,5–17,5", "lo"],
          ["Tiểu cầu", "224.000/mm³", "150.000–400.000", ""],
          ["INR", "1,1", "0,8–1,1", ""],
          ["Ure máu", "22 mg/dL", "7–20", "hi"],
          ["Creatinine", "1,1 mg/dL", "0,6–1,2", ""]
        ]
      },
      stem: "Bước tiếp theo tốt nhất là gì?",
      choices: [
        "Nội soi đại tràng sau khi làm sạch đại tràng nhanh",
        "Nội soi dạ dày tá tràng cấp cứu",
        "Mổ cắt đại tràng bán phần cấp cứu",
        "Chụp xạ hình hồng cầu đánh dấu rồi theo dõi",
        "Chụp cắt lớp bụng không cản quang"
      ],
      answer: 0,
      why: [
        "Đây là <b>xuất huyết tiêu hóa dưới</b>, nguyên nhân thường gặp nhất ở người cao tuổi là <b>chảy máu túi thừa</b> — đặc trưng bởi <b>đi ngoài máu đỏ tươi lượng lớn, đột ngột và không đau</b>, do vỡ động mạch nhỏ ở cổ túi thừa. Bệnh nhân có tiền sử túi thừa và dùng aspirin.",
        "Bước đầu tiên trên thực tế đã được thực hiện: <b>loại trừ nguồn chảy máu ở đường tiêu hóa trên</b>. Điều này quan trọng vì xuất huyết tiêu hóa trên ồ ạt có thể biểu hiện bằng máu đỏ tươi qua hậu môn. <b>Sonde dạ dày hút ra dịch mật trong không máu</b> đã loại trừ khá tốt nguồn trên, và tỉ lệ ure trên creatinine thấp cũng phù hợp với nguồn chảy máu ở dưới.",
        "Bệnh nhân đã <b>đáp ứng hồi sức và ổn định trở lại</b>, nên <b>nội soi đại tràng</b> là bước tiếp theo: nó vừa xác định vị trí và nguyên nhân chảy máu, vừa cho phép <b>can thiệp cầm máu</b> bằng kẹp clip, tiêm cầm máu hoặc đốt điện. Cần làm sạch đại tràng nhanh bằng dung dịch polyethylene glycol để quan sát được. Nếu bệnh nhân <b>không ổn định</b>, hướng đi sẽ là chụp cắt lớp mạch máu rồi nút mạch, hoặc mổ khi các biện pháp thất bại."
      ],
      wrongs: {
        1: "Nội soi dạ dày là bước hợp lý khi <b>chưa loại trừ được nguồn trên</b>, đặc biệt nếu bệnh nhân không ổn định hoặc sonde dạ dày ra máu. Ở đây sonde đã ra dịch mật trong, cho thấy nguồn trên khó xảy ra.",
        2: "Mổ cắt đại tràng cấp cứu là biện pháp cuối cùng khi chảy máu ồ ạt không kiểm soát được bằng nội soi hay nút mạch. Bệnh nhân đã ổn định nên chưa có chỉ định.",
        3: "Xạ hình hồng cầu đánh dấu rất nhạy với chảy máu tốc độ thấp nhưng <b>định vị kém</b> và không can thiệp được. Nó chỉ dùng khi nội soi âm tính mà vẫn chảy máu ngắt quãng.",
        4: "Cắt lớp <b>không cản quang</b> gần như vô dụng trong xuất huyết tiêu hóa vì không phát hiện được thoát thuốc. Nếu chụp thì phải là cắt lớp mạch máu có cản quang."
      },
      objective:
        "Đi ngoài máu đỏ tươi lượng lớn không đau ở người cao tuổi thường do chảy máu túi thừa; trước tiên phải loại trừ nguồn tiêu hóa trên. Ở bệnh nhân đã ổn định sau hồi sức, nội soi đại tràng là bước tiếp theo vì vừa chẩn đoán vừa cầm máu được; bệnh nhân không ổn định thì chuyển sang cắt lớp mạch máu và nút mạch."
    },

    {
      spec: "Chấn thương",
      task: "Bước xử trí tiếp theo",
      short: "Mất thông khí một bên kèm gõ đục sau chấn thương ngực",
      vignette: [
        "Nam 29 tuổi vào cấp cứu sau tai nạn ô tô tốc độ cao, ngực trái đập vào cửa xe. Bệnh nhân khó thở, đau ngực trái.",
        "Khám: đường thở thông, bệnh nhân nói được. <b>Rì rào phế nang mất ở toàn bộ phổi trái</b>, <b>gõ đục vùng đáy phổi trái</b>. <b>Khí quản ở giữa, tĩnh mạch cổ xẹp</b>. Da lạnh ẩm, niêm mạc nhợt.",
        "Bệnh nhân được đặt <b>ống dẫn lưu màng phổi trái</b>: ngay lập tức ra <b>1.600 mL máu đỏ</b>, và trong <b>giờ tiếp theo tiếp tục ra thêm 320 mL/giờ</b>.",
        "Huyết áp vẫn 82/48 mm Hg sau khi truyền 2 lít dịch tinh thể và 2 đơn vị hồng cầu lắng."
      ],
      vitals: [
        ["Nhiệt độ", "36,0 °C"],
        ["Huyết áp", "82/48"],
        ["Mạch", "134 l/ph"],
        ["Nhịp thở", "30 l/ph"],
        ["SpO2", "91% với oxy mask"]
      ],
      labs: {
        title: "Xét nghiệm",
        rows: [
          ["Hemoglobin", "7,0 g/dL", "13,5–17,5", "lo"],
          ["Lactat", "6,1 mmol/L", "0,5–2,2", "hi"],
          ["INR", "1,5", "0,8–1,1", "hi"],
          ["Kiềm dư", "−10 mEq/L", "−2 đến +2", "lo"],
          ["Tiểu cầu", "132.000/mm³", "150.000–400.000", "lo"]
        ]
      },
      stem: "Bước xử trí tiếp theo tốt nhất là gì?",
      choices: [
        "Mở ngực cấp cứu tại phòng mổ",
        "Đặt thêm một ống dẫn lưu màng phổi thứ hai",
        "Chụp cắt lớp ngực có cản quang để tìm nguồn chảy máu",
        "Chỉ tiếp tục truyền máu và theo dõi lượng dịch ra ống dẫn lưu",
        "Chọc kim giải áp khoang màng phổi trái"
      ],
      answer: 0,
      why: [
        "Đây là <b>tràn máu màng phổi lượng lớn</b>. Dấu hiệu phân biệt với tràn khí màng phổi áp lực rất rõ: cả hai đều mất rì rào phế nang một bên, nhưng tràn máu thì <b>gõ đục</b> (dịch), <b>khí quản ở giữa</b> và <b>tĩnh mạch cổ xẹp</b> do mất máu; còn tràn khí áp lực thì gõ vang, khí quản lệch và tĩnh mạch cổ nổi.",
        "Bệnh nhân đã thỏa <b>tiêu chuẩn mở ngực</b>: <b>ra ngay trên 1.500 mL máu</b> khi đặt dẫn lưu, hoặc <b>ra trên 200 mL mỗi giờ trong 2–4 giờ liên tiếp</b>, hoặc bệnh nhân không ổn định huyết động dù đã hồi sức. Ở đây có cả ba yếu tố.",
        "Ý nghĩa của các con số là <b>chảy máu đang tiếp diễn từ một mạch máu lớn</b> — thường là động mạch liên sườn, động mạch vú trong, mạch máu rốn phổi hoặc tổn thương tim và mạch máu lớn. Dẫn lưu chỉ giải quyết được hậu quả chứ không cầm được nguồn chảy; chỉ mở ngực mới kiểm soát được. Song song cần <b>truyền máu khối lượng lớn</b> và xử trí tam chứng hạ thân nhiệt, toan máu và rối loạn đông máu đã bắt đầu xuất hiện."
      ],
      wrongs: {
        1: "Ống thứ hai có thể hữu ích khi dẫn lưu không hiệu quả do tắc hoặc đặt sai vị trí, nhưng ở đây ống đang dẫn lưu rất tốt — vấn đề là <b>nguồn chảy máu chưa được kiểm soát</b>.",
        2: "Đưa bệnh nhân không ổn định đi chụp cắt lớp là nguy hiểm; hơn nữa chỉ định mở ngực ở đây dựa vào <b>lượng máu ra và huyết động</b>, không cần hình ảnh để quyết định.",
        3: "Truyền máu đơn thuần mà không cầm nguồn chảy chỉ là đổ máu vào một cái thùng thủng; bệnh nhân sẽ tiếp tục xấu đi và rơi vào rối loạn đông máu do pha loãng.",
        4: "Chọc kim giải áp là xử trí của <b>tràn khí màng phổi áp lực</b>. Ở đây khoang màng phổi chứa máu, và một cây kim nhỏ không dẫn lưu được máu cũng không cầm được chảy máu."
      },
      objective:
        "Tràn máu màng phổi lượng lớn có mất rì rào phế nang kèm gõ đục, khí quản ở giữa và tĩnh mạch cổ xẹp. Chỉ định mở ngực là ra ngay trên 1.500 mL máu khi đặt dẫn lưu, hoặc trên 200 mL mỗi giờ trong 2–4 giờ, hoặc huyết động không ổn định dù đã hồi sức."
    },

    {
      spec: "Chấn thương",
      task: "Bước xử trí tiếp theo",
      short: "Tụt huyết áp và tiếng tim mờ sau vết thương ngực",
      vignette: [
        "Nam 25 tuổi được đưa vào cấp cứu sau khi bị <b>đâm bằng dao vào vùng ngực trái, ngay cạnh bờ trái xương ức khoang liên sườn 4</b>. Vết thương nhỏ, chảy máu ngoài ít.",
        "Bệnh nhân ban đầu tỉnh táo, huyết áp 116/72; sau 15 phút bệnh nhân <b>vật vã, khó thở và huyết áp tụt nhanh</b>.",
        "Khám: <b>tĩnh mạch cổ nổi căng</b>, <b>tiếng tim nghe mờ xa xăm</b>, <b>huyết áp 72/50 với mạch nghịch thường 18 mm Hg</b>. <b>Rì rào phế nang đều rõ hai bên phổi, gõ trong hai bên, khí quản ở giữa.</b>",
        "Siêu âm FAST mở rộng tại giường: <b>dịch trong khoang màng ngoài tim lượng nhiều, thất phải xẹp trong thì tâm trương</b>; không thấy tràn khí màng phổi, không dịch ổ bụng."
      ],
      vitals: [
        ["Nhiệt độ", "36,3 °C"],
        ["Huyết áp", "72/50"],
        ["Mạch", "138 l/ph"],
        ["Nhịp thở", "30 l/ph"],
        ["SpO2", "95% với oxy mask"]
      ],
      stem: "Bước xử trí tiếp theo tốt nhất là gì?",
      choices: [
        "Giải áp khoang màng ngoài tim ngay và chuyển mổ mở ngực khâu tim",
        "Đặt ống dẫn lưu màng phổi trái",
        "Truyền nhanh 3 lít dịch tinh thể rồi đánh giá lại",
        "Chụp cắt lớp ngực có cản quang để đánh giá tổn thương tim",
        "Đặt nội khí quản và thở máy áp lực dương trước tiên"
      ],
      answer: 0,
      why: [
        "Đây là <b>chèn ép tim cấp</b> do vết thương thấu tim. <b>Tam chứng Beck</b> đã đầy đủ: <b>tụt huyết áp</b>, <b>tĩnh mạch cổ nổi</b> và <b>tiếng tim mờ</b>, kèm <b>mạch nghịch thường</b> trên 10 mm Hg. Vị trí vết đâm nằm trong <b>vùng nguy hiểm của tim</b>.",
        "Điểm phân biệt quan trọng với tràn khí màng phổi áp lực — cũng gây tụt huyết áp và tĩnh mạch cổ nổi — là <b>phổi thông khí đều hai bên, gõ trong và khí quản ở giữa</b>. Siêu âm FAST mở rộng đã khẳng định trực tiếp: dịch màng ngoài tim với <b>thất phải xẹp thì tâm trương</b>, dấu hiệu của chèn ép.",
        "Cơ chế là màng ngoài tim <b>ít đàn hồi</b>, nên chỉ cần 100–200 mL máu tích tụ nhanh cũng đủ làm áp lực trong khoang vượt áp lực đổ đầy các buồng tim phải, khiến máu không về được tim. Xử trí là <b>giải áp ngay</b> — chọc hút dịch màng ngoài tim hoặc mở cửa sổ dưới mũi ức — như biện pháp tạm thời cứu sống, rồi <b>mổ mở ngực khâu vết thương tim</b> vì máu sẽ tiếp tục chảy và tái tích tụ."
      ],
      wrongs: {
        1: "Dẫn lưu màng phổi giải quyết tràn khí hoặc tràn máu màng phổi, nhưng phổi ở đây hoàn toàn bình thường. Nó không giải áp được khoang màng ngoài tim.",
        2: "Bù dịch có thể tạm thời tăng áp lực đổ đầy và cải thiện huyết áp trong thời gian rất ngắn, nhưng nó chỉ là biện pháp cầm cự. Truyền quá nhiều còn làm dịch màng ngoài tim tích tụ nhanh hơn.",
        3: "Đưa bệnh nhân đang chèn ép tim đi chụp cắt lớp là cực kỳ nguy hiểm và không cần thiết vì siêu âm tại giường đã chẩn đoán xác định.",
        4: "Thở máy áp lực dương <b>làm giảm thêm máu về tim</b> ở bệnh nhân đang chèn ép tim, có thể gây trụy mạch và ngừng tim ngay khi đặt ống. Nếu buộc phải đặt, cần giải áp trước hoặc chuẩn bị mổ đồng thời."
      },
      objective:
        "Chèn ép tim cấp sau vết thương thấu ngực có tam chứng Beck gồm tụt huyết áp, tĩnh mạch cổ nổi và tiếng tim mờ, với phổi thông khí đều hai bên phân biệt với tràn khí màng phổi áp lực. Xử trí là giải áp màng ngoài tim ngay rồi mở ngực khâu tim; thở máy áp lực dương trước khi giải áp có thể gây trụy mạch."
    },

    {
      spec: "Chấn thương",
      task: "Bước xử trí tiếp theo",
      short: "Khoảng tỉnh rồi hôn mê sau chấn thương đầu",
      vignette: [
        "Nam 21 tuổi ngã từ xe đạp, đầu bên trái đập vào lề đường. Bệnh nhân <b>bất tỉnh khoảng một phút</b>, sau đó <b>tỉnh lại hoàn toàn, nói chuyện bình thường</b> và tự đi vào phòng cấp cứu, chỉ than đau đầu.",
        "Sau khoảng 70 phút theo dõi, bệnh nhân <b>đau đầu tăng dữ dội, nôn vọt, rồi lơ mơ nhanh chóng</b>. Điểm Glasgow giảm từ 15 xuống 8 trong 20 phút.",
        "Khám lúc này: <b>đồng tử trái giãn 6 mm mất phản xạ ánh sáng</b>, <b>yếu nửa người phải</b>, phản xạ Babinski phải dương tính. <b>Mạch chậm 48 lần/phút, huyết áp tăng 178/96, nhịp thở không đều</b>. Sờ thấy tụ máu dưới da vùng thái dương trái.",
        "Chụp cắt lớp sọ não không cản quang: <b>khối tăng tỉ trọng hình thấu kính hai mặt lồi ở vùng thái dương trái, không vượt qua đường khớp sọ</b>, đẩy lệch đường giữa 9 mm, kèm <b>đường vỡ xương thái dương</b>."
      ],
      vitals: [
        ["Nhiệt độ", "36,8 °C"],
        ["Huyết áp", "178/96"],
        ["Mạch", "48 l/ph"],
        ["Nhịp thở", "Không đều"],
        ["SpO2", "96% với oxy mask"]
      ],
      stem: "Bước xử trí tiếp theo tốt nhất là gì?",
      choices: [
        "Hội chẩn ngoại thần kinh mổ lấy máu tụ cấp cứu, đồng thời kiểm soát đường thở và hạ áp lực nội sọ",
        "Chụp cộng hưởng từ sọ não để đánh giá chi tiết hơn",
        "Chọc dịch não tủy để giảm áp lực nội sọ",
        "Chỉ theo dõi sát tại hồi sức và chụp lại cắt lớp sau 6 giờ",
        "Truyền thuốc hạ áp mạnh để đưa huyết áp về bình thường"
      ],
      answer: 0,
      why: [
        "Đây là <b>máu tụ ngoài màng cứng</b>. Bệnh sử là dấu ấn kinh điển: bất tỉnh ngắn, <b>khoảng tỉnh</b> khi bệnh nhân hoàn toàn bình thường, rồi <b>xấu đi nhanh chóng</b> khi khối máu tụ đủ lớn.",
        "Hình ảnh học xác nhận: khối <b>hình thấu kính hai mặt lồi, không vượt qua đường khớp sọ</b> — vì màng cứng dính chặt vào xương tại các đường khớp. Nguồn chảy máu điển hình là <b>động mạch màng não giữa</b> bị rách do <b>vỡ xương thái dương</b>, và vì là động mạch nên máu tụ lớn rất nhanh.",
        "Bệnh nhân đang <b>tụt kẹt não qua lều tiểu não</b>: <b>đồng tử giãn cùng bên</b> do dây thần kinh III bị chèn, <b>yếu nửa người đối bên</b>, và <b>tam chứng Cushing</b> — mạch chậm, huyết áp tăng, thở không đều. Xử trí là <b>mổ lấy máu tụ cấp cứu ngay</b>, đồng thời kiểm soát đường thở, nâng đầu giường 30 độ, thông khí giữ CO₂ ở mức bình thường thấp và dùng dung dịch ưu trương hoặc mannitol để tạm hạ áp lực nội sọ trên đường tới phòng mổ. Nếu mổ kịp thời, tiên lượng thường <b>rất tốt</b> vì nhu mô não thường ít bị tổn thương."
      ],
      wrongs: {
        1: "Cộng hưởng từ mất nhiều thời gian và không thêm thông tin nào làm thay đổi quyết định. Cắt lớp đã cho chẩn đoán xác định và chỉ định mổ.",
        2: "Chọc dịch não tủy <b>chống chỉ định tuyệt đối</b> khi có khối choán chỗ và đẩy lệch đường giữa: nó gây tụt kẹt não và tử vong ngay lập tức.",
        3: "Theo dõi đơn thuần ở bệnh nhân đã có đồng tử giãn, liệt nửa người và tam chứng Cushing là bỏ mặc bệnh nhân tử vong. Chỉ theo dõi được khi máu tụ nhỏ và bệnh nhân hoàn toàn tỉnh táo.",
        4: "Tăng huyết áp ở đây là <b>phản ứng bù trừ</b> của cơ thể nhằm duy trì áp lực tưới máu não trước áp lực nội sọ đang tăng. Hạ áp mạnh sẽ làm giảm tưới máu não và gây thiếu máu não thứ phát."
      },
      objective:
        "Máu tụ ngoài màng cứng có khoảng tỉnh rồi xấu đi nhanh, với hình thấu kính hai mặt lồi không vượt đường khớp sọ, thường do rách động mạch màng não giữa kèm vỡ xương thái dương. Đồng tử giãn cùng bên, yếu nửa người đối bên và tam chứng Cushing là dấu hiệu tụt kẹt não cần mổ lấy máu tụ cấp cứu ngay."
    },

    {
      spec: "Chấn thương",
      task: "Bước tiếp theo trong chẩn đoán",
      short: "Đau cổ sau tai nạn, cần quyết định chụp phim",
      vignette: [
        "Nữ 34 tuổi vào cấp cứu sau va chạm xe hơi từ phía sau ở tốc độ thấp. Bệnh nhân đã được cố định cột sống cổ bằng nẹp cứng tại hiện trường.",
        "Bệnh nhân <b>hoàn toàn tỉnh táo, Glasgow 15</b>, định hướng tốt, <b>không uống rượu, không dùng chất gây nghiện</b>, không mất ý thức.",
        "Bệnh nhân <b>than đau vùng cổ sau</b>. Khám: <b>ấn đau chói ở đường giữa cột sống cổ, ngang mức C5–C6</b>. Không có yếu liệt, cảm giác nguyên vẹn, phản xạ bình thường.",
        "<b>Không có tổn thương gây mất tập trung nào khác</b> — không gãy xương dài, không chấn thương bụng ngực, không vết thương lớn."
      ],
      vitals: [
        ["Nhiệt độ", "36,8 °C"],
        ["Huyết áp", "124/76"],
        ["Mạch", "88 l/ph"],
        ["Nhịp thở", "16 l/ph"],
        ["SpO2", "99% khí trời"]
      ],
      stem: "Bước tiếp theo tốt nhất là gì?",
      choices: [
        "Giữ nẹp cổ và chụp cắt lớp vi tính cột sống cổ",
        "Tháo nẹp cổ và cho bệnh nhân về vì khám thần kinh bình thường",
        "Chụp X-quang cột sống cổ ba tư thế",
        "Chụp cộng hưởng từ cột sống cổ ngay",
        "Cho bệnh nhân xoay cổ chủ động để kiểm tra tầm vận động"
      ],
      answer: 0,
      why: [
        "Câu hỏi kiểm tra <b>tiêu chuẩn NEXUS</b> — bộ quy tắc cho phép loại trừ tổn thương cột sống cổ trên lâm sàng mà không cần chụp phim. Có thể bỏ chụp khi thỏa <b>toàn bộ năm</b> điều kiện: <b>không ấn đau đường giữa cột sống cổ</b>, <b>không có dấu thần kinh khu trú</b>, <b>tỉnh táo hoàn toàn</b>, <b>không ngộ độc rượu hay chất gây nghiện</b>, và <b>không có tổn thương gây mất tập trung</b>.",
        "Bệnh nhân thỏa bốn tiêu chí nhưng <b>vi phạm tiêu chí đầu tiên</b>: có <b>ấn đau chói ở đường giữa cột sống cổ</b>. Chỉ cần một tiêu chí không thỏa là <b>bắt buộc phải chụp phim</b>.",
        "<b>Cắt lớp vi tính là thăm dò lựa chọn</b> hiện nay ở người lớn có chấn thương: nó nhạy hơn X-quang thường quy rất nhiều trong phát hiện gãy xương, đặc biệt ở vùng bản lề cổ – ngực và vùng chẩm – C2 vốn khó thấy trên phim thường. Trong suốt quá trình, <b>nẹp cổ phải được giữ nguyên</b> cho tới khi loại trừ được tổn thương."
      ],
      wrongs: {
        1: "Khám thần kinh bình thường <b>không loại trừ</b> gãy cột sống cổ: một gãy xương không vững có thể chưa gây tổn thương tủy nhưng sẽ gây liệt nếu cột sống bị cử động. Ấn đau đường giữa là dấu hiệu bắt buộc phải khảo sát.",
        2: "X-quang ba tư thế từng là chuẩn nhưng độ nhạy thấp hơn đáng kể và bỏ sót nhiều gãy xương; nó đã được thay thế bằng cắt lớp ở bệnh nhân chấn thương người lớn.",
        3: "Cộng hưởng từ vượt trội trong đánh giá <b>tủy sống, đĩa đệm và dây chằng</b>, nhưng kém hơn cắt lớp trong phát hiện gãy xương và mất nhiều thời gian. Nó dùng khi có dấu hiệu thần kinh hoặc nghi tổn thương dây chằng dù cắt lớp bình thường.",
        4: "Cho bệnh nhân xoay cổ khi <b>chưa loại trừ gãy xương</b> là cực kỳ nguy hiểm, có thể gây di lệch mảnh gãy và tổn thương tủy vĩnh viễn. Đánh giá tầm vận động chỉ được làm sau khi phim đã bình thường."
      },
      objective:
        "Tiêu chuẩn NEXUS cho phép bỏ chụp cột sống cổ khi thỏa cả năm điều kiện: không ấn đau đường giữa, không dấu thần kinh khu trú, tỉnh táo hoàn toàn, không ngộ độc và không có tổn thương gây mất tập trung. Vi phạm bất kỳ tiêu chí nào đều bắt buộc chụp cắt lớp, và nẹp cổ phải giữ nguyên tới khi loại trừ tổn thương."
    },

    {
      spec: "Chấn thương",
      task: "Bước xử trí tiếp theo",
      short: "Chân ngắn xoay ngoài sau ngã ở người 82 tuổi",
      vignette: [
        "Nữ 82 tuổi được đưa vào cấp cứu sau khi <b>trượt ngã trong nhà tắm</b>, đập hông phải xuống nền. Bệnh nhân <b>không đứng dậy và không đi lại được</b>, đau dữ dội vùng háng phải.",
        "Tiền sử: loãng xương chưa điều trị, tăng huyết áp, sa sút trí tuệ nhẹ. Bệnh nhân sống một mình, trước khi ngã vẫn tự đi lại được trong nhà không cần dụng cụ hỗ trợ.",
        "Khám: <b>chân phải ngắn hơn chân trái khoảng 2 cm và xoay ngoài rõ rệt</b>. Đau chói khi ấn vùng bẹn phải và khi vận động thụ động khớp háng. Mạch mu chân và chày sau bắt rõ, bàn chân ấm hồng, cảm giác và vận động bàn chân bình thường.",
        "X-quang khung chậu và khớp háng phải: <b>gãy cổ xương đùi phải di lệch</b>."
      ],
      vitals: [
        ["Nhiệt độ", "36,7 °C"],
        ["Huyết áp", "146/84"],
        ["Mạch", "94 l/ph"],
        ["Nhịp thở", "18 l/ph"],
        ["SpO2", "96% khí trời"]
      ],
      labs: {
        title: "Xét nghiệm",
        rows: [
          ["Hemoglobin", "11,4 g/dL", "12,0–16,0", "lo"],
          ["Creatinine", "1,0 mg/dL", "0,5–1,0", ""],
          ["Natri", "138 mEq/L", "135–145", ""],
          ["Vitamin D 25-OH", "14 ng/mL", "> 30", "lo"],
          ["Điện tâm đồ", "Nhịp xoang, không thiếu máu cơ tim", "—", ""]
        ]
      },
      stem: "Bước xử trí tiếp theo tốt nhất là gì?",
      choices: [
        "Phẫu thuật trong vòng 24–48 giờ, kèm giảm đau đủ và dự phòng huyết khối",
        "Kéo liên tục và điều trị bảo tồn không mổ",
        "Bó bột chậu – đùi – bàn chân trong sáu tuần",
        "Chờ 7–10 ngày để bệnh nhân ổn định nội khoa rồi mới mổ",
        "Chỉ giảm đau và cho về nhà vì bệnh nhân cao tuổi có nhiều nguy cơ phẫu thuật"
      ],
      answer: 0,
      why: [
        "Bệnh cảnh là <b>gãy cổ xương đùi</b> ở người cao tuổi loãng xương: sau chấn thương nhẹ, chân <b>ngắn và xoay ngoài</b> — tư thế đặc trưng do các cơ kéo mảnh gãy.",
        "Điểm quan trọng nhất về xử trí là <b>thời điểm mổ</b>. Phẫu thuật <b>trong vòng 24–48 giờ</b> làm giảm rõ rệt tỉ lệ tử vong, viêm phổi, loét tì đè, thuyên tắc huyết khối, mê sảng và thời gian nằm viện. Bất động lâu ở người cao tuổi là nguy hiểm hơn nhiều so với nguy cơ gây mê.",
        "Về kỹ thuật, <b>gãy cổ xương đùi di lệch</b> ở người cao tuổi thường được <b>thay khớp</b> — bán phần hoặc toàn phần — thay vì kết hợp xương, vì <b>mạch nuôi chỏm xương đùi đi ngược từ dưới lên qua bao khớp</b> và bị đứt khi gãy di lệch, dẫn tới nguy cơ cao <b>hoại tử vô mạch chỏm xương đùi</b> và khớp giả. Cần bổ sung <b>canxi và vitamin D</b> (đang thiếu rõ) và bắt đầu điều trị loãng xương để dự phòng gãy xương thứ phát, đồng thời đánh giá nguy cơ ngã tại nhà."
      ],
      wrongs: {
        1: "Kéo liên tục và điều trị bảo tồn chỉ dành cho bệnh nhân <b>không thể chịu được bất kỳ cuộc mổ nào</b> hoặc đã mất khả năng đi lại từ trước. Bệnh nhân này trước đó tự đi lại được nên mục tiêu là phục hồi chức năng.",
        2: "Bó bột không giữ vững được ổ gãy cổ xương đùi và gây bất động kéo dài — đúng thứ cần tránh nhất ở người cao tuổi.",
        3: "Trì hoãn 7–10 ngày làm tăng đáng kể tỉ lệ tử vong và biến chứng. Chỉ nên trì hoãn khi có vấn đề nội khoa thực sự phải xử lý trước, và ngay cả khi đó cũng phải tối ưu càng nhanh càng tốt.",
        4: "Cho về nhà là bỏ mặc bệnh nhân đau đớn và bất động, dẫn tới loét tì đè, viêm phổi, huyết khối và tử vong. Tuổi cao không phải chống chỉ định phẫu thuật."
      },
      objective:
        "Gãy cổ xương đùi ở người cao tuổi biểu hiện bằng chân ngắn và xoay ngoài sau ngã nhẹ, cần phẫu thuật trong vòng 24–48 giờ để giảm tử vong và biến chứng do bất động. Gãy cổ xương đùi di lệch thường được thay khớp vì nguy cơ hoại tử vô mạch chỏm xương đùi, kèm điều trị loãng xương và phòng ngã."
    },

    {
      spec: "Cấp cứu",
      task: "Bước xử trí tiếp theo",
      short: "Mày đay, khò khè và tụt huyết áp sau ăn",
      vignette: [
        "Nữ 26 tuổi được đưa vào cấp cứu <b>15 phút sau khi ăn một món có tôm</b> tại nhà hàng. Bệnh nhân biết mình dị ứng hải sản nhưng không biết món ăn có tôm.",
        "Triệu chứng khởi phát trong vòng vài phút: <b>ngứa toàn thân, nổi mày đay lan tỏa</b>, sau đó <b>sưng môi và lưỡi</b>, cảm giác nghẹn ở cổ, giọng khàn.",
        "Bệnh nhân <b>khó thở, khò khè</b>, kèm <b>đau bụng quặn và nôn hai lần</b>. Bệnh nhân thấy chóng mặt, choáng váng.",
        "Khám: mày đay lan tỏa toàn thân, môi và lưỡi phù nề, thở rít nhẹ thì hít vào, <b>khò khè lan tỏa hai phế trường</b>. Bệnh nhân lơ mơ nhẹ, da lạnh ẩm."
      ],
      vitals: [
        ["Nhiệt độ", "36,7 °C"],
        ["Huyết áp", "78/44"],
        ["Mạch", "132 l/ph"],
        ["Nhịp thở", "30 l/ph"],
        ["SpO2", "90% khí trời"]
      ],
      stem: "Bước xử trí đầu tiên tốt nhất là gì?",
      choices: [
        "Tiêm adrenaline bắp vào mặt trước ngoài đùi ngay lập tức",
        "Tiêm diphenhydramine tĩnh mạch",
        "Tiêm methylprednisolone tĩnh mạch liều cao",
        "Khí dung salbutamol liều cao",
        "Truyền nhanh dịch tinh thể trước khi dùng bất kỳ thuốc nào"
      ],
      answer: 0,
      why: [
        "Đây là <b>sốc phản vệ</b>. Chẩn đoán được xác lập khi có khởi phát cấp tính tổn thương <b>từ hai hệ cơ quan trở lên</b> sau phơi nhiễm dị nguyên, hoặc <b>tụt huyết áp</b> sau phơi nhiễm dị nguyên đã biết. Bệnh nhân có cả bốn hệ: <b>da niêm</b> (mày đay, phù môi lưỡi), <b>hô hấp</b> (khò khè, thở rít, thiếu oxy), <b>tim mạch</b> (tụt huyết áp, mạch nhanh) và <b>tiêu hóa</b> (đau bụng, nôn).",
        "<b>Adrenaline là thuốc đầu tay và không có thuốc nào thay thế được.</b> Nó tác dụng lên đúng ba khâu bệnh sinh: kích thích thụ thể alpha-1 gây <b>co mạch</b> nâng huyết áp và giảm phù nề niêm mạc; kích thích beta-1 tăng <b>co bóp và nhịp tim</b>; và kích thích beta-2 gây <b>giãn phế quản</b> đồng thời ức chế giải phóng chất trung gian từ dưỡng bào.",
        "Đường dùng và vị trí rất quan trọng: <b>tiêm bắp vào mặt trước ngoài đùi</b> (cơ rộng ngoài) cho hấp thu nhanh và nồng độ đỉnh cao hơn tiêm dưới da hoặc tiêm bắp ở cánh tay. Liều người lớn là 0,3–0,5 mg dung dịch 1 mg/mL, <b>lặp lại mỗi 5–15 phút</b> nếu chưa đáp ứng. Sau đó mới đến các biện pháp bổ trợ: nằm đầu thấp chân cao, oxy, bù dịch, kháng histamin và corticoid. Bệnh nhân cần được <b>theo dõi 4–6 giờ</b> vì nguy cơ <b>phản vệ hai pha</b>, và được kê bút tiêm adrenaline tự động khi ra viện."
      ],
      wrongs: {
        1: "Kháng histamin chỉ giảm ngứa và mày đay, <b>không tác dụng lên co thắt phế quản, phù thanh quản hay tụt huyết áp</b>. Đây là thuốc bổ trợ, dùng sau adrenaline.",
        2: "Corticoid có tác dụng chậm sau nhiều giờ và được cho nhằm giảm nguy cơ phản vệ hai pha. Nó hoàn toàn vô dụng trong việc cứu bệnh nhân ở phút hiện tại.",
        3: "Salbutamol giúp giãn phế quản nhưng không xử lý được phù thanh quản hay tụt huyết áp — hai vấn đề đe dọa tính mạng ngay lập tức ở bệnh nhân này.",
        4: "Bù dịch là cần thiết và được làm song song, nhưng không được trì hoãn adrenaline. Trong sốc phản vệ, <b>chậm dùng adrenaline là yếu tố liên quan mạnh nhất tới tử vong</b>."
      },
      objective:
        "Sốc phản vệ được xác lập khi có tổn thương từ hai hệ cơ quan trở lên sau phơi nhiễm dị nguyên hoặc tụt huyết áp sau dị nguyên đã biết, và adrenaline tiêm bắp mặt trước ngoài đùi là thuốc đầu tay không gì thay thế. Kháng histamin, corticoid và thuốc giãn phế quản chỉ là bổ trợ; cần theo dõi 4–6 giờ vì nguy cơ phản vệ hai pha."
    },


    {
      spec: "Ngộ độc",
      task: "Bước xử trí tiếp theo",
      short: "Hôn mê, thở chậm và đồng tử co nhỏ",
      vignette: [
        "Nam 31 tuổi được bạn phát hiện nằm bất tỉnh trong nhà vệ sinh công cộng và gọi cấp cứu. Cạnh bệnh nhân có <b>bơm kim tiêm và garô</b>. Trên hai cánh tay có nhiều vết tiêm chích cũ và mới.",
        "Khám: bệnh nhân <b>hôn mê, không đáp ứng gọi hỏi, chỉ nhăn mặt khi kích thích đau mạnh</b>. <b>Đồng tử hai bên co nhỏ như đầu đinh ghim, phản xạ ánh sáng yếu.</b>",
        "<b>Nhịp thở 6 lần/phút, nông và không đều</b>; môi và đầu chi tím. Phổi nghe thông khí kém nhưng không ran, không khò khè. Không dấu thần kinh khu trú, không cứng gáy, không dấu chấn thương đầu.",
        "Đường huyết mao mạch 96 mg/dL."
      ],
      vitals: [
        ["Nhiệt độ", "35,8 °C"],
        ["Huyết áp", "96/58"],
        ["Mạch", "56 l/ph"],
        ["Nhịp thở", "6 l/ph"],
        ["SpO2", "78% khí trời"]
      ],
      labs: {
        title: "Khí máu động mạch",
        rows: [
          ["pH", "7,18", "7,35–7,45", "lo"],
          ["PaCO2", "76 mm Hg", "35–45", "hi"],
          ["PaO2", "48 mm Hg", "80–100", "lo"],
          ["Bicarbonat", "26 mEq/L", "22–28", ""],
          ["Lactat", "2,4 mmol/L", "0,5–2,2", "hi"]
        ]
      },
      stem: "Bước xử trí tiếp theo tốt nhất là gì?",
      choices: [
        "Hỗ trợ thông khí bằng bóng và mặt nạ, đồng thời tiêm naloxone",
        "Đặt nội khí quản ngay và chuyển hồi sức, không dùng thuốc giải độc",
        "Truyền natri bicarbonat để điều chỉnh toan máu",
        "Chụp cắt lớp sọ não trước khi can thiệp",
        "Tiêm flumazenil tĩnh mạch"
      ],
      answer: 0,
      why: [
        "Đây là <b>hội chứng ngộ độc opioid</b> với tam chứng kinh điển: <b>giảm ý thức</b>, <b>đồng tử co nhỏ như đầu đinh ghim</b>, và <b>ức chế hô hấp</b>. Bối cảnh tiêm chích và các vết tiêm càng khẳng định.",
        "Nguyên nhân tử vong trong ngộ độc opioid là <b>suy hô hấp</b>, thể hiện rõ qua khí máu: <b>toan hô hấp cấp</b> với PaCO₂ 76 mm Hg và thiếu oxy nặng. Vì vậy ưu tiên đầu tiên luôn là <b>hỗ trợ thông khí và oxy</b> — bóp bóng qua mặt nạ có oxy — làm <b>đồng thời</b> với việc dùng thuốc giải độc.",
        "<b>Naloxone</b> là chất đối kháng cạnh tranh tại thụ thể opioid, tác dụng trong 1–2 phút. Cần lưu ý ba điểm thực hành: dùng <b>liều thấp nhất có hiệu quả</b>, chuẩn độ theo <b>nhịp thở</b> chứ không theo ý thức, vì liều quá cao gây <b>hội chứng cai cấp</b> dữ dội với kích động, nôn và phù phổi ở người nghiện lâu năm; <b>thời gian tác dụng của naloxone ngắn hơn nhiều loại opioid</b> — đặc biệt methadone và fentanyl tác dụng kéo dài — nên bệnh nhân có thể <b>ức chế hô hấp trở lại</b> và phải được theo dõi kéo dài, đôi khi cần truyền liên tục; và naloxone có thể dùng qua đường tĩnh mạch, tiêm bắp hoặc xịt mũi."
      ],
      wrongs: {
        1: "Đặt nội khí quản là cần thiết nếu naloxone thất bại hoặc bệnh nhân không bảo vệ được đường thở, nhưng bỏ qua thuốc giải độc là sai: naloxone có thể đảo ngược tình trạng trong vài phút và tránh được hoàn toàn việc đặt ống cùng biến chứng của nó.",
        2: "Toan ở đây là <b>toan hô hấp</b> do không thải được CO₂. Điều trị là làm cho bệnh nhân thở, không phải truyền bicarbonat — thứ còn tạo thêm CO₂ ở một bệnh nhân đang không thông khí được.",
        3: "Chụp phim sọ não ở bệnh nhân đang thiếu oxy nặng với hội chứng ngộ độc rất điển hình là trì hoãn nguy hiểm. Nó chỉ đặt ra nếu bệnh nhân không đáp ứng naloxone hoặc có dấu thần kinh khu trú.",
        4: "Flumazenil là chất đối kháng <b>benzodiazepine</b>, không có tác dụng với opioid. Nó còn có thể gây co giật khó kiểm soát ở bệnh nhân phụ thuộc benzodiazepine hoặc đồng ngộ độc, nên rất hạn chế dùng."
      },
      objective:
        "Ngộ độc opioid có tam chứng giảm ý thức, đồng tử co nhỏ và ức chế hô hấp, với suy hô hấp là nguyên nhân tử vong. Xử trí là hỗ trợ thông khí đồng thời tiêm naloxone chuẩn độ theo nhịp thở; naloxone tác dụng ngắn hơn nhiều opioid nên phải theo dõi kéo dài vì nguy cơ ức chế hô hấp tái phát."
    },

    {
      spec: "Ngộ độc",
      task: "Bước xử trí tiếp theo",
      short: "Toan chuyển hóa khoảng trống thẩm thấu cao và tinh thể niệu",
      vignette: [
        "Nam 44 tuổi nghiện rượu được đưa vào cấp cứu vì <b>lú lẫn, nói líu nhíu và đi loạng choạng</b> từ 6 giờ trước. Bạn cùng nhà kể bệnh nhân hết rượu nên đã <b>uống chất chống đông trong gara</b>.",
        "Bệnh nhân hiện lơ mơ, nôn nhiều lần, than đau bụng. Trong hai giờ qua bệnh nhân <b>thở nhanh sâu</b> và <b>lượng nước tiểu giảm rõ</b>.",
        "Khám: lơ mơ nhưng đánh thức được, hơi thở <b>không có mùi ceton và không có mùi rượu</b>. Rung giật nhãn cầu, thất điều. Không dấu thần kinh khu trú, không cứng gáy.",
        "Soi cặn nước tiểu: <b>nhiều tinh thể hình phong bì và hình kim</b>. Nước tiểu <b>phát huỳnh quang dưới đèn Wood</b>."
      ],
      vitals: [
        ["Nhiệt độ", "36,4 °C"],
        ["Huyết áp", "114/70"],
        ["Mạch", "108 l/ph"],
        ["Nhịp thở", "30 l/ph"],
        ["SpO2", "97% khí trời"]
      ],
      labs: {
        title: "Xét nghiệm",
        rows: [
          ["pH máu động mạch", "7,12", "7,35–7,45", "lo"],
          ["Bicarbonat", "8 mEq/L", "22–28", "lo"],
          ["Khoảng trống anion", "30 mEq/L", "8–12", "hi"],
          ["Khoảng trống thẩm thấu", "38 mOsm/kg", "< 10", "hi"],
          ["Canxi toàn phần", "7,0 mg/dL", "8,5–10,5", "lo"],
          ["Creatinine", "2,8 mg/dL", "0,6–1,2", "hi"],
          ["Lactat", "2,6 mmol/L", "0,5–2,2", "hi"],
          ["Ceton máu", "Âm tính", "< 0,6", ""]
        ]
      },
      stem: "Bước xử trí tiếp theo tốt nhất là gì?",
      choices: [
        "Tiêm fomepizole ngay và hội chẩn lọc máu cấp cứu",
        "Chỉ truyền natri bicarbonat để điều chỉnh toan máu",
        "Rửa dạ dày và cho than hoạt tính",
        "Truyền dịch và theo dõi chức năng thận, chưa cần thuốc giải độc",
        "Tiêm naloxone và thiamine"
      ],
      answer: 0,
      why: [
        "Đây là <b>ngộ độc ethylene glycol</b> — thành phần chính của chất chống đông. Bộ ba xét nghiệm quyết định là <b>toan chuyển hóa khoảng trống anion cao</b>, <b>khoảng trống thẩm thấu tăng</b>, và <b>ceton âm tính cùng lactat chỉ tăng nhẹ</b> — loại trừ toan ceton và toan lactic đơn thuần.",
        "Các dấu hiệu đặc hiệu đều có mặt: <b>tinh thể canxi oxalat hình phong bì và hình kim trong nước tiểu</b>, <b>hạ canxi máu</b> do canxi bị kết tủa cùng oxalat, <b>suy thận cấp</b> do tinh thể lắng đọng ở ống thận, và <b>nước tiểu phát huỳnh quang</b> do chất nhuộm fluorescein được nhà sản xuất thêm vào chất chống đông.",
        "Cơ chế cần nắm: bản thân ethylene glycol tương đối ít độc, nhưng nó bị men <b>alcohol dehydrogenase</b> chuyển thành <b>glycolat</b> gây toan máu và <b>oxalat</b> gây hạ canxi cùng suy thận. Vì vậy điều trị là <b>ức chế chính men đó bằng fomepizole</b> để chặn tạo chất chuyển hóa độc, và <b>lọc máu</b> để loại bỏ cả chất mẹ lẫn chất chuyển hóa khi có toan máu nặng, suy thận hoặc nồng độ rất cao — bệnh nhân này thỏa cả ba. Ethanol là thuốc thay thế khi không có fomepizole, cùng cơ chế cạnh tranh men."
      ],
      wrongs: {
        1: "Bicarbonat chỉ là biện pháp hỗ trợ tạm thời và không ngăn được việc tiếp tục tạo ra chất chuyển hóa độc. Bỏ qua fomepizole nghĩa là để thận tiếp tục bị phá hủy.",
        2: "Rửa dạ dày và than hoạt gần như vô ích: rượu và glycol <b>hấp thu rất nhanh</b> và <b>than hoạt không hấp phụ được cồn</b>. Bệnh nhân cũng đã uống từ 6 giờ trước.",
        3: "Chỉ truyền dịch và theo dõi ở bệnh nhân pH 7,12 với suy thận đang tiến triển là điều trị dưới mức nghiêm trọng; tổn thương thận sẽ trở nên không hồi phục.",
        4: "Naloxone không có vai trò vì đây không phải ngộ độc opioid — đồng tử không co nhỏ và bệnh nhân thở nhanh chứ không chậm. Thiamine nên được cho ở người nghiện rượu nhưng không phải điều trị của ngộ độc này."
      },
      objective:
        "Ngộ độc ethylene glycol gây toan chuyển hóa khoảng trống anion cao kèm khoảng trống thẩm thấu tăng, tinh thể canxi oxalat niệu, hạ canxi máu và suy thận cấp. Điều trị là fomepizole để ức chế alcohol dehydrogenase chặn tạo chất chuyển hóa độc, kèm lọc máu khi toan nặng, suy thận hoặc nồng độ cao."
    },

    {
      spec: "Cấp cứu",
      task: "Bước xử trí tiếp theo",
      short: "Sốt rất cao và hôn mê sau chạy bộ ngoài trời",
      vignette: [
        "Nam 23 tuổi, vận động viên, được đưa vào cấp cứu sau khi <b>gục ngã trong lúc chạy marathon</b> giữa trưa nắng nóng 38 °C, độ ẩm cao. Bệnh nhân chạy được khoảng 30 km và uống rất ít nước.",
        "Khám: bệnh nhân <b>hôn mê, không đáp ứng gọi hỏi</b>, có <b>cơn co giật ngắn</b> trên đường tới viện. Đồng tử đều, phản xạ ánh sáng còn.",
        "<b>Da nóng bừng, đỏ và khô — không ra mồ hôi.</b> Niêm mạc khô, mắt trũng.",
        "<b>Nhiệt độ trung tâm đo ở hậu môn là 41,6 °C.</b> Không có dấu chấn thương đầu, không cứng gáy, đường huyết mao mạch 88 mg/dL."
      ],
      vitals: [
        ["Nhiệt độ trung tâm", "41,6 °C"],
        ["Huyết áp", "88/52"],
        ["Mạch", "146 l/ph"],
        ["Nhịp thở", "32 l/ph"],
        ["SpO2", "95% với oxy mask"]
      ],
      labs: {
        title: "Xét nghiệm",
        rows: [
          ["Creatine kinase", "18.400 U/L", "30–200", "hi"],
          ["Creatinine", "2,4 mg/dL", "0,6–1,2", "hi"],
          ["Kali", "5,8 mEq/L", "3,5–5,0", "hi"],
          ["AST / ALT", "486 / 402 U/L", "10–40", "hi"],
          ["INR", "1,9", "0,8–1,1", "hi"],
          ["Tiểu cầu", "88.000/mm³", "150.000–400.000", "lo"],
          ["Lactat", "6,2 mmol/L", "0,5–2,2", "hi"]
        ]
      },
      stem: "Bước xử trí tiếp theo tốt nhất là gì?",
      choices: [
        "Làm mát nhanh bằng ngâm nước đá kèm hồi sức dịch tĩnh mạch",
        "Tiêm paracetamol tĩnh mạch để hạ sốt",
        "Truyền dantrolene tĩnh mạch",
        "Chỉ lau mát bằng khăn ấm và truyền dịch, tránh hạ nhiệt quá nhanh",
        "Chụp cắt lớp sọ não và chọc dịch não tủy trước khi điều trị"
      ],
      answer: 0,
      why: [
        "Đây là <b>say nắng do gắng sức</b>. Chẩn đoán gồm hai yếu tố: <b>nhiệt độ trung tâm trên 40 °C</b> và <b>rối loạn chức năng thần kinh trung ương</b> — ở đây là hôn mê và co giật. Cần phân biệt với <b>kiệt sức do nóng</b>, vốn có nhiệt độ dưới 40 °C và <b>ý thức vẫn bình thường</b>.",
        "Bệnh nhân đã có <b>suy đa cơ quan</b>: tiêu cơ vân với creatine kinase rất cao, suy thận cấp, tổn thương gan, và rối loạn đông máu với tiểu cầu giảm cùng INR kéo dài — dấu hiệu đông máu nội mạch rải rác.",
        "<b>Yếu tố quyết định tiên lượng là thời gian nhiệt độ trung tâm còn trên 40 °C.</b> Vì vậy việc phải làm ngay là <b>làm mát nhanh</b>: <b>ngâm nước đá là phương pháp hiệu quả nhất</b> trong say nắng do gắng sức ở người trẻ, đạt tốc độ hạ nhiệt cao nhất. Đích là đưa nhiệt độ trung tâm xuống khoảng <b>38,5–39 °C</b> rồi ngừng làm mát để tránh hạ thân nhiệt quá mức. Song song là hồi sức dịch tích cực để bảo vệ thận khỏi myoglobin và xử trí tăng kali máu."
      ],
      wrongs: {
        1: "Thuốc hạ sốt <b>hoàn toàn không có tác dụng</b> trong say nắng. Chúng hoạt động bằng cách hạ điểm đặt nhiệt ở vùng dưới đồi trong <b>sốt</b>, còn ở đây điểm đặt nhiệt bình thường — vấn đề là cơ thể mất khả năng thải nhiệt. Paracetamol còn có thể gây độc gan trên nền gan đã tổn thương.",
        2: "Dantrolene là thuốc điều trị <b>tăng thân nhiệt ác tính</b> do thuốc mê và hội chứng an thần kinh ác tính. Nó không có hiệu quả trong say nắng.",
        3: "Lau khăn ấm hạ nhiệt quá chậm ở bệnh nhân 41,6 °C đang hôn mê. Ở say nắng do gắng sức, làm mát càng nhanh càng tốt và ngâm nước đá là ưu tiên.",
        4: "Chẩn đoán hình ảnh và chọc dịch não tủy có thể cần nếu nghi nhiễm khuẩn thần kinh, nhưng <b>không được làm chậm việc làm mát</b> — mỗi phút ở nhiệt độ cao đều gây thêm tổn thương tế bào không hồi phục."
      },
      objective:
        "Say nắng là nhiệt độ trung tâm trên 40 °C kèm rối loạn chức năng thần kinh trung ương, phân biệt với kiệt sức do nóng vốn có ý thức bình thường. Điều trị là làm mát nhanh — ngâm nước đá hiệu quả nhất ở thể do gắng sức — tới khoảng 38,5–39 °C, kèm hồi sức dịch; thuốc hạ sốt hoàn toàn không có tác dụng."
    },

    {
      spec: "Cấp cứu",
      task: "Bước xử trí tiếp theo",
      short: "Hạ thân nhiệt nặng kèm sóng Osborn",
      vignette: [
        "Nam 62 tuổi vô gia cư được tìm thấy nằm ngoài trời sau một đêm lạnh dưới 0 °C và được đưa vào cấp cứu.",
        "Khám: bệnh nhân <b>lơ mơ nặng, không run cơ</b>, cơ toàn thân cứng đờ, da lạnh tái, mạch bắt rất yếu và chậm. Đồng tử đều, phản xạ ánh sáng chậm.",
        "<b>Nhiệt độ trung tâm đo bằng đầu dò thực quản là 26,8 °C.</b>",
        "Điện tâm đồ: nhịp chậm, khoảng PR và QT kéo dài, có <b>sóng Osborn (sóng J) rõ ở các chuyển đạo trước tim</b>. Không có rung thất.",
        "Không dấu chấn thương, đường huyết mao mạch 74 mg/dL, xét nghiệm độc chất âm tính."
      ],
      vitals: [
        ["Nhiệt độ trung tâm", "26,8 °C"],
        ["Huyết áp", "82/46"],
        ["Mạch", "34 l/ph"],
        ["Nhịp thở", "8 l/ph"],
        ["SpO2", "Khó đo do co mạch ngoại vi"]
      ],
      labs: {
        title: "Xét nghiệm",
        rows: [
          ["pH máu động mạch", "7,26", "7,35–7,45", "lo"],
          ["Kali", "5,4 mEq/L", "3,5–5,0", "hi"],
          ["Glucose", "74 mg/dL", "70–100", ""],
          ["Creatinine", "1,7 mg/dL", "0,6–1,2", "hi"],
          ["Lactat", "3,4 mmol/L", "0,5–2,2", "hi"],
          ["INR", "1,6", "0,8–1,1", "hi"]
        ]
      },
      stem: "Bước xử trí tiếp theo tốt nhất là gì?",
      choices: [
        "Làm ấm trung tâm tích cực, hạn chế tối đa di chuyển và va chạm bệnh nhân",
        "Chỉ đắp chăn ấm và làm ấm ngoài thụ động, chờ bệnh nhân tự hồi phục",
        "Xoa bóp mạnh tứ chi và ngâm hai chân vào nước ấm để làm ấm nhanh",
        "Tiêm adrenaline và atropine để nâng nhịp tim",
        "Ngừng hồi sức nếu bệnh nhân ngừng tim vì tiên lượng quá xấu"
      ],
      answer: 0,
      why: [
        "Bệnh nhân bị <b>hạ thân nhiệt nặng</b> — nhiệt độ trung tâm dưới 28 °C. Dấu hiệu <b>ngừng run cơ</b> là chỉ điểm quan trọng: cơ thể mất khả năng sinh nhiệt bù trừ, thường xảy ra dưới khoảng 30–32 °C. <b>Sóng Osborn</b> trên điện tâm đồ là dấu hiệu đặc trưng của hạ thân nhiệt.",
        "Điểm nguy hiểm nhất cần nhớ: <b>cơ tim ở nhiệt độ thấp cực kỳ dễ kích thích</b>, và <b>bất kỳ va chạm hay di chuyển thô bạo nào cũng có thể kích hoạt rung thất</b> — loạn nhịp rất khó chuyển nhịp khi cơ tim còn lạnh. Vì vậy nguyên tắc là <b>xử lý bệnh nhân hết sức nhẹ nhàng</b>, hạn chế tối đa di chuyển và các thủ thuật không cần thiết.",
        "Ở mức độ nặng cần <b>làm ấm trung tâm tích cực</b>: dịch truyền được làm ấm, khí thở làm ấm và ẩm, rửa khoang màng phổi hoặc phúc mạc bằng dịch ấm, và ở ca nặng nhất là <b>tuần hoàn ngoài cơ thể</b> — biện pháp hiệu quả nhất. Cũng phải nhớ nguyên tắc kinh điển của cấp cứu: <b>bệnh nhân chưa chết cho tới khi được làm ấm và vẫn chết</b>, vì hạ thân nhiệt bảo vệ não và đã có nhiều ca hồi phục thần kinh hoàn toàn sau hồi sức kéo dài."
      ],
      wrongs: {
        1: "Làm ấm ngoài thụ động chỉ đủ cho hạ thân nhiệt <b>nhẹ</b>, khi bệnh nhân còn run cơ và còn khả năng tự sinh nhiệt. Bệnh nhân ở 26,8 °C đã mất hoàn toàn khả năng đó.",
        2: "Đây là sai lầm nguy hiểm nhất. Xoa bóp và làm ấm chi trước gây <b>hiệu ứng hạ nhiệt sau khi làm ấm</b>: mạch ngoại vi giãn ra, máu lạnh và toan ở tứ chi dồn về trung tâm, làm <b>nhiệt độ trung tâm tụt thêm</b> và có thể gây rung thất cùng trụy mạch. Ưu tiên luôn là làm ấm từ trung tâm.",
        3: "Ở nhiệt độ dưới 30 °C, <b>cơ tim đáp ứng rất kém với thuốc</b> và thuốc bị chuyển hóa chậm nên tích lũy tới nồng độ độc khi bệnh nhân được làm ấm. Nhịp chậm trong hạ thân nhiệt là đáp ứng sinh lý phù hợp và thường tự cải thiện khi thân nhiệt tăng.",
        4: "Trái ngược hoàn toàn với nguyên tắc xử trí: hồi sức phải được tiếp tục trong khi làm ấm, và chỉ ngừng sau khi đã đưa thân nhiệt về gần bình thường mà bệnh nhân vẫn không đáp ứng."
      },
      objective:
        "Hạ thân nhiệt nặng dưới 28 °C có ngừng run cơ và sóng Osborn, với cơ tim rất dễ rung thất nên phải xử lý bệnh nhân hết sức nhẹ nhàng. Cần làm ấm trung tâm tích cực chứ không làm ấm chi trước để tránh hiệu ứng hạ nhiệt sau làm ấm; hồi sức tiếp tục cho tới khi bệnh nhân được làm ấm."
    },

    {
      spec: "Cấp cứu",
      task: "Bước xử trí tiếp theo",
      short: "Sốt, tụt huyết áp và lactat cao ở người đặt sonde tiểu",
      vignette: [
        "Nữ 78 tuổi ở viện dưỡng lão, <b>mang sonde tiểu lưu dài ngày</b>, được đưa vào cấp cứu vì sốt cao rét run, lú lẫn tăng dần và ăn uống kém trong hai ngày.",
        "Khám: bệnh nhân lú lẫn, không định hướng thời gian và không gian. Da nóng, nổi vân tím ở đầu gối. <b>Ấn đau vùng hạ vị và đau khi vỗ hố thắt lưng hai bên.</b> Nước tiểu trong túi <b>đục và có mùi hôi</b>.",
        "Phổi trong, tim đều nhanh, bụng mềm không phản ứng thành bụng. Không ban da, không cứng gáy, không ổ nhiễm khuẩn khu trú nào khác.",
        "Sau khi truyền nhanh 30 mL/kg dịch tinh thể trong một giờ, <b>huyết áp trung bình vẫn chỉ đạt 58 mm Hg</b>."
      ],
      vitals: [
        ["Nhiệt độ", "39,2 °C"],
        ["Huyết áp", "76/46"],
        ["Mạch", "128 l/ph"],
        ["Nhịp thở", "28 l/ph"],
        ["SpO2", "94% khí trời"]
      ],
      labs: {
        title: "Xét nghiệm",
        rows: [
          ["Bạch cầu", "23.600/mm³", "4.000–11.000", "hi"],
          ["Lactat", "4,6 mmol/L", "0,5–2,2", "hi"],
          ["Creatinine (nền 0,9)", "2,2 mg/dL", "0,5–1,0", "hi"],
          ["Tiểu cầu", "94.000/mm³", "150.000–400.000", "lo"],
          ["Bilirubin toàn phần", "2,1 mg/dL", "0,3–1,2", "hi"],
          ["Nước tiểu", "Bạch cầu nhiều, nitrit dương tính, vi khuẩn nhiều", "—", "hi"]
        ]
      },
      stem: "Ngoài kháng sinh phổ rộng đã được dùng, bước xử trí tiếp theo tốt nhất là gì?",
      choices: [
        "Truyền noradrenaline để đưa huyết áp trung bình lên ít nhất 65 mm Hg và thay sonde tiểu",
        "Tiếp tục truyền thêm 3 lít dịch tinh thể trước khi dùng thuốc vận mạch",
        "Truyền dopamine liều thấp để bảo vệ chức năng thận",
        "Truyền hydrocortisone liều cao cho mọi bệnh nhân sốc nhiễm khuẩn",
        "Truyền albumin thay cho dịch tinh thể ngay từ đầu"
      ],
      answer: 0,
      why: [
        "Bệnh nhân có <b>sốc nhiễm khuẩn</b> từ đường tiết niệu liên quan sonde tiểu. Định nghĩa được thỏa: nhiễm khuẩn kèm <b>tụt huyết áp cần thuốc vận mạch để giữ huyết áp trung bình từ 65 mm Hg</b> dù đã bù đủ dịch, và <b>lactat trên 2 mmol/L</b>. Bệnh nhân còn có suy đa cơ quan: thận, gan, huyết học và thần kinh.",
        "Bệnh nhân <b>đã được bù 30 mL/kg dịch tinh thể</b> — đúng liều khuyến cáo — mà huyết áp trung bình vẫn dưới 65 mm Hg. Đây chính là mốc chuyển sang <b>thuốc vận mạch</b>, và <b>noradrenaline là lựa chọn đầu tay</b> vì hiệu quả co mạch tốt với ít loạn nhịp hơn dopamine.",
        "Hai việc không được quên. Thứ nhất, <b>kiểm soát ổ nhiễm khuẩn</b>: ở đây là <b>thay hoặc rút sonde tiểu</b>, vì màng sinh học trên bề mặt sonde khiến kháng sinh không tiếp cận được vi khuẩn — không kiểm soát được nguồn thì kháng sinh và vận mạch đều thất bại. Thứ hai, phải <b>cấy máu và cấy nước tiểu trước khi dùng kháng sinh</b>, và dùng kháng sinh trong <b>giờ đầu tiên</b>, vì mỗi giờ chậm trễ đều làm tăng tỉ lệ tử vong."
      ],
      wrongs: {
        1: "Bù dịch quá mức sau khi đã đạt 30 mL/kg mà không đáp ứng sẽ gây phù phổi, phù mô kẽ và làm xấu kết cục, đặc biệt ở người cao tuổi. Sau ngưỡng này cần chuyển sang vận mạch và đánh giá đáp ứng dịch bằng các thông số động.",
        2: "Dopamine liều thấp gọi là liều thận đã được chứng minh <b>không bảo vệ thận</b> và không giảm nhu cầu lọc máu, trong khi làm tăng nguy cơ loạn nhịp nhanh. Nó đã bị loại khỏi khuyến cáo.",
        3: "Corticoid <b>không dùng cho mọi bệnh nhân</b>; nó chỉ được cân nhắc ở bệnh nhân sốc nhiễm khuẩn <b>vẫn cần vận mạch liều cao</b> dù đã bù đủ dịch. Bệnh nhân này còn chưa bắt đầu vận mạch.",
        4: "Dịch tinh thể là lựa chọn đầu tay trong hồi sức sốc nhiễm khuẩn. Albumin chỉ cân nhắc ở bệnh nhân đã cần lượng dịch tinh thể rất lớn, và không thay thế ngay từ đầu."
      },
      objective:
        "Sốc nhiễm khuẩn là nhiễm khuẩn kèm tụt huyết áp cần vận mạch để giữ huyết áp trung bình từ 65 mm Hg dù đã bù 30 mL/kg dịch, cùng lactat trên 2 mmol/L. Noradrenaline là vận mạch đầu tay, và kiểm soát ổ nhiễm khuẩn — như thay sonde tiểu — là bắt buộc vì kháng sinh không xuyên được màng sinh học."
    },

    {
      spec: "Ngoại tổng quát",
      task: "Bước xử trí tiếp theo",
      short: "Khối sưng đau cạnh hậu môn kèm sốt",
      vignette: [
        "Nam 38 tuổi đái tháo đường típ 2 kiểm soát kém đến cấp cứu vì <b>đau vùng hậu môn tăng dần trong bốn ngày</b>, đau liên tục, tăng dữ dội khi ngồi và khi đi đại tiện. Bệnh nhân sốt và ớn lạnh từ hôm qua.",
        "Bệnh nhân đã tự dùng ibuprofen và thuốc nhuận tràng nhưng không đỡ; đau ngày càng nặng khiến bệnh nhân không ngồi được.",
        "Khám vùng tầng sinh môn: <b>khối sưng nề đỏ cạnh hậu môn bên phải, đường kính khoảng 4 cm, nóng, ấn rất đau và có cảm giác lùng nhùng rõ</b>. Da phía trên căng bóng, không có lỗ rò chảy dịch.",
        "Không có hoại tử da, không có tiếng lép bép dưới da, không đau lan rộng ra thành bụng hay bìu. Thăm trực tràng rất đau nên không thực hiện đầy đủ."
      ],
      vitals: [
        ["Nhiệt độ", "38,7 °C"],
        ["Huyết áp", "128/78"],
        ["Mạch", "104 l/ph"],
        ["Nhịp thở", "18 l/ph"],
        ["SpO2", "98% khí trời"]
      ],
      labs: {
        title: "Xét nghiệm",
        rows: [
          ["Bạch cầu", "17.200/mm³", "4.000–11.000", "hi"],
          ["CRP", "138 mg/L", "< 5", "hi"],
          ["Glucose", "268 mg/dL", "70–100", "hi"],
          ["HbA1c", "9,4%", "< 5,7", "hi"],
          ["Lactat", "1,4 mmol/L", "0,5–2,2", ""],
          ["Creatinine", "1,0 mg/dL", "0,6–1,2", ""]
        ]
      },
      stem: "Bước xử trí tiếp theo tốt nhất là gì?",
      choices: [
        "Rạch dẫn lưu ổ áp xe",
        "Chỉ dùng kháng sinh đường uống và ngâm nước ấm, hẹn khám lại sau ba ngày",
        "Chụp cộng hưởng từ tầng sinh môn trước khi can thiệp",
        "Mổ cắt đường rò hậu môn ngay trong lần này",
        "Chỉ dùng thuốc giảm đau và thuốc làm mềm phân"
      ],
      answer: 0,
      why: [
        "Đây là <b>áp xe quanh hậu môn</b>. Chẩn đoán dựa trên lâm sàng: khối sưng đỏ, nóng, ấn đau và <b>có cảm giác lùng nhùng</b> — dấu hiệu của ổ mủ đã hình thành. Đái tháo đường kiểm soát kém là yếu tố nguy cơ rõ rệt.",
        "Nguyên tắc điều trị ngoại khoa nền tảng: <b>ổ mủ phải được dẫn lưu</b>. Kháng sinh đơn thuần không xuyên được vào lòng ổ áp xe vốn không có mạch máu nuôi, nên <b>rạch dẫn lưu là điều trị chính</b> và cần làm sớm. Kháng sinh chỉ là bổ trợ, dành cho bệnh nhân có <b>viêm mô tế bào lan rộng, suy giảm miễn dịch, đái tháo đường, hoặc dấu hiệu nhiễm khuẩn toàn thân</b> — bệnh nhân này thỏa nên cần dùng kèm.",
        "Hai điểm cần theo dõi thêm. Thứ nhất, khoảng <b>một phần ba đến một nửa</b> áp xe quanh hậu môn sẽ tiến triển thành <b>rò hậu môn</b>, cần xử trí thì hai sau khi ổ viêm đã lui hẳn. Thứ hai, phải luôn cảnh giác <b>viêm mô hoại tử tầng sinh môn</b> — hoại thư Fournier — đặc biệt ở người đái tháo đường: dấu hiệu báo động là đau dữ dội không tương xứng, hoại tử da, tiếng lép bép dưới da, và bệnh nhân nhiễm độc nặng; đây là cấp cứu cắt lọc rộng."
      ],
      wrongs: {
        1: "Kháng sinh và ngâm nước ấm đơn thuần chỉ phù hợp với <b>viêm mô tế bào chưa tạo mủ</b>. Khi đã có cảm giác lùng nhùng thì ổ mủ đã hình thành và bắt buộc phải dẫn lưu; trì hoãn ba ngày ở người đái tháo đường có nguy cơ lan rộng thành hoại thư Fournier.",
        2: "Cộng hưởng từ rất hữu ích để đánh giá <b>áp xe sâu trong hố ngồi – trực tràng hay trên cơ nâng hậu môn</b>, hoặc để lập bản đồ đường rò. Ở đây ổ áp xe nông và sờ thấy rõ, chụp phim chỉ làm chậm dẫn lưu.",
        3: "Xử lý đường rò <b>không được làm cùng lúc</b> với dẫn lưu áp xe cấp: mô đang viêm phù nề khiến việc xác định đường rò không chính xác và tăng nguy cơ tổn thương cơ thắt gây <b>mất tự chủ hậu môn</b>.",
        4: "Giảm đau và làm mềm phân là biện pháp hỗ trợ, không giải quyết ổ nhiễm khuẩn. Bệnh nhân đang sốt với bạch cầu 17.200 cần can thiệp thực sự."
      },
      objective:
        "Áp xe quanh hậu môn được chẩn đoán trên lâm sàng bằng khối sưng đau có cảm giác lùng nhùng và bắt buộc phải rạch dẫn lưu, vì kháng sinh không xuyên được vào ổ mủ. Kháng sinh chỉ bổ trợ khi có đái tháo đường, suy giảm miễn dịch hay nhiễm khuẩn toàn thân; luôn cảnh giác hoại thư Fournier và xử trí đường rò ở thì hai."
    },

    {
      spec: "Chấn thương",
      task: "Bước xử trí tiếp theo",
      short: "Vết thương dao đâm bụng kèm lòi mạc nối",
      vignette: [
        "Nam 24 tuổi bị <b>đâm bằng dao vào vùng hạ sườn trái</b> trong một vụ ẩu đả cách đây 40 phút. Bệnh nhân tỉnh táo, than đau bụng nhiều.",
        "Khám vết thương: vết rách da dài khoảng 4 cm ở hạ sườn trái, <b>một phần mạc nối lớn lòi ra ngoài qua vết thương</b>.",
        "Khám bụng: <b>ấn đau lan tỏa, có phản ứng thành bụng và cảm ứng phúc mạc rõ toàn bụng</b>. Nhu động ruột giảm.",
        "Đánh giá ban đầu: đường thở thông, phổi thông khí đều hai bên, khí quản giữa. Huyết áp 106/68, mạch 112. Siêu âm FAST: có dịch tự do lượng vừa trong ổ bụng.",
        "Bác sĩ trực đang cân nhắc thăm dò vết thương tại giường bằng ngón tay để xem có thủng phúc mạc hay không."
      ],
      vitals: [
        ["Nhiệt độ", "36,7 °C"],
        ["Huyết áp", "106/68"],
        ["Mạch", "112 l/ph"],
        ["Nhịp thở", "22 l/ph"],
        ["SpO2", "98% khí trời"]
      ],
      labs: {
        title: "Xét nghiệm",
        rows: [
          ["Hemoglobin", "12,4 g/dL", "13,5–17,5", "lo"],
          ["Lactat", "3,0 mmol/L", "0,5–2,2", "hi"],
          ["Bạch cầu", "14.800/mm³", "4.000–11.000", "hi"],
          ["INR", "1,1", "0,8–1,1", ""],
          ["Nhóm máu", "O, Rh dương", "—", ""]
        ]
      },
      stem: "Bước xử trí tiếp theo tốt nhất là gì?",
      choices: [
        "Mở bụng thăm dò",
        "Thăm dò vết thương tại giường bằng ngón tay để xác định có thủng phúc mạc",
        "Chụp cắt lớp bụng chậu có cản quang và theo dõi bảo tồn",
        "Khâu kín vết thương sau khi đẩy mạc nối trở lại ổ bụng",
        "Nội soi ổ bụng chẩn đoán rồi quyết định sau"
      ],
      answer: 0,
      why: [
        "Bệnh nhân có <b>vết thương thấu bụng do vật sắc nhọn</b> với <b>hai chỉ định mở bụng tuyệt đối</b> cùng lúc: <b>viêm phúc mạc</b> — biểu hiện bằng phản ứng thành bụng và cảm ứng phúc mạc lan tỏa — và <b>lòi tạng qua vết thương</b>.",
        "Cần thuộc danh sách <b>chỉ định mở bụng ngay</b> trong chấn thương bụng: <b>huyết động không ổn định</b>, <b>viêm phúc mạc</b>, <b>lòi tạng</b>, <b>vết thương do đạn xuyên phúc mạc</b>, <b>hơi tự do trên phim</b>, và <b>máu qua sonde dạ dày hoặc thăm trực tràng</b> gợi ý tổn thương tạng rỗng.",
        "Vị trí <b>hạ sườn trái</b> đặc biệt nguy hiểm vì nằm trong <b>vùng ngực – bụng</b>: dao có thể đồng thời tổn thương <b>cơ hoành, lách, dạ dày và đại tràng</b>. Tổn thương cơ hoành nếu bỏ sót sẽ dẫn tới thoát vị hoành muộn và nghẹt tạng nhiều năm sau. Trước mổ cần kháng sinh dự phòng và tiêm phòng uốn ván; <b>không được đẩy tạng lòi ra trở lại</b> mà phải phủ gạc ẩm vô khuẩn."
      ],
      wrongs: {
        1: "Thăm dò vết thương tại giường là kỹ thuật dùng cho bệnh nhân <b>không có triệu chứng, bụng mềm và huyết động ổn định</b>, nhằm quyết định có cần theo dõi hay không. Ở bệnh nhân đã có viêm phúc mạc và lòi tạng, nó vô nghĩa và có thể gây chảy máu thêm.",
        2: "Cắt lớp và theo dõi bảo tồn chỉ áp dụng cho vết thương do vật sắc nhọn ở bệnh nhân <b>ổn định, bụng mềm, không lòi tạng</b>. Bệnh nhân này không đủ tiêu chuẩn nào và trì hoãn sẽ dẫn tới viêm phúc mạc phân, nhiễm khuẩn huyết.",
        3: "Đẩy tạng lòi ra trở vào rồi khâu kín là sai lầm nghiêm trọng: nó đưa mô đã nhiễm bẩn vào ổ bụng và <b>che giấu tổn thương tạng bên trong</b> mà không hề xử lý.",
        4: "Nội soi ổ bụng có vai trò ở bệnh nhân <b>ổn định</b> để đánh giá tổn thương cơ hoành, nhưng không phù hợp khi đã có viêm phúc mạc rõ — lúc đó cần mở bụng để xử lý triệt để."
      },
      objective:
        "Vết thương bụng do vật sắc nhọn cần mở bụng ngay khi có huyết động không ổn định, viêm phúc mạc, lòi tạng, vết thương do đạn xuyên phúc mạc, hơi tự do hoặc máu qua sonde dạ dày. Vết thương hạ sườn trái nằm trong vùng ngực – bụng nên phải đánh giá tổn thương cơ hoành, lách, dạ dày và đại tràng."
    },

    {
      spec: "Tiết niệu",
      task: "Bước xử trí tiếp theo",
      short: "Đau bìu đột ngột dữ dội ở thiếu niên",
      vignette: [
        "Nam 15 tuổi được đưa vào cấp cứu vì <b>đau bìu trái khởi phát đột ngột dữ dội</b> cách đây 3 giờ khi đang ngủ, kèm buồn nôn và nôn hai lần.",
        "Bệnh nhân không sốt, <b>không tiểu buốt, không tiểu rắt, không chảy dịch niệu đạo</b>. Không tiền sử chấn thương, chưa quan hệ tình dục.",
        "Khám: bìu trái sưng nề, đỏ. <b>Tinh hoàn trái nằm cao hơn bên phải và nằm ngang</b>, ấn rất đau lan tỏa toàn bộ tinh hoàn. <b>Phản xạ da bìu bên trái mất</b>. <b>Nâng cao tinh hoàn không làm giảm đau mà còn tăng thêm.</b>",
        "Tinh hoàn phải bình thường. Không có thoát vị bẹn, không có khối bất thường vùng bẹn."
      ],
      vitals: [
        ["Nhiệt độ", "36,9 °C"],
        ["Huyết áp", "124/74"],
        ["Mạch", "104 l/ph"],
        ["Nhịp thở", "20 l/ph"],
        ["SpO2", "99% khí trời"]
      ],
      labs: {
        title: "Xét nghiệm",
        rows: [
          ["Bạch cầu", "11.400/mm³", "4.000–11.000", "hi"],
          ["Tổng phân tích nước tiểu", "Bình thường, không bạch cầu, không nitrit", "—", ""],
          ["CRP", "8 mg/L", "< 5", "hi"],
          ["Siêu âm Doppler bìu", "Đang chờ máy, dự kiến 60 phút nữa", "—", ""]
        ]
      },
      stem: "Bước xử trí tiếp theo tốt nhất là gì?",
      choices: [
        "Chuyển mổ thăm dò bìu cấp cứu ngay, không chờ siêu âm",
        "Chờ siêu âm Doppler bìu rồi mới quyết định",
        "Bắt đầu ceftriaxone và doxycycline điều trị viêm mào tinh hoàn",
        "Cho giảm đau, nâng cao bìu và hẹn khám tiết niệu ngày mai",
        "Chụp cắt lớp bụng chậu tìm nguyên nhân đau lan"
      ],
      answer: 0,
      why: [
        "Đây là <b>xoắn tinh hoàn</b> — cấp cứu tiết niệu tính bằng giờ. Bệnh cảnh rất điển hình: <b>đau bìu khởi phát đột ngột dữ dội</b> ở thiếu niên, kèm buồn nôn và nôn, <b>tinh hoàn nằm cao và nằm ngang</b>, <b>mất phản xạ da bìu</b>, và <b>dấu Prehn âm tính</b> — nâng tinh hoàn không đỡ đau.",
        "<b>Thời gian quyết định khả năng cứu tinh hoàn</b>: tỉ lệ bảo tồn khoảng <b>90–100% nếu mổ trong 6 giờ đầu</b>, giảm mạnh còn khoảng 50% ở 12 giờ và gần như bằng không sau 24 giờ. Bệnh nhân đang ở giờ thứ 3 — trong cửa sổ vàng, nên mỗi phút đều quý.",
        "Vì vậy: <b>khi lâm sàng đã rất gợi ý thì mổ thăm dò ngay, không chờ hình ảnh</b>. Siêu âm Doppler có ích khi chẩn đoán còn nghi ngờ, nhưng nó <b>không loại trừ được xoắn</b> — xoắn không hoàn toàn hoặc xoắn rồi tự tháo vẫn có thể còn tín hiệu dòng chảy. Trong mổ, sau khi tháo xoắn cần <b>cố định cả hai tinh hoàn</b>, vì bất thường giải phẫu kiểu quả lắc chuông thường có ở cả hai bên."
      ],
      wrongs: {
        1: "Chờ 60 phút để siêu âm là mất một phần cửa sổ cứu tinh hoàn, trong khi kết quả âm tính cũng không đủ tin cậy để loại trừ chẩn đoán.",
        2: "Viêm mào tinh hoàn thường khởi phát <b>từ từ</b>, có tiểu buốt hoặc chảy dịch niệu đạo, sốt, bạch cầu trong nước tiểu, <b>phản xạ da bìu còn</b> và <b>dấu Prehn dương tính</b> — nâng tinh hoàn thì đỡ đau. Ở đây mọi dấu hiệu đều ngược lại và nước tiểu bình thường.",
        3: "Trì hoãn tới hôm sau đồng nghĩa với mất tinh hoàn. Đau bìu cấp ở thiếu niên phải được xem là xoắn tinh hoàn cho tới khi chứng minh ngược lại.",
        4: "Cắt lớp gây nhiễm xạ vùng sinh dục ở người trẻ và không có vai trò trong chẩn đoán xoắn tinh hoàn; nó chỉ làm chậm mổ."
      },
      objective:
        "Xoắn tinh hoàn biểu hiện bằng đau bìu khởi phát đột ngột kèm nôn, tinh hoàn nằm cao và ngang, mất phản xạ da bìu và dấu Prehn âm tính. Tỉ lệ cứu được tinh hoàn phụ thuộc thời gian nên phải mổ thăm dò ngay khi lâm sàng gợi ý, không chờ siêu âm vì Doppler còn tín hiệu không loại trừ được chẩn đoán."
    },

    {
      spec: "Tiết niệu",
      task: "Bước xử trí tiếp theo",
      short: "Sỏi niệu quản tắc nghẽn kèm nhiễm khuẩn",
      vignette: [
        "Nam 52 tuổi vào cấp cứu vì <b>đau quặn hông lưng phải dữ dội từng cơn lan xuống bẹn</b> trong 12 giờ, kèm buồn nôn và nôn. Bệnh nhân không nằm yên được, liên tục thay đổi tư thế.",
        "Từ 6 giờ nay bệnh nhân <b>sốt cao rét run</b> và bắt đầu <b>lơ mơ, nói lẫn</b>.",
        "Khám: bệnh nhân lú lẫn nhẹ, da nóng ẩm. <b>Đau chói khi vỗ hố thắt lưng phải</b>. Bụng mềm, không phản ứng thành bụng. Lượng nước tiểu giảm rõ.",
        "Chụp cắt lớp không cản quang: <b>sỏi niệu quản phải đoạn 1/3 trên, kích thước 9 mm, gây giãn đài bể thận phải độ III và phù nề mỡ quanh thận</b>. Thận trái bình thường."
      ],
      vitals: [
        ["Nhiệt độ", "39,4 °C"],
        ["Huyết áp", "84/50"],
        ["Mạch", "128 l/ph"],
        ["Nhịp thở", "26 l/ph"],
        ["SpO2", "95% khí trời"]
      ],
      labs: {
        title: "Xét nghiệm",
        rows: [
          ["Bạch cầu", "22.100/mm³", "4.000–11.000", "hi"],
          ["Lactat", "4,2 mmol/L", "0,5–2,2", "hi"],
          ["Creatinine (nền 1,0)", "2,6 mg/dL", "0,6–1,2", "hi"],
          ["Tiểu cầu", "102.000/mm³", "150.000–400.000", "lo"],
          ["Nước tiểu", "Bạch cầu nhiều, nitrit dương tính, pH 7,6", "—", "hi"],
          ["Cấy máu", "Đã lấy, đang chờ", "—", ""]
        ]
      },
      stem: "Ngoài hồi sức dịch và kháng sinh tĩnh mạch, bước xử trí quan trọng nhất là gì?",
      choices: [
        "Dẫn lưu đường tiết niệu cấp cứu bằng đặt sonde JJ hoặc mở thận ra da",
        "Tán sỏi ngoài cơ thể ngay trong hôm nay",
        "Nội soi niệu quản tán sỏi lấy sỏi ngay lập tức",
        "Cho thuốc giãn cơ trơn tamsulosin và chờ sỏi tự ra",
        "Chỉ tiếp tục kháng sinh và giảm đau, đánh giá lại sau 48 giờ"
      ],
      answer: 0,
      why: [
        "Đây là <b>thận ứ mủ do sỏi tắc nghẽn</b> — nhiễm khuẩn trong một hệ thống đường tiết niệu bị tắc, và bệnh nhân đã có <b>sốc nhiễm khuẩn</b> với tụt huyết áp, lactat tăng, suy thận và giảm tiểu cầu.",
        "Nguyên tắc quyết định: <b>ổ nhiễm khuẩn bị tắc nghẽn không thể được kiểm soát bằng kháng sinh đơn thuần</b>. Kháng sinh không đạt được nồng độ hiệu quả trong hệ thống ứ đọng phía trên chỗ tắc, và áp lực trong đài bể thận còn đẩy vi khuẩn cùng độc tố vào máu. Đây hoàn toàn tương tự nguyên lý của viêm đường mật do sỏi kẹt.",
        "Vì vậy phải <b>dẫn lưu cấp cứu</b> — đặt <b>sonde JJ</b> ngược dòng qua nội soi hoặc <b>mở thận ra da</b> qua da, hai phương pháp hiệu quả tương đương. Đây là biện pháp <b>giải áp tạm thời</b>: sỏi <b>không được xử lý trong lúc này</b>, mà chỉ lấy sau khi bệnh nhân đã hết nhiễm khuẩn và ổn định, thường sau vài tuần. Chi tiết pH nước tiểu 7,6 gợi ý sỏi struvite do vi khuẩn tách ure — loại sỏi luôn đi kèm nhiễm khuẩn."
      ],
      wrongs: {
        1: "Tán sỏi ngoài cơ thể <b>chống chỉ định khi đang nhiễm khuẩn tiết niệu</b>: nó làm vỡ sỏi và giải phóng ồ ạt vi khuẩn cùng nội độc tố vào máu, có thể gây sốc nhiễm khuẩn nặng thêm.",
        2: "Can thiệp lấy sỏi trong giai đoạn nhiễm khuẩn cấp làm kéo dài thủ thuật, tăng áp lực trong đường tiết niệu do bơm rửa và có nguy cơ đẩy vi khuẩn vào máu. Mục tiêu lúc này chỉ là <b>giải áp</b>.",
        3: "Điều trị tống sỏi bằng thuốc chỉ dành cho <b>sỏi nhỏ dưới 10 mm ở bệnh nhân không nhiễm khuẩn, không suy thận và kiểm soát được đau</b>. Bệnh nhân này đang sốc nhiễm khuẩn — chờ đợi là để bệnh nhân tử vong.",
        4: "Kháng sinh đơn thuần thất bại khi ổ nhiễm khuẩn còn bị tắc. Trì hoãn 48 giờ trong bệnh cảnh thận ứ mủ có sốc là chậm trễ chết người."
      },
      objective:
        "Sỏi niệu quản gây tắc nghẽn kèm nhiễm khuẩn và sốc là thận ứ mủ, cần dẫn lưu cấp cứu bằng sonde JJ hoặc mở thận ra da vì kháng sinh không kiểm soát được ổ nhiễm khuẩn bị tắc. Sỏi chỉ được xử lý sau khi bệnh nhân hết nhiễm khuẩn; tán sỏi trong giai đoạn cấp là chống chỉ định."
    },

    {
      spec: "Ngộ độc",
      task: "Bước xử trí tiếp theo",
      short: "QRS giãn rộng sau uống thuốc chống trầm cảm",
      vignette: [
        "Nữ 28 tuổi được đưa vào cấp cứu 90 phút sau khi <b>uống một lượng lớn amitriptyline</b> của mẹ với ý định tự tử. Vỏ thuốc rỗng được tìm thấy cạnh bệnh nhân.",
        "Bệnh nhân ban đầu còn nói được, sau đó <b>lơ mơ nhanh và lên một cơn co giật toàn thể</b> tại phòng cấp cứu.",
        "Khám: lơ mơ, <b>đồng tử giãn hai bên</b>, <b>da khô đỏ, niêm mạc miệng khô</b>, <b>bí tiểu với cầu bàng quang căng</b>, nhu động ruột giảm. Nhiệt độ hơi tăng.",
        "Điện tâm đồ: nhịp nhanh xoang 132 lần/phút, <b>QRS giãn rộng 148 ms</b>, <b>sóng R cao ở aVR</b>, trục điện tim lệch phải ở phần cuối QRS. Huyết áp tụt dần."
      ],
      vitals: [
        ["Nhiệt độ", "38,0 °C"],
        ["Huyết áp", "84/50"],
        ["Mạch", "132 l/ph"],
        ["Nhịp thở", "20 l/ph"],
        ["SpO2", "96% với oxy mask"]
      ],
      labs: {
        title: "Xét nghiệm",
        rows: [
          ["pH máu động mạch", "7,28", "7,35–7,45", "lo"],
          ["Bicarbonat", "17 mEq/L", "22–28", "lo"],
          ["Kali", "3,4 mEq/L", "3,5–5,0", "lo"],
          ["Lactat", "3,8 mmol/L", "0,5–2,2", "hi"],
          ["Paracetamol và salicylat", "Âm tính", "—", ""],
          ["Đường huyết", "104 mg/dL", "70–100", "hi"]
        ]
      },
      stem: "Bước xử trí tiếp theo tốt nhất là gì?",
      choices: [
        "Truyền natri bicarbonat ưu trương tĩnh mạch",
        "Tiêm flumazenil tĩnh mạch",
        "Truyền amiodarone để xử trí loạn nhịp",
        "Sốc điện chuyển nhịp đồng bộ ngay",
        "Truyền physostigmine để đảo ngược hội chứng kháng cholinergic"
      ],
      answer: 0,
      why: [
        "Đây là <b>ngộ độc thuốc chống trầm cảm ba vòng</b>. Bệnh cảnh gồm ba nhóm biểu hiện: <b>hội chứng kháng cholinergic</b> (đồng tử giãn, da khô đỏ, niêm mạc khô, bí tiểu, giảm nhu động ruột, sốt nhẹ), <b>độc tính thần kinh trung ương</b> (lơ mơ, co giật), và quan trọng nhất là <b>độc tính tim mạch</b>.",
        "Độc tính tim mạch do thuốc <b>chẹn kênh natri nhanh</b> ở cơ tim, làm chậm khử cực pha 0 và <b>giãn rộng QRS</b>. Hai dấu hiệu điện tâm đồ tiên đoán biến cố nặng: <b>QRS trên 100 ms</b> báo hiệu nguy cơ co giật, và <b>QRS trên 160 ms</b> báo hiệu nguy cơ loạn nhịp thất. <b>Sóng R cao ở aVR</b> cùng trục lệch phải phần cuối QRS là dấu hiệu đặc trưng.",
        "<b>Natri bicarbonat ưu trương là điều trị đặc hiệu</b>, tác dụng qua hai cơ chế bổ trợ nhau: <b>tải natri</b> làm tăng chênh nồng độ natri qua màng, khắc phục tình trạng kênh bị chẹn; và <b>kiềm hóa máu</b> tới pH mục tiêu 7,45–7,55 làm giảm tỉ lệ thuốc ở dạng gắn kênh. Chỉ định là <b>QRS trên 100 ms</b>, loạn nhịp thất hoặc tụt huyết áp. Cần theo dõi điện tâm đồ liên tục và kali máu vì kiềm hóa gây hạ kali."
      ],
      wrongs: {
        1: "Flumazenil đối kháng benzodiazepine, không có tác dụng với thuốc chống trầm cảm ba vòng, và <b>đặc biệt nguy hiểm</b> ở đây vì nó hạ ngưỡng co giật ở bệnh nhân vốn đã co giật.",
        2: "Thuốc chống loạn nhịp nhóm IA và IC <b>chống chỉ định</b> vì chúng cũng chẹn kênh natri, làm QRS giãn thêm. Amiodarone cũng bị tránh vì gây tụt huyết áp và kéo dài QT. Thuốc lựa chọn cho loạn nhịp thất kháng trị ở đây là magnesium hoặc lidocain.",
        3: "Sốc điện dành cho loạn nhịp thất có rối loạn huyết động. Bệnh nhân đang <b>nhịp nhanh xoang</b>, và sốc điện không giải quyết được cơ chế chẹn kênh natri đang gây độc.",
        4: "Physostigmine <b>chống chỉ định</b> trong ngộ độc thuốc chống trầm cảm ba vòng: nó có thể gây block nhĩ thất, vô tâm thu và co giật. Nó chỉ dùng cho ngộ độc kháng cholinergic đơn thuần."
      },
      objective:
        "Ngộ độc thuốc chống trầm cảm ba vòng gây hội chứng kháng cholinergic, co giật và độc tính tim mạch do chẹn kênh natri với QRS giãn rộng cùng sóng R cao ở aVR. Natri bicarbonat ưu trương là điều trị đặc hiệu khi QRS trên 100 ms, loạn nhịp thất hoặc tụt huyết áp; flumazenil và physostigmine đều chống chỉ định."
    }
  ]
};
