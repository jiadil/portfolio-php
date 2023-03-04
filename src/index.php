<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- Unicorns CSS Script -->
    <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.0/css/line.css">

    <!-- style.css CSS Script -->
    <link rel="stylesheet" href="/style.css">




    <!--==================== SWIPER CSS ====================-->
    <link rel="stylesheet" href="/swiper-bundle.min.css" />

    
    <title>Jiadi Luo</title>

    
    
</head>
<body>
    <header class="header scroll-header" id="header">
    <?php
    include("./content/navbar.php");
    ?>
    </header>

    <main class="main">
    <?php
    include("./content/main.php");
    ?>
    </main>

    <footer class="footer">
    <?php
    echo include("./content/footer.php");
    ?>
    </footer>


    <!--==================== SCROLL TOP ====================-->
    <a href="#" class="scrollup" id="scroll-up">
      <i class="uil uil-arrow-up scrollup__icon"></i>
    </a>


    <!--==================== SWIPER JS ====================-->
    <script src="js/swiper-bundle.min.js"></script>

    <!-- iconfont JS -->
    <script src="js/iconfont.js"></script>
    <!-- jquery -->
    <script src="https://apps.bdimg.com/libs/jquery/2.1.4/jquery.min.js"></script>
    <script src="js/jquery.i18n.min.js"></script>
    <!--==================== MAIN JS ====================-->
    <script src="js/main.js"></script>

    <!-- translate JS -->
    <script src="js/cn-en-translate.js"></script>
    


   
</body>
</html>