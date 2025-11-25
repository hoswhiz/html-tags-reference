// داده های تگ های HTML
const htmlTags = [
  {
    tag: "&lt;!DOCTYPE&gt;",
    usage: "تعیین نوع سند و نسخه HTML برای مرورگر",
    popularity: 100,
  },
  {
    tag: "&lt;html&gt;",
    usage: "ریشه و کانتینر اصلی تمام محتوای صفحه",
    popularity: 100,
  },
  {
    tag: "&lt;head&gt;",
    usage: "حاوی متادیتا و اطلاعات درباره سند",
    popularity: 100,
  },
  {
    tag: "&lt;title&gt;",
    usage: "تعیین عنوان صفحه که در تب مرورگر نمایش داده می‌شود",
    popularity: 100,
  },
  {
    tag: "&lt;body&gt;",
    usage: "حاوی تمام محتوای قابل مشاهده صفحه",
    popularity: 100,
  },
  {
    tag: "&lt;h1&gt; to &lt;h6&gt;",
    usage: "تعریف سرتیترها از مهمترین (h1) تا کم‌اهمیت‌ترین (h6)",
    popularity: 100,
  },
  { tag: "&lt;p&gt;", usage: "ایجاد یک پاراگراف", popularity: 100 },
  { tag: "&lt;a&gt;", usage: "ایجاد هایپرلینک", popularity: 100 },
  { tag: "&lt;img /&gt;", usage: "نمایش تصویر (تگ تکی)", popularity: 100 },
  {
    tag: "&lt;div&gt;",
    usage: "کانتینر برای گروه‌بندی و استایل‌دهی عناصر",
    popularity: 99,
  },
  {
    tag: "&lt;span&gt;",
    usage: "کانتینر اینلاین برای متن و استایل‌دهی",
    popularity: 98,
  },
  {
    tag: "&lt;ul&gt;",
    usage: "ایجاد لیست نامرتب (غیرشماره‌ای)",
    popularity: 98,
  },
  {
    tag: "&lt;ol&gt;",
    usage: "ایجاد لیست مرتب (شماره‌ای یا حروفی)",
    popularity: 95,
  },
  {
    tag: "&lt;li&gt;",
    usage: "تعریف یک آیتم در لیست (درون &lt;ul&gt; یا &lt;ol&gt;)",
    popularity: 98,
  },
  {
    tag: "&lt;br /&gt;",
    usage: "شکستن خط و رفتن به خط جدید (تگ تکی)",
    popularity: 99,
  },
  {
    tag: "&lt;hr /&gt;",
    usage: "ایجاد یک خط افقی برای جداسازی بصری (تگ تکی)",
    popularity: 85,
  },
  { tag: "&lt;table&gt;", usage: "ایجاد جدول", popularity: 90 },
  { tag: "&lt;tr&gt;", usage: "تعریف سطر در جدول", popularity: 90 },
  { tag: "&lt;td&gt;", usage: "تعریف سلول داده در جدول", popularity: 90 },
  { tag: "&lt;th&gt;", usage: "تعریف سلول هدر در جدول", popularity: 90 },
  {
    tag: "&lt;form&gt;",
    usage: "ایجاد فرم برای جمع‌آوری اطلاعات کاربر",
    popularity: 95,
  },
  { tag: "&lt;input&gt;", usage: "ایجاد فیلد ورودی کاربر", popularity: 98 },
  { tag: "&lt;textarea&gt;", usage: "ایجاد ناحیه متن چندخطی", popularity: 90 },
  { tag: "&lt;button&gt;", usage: "ایجاد دکمه قابل کلیک", popularity: 97 },
  { tag: "&lt;select&gt;", usage: "ایجاد لیست dropdown", popularity: 90 },
  {
    tag: "&lt;option&gt;",
    usage: "تعریف گزینه در لیست dropdown",
    popularity: 90,
  },
  { tag: "&lt;label&gt;", usage: "برچسب برای عناصر فرم", popularity: 92 },
  {
    tag: "&lt;fieldset&gt;",
    usage: "گروه‌بندی عناصر مرتبط در فرم",
    popularity: 70,
  },
  { tag: "&lt;legend&gt;", usage: "عنوان برای fieldset", popularity: 70 },
  { tag: "&lt;style&gt;", usage: "تعریف استایل CSS درون سند", popularity: 85 },
  {
    tag: "&lt;script&gt;",
    usage: "تعریف یا اتصال کد JavaScript",
    popularity: 95,
  },
  {
    tag: "&lt;meta /&gt;",
    usage: "تعریف متادیتا درباره سند (تگ تکی)",
    popularity: 100,
  },
  {
    tag: "&lt;link /&gt;",
    usage: "اتصال فایل‌های خارجی مانند CSS (تگ تکی)",
    popularity: 100,
  },
  { tag: "&lt;header&gt;", usage: "تعریف هدر برای سند یا بخش", popularity: 85 },
  {
    tag: "&lt;footer&gt;",
    usage: "تعریف فوتر برای سند یا بخش",
    popularity: 85,
  },
  { tag: "&lt;nav&gt;", usage: "تعریف ناوبری صفحه", popularity: 80 },
  { tag: "&lt;section&gt;", usage: "تعریف بخش در سند", popularity: 80 },
  { tag: "&lt;article&gt;", usage: "تعریف محتوای مستقل", popularity: 75 },
  { tag: "&lt;aside&gt;", usage: "تعریف محتوای جانبی", popularity: 70 },
  { tag: "&lt;main&gt;", usage: "تعریف محتوای اصلی سند", popularity: 80 },
  {
    tag: "&lt;figure&gt;",
    usage: "تعریف محتوای self-contained مانند عکس",
    popularity: 65,
  },
  {
    tag: "&lt;figcaption&gt;",
    usage: "تعریف عنوان برای figure",
    popularity: 65,
  },
  { tag: "&lt;mark&gt;", usage: "هایلایت کردن متن", popularity: 60 },
  { tag: "&lt;time&gt;", usage: "تعریف زمان یا تاریخ", popularity: 50 },
  { tag: "&lt;audio&gt;", usage: "تعریف محتوای صوتی", popularity: 70 },
  { tag: "&lt;video&gt;", usage: "تعریف محتوای ویدیویی", popularity: 75 },
  {
    tag: "&lt;source&gt;",
    usage: "تعریف منابع چندگانه برای media elements",
    popularity: 65,
  },
  {
    tag: "&lt;canvas&gt;",
    usage: "رسم گرافیک از طریق JavaScript",
    popularity: 60,
  },
  { tag: "&lt;svg&gt;", usage: "رسم گرافیک برداری", popularity: 55 },
  {
    tag: "&lt;iframe&gt;",
    usage: "جاسازی سند دیگر در صفحه فعلی",
    popularity: 75,
  },
  { tag: "&lt;object&gt;", usage: "جاسازی object خارجی", popularity: 40 },
  { tag: "&lt;embed&gt;", usage: "جاسازی محتوای تعاملی خارجی", popularity: 45 },
  {
    tag: "&lt;map&gt;",
    usage: "تعریف نقشه تصویر قابل کلیک (Image Map)",
    popularity: 15,
  },
  {
    tag: "&lt;area /&gt;",
    usage: "تعریف نواحی قابل کلیک درون نقشه تصویر (تگ تکی)",
    popularity: 12,
  },
  {
    tag: "&lt;dl&gt;",
    usage: "ایجاد لیست تعریف (مانند لغتنامه)",
    popularity: 70,
  },
  {
    tag: "&lt;dt&gt;",
    usage: "تعریف عنوان مورد در لیست تعریف (&lt;dl&gt;)",
    popularity: 70,
  },
  {
    tag: "&lt;dd&gt;",
    usage: "تعریف توضیحات مورد در لیست تعریف (&lt;dl&gt;)",
    popularity: 70,
  },
  {
    tag: "&lt;menu&gt;",
    usage: "ایجاد منوی ابزار یا زمینه‌ای (کاربرد جدید در HTML5)",
    popularity: 30,
  },
  {
    tag: "&lt;dir&gt;",
    usage: "ایجاد لیست دایرکتوری (منسوخ شده - استفاده نکنید)",
    popularity: 1,
  },
];

