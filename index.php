<?php
$origin = isset($_SERVER['HTTP_ORIGIN'])? $_SERVER['HTTP_ORIGIN'] : '';   
$allow_origin = array( 
	'http://localhost:3000',
    'http://127.0.0.1:3000'
);  
if(in_array($origin, $allow_origin)){  
    header('Access-Control-Allow-Origin:'.$origin);       
}
header('Access-Control-Allow-Methods: PUT,POST,GET,DELETE,OPTIONS');
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Allow-Headers: Content-Type, Accept');
$err =['code'=>1001,'msg'=>'error'];
$obj = ['id'=>'222'];
if(!empty($_POST)) {
	$obj['type']='post';
	$pos = ['code'=>1002,'msg'=>$obj];
	echo json_encode($pos);return;
}
if(!empty($_GET)) {
	$obj['type']='get';
	$get = ['code'=>1002,'msg'=>$obj];
	echo json_encode($get);return;
}
echo json_encode($err);return;
//if(empty($_GET)) echo json_encode($err);return;
?>