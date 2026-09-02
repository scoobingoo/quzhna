/* ==========================================================================
   Bộ đề: Nhi khoa — 30 ca lâm sàng, trọng tâm chẩn đoán và bước xử trí tiếp theo.
   Đơn vị xét nghiệm theo hệ quy ước Hoa Kỳ, giống đề thi thật.
   ========================================================================== */
window.QUIZ_SET = {
  id: "nhi-khoa",
  eyebrow: "USMLE Step 2 CK · Nhi khoa",
  title: "Nhi khoa",
  blurb: "30 ca nhi khoa từ sơ sinh tới tuổi học đường. Trọng tâm: chẩn đoán và bước xử trí tiếp theo tốt nhất — chọn đáp án trước, giải thích hiện sau.",

  cases: [
    {
      spec: "Hô hấp nhi",
      task: "Bước xử trí tiếp theo",
      short: "Ho ông ổng và thở rít ở trẻ 2 tuổi",
      vignette: [
        "Bé trai 2 tuổi được đưa vào cấp cứu lúc 2 giờ sáng vì <b>ho ông ổng như tiếng chó sủa</b> và khàn tiếng. Ba ngày trước bé chảy mũi trong, sốt nhẹ và hắt hơi. Triệu chứng nặng lên rõ rệt về đêm.",
        "Khám: bé tỉnh, quấy khóc nhưng dỗ được, <b>thở rít thì hít vào nghe rõ ngay cả khi bé nằm yên</b>, co kéo hõm ức và khoang liên sườn mức độ vừa. Không chảy nước dãi, bé vẫn uống được nước, không tư thế ngồi chồm ra trước, không đau họng dữ dội.",
        "Phổi thông khí đều hai bên, không ran, không khò khè thì thở ra. Bé đã tiêm chủng đầy đủ theo lịch, gồm cả vắc-xin <i>Haemophilus influenzae</i> týp b."
      ],
      vitals: [
        ["Nhiệt độ", "38,0 °C"],
        ["Mạch", "148 l/ph"],
        ["Nhịp thở", "42 l/ph"],
        ["SpO2", "95% khí trời"],
        ["Cân nặng", "12 kg"]
      ],
      stem: "Bước xử trí tiếp theo tốt nhất là gì?",
      choices: [
        "Tiêm hoặc uống dexamethasone một liều và khí dung epinephrine",
        "Đặt nội khí quản dự phòng tại phòng mổ",
        "Khí dung salbutamol và tiêm kháng sinh tĩnh mạch",
        "Chụp X-quang cổ nghiêng trước khi điều trị",
        "Cho về nhà, dặn xông hơi ẩm và theo dõi"
      ],
      answer: 0,
      why: [
        "Đây là <b>viêm thanh khí phế quản cấp</b>, thường gọi là croup, do virus á cúm gây phù nề vùng dưới thanh môn. Bộ triệu chứng rất đặc trưng: <b>ho ông ổng</b>, <b>khàn tiếng</b>, <b>thở rít thì hít vào</b>, khởi phát sau vài ngày viêm hô hấp trên và nặng lên về đêm.",
        "Bé có <b>thở rít khi nằm yên và co kéo mức độ vừa</b>, tức croup <b>mức độ trung bình</b>. Điều trị gồm hai thuốc: <b>dexamethasone</b> một liều duy nhất cho <b>mọi mức độ</b>, kể cả nhẹ, vì nó giảm phù nề, giảm tỉ lệ nhập viện và giảm tái khám; và <b>epinephrine khí dung</b> khi có thở rít lúc nghỉ, cho tác dụng co mạch làm giảm phù nề trong vòng 10–30 phút.",
        "Sau khi khí dung epinephrine, bé cần được <b>theo dõi ít nhất 2–4 giờ</b> vì tác dụng có thể hết và triệu chứng quay lại. Điểm phân biệt quan trọng với <b>viêm nắp thanh quản</b>: bệnh đó khởi phát <b>đột ngột trong vài giờ</b>, sốt rất cao, <b>chảy nước dãi</b>, <b>nuốt đau không nuốt được</b>, trẻ ngồi chồm ra trước ở tư thế kiềng ba chân và trông rất nhiễm độc — không có dấu hiệu nào trong số đó ở đây."
      ],
      wrongs: {
        1: "Đặt nội khí quản dự phòng tại phòng mổ là xử trí của <b>viêm nắp thanh quản</b>, nơi đường thở có thể tắc hoàn toàn bất cứ lúc nào. Bé này không có dấu hiệu nào của bệnh đó và đáp ứng tốt với điều trị nội khoa.",
        2: "Salbutamol tác dụng lên phế quản nhỏ, trong khi tắc nghẽn ở đây nằm <b>ngoài lồng ngực, tại vùng dưới thanh môn</b> — thể hiện bằng thở rít thì hít vào chứ không phải khò khè thì thở ra. Croup do virus nên kháng sinh cũng vô ích.",
        3: "X-quang cổ có thể thấy dấu hiệu tháp nhọn nhưng <b>không cần thiết</b> khi lâm sàng đã điển hình, và trì hoãn điều trị cũng như làm trẻ quấy khóc chỉ khiến tắc nghẽn nặng thêm.",
        4: "Xông hơi ẩm <b>không có bằng chứng hiệu quả</b> trong các thử nghiệm lâm sàng. Cho một trẻ đang thở rít lúc nghỉ về nhà mà chưa dùng corticoid là bỏ sót điều trị nền tảng."
      },
      objective:
        "Croup biểu hiện bằng ho ông ổng, khàn tiếng và thở rít thì hít vào sau vài ngày viêm hô hấp trên. Dexamethasone một liều được dùng cho mọi mức độ, và thêm epinephrine khí dung khi có thở rít lúc nghỉ, sau đó theo dõi 2–4 giờ vì triệu chứng có thể tái phát."
    },

    {
      spec: "Hô hấp nhi",
      task: "Bước xử trí tiếp theo",
      short: "Sốt cao, chảy dãi và tư thế kiềng ba chân",
      vignette: [
        "Bé gái 4 tuổi được đưa vào cấp cứu vì <b>sốt cao và đau họng dữ dội khởi phát đột ngột trong 6 giờ</b>. Bé không chịu nuốt, <b>chảy nước dãi liên tục ra khỏi miệng</b>, giọng nói nghẹt như ngậm khoai nóng.",
        "Bé <b>ngồi chồm về phía trước, chống hai tay, cổ ngửa và cằm đẩy ra trước</b>, từ chối nằm xuống. Bé trông rất mệt mỏi, vẻ nhiễm độc rõ. Không ho ông ổng, không khàn tiếng kiểu croup.",
        "Gia đình <b>từ chối tiêm chủng</b>, bé chưa tiêm mũi nào.",
        "Khi bác sĩ định dùng đè lưỡi để khám họng, bé kích động mạnh và tiếng thở rít tăng lên rõ rệt."
      ],
      vitals: [
        ["Nhiệt độ", "39,6 °C"],
        ["Mạch", "162 l/ph"],
        ["Nhịp thở", "38 l/ph"],
        ["SpO2", "93% khí trời"],
        ["Cân nặng", "16 kg"]
      ],
      stem: "Bước xử trí tiếp theo tốt nhất là gì?",
      choices: [
        "Đưa bé lên phòng mổ để kiểm soát đường thở với ê kíp gây mê và tai mũi họng sẵn sàng",
        "Dùng đè lưỡi khám họng kỹ để xác định chẩn đoán",
        "Chụp X-quang cổ nghiêng tại khoa X-quang",
        "Khí dung epinephrine và tiêm dexamethasone rồi theo dõi",
        "Lấy máu xét nghiệm và đặt đường truyền tĩnh mạch ngay tại giường"
      ],
      answer: 0,
      why: [
        "Đây là <b>viêm nắp thanh quản</b> cấp. Bốn dấu hiệu kinh điển đều có mặt và thường được nhớ bằng chữ D: <b>khó nuốt</b>, <b>chảy dãi</b>, <b>giọng nghẹt</b>, và <b>suy hô hấp</b>. Cùng với đó là khởi phát <b>đột ngột trong vài giờ</b>, sốt rất cao, vẻ nhiễm độc và <b>tư thế kiềng ba chân</b> — tư thế bé tự chọn để mở tối đa đường thở.",
        "Trẻ <b>chưa tiêm vắc-xin <i>Haemophilus influenzae</i> týp b</b> là manh mối dịch tễ quyết định; đây từng là tác nhân chính và bệnh gần như biến mất ở cộng đồng tiêm chủng đầy đủ.",
        "Nguyên tắc sống còn: <b>đường thở có thể tắc hoàn toàn trong vài phút</b>, và <b>mọi thao tác làm trẻ kích động đều có thể kích hoạt co thắt và tắc nghẽn</b>. Vì vậy ưu tiên tuyệt đối là <b>giữ trẻ yên, để trẻ ở tư thế tự chọn, cho ngồi trong lòng bố mẹ</b>, và <b>đưa lên phòng mổ để kiểm soát đường thở</b> với ê kíp gây mê và tai mũi họng sẵn sàng mở khí quản nếu đặt ống thất bại. Chỉ sau khi đường thở đã an toàn mới lấy máu, cấy máu và dùng kháng sinh như ceftriaxone."
      ],
      wrongs: {
        1: "Dùng đè lưỡi khám họng là <b>chống chỉ định tuyệt đối</b> khi nghi viêm nắp thanh quản: kích thích vùng hầu họng có thể gây co thắt thanh quản và tắc đường thở hoàn toàn ngay tại giường.",
        2: "X-quang cổ nghiêng có thể thấy dấu hiệu ngón tay cái, nhưng đưa trẻ ra khoa X-quang là <b>tách trẻ khỏi nơi có thể cấp cứu đường thở</b>, đồng thời tư thế nằm chụp phim có thể làm tắc nghẽn nặng thêm. Chẩn đoán ở đây đã đủ rõ trên lâm sàng.",
        3: "Epinephrine và dexamethasone là điều trị của croup. Chúng không giải quyết được tình trạng nắp thanh quản sưng nề do nhiễm khuẩn, và dựa vào chúng sẽ trì hoãn việc bảo vệ đường thở.",
        4: "Đặt đường truyền và lấy máu làm trẻ khóc và kích động — chính điều cần tránh nhất. Mọi thủ thuật gây khó chịu phải hoãn lại cho tới khi đường thở được kiểm soát."
      },
      objective:
        "Viêm nắp thanh quản biểu hiện bằng sốt cao khởi phát đột ngột, khó nuốt, chảy dãi, giọng nghẹt và tư thế kiềng ba chân, đặc biệt ở trẻ chưa tiêm vắc-xin Hib. Ưu tiên là giữ trẻ yên và kiểm soát đường thở tại phòng mổ; tuyệt đối không dùng đè lưỡi khám họng hay đưa trẻ đi chụp phim."
    },

    {
      spec: "Tiêu hóa nhi",
      task: "Bước xử trí tiếp theo",
      short: "Khóc từng cơn co chân và phân máu nhầy ở trẻ 9 tháng",
      vignette: [
        "Bé trai 9 tháng tuổi được đưa vào viện vì <b>khóc thét từng cơn, mỗi cơn kéo dài 2–3 phút, cách nhau 15–20 phút</b> trong 10 giờ qua. Trong cơn bé <b>co gập hai chân lên bụng</b>, mặt tái đi; giữa các cơn bé nằm im, lừ đừ, trông mệt.",
        "Bé nôn nhiều lần, ban đầu ra sữa sau đó có dịch vàng. Cách đây 20 phút bé đi ngoài ra <b>phân nhầy lẫn máu màu đỏ sẫm như thạch nho</b>.",
        "Một tuần trước bé bị viêm hô hấp trên do virus, nay đã đỡ.",
        "Khám: bụng mềm nhưng sờ thấy <b>khối hình xúc xích ở hạ sườn phải</b>, hố chậu phải có cảm giác trống rỗng. Không có phản ứng thành bụng, không chướng nhiều."
      ],
      vitals: [
        ["Nhiệt độ", "37,6 °C"],
        ["Mạch", "158 l/ph"],
        ["Nhịp thở", "36 l/ph"],
        ["Huyết áp", "88/52"],
        ["Cân nặng", "8,6 kg"]
      ],
      labs: {
        title: "Xét nghiệm",
        rows: [
          ["Bạch cầu", "14.200/mm³", "6.000–17.000", ""],
          ["Hemoglobin", "10,8 g/dL", "10,5–13,5", ""],
          ["Natri", "136 mEq/L", "135–145", ""],
          ["Bicarbonat", "19 mEq/L", "22–28", "lo"],
          ["Siêu âm bụng", "Hình bia bắn ở hạ sườn phải", "—", "hi"]
        ]
      },
      stem: "Bước xử trí tiếp theo tốt nhất là gì?",
      choices: [
        "Bù dịch, đặt sonde dạ dày rồi tháo lồng bằng hơi hoặc nước dưới hướng dẫn hình ảnh",
        "Mổ mở bụng cấp cứu để tháo lồng bằng tay",
        "Nội soi đại tràng để đánh giá tổn thương niêm mạc",
        "Chụp cắt lớp bụng có cản quang",
        "Theo dõi 24 giờ vì lồng ruột thường tự tháo"
      ],
      answer: 0,
      why: [
        "Đây là <b>lồng ruột</b>, thường gặp nhất ở trẻ <b>6 tháng đến 2 tuổi</b>. Bộ triệu chứng kinh điển đã đầy đủ: <b>đau bụng từng cơn kịch phát</b> khiến trẻ co chân lên bụng, <b>nôn</b>, <b>phân nhầy máu như thạch nho</b>, cùng <b>khối hình xúc xích</b> khi khám bụng. Siêu âm cho hình ảnh <b>bia bắn</b> trên mặt cắt ngang.",
        "Ở lứa tuổi này lồng ruột thường <b>không có điểm dẫn đầu bệnh lý</b> mà do <b>phì đại mảng Peyer</b> sau nhiễm virus — đúng như tiền sử viêm hô hấp trên một tuần trước.",
        "Xử trí là <b>tháo lồng bằng hơi hoặc dịch dưới hướng dẫn X-quang hay siêu âm</b>, vừa chẩn đoán vừa điều trị, với tỉ lệ thành công khoảng 80–90%. Trước thủ thuật cần <b>bù dịch, đặt sonde dạ dày và báo ê kíp ngoại nhi</b> vì có nguy cơ thủng ruột. Chống chỉ định của tháo lồng không phẫu thuật là <b>thủng ruột, viêm phúc mạc hoặc sốc</b> — bé này không có dấu hiệu nào, bụng mềm và không có phản ứng thành bụng. Cần dặn gia đình vì lồng ruột <b>tái phát khoảng 10%</b>, thường trong 72 giờ đầu."
      ],
      wrongs: {
        1: "Phẫu thuật dành cho trường hợp tháo lồng bằng hơi <b>thất bại</b>, hoặc khi có thủng, viêm phúc mạc, sốc, hoặc nghi có điểm dẫn đầu bệnh lý như túi thừa Meckel hay u lympho. Mổ ngay khi chưa thử tháo lồng là xâm lấn không cần thiết.",
        2: "Nội soi đại tràng không có vai trò chẩn đoán hay điều trị lồng ruột cấp ở trẻ nhỏ, cần gây mê và có nguy cơ thủng ruột đã bị tổn thương.",
        3: "Cắt lớp vi tính gây nhiễm xạ đáng kể cho trẻ nhỏ trong khi <b>siêu âm đã cho chẩn đoán xác định</b> với độ nhạy và độ đặc hiệu rất cao. Chụp thêm chỉ làm chậm điều trị.",
        4: "Một số ít trường hợp tự tháo, nhưng chờ đợi có nguy cơ <b>hoại tử ruột, thủng và viêm phúc mạc</b>. Bé đã có triệu chứng 10 giờ, đi ngoài phân máu và toan chuyển hóa nhẹ — không thể trì hoãn."
      },
      objective:
        "Lồng ruột ở trẻ 6 tháng đến 2 tuổi biểu hiện bằng đau bụng từng cơn, nôn, phân nhầy máu như thạch nho và khối hình xúc xích, với hình ảnh bia bắn trên siêu âm. Điều trị đầu tay là tháo lồng bằng hơi hoặc dịch dưới hướng dẫn hình ảnh, trừ khi có thủng, viêm phúc mạc hoặc sốc."
    },

    {
      spec: "Tiêu hóa nhi",
      task: "Bước xử trí tiếp theo",
      short: "Nôn vọt sau bú ở trẻ 5 tuần tuổi",
      vignette: [
        "Bé trai 5 tuần tuổi, con so, được đưa vào viện vì <b>nôn vọt thành tia ngay sau mỗi cữ bú</b> trong 10 ngày, tăng dần cả về tần suất lẫn lượng. <b>Chất nôn là sữa không lẫn mật</b>.",
        "Đặc điểm nổi bật là bé <b>đói ngay sau khi nôn và đòi bú tiếp một cách háo hức</b>. Bé đi tiểu ít hơn, phân ít và khô.",
        "Bé sinh đủ tháng, cân nặng lúc sinh 3,4 kg; hiện cân nặng <b>3,3 kg</b> — không tăng cân và có phần sụt.",
        "Khám: bé lừ đừ, thóp trước lõm, niêm mạc khô, dấu véo da mất chậm. Bụng mềm, không chướng; sau khi bé bú thấy <b>sóng nhu động dạ dày đi từ trái sang phải ở thượng vị</b> và sờ được <b>khối chắc hình quả ô liu ở thượng vị bên phải</b>."
      ],
      vitals: [
        ["Nhiệt độ", "36,6 °C"],
        ["Mạch", "168 l/ph"],
        ["Nhịp thở", "44 l/ph"],
        ["Huyết áp", "72/44"],
        ["Cân nặng", "3,3 kg"]
      ],
      labs: {
        title: "Xét nghiệm",
        rows: [
          ["Natri", "132 mEq/L", "135–145", "lo"],
          ["Kali", "2,9 mEq/L", "3,5–5,0", "lo"],
          ["Clorid", "88 mEq/L", "98–106", "lo"],
          ["Bicarbonat", "34 mEq/L", "22–28", "hi"],
          ["pH máu", "7,52", "7,35–7,45", "hi"],
          ["Siêu âm môn vị", "Cơ dày 5 mm, ống môn vị dài 19 mm", "—", "hi"]
        ]
      },
      stem: "Bước xử trí tiếp theo tốt nhất là gì?",
      choices: [
        "Bù dịch và điều chỉnh điện giải trước, phẫu thuật mở cơ môn vị sau khi ổn định",
        "Chuyển mổ mở cơ môn vị cấp cứu ngay trong giờ tới",
        "Đặt sonde dạ dày dẫn lưu và cho ăn nhỏ giọt qua sonde",
        "Bắt đầu thuốc ức chế bơm proton và sữa công thức đặc",
        "Chụp lưu thông dạ dày – tá tràng có cản quang để khẳng định chẩn đoán"
      ],
      answer: 0,
      why: [
        "Chẩn đoán là <b>hẹp phì đại môn vị</b>: trẻ trai khoảng 3–6 tuần tuổi, <b>nôn vọt không lẫn mật</b>, <b>đói ngay sau nôn</b>, không tăng cân, kèm <b>khối hình quả ô liu</b> và sóng nhu động dạ dày. Siêu âm đã khẳng định với cơ môn vị dày và ống môn vị dài.",
        "Bộ rối loạn điện giải rất đặc trưng và luôn được hỏi: <b>kiềm chuyển hóa giảm clo giảm kali</b>. Cơ chế là mất dịch vị chứa nhiều acid clohydric qua nôn kéo dài; thận cố giữ thể tích bằng cách tái hấp thu natri kèm bài tiết kali và hydro, làm kiềm máu nặng thêm — dẫn tới <b>nước tiểu toan nghịch thường</b>.",
        "Điểm quyết định của câu hỏi: <b>đây là cấp cứu nội khoa, không phải cấp cứu ngoại khoa</b>. Phẫu thuật mở cơ môn vị theo Ramstedt là điều trị triệt để nhưng <b>phải hoãn lại</b> cho tới khi bù đủ dịch và điều chỉnh điện giải, vì gây mê trên nền kiềm chuyển hóa nặng và hạ kali làm tăng nguy cơ <b>loạn nhịp và ngừng thở sau mổ</b>. Đích cần đạt trước mổ thường là clorid trên 100 mEq/L, bicarbonat dưới 30 mEq/L và kali về bình thường."
      ],
      wrongs: {
        1: "Mổ ngay khi trẻ còn kiềm chuyển hóa nặng và hạ kali là sai lầm kinh điển: kiềm máu ức chế trung tâm hô hấp gây ngừng thở sau gây mê, còn hạ kali gây loạn nhịp. Môn vị hẹp không gây thiếu máu ruột nên không cần mổ khẩn.",
        2: "Sonde dạ dày giúp giảm chướng nhưng cho ăn qua sonde không giải quyết được tắc nghẽn cơ học tại môn vị.",
        3: "Đây là tắc nghẽn <b>cơ học</b> do phì đại cơ môn vị, không phải trào ngược. Thuốc giảm tiết acid hay làm đặc sữa hoàn toàn không có tác dụng.",
        4: "Chụp lưu thông có cản quang chỉ cần khi siêu âm không kết luận được. Ở đây siêu âm đã chẩn đoán xác định, chụp thêm chỉ gây nhiễm xạ và tăng nguy cơ hít sặc."
      },
      objective:
        "Hẹp phì đại môn vị gây nôn vọt không lẫn mật ở trẻ trai 3–6 tuần tuổi, kèm kiềm chuyển hóa giảm clo giảm kali và nước tiểu toan nghịch thường. Đây là cấp cứu nội khoa: phải bù dịch và điều chỉnh điện giải trước, rồi mới mổ mở cơ môn vị."
    },

    {
      spec: "Tim mạch nhi",
      task: "Bước xử trí tiếp theo",
      short: "Sốt năm ngày kèm ban, môi nứt và bong da tay",
      vignette: [
        "Bé trai 3 tuổi được đưa vào viện vì <b>sốt cao liên tục ngày thứ sáu</b>, không đáp ứng paracetamol và ibuprofen. Bé đã dùng amoxicillin ba ngày ở phòng khám nhưng không đỡ.",
        "Khám: bé quấy khóc dữ dội, khó dỗ. <b>Kết mạc hai mắt đỏ sung huyết nhưng không có mủ hay ghèn</b>. <b>Môi đỏ, nứt nẻ, rỉ máu; lưỡi đỏ nổi gai như quả dâu tây</b>. Niêm mạc họng đỏ lan tỏa, không có giả mạc, không loét.",
        "Da thân mình có <b>ban đỏ đa dạng</b> không ngứa, không phỏng nước. <b>Lòng bàn tay và bàn chân đỏ, phù nề căng bóng</b>, và hai ngày nay bắt đầu <b>bong da quanh móng tay</b>.",
        "Sờ thấy một <b>hạch cổ bên phải kích thước 2 cm</b>, chắc, hơi đau, không hóa mủ. Tim nghe nhịp nhanh đều, không tiếng thổi. Phổi trong."
      ],
      vitals: [
        ["Nhiệt độ", "39,4 °C"],
        ["Mạch", "156 l/ph"],
        ["Nhịp thở", "32 l/ph"],
        ["Huyết áp", "94/58"],
        ["Cân nặng", "14 kg"]
      ],
      labs: {
        title: "Xét nghiệm",
        rows: [
          ["Bạch cầu", "19.800/mm³", "6.000–17.000", "hi"],
          ["Tiểu cầu", "648.000/mm³", "150.000–450.000", "hi"],
          ["Tốc độ máu lắng giờ đầu", "78 mm", "< 20", "hi"],
          ["CRP", "142 mg/L", "< 5", "hi"],
          ["Albumin", "2,8 g/dL", "3,5–5,5", "lo"],
          ["ALT", "86 U/L", "10–40", "hi"],
          ["Bạch cầu niệu (cấy âm tính)", "18/vi trường", "0–5", "hi"]
        ]
      },
      stem: "Bước xử trí tiếp theo tốt nhất là gì?",
      choices: [
        "Truyền immunoglobulin tĩnh mạch liều cao kết hợp aspirin, và siêu âm tim",
        "Đổi sang kháng sinh tĩnh mạch phổ rộng và theo dõi thêm 48 giờ",
        "Tiêm corticoid liều cao đơn thuần",
        "Chỉ dùng aspirin liều chống viêm, chưa cần immunoglobulin",
        "Sinh thiết hạch cổ để loại trừ u lympho"
      ],
      answer: 0,
      why: [
        "Đây là <b>bệnh Kawasaki</b>. Tiêu chuẩn là <b>sốt từ 5 ngày trở lên</b> cộng với ít nhất <b>4 trong 5</b> dấu hiệu chính: viêm kết mạc hai bên <b>không xuất tiết</b>, thay đổi niêm mạc miệng (môi nứt, lưỡi dâu tây), ban đa dạng, thay đổi đầu chi (phù đỏ rồi bong da), và <b>hạch cổ trên 1,5 cm thường một bên</b>. Bé có đủ cả năm.",
        "Điều trị phải làm ngay: <b>immunoglobulin tĩnh mạch liều cao</b> kết hợp <b>aspirin</b>. Điểm cốt lõi là <b>thời gian</b> — dùng immunoglobulin <b>trong vòng 10 ngày đầu của sốt</b> làm giảm tỉ lệ <b>phình động mạch vành từ khoảng 25% xuống dưới 5%</b>. Bé đang ở ngày thứ sáu nên vẫn trong cửa sổ vàng.",
        "<b>Siêu âm tim</b> cần làm ngay để lấy mốc ban đầu về đường kính động mạch vành, rồi lặp lại ở tuần 2 và tuần 6–8. Aspirin dùng liều chống viêm trong giai đoạn cấp rồi giảm xuống liều chống kết tập tiểu cầu; đây là một trong số rất ít chỉ định dùng aspirin ở trẻ em, chấp nhận nguy cơ hội chứng Reye vì lợi ích vượt trội."
      ],
      wrongs: {
        1: "Bé đã dùng kháng sinh ba ngày không đáp ứng, cấy nước tiểu âm tính, và bệnh cảnh không phù hợp nhiễm khuẩn. Theo dõi thêm 48 giờ sẽ đẩy bé tới ngày thứ tám của sốt, thu hẹp nguy hiểm cửa sổ điều trị.",
        2: "Corticoid được dùng như liệu pháp <b>thêm vào</b> ở bệnh nhân nguy cơ cao hoặc kháng immunoglobulin, chứ không thay thế immunoglobulin trong điều trị ban đầu.",
        3: "Aspirin kiểm soát viêm và sốt nhưng <b>không làm giảm nguy cơ phình động mạch vành</b>. Chính immunoglobulin mới là thành phần bảo vệ mạch vành.",
        4: "Hạch trong Kawasaki là một trong các tiêu chuẩn chẩn đoán. Sinh thiết là thủ thuật xâm lấn không cần thiết và làm chậm điều trị trong khi bệnh cảnh toàn thân đã rất điển hình."
      },
      objective:
        "Bệnh Kawasaki cần sốt từ 5 ngày kèm ít nhất 4 trong 5 dấu hiệu chính, và phải điều trị bằng immunoglobulin tĩnh mạch cùng aspirin trong vòng 10 ngày đầu để giảm nguy cơ phình động mạch vành từ khoảng 25% xuống dưới 5%. Siêu âm tim làm ngay để lấy mốc rồi lặp lại ở tuần 2 và tuần 6–8."
    },

    {
      spec: "Hô hấp nhi",
      task: "Bước xử trí tiếp theo",
      short: "Khò khè lần đầu ở trẻ 5 tháng mùa đông",
      vignette: [
        "Bé gái 5 tháng tuổi được đưa vào viện giữa mùa đông vì <b>ho, khò khè và thở nhanh</b> tăng dần trong ba ngày. Khởi đầu bé chảy mũi trong và sốt nhẹ; anh trai 4 tuổi đang bị cảm lạnh.",
        "Bé bú giảm còn khoảng nửa lượng thường ngày nhưng vẫn đi tiểu đều, tã ướt bốn lần trong 12 giờ qua. Bé sinh đủ tháng, khỏe mạnh, chưa từng khò khè trước đây, không có tiền sử chàm hay dị ứng trong gia đình.",
        "Khám: bé tỉnh, chơi được khi không kích thích. Thở nhanh, <b>co kéo liên sườn nhẹ và phập phồng cánh mũi</b>. Nghe phổi: <b>khò khè lan tỏa hai phế trường kèm ran nổ mịn cuối thì hít vào</b>, thì thở ra kéo dài.",
        "Xét nghiệm nhanh dịch tỵ hầu: <b>dương tính với virus hợp bào hô hấp</b>."
      ],
      vitals: [
        ["Nhiệt độ", "37,9 °C"],
        ["Mạch", "148 l/ph"],
        ["Nhịp thở", "58 l/ph"],
        ["SpO2", "93% khí trời"],
        ["Cân nặng", "6,8 kg"]
      ],
      stem: "Bước xử trí tiếp theo tốt nhất là gì?",
      choices: [
        "Chăm sóc hỗ trợ: hút mũi, bảo đảm dinh dưỡng, thở oxy khi cần và theo dõi sát",
        "Khí dung salbutamol định kỳ mỗi 4 giờ",
        "Uống prednisolone 5 ngày",
        "Tiêm ampicillin tĩnh mạch và chụp X-quang ngực",
        "Khí dung nước muối ưu trương 3% kết hợp epinephrine định kỳ"
      ],
      answer: 0,
      why: [
        "Đây là <b>viêm tiểu phế quản</b> do virus hợp bào hô hấp: trẻ <b>dưới 2 tuổi</b>, <b>khò khè lần đầu</b> vào mùa đông, khởi đầu bằng viêm hô hấp trên, nghe phổi có <b>cả khò khè lẫn ran nổ mịn</b> lan tỏa.",
        "Điều trị là <b>hoàn toàn hỗ trợ</b>, vì không có thuốc nào rút ngắn được diễn tiến bệnh. Ba việc thực sự có ích là <b>hút mũi</b> để thông đường thở trên (trẻ nhũ nhi thở chủ yếu bằng mũi), <b>bảo đảm đủ dịch và dinh dưỡng</b> — cho bú lượng ít nhiều lần, đặt sonde dạ dày hoặc truyền dịch nếu bú kém — và <b>oxy khi SpO₂ xuống dưới ngưỡng</b>, thường là 90%.",
        "Cần biết <b>diễn tiến tự nhiên</b> để tư vấn gia đình: triệu chứng thường <b>nặng nhất vào ngày thứ 3–5</b> rồi cải thiện dần, nhưng ho có thể kéo dài 2–4 tuần. Dấu hiệu cần nhập viện gồm thở gắng sức nhiều, thiếu oxy, cơn ngừng thở, bú kém hoặc mất nước, trẻ dưới 3 tháng, sinh non hoặc có bệnh nền tim phổi."
      ],
      wrongs: {
        1: "Thuốc giãn phế quản <b>không được khuyến cáo thường quy</b>: các thử nghiệm cho thấy không rút ngắn thời gian nằm viện hay cải thiện kết cục. Tắc nghẽn ở đây do phù nề và dịch tiết trong tiểu phế quản chứ không phải co thắt cơ trơn.",
        2: "Corticoid <b>không có hiệu quả</b> trong viêm tiểu phế quản, khác hẳn với hen hay croup. Đây là điểm phân biệt hay được kiểm tra.",
        3: "Bệnh do virus đã được xác định; kháng sinh không có chỉ định. X-quang ngực thường quy cũng không được khuyến cáo vì hình ảnh xẹp phổi do nút nhầy dễ bị đọc nhầm thành viêm phổi, dẫn tới dùng kháng sinh không cần thiết.",
        4: "Nước muối ưu trương có thể có lợi ích khiêm tốn ở trẻ nằm viện dài ngày nhưng không phải điều trị chuẩn. Epinephrine khí dung chỉ cho tác dụng thoáng qua và không dùng định kỳ."
      },
      objective:
        "Viêm tiểu phế quản là khò khè lần đầu ở trẻ dưới 2 tuổi sau viêm hô hấp trên, thường do virus hợp bào hô hấp, với cả khò khè lẫn ran nổ khi nghe phổi. Điều trị hoàn toàn là hỗ trợ — hút mũi, bảo đảm dinh dưỡng, oxy khi cần — vì thuốc giãn phế quản, corticoid và kháng sinh đều không hiệu quả."
    },

    {
      spec: "Sơ sinh",
      task: "Bước xử trí tiếp theo",
      short: "Sốt ở trẻ 18 ngày tuổi",
      vignette: [
        "Bé gái <b>18 ngày tuổi</b> được mẹ đưa đến vì <b>sốt 38,4 °C đo ở hậu môn</b> tại nhà. Mẹ thấy bé <b>bú kém hơn hẳn</b> và <b>ngủ nhiều, khó đánh thức</b> trong 12 giờ qua.",
        "Bé sinh thường đủ tháng 39 tuần, cân nặng lúc sinh 3,2 kg, không có biến chứng chu sinh. Mẹ có <b>cấy liên cầu nhóm B dương tính</b> nhưng vào viện sinh quá nhanh nên <b>chỉ kịp dùng kháng sinh dự phòng 1 giờ trước sinh</b>.",
        "Khám: bé lừ đừ, trương lực cơ giảm nhẹ, thóp phẳng, da nổi vân tím nhẹ. <b>Không ho, không chảy mũi, không tiêu chảy, không ban da, không phát hiện ổ nhiễm khuẩn khu trú nào.</b> Rốn khô, sạch.",
        "Anh trai 3 tuổi ở nhà đang bị cảm lạnh."
      ],
      vitals: [
        ["Nhiệt độ", "38,4 °C (hậu môn)"],
        ["Mạch", "178 l/ph"],
        ["Nhịp thở", "62 l/ph"],
        ["Huyết áp", "64/38"],
        ["SpO2", "96% khí trời"]
      ],
      labs: {
        title: "Xét nghiệm ban đầu",
        rows: [
          ["Bạch cầu", "4.200/mm³", "9.000–30.000 ở tuổi này", "lo"],
          ["Bạch cầu non trên tổng bạch cầu hạt", "0,26", "< 0,2", "hi"],
          ["CRP", "48 mg/L", "< 5", "hi"],
          ["Procalcitonin", "3,2 ng/mL", "< 0,5", "hi"],
          ["Glucose", "58 mg/dL", "70–100", "lo"]
        ]
      },
      stem: "Bước xử trí tiếp theo tốt nhất là gì?",
      choices: [
        "Cấy máu, cấy nước tiểu và chọc dịch não tủy, rồi dùng kháng sinh tĩnh mạch và nhập viện",
        "Cấy nước tiểu, tiêm một liều ceftriaxone và cho về theo dõi ngoại trú",
        "Xét nghiệm virus đường hô hấp và điều trị triệu chứng vì anh trai đang cảm lạnh",
        "Cho paracetamol hạ sốt và hẹn khám lại sau 24 giờ",
        "Chỉ cấy máu và chờ kết quả trước khi dùng kháng sinh"
      ],
      answer: 0,
      why: [
        "<b>Mọi trẻ dưới 28 ngày tuổi có sốt từ 38,0 °C trở lên đo ở hậu môn đều phải được đánh giá nhiễm khuẩn toàn diện, dùng kháng sinh tĩnh mạch theo kinh nghiệm và nhập viện</b> — bất kể trẻ trông có vẻ ổn hay không. Bé này còn có thêm dấu hiệu nặng: lừ đừ, bú kém, giảm trương lực cơ, hạ đường huyết.",
        "Lý do là hệ miễn dịch sơ sinh chưa trưởng thành nên nhiễm khuẩn <b>lan tràn rất nhanh</b> và <b>triệu chứng khu trú gần như không có</b>. Bạch cầu ở đây <b>giảm</b> chứ không tăng — trong nhiễm khuẩn huyết sơ sinh, giảm bạch cầu là dấu hiệu <b>nặng hơn</b> tăng bạch cầu.",
        "Đánh giá toàn diện gồm <b>cấy máu, cấy nước tiểu lấy qua sonde hoặc chọc trên xương mu, và chọc dịch não tủy</b> — chọc dịch não tủy là bắt buộc ở nhóm dưới 28 ngày. Kháng sinh theo kinh nghiệm là <b>ampicillin cộng gentamicin hoặc cefotaxime</b>: ampicillin để phủ <i>Listeria</i> và <i>Enterococcus</i>, cùng với liên cầu nhóm B và <i>E. coli</i> là các tác nhân hàng đầu. Dự phòng liên cầu nhóm B chỉ 1 giờ trước sinh là <b>không đủ</b> (cần ít nhất 4 giờ), nên nguy cơ càng cao."
      ],
      wrongs: {
        1: "Cho trẻ sơ sinh dưới 28 ngày về nhà theo dõi ngoại trú là không bao giờ chấp nhận được. Các phác đồ phân tầng nguy cơ cho phép theo dõi ngoại trú chỉ áp dụng cho trẻ lớn hơn, và ceftriaxone còn bị tránh ở sơ sinh vì đẩy bilirubin khỏi albumin gây vàng da nhân.",
        2: "Việc anh trai bị cảm lạnh không loại trừ được nhiễm khuẩn nặng, và trẻ sơ sinh có thể vừa nhiễm virus vừa nhiễm khuẩn. Bé có dấu hiệu nhiễm độc rõ cùng các chỉ số viêm tăng cao.",
        3: "Hạ sốt đơn thuần và hẹn 24 giờ ở một trẻ sơ sinh lừ đừ có thể dẫn tới sốc nhiễm khuẩn hoặc viêm màng não trong khoảng thời gian đó.",
        4: "Chờ kết quả cấy mất 24–48 giờ. Kháng sinh phải được dùng <b>ngay sau khi lấy mẫu</b>, không bao giờ chờ kết quả ở trẻ sơ sinh sốt."
      },
      objective:
        "Trẻ dưới 28 ngày tuổi sốt từ 38 °C trở lên cần cấy máu, cấy nước tiểu, chọc dịch não tủy, kháng sinh tĩnh mạch theo kinh nghiệm và nhập viện, bất kể vẻ ngoài. Ampicillin phối hợp gentamicin hoặc cefotaxime phủ liên cầu nhóm B, E. coli và Listeria; giảm bạch cầu là dấu hiệu nặng hơn tăng bạch cầu."
    },

    {
      spec: "Huyết học nhi",
      task: "Chẩn đoán nhiều khả năng nhất",
      short: "Ban xuất huyết ở chân kèm đau khớp và đau bụng",
      vignette: [
        "Bé trai 7 tuổi được đưa đến khám vì <b>ban đỏ tím nổi gồ ở hai cẳng chân và mông</b> xuất hiện năm ngày nay, <b>không ngứa</b> và <b>không mất màu khi ấn kính</b>. Ban phân bố đối xứng, tập trung ở phần thấp cơ thể.",
        "Bé còn <b>đau và sưng hai khớp cổ chân, khớp gối</b> khiến đi lại khó, kèm <b>đau bụng quặn từng cơn</b> quanh rốn. Ba tuần trước bé bị viêm họng, đã tự khỏi.",
        "Khám: bé tỉnh táo, không sốt cao. Ban dạng chấm và mảng xuất huyết gồ trên mặt da ở mặt duỗi hai chân và mông. Khớp cổ chân hai bên sưng nhẹ, đau khi vận động. Bụng mềm, ấn đau nhẹ quanh rốn, không phản ứng thành bụng, không sờ thấy khối. Không gan lách to, không hạch to.",
        "Nước tiểu hôm nay có màu hồng nhạt."
      ],
      vitals: [
        ["Nhiệt độ", "37,4 °C"],
        ["Mạch", "96 l/ph"],
        ["Nhịp thở", "22 l/ph"],
        ["Huyết áp", "112/72"],
        ["Cân nặng", "24 kg"]
      ],
      labs: {
        title: "Xét nghiệm",
        rows: [
          ["Tiểu cầu", "412.000/mm³", "150.000–450.000", ""],
          ["Bạch cầu", "12.400/mm³", "5.000–15.000", ""],
          ["Hemoglobin", "12,1 g/dL", "11,5–15,5", ""],
          ["INR", "1,0", "0,8–1,1", ""],
          ["aPTT", "30 giây", "25–35", ""],
          ["Creatinine", "0,5 mg/dL", "0,3–0,7", ""],
          ["Nước tiểu", "Hồng cầu 30/vi trường, protein 1+, trụ hồng cầu", "—", "hi"]
        ]
      },
      stem: "Chẩn đoán nhiều khả năng nhất là gì?",
      choices: [
        "Ban xuất huyết Henoch-Schönlein",
        "Xuất huyết giảm tiểu cầu miễn dịch",
        "Nhiễm khuẩn huyết do não mô cầu",
        "Hội chứng tan máu tăng ure máu",
        "Bệnh bạch cầu cấp dòng lympho"
      ],
      answer: 0,
      why: [
        "Đây là <b>ban xuất huyết Henoch-Schönlein</b> — viêm mạch máu nhỏ do lắng đọng phức hợp miễn dịch IgA, thường gặp nhất ở trẻ 3–10 tuổi và hay xuất hiện sau nhiễm khuẩn hô hấp trên.",
        "Bốn biểu hiện kinh điển đều hiện diện: <b>ban xuất huyết gồ trên mặt da</b> phân bố ở <b>chi dưới và mông</b> (vùng chịu áp lực thủy tĩnh cao nhất), <b>viêm khớp</b> các khớp lớn chi dưới, <b>đau bụng</b> do viêm mạch thành ruột, và <b>viêm thận</b> với tiểu máu, protein niệu và trụ hồng cầu.",
        "Chi tiết phân biệt quan trọng nhất là <b>tiểu cầu và đông máu hoàn toàn bình thường</b>. Đây là ban xuất huyết do <b>viêm thành mạch</b> chứ không phải do thiếu tiểu cầu hay rối loạn đông máu. Bệnh thường tự giới hạn trong 4–6 tuần; điều trị chủ yếu là hỗ trợ, corticoid dùng khi đau bụng nặng hoặc tổn thương thận đáng kể. Hai biến chứng phải cảnh giác là <b>lồng ruột</b> (thường là lồng hồi – hồi tràng) và <b>bệnh thận IgA tiến triển</b>, nên cần theo dõi nước tiểu và huyết áp trong nhiều tháng."
      ],
      wrongs: {
        1: "Xuất huyết giảm tiểu cầu miễn dịch gây ban xuất huyết <b>phẳng</b> và chấm xuất huyết lan tỏa toàn thân với <b>tiểu cầu rất thấp</b>. Ở đây tiểu cầu là 412.000 và ban thì gồ lên, đồng thời bệnh này không gây viêm khớp hay viêm thận.",
        2: "Nhiễm khuẩn huyết do não mô cầu diễn tiến <b>rất nhanh</b> với sốt cao, trẻ nhiễm độc nặng, tụt huyết áp và ban xuất huyết lan rộng thành mảng hoại tử. Bé này ổn định qua năm ngày và không sốt cao.",
        3: "Hội chứng tan máu tăng ure máu thường xuất hiện sau tiêu chảy phân máu, với bộ ba <b>thiếu máu tan máu, giảm tiểu cầu và suy thận cấp</b>. Bé không có thiếu máu, tiểu cầu bình thường và creatinine bình thường.",
        4: "Bệnh bạch cầu cấp gây ban xuất huyết do giảm tiểu cầu, kèm thiếu máu, đau xương, gan lách hạch to và công thức máu bất thường — không có dấu hiệu nào ở đây."
      },
      objective:
        "Ban xuất huyết Henoch-Schönlein là viêm mạch IgA ở trẻ em với bốn biểu hiện: ban xuất huyết gồ ở chi dưới và mông, viêm khớp, đau bụng và viêm thận, trong khi tiểu cầu và đông máu bình thường. Cần theo dõi biến chứng lồng ruột và bệnh thận IgA kéo dài nhiều tháng."
    },

    {
      spec: "Huyết học nhi",
      task: "Bước xử trí tiếp theo",
      short: "Chấm xuất huyết đơn độc sau nhiễm virus",
      vignette: [
        "Bé gái 4 tuổi được đưa đến khám vì <b>nhiều chấm xuất huyết và mảng bầm tím rải rác toàn thân</b> xuất hiện đột ngột trong hai ngày, dù không có va đập. Sáng nay bé <b>chảy máu chân răng</b> khi đánh răng.",
        "Hai tuần trước bé bị sốt phát ban do virus, đã khỏi hoàn toàn. Bé vẫn ăn chơi bình thường, không sốt, không sụt cân, không đau xương, không ra mồ hôi đêm.",
        "Khám: bé tỉnh táo, chơi đùa bình thường, sắc mặt hồng hào. Chấm xuất huyết rải rác thân mình và tứ chi, vài mảng bầm tím ở cẳng chân, một điểm xuất huyết niêm mạc má. <b>Không gan to, không lách to, không hạch to</b>, không đau xương khi ấn.",
        "Không có chảy máu mũi ồ ạt, không tiểu máu, không phân đen, không dấu hiệu thần kinh."
      ],
      vitals: [
        ["Nhiệt độ", "36,8 °C"],
        ["Mạch", "98 l/ph"],
        ["Nhịp thở", "22 l/ph"],
        ["Huyết áp", "98/60"],
        ["Cân nặng", "17 kg"]
      ],
      labs: {
        title: "Xét nghiệm",
        rows: [
          ["Tiểu cầu", "14.000/mm³", "150.000–450.000", "lo"],
          ["Hemoglobin", "12,4 g/dL", "11,5–15,5", ""],
          ["Bạch cầu", "7.600/mm³", "5.000–15.000", ""],
          ["Công thức bạch cầu", "Bình thường, không tế bào non", "—", ""],
          ["INR", "1,0", "0,8–1,1", ""],
          ["aPTT", "29 giây", "25–35", ""],
          ["Phết máu ngoại vi", "Tiểu cầu ít nhưng kích thước lớn, dòng khác bình thường", "—", ""]
        ]
      },
      stem: "Bước xử trí tiếp theo tốt nhất là gì?",
      choices: [
        "Theo dõi sát, tránh vận động va chạm và hướng dẫn dấu hiệu cảnh báo",
        "Chọc hút tủy xương trước khi làm bất cứ điều gì khác",
        "Truyền khối tiểu cầu để nâng tiểu cầu trên 50.000",
        "Cắt lách",
        "Bắt đầu hóa trị theo phác đồ bạch cầu cấp"
      ],
      answer: 0,
      why: [
        "Đây là <b>xuất huyết giảm tiểu cầu miễn dịch</b> ở trẻ em. Bệnh cảnh rất đặc trưng: trẻ nhỏ, <b>khởi phát đột ngột</b>, <b>tiền sử nhiễm virus 1–3 tuần trước</b>, <b>giảm tiểu cầu đơn độc</b> với các dòng tế bào khác hoàn toàn bình thường, và <b>trẻ trông khỏe mạnh, không gan lách hạch to</b>.",
        "Cơ chế là tự kháng thể gắn lên tiểu cầu khiến chúng bị phá hủy ở lách; tủy xương bù trừ bằng cách sản xuất tiểu cầu <b>trẻ, kích thước lớn</b> — đúng như hình ảnh phết máu ngoại vi.",
        "Điều quyết định trong xử trí là <b>mức độ chảy máu, không phải con số tiểu cầu</b>. Bé chỉ có chảy máu da niêm nhẹ, không có xuất huyết nặng, nên <b>theo dõi là đủ</b>. Bệnh ở trẻ em <b>tự khỏi trong khoảng 80% trường hợp trong vòng 6 tháng</b>. Điều trị bằng immunoglobulin tĩnh mạch, corticoid hoặc anti-D chỉ đặt ra khi có <b>chảy máu niêm mạc nặng, chảy máu tiêu hóa, hay nghi xuất huyết nội sọ</b>. Cần dặn tránh vận động va chạm và <b>tuyệt đối không dùng aspirin hay thuốc kháng viêm không steroid</b>."
      ],
      wrongs: {
        1: "Chọc hút tủy xương <b>không bắt buộc</b> khi bệnh cảnh điển hình: giảm tiểu cầu đơn độc, trẻ khỏe, không gan lách hạch to và phết máu bình thường. Nó chỉ cần khi có dấu hiệu bất thường gợi ý bệnh tủy hoặc khi đáp ứng điều trị không như mong đợi.",
        2: "Truyền tiểu cầu ở bệnh lý này gần như vô ích vì tiểu cầu truyền vào bị kháng thể phá hủy ngay. Nó chỉ dành cho tình huống <b>chảy máu đe dọa tính mạng</b>, kết hợp với immunoglobulin và corticoid.",
        3: "Cắt lách là biện pháp cho thể <b>mạn tính kháng trị</b> sau nhiều tháng đến nhiều năm, và ở trẻ em càng được trì hoãn tối đa do nguy cơ nhiễm khuẩn nặng do vi khuẩn có vỏ về sau.",
        4: "Không có bằng chứng nào của bạch cầu cấp: không thiếu máu, bạch cầu bình thường, không tế bào non trên phết máu, không gan lách hạch to, không đau xương."
      },
      objective:
        "Xuất huyết giảm tiểu cầu miễn dịch ở trẻ em có giảm tiểu cầu đơn độc sau nhiễm virus, trẻ trông khỏe và không gan lách hạch to; khoảng 80% tự khỏi trong 6 tháng. Quyết định điều trị dựa trên mức độ chảy máu chứ không dựa vào con số tiểu cầu, và chọc tủy không bắt buộc khi bệnh cảnh điển hình."
    },

    {
      spec: "Sơ sinh",
      task: "Bước tiếp theo trong chẩn đoán",
      short: "Vàng da kéo dài kèm phân bạc màu ở trẻ 6 tuần",
      vignette: [
        "Bé gái 6 tuần tuổi được đưa đến khám vì <b>vàng da kéo dài từ lúc 3 ngày tuổi tới nay không hết</b>. Bé bú mẹ hoàn toàn, bú tốt, nhưng <b>tăng cân chậm</b>.",
        "Mẹ để ý bé đi ngoài <b>phân màu trắng bạc như đất sét</b> trong ba tuần nay, và <b>nước tiểu vàng sẫm làm ố tã</b>.",
        "Bé sinh đủ tháng, cân nặng lúc sinh 3,1 kg, hiện 3,9 kg. Sàng lọc sơ sinh bình thường. Không sốt, không nôn, không co giật.",
        "Khám: da và củng mạc vàng rõ. <b>Gan to chắc, bờ dưới 3 cm dưới bờ sườn phải</b>. Lách không to. Bụng không chướng, không dịch ổ bụng. Không dị tật ngoài, không tiếng thổi ở tim."
      ],
      vitals: [
        ["Nhiệt độ", "36,8 °C"],
        ["Mạch", "132 l/ph"],
        ["Nhịp thở", "38 l/ph"],
        ["Cân nặng", "3,9 kg"]
      ],
      labs: {
        title: "Xét nghiệm",
        rows: [
          ["Bilirubin toàn phần", "9,8 mg/dL", "< 1,0", "hi"],
          ["Bilirubin trực tiếp", "6,4 mg/dL", "< 0,3", "hi"],
          ["ALT", "128 U/L", "10–40", "hi"],
          ["GGT", "486 U/L", "< 50", "hi"],
          ["INR", "1,4", "0,8–1,1", "hi"],
          ["Hemoglobin", "11,2 g/dL", "10,0–14,0", ""],
          ["Siêu âm bụng", "Không thấy túi mật, dấu dây thừng vùng rốn gan", "—", "hi"]
        ]
      },
      stem: "Bước tiếp theo tốt nhất là gì?",
      choices: [
        "Chuyển ngay chuyên khoa gan mật nhi để chụp đường mật trong mổ và phẫu thuật Kasai",
        "Ngưng bú mẹ hai ngày để xác định vàng da do sữa mẹ",
        "Chiếu đèn điều trị vàng da tăng bilirubin",
        "Theo dõi thêm bốn tuần vì vàng da sơ sinh thường tự hết",
        "Định lượng men G6PD và làm nghiệm pháp Coombs"
      ],
      answer: 0,
      why: [
        "Điểm quyết định là <b>bilirubin trực tiếp tăng cao</b> (6,4 mg/dL, chiếm phần lớn bilirubin toàn phần). <b>Vàng da tăng bilirubin trực tiếp ở trẻ sơ sinh luôn là bệnh lý</b> và không bao giờ được xem là sinh lý.",
        "Bệnh cảnh chỉ thẳng tới <b>teo đường mật bẩm sinh</b>: vàng da kéo dài quá hai tuần, <b>phân bạc màu</b>, nước tiểu sẫm, gan to chắc, GGT tăng rất cao, INR kéo dài do kém hấp thu vitamin K, và siêu âm <b>không thấy túi mật kèm dấu dây thừng</b> ở vùng rốn gan.",
        "<b>Đây là cấp cứu thời gian.</b> Phẫu thuật <b>Kasai</b> nối rốn gan với hỗng tràng có kết quả phụ thuộc chặt vào tuổi phẫu thuật: tỉ lệ dẫn lưu mật thành công cao khi mổ <b>trước 60 ngày tuổi</b> và giảm nhanh sau đó, vì xơ hóa gan tiến triển không hồi phục. Bé đã 42 ngày tuổi nên còn cơ hội, nhưng mỗi ngày chậm trễ đều làm xấu tiên lượng. Chẩn đoán được khẳng định bằng <b>chụp đường mật trong mổ</b>, thực hiện ngay trước khi tiến hành Kasai; nếu thất bại, lựa chọn còn lại là ghép gan."
      ],
      wrongs: {
        1: "Vàng da do sữa mẹ gây tăng bilirubin <b>gián tiếp</b>, phân và nước tiểu bình thường, trẻ tăng cân tốt. Ngưng bú mẹ ở đây vừa vô ích vừa lãng phí thời gian quý giá.",
        2: "Chiếu đèn chuyển hóa bilirubin <b>gián tiếp</b> thành dạng tan trong nước. Nó <b>không có tác dụng</b> với bilirubin trực tiếp, và ở trẻ ứ mật còn có thể gây hội chứng da đồng.",
        3: "Chờ thêm bốn tuần sẽ đưa bé qua mốc 60 ngày, tức bỏ lỡ cửa sổ vàng của phẫu thuật Kasai và đẩy bé tới xơ gan cần ghép gan.",
        4: "Thiếu men G6PD và bất đồng nhóm máu gây tan máu với tăng bilirubin <b>gián tiếp</b>. Bé không thiếu máu và bilirubin ở đây là trực tiếp."
      },
      objective:
        "Vàng da tăng bilirubin trực tiếp ở trẻ sơ sinh luôn là bệnh lý; kèm phân bạc màu, gan to và GGT tăng cao thì phải nghĩ tới teo đường mật. Cần chuyển chuyên khoa gan mật nhi ngay để chụp đường mật trong mổ và phẫu thuật Kasai, tốt nhất trước 60 ngày tuổi."
    },

    {
      spec: "Hô hấp nhi",
      task: "Bước xử trí tiếp theo",
      short: "Ho sặc đột ngột và khò khè một bên",
      vignette: [
        "Bé trai 2 tuổi được đưa vào cấp cứu vì <b>cơn ho sặc sụa dữ dội khởi phát đột ngột</b> khi đang ăn đậu phộng cách đây 3 giờ. Sau cơn ho, bé dịu lại nhưng vẫn thở khò khè và ho từng lúc.",
        "Bé chưa từng khò khè trước đây, không sốt, không chảy mũi, không tiền sử hen hay dị ứng. Trước đó bé hoàn toàn khỏe mạnh.",
        "Khám: bé tỉnh, nói được, không tím. <b>Rì rào phế nang giảm rõ ở phổi phải</b>, <b>khò khè khu trú một bên phải</b>, phổi trái thông khí tốt. Lồng ngực cân đối khi nhìn.",
        "X-quang ngực thì thở ra: <b>phổi phải ứ khí, tăng sáng, cơ hoành phải hạ thấp, trung thất bị đẩy sang trái</b>. Không thấy dị vật cản quang."
      ],
      vitals: [
        ["Nhiệt độ", "36,9 °C"],
        ["Mạch", "138 l/ph"],
        ["Nhịp thở", "36 l/ph"],
        ["SpO2", "94% khí trời"],
        ["Cân nặng", "13 kg"]
      ],
      stem: "Bước xử trí tiếp theo tốt nhất là gì?",
      choices: [
        "Nội soi phế quản ống cứng để lấy dị vật",
        "Khí dung salbutamol và corticoid, theo dõi đáp ứng",
        "Vỗ lưng ấn ngực để tống dị vật ra",
        "Kháng sinh tĩnh mạch điều trị viêm phổi hít",
        "Chụp cắt lớp ngực có dựng hình đường thở"
      ],
      answer: 0,
      why: [
        "Đây là <b>dị vật đường thở</b>. Bệnh sử là bằng chứng mạnh nhất: <b>cơn ho sặc khởi phát đột ngột trong lúc ăn</b> ở trẻ tuổi tập đi — nhóm tuổi hay gặp nhất vì chưa mọc đủ răng hàm và hay vừa ăn vừa chạy nhảy.",
        "Khám và phim cho hình ảnh kinh điển của tắc nghẽn <b>kiểu van một chiều</b>: dị vật cho không khí đi vào khi hít vào nhưng chặn đường ra khi thở ra, gây <b>ứ khí phổi bên tổn thương</b>, cơ hoành hạ thấp và <b>trung thất bị đẩy sang bên lành</b>. Dị vật thường vào <b>phế quản gốc phải</b> vì nó thẳng, ngắn và rộng hơn bên trái.",
        "Điểm phải nhớ: <b>đậu phộng và phần lớn dị vật hữu cơ không cản quang</b>, nên <b>X-quang bình thường không loại trừ được chẩn đoán</b>. Khi bệnh sử gợi ý, <b>nội soi phế quản ống cứng</b> vừa là tiêu chuẩn vàng để chẩn đoán vừa là biện pháp lấy dị vật, đồng thời cho phép kiểm soát đường thở trong lúc làm thủ thuật."
      ],
      wrongs: {
        1: "Thuốc giãn phế quản và corticoid điều trị co thắt phế quản lan tỏa. Ở đây tắc nghẽn là <b>cơ học, khu trú một bên</b>; dùng thuốc chỉ trì hoãn việc lấy dị vật và có thể làm dị vật di chuyển tới vị trí nguy hiểm hơn.",
        2: "Vỗ lưng ấn ngực chỉ dùng khi trẻ <b>tắc nghẽn đường thở hoàn toàn và không ho, không nói được</b>. Bé này ho được, nói được và thông khí còn — can thiệp thô bạo lúc này có thể đẩy dị vật lên gây tắc hoàn toàn.",
        3: "Viêm phổi hít là <b>biến chứng muộn</b> nếu dị vật nằm lâu. Bệnh sử chỉ mới 3 giờ, không sốt, và kháng sinh không lấy được dị vật ra.",
        4: "Cắt lớp có thể thấy dị vật không cản quang nhưng gây nhiễm xạ, mất thời gian, và <b>không điều trị được</b>. Khi bệnh sử và phim đã điển hình, đi thẳng tới nội soi là đúng."
      },
      objective:
        "Ho sặc khởi phát đột ngột khi đang ăn ở trẻ nhỏ kèm giảm thông khí và khò khè một bên là dị vật đường thở, thường ở phế quản gốc phải, với hình ảnh ứ khí một bên và đẩy trung thất. Dị vật hữu cơ không cản quang nên phim bình thường không loại trừ; nội soi phế quản ống cứng vừa chẩn đoán vừa điều trị."
    },

    {
      spec: "Nội tiết nhi",
      task: "Bước xử trí tiếp theo",
      short: "Đau đầu và lơ mơ khi đang điều trị toan ceton",
      vignette: [
        "Bé gái 9 tuổi nhập viện vì <b>toan ceton do đái tháo đường</b> típ 1 mới khởi phát: khát nhiều, tiểu nhiều, sụt 5 kg trong ba tuần, đường huyết lúc vào 612 mg/dL, pH 7,08.",
        "Bé được bù dịch và truyền insulin theo phác đồ. Sau 8 giờ, đường huyết giảm còn 268 mg/dL, pH cải thiện lên 7,26, bé tỉnh táo và nói chuyện bình thường.",
        "Đến giờ thứ 10, bé <b>than đau đầu dữ dội</b>, nôn vọt hai lần, rồi <b>lơ mơ dần và khó đánh thức</b>.",
        "Khám lúc này: điểm Glasgow giảm từ 15 xuống 10. <b>Đồng tử phải giãn 5 mm, phản xạ ánh sáng chậm</b>. <b>Mạch chậm lại còn 58 lần/phút trong khi huyết áp tăng lên 142/88</b>. Nhịp thở không đều."
      ],
      vitals: [
        ["Nhiệt độ", "36,8 °C"],
        ["Mạch", "58 l/ph"],
        ["Huyết áp", "142/88"],
        ["Nhịp thở", "Không đều"],
        ["SpO2", "96% khí trời"]
      ],
      labs: {
        title: "Xét nghiệm tại thời điểm hiện tại",
        rows: [
          ["Glucose", "212 mg/dL", "70–100", "hi"],
          ["Natri hiệu chỉnh", "134 mEq/L", "135–145", "lo"],
          ["Kali", "3,8 mEq/L", "3,5–5,0", ""],
          ["pH máu", "7,29", "7,35–7,45", "lo"],
          ["Bicarbonat", "16 mEq/L", "22–28", "lo"],
          ["Ceton máu", "2,8 mmol/L", "< 0,6", "hi"]
        ]
      },
      stem: "Bước xử trí tiếp theo tốt nhất là gì?",
      choices: [
        "Truyền ngay mannitol hoặc natri clorid ưu trương và giảm tốc độ truyền dịch",
        "Tăng tốc độ truyền insulin vì ceton vẫn còn dương",
        "Truyền nhanh thêm dịch tinh thể vì nghi bé còn thiếu dịch",
        "Chụp cắt lớp sọ não trước khi điều trị bất cứ điều gì",
        "Truyền natri bicarbonat để điều chỉnh toan máu còn lại"
      ],
      answer: 0,
      why: [
        "Đây là <b>phù não</b> — biến chứng đáng sợ nhất của toan ceton do đái tháo đường ở trẻ em, hiếm nhưng chiếm phần lớn số ca tử vong. Thời điểm rất điển hình: <b>4–12 giờ sau khi bắt đầu điều trị</b>, đúng lúc các chỉ số sinh hóa đang cải thiện.",
        "Dấu hiệu cảnh báo đã đầy đủ: <b>đau đầu dữ dội</b>, nôn vọt, <b>ý thức xấu đi</b>, <b>đồng tử giãn không đều</b> và <b>tam chứng Cushing</b> — mạch chậm, huyết áp tăng, thở không đều — biểu hiện của tăng áp lực nội sọ.",
        "Điều trị phải <b>bắt đầu ngay trên cơ sở lâm sàng</b>: <b>mannitol hoặc natri clorid ưu trương</b>, đồng thời <b>giảm tốc độ dịch truyền</b> khoảng một phần ba, nâng đầu giường và bảo đảm đường thở. Cơ chế được cho là do <b>hạ áp lực thẩm thấu máu quá nhanh</b> khiến nước dịch chuyển vào tế bào não vốn đã tích lũy các chất thẩm thấu bảo vệ. Chính vì vậy phác đồ nhi khoa yêu cầu bù dịch <b>chậm và đều</b>, tránh giảm đường huyết quá nhanh và thêm glucose vào dịch truyền khi đường huyết xuống khoảng 250–300 mg/dL."
      ],
      wrongs: {
        1: "Tăng insulin làm đường huyết và áp lực thẩm thấu giảm nhanh hơn nữa — chính là cơ chế đang gây phù não. Khi đường huyết đã xuống khoảng 250 mg/dL, cách đúng là <b>thêm glucose vào dịch truyền</b> chứ không tăng insulin.",
        2: "Truyền dịch nhanh làm phù não nặng thêm. Truyền dịch quá nhiều và quá nhanh là yếu tố nguy cơ đã được xác định của biến chứng này.",
        3: "Chụp phim <b>không được làm chậm điều trị</b> khi đã có dấu hiệu tăng áp lực nội sọ. Hình ảnh có thể bình thường ở giai đoạn sớm, và bé có thể tụt kẹt não trong lúc chờ chụp. Chụp sau khi đã dùng thuốc chống phù não.",
        4: "Bicarbonat trong toan ceton trẻ em có liên quan tới <b>tăng nguy cơ phù não</b> và không cải thiện kết cục; đây là thứ cần tránh nhất trong tình huống này."
      },
      objective:
        "Phù não là biến chứng gây tử vong hàng đầu của toan ceton do đái tháo đường ở trẻ em, thường xuất hiện 4–12 giờ sau khi bắt đầu điều trị với đau đầu, nôn, giảm ý thức và tam chứng Cushing. Xử trí ngay bằng mannitol hoặc natri clorid ưu trương và giảm tốc độ dịch truyền, không chờ chụp phim."
    },

    {
      spec: "Hô hấp nhi",
      task: "Bước xử trí tiếp theo",
      short: "Sốt và đông đặc thùy ở trẻ 4 tuổi",
      vignette: [
        "Bé trai 4 tuổi được đưa đến khám vì <b>sốt cao 39,5 °C trong ba ngày</b>, ho có đờm, thở nhanh và <b>đau ngực phải khi hít sâu</b>. Bé bú ăn kém nhưng vẫn uống nước được và đi tiểu bình thường.",
        "Bé đã tiêm chủng đầy đủ theo lịch, gồm vắc-xin phế cầu liên hợp. Không có bệnh nền, không suy giảm miễn dịch, không tiếp xúc lao.",
        "Khám: bé tỉnh, quấy nhưng dỗ được, không tím. Thở nhanh, co kéo liên sườn nhẹ. <b>Gõ đục vùng đáy phổi phải, rì rào phế nang giảm, có ran nổ khu trú và tiếng thổi ống</b>. Không thở rít, không khò khè lan tỏa.",
        "X-quang ngực: <b>đông đặc thùy dưới phổi phải</b>, không tràn dịch màng phổi, không hang, không hạch rốn phổi."
      ],
      vitals: [
        ["Nhiệt độ", "39,5 °C"],
        ["Mạch", "142 l/ph"],
        ["Nhịp thở", "42 l/ph"],
        ["SpO2", "95% khí trời"],
        ["Cân nặng", "17 kg"]
      ],
      labs: {
        title: "Xét nghiệm",
        rows: [
          ["Bạch cầu", "21.400/mm³", "5.000–15.000", "hi"],
          ["Bạch cầu đa nhân trung tính", "82%", "30–60", "hi"],
          ["CRP", "128 mg/L", "< 5", "hi"],
          ["Hemoglobin", "12,0 g/dL", "11,5–15,5", ""],
          ["Natri", "136 mEq/L", "135–145", ""]
        ]
      },
      stem: "Bước xử trí tiếp theo tốt nhất là gì?",
      choices: [
        "Amoxicillin liều cao đường uống và điều trị ngoại trú với hẹn tái khám",
        "Azithromycin đường uống đơn thuần",
        "Ceftriaxone tĩnh mạch kết hợp vancomycin và nhập hồi sức",
        "Điều trị triệu chứng vì phần lớn viêm phổi trẻ em do virus",
        "Chụp cắt lớp ngực để xác định tác nhân"
      ],
      answer: 0,
      why: [
        "Bệnh cảnh là <b>viêm phổi vi khuẩn điển hình mắc phải cộng đồng</b>: sốt cao khởi phát khá đột ngột, <b>đông đặc một thùy</b> trên phim, khám có gõ đục và tiếng thổi ống, bạch cầu đa nhân trung tính tăng cao và CRP rất cao.",
        "Ở trẻ đã tiêm chủng đầy đủ, tác nhân vi khuẩn hàng đầu vẫn là <b>phế cầu</b>. Vì vậy kháng sinh lựa chọn là <b>amoxicillin liều cao đường uống</b> — đủ để vượt qua các chủng phế cầu giảm nhạy penicillin, hiệu quả tương đương đường tiêm ở trẻ điều trị ngoại trú.",
        "Bé <b>đủ tiêu chuẩn điều trị ngoại trú</b>: uống được, SpO₂ trên 92%, không suy hô hấp nặng, không mất nước, không biến chứng trên phim, và gia đình theo dõi được. Tiêu chuẩn nhập viện gồm SpO₂ dưới 90%, suy hô hấp nặng, trẻ dưới 3–6 tháng, không uống được, có tràn dịch màng phổi hoặc áp xe, hoặc thất bại điều trị ngoại trú."
      ],
      wrongs: {
        1: "Macrolid phủ <b>viêm phổi không điển hình</b> do <i>Mycoplasma</i> hay <i>Chlamydophila</i>, thường gặp ở trẻ lớn và thiếu niên với bệnh cảnh khởi phát từ từ, ho khan kéo dài và phim thâm nhiễm kẽ lan tỏa. Nó phủ phế cầu kém và không phù hợp với đông đặc thùy ở trẻ 4 tuổi.",
        2: "Phối hợp kháng sinh tĩnh mạch phổ rộng và nhập hồi sức là quá mức với một bé còn uống được, SpO₂ 95% và không có biến chứng. Điều này làm tăng nguy cơ kháng thuốc và chi phí không cần thiết.",
        3: "Viêm phổi do virus đúng là thường gặp hơn về tổng thể ở trẻ nhỏ, nhưng bệnh cảnh ở đây — đông đặc thùy, bạch cầu và CRP tăng rất cao, tiếng thổi ống — hướng mạnh tới vi khuẩn.",
        4: "Cắt lớp ngực <b>không xác định được tác nhân</b> và không thay đổi kháng sinh ban đầu, trong khi gây nhiễm xạ đáng kể. X-quang thường quy đã đủ."
      },
      objective:
        "Viêm phổi cộng đồng ở trẻ trên 3 tháng với đông đặc thùy, bạch cầu trung tính và CRP tăng cao thường do phế cầu, điều trị bằng amoxicillin liều cao đường uống. Trẻ uống được, SpO₂ trên 92% và không có biến chứng thì điều trị ngoại trú; macrolid dành cho viêm phổi không điển hình ở trẻ lớn."
    },

    {
      spec: "Thận – Tiết niệu nhi",
      task: "Bước tiếp theo trong chẩn đoán",
      short: "Sốt không rõ nguồn ở bé gái 14 tháng",
      vignette: [
        "Bé gái 14 tháng tuổi được đưa đến khám vì <b>sốt cao 39,2 °C ba ngày liền</b>, quấy khóc, bú kém và <b>nôn vài lần</b>. Bé không ho, không chảy mũi, không tiêu chảy, không ban da.",
        "Khám toàn diện: họng không đỏ, màng nhĩ hai bên bình thường, phổi trong, tim đều, bụng mềm, không ban, không cứng gáy. <b>Không tìm thấy ổ nhiễm khuẩn khu trú nào.</b> Bộ phận sinh dục ngoài bình thường.",
        "Nước tiểu lấy qua sonde: <b>bạch cầu esterase dương tính, nitrit dương tính, bạch cầu 60/vi trường, vi khuẩn nhiều</b>. Cấy nước tiểu mọc <i>Escherichia coli</i> trên 100.000 khuẩn lạc/mL.",
        "Đây là <b>lần nhiễm khuẩn tiết niệu có sốt đầu tiên</b> của bé. Bé đáp ứng tốt với kháng sinh, hết sốt sau 48 giờ."
      ],
      vitals: [
        ["Nhiệt độ", "39,2 °C"],
        ["Mạch", "150 l/ph"],
        ["Nhịp thở", "32 l/ph"],
        ["Huyết áp", "94/56"],
        ["Cân nặng", "10 kg"]
      ],
      labs: {
        title: "Xét nghiệm",
        rows: [
          ["Bạch cầu", "18.600/mm³", "6.000–17.000", "hi"],
          ["CRP", "96 mg/L", "< 5", "hi"],
          ["Creatinine", "0,4 mg/dL", "0,2–0,5", ""],
          ["Cấy nước tiểu", "E. coli > 100.000 CFU/mL", "Vô khuẩn", "hi"],
          ["Cấy máu", "Âm tính", "Âm tính", ""]
        ]
      },
      stem: "Bước tiếp theo tốt nhất sau khi hoàn tất kháng sinh là gì?",
      choices: [
        "Siêu âm thận và đường tiết niệu",
        "Chụp bàng quang niệu đạo lúc tiểu ngay cho mọi trẻ nhiễm khuẩn tiết niệu lần đầu",
        "Xạ hình thận bằng DMSA để tìm sẹo thận",
        "Không cần khảo sát gì thêm vì bé đáp ứng tốt với kháng sinh",
        "Chụp cắt lớp bụng có cản quang"
      ],
      answer: 0,
      why: [
        "Bé có <b>nhiễm khuẩn tiết niệu có sốt</b> — tức viêm thận bể thận — ở trẻ nhỏ. Điểm quan trọng đầu tiên về chẩn đoán: ở trẻ dưới 2 tuổi, nhiễm khuẩn tiết niệu thường <b>chỉ biểu hiện bằng sốt không rõ nguồn, quấy khóc, bú kém và nôn</b>, nên phải luôn nằm trong danh sách nghi ngờ khi khám không tìm ra ổ nhiễm khuẩn.",
        "Sau đợt nhiễm khuẩn tiết niệu có sốt <b>đầu tiên</b> ở trẻ từ 2 đến 24 tháng, khuyến cáo là làm <b>siêu âm thận và đường tiết niệu</b>. Đây là thăm dò <b>không xâm lấn, không nhiễm xạ</b>, nhằm phát hiện các bất thường cần can thiệp: thận ứ nước, giãn niệu quản, thận đôi, van niệu đạo sau hay áp xe thận.",
        "<b>Chụp bàng quang niệu đạo lúc tiểu</b> để tìm trào ngược bàng quang – niệu quản <b>không còn được chỉ định thường quy</b> sau lần nhiễm khuẩn đầu tiên. Nó được dành cho các trường hợp <b>siêu âm bất thường</b>, <b>nhiễm khuẩn tiết niệu có sốt tái phát</b>, hoặc bệnh cảnh không điển hình như vi khuẩn khác <i>E. coli</i>, đáp ứng kháng sinh kém, hay có tăng huyết áp và chậm phát triển."
      ],
      wrongs: {
        1: "Chụp bàng quang niệu đạo là thủ thuật <b>xâm lấn, cần đặt sonde tiểu và gây nhiễm xạ vùng chậu</b>. Việc dùng thường quy đã bị loại bỏ vì phần lớn trào ngược mức độ nhẹ tự khỏi và điều trị dự phòng không cải thiện kết cục.",
        2: "Xạ hình DMSA phát hiện sẹo thận nhưng thường được làm <b>muộn, sau 4–6 tháng</b>, và không phải bước khảo sát đầu tiên. Làm sớm sẽ lẫn giữa viêm cấp và sẹo thật sự.",
        3: "Đáp ứng tốt với kháng sinh không loại trừ được bất thường giải phẫu tiềm ẩn. Bỏ qua khảo sát có thể để sót tắc nghẽn dẫn tới nhiễm khuẩn tái phát, sẹo thận và về lâu dài là tăng huyết áp và bệnh thận mạn.",
        4: "Cắt lớp gây nhiễm xạ cao, chỉ dùng khi nghi biến chứng như áp xe mà siêu âm không kết luận được."
      },
      objective:
        "Ở trẻ dưới 2 tuổi, nhiễm khuẩn tiết niệu thường chỉ biểu hiện bằng sốt không rõ nguồn nên phải cấy nước tiểu lấy vô khuẩn. Sau lần nhiễm khuẩn tiết niệu có sốt đầu tiên, khảo sát chuẩn là siêu âm thận và đường tiết niệu; chụp bàng quang niệu đạo lúc tiểu chỉ dành cho siêu âm bất thường, tái phát hoặc bệnh cảnh không điển hình."
    },

    {
      spec: "Thận – Tiết niệu nhi",
      task: "Bước xử trí tiếp theo",
      short: "Phù toàn thân và protein niệu nặng ở trẻ 4 tuổi",
      vignette: [
        "Bé trai 4 tuổi được đưa đến khám vì <b>hai mí mắt nề mọng vào buổi sáng</b> trong 10 ngày, sau đó phù lan xuống hai chân và bụng chướng dần. Bé vẫn ăn chơi được, không sốt.",
        "Mẹ kể <b>nước tiểu có nhiều bọt</b> và lượng nước tiểu ít hơn trước. Bé tăng 3 kg trong hai tuần dù ăn không nhiều hơn.",
        "Khám: <b>phù mềm ấn lõm quanh mắt, mu bàn chân, cẳng chân và bìu</b>; bụng chướng có dịch tự do. Huyết áp bình thường theo tuổi. Không ban da, không đau khớp, <b>không tiểu máu đại thể</b>. Tim phổi bình thường.",
        "Bé không có tiền sử viêm họng hay nhiễm khuẩn da gần đây."
      ],
      vitals: [
        ["Nhiệt độ", "36,8 °C"],
        ["Mạch", "104 l/ph"],
        ["Nhịp thở", "24 l/ph"],
        ["Huyết áp", "96/60"],
        ["Cân nặng", "20 kg"]
      ],
      labs: {
        title: "Xét nghiệm",
        rows: [
          ["Protein niệu 24 giờ", "3,8 g/1,73 m²/ngày", "< 0,1", "hi"],
          ["Albumin máu", "1,8 g/dL", "3,5–5,5", "lo"],
          ["Cholesterol toàn phần", "384 mg/dL", "< 170", "hi"],
          ["Creatinine", "0,4 mg/dL", "0,2–0,5", ""],
          ["Bổ thể C3 và C4", "Bình thường", "—", ""],
          ["Cặn nước tiểu", "Không trụ hồng cầu, hồng cầu 0–2/vi trường", "—", ""]
        ]
      },
      stem: "Bước xử trí tiếp theo tốt nhất là gì?",
      choices: [
        "Bắt đầu corticoid đường uống mà không cần sinh thiết thận",
        "Sinh thiết thận trước khi bắt đầu bất kỳ điều trị nào",
        "Bắt đầu cyclophosphamide ngay từ đầu",
        "Chỉ dùng lợi tiểu và hạn chế muối, theo dõi diễn tiến",
        "Truyền albumin định kỳ mỗi tuần cho tới khi hết phù"
      ],
      answer: 0,
      why: [
        "Bé có <b>hội chứng thận hư</b> với đủ bốn thành phần: <b>protein niệu ngưỡng thận hư</b>, <b>albumin máu thấp</b>, <b>phù</b> và <b>tăng lipid máu</b>.",
        "Ở trẻ từ 1 đến 10 tuổi có bệnh cảnh <b>điển hình</b>, nguyên nhân là <b>bệnh cầu thận sang thương tối thiểu</b> trong khoảng 90% trường hợp. Các đặc điểm khẳng định tính điển hình đều có ở đây: <b>huyết áp bình thường</b>, <b>không tiểu máu</b>, <b>chức năng thận bình thường</b> và <b>bổ thể bình thường</b>.",
        "Vì xác suất trước xét nghiệm quá cao, thực hành chuẩn là <b>điều trị thử bằng corticoid mà không sinh thiết</b>; khoảng 90% trẻ đáp ứng, thường hết protein niệu trong 2–4 tuần. <b>Sinh thiết thận chỉ đặt ra khi có dấu hiệu không điển hình</b>: tuổi dưới 1 hoặc trên 10, tăng huyết áp, tiểu máu đại thể, suy thận, bổ thể giảm, hoặc <b>không đáp ứng corticoid sau 4–8 tuần</b>. Cần cảnh giác hai biến chứng là <b>nhiễm khuẩn</b> (mất immunoglobulin qua nước tiểu, đặc biệt viêm phúc mạc tiên phát do phế cầu) và <b>huyết khối</b> do mất antithrombin III."
      ],
      wrongs: {
        1: "Sinh thiết là thủ thuật xâm lấn có nguy cơ chảy máu, và không cần thiết khi bệnh cảnh điển hình ở lứa tuổi này. Nó chỉ được dành cho các trường hợp không điển hình hoặc kháng corticoid.",
        2: "Cyclophosphamide và các thuốc ức chế miễn dịch khác dành cho trẻ <b>phụ thuộc hoặc kháng corticoid</b>, tức sau khi đã thử corticoid. Dùng ngay từ đầu là phơi nhiễm độc tính tủy xương và sinh sản không cần thiết.",
        3: "Lợi tiểu và hạn chế muối là biện pháp <b>hỗ trợ</b> giảm phù, không tác động lên cơ chế bệnh sinh. Dùng lợi tiểu mạnh đơn thuần ở trẻ giảm albumin còn có nguy cơ giảm thể tích tuần hoàn và huyết khối.",
        4: "Truyền albumin chỉ dùng ngắn hạn khi phù nặng gây suy hô hấp hoặc có giảm thể tích tuần hoàn; tác dụng thoáng qua vì albumin lại bị thải qua nước tiểu, và truyền định kỳ không phải điều trị."
      },
      objective:
        "Hội chứng thận hư ở trẻ 1–10 tuổi với huyết áp bình thường, không tiểu máu, chức năng thận và bổ thể bình thường gần như chắc chắn là bệnh cầu thận sang thương tối thiểu, nên điều trị thử bằng corticoid mà không sinh thiết. Sinh thiết chỉ dành cho bệnh cảnh không điển hình hoặc kháng corticoid."
    },

    {
      spec: "Thận – Tiết niệu nhi",
      task: "Chẩn đoán nhiều khả năng nhất",
      short: "Tiểu máu và tăng huyết áp hai tuần sau viêm họng",
      vignette: [
        "Bé trai 7 tuổi được đưa đến khám vì <b>nước tiểu màu nâu sẫm như nước xá xị</b> trong hai ngày, kèm nề mí mắt buổi sáng và <b>tiểu ít</b>. Bé than đau đầu và mệt.",
        "<b>Hai tuần trước bé bị viêm họng có sốt</b>, được cho là do virus và không dùng kháng sinh; hiện họng đã khỏi.",
        "Khám: bé tỉnh, nề mí mắt hai bên, phù nhẹ mu bàn chân. <b>Huyết áp 138/90 mm Hg</b> — trên bách phân vị 99 theo tuổi và chiều cao. Tim đều, không tiếng thổi; phổi có ran ẩm hai đáy. Bụng mềm, không đau. Không ban xuất huyết, không đau khớp.",
        "Không có tiền sử bệnh thận, không dùng thuốc gì."
      ],
      vitals: [
        ["Nhiệt độ", "36,9 °C"],
        ["Mạch", "92 l/ph"],
        ["Nhịp thở", "24 l/ph"],
        ["Huyết áp", "138/90"],
        ["Cân nặng", "25 kg"]
      ],
      labs: {
        title: "Xét nghiệm",
        rows: [
          ["Creatinine", "1,0 mg/dL", "0,3–0,7", "hi"],
          ["Ure máu", "38 mg/dL", "7–18", "hi"],
          ["Cặn nước tiểu", "Hồng cầu biến dạng, trụ hồng cầu, protein 2+", "—", "hi"],
          ["Bổ thể C3", "38 mg/dL", "80–160", "lo"],
          ["Bổ thể C4", "24 mg/dL", "15–45", ""],
          ["Kháng thể kháng DNase B", "Tăng cao", "—", "hi"],
          ["Albumin máu", "3,4 g/dL", "3,5–5,5", "lo"]
        ]
      },
      stem: "Chẩn đoán nhiều khả năng nhất là gì?",
      choices: [
        "Viêm cầu thận cấp sau nhiễm liên cầu",
        "Bệnh thận IgA",
        "Hội chứng thận hư do sang thương tối thiểu",
        "Ban xuất huyết Henoch-Schönlein có viêm thận",
        "Hội chứng tan máu tăng ure máu"
      ],
      answer: 0,
      why: [
        "Bệnh cảnh là <b>viêm cầu thận cấp sau nhiễm liên cầu</b>. Bốn thành phần của <b>hội chứng viêm thận</b> đều có: <b>tiểu máu</b> với hồng cầu biến dạng và trụ hồng cầu, <b>tăng huyết áp</b>, <b>phù</b>, và <b>giảm mức lọc cầu thận</b> thể hiện qua creatinine tăng.",
        "Hai xét nghiệm khóa chốt: <b>C3 giảm trong khi C4 bình thường</b> — dấu ấn của hoạt hóa bổ thể theo <b>con đường thay thế</b> — và <b>bằng chứng nhiễm liên cầu trước đó</b> qua kháng thể kháng DNase B tăng cao.",
        "<b>Khoảng thời gian trễ</b> là chi tiết phân biệt quan trọng nhất: viêm cầu thận xuất hiện <b>1–3 tuần sau viêm họng</b> hoặc 3–6 tuần sau nhiễm khuẩn da, vì cần thời gian để phức hợp miễn dịch hình thành và lắng đọng ở cầu thận. Bệnh ở trẻ em thường <b>tự giới hạn</b>, điều trị là hỗ trợ: hạn chế muối và nước, lợi tiểu và hạ áp khi cần. C3 trở về bình thường trong 6–8 tuần; nếu C3 vẫn thấp sau mốc này, phải xét lại chẩn đoán."
      ],
      wrongs: {
        1: "Bệnh thận IgA gây tiểu máu <b>đồng thời với</b> nhiễm khuẩn hô hấp trên, thường chỉ trong 1–2 ngày (nên gọi là tiểu máu đồng phát), và <b>bổ thể C3 bình thường</b>. Ở đây có khoảng trễ hai tuần và C3 giảm rõ.",
        2: "Hội chứng thận hư biểu hiện bằng phù nặng, protein niệu ngưỡng thận hư, albumin rất thấp, <b>huyết áp bình thường và không tiểu máu</b>. Bệnh cảnh ở đây là hội chứng viêm thận, hoàn toàn khác.",
        3: "Viêm thận trong Henoch-Schönlein cần có <b>ban xuất huyết gồ ở chi dưới</b>, thường kèm đau khớp và đau bụng, và <b>bổ thể bình thường</b>. Bé không có ban hay triệu chứng ngoài thận nào.",
        4: "Hội chứng tan máu tăng ure máu có bộ ba thiếu máu tan máu, giảm tiểu cầu và suy thận cấp, thường sau tiêu chảy phân máu. Bé không có thiếu máu tan máu hay giảm tiểu cầu."
      },
      objective:
        "Viêm cầu thận cấp sau nhiễm liên cầu xuất hiện 1–3 tuần sau viêm họng với hội chứng viêm thận, C3 giảm và C4 bình thường, cùng bằng chứng nhiễm liên cầu trước đó. Bệnh thường tự giới hạn ở trẻ em và C3 phải trở về bình thường trong 6–8 tuần; khoảng trễ và C3 giảm là điểm phân biệt với bệnh thận IgA."
    },

    {
      spec: "Huyết học nhi",
      task: "Bước xử trí tiếp theo",
      short: "Đau ngực và thâm nhiễm mới ở trẻ hồng cầu hình liềm",
      vignette: [
        "Bé trai 9 tuổi mắc <b>bệnh hồng cầu hình liềm</b> thể đồng hợp tử, nhập viện ba ngày trước vì cơn đau xương chi dưới, đang dùng morphine truyền tĩnh mạch và bù dịch.",
        "Từ sáng nay bé <b>đau ngực kiểu màng phổi bên trái, ho khan và khó thở tăng dần</b>. Bé thở nông vì đau và ngại hít sâu.",
        "Khám: bé thở nhanh, co kéo nhẹ. <b>Ran nổ và giảm rì rào phế nang đáy phổi trái</b>. Không phù chân, không đau bắp chân. Tim đều, không tiếng thổi mới.",
        "X-quang ngực: <b>thâm nhiễm mới ở thùy dưới phổi trái</b> mà phim lúc nhập viện không có."
      ],
      vitals: [
        ["Nhiệt độ", "38,6 °C"],
        ["Mạch", "132 l/ph"],
        ["Nhịp thở", "34 l/ph"],
        ["SpO2", "89% khí trời"],
        ["Cân nặng", "28 kg"]
      ],
      labs: {
        title: "Xét nghiệm",
        rows: [
          ["Hemoglobin (nền 8,5)", "6,4 g/dL", "11,5–15,5", "lo"],
          ["Hồng cầu lưới", "9%", "0,5–2,0", "hi"],
          ["Bạch cầu", "22.800/mm³", "5.000–15.000", "hi"],
          ["Tiểu cầu", "168.000/mm³", "150.000–450.000", ""],
          ["LDH", "820 U/L", "140–280", "hi"],
          ["Bilirubin gián tiếp", "3,1 mg/dL", "< 1,0", "hi"]
        ]
      },
      stem: "Bước xử trí tiếp theo tốt nhất là gì?",
      choices: [
        "Thở oxy, kháng sinh phủ cả vi khuẩn điển hình và không điển hình, giảm đau đủ, khuyến khích hô hấp kích thích và truyền máu",
        "Chỉ tăng liều morphine để bé đỡ đau và thở sâu hơn",
        "Truyền dịch tích cực gấp đôi nhu cầu để pha loãng máu",
        "Chỉ dùng kháng sinh và theo dõi, chưa cần truyền máu",
        "Bắt đầu hydroxyurea ngay trong đợt cấp này"
      ],
      answer: 0,
      why: [
        "Đây là <b>hội chứng ngực cấp</b> — nguyên nhân tử vong hàng đầu ở bệnh nhân hồng cầu hình liềm. Định nghĩa là <b>thâm nhiễm mới trên X-quang ngực</b> kèm ít nhất một trong các dấu hiệu: sốt, đau ngực, khó thở, thở nhanh hoặc thiếu oxy.",
        "Bối cảnh rất điển hình: xuất hiện <b>2–3 ngày sau một cơn đau tắc mạch</b>. Vòng xoắn bệnh lý là đau ngực và opioid làm bé <b>thở nông</b>, gây xẹp phổi và giảm oxy tại chỗ, từ đó hồng cầu liềm hóa nhiều hơn ngay trong mao mạch phổi, làm tổn thương lan rộng thêm.",
        "Điều trị phải làm <b>đồng thời nhiều hướng</b>: <b>oxy</b> giữ SpO₂ trên 95%, <b>kháng sinh</b> phủ cả phế cầu và vi khuẩn không điển hình (cephalosporin thế hệ ba cộng macrolid, vì <i>Mycoplasma</i> và <i>Chlamydophila</i> là tác nhân hay gặp), <b>giảm đau đủ nhưng không quá liều</b>, <b>hô hấp kích thích</b> để chống xẹp phổi, và <b>truyền máu</b> — truyền đơn giản khi thiếu máu nặng, thay máu khi bệnh nặng hoặc tiến triển nhanh. <b>Dịch truyền phải ở mức bình thường</b>, vì thừa dịch gây phù phổi làm bệnh nặng thêm."
      ],
      wrongs: {
        1: "Tăng opioid đơn thuần làm <b>ức chế hô hấp và thở nông nặng thêm</b>, đúng cơ chế đang duy trì hội chứng ngực cấp. Giảm đau cần đủ để bé hít sâu được, chứ không phải càng nhiều càng tốt.",
        2: "Truyền dịch quá mức gây <b>phù phổi</b> và làm trao đổi khí xấu đi. Bù dịch trong bệnh hồng cầu hình liềm chỉ ở mức duy trì, không truyền ồ ạt.",
        3: "Bỏ truyền máu ở bệnh nhân có hemoglobin tụt từ 8,5 xuống 6,4 g/dL và SpO₂ 89% là bỏ sót can thiệp then chốt: truyền máu làm giảm tỉ lệ hồng cầu liềm và cải thiện oxy hóa máu nhanh chóng.",
        4: "Hydroxyurea là thuốc <b>dự phòng dài hạn</b>, làm tăng hemoglobin bào thai và giảm tần suất cơn đau cùng hội chứng ngực cấp, nhưng tác dụng cần nhiều tháng và không có vai trò trong đợt cấp."
      },
      objective:
        "Hội chứng ngực cấp là thâm nhiễm phổi mới kèm sốt hoặc triệu chứng hô hấp ở bệnh nhân hồng cầu hình liềm, thường xuất hiện vài ngày sau cơn đau tắc mạch do thở nông vì đau và opioid. Điều trị phối hợp oxy, kháng sinh phủ cả vi khuẩn không điển hình, giảm đau đủ, hô hấp kích thích và truyền máu, với dịch truyền chỉ ở mức duy trì."
    },

    {
      spec: "Huyết học nhi",
      task: "Bước tiếp theo trong chẩn đoán",
      short: "Xanh xao ở trẻ 18 tháng uống nhiều sữa bò",
      vignette: [
        "Bé trai 18 tháng tuổi được đưa đến khám vì <b>da xanh xao</b> mà mẹ để ý trong hai tháng. Bé kém hoạt bát hơn trước, hay cáu gắt, ăn dặm kém.",
        "Khai thác chế độ ăn: bé <b>uống khoảng 1,2 lít sữa bò tươi mỗi ngày</b> bằng bình, ăn rất ít thịt, cá và rau. Mẹ nghĩ sữa là đủ dinh dưỡng nên khuyến khích bé uống nhiều.",
        "Bé sinh đủ tháng, không tiền sử bệnh, không chảy máu, phân không đen, không có máu trong phân. Không sốt, không sụt cân, không đau xương.",
        "Khám: da niêm nhợt rõ, kết mạc mắt nhạt. <b>Không gan lách to, không hạch to</b>, không chấm xuất huyết, không vàng da. Tim có tiếng thổi tâm thu êm 2/6 ở mỏm."
      ],
      vitals: [
        ["Nhiệt độ", "36,8 °C"],
        ["Mạch", "128 l/ph"],
        ["Nhịp thở", "26 l/ph"],
        ["Huyết áp", "92/54"],
        ["Cân nặng", "11 kg"]
      ],
      labs: {
        title: "Công thức máu",
        rows: [
          ["Hemoglobin", "7,4 g/dL", "11,0–14,0", "lo"],
          ["MCV", "62 fL", "70–86", "lo"],
          ["RDW", "19,2%", "11,5–14,5", "hi"],
          ["Hồng cầu lưới", "0,6%", "0,5–2,0", ""],
          ["Tiểu cầu", "548.000/mm³", "150.000–450.000", "hi"],
          ["Bạch cầu", "8.400/mm³", "6.000–17.000", ""],
          ["Phết máu", "Hồng cầu nhỏ nhược sắc, không tế bào non", "—", ""]
        ]
      },
      stem: "Xét nghiệm nào sau đây phù hợp nhất để khẳng định chẩn đoán?",
      choices: [
        "Ferritin huyết thanh cùng sắt huyết thanh và khả năng gắn sắt toàn phần",
        "Điện di huyết sắc tố",
        "Chọc hút tủy xương",
        "Định lượng chì máu đơn thuần",
        "Nội soi tiêu hóa tìm nguồn chảy máu"
      ],
      answer: 0,
      why: [
        "Bệnh cảnh là <b>thiếu máu thiếu sắt do chế độ ăn</b> — nguyên nhân thiếu máu thường gặp nhất ở trẻ tuổi tập đi. Yếu tố quyết định nằm ngay trong khai thác bệnh sử: <b>uống trên một lít sữa bò mỗi ngày</b>.",
        "Sữa bò gây thiếu sắt qua <b>ba cơ chế cộng dồn</b>: hàm lượng sắt rất thấp và sắt trong sữa lại khó hấp thu; canxi và casein trong sữa <b>ức chế hấp thu sắt</b> từ các thức ăn khác; và trẻ uống quá nhiều sữa sẽ <b>no và bỏ các thực phẩm giàu sắt</b>. Ngoài ra sữa bò tươi có thể gây <b>mất máu vi thể qua ruột</b> do kích ứng niêm mạc.",
        "Công thức máu hoàn toàn phù hợp: hồng cầu <b>nhỏ, nhược sắc</b>, <b>RDW tăng</b> phản ánh quần thể hồng cầu không đồng đều, và <b>tiểu cầu tăng phản ứng</b>. Bộ xét nghiệm sắt sẽ cho <b>ferritin thấp</b> — chỉ số nhạy nhất, phản ánh dự trữ sắt cạn kiệt — cùng sắt huyết thanh thấp và khả năng gắn sắt toàn phần tăng. Điều trị là bổ sung sắt uống, giới hạn sữa bò dưới khoảng 500 mL mỗi ngày và tăng thực phẩm giàu sắt; hồng cầu lưới sẽ tăng sau 3–7 ngày, là dấu hiệu đáp ứng sớm nhất."
      ],
      wrongs: {
        1: "Điện di huyết sắc tố dùng chẩn đoán thalassemia, cũng gây hồng cầu nhỏ nhưng có <b>RDW thường bình thường</b>, ferritin bình thường hoặc tăng, số lượng hồng cầu không giảm tương xứng và thường có tiền sử gia đình. Nó là bước sau nếu bổ sung sắt không đáp ứng.",
        2: "Chọc tủy xâm lấn và không cần thiết khi bệnh cảnh điển hình, các dòng khác bình thường, không gan lách hạch to và không có tế bào non trên phết máu.",
        3: "Ngộ độc chì cũng gây thiếu máu hồng cầu nhỏ và hay đi kèm thiếu sắt, nên nên tầm soát ở trẻ có nguy cơ; nhưng nó không giải thích trọn vẹn bệnh cảnh bằng chế độ ăn ở đây và không phải xét nghiệm khẳng định chẩn đoán chính.",
        4: "Nội soi được đặt ra khi nghi mất máu tiêu hóa. Bé không có phân đen, không máu trong phân, và nguyên nhân dinh dưỡng đã quá rõ ràng."
      },
      objective:
        "Thiếu máu hồng cầu nhỏ nhược sắc ở trẻ tập đi uống trên một lít sữa bò mỗi ngày là thiếu máu thiếu sắt do chế độ ăn; ferritin thấp là chỉ số khẳng định nhạy nhất. Điều trị bằng sắt uống, giới hạn sữa bò và tăng thực phẩm giàu sắt, với hồng cầu lưới tăng sau 3–7 ngày là dấu hiệu đáp ứng sớm nhất."
    },

    {
      spec: "Huyết học nhi",
      task: "Bước tiếp theo trong chẩn đoán",
      short: "Đau xương, bầm tím và gan lách hạch to",
      vignette: [
        "Bé gái 5 tuổi được đưa đến khám vì <b>mệt mỏi, xanh xao tăng dần trong sáu tuần</b>, kèm sốt dai dẳng không rõ nguyên nhân. Bé <b>đau hai chân về đêm</b> tới mức khóc và có lúc <b>không chịu đi</b>, dù không có chấn thương.",
        "Mẹ thấy bé <b>bầm tím nhiều nơi</b> dù không va đập, và chảy máu chân răng khi đánh răng. Bé sụt 2 kg và ra mồ hôi đêm.",
        "Khám: da niêm nhợt, nhiều mảng bầm tím và chấm xuất huyết ở tứ chi. <b>Gan to 4 cm, lách to 5 cm dưới bờ sườn</b>. <b>Hạch cổ, nách và bẹn to nhiều nơi</b>, chắc, không đau, di động. Ấn đau xương ức và xương chày hai bên.",
        "Không hạch nào hóa mủ, không ổ nhiễm khuẩn khu trú."
      ],
      vitals: [
        ["Nhiệt độ", "38,4 °C"],
        ["Mạch", "128 l/ph"],
        ["Nhịp thở", "26 l/ph"],
        ["Huyết áp", "96/58"],
        ["Cân nặng", "16 kg"]
      ],
      labs: {
        title: "Công thức máu",
        rows: [
          ["Hemoglobin", "6,2 g/dL", "11,5–15,5", "lo"],
          ["Tiểu cầu", "22.000/mm³", "150.000–450.000", "lo"],
          ["Bạch cầu", "48.000/mm³", "5.000–15.000", "hi"],
          ["Bạch cầu hạt trung tính tuyệt đối", "480/mm³", "> 1.500", "lo"],
          ["Phết máu ngoại vi", "Nhiều tế bào non (blast) chiếm 62%", "0%", "hi"],
          ["LDH", "1.480 U/L", "140–280", "hi"],
          ["Acid uric", "9,2 mg/dL", "2,0–5,5", "hi"]
        ]
      },
      stem: "Bước tiếp theo tốt nhất để xác định chẩn đoán là gì?",
      choices: [
        "Chọc hút và sinh thiết tủy xương kèm phân tích dấu ấn miễn dịch và di truyền tế bào",
        "Sinh thiết hạch cổ",
        "Chụp cắt lớp toàn thân để đánh giá giai đoạn",
        "Cấy máu và điều trị kháng sinh, đánh giá lại sau một tuần",
        "Xét nghiệm huyết thanh chẩn đoán nhiễm virus Epstein-Barr"
      ],
      answer: 0,
      why: [
        "Bệnh cảnh rất điển hình của <b>bệnh bạch cầu cấp dòng lympho</b> — ung thư thường gặp nhất ở trẻ em, đỉnh tuổi 2–5. Nguyên lý cốt lõi là <b>tế bào ác tính lấn át tủy xương</b>, gây <b>suy cả ba dòng</b>: thiếu máu (xanh xao, mệt), giảm tiểu cầu (bầm tím, chảy máu) và giảm bạch cầu hạt trung tính (sốt dai dẳng, nhiễm khuẩn).",
        "Song song là biểu hiện <b>thâm nhiễm ngoài tủy</b>: gan lách to, hạch to nhiều nơi, và <b>đau xương</b> do tế bào non làm căng màng xương — chi tiết này ở trẻ nhỏ thường biểu hiện bằng việc trẻ không chịu đi và dễ bị nhầm với bệnh khớp.",
        "Chẩn đoán xác định là <b>chọc hút và sinh thiết tủy xương</b>, với ngưỡng chẩn đoán là <b>tế bào non chiếm từ 20% trở lên</b>. Nhưng lấy tủy không chỉ để đếm: <b>dấu ấn miễn dịch</b> phân biệt dòng lympho với dòng tủy, còn <b>di truyền tế bào và sinh học phân tử</b> xác định các bất thường quyết định phân nhóm nguy cơ và phác đồ điều trị. Cần chọc dịch não tủy đánh giá xâm lấn thần kinh trung ương, và <b>dự phòng hội chứng ly giải u</b> — acid uric đã tăng — bằng bù dịch và allopurinol hoặc rasburicase."
      ],
      wrongs: {
        1: "Sinh thiết hạch hữu ích cho u lympho khi bệnh khu trú ở hạch, nhưng ở đây <b>máu ngoại vi đã có 62% tế bào non</b> và có suy tủy rõ, nên tủy xương mới là nơi cho chẩn đoán đầy đủ và các xét nghiệm phân tầng nguy cơ.",
        2: "Chụp cắt lớp toàn thân không phải bước chẩn đoán của bệnh bạch cầu cấp, vốn là bệnh lan tỏa của tủy xương ngay từ đầu chứ không phân giai đoạn theo kiểu u đặc.",
        3: "Trì hoãn một tuần ở trẻ có giảm bạch cầu hạt nặng và blast tràn ngập máu ngoại vi là rất nguy hiểm: nguy cơ nhiễm khuẩn huyết, chảy máu và hội chứng ly giải u đều cao.",
        4: "Nhiễm Epstein-Barr gây sốt, hạch to, lách to và có thể có tế bào lympho không điển hình, nhưng <b>không gây suy ba dòng</b> với 62% tế bào non thật sự trên phết máu."
      },
      objective:
        "Bệnh bạch cầu cấp dòng lympho ở trẻ biểu hiện bằng suy ba dòng tủy kèm gan lách hạch to và đau xương, với tế bào non trên phết máu ngoại vi. Chẩn đoán xác định bằng chọc hút và sinh thiết tủy xương với tế bào non từ 20% trở lên, kèm dấu ấn miễn dịch và di truyền tế bào để phân tầng nguy cơ."
    },

    {
      spec: "Sơ sinh",
      task: "Bước xử trí tiếp theo",
      short: "Vàng da nặng trong 24 giờ đầu sau sinh",
      vignette: [
        "Bé trai sinh thường đủ tháng 39 tuần, cân nặng 3,4 kg, Apgar 9 và 10. Mẹ <b>nhóm máu O, Rh dương</b>; con <b>nhóm máu A, Rh dương</b>. Đây là con so.",
        "Điều dưỡng ghi nhận bé <b>vàng da rõ ở mặt và ngực khi mới 18 giờ tuổi</b>. Bé bú mẹ được nhưng ngủ nhiều hơn bình thường.",
        "Khám: bé vàng da tới ngang rốn, tỉnh khi đánh thức, trương lực cơ bình thường, phản xạ bú tốt. <b>Không gan lách to</b>, không bướu huyết thanh lớn, không tụ máu dưới màng xương sọ, không dị tật.",
        "Không có tiền sử gia đình thiếu men G6PD hay bệnh hồng cầu di truyền."
      ],
      vitals: [
        ["Nhiệt độ", "36,9 °C"],
        ["Mạch", "142 l/ph"],
        ["Nhịp thở", "46 l/ph"],
        ["Cân nặng", "3,3 kg"],
        ["Tuổi", "18 giờ"]
      ],
      labs: {
        title: "Xét nghiệm",
        rows: [
          ["Bilirubin toàn phần", "14,8 mg/dL", "Trên bách phân vị 95 theo giờ tuổi", "hi"],
          ["Bilirubin trực tiếp", "0,4 mg/dL", "< 0,5", ""],
          ["Hemoglobin", "13,2 g/dL", "14,0–22,0", "lo"],
          ["Hồng cầu lưới", "8,4%", "3–7", "hi"],
          ["Nghiệm pháp Coombs trực tiếp", "Dương tính", "Âm tính", "hi"],
          ["Phết máu", "Nhiều hồng cầu hình cầu nhỏ", "—", "hi"]
        ]
      },
      stem: "Chẩn đoán và bước xử trí tiếp theo phù hợp nhất là gì?",
      choices: [
        "Tan máu do bất đồng nhóm máu ABO — chiếu đèn tích cực ngay và theo dõi bilirubin sát",
        "Vàng da sinh lý — trấn an mẹ và theo dõi thường quy",
        "Vàng da do bú mẹ không đủ — bổ sung sữa công thức và kiểm tra lại sau 48 giờ",
        "Teo đường mật — siêu âm gan mật cấp",
        "Nhiễm khuẩn huyết sơ sinh — cấy máu và kháng sinh tĩnh mạch đơn thuần"
      ],
      answer: 0,
      why: [
        "Nguyên tắc bao trùm: <b>vàng da xuất hiện trong 24 giờ đầu sau sinh luôn là bệnh lý</b> và nguyên nhân hàng đầu phải nghĩ tới là <b>tan máu</b>.",
        "Bộ xét nghiệm khẳng định <b>bất đồng nhóm máu ABO</b>: mẹ nhóm O có sẵn kháng thể kháng A và kháng B dạng IgG qua được bánh nhau, con nhóm A; hậu quả là <b>Coombs trực tiếp dương tính</b>, <b>hồng cầu lưới tăng</b> phản ánh tủy tăng sinh bù, <b>hemoglobin giảm</b> và <b>hồng cầu hình cầu nhỏ</b> trên phết máu. Khác với bất đồng Rh, bất đồng ABO có thể xảy ra ngay ở <b>con so</b> vì kháng thể tự nhiên đã tồn tại sẵn.",
        "Xử trí là <b>chiếu đèn tích cực ngay</b>, dựa trên biểu đồ bilirubin theo <b>giờ tuổi</b> và nhóm nguy cơ. Ánh sáng xanh chuyển bilirubin gián tiếp thành đồng phân tan trong nước, thải được mà không cần liên hợp ở gan. Phải theo dõi bilirubin sát và tính <b>tốc độ tăng</b>; nếu bilirubin tiếp tục tăng nhanh hoặc vượt ngưỡng thay máu thì cần <b>thay máu</b>, có thể phối hợp immunoglobulin tĩnh mạch. Mục tiêu tối thượng là ngăn <b>bệnh não do bilirubin</b> — vàng da nhân — vốn để lại di chứng vĩnh viễn."
      ],
      wrongs: {
        1: "Vàng da sinh lý <b>không bao giờ xuất hiện trong 24 giờ đầu</b>; nó khởi phát sau 24–48 giờ, đỉnh ở ngày 3–5, không gây thiếu máu và Coombs âm tính.",
        2: "Vàng da do bú mẹ không đủ xuất hiện vào ngày thứ 2–4 khi trẻ sụt cân nhiều do bú chưa hiệu quả, không kèm Coombs dương tính hay thiếu máu tan máu.",
        3: "Teo đường mật gây tăng bilirubin <b>trực tiếp</b> và biểu hiện sau vài tuần với phân bạc màu. Ở đây bilirubin trực tiếp bình thường và bé mới 18 giờ tuổi.",
        4: "Nhiễm khuẩn huyết có thể gây vàng da nhưng thường kèm dấu hiệu nhiễm độc, rối loạn thân nhiệt và bú kém rõ, và <b>không giải thích được Coombs dương tính cùng hồng cầu hình cầu</b>."
      },
      objective:
        "Vàng da trong 24 giờ đầu sau sinh luôn là bệnh lý và nguyên nhân hàng đầu là tan máu. Bất đồng ABO ở mẹ nhóm O và con nhóm A hoặc B cho Coombs trực tiếp dương tính, hồng cầu lưới tăng và hồng cầu hình cầu, có thể xảy ra ngay ở con so; xử trí là chiếu đèn tích cực với ngưỡng theo giờ tuổi, thay máu nếu vượt ngưỡng."
    },


    {
      spec: "Sơ sinh",
      task: "Chẩn đoán nhiều khả năng nhất",
      short: "Suy hô hấp tăng dần ở trẻ sinh non 30 tuần",
      vignette: [
        "Bé trai sinh mổ ở tuổi thai <b>30 tuần</b> do mẹ chuyển dạ sinh non không cầm được, cân nặng 1.450 g. Mẹ <b>chỉ kịp tiêm một mũi betamethasone 6 giờ trước sinh</b>. Mẹ đái tháo đường thai kỳ điều trị bằng insulin.",
        "Ngay sau sinh bé khóc yếu, và trong <b>hai giờ đầu suy hô hấp tăng dần</b>: thở nhanh, <b>rên rỉ thì thở ra</b>, <b>phập phồng cánh mũi</b> và <b>co kéo liên sườn cùng hõm ức rõ</b>.",
        "Khám: bé tím quanh môi khi thở khí trời, phổi thông khí giảm hai bên đối xứng, không nghe ran, tim đều không tiếng thổi. Bụng mềm. Không dị tật ngoài.",
        "X-quang ngực: <b>hai phổi mờ dạng lưới hạt mịn như kính mờ, giảm thể tích phổi, có hình ảnh khí phế quản đồ</b> trên nền mờ lan tỏa hai bên."
      ],
      vitals: [
        ["Nhiệt độ", "36,5 °C"],
        ["Mạch", "168 l/ph"],
        ["Nhịp thở", "78 l/ph"],
        ["SpO2", "84% khí trời"],
        ["Cân nặng", "1.450 g"]
      ],
      labs: {
        title: "Khí máu động mạch",
        rows: [
          ["pH", "7,22", "7,35–7,45", "lo"],
          ["PaCO2", "58 mm Hg", "35–45", "hi"],
          ["PaO2", "46 mm Hg", "60–80", "lo"],
          ["Bicarbonat", "20 mEq/L", "22–28", "lo"],
          ["Glucose", "42 mg/dL", "> 45", "lo"]
        ]
      },
      stem: "Chẩn đoán nhiều khả năng nhất là gì?",
      choices: [
        "Hội chứng suy hô hấp do thiếu surfactant",
        "Thở nhanh thoáng qua ở trẻ sơ sinh",
        "Hội chứng hít phân su",
        "Viêm phổi sơ sinh do liên cầu nhóm B",
        "Thoát vị hoành bẩm sinh"
      ],
      answer: 0,
      why: [
        "Đây là <b>hội chứng suy hô hấp</b> do <b>thiếu surfactant</b>, còn gọi là bệnh màng trong. Yếu tố nguy cơ then chốt là <b>sinh non</b>: tế bào phổi týp II chỉ sản xuất đủ surfactant từ khoảng tuần 34–36, nên bé 30 tuần gần như chắc chắn thiếu. Mẹ <b>đái tháo đường</b> càng làm chậm trưởng thành phổi vì tăng insulin ở thai ức chế tổng hợp surfactant, và <b>corticoid trước sinh chưa đủ liệu trình</b> (cần ít nhất 24–48 giờ để có tác dụng).",
        "Thiếu surfactant làm sức căng bề mặt phế nang tăng, phế nang <b>xẹp cuối thì thở ra</b>. Bé bù trừ bằng cách <b>rên rỉ</b> — đóng thanh môn một phần khi thở ra để giữ áp lực dương trong phổi. Đây là dấu hiệu rất gợi ý.",
        "Hình ảnh X-quang là kinh điển: <b>mờ dạng lưới hạt mịn như kính mờ</b>, <b>giảm thể tích phổi</b> và <b>khí phế quản đồ</b>. Điều trị gồm hỗ trợ hô hấp bằng áp lực dương liên tục hoặc thở máy, <b>bơm surfactant ngoại sinh qua nội khí quản</b>, và chăm sóc sơ sinh non tháng. Điểm phân biệt quan trọng nhất với thở nhanh thoáng qua là <b>thể tích phổi giảm</b> chứ không tăng, và diễn tiến <b>nặng dần</b> chứ không cải thiện."
      ],
      wrongs: {
        1: "Thở nhanh thoáng qua gặp ở trẻ <b>đủ tháng sinh mổ không qua chuyển dạ</b>, do chậm hấp thu dịch phổi. Phim cho <b>tăng thể tích phổi</b>, dịch ở rãnh liên thùy và tăng đậm mạch máu quanh rốn phổi; bệnh <b>tự cải thiện trong 24–72 giờ</b> chứ không nặng dần.",
        2: "Hội chứng hít phân su gặp ở trẻ <b>đủ tháng hoặc già tháng</b> có nước ối nhuốm phân su, với phim thâm nhiễm thô không đều xen kẽ vùng ứ khí và tăng thể tích phổi. Bé 30 tuần hiếm khi có phân su trong ối.",
        3: "Viêm phổi do liên cầu nhóm B có thể giống hệt bệnh màng trong trên phim và luôn cần cân nhắc dùng kháng sinh, nhưng thường kèm dấu hiệu nhiễm khuẩn toàn thân và yếu tố nguy cơ như ối vỡ kéo dài, mẹ sốt hay mẹ mang liên cầu — không có ở đây.",
        4: "Thoát vị hoành bẩm sinh gây suy hô hấp ngay sau sinh với <b>bụng lõm hình thuyền</b>, tim bị đẩy lệch và <b>nghe tiếng nhu động ruột trong lồng ngực</b>; phim thấy quai ruột trong khoang ngực. Khám và phim ở đây hoàn toàn khác."
      },
      objective:
        "Hội chứng suy hô hấp do thiếu surfactant gặp ở trẻ sinh non, nặng thêm khi mẹ đái tháo đường hoặc corticoid trước sinh chưa đủ, với rên rỉ thở ra và phim mờ lưới hạt kèm giảm thể tích phổi. Điều trị là hỗ trợ hô hấp áp lực dương và bơm surfactant; thể tích phổi giảm là điểm phân biệt với thở nhanh thoáng qua."
    },

    {
      spec: "Tim mạch nhi",
      task: "Bước tiếp theo trong chẩn đoán",
      short: "Tăng huyết áp tay và mạch bẹn yếu ở thiếu niên",
      vignette: [
        "Nam 14 tuổi đi khám sức khỏe học đường, tình cờ phát hiện <b>huyết áp cao ở hai tay</b>. Bệnh nhân không triệu chứng, học tập bình thường, nhưng khi hỏi kỹ thì thừa nhận <b>mỏi hai chân và đau bắp chân khi chạy</b>, phải dừng sớm hơn bạn bè.",
        "Khám: thể trạng tốt, phần trên cơ thể phát triển hơn phần dưới. <b>Huyết áp tay phải 156/92, huyết áp chân 118/70</b>. <b>Mạch bẹn hai bên yếu và đến muộn hơn mạch quay</b>.",
        "Nghe tim: tiếng thổi tâm thu 2/6 ở khoang liên sườn hai bờ trái xương ức, <b>nghe rõ hơn ở vùng liên bả vai sau lưng</b>. Không tiếng thổi tâm trương. Không tím, không ngón tay dùi trống.",
        "X-quang ngực: bóng tim hơi to, <b>khuyết bờ dưới các xương sườn 4 đến 8 hai bên</b>."
      ],
      vitals: [
        ["Nhiệt độ", "36,8 °C"],
        ["Huyết áp tay", "156/92"],
        ["Huyết áp chân", "118/70"],
        ["Mạch", "78 l/ph"],
        ["Cân nặng", "52 kg"]
      ],
      labs: {
        title: "Xét nghiệm",
        rows: [
          ["Creatinine", "0,8 mg/dL", "0,5–1,0", ""],
          ["Kali", "4,2 mEq/L", "3,5–5,0", ""],
          ["TSH", "2,0 mIU/L", "0,4–4,0", ""],
          ["Tổng phân tích nước tiểu", "Bình thường", "—", ""],
          ["Điện tâm đồ", "Dày thất trái", "—", "hi"]
        ]
      },
      stem: "Bước tiếp theo tốt nhất trong chẩn đoán là gì?",
      choices: [
        "Siêu âm tim",
        "Siêu âm Doppler động mạch thận",
        "Định lượng metanephrine tự do huyết tương",
        "Đo huyết áp 24 giờ lưu động rồi đánh giá lại",
        "Bắt đầu thuốc hạ áp và theo dõi ngoại trú"
      ],
      answer: 0,
      why: [
        "Bệnh cảnh là <b>hẹp eo động mạch chủ</b>. Dấu hiệu quyết định là <b>chênh lệch huyết áp giữa chi trên và chi dưới</b> cùng <b>mạch bẹn yếu và đến muộn hơn mạch quay</b> — do máu tới nửa dưới cơ thể phải đi qua chỗ hẹp hoặc qua tuần hoàn bàng hệ.",
        "Các dấu hiệu bổ trợ đều khớp: <b>đau cách hồi ở chân khi gắng sức</b>, tiếng thổi <b>nghe rõ ở vùng liên bả vai</b> (vị trí giải phẫu của chỗ hẹp, ngay sau chỗ xuất phát động mạch dưới đòn trái), và <b>khuyết bờ dưới xương sườn</b> do các động mạch liên sườn giãn to làm bàng hệ bào mòn xương.",
        "<b>Siêu âm tim</b> là bước tiếp theo: nó xác định vị trí và mức độ hẹp, đo chênh áp qua chỗ hẹp, đánh giá phì đại thất trái và tìm các dị tật đi kèm — quan trọng nhất là <b>van động mạch chủ hai lá van</b>, gặp ở khoảng 50–75% bệnh nhân. Sau đó thường chụp cắt lớp hoặc cộng hưởng từ mạch máu để lập kế hoạch can thiệp bằng nong bóng đặt stent hoặc phẫu thuật. Cần nhớ hẹp eo động mạch chủ cũng thường đi kèm <b>hội chứng Turner</b> ở bệnh nhân nữ."
      ],
      wrongs: {
        1: "Hẹp động mạch thận cũng gây tăng huyết áp thứ phát ở người trẻ, nhưng <b>không</b> gây chênh lệch huyết áp tay – chân, mạch bẹn yếu hay khuyết xương sườn. Nó thường có tiếng thổi ở bụng.",
        2: "U tủy thượng thận gây tăng huyết áp <b>từng cơn</b> kèm đau đầu, hồi hộp và vã mồ hôi. Bệnh nhân không có triệu chứng kịch phát và bệnh này không giải thích được các dấu hiệu mạch máu.",
        3: "Đo huyết áp lưu động phân biệt tăng huyết áp áo choàng trắng, nhưng ở đây đã có <b>bằng chứng tổn thương cơ quan đích</b> (dày thất trái) cùng dấu hiệu khám thực thể rất đặc hiệu — không còn nghi ngờ gì về tính thực của tăng huyết áp.",
        4: "Điều trị hạ áp mà bỏ qua nguyên nhân cơ học là sai. Hẹp eo không được sửa chữa dẫn tới suy tim, phình và bóc tách động mạch chủ, xuất huyết não do phình mạch, và tăng huyết áp kháng trị."
      },
      objective:
        "Tăng huyết áp ở chi trên kèm chênh lệch huyết áp tay – chân, mạch bẹn yếu đến muộn và khuyết bờ dưới xương sườn là hẹp eo động mạch chủ. Siêu âm tim là bước chẩn đoán tiếp theo, đồng thời tìm van động mạch chủ hai lá van đi kèm ở phần lớn bệnh nhân."
    },

    {
      spec: "Tim mạch nhi",
      task: "Bước xử trí tiếp theo",
      short: "Cơn tím ở trẻ 8 tháng khi khóc",
      vignette: [
        "Bé trai 8 tháng tuổi được đưa vào cấp cứu vì <b>cơn tím tái đột ngột khi đang khóc dữ dội</b> sáng nay: bé tím toàn thân, thở nhanh sâu, lả đi khoảng 5 phút. Mẹ kể bé đã có vài cơn tương tự nhẹ hơn trong hai tháng qua, thường vào buổi sáng hoặc khi bú.",
        "Mẹ để ý bé hay <b>ngồi xổm hoặc co gập hai chân lên bụng</b> sau khi vận động, và sau đó đỡ tím hẳn.",
        "Bé chậm tăng cân từ khi sinh. Không sốt, không ho, không tiêu chảy.",
        "Khám hiện tại: bé tím môi và đầu chi, quấy. <b>Tiếng thổi tâm thu tống máu ở bờ trái xương ức trên</b> — nhưng mẹ nói tiếng thổi này <b>nhỏ hẳn đi trong cơn tím</b>. Ngón tay có dấu dùi trống nhẹ.",
        "X-quang ngực: bóng tim hình chiếc ủng, tuần hoàn phổi giảm."
      ],
      vitals: [
        ["Nhiệt độ", "36,9 °C"],
        ["Mạch", "168 l/ph"],
        ["Nhịp thở", "56 l/ph"],
        ["SpO2", "72% khí trời"],
        ["Cân nặng", "6,9 kg"]
      ],
      labs: {
        title: "Xét nghiệm",
        rows: [
          ["Hemoglobin", "18,2 g/dL", "10,5–13,5", "hi"],
          ["Hematocrit", "56%", "33–39", "hi"],
          ["pH máu", "7,26", "7,35–7,45", "lo"],
          ["Siêu âm tim", "Thông liên thất lớn, hẹp đường ra thất phải, động mạch chủ cưỡi ngựa, dày thất phải", "—", "hi"]
        ]
      },
      stem: "Bước xử trí đầu tiên trong cơn là gì?",
      choices: [
        "Trấn an bé và đặt ở tư thế gối – ngực, cho thở oxy",
        "Truyền dobutamine để tăng co bóp cơ tim",
        "Tiêm furosemide tĩnh mạch để giảm ứ huyết phổi",
        "Truyền nitroglycerin để giảm hậu tải",
        "Mổ sửa chữa toàn bộ ngay trong cơn"
      ],
      answer: 0,
      why: [
        "Bé mắc <b>tứ chứng Fallot</b> — siêu âm đã xác nhận đủ bốn thành phần: thông liên thất, hẹp đường ra thất phải, động mạch chủ cưỡi ngựa và dày thất phải. Hình ảnh <b>bóng tim hình chiếc ủng</b> với tuần hoàn phổi giảm là kinh điển.",
        "Đây là <b>cơn tím</b>. Cơ chế là <b>co thắt phễu thất phải</b> hoặc <b>giảm sức cản mạch hệ thống</b> (khi khóc, gắng sức, sốt) làm <b>tăng luồng thông phải sang trái</b> qua lỗ thông liên thất, khiến máu tĩnh mạch đi thẳng ra động mạch chủ mà không qua phổi. Chi tiết <b>tiếng thổi nhỏ đi trong cơn</b> chính là bằng chứng: ít máu qua đường ra thất phải hơn nên tiếng thổi yếu — dấu hiệu <b>nặng</b> chứ không phải cải thiện.",
        "Xử trí đầu tiên nhắm vào <b>tăng sức cản mạch hệ thống</b> để đẩy máu trở lại phổi: <b>tư thế gối – ngực</b> ở trẻ nhỏ hoặc <b>ngồi xổm</b> ở trẻ lớn — chính là hành động bé đã tự học được. Đồng thời <b>trấn an, hạn chế kích thích</b> để cắt vòng xoắn khóc làm nặng thêm, và cho <b>thở oxy</b>. Nếu chưa đủ thì tiếp tục bằng morphine để giảm kích thích và thở nhanh, bù dịch tăng tiền tải, rồi <b>phenylephrine</b> để tăng sức cản hệ thống, và chẹn beta để giảm co thắt phễu."
      ],
      wrongs: {
        1: "Thuốc tăng co bóp làm <b>tăng co thắt phễu thất phải</b> và làm cơn tím nặng thêm. Đây là sai lầm sinh lý quan trọng nhất cần tránh trong tình huống này.",
        2: "Lợi tiểu làm giảm tiền tải và giảm thể tích, khiến luồng thông phải sang trái tăng lên. Bé cũng không hề có ứ huyết phổi — ngược lại, tuần hoàn phổi đang giảm.",
        3: "Giảm hậu tải là điều <b>ngược hoàn toàn</b> với mục tiêu điều trị: sức cản hệ thống giảm sẽ làm máu càng dễ đi tắt từ thất phải sang động mạch chủ.",
        4: "Phẫu thuật sửa chữa toàn bộ là điều trị triệt để nhưng phải thực hiện theo chương trình sau khi bé được ổn định. Mổ trong cơn tím có nguy cơ tử vong rất cao."
      },
      objective:
        "Cơn tím trong tứ chứng Fallot do co thắt phễu thất phải hoặc giảm sức cản hệ thống làm tăng luồng thông phải sang trái, với tiếng thổi nhỏ đi là dấu hiệu nặng. Xử trí đầu tiên là tư thế gối – ngực hoặc ngồi xổm, trấn an và thở oxy; tuyệt đối tránh thuốc tăng co bóp và thuốc giãn mạch."
    },

    {
      spec: "Phát triển – Hành vi",
      task: "Bước xử trí tiếp theo",
      short: "Chậm nói và không giao tiếp mắt ở trẻ 24 tháng",
      vignette: [
        "Bé trai 24 tháng tuổi được đưa đi khám vì <b>chưa nói được từ nào có nghĩa</b>. Bé từng nói được vài âm bập bẹ lúc 12 tháng nhưng sau đó không tiến triển thêm.",
        "Mẹ kể bé <b>rất ít nhìn vào mắt người khác</b>, <b>không quay đầu khi được gọi tên</b>, <b>không chỉ tay vào vật mình muốn</b> và không chỉ để chia sẻ sự chú ý. Bé không chơi giả vờ, không bắt chước động tác của người lớn.",
        "Bé <b>xếp đồ chơi thành hàng dài</b> hàng giờ, rất khó chịu khi bị xáo trộn, và <b>vỗ tay lắc người lặp đi lặp lại</b> khi phấn khích. Bé chỉ ăn ba loại thức ăn nhất định và phản ứng mạnh với tiếng ồn lớn.",
        "Bé đi được lúc 13 tháng, vận động tinh và thô bình thường. Khám thực thể, thính lực đo bằng đo âm ốc tai và khám thần kinh đều bình thường."
      ],
      vitals: [
        ["Nhiệt độ", "36,8 °C"],
        ["Mạch", "104 l/ph"],
        ["Nhịp thở", "24 l/ph"],
        ["Cân nặng", "12,4 kg"],
        ["Vòng đầu", "Bách phân vị 60"]
      ],
      stem: "Bước xử trí tiếp theo tốt nhất là gì?",
      choices: [
        "Chuyển đánh giá chẩn đoán chuyên sâu về rối loạn phổ tự kỷ và bắt đầu can thiệp sớm ngay",
        "Trấn an mẹ vì nhiều bé trai nói muộn và hẹn khám lại lúc 3 tuổi",
        "Chụp cộng hưởng từ sọ não trước khi làm bất cứ điều gì",
        "Bắt đầu risperidone để giảm hành vi lặp lại",
        "Chỉ can thiệp ngôn ngữ trị liệu, chưa cần đánh giá gì thêm"
      ],
      answer: 0,
      why: [
        "Bé có bộ triệu chứng đầy đủ của <b>rối loạn phổ tự kỷ</b>, gồm hai nhóm tiêu chuẩn. Nhóm thứ nhất là <b>khiếm khuyết giao tiếp và tương tác xã hội</b>: không giao tiếp mắt, không đáp ứng khi gọi tên, <b>không chỉ tay để chia sẻ chú ý</b> và không chơi giả vờ. Nhóm thứ hai là <b>hành vi và sở thích rập khuôn, thu hẹp</b>: xếp đồ chơi thành hàng, đòi hỏi sự bất biến, vỗ tay lắc người, ăn uống chọn lọc cực đoan và nhạy cảm giác quan.",
        "Việc <b>thính lực bình thường</b> đã loại trừ nguyên nhân chậm nói thường gặp nhất cần kiểm tra đầu tiên. Cần lưu ý các dấu hiệu báo động phải đánh giá ngay ở mọi lứa tuổi: không bập bẹ lúc 12 tháng, không chỉ tay lúc 14 tháng, không nói từ đơn lúc 16 tháng, không nói câu hai từ lúc 24 tháng, hoặc <b>thoái lui kỹ năng đã có</b> ở bất kỳ thời điểm nào.",
        "Điểm quan trọng nhất về xử trí: <b>can thiệp phải bắt đầu ngay, không chờ hoàn tất chẩn đoán</b>. Can thiệp hành vi chuyên sâu sớm cải thiện rõ rệt ngôn ngữ, nhận thức và khả năng thích nghi, và <b>hiệu quả phụ thuộc mạnh vào việc bắt đầu sớm</b>. Song song, chuyển đánh giá chẩn đoán chuyên sâu và làm các xét nghiệm tìm nguyên nhân như hội chứng nhiễm sắc thể X dễ gãy và microarray nhiễm sắc thể."
      ],
      wrongs: {
        1: "Đây là sai lầm nguy hiểm nhất. Trẻ chậm nói đơn thuần vẫn <b>giao tiếp mắt tốt, chỉ tay, đáp ứng khi gọi tên và chơi giả vờ</b>. Chờ tới 3 tuổi là đánh mất giai đoạn não có tính mềm dẻo cao nhất.",
        2: "Hình ảnh học không được chỉ định thường quy trong rối loạn phổ tự kỷ. Nó chỉ đặt ra khi có dấu thần kinh khu trú, co giật, đầu nhỏ hoặc đầu to bất thường — bé không có dấu hiệu nào.",
        3: "Risperidone được dùng cho <b>cáu gắt và hành vi gây hấn nặng</b> ở trẻ lớn hơn, không phải điều trị nền tảng và không cải thiện các khiếm khuyết cốt lõi về giao tiếp xã hội.",
        4: "Ngôn ngữ trị liệu là một phần cần thiết nhưng <b>không đủ</b>: bé cần chương trình can thiệp toàn diện về hành vi và kỹ năng xã hội, cùng đánh giá chẩn đoán chính thức để tiếp cận được các dịch vụ hỗ trợ."
      },
      objective:
        "Rối loạn phổ tự kỷ đòi hỏi khiếm khuyết giao tiếp xã hội cùng hành vi rập khuôn thu hẹp; không chỉ tay, không giao tiếp mắt và không đáp ứng khi gọi tên là các dấu hiệu báo động. Phải kiểm tra thính lực và bắt đầu can thiệp sớm ngay lập tức, song song với việc chuyển đánh giá chẩn đoán, chứ không chờ đợi hay trấn an."
    },

    {
      spec: "Cơ xương khớp nhi",
      task: "Bước tiếp theo trong chẩn đoán",
      short: "Nếp lằn đùi không cân xứng ở trẻ 3 tuần",
      vignette: [
        "Bé gái 3 tuần tuổi được khám sức khỏe định kỳ. Bé <b>là con so, ngôi mông</b>, sinh mổ ở tuần 39, cân nặng 3,5 kg. <b>Mẹ của bé cũng từng phải mang nẹp háng khi còn nhỏ.</b>",
        "Bé bú tốt, tăng cân tốt, không quấy khóc bất thường, không sốt.",
        "Khám: <b>các nếp lằn da ở mặt trong đùi và mông hai bên không cân xứng</b>, bên trái có thêm một nếp. Khi gập gối và háng, <b>gối trái thấp hơn gối phải</b>. Dạng háng trái bị hạn chế so với bên phải.",
        "Khi khám khớp háng trái, người khám cảm nhận được <b>một tiếng lục cục khi dạng và đẩy đùi ra trước</b>, và <b>cảm giác trật ra khi khép và ấn đùi ra sau</b>. Khớp háng phải bình thường."
      ],
      vitals: [
        ["Nhiệt độ", "36,8 °C"],
        ["Mạch", "138 l/ph"],
        ["Nhịp thở", "40 l/ph"],
        ["Cân nặng", "3,8 kg"],
        ["Tuổi", "3 tuần"]
      ],
      stem: "Bước tiếp theo tốt nhất trong chẩn đoán là gì?",
      choices: [
        "Siêu âm khớp háng",
        "Chụp X-quang khung chậu thẳng",
        "Chụp cộng hưởng từ khớp háng có gây mê",
        "Theo dõi và khám lại sau ba tháng",
        "Chọc dịch khớp háng để loại trừ viêm khớp nhiễm khuẩn"
      ],
      answer: 0,
      why: [
        "Đây là <b>loạn sản phát triển khớp háng</b>. Các yếu tố nguy cơ kinh điển đều có mặt và thường được nhớ bằng bốn chữ F: <b>giới nữ</b>, <b>con so</b>, <b>ngôi mông</b> và <b>tiền sử gia đình</b>.",
        "Khám thực thể đã rất gợi ý: <b>nếp lằn đùi không cân xứng</b>, <b>dấu Galeazzi dương tính</b> (một gối thấp hơn khi gập gối và háng), hạn chế dạng háng, cùng <b>nghiệm pháp Ortolani</b> dương tính (nắn khớp trật trở vào ổ, cho tiếng lục cục) và <b>nghiệm pháp Barlow</b> dương tính (làm trật khớp không vững ra khỏi ổ).",
        "<b>Siêu âm là thăm dò lựa chọn ở trẻ dưới 4–6 tháng tuổi</b>. Lý do rất đơn giản: ở lứa tuổi này chỏm xương đùi <b>vẫn là sụn nên chưa cản quang</b>, X-quang gần như không thấy gì; trong khi siêu âm hiển thị rõ sụn, đo được độ che phủ của ổ cối và đánh giá được độ vững của khớp một cách động. Từ khoảng <b>4–6 tháng trở lên</b>, khi nhân cốt hóa chỏm đùi đã xuất hiện, X-quang mới trở thành lựa chọn. Điều trị sớm bằng <b>nẹp Pavlik</b> có tỉ lệ thành công rất cao, còn phát hiện muộn dẫn tới đi khập khiễng, chân ngắn và thoái hóa khớp háng sớm."
      ],
      wrongs: {
        1: "X-quang ở trẻ 3 tuần tuổi <b>không có giá trị</b> vì chỏm xương đùi còn là sụn chưa cốt hóa nên không hiện trên phim, đồng thời gây nhiễm xạ vùng sinh dục không cần thiết.",
        2: "Cộng hưởng từ cho hình ảnh chi tiết nhưng đòi hỏi gây mê ở trẻ nhỏ, tốn kém, và không cần thiết khi siêu âm đã đủ để chẩn đoán và theo dõi điều trị.",
        3: "Trì hoãn ba tháng làm mất giai đoạn vàng: nẹp Pavlik hiệu quả nhất khi bắt đầu <b>trước 6 tháng tuổi</b>, và ổ cối càng biến dạng theo thời gian khi chỏm đùi không nằm đúng vị trí.",
        4: "Viêm khớp háng nhiễm khuẩn biểu hiện bằng sốt, trẻ đau dữ dội, giữ chân ở tư thế gấp dạng xoay ngoài và không chịu cử động. Bé này hoàn toàn không đau và không sốt."
      },
      objective:
        "Loạn sản phát triển khớp háng có yếu tố nguy cơ là giới nữ, con so, ngôi mông và tiền sử gia đình, với dấu Galeazzi, nếp lằn không cân xứng và nghiệm pháp Ortolani, Barlow dương tính. Siêu âm là thăm dò lựa chọn dưới 4–6 tháng vì chỏm đùi còn là sụn; điều trị sớm bằng nẹp Pavlik có tỉ lệ thành công cao."
    },

    {
      spec: "Tiêu hóa nhi",
      task: "Bước xử trí tiếp theo",
      short: "Trớ sữa sau bú ở trẻ 3 tháng tăng cân tốt",
      vignette: [
        "Bé gái 3 tháng tuổi được mẹ đưa đi khám vì <b>trớ sữa sau hầu hết các cữ bú</b> từ khi 3 tuần tuổi. Sữa trào ra <b>nhẹ nhàng qua khóe miệng, không thành tia</b>, thường ngay sau khi bú hoặc khi mẹ đặt bé nằm.",
        "Điều mẹ lo lắng nhất là lượng sữa trớ ra khá nhiều và xảy ra nhiều lần trong ngày. Tuy nhiên bé <b>vẫn bú háo hức, không quấy khóc bất thường khi bú, ngủ tốt</b>.",
        "Biểu đồ tăng trưởng: cân nặng lúc sinh ở bách phân vị 50, hiện vẫn ở <b>bách phân vị 55</b>; chiều dài và vòng đầu đều theo đúng kênh tăng trưởng.",
        "Khám: bé hồng hào, linh hoạt, bụng mềm không chướng, <b>không sờ thấy khối ở thượng vị</b>, không dấu mất nước. Không ho, không khò khè, không viêm phổi tái diễn, không cong người ưỡn cổ khi bú, không máu trong chất trớ."
      ],
      vitals: [
        ["Nhiệt độ", "36,8 °C"],
        ["Mạch", "128 l/ph"],
        ["Nhịp thở", "36 l/ph"],
        ["Cân nặng", "6,1 kg"],
        ["Tuổi", "3 tháng"]
      ],
      stem: "Bước xử trí tiếp theo tốt nhất là gì?",
      choices: [
        "Trấn an mẹ, hướng dẫn cho bú lượng ít nhiều lần và giữ bé thẳng đứng sau bú",
        "Bắt đầu thuốc ức chế bơm proton",
        "Siêu âm môn vị để loại trừ hẹp phì đại môn vị",
        "Chụp lưu thông thực quản dạ dày có cản quang",
        "Đổi sang sữa công thức thủy phân hoàn toàn"
      ],
      answer: 0,
      why: [
        "Đây là <b>trào ngược dạ dày thực quản sinh lý</b> ở trẻ nhũ nhi — hiện tượng rất thường gặp, xảy ra ở khoảng một nửa số trẻ dưới 3 tháng, do <b>cơ thắt thực quản dưới còn non yếu</b>, dạ dày nằm ngang, thể tích dạ dày nhỏ và trẻ nằm nhiều.",
        "Điểm phân biệt then chốt giữa <b>trào ngược sinh lý</b> và <b>bệnh trào ngược</b> không nằm ở lượng sữa trớ mà ở <b>hậu quả</b>. Trẻ trớ sinh lý là <b>trẻ trớ vui vẻ</b>: <b>tăng cân tốt theo đúng kênh</b>, bú tốt, không quấy khi bú, không có biến chứng hô hấp.",
        "Vì vậy xử trí là <b>trấn an và điều chỉnh cách cho bú</b>: bú lượng ít và chia nhiều lần, ợ hơi giữa cữ, giữ bé thẳng đứng 20–30 phút sau bú, tránh khói thuốc, và nếu nghi dị ứng đạm sữa bò thì mẹ thử loại sữa bò khỏi chế độ ăn. Cần cho mẹ biết <b>diễn tiến tự nhiên</b>: triệu chứng đạt đỉnh khoảng 4 tháng và <b>tự hết ở khoảng 90% trẻ trước 12 tháng</b> khi bé ngồi vững và ăn đặc. Các dấu hiệu báo động cần đánh giá thêm là chậm tăng cân, nôn ra mật hoặc máu, nôn vọt thành tia, viêm phổi tái diễn, cong ưỡn người khi bú, hoặc khởi phát sau 6 tháng tuổi."
      ],
      wrongs: {
        1: "Thuốc ức chế bơm proton <b>không được khuyến cáo</b> cho trào ngược sinh lý: các thử nghiệm cho thấy không hiệu quả hơn giả dược trong giảm quấy khóc, đồng thời làm tăng nguy cơ viêm phổi, viêm ruột do <i>Clostridioides difficile</i> và gãy xương.",
        2: "Hẹp phì đại môn vị gây <b>nôn vọt thành tia không lẫn mật</b>, trẻ <b>đói ngay sau nôn</b>, <b>sụt cân</b> và mất nước, thường khởi phát 3–6 tuần tuổi. Bé này trớ nhẹ nhàng và tăng cân tốt — bệnh cảnh hoàn toàn trái ngược.",
        3: "Chụp lưu thông có cản quang dùng để tìm bất thường giải phẫu như xoay ruột bất toàn hay hẹp thực quản khi có dấu hiệu báo động. Nó <b>không</b> dùng để chẩn đoán trào ngược và gây nhiễm xạ không cần thiết.",
        4: "Sữa thủy phân hoàn toàn dành cho nghi <b>dị ứng đạm sữa bò</b>, thường có thêm chàm, phân máu, tiêu chảy hoặc chậm tăng cân — bé không có dấu hiệu nào."
      },
      objective:
        "Trào ngược sinh lý ở trẻ nhũ nhi biểu hiện bằng trớ sữa nhẹ nhàng nhưng trẻ tăng cân tốt và không có biến chứng; xử trí là trấn an và điều chỉnh cách cho bú, vì khoảng 90% tự hết trước 12 tháng. Thuốc ức chế bơm proton không hiệu quả và có hại; chậm tăng cân, nôn vọt, nôn ra mật hay máu là dấu hiệu báo động."
    },

    {
      spec: "Tiêu hóa nhi",
      task: "Bước tiếp theo trong chẩn đoán",
      short: "Táo bón từ sơ sinh kèm chậm ỉa phân su",
      vignette: [
        "Bé trai 4 tháng tuổi được đưa đi khám vì <b>táo bón nặng từ khi mới sinh</b>. Bé chỉ đi ngoài khi được thụt hoặc kích thích hậu môn, khoảng 5–7 ngày một lần, phân nhỏ như bút chì.",
        "Khai thác lại tiền sử sơ sinh: bé <b>ỉa phân su lần đầu lúc 62 giờ sau sinh</b> (bình thường trong vòng 48 giờ, đa số trong 24 giờ).",
        "Bé <b>chậm tăng cân</b>, bụng chướng dần, thỉnh thoảng nôn ra dịch xanh. Bé bú mẹ hoàn toàn.",
        "Khám: bụng <b>chướng căng, nhìn thấy quai ruột nổi</b>. Thăm trực tràng: <b>ống hậu môn thắt chặt, bóng trực tràng rỗng không có phân</b>, và khi rút ngón tay ra thì <b>phân và hơi phun ra thành tia ồ ạt</b>.",
        "Trương lực cơ toàn thân bình thường, không dấu hiệu suy giáp, thóp phẳng, không dị tật cột sống vùng cùng cụt."
      ],
      vitals: [
        ["Nhiệt độ", "36,9 °C"],
        ["Mạch", "142 l/ph"],
        ["Nhịp thở", "38 l/ph"],
        ["Cân nặng", "5,2 kg (bách phân vị 3)"],
        ["Tuổi", "4 tháng"]
      ],
      labs: {
        title: "Xét nghiệm",
        rows: [
          ["TSH", "2,4 mIU/L", "0,7–6,0", ""],
          ["Canxi toàn phần", "9,6 mg/dL", "8,8–10,8", ""],
          ["Hemoglobin", "10,8 g/dL", "10,0–13,0", ""],
          ["X-quang bụng", "Giãn đại tràng đoạn trên, đoạn trực tràng hẹp nhỏ", "—", "hi"]
        ]
      },
      stem: "Bước tiếp theo tốt nhất để xác định chẩn đoán là gì?",
      choices: [
        "Sinh thiết trực tràng tìm tế bào hạch thần kinh",
        "Bắt đầu polyethylene glycol và đánh giá lại sau bốn tuần",
        "Đo áp lực hậu môn trực tràng",
        "Chụp cắt lớp bụng có cản quang",
        "Định lượng hormone tuyến giáp lặp lại"
      ],
      answer: 0,
      why: [
        "Bệnh cảnh là <b>bệnh Hirschsprung</b> — vô hạch thần kinh bẩm sinh đoạn cuối đại tràng. Ba manh mối quyết định: <b>táo bón khởi phát ngay từ giai đoạn sơ sinh</b>, <b>chậm ỉa phân su quá 48 giờ</b>, và <b>chậm tăng cân kèm bụng chướng</b>.",
        "Khám thực thể rất đặc trưng: <b>bóng trực tràng rỗng</b> — vì phân bị ứ lại phía trên đoạn vô hạch co thắt chứ không xuống được — và <b>dấu hiệu phun trào</b> khi rút ngón tay khám. X-quang cho hình ảnh đoạn chuyển tiếp giữa đại tràng giãn phía trên và đoạn hẹp phía dưới.",
        "<b>Sinh thiết trực tràng là tiêu chuẩn vàng</b>, cho thấy <b>không có tế bào hạch</b> ở đám rối Meissner và Auerbach, kèm các sợi thần kinh phì đại và tăng nhuộm acetylcholinesterase. Điều trị là phẫu thuật cắt bỏ đoạn vô hạch và hạ đại tràng có hạch xuống nối với hậu môn. Biến chứng đáng sợ nhất phải cảnh giác là <b>viêm ruột do Hirschsprung</b> — sốt, bụng chướng, tiêu chảy phân thối và nhiễm độc — có thể gây tử vong."
      ],
      wrongs: {
        1: "Đây là điều trị của <b>táo bón chức năng</b>, vốn khởi phát <b>sau giai đoạn sơ sinh</b> — thường quanh lúc cai sữa, tập ngồi bô hoặc đi học — với trẻ <b>tăng cân tốt</b>, <b>bóng trực tràng đầy phân</b>, có hành vi nín giữ phân và són phân. Bệnh cảnh ở đây trái ngược ở mọi điểm.",
        2: "Đo áp lực hậu môn trực tràng cho thấy mất phản xạ ức chế hậu môn trực tràng và có ích như xét nghiệm sàng lọc ở trẻ lớn, nhưng khó thực hiện và khó diễn giải ở trẻ nhũ nhi, và <b>không thay thế được sinh thiết</b> để chẩn đoán xác định.",
        3: "Cắt lớp bụng không có vai trò chẩn đoán bệnh Hirschsprung và gây nhiễm xạ đáng kể; chẩn đoán dựa vào mô bệnh học chứ không dựa vào hình ảnh.",
        4: "Suy giáp bẩm sinh gây táo bón nhưng thường kèm giảm trương lực cơ, thóp rộng, vàng da kéo dài và lưỡi to; TSH ở đây đã bình thường và sàng lọc sơ sinh cũng bình thường."
      },
      objective:
        "Táo bón khởi phát từ giai đoạn sơ sinh kèm chậm ỉa phân su quá 48 giờ, chậm tăng cân, bóng trực tràng rỗng và dấu hiệu phun trào là bệnh Hirschsprung. Chẩn đoán xác định bằng sinh thiết trực tràng thấy không có tế bào hạch; táo bón chức năng thì khởi phát muộn hơn, trẻ tăng cân tốt và bóng trực tràng đầy phân."
    },

    {
      spec: "Ngộ độc nhi",
      task: "Bước tiếp theo trong chẩn đoán",
      short: "Thiếu máu và đau bụng ở trẻ sống trong nhà cũ",
      vignette: [
        "Bé trai 3 tuổi được đưa đi khám vì <b>đau bụng tái đi tái lại</b>, táo bón, chán ăn và <b>cáu gắt bất thường</b> trong ba tháng. Bé <b>chậm nói hơn so với trước</b> và cô giáo nhận xét bé giảm tập trung rõ rệt.",
        "Gia đình sống trong một <b>căn nhà xây từ những năm 1950 đang được cạo sơn sửa lại</b>. Bố làm nghề tái chế ắc quy tại nhà. Mẹ kể bé có thói quen <b>gặm bậu cửa sổ và ăn các mẩu sơn bong</b>.",
        "Khám: bé xanh xao, kém linh hoạt. Bụng mềm, ấn đau nhẹ lan tỏa, không phản ứng thành bụng, không gan lách to. Không sốt, không ban da, không hạch to. Khám thần kinh: không yếu liệt khu trú, không dấu màng não.",
        "Chế độ ăn của bé đa dạng, có thịt và rau, không uống quá nhiều sữa."
      ],
      vitals: [
        ["Nhiệt độ", "36,8 °C"],
        ["Mạch", "112 l/ph"],
        ["Nhịp thở", "24 l/ph"],
        ["Huyết áp", "96/58"],
        ["Cân nặng", "13,8 kg"]
      ],
      labs: {
        title: "Xét nghiệm",
        rows: [
          ["Hemoglobin", "8,8 g/dL", "11,0–14,0", "lo"],
          ["MCV", "68 fL", "70–86", "lo"],
          ["Phết máu", "Hồng cầu nhỏ nhược sắc, có hạt ưa base", "—", "hi"],
          ["Ferritin", "42 ng/mL", "15–150", ""],
          ["X-quang bụng", "Vài hạt cản quang trong lòng ruột", "—", "hi"],
          ["X-quang xương dài", "Dải tăng đậm độ ở hành xương", "—", "hi"]
        ]
      },
      stem: "Xét nghiệm nào sau đây là bước tiếp theo tốt nhất?",
      choices: [
        "Định lượng nồng độ chì trong máu tĩnh mạch",
        "Điện di huyết sắc tố",
        "Chọc hút tủy xương",
        "Chụp cộng hưởng từ sọ não",
        "Nội soi tiêu hóa trên tìm nguồn chảy máu"
      ],
      answer: 0,
      why: [
        "Toàn bộ bệnh cảnh chỉ tới <b>ngộ độc chì</b>. Phơi nhiễm rất rõ ràng: <b>nhà xây trước năm 1978 đang cạo sơn</b>, bố làm nghề tái chế ắc quy, và bé có <b>hội chứng pica</b> ăn mẩu sơn bong.",
        "Biểu hiện lâm sàng của chì là đa cơ quan và thường mơ hồ: <b>thần kinh</b> (cáu gắt, giảm tập trung, thoái lui phát triển, đau đầu; nặng thì bệnh não do chì với co giật và hôn mê), <b>tiêu hóa</b> (đau bụng tái diễn, táo bón, chán ăn) và <b>huyết học</b> (thiếu máu hồng cầu nhỏ với <b>hạt ưa base</b> trong hồng cầu do chì ức chế men pyrimidine 5′-nucleotidase).",
        "Hai hình ảnh học rất gợi ý: <b>hạt cản quang trong lòng ruột</b> là mẩu sơn vừa nuốt, và <b>dải chì</b> tăng đậm độ ở hành xương dài do lắng đọng chì. Nhưng chẩn đoán xác định là <b>định lượng chì trong máu tĩnh mạch</b> — mẫu mao mạch dễ nhiễm bẩn từ da nên phải khẳng định bằng máu tĩnh mạch. Xử trí gồm <b>loại bỏ nguồn phơi nhiễm</b> — biện pháp quan trọng nhất — bổ sung sắt và canxi, và <b>thải chì</b> bằng succimer hoặc EDTA cùng dimercaprol tùy nồng độ và triệu chứng."
      ],
      wrongs: {
        1: "Thalassemia cũng gây hồng cầu nhỏ nhưng <b>không giải thích được</b> đau bụng, thay đổi hành vi, thoái lui phát triển, hạt cản quang trong ruột hay dải chì ở xương.",
        2: "Chọc tủy xâm lấn và không cần thiết: các dòng tế bào khác bình thường, không có tế bào non, không gan lách hạch to.",
        3: "Cộng hưởng từ sọ não chỉ cần khi nghi <b>bệnh não do chì</b> với co giật, rối loạn ý thức hay dấu tăng áp lực nội sọ — bé chưa có biểu hiện đó, và phim cũng không thay thế được xét nghiệm định lượng chì.",
        4: "Không có bằng chứng chảy máu tiêu hóa: phân bình thường, ferritin bình thường nên thiếu máu ở đây không phải do mất sắt."
      },
      objective:
        "Ngộ độc chì ở trẻ có phơi nhiễm sơn cũ hoặc nghề nghiệp của bố mẹ biểu hiện bằng thiếu máu hồng cầu nhỏ có hạt ưa base, đau bụng tái diễn và thay đổi hành vi hay thoái lui phát triển. Chẩn đoán bằng định lượng chì trong máu tĩnh mạch, và biện pháp quan trọng nhất là loại bỏ nguồn phơi nhiễm trước khi tính tới thải chì."
    },

    {
      spec: "Cấp cứu nhi",
      task: "Bước xử trí tiếp theo",
      short: "Gãy xương nhiều giai đoạn ở trẻ 7 tháng",
      vignette: [
        "Bé trai 7 tháng tuổi được đưa vào cấp cứu vì <b>sưng đau cẳng tay trái</b>. Người chăm sóc kể bé <b>tự ngã từ ghế sofa xuống thảm</b> khi không ai để ý.",
        "Bệnh sử có nhiều điểm không nhất quán: bố nói bé ngã lúc sáng, mẹ nói lúc chiều; ban đầu kể bé ngã từ giường, sau đổi thành ghế sofa. <b>Gia đình đưa bé đến viện sau 14 giờ kể từ khi phát hiện.</b> Bé <b>chưa biết tự lật hay tự ngồi</b> theo lời mẹ.",
        "Khám: cẳng tay trái sưng nề, biến dạng, đau khi cử động. Ngoài ra còn <b>nhiều vết bầm tím ở các giai đoạn khác nhau</b> ở mặt sau thân mình, mông và phía sau hai tai; một vết <b>hằn hình dải dài</b> ở lưng. <b>Phanh môi trên bị rách đang lành.</b> Soi đáy mắt: <b>xuất huyết võng mạc hai bên</b>.",
        "Chụp toàn bộ xương: <b>gãy xương trụ trái mới</b>, <b>gãy nhiều xương sườn sau hai bên đang lành ở các giai đoạn khác nhau</b>, và <b>tổn thương góc hành xương ở đầu dưới xương đùi phải</b>."
      ],
      vitals: [
        ["Nhiệt độ", "36,9 °C"],
        ["Mạch", "138 l/ph"],
        ["Nhịp thở", "34 l/ph"],
        ["Huyết áp", "88/52"],
        ["Cân nặng", "7,4 kg"]
      ],
      labs: {
        title: "Xét nghiệm",
        rows: [
          ["Tiểu cầu", "298.000/mm³", "150.000–450.000", ""],
          ["INR", "1,0", "0,8–1,1", ""],
          ["aPTT", "30 giây", "25–35", ""],
          ["Canxi, phospho, phosphatase kiềm", "Bình thường", "—", ""],
          ["Vitamin D 25-OH", "34 ng/mL", "> 20", ""]
        ]
      },
      stem: "Bước xử trí tiếp theo tốt nhất là gì?",
      choices: [
        "Báo cáo nghi ngờ bạo hành trẻ em cho cơ quan bảo vệ trẻ em và giữ bé lại viện để bảo đảm an toàn",
        "Nẹp bột cẳng tay và cho bé về nhà, hẹn tái khám sau một tuần",
        "Chỉ định xét nghiệm gen chẩn đoán bệnh tạo xương bất toàn trước khi làm gì khác",
        "Chờ tới khi có bằng chứng chắc chắn rồi mới báo cáo",
        "Trao đổi thẳng với gia đình về nghi ngờ bạo hành rồi để họ đưa bé về"
      ],
      answer: 0,
      why: [
        "Đây là <b>bạo hành trẻ em</b> với bằng chứng rất mạnh. Nguyên tắc nền tảng là <b>bệnh sử phải phù hợp với tổn thương và với mức phát triển của trẻ</b>. Ở đây tất cả đều không khớp: bé <b>chưa biết tự lật</b> nhưng lại được kể là tự ngã, bệnh sử <b>thay đổi và mâu thuẫn</b> giữa những người kể, và <b>đưa đến viện muộn 14 giờ</b>.",
        "Các tổn thương thuộc nhóm <b>đặc hiệu cao cho bạo hành</b>: <b>gãy nhiều xương sườn sau</b> — cơ chế là bị bóp mạnh quanh lồng ngực, gần như không xảy ra do ngã; <b>tổn thương góc hành xương</b> — do lực giật xoắn chi; <b>gãy xương ở nhiều giai đoạn lành khác nhau</b>, chứng tỏ nhiều lần chấn thương ở các thời điểm khác nhau; <b>rách phanh môi</b>; bầm tím ở <b>vùng không phải chỗ va đập tự nhiên</b> như sau tai, mông, thân sau; vết hằn có hình dạng của vật đánh; và <b>xuất huyết võng mạc</b>, dấu hiệu của chấn thương đầu do rung lắc.",
        "<b>Bác sĩ có nghĩa vụ pháp lý phải báo cáo khi có nghi ngờ hợp lý — không cần bằng chứng chắc chắn.</b> Song song, phải <b>giữ bé lại nơi an toàn</b>, ghi chép tỉ mỉ và khách quan, chụp ảnh tổn thương, và ở trẻ dưới 2 tuổi thì chụp toàn bộ hệ xương cùng chẩn đoán hình ảnh sọ não. Cũng cần đánh giá các trẻ khác trong nhà."
      ],
      wrongs: {
        1: "Cho bé về nhà là đưa bé trở lại môi trường nguy hiểm. Trẻ bị bạo hành được trả về mà không can thiệp có nguy cơ tổn thương nặng hơn hoặc tử vong ở lần sau rất cao.",
        2: "Bệnh tạo xương bất toàn cần được cân nhắc trong chẩn đoán phân biệt, nhưng bệnh này <b>không gây</b> bầm tím ở nhiều giai đoạn, rách phanh môi, xuất huyết võng mạc hay vết hằn hình dải. Xét nghiệm gen mất nhiều tuần và không được để trì hoãn việc bảo vệ trẻ; canxi, phospho và phosphatase kiềm ở đây cũng bình thường.",
        3: "Chờ bằng chứng chắc chắn là hiểu sai nghĩa vụ báo cáo: ngưỡng để báo cáo là <b>nghi ngờ hợp lý</b>. Việc điều tra và kết luận thuộc về cơ quan chức năng, không phải bác sĩ.",
        4: "Đối chất trực tiếp với gia đình có thể khiến họ đưa bé rời viện, phá hủy bằng chứng hoặc làm trẻ gặp nguy hiểm hơn. Cần thông báo một cách trung lập rằng theo quy định phải báo cáo, đồng thời bảo đảm an toàn cho trẻ."
      },
      objective:
        "Bệnh sử không phù hợp với mức phát triển của trẻ hoặc thay đổi mâu thuẫn, cùng gãy xương sườn sau, tổn thương góc hành xương, gãy nhiều giai đoạn và xuất huyết võng mạc là các dấu hiệu đặc hiệu cao của bạo hành trẻ em. Bác sĩ phải báo cáo khi có nghi ngờ hợp lý và giữ trẻ ở nơi an toàn, không cần chờ bằng chứng chắc chắn."
    },

    {
      spec: "Thần kinh nhi",
      task: "Bước xử trí tiếp theo",
      short: "Co giật toàn thể ngắn khi đang sốt cao",
      vignette: [
        "Bé gái 20 tháng tuổi được đưa vào cấp cứu sau <b>một cơn co giật toàn thể co cứng – co giật kéo dài khoảng 2 phút</b> tại nhà, xảy ra khi bé đang sốt cao. Sau cơn bé ngủ khoảng 15 phút rồi <b>tỉnh táo hoàn toàn</b>.",
        "Bé sốt từ sáng nay, kèm chảy mũi và ho nhẹ. Đây là <b>cơn co giật đầu tiên</b> trong đời bé. Anh trai của bé cũng từng co giật khi sốt lúc 2 tuổi.",
        "Bé phát triển tâm thần vận động bình thường theo tuổi, đã tiêm chủng đầy đủ, không tiền sử chấn thương đầu, không dùng thuốc.",
        "Khám hiện tại: bé tỉnh, chơi được, nhận biết mẹ. <b>Không cứng gáy, thóp đã đóng, không dấu thần kinh khu trú, không ban xuất huyết.</b> Họng đỏ, màng nhĩ hai bên hơi đỏ. Phổi trong, bụng mềm."
      ],
      vitals: [
        ["Nhiệt độ", "39,4 °C"],
        ["Mạch", "142 l/ph"],
        ["Nhịp thở", "28 l/ph"],
        ["Huyết áp", "94/56"],
        ["Đường huyết mao mạch", "92 mg/dL"]
      ],
      stem: "Bước xử trí tiếp theo tốt nhất là gì?",
      choices: [
        "Hạ sốt, tìm và điều trị nguyên nhân sốt, giải thích trấn an gia đình",
        "Chọc dịch não tủy cho mọi trẻ co giật do sốt",
        "Chụp cắt lớp sọ não và đo điện não đồ trước khi cho về",
        "Bắt đầu phenobarbital duy trì để dự phòng tái phát",
        "Nhập viện theo dõi ít nhất một tuần và dùng kháng sinh tĩnh mạch"
      ],
      answer: 0,
      why: [
        "Đây là <b>co giật do sốt đơn thuần</b>. Tiêu chuẩn gồm: trẻ từ <b>6 tháng đến 5 tuổi</b>, cơn <b>toàn thể</b>, kéo dài <b>dưới 15 phút</b>, <b>chỉ xảy ra một lần trong 24 giờ</b>, trẻ <b>hồi phục hoàn toàn</b> và <b>không có nhiễm khuẩn thần kinh trung ương hay rối loạn chuyển hóa</b>. Bé thỏa toàn bộ.",
        "Vì vậy <b>không cần bất kỳ xét nghiệm nào cho bản thân cơn co giật</b>: không chọc dịch não tủy, không chẩn đoán hình ảnh, không điện não đồ, không xét nghiệm máu thường quy. Việc cần làm là <b>tìm nguyên nhân gây sốt</b> — ở đây là viêm hô hấp trên do virus — và điều trị theo nguyên nhân đó.",
        "Phần quan trọng nhất là <b>tư vấn cho gia đình</b>, vì cha mẹ thường rất hoảng sợ. Cần giải thích: co giật do sốt <b>lành tính, không gây tổn thương não</b>, và <b>không làm giảm trí tuệ</b>. Nguy cơ tái phát khoảng <b>30%</b>, cao hơn nếu cơn đầu xảy ra dưới 12 tháng tuổi hoặc có tiền sử gia đình. Nguy cơ tiến triển thành động kinh chỉ nhỉnh hơn dân số chung một chút (khoảng 2% so với 1%). Cần hướng dẫn xử trí tại nhà: đặt trẻ nằm nghiêng, không nhét bất cứ gì vào miệng, tính giờ cơn, và đưa đi cấp cứu nếu cơn kéo dài trên 5 phút."
      ],
      wrongs: {
        1: "Chọc dịch não tủy <b>không còn được chỉ định thường quy</b>. Nó dành cho trẻ có dấu hiệu màng não hay dấu thần kinh, trẻ <b>dưới 6–12 tháng chưa tiêm chủng đầy đủ</b>, trẻ đang dùng kháng sinh có thể che lấp triệu chứng, hoặc cơn co giật phức tạp và trẻ không tỉnh táo lại hoàn toàn.",
        2: "Chẩn đoán hình ảnh và điện não đồ không có chỉ định trong co giật do sốt đơn thuần: chúng không dự đoán được tái phát hay nguy cơ động kinh, mà chỉ gây tốn kém, nhiễm xạ và lo lắng không cần thiết.",
        3: "Thuốc chống động kinh duy trì <b>không được khuyến cáo</b>: tác dụng phụ lên nhận thức và hành vi vượt xa lợi ích ở một tình trạng lành tính tự giới hạn. Thuốc hạ sốt cũng <b>không ngăn được</b> cơn tái phát.",
        4: "Bé tỉnh táo hoàn toàn, không dấu hiệu nhiễm khuẩn nặng và nguyên nhân sốt đã rõ là nhiễm virus. Nhập viện dài ngày và kháng sinh tĩnh mạch là hoàn toàn không cần thiết."
      },
      objective:
        "Co giật do sốt đơn thuần xảy ra ở trẻ 6 tháng đến 5 tuổi, cơn toàn thể dưới 15 phút, một lần trong 24 giờ và trẻ hồi phục hoàn toàn; không cần chọc dịch não tủy, hình ảnh học, điện não đồ hay thuốc chống động kinh duy trì. Việc cần làm là tìm nguyên nhân sốt và tư vấn gia đình rằng nguy cơ tái phát khoảng 30% nhưng bệnh lành tính."
    }
  ]
};