// مرتب سازی اولیه بر اساس محبوبیت
let sortedTags = [...htmlTags].sort((a, b) => b.popularity - a.popularity);

// تابع برای نمایش داده ها در جدول
function renderTable(data) {
  const tableBody = document.getElementById("tableBody");
  tableBody.innerHTML = "";

  if (data.length === 0) {
    tableBody.innerHTML =
      '<tr><td colspan="3" class="no-results">نتیجه‌ای یافت نشد</td></tr>';
    return;
  }

  data.forEach((item) => {
    const row = document.createElement("tr");
    row.innerHTML = `
            <td><span class="tag">${item.tag}</span></td>
            <td>${item.usage}</td>
            <td>
                <div style="font-weight: bold; font-size: 1.1rem;">${item.popularity}%</div>
                <div class="usage-bar"><div class="usage-fill" style="width: ${item.popularity}%"></div></div>
            </td>
        `;
    tableBody.appendChild(row);
  });
}

// تابع برای جستجو
function searchTags() {
  const searchTerm = document.getElementById("searchInput").value.toLowerCase();
  const filteredTags = htmlTags.filter(
    (item) =>
      item.tag.toLowerCase().includes(searchTerm) ||
      item.usage.toLowerCase().includes(searchTerm)
  );
  renderTable(filteredTags);
}

// تابع برای مرتب سازی
function sortTable(columnIndex) {
  if (columnIndex === 0) {
    // مرتب سازی بر اساس تگ
    sortedTags.sort((a, b) => a.tag.localeCompare(b.tag));
  } else if (columnIndex === 1) {
    // مرتب سازی بر اساس کاربرد
    sortedTags.sort((a, b) => a.usage.localeCompare(b.usage));
  } else if (columnIndex === 2) {
    // مرتب سازی بر اساس محبوبیت
    sortedTags.sort((a, b) => b.popularity - a.popularity);
  }
  renderTable(sortedTags);
}

// اضافه کردن event listener به هدرهای جدول
document.querySelectorAll("th").forEach((th, index) => {
  th.addEventListener("click", () => sortTable(index));
});

// رویداد جستجو
document.getElementById("searchInput").addEventListener("input", searchTags);

// نمایش اولیه جدول
renderTable(sortedTags);
