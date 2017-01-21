<?php

	$access_token = "EAAYUNAeeE8sBAPzCzpaCxQxa2217AR6YckpwNeQkP9U3nB3jDi5ML18344bXdki20I6Wr7Mrws0VIZCeUJmzEZAgqmWIAu2zlTBfwaxoPCVXZCvPBWutvaD55IYoNN8qXj7ZCRocqitziNnvCsSNKKk2HoTG0smnGPSiKxRO0QZDZD";
	$verify_token = "fb_time_bot";
	$hub_verify_token = null;
 
	if(isset($_REQUEST['hub_challenge'])) {
		$challenge = $_REQUEST['hub_challenge'];
		$hub_verify_token = $_REQUEST['hub_verify_token'];
	}
 
 
	if ($hub_verify_token === $verify_token) {
		echo $challenge;
	}
?>