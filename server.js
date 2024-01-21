const express = require("express");
const mysql = require("mysql");

const app = express();
const port = 3000;

const connection = mysql.createConnection({
  host: "13.209.142.175",
  user: "root",
  password: "Xptmxm1212!@",
  database: "final",
});

connection.connect();

// 기본 라우트
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// MySQL에서 데이터를 가져오는 라우트
app.get("/Lecture", (req, res) => {
  const query = "SELECT * FROM Lecture";

  connection.query(query, (error, results, fields) => {
    if (error) throw error;

    // MySQL 결과를 JSON으로 변환
    const jsonData = JSON.stringify(results);

    // JSON 응답 전송
    res.send(jsonData);
  });
});

// MySQL에서 데이터를 가져오는 라우트
app.get("/dataLectureroom", (req, res) => {
  const query = "SELECT * FROM Lecture_room";

  connection.query(query, (error, results, fields) => {
    if (error) throw error;

    // MySQL 결과를 JSON으로 변환
    const jsonData = JSON.stringify(results);

    // JSON 응답 전송
    res.send(jsonData);
  });
});

// MySQL에서 데이터를 가져오는 라우트
// 2개 테이블 조인(Lecture, Lecture_time)
app.get("/LectureTime", (req, res) => {
  const query =
    "SELECT B.classroom_code, B.credit, B.instructor_name, B.lecture_id, B.lecture_division, B.lecture_name, A.day, date_format(A.start, '%H:%i') as start, date_format(A.end, '%H:%i') as end FROM Lecture_time A JOIN Lecture B ON A.lecture_id=B.lecture_id AND A.lecture_division=B.lecture_division WHERE CASE WHEN DAYOFWEEK(NOW()) = 1 THEN '일' WHEN DAYOFWEEK(NOW()) = 2 THEN '월' WHEN DAYOFWEEK(NOW()) = 3 THEN '화' WHEN DAYOFWEEK(NOW()) = 4 THEN '수' WHEN DAYOFWEEK(NOW()) = 5 THEN '목' WHEN DAYOFWEEK(NOW()) = 6 THEN '금' WHEN DAYOFWEEK(NOW()) = 7 THEN '토' END = A.day ORDER BY start";

  connection.query(query, (error, results, fields) => {
    if (error) throw error;

    // MySQL 결과를 JSON으로 변환
    const jsonData = JSON.stringify(results);

    // JSON 응답 전송
    res.send(jsonData);
  });
});

// MySQL에서 데이터를 가져오는 라우트
// 3테이블 조인(Lecture, Lecture_time, Lectuer_time), 현재 일자, 현재 시간 기준
app.get("/LectureTimeroom", (req, res) => {
  const query =
    "SELECT C.additional_info, C.building_name, C.room_number, B.classroom_code, B.credit, B.instructor_name, B.lecture_id, B.lecture_division, B.lecture_name, A.day, date_format(A.start, '%H:%i') as start, date_format(A.end, '%H:%i') as end FROM Lecture_time A JOIN Lecture B ON A.lecture_id=B.lecture_id AND A.lecture_division=B.lecture_division join final.Lecture_room C on B.classroom_code=C.classroom_code WHERE TIME(NOW()) BETWEEN start AND end and CASE WHEN DAYOFWEEK(NOW()) = 1 THEN '일' WHEN DAYOFWEEK(NOW()) = 2 THEN '월' WHEN DAYOFWEEK(NOW()) = 3 THEN '화' WHEN DAYOFWEEK(NOW()) = 4 THEN '수' WHEN DAYOFWEEK(NOW()) = 5 THEN '목' WHEN DAYOFWEEK(NOW()) = 6 THEN '금' WHEN DAYOFWEEK(NOW()) = 7 THEN '토' END = A.day ORDER BY start";

  connection.query(query, (error, results, fields) => {
    if (error) throw error;

    // MySQL 결과를 JSON으로 변환
    const jsonData = JSON.stringify(results);

    // JSON 응답 전송
    res.send(jsonData);
  });
});

// MySQL에서 데이터를 가져오는 라우트
// 3테이블 조인(Lecture, Lecture_time, Lectuer_time)
app.get("/LectureTimeroomAll", (req, res) => {
  const query =
    "SELECT C.additional_info, C.building_name, C.room_number, B.classroom_code, B.credit, B.instructor_name, B.lecture_id, B.lecture_division, B.lecture_name, A.day, Hour(A.start) as starthour, MINUTE(A.start) as startmin, Hour(A.end) as endhour, MINUTE(A.end) as endmin FROM Lecture_time A JOIN Lecture B ON A.lecture_id=B.lecture_id AND A.lecture_division=B.lecture_division join final.Lecture_room C on B.classroom_code=C.classroom_code";

  connection.query(query, (error, results, fields) => {
    if (error) throw error;

    // MySQL 결과를 JSON으로 변환
    const jsonData = JSON.stringify(results);

    // JSON 응답 전송
    res.send(jsonData);
  });
});

// MySQL에서 데이터를 가져오는 라우트
app.get("/timetable", (req, res) => {
  const query =
    "SELECT B.classroom_code, B.lecture_id, B.lecture_division, B.lecture_name, B.instructor_name, B.credit, B.capacity, C.day, Hour(C.start) as starthour, MINUTE(C.start) as startmin, Hour(C.end) as endhour, MINUTE(C.end) as endmin FROM final.Timetable A join Lecture B on A.lecture_id = B.lecture_id and A.lecture_division=B.lecture_division join Lecture_time C on B.lecture_id = C.lecture_id and B.lecture_division = C.lecture_division";

  connection.query(query, (error, results, fields) => {
    if (error) throw error;

    // MySQL 결과를 JSON으로 변환
    const jsonData = JSON.stringify(results);

    // JSON 응답 전송
    res.send(jsonData);
  });
});

// MySQL에서 데이터를 가져오는 라우트
app.get("/nextLecture", (req, res) => {
  const query =
    "SELECT B.classroom_code, B.lecture_id, B.lecture_division, B.lecture_name, B.instructor_name, B.credit, B.capacity, C.day, Hour(C.start) as starthour, MINUTE(C.start) as startmin FROM final.Timetable A join Lecture B on A.lecture_id = B.lecture_id and A.lecture_division=B.lecture_division join Lecture_time C on B.lecture_id = C.lecture_id and B.lecture_division = C.lecture_division WHERE TIME(NOW()) < C.start and CASE WHEN DAYOFWEEK(NOW()) = 1 THEN '일' WHEN DAYOFWEEK(NOW()) = 2 THEN '월' WHEN DAYOFWEEK(NOW()) = 3 THEN '화' WHEN DAYOFWEEK(NOW()) = 4 THEN '수' WHEN DAYOFWEEK(NOW()) = 5 THEN '목' WHEN DAYOFWEEK(NOW()) = 6 THEN '금' WHEN DAYOFWEEK(NOW()) = 7 THEN '토' END = C.day order by start limit 1";

  connection.query(query, (error, results, fields) => {
    if (error) throw error;

    // MySQL 결과를 JSON으로 변환
    const jsonData = JSON.stringify(results);

    // JSON 응답 전송
    res.send(jsonData);
  });
});

const server = app.listen(port, () => {
  const host = server.address().address;
  const port = server.address().port;
  console.log(`Server is running on http://${host}:${port}`);
});
