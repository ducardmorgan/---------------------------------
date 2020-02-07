<?php
	
	$date = date("Y")*1;
	$year = $_REQUEST['year']*1;
	$fio = $_REQUEST['fio'];
	$date = $date - $year;
	echo json_encode(array("year"=>$year,"date"=>$date,"fio"=>$fio));
?>