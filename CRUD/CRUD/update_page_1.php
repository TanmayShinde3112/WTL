<?php include('header.php'); ?>
<?php include 'dbconn.php'; ?>

    <?php
    if(isset($_GET['id'])){
        $id = $_GET['id'];
        
        // $query = "SELECT * from students where id = $id";
        // $result = mysqli_query($conn,$query);
        
         $stmt = $conn->prepare("SELECT * FROM students WHERE id = ?");
         $stmt->bind_param("i", $id); 

        $stmt->execute();

        $result = $stmt->get_result();
        if(!$result){
            die("query failed".mysqli_error());
        }else{
            $row = $result->fetch_assoc(); 
        }
    }
    
    ?>

    <?php
        if(isset($_POST['update_students'])){
            if(isset($_GET['id_new'])){
                $idnew  = $_GET['id_new'];
            }
            $fname = $_POST['f_name'];
            $lname = $_POST['l_name'];
            $age = $_POST['age'];

            // $query = "update students set first_name = '$fname' , last_name = '$lname' , age = '$age' where 
            // id = '$idnew'";

             $stmt = $conn->prepare("UPDATE students SET first_name = ?, last_name = ?, age = ? WHERE id = ?");
            $stmt->bind_param("ssii", $fname, $lname, $age, $idnew);

            $result = $stmt->execute();

            if(!$result){
                die("query failed".mysqli_error());
            }else{
                header('location:index.php?update_msg=You have successfully updated the data.');
            }
        }
        $stmt->close();


    ?>
        <form action="update_page_1.php?id_new=<?php echo $id; ?>" method="post">
            <div class="form-group">
                <label for="f_name">First Name</label>
                <input type="text" name="f_name" class="form-control" value="<?php echo $row['first_name'];?>">
            </div>
            <div class="form-group">
                <label for="l_name">Last Name</label>
                <input type="text" name="l_name" class="form-control" value="<?php echo $row['last_name'];?>">
            </div>
            <div class="form-group">
                <label for="age">Age</label>
                <input type="text" name="age" class="form-control" value="<?php echo $row['age'];?>">
            </div>
            <input type="submit" class="btn btn-success" name="update_students" value="UPDATE"> 

            </form>

<?php include 'footer.php'; ?>