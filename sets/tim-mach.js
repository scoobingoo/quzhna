/* ==========================================================================
   Bộ đề: Tim mạch học — 30 ca lâm sàng chuyên sâu theo guideline AHA/ACC & ESC.
   Tài liệu tham khảo: Lâm sàng Tim mạch học, Phác đồ Bệnh viện Bạch Mai.
   ========================================================================== */
window.QUIZ_SET = {
  id: "tim-mach",
  eyebrow: "USMLE Step 2 CK · Chuyên đề Nội khoa",
  title: "Tim mạch học",
  blurb: "30 ca lâm sàng tim mạch chuyên sâu (AHA/ACC, ESC, Bạch Mai): Hội chứng vành cấp, suy tim HFrEF 4 trụ cột, rối loạn nhịp, bệnh van tim và cấp cứu tim mạch.",

  cases: [
    {
      spec: "Tim mạch",
      task: "Bước xử trí tiếp theo",
      short: "Nhồi máu thất phải sau MI thành dưới",
      vignette: [
        "Nam 62 tuổi vào khoa cấp cứu vì đau thắt ngực sau xương ức dữ dội lan xuống thượng vị 2 giờ trước. Tiền sử tăng huyết áp và hút thuốc lá.",
        "Điện tâm đồ: ST chênh lên ở DII, DIII, aVF. Bệnh nhân được cho ngậm dưới lưỡi 1 viên Nitroglycerin 0,4 mg.",
        "Năm phút sau, bệnh nhân hoa mắt, vã mồ hôi, huyết áp tụt từ 130/80 xuống 75/45 mm Hg. Khám thấy tĩnh mạch cổ nổi rõ, phổi hoàn toàn trong không có ran. Làm chuyển đạo phải thấy ST chênh lên 2 mm ở V4R."
      ],
      vitals: [
        ["Nhiệt độ", "36,7 °C"],
        ["Huyết áp", "75/45"],
        ["Mạch", "56 l/ph"],
        ["Nhịp thở", "18 l/ph"],
        ["SpO2", "97% khí trời"]
      ],
      stem: "Bước xử trí tiếp theo tốt nhất cho bệnh nhân này là gì?",
      choices: [
        "Truyền tĩnh mạch nhanh 500–1000 mL NaCl 0,9% để hồi phục tiền tải",
        "Tiêm tĩnh mạch Furosemide 40 mg để giảm ứ trệ tuần hoàn",
        "Bắt đầu truyền Nitroglycerin tĩnh mạch liều thấp",
        "Tiêm Metoprolol tĩnh mạch để kiểm soát nhịp tim",
        "Đặt ống dẫn lưu màng phổi cấp cứu"
      ],
      answer: 0,
      why: [
        "Bệnh nhân có <b>nhồi máu cơ tim thất phải</b> đi kèm nhồi máu thành dưới (tắc động mạch vành phải RCA đoạn gần). Thất phải bị nhồi máu mất co bóp nên <b>cung lượng tim phụ thuộc hoàn toàn vào tiền tải</b> (lượng máu đổ về thất phải).",
        "Nitroglycerin gây giãn tĩnh mạch làm giảm tiền tải đột ngột, dẫn đến tụt huyết áp nặng nề. Xử trí đầu tay bắt buộc là <b>bù dịch đẳng trương NaCl 0,9%</b> để tăng áp lực đổ đầy thất phải và chuẩn bị can thiệp mạch vành khẩn cấp (PCI).",
        "Tam chứng kinh điển nhồi máu thất phải: <b>Tụt huyết áp + Tĩnh mạch cổ nổi + Phổi trong</b>."
      ],
      wrongs: {
        1: "Lợi tiểu làm giảm thêm tiền tải, khiến huyết áp tụt sâu hơn và gây sốc tim ngừng tuần hoàn.",
        2: "Nitrat chống chỉ định tuyệt đối trong nhồi máu thất phải vì gây giãn tĩnh mạch sập tiền tải.",
        3: "Chẹn beta chống chỉ định khi có tụt huyết áp, nhịp chậm hoặc sốc tim.",
        4: "Phổi trong hai bên không có tràn khí hay tràn dịch màng phổi."
      },
      objective:
        "Nhồi máu thất phải (ST chênh lên ở V4R) phụ thuộc hoàn toàn vào tiền tải; xử trí bằng truyền dịch NaCl 0,9% và can thiệp mạch vành, tuyệt đối tránh Nitrat và Lợi tiểu."
    },

    {
      spec: "Tim mạch",
      task: "Lựa chọn điều trị đầu tay",
      short: "Viêm màng ngoài tim cấp sau nhiễm siêu vi",
      vignette: [
        "Nam 28 tuổi đến khám vì đau ngực nhói sau xương ức khởi phát 2 ngày sau một đợt sốt và viêm đường hô hấp trên. Đau tăng rõ khi hít sâu, ho hoặc khi nằm ngửa, giảm khi ngồi thẳng cúi người ra trước.",
        "Khám: Nghe thấy tiếng cọ màng tim ráp ở bờ trái xương ức. Không có tĩnh mạch cổ nổi hay phù chân.",
        "Điện tâm đồ 12 chuyển đạo: ST chênh lên lan tỏa hình lõm ở DI, DII, aVF, V2-V6 kèm PR chênh xuống; aVR có ST chênh xuống và PR chênh lên. Troponin I bình thường."
      ],
      vitals: [
        ["Nhiệt độ", "37,6 °C"],
        ["Huyết áp", "122/78"],
        ["Mạch", "84 l/ph"],
        ["Nhịp thở", "16 l/ph"]
      ],
      stem: "Phác đồ điều trị đầu tay tối ưu nhất cho bệnh nhân này là gì?",
      choices: [
        "Kháng viêm không steroid (Ibuprofen hoặc Aspirin) liều cao kết hợp Colchicine",
        "Chọc hút dịch màng ngoài tim giải áp cấp cứu",
        "Tiêu sợi huyết bằng Alteplase đường tĩnh mạch",
        "Tiêm Heparin trọng lượng phân tử thấp điều trị hội chứng vành cấp",
        "Kháng sinh Ceftriaxone kết hợp Vancomycin tĩnh mạch"
      ],
      answer: 0,
      why: [
        "Bệnh cảnh kinh điển của <b>Viêm màng ngoài tim cấp</b> (Acute Pericarditis): đau ngực màng tim (giảm khi cúi ra trước), tiếng cọ màng ngoài tim và ECG có <b>ST chênh lên lõm lan tỏa kèm PR chênh xuống</b>.",
        "Điều trị đầu tay theo khuyến cáo ESC/AHA là <b>NSAID liều cao (như Ibuprofen 600–800 mg x 3 lần/ngày) phối hợp Colchicine (0,5–1 mg/ngày trong 3 tháng)</b>. Colchicine giúp giảm 50% tỉ lệ tái phát.",
        "Troponin bình thường và huyết động ổn định, không có chèn ép tim."
      ],
      wrongs: {
        1: "Chọc dịch chỉ chỉ định khi có chèn ép tim cấp hoặc nghi ngờ tràn dịch mủ.",
        2: "Tiêu sợi huyết chống chỉ định tuyệt đối vì có thể gây tràn máu màng ngoài tim dẫn đến chèn ép tim tử vong.",
        3: "Thuốc chống đông không chỉ định trong viêm màng ngoài tim vì tăng nguy cơ xuất huyết khoang màng tim.",
        4: "Phần lớn do siêu vi hoặc vô căn, không có chỉ định kháng sinh phổ rộng."
      },
      objective:
        "Viêm màng ngoài tim cấp đặc trưng bởi đau ngực giảm khi cúi ra trước và ST chênh lên lõm lan tỏa kèm PR chênh xuống; điều trị chuẩn bằng NSAID liều cao phối hợp Colchicine."
    },

    {
      spec: "Tim mạch",
      task: "Bước xử trí cấp cứu",
      short: "Chèn ép tim cấp (Cardiac Tamponade)",
      vignette: [
        "Nữ 54 tuổi có tiền sử ung thư vú di căn, được đưa vào khoa cấp cứu vì khó thở dữ dội và lơ mơ.",
        "Khám: Bệnh nhân thở nhanh, da tái lạnh, vã mồ hôi. Tĩnh mạch cổ nổi căng phồng tới góc hàm ở tư thế 45°. Tim nghe tiếng tim mờ xa xăm. Phổi thông khí đều hai bên, không ran.",
        "Đo huyết áp: Huyết áp tâm thu giảm 16 mm Hg khi hít vào so với khi thở ra (mạch nghịch lý 16 mm Hg). Điện tâm đồ thấy nhịp nhanh xoang kèm hình ảnh <b>soi le điện thế</b> (electrical alternans)."
      ],
      vitals: [
        ["Nhiệt độ", "36,8 °C"],
        ["Huyết áp", "80/54"],
        ["Mạch", "122 l/ph"],
        ["Nhịp thở", "26 l/ph"],
        ["SpO2", "92% khí trời"]
      ],
      stem: "Bước xử trí cấp cứu tiếp theo giúp cứu sống bệnh nhân là gì?",
      choices: [
        "Chọc hút dịch màng ngoài tim giải áp cấp cứu dưới hướng dẫn siêu âm",
        "Tiêm Furosemide tĩnh mạch 80 mg để giảm ứ trệ tuần hoàn tĩnh mạch",
        "Truyền dịch albumin và tiếp tục theo dõi sát tại khoa nội",
        "Đặt dẫn lưu màng phổi kín bên phải",
        "Chụp CT lồng ngực có tiêm thuốc cản quang"
      ],
      answer: 0,
      why: [
        "Bệnh nhân có <b>Tam chứng Beck</b> (Tụt huyết áp + Tĩnh mạch cổ nổi + Tiếng tim mờ) kèm <b>Mạch nghịch lý >10 mmHg</b> và <b>Soi le điện thế</b> trên ECG, đặc trưng cho <b>Chèn ép tim cấp (Cardiac Tamponade)</b> do tràn dịch màng tim ác tính.",
        "Áp lực dịch màng tim tăng cao cản trở đổ đầy buồng tim trong thì tâm trương gây sốc tắc nghẽn. Xử trí cấp cứu sống còn duy nhất là <b>Chọc hút dịch màng ngoài tim giải áp</b> (Pericardiocentesis).",
        "Thuốc lợi tiểu bị chống chỉ định tuyệt đối vì làm giảm tiền tải gây sập tuần hoàn."
      ],
      wrongs: {
        1: "Lợi tiểu làm sập tiền tải buồng tim, gây ngừng tuần hoàn ngay lập tức.",
        2: "Chỉ bù dịch mà không giải áp màng tim không giải quyết được căn nguyên tắc nghẽn cơ học.",
        3: "Không có tràn dịch hay tràn khí màng phổi tự do.",
        4: "Chụp CT làm chậm trễ thời gian can thiệp cấp cứu trên bệnh nhân đang sốc tim đe dọa tử vong."
      },
      objective:
        "Chèn ép tim cấp biểu hiện bằng tam chứng Beck, mạch nghịch lý và soi le điện thế trên ECG; cấp cứu bằng chọc hút dịch màng ngoài tim giải áp, tuyệt đối tránh thuốc lợi tiểu."
    },

    {
      spec: "Tim mạch",
      task: "Thuốc chống chỉ định",
      short: "Rung nhĩ kèm hội chứng Wolff-Parkinson-White (WPW)",
      vignette: [
        "Nam 22 tuổi vào viện vì hồi hộp đánh trống ngực dữ dội và chóng mặt khởi phát đột ngột khi chơi thể thao.",
        "Điện tâm đồ 12 chuyển đạo ghi nhận: Nhịp không đều, tần số thất biến đổi rất nhanh từ 190–230 l/phút, phức bộ QRS rộng dị hình và hình dạng biến đổi liên tục giữa các nhát bóp.",
        "Bệnh nhân tỉnh, tiếp xúc được, da ấm, huyết áp 108/68 mm Hg."
      ],
      vitals: [
        ["Nhiệt độ", "37,0 °C"],
        ["Huyết áp", "108/68"],
        ["Mạch", "205 l/ph"],
        ["Nhịp thở", "20 l/ph"]
      ],
      stem: "Nhóm thuốc nào sau đây CHỐNG CHỈ ĐỊNH tuyệt đối ở bệnh nhân này?",
      choices: [
        "Thuốc chẹn nút nhĩ thất (Verapamil, Diltiazem, Digoxin, Beta-blocker, Adenosine)",
        "Procainamide truyền tĩnh mạch",
        "Ibutilide truyền tĩnh mạch",
        "Kháng đông Heparin không phân đoạn",
        "Magnesi sulfat tĩnh mạch"
      ],
      answer: 0,
      why: [
        "Điện tâm đồ biểu hiện <b>Rung nhĩ kèm tiền kích thích (WPW + AF)</b>: nhịp không đều, QRS rộng không đồng dạng với tần số cực nhanh.",
        "Các thuốc <b>ức chế nút nhĩ thất (Verapamil, Diltiazem, Digoxin, Beta-blocker, Adenosine)</b> bị <b>CHỐNG CHỈ ĐỊNH TUYỆT ĐỐI</b> vì khi nút nhĩ thất bị chặn, các xung động nhĩ rung sẽ dẫn truyền ồ ạt 1:1 qua đường phụ (cầu Kent), gây ra <b>rung thất và ngừng tim đột ngột</b>.",
        "Điều trị chuẩn khi huyết động ổn định là <b>Procainamide</b> hoặc <b>Ibutilide</b>; nếu huyết động không ổn định thì <b>sốc điện chuyển nhịp đồng bộ</b>."
      ],
      wrongs: {
        1: "Procainamide là thuốc lựa chọn hàng đầu cho rung nhĩ kèm WPW khi huyết động ổn định.",
        2: "Ibutilide kéo dài thời gian trơ của đường phụ, dùng an toàn để chuyển nhịp.",
        3: "Heparin không ức chế dẫn truyền nút nhĩ thất và không chống chỉ định.",
        4: "Magnesi sulfat không gây thúc đẩy dẫn truyền qua đường phụ."
      },
      objective:
        "Rung nhĩ kèm WPW chống chỉ định tuyệt đối các thuốc chẹn nút nhĩ thất (Verapamil, Diltiazem, Digoxin, Beta-blocker, Adenosine) vì gây rung thất tử vong; điều trị bằng Procainamide hoặc sốc điện đồng bộ."
    },

    {
      spec: "Tim mạch",
      task: "Bước xử trí tiếp theo",
      short: "Hẹp van động mạch chủ khít có triệu chứng ngất",
      vignette: [
        "Nam 76 tuổi đến khám vì bị ngất thoáng qua khi leo cầu thang sáng nay. Hai tháng nay bệnh nhân xuất hiện khó thở khi đi bộ và đau tức ngực khi gắng sức.",
        "Khám: Tiếng T2 mờ (A2 giảm âm), tiếng thổi tâm thu tống máu thô ráp hình quả trám ở KLS 2 bờ phải xương ức lan lên hai động mạch cảnh. Mạch cảnh nảy chậm và yếu (pulsus parvus et tardus).",
        "Siêu âm tim: Diện tích lỗ van động mạch chủ 0,68 cm², chênh áp trung bình qua van 46 mm Hg, vận tốc tối đa 4,3 m/s. Phân suất tống máu EF 50%."
      ],
      vitals: [
        ["Nhiệt độ", "36,8 °C"],
        ["Huyết áp", "106/76"],
        ["Mạch", "70 l/ph"],
        ["Nhịp thở", "16 l/ph"]
      ],
      stem: "Bước xử trí tiếp theo có vai trò quyết định cải thiện tiên lượng sống còn cho bệnh nhân là gì?",
      choices: [
        "Thay van động mạch chủ (phẫu thuật SAVR hoặc qua da TAVI)",
        "Chỉ định nghiệm pháp gắng sức thảm lăn để đánh giá mức độ thiếu máu cơ tim",
        "Bắt đầu dùng thuốc giãn mạch Enalapril liều cao",
        "Điều trị nội khoa bảo tồn bằng thuốc chẹn kênh canxi Diltiazem",
        "Dùng thuốc lợi tiểu Furosemide liều cao kéo dài"
      ],
      answer: 0,
      why: [
        "Bệnh nhân có <b>Hẹp van động mạch chủ khít</b> (diện tích < 1,0 cm², chênh áp trung bình > 40 mmHg) kèm <b>tam chứng kinh điển SAD (Syncope - Ngất, Angina - Đau ngực, Dyspnea - Khó thở)</b>.",
        "Khi hẹp van ĐMC khít đã <b>xuất hiện triệu chứng</b>, tiên lượng tử vong tăng vọt (sống trung bình 2–3 năm nếu không mổ). <b>Thay van động mạch chủ (SAVR hoặc TAVI)</b> là <b>phương pháp duy nhất cải thiện sống còn</b>.",
        "<b>Nghiệm pháp gắng sức chống chỉ định tuyệt đối</b> vì nguy cơ tụt huyết áp đột ngột và đột tử."
      ],
      wrongs: {
        1: "Nghiệm pháp gắng sức chống chỉ định tuyệt đối vì thất trái không tăng được cung lượng tim qua lỗ van hẹp gây đột tử.",
        2: "Thuốc giãn mạch liều cao làm giảm hậu tải trong khi tắc nghẽn cố định, gây tụt huyết áp nặng.",
        3: "Điều trị nội khoa bảo tồn không ngăn được tiến triển hẹp van và không cải thiện tiên lượng tử vong.",
        4: "Lợi tiểu làm giảm tiền tải thất trái phì đại, gây tụt huyết áp nặng."
      },
      objective:
        "Hẹp van động mạch chủ khít có triệu chứng có chỉ định thay van ĐMC khẩn cấp (SAVR hoặc TAVI); chống chỉ định nghiệm pháp gắng sức và thận trọng tối đa với thuốc giãn mạch."
    },

    {
      spec: "Tim mạch",
      task: "Bước xử trí tiếp theo",
      short: "Tách thành động mạch chủ Stanford Type A",
      vignette: [
        "Nam 58 tuổi tiền sử tăng huyết áp kiểm soát kém, đột ngột đau xé dữ dội ngực trước lan ra sau lưng giữa hai xương bả vai 1 giờ trước.",
        "Khám: Bệnh nhân vã mồ hôi, huyết áp tay phải 175/95 mm Hg, huyết áp tay trái 130/70 mm Hg (chênh lệch huyết áp hai tay 45 mm Hg). Nghe tim có tiếng thổi tâm trương sớm 3/6 ở bờ trái xương ức (hở van động mạch chủ mới).",
        "Chụp CT mạch máu lồng ngực (CTA): Hình ảnh lòng giả (false lumen) bắt đầu từ gốc động mạch chủ lên kéo dài qua quai động mạch chủ (Stanford Type A)."
      ],
      vitals: [
        ["Nhiệt độ", "36,9 °C"],
        ["Huyết áp", "175/95 (tay phải)"],
        ["Mạch", "92 l/ph"],
        ["Nhịp thở", "22 l/ph"]
      ],
      stem: "Bước xử trí tiếp theo quan trọng nhất cho bệnh nhân này là gì?",
      choices: [
        "Kiểm soát huyết áp/nhịp tim bằng thuốc chẹn beta tĩnh mạch (Esmolol/Labetalol) và phẫu thuật cấp cứu khẩn cấp",
        "Dùng thuốc tiêu sợi huyết Alteplase tĩnh mạch ngay lập tức",
        "Điều trị nội khoa bảo tồn đơn thuần và chuyển về khoa nội theo dõi",
        "Dùng thuốc giãn mạch Hydralazine đường tĩnh mạch đơn độc",
        "Đặt stent can thiệp mạch vành qua da"
      ],
      answer: 0,
      why: [
        "<b>Tách thành động mạch chủ Stanford Type A</b> (tổn thương động mạch chủ lên) là cấp cứu ngoại khoa tối khẩn cấp với tỉ lệ tử vong tăng 1–2% mỗi giờ do biến chứng vỡ vào màng tim gây tamponade, đứt gốc mạch vành hoặc hở van ĐMC cấp.",
        "Xử trí gồm 2 bước song hành: (1) <b>Nội khoa cấp cứu</b>: Dùng <b>thuốc chẹn beta tĩnh mạch (Esmolol, Labetalol)</b> để hạ nhịp tim < 60 l/phút và hạ HA tâm thu 100–120 mmHg nhằm giảm áp lực xé dòng máu (dP/dt); (2) <b>Phẫu thuật thay đoạn động mạch chủ lên khẩn cấp</b>.",
        "Phân biệt: Stanford Type B (chỉ tổn thương ĐMC xuống sau nhánh dưới đòn trái) ưu tiên điều trị nội khoa bảo tồn hoặc can thiệp đặt stent graft (TEVAR)."
      ],
      wrongs: {
        1: "Tiêu sợi huyết chống chỉ định tuyệt đối vì gây vỡ động mạch chủ và xuất huyết tử vong tức thì.",
        2: "Stanford Type A điều trị nội khoa đơn thuần có tỉ lệ tử vong trên 50% trong 48 giờ; phẫu thuật là bắt buộc.",
        3: "Thuốc giãn mạch đơn độc (Hydralazine, Nitroprusside) không có chẹn beta đi kèm sẽ gây nhịp nhanh phản xạ làm tăng lực xé dP/dt gây vỡ mạch.",
        4: "Đặt stent mạch vành không giải quyết được tổn thương rách thành động mạch chủ lên."
      },
      objective:
        "Tách thành động mạch chủ Stanford Type A (động mạch chủ lên) đòi hỏi hạ huyết áp/nhịp tim bằng chẹn beta tĩnh mạch (Esmolol/Labetalol) và phẫu thuật cấp cứu khẩn cấp; chống chỉ định tiêu sợi huyết."
    },

    {
      spec: "Tim mạch",
      task: "Bước chẩn đoán và xử trí",
      short: "Hở van hai lá cấp do đứt cơ nhú sau nhồi máu cơ tim",
      vignette: [
        "Nữ 66 tuổi nhập viện ngày thứ 4 sau nhồi máu cơ tim ST chênh lên thành dưới không được can thiệp sớm. Bệnh nhân đột ngột khó thở dữ dội, tím tái và ho khạc bọt hồng.",
        "Khám: Thở nhanh 32 l/phút, vã mồ hôi, tĩnh mạch cổ nổi. Nghe tim thấy <b>tiếng thổi toàn tâm thu 4/6 mới xuất hiện ở mỏm tim lan ra nách</b>, kèm tiếng T3 đanh. Phổi đầy ran ẩm hai bên phế trường.",
        "Huyết áp tụt còn 82/50 mm Hg. Siêu âm tim cấp cứu tại giường: Đứt đầu cơ nhú sau trong (posteromedial papillary muscle) gây sa lá sau van hai lá và hở van hai lá mức độ rất nặng, EF 55%."
      ],
      vitals: [
        ["Nhiệt độ", "36,8 °C"],
        ["Huyết áp", "82/50"],
        ["Mạch", "118 l/ph"],
        ["Nhịp thở", "32 l/ph"],
        ["SpO2", "84% khí trời"]
      ],
      stem: "Biến chứng cơ học này xuất phát từ đặc điểm giải phẫu nào và bước xử trí quyết định là gì?",
      choices: [
        "Cơ nhú sau trong chỉ được cấp máu bởi duy nhất một động mạch vành (RCA); xử trí bằng đặt bóng đối xung (IABP) và phẫu thuật sửa/thay van cấp cứu",
        "Cơ nhú trước ngoài có hệ thống cấp máu kép; xử trí bằng lợi tiểu Furosemide liều cao đơn độc",
        "Vỡ thành tự do thất trái; xử trí bằng chọc hút dịch màng ngoài tim",
        "Thủng vách liên thất; xử trí bằng bít dù qua da sau 6 tuần",
        "Phình thất trái mạn tính; điều trị bằng thuốc chống đông Warfarin"
      ],
      answer: 0,
      why: [
        "<b>Đứt cơ nhú gây hở van hai lá cấp</b> là biến chứng cơ học nguy hiểm xuất hiện 3–7 ngày sau nhồi máu cơ tim. <b>Cơ nhú sau trong (posteromedial) chỉ được nuôi bởi 1 nhánh duy nhất từ động mạch vành phải (RCA)</b> hoặc động mạch mũ, nên rất dễ hoại tử đứt so với cơ nhú trước ngoài (có cấp máu kép từ LAD và LCx).",
        "Biểu hiện: Phù phổi cấp đột ngột + Sốc tim + Tiếng thổi toàn tâm thu mới ở mỏm tim.",
        "Xử trí: <b>Đặt bóng đối xung động mạch chủ (IABP)</b> để giảm hậu tải và tăng tưới máu mạch vành, kết hợp <b>Phẫu thuật cấp cứu sửa hoặc thay van hai lá</b>."
      ],
      wrongs: {
        1: "Lợi tiểu đơn độc không thể giải quyết được tình trạng trào ngược thể tích ồ ạt qua lỗ van bị đứt cơ nhú đang gây sốc tim.",
        2: "Vỡ thành tự do thất trái gây tràn máu màng ngoài tim và chèn ép tim cấp (tam chứng Beck), không gây hở hai lá cấp có tiếng thổi ở mỏm.",
        3: "Thủng vách liên thất gây tiếng thổi tâm thu ở bờ trái xương ức kèm rung miêu, không phải hở hai lá ở mỏm.",
        4: "Phình thất trái là biến chứng muộn sau nhiều tháng, không gây phù phổi cấp đột ngột ngày thứ 4."
      },
      objective:
        "Đứt cơ nhú sau trong (cấp máu đơn độc bởi RCA) gây hở hai lá cấp và phù phổi cấp sau nhồi máu thành dưới; xử trí bằng IABP giảm hậu tải và phẫu thuật cấp cứu sửa/thay van."
    },

    {
      spec: "Tim mạch",
      task: "Bước chẩn đoán phân biệt",
      short: "Thủng vách liên thất sau nhồi máu cơ tim",
      vignette: [
        "Nam 65 tuổi nhập viện ngày thứ 5 sau nhồi máu cơ tim cấp thành trước rộng. Bệnh nhân đột ngột tụt huyết áp, khó thở và lơ mơ.",
        "Khám: Tĩnh mạch cổ nổi, huyết áp 80/50 mm Hg. Nghe tim phát hiện <b>tiếng thổi toàn tâm thu 4/6 thô ráp mới xuất hiện ở khoang liên sườn 4 bờ trái xương ức kèm rung miêu tâm thu (systolic thrill)</b>.",
        "Đặt ống thông động mạch phổi (Swan-Ganz): Độ bão hòa oxy máu (SvO2) ở nhĩ phải là 62%, nhưng <b>ở thất phải và động mạch phổi tăng vọt lên 84% (bước nhảy oxy / oxygen step-up)</b>."
      ],
      vitals: [
        ["Nhiệt độ", "37,0 °C"],
        ["Huyết áp", "80/50"],
        ["Mạch", "112 l/ph"],
        ["Nhịp thở", "28 l/ph"]
      ],
      stem: "Chẩn đoán xác định cho biến chứng cơ học này là gì?",
      choices: [
        "Thủng vách liên thất mắc phải (Ventricular Septal Rupture - VSR)",
        "Đứt cơ nhú van hai lá cấp",
        "Vỡ thành tự do thất trái gây chèn ép tim",
        "Tắc lại cấp tính stent mạch vành",
        "Thuyên tắc động mạch phổi cấp diện rộng"
      ],
      answer: 0,
      why: [
        "<b>Thủng vách liên thất (VSR)</b> là biến chứng cơ học xuất hiện 3–5 ngày sau nhồi máu cơ tim thành trước (do tắc LAD) hoặc thành dưới (tắc RCA).",
        "Đặc trưng lâm sàng: <b>Tiếng thổi toàn tâm thu thô ráp kèm rung miêu tâm thu ở bờ trái xương ức</b> (khác với đứt cơ nhú hở hai lá nghe ở mỏm lan nách và không có rung miêu).",
        "Bằng chứng huyết động học khẳng định: <b>Hiện tượng bước nhảy oxy (Oxygen step-up) từ nhĩ phải sang thất phải (tăng >7%)</b> do dòng máu giàu oxy từ thất trái phụt qua lỗ thủng sang thất phải (Luồng thông Trái - Phải cấp tính)."
      ],
      wrongs: {
        1: "Đứt cơ nhú gây tiếng thổi ở mỏm lan nách, không có rung miêu ở bờ trái xương ức và không có hiện tượng bước nhảy oxy ở thất phải.",
        2: "Vỡ thành tự do gây chèn ép tim cấp với tiếng tim mờ, không có tiếng thổi toàn tâm thu thô ráp kèm rung miêu.",
        3: "Tắc lại stent gây đau ngực và ST chênh lên lại trên ECG, không tạo ra tiếng thổi thô ráp kèm bước nhảy oxy.",
        4: "Thuyên tắc phổi không có tiếng thổi toàn tâm thu bờ trái xương ức và bước nhảy oxy từ nhĩ phải sang thất phải."
      },
      objective:
        "Thủng vách liên thất sau nhồi máu cơ tim đặc trưng bởi tiếng thổi toàn tâm thu kèm rung miêu ở bờ trái xương ức và bước nhảy oxy (step-up) từ nhĩ phải sang thất phải; xử trí bằng IABP và phẫu thuật sửa vách."
    },

    {
      spec: "Tim mạch",
      task: "Lựa chọn thuốc điều trị",
      short: "Suy tim phân suất tống máu giảm (HFrEF) - 4 trụ cột",
      vignette: [
        "Nam 59 tuổi đến khám vì khó thở khi gắng sức tăng dần và phù nhẹ hai mắt cá chân 2 tháng nay. Tiền sử nhồi máu cơ tim cách đây 1 năm.",
        "Khám: Tĩnh mạch cổ nổi nhẹ ở tư thế 45°, mỏm tim lệch trái khoang liên sườn 6 đường nách trước, nghe có tiếng T3 ở mỏm. Phổi có ran ẩm rải rác ở hai đáy phổi.",
        "Siêu âm tim: Thất trái giãn, giảm vận động toàn bộ, <b>Phân suất tống máu thất trái EF 28%</b>. NT-proBNP 3.200 pg/mL. Creatinine 1,1 mg/dL, Kali máu 4,3 mEq/L."
      ],
      vitals: [
        ["Nhiệt độ", "36,7 °C"],
        ["Huyết áp", "128/78"],
        ["Mạch", "82 l/ph"],
        ["Nhịp thở", "18 l/ph"]
      ],
      stem: "Bộ tứ 4 nhóm thuốc trụ cột điều trị suy tim HFrEF được chứng minh cải thiện sống còn theo guideline AHA/ESC là gì?",
      choices: [
        "ARNI (Sacubitril/Valsartan) + Chẹn beta (Metoprolol succinate/Carvedilol) + Kháng Aldosterone (Spironolactone) + Ức chế SGLT2 (Dapagliflozin/Empagliflozin)",
        "Digoxin + Furosemide + Diltiazem + Nitrat đường uống",
        "Ức chế men chuyển + Lợi tiểu quai + Chẹn kênh canxi Nifedipine + Aspirin",
        "Amiodarone + Spironolactone + Hydrochlorothiazide + Warfarin",
        "Chẹn beta đơn độc liều cao kết hợp thở oxy dài hạn"
      ],
      answer: 0,
      why: [
        "Theo khuyến cáo mới nhất của <b>AHA/ACC/HFSA và ESC</b>, điều trị nền tảng chuẩn cho <b>Suy tim phân suất tống máu giảm (HFrEF, EF ≤ 40%)</b> gồm <b>4 TRỤ CỘT (The Fantastic Four)</b> giúp giảm tái nhập viện và giảm tử vong do mọi nguyên nhân:",
        "1. <b>ARNI (Sacubitril/Valsartan)</b> hoặc ACEi/ARB nếu không dung nạp ARNI.",
        "2. <b>Thuốc chẹn beta giao cảm chứng cứ</b> (Metoprolol succinate, Carvedilol, Bisoprolol).",
        "3. <b>Thuốc kháng thụ thể Mineralocorticoid - MRA</b> (Spironolactone, Eplerenone).",
        "4. <b>Thuốc ức chế SGLT2</b> (Dapagliflozin hoặc Empagliflozin - có hiệu quả giảm tử vong bất kể bệnh nhân có đái tháo đường hay không).",
        "Thuốc lợi tiểu quai (Furosemide) chỉ dùng để kiểm soát triệu chứng ứ dịch, không làm giảm tử vong."
      ],
      wrongs: {
        1: "Digoxin và Furosemide chỉ giảm triệu chứng ứ huyết, không cải thiện sống còn; Diltiazem (chẹn canxi non-DHP) chống chỉ định trong HFrEF vì làm giảm co bóp cơ tim.",
        2: "Chẹn kênh canxi nhóm Dihydropyridine (Nifedipine) không có vai trò điều trị suy tim giảm EF và có thể gây nhịp nhanh phản xạ.",
        3: "Amiodarone và Warfarin chỉ dùng khi có chỉ định rối loạn nhịp/rung nhĩ, không phải thuốc điều trị suy tim nền tảng.",
        4: "Chẹn beta đơn độc không đủ hiệu quả tối ưu và cần phối hợp đa cơ chế với ARNI, MRA và SGLT2i."
      },
      objective:
        "Điều trị suy tim HFrEF (EF ≤ 40%) bắt buộc phối hợp sớm 4 nhóm thuốc trụ cột cải thiện sống còn: ARNI (hoặc ACEi/ARB), Chẹn beta chứng cứ, MRA (Spironolactone) và Ức chế SGLT2."
    },

    {
      spec: "Tim mạch",
      task: "Bước xử trí và chống chỉ định",
      short: "Bệnh cơ tim phì đại tắc nghẽn (HOCM)",
      vignette: [
        "Nam 20 tuổi vận động viên bóng rổ đến khám vì hai lần cảm thấy hoa mắt choáng váng và tức ngực sau các buổi tập luyện cường độ cao. Bố của bệnh nhân từng đột tử không rõ nguyên nhân ở tuổi 38.",
        "Khám: Mỏm tim nảy mạnh, nghe thấy <b>tiếng thổi tâm thu tống máu 3/6 ở khoang liên sườn 3-4 bờ trái xương ức</b>. Tiếng thổi <b>TĂNG RÕ CƯỜNG ĐỘ khi làm nghiệm pháp Valsalva hoặc khi đứng dậy đột ngột</b>, và <b>GIẢM ĐI khi ngồi xổm (squatting) hoặc nắm chặt tay (handgrip)</b>.",
        "Siêu âm tim: Phì đại vách liên thất không đối xứng (bề dày vách 22 mm, tỉ lệ vách liên thất/thành sau = 1,8), có hiện tượng di động ra trước của lá trước van hai lá trong thì tâm thu (SAM - Systolic Anterior Motion) gây hẹp đường ra thất trái."
      ],
      vitals: [
        ["Nhiệt độ", "36,8 °C"],
        ["Huyết áp", "118/74"],
        ["Mạch", "72 l/ph"],
        ["Nhịp thở", "16 l/ph"]
      ],
      stem: "Thuốc điều trị đầu tay thích hợp và nhóm thuốc nào CẦN TRÁNH ở bệnh nhân này?",
      choices: [
        "Điều trị đầu tay bằng thuốc Chẹn beta (hoặc Verapamil); TRÁNH dùng Nitrat, Lợi tiểu và Digoxin",
        "Điều trị đầu tay bằng Nitroglycerin ngậm dưới lưỡi; TRÁNH dùng thuốc chẹn beta",
        "Điều trị đầu tay bằng thuốc lợi tiểu Furosemide liều cao; TRÁNH dùng thuốc chẹn canxi",
        "Điều trị đầu tay bằng Digoxin để tăng co bóp cơ tim; TRÁNH dùng thuốc chẹn beta",
        "Chỉ định phẫu thuật thay van hai lá nhân tạo ngay lập tức"
      ],
      answer: 0,
      why: [
        "Bệnh nhân bị <b>Bệnh cơ tim phì đại tắc nghẽn (HOCM)</b> với tiếng thổi đặc trưng tăng khi giảm tiền tải (Valsalva, đứng dậy) và giảm khi tăng tiền tải/hậu tải (ngồi xổm, nắm tay).",
        "Mức độ tắc nghẽn đường ra thất trái (LVOT) phụ thuộc vào thể tích thất trái: <b>Thể tích thất trái càng nhỏ thì đường ra càng bị hẹp nặng và tiếng thổi càng to</b>.",
        "Thuốc điều trị đầu tay là <b>Chẹn beta giao cảm (như Metoprolol) hoặc Verapamil</b> (làm chậm nhịp tim để kéo dài thời gian đổ đầy tâm trương, tăng thể tích thất trái và giảm co bóp cơ tim).",
        "<b>CHỐNG CHỈ ĐỊNH DÙNG: Nitrat và Lợi tiểu</b> (làm giảm tiền tải) cùng với <b>Digoxin</b> (tăng co bóp cơ tim làm hẹp khít đường ra)."
      ],
      wrongs: {
        1: "Nitroglycerin làm giãn tĩnh mạch giảm tiền tải, khiến buồng thất trái co nhỏ lại và làm tắc nghẽn đường ra nặng nề hơn gây ngất.",
        2: "Lợi tiểu làm giảm thể tích nội mạch, tăng mức độ tắc nghẽn đường ra thất trái.",
        3: "Digoxin tăng co bóp cơ tim làm vách liên thất phì đại áp sát vào lá van hai lá gây nghẽn hoàn toàn đường ra.",
        4: "Phẫu thuật cắt vách cơ tim (myectomy) hoặc cồn hóa vách chỉ đặt ra khi điều trị nội khoa tối ưu thất bại."
      },
      objective:
        "HOCM có tiếng thổi tăng khi làm Valsalva/đứng dậy và giảm khi ngồi xổm; điều trị đầu tay bằng Chẹn beta (hoặc Verapamil) để tăng đổ đầy thất trái, tuyệt đối tránh Nitrat, Lợi tiểu và Digoxin."
    },

    {
      spec: "Tim mạch",
      task: "Bước chẩn đoán tiếp theo",
      short: "Bệnh cơ tim do stress Takotsubo",
      vignette: [
        "Nữ 64 tuổi được đưa vào cấp cứu vì đau thắt ngực dữ dội sau xương ức kèm khó thở, khởi phát 2 giờ sau khi nhận tin người thân qua đời đột ngột.",
        "Điện tâm đồ: ST chênh lên 2–3 mm ở các chuyển đạo trước tim V2–V6 kèm T âm sâu. Troponin I tăng nhẹ 0,8 ng/mL.",
        "Chụp mạch vành khẩn cấp: <b>Các nhánh động mạch vành hoàn toàn thông thoáng, không có hẹp hay tắc nghẽn</b>. Chụp buồng thất trái (Ventriculography): <b>Phình rộng và mất vận động toàn bộ vùng mỏm thất trái, tăng động bù trừ vùng đáy tim</b> (hình ảnh bình mực bẫy bạch tuộc Takotsubo)."
      ],
      vitals: [
        ["Nhiệt độ", "36,8 °C"],
        ["Huyết áp", "110/70"],
        ["Mạch", "90 l/ph"],
        ["Nhịp thở", "20 l/ph"]
      ],
      stem: "Chẩn đoán xác định và tiên lượng tiến triển của bệnh cảnh này là gì?",
      choices: [
        "Bệnh cơ tim do stress (Hội chứng Takotsubo) do tăng tiết catecholamine kịch phát; phần lớn chức năng tim hồi phục hoàn toàn sau vài tuần",
        "Nhồi máu cơ tim cấp do vỡ mảng xơ vữa; cần đặt stent phủ thuốc khẩn cấp",
        "Viêm cơ tim do virus cấp tính; cần điều trị thuốc kháng virus tĩnh mạch",
        "Thủng vách liên thất cấp tính; cần phẫu thuật tim hở",
        "Bệnh cơ tim giãn vô căn không hồi phục; cần đưa vào danh sách ghép tim"
      ],
      answer: 0,
      why: [
        "<b>Bệnh cơ tim Takotsubo</b> (Stress-induced cardiomyopathy / Hội chứng trái tim tan vỡ) thường gặp ở <b>phụ nữ sau mãn kinh sau sang chấn tâm lý hoặc thể chất nặng nề</b>.",
        "Cơ chế do <b>giải phóng ồ ạt catecholamine gây độc cơ tim vi mạch và co thắt vi mạch thoáng qua</b>, dẫn đến mất vận động vùng mỏm và giữa thất trái (Apical ballooning) trong khi vùng đáy tăng động.",
        "Đặc điểm phân biệt: ECG và triệu chứng giống hệt nhồi máu cơ tim, nhưng <b>chụp mạch vành không có tổn thương tắc nghẽn</b>. Tiên lượng tuyệt vời: <b>Chức năng co bóp thất trái thường hồi phục hoàn toàn sau 4–8 tuần</b> với điều trị nội khoa hỗ trợ (chẹn beta, ức chế men chuyển)."
      ],
      wrongs: {
        1: "Chụp mạch vành đã chứng minh các nhánh mạch vành hoàn toàn thông suốt, không có vỡ mảng xơ vữa hay huyết khối để đặt stent.",
        2: "Takotsubo khởi phát sau stress tâm lý cấp tính, không phải viêm cơ tim nhiễm trùng do virus.",
        3: "Không có tổn thương thủng vách tim trên siêu âm và chụp buồng tim.",
        4: "Bệnh có tính chất thoái lui và hồi phục hoàn toàn, không phải bệnh cơ tim giãn giai đoạn cuối cần ghép tim."
      },
      objective:
        "Bệnh cơ tim Takotsubo (phình mỏm thất trái sau stress tâm lý) có biểu hiện giống nhồi máu cơ tim nhưng mạch vành thông suốt; điều trị nội khoa hỗ trợ và chức năng tim thường hồi phục hoàn toàn sau vài tuần."
    },

    {
      spec: "Tim mạch",
      task: "Lựa chọn điều trị và chống chỉ định",
      short: "Cơn đau thắt ngực Prinzmetal (Co thắt mạch vành)",
      vignette: [
        "Nữ 44 tuổi đến khám vì các cơn đau ngực dữ dội sau xương ức xuất hiện lúc nghỉ ngơi, <b>thường xuyên xảy ra vào lúc nửa đêm và rạng sáng (khoảng 3–5 giờ sáng)</b> đánh thức bệnh nhân dậy. Cơn đau kéo dài 15 phút rồi tự hết. Bệnh nhân có hút thuốc lá 15 gói-năm, không có yếu tố nguy cơ tim mạch khác.",
        "Điện tâm đồ ghi được TRONG CƠN ĐAU: <b>ST chênh lên thoáng qua ở DII, DIII, aVF</b>. Điện tâm đồ ghi NGOÀI CƠN ĐAU: Hoàn toàn bình thường. Men tim Troponin âm tính.",
        "Chụp mạch vành qua da: Các nhánh động mạch vành nhẵn bóng không có hẹp xơ vữa. Test kích thích bằng Ergonovine hoặc Acetylcholine gây co thắt động mạch vành phải kèm đau ngực và tái hiện ST chênh lên."
      ],
      vitals: [
        ["Nhiệt độ", "36,7 °C"],
        ["Huyết áp", "124/76"],
        ["Mạch", "74 l/ph"],
        ["Nhịp thở", "16 l/ph"]
      ],
      stem: "Thuốc điều trị dự phòng hàng đầu và thuốc nào CHỐNG CHỈ ĐỊNH ở bệnh nhân này?",
      choices: [
        "Điều trị đầu tay bằng Thuốc chẹn kênh canxi (Diltiazem/Amlodipine); CHỐNG CHỈ ĐỊNH thuốc chẹn beta không chọn lọc (như Propranolol)",
        "Điều trị đầu tay bằng Thuốc chẹn beta không chọn lọc; CHỐNG CHỈ ĐỊNH thuốc chẹn kênh canxi",
        "Chỉ định phẫu thuật bắc cầu nối chủ vành (CABG) cấp cứu",
        "Điều trị bằng Aspirin liều cao kết hợp thuốc chống đông Warfarin",
        "Dùng thuốc chống trầm cảm ba vòng Amitriptyline"
      ],
      answer: 0,
      why: [
        "<b>Đau thắt ngực biến thái Prinzmetal (Vasospastic/Prinzmetal Angina)</b> xảy ra do <b>co thắt động mạch vành từng lúc</b> gây thiếu máu cơ tim xuyên thành (ST chênh lên thoáng qua trong cơn), thường xảy ra ở người trẻ/nữ hút thuốc lá, xuất hiện lúc nghỉ ngơi vào rạng sáng.",
        "Thuốc điều trị đầu tay dự phòng là <b>Chẹn kênh canxi (Diltiazem, Amlodipine)</b> kết hợp <b>Nitroglycerin</b> cắt cơn nhanh (giãn cơ trơn mạch vành). Cai thuốc lá là bắt buộc.",
        "<b>CHỐNG CHỈ ĐỊNH THUỐC CHẸN BETA KHÔNG CHỌN LỌC (như Propranolol)</b>: Do phong bế thụ thể beta-2 gây giãn mạch, để lại thụ thể alpha-1 gây co mạch không đối kháng (unopposed alpha-mediated vasoconstriction), làm co thắt mạch vành dữ dội hơn."
      ],
      wrongs: {
        1: "Chẹn beta không chọn lọc chống chỉ định vì làm trầm trọng thêm cơn co thắt mạch vành qua thụ thể alpha-1.",
        2: "Mạch vành không có tổn thương xơ vữa tắc nghẽn cố định nên không có chỉ định phẫu thuật bắc cầu nối CABG.",
        3: "Bệnh do co thắt cơ trơn mạch vành, không phải do huyết khối hình thành trong lòng mạch.",
        4: "Thuốc chống trầm cảm không có vai trò điều trị co thắt mạch vành."
      },
      objective:
        "Đau thắt ngực Prinzmetal do co thắt mạch vành gây đau ngực lúc nghỉ/rạng sáng với ST chênh lên thoáng qua; điều trị bằng Chẹn kênh canxi và Nitrat, chống chỉ định Chẹn beta không chọn lọc."
    },

    {
      spec: "Tim mạch",
      task: "Lựa chọn kháng sinh",
      short: "Viêm nội tâm mạc nhiễm khuẩn trên van tim nhân tạo sớm",
      vignette: [
        "Nam 62 tuổi có tiền sử phẫu thuật thay van động mạch chủ cơ học cách đây 6 tuần, nhập viện vì sốt cao rét run 39,2 °C, ớn lạnh và mệt lả 4 ngày nay.",
        "Khám: Nghe tim phát hiện tiếng thổi tâm trương mới xuất hiện ở bờ trái xương ức. Xuất hiện các nốt xuất huyết kết mạc mắt và chấm xuất huyết ở lòng bàn tay (Janeway lesions).",
        "Siêu âm tim qua thực quản (TEE): Khối sùi kích thước 12 mm bám vào vòng van nhân tạo kèm hở quanh chân van mức độ vừa. Cấy 3 mẫu máu đều mọc <b>Staphylococcus aureus kháng Methicillin (MRSA)</b>."
      ],
      vitals: [
        ["Nhiệt độ", "39,2 °C"],
        ["Huyết áp", "115/65"],
        ["Mạch", "106 l/ph"],
        ["Nhịp thở", "20 l/ph"]
      ],
      stem: "Phác đồ kháng sinh kinh nghiệm chuẩn cho viêm nội tâm mạc van nhân tạo sớm do S. aureus theo guideline AHA là gì?",
      choices: [
        "Vancomycin + Gentamicin + Rifampin trong ít nhất 6 tuần",
        "Ampicillin + Sulbactam đơn độc trong 2 tuần",
        "Ceftriaxone + Azithromycin đường tĩnh mạch",
        "Penicillin G liều cao tĩnh mạch đơn độc",
        "Ciprofloxacin đường uống kết hợp Metronidazole"
      ],
      answer: 0,
      why: [
        "<b>Viêm nội tâm mạc van nhân tạo sớm (Early PVE, xuất hiện trong vòng 1 năm sau mổ)</b> phần lớn do <b>Staphylococcus aureus</b> hoặc <i>Staphylococcus epidermidis</i> (tụ cầu Coagulase âm tính) có nguồn gốc bệnh viện.",
        "Tụ cầu có khả năng tạo màng sinh học (biofilm) bám cực kỳ chắc vào vật liệu nhân tạo. Phác đồ chuẩn bắt buộc phải <b>phối hợp 3 thuốc</b>: <b>Vancomycin</b> (diệt MRSA) + <b>Gentamicin</b> (tác dụng hiệp đồng diệt khuẩn nhanh) + <b>Rifampin</b> (kháng sinh duy nhất có khả năng ngấm sâu xuyên qua màng biofilm trên bề mặt kim loại/nhân tạo).",
        "Thời gian điều trị kéo dài ít nhất <b>6 tuần</b>."
      ],
      wrongs: {
        1: "Ampicillin/Sulbactam không diệt được MRSA và không có Rifampin để phá màng biofilm trên van nhân tạo.",
        2: "Ceftriaxone và Azithromycin không có tác dụng trên tụ cầu kháng Methicillin bám van nhân tạo.",
        3: "Penicillin G không có tác dụng với tụ cầu sinh men penicillinase/MRSA.",
        4: "Kháng sinh đường uống không đủ nồng độ diệt khuẩn trong viêm nội tâm mạc cấp tính đe dọa bung van."
      },
      objective:
        "Viêm nội tâm mạc van nhân tạo sớm (<1 năm) do tụ cầu bắt buộc điều trị bằng phác đồ 3 thuốc: Vancomycin + Gentamicin + Rifampin (xuyên màng biofilm) trong ít nhất 6 tuần."
    },

    {
      spec: "Tim mạch",
      task: "Bước xử trí tiếp theo",
      short: "Cơn nhịp nhanh kịch phát trên thất (AVNRT)",
      vignette: [
        "Nữ 26 tuổi khỏe mạnh đến khoa cấp cứu vì hồi hộp đánh trống ngực dữ dội khởi phát đột ngột khi đang ngồi làm việc. Bệnh nhân cảm thấy nghẹn ở cổ và khó thở nhẹ.",
        "Điện tâm đồ 12 chuyển đạo ghi nhận: <b>Nhịp nhanh đều, phức bộ QRS thanh mảnh (hẹp < 0,10s), tần số tim 185 l/phút</b>. Không thấy sóng P rõ ràng (sóng P bị vùi lấp trong phức bộ QRS - pseudo r' ở V1).",
        "Bệnh nhân hoàn toàn tỉnh táo, tiếp xúc tốt, da ấm hồng, huyết áp 115/75 mm Hg, SpO2 99%."
      ],
      vitals: [
        ["Nhiệt độ", "36,8 °C"],
        ["Huyết áp", "115/75"],
        ["Mạch", "185 l/ph"],
        ["Nhịp thở", "18 l/ph"]
      ],
      stem: "Thứ tự các bước xử trí cắt cơn thích hợp nhất cho bệnh nhân này là gì?",
      choices: [
        "Nghiệm pháp kích thích phế vị (Valsalva cải biên / Xoa xoang cảnh) trước; nếu thất bại tiêm tĩnh mạch nhanh Adenosine 6 mg",
        "Sốc điện chuyển nhịp đồng bộ 100J ngay lập tức",
        "Tiêm tĩnh mạch Digoxin 0,5 mg",
        "Đặt máy tạo nhịp tim tạm thời qua tĩnh mạch",
        "Tiêm Adrenaline tĩnh mạch 1 mg"
      ],
      answer: 0,
      why: [
        "Bệnh nhân bị <b>Nhịp nhanh vào lại nút nhĩ thất (AVNRT)</b> - dạng nhịp nhanh kịch phát trên thất (PSVT) phổ biến nhất ở người trẻ: nhịp nhanh đều, QRS hẹp, P chìm trong QRS, huyết động ổn định.",
        "Bước xử trí đầu tiên không dùng thuốc là <b>Nghiệm pháp kích thích dây thần kinh phế vị (Vagal maneuvers)</b> như <b>nghiệm pháp Valsalva cải biên (thổi áp lực 40 mmHg trong 15s rồi nâng chân 45°)</b> hoặc xoa xoang cảnh 1 bên.",
        "Nếu nghiệm pháp phế vị thất bại, thuốc cắt cơn hàng đầu là <b>Adenosine tiêm tĩnh mạch nhanh (6 mg bolus kèm bơm 20 mL nước muối)</b>. Adenosine ức chế tạm thời dẫn truyền qua nút nhĩ thất để cắt đứt vòng vào lại.",
        "Sốc điện đồng bộ chỉ dùng ngay từ đầu khi bệnh nhân có huyết động không ổn định (tụt huyết áp, đau thắt ngực, suy tim cấp, lơ mơ)."
      ],
      wrongs: {
        1: "Sốc điện đồng bộ chỉ chỉ định khi huyết động không ổn định; bệnh nhân này HA 115/75 và tỉnh táo hoàn toàn nên ưu tiên nghiệm pháp phế vị và thuốc.",
        2: "Digoxin có thời gian khởi phát tác dụng rất chậm (vài giờ), không dùng để cắt cơn nhịp nhanh kịch phát cấp cứu.",
        3: "Máy tạo nhịp tim dùng cho nhịp chậm hoặc block nhĩ thất, không dùng cho nhịp nhanh trên thất.",
        4: "Adrenaline làm tăng nhịp tim và tăng kích thích cơ tim, sẽ đẩy bệnh nhân vào loạn nhịp thất nguy hiểm."
      },
      objective:
        "Nhịp nhanh kịch phát trên thất (AVNRT) có huyết động ổn định xử trí bước đầu bằng nghiệm pháp kích thích phế vị (Valsalva cải biên), nếu thất bại tiêm tĩnh mạch nhanh Adenosine (6 mg); sốc điện đồng bộ chỉ dùng khi huyết động không ổn."
    },

    {
      spec: "Tim mạch",
      task: "Bước xử trí cấp cứu",
      short: "Cơn xoắn đỉnh (Torsades de Pointes) do QT dài",
      vignette: [
        "Nữ 48 tuổi đang nằm viện điều trị viêm phổi bằng Azithromycin tĩnh mạch kết hợp dùng thuốc chống nôn Ondansetron và Haloperidol. Bệnh nhân đột ngột ngất xỉu, co giật thoáng qua.",
        "Monitor theo dõi tim ghi nhận cơn nhịp nhanh thất đa hình với các đỉnh phức bộ QRS xoay quanh đường đẳng điện (<b>Xoắn đỉnh - Torsades de Pointes</b>) kéo dài 20 giây rồi tự cắt. Đo điện tâm đồ 12 chuyển đạo lúc nhịp xoang thấy <b>khoảng QTc kéo dài 560 ms</b> (bình thường < 450 ms ở nữ).",
        "Xét nghiệm điện giải: Kali máu 3,2 mEq/L, Magnesi máu 1,4 mg/dL (bình thường 1,8–2,4)."
      ],
      vitals: [
        ["Nhiệt độ", "37,0 °C"],
        ["Huyết áp", "100/60"],
        ["Mạch", "95 l/ph"],
        ["Nhịp thở", "18 l/ph"]
      ],
      stem: "Bước xử trí cấp cứu dùng thuốc đầu tay để ngăn ngừa tái phát cơn xoắn đỉnh là gì?",
      choices: [
        "Truyền tĩnh mạch Magnesi sulfat (Magnesium Sulfate 2g) và ngừng ngay các thuốc kéo dài đoạn QT",
        "Tiêm tĩnh mạch Amiodarone 150 mg",
        "Tiêm tĩnh mạch Procainamide 100 mg",
        "Bắt đầu truyền Isoproterenol kết hợp Sotalol",
        "Tiêm tĩnh mạch Calci Clorid 10%"
      ],
      answer: 0,
      why: [
        "Bệnh nhân bị <b>Cơn xoắn đỉnh (Torsades de Pointes)</b> trên nền <b>Hội chứng QT kéo dài mắc phải (Acquired Long QT Syndrome)</b> do phối hợp nhiều thuốc gây kéo dài đoạn QT (Azithromycin + Ondansetron + Haloperidol) trên nền hạ kali và hạ magnesi máu.",
        "Thuốc điều trị cấp cứu đầu tay số một là <b>Magnesi sulfat truyền tĩnh mạch (2g trong 1–2 phút)</b>, bất kể nồng độ magnesi máu ban đầu là bao nhiêu (Magnesi giúp ổn định màng tế bào cơ tim bằng cách ức chế dòng canxi đi vào sớm).",
        "Đồng thời bắt buộc <b>ngừng ngay tất cả các thuốc gây kéo dài QT</b> và bù đủ Kali máu lên mục tiêu > 4,0–4,5 mEq/L. <b>CHỐNG CHỈ ĐỊNH DÙNG Amiodarone, Sotalol, Procainamide</b> vì chúng là thuốc chống loạn nhịp nhóm Ia/III gây kéo dài thêm khoảng QT."
      ],
      wrongs: {
        1: "Amiodarone kéo dài thêm khoảng QT và làm cơn xoắn đỉnh xuất hiện dày đặc hơn dẫn đến rung thất.",
        2: "Procainamide (nhóm Ia) kéo dài QT nên chống chỉ định trong xoắn đỉnh.",
        3: "Sotalol là thuốc chẹn beta nhóm III gây kéo dài QT mạnh, chống chỉ định tuyệt đối.",
        4: "Calci Clorid dùng cho tăng kali máu hoặc ngộ độc thuốc chẹn canxi, không phải điều trị xoắn đỉnh."
      },
      objective:
        "Cơn xoắn đỉnh (Torsades de Pointes) do QT dài xử trí cấp cứu đầu tay bằng Magnesi sulfat tĩnh mạch (2g) và bù kali, ngừng ngay các thuốc kéo dài QT; tuyệt đối tránh dùng Amiodarone và Procainamide."
    },

    {
      spec: "Tim mạch",
      task: "Mục tiêu và lựa chọn điều trị",
      short: "Cơn tăng huyết áp cấp cứu (Hypertensive Emergency)",
      vignette: [
        "Nam 52 tuổi tiền sử tăng huyết áp bỏ thuốc 6 tháng nay, được đưa vào cấp cứu vì đau đầu dữ dội, nhìn mờ, buồn nôn và lú lẫn.",
        "Khám: Huyết áp đo được <b>220/130 mm Hg</b> ở cả hai tay. Soi đáy mắt phát hiện <b>phù gai thị hai bên kèm xuất huyết hình ngọn lửa và xuất tiết dạng bông</b>. Khám thần kinh không có liệt khu trú.",
        "Xét nghiệm: Creatinine 2,2 mg/dL (nền 1,0 mg/dL), Protein niệu (++), hồng cầu niệu vi thể."
      ],
      vitals: [
        ["Nhiệt độ", "37,0 °C"],
        ["Huyết áp", "220/130"],
        ["Mạch", "98 l/ph"],
        ["Nhịp thở", "18 l/ph"]
      ],
      stem: "Chiến lược hạ huyết áp chuẩn xác nhất cho bệnh nhân này trong 24 giờ đầu là gì?",
      choices: [
        "Dùng thuốc truyền tĩnh mạch (Nicardipine hoặc Labetalol); hạ huyết áp tâm thu không quá 20–25% trong giờ đầu tiên, sau đó đạt khoảng 160/100 trong 2–6 giờ tiếp theo",
        "Hạ huyết áp tâm thu ngay lập tức về mức bình thường 120/80 mm Hg trong vòng 30 phút bằng thuốc uống Nifedipine nhỏ giọt",
        "Tiêm bắp Furosemide liều cao kết hợp uống Captopril liều tối đa",
        "Chỉ cho bệnh nhân nghỉ ngơi tại phòng yên tĩnh và uống viên an thần Diazepam",
        "Truyền dung dịch Natri Nitroprusside liều tối đa kéo dài liên tục 48 giờ"
      ],
      answer: 0,
      why: [
        "Bệnh nhân có <b>Cơn tăng huyết áp cấp cứu (Hypertensive Emergency)</b>: Huyết áp tăng rất cao (>180/120 mmHg) kèm <b>tổn thương cơ quan đích cấp tính</b> (Bệnh não do tăng huyết áp, phù gai thị đáy mắt, tổn thương thận cấp).",
        "Nguyên tắc sống còn: <b>KHÔNG ĐƯỢC HẠ HUYẾT ÁP QUÁ NHANH HOẶC VỀ MỨC BÌNH THƯỜNG NGAY LẬP TỨC</b> vì mạch máu não và thận đã quen với áp lực tưới máu cao; tụt huyết áp đột ngột sẽ gây <b>nhồi máu não do thiếu máu cục bộ hoặc hoại tử ống thận cấp</b>.",
        "Mục tiêu chuẩn: Hạ huyết áp động mạch trung bình (MAP) <b>không quá 20–25% trong giờ đầu tiên</b>, sau đó đưa về khoảng 160/100–110 mmHg trong 2–6 giờ tiếp theo, và bình thường hóa dần trong 24–48 giờ bằng <b>thuốc truyền tĩnh mạch chỉnh liều (Nicardipine, Labetalol)</b>."
      ],
      wrongs: {
        1: "Hạ HA về 120/80 trong 30 phút bằng Nifedipine ngậm/uống là chống chỉ định nguy hiểm vì gây tụt huyết áp mất kiểm soát và nhồi máu não diện rộng.",
        2: "Cơn tăng huyết áp cấp cứu bắt buộc dùng thuốc truyền tĩnh mạch có thể chỉnh liều từng phút, không dùng thuốc uống/tiêm bắp tác dụng không lường trước.",
        3: "Tăng huyết áp có tổn thương cơ quan đích bắt buộc phải can thiệp thuốc tĩnh mạch cấp cứu ngay, không trì hoãn bằng thuốc an thần.",
        4: "Nitroprusside dùng liều cao kéo dài có nguy cơ ngộ độc Cyanide và Thiocyanate nghiêm trọng."
      },
      objective:
        "Cơn tăng huyết áp cấp cứu (kèm tổn thương cơ quan đích như phù gai thị, suy thận cấp) bắt buộc dùng thuốc tĩnh mạch (Nicardipine, Labetalol); hạ HA không quá 20–25% trong giờ đầu để tránh nhồi máu não do thiếu máu tưới máu."
    },

    {
      spec: "Tim mạch",
      task: "Bước xử trí tiếp theo",
      short: "Rung nhĩ mới xuất hiện và phân tầng nguy cơ tắc mạch",
      vignette: [
        "Nữ 68 tuổi có tiền sử tăng huyết áp và đái tháo đường típ 2, đến khám vì cảm thấy tim đập không đều và hồi hộp ngực 3 ngày nay.",
        "Điện tâm đồ 12 chuyển đạo: <b>Mất sóng P, thay bằng sóng lăn tăn f, khoảng R-R hoàn toàn không đều, tần số thất trung bình 115 l/phút</b>. Không có ST chênh lên.",
        "Siêu âm tim: Nhĩ trái giãn nhẹ (đường kính 42 mm), thất trái dày đồng tâm, phân suất tống máu EF 52%. Huyết áp 135/85 mm Hg."
      ],
      vitals: [
        ["Nhiệt độ", "36,8 °C"],
        ["Huyết áp", "135/85"],
        ["Mạch", "115 l/ph (không đều)"],
        ["Nhịp thở", "16 l/ph"]
      ],
      stem: "Đánh giá thang điểm CHA2DS2-VASc và bước điều trị nào sau đây là chuẩn xác nhất?",
      choices: [
        "Điểm CHA2DS2-VASc = 4 (Nữ, Tuổi 65-74, Tăng HA, ĐTĐ); bắt đầu Thuốc chống đông đường uống thế hệ mới (DOAC: Apixaban hoặc Rivaroxaban) kết hợp thuốc kiểm soát tần số tim (Metoprolol)",
        "Điểm CHA2DS2-VASc = 1; chỉ cần điều trị bằng Aspirin 81 mg hàng ngày",
        "Sốc điện chuyển nhịp khẩn cấp ngay lập tức mà không cần siêu âm qua thực quản hay dùng chống đông",
        "Bắt đầu truyền Heparin tĩnh mạch kết hợp dùng Clopidogrel đơn độc",
        "Chỉ định phẫu thuật triệt đốt cô lập tĩnh mạch phổi ngay trong ngày đầu"
      ],
      answer: 0,
      why: [
        "Bệnh nhân bị <b>Rung nhĩ không do bệnh van tim</b>. Thang điểm <b>CHA2DS2-VASc</b> tính như sau: Nữ (+1) + Tuổi 68 (+1) + Tăng huyết áp (+1) + Đái tháo đường (+1) = <b>4 điểm</b> (nguy cơ đột quỵ tắc mạch cao >4%/năm).",
        "Khuyến cáo AHA/ESC: Bệnh nhân nam ≥ 2 điểm hoặc <b>nữ ≥ 3 điểm</b> có chỉ định bắt buộc dùng <b>Thuốc chống đông đường uống (DOAC: Apixaban, Rivaroxaban, Dabigatran, Edoxaban)</b> để phòng ngừa đột quỵ tắc mạch não. DOAC ưu thế hơn Warfarin vì hiệu quả tương đương nhưng giảm đáng kể nguy cơ xuất huyết não.",
        "Phối hợp thuốc <b>kiểm soát tần số thất</b> (Chẹn beta như Metoprolol hoặc Chẹn kênh canxi non-DHP Diltiazem). Vì rung nhĩ đã kéo dài >48 giờ, <b>không được chuyển nhịp ngay</b> nếu chưa loại trừ huyết khối nhĩ trái bằng siêu âm qua thực quản (TEE) hoặc dùng đủ chống đông 3 tuần."
      ],
      wrongs: {
        1: "Aspirin đơn độc không có hiệu quả phòng ngừa đột quỵ trong rung nhĩ và không còn được khuyến cáo trong các thang điểm hiện đại.",
        2: "Rung nhĩ >48 giờ nếu sốc điện chuyển nhịp ngay mà không dùng chống đông trước sẽ làm bắn cục máu đông ở tiểu nhĩ trái lên não gây nhồi máu não tắc mạch diện rộng.",
        3: "Kháng kết tập tiểu cầu (Clopidogrel) không thay thế được thuốc chống đông trong dự phòng huyết khối buồng tim.",
        4: "Triệt đốt qua catheter là lựa chọn sau khi thất bại hoặc không dung nạp thuốc, không phải chỉ định cấp cứu ban đầu."
      },
      objective:
        "Rung nhĩ ở bệnh nhân có điểm CHA2DS2-VASc cao (nam ≥2, nữ ≥3) bắt buộc dùng thuốc chống đông đường uống (ưu tiên DOAC) để phòng đột quỵ não; rung nhĩ >48h không được chuyển nhịp ngay nếu chưa dùng đủ chống đông 3 tuần hoặc làm TEE."
    },

    {
      spec: "Tim mạch",
      task: "Bước xử trí tiếp theo",
      short: "Block nhĩ thất độ 3 (Hoàn toàn) có triệu chứng ngất",
      vignette: [
        "Cụ ông 79 tuổi được đưa vào cấp cứu vì ngất xỉu đột ngột khi đang đi dạo công viên. Hai tuần nay cụ cảm thấy mệt mỏi nhiều, hoa mắt và đi lại chậm chạp.",
        "Điện tâm đồ 12 chuyển đạo ghi nhận: <b>Sóng P đều với tần số 78 l/phút, phức bộ QRS rộng đều với tần số 32 l/phút; sóng P và phức bộ QRS hoàn toàn phân ly không có mối liên hệ nào với nhau (AV dissociation)</b>.",
        "Khám: Bệnh nhân tiếp xúc chậm, da tái, tiếng T1 thay đổi cường độ theo từng nhát bóp, tĩnh mạch cổ có sóng 'a' đại bác (cannon 'a' waves) xuất hiện ngẫu nhiên."
      ],
      vitals: [
        ["Nhiệt độ", "36,6 °C"],
        ["Huyết áp", "88/50"],
        ["Mạch", "32 l/ph"],
        ["Nhịp thở", "16 l/ph"]
      ],
      stem: "Bước xử trí tiếp theo thích hợp nhất cho bệnh nhân này là gì?",
      choices: [
        "Tiêm Atropine / tạo nhịp tạm thời qua da cấp cứu, sau đó cấy máy tạo nhịp tim vĩnh viễn (Permanent Pacemaker)",
        "Tiêm tĩnh mạch Metoprolol 5 mg để ổn định nhịp",
        "Truyền tĩnh mạch Amiodarone 300 mg",
        "Cho bệnh nhân uống viên Theophylline kéo dài",
        "Tiêm tĩnh mạch Digoxin 0,25 mg"
      ],
      answer: 0,
      why: [
        "Bệnh nhân có <b>Block nhĩ thất hoàn toàn (Độ 3 / Complete AV block)</b>: Nhĩ và thất đập hoàn toàn độc lập (sóng P và QRS phân ly), nhịp thoát thất chậm (32 l/phút) gây tụt huyết áp và ngất (cơn Adams-Stokes).",
        "Dấu hiệu thực thể kinh điển: <b>Sóng 'a' đại bác ở tĩnh mạch cổ</b> xuất hiện khi tâm nhĩ co bóp đúng lúc van ba lá đang đóng kín.",
        "Xử trí: Cấp cứu ban đầu bằng <b>Atropine</b> hoặc <b>Tạo nhịp tạm thời qua da / qua tĩnh mạch (Transcutaneous/Transvenous pacing)</b>; chỉ định dứt điểm bắt buộc là <b>Cấy máy tạo nhịp tim vĩnh viễn (Permanent Pacemaker)</b>."
      ],
      wrongs: {
        1: "Metoprolol ức chế nút nhĩ thất và ức chế cơ chế tạo nhịp thoát, sẽ làm tim ngừng đập hoàn toàn.",
        2: "Amiodarone ức chế dẫn truyền nhĩ thất, chống chỉ định trong block AV độ cao.",
        3: "Theophylline không có vai trò điều trị block AV độ 3 có triệu chứng ngất ở người cao tuổi.",
        4: "Digoxin ức chế nút nhĩ thất, làm nặng thêm tình trạng block tim."
      },
      objective:
        "Block nhĩ thất độ 3 đặc trưng bởi P và QRS phân ly hoàn toàn và sóng 'a' đại bác ở tĩnh mạch cổ; xử trí cấp cứu bằng Atropine/tạo nhịp tạm thời và chỉ định cấy máy tạo nhịp vĩnh viễn."
    },

    {
      spec: "Tim mạch",
      task: "Bước xử trí tiếp theo",
      short: "Bệnh cơ tim do Beriberi ướt (Thiếu Thiamine)",
      vignette: [
        "Nam 46 tuổi có tiền sử nghiện rượu nặng vô gia cư, nhập viện vì khó thở dữ dội, phù to toàn thân hai chân và bụng chướng trong 1 tuần qua.",
        "Khám: Da ấm, đầu chi đỏ hồng, mạch nảy mạnh dội (bounding pulse), huyết áp 145/55 mm Hg (áp lực mạch rộng 90 mmHg). Tim nhịp nhanh 115 l/phút, có tiếng T3 ở mỏm. Phổi có ran ẩm hai đáy. Khám thần kinh phát hiện giảm cảm giác nông sâu hai chân đối xứng và mất phản xạ gân gót.",
        "Siêu âm tim: Tim tăng động toàn bộ, buồng thất giãn nhẹ, <b>Cung lượng tim tăng cao (High-output heart failure)</b>. Lactate máu tăng 4,5 mmol/L."
      ],
      vitals: [
        ["Nhiệt độ", "37,0 °C"],
        ["Huyết áp", "145/55"],
        ["Mạch", "115 l/ph"],
        ["Nhịp thở", "24 l/ph"]
      ],
      stem: "Điều trị đặc hiệu nguyên nhân giúp đảo ngược nhanh chóng tình trạng suy tim ở bệnh nhân này là gì?",
      choices: [
        "Tiêm tĩnh mạch Thiamine (Vitamin B1) liều cao ngay lập tức trước khi truyền glucose",
        "Truyền dung dịch Glucose 10% tốc độ cao đơn độc",
        "Dùng thuốc co mạch Noradrenaline liều cao kéo dài",
        "Tiêm tĩnh mạch Digoxin liều nạp",
        "Phẫu thuật sửa van tim hai lá"
      ],
      answer: 0,
      why: [
        "Bệnh nhân có bệnh cảnh kinh điển của <b>Suy tim cung lượng cao do Beriberi ướt (Wet Beriberi)</b> kết hợp viêm đa dây thần kinh ngoại biên (Dry Beriberi) do <b>thiếu hụt Vitamin B1 (Thiamine)</b> trên bệnh nhân nghiện rượu/suy dinh dưỡng.",
        "Thiếu thiamine làm suy giảm chu trình Krebs, gây giãn mạch hệ thống ngoại biên nghiêm trọng dẫn đến giảm kháng lực mạch hệ thống (SVR) và suy tim cung lượng cao (da ấm, mạch nảy mạnh, áp lực mạch rộng).",
        "Xử trí đặc hiệu là <b>tiêm tĩnh mạch Thiamine liều cao</b>. Triệu chứng suy tim và huyết động cải thiện rõ rệt chỉ sau vài giờ đến vài ngày. <b>Bắt buộc tiêm Thiamine TRƯỚC khi truyền dịch chứa Glucose</b> để tránh làm bùng phát hội chứng não Wernicke cấp tính do cạn kiệt thiamine tồn dư."
      ],
      wrongs: {
        1: "Truyền Glucose trước Thiamine sẽ làm cạn kiệt lượng thiamine ít ỏi còn lại của cơ thể, đẩy bệnh nhân vào hội chứng não Wernicke cấp tính (lú lẫn, thất điều, liệt vận nhãn) và tử vong.",
        2: "Noradrenaline không giải quyết được căn nguyên thiếu enzym tế bào do thiếu thiamine.",
        3: "Digoxin không có hiệu quả trong suy tim cung lượng cao.",
        4: "Suy tim ở đây là do giãn mạch chuyển hóa, không có tổn thương van tim nguyên phát."
      },
      objective:
        "Beriberi ướt (thiếu Thiamine ở người nghiện rượu) gây suy tim cung lượng cao với da ấm, mạch nảy dội; điều trị đặc hiệu bằng tiêm tĩnh mạch Thiamine trước khi truyền glucose."
    },

    {
      spec: "Tim mạch",
      task: "Bước chẩn đoán tiếp theo",
      short: "U nhầy tâm nhĩ trái (Left Atrial Myxoma)",
      vignette: [
        "Nữ 48 tuổi đến khám vì sốt nhẹ kéo dài, sụt 5 kg, mệt mỏi và đau mỏi khớp 3 tháng nay. Bệnh nhân kể có hai lần bị choáng ngất thoáng qua khi đang ngồi bỗng đứng dậy hoặc khi đổi tư thế nằm nghiêng sang trái.",
        "Khám tim: Nghe thấy <b>tiếng 'plop' khối u (tumor plop) ở đầu thì tâm trương</b> ngay sau T2, theo sau là tiếng rung tâm trương ở mỏm tim giống hẹp van hai lá nhưng <b>âm sắc và cường độ thay đổi rõ rệt khi bệnh nhân thay đổi tư thế nằm</b>.",
        "Xét nghiệm máu: Tốc độ lắng máu (ESR) tăng 88 mm/h, CRP 35 mg/L, Hemoglobin 10,2 g/dL (thiếu máu mạn tính)."
      ],
      vitals: [
        ["Nhiệt độ", "37,6 °C"],
        ["Huyết áp", "118/72"],
        ["Mạch", "80 l/ph"],
        ["Nhịp thở", "16 l/ph"]
      ],
      stem: "Phương tiện chẩn đoán hình ảnh bước tiếp theo tốt nhất và phương pháp điều trị triệt để là gì?",
      choices: [
        "Siêu âm tim qua thành ngực / qua thực quản phát hiện khối u nhầy nhĩ trái có cuống; điều trị bằng phẫu thuật cắt bỏ u",
        "Chụp cộng hưởng từ sọ não; điều trị bằng thuốc chống động kinh Carbamazepine",
        "Nội soi dạ dày tá tràng tìm ổ loét gây thiếu máu",
        "Điều trị bằng kháng sinh phổ rộng theo phác đồ viêm nội tâm mạc",
        "Dùng thuốc ức chế miễn dịch Corticoid điều trị bệnh tự miễn"
      ],
      answer: 0,
      why: [
        "Bệnh cảnh điển hình của <b>U nhầy tâm nhĩ (Atrial Myxoma)</b> - khối u nguyên phát ở tim phổ biến nhất ở người lớn (80% nằm ở nhĩ trái gắn vào vách liên nhĩ).",
        "Biểu hiện lâm sàng gồm tam chứng: (1) <b>Tắc nghẽn van hai lá phụ thuộc tư thế</b> (ngất, khó thở khi đổi tư thế, tiếng 'tumor plop' tâm trương); (2) <b>Triệu chứng toàn thân giống bệnh tự miễn/nhiễm trùng</b> (sốt, sụt cân, ESR tăng do khối u tiết Interleukin-6); (3) <b>Tắc mạch hệ thống</b> (đột quỵ não ở người trẻ do mảnh u hoặc huyết khối văng đi).",
        "Chẩn đoán xác định bằng <b>Siêu âm tim</b> (thấy khối u nhĩ trái có cuống di động thò qua lỗ van hai lá trong thì tâm trương). Điều trị triệt để là <b>Phẫu thuật cắt bỏ khối u</b>."
      ],
      wrongs: {
        1: "Ngất ở đây là do khối u tạm thời bít lỗ van hai lá gây sụt cung lượng tim cấp theo tư thế, không phải do động kinh nguyên phát.",
        2: "Thiếu máu và sốt ở đây là do khối u tiết IL-6 gây viêm mạn tính, không phải do loét dạ dày.",
        3: "Không có tổn thương sùi do vi khuẩn; kháng sinh không có tác dụng với khối u tim.",
        4: "Corticoid không giải quyết được khối u và làm chậm trễ phẫu thuật phòng ngừa đột quỵ tắc mạch."
      },
      objective:
        "U nhầy nhĩ trái (Myxoma) gây tiếng 'tumor plop' tâm trương thay đổi theo tư thế, triệu chứng toàn thân do IL-6 và nguy cơ tắc mạch não; chẩn đoán bằng Siêu âm tim và điều trị bằng phẫu thuật cắt u."
    },

    {
      spec: "Tim mạch",
      task: "Bước chẩn đoán tiếp theo",
      short: "Viêm cơ tim cấp do virus",
      vignette: [
        "Nam 24 tuổi khỏe mạnh đến cấp cứu vì đau tức ngực âm ỉ kèm khó thở khi đi lại và mệt lả 3 ngày nay. Một tuần trước bệnh nhân có sốt, đau họng và đau mỏi cơ toàn thân.",
        "Khám: Tiếng T1, T2 mờ, có tiếng T3 ở mỏm. Phổi có ít ran ẩm ở hai đáy. Không có tiếng cọ màng tim.",
        "Điện tâm đồ: Nhịp nhanh xoang, ST chênh lên nhẹ không theo vùng mạch vành giải phẫu kèm sóng T âm dẹt lan tỏa. <b>Troponin I tăng rất cao 6,5 ng/mL</b>. Chụp mạch vành qua da: Động mạch vành hoàn toàn bình thường, không có xơ vữa hay tắc nghẽn."
      ],
      vitals: [
        ["Nhiệt độ", "37,4 °C"],
        ["Huyết áp", "102/65"],
        ["Mạch", "108 l/ph"],
        ["Nhịp thở", "22 l/ph"]
      ],
      stem: "Chẩn đoán xác định phù hợp nhất và phương tiện chẩn đoán hình ảnh không xâm lấn có giá trị cao nhất là gì?",
      choices: [
        "Viêm cơ tim cấp (Myocarditis) do virus (như Coxsackievirus / Parvovirus B19); chẩn đoán bằng Chụp cộng hưởng từ tim (Cardiac MRI)",
        "Nhồi máu cơ tim cấp do vỡ mảng xơ vữa; cần dùng thuốc tiêu sợi huyết",
        "Tràn dịch màng ngoài tim do lao; cần chọc dịch màng tim",
        "Thuyên tắc phổi cấp; cần dùng thuốc tiêu sợi huyết",
        "Co thắt thực quản lan tỏa; cần dùng thuốc giãn cơ trơn"
      ],
      answer: 0,
      why: [
        "<b>Viêm cơ tim cấp (Acute Myocarditis)</b> thường gặp ở <b>người trẻ sau đợt nhiễm virus đường hô hấp hoặc tiêu hóa (Coxsackie B, Adenovirus, Parvovirus B19, COVID-19)</b>.",
        "Biểu hiện: Suy tim cấp mới khởi phát, đau ngực, men tim Troponin tăng rất cao kèm biến đổi ECG nhưng <b>chụp mạch vành hoàn toàn bình thường</b>.",
        "<b>Chụp cộng hưởng từ tim (Cardiac MRI)</b> là tiêu chuẩn vàng không xâm lấn (tiêu chuẩn Lake Louise: thấy phù nề cơ tim trên T2 và ngấm thuốc tương phản muộn ở lớp dưới màng ngoài tim/giữa cơ tim - subepicardial/mid-myocardial LGE). Điều trị chủ yếu là nội khoa hỗ trợ suy tim (ACEi, Beta-blocker) và tránh vận động gắng sức trong 3–6 tháng."
      ],
      wrongs: {
        1: "Mạch vành thông suốt hoàn toàn đã loại trừ nhồi máu cơ tim do mảng xơ vữa.",
        2: "Bệnh nhân không có bằng chứng nhiễm lao và tổn thương chủ yếu ở cơ tim chứ không phải khoang màng tim.",
        3: "Không có yếu tố nguy cơ thuyên tắc mạch và hình ảnh tổn thương là cơ tim tăng Troponin cao.",
        4: "Co thắt thực quản không làm tăng men tim Troponin hay gây suy tim ứ dịch."
      },
      objective:
        "Viêm cơ tim cấp ở người trẻ sau nhiễm virus gây tăng Troponin cao và suy tim nhưng mạch vành thông suốt; chẩn đoán bằng Cộng hưởng từ tim (Cardiac MRI) và điều trị nội khoa hỗ trợ, tránh gắng sức."
    },

    {
      spec: "Tim mạch",
      task: "Lựa chọn điều trị",
      short: "Bệnh động mạch ngoại biên (PAD) và đau cách hồi",
      vignette: [
        "Nam 66 tuổi có tiền sử đái tháo đường típ 2 và hút thuốc lá 40 gói-năm, đến khám vì đau thắt bắp chân hai bên mỗi khi đi bộ khoảng 150 mét, đau buộc bệnh nhân phải dừng lại nghỉ 5 phút thì đỡ, sau đó đi tiếp lại đau tái diễn (<b>đau cách hồi - intermittent claudication</b>).",
        "Khám: Lông cẳng chân rụng thưa, da cẳng chân khô bóng, móng chân dày gãy. Bắt mạch mu chân và mạch chày sau hai bên rất yếu. Không có vết loét hoại tử.",
        "Đo chỉ số huyết áp cổ chân - cánh tay (<b>Ankle-Brachial Index - ABI</b>): Bên phải <b>0,62</b>, bên trái <b>0,58</b> (bình thường 1,00–1,40)."
      ],
      vitals: [
        ["Nhiệt độ", "36,8 °C"],
        ["Huyết áp", "138/82"],
        ["Mạch", "76 l/ph"],
        ["Nhịp thở", "16 l/ph"]
      ],
      stem: "Phác đồ điều trị nội khoa toàn diện đầu tay cho bệnh nhân này bao gồm những gì?",
      choices: [
        "Cai thuốc lá + Statin liều cao + Aspirin (hoặc Clopidogrel) + Chương trình tập đi bộ có giám sát + Cilostazol",
        "Chỉ định phẫu thuật cắt cụt chi dưới dự phòng ngay lập tức",
        "Dùng thuốc chống đông Warfarin đơn độc duy trì INR 2,5–3,5",
        "Nghỉ ngơi tại giường tuyệt đối và dùng thuốc giảm đau Opioid kéo dài",
        "Tiêm thuốc co mạch Ephedrine để tăng áp lực tưới máu ngoại vi"
      ],
      answer: 0,
      why: [
        "Bệnh nhân bị <b>Bệnh động mạch ngoại biên (Peripheral Artery Disease - PAD)</b> chi dưới do xơ vữa động mạch với triệu chứng kinh điển <b>đau cách hồi</b> và chỉ số <b>ABI < 0,90</b> (mức 0,4–0,7 là thiếu máu mức độ vừa).",
        "Chiến lược điều trị nội khoa toàn diện gồm: (1) <b>Điều chỉnh yếu tố nguy cơ tim mạch</b>: Bắt buộc cai thuốc lá, kiểm soát HbA1c, <b>Statin cường độ cao (Atorvastatin 80 mg)</b> và thuốc hạ huyết áp; (2) <b>Chống kết tập tiểu cầu</b>: Aspirin 81 mg hoặc Clopidogrel 75 mg; (3) <b>Chương trình tập đi bộ có giám sát (Supervised Exercise Therapy)</b> là biện pháp hiệu quả nhất giúp phát triển tuần hoàn bàng hệ; (4) <b>Cilostazol</b> (thuốc ức chế PDE-3 gây giãn mạch và ức chế ngưng tập tiểu cầu) giúp kéo dài khoảng cách đi bộ không đau."
      ],
      wrongs: {
        1: "Cắt cụt chi chỉ đặt ra khi có thiếu máu chi đe dọa hoại tử không thể tái thông mạch; bệnh nhân đau cách hồi hoàn toàn điều trị nội khoa bảo tồn.",
        2: "Warfarin không được khuyến cáo cho PAD không biến chứng vì tăng nguy cơ xuất huyết mà không hiệu quả hơn kháng tiểu cầu.",
        3: "Nghỉ ngơi tại giường làm teo cơ và mất khả năng phát triển bàng hệ; tập đi bộ có giám sát mới là điều trị cốt lõi.",
        4: "Thuốc co mạch sẽ làm giảm dòng máu nuôi chi và gây hoại tử chi cấp tính."
      },
      objective:
        "Bệnh động mạch ngoại biên (ABI < 0,9) điều trị nội khoa bằng Statin liều cao, Kháng tiểu cầu (Aspirin/Clopidogrel), Cai thuốc lá, Tập đi bộ có giám sát và Cilostazol để cải thiện triệu chứng đau cách hồi."
    },

    {
      spec: "Tim mạch",
      task: "Bước xử trí và chống chỉ định",
      short: "Hở van động mạch chủ cấp do viêm nội tâm mạc",
      vignette: [
        "Nam 36 tuổi có tiền sử tiêm chích ma túy, nhập viện vì sốt cao và khó thở tiến triển nhanh thành phù phổi cấp trong 24 giờ qua.",
        "Khám: Bệnh nhân thở co kéo, vã mồ hôi, tĩnh mạch cổ nổi. Nghe tim thấy <b>tiếng T1 mờ, tiếng thổi tâm trương sớm 3/6 ngắn ở bờ trái xương ức</b>. Bắt mạch ngoại vi thấy <b>mạch sụp nhanh (Water-hammer / Corrigan pulse)</b>, huyết áp 140/40 mm Hg (áp lực mạch rộng 100 mm Hg). Phổi nhiều ran ẩm hai bên.",
        "Siêu âm tim cấp cứu: Khối sùi lớn gây rách lá van động mạch chủ, hở van động mạch chủ cấp tính mức độ nặng làm thất trái bị quá tải thể tích cấp, van hai lá đóng sớm thì tâm trương."
      ],
      vitals: [
        ["Nhiệt độ", "38,8 °C"],
        ["Huyết áp", "140/40"],
        ["Mạch", "116 l/ph"],
        ["Nhịp thở", "30 l/ph"],
        ["SpO2", "86% khí trời"]
      ],
      stem: "Biện pháp can thiệp nào sau đây bị CHỐNG CHỈ ĐỊNH TUYỆT ĐỐI trong hở van động mạch chủ cấp?",
      choices: [
        "Đặt bóng đối xung động mạch chủ (Intra-aortic Balloon Pump - IABP)",
        "Phẫu thuật thay van động mạch chủ cấp cứu",
        "Dùng thuốc giãn mạch Nitroprusside đường tĩnh mạch kết hợp Dobutamine",
        "Kháng sinh phổ rộng đường tĩnh mạch liều cao",
        "Thở máy không xâm nhập hoặc đặt nội khí quản hỗ trợ hô hấp"
      ],
      answer: 0,
      why: [
        "<b>Hở van động mạch chủ cấp (Acute Aortic Regurgitation)</b> gây trào ngược thể tích ồ ạt vào buồng thất trái chưa kịp giãn thích nghi, dẫn đến tăng vọt áp lực cuối tâm trương thất trái (LVEDP) gây đóng sớm van hai lá, phù phổi cấp và tụt cung lượng tim.",
        "<b>BÓNG ĐỐI XUNG ĐỘNG MẠCH CHỦ (IABP) BỊ CHỐNG CHỈ ĐỊNH TUYỆT ĐỐI</b> trong hở van động mạch chủ: Bóng IABP bơm căng trong thì tâm trương để tăng áp lực gốc động mạch chủ — điều này sẽ đẩy ngược một lượng máu khổng lồ qua lỗ van ĐMC bị hở vào lại thất trái, gây vỡ thất trái và tử vong ngay lập tức.",
        "Xử trí chuẩn: Dùng thuốc giãn mạch (Nitroprusside) + Vận mạch (Dobutamine) để giảm hậu tải và <b>Phẫu thuật thay van động mạch chủ cấp cứu</b>."
      ],
      wrongs: {
        1: "Phẫu thuật thay van cấp cứu là biện pháp sống còn duy nhất cứu bệnh nhân hở van ĐMC cấp có phù phổi/suy tuần hoàn.",
        2: "Thuốc giãn mạch Nitroprusside làm giảm hậu tải giúp dòng máu tống về phía trước thuận lợi hơn, giảm lượng máu trào ngược.",
        3: "Kháng sinh tĩnh mạch bắt buộc dùng ngay để kiểm soát nhiễm trùng máu do viêm nội tâm mạc.",
        4: "Hỗ trợ hô hấp là cần thiết để duy trì oxy máu khi bệnh nhân đang phù phổi cấp."
      },
      objective:
        "Hở van động mạch chủ cấp (áp lực mạch rộng, phù phổi cấp) có CHỐNG CHỈ ĐỊNH TUYỆT ĐỐI với bóng đối xung động mạch chủ (IABP) vì bóng bơm thì tâm trương làm tăng trào ngược máu gây tử vong; điều trị bằng phẫu thuật thay van cấp cứu."
    },

    {
      spec: "Tim mạch",
      task: "Bước chẩn đoán và xử trí",
      short: "Hẹp van hai lá hậu thấp và rung nhĩ",
      vignette: [
        "Nữ 42 tuổi nhập cư từ vùng dịch tễ thấp tim, đến khám vì khó thở khi gắng sức tăng dần và ho khạc đờm lẫn ít vệt máu khi làm việc nặng. Bệnh nhân có tiền sử sốt đau khớp hồi 10 tuổi.",
        "Khám tim: Tiếng T1 đanh, tiếng T2 mạnh ở đáy phổi, nghe thấy <b>tiếng clack mở van (opening snap) đi sau T2</b>, tiếp nối bằng <b>tiếng rung tâm trương âm sắc trầm ở mỏm tim</b>. Bệnh nhân có gò má tím hồng (mitral facies).",
        "Điện tâm đồ: Nhịp nhanh xoang kèm sóng P rộng hai đỉnh ở DII (P hai lá - P mitrale) và sóng P âm sâu ở V1, trục lệch phải. Siêu âm tim: Diện tích lỗ van hai lá 1,1 cm², van dày vôi hóa hình đầu gối (hockey-stick sign), chênh áp trung bình qua van 12 mm Hg."
      ],
      vitals: [
        ["Nhiệt độ", "36,8 °C"],
        ["Huyết áp", "115/75"],
        ["Mạch", "82 l/ph"],
        ["Nhịp thở", "18 l/ph"]
      ],
      stem: "Khoảng thời gian từ tiếng T2 đến tiếng clack mở van (A2-OS interval) phản ánh điều gì và can thiệp lựa chọn là gì?",
      choices: [
        "Khoảng A2-OS càng ngắn chứng tỏ hẹp van hai lá càng nặng (áp lực nhĩ trái càng cao); can thiệp nong van hai lá bằng bóng qua da (PMBC) nếu hình thái van phù hợp",
        "Khoảng A2-OS càng dài chứng tỏ hẹp van càng nặng; điều trị bằng kháng sinh Penicillin đơn độc",
        "Tiếng clack mở van chỉ xuất hiện khi có hở van hai lá nặng; điều trị bằng thuốc ức chế men chuyển",
        "Chỉ định mổ thay van tim ba lá cấp cứu",
        "Điều trị bằng thuốc chẹn kênh canxi Nifedipine liều cao"
      ],
      answer: 0,
      why: [
        "<b>Hẹp van hai lá do di chứng thấp tim (Rheumatic Mitral Stenosis)</b> đặc trưng bởi tiếng T1 đanh, <b>tiếng clack mở van (Opening Snap - OS)</b> và <b>rung tâm trương mỏm tim</b>.",
        "Ý nghĩa sinh lý: <b>Khoảng thời gian từ T2 (A2) đến tiếng Clack mở van (A2-OS interval) CÀNG NGẮN thì mức độ hẹp van hai lá CÀNG NẶNG</b>. Lý do: Hẹp càng nặng thì áp lực nhĩ trái càng cao, làm đẩy bung lá van hai lá mở ra sớm hơn ngay sau khi thất trái vừa đóng van ĐMC.",
        "Khi diện tích lỗ van ≤ 1,5 cm² có triệu chứng, can thiệp lựa chọn đầu tay là <b>Nong van hai lá bằng bóng qua da (Percutaneous Mitral Balloon Commissurotomy - PMBC)</b> nếu van mềm dẻo, không vôi hóa nhiều (điểm Wilkins < 8) và không có huyết khối nhĩ trái."
      ],
      wrongs: {
        1: "Khoảng A2-OS càng ngắn mới phản ánh hẹp nặng; Penicillin chỉ để phòng thấp tái phát, không chữa được lỗ van đã bị hẹp cơ học.",
        2: "Tiếng clack mở van là dấu hiệu đặc trưng của hẹp van hai lá còn mềm dẻo, không phải của hở van.",
        3: "Tổn thương nguyên phát là van hai lá, không phải van ba lá.",
        4: "Thuốc giãn mạch như Nifedipine không có vai trò và có thể gây nhịp nhanh phản xạ làm giảm thời gian đổ đầy tâm trương khiến ứ huyết phổi nặng hơn."
      },
      objective:
        "Hẹp van hai lá hậu thấp có khoảng A2-Opening Snap càng ngắn thì mức độ hẹp và áp lực nhĩ trái càng cao; điều trị can thiệp ưu tiên là nong van bằng bóng qua da (PMBC) khi van đủ điều kiện."
    },

    {
      spec: "Tim mạch",
      task: "Bước xử trí tiếp theo",
      short: "Hội chứng Brugada và phòng ngừa đột tử",
      vignette: [
        "Nam 32 tuổi gốc Đông Nam Á được người nhà đưa vào viện vì một cơn ngất đột ngột trong lúc đang ngủ vào ban đêm. Tiền sử gia đình có anh trai đột tử khi ngủ năm 29 tuổi.",
        "Điện tâm đồ 12 chuyển đạo ghi nhận: <b>ST chênh lên dạng vòm (coved-type) ≥ 2 mm ở các chuyển đạo trước tim phải V1, V2 tiếp nối bằng sóng T âm (Brugada Type 1 ECG pattern)</b>.",
        "Khám lâm sàng, siêu âm tim và chụp mạch vành hoàn toàn bình thường, không có bệnh tim thực tổn."
      ],
      vitals: [
        ["Nhiệt độ", "37,0 °C"],
        ["Huyết áp", "120/75"],
        ["Mạch", "68 l/ph"],
        ["Nhịp thở", "16 l/ph"]
      ],
      stem: "Phương pháp điều trị duy nhất được chứng minh ngăn ngừa đột tử do loạn nhịp tim ở bệnh nhân này là gì?",
      choices: [
        "Cấy máy phá rung tự động trong cơ thể (Implantable Cardioverter-Defibrillator - ICD)",
        "Điều trị duy trì bằng thuốc chống loạn nhịp nhóm IC (Flecainide)",
        "Uống thuốc chẹn beta giao cảm Atenolol liều cao suốt đời",
        "Phẫu thuật cắt thần kinh giao cảm ngực trái",
        "Không cần điều trị gì ngoài việc uống viên bổ sung Magnesi"
      ],
      answer: 0,
      why: [
        "Bệnh nhân mắc <b>Hội chứng Brugada</b> (đột biến kênh natri <i>SCN5A</i>) với <b>hình ảnh ECG Type 1 (ST chênh lên dạng vòm ≥ 2mm ở V1-V2)</b> kết hợp tiền sử ngất và tiền sử gia đình đột tử về đêm.",
        "Bệnh nhân có nguy cơ cực kỳ cao bị các cơn nhịp nhanh thất đa hình và rung thất dẫn đến đột tử trong khi ngủ.",
        "<b>Cấy máy phá rung tự động (ICD)</b> là <b>biện pháp duy nhất có hiệu quả chứng minh ngăn ngừa đột tử</b> ở bệnh nhân Brugada có triệu chứng ngất hoặc đã từng ngừng tuần hoàn được cứu sống.",
        "<b>CHỐNG CHỈ ĐỊNH DÙNG thuốc chống loạn nhịp nhóm IA và IC (Flecainide, Procainamide)</b> vì chúng ức chế thêm kênh natri làm bộc lộ hoặc làm nặng thêm cơn rung thất."
      ],
      wrongs: {
        1: "Flecainide là thuốc ức chế kênh natri, dùng làm test thử thách bộc lộ Brugada nhưng chống chỉ định điều trị vì gây rung thất tử vong.",
        2: "Chẹn beta không ngăn ngừa được đột tử trong Brugada và có thể làm tăng trương lực phó giao cảm ban đêm gây loạn nhịp.",
        3: "Cắt thần kinh giao cảm chỉ dùng trong hội chứng QT dài bẩm sinh kháng trị, không có vai trò trong Brugada.",
        4: "Bệnh nhân có nguy cơ đột tử rất cao, không thể chỉ theo dõi đơn thuần."
      },
      objective:
        "Hội chứng Brugada (ST chênh lên dạng vòm ở V1-V2) ở bệnh nhân có triệu chứng ngất có chỉ định bắt buộc cấy máy phá rung tự động (ICD) để phòng đột tử; chống chỉ định các thuốc ức chế kênh natri nhóm I."
    },

    {
      spec: "Tim mạch",
      task: "Bước xử trí tiếp theo",
      short: "Sốc tim do nhồi máu cơ tim diện rộng",
      vignette: [
        "Nam 68 tuổi nhập viện giờ thứ 3 vì nhồi máu cơ tim ST chênh lên thành trước rộng (tắc thân chung hoặc LAD đoạn gần).",
        "Khám: Bệnh nhân lơ mơ, da lạnh ẩm nổi vân tím, đầu chi tái, mạch nhanh nhỏ khó bắt. Thở nhanh 30 l/phút, phổi có đầy ran ẩm dâng lên tới 2/3 phế trường.",
        "Đo huyết áp: 72/45 mm Hg. Đặt catheter Swan-Ganz theo dõi huyết động: Áp lực mao mạch phổi bít <b>PCWP tăng cao 26 mm Hg</b> (bình thường 6–12), <b>Chỉ số tim (Cardiac Index - CI) giảm nặng 1,4 L/ph/m²</b> (bình thường 2,6–4,2), Sức cản mạch hệ thống (SVR) tăng cao 1.900 dynes.sec/cm5."
      ],
      vitals: [
        ["Nhiệt độ", "36,5 °C"],
        ["Huyết áp", "72/45"],
        ["Mạch", "125 l/ph"],
        ["Nhịp thở", "30 l/ph"],
        ["SpO2", "85% với oxy kính"]
      ],
      stem: "Bước xử trí hồi sức huyết động và can thiệp tái tưới máu tối ưu nhất là gì?",
      choices: [
        "Dùng thuốc vận mạch Norepinephrine kết hợp Dobutamine (hoặc IABP/Impella) và chuyển thẳng phòng Cathlab can thiệp mạch vành khẩn cấp (PCI)",
        "Truyền nhanh 2 lít dung dịch NaCl 0,9% tĩnh mạch",
        "Tiêm tĩnh mạch Labetalol để giảm tiêu thụ oxy cơ tim",
        "Tiêm Furosemide tĩnh mạch liều cao đơn độc và chuyển về khoa điều trị nội",
        "Chờ kết quả xét nghiệm men tim sau 6 giờ rồi mới quyết định can thiệp"
      ],
      answer: 0,
      why: [
        "Bệnh nhân có <b>Sốc tim (Cardiogenic Shock)</b> do suy bơm thất trái cấp sau nhồi máu cơ tim diện rộng: Huyết áp tụt (<90 mmHg), giảm tưới máu mô (lơ mơ, da lạnh nổi vân tím), <b>Chỉ số tim CI giảm sâu (< 2,2 L/ph/m²)</b> kèm <b>Áp lực đổ đầy thất trái PCWP tăng cao (> 18 mmHg)</b> và phù phổi cấp.",
        "Hồi sức huyết động: Dùng <b>Norepinephrine</b> (để nâng huyết áp trung bình đảm bảo tưới máu vành và não) phối hợp <b>Dobutamine</b> (tăng co bóp cơ tim) hoặc thiết bị hỗ trợ tuần hoàn cơ học (<b>IABP, Impella, ECMO</b>).",
        "Biện pháp quyết định sống còn: <b>Tái tưới máu mạch vành khẩn cấp bằng can thiệp qua da (Primary PCI)</b> càng sớm càng tốt (Nghiên cứu SHOCK trial chứng minh can thiệp tái tưới máu khẩn cấp giảm tỉ lệ tử vong rõ rệt so với điều trị nội khoa)."
      ],
      wrongs: {
        1: "Truyền dịch trong sốc tim khi PCWP đã 26 mmHg sẽ làm phù phổi cấp bùng nổ gây ngạt thở tử vong.",
        2: "Thuốc chẹn beta chống chỉ định tuyệt đối trong sốc tim vì làm giảm co bóp cơ tim và tụt huyết áp sâu hơn.",
        3: "Furosemide đơn độc không nâng được huyết áp và làm tụt thêm huyết áp nếu dùng trước khi nâng áp lực tưới máu.",
        4: "Trì hoãn can thiệp mạch vành sẽ khiến cơ tim hoại tử không hồi phục và tử vong nhanh chóng."
      },
      objective:
        "Sốc tim do nhồi máu cơ tim (CI giảm, PCWP tăng, tụt HA) đòi hỏi hỗ trợ tuần hoàn bằng vận mạch (Norepinephrine + Dobutamine) / thiết bị hỗ trợ cơ học (IABP/Impella) và can thiệp mạch vành khẩn cấp (Primary PCI)."
    },

    {
      spec: "Tim mạch",
      task: "Bước chẩn đoán và xử trí",
      short: "Hạ huyết áp tư thế ở bệnh nhân cao tuổi",
      vignette: [
        "Cụ bà 78 tuổi có tiền sử tăng huyết áp và đái tháo đường típ 2 15 năm, đến khám vì thường xuyên bị hoa mắt, tối sầm mặt mày và mất thăng bằng mỗi khi đứng dậy từ giường hoặc ghế ngồi, triệu chứng giảm dần khi ngồi hoặc nằm xuống.",
        "Đo huyết áp và mạch ở tư thế nằm nghỉ 5 phút: <b>Huyết áp 148/85 mm Hg, Mạch 72 l/phút</b>.",
        "Sau khi đứng dậy 2 phút: <b>Huyết áp tụt xuống 112/65 mm Hg (Huyết áp tâm thu giảm 36 mm Hg, tâm trương giảm 20 mm Hg), Mạch tăng nhẹ lên 76 l/phút</b> (không có nhịp nhanh phản xạ tương xứng)."
      ],
      vitals: [
        ["Nhiệt độ", "36,7 °C"],
        ["Huyết áp nằm", "148/85"],
        ["Huyết áp đứng", "112/65"],
        ["Mạch nằm", "72 l/ph"],
        ["Mạch đứng", "76 l/ph"]
      ],
      stem: "Chẩn đoán xác định và biện pháp xử trí không dùng thuốc ban đầu thích hợp nhất là gì?",
      choices: [
        "Hạ huyết áp tư thế do suy giảm phản xạ thần kinh thực vật (Neurogenic Orthostatic Hypotension); xử trí bằng rà soát ngừng/giảm liều thuốc hạ áp, tăng uống nước, mang tất áp lực và thay đổi tư thế từ từ",
        "Hội chứng nhịp nhanh tư thế đứng (POTS); điều trị bằng thuốc chẹn beta liều cao",
        "Cơn thiếu máu não thoáng qua hệ sống nền; điều trị bằng thuốc tiêu sợi huyết",
        "U tủy thượng thận; phẫu thuật cắt u",
        "Suy tuyến giáp; bổ sung Levothyroxine liều cao"
      ],
      answer: 0,
      why: [
        "Tiêu chuẩn chẩn đoán <b>Hạ huyết áp tư thế (Orthostatic Hypotension)</b>: Khi thay đổi từ tư thế nằm sang đứng trong vòng 3 phút, <b>Huyết áp tâm thu giảm ≥ 20 mm Hg VÀ/HOẶC Huyết áp tâm trương giảm ≥ 10 mm Hg</b>.",
        "Ở bệnh nhân này nhịp tim chỉ tăng 4 nhịp/phút (không có nhịp nhanh bù trừ), chỉ điểm <b>Bệnh lý thần kinh thực vật do đái tháo đường (Diabetic autonomic neuropathy)</b> làm mất phản xạ co mạch qua thụ thể áp lực xoang cảnh.",
        "Xử trí ban đầu: Rà soát và giảm liều các thuốc gây tụt áp (thuốc lợi tiểu, chẹn alpha, thuốc giãn mạch), uống đủ nước (1,5–2 L/ngày), mang tất áp lực chun ép chi dưới, tập gập cơ cẳng chân trước khi đứng. Nếu thất bại mới dùng thuốc vận mạch như <b>Fludrocortisone</b> (giữ muối nước) hoặc <b>Midodrine / Droxidopa</b> (chẹn alpha-1 ngoại vi)."
      ],
      wrongs: {
        1: "Hội chứng POTS gặp ở phụ nữ trẻ có nhịp tim tăng vọt >30 l/phút khi đứng mà KHÔNG bị tụt huyết áp.",
        2: "Triệu chứng xuất hiện rõ rệt theo tư thế đứng và hết khi nằm, không phải TIA hệ sống nền.",
        3: "U tủy thượng thận gây cơn tăng huyết áp kịch phát kèm vã mồ hôi và tim nhanh.",
        4: "Không có triệu chứng của suy giáp lâm sàng."
      },
      objective:
        "Hạ huyết áp tư thế (HA tâm thu giảm ≥20 hoặc tâm trương giảm ≥10 mmHg khi đứng) ở bệnh nhân đái tháo đường do suy thần kinh tự chủ; xử trí bằng rà soát thuốc, mang tất áp lực, tăng dịch và dùng Fludrocortisone/Midodrine nếu cần."
    },

    {
      spec: "Tim mạch",
      task: "Lựa chọn điều trị",
      short: "Hội chứng Dressler (Viêm màng ngoài tim sau nhồi máu cơ tim)",
      vignette: [
        "Nam 60 tuổi nhập viện vì sốt nhẹ 38,2 °C, đau ngực kiểu màng tim tăng khi hít sâu và mệt mỏi. Bệnh nhân có tiền sử nhồi máu cơ tim cấp thành trước rộng đã được can thiệp đặt stent <b>cách đây 4 tuần</b>.",
        "Khám: Nghe thấy tiếng cọ màng ngoài tim ở bờ trái xương ức. Không có khó thở khi nằm, không phù chân.",
        "Xét nghiệm: Bạch cầu 12.800/mm³, CRP tăng cao 45 mg/L, ESR 68 mm/h. Troponin I trong giới hạn bình thường. Điện tâm đồ: ST chênh lên lõm nhẹ lan tỏa ở các chuyển đạo. Siêu âm tim: Lớp dịch màng ngoài tim tự do dày 8 mm, không có chèn ép tim."
      ],
      vitals: [
        ["Nhiệt độ", "38,2 °C"],
        ["Huyết áp", "125/75"],
        ["Mạch", "86 l/ph"],
        ["Nhịp thở", "18 l/ph"]
      ],
      stem: "Chẩn đoán xác định và thuốc điều trị đầu tay thích hợp nhất cho bệnh nhân này là gì?",
      choices: [
        "Hội chứng Dressler (Viêm màng ngoài tim tự miễn muộn sau nhồi máu cơ tim); điều trị đầu tay bằng Aspirin liều cao kết hợp Colchicine",
        "Nhồi máu cơ tim tái phát do tắc lại stent; cần chụp mạch vành can thiệp khẩn cấp",
        "Viêm nội tâm mạc nhiễm khuẩn cấp; điều trị bằng Vancomycin tĩnh mạch",
        "Thuyên tắc phổi cấp; điều trị bằng thuốc tiêu sợi huyết",
        "Phình thất trái mạn tính; điều trị bằng phẫu thuật cắt túi phình"
      ],
      answer: 0,
      why: [
        "<b>Hội chứng Dressler (Post-cardiac injury syndrome / Post-MI pericarditis)</b> là phản ứng <b>viêm màng ngoài tim tự miễn</b> xuất hiện <b>2 đến 6 tuần sau nhồi máu cơ tim</b> (hoặc sau phẫu thuật tim hở) do cơ thể sinh tự kháng thể kháng lại kháng nguyên cơ tim giải phóng trong đợt hoại tử.",
        "Đặc trưng: Sốt, đau ngực màng tim, tiếng cọ màng tim, tăng chỉ số viêm (ESR, CRP) và tràn dịch màng ngoài tim.",
        "Điều trị đầu tay ưu tiên là <b>Aspirin liều cao (650–1000 mg mỗi 8 giờ) kết hợp Colchicine</b>. Ưu tiên dùng Aspirin hơn các NSAID khác (như Ibuprofen, Indomethacin) ở bệnh nhân mới nhồi máu cơ tim để tránh làm ảnh hưởng đến quá trình liền sẹo cơ tim và tránh tương tác với thuốc kháng kết tập tiểu cầu."
      ],
      wrongs: {
        1: "Troponin bình thường và đau ngực kiểu màng tim tăng khi hít sâu kèm sốt sau 4 tuần, không phải do tái tắc mạch vành.",
        2: "Không có tổn thương sùi van tim hay vi khuẩn huyết.",
        3: "Thuyên tắc phổi không gây tiếng cọ màng ngoài tim và tràn dịch màng ngoài tim trên siêu âm.",
        4: "Phình thất trái không gây sốt, tăng CRP và tiếng cọ màng tim lan tỏa."
      },
      objective:
        "Hội chứng Dressler là viêm màng ngoài tim tự miễn xuất hiện 2–6 tuần sau nhồi máu cơ tim (sốt, đau ngực kiểu màng tim, tăng ESR); điều trị đầu tay bằng Aspirin liều cao phối hợp Colchicine."
    },

    {
      spec: "Tim mạch",
      task: "Bước chẩn đoán tiếp theo",
      short: "Còn ống động mạch (PDA) ở người lớn và đảo shunt Eisenmenger",
      vignette: [
        "Nữ 28 tuổi đến khám vì mệt mỏi và khó thở khi gắng sức nhẹ. Người nhà nhận thấy <b>móng chân hai bên có tím tái và ngón chân dùi trống rõ rệt, trong khi hai bàn tay và móng tay hoàn toàn hồng hào bình thường (tím ngắt quãng / differential cyanosis)</b>.",
        "Khám tim: Tiếng T2 mạnh đanh ở đáy tim, nghe thấy <b>tiếng thổi liên tục (continuous machinery murmur) thô ráp ở khoang liên sườn 2 dưới xương đòn trái</b>.",
        "Siêu âm tim: Áp lực động mạch phổi tăng rất cao 85 mm Hg (tăng áp phổi nặng), luồng thông qua ống động mạch (PDA) đã đảo chiều từ Phải sang Trái."
      ],
      vitals: [
        ["Nhiệt độ", "36,8 °C"],
        ["Huyết áp", "120/70"],
        ["Mạch", "78 l/ph"],
        ["Nhịp thở", "20 l/ph"],
        ["SpO2 tay", "98%"],
        ["SpO2 chân", "84%"]
      ],
      stem: "Cơ chế nào giải thích hiện tượng tím chọn lọc ở hai chân mà không tím ở hai tay (Differential Cyanosis)?",
      choices: [
        "Ống động mạch (PDA) đổ máu nghèo oxy từ động mạch phổi vào động mạch chủ xuống ở vị trí SAU chỗ xuất phát của động mạch dưới đòn trái",
        "Tắc hoàn toàn động mạch chủ đoạn bụng dưới thận do mảng xơ vữa",
        "Hẹp eo động mạch chủ bẩm sinh kết hợp hẹp van hai lá",
        "Bệnh mạch máu co thắt Raynaud nặng ở chi dưới",
        "Tứ chứng Fallot kèm hẹp van động mạch phổi nặng"
      ],
      answer: 0,
      why: [
        "<b>Còn ống động mạch (Patent Ductus Arteriosus - PDA)</b> nối giữa quai động mạch chủ và động mạch phổi. Khi không được điều trị, luồng thông Trái - Phải kéo dài làm tăng áp động mạch phổi cố định dẫn đến <b>Hội chứng Eisenmenger (đảo shunt thành Phải - Trái)</b>.",
        "Vị trí giải phẫu: <b>Ống động mạch cắm vào động mạch chủ xuống ở vị trí ngay SAU chỗ chia nhánh của động mạch dưới đòn trái</b> (cấp máu cho hai tay và đầu mặt).",
        "Khi đảo shunt Phải -> Trái, dòng máu đen nghèo oxy từ thất phải đi qua PDA đổ vào động mạch chủ xuống, đi thẳng xuống nuôi nửa dưới cơ thể -> gây ra <b>Hiện tượng tím chọn lọc ở hai chi dưới kèm ngón chân dùi trống (Differential Cyanosis and Clubbing) trong khi hai tay và đầu mặt vẫn hồng hào</b> (SpO2 tay 98% vs SpO2 chân 84%).",
        "Khi đã có hội chứng Eisenmenger cố định, phẫu thuật đóng ống động mạch bị chống chỉ định vì sẽ gây suy thất phải cấp tử vong."
      ],
      wrongs: {
        1: "Tắc động mạch chủ bụng gây mất mạch bẹn và đau cách hồi chi dưới, không tạo ra tiếng thổi liên tục dưới đòn trái kèm tăng áp phổi.",
        2: "Hẹp eo động mạch chủ gây huyết áp tay cao hơn chân, nhưng không gây tím chọn lọc ở chân khi SpO2 bình thường.",
        3: "Hội chứng Raynaud gây đổi màu ngón tay theo lạnh, không liên quan đến đảo shunt PDA.",
        4: "Tứ chứng Fallot gây tím toàn thân đồng đều cả tay lẫn chân và đầu mặt."
      },
      objective:
        "PDA đảo shunt Eisenmenger gây hiện tượng tím chọn lọc ở chi dưới (Differential Cyanosis) do ống động mạch cắm vào ĐMC xuống sau nhánh động mạch dưới đòn trái; khi đã đảo shunt cố định thì chống chỉ định đóng ống động mạch."
    },

    {
      spec: "Tim mạch",
      task: "Bước chẩn đoán và xử trí",
      short: "Hở van hai lá mạn tính và chỉ định phẫu thuật",
      vignette: [
        "Nam 56 tuổi đến khám định kỳ. Bệnh nhân có tiền sử sa van hai lá nhiều năm, hiện tại hoàn toàn không có triệu chứng khó thở hay đau ngực, vẫn chơi tennis bình thường.",
        "Khám tim: Tiếng T1 mờ, tiếng T2 tách đôi rộng, nghe thấy <b>tiếng thổi toàn tâm thu 4/6 ở mỏm tim lan ra hố nách trái</b>.",
        "Siêu âm tim qua thành ngực: Hở van hai lá mức độ nặng (dòng hở trung tâm lớn, diện tích lỗ hở EROA 0,45 cm²). <b>Phân suất tống máu thất trái EF bắt đầu giảm còn 58%</b> (bình thường trong hở hai lá nặng EF phải > 60–65%) và <b>Đường kính cuối tâm thu thất trái (LVESD) giãn đạt 42 mm</b> (bình thường < 40 mm)."
      ],
      vitals: [
        ["Nhiệt độ", "36,7 °C"],
        ["Huyết áp", "125/75"],
        ["Mạch", "72 l/ph"],
        ["Nhịp thở", "16 l/ph"]
      ],
      stem: "Mặc dù bệnh nhân chưa có triệu chứng cơ năng, chỉ định can thiệp nào sau đây là đúng đắn nhất theo khuyến cáo AHA/ESC?",
      choices: [
        "Chỉ định phẫu thuật sửa van (hoặc thay van) hai lá ngay vì đã có bằng chứng suy chức năng thất trái tiềm tàng (EF ≤ 60% hoặc LVESD ≥ 40 mm)",
        "Tiếp tục theo dõi lâm sàng định kỳ mỗi 2 năm mà không cần can thiệp phẫu thuật vì bệnh nhân chưa có triệu chứng",
        "Điều trị nội khoa bằng thuốc ức chế men chuyển Enalapril liều cao đơn độc",
        "Dùng thuốc trợ tim Digoxin để cải thiện phân suất tống máu",
        "Chỉ định nong van hai lá bằng bóng qua da"
      ],
      answer: 0,
      why: [
        "Trong <b>Hở van hai lá mạn tính mức độ nặng (Severe Chronic Mitral Regurgitation)</b>, một phần thể tích tống máu được phụt ngược vào nhĩ trái (buồng có áp lực thấp trong thì tâm thu), làm giảm hậu tải giả tạo cho thất trái -> <b>Phân suất tống máu thất trái EF bình thường phải cao (> 65%)</b>.",
        "Khi <b>EF bắt đầu tụt xuống ≤ 60% HOẶC Đường kính cuối tâm thu thất trái LVESD giãn ≥ 40 mm</b>, đây là dấu hiệu cảnh báo <b>cơ tim thất trái đã bắt đầu suy giảm chức năng co bóp thực sự</b>.",
        "Theo khuyến cáo AHA/ACC và ESC: Bệnh nhân hở van hai lá nặng <b>DÙ CHƯA CÓ TRIỆU CHỨNG</b> nhưng khi có <b>EF ≤ 60% hoặc LVESD ≥ 40 mm</b> (hoặc rung nhĩ mới xuất hiện / tăng áp phổi >50 mmHg) thì <b>BẮT BUỘC PHẢI PHẪU THUẬT SỬA HOẶC THAY VAN HAI LÁ</b> ngay để ngăn ngừa suy tim không hồi phục."
      ],
      wrongs: {
        1: "Chờ đến khi xuất hiện triệu chứng lâm sàng thì cơ tim thất trái đã bị xơ hóa suy giảm chức năng không hồi phục, làm tăng tỉ lệ tử vong sau mổ.",
        2: "Điều trị nội khoa không làm chậm được tiến triển của hở hai lá do sa van cơ học và không thay thế được phẫu thuật.",
        3: "Digoxin không ngăn ngừa được giãn buồng tim và suy giảm chức năng thất trái.",
        4: "Nong van bằng bóng chỉ dùng cho HẸP van hai lá, chống chỉ định trong HỞ van hai lá."
      },
      objective:
        "Hở van hai lá mạn tính nặng dù chưa có triệu chứng vẫn có chỉ định phẫu thuật sửa/thay van khi có dấu hiệu suy chức năng thất trái tiềm tàng (EF ≤ 60% hoặc LVESD ≥ 40 mm) để bảo tồn cơ tim."
    }
  ]
};
