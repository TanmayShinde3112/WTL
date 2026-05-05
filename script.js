<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8" />
    <title>title</title>
</head>
<body>
    <script>
        const attendance = [
    { name: "Prasad", status: "present" },
    { name: "harshad", status: "present" },
    { name: "tanmay", status: "present" },
    { name: "vaibhav", status: "present" },
    { name: "Om", status: "absent" }
];

const pcount = attendance.filter(student => student.status == "present").length;

console.log("no of present stud:", pcount);


</script>



</body>
</html>