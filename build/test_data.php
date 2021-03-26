<?php
// отключаем проверку CORS
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: *');
header('Access-Control-Allow-Headers: *');
// header('Content-Type: text/html; charset=utf-8');
// header('Access-Control-Allow-Headers: content-type');
header( "Content-type: application/json" );

 mb_internal_encoding ("utf-8");

  $arr = [
        [ 'name' => 'Тест #1',
          'description' => 'Описание теста #1',
          'answer1'  => 1,
          'answer2'  => 2,
          'answer3'  => 3,
          'answer4'  => 4,
          'answer5'  => 5,
        ],
        [ 'name' => 'Тест #2',
          'description' => 'Описание теста #2',
          'answer1'  => 1,
          'answer2'  => 2,
          'answer3'  => 3,
          'answer4'  => 4,
          'answer5'  => 5,
        ],
        [ 'name' => 'Тест #3',
          'description' => 'Описание теста #3',
          'answer1'  => 1,
          'answer2'  => 2,
          'answer3'  => 3,
          'answer4'  => 4,
          'answer5'  => 5,
        ],
        [ 'name' => 'Тест #4',
          'description' => 'Описание теста #4',
          'answer1'  => 1,
          'answer2'  => 2,
          'answer3'  => 3,
          'answer4'  => 4,
          'answer5'  => 5,
        ],
        [ 'name' => 'Тест #5',
          'description' => 'Описание теста #5',
          'answer1'  => 1,
          'answer2'  => 2,
          'answer3'  => 3,
          'answer4'  => 4,
          'answer5'  => 5,
        ],

     ];

$data_json = json_encode($arr);
echo $data_json;

?>
