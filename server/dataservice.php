<?php
   $json = file_get_contents('php://input');
   $data = $json;

   print($data);
   file_put_contents('data.json', $data);

  /* $file = fopen('data.json','w+');
   fwrite($file, $data);
   fclose($file);*/
?>
