function color() { 
	if ($("#box1:checked").val() == "on")
	{
		$("#1").css("color", "red");
	} else ($("#1").css("color", "black"))
	if ($("#box2:checked").val() == "on")
	{
		$("#2").css("color", "green");
	} else ($("#2").css("color", "black"))
	if ($("#box3:checked").val() == "on")
	{
		$("#3").css("color", "blue");
	} else ($("#3").css("color", "black"))
}