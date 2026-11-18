/* =========================================================
   ข้อมูลสื่อเผยแพร่ — ตอนนี้เป็นข้อมูลทดแทน
   ▸ ใส่สื่อจริง: เพิ่ม/แก้ใน MEDIA_ITEMS (cat ต้องตรงกับ id ใน MEDIA_CATS)
   ▸ อนาคตเปลี่ยนเป็นดึงจากฐานข้อมูล/API ได้ โดยไม่ต้องแก้หน้าเว็บ
   ========================================================= */
const MEDIA_CATS = [
  { id: 'edu',      label: 'สื่อให้ความรู้',          group: 'ความรู้', desc: 'อินโฟกราฟิกและบทความเรื่องผลิตภัณฑ์สุขภาพ' },
  { id: 'howto',    label: 'การสอน / การใช้งาน',     group: 'ความรู้', desc: 'วิดีโอและขั้นตอนการใช้ระบบตาไว' },
  { id: 'forms',    label: 'คู่มือ / แบบฟอร์มต่างๆ',  group: 'ความรู้', desc: 'ดาวน์โหลดคู่มือและเอกสารที่ใช้บ่อย' },
  { id: 'news',     label: 'ข่าว / ประชาสัมพันธ์',    group: 'ผลงาน',  desc: 'กิจกรรมและประกาศจากเครือข่าย' },
  { id: 'perf',     label: 'ผลการดำเนินงาน',         group: 'ผลงาน',  desc: 'สรุปผลการดำเนินงานของเครือข่าย' },
  { id: 'research', label: 'ผลงานวิจัย',             group: 'ผลงาน',  desc: 'งานวิจัยที่ใช้ข้อมูลจากระบบตาไว' }
];

const MEDIA_TYPES = [
  { id: 'all', label: 'ทั้งหมด' },
  { id: 'article', label: 'บทความ' },
  { id: 'video', label: 'วิดีโอ' },
  { id: 'image', label: 'รูปภาพ' },
  { id: 'doc', label: 'เอกสาร' }
];

const MEDIA_ITEMS = [
  { id: 1,  cat: 'edu',      type: 'image',   title: '[ชื่อสื่อความรู้ 1]', date: '[วันที่]' },
  { id: 2,  cat: 'news',     type: 'article', title: '[หัวข้อข่าว 1]',     date: '[วันที่]' },
  { id: 3,  cat: 'howto',    type: 'video',   title: '[ชื่อคลิปสอนใช้งาน 1]', date: '[วันที่]' },
  { id: 4,  cat: 'research', type: 'doc',     title: '[ชื่องานวิจัย 1]',    date: '[ปี]' },
  { id: 5,  cat: 'edu',      type: 'article', title: '[ชื่อบทความความรู้ 1]', date: '[วันที่]' },
  { id: 6,  cat: 'forms',    type: 'doc',     title: '[ชื่อคู่มือ 1]',       date: '[วันที่]' },
  { id: 7,  cat: 'perf',     type: 'doc',     title: '[รายงานผลการดำเนินงาน ปี ...]', date: '[ปี]' },
  { id: 8,  cat: 'news',     type: 'image',   title: '[หัวข้อกิจกรรม 1]',   date: '[วันที่]' },
  { id: 9,  cat: 'howto',    type: 'video',   title: '[ชื่อคลิปสอนใช้งาน 2]', date: '[วันที่]' },
  { id: 10, cat: 'forms',    type: 'doc',     title: '[ชื่อแบบฟอร์ม 1]',    date: '[วันที่]' },
  { id: 11, cat: 'research', type: 'article', title: '[ชื่องานวิจัย 2]',    date: '[ปี]' },
  { id: 12, cat: 'edu',      type: 'video',   title: '[ชื่อคลิปความรู้ 1]',  date: '[วันที่]' }
];
